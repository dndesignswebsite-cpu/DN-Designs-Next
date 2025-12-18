/**
 * Category Repository
 * Handles all database operations for Category model
 */

import Category from "@/lib/models/Category.js";
import { AppError, throwError } from "@/lib/middleware/errorHandler.js";

export const findById = async (categoryId, options = {}) => {
  try {
    let query = Category.findById(categoryId);
    if (options.select) query = query.select(options.select);
    return await query;
  } catch (error) {
    throwError(error, 500, { function: "findById", categoryId });
  }
};

export const findBySlug = async (slug, options = {}) => {
  try {
    let query = Category.findOne({ slug });
    if (options.select) query = query.select(options.select);
    return await query;
  } catch (error) {
    throwError(error, 500, { function: "findBySlug", slug });
  }
};

export const findAll = async (filter = {}, options = {}) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 100; // Larger default for categories
    const skip = (page - 1) * limit;

    let query = Category.find(filter);
    if (options.select) query = query.select(options.select);
    if (options.sort) {
      query = query.sort(options.sort);
    } else {
      query = query.sort({ name: 1 });
    }

    if (options.page && options.limit) {
      query = query.skip(skip).limit(limit);
    }

    const [categories, total] = await Promise.all([
      query.exec(),
      Category.countDocuments(filter),
    ]);

    return {
      categories,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  } catch (error) {
    throwError(error, 500, { function: "findAll", filter, options });
  }
};

export const create = async (categoryData) => {
  try {
    return await Category.create(categoryData);
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: "create", field });
    }
    throwError(error, 500, { function: "create", categoryData });
  }
};

export const updateById = async (categoryId, updateData) => {
  try {
    const category = await Category.findByIdAndUpdate(
      categoryId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!category) {
      throwError(`Category not found with id of ${categoryId}`, 404, {
        function: "updateById",
        categoryId,
      });
    }
    return category;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: "updateById", categoryId, updateData });
  }
};

export const deleteById = async (categoryId) => {
  try {
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      throwError(`Category not found with id of ${categoryId}`, 404, {
        function: "deleteById",
        categoryId,
      });
    }
    return true;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: "deleteById", categoryId });
  }
};
