/**
 * Tag Service
 * Business logic for tag management
 */

import * as tagRepository from "@/lib/repositories/tagRepository.js";
import { throwError } from "@/lib/middleware/errorHandler.js";

import Blog from "@/lib/models/Blog.js";

export const getAllTags = async (filters = {}, pagination = {}) => {
  // Convert search to MongoDB query
  const queryFilter = {};
  if (filters.search) {
    queryFilter.$or = [
      { name: { $regex: filters.search, $options: "i" } },
      { slug: { $regex: filters.search, $options: "i" } },
    ];
  }

  const result = await tagRepository.findAll(queryFilter, pagination);

  // Add blog count for each tag
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const tagsWithCount = await Promise.all(
    result.tags.map(async (tag) => {
      const blogCount = await Blog.countDocuments({
        tags: tag.slug,
        isPublished: true,
        publishedAt: { $lte: endOfDay },
      });
      return { ...tag.toObject(), blogCount };
    })
  );

  return {
    ...result,
    tags: tagsWithCount,
  };
};

export const getTagById = async (id) => {
  const tag = await tagRepository.findById(id);
  if (!tag) {
    throwError("Tag not found", 404, { function: "getTagById", id });
  }

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const blogCount = await Blog.countDocuments({
    tags: tag.name,
    isPublished: true,
    publishedAt: { $lte: endOfDay },
  });
  return { ...tag.toObject(), blogCount };
};

export const getTagBySlug = async (slug) => {
  const tag = await tagRepository.findBySlug(slug);
  if (!tag) {
    throwError("Tag not found", 404, { function: "getTagBySlug", slug });
  }

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const blogCount = await Blog.countDocuments({
    tags: tag.name,
    isPublished: true,
    publishedAt: { $lte: endOfDay },
  });
  return { ...tag.toObject(), blogCount };
};

export const createTag = async (tagData) => {
  if (!tagData.name) {
    throwError("Tag name is required", 400, { function: "createTag" });
  }
  return await tagRepository.create(tagData);
};

export const updateTag = async (id, updateData) => {
  return await tagRepository.updateById(id, updateData);
};

export const deleteTag = async (id) => {
  return await tagRepository.deleteById(id);
};
