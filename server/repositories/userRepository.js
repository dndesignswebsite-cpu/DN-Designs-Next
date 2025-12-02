/**
 * User Repository
 * Handles all database operations for User model
 * This layer only communicates with the database
 */

import User from '../models/User.js';
import { AppError, throwError } from '../middleware/errorHandler.js';

/**
 * Find user by ID
 * @param {string} userId - User ID
 * @param {Object} options - Query options (select, populate, etc.)
 * @returns {Promise<Object>} User document
 */
export const findById = async (userId, options = {}) => {
  try {
    let query = User.findById(userId);

    if (options.select) {
      query = query.select(options.select);
    }

    if (options.populate) {
      query = query.populate(options.populate);
    }

    const user = await query;
    return user;
  } catch (error) {
    throwError(error, 500, { function: 'findById', userId });
  }
};

/**
 * Find user by email
 * @param {string} email - User email
 * @param {Object} options - Query options
 * @returns {Promise<Object>} User document
 */
export const findByEmail = async (email, options = {}) => {
  try {
    let query = User.findOne({ email: email.toLowerCase() });

    if (options.select) {
      query = query.select(options.select);
    }

    const user = await query;
    return user;
  } catch (error) {
    throwError(error, 500, { function: 'findByEmail', email });
  }
};

/**
 * Find all users with filtering and pagination
 * @param {Object} filter - MongoDB filter object
 * @param {Object} options - Query options (page, limit, sort, select)
 * @returns {Promise<Object>} Object with users array and pagination info
 */
export const findAll = async (filter = {}, options = {}) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 10;
    const skip = (page - 1) * limit;

    let query = User.find(filter);

    if (options.select) {
      query = query.select(options.select);
    }

    if (options.sort) {
      query = query.sort(options.sort);
    } else {
      query = query.sort({ createdAt: -1 });
    }

    query = query.skip(skip).limit(limit);

    const [users, total] = await Promise.all([
      query.exec(),
      User.countDocuments(filter),
    ]);

    return {
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    throwError(error, 500, { function: 'findAll', filter, options });
  }
};

/**
 * Create a new user
 * @param {Object} userData - User data
 * @returns {Promise<Object>} Created user document
 */
export const create = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: 'create', field, value: error.keyValue[field] });
    }
    throwError(error, 500, { function: 'create', userData });
  }
};

/**
 * Update user by ID
 * @param {string} userId - User ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated user document
 */
export const updateById = async (userId, updateData) => {
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      {
        new: true, // Return updated document
        runValidators: true, // Run model validators
      }
    ).select('-password');

    if (!user) {
      throwError(`User not found with id of ${userId}`, 404, { function: 'updateById', userId });
    }

    return user;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: 'create', field, value: error.keyValue[field] });
    }
    throwError(error, 500, { function: 'updateById', userId, updateData });
  }
};

/**
 * Delete user by ID
 * @param {string} userId - User ID
 * @returns {Promise<boolean>} True if deleted
 */
export const deleteById = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      throwError(`User not found with id of ${userId}`, 404, { function: 'updateById', userId });
    }

    return true;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throwError(error, 500, { function: 'deleteById', userId });
  }
};

/**
 * Check if user exists by email
 * @param {string} email - User email
 * @returns {Promise<boolean>} True if user exists
 */
export const existsByEmail = async (email) => {
  try {
    const count = await User.countDocuments({ email: email.toLowerCase() });
    return count > 0;
  } catch (error) {
    throwError(error, 500, { function: 'existsByEmail', email });
  }
};

/**
 * Count users with filter
 * @param {Object} filter - MongoDB filter
 * @returns {Promise<number>} Count of users
 */
export const count = async (filter = {}) => {
  try {
    return await User.countDocuments(filter);
  } catch (error) {
    throwError(error, 500, { function: 'count', filter });
  }
};

