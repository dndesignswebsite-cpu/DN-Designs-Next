/**
 * Tag Repository
 * Handles all database operations for Tag model
 */

import Tag from "@/lib/models/Tag.js";
import { AppError, throwError } from "@/lib/middleware/errorHandler.js";

export const findById = async (tagId, options = {}) => {
  try {
    let query = Tag.findById(tagId);
    if (options.select) query = query.select(options.select);
    return await query;
  } catch (error) {
    throwError(error, 500, { function: "findById", tagId });
  }
};

export const findBySlug = async (slug, options = {}) => {
  try {
    let query = Tag.findOne({ slug });
    if (options.select) query = query.select(options.select);
    return await query;
  } catch (error) {
    throwError(error, 500, { function: "findBySlug", slug });
  }
};

export const findAll = async (filter = {}, options = {}) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 100;
    const skip = (page - 1) * limit;

    let query = Tag.find(filter);
    if (options.select) query = query.select(options.select);
    if (options.sort) {
      query = query.sort(options.sort);
    } else {
      query = query.sort({ name: 1 });
    }

    if (options.page && options.limit) {
      query = query.skip(skip).limit(limit);
    }

    const [tags, total] = await Promise.all([
      query.exec(),
      Tag.countDocuments(filter),
    ]);

    return {
      tags,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  } catch (error) {
    throwError(error, 500, { function: "findAll", filter, options });
  }
};

export const create = async (tagData) => {
  try {
    return await Tag.create(tagData);
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: "create", field });
    }
    throwError(error, 500, { function: "create", tagData });
  }
};

export const updateById = async (tagId, updateData) => {
  try {
    const tag = await Tag.findByIdAndUpdate(
      tagId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!tag) {
      throwError(`Tag not found with id of ${tagId}`, 404, {
        function: "updateById",
        tagId,
      });
    }
    return tag;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: "updateById", tagId, updateData });
  }
};

export const deleteById = async (tagId) => {
  try {
    const tag = await Tag.findByIdAndDelete(tagId);
    if (!tag) {
      throwError(`Tag not found with id of ${tagId}`, 404, {
        function: "deleteById",
        tagId,
      });
    }
    return true;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: "deleteById", tagId });
  }
};
