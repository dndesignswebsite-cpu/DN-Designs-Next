# Architecture Documentation

This document describes the three-layer architecture pattern used in the DN Designs API.

## Architecture Overview

The application follows a **three-layer architecture** pattern:

```
┌─────────────────┐
│   Controller    │  ← Handles HTTP requests/responses
├─────────────────┤
│    Service      │  ← Contains business logic
├─────────────────┤
│   Repository    │  ← Database operations only
└─────────────────┘
```

## Layer Responsibilities

### 1. Controller Layer (`controllers/`)
**Purpose**: Handle HTTP requests and responses

**Responsibilities**:
- Extract data from HTTP requests (body, params, query)
- Validate request format
- Call appropriate service methods
- Format and send HTTP responses
- Handle HTTP status codes

**What it does NOT do**:
- ❌ Business logic
- ❌ Database queries
- ❌ Data validation (beyond HTTP level)

**Example**:
```javascript
export const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  
  // Call service - no business logic here
  const result = await authService.register({
    name, email, password, role
  });
  
  // Send response
  res.status(201).json({
    success: true,
    token: result.token,
    user: result.user,
  });
});
```

### 2. Service Layer (`services/`)
**Purpose**: Contains all business logic

**Responsibilities**:
- Implement business rules and logic
- Coordinate between repositories
- Handle complex operations
- Validate business rules
- Transform data as needed
- Call external services (Cloudinary, Email, etc.)

**What it does NOT do**:
- ❌ Direct database queries
- ❌ HTTP request/response handling
- ❌ Route definitions

**Example**:
```javascript
export const register = async (userData) => {
  // Business logic: Check if user exists
  const userExists = await userRepository.existsByEmail(userData.email);
  if (userExists) {
    throw new AppError('User already exists', 400);
  }
  
  // Business logic: Create user
  const user = await userRepository.create(userData);
  
  // Business logic: Generate token
  const token = generateToken(user._id);
  
  return { user, token };
};
```

### 3. Repository Layer (`repositories/`)
**Purpose**: Database operations only

**Responsibilities**:
- CRUD operations (Create, Read, Update, Delete)
- Database queries
- Data filtering and pagination
- Database-specific logic

**What it does NOT do**:
- ❌ Business logic
- ❌ Validation (beyond database constraints)
- ❌ External service calls
- ❌ Data transformation

**Example**:
```javascript
export const findById = async (userId, options = {}) => {
  let query = User.findById(userId);
  
  if (options.select) {
    query = query.select(options.select);
  }
  
  const user = await query;
  return user;
};
```

## File Structure

```
server/
├── controllers/          # HTTP request/response handlers
│   ├── authController.js
│   ├── blogController.js
│   └── contactController.js
├── services/            # Business logic
│   ├── authService.js
│   ├── blogService.js
│   └── contactService.js
├── repositories/        # Database operations
│   ├── userRepository.js
│   ├── blogRepository.js
│   └── contactRepository.js
├── models/             # Mongoose schemas
│   ├── User.js
│   ├── Blog.js
│   └── Contact.js
└── routes/             # Route definitions
    ├── authRoutes.js
    ├── blogRoutes.js
    └── contactRoutes.js
```

## Data Flow

### Example: Creating a Blog Post

1. **Route** (`routes/blogRoutes.js`)
   ```javascript
   router.post('/', protect, authorize('admin'), createBlog);
   ```

2. **Controller** (`controllers/blogController.js`)
   ```javascript
   export const createBlog = asyncHandler(async (req, res, next) => {
     const blogData = req.body;
     const authorId = req.user.id;
     
     // Call service
     const blog = await blogService.createBlog(blogData, authorId, req.file);
     
     // Send response
     res.status(201).json({ success: true, data: blog });
   });
   ```

3. **Service** (`services/blogService.js`)
   ```javascript
   export const createBlog = async (blogData, authorId, file) => {
     // Business logic: Get author
     const author = await userRepository.findById(authorId);
     
     // Business logic: Upload image
     if (file) {
       const result = await uploadImage(file.path);
       blogData.featuredImage = { url: result.secure_url, ... };
     }
     
     // Business logic: Create blog
     const blog = await blogRepository.create(blogData);
     
     // Business logic: Calculate reading time
     blog.calculateReadingTime();
     await blog.save();
     
     return blog;
   };
   ```

4. **Repository** (`repositories/blogRepository.js`)
   ```javascript
   export const create = async (blogData) => {
     const blog = await Blog.create(blogData);
     await blog.populate('author', 'name email avatar');
     return blog;
   };
   ```

## Benefits of This Architecture

### 1. **Separation of Concerns**
- Each layer has a single, well-defined responsibility
- Easy to understand and maintain

### 2. **Testability**
- Each layer can be tested independently
- Easy to mock dependencies
- Services can be tested without HTTP layer

### 3. **Reusability**
- Services can be reused across different controllers
- Repositories can be used by multiple services

### 4. **Maintainability**
- Changes in one layer don't affect others
- Easy to locate and fix bugs
- Clear code organization

### 5. **Scalability**
- Easy to add new features
- Can swap implementations (e.g., different database)
- Can add caching, logging at service layer

## Best Practices

### Controller Layer
- ✅ Keep controllers thin
- ✅ Extract request data
- ✅ Call service methods
- ✅ Format responses
- ❌ Don't put business logic in controllers
- ❌ Don't query database directly

### Service Layer
- ✅ Put all business logic here
- ✅ Validate business rules
- ✅ Coordinate between repositories
- ✅ Handle complex operations
- ❌ Don't handle HTTP directly
- ❌ Don't query database directly (use repositories)

### Repository Layer
- ✅ Only database operations
- ✅ Keep queries simple and focused
- ✅ Handle database errors
- ❌ Don't include business logic
- ❌ Don't call external services

## Migration Guide

If you need to add a new feature:

1. **Create Repository Methods** (if needed)
   ```javascript
   // repositories/newRepository.js
   export const findById = async (id) => { ... };
   export const create = async (data) => { ... };
   ```

2. **Create Service Methods**
   ```javascript
   // services/newService.js
   export const createNew = async (data) => {
     // Business logic here
     return await newRepository.create(data);
   };
   ```

3. **Create Controller Methods**
   ```javascript
   // controllers/newController.js
   export const createNew = asyncHandler(async (req, res) => {
     const result = await newService.createNew(req.body);
     res.status(201).json({ success: true, data: result });
   });
   ```

4. **Add Routes**
   ```javascript
   // routes/newRoutes.js
   router.post('/', createNew);
   ```

## Testing Strategy

### Unit Tests
- **Repository Tests**: Test database operations in isolation
- **Service Tests**: Test business logic with mocked repositories
- **Controller Tests**: Test HTTP handling with mocked services

### Integration Tests
- Test full flow: Controller → Service → Repository → Database

## Summary

This three-layer architecture provides:
- ✅ Clear separation of concerns
- ✅ Easy to test and maintain
- ✅ Scalable and flexible
- ✅ Follows industry best practices

Each layer has a specific purpose and should not mix responsibilities with other layers.

