/**
 * Page Service
 * Business logic for page management
 */

import * as pageRepository from "@/lib/repositories/pageRepository.js";
import {
  AppError,
  throwError,
  logError,
} from "@/lib/middleware/errorHandler.js";
import { uploadImageBuffer, deleteImage } from "@/lib/config/fileStorage.js";

/**
 * Get all pages with filtering and pagination
 */
export const getAllPages = async (
  filters = {},
  pagination = {},
  currentUser = null
) => {
  const filter = {};

  // Non-admin users can only see published pages
  // Non-admin/editor/user users (public) can only see published pages
  const allowedRoles = ["admin", "editor", "user"];
  if (!currentUser || !allowedRoles.includes(currentUser.role)) {
    filter.isPublished = true;
    filter.publishedAt = { $lte: new Date() };
  } else if (filters.isPublished !== undefined) {
    filter.isPublished =
      filters.isPublished === "true" || filters.isPublished === true;
  }

  if (filters.pageType) filter.pageType = filters.pageType;
  if (filters.search) {
    filter.$or = [
      { title: { $regex: filters.search, $options: "i" } },
      { description: { $regex: filters.search, $options: "i" } },
      { slug: { $regex: filters.search, $options: "i" } },
    ];
  }

  const options = {
    page: pagination.page,
    limit: pagination.limit,
  };

  if (filters.sortBy) {
    const sortOrder = filters.sortOrder === "asc" ? 1 : -1;
    options.sort = { [filters.sortBy]: sortOrder };
  }

  const result = await pageRepository.findAll(filter, options);

  return {
    pagesData: result.pages,
    count: result.pages.length,
    total: result.pagination.total,
    page: result.pagination.page,
    pages: result.pagination.pages,
  };
};

/**
 * Get page by ID or slug
 */
export const getPageById = async (
  identifier,
  currentUser = null,
  incrementView = true
) => {
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(identifier);

  let page;
  if (isObjectId) {
    page = await pageRepository.findById(identifier);
  } else {
    page = await pageRepository.findBySlug(identifier);
  }

  if (!page) {
    throwError("Page not found", 404, { function: "getPageById", identifier });
  }

  // Non-admin/editor/user users (public) can only see published pages
  const allowedRoles = ["admin", "editor", "user"];
  if (
    !page.isPublished &&
    (!currentUser || !allowedRoles.includes(currentUser.role))
  ) {
    throwError("Page not found", 404, { function: "getPageById", identifier });
  }

  // Increment views for public access
  if (incrementView && currentUser?.role !== "admin") {
    await pageRepository.incrementViews(page._id);
  }

  return page;
};

/**
 * Get page by page type (useful for specific pages like 'home', 'about', etc.)
 */
export const getPageByType = async (pageType, currentUser = null) => {
  const page = await pageRepository.findByPageType(pageType);

  if (!page) {
    throwError(`Page not found with type: ${pageType}`, 404, {
      function: "getPageByType",
      pageType,
    });
  }

  if (!page.isPublished && currentUser?.role !== "admin") {
    throwError("Page not found", 404, { function: "getPageByType", pageType });
  }

  return page;
};

/**
 * Create a new page
 */
