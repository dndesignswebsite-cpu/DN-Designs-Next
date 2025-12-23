/**
 * File Storage Configuration
 * Handles image/media upload and management on local VPS storage
 * Files are stored locally and served through Cloudflare CDN
 * Supports: Images (JPG, PNG, GIF, WebP) and Videos (MP4, MOV, AVI, MKV, WebM)
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { logError } from "@/lib/middleware/errorHandler.js";

// Base upload directory (inside public folder for static serving)
const UPLOAD_BASE_DIR = path.join(process.cwd(), "public", "uploads");

// Subdirectories for different file types
const UPLOAD_DIRS = {
  images: path.join(UPLOAD_BASE_DIR, "images"),
  videos: path.join(UPLOAD_BASE_DIR, "videos"),
  avatars: path.join(UPLOAD_BASE_DIR, "avatars"),
  blogs: path.join(UPLOAD_BASE_DIR, "blogs"),
  pages: path.join(UPLOAD_BASE_DIR, "pages"),
  misc: path.join(UPLOAD_BASE_DIR, "misc"),
};

// File size limits (in bytes)
const FILE_SIZE_LIMITS = {
  image: 10 * 1024 * 1024, // 10MB for images
  video: 500 * 1024 * 1024, // 500MB for videos
  default: 50 * 1024 * 1024, // 50MB default
};

// Allowed file types
const ALLOWED_IMAGE_TYPES = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const ALLOWED_VIDEO_TYPES = [".mp4", ".mov", ".avi", ".mkv", ".webm", ".m4v"];

/**
 * Ensure upload directories exist
 * Lazy initialization: Only called when trying to upload.
 */
const ensureDirectories = () => {
  try {
    Object.values(UPLOAD_DIRS).forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  } catch (error) {
    // Log but don't crash. If we are in restricted env, this will fail.
    // The subsequent write attempt will likely fail too and be caught there.
    console.error("Warning: Failed to ensure directories:", error.message);
  }
};

/**
 * Generate unique filename
 * @param {string} originalName - Original filename (optional)
 * @param {string} extension - File extension
 * @returns {string} Unique filename
 */
const generateFilename = (originalName = "", extension = "") => {
  const timestamp = Date.now();
  const randomString = crypto.randomBytes(8).toString("hex");
  const sanitizedName = originalName
    .replace(/[^a-zA-Z0-9]/g, "-")
    .substring(0, 20)
    .toLowerCase();

  const ext = extension || ".jpg";
  return `${timestamp}-${randomString}${
    sanitizedName ? `-${sanitizedName}` : ""
  }${ext}`;
};

/**
 * Get file extension from buffer (magic bytes detection)
 * @param {Buffer} buffer - File buffer
 * @returns {Object} { extension: string, type: 'image' | 'video' | 'unknown' }
 */
const getFileTypeFromBuffer = (buffer) => {
  // Need at least 12 bytes for some signatures
  if (buffer.length < 12) {
    return { extension: ".bin", type: "unknown" };
  }

  const hex4 = buffer.slice(0, 4).toString("hex");
  const hex8 = buffer.slice(0, 8).toString("hex");

  // Image signatures
  const imageSignatures = {
    ffd8ff: { ext: ".jpg", type: "image" }, // JPEG
    "89504e47": { ext: ".png", type: "image" }, // PNG
    47494638: { ext: ".gif", type: "image" }, // GIF
    52494646: { ext: ".webp", type: "image" }, // WebP (RIFF)
    "3c3f786d": { ext: ".svg", type: "image" }, // SVG (<?xml)
    "3c737667": { ext: ".svg", type: "image" }, // SVG (<svg)
  };

  // Check for JPEG (starts with FFD8FF)
  if (hex4.startsWith("ffd8ff")) {
    return { extension: ".jpg", type: "image" };
  }

  // Check image signatures
  for (const [sig, info] of Object.entries(imageSignatures)) {
    if (hex4.startsWith(sig) || hex8.startsWith(sig)) {
      return { extension: info.ext, type: info.type };
    }
  }

  // Check for MP4/MOV (ftyp box at offset 4)
  const ftypOffset = buffer.slice(4, 8).toString("ascii");
  if (ftypOffset === "ftyp") {
    const brand = buffer.slice(8, 12).toString("ascii");
    if (brand === "qt  " || brand.startsWith("qt")) {
      return { extension: ".mov", type: "video" };
    }
    return { extension: ".mp4", type: "video" };
  }

  // Check for MKV/WebM
  if (hex4 === "1a45dfa3") {
    // Check for WebM (has webm in header)
    const headerStr = buffer.slice(0, 40).toString("ascii");
    if (headerStr.includes("webm")) {
      return { extension: ".webm", type: "video" };
    }
    return { extension: ".mkv", type: "video" };
  }

  // Check for AVI (RIFF....AVI)
  if (hex4 === "52494646") {
    const aviCheck = buffer.slice(8, 12).toString("ascii");
    if (aviCheck === "AVI ") {
      return { extension: ".avi", type: "video" };
    }
    // Could be WebP
    const webpCheck = buffer.slice(8, 12).toString("ascii");
    if (webpCheck === "WEBP") {
      return { extension: ".webp", type: "image" };
    }
  }

  return { extension: ".bin", type: "unknown" };
};

