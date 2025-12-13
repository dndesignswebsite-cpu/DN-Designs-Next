/**
 * Email Service
 * Business logic for email group management
 */

import * as emailRepository from "@/lib/repositories/emailRepository.js";
import { throwError, logError } from "@/lib/middleware/errorHandler.js";
import { sendPromotionalEmail } from "@/lib/config/email.js";

export const getAllEmailGroups = async (filters = {}) => {
  const filter = {};

  if (filters.type) filter.type = filters.type.toLowerCase();
  // Only filter by isActive if explicitly provided (not null/undefined)
  if (filters.isActive !== undefined && filters.isActive !== null) {
    filter.isActive = filters.isActive === "true" || filters.isActive === true;
  }

  return await emailRepository.findAll(filter);
};

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

export const getAllActiveEmails = async () => {
  return await emailRepository.getAllActiveEmails();
};

export const createEmailGroup = async (emailData) => {
  const { type, emails, description } = emailData;

  if (!type) {
    throwError("Email type is required", 400, { function: "createEmailGroup" });
  }

  if (!emails || !Array.isArray(emails) || emails.length === 0) {
    throwError("At least one email address is required", 400, {
      function: "createEmailGroup",
    });
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const invalidEmails = emails.filter((email) => !emailRegex.test(email));
  if (invalidEmails.length > 0) {
    throwError(`Invalid email addresses: ${invalidEmails.join(", ")}`, 400, {
      function: "createEmailGroup",
      invalidEmails,
    });
  }

  return await emailRepository.create({
    type: type.toLowerCase(),
    emails: emails.map((email) => email.toLowerCase().trim()),
    description: description || "",
    isActive: true,
  });
};

export const updateEmailGroup = async (emailId, updateData) => {
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

    updateData.emails = updateData.emails.map((email) =>
      email.toLowerCase().trim()
    );
  }

  return await emailRepository.updateById(emailId, updateData);
};

export const deleteEmailGroup = async (emailId) => {
  await emailRepository.deleteById(emailId);
  return true;
};

export const addEmailToGroup = async (type, emailAddress) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(emailAddress)) {
    throwError("Invalid email address", 400, {
      function: "addEmailToGroup",
      type,
      emailAddress,
    });
  }

  return await emailRepository.addEmailToGroup(
    type,
    emailAddress.toLowerCase().trim()
  );
};

export const removeEmailFromGroup = async (type, emailAddress) => {
  return await emailRepository.removeEmailFromGroup(
    type,
    emailAddress.toLowerCase().trim()
  );
};

export const sendPromotionalEmailToGroup = async (
  groupType,
  subject,
  content,
  isHtml = null
) => {
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

  const emailGroup = await emailRepository.findByType(groupType);

  if (!emailGroup) {
    throwError(`Email group not found with type: ${groupType}`, 404, {
      function: "sendPromotionalEmailToGroup",
      groupType,
    });
  }

  if (!emailGroup.isActive) {
    throwError(`Email group "${groupType}" is not active`, 400, {
      function: "sendPromotionalEmailToGroup",
      groupType,
    });
  }

  if (!emailGroup.emails || emailGroup.emails.length === 0) {
    throwError(`Email group "${groupType}" has no email addresses`, 400, {
      function: "sendPromotionalEmailToGroup",
      groupType,
    });
  }

  try {
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