export const createPage = async (
  pageData,
  userId,
  imageBuffer = null,
  socialImages = {}
) => {
  // Upload featured image
  if (imageBuffer) {
    try {
      const result = await uploadImageBuffer(imageBuffer);
      pageData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id,
        alt: pageData.featuredImageAlt || "",
      };
    } catch (error) {
      throwError(error, 500, {
        function: "createPage",
        operation: "uploadFeaturedImage",
      });
    }
  }

  // Upload OG image
  if (socialImages.ogImageBuffer) {
    try {
      const result = await uploadImageBuffer(socialImages.ogImageBuffer);
      if (!pageData.openGraph) pageData.openGraph = {};
      pageData.openGraph.images = [
        {
          url: result.secure_url,
          publicId: result.public_id,
          alt: pageData.openGraph.title || "Page OG Image",
        },
      ];
    } catch (error) {
      logError(error, { function: "createPage", operation: "uploadOgImage" });
    }
  }

  // Upload Twitter image
  if (socialImages.twitterImageBuffer) {
    try {
      const result = await uploadImageBuffer(socialImages.twitterImageBuffer);
      if (!pageData.twitter) pageData.twitter = {};
      pageData.twitter.images = [
        {
          url: result.secure_url,
          publicId: result.public_id,
          alt: pageData.twitter.title || "Page Twitter Image",
        },
      ];
    } catch (error) {
      logError(error, {
        function: "createPage",
        operation: "uploadTwitterImage",
      });
    }
  }

  pageData.lastModifiedBy = userId;

  if (pageData.isPublished && !pageData.publishedAt) {
    pageData.publishedAt = new Date();
  }

  return await pageRepository.create(pageData);
};

/**
 * Update an existing page
 */
export const updatePage = async (
  pageId,
  updateData,
  userId,
  imageBuffer = null,
  socialImages = {}
) => {
  const existingPage = await pageRepository.findById(pageId);
  if (!existingPage) {
    throwError(`Page not found with id of ${pageId}`, 404, {
      function: "updatePage",
      pageId,
    });
  }

  // Upload featured image
  if (imageBuffer) {
    try {
      const result = await uploadImageBuffer(imageBuffer);

      // Delete old image
      if (existingPage.featuredImage?.publicId) {
        await deleteImage(existingPage.featuredImage.publicId);
      }

      updateData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id,
        alt:
          updateData.featuredImageAlt || existingPage.featuredImage?.alt || "",
      };
    } catch (error) {
      throwError(error, 500, {
        function: "updatePage",
        operation: "uploadFeaturedImage",
      });
    }
  }

  // Upload OG image
  if (socialImages.ogImageBuffer) {
    try {
      const result = await uploadImageBuffer(socialImages.ogImageBuffer);

      if (existingPage.openGraph?.images?.[0]?.publicId) {
        await deleteImage(existingPage.openGraph.images[0].publicId);
      }

      if (!updateData.openGraph)
        updateData.openGraph = existingPage.openGraph || {};

      updateData.openGraph.images = [
        {
          url: result.secure_url,
          publicId: result.public_id,
          alt:
            updateData.openGraph.title ||
            existingPage.openGraph?.title ||
            "Page OG Image",
        },
      ];
    } catch (error) {
      logError(error, { function: "updatePage", operation: "uploadOgImage" });
    }
  }

  // Upload Twitter image
  if (socialImages.twitterImageBuffer) {
    try {
      const result = await uploadImageBuffer(socialImages.twitterImageBuffer);

      if (existingPage.twitter?.images?.[0]?.publicId) {
        await deleteImage(existingPage.twitter.images[0].publicId);
      }

      if (!updateData.twitter) updateData.twitter = existingPage.twitter || {};

      updateData.twitter.images = [
        {
          url: result.secure_url,
          publicId: result.public_id,
          alt:
            updateData.twitter.title ||
            existingPage.twitter?.title ||
            "Page Twitter Image",
        },
      ];
    } catch (error) {
      logError(error, {
        function: "updatePage",
        operation: "uploadTwitterImage",
      });
    }
  }

  // Handle focus keywords
  if (updateData.focusKeywords) {
    updateData.focusKeywords = Array.isArray(updateData.focusKeywords)
      ? updateData.focusKeywords
      : [updateData.focusKeywords];
  }

  // Set last modified by
  updateData.lastModifiedBy = userId;

  // Handle publishing
  if (
    updateData.isPublished === true &&
    !existingPage.publishedAt &&
    !updateData.publishedAt
  ) {
    updateData.publishedAt = new Date();
  }

  return await pageRepository.updateById(pageId, updateData);
};

