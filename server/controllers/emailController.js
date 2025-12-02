/**
 * Email Controller
 * Handles HTTP requests and responses for email group management
 * Delegates business logic to emailService
 */

import * as emailService from "../services/emailService.js";
import { asyncHandler } from "../middleware/errorHandler.js";

/**
 * @route   GET /api/emails
 * @desc    Get all email groups
 * @access  Private/Admin
 */
export const getEmailGroups = asyncHandler(async (req, res, next) => {
  const filters = {
    type: req.query.type,
    isActive: req.query.isActive,
  };

  // Call service to get email groups
  const emailGroups = await emailService.getAllEmailGroups(filters);

  // Send response
  res.status(200).json({
    success: true,
    count: emailGroups.length,
    data: emailGroups,
  });
});

/**
 * @route   GET /api/emails/all
 * @desc    Get all active email addresses (flattened list)
 * @access  Private/Admin
 */
export const getAllEmails = asyncHandler(async (req, res, next) => {
  // Call service to get all active emails
  const emails = await emailService.getAllActiveEmails();

  // Send response
  res.status(200).json({
    success: true,
    count: emails.length,
    data: emails,
  });
});

/**
 * @route   GET /api/emails/:id
 * @desc    Get email group by ID or type
 * @access  Private/Admin
 */
export const getEmailGroup = asyncHandler(async (req, res, next) => {
  const identifier = req.params.id;

  // Check if identifier is ObjectId or type
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(identifier);

  let emailGroup;
  if (isObjectId) {
    // Find by ID
    emailGroup = await emailService.getEmailGroupById(identifier);
  } else {
    // Find by type
    emailGroup = await emailService.getEmailGroupByType(identifier);
  }

  // Send response
  res.status(200).json({
    success: true,
    data: emailGroup,
  });
});

/**
 * @route   POST /api/emails
 * @desc    Create new email group
 * @access  Private/Admin
 */
export const createEmailGroup = asyncHandler(async (req, res, next) => {
  const emailData = req.body;

  // Call service to create email group
  const emailGroup = await emailService.createEmailGroup(emailData);

  // Send response
  res.status(201).json({
    success: true,
    message: "Email group created successfully",
    data: emailGroup,
  });
});

/**
 * @route   PUT /api/emails/:id
 * @desc    Update email group
 * @access  Private/Admin
 */
export const updateEmailGroup = asyncHandler(async (req, res, next) => {
  const emailId = req.params.id;
  const updateData = req.body;

  // Call service to update email group
  const updatedEmailGroup = await emailService.updateEmailGroup(
    emailId,
    updateData
  );

  // Send response
  res.status(200).json({
    success: true,
    message: "Email group updated successfully",
    data: updatedEmailGroup,
  });
});

/**
 * @route   DELETE /api/emails/:id
 * @desc    Delete email group
 * @access  Private/Admin
 */
export const deleteEmailGroup = asyncHandler(async (req, res, next) => {
  const emailId = req.params.id;

  // Call service to delete email group
  await emailService.deleteEmailGroup(emailId);

  // Send response
  res.status(200).json({
    success: true,
    message: "Email group deleted successfully",
  });
});

/**
 * @route   POST /api/emails/:type/add
 * @desc    Add email to a group
 * @access  Private/Admin
 */
export const addEmail = asyncHandler(async (req, res, next) => {
  const type = req.params.type;
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email address is required",
    });
  }

  // Call service to add email
  const updatedEmailGroup = await emailService.addEmailToGroup(type, email);

  // Send response
  res.status(200).json({
    success: true,
    message: "Email added successfully",
    data: updatedEmailGroup,
  });
});

/**
 * @route   DELETE /api/emails/:type/remove
 * @desc    Remove email from a group
 * @access  Private/Admin
 */
export const removeEmail = asyncHandler(async (req, res, next) => {
  const type = req.params.type;
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email address is required",
    });
  }

  // Call service to remove email
  const updatedEmailGroup = await emailService.removeEmailFromGroup(type, email);

  // Send response
  res.status(200).json({
    success: true,
    message: "Email removed successfully",
    data: updatedEmailGroup,
  });
});

/**
 * @route   POST /api/emails/:type/send
 * @desc    Send promotional/advertisement email to email group
 * @access  Private/Admin
 */
export const sendPromotionalEmail = asyncHandler(async (req, res, next) => {
  const groupType = req.params.type;
  const { subject, content, isHtml } = req.body;

  if (!subject) {
    return res.status(400).json({
      success: false,
      message: "Email subject is required",
    });
  }

  if (!content) {
    return res.status(400).json({
      success: false,
      message: "Email content is required",
    });
  }

  // Call service to send promotional email
  const result = await emailService.sendPromotionalEmailToGroup(
    groupType,
    subject,
    content,
    isHtml
  );

  // Send response
  res.status(200).json({
    success: true,
    message: result.message,
    data: {
      recipients: result.recipients,
      groupType: result.groupType,
      groupName: result.groupName,
      subject: subject,
    },
  });
});