/**
 * Check if file type is allowed
 * @param {string} extension - File extension
 * @param {string} type - 'image' or 'video'
 * @returns {boolean}
 */
const isAllowedFileType = (extension, type) => {
  if (type === "image") {
    return ALLOWED_IMAGE_TYPES.includes(extension.toLowerCase());
  }
  if (type === "video") {
    return ALLOWED_VIDEO_TYPES.includes(extension.toLowerCase());
  }
  return false;
};

/**
 * Get the public URL for a file
 * @param {string} relativePath - Path relative to public folder
 * @returns {string} Public URL
 */
const getPublicUrl = (relativePath) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || "";
  // Remove 'public/' prefix if present and ensure path starts with /
  const cleanPath = relativePath.replace(/^public\//, "").replace(/\\/g, "/");
  return `${baseUrl}/${cleanPath}`.replace(/([^:]\/)\/+/g, "$1");
};

/**
 * Upload file from buffer (images or videos)
 * @param {Buffer} buffer - File buffer
 * @param {Object} options - Upload options
 * @param {string} options.folder - Subfolder (images, videos, avatars, blogs, pages, misc)
 * @param {string} options.filename - Custom filename (optional)
 * @param {string} options.allowedType - Restrict to 'image' or 'video' (optional)
 * @returns {Promise<Object>} Upload result with secure_url and public_id
 */
export const uploadFileBuffer = async (buffer, options = {}) => {
  ensureDirectories();

  try {
    // Detect file type
    const { extension, type } = getFileTypeFromBuffer(buffer);

    // Validate file type if restricted
    if (options.allowedType && type !== options.allowedType) {
      throw new Error(
        `Invalid file type. Expected ${options.allowedType}, got ${type}`
      );
    }

    // Check file size
    const sizeLimit = FILE_SIZE_LIMITS[type] || FILE_SIZE_LIMITS.default;
    if (buffer.length > sizeLimit) {
      const sizeMB = Math.round(sizeLimit / (1024 * 1024));
      throw new Error(
        `File too large. Maximum size for ${type}s is ${sizeMB}MB`
      );
    }

    // Determine folder
    let folder = options.folder;
    if (!folder) {
      folder = type === "video" ? "videos" : "images";
    }
    const uploadDir = UPLOAD_DIRS[folder] || UPLOAD_DIRS.images;

    const filename = options.filename || generateFilename("", extension);
    const filePath = path.join(uploadDir, filename);
    const relativePath = path.join("uploads", folder, filename);

    // Write file to disk
    await fs.promises.writeFile(filePath, buffer);

    // Generate public URL
    const publicUrl = getPublicUrl(relativePath);

    return {
      secure_url: publicUrl,
      public_id: relativePath.replace(/\\/g, "/"),
      url: publicUrl,
      format: extension.replace(".", ""),
      resource_type: type,
      bytes: buffer.length,
      created_at: new Date().toISOString(),
    };
  } catch (error) {
    if (error.code === "EROFS") {
      const msg = `Read-only file system at ${filePath}. If you are on Vercel or a serverless platform, local storage is not supported. Use a VPS or cloud storage instead.`;
      console.error(msg);
      logError(new Error(msg), { function: "uploadFileBuffer", options });
      throw new Error(msg);
    }
    logError(error, { function: "uploadFileBuffer", options });
    throw error;
  }
};

/**
 * Upload image from buffer (wrapper for backward compatibility)
 * @param {Buffer} buffer - Image buffer
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} Upload result
 */
export const uploadImageBuffer = async (buffer, options = {}) => {
  return uploadFileBuffer(buffer, { ...options, allowedType: null }); // Allow any type for backward compat
};

/**
 * Upload video from buffer
 * @param {Buffer} buffer - Video buffer
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} Upload result
 */
export const uploadVideoBuffer = async (buffer, options = {}) => {
  return uploadFileBuffer(buffer, {
    ...options,
    folder: options.folder || "videos",
  });
};

/**
 * Upload file from base64 string (images or videos)
 * @param {string} base64String - Base64 encoded file string
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} Upload result
 */
export const uploadFileBase64 = async (base64String, options = {}) => {
  try {
    // Remove data URL prefix if present (handles both image and video)
    const base64Data = base64String.replace(
      /^data:(image|video)\/[\w+-]+;base64,/,
      ""
    );
    const buffer = Buffer.from(base64Data, "base64");

    return await uploadFileBuffer(buffer, options);
  } catch (error) {
    logError(error, { function: "uploadFileBase64", options });
    throw error;
  }
};

