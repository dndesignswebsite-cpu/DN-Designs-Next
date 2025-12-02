# Test Documentation

This directory contains unit tests for the DN Designs backend API.

## Test Structure

```
__tests__/
├── controllers/        # Controller tests
│   ├── authController.test.js
│   ├── blogController.test.js
│   ├── contactController.test.js
│   └── emailController.test.js
├── models/            # Model tests
│   └── User.test.js
├── middleware/        # Middleware tests
│   └── auth.test.js
├── helpers/           # Test helper functions
│   └── testHelpers.js
├── setup.js           # Test setup file
└── README.md          # This file
```

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in watch mode:
```bash
npm run test:watch
```

### Run tests with coverage:
```bash
npm run test:coverage
```

## Test Database

Tests use a separate test database (`dn-designs-test`) to avoid affecting development data.

Make sure you have:
1. MongoDB running locally, OR
2. Set `MONGODB_URI_TEST` in your `.env.test` file

## Test Coverage

The test suite covers:
- ✅ User authentication (register, login, CRUD)
- ✅ Blog management (CRUD operations)
- ✅ Contact form submissions
- ✅ Email management (CRUD operations, add/remove emails)
- ✅ Model validation and schemas
- ✅ Authentication middleware
- ✅ Authorization middleware

## Writing New Tests

### Example Test Structure:
```javascript
import { jest } from '@jest/globals';
import request from 'supertest';

describe('Feature Name', () => {
  beforeEach(async () => {
    await cleanupDatabase();
  });

  it('should do something', async () => {
    // Test implementation
  });
});
```

### Using Test Helpers:
```javascript
import { 
  createTestUser, 
  createTestAdmin, 
  createTestEmailGroup,
  getAuthToken 
} from '../helpers/testHelpers.js';

const user = await createTestUser();
const token = getAuthToken(user);
const emailGroup = await createTestEmailGroup({ type: 'dn-team' });
```

## Test Environment Variables

Create a `.env.test` file with:
```
MONGODB_URI_TEST=mongodb://localhost:27017/dn-designs-test
JWT_SECRET=test-jwt-secret-key
NODE_ENV=test
```

## Notes

- Tests automatically clean up the database before each test
- All tests use async/await for better readability
- Mock external services (Cloudinary, Email) when needed
- Tests are isolated and can run in any order

