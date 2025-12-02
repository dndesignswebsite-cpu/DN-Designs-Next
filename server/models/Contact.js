/**
 * Contact Model
 * Defines the schema for contact form submissions
 */

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    // Contact's full name
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
      maxlength: [100, 'Name cannot be more than 100 characters'],
    },

    // Contact's email address
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },

    // Contact's mobile number
    mobile: {
      type: String,
      required: [true, 'Please provide your mobile number'],
      trim: true,
      match: [/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, 'Please provide a valid mobile number'],
    },

    // Contact's message/inquiry
    message: {
      type: String,
      required: [true, 'Please provide a message'],
      trim: true,
      maxlength: [5000, 'Message cannot be more than 5000 characters'],
    },

    // Status of the inquiry (new, read, replied, resolved)
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'resolved'],
      default: 'new',
    },

    // Admin notes (internal use)
    adminNotes: {
      type: String,
      default: null,
      maxlength: [1000, 'Admin notes cannot be more than 1000 characters'],
    },

    // Whether email notification was sent successfully
    emailSent: {
      type: Boolean,
      default: false,
    },

    // IP address of the submitter (for analytics/spam prevention)
    ipAddress: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create indexes for better query performance
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

