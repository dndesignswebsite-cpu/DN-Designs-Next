/**
 * Authentication Controller
 * Handles HTTP requests and responses for authentication
 * Delegates business logic to authService
 */

import * as authService from "../services/authService.js";
import { sendTokenResponse } from "../utils/generateToken.js";
import { asyncHandler } from "../middleware/errorHandler.js";

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
export const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Call service to handle business logic
  const result = await authService.register({
    name,
    email,
    password,
    role,
  });

  // Send response
  res.status(201).json({
    success: true,
    token: result.token,
    user: result.user,
  });
});

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 */
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Call service to handle business logic
  const result = await authService.login(email, password);

  // Send response
  res.status(200).json({
    success: true,
    token: result.token,
    user: result.user,
  });
});

/**
 * @route   GET /api/auth/me
 * @desc    Get current logged in user
 * @access  Private
 */
export const getMe = asyncHandler(async (req, res, next) => {
  // Call service to get user
  const user = await authService.getCurrentUser(req.user.id);

  // Send response
  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * @route   GET /api/auth/users
 * @desc    Get all users (Admin only)
 * @access  Private/Admin
 */
export const getUsers = asyncHandler(async (req, res, next) => {
  // Extract query parameters
  const filters = {
    role: req.query.role,
    isActive: req.query.isActive,
    search: req.query.search,
  };

  const pagination = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
  };

  // Call service to get users
  const result = await authService.getAllUsers(filters, pagination);

  // Send response
  res.status(200).json({
    success: true,
    count: result.count,
    total: result.total,
    page: result.page,
    pages: result.pages,
    data: result.users,
  });
});

/**
 * @route   GET /api/auth/users/:id
 * @desc    Get single user by ID
 * @access  Private/Admin
 */
export const getUser = asyncHandler(async (req, res, next) => {
  // Call service to get user
  const user = await authService.getUserById(req.params.id);

  // Send response
  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * @route   PUT /api/auth/users/:id
 * @desc    Update user
 * @access  Private/Admin or Self
 */
export const updateUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const updateData = req.body;
  const currentUser = {
    id: req.user.id,
    role: req.user.role,
  };

  // Call service to update user
  const updatedUser = await authService.updateUser(
    userId,
    updateData,
    currentUser,
    req.file
  );

  // Send response
  res.status(200).json({
    success: true,
    data: updatedUser,
  });
});

/**
 * @route   DELETE /api/auth/users/:id
 * @desc    Delete user
 * @access  Private/Admin
 */
export const deleteUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const currentUser = {
    id: req.user.id,
    role: req.user.role,
  };

  // Call service to delete user
  await authService.deleteUser(userId, currentUser);

  // Send response
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

/**
 * @route   PUT /api/auth/update-profile
 * @desc    Update current user's profile
 * @access  Private
 */
export const updateProfile = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const updateData = req.body;

  // Call service to update profile
  const updatedUser = await authService.updateProfile(
    userId,
    updateData,
    req.file
  );

  // Send response
  res.status(200).json({
    success: true,
    data: updatedUser,
  });
});
