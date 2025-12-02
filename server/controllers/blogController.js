/**
 * Blog Controller
 * Handles HTTP requests and responses for blog management
 * Delegates business logic to blogService
 */

import * as blogService from "../services/blogService.js";
import { asyncHandler } from "../middleware/errorHandler.js";

/**
 * @route   GET /api/blogs
 * @desc    Get all blog posts (with filtering, pagination, search)
 * @access  Public (published) / Private (all for admin)
 */
export const getBlogs = asyncHandler(async (req, res, next) => {
  // Extract query parameters
  const filters = {
    category: req.query.category,
    author: req.query.author,
    tags: req.query.tags,
    search: req.query.search,
    isPublished: req.query.isPublished,
    sortBy: req.query.sortBy,
    sortOrder: req.query.sortOrder,
  };

  const pagination = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
  };

  // Get current user (if authenticated)
  const currentUser = req.user
    ? {
        id: req.user.id,
        role: req.user.role,
      }
    : null;

  // Call service to get blogs
  const result = await blogService.getAllBlogs(
    filters,
    pagination,
    currentUser
  );

  // Send response
  res.status(200).json({
    success: true,
    count: result.count,
    total: result.total,
    page: result.page,
    pages: result.pages,
    data: result.blogs,
  });
});

/**
 * @route   GET /api/blogs/:id
 * @desc    Get single blog post by ID or slug
 * @access  Public (published) / Private (all for admin)
 */
export const getBlog = asyncHandler(async (req, res, next) => {
  const identifier = req.params.id;

  // Get current user (if authenticated)
  const currentUser = req.user
    ? {
        id: req.user.id,
        role: req.user.role,
      }
    : null;

  // Call service to get blog
  const blog = await blogService.getBlogById(identifier, currentUser);

  // Send response
  res.status(200).json({
    success: true,
    data: blog,
  });
});

/**
 * @route   POST /api/blogs
 * @desc    Create new blog post
 * @access  Private/Admin
 */
export const createBlog = asyncHandler(async (req, res, next) => {
  const blogData = req.body;
  const authorId = req.user.id;

  // Call service to create blog
  const blog = await blogService.createBlog(blogData, authorId, req.file);

  // Send response
  res.status(201).json({
    success: true,
    data: blog,
  });
});

/**
 * @route   PUT /api/blogs/:id
 * @desc    Update blog post
 * @access  Private/Admin
 */
export const updateBlog = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;
  const updateData = req.body;

  // Call service to update blog
  const updatedBlog = await blogService.updateBlog(
    blogId,
    updateData,
    req.file
  );

  // Send response
  res.status(200).json({
    success: true,
    data: updatedBlog,
  });
});

/**
 * @route   DELETE /api/blogs/:id
 * @desc    Delete blog post
 * @access  Private/Admin
 */
export const deleteBlog = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;

  // Call service to delete blog
  await blogService.deleteBlog(blogId);

  // Send response
  res.status(200).json({
    success: true,
    message: "Blog post deleted successfully",
  });
});

/**
 * @route   POST /api/blogs/:id/images
 * @desc    Add images to blog post
 * @access  Private/Admin
 */
export const addBlogImages = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;
  const files = req.files || [];
  const captions = req.body.captions || [];

  // Call service to add images
  const updatedBlog = await blogService.addBlogImages(blogId, files, captions);

  // Send response
  res.status(200).json({
    success: true,
    message: "Images added successfully",
    data: updatedBlog,
  });
});

/**
 * @route   DELETE /api/blogs/:id/images/:imageId
 * @desc    Delete image from blog post
 * @access  Private/Admin
 */
export const deleteBlogImage = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;
  const imageId = req.params.imageId;

  // Call service to delete image
  const updatedBlog = await blogService.deleteBlogImage(blogId, imageId);

  // Send response
  res.status(200).json({
    success: true,
    message: "Image deleted successfully",
    data: updatedBlog,
  });
});

/**
 * @route   POST /api/blogs/upload-image
 * @desc    Upload image for content insertion (returns URL and img tag)
 * @access  Private/Admin
 * @body    blogId: string (optional) - If provided, saves image to blog's images array
 */
export const uploadContentImage = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Please upload an image file",
    });
  }

  const blogId = req.body.blogId;

  // Call service to upload image
  const result = await blogService.uploadContentImage(req.file, blogId);

  // Send response with image URL and img tag
  res.status(200).json({
    success: true,
    message: "Image uploaded successfully",
    data: {
      url: result.url,
      publicId: result.publicId,
      htmlTag: result.htmlTag,
    },
  });
});
