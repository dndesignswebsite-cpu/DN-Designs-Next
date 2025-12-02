/**
 * Cloudinary Configuration
 * Handles image upload and management using Cloudinary
 */

import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import fs from "node:fs";
import { logError } from "../middleware/errorHandler.js";

// Get current directory (ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure Cloudinary with credentials from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Temporary storage for multer (files will be uploaded to Cloudinary then deleted)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = join(__dirname, "../uploads");
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Generate unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

/**
 * Multer middleware for handling file uploads
 * Single file upload
 */
export const uploadSingle = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Check if file is an image
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

/**
 * Multer middleware for handling multiple file uploads
 * Multiple files upload
 */
export const uploadMultiple = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file
    files: 10, // Maximum 10 files
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

/**
 * Delete image from Cloudinary
 * @param {string} publicId - Cloudinary public ID of the image (with or without folder prefix)
 * @returns {Promise<Object>}
 */
export const deleteImage = async (publicId) => {
  try {
    // Ensure publicId has folder prefix
    let fullPublicId = publicId;
    if (!publicId.includes("dn-designs/")) {
      fullPublicId = `dn-designs/${publicId}`;
    }
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const result = await cloudinary.uploader.destroy(fullPublicId);
    return result;
  } catch (error) {
    logError(error, { function: "deleteImage", publicId });
    throw error;
  }
};

/**
 * Upload image directly to Cloudinary (without Multer)
 * Useful for base64 images or direct uploads
 * @param {string} filePath - Path to the file or base64 string
 * @param {Object} options - Additional upload options
 * @returns {Promise<Object>}
 */
export const uploadImage = async (filePath, options = {}) => {
  // Configure Cloudinary with credentials from environment variables
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "dn-designs",
      ...options,
    });
    return result;
  } catch (error) {
    logError(error, { function: "uploadImage", filePath, options });
    throw error;
  }
};
