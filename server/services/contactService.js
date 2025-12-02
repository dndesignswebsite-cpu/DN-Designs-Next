/**
 * Contact Service
 * Business logic for contact form management
 * This layer contains all business logic, no direct database access
 */

import * as contactRepository from '../repositories/contactRepository.js';
import * as emailRepository from '../repositories/emailRepository.js';
import { AppError, throwError, logError } from '../middleware/errorHandler.js';
import { sendContactNotification } from '../config/email.js';

/**
 * Create a new contact form submission
 * @param {Object} contactData - Contact form data
 * @param {string} ipAddress - Client IP address
 * @returns {Promise<Object>} Created contact object
 */
export const createContact = async (contactData, ipAddress = null) => {
  const { name, email, mobile, message } = contactData;

  // Create contact entry
  const contact = await contactRepository.create({
    name,
    email,
    mobile,
    message,
    ipAddress,
  });

  // Send email notification to admin and all email groups
  try {
    // Get all active emails from database
    const allEmails = await emailRepository.getAllActiveEmails();

    await sendContactNotification(
      {
        name: contact.name,
        email: contact.email,
        mobile: contact.mobile,
        message: contact.message,
      },
      allEmails
    );

    // Mark email as sent
    await contactRepository.updateById(contact._id, {
      emailSent: true,
    });

    // Update contact object
    contact.emailSent = true;
  } catch (error) {
    // Log error but don't fail the request
    logError(error, {
      function: "createContact",
      contactId: contact._id,
      operation: "sendEmailNotification",
    });
    // Contact entry is still saved even if email fails
  }

  return contact;
};

/**
 * Get all contact submissions with filtering and pagination
 * @param {Object} filters - Filter criteria
 * @param {Object} pagination - Pagination options
 * @returns {Promise<Object>} Contacts with pagination info
 */
export const getAllContacts = async (filters = {}, pagination = {}) => {
  // Build filter
  const filter = {};

  // Filter by status
  if (filters.status) {
    filter.status = filters.status;
  }

  // Filter by email
  if (filters.email) {
    filter.email = { $regex: filters.email, $options: 'i' };
  }

  // Search in name, email, message
  if (filters.search) {
    filter.$or = [
      { name: { $regex: filters.search, $options: 'i' } },
      { email: { $regex: filters.search, $options: 'i' } },
      { message: { $regex: filters.search, $options: 'i' } },
    ];
  }

  // Get contacts from repository
  const result = await contactRepository.findAll(filter, {
    page: pagination.page,
    limit: pagination.limit,
  });

  return {
    contacts: result.contacts,
    count: result.contacts.length,
    total: result.pagination.total,
    page: result.pagination.page,
    pages: result.pagination.pages,
  };
};

/**
 * Get contact by ID
 * @param {string} contactId - Contact ID
 * @returns {Promise<Object>} Contact object
 */
export const getContactById = async (contactId) => {
  const contact = await contactRepository.findById(contactId);

  if (!contact) {
    throwError(`Contact not found with id of ${contactId}`, 404, { function: 'getContactById', contactId });
  }

  // Mark as read if status is 'new'
  if (contact.status === 'new') {
    await contactRepository.updateById(contactId, {
      status: 'read',
    });
    contact.status = 'read';
  }

  return contact;
};

/**
 * Update contact submission
 * @param {string} contactId - Contact ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated contact object
 */
export const updateContact = async (contactId, updateData) => {
  // Check if contact exists
  const contact = await contactRepository.findById(contactId);
  if (!contact) {
    throwError(`Contact not found with id of ${contactId}`, 404, { function: 'getContactById', contactId });
  }

  // Update contact
  const updatedContact = await contactRepository.updateById(contactId, updateData);

  return updatedContact;
};

/**
 * Delete contact submission
 * @param {string} contactId - Contact ID
 * @returns {Promise<boolean>} True if deleted
 */
export const deleteContact = async (contactId) => {
  // Check if contact exists
  const contact = await contactRepository.findById(contactId);
  if (!contact) {
    throwError(`Contact not found with id of ${contactId}`, 404, { function: 'getContactById', contactId });
  }

  // Delete contact
  await contactRepository.deleteById(contactId);

  return true;
};

/**
 * Get contact form statistics
 * @returns {Promise<Object>} Statistics object
 */
export const getContactStats = async () => {
  const [
    total,
    newContacts,
    readContacts,
    repliedContacts,
    resolvedContacts,
  ] = await Promise.all([
    contactRepository.count(),
    contactRepository.countByStatus('new'),
    contactRepository.countByStatus('read'),
    contactRepository.countByStatus('replied'),
    contactRepository.countByStatus('resolved'),
  ]);

  // Get contacts from last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentContacts = await contactRepository.countAfterDate(thirtyDaysAgo);

  return {
    total,
    new: newContacts,
    read: readContacts,
    replied: repliedContacts,
    resolved: resolvedContacts,
    recent: recentContacts,
  };
};

