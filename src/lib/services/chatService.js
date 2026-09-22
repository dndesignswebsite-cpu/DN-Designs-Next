/**
 * Chat Service
 * Business logic for AI chatbot conversation management
 */

import * as chatRepository from "@/lib/repositories/chatRepository.js";
import { throwError } from "@/lib/middleware/errorHandler.js";

/**
 * Create a new conversation
 */
export const createChat = async ({
  conversationId,
  visitorId,
  messages = [],
}) => {
  if (!conversationId) {
    throwError("Conversation ID is required", 400, {
      function: "createChat",
    });
  }

  if (!visitorId) {
    throwError("Visitor ID is required", 400, {
      function: "createChat",
    });
  }

  const validMessages = messages.filter(
    (message) =>
      message &&
      (message.role === "user" ||
        message.role === "assistant") &&
      typeof message.content === "string" &&
      message.content.trim() !== ""
  );

  const now = new Date();

  return await chatRepository.create({
    conversationId,
    visitorId,

    messages: validMessages.map((message) => ({
      role: message.role,
      content: message.content.trim(),
      createdAt: message.createdAt
        ? new Date(message.createdAt)
        : now,
    })),

    messageCount: validMessages.length,

    startedAt: now,
    lastMessageAt: now,
  });
};

/**
 * Get conversation by conversation ID
 */
export const getChatByConversationId = async (
  conversationId
) => {
  if (!conversationId) {
    throwError("Conversation ID is required", 400, {
      function: "getChatByConversationId",
    });
  }

  return await chatRepository.findByConversationId(
    conversationId
  );
};

/**
 * Add messages to an existing conversation
 *
 * IMPORTANT:
 * This function APPENDS new messages.
 * It does NOT replace existing messages.
 */
export const addMessages = async (
  conversationId,
  messages
) => {
  if (!conversationId) {
    throwError("Conversation ID is required", 400, {
      function: "addMessages",
    });
  }

  if (
    !Array.isArray(messages) ||
    messages.length === 0
  ) {
    throwError("Messages are required", 400, {
      function: "addMessages",
    });
  }

  const chat =
    await chatRepository.findByConversationId(
      conversationId
    );

  if (!chat) {
    throwError(
      `Chat not found for conversation ${conversationId}`,
      404,
      {
        function: "addMessages",
        conversationId,
      }
    );
  }

  const validMessages = messages.filter(
    (message) =>
      message &&
      (message.role === "user" ||
        message.role === "assistant") &&
      typeof message.content === "string" &&
      message.content.trim() !== ""
  );

  if (validMessages.length === 0) {
    throwError(
      "No valid messages were provided",
      400,
      {
        function: "addMessages",
        conversationId,
      }
    );
  }

  const now = new Date();

  const formattedMessages =
    validMessages.map((message) => ({
      role: message.role,

      content:
        message.content.trim(),

      createdAt:
        message.createdAt
          ? new Date(message.createdAt)
          : now,
    }));

  // ==========================================
  // APPEND NEW MESSAGES
  // ==========================================

  chat.messages.push(
    ...formattedMessages
  );

  // ==========================================
  // UPDATE MESSAGE COUNT
  // ==========================================

  chat.messageCount =
    chat.messages.length;

  // ==========================================
  // UPDATE LAST MESSAGE TIME
  // ==========================================

  chat.lastMessageAt = now;

  await chat.save();

  return chat;
};

/**
 * Save conversation safely
 *
 * IMPORTANT:
 *
 * If conversation does not exist:
 *   -> create new conversation
 *
 * If conversation already exists:
 *   -> APPEND new messages
 *   -> NEVER replace existing messages
 *
 * This prevents accidental conversation
 * history overwrites.
 */
