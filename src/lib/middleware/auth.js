/**
 * Authentication Middleware for Next.js API Routes
 * Verifies JWT tokens and protects routes
 */

import jwt from "jsonwebtoken";
import User from "@/lib/models/User.js";
import connectDB from "@/lib/config/database.js";

/**
 * Verify JWT token and get user from token string
 * @param {string} token - JWT token string
 * @returns {Promise<Object|null>} User object or null
 */
export const getAuthUserFromToken = async (token) => {
  try {
    if (!token) return null;

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Connect to database and get user
    await connectDB();
    const user = await User.findById(decoded.id).select("-password");

    if (!user || !user.isActive) {
      return null;
    }

    return user;
  } catch (error) {
    return null;
  }
};

/**
 * Verify JWT token and get user from request
 * @param {Request} request - Next.js request object
 * @returns {Promise<Object|null>} User object or null
 */
export const getAuthUser = async (request) => {
  // Get token from Authorization header
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return null;
  }

  const token = authHeader.split(" ")[1];
  return getAuthUserFromToken(token);
};

/**
 * Protect route - requires valid JWT token
 * @param {Request} request - Next.js request object
 * @returns {Promise<Object>} Object with user or error response
 */
export const protect = async (request) => {
  const user = await getAuthUser(request);

  if (!user) {
    return {
      error: {
        statusCode: 401,
        body: {
          success: false,
          message:
            "Not authorized to access this route. Please provide a valid token.",
        },
      },
    };
  }

  return { user };
};

/**
 * Check if user has required role
 * @param {Object} user - User object
 * @param {Array<string>} roles - Allowed roles
 * @returns {Object|null} Error object or null if authorized
 */
export const authorize = (user, ...roles) => {
  if (!user) {
    return {
      statusCode: 401,
      body: {
        success: false,
        message: "Not authorized to access this route.",
      },
    };
  }

  if (!roles.includes(user.role)) {
    return {
      statusCode: 403,
      body: {
        success: false,
        message: `User role '${user.role}' is not authorized to access this route.`,
      },
    };
  }

  return null;
};

/**
 * Combined protect and authorize middleware
 * @param {Request} request - Next.js request object
 * @param {Array<string>} roles - Allowed roles (optional)
 * @returns {Promise<Object>} Object with user or error response
 */
export const withAuth = async (request, ...roles) => {
  const result = await protect(request);

  if (result.error) {
    return result;
  }

  if (roles.length > 0) {
    const authError = authorize(result.user, ...roles);
    if (authError) {
      return { error: authError };
    }
  }

  return result;
};
