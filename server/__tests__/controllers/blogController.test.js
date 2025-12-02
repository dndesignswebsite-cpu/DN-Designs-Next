/**
 * Blog Controller Tests
 * Unit tests for blog endpoints
 */

import { jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from '../../config/database.js';
import blogRoutes from '../../routes/blogRoutes.js';
import { cleanupDatabase, createTestUser, createTestAdmin, createTestBlog, getAuthToken } from '../helpers/testHelpers.js';
import Blog from '../../models/Blog.js';

// Create Express app for testing
const app = express();
app.use(express.json());
app.use('/api/blogs', blogRoutes);

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

describe('Blog Controller', () => {
  describe('GET /api/blogs', () => {
    it('should get all published blogs', async () => {
      const author = await createTestAdmin();
      await createTestBlog({ title: 'Published Blog', isPublished: true }, author);
      await createTestBlog({ title: 'Draft Blog', isPublished: false }, author);

      const response = await request(app)
        .get('/api/blogs')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBe(1);
      expect(response.body.data[0].title).toBe('Published Blog');
    });

    it('should paginate blogs', async () => {
      const author = await createTestAdmin();
      
      // Create multiple published blogs
      for (let i = 0; i < 15; i++) {
        await createTestBlog({ title: `Blog ${i}`, isPublished: true }, author);
      }

      const response = await request(app)
        .get('/api/blogs?page=1&limit=10')
        .expect(200);

      expect(response.body.data.length).toBe(10);
      expect(response.body.page).toBe(1);
      expect(response.body.pages).toBeGreaterThan(1);
    });

    it('should filter blogs by category', async () => {
      const author = await createTestAdmin();
      await createTestBlog({ title: 'Design Blog', category: 'Design', isPublished: true }, author);
      await createTestBlog({ title: 'Marketing Blog', category: 'Marketing', isPublished: true }, author);

      const response = await request(app)
        .get('/api/blogs?category=Design')
        .expect(200);

      expect(response.body.data.length).toBe(1);
      expect(response.body.data[0].category).toBe('Design');
    });

    it('should search blogs', async () => {
      const author = await createTestAdmin();
      await createTestBlog({ title: 'Logo Design Guide', isPublished: true }, author);
      await createTestBlog({ title: 'Branding Tips', isPublished: true }, author);

      const response = await request(app)
        .get('/api/blogs?search=logo')
        .expect(200);

      expect(response.body.data.length).toBe(1);
      expect(response.body.data[0].title).toContain('Logo');
    });

    it('should show all blogs for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      await createTestBlog({ title: 'Published', isPublished: true }, admin);
      await createTestBlog({ title: 'Draft', isPublished: false }, admin);

      const response = await request(app)
        .get('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      // Admin should see all blogs when querying with isPublished filter
      const allBlogs = await request(app)
        .get('/api/blogs?isPublished=false')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(allBlogs.body.data.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('GET /api/blogs/:id', () => {
    it('should get blog by ID', async () => {
      const author = await createTestAdmin();
      const blog = await createTestBlog({ isPublished: true }, author);

      const response = await request(app)
        .get(`/api/blogs/${blog._id}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(blog.title);
      expect(response.body.data.content).toBeDefined();
    });

    it('should get blog by slug', async () => {
      const author = await createTestAdmin();
      const blog = await createTestBlog({ 
        title: 'Test Blog Post',
        slug: 'test-blog-post',
        isPublished: true 
      }, author);

      const response = await request(app)
        .get(`/api/blogs/${blog.slug}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.slug).toBe(blog.slug);
    });

    it('should increment view count', async () => {
      const author = await createTestAdmin();
      const blog = await createTestBlog({ isPublished: true }, author);
      const initialViews = blog.views;

      await request(app)
        .get(`/api/blogs/${blog._id}`)
        .expect(200);

      const updatedBlog = await Blog.findById(blog._id);
      expect(updatedBlog.views).toBe(initialViews + 1);
    });

    it('should not get unpublished blog for non-admin', async () => {
      const author = await createTestAdmin();
      const blog = await createTestBlog({ isPublished: false }, author);

      const response = await request(app)
        .get(`/api/blogs/${blog._id}`)
        .expect(404);

      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/blogs', () => {
    it('should create blog for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const blogData = {
        title: 'New Blog Post',
        content: 'This is the blog content. '.repeat(20),
        excerpt: 'Blog excerpt',
        tags: ['design', 'branding'],
        category: 'Design',
        isPublished: true,
      };

      const response = await request(app)
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(blogData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(blogData.title);
      expect(response.body.data.slug).toBeDefined();
      expect(response.body.data.readingTime).toBeGreaterThan(0);
    });

    it('should not create blog for non-admin', async () => {
      const user = await createTestUser();
      const token = getAuthToken(user);

      const blogData = {
        title: 'New Blog Post',
        content: 'This is the blog content. '.repeat(20),
      };

      const response = await request(app)
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(blogData)
        .expect(403);

      expect(response.body.success).toBe(false);
    });

    it('should validate required fields', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Only title' }) // Missing content
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('PUT /api/blogs/:id', () => {
    it('should update blog for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const blog = await createTestBlog({}, admin);

      const updateData = {
        title: 'Updated Blog Title',
        content: 'Updated content. '.repeat(20),
      };

      const response = await request(app)
        .put(`/api/blogs/${blog._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(updateData.title);
    });

    it('should set publishedAt when publishing for first time', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const blog = await createTestBlog({ isPublished: false }, admin);

      expect(blog.publishedAt).toBeNull();

      const response = await request(app)
        .put(`/api/blogs/${blog._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ isPublished: true })
        .expect(200);

      expect(response.body.data.isPublished).toBe(true);
      expect(response.body.data.publishedAt).toBeDefined();
    });
  });

  describe('DELETE /api/blogs/:id', () => {
    it('should delete blog for admin', async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const blog = await createTestBlog({}, admin);

      const response = await request(app)
        .delete(`/api/blogs/${blog._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);

      // Verify blog is deleted
      const deletedBlog = await Blog.findById(blog._id);
      expect(deletedBlog).toBeNull();
    });

    it('should not delete blog for non-admin', async () => {
      const admin = await createTestAdmin();
      const user = await createTestUser();
      const userToken = getAuthToken(user);
      const blog = await createTestBlog({}, admin);

      const response = await request(app)
        .delete(`/api/blogs/${blog._id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .expect(403);

      expect(response.body.success).toBe(false);
    });
  });
});

