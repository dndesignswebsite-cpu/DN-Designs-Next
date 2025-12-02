/**
 * Test Helper Functions
 * Utility functions for testing
 */

import User from '../../models/User.js';
import Blog from '../../models/Blog.js';
import Contact from '../../models/Contact.js';
import Email from '../../models/Email.js';
import { generateToken } from '../../utils/generateToken.js';

/**
 * Create a test user
 * @param {Object} userData - User data to create
 * @returns {Promise<Object>} Created user
 */
export const createTestUser = async (userData = {}) => {
  const defaultUser = {
    name: 'Test User',
    email: `test${Date.now()}@example.com`,
    password: 'password123',
    role: 'user',
    ...userData,
  };

  return await User.create(defaultUser);
};

/**
 * Create a test admin user
 * @param {Object} userData - User data to create
 * @returns {Promise<Object>} Created admin user
 */
export const createTestAdmin = async (userData = {}) => {
  return await createTestUser({
    name: 'Test Admin',
    email: `admin${Date.now()}@example.com`,
    role: 'admin',
    ...userData,
  });
};

/**
 * Get authentication token for a user
 * @param {Object} user - User object
 * @returns {string} JWT token
 */
export const getAuthToken = (user) => {
  return generateToken(user._id);
};

/**
 * Create a test blog post
 * @param {Object} blogData - Blog data to create
 * @param {Object} author - Author user object
 * @returns {Promise<Object>} Created blog
 */
export const createTestBlog = async (blogData = {}, author) => {
  if (!author) {
    author = await createTestAdmin();
  }

  const defaultBlog = {
    title: 'Test Blog Post',
    slug: `test-blog-post-${Date.now()}`,
    content: 'This is a test blog post content. '.repeat(20), // Ensure enough content
    excerpt: 'Test blog excerpt',
    author: author._id,
    authorName: author.name,
    tags: ['test', 'blog'],
    category: 'Test',
    isPublished: true,
    publishedAt: new Date(),
    ...blogData,
  };

  const blog = await Blog.create(defaultBlog);
  blog.calculateReadingTime();
  await blog.save();

  return blog;
};

/**
 * Create a test contact submission
 * @param {Object} contactData - Contact data to create
 * @returns {Promise<Object>} Created contact
 */
export const createTestContact = async (contactData = {}) => {
  const defaultContact = {
    name: 'Test Contact',
    email: `contact${Date.now()}@example.com`,
    mobile: '+1234567890',
    message: 'This is a test contact message',
    ...contactData,
  };

  return await Contact.create(defaultContact);
};

/**
 * Create a test email group
 * @param {Object} emailData - Email group data to create
 * @returns {Promise<Object>} Created email group
 */
export const createTestEmailGroup = async (emailData = {}) => {
  const defaultEmailGroup = {
    type: `test-${Date.now()}`,
    emails: ['test@example.com'],
    description: 'Test email group',
    isActive: true,
    ...emailData,
  };

  // Normalize type to lowercase
  defaultEmailGroup.type = defaultEmailGroup.type.toLowerCase();

  return await Email.create(defaultEmailGroup);
};

/**
 * Clean up test database
 * Removes all test data
 */
export const cleanupDatabase = async () => {
  await User.deleteMany({});
  await Blog.deleteMany({});
  await Contact.deleteMany({});
  await Email.deleteMany({});
};

/**
 * Wait for a specified time (useful for async operations)
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise<void>}
 */
export const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

