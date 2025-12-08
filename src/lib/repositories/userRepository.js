/**
 * User Repository
 * Handles all database operations for User model
 */

import User from '@/lib/models/User.js';
import { AppError, throwError } from '@/lib/middleware/errorHandler.js';

export const findById = async (userId, options = {}) => {
  try {
    let query = User.findById(userId);
    if (options.select) query = query.select(options.select);
    if (options.populate) query = query.populate(options.populate);
    return await query;
  } catch (error) {
    throwError(error, 500, { function: 'findById', userId });
  }
};

export const findByEmail = async (email, options = {}) => {
  try {
    let query = User.findOne({ email: email.toLowerCase() });
    if (options.select) query = query.select(options.select);
    return await query;
  } catch (error) {
    throwError(error, 500, { function: 'findByEmail', email });
  }
};

export const findAll = async (filter = {}, options = {}) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 10;
    const skip = (page - 1) * limit;

    let query = User.find(filter);
    if (options.select) query = query.select(options.select);
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
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  } catch (error) {
    throwError(error, 500, { function: 'findAll', filter, options });
  }
};

export const create = async (userData) => {
  try {
    return await User.create(userData);
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: 'create', field });
    }
    throwError(error, 500, { function: 'create', userData });
  }
};

export const updateById = async (userId, updateData) => {
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      throwError(`User not found with id of ${userId}`, 404, { function: 'updateById', userId });
    }
    return user;
  } catch (error) {
    if (error instanceof AppError) throw error;
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: 'updateById', field });
    }
    throwError(error, 500, { function: 'updateById', userId, updateData });
  }
};

export const deleteById = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throwError(`User not found with id of ${userId}`, 404, { function: 'deleteById', userId });
    }
    return true;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: 'deleteById', userId });
  }
};

export const existsByEmail = async (email) => {
  try {
    const count = await User.countDocuments({ email: email.toLowerCase() });
    return count > 0;
  } catch (error) {
    throwError(error, 500, { function: 'existsByEmail', email });
  }
};

export const count = async (filter = {}) => {
  try {
    return await User.countDocuments(filter);
  } catch (error) {
    throwError(error, 500, { function: 'count', filter });
  }
};

