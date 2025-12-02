/**
 * Contact Controller
 * Handles HTTP requests and responses for contact form
 * Delegates business logic to contactService
 */

import * as contactService from '../services/contactService.js';
import { asyncHandler } from '../middleware/errorHandler.js';

/**
 * @route   POST /api/contact
 * @desc    Create new contact form submission
 * @access  Public
 */
export const createContact = asyncHandler(async (req, res, next) => {
  const { name, email, mobile, message } = req.body;

  // Get client IP address
  const ipAddress = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for']?.split(',')[0];

  // Call service to create contact
  const contact = await contactService.createContact(
    { name, email, mobile, message },
    ipAddress
  );

  // Send response
  res.status(201).json({
    success: true,
    message: 'Thank you for contacting us! We will get back to you soon.',
    data: contact,
  });
});

/**
 * @route   GET /api/contact
 * @desc    Get all contact submissions (Admin only)
 * @access  Private/Admin
 */
export const getContacts = asyncHandler(async (req, res, next) => {
  // Extract query parameters
  const filters = {
    status: req.query.status,
    email: req.query.email,
    search: req.query.search,
  };

  const pagination = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
  };

  // Call service to get contacts
  const result = await contactService.getAllContacts(filters, pagination);

  // Send response
  res.status(200).json({
    success: true,
    count: result.count,
    total: result.total,
    page: result.page,
    pages: result.pages,
    data: result.contacts,
  });
});

/**
 * @route   GET /api/contact/:id
 * @desc    Get single contact submission by ID
 * @access  Private/Admin
 */
export const getContact = asyncHandler(async (req, res, next) => {
  const contactId = req.params.id;

  // Call service to get contact
  const contact = await contactService.getContactById(contactId);

  // Send response
  res.status(200).json({
    success: true,
    data: contact,
  });
});

/**
 * @route   PUT /api/contact/:id
 * @desc    Update contact submission (status, admin notes)
 * @access  Private/Admin
 */
export const updateContact = asyncHandler(async (req, res, next) => {
  const contactId = req.params.id;
  const updateData = req.body;

  // Call service to update contact
  const updatedContact = await contactService.updateContact(contactId, updateData);

  // Send response
  res.status(200).json({
    success: true,
    data: updatedContact,
  });
});

/**
 * @route   DELETE /api/contact/:id
 * @desc    Delete contact submission
 * @access  Private/Admin
 */
export const deleteContact = asyncHandler(async (req, res, next) => {
  const contactId = req.params.id;

  // Call service to delete contact
  await contactService.deleteContact(contactId);

  // Send response
  res.status(200).json({
    success: true,
    message: 'Contact submission deleted successfully',
  });
});

/**
 * @route   GET /api/contact/stats/summary
 * @desc    Get contact form statistics (Admin only)
 * @access  Private/Admin
 */
export const getContactStats = asyncHandler(async (req, res, next) => {
  // Call service to get statistics
  const stats = await contactService.getContactStats();

  // Send response
  res.status(200).json({
    success: true,
    data: stats,
  });
});
