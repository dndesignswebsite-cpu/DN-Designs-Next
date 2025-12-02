/**
 * Authentication Controller Tests
 * Unit tests for authentication endpoints
 */

import { jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from '../../config/database.js';
import authRoutes from '../../routes/authRoutes.js';
import { cleanupDatabase, createTestUser, createTestAdmin, getAuthToken } from '../helpers/testHelpers.js';
import User from '../../models/User.js';

// Create Express app for testing
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

// Connect to test database
beforeAll(async () => {
  // Use a test database
  process.env.MONGODB_URI = process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/dn-designs-test';
  await connectDB();
});

// Clean up database before each test
beforeEach(async () => {
  await cleanupDatabase();
});

// Close database connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Authentication Controller', () => {
  describe('POST /api/auth/register', () => {
    it('should register a new user successfully', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.token).toBeDefined();
      expect(response.body.user.email).toBe(userData.email);
      expect(response.body.user.name).toBe(userData.name);
      expect(response.body.user.password).toBeUndefined(); // Password should not be in response
    });

    it('should not register user with duplicate email', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      // Create first user
      await createTestUser({ email: userData.email });

      // Try to register with same email
      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('already exists');
    });

    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({ name: 'John' }) // Missing email and password
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it('should hash password before saving', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(201);

      const user = await User.findOne({ email: userData.email }).select('+password');
      expect(user.password).not.toBe(userData.password);
      expect(user.password.length).toBeGreaterThan(20); // Bcrypt hash length
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login user with valid credentials', async () => {
      const user = await createTestUser({
        email: 'john@example.com',
        password: 'password123',
      });

      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'john@example.com',
          password: 'password123',
        })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.token).toBeDefined();
      expect(response.body.user.email).toBe(user.email);
    });

    it('should not login with invalid email', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'wrong@example.com',
          password: 'password123',
        })
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('Invalid credentials');
    });

    it('should not login with invalid password', async () => {
      await createTestUser({
        email: 'john@example.com',
        password: 'password123',
      });

      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'john@example.com',
          password: 'wrongpassword',
        })
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('Invalid credentials');
    });

    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({ email: 'john@example.com' }) // Missing password
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/auth/me', () => {
    it('should get current user with valid token', async () => {
      const user = await createTestUser();
      const token = getAuthToken(user);

      const response = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.email).toBe(user.email);
      expect(response.body.data.password).toBeUndefined();
    });

    it('should not get user without token', async () => {
      const response = await request(app)
        .get('/api/auth/me')
        .expect(401);

      expect(response.body.success).toBe(false);
    });

    it('should not get user with invalid token', async () => {
      const response = await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer invalid-token')
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/auth/users', () => {
    it('should get all users for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestUser({ name: 'User 1' });
      await createTestUser({ name: 'User 2' });

      const response = await request(app)
        .get('/api/auth/users')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBeGreaterThanOrEqual(2);
    });

    it('should not get users for non-admin', async () => {
      const user = await createTestUser();
      const token = getAuthToken(user);

      const response = await request(app)
        .get('/api/auth/users')
        .set('Authorization', `Bearer ${token}`)
        .expect(403);

      expect(response.body.success).toBe(false);
    });

    it('should paginate users', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      // Create multiple users
      for (let i = 0; i < 15; i++) {
        await createTestUser({ name: `User ${i}` });
      }

      const response = await request(app)
        .get('/api/auth/users?page=1&limit=10')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.data.length).toBe(10);
      expect(response.body.page).toBe(1);
      expect(response.body.pages).toBeGreaterThan(1);
    });
  });

  describe('PUT /api/auth/users/:id', () => {
    it('should update user for admin', async () => {
      const admin = await createTestAdmin();
      const user = await createTestUser();
      const token = getAuthToken(admin);

      const response = await request(app)
        .put(`/api/auth/users/${user._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'Updated Name' })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe('Updated Name');
    });

    it('should not update user for non-admin', async () => {
      const user = await createTestUser();
      const token = getAuthToken(user);

      const response = await request(app)
        .put(`/api/auth/users/${user._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'Updated Name' })
        .expect(403);

      expect(response.body.success).toBe(false);
    });
  });

  describe('DELETE /api/auth/users/:id', () => {
    it('should delete user for admin', async () => {
      const admin = await createTestAdmin();
      const user = await createTestUser();
      const token = getAuthToken(admin);

      const response = await request(app)
        .delete(`/api/auth/users/${user._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);

      // Verify user is deleted
      const deletedUser = await User.findById(user._id);
      expect(deletedUser).toBeNull();
    });

    it('should not allow admin to delete themselves', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .delete(`/api/auth/users/${admin._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });
});

