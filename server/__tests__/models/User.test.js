/**
 * User Model Tests
 * Unit tests for User model and schema
 */

import { jest } from '@jest/globals';
import mongoose from 'mongoose';
import connectDB from '../../config/database.js';
import User from '../../models/User.js';
import { cleanupDatabase } from '../helpers/testHelpers.js';

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

describe('User Model', () => {
  describe('User Creation', () => {
    it('should create a user with valid data', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      const user = await User.create(userData);

      expect(user._id).toBeDefined();
      expect(user.name).toBe(userData.name);
      expect(user.email).toBe(userData.email);
      expect(user.password).not.toBe(userData.password); // Should be hashed
      expect(user.role).toBe('user'); // Default role
      expect(user.isActive).toBe(true); // Default active status
    });

    it('should require name field', async () => {
      const userData = {
        email: 'john@example.com',
        password: 'password123',
      };

      await expect(User.create(userData)).rejects.toThrow();
    });

    it('should require email field', async () => {
      const userData = {
        name: 'John Doe',
        password: 'password123',
      };

      await expect(User.create(userData)).rejects.toThrow();
    });

    it('should require password field', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      await expect(User.create(userData)).rejects.toThrow();
    });

    it('should enforce unique email', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      await User.create(userData);

      // Try to create another user with same email
      await expect(User.create(userData)).rejects.toThrow();
    });

    it('should validate email format', async () => {
      const userData = {
        name: 'John Doe',
        email: 'invalid-email',
        password: 'password123',
      };

      await expect(User.create(userData)).rejects.toThrow();
    });

    it('should enforce minimum password length', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: '12345', // Less than 6 characters
      };

      await expect(User.create(userData)).rejects.toThrow();
    });
  });

  describe('Password Hashing', () => {
    it('should hash password before saving', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      const user = await User.create(userData);

      expect(user.password).not.toBe(userData.password);
      expect(user.password.length).toBeGreaterThan(20); // Bcrypt hash is long
    });

    it('should not rehash password if not modified', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      const user = await User.create(userData);
      const originalPassword = user.password;

      // Update name (not password)
      user.name = 'Jane Doe';
      await user.save();

      expect(user.password).toBe(originalPassword);
    });
  });

  describe('Password Comparison', () => {
    it('should compare password correctly', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      const user = await User.create(userData);

      // Correct password
      const isMatch = await user.comparePassword('password123');
      expect(isMatch).toBe(true);

      // Incorrect password
      const isNotMatch = await user.comparePassword('wrongpassword');
      expect(isNotMatch).toBe(false);
    });
  });

  describe('User JSON Serialization', () => {
    it('should exclude password from JSON output', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      const user = await User.create(userData);
      const userJSON = user.toJSON();

      expect(userJSON.password).toBeUndefined();
    });
  });

  describe('User Roles', () => {
    it('should accept valid roles', async () => {
      const adminUser = await User.create({
        name: 'Admin',
        email: 'admin@example.com',
        password: 'password123',
        role: 'admin',
      });

      expect(adminUser.role).toBe('admin');
    });

    it('should default to user role', async () => {
      const user = await User.create({
        name: 'User',
        email: 'user@example.com',
        password: 'password123',
      });

      expect(user.role).toBe('user');
    });
  });

  describe('Timestamps', () => {
    it('should add createdAt and updatedAt timestamps', async () => {
      const user = await User.create({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      });

      expect(user.createdAt).toBeDefined();
      expect(user.updatedAt).toBeDefined();
    });

    it('should update updatedAt on modification', async () => {
      const user = await User.create({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      });

      const originalUpdatedAt = user.updatedAt;

      // Wait a bit to ensure timestamp difference
      await new Promise((resolve) => setTimeout(resolve, 1000));

      user.name = 'Jane Doe';
      await user.save();

      expect(user.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt.getTime());
    });
  });
});

