/**
 * Auth Service
 * Business logic for authentication and user management
 * This layer contains all business logic, no direct database access
 */

import * as userRepository from '../repositories/userRepository.js';
import { AppError, throwError, logError } from '../middleware/errorHandler.js';
import { generateToken } from '../utils/generateToken.js';
import { uploadImage, deleteImage } from '../config/cloudinary.js';
import fs from 'fs';

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} User object with token
 */
export const register = async (userData) => {
  const { name, email, password, role } = userData;

  // Check if user already exists
  const userExists = await userRepository.existsByEmail(email);
  if (userExists) {
    throwError('User already exists with this email', 400, { function: 'register', email });
  }

  // Create user (password will be hashed by model pre-save hook)
  const user = await userRepository.create({
    name,
    email,
    password,
    role: role || 'user',
  });

  // Generate token
  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    },
    token,
  };
};

/**
 * Login user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User object with token
 */
export const login = async (email, password) => {
  // Validate input
  if (!email || !password) {
    throwError('Please provide email and password', 400, { function: 'login' });
  }

  // Find user with password field (normally excluded)
  const user = await userRepository.findByEmail(email, {
    select: '+password',
  });

  if (!user) {
    throwError('Invalid credentials', 401, { function: 'login', email });
  }

  // Check password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throwError('Invalid credentials', 401, { function: 'login', email });
  }

  // Check if user account is active
  if (!user.isActive) {
    throwError('Your account has been deactivated', 401, { function: 'login', userId: user._id });
  }

  // Generate token
  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    },
    token,
  };
};

/**
 * Get current user
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User object
 */
export const getCurrentUser = async (userId) => {
  const user = await userRepository.findById(userId);

  if (!user) {
    throwError('User not found', 404, { function: 'getCurrentUser', userId });
  }

  return user;
};

/**
 * Get all users with filtering and pagination
 * @param {Object} filters - Filter criteria
 * @param {Object} pagination - Pagination options
 * @returns {Promise<Object>} Users with pagination info
 */
export const getAllUsers = async (filters = {}, pagination = {}) => {
  // Build filter
  const filter = {};

  if (filters.role) {
    filter.role = filters.role;
  }

  if (filters.isActive !== undefined) {
    filter.isActive = filters.isActive === 'true' || filters.isActive === true;
  }

  if (filters.search) {
    filter.$or = [
      { name: { $regex: filters.search, $options: 'i' } },
      { email: { $regex: filters.search, $options: 'i' } },
    ];
  }

  // Get users from repository
  const result = await userRepository.findAll(filter, {
    page: pagination.page,
    limit: pagination.limit,
    select: '-password',
  });

  return {
    users: result.users,
    count: result.users.length,
    total: result.pagination.total,
    page: result.pagination.page,
    pages: result.pagination.pages,
  };
};

/**
 * Get user by ID
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User object
 */
export const getUserById = async (userId) => {
  const user = await userRepository.findById(userId, {
    select: '-password',
  });

  if (!user) {
    throwError(`User not found with id of ${userId}`, 404, { function: 'updateUser', userId });
  }

  return user;
};

/**
 * Update user
 * @param {string} userId - User ID
 * @param {Object} updateData - Data to update
 * @param {Object} currentUser - Current logged in user
 * @param {Object} file - Uploaded file (avatar)
 * @returns {Promise<Object>} Updated user object
 */
