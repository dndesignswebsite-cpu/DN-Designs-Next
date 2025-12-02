# Testing Guide

This document provides a comprehensive guide for running and writing tests for the DN Designs API.

## Prerequisites

1. **MongoDB**: Ensure MongoDB is running (local or Atlas)
2. **Node.js**: Version 16 or higher
3. **Dependencies**: Install test dependencies
   ```bash
   npm install
   ```

## Test Database Setup

Create a `.env.test` file in the `server` directory:

```env
MONGODB_URI_TEST=mongodb://localhost:27017/dn-designs-test
JWT_SECRET=test-jwt-secret-key
NODE_ENV=test
```

**Important**: Tests use a separate database (`dn-designs-test`) to avoid affecting development data.

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```
This will automatically re-run tests when files change.

### Run Tests with Coverage
```bash
npm run test:coverage
```
This generates a coverage report showing which code is tested.

### Run Specific Test File
```bash
npm test -- authController.test.js
```

### Run Tests Matching a Pattern
```bash
npm test -- --testNamePattern="should login"
```

## Test Structure

```
__tests__/
├── controllers/          # Controller unit tests
│   ├── authController.test.js
│   ├── blogController.test.js
│   ├── contactController.test.js
│   └── emailController.test.js
├── models/               # Model unit tests
│   └── User.test.js
├── middleware/           # Middleware unit tests
│   └── auth.test.js
├── helpers/              # Test helper functions
│   └── testHelpers.js
└── setup.js              # Test setup configuration
```

## Writing Tests

### Test File Structure

```javascript
import { jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import { cleanupDatabase, createTestUser } from '../helpers/testHelpers.js';

// Setup
const app = express();
// ... configure app

beforeAll(async () => {
  // Connect to test database
});

beforeEach(async () => {
  // Clean up before each test
  await cleanupDatabase();
});

afterAll(async () => {
  // Close database connection
});

describe('Feature Name', () => {
  it('should do something', async () => {
    // Test implementation
  });
});
```

### Using Test Helpers

```javascript
import {
  createTestUser,
  createTestAdmin,
  createTestBlog,
  createTestContact,
  createTestEmailGroup,
  getAuthToken,
  cleanupDatabase,
} from '../helpers/testHelpers.js';

// Create test data
const user = await createTestUser();
const admin = await createTestAdmin();
const token = getAuthToken(user);
const blog = await createTestBlog({}, admin);
const emailGroup = await createTestEmailGroup({ type: 'dn-team' });
```

### Example Test

```javascript
it('should create a blog post', async () => {
  const admin = await createTestAdmin();
  const token = getAuthToken(admin);

  const blogData = {
    title: 'Test Blog',
    content: 'Test content. '.repeat(20),
  };

  const response = await request(app)
    .post('/api/blogs')
    .set('Authorization', `Bearer ${token}`)
    .send(blogData)
    .expect(201);

  expect(response.body.success).toBe(true);
  expect(response.body.data.title).toBe(blogData.title);
});
```

## Test Coverage

The test suite aims for:
- **70%+ coverage** across all modules
- **100% coverage** for critical paths (auth, validation)

View coverage report:
```bash
npm run test:coverage
```

Coverage report is generated in `coverage/` directory.

## Best Practices

1. **Isolation**: Each test should be independent
2. **Cleanup**: Always clean up test data between tests
3. **Descriptive Names**: Use clear test descriptions
4. **Arrange-Act-Assert**: Structure tests clearly
5. **Mock External Services**: Mock Cloudinary, Email services in tests

## Common Issues

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGODB_URI_TEST` in `.env.test`
- For Atlas, ensure IP is whitelisted

### Port Already in Use
- Change port in test configuration
- Kill process using the port

### Tests Failing Randomly
- Check for race conditions
- Ensure proper async/await usage
- Verify database cleanup

## Continuous Integration

Tests can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Run tests
  run: |
    cd server
    npm test
```

## Debugging Tests

### Run Single Test
```bash
npm test -- --testNamePattern="specific test name"
```

### Debug Mode
```bash
node --inspect-brk node_modules/jest/bin/jest.js --runInBand
```

### Verbose Output
```bash
npm test -- --verbose
```

## Test Types

### Unit Tests
- Test individual functions/methods
- Mock dependencies
- Fast execution

### Integration Tests
- Test API endpoints
- Use test database
- Test full request/response cycle

## Mocking

### Mock External Services

```javascript
// Mock Cloudinary
jest.mock('../../config/cloudinary.js', () => ({
  uploadImage: jest.fn().mockResolvedValue({
    secure_url: 'https://example.com/image.jpg',
    public_id: 'test-id',
  }),
}));
```

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Test README](./__tests__/README.md)

