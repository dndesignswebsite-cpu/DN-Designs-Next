/**
 * Blog Service
 * Business logic for blog management
 * This layer contains all business logic, no direct database access
 */

import * as blogRepository from "../repositories/blogRepository.js";
import * as userRepository from "../repositories/userRepository.js";
import { AppError, throwError, logError } from "../middleware/errorHandler.js";
import { uploadImage, deleteImage } from "../config/cloudinary.js";
import fs from "fs";

/**
 * Get all blogs with filtering and pagination
 * @param {Object} filters - Filter criteria
 * @param {Object} pagination - Pagination options
 * @param {Object} currentUser - Current logged in user (optional)
 * @returns {Promise<Object>} Blogs with pagination info
 */
export const getAllBlogs = async (
  filters = {},
  pagination = {},
  currentUser = null
) => {
  // Build filter
  const filter = {};

  // If not admin, only show published blogs
  if (currentUser?.role !== "admin") {
    filter.isPublished = true;
    filter.publishedAt = { $lte: new Date() };
  } else if (filters.isPublished !== undefined) {
    // Admin can filter by published status
    filter.isPublished =
      filters.isPublished === "true" || filters.isPublished === true;
  }

  // Filter by category
  if (filters.category) {
    filter.category = filters.category;
  }

  // Filter by author
  if (filters.author) {
    filter.author = filters.author;
  }

  // Filter by tags
  if (filters.tags) {
    const tags = Array.isArray(filters.tags)
      ? filters.tags
      : filters.tags.split(",");
    filter.tags = { $in: tags };
  }

  // Search in title, content, excerpt
  if (filters.search) {
    filter.$or = [
      { title: { $regex: filters.search, $options: "i" } },
      { content: { $regex: filters.search, $options: "i" } },
      { excerpt: { $regex: filters.search, $options: "i" } },
    ];
  }

  // Build query options
  const options = {
    page: pagination.page,
    limit: pagination.limit,
    select: "-content", // Exclude content for list view
  };

  // Admin can sort
  if (currentUser?.role === "admin" && filters.sortBy) {
    const sortOrder = filters.sortOrder === "asc" ? 1 : -1;
    options.sort = { [filters.sortBy]: sortOrder };
  }

  // Get blogs from repository
  const result = await blogRepository.findAll(filter, options);

  return {
    blogs: result.blogs,
    count: result.blogs.length,
    total: result.pagination.total,
    page: result.pagination.page,
    pages: result.pagination.pages,
  };
};

/**
 * Get blog by ID or slug
 * @param {string} identifier - Blog ID or slug
 * @param {Object} currentUser - Current logged in user (optional)
 * @returns {Promise<Object>} Blog object
 */
export const getBlogById = async (identifier, currentUser = null) => {
  // Check if identifier is ObjectId or slug
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(identifier);

  let blog;
  if (isObjectId) {
    blog = await blogRepository.findById(identifier);
  } else {
    blog = await blogRepository.findBySlug(identifier);
  }

  if (!blog) {
    throwError("Blog not found", 404, { function: "getBlogById", identifier });
  }

  // Check if blog is published (unless admin)
  if (!blog.isPublished && currentUser?.role !== "admin") {
    throwError("Blog post not found", 404, {
      function: "getBlogById",
      identifier,
      isPublished: blog.isPublished,
    });
  }

  // Increment view count
  await blogRepository.incrementViews(blog._id);

  return blog;
};

/**
 * Create a new blog post
 * @param {Object} blogData - Blog data
 * @param {string} authorId - Author user ID
 * @param {Object} file - Uploaded file (featured image)
 * @returns {Promise<Object>} Created blog object
 */