export const updateUser = async (userId, updateData, currentUser, file = null) => {
  // Check if user exists
  const existingUser = await userRepository.findById(userId);
  if (!existingUser) {
    throwError(`User not found with id of ${userId}`, 404, { function: 'updateUser', userId });
  }

  // Check authorization (user can update themselves, admin can update anyone)
  if (currentUser.id !== userId && currentUser.role !== 'admin') {
    throwError('Not authorized to update this user', 403, { function: 'updateUser', userId, currentUserId: currentUser.id });
  }

  // Handle avatar upload
  if (file) {
    try {
      const result = await uploadImage(file.path);

      // Delete old avatar if exists
      if (existingUser.avatar && existingUser.avatar.includes('cloudinary')) {
        try {
          const urlParts = existingUser.avatar.split('/');
          const filename = urlParts[urlParts.length - 1];
          const oldPublicId = filename.split('.')[0];
          await deleteImage(oldPublicId);
        } catch (error) {
          logError(error, { function: 'updateUser', userId, operation: 'deleteOldAvatar', oldPublicId });
        }
      }

      updateData.avatar = result.secure_url;
      updateData.avatarPublicId = result.public_id;

      // Delete temporary file
      fs.unlinkSync(file.path);
    } catch (error) {
      // Clean up file if upload fails
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      throwError(error, 500, { function: 'updateUser', userId, operation: 'uploadAvatar' });
    }
  }

  // Validate email uniqueness if email is being updated
  if (updateData.email && updateData.email !== existingUser.email) {
    const emailExists = await userRepository.existsByEmail(updateData.email);
    if (emailExists) {
      throwError('Email already exists', 400, { function: 'updateUser', userId, email: updateData.email });
    }
  }

  // Only admin can change role and isActive
  if (currentUser.role !== 'admin') {
    delete updateData.role;
    delete updateData.isActive;
  }

  // Update user
  const updatedUser = await userRepository.updateById(userId, updateData);

  return updatedUser;
};

/**
 * Delete user
 * @param {string} userId - User ID to delete
 * @param {Object} currentUser - Current logged in user
 * @returns {Promise<boolean>} True if deleted
 */
export const deleteUser = async (userId, currentUser) => {
  // Prevent deleting yourself
  if (currentUser.id === userId) {
    throwError('You cannot delete your own account', 400, { function: 'deleteUser', userId });
  }

  // Get user to check if exists and get avatar
  const user = await userRepository.findById(userId);
  if (!user) {
    throwError(`User not found with id of ${userId}`, 404, { function: 'updateUser', userId });
  }

  // Delete avatar from Cloudinary if exists
  if (user.avatar && user.avatar.includes('cloudinary')) {
    try {
      const urlParts = user.avatar.split('/');
      const filename = urlParts[urlParts.length - 1];
      const publicId = filename.split('.')[0];
      await deleteImage(publicId);
    } catch (error) {
      logError(error, { function: 'deleteUser', userId, operation: 'deleteAvatar', publicId: user.avatar?.publicId });
    }
  }

  // Delete user
  await userRepository.deleteById(userId);

  return true;
};

/**
 * Update current user's profile
 * @param {string} userId - User ID
 * @param {Object} updateData - Data to update
 * @param {Object} file - Uploaded file (avatar)
 * @returns {Promise<Object>} Updated user object
 */
export const updateProfile = async (userId, updateData, file = null) => {
  const user = await userRepository.findById(userId);
  if (!user) {
    throwError('User not found', 404, { function: 'getCurrentUser', userId });
  }

  // Handle avatar upload
  if (file) {
    try {
      const result = await uploadImage(file.path);

      // Delete old avatar if exists
      if (user.avatar && user.avatar.includes('cloudinary')) {
        try {
          const urlParts = user.avatar.split('/');
          const filename = urlParts[urlParts.length - 1];
          const oldPublicId = filename.split('.')[0];
          await deleteImage(oldPublicId);
        } catch (error) {
          logError(error, { function: 'updateUser', userId, operation: 'deleteOldAvatar', oldPublicId });
        }
      }

      updateData.avatar = result.secure_url;
      updateData.avatarPublicId = result.public_id;

      fs.unlinkSync(file.path);
    } catch (error) {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      throwError(error, 500, { function: 'updateUser', userId, operation: 'uploadAvatar' });
    }
  }

  // Validate email uniqueness if email is being updated
  if (updateData.email && updateData.email !== user.email) {
    const emailExists = await userRepository.existsByEmail(updateData.email);
    if (emailExists) {
      throwError('Email already exists', 400, { function: 'updateUser', userId, email: updateData.email });
    }
  }

  // Update user
  const updatedUser = await userRepository.updateById(userId, updateData);

  return updatedUser;
};

