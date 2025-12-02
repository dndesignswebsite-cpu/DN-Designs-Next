/**
 * Authentication Routes
 * Handles all authentication and user management endpoints
 */

import express from 'express';
import {
  register,
  login,
  getMe,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  updateProfile,
} from '../controllers/authController.js';
import { protect, authorize } from '../middleware/auth.js';
import { validateRegister, validateLogin, validateUserUpdate } from '../middleware/validator.js';
import { uploadSingle } from '../config/cloudinary.js';

const router = express.Router();

// Public routes
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

// Protected routes (require authentication)
router.get('/me', protect, getMe);
router.put('/update-profile', protect, uploadSingle.single('avatar'), validateUserUpdate, updateProfile);

// Admin only routes
router.get('/users', protect, authorize('admin'), getUsers);
router.get('/users/:id', protect, authorize('admin'), getUser);
router.put('/users/:id', protect, authorize('admin'), uploadSingle.single('avatar'), validateUserUpdate, updateUser);
router.delete('/users/:id', protect, authorize('admin'), deleteUser);

export default router;

