
import AdminPush from "@/lib/models/AdminPush.js";

// Register or update a device token
export const registerPushToken = async ({
  userId,
  token,
  platform,
}) => {
  return await AdminPush.findOneAndUpdate(
    { token },
    {
      $set: {
        userId,
        token,
        platform,
        isActive: true,
        lastUsedAt: new Date(),
      },
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  );
};

// Get all active device tokens
export const getActivePushTokens = async () => {
  return await AdminPush.find({
    isActive: true,
  }).lean();
};

// Deactivate a device token
export const deactivatePushToken = async ({
  userId,
  token,
}) => {
  return await AdminPush.findOneAndUpdate(
    {
      userId,
      token,
    },
    {
      $set: {
        isActive: false,
      },
    },
    {
      new: true,
    }
  );
};

// Deactivate invalid Expo tokens
export const deactivateTokens = async (tokens = []) => {
  if (!tokens.length) return;

  return await AdminPush.updateMany(
    {
      token: { $in: tokens },
    },
    {
      $set: { isActive: false },
    }
  );
};
