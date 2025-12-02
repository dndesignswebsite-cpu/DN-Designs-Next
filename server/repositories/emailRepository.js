/**
 * Email Repository
 * Handles all database operations for Email model
 * This layer only communicates with the database
 */

import Email from "../models/Email.js";
import { throwError } from "../middleware/errorHandler.js";

/**
 * Find email group by type
 * @param {string} type - Email type
 * @returns {Promise<Object|null>} Email document or null
 */
export const findByType = async (type) => {
  try {
    return await Email.findOne({ type: type.toLowerCase(), isActive: true });
  } catch (error) {
    throwError(error, 500, { function: "findByType", type });
  }
};

/**
 * Find email group by ID
 * @param {string} emailId - Email group ID
 * @returns {Promise<Object|null>} Email document or null
 */
export const findById = async (emailId) => {
  try {
    return await Email.findById(emailId);
  } catch (error) {
    throwError(error, 500, { function: "findById", emailId });
  }
};

/**
 * Find all email groups
 * @param {Object} filter - Filter criteria
 * @returns {Promise<Array>} Array of email documents
 */
export const findAll = async (filter = {}) => {
  try {
    const defaultFilter = { isActive: true, ...filter };
    return await Email.find(defaultFilter).sort({ type: 1 });
  } catch (error) {
    throwError(error, 500, { function: "findAll", filter });
  }
};

/**
 * Get all active email addresses from all groups
 * @returns {Promise<Array>} Array of unique email addresses
 */
export const getAllActiveEmails = async () => {
  try {
    const emailGroups = await Email.find({ isActive: true });
    const allEmails = new Set();

    emailGroups.forEach((group) => {
      group.emails.forEach((email) => {
        allEmails.add(email);
      });
    });

    return Array.from(allEmails);
  } catch (error) {
    throwError(error, 500, { function: "getAllActiveEmails" });
  }
};

/**
 * Create a new email group
 * @param {Object} emailData - Email group data
 * @returns {Promise<Object>} Created email document
 */
export const create = async (emailData) => {
  try {
    // Normalize type to lowercase
    emailData.type = emailData.type.toLowerCase();

    const email = await Email.create(emailData);
    return email;
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, {
        function: "create",
        field,
        value: error.keyValue[field],
      });
    }
    throwError(error, 500, { function: "create", emailData });
  }
};

/**
 * Update email group by ID
 * @param {string} emailId - Email group ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated email document
 */
export const updateById = async (emailId, updateData) => {
  try {
    // Normalize type to lowercase if provided
    if (updateData.type) {
      updateData.type = updateData.type.toLowerCase();
    }

    const email = await Email.findByIdAndUpdate(
      emailId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!email) {
      throwError(`Email group not found with id of ${emailId}`, 404, {
        function: "updateById",
        emailId,
      });
    }

    return email;
  } catch (error) {
    if (error.statusCode === 404) {
      throw error;
    }
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, {
        function: "updateById",
        field,
        value: error.keyValue[field],
      });
    }
    throwError(error, 500, { function: "updateById", emailId, updateData });
  }
};

/**
 * Delete email group by ID
 * @param {string} emailId - Email group ID
 * @returns {Promise<boolean>} True if deleted
 */
export const deleteById = async (emailId) => {
  try {
    const email = await Email.findByIdAndDelete(emailId);

    if (!email) {
      throwError(`Email group not found with id of ${emailId}`, 404, {
        function: "deleteById",
        emailId,
      });
    }

    return true;
  } catch (error) {
    if (error.statusCode === 404) {
      throw error;
    }
    throwError(error, 500, { function: "deleteById", emailId });
  }
};

/**
 * Add email to a group
 * @param {string} type - Email type
 * @param {string} emailAddress - Email address to add
 * @returns {Promise<Object>} Updated email document
 */
export const addEmailToGroup = async (type, emailAddress) => {
  try {
    const email = await Email.findOneAndUpdate(
      { type: type.toLowerCase(), isActive: true },
      { $addToSet: { emails: emailAddress.toLowerCase() } },
      { new: true, runValidators: true }
    );

    if (!email) {
      throwError(`Email group not found with type: ${type}`, 404, {
        function: "addEmailToGroup",
        type,
      });
    }

    return email;
  } catch (error) {
    if (error.statusCode === 404) {
      throw error;
    }
    throwError(error, 500, { function: "addEmailToGroup", type, emailAddress });
  }
};

/**
 * Remove email from a group
 * @param {string} type - Email type
 * @param {string} emailAddress - Email address to remove
 * @returns {Promise<Object>} Updated email document
 */
export const removeEmailFromGroup = async (type, emailAddress) => {
  try {
    const email = await Email.findOneAndUpdate(
      { type: type.toLowerCase(), isActive: true },
      { $pull: { emails: emailAddress.toLowerCase() } },
      { new: true }
    );

    if (!email) {
      throwError(`Email group not found with type: ${type}`, 404, {
        function: "removeEmailFromGroup",
        type,
      });
    }

    return email;
  } catch (error) {
    if (error.statusCode === 404) {
      throw error;
    }
    throwError(error, 500, {
      function: "removeEmailFromGroup",
      type,
      emailAddress,
    });
  }
};