/**
 * Delete a page
 */
export const deletePage = async (pageId) => {
  const page = await pageRepository.findById(pageId);
  if (!page) {
    throwError(`Page not found with id of ${pageId}`, 404, {
      function: "deletePage",
      pageId,
    });
  }

  // Delete featured image
  if (page.featuredImage?.publicId) {
    try {
      await deleteImage(page.featuredImage.publicId);
    } catch (error) {
      logError(error, {
        function: "deletePage",
        operation: "deleteFeaturedImage",
      });
    }
  }

  // Delete OG image
  if (page.openGraph?.images?.length > 0) {
    try {
      for (const img of page.openGraph.images) {
        if (img.publicId) await deleteImage(img.publicId);
      }
    } catch (error) {
      logError(error, { function: "deletePage", operation: "deleteOgImage" });
    }
  }

  // Delete Twitter image
  if (page.twitter?.images?.length > 0) {
    try {
      for (const img of page.twitter.images) {
        if (img.publicId) await deleteImage(img.publicId);
      }
    } catch (error) {
      logError(error, {
        function: "deletePage",
        operation: "deleteTwitterImage",
      });
    }
  }

  // Delete additional images
  if (page.images && page.images.length > 0) {
    for (const image of page.images) {
      if (image.publicId) {
        try {
          await deleteImage(image.publicId);
        } catch (error) {
          logError(error, { function: "deletePage", operation: "deleteImage" });
        }
      }
    }
  }

  await pageRepository.deleteById(pageId);
  return true;
};

/**
 * Add images to a page
 */
export const addPageImages = async (pageId, imageBuffers, imageData = []) => {
  const page = await pageRepository.findById(pageId);
  if (!page) {
    throwError(`Page not found with id of ${pageId}`, 404, {
      function: "addPageImages",
      pageId,
    });
  }

  if (!imageBuffers || imageBuffers.length === 0) {
    throwError("Please upload at least one image", 400, {
      function: "addPageImages",
      pageId,
    });
  }

  const uploadedImages = [];

  try {
    for (let i = 0; i < imageBuffers.length; i++) {
      const result = await uploadImageBuffer(imageBuffers[i]);
      uploadedImages.push({
        url: result.secure_url,
        publicId: result.public_id,
        alt: imageData[i]?.alt || "",
        caption: imageData[i]?.caption || "",
      });
    }

    const existingImages = page.images || [];
    const updatedImages = [...existingImages, ...uploadedImages];

    return await pageRepository.updateById(pageId, { images: updatedImages });
  } catch (error) {
    throwError(error, 500, { function: "addPageImages", pageId });
  }
};

/**
 * Delete an image from a page
 */
export const deletePageImage = async (pageId, imageId) => {
  const page = await pageRepository.findById(pageId);
  if (!page) {
    throwError(`Page not found with id of ${pageId}`, 404, {
      function: "deletePageImage",
      pageId,
    });
  }

  const imageIndex = page.images.findIndex(
    (img) => img._id.toString() === imageId
  );
  if (imageIndex === -1) {
    throwError("Image not found", 404, {
      function: "deletePageImage",
      pageId,
      imageId,
    });
  }

  const image = page.images[imageIndex];

  if (image.publicId) {
    try {
      await deleteImage(image.publicId);
    } catch (error) {
      logError(error, {
        function: "deletePageImage",
        operation: "deleteFromCloudinary",
      });
    }
  }

  const updatedImages = page.images.filter(
    (img) => img._id.toString() !== imageId
  );
  return await pageRepository.updateById(pageId, { images: updatedImages });
};

/**
 * Get page statistics
 */
export const getPageStats = async () => {
  const [total, published, drafts] = await Promise.all([
    pageRepository.count(),
    pageRepository.count({ isPublished: true }),
    pageRepository.count({ isPublished: false }),
  ]);

  return {
    total,
    published,
    drafts,
  };
};