export const saveConversation = async ({
  conversationId,
  visitorId,
  messages = [],
}) => {
  if (!conversationId) {
    throwError("Conversation ID is required", 400, {
      function: "saveConversation",
    });
  }

  if (!visitorId) {
    throwError("Visitor ID is required", 400, {
      function: "saveConversation",
    });
  }

  if (!Array.isArray(messages)) {
    throwError(
      "Messages must be an array",
      400,
      {
        function: "saveConversation",
      }
    );
  }

  const validMessages =
    messages.filter(
      (message) =>
        message &&
        (message.role === "user" ||
          message.role === "assistant") &&
        typeof message.content ===
          "string" &&
        message.content.trim() !== ""
    );

  if (validMessages.length === 0) {
    throwError(
      "No valid messages were provided",
      400,
      {
        function: "saveConversation",
      }
    );
  }

  // ==========================================
  // CHECK EXISTING CONVERSATION
  // ==========================================

  const existingChat =
    await chatRepository.findByConversationId(
      conversationId
    );

  // ==========================================
  // EXISTING CONVERSATION
  // ==========================================

  if (existingChat) {
    const now = new Date();

    const formattedMessages =
      validMessages.map(
        (message) => ({
          role: message.role,

          content:
            message.content.trim(),

          createdAt:
            message.createdAt
              ? new Date(
                  message.createdAt
                )
              : now,
        })
      );

    // ========================================
    // APPEND — DO NOT OVERWRITE
    // ========================================

    existingChat.messages.push(
      ...formattedMessages
    );

    existingChat.messageCount =
      existingChat.messages.length;

    existingChat.lastMessageAt =
      now;

    await existingChat.save();

    return existingChat;
  }

  // ==========================================
  // NEW CONVERSATION
  // ==========================================

  return await createChat({
    conversationId,
    visitorId,
    messages: validMessages,
  });
};

/**
 * Get all chats for admin
 */
export const getAllChats = async (
  filters = {},
  pagination = {}
) => {
  const filter = {};

  // ==========================================
  // SEARCH BY VISITOR ID
  // ==========================================

  if (filters.visitorId) {
    filter.visitorId = {
      $regex: filters.visitorId,
      $options: "i",
    };
  }

  // ==========================================
  // SEARCH BY CONVERSATION ID
  // ==========================================

  if (filters.conversationId) {
    filter.conversationId = {
      $regex: filters.conversationId,
      $options: "i",
    };
  }

  const result =
    await chatRepository.findAll(
      filter,
      {
        page: pagination.page,
        limit: pagination.limit,
        sort: {
          lastMessageAt: -1,
        },
      }
    );

  return {
    chats: result.chats,

    count:
      result.chats.length,

    total:
      result.pagination.total,

    page:
      result.pagination.page,

    pages:
      result.pagination.pages,
  };
};

/**
 * Get a single chat by MongoDB ID
 */
export const getChatById = async (
  chatId
) => {
  const chat =
    await chatRepository.findById(
      chatId
    );

  if (!chat) {
    throwError(
      `Chat not found with id of ${chatId}`,
      404,
      {
        function: "getChatById",
        chatId,
      }
    );
  }

  return chat;
};

/**
 * Delete a chat
 */
export const deleteChat = async (
  chatId
) => {
  const chat =
    await chatRepository.findById(
      chatId
    );

  if (!chat) {
    throwError(
      `Chat not found with id of ${chatId}`,
      404,
      {
        function: "deleteChat",
        chatId,
      }
    );
  }

  await chatRepository.deleteById(
    chatId
  );

  return true;
};

/**
 * Get chat statistics
 */
export const getChatStats = async () => {
  const [
    total,
    totalMessages,
  ] = await Promise.all([
    chatRepository.count(),
    chatRepository.countMessages(),
  ]);

  const thirtyDaysAgo =
    new Date();

  thirtyDaysAgo.setDate(
    thirtyDaysAgo.getDate() - 30
  );

  const recent =
    await chatRepository.countAfterDate(
      thirtyDaysAgo
    );

  return {
    total,
    totalMessages,
    recent,
  };
};