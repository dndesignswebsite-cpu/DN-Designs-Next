/**
 * Contact Repository
 * Handles all database operations for Contact model
 * This layer only communicates with the database
 */

import Contact from '../models/Contact.js';
import { AppError, throwError } from '../middleware/errorHandler.js';

/**
 * Find contact by ID
 * @param {string} contactId - Contact ID
 * @param {Object} options - Query options (select, etc.)
 * @returns {Promise<Object>} Contact document
 */
export const findById = async (contactId, options = {}) => {
  try {
    let query = Contact.findById(contactId);

    if (options.select) {
      query = query.select(options.select);
    }

    const contact = await query;
    return contact;
  } catch (error) {
    throwError(error, 500, { function: 'findById', contactId });
  }
};

/**
 * Find all contacts with filtering and pagination
 * @param {Object} filter - MongoDB filter object
 * @param {Object} options - Query options (page, limit, sort, select)
 * @returns {Promise<Object>} Object with contacts array and pagination info
 */
export const findAll = async (filter = {}, options = {}) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 10;
    const skip = (page - 1) * limit;

    let query = Contact.find(filter);

    if (options.select) {
      query = query.select(options.select);
    }

    if (options.sort) {
      query = query.sort(options.sort);
    } else {
      query = query.sort({ createdAt: -1 });
    }

    query = query.skip(skip).limit(limit);

    const [contacts, total] = await Promise.all([
      query.exec(),
      Contact.countDocuments(filter),
    ]);

    return {
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    throwError(error, 500, { function: 'findAll', filter, options });
  }
};

/**
 * Create a new contact
 * @param {Object} contactData - Contact data
 * @returns {Promise<Object>} Created contact document
 */
export const create = async (contactData) => {
  try {
    const contact = await Contact.create(contactData);
    return contact;
  } catch (error) {
    throwError(error, 500, { function: 'create', contactData });
  }
};

/**
 * Update contact by ID
 * @param {string} contactId - Contact ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated contact document
 */
export const updateById = async (contactId, updateData) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { $set: updateData },
      {
        new: true, // Return updated document
        runValidators: true, // Run model validators
      }
    );

    if (!contact) {
      throwError(`Contact not found with id of ${contactId}`, 404, { function: 'updateById', contactId });
    }

    return contact;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throwError(error, 500, { function: 'updateById', contactId, updateData });
  }
};

/**
 * Delete contact by ID
 * @param {string} contactId - Contact ID
 * @returns {Promise<boolean>} True if deleted
 */
export const deleteById = async (contactId) => {
  try {
    const contact = await Contact.findByIdAndDelete(contactId);

    if (!contact) {
      throwError(`Contact not found with id of ${contactId}`, 404, { function: 'updateById', contactId });
    }

    return true;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throwError(error, 500, { function: 'deleteById', contactId });
  }
};

/**
 * Count contacts with filter
 * @param {Object} filter - MongoDB filter
 * @returns {Promise<number>} Count of contacts
 */
export const count = async (filter = {}) => {
  try {
    return await Contact.countDocuments(filter);
  } catch (error) {
    throwError(error, 500, { function: 'count', filter });
  }
};

/**
 * Count contacts by status
 * @param {string} status - Contact status
 * @returns {Promise<number>} Count of contacts with status
 */
export const countByStatus = async (status) => {
  try {
    return await Contact.countDocuments({ status });
  } catch (error) {
    throw new AppError(`Error counting contacts by status: ${error.message}`, 500);
  }
};

/**
 * Count contacts created after date
 * @param {Date} date - Date to compare
 * @returns {Promise<number>} Count of contacts
 */
export const countAfterDate = async (date) => {
  try {
    return await Contact.countDocuments({
      createdAt: { $gte: date },
    });
  } catch (error) {
    throw new AppError(`Error counting contacts after date: ${error.message}`, 500);
  }
};

