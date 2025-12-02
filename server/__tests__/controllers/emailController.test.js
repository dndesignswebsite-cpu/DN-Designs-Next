/**
 * Email Controller Tests
 * Unit tests for email management endpoints
 */

import { jest } from "@jest/globals";
import request from "supertest";
import express from "express";
import mongoose from "mongoose";
import connectDB from "../../config/database.js";
import emailRoutes from "../../routes/emailRoutes.js";
import {
  cleanupDatabase,
  createTestAdmin,
  createTestEmailGroup,
  getAuthToken,
} from "../helpers/testHelpers.js";
import Email from "../../models/Email.js";

// Create Express app for testing
const app = express();
app.use(express.json());
app.use("/api/emails", emailRoutes);

// Connect to test database
beforeAll(async () => {
  process.env.MONGODB_URI =
    process.env.MONGODB_URI_TEST || "mongodb://localhost:27017/dn-designs-test";
  await connectDB();
});

beforeEach(async () => {
  await cleanupDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Email Controller", () => {
  describe("GET /api/emails", () => {
    it("should get all email groups for admin", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestEmailGroup({
        type: "dn-team",
        emails: ["team1@example.com", "team2@example.com"],
      });
      await createTestEmailGroup({
        type: "customer",
        emails: ["customer1@example.com"],
      });

      const response = await request(app)
        .get("/api/emails")
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.count).toBeGreaterThanOrEqual(2);
      expect(response.body.data.length).toBeGreaterThanOrEqual(2);
    });

    it("should filter email groups by type", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestEmailGroup({ type: "dn-team" });
      await createTestEmailGroup({ type: "customer" });

      const response = await request(app)
        .get("/api/emails?type=dn-team")
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body.data.length).toBe(1);
      expect(response.body.data[0].type).toBe("dn-team");
    });

    it("should filter email groups by isActive", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestEmailGroup({ type: "active-group", isActive: true });
      await createTestEmailGroup({ type: "inactive-group", isActive: false });

      const response = await request(app)
        .get("/api/emails?isActive=true")
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body.data.length).toBe(1);
      expect(response.body.data[0].isActive).toBe(true);
    });

    it("should not get email groups for non-admin", async () => {
      const response = await request(app).get("/api/emails").expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe("GET /api/emails/all", () => {
    it("should get all active email addresses for admin", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestEmailGroup({
        type: "dn-team",
        emails: ["team1@example.com", "team2@example.com"],
      });
      await createTestEmailGroup({
        type: "customer",
        emails: ["customer1@example.com"],
      });

      const response = await request(app)
        .get("/api/emails/all")
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.count).toBeGreaterThanOrEqual(3);
      expect(response.body.data).toContain("team1@example.com");
      expect(response.body.data).toContain("team2@example.com");
      expect(response.body.data).toContain("customer1@example.com");
    });

    it("should not include emails from inactive groups", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestEmailGroup({
        type: "active-group",
        emails: ["active@example.com"],
        isActive: true,
      });
      await createTestEmailGroup({
        type: "inactive-group",
        emails: ["inactive@example.com"],
        isActive: false,
      });

      const response = await request(app)
        .get("/api/emails/all")
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body.data).toContain("active@example.com");
      expect(response.body.data).not.toContain("inactive@example.com");
    });

    it("should not get emails for non-admin", async () => {
      const response = await request(app).get("/api/emails/all").expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe("GET /api/emails/:id", () => {
    it("should get email group by type for admin", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const emailGroup = await createTestEmailGroup({
        type: "dn-team",
        emails: ["team1@example.com"],
      });

      const response = await request(app)
        .get(`/api/emails/dn-team`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe("dn-team");
      expect(response.body.data.emails).toContain("team1@example.com");
    });

    it("should get email group by ID for admin", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const emailGroup = await createTestEmailGroup({
        type: "dn-team",
        emails: ["team1@example.com"],
      });

      const response = await request(app)
        .get(`/api/emails/${emailGroup._id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data._id.toString()).toBe(emailGroup._id.toString());
    });

    it("should return 404 for non-existent email group", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .get("/api/emails/non-existent")
        .set("Authorization", `Bearer ${token}`)
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    it("should not get email group for non-admin", async () => {
      const emailGroup = await createTestEmailGroup();

      const response = await request(app)
        .get(`/api/emails/${emailGroup._id}`)
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe("POST /api/emails", () => {
    it("should create email group for admin", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const emailData = {
        type: "dn-team",
        emails: ["team1@example.com", "team2@example.com"],
        description: "DN Team email group",
      };

      const response = await request(app)
        .post("/api/emails")
        .set("Authorization", `Bearer ${token}`)
        .send(emailData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe("dn-team");
      expect(response.body.data.emails.length).toBe(2);
      expect(response.body.data.description).toBe(emailData.description);
    });

    it("should validate required fields", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .post("/api/emails")
        .set("Authorization", `Bearer ${token}`)
        .send({ emails: ["test@example.com"] }) // Missing type
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it("should validate email addresses", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .post("/api/emails")
        .set("Authorization", `Bearer ${token}`)
        .send({
          type: "dn-team",
          emails: ["invalid-email"],
        })
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it("should enforce unique type", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      await createTestEmailGroup({ type: "dn-team" });

      const response = await request(app)
        .post("/api/emails")
        .set("Authorization", `Bearer ${token}`)
        .send({
          type: "dn-team",
          emails: ["test@example.com"],
        })
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it("should normalize type to lowercase", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .post("/api/emails")
        .set("Authorization", `Bearer ${token}`)
        .send({
          type: "DN-TEAM",
          emails: ["test@example.com"],
        })
        .expect(201);

      expect(response.body.data.type).toBe("dn-team");
    });

    it("should not create email group for non-admin", async () => {
      const response = await request(app)
        .post("/api/emails")
        .send({
          type: "dn-team",
          emails: ["test@example.com"],
        })
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe("PUT /api/emails/:id", () => {
    it("should update email group for admin", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const emailGroup = await createTestEmailGroup({
        type: "dn-team",
        emails: ["team1@example.com"],
      });

      const updateData = {
        emails: ["team1@example.com", "team2@example.com", "team3@example.com"],
        description: "Updated description",
      };

      const response = await request(app)
        .put(`/api/emails/${emailGroup._id}`)
        .set("Authorization", `Bearer ${token}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.emails.length).toBe(3);
      expect(response.body.data.description).toBe(updateData.description);
    });

    it("should validate email addresses when updating", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const emailGroup = await createTestEmailGroup();

      const response = await request(app)
        .put(`/api/emails/${emailGroup._id}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          emails: ["invalid-email"],
        })
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it("should return 404 for non-existent email group", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .put("/api/emails/507f1f77bcf86cd799439011")
        .set("Authorization", `Bearer ${token}`)
        .send({ emails: ["test@example.com"] })
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    it("should not update email group for non-admin", async () => {
      const emailGroup = await createTestEmailGroup();

      const response = await request(app)
        .put(`/api/emails/${emailGroup._id}`)
        .send({ emails: ["test@example.com"] })
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe("DELETE /api/emails/:id", () => {
    it("should delete email group for admin", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const emailGroup = await createTestEmailGroup();

      const response = await request(app)
        .delete(`/api/emails/${emailGroup._id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);

      // Verify email group is deleted
      const deletedEmailGroup = await Email.findById(emailGroup._id);
      expect(deletedEmailGroup).toBeNull();
    });

    it("should return 404 for non-existent email group", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .delete("/api/emails/507f1f77bcf86cd799439011")
        .set("Authorization", `Bearer ${token}`)
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    it("should not delete email group for non-admin", async () => {
      const emailGroup = await createTestEmailGroup();

      const response = await request(app)
        .delete(`/api/emails/${emailGroup._id}`)
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe("POST /api/emails/:type/add", () => {
    it("should add email to group for admin", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      const emailGroup = await createTestEmailGroup({
        type: "dn-team",
        emails: ["team1@example.com"],
      });

      const response = await request(app)
        .post("/api/emails/dn-team/add")
        .set("Authorization", `Bearer ${token}`)
        .send({ email: "team2@example.com" })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.emails.length).toBe(2);
      expect(response.body.data.emails).toContain("team2@example.com");
    });

    it("should prevent duplicate emails", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      await createTestEmailGroup({
        type: "dn-team",
        emails: ["team1@example.com"],
      });

      const response = await request(app)
        .post("/api/emails/dn-team/add")
        .set("Authorization", `Bearer ${token}`)
        .send({ email: "team1@example.com" })
        .expect(200);

      // Email should still be in array only once
      const updatedGroup = await Email.findOne({ type: "dn-team" });
      const count = updatedGroup.emails.filter(
        (e) => e === "team1@example.com"
      ).length;
      expect(count).toBe(1);
    });

    it("should validate email format", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      await createTestEmailGroup({ type: "dn-team" });

      const response = await request(app)
        .post("/api/emails/dn-team/add")
        .set("Authorization", `Bearer ${token}`)
        .send({ email: "invalid-email" })
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it("should return 404 for non-existent email group", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .post("/api/emails/non-existent/add")
        .set("Authorization", `Bearer ${token}`)
        .send({ email: "test@example.com" })
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    it("should not add email for non-admin", async () => {
      await createTestEmailGroup({ type: "dn-team" });

      const response = await request(app)
        .post("/api/emails/dn-team/add")
        .send({ email: "test@example.com" })
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe("DELETE /api/emails/:type/remove", () => {
    it("should remove email from group for admin", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);
      await createTestEmailGroup({
        type: "dn-team",
        emails: ["team1@example.com", "team2@example.com"],
      });

      const response = await request(app)
        .delete("/api/emails/dn-team/remove")
        .set("Authorization", `Bearer ${token}`)
        .send({ email: "team1@example.com" })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.emails.length).toBe(1);
      expect(response.body.data.emails).not.toContain("team1@example.com");
      expect(response.body.data.emails).toContain("team2@example.com");
    });

    it("should return 404 for non-existent email group", async () => {
      const admin = await createTestAdmin();
      const token = getAuthToken(admin);

      const response = await request(app)
        .delete("/api/emails/non-existent/remove")
        .set("Authorization", `Bearer ${token}`)
        .send({ email: "test@example.com" })
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    it("should not remove email for non-admin", async () => {
      await createTestEmailGroup({ type: "dn-team" });

      const response = await request(app)
        .delete("/api/emails/dn-team/remove")
        .send({ email: "test@example.com" })
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });
});
