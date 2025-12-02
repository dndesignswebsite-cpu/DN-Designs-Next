/**
 * Contact Routes
 * Handles all contact form endpoints
 */

import express from 'express';
import {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  getContactStats,
} from '../controllers/contactController.js';
import { protect, authorize } from '../middleware/auth.js';
import { validateContact } from '../middleware/validator.js';

const router = express.Router();

// Public route (contact form submission)
router.post('/', validateContact, createContact);

// Protected routes (Admin only)
router.get('/', protect, authorize('admin'), getContacts);
router.get('/stats/summary', protect, authorize('admin'), getContactStats);
router.get('/:id', protect, authorize('admin'), getContact);
router.put('/:id', protect, authorize('admin'), updateContact);
router.delete('/:id', protect, authorize('admin'), deleteContact);

export default router;

