
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
  const debug = {
    triggered: true,
    activeDevices: 0,
    tickets: [],
    errors: [],
  };

  try {
    console.log("[PUSH] New conversation notification triggered");

    const devices = await getActivePushTokens();

    debug.activeDevices = devices.length;

    console.log("[PUSH] Active devices:", devices.length);

    if (!devices.length) {
      console.log("[PUSH] No active devices found");
      return debug;
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
      channelId: "new-chats-v2",
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

      console.log("[PUSH] Expo response:", result);

      if (!response.ok) {
        debug.errors.push(result);
        continue;
      }

      const invalidTokens = [];

      (result.data || []).forEach((ticket, index) => {
        debug.tickets.push(ticket);

        if (ticket.status === "error") {
          debug.errors.push(ticket);

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

    console.log("[PUSH] Final result:", debug);

    return debug;
  } catch (error) {
    console.error("[PUSH] Service error:", error);

    debug.errors.push({
      message: error.message,
    });

    return debug;
  }
};
