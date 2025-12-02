/**
 * Blog Routes
 * Handles all blog post endpoints
 */

import express from "express";
import {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  addBlogImages,
  deleteBlogImage,
  uploadContentImage,
} from "../controllers/blogController.js";
import { protect, authorize } from "../middleware/auth.js";
import { validateBlog } from "../middleware/validator.js";
import { uploadSingle, uploadMultiple } from "../config/cloudinary.js";

const router = express.Router();

// Public routes (get published blogs)
router.get("/", getBlogs);
router.get("/:id", getBlog);

// Protected routes (Admin only)
router.post(
  "/",
  protect,
  authorize("admin"),
  uploadSingle.single("featuredImage"),
  validateBlog,
  createBlog
);
router.put(
  "/:id",
  protect,
  authorize("admin"),
  uploadSingle.single("featuredImage"),
  validateBlog,
  updateBlog
);
router.delete("/:id", protect, authorize("admin"), deleteBlog);
router.post(
  "/:id/images",
  protect,
  authorize("admin"),
  uploadMultiple.array("images", 10),
  addBlogImages
);
router.delete(
  "/:id/images/:imageId",
  protect,
  authorize("admin"),
  deleteBlogImage
);
// Upload image for content insertion (returns URL to use in img tags)
router.post(
  "/upload-image",
  protect,
  authorize("admin"),
  uploadSingle.single("image"),
  uploadContentImage
);

export default router;
