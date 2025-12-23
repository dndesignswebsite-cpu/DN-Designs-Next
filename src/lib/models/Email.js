/**
 * Email Model
 * Defines the schema for email groups/collections
 */

import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    // Type of email group (dn-team, customer, etc.)
    type: {
      type: String,
      required: [true, "Please provide email type"],
      trim: true,
      lowercase: true,
      unique: true,
    },

    // Array of email addresses
    emails: [
      {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please provide a valid email address",
        ],
      },
    ],

    // Description of the email group
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },

    // Whether this email group is active
    isActive: {
      type: Boolean,
      default: true,
    },

    // Whether this group receives contact form notifications
    receivesContactEmails: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create indexes for better query performance
emailSchema.index({ isActive: 1 });

const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);

export default Email;
