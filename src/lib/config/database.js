/**
 * Database Configuration
 * Handles MongoDB connection using Mongoose
 */
import mongoose from "mongoose";
import { logError } from "@/lib/middleware/errorHandler.js";

/**
 * Global connection cache for Next.js hot reloading
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB database
 * Uses connection caching for Next.js serverless environment
 * @returns {Promise<mongoose.Connection>}
 */
const connectDB = async () => {
  // Return cached connection if available
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
      console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    logError(error, {
      function: "connectDB",
      operation: "mongodbConnection",
      mongodbUri: process.env.MONGODB_URI
        ? process.env.MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, "//***:***@")
        : "not set",
    });

    // Provide helpful error messages
    if (
      error.message.includes("ECONNREFUSED") ||
      error.message.includes("querySrv")
    ) {
      console.error("\n💡 Troubleshooting Tips:");
      console.error("1. Check if MongoDB Atlas cluster is running");
      console.error("2. Verify your IP address is whitelisted");
      console.error("3. Check your internet connection");
      console.error("4. Verify MONGODB_URI in your .env file");
    }

    throw error;
  }

  return cached.conn;
};

export default connectDB;

