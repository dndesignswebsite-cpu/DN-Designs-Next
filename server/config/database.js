/**
 * Database Configuration
 * Handles MongoDB connection using Mongoose
 */

import mongoose from "mongoose";
import { logError } from "../middleware/errorHandler.js";

/**
 * Connect to MongoDB database
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // These options are recommended for Mongoose 6+
      // useNewUrlParser: true, // No longer needed in Mongoose 6+
      // useUnifiedTopology: true, // No longer needed in Mongoose 6+
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logError(error, {
      function: "connectDB",
      operation: "mongodbConnection",
      mongodbUri: process.env.MONGODB_URI
        ? process.env.MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, "//***:***@") // Mask credentials
        : "not set",
    });

    // Provide helpful error messages for common issues
    if (
      error.message.includes("ECONNREFUSED") ||
      error.message.includes("querySrv")
    ) {
      console.error("\n💡 Troubleshooting Tips:");
      console.error(
        "1. Check if MongoDB Atlas cluster is running (not paused)"
      );
      console.error(
        "2. Verify your IP address is whitelisted in MongoDB Atlas"
      );
      console.error("   - Go to Network Access → Add IP Address");
      console.error(
        "   - Or use 0.0.0.0/0 for development (not recommended for production)"
      );
      console.error("3. Check your internet connection");
      console.error("4. Verify MONGODB_URI in your .env file is correct");
      console.error(
        "5. For MongoDB Atlas, ensure the connection string uses the correct format"
      );
    } else if (error.message.includes("authentication failed")) {
      console.error("\n💡 Troubleshooting Tips:");
      console.error(
        "1. Verify your MongoDB username and password in MONGODB_URI"
      );
      console.error("2. Check if the database user has proper permissions");
      console.error("3. Ensure special characters in password are URL-encoded");
    } else if (error.message.includes("MONGODB_URI is not defined")) {
      console.error("\n💡 Troubleshooting Tips:");
      console.error("1. Create a .env file in the server directory");
      console.error("2. Add MONGODB_URI=your-connection-string");
      console.error("3. Restart the server");
    }

    process.exit(1); // Exit process with failure
  }
};

// Handle connection events
mongoose.connection.on("disconnected", () => {
  console.log("⚠️  MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  logError(err, { function: "mongooseConnection", event: "error" });
});

export default connectDB;
