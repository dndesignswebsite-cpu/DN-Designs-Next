/**
 * Tag Service
 * Business logic for tag management
 */

import * as tagRepository from "@/lib/repositories/tagRepository.js";
import { throwError } from "@/lib/middleware/errorHandler.js";

import Blog from "@/lib/models/Blog.js";

export const getAllTags = async (filters = {}, pagination = {}) => {
  const result = await tagRepository.findAll(filters, pagination);

  // Add blog count for each tag
  const tagsWithCount = await Promise.all(
    result.tags.map(async (tag) => {
      const blogCount = await Blog.countDocuments({ tags: tag.name });
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

  const blogCount = await Blog.countDocuments({ tags: tag.name });
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
