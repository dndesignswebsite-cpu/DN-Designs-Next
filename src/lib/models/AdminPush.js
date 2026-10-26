
import mongoose from "mongoose";

const adminPushSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    platform: {
      type: String,
      enum: ["android", "ios"],
      default: "android",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastUsedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

adminPushSchema.index({ userId: 1, isActive: 1 });

const AdminPush =
  mongoose.models.AdminPush ||
  mongoose.model("AdminPush", adminPushSchema);

export default AdminPush;
