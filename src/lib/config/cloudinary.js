/**
 * Cloudinary Configuration
 * Handles image upload and management using Cloudinary
 */

import { v2 as cloudinary } from "cloudinary";
import { logError } from "@/lib/middleware/errorHandler.js";

/**
 * Configure Cloudinary
 */
const configureCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};

/**
 * Delete image from Cloudinary
 * @param {string} publicId - Cloudinary public ID of the image
 * @returns {Promise<Object>}
 */
export const deleteImage = async (publicId) => {
  try {
    configureCloudinary();
    
    // Ensure publicId has folder prefix
    let fullPublicId = publicId;
    if (!publicId.includes("dn-designs/")) {
      fullPublicId = `dn-designs/${publicId}`;
    }
    
    const result = await cloudinary.uploader.destroy(fullPublicId);
    return result;
  } catch (error) {
    logError(error, { function: "deleteImage", publicId });
    throw error;
  }
};

/**
 * Upload image to Cloudinary from buffer
 * @param {Buffer} buffer - Image buffer
 * @param {Object} options - Additional upload options
 * @returns {Promise<Object>}
 */
export const uploadImageBuffer = async (buffer, options = {}) => {
  configureCloudinary();
  
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "dn-designs",
        ...options,
      },
      (error, result) => {
        if (error) {
          logError(error, { function: "uploadImageBuffer", options });
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    // Write buffer to stream
    const Readable = require('stream').Readable;
    const readableStream = new Readable();
    readableStream.push(buffer);
    readableStream.push(null);
    readableStream.pipe(uploadStream);
  });
};

/**
 * Upload image to Cloudinary from base64 string
 * @param {string} base64String - Base64 encoded image string
 * @param {Object} options - Additional upload options
 * @returns {Promise<Object>}
 */
export const uploadImageBase64 = async (base64String, options = {}) => {
  configureCloudinary();
  
  try {
    const result = await cloudinary.uploader.upload(base64String, {
      folder: "dn-designs",
      ...options,
    });
    return result;
  } catch (error) {
    logError(error, { function: "uploadImageBase64", options });
    throw error;
  }
};

/**
 * Upload image to Cloudinary from file path
 * @param {string} filePath - Path to the file
 * @param {Object} options - Additional upload options
 * @returns {Promise<Object>}
 */
export const uploadImage = async (filePath, options = {}) => {
  configureCloudinary();
  
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

export { cloudinary };

