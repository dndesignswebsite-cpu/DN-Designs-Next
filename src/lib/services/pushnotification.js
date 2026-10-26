
import {
  getActivePushTokens,
  deactivateTokens,
} from "@/lib/repositories/pushtokenrepositreis.js";

const EXPO_PUSH_URL =
  "https://exp.host/--/api/v2/push/send";

const chunkArray = (items, size) => {
  const chunks = [];

  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  return chunks;
};

export const sendNewConversationNotification = async ({
  conversationId,
  visitorId,
}) => {
  try {
    const devices = await getActivePushTokens();

    if (!devices.length) {
      console.log("No active push devices registered.");
      return;
    }

  const messages = devices.map((device) => ({
  to: device.token,
  title: "New Chat Conversation",
  body: "A visitor has started a new conversation on DN Designs.",
  data: {
    type: "NEW_CONVERSATION",
    conversationId,
    visitorId,
  },
  priority: "high",
  channelId: "new-chats",
}));

    const batches = chunkArray(messages, 100);

    for (const batch of batches) {
      const response = await fetch(EXPO_PUSH_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-encoding": "gzip, deflate",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(batch),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Expo Push API error:", result);
        continue;
      }

      const invalidTokens = [];

      (result.data || []).forEach((ticket, index) => {
        if (ticket.status === "error") {
          console.error(
            "Push notification error:",
            ticket.message,
            ticket.details
          );

          if (
            ticket.details?.error === "DeviceNotRegistered"
          ) {
            invalidTokens.push(batch[index].to);
          }
        }
      });

      if (invalidTokens.length) {
        await deactivateTokens(invalidTokens);
      }
    }

    console.log(
      `New conversation notification processed for ${devices.length} devices.`
    );
  } catch (error) {
    // Notification failure must never break chatbot response.
    console.error("Push notification service error:", error);
  }
};
