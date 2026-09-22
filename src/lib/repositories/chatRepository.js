/**
 * Chat Repository
 * Handles all database operations for Chat model
 */

import Chat from "@/lib/models/Chat.js";
import {
  AppError,
  throwError,
} from "@/lib/middleware/errorHandler.js";

/**
 * Find chat by MongoDB ID
 */
export const findById = async (chatId, options = {}) => {
  try {
    let query = Chat.findById(chatId);

    if (options.select) {
      query = query.select(options.select);
    }

    return await query;
  } catch (error) {
    throwError(error, 500, {
      function: "findById",
      chatId,
    });
  }
};

/**
 * Find chat by conversation ID
 */
export const findByConversationId = async (
  conversationId,
  options = {}
) => {
  try {
    let query = Chat.findOne({ conversationId });

    if (options.select) {
      query = query.select(options.select);
    }

    return await query;
  } catch (error) {
    throwError(error, 500, {
      function: "findByConversationId",
      conversationId,
    });
  }
};

/**
 * Get all chats with pagination and filters
 */
export const findAll = async (
  filter = {},
  options = {}
) => {
  try {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 10;

    const skip = (page - 1) * limit;

    let query = Chat.find(filter);

    if (options.select) {
      query = query.select(options.select);
    }

    if (options.sort) {
      query = query.sort(options.sort);
    } else {
      query = query.sort({ lastMessageAt: -1 });
    }

    query = query.skip(skip).limit(limit);

    const [chats, total] = await Promise.all([
      query.exec(),
      Chat.countDocuments(filter),
    ]);

    return {
      chats,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    throwError(error, 500, {
      function: "findAll",
      filter,
      options,
    });
  }
};

/**
 * Create a new chat
 */
export const create = async (chatData) => {
  try {
    return await Chat.create(chatData);
  } catch (error) {
    throwError(error, 500, {
      function: "create",
      chatData,
    });
  }
};

/**
 * Update chat by MongoDB ID
 */
export const updateById = async (
  chatId,
  updateData
) => {
  try {
    const chat = await Chat.findByIdAndUpdate(
      chatId,
      {
        $set: updateData,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!chat) {
      throwError(
        `Chat not found with id of ${chatId}`,
        404,
        {
          function: "updateById",
          chatId,
        }
      );
    }

    return chat;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    throwError(error, 500, {
      function: "updateById",
      chatId,
      updateData,
    });
  }
};

/**
 * Delete chat by MongoDB ID
 */
export const deleteById = async (chatId) => {
  try {
    const chat = await Chat.findByIdAndDelete(chatId);

    if (!chat) {
      throwError(
        `Chat not found with id of ${chatId}`,
        404,
        {
          function: "deleteById",
          chatId,
        }
      );
    }

    return true;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    throwError(error, 500, {
      function: "deleteById",
      chatId,
    });
  }
};

/**
 * Count chats
 */
export const count = async (filter = {}) => {
  try {
    return await Chat.countDocuments(filter);
  } catch (error) {
    throwError(error, 500, {
      function: "count",
      filter,
    });
  }
};

/**
 * Count chats after a specific date
 */
export const countAfterDate = async (date) => {
  try {
    return await Chat.countDocuments({
      createdAt: {
        $gte: date,
      },
    });
  } catch (error) {
    throwError(error, 500, {
      function: "countAfterDate",
      date,
    });
  }
};

/**
 * Count messages across chats
 */
export const countMessages = async () => {
  try {
    const result = await Chat.aggregate([
      {
        $group: {
          _id: null,
          totalMessages: {
            $sum: "$messageCount",
          },
        },
      },
    ]);

    return result[0]?.totalMessages || 0;
  } catch (error) {
    throwError(error, 500, {
      function: "countMessages",
    });
  }
};