/**
 * Email Service
 * Business logic for email group management
 * This layer contains all business logic, no direct database access
 */

import * as emailRepository from "../repositories/emailRepository.js";
import { throwError, logError } from "../middleware/errorHandler.js";
import { sendPromotionalEmail } from "../config/email.js";

/**
 * Get all email groups
 * @param {Object} filters - Filter criteria
 * @returns {Promise<Array>} Array of email groups
 */
export const getAllEmailGroups = async (filters = {}) => {
  const filter = {};

  // Filter by type
  if (filters.type) {
    filter.type = filters.type.toLowerCase();
  }

  // Filter by active status
  if (filters.isActive !== undefined) {
    filter.isActive = filters.isActive === "true" || filters.isActive === true;
  }

  // Get email groups from repository
  const emailGroups = await emailRepository.findAll(filter);

  return emailGroups;
};

/**
 * Get email group by ID
 * @param {string} emailId - Email group ID
 * @returns {Promise<Object>} Email group object
 */
export const getEmailGroupById = async (emailId) => {
  const emailGroup = await emailRepository.findById(emailId);

  if (!emailGroup) {
    throwError(`Email group not found with id of ${emailId}`, 404, {
      function: "getEmailGroupById",
      emailId,
    });
  }

  return emailGroup;
};

/**
 * Get email group by type
 * @param {string} type - Email type
 * @returns {Promise<Object>} Email group object
 */
export const getEmailGroupByType = async (type) => {
  const emailGroup = await emailRepository.findByType(type);

  if (!emailGroup) {
    throwError(`Email group not found with type: ${type}`, 404, {
      function: "getEmailGroupByType",
      type,
    });
  }

  return emailGroup;
};

/**
 * Get all active email addresses
 * @returns {Promise<Array>} Array of unique email addresses
 */
export const getAllActiveEmails = async () => {
  const emails = await emailRepository.getAllActiveEmails();
  return emails;
};

/**
 * Create a new email group
 * @param {Object} emailData - Email group data
 * @returns {Promise<Object>} Created email group object
 */
export const createEmailGroup = async (emailData) => {
  const { type, emails, description } = emailData;

  // Validate required fields
  if (!type) {
    throwError("Email type is required", 400, { function: "createEmailGroup" });
  }

  if (!emails || !Array.isArray(emails) || emails.length === 0) {
    throwError("At least one email address is required", 400, {
      function: "createEmailGroup",
    });
  }

  // Validate email addresses
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const invalidEmails = emails.filter((email) => !emailRegex.test(email));
  if (invalidEmails.length > 0) {
    throwError(`Invalid email addresses: ${invalidEmails.join(", ")}`, 400, {
      function: "createEmailGroup",
      invalidEmails,
    });
  }

  // Create email group
  const emailGroup = await emailRepository.create({
    type: type.toLowerCase(),
    emails: emails.map((email) => email.toLowerCase().trim()),
    description: description || "",
    isActive: true,
  });

  return emailGroup;
};

/**
 * Update email group
 * @param {string} emailId - Email group ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated email group object
 */
export const updateEmailGroup = async (emailId, updateData) => {
  // Validate emails if provided
  if (updateData.emails) {
    if (!Array.isArray(updateData.emails) || updateData.emails.length === 0) {
      throwError("At least one email address is required", 400, {
        function: "updateEmailGroup",
        emailId,
      });
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const invalidEmails = updateData.emails.filter(
      (email) => !emailRegex.test(email)
    );
    if (invalidEmails.length > 0) {
      throwError(`Invalid email addresses: ${invalidEmails.join(", ")}`, 400, {
        function: "updateEmailGroup",
        emailId,
        invalidEmails,
      });
    }

    // Normalize emails
    updateData.emails = updateData.emails.map((email) =>
      email.toLowerCase().trim()
    );
  }

  // Update email group
  const updatedEmailGroup = await emailRepository.updateById(
    emailId,
    updateData
  );

  return updatedEmailGroup;
};

/**
 * Delete email group
 * @param {string} emailId - Email group ID
 * @returns {Promise<boolean>} True if deleted
 */
export const deleteEmailGroup = async (emailId) => {
  // Delete email group (repository will check if exists)
  await emailRepository.deleteById(emailId);

  return true;
};

/**
 * Add email to a group
 * @param {string} type - Email type
 * @param {string} emailAddress - Email address to add
 * @returns {Promise<Object>} Updated email group object
 */
export const addEmailToGroup = async (type, emailAddress) => {
  // Validate email
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(emailAddress)) {
    throwError("Invalid email address", 400, {
      function: "addEmailToGroup",
      type,
      emailAddress,
    });
  }

  // Add email to group
  const updatedEmailGroup = await emailRepository.addEmailToGroup(
    type,
    emailAddress.toLowerCase().trim()
  );

  return updatedEmailGroup;
};

/**
 * Remove email from a group
 * @param {string} type - Email type
 * @param {string} emailAddress - Email address to remove
 * @returns {Promise<Object>} Updated email group object
 */
export const removeEmailFromGroup = async (type, emailAddress) => {
  // Remove email from group
  const updatedEmailGroup = await emailRepository.removeEmailFromGroup(
    type,
    emailAddress.toLowerCase().trim()
  );

  return updatedEmailGroup;
};

/**
 * Send promotional/advertisement email to an email group
 * @param {string} groupType - Email group type (e.g., "dn-team", "customer")
 * @param {string} subject - Email subject
 * @param {string} content - Email content (HTML or plain text)
 * @param {boolean} isHtml - Whether content is HTML (auto-detected if not provided)
 * @returns {Promise<Object>} Result with success status and recipient count
 */
export const sendPromotionalEmailToGroup = async (
  groupType,
  subject,
  content,
  isHtml = null
) => {
  // Validate required fields
  if (!groupType) {
    throwError("Email group type is required", 400, {
      function: "sendPromotionalEmailToGroup",
    });
  }

  if (!subject) {
    throwError("Email subject is required", 400, {
      function: "sendPromotionalEmailToGroup",
    });
  }

  if (!content) {
    throwError("Email content is required", 400, {
      function: "sendPromotionalEmailToGroup",
    });
  }

  // Get email group
  const emailGroup = await emailRepository.findByType(groupType);

  if (!emailGroup) {
    throwError(`Email group not found with type: ${groupType}`, 404, {
      function: "sendPromotionalEmailToGroup",
      groupType,
    });
  }

  // Check if group is active
  if (!emailGroup.isActive) {
    throwError(`Email group "${groupType}" is not active`, 400, {
      function: "sendPromotionalEmailToGroup",
      groupType,
    });
  }

  // Check if group has emails
  if (!emailGroup.emails || emailGroup.emails.length === 0) {
    throwError(`Email group "${groupType}" has no email addresses`, 400, {
      function: "sendPromotionalEmailToGroup",
      groupType,
    });
  }

  try {
    // Send promotional email to all emails in the group
    const result = await sendPromotionalEmail(
      emailGroup.emails,
      subject,
      content,
      isHtml
    );

    return {
      success: true,
      message: "Promotional email sent successfully",
      recipients: result.recipients,
      groupType: emailGroup.type,
      groupName: emailGroup.description || emailGroup.type,
    };
  } catch (error) {
    logError(error, {
      function: "sendPromotionalEmailToGroup",
      groupType,
      subject,
      recipientCount: emailGroup.emails.length,
    });
    throw error;
  }
};
