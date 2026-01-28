/**
 * Blog Service
 * Business logic for blog management
 */

import * as blogRepository from "@/lib/repositories/blogRepository.js";
import * as userRepository from "@/lib/repositories/userRepository.js";
import {
  AppError,
  throwError,
  logError,
} from "@/lib/middleware/errorHandler.js";
import { uploadImageBuffer, deleteImage } from "@/lib/config/fileStorage.js";

export const getAllBlogs = async (
  filters = {},
  pagination = {},
  currentUser = null
) => {
  const filter = {};

  const allowedRoles = ["admin", "editor", "user"];
  if (!currentUser || !allowedRoles.includes(currentUser.role)) {
    filter.isPublished = true;
    // Use end of day to ensure blogs published "today" are visible
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    filter.publishedAt = { $lte: endOfDay };
  } else if (
    filters.isPublished === "true" ||
    filters.isPublished === "false"
  ) {
    filter.isPublished = filters.isPublished === "true";
  }

  if (filters.category) {
    filter.$or = [
      { primaryCategory: filters.category },
      { categories: filters.category },
    ];
  }
  if (filters.author) filter.author = filters.author;
  if (filters.tags) {
    const tags = Array.isArray(filters.tags)
      ? filters.tags
      : filters.tags.split(",");
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
    // for sorting by published date
    sort: { publishedAt: -1, createdAt: -1 }, 
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

  const allowedRoles = ["admin", "editor", "user"];
  if (
    !blog.isPublished &&
    (!currentUser || !allowedRoles.includes(currentUser.role))
  ) {
    throwError("Blog post not found", 404, {
      function: "getBlogById",
      identifier,
    });
  }

  await blogRepository.incrementViews(blog._id);

  return blog;
};

export const createBlog = async (
  blogData,
  authorId,
  imageBuffer = null,
  socialImages = {}
) => {
  const author = await userRepository.findById(authorId);
  if (!author) {
    throwError("Author not found", 404, { function: "createBlog", authorId });
  }

  // Handle Featured Image (Upload takes precedence over URL)
  if (imageBuffer) {
    try {
      const result = await uploadImageBuffer(imageBuffer, { folder: "blogs" });
      blogData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id,
        altText: blogData.featuredImageAltText || null,
      };
    } catch (error) {
      throwError(error, 500, {
        function: "createBlog",
        operation: "uploadFeaturedImage",
      });
    }
  } else if (blogData.featuredImageUrl) {
    blogData.featuredImage = {
      url: blogData.featuredImageUrl,
      publicId: null,
      altText: blogData.featuredImageAltText || null,
    };
  }

  // Handle OG Image
  if (socialImages.ogImageBuffer) {
    try {
      const result = await uploadImageBuffer(socialImages.ogImageBuffer, {
        folder: "blogs",
      });
      if (!blogData.openGraph) blogData.openGraph = {};
      blogData.openGraph.images = [
        {
          url: result.secure_url,
          publicId: result.public_id,
          alt: blogData.openGraph.title || "Blog OG Image",
          altText: blogData.ogImageAltText || null,
        },
      ];
    } catch (error) {
      logError(error, { function: "createBlog", operation: "uploadOgImage" });
    }
  } else if (blogData.ogImageUrl) {
    if (!blogData.openGraph) blogData.openGraph = {};
    blogData.openGraph.images = [
      {
        url: blogData.ogImageUrl,
        publicId: null,
        alt: blogData.openGraph.title || "Blog OG Image",
        altText: blogData.ogImageAltText || null,
      },
    ];
  }

  // Handle Twitter Image
  if (socialImages.twitterImageBuffer) {
    try {
      const result = await uploadImageBuffer(socialImages.twitterImageBuffer, {
        folder: "blogs",
      });
      if (!blogData.twitter) blogData.twitter = {};
      blogData.twitter.images = [
        {
          url: result.secure_url,
          publicId: result.public_id,
          alt: blogData.twitter.title || "Blog Twitter Image",
          altText: blogData.twitterImageAltText || null,
        },
      ];
    } catch (error) {
      logError(error, {
        function: "createBlog",
        operation: "uploadTwitterImage",
      });
    }
  } else if (blogData.twitterImageUrl) {
    if (!blogData.twitter) blogData.twitter = {};
    blogData.twitter.images = [
      {
        url: blogData.twitterImageUrl,
        publicId: null,
        alt: blogData.twitter.title || "Blog Twitter Image",
        altText: blogData.twitterImageAltText || null,
      },
    ];
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

export const updateBlog = async (
  blogId,
  updateData,
  imageBuffer = null,
  socialImages = {}
) => {
  const existingBlog = await blogRepository.findById(blogId);
  if (!existingBlog) {
    throwError(`Blog not found with id of ${blogId}`, 404, {
      function: "updateBlog",
      blogId,
    });
  }

  // Handle Featured Image Update
  if (imageBuffer) {
    try {
      const result = await uploadImageBuffer(imageBuffer, { folder: "blogs" });

      if (existingBlog.featuredImage?.publicId) {
        await deleteImage(existingBlog.featuredImage.publicId);
      }

      updateData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id,
        altText:
          updateData.featuredImageAltText ||
          existingBlog.featuredImage?.altText ||
          null,
      };
    } catch (error) {
      throwError(error, 500, {
        function: "updateBlog",
        operation: "uploadFeaturedImage",
      });
    }
  } else if (updateData.featuredImageUrl) {
    // If URL is provided, and it's different from current URL OR if it was previously an upload
    if (
      updateData.featuredImageUrl !== existingBlog.featuredImage?.url ||
      existingBlog.featuredImage?.publicId
    ) {
      // Delete old upload if it exists
      if (existingBlog.featuredImage?.publicId) {
        await deleteImage(existingBlog.featuredImage.publicId);
      }
      updateData.featuredImage = {
        url: updateData.featuredImageUrl,
        publicId: null,
        altText:
          updateData.featuredImageAltText ||
          existingBlog.featuredImage?.altText ||
          null,
      };
    } else if (updateData.featuredImageAltText !== undefined) {
      // Just update altText if URL is the same
      updateData["featuredImage.altText"] = updateData.featuredImageAltText;
    }
  } else if (updateData.featuredImageAltText !== undefined) {
    // Just update altText if no image change
    updateData["featuredImage.altText"] = updateData.featuredImageAltText;
  }

  // Handle OG Image Update
  if (socialImages.ogImageBuffer) {
    try {
      const result = await uploadImageBuffer(socialImages.ogImageBuffer, {
        folder: "blogs",
      });

      // Delete old image
      const oldImage = existingBlog.openGraph?.images?.[0];
      if (oldImage?.publicId) {
        await deleteImage(oldImage.publicId);
      }

      updateData["openGraph.images"] = [
        {
          url: result.secure_url,
          publicId: result.public_id,
          alt:
            updateData["openGraph.title"] ||
            existingBlog.openGraph?.title ||
            "Blog OG Image",
          altText: updateData.ogImageAltText || oldImage?.altText || null,
        },
      ];
    } catch (error) {
      logError(error, { function: "updateBlog", operation: "uploadOgImage" });
    }
  } else if (updateData.ogImageUrl) {
    const oldImage = existingBlog.openGraph?.images?.[0];
    if (updateData.ogImageUrl !== oldImage?.url || oldImage?.publicId) {
      if (oldImage?.publicId) {
        await deleteImage(oldImage.publicId);
      }
      updateData["openGraph.images"] = [
        {
          url: updateData.ogImageUrl,
          publicId: null,
          alt:
            updateData["openGraph.title"] ||
            existingBlog.openGraph?.title ||
            "Blog OG Image",
          altText: updateData.ogImageAltText || oldImage?.altText || null,
        },
      ];
    } else if (updateData.ogImageAltText !== undefined) {
      updateData["openGraph.images.0.altText"] = updateData.ogImageAltText;
    }
  } else if (updateData.ogImageAltText !== undefined) {
    updateData["openGraph.images.0.altText"] = updateData.ogImageAltText;
  }

  // Handle Twitter Image Update
  if (socialImages.twitterImageBuffer) {
    try {
      const result = await uploadImageBuffer(socialImages.twitterImageBuffer, {
        folder: "blogs",
      });

      // Delete old image
      const oldImage = existingBlog.twitter?.images?.[0];
      if (oldImage?.publicId) {
        await deleteImage(oldImage.publicId);
      }

      updateData["twitter.images"] = [
        {
          url: result.secure_url,
          publicId: result.public_id,
          alt:
            updateData["twitter.title"] ||
            existingBlog.twitter?.title ||
            "Blog Twitter Image",
          altText: updateData.twitterImageAltText || oldImage?.altText || null,
        },
      ];
    } catch (error) {
      logError(error, {
        function: "updateBlog",
        operation: "uploadTwitterImage",
      });
    }
  } else if (updateData.twitterImageUrl) {
    const oldImage = existingBlog.twitter?.images?.[0];
    if (updateData.twitterImageUrl !== oldImage?.url || oldImage?.publicId) {
      if (oldImage?.publicId) {
        await deleteImage(oldImage.publicId);
      }
      updateData["twitter.images"] = [
        {
          url: updateData.twitterImageUrl,
          publicId: null,
          alt:
            updateData["twitter.title"] ||
            existingBlog.twitter?.title ||
            "Blog Twitter Image",
          altText: updateData.twitterImageAltText || oldImage?.altText || null,
        },
      ];
    } else if (updateData.twitterImageAltText !== undefined) {
      updateData["twitter.images.0.altText"] = updateData.twitterImageAltText;
    }
  } else if (updateData.twitterImageAltText !== undefined) {
    updateData["twitter.images.0.altText"] = updateData.twitterImageAltText;
  }

  if (updateData.tags) {
    updateData.tags = Array.isArray(updateData.tags)
      ? updateData.tags
      : [updateData.tags];
  }

  if (updateData.categories) {
    updateData.categories = Array.isArray(updateData.categories)
      ? updateData.categories
      : [updateData.categories];
  }

  if (updateData.metaKeywords) {
    updateData.metaKeywords = Array.isArray(updateData.metaKeywords)
      ? updateData.metaKeywords
      : [updateData.metaKeywords];
  }

  if (updateData.content) {
    const wordsPerMinute = 200;
    const wordCount = updateData.content.split(/\s+/).length;
    updateData.readingTime = Math.ceil(wordCount / wordsPerMinute) || 1;
  }

  if (
    updateData.isPublished === true &&
    !existingBlog.publishedAt &&
    !updateData.publishedAt
  ) {
    updateData.publishedAt = new Date();
  }

  return await blogRepository.updateById(blogId, updateData);
};

export const deleteBlog = async (blogId) => {
  const blog = await blogRepository.findById(blogId);
  if (!blog) {
    throwError(`Blog not found with id of ${blogId}`, 404, {
      function: "deleteBlog",
      blogId,
    });
  }

  // Delete featured image
  if (blog.featuredImage?.publicId) {
    try {
      await deleteImage(blog.featuredImage.publicId);
    } catch (error) {
      logError(error, {
        function: "deleteBlog",
        operation: "deleteFeaturedImage",
      });
    }
  }

  // Delete OG image
  if (blog.openGraph?.images?.length > 0) {
    try {
      for (const img of blog.openGraph.images) {
        if (img.publicId) await deleteImage(img.publicId);
      }
    } catch (error) {
      logError(error, { function: "deleteBlog", operation: "deleteOgImage" });
    }
  }

  // Delete Twitter image
  if (blog.twitter?.images?.length > 0) {
    try {
      for (const img of blog.twitter.images) {
        if (img.publicId) await deleteImage(img.publicId);
      }
    } catch (error) {
      logError(error, {
        function: "deleteBlog",
        operation: "deleteTwitterImage",
      });
    }
  }

  // Delete gallery images
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

  // Delete videos from Cloudinary (if applicable)
  if (blog.videos && blog.videos.length > 0) {
    for (const video of blog.videos) {
      if (video.publicId && video.source === "cloudinary") {
        try {
          await deleteImage(video.publicId);
        } catch (error) {
          logError(error, { function: "deleteBlog", operation: "deleteVideo" });
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
    throwError(`Blog not found with id of ${blogId}`, 404, {
      function: "addBlogImages",
      blogId,
    });
  }

  if (!imageBuffers || imageBuffers.length === 0) {
    throwError("Please upload at least one image", 400, {
      function: "addBlogImages",
      blogId,
    });
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
    throwError(`Blog not found with id of ${blogId}`, 404, {
      function: "deleteBlogImage",
      blogId,
    });
  }

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

  if (image.publicId) {
    try {
      await deleteImage(image.publicId);
    } catch (error) {
      logError(error, {
        function: "deleteBlogImage",
        operation: "deleteFromCloudinary",
      });
    }
  }

  const updatedImages = blog.images.filter(
    (img) => img._id.toString() !== imageId
  );
  return await blogRepository.updateById(blogId, { images: updatedImages });
};

export const uploadContentImage = async (imageBuffer, blogId = null) => {
  try {
    const result = await uploadImageBuffer(imageBuffer, { folder: "blogs" });

    const imageUrl = result.secure_url;
    const publicId = result.public_id;
    const htmlTag = `<img src="${imageUrl}" alt="Blog image" style="max-width: 100%; height: auto;" />`;

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
        { url: imageUrl, publicId: publicId, caption: "" },
      ];

      await blogRepository.updateById(blogId, { images: updatedImages });
    }

    return { url: imageUrl, publicId, htmlTag };
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, {
      function: "uploadContentImage",
      blogId: blogId || "none",
    });
  }
};
