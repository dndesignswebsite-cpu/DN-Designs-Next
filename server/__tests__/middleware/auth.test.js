/**
 * Authentication Middleware Tests
 * Unit tests for authentication and authorization middleware
 */

import { jest } from '@jest/globals';
import jwt from 'jsonwebtoken';
import { protect, authorize } from '../../middleware/auth.js';
import User from '../../models/User.js';
import { createTestUser, createTestAdmin, cleanupDatabase } from '../helpers/testHelpers.js';
import mongoose from 'mongoose';
import connectDB from '../../config/database.js';

beforeAll(async () => {
  process.env.MONGODB_URI = process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/dn-designs-test';
  process.env.JWT_SECRET = 'test-jwt-secret';
  await connectDB();
});

beforeEach(async () => {
  await cleanupDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Authentication Middleware', () => {
  describe('protect middleware', () => {
    let req, res, next;

    beforeEach(() => {
      req = {
        headers: {},
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      next = jest.fn();
    });

    it('should call next() with valid token', async () => {
      const user = await createTestUser();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      req.headers.authorization = `Bearer ${token}`;

      await protect(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(req.user).toBeDefined();
      expect(req.user.email).toBe(user.email);
    });

    it('should return 401 without token', async () => {
      await protect(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
        })
      );
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 with invalid token', async () => {
      req.headers.authorization = 'Bearer invalid-token';

      await protect(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 with expired token', async () => {
      const user = await createTestUser();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '-1h', // Expired token
      });

      req.headers.authorization = `Bearer ${token}`;

      await protect(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 if user not found', async () => {
      const fakeUserId = new mongoose.Types.ObjectId();
      const token = jwt.sign({ id: fakeUserId }, process.env.JWT_SECRET);

      req.headers.authorization = `Bearer ${token}`;

      await protect(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 if user is inactive', async () => {
      const user = await createTestUser();
      user.isActive = false;
      await user.save();

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      req.headers.authorization = `Bearer ${token}`;

      await protect(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('authorize middleware', () => {
    let req, res, next;

    beforeEach(() => {
      req = {};
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      next = jest.fn();
    });

    it('should call next() for authorized role', async () => {
      const admin = await createTestAdmin();
      req.user = admin;

      const middleware = authorize('admin');
      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('should return 403 for unauthorized role', async () => {
      const user = await createTestUser();
      req.user = user;

      const middleware = authorize('admin');
      await middleware(req, res, next);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(next).not.toHaveBeenCalled();
    });

    it('should work with multiple roles', async () => {
      const admin = await createTestAdmin();
      req.user = admin;

      const middleware = authorize('admin', 'moderator');
      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('should return 401 if user not set', async () => {
      const middleware = authorize('admin');
      await middleware(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(next).not.toHaveBeenCalled();
    });
  });
});

