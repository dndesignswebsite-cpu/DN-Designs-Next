/**
 * Contact Controller Tests
 * Unit tests for contact form endpoints
 */

import { jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from '../../config/database.js';
import contactRoutes from '../../routes/contactRoutes.js';
import { cleanupDatabase, createTestAdmin, createTestContact, getAuthToken } from '../helpers/testHelpers.js';
import Contact from '../../models/Contact.js';

// Create Express app for testing
const app = express();
app.use(express.json());
app.use('/api/contact', contactRoutes);

// Connect to test database
beforeAll(async () => {
  process.env.MONGODB_URI = process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/dn-designs-test';
  await connectDB();
});

beforeEach(async () => {
  await cleanupDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Contact Controller', () => {
  describe('POST /api/contact', () => {
    it('should create contact submission', async () => {
      const contactData = {
        name: 'John Doe',
        email: 'john@example.com',
        mobile: '+1234567890',
        message: 'I am interested in your services',
      };

      const response = await request(app)
        .post('/api/contact')
        .send(contactData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(contactData.name);
      expect(response.body.data.email).toBe(contactData.email);
      expect(response.body.data.status).toBe('new');
    });

    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({ name: 'John' }) // Missing required fields
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it('should validate email format', async () => {
      const contactData = {
        name: 'John Doe',
        email: 'invalid-email',
        mobile: '+1234567890',
        message: 'Test message',
      };

      const response = await request(app)
        .post('/api/contact')
        .send(contactData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it('should store IP address', async () => {
      const contactData = {
        name: 'John Doe',
        email: 'john@example.com',
        mobile: '+1234567890',
        message: 'Test message',
      };

      const response = await request(app)
        .post('/api/contact')
        .send(contactData)
        .expect(201);

      const contact = await Contact.findById(response.body.data._id);
      expect(contact.ipAddress).toBeDefined();
    });
  });

  describe('GET /api/contact', () => {
    it('should get all contacts for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestContact({ name: 'Contact 1' });
      await createTestContact({ name: 'Contact 2' });

      const response = await request(app)
        .get('/api/contact')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBeGreaterThanOrEqual(2);
    });

    it('should not get contacts for non-admin', async () => {
      const response = await request(app)
        .get('/api/contact')
        .expect(401);

      expect(response.body.success).toBe(false);
    });

    it('should filter contacts by status', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestContact({ name: 'New Contact', status: 'new' });
      await createTestContact({ name: 'Read Contact', status: 'read' });

      const response = await request(app)
        .get('/api/contact?status=new')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.data.length).toBe(1);
      expect(response.body.data[0].status).toBe('new');
    });

    it('should paginate contacts', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      // Create multiple contacts
      for (let i = 0; i < 15; i++) {
        await createTestContact({ name: `Contact ${i}` });
      }

      const response = await request(app)
        .get('/api/contact?page=1&limit=10')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.data.length).toBe(10);
      expect(response.body.page).toBe(1);
    });
  });

  describe('GET /api/contact/:id', () => {
    it('should get contact by ID for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const contact = await createTestContact();

      const response = await request(app)
        .get(`/api/contact/${contact._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(contact.name);
    });

    it('should mark contact as read when status is new', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const contact = await createTestContact({ status: 'new' });

      expect(contact.status).toBe('new');

      await request(app)
        .get(`/api/contact/${contact._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      const updatedContact = await Contact.findById(contact._id);
      expect(updatedContact.status).toBe('read');
    });

    it('should not get contact for non-admin', async () => {
      const contact = await createTestContact();

      const response = await request(app)
        .get(`/api/contact/${contact._id}`)
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe('PUT /api/contact/:id', () => {
    it('should update contact for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const contact = await createTestContact();

      const updateData = {
        status: 'replied',
        adminNotes: 'Customer responded positively',
      };

      const response = await request(app)
        .put(`/api/contact/${contact._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.status).toBe(updateData.status);
      expect(response.body.data.adminNotes).toBe(updateData.adminNotes);
    });

    it('should not update contact for non-admin', async () => {
      const contact = await createTestContact();

      const response = await request(app)
        .put(`/api/contact/${contact._id}`)
        .send({ status: 'replied' })
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe('DELETE /api/contact/:id', () => {
    it('should delete contact for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const contact = await createTestContact();

      const response = await request(app)
        .delete(`/api/contact/${contact._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);

      // Verify contact is deleted
      const deletedContact = await Contact.findById(contact._id);
      expect(deletedContact).toBeNull();
    });

    it('should not delete contact for non-admin', async () => {
      const contact = await createTestContact();

      const response = await request(app)
        .delete(`/api/contact/${contact._id}`)
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/contact/stats/summary', () => {
    it('should get contact statistics for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestContact({ status: 'new' });
      await createTestContact({ status: 'read' });
      await createTestContact({ status: 'replied' });
      await createTestContact({ status: 'resolved' });

      const response = await request(app)
        .get('/api/contact/stats/summary')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.total).toBeGreaterThanOrEqual(4);
      expect(response.body.data.new).toBeGreaterThanOrEqual(1);
      expect(response.body.data.read).toBeGreaterThanOrEqual(1);
      expect(response.body.data.replied).toBeGreaterThanOrEqual(1);
      expect(response.body.data.resolved).toBeGreaterThanOrEqual(1);
    });

    it('should not get statistics for non-admin', async () => {
      const response = await request(app)
        .get('/api/contact/stats/summary')
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });
});

