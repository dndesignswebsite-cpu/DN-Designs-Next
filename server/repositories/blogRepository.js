/**
 * Blog Repository
 * Handles all database operations for Blog model
 * This layer only communicates with the database
 */

import Blog from '../models/Blog.js';
import { AppError, throwError } from '../middleware/errorHandler.js';

/**
 * Find blog by ID
 * @param {string} blogId - Blog ID
 * @param {Object} options - Query options (select, populate, etc.)
 * @returns {Promise<Object>} Blog document
 */
export const findById = async (blogId, options = {}) => {
  try {
    let query = Blog.findById(blogId);

    if (options.select) {
      query = query.select(options.select);
    }

    if (options.populate) {
      query = query.populate(options.populate);
    } else {
      // Default populate author
      query = query.populate('author', 'name email avatar');
    }

    const blog = await query;
    return blog;
  } catch (error) {
    throwError(error, 500, { function: 'findById', blogId });
  }
};

/**
 * Find blog by slug
 * @param {string} slug - Blog slug
 * @param {Object} options - Query options
 * @returns {Promise<Object>} Blog document
 */
export const findBySlug = async (slug, options = {}) => {
  try {
    let query = Blog.findOne({ slug });

    if (options.select) {
      query = query.select(options.select);
    }

    if (options.populate) {
      query = query.populate(options.populate);
    } else {
      query = query.populate('author', 'name email avatar');
    }

    const blog = await query;
    return blog;
  } catch (error) {
    throwError(error, 500, { function: 'findBySlug', slug });
  }
};

/**
 * Find all blogs with filtering and pagination
 * @param {Object} filter - MongoDB filter object
 * @param {Object} options - Query options (page, limit, sort, select)
 * @returns {Promise<Object>} Object with blogs array and pagination info
 */
export const findAll = async (filter = {}, options = {}) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 10;
    const skip = (page - 1) * limit;

    let query = Blog.find(filter);

    if (options.select) {
      query = query.select(options.select);
    }

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
 * Create a new blog
 * @param {Object} blogData - Blog data
 * @returns {Promise<Object>} Created blog document
 */
export const create = async (blogData) => {
  try {
    const blog = await Blog.create(blogData);
    
    // Populate author after creation
    await blog.populate('author', 'name email avatar');
    
    return blog;
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: 'create', field, value: error.keyValue[field] });
    }
    throwError(error, 500, { function: 'create', blogData });
  }
};

/**
 * Update blog by ID
 * @param {string} blogId - Blog ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated blog document
 */
export const updateById = async (blogId, updateData) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { $set: updateData },
      {
        new: true, // Return updated document
        runValidators: true, // Run model validators
      }
    ).populate('author', 'name email avatar');

    if (!blog) {
      throwError(`Blog not found with id of ${blogId}`, 404, { function: 'updateById', blogId });
    }

    return blog;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throwError(error, 500, { function: 'updateById', blogId, updateData });
  }
};

/**
 * Delete blog by ID
 * @param {string} blogId - Blog ID
 * @returns {Promise<boolean>} True if deleted
 */
export const deleteById = async (blogId) => {
  try {
    const blog = await Blog.findByIdAndDelete(blogId);

    if (!blog) {
      throwError(`Blog not found with id of ${blogId}`, 404, { function: 'updateById', blogId });
    }

    return true;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throwError(error, 500, { function: 'deleteById', blogId });
  }
};

/**
 * Increment blog views
 * @param {string} blogId - Blog ID
 * @returns {Promise<Object>} Updated blog document
 */
export const incrementViews = async (blogId) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!blog) {
      throwError(`Blog not found with id of ${blogId}`, 404, { function: 'updateById', blogId });
    }

    return blog;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throwError(error, 500, { function: 'incrementViews', blogId });
  }
};

/**
 * Count blogs with filter
 * @param {Object} filter - MongoDB filter
 * @returns {Promise<number>} Count of blogs
 */
export const count = async (filter = {}) => {
  try {
    return await Blog.countDocuments(filter);
  } catch (error) {
    throwError(error, 500, { function: 'count', filter });
  }
};

