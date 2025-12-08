/**
 * Blog Service
 * Business logic for blog management
 */

import * as blogRepository from "@/lib/repositories/blogRepository.js";
import * as userRepository from "@/lib/repositories/userRepository.js";
import { AppError, throwError, logError } from "@/lib/middleware/errorHandler.js";
import { uploadImageBuffer, deleteImage } from "@/lib/config/cloudinary.js";

export const getAllBlogs = async (filters = {}, pagination = {}, currentUser = null) => {
  const filter = {};

  if (currentUser?.role !== "admin") {
    filter.isPublished = true;
    filter.publishedAt = { $lte: new Date() };
  } else if (filters.isPublished !== undefined) {
    filter.isPublished = filters.isPublished === "true" || filters.isPublished === true;
  }

  if (filters.category) filter.category = filters.category;
  if (filters.author) filter.author = filters.author;
  if (filters.tags) {
    const tags = Array.isArray(filters.tags) ? filters.tags : filters.tags.split(",");
    filter.tags = { $in: tags };
  }
  if (filters.search) {
    filter.$or = [
      { title: { $regex: filters.search, $options: "i" } },
      { content: { $regex: filters.search, $options: "i" } },
      { excerpt: { $regex: filters.search, $options: "i" } },
    ];
  }

  const options = {
    page: pagination.page,
    limit: pagination.limit,
    select: "-content",
  };

  if (currentUser?.role === "admin" && filters.sortBy) {
    const sortOrder = filters.sortOrder === "asc" ? 1 : -1;
    options.sort = { [filters.sortBy]: sortOrder };
  }

  const result = await blogRepository.findAll(filter, options);

  return {
    blogs: result.blogs,
    count: result.blogs.length,
    total: result.pagination.total,
    page: result.pagination.page,
    pages: result.pagination.pages,
  };
};

export const getBlogById = async (identifier, currentUser = null) => {
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

  if (!blog.isPublished && currentUser?.role !== "admin") {
    throwError("Blog post not found", 404, { function: "getBlogById", identifier });
  }

  await blogRepository.incrementViews(blog._id);

  return blog;
};

export const createBlog = async (blogData, authorId, imageBuffer = null) => {
  const author = await userRepository.findById(authorId);
  if (!author) {
    throwError("Author not found", 404, { function: "createBlog", authorId });
  }

  if (imageBuffer) {
    try {
      const result = await uploadImageBuffer(imageBuffer);
      blogData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id,
      };
    } catch (error) {
      throwError(error, 500, { function: "createBlog", operation: "uploadFeaturedImage" });
    }
  }

  blogData.author = authorId;
  blogData.authorName = author.name;

  if (blogData.content) {
    const wordsPerMinute = 200;
    const wordCount = blogData.content.split(/\s+/).length;
    blogData.readingTime = Math.ceil(wordCount / wordsPerMinute) || 1;
  }

  if (blogData.isPublished && !blogData.publishedAt) {
    blogData.publishedAt = new Date();
  }

  return await blogRepository.create(blogData);
};

export const updateBlog = async (blogId, updateData, imageBuffer = null) => {
  const existingBlog = await blogRepository.findById(blogId);
  if (!existingBlog) {
    throwError(`Blog not found with id of ${blogId}`, 404, { function: "updateBlog", blogId });
  }

  if (imageBuffer) {
    try {
      const result = await uploadImageBuffer(imageBuffer);

      if (existingBlog.featuredImage?.publicId) {
        await deleteImage(existingBlog.featuredImage.publicId);
      }

      updateData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id,
      };
    } catch (error) {
      throwError(error, 500, { function: "updateBlog", operation: "uploadFeaturedImage" });
    }
  }

  if (updateData.tags) {
    updateData.tags = Array.isArray(updateData.tags) ? updateData.tags : [updateData.tags];
  }

  if (updateData.metaKeywords) {
    updateData.metaKeywords = Array.isArray(updateData.metaKeywords) 
      ? updateData.metaKeywords : [updateData.metaKeywords];
  }

  if (updateData.content) {
    const wordsPerMinute = 200;
    const wordCount = updateData.content.split(/\s+/).length;
    updateData.readingTime = Math.ceil(wordCount / wordsPerMinute) || 1;
  }

  if (updateData.isPublished === true && !existingBlog.publishedAt) {
    updateData.publishedAt = new Date();
  }

  return await blogRepository.updateById(blogId, updateData);
};

