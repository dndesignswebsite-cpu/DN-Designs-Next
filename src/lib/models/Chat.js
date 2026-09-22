/**
 * Chat Model
 * Stores complete AI chatbot conversations
 * + visitor navigation
 * + approximate visitor location
 */

import mongoose from "mongoose";

// ==========================================
// CHAT MESSAGE SCHEMA
// ==========================================

const chatMessageSchema =
  new mongoose.Schema(
    {
      role: {
        type: String,
        enum: [
          "user",
          "assistant",
        ],
        required: true,
      },

      content: {
        type: String,
        required: true,
        trim: true,
        maxlength: [
          10000,
          "Message cannot be more than 10000 characters",
        ],
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      _id: true,
    }
  );

// ==========================================
// PAGE VISIT SCHEMA
// ==========================================

const pageVisitSchema =
  new mongoose.Schema(
    {
      path: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
      },

      title: {
        type: String,
        trim: true,
        maxlength: 300,
        default: "",
      },

      visitedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      _id: true,
    }
  );

// ==========================================
// LOCATION SCHEMA
// ==========================================

const locationSchema =
  new mongoose.Schema(
    {
      country: {
        type: String,
        trim: true,
        default: "",
      },

      countryCode: {
        type: String,
        trim: true,
        default: "",
      },

      region: {
        type: String,
        trim: true,
        default: "",
      },

      city: {
        type: String,
        trim: true,
        default: "",
      },

      timezone: {
        type: String,
        trim: true,
        default: "",
      },
    },
    {
      _id: false,
    }
  );

// ==========================================
// CHAT SCHEMA
// ==========================================

const chatSchema =
  new mongoose.Schema(
    {
      conversationId: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true,
      },

      visitorId: {
        type: String,
        required: true,
        index: true,
        trim: true,
      },

      // ======================================
      // CHAT MESSAGES
      // ======================================

      messages: {
        type: [chatMessageSchema],
        default: [],
      },

      messageCount: {
        type: Number,
        default: 0,
      },

      // ======================================
      // VISITOR LOCATION
      // ======================================

      location: {
        type: locationSchema,
        default: null,
      },

      // ======================================
      // VISITOR PAGE JOURNEY
      // ======================================

      pageVisits: {
        type: [pageVisitSchema],
        default: [],
      },

      // ======================================
      // SESSION TIMING
      // ======================================

      startedAt: {
        type: Date,
        default: Date.now,
      },

      lastMessageAt: {
        type: Date,
        default: Date.now,
      },

      lastActivityAt: {
        type: Date,
        default: Date.now,
      },
    },

    {
      timestamps: true,
    }
  );

// ==========================================
// INDEXES
// ==========================================

chatSchema.index({
  updatedAt: -1,
});

chatSchema.index({
  lastMessageAt: -1,
});

// NOTE:
// visitorId already has index: true above.
// Do NOT add another visitorId index here.

const Chat =
  mongoose.models.Chat ||
  mongoose.model(
    "Chat",
    chatSchema
  );

export default Chat;