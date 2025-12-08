/**
 * Error Handler Utilities
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
 * Central Error Logger
 * Logs error with message, stack trace, and optional context
 * @param {Error|string} error - Error object or error message
 * @param {Object} context - Optional context information
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
 * @param {Error|string} error - Error object or error message
 * @param {Object} context - Optional context information
 */
export const logError = (error, context = {}) => {
  logErrorDetails(error, context);
};

/**
 * Log error and throw it
 * @param {Error|string} error - Error object or error message
 * @param {number} statusCode - Optional HTTP status code
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

/**
 * Handle errors and return appropriate response
 * @param {Error} error - Error to handle
 * @returns {Object} Object with statusCode and body
 */
export const handleError = (error) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'Internal Server Error';

  // Mongoose bad ObjectId
  if (error.name === 'CastError') {
    message = `Resource not found with id of ${error.value}`;
    statusCode = 404;
  }

  // Mongoose duplicate key
  if (error.code === 11000) {
    const field = Object.keys(error.keyPattern)[0];
    message = `${field} already exists. Please use a different ${field}.`;
    statusCode = 400;
  }

  // Mongoose validation error
  if (error.name === 'ValidationError') {
    const messages = Object.values(error.errors).map((val) => val.message);
    message = messages.join(', ');
    statusCode = 400;
  }

  // JWT errors
  if (error.name === 'JsonWebTokenError') {
    message = 'Invalid token. Please login again.';
    statusCode = 401;
  }

  if (error.name === 'TokenExpiredError') {
    message = 'Token expired. Please login again.';
    statusCode = 401;
  }

  return {
    statusCode,
    body: {
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    },
  };
};

