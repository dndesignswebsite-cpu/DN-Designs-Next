/**
 * Email Routes
 * Handles all email group management endpoints
 */

import express from "express";
import {
  getEmailGroups,
  getAllEmails,
  getEmailGroup,
  createEmailGroup,
  updateEmailGroup,
  deleteEmailGroup,
  addEmail,
  removeEmail,
  sendPromotionalEmail,
} from "../controllers/emailController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// All routes are protected and admin only
router.get("/", protect, authorize("admin"), getEmailGroups);
router.get("/all", protect, authorize("admin"), getAllEmails);
router.get("/:type", protect, authorize("admin"), getEmailGroup);
router.post("/", protect, authorize("admin"), createEmailGroup);
router.put("/:id", protect, authorize("admin"), updateEmailGroup);
router.delete("/:id", protect, authorize("admin"), deleteEmailGroup);
router.post("/:type/add", protect, authorize("admin"), addEmail);
router.delete("/:type/remove", protect, authorize("admin"), removeEmail);
router.post("/:type/send", protect, authorize("admin"), sendPromotionalEmail);

export default router;
