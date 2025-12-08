/**
 * Email Repository
 * Handles all database operations for Email model
 */

import Email from "@/lib/models/Email.js";
import { throwError } from "@/lib/middleware/errorHandler.js";

export const findByType = async (type) => {
  try {
    return await Email.findOne({ type: type.toLowerCase(), isActive: true });
  } catch (error) {
    throwError(error, 500, { function: "findByType", type });
  }
};

export const findById = async (emailId) => {
  try {
    return await Email.findById(emailId);
  } catch (error) {
    throwError(error, 500, { function: "findById", emailId });
  }
};

export const findAll = async (filter = {}) => {
  try {
    const defaultFilter = { isActive: true, ...filter };
    return await Email.find(defaultFilter).sort({ type: 1 });
  } catch (error) {
    throwError(error, 500, { function: "findAll", filter });
  }
};

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

export const create = async (emailData) => {
  try {
    emailData.type = emailData.type.toLowerCase();
    return await Email.create(emailData);
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: "create", field });
    }
    throwError(error, 500, { function: "create", emailData });
  }
};

export const updateById = async (emailId, updateData) => {
  try {
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
    if (error.statusCode === 404) throw error;
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throwError(`${field} already exists`, 400, { function: "updateById", field });
    }
    throwError(error, 500, { function: "updateById", emailId, updateData });
  }
};

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
    if (error.statusCode === 404) throw error;
    throwError(error, 500, { function: "deleteById", emailId });
  }
};

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
    if (error.statusCode === 404) throw error;
    throwError(error, 500, { function: "addEmailToGroup", type, emailAddress });
  }
};

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
    if (error.statusCode === 404) throw error;
    throwError(error, 500, { function: "removeEmailFromGroup", type, emailAddress });
  }
};