/**
 * Upload image from base64 string (wrapper for backward compatibility)
 */
export const uploadImageBase64 = async (base64String, options = {}) => {
  return uploadFileBase64(base64String, options);
};

/**
 * Upload video from base64 string
 */
export const uploadVideoBase64 = async (base64String, options = {}) => {
  return uploadFileBase64(base64String, {
    ...options,
    folder: options.folder || "videos",
  });
};

/**
 * Upload file from file path
 * @param {string} filePath - Path to the file
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} Upload result
 */
export const uploadFile = async (filePath, options = {}) => {
  try {
    const buffer = await fs.promises.readFile(filePath);
    const originalName = path.basename(filePath, path.extname(filePath));

    return await uploadFileBuffer(buffer, {
      ...options,
      filename:
        options.filename ||
        generateFilename(originalName, path.extname(filePath)),
    });
  } catch (error) {
    logError(error, { function: "uploadFile", filePath, options });
    throw error;
  }
};

/**
 * Upload image from file path (wrapper for backward compatibility)
 */
export const uploadImage = async (filePath, options = {}) => {
  return uploadFile(filePath, options);
};

/**
 * Upload video from file path
 */
export const uploadVideo = async (filePath, options = {}) => {
  return uploadFile(filePath, {
    ...options,
    folder: options.folder || "videos",
  });
};

/**
 * Delete file from storage (images or videos)
 * @param {string} publicId - File path relative to uploads folder
 * @returns {Promise<Object>} Deletion result
 */
export const deleteFile = async (publicId) => {
  try {
    if (!publicId) {
      return { result: "not_found" };
    }

    // Handle different path formats
    let filePath;
    if (publicId.startsWith("uploads/")) {
      filePath = path.join(process.cwd(), "public", publicId);
    } else if (publicId.startsWith("public/")) {
      filePath = path.join(process.cwd(), publicId);
    } else {
      filePath = path.join(UPLOAD_BASE_DIR, publicId);
    }

    // Check if file exists
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
      return { result: "ok", public_id: publicId };
    }

    return { result: "not_found", public_id: publicId };
  } catch (error) {
    logError(error, { function: "deleteFile", publicId });
    throw error;
  }
};

/**
 * Delete image from storage (alias for backward compatibility)
 */
export const deleteImage = deleteFile;

/**
 * Delete video from storage (alias)
 */
export const deleteVideo = deleteFile;

/**
 * Check if file exists
 * @param {string} publicId - File path relative to uploads folder
 * @returns {boolean}
 */
export const fileExists = (publicId) => {
  try {
    let filePath;
    if (publicId.startsWith("uploads/")) {
      filePath = path.join(process.cwd(), "public", publicId);
    } else {
      filePath = path.join(UPLOAD_BASE_DIR, publicId);
    }
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
};

/**
 * Get file info
 * @param {string} publicId - File path relative to uploads folder
 * @returns {Promise<Object|null>} File stats or null
 */
export const getFileInfo = async (publicId) => {
  try {
    let filePath;
    if (publicId.startsWith("uploads/")) {
      filePath = path.join(process.cwd(), "public", publicId);
    } else {
      filePath = path.join(UPLOAD_BASE_DIR, publicId);
    }

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const stats = await fs.promises.stat(filePath);
    return {
      public_id: publicId,
      bytes: stats.size,
      created_at: stats.birthtime.toISOString(),
      modified_at: stats.mtime.toISOString(),
    };
  } catch (error) {
    logError(error, { function: "getFileInfo", publicId });
    return null;
  }
};

/**
 * List files in a folder
 * @param {string} folder - Folder name (images, avatars, blogs, pages, misc)
 * @returns {Promise<string[]>} List of file paths
 */
export const listFiles = async (folder = "images") => {
  try {
    const uploadDir = UPLOAD_DIRS[folder] || UPLOAD_DIRS.images;

    if (!fs.existsSync(uploadDir)) {
      return [];
    }

    const files = await fs.promises.readdir(uploadDir);
    return files.map((file) =>
      path.join("uploads", folder, file).replace(/\\/g, "/")
    );
  } catch (error) {
    logError(error, { function: "listFiles", folder });
    return [];
  }
};

// Export for backward compatibility and new video functions
export default {
  // File uploads (generic)
  uploadFileBuffer,
  uploadFileBase64,
  uploadFile,
  deleteFile,
  // Image uploads (backward compatible)
  uploadImageBuffer,
  uploadImageBase64,
  uploadImage,
  deleteImage,
  // Video uploads
  uploadVideoBuffer,
  uploadVideoBase64,
  uploadVideo,
  deleteVideo,
  // Utilities
  fileExists,
  getFileInfo,
  listFiles,
  // Constants
  FILE_SIZE_LIMITS,
  ALLOWED_IMAGE_TYPES,
  ALLOWED_VIDEO_TYPES,
};
