/**
 * Contact Service
 * Business logic for contact form management
 */

import * as contactRepository from "@/lib/repositories/contactRepository.js";
import * as emailRepository from "@/lib/repositories/emailRepository.js";
import { throwError, logError } from "@/lib/middleware/errorHandler.js";
import { sendContactNotification } from "@/lib/config/email.js";

export const createContact = async (contactData, ipAddress = null) => {
  const { name, email, mobile, message, pageName } = contactData;

  const contact = await contactRepository.create({
    name,
    email,
    mobile,
    message,
    ipAddress,
    pageName,
  });

  try {
    const allEmails = await emailRepository.getContactNotificationEmails();

    await sendContactNotification(
      {
        name: contact.name,
        email: contact.email,
        mobile: contact.mobile,
        message: contact.message,
        pageName: contact.pageName,
      },
      allEmails
    );

    await contactRepository.updateById(contact._id, { emailSent: true });
    contact.emailSent = true;
  } catch (error) {
    logError(error, {
      function: "createContact",
      contactId: contact._id,
      operation: "sendEmailNotification",
    });
  }

  return contact;
};

export const getAllContacts = async (filters = {}, pagination = {}) => {
  const filter = {};

  if (filters.status) filter.status = filters.status;
  if (filters.email) {
    filter.email = { $regex: filters.email, $options: "i" };
  }
  if (filters.search) {
    filter.$or = [
      { name: { $regex: filters.search, $options: "i" } },
      { email: { $regex: filters.search, $options: "i" } },
      { message: { $regex: filters.search, $options: "i" } },
    ];
  }

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

export const getContactById = async (contactId) => {
  const contact = await contactRepository.findById(contactId);

  if (!contact) {
    throwError(`Contact not found with id of ${contactId}`, 404, {
      function: "getContactById",
      contactId,
    });
  }

  if (contact.status === "new") {
    await contactRepository.updateById(contactId, { status: "read" });
    contact.status = "read";
  }

  return contact;
};

export const updateContact = async (contactId, updateData) => {
  const contact = await contactRepository.findById(contactId);
  if (!contact) {
    throwError(`Contact not found with id of ${contactId}`, 404, {
      function: "updateContact",
      contactId,
    });
  }

  return await contactRepository.updateById(contactId, updateData);
};

export const deleteContact = async (contactId) => {
  const contact = await contactRepository.findById(contactId);
  if (!contact) {
    throwError(`Contact not found with id of ${contactId}`, 404, {
      function: "deleteContact",
      contactId,
    });
  }

  await contactRepository.deleteById(contactId);
  return true;
};

export const getContactStats = async () => {
  const [total, newContacts, readContacts, repliedContacts, resolvedContacts] =
    await Promise.all([
      contactRepository.count(),
      contactRepository.countByStatus("new"),
      contactRepository.countByStatus("read"),
      contactRepository.countByStatus("replied"),
      contactRepository.countByStatus("resolved"),
    ]);

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