export const createBlog = async (blogData, authorId, file = null) => {
  // Get author info
  const author = await userRepository.findById(authorId);
  if (!author) {
    throwError("Author not found", 404, { function: "createBlog", authorId });
  }

  // Handle featured image upload
  if (file) {
    try {
      const result = await uploadImage(file.path);
      blogData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id,
      };
      fs.unlinkSync(file.path);
    } catch (error) {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      throwError(error, 500, {
        function: "createBlog",
        authorId,
        operation: "uploadFeaturedImage",
      });
    }
  }

  // Add author info
  blogData.author = authorId;
  blogData.authorName = author.name;

  // Calculate reading time before creating
  if (blogData.content) {
    const wordsPerMinute = 200;
    const wordCount = blogData.content.split(/\s+/).length;
    blogData.readingTime = Math.ceil(wordCount / wordsPerMinute) || 1;
  }

  // If published, set publishedAt
  if (blogData.isPublished && !blogData.publishedAt) {
    blogData.publishedAt = new Date();
  }

  // Create blog
  const blog = await blogRepository.create(blogData);

  return blog;
};

/**
 * Update blog post
 * @param {string} blogId - Blog ID
 * @param {Object} updateData - Data to update
 * @param {Object} file - Uploaded file (featured image)
 * @returns {Promise<Object>} Updated blog object
 */
export const updateBlog = async (blogId, updateData, file = null) => {
  // Check if blog exists
  const existingBlog = await blogRepository.findById(blogId);
  if (!existingBlog) {
    throwError(`Blog not found with id of ${blogId}`, 404, {
      function: "updateBlog",
      blogId,
    });
  }

  // Handle featured image upload
  if (file) {
    try {
      const result = await uploadImage(file.path);

      // Delete old featured image if exists
      if (existingBlog.featuredImage?.publicId) {
        await deleteImage(existingBlog.featuredImage.publicId);
      }

      updateData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id,
      };

      fs.unlinkSync(file.path);
    } catch (error) {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      throwError(error, 500, {
        function: "updateBlog",
        blogId,
        operation: "uploadFeaturedImage",
      });
    }
  }

  // Handle tags array
  if (updateData.tags) {
    updateData.tags = Array.isArray(updateData.tags)
      ? updateData.tags
      : [updateData.tags];
  }

  // Handle meta keywords array
  if (updateData.metaKeywords) {
    updateData.metaKeywords = Array.isArray(updateData.metaKeywords)
      ? updateData.metaKeywords
      : [updateData.metaKeywords];
  }

  // Recalculate reading time if content changed
  if (updateData.content) {
    const wordsPerMinute = 200;
    const wordCount = updateData.content.split(/\s+/).length;
    updateData.readingTime = Math.ceil(wordCount / wordsPerMinute) || 1;
  }

  // Set publishedAt if publishing for first time
  if (updateData.isPublished === true && !existingBlog.publishedAt) {
    updateData.publishedAt = new Date();
  }

  // Update blog
  const updatedBlog = await blogRepository.updateById(blogId, updateData);

  return updatedBlog;
};

/**
 * Delete blog post
 * @param {string} blogId - Blog ID
 * @returns {Promise<boolean>} True if deleted
 */
export const deleteBlog = async (blogId) => {
  // Get blog to check if exists and get images
  const blog = await blogRepository.findById(blogId);
  if (!blog) {
    throwError(`Blog not found with id of ${blogId}`, 404, {
      function: "deleteBlog",
      blogId,
    });
  }

  // Delete featured image from Cloudinary
  if (blog.featuredImage?.publicId) {
    try {
      await deleteImage(blog.featuredImage.publicId);
    } catch (error) {
      logError(error, {
        function: "deleteBlog",
        blogId,
        operation: "deleteFeaturedImage",
        publicId: blog.featuredImage.publicId,
      });
    }
  }

  // Delete additional images from Cloudinary
  if (blog.images && blog.images.length > 0) {
    for (const image of blog.images) {
      if (image.publicId) {
        try {
          await deleteImage(image.publicId);
        } catch (error) {
          logError(error, {
            function: "deleteBlog",
            blogId,
            operation: "deleteImage",
            publicId: image.publicId,
          });
        }
      }
    }
  }

  // Delete blog
  await blogRepository.deleteById(blogId);

  return true;
};

/**
 * Add images to blog post
 * @param {string} blogId - Blog ID
 * @param {Array} files - Array of uploaded files
 * @param {Array} captions - Optional captions for images
 * @returns {Promise<Object>} Updated blog object
 */
