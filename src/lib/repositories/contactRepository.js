/**
 * Contact Repository
 * Handles all database operations for Contact model
 */

import Contact from '@/lib/models/Contact.js';
import { AppError, throwError } from '@/lib/middleware/errorHandler.js';

export const findById = async (contactId, options = {}) => {
  try {
    let query = Contact.findById(contactId);
    if (options.select) query = query.select(options.select);
    return await query;
  } catch (error) {
    throwError(error, 500, { function: 'findById', contactId });
  }
};

export const findAll = async (filter = {}, options = {}) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 10;
    const skip = (page - 1) * limit;

    let query = Contact.find(filter);
    if (options.select) query = query.select(options.select);
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
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  } catch (error) {
    throwError(error, 500, { function: 'findAll', filter, options });
  }
};

export const create = async (contactData) => {
  try {
    return await Contact.create(contactData);
  } catch (error) {
    throwError(error, 500, { function: 'create', contactData });
  }
};

export const updateById = async (contactId, updateData) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { $set: updateData },
      { new: true, runValidators: true }
    );
    if (!contact) {
      throwError(`Contact not found with id of ${contactId}`, 404, { function: 'updateById', contactId });
    }
    return contact;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: 'updateById', contactId, updateData });
  }
};

export const deleteById = async (contactId) => {
  try {
    const contact = await Contact.findByIdAndDelete(contactId);
    if (!contact) {
      throwError(`Contact not found with id of ${contactId}`, 404, { function: 'deleteById', contactId });
    }
    return true;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throwError(error, 500, { function: 'deleteById', contactId });
  }
};

export const count = async (filter = {}) => {
  try {
    return await Contact.countDocuments(filter);
  } catch (error) {
    throwError(error, 500, { function: 'count', filter });
  }
};

export const countByStatus = async (status) => {
  try {
    return await Contact.countDocuments({ status });
  } catch (error) {
    throwError(error, 500, { function: 'countByStatus', status });
  }
};

export const countAfterDate = async (date) => {
  try {
    return await Contact.countDocuments({ createdAt: { $gte: date } });
  } catch (error) {
    throwError(error, 500, { function: 'countAfterDate', date });
  }
};

