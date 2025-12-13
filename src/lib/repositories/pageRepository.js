/**
 * Page Repository
 * Handles all database operations for Page model
 */

import Page from "@/lib/models/Page.js";
import { AppError, throwError } from "@/lib/middleware/errorHandler.js";

export const findById = async (pageId, options = {}) => {
  try {
    let query = Page.findById(pageId);
    if (options.select) query = query.select(options.select);
    if (options.populate) {
      query = query.populate(options.populate);
    } else {
      query = query.populate("lastModifiedBy", "name email");
    }
    return await query;
  } catch (error) {
    throwError(error, 500, { function: "findById", pageId });
  }
};

export const findBySlug = async (slug, options = {}) => {
  try {
    let query = Page.findOne({ slug });
    if (options.select) query = query.select(options.select);
    if (options.populate) {
      query = query.populate(options.populate);
    } else {
      query = query.populate("lastModifiedBy", "name email");
    }
    return await query;
  } catch (error) {
    throwError(error, 500, { function: "findBySlug", slug });
  }
};

export const findByPageType = async (pageType, options = {}) => {
  try {
    let query = Page.findOne({ pageType });
    if (options.select) query = query.select(options.select);
    if (options.populate) {
      query = query.populate(options.populate);
    } else {
      query = query.populate("lastModifiedBy", "name email");
    }
    return await query;
  } catch (error) {
    throwError(error, 500, { function: "findByPageType", pageType });
  }
};

export const findAll = async (filter = {}, options = {}) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 50;
    const skip = (page - 1) * limit;

    let query = Page.find(filter);
    if (options.select) query = query.select(options.select);
    if (options.populate) {
      query = query.populate(options.populate);
    } else {
      query = query.populate("lastModifiedBy", "name email");
    }
    if (options.sort) {
      query = query.sort(options.sort);
    } else {
      query = query.sort({ order: 1, createdAt: -1 });
    }
    query = query.skip(skip).limit(limit);

    const [pages, total] = await Promise.all([
      query.exec(),
      Page.countDocuments(filter),
    ]);

    return {
      pages,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  } catch (error) {
    throwError(error, 500, { function: "findAll", filter, options });
  }
};

export const create = async (pageData) => {
  try {
    const page = await Page.create(pageData);
    if (pageData.lastModifiedBy) {
      await page.populate("lastModifiedBy", "name email");
    }
    return page;
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: "create", field });
    }
    throwError(error, 500, { function: "create", pageData });
  }
};

export const updateById = async (pageId, updateData) => {
  try {
    const page = await Page.findByIdAndUpdate(
      pageId,
      { $set: updateData },
      { new: true, runValidators: true }
    ).populate("lastModifiedBy", "name email");

    if (!page) {
      throwError(`Page not found with id of ${pageId}`, 404, {
        function: "updateById",
        pageId,
      });
    }
    return page;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: "updateById", pageId, updateData });
  }
};

export const deleteById = async (pageId) => {
  try {
    const page = await Page.findByIdAndDelete(pageId);
    if (!page) {
      throwError(`Page not found with id of ${pageId}`, 404, {
        function: "deleteById",
        pageId,
      });
    }
    return true;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: "deleteById", pageId });
  }
};

export const incrementViews = async (pageId) => {
  try {
    const page = await Page.findByIdAndUpdate(
      pageId,
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!page) {
      throwError(`Page not found with id of ${pageId}`, 404, {
        function: "incrementViews",
        pageId,
      });
    }
    return page;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: "incrementViews", pageId });
  }
};

export const count = async (filter = {}) => {
  try {
    return await Page.countDocuments(filter);
  } catch (error) {
    throwError(error, 500, { function: "count", filter });
  }
};

export const updateBySlug = async (slug, updateData) => {
  try {
    const page = await Page.findOneAndUpdate(
      { slug },
      { $set: updateData },
      { new: true, runValidators: true }
    ).populate("lastModifiedBy", "name email");

    if (!page) {
      throwError(`Page not found with slug: ${slug}`, 404, {
        function: "updateBySlug",
        slug,
      });
    }
    return page;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: "updateBySlug", slug, updateData });
  }
};
