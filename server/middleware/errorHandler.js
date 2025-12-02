/**
 * Error Handler Middleware
 * Centralized error handling for the application
 */

/**
 * Custom Error class for application-specific errors
 */
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Global error handler middleware
 * Handles all errors in the application
 */
export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    err = new AppError(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    const message = `${field} already exists. Please use a different ${field}.`;
    err = new AppError(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    const message = messages.join(', ');
    err = new AppError(message, 400);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token. Please login again.';
    err = new AppError(message, 401);
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired. Please login again.';
    err = new AppError(message, 401);
  }

  // Send error response
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

/**
 * Async handler wrapper
 * Catches errors in async functions and passes them to error handler
 * @param {Function} fn - Async function to wrap
 */
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Central Error Logger
 * Logs error with message, stack trace, and optional context
 * @param {Error|string} error - Error object or error message
 * @param {Object} context - Optional context information (e.g., { function: 'functionName', data: {...} })
 */
const logErrorDetails = (error, context = {}) => {
  const timestamp = new Date().toISOString();
  const errorMessage = error instanceof Error ? error.message : error;
  const errorStack = error instanceof Error ? error.stack : new Error(error).stack;
  const errorName = error instanceof Error ? error.name : 'Error';
  const statusCode = error instanceof AppError ? error.statusCode : undefined;

  console.error('═══════════════════════════════════════════════════════════');
  console.error(`❌ ERROR [${timestamp}]`);
  console.error('───────────────────────────────────────────────────────────');
  console.error(`Error Name: ${errorName}`);
  if (statusCode) {
    console.error(`Status Code: ${statusCode}`);
  }
  console.error(`Message: ${errorMessage}`);
  
  if (Object.keys(context).length > 0) {
    console.error('Context:', JSON.stringify(context, null, 2));
  }
  
  console.error('Stack Trace:');
  console.error(errorStack);
  console.error('═══════════════════════════════════════════════════════════');
};

/**
 * Log error without throwing
 * Useful for non-critical errors that should be logged but not stop execution
 * @param {Error|string} error - Error object or error message
 * @param {Object} context - Optional context information
 */
export const logError = (error, context = {}) => {
  logErrorDetails(error, context);
};

/**
 * Log error and throw it
 * Useful for critical errors that should stop execution
 * @param {Error|string} error - Error object or error message
 * @param {number} statusCode - Optional HTTP status code (if error is a string, creates AppError)
 * @param {Object} context - Optional context information
 * @throws {Error|AppError}
 */
export const throwError = (error, statusCode = null, context = {}) => {
  logErrorDetails(error, context);

  // If error is a string, create AppError with status code
  if (typeof error === 'string') {
    const status = statusCode || 500;
    throw new AppError(error, status);
  }

  // If error is already an Error, throw it as-is
  if (error instanceof Error) {
    throw error;
  }

  // Fallback: create generic error
  throw new AppError('An error occurred', statusCode || 500);
};