export const addBlogImages = async (blogId, files, captions = []) => {
  // Check if blog exists
  const blog = await blogRepository.findById(blogId);
  if (!blog) {
    throwError(`Blog not found with id of ${blogId}`, 404, {
      function: "addBlogImages",
      blogId,
    });
  }

  if (!files || files.length === 0) {
    throwError("Please upload at least one image", 400, {
      function: "addBlogImages",
      blogId,
    });
  }

  const uploadedImages = [];

  try {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const result = await uploadImage(file.path);

      uploadedImages.push({
        url: result.secure_url,
        publicId: result.public_id,
        caption: captions[i] || "",
      });

      fs.unlinkSync(file.path);
    }

    // Add images to blog
    const existingImages = blog.images || [];
    const updatedImages = [...existingImages, ...uploadedImages];

    const updatedBlog = await blogRepository.updateById(blogId, {
      images: updatedImages,
    });

    return updatedBlog;
  } catch (error) {
    // Clean up uploaded files
    files.forEach((file) => {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    });
    throwError(error, 500, {
      function: "addBlogImages",
      blogId,
      filesCount: files.length,
    });
  }
};

/**
 * Delete image from blog post
 * @param {string} blogId - Blog ID
 * @param {string} imageId - Image ID to delete
 * @returns {Promise<Object>} Updated blog object
 */
export const deleteBlogImage = async (blogId, imageId) => {
  // Get blog
  const blog = await blogRepository.findById(blogId);
  if (!blog) {
    throwError(`Blog not found with id of ${blogId}`, 404, {
      function: "deleteBlogImage",
      blogId,
      imageId,
    });
  }

  // Find image
  const imageIndex = blog.images.findIndex(
    (img) => img._id.toString() === imageId
  );

  if (imageIndex === -1) {
    throwError("Image not found", 404, {
      function: "deleteBlogImage",
      blogId,
      imageId,
    });
  }

  const image = blog.images[imageIndex];

  // Delete from Cloudinary
  if (image.publicId) {
    try {
      await deleteImage(image.publicId);
    } catch (error) {
      logError(error, {
        function: "deleteBlogImage",
        blogId,
        imageId,
        publicId: image.publicId,
        operation: "deleteFromCloudinary",
      });
    }
  }

  // Remove from array
  const updatedImages = blog.images.filter(
    (img) => img._id.toString() !== imageId
  );

  // Update blog
  const updatedBlog = await blogRepository.updateById(blogId, {
    images: updatedImages,
  });

  return updatedBlog;
};

/**
 * Upload image for content insertion
 * Returns the image URL and HTML img tag that can be used in blog content
 * Optionally saves the image to a blog's images array
 * @param {Object} file - Uploaded file
 * @param {string} blogId - Optional blog ID to save image to blog's images array
 * @returns {Promise<Object>} Object with url, publicId, and htmlTag
 */
export const uploadContentImage = async (file, blogId = null) => {
  try {
    // Upload image without transformations (original size)
    const result = await uploadImage(file.path);

    const imageUrl = result.secure_url;
    const publicId = result.public_id;

    // Create img tag with style
    const htmlTag = `<img src="${imageUrl}" alt="Blog image" style="max-width: 100%; height: auto;" />`;

    // If blogId is provided, save image to blog's images array
    if (blogId) {
      const blog = await blogRepository.findById(blogId);
      if (!blog) {
        throwError(`Blog not found with id of ${blogId}`, 404, {
          function: "uploadContentImage",
          blogId,
        });
      }

      const existingImages = blog.images || [];
      const updatedImages = [
        ...existingImages,
        {
          url: imageUrl,
          publicId: publicId,
          caption: "",
        },
      ];

      await blogRepository.updateById(blogId, {
        images: updatedImages,
      });
    }

    fs.unlinkSync(file.path);

    return {
      url: imageUrl,
      publicId: publicId,
      htmlTag: htmlTag,
    };
  } catch (error) {
    if (fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }
    if (error instanceof AppError) {
      throw error;
    }
    throwError(error, 500, {
      function: "uploadContentImage",
      blogId: blogId || "none",
    });
  }
};
