/**
 * User Service
 * Business logic for user management
 */

import * as userRepository from "@/lib/repositories/userRepository.js";
import { throwError } from "@/lib/middleware/errorHandler.js";
import { sendUserCredentialsEmail } from "@/lib/services/emailService.js";
import crypto from "node:crypto";

export const getAllUsers = async (filters = {}, options = {}) => {
  return await userRepository.findAll(filters, options);
};

export const getUserById = async (userId) => {
  const user = await userRepository.findById(userId);
  if (!user) {
    throwError(`User not found with id of ${userId}`, 404, {
      function: "getUserById",
      userId,
    });
  }
  return user;
};

export const createUser = async (userData) => {
  // Check if user already exists
  const existingUser = await userRepository.findByEmail(userData.email);
  if (existingUser) {
    throwError("Email already registered", 400, {
      function: "createUser",
      email: userData.email,
    });
  }

  // Generate random password
  const randomPassword = crypto.randomBytes(8).toString("hex"); // 16 chars hex

  // Create user with random password (it will be hashed by model pre-save hook)
  const newUser = await userRepository.create({
    ...userData,
    password: randomPassword,
  });

  // Send email with credentials
  try {
    await sendUserCredentialsEmail(newUser.email, newUser.name, randomPassword);
  } catch (emailError) {
    console.error("Failed to send credentials email:", emailError);
    // Silent fail for email, but user is created.
    // In production, might want to rollback or queue retry.
  }

  return newUser;
};

export const updateUser = async (userId, updateData) => {
  // Prevent password update through this generic route for safety
  delete updateData.password;

  return await userRepository.updateById(userId, updateData);
};

export const deleteUser = async (userId) => {
  // Prevent deleting self? (Should be handled in controller logic ideally)
  return await userRepository.deleteById(userId);
};
