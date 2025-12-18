/**
 * Category Service
 * Business logic for category management
 */

import * as categoryRepository from "@/lib/repositories/categoryRepository.js";
import { throwError } from "@/lib/middleware/errorHandler.js";

import Blog from "@/lib/models/Blog.js";

export const getAllCategories = async (filters = {}, pagination = {}) => {
  const result = await categoryRepository.findAll(filters, pagination);

  // Add blog count for each category
  const categoriesWithCount = await Promise.all(
    result.categories.map(async (cat) => {
      const blogCount = await Blog.countDocuments({
        $or: [{ primaryCategory: cat.name }, { categories: cat.name }],
      });
      return { ...cat.toObject(), blogCount };
    })
  );

  return {
    ...result,
    categories: categoriesWithCount,
  };
};

export const getCategoryById = async (id) => {
  const category = await categoryRepository.findById(id);
  if (!category) {
    throwError("Category not found", 404, { function: "getCategoryById", id });
  }

  const blogCount = await Blog.countDocuments({
    $or: [{ primaryCategory: category.name }, { categories: category.name }],
  });
  return { ...category.toObject(), blogCount };
};

export const getCategoryBySlug = async (slug) => {
  const category = await categoryRepository.findBySlug(slug);
  if (!category) {
    throwError("Category not found", 404, {
      function: "getCategoryBySlug",
      slug,
    });
  }

  const blogCount = await Blog.countDocuments({
    $or: [{ primaryCategory: category.name }, { categories: category.name }],
  });
  return { ...category.toObject(), blogCount };
};

export const createCategory = async (categoryData) => {
  if (!categoryData.name) {
    throwError("Category name is required", 400, {
      function: "createCategory",
    });
  }
  return await categoryRepository.create(categoryData);
};

export const updateCategory = async (id, updateData) => {
  return await categoryRepository.updateById(id, updateData);
};

export const deleteCategory = async (id) => {
  return await categoryRepository.deleteById(id);
};
