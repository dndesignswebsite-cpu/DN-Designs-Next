/**
 * Blog Repository
 * Handles all database operations for Blog model
 */

import Blog from '@/lib/models/Blog.js';
import { AppError, throwError } from '@/lib/middleware/errorHandler.js';

export const findById = async (blogId, options = {}) => {
  try {
    let query = Blog.findById(blogId);
    if (options.select) query = query.select(options.select);
    if (options.populate) {
      query = query.populate(options.populate);
    } else {
      query = query.populate('author', 'name email avatar');
    }
    return await query;
  } catch (error) {
    throwError(error, 500, { function: 'findById', blogId });
  }
};

export const findBySlug = async (slug, options = {}) => {
  try {
    let query = Blog.findOne({ slug });
    if (options.select) query = query.select(options.select);
    if (options.populate) {
      query = query.populate(options.populate);
    } else {
      query = query.populate('author', 'name email avatar');
    }
    return await query;
  } catch (error) {
    throwError(error, 500, { function: 'findBySlug', slug });
  }
};

export const findAll = async (filter = {}, options = {}) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 10;
    const skip = (page - 1) * limit;

    let query = Blog.find(filter);
    if (options.select) query = query.select(options.select);
    if (options.populate) {
      query = query.populate(options.populate);
    } else {
      query = query.populate('author', 'name email avatar');
    }
    if (options.sort) {
      query = query.sort(options.sort);
    } else {
      query = query.sort({ createdAt: -1 });
    }
    query = query.skip(skip).limit(limit);

    const [blogs, total] = await Promise.all([
      query.exec(),
      Blog.countDocuments(filter),
    ]);

    return {
      blogs,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  } catch (error) {
    throwError(error, 500, { function: 'findAll', filter, options });
  }
};

export const create = async (blogData) => {
  try {
    const blog = await Blog.create(blogData);
    await blog.populate('author', 'name email avatar');
    return blog;
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: 'create', field });
    }
    throwError(error, 500, { function: 'create', blogData });
  }
};

export const updateById = async (blogId, updateData) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { $set: updateData },
      { new: true, runValidators: true }
    ).populate('author', 'name email avatar');

    if (!blog) {
      throwError(`Blog not found with id of ${blogId}`, 404, { function: 'updateById', blogId });
    }
    return blog;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: 'updateById', blogId, updateData });
  }
};

export const deleteById = async (blogId) => {
  try {
    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) {
      throwError(`Blog not found with id of ${blogId}`, 404, { function: 'deleteById', blogId });
    }
    return true;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: 'deleteById', blogId });
  }
};

export const incrementViews = async (blogId) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!blog) {
      throwError(`Blog not found with id of ${blogId}`, 404, { function: 'incrementViews', blogId });
    }
    return blog;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: 'incrementViews', blogId });
  }
};

export const count = async (filter = {}) => {
  try {
    return await Blog.countDocuments(filter);
  } catch (error) {
    throwError(error, 500, { function: 'count', filter });
  }
};