export const deleteBlog = async (blogId) => {
  const blog = await blogRepository.findById(blogId);
  if (!blog) {
    throwError(`Blog not found with id of ${blogId}`, 404, { function: "deleteBlog", blogId });
  }

  if (blog.featuredImage?.publicId) {
    try {
      await deleteImage(blog.featuredImage.publicId);
    } catch (error) {
      logError(error, { function: "deleteBlog", operation: "deleteFeaturedImage" });
    }
  }

  if (blog.images && blog.images.length > 0) {
    for (const image of blog.images) {
      if (image.publicId) {
        try {
          await deleteImage(image.publicId);
        } catch (error) {
          logError(error, { function: "deleteBlog", operation: "deleteImage" });
        }
      }
    }
  }

  await blogRepository.deleteById(blogId);
  return true;
};

export const addBlogImages = async (blogId, imageBuffers, captions = []) => {
  const blog = await blogRepository.findById(blogId);
  if (!blog) {
    throwError(`Blog not found with id of ${blogId}`, 404, { function: "addBlogImages", blogId });
  }

  if (!imageBuffers || imageBuffers.length === 0) {
    throwError("Please upload at least one image", 400, { function: "addBlogImages", blogId });
  }

  const uploadedImages = [];

  try {
    for (let i = 0; i < imageBuffers.length; i++) {
      const result = await uploadImageBuffer(imageBuffers[i]);
      uploadedImages.push({
        url: result.secure_url,
        publicId: result.public_id,
        caption: captions[i] || "",
      });
    }

    const existingImages = blog.images || [];
    const updatedImages = [...existingImages, ...uploadedImages];

    return await blogRepository.updateById(blogId, { images: updatedImages });
  } catch (error) {
    throwError(error, 500, { function: "addBlogImages", blogId });
  }
};

export const deleteBlogImage = async (blogId, imageId) => {
  const blog = await blogRepository.findById(blogId);
  if (!blog) {
    throwError(`Blog not found with id of ${blogId}`, 404, { function: "deleteBlogImage", blogId });
  }

  const imageIndex = blog.images.findIndex((img) => img._id.toString() === imageId);
  if (imageIndex === -1) {
    throwError("Image not found", 404, { function: "deleteBlogImage", blogId, imageId });
  }

  const image = blog.images[imageIndex];

  if (image.publicId) {
    try {
      await deleteImage(image.publicId);
    } catch (error) {
      logError(error, { function: "deleteBlogImage", operation: "deleteFromCloudinary" });
    }
  }

  const updatedImages = blog.images.filter((img) => img._id.toString() !== imageId);
  return await blogRepository.updateById(blogId, { images: updatedImages });
};

export const uploadContentImage = async (imageBuffer, blogId = null) => {
  try {
    const result = await uploadImageBuffer(imageBuffer);

    const imageUrl = result.secure_url;
    const publicId = result.public_id;
    const htmlTag = `<img src="${imageUrl}" alt="Blog image" style="max-width: 100%; height: auto;" />`;

    if (blogId) {
      const blog = await blogRepository.findById(blogId);
      if (!blog) {
        throwError(`Blog not found with id of ${blogId}`, 404, { function: "uploadContentImage", blogId });
      }

      const existingImages = blog.images || [];
      const updatedImages = [
        ...existingImages,
        { url: imageUrl, publicId: publicId, caption: "" },
      ];

      await blogRepository.updateById(blogId, { images: updatedImages });
    }

    return { url: imageUrl, publicId, htmlTag };
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: "uploadContentImage", blogId: blogId || "none" });
  }
};

