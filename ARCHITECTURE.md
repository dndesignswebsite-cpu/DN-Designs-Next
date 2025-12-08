# Architecture Documentation

This document describes the three-layer architecture pattern used in the DN Designs API (Next.js API Routes).

## Architecture Overview

The application follows a **three-layer architecture** pattern:

```
┌─────────────────┐
│   API Routes    │  ← Handles HTTP requests/responses (src/app/api/)
├─────────────────┤
│    Service      │  ← Contains business logic (src/lib/services/)
├─────────────────┤
│   Repository    │  ← Database operations only (src/lib/repositories/)
└─────────────────┘
```

## Layer Responsibilities

### 1. API Route Layer (`src/app/api/`)
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
// src/app/api/auth/register/route.js
export async function POST(request) {
  await connectDB();
  
  const body = await request.json();
  const { name, email, password, role } = body;

  // Call service - no business logic here
  const result = await authService.register({ name, email, password, role });

  // Send response
  return NextResponse.json(
    { success: true, token: result.token, user: result.user },
    { status: 201 }
  );
}
```

### 2. Service Layer (`src/lib/services/`)
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
// src/lib/services/authService.js
export const register = async (userData) => {
  // Business logic: Check if user exists
  const userExists = await userRepository.existsByEmail(userData.email);
  if (userExists) {
    throwError('User already exists', 400);
  }
  
  // Business logic: Create user
  const user = await userRepository.create(userData);
  
  // Business logic: Generate token
  const token = generateToken(user._id);
  
  return { user, token };
};
```

### 3. Repository Layer (`src/lib/repositories/`)
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
// src/lib/repositories/userRepository.js
export const findById = async (userId, options = {}) => {
  let query = User.findById(userId);
  
  if (options.select) {
    query = query.select(options.select);
  }
  
  return await query;
};
```

## File Structure

```
src/
├── app/
│   └── api/                    # API Routes (HTTP handlers)
│       ├── auth/
│       │   ├── register/route.js
│       │   ├── login/route.js
│       │   ├── me/route.js
│       │   └── users/[id]/route.js
│       ├── blogs/
│       │   ├── route.js
│       │   └── [id]/route.js
│       ├── contact/
│       │   └── route.js
│       ├── emails/
│       │   └── route.js
│       └── health/route.js
└── lib/
    ├── config/                 # External service configs
    │   ├── cloudinary.js
    │   ├── database.js
    │   └── email.js
    ├── middleware/             # Auth & error handling
    │   ├── auth.js
    │   └── errorHandler.js
    ├── models/                 # Mongoose schemas
    │   ├── User.js
    │   ├── Blog.js
    │   ├── Contact.js
    │   └── Email.js
    ├── repositories/           # Database operations
    │   ├── userRepository.js
    │   ├── blogRepository.js
    │   ├── contactRepository.js
    │   └── emailRepository.js
    ├── services/               # Business logic
    │   ├── authService.js
    │   ├── blogService.js
    │   ├── contactService.js
    │   └── emailService.js
    └── utils/
        └── generateToken.js
```

## Data Flow

### Example: Creating a Blog Post

1. **API Route** (`src/app/api/blogs/route.js`)
   ```javascript
   export async function POST(request) {
     await connectDB();
     
     const authResult = await withAuth(request, 'admin');
     if (authResult.error) {
       return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
     }

     const formData = await request.formData();
     const blogData = { title: formData.get('title'), ... };

     // Call service
     const blog = await blogService.createBlog(blogData, authResult.user.id, imageBuffer);

     // Send response
     return NextResponse.json({ success: true, data: blog }, { status: 201 });
   }
   ```

2. **Service** (`src/lib/services/blogService.js`)
   ```javascript
   export const createBlog = async (blogData, authorId, imageBuffer) => {
     // Business logic: Get author
     const author = await userRepository.findById(authorId);

     // Business logic: Upload image
     if (imageBuffer) {
       const result = await uploadImageBuffer(imageBuffer);
       blogData.featuredImage = { url: result.secure_url, ... };
     }

     // Business logic: Create blog
     return await blogRepository.create(blogData);
   };
   ```

3. **Repository** (`src/lib/repositories/blogRepository.js`)
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
- Services can be reused across different API routes
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

### API Route Layer
- ✅ Keep routes thin
- ✅ Extract request data
- ✅ Call service methods
- ✅ Format responses
- ❌ Don't put business logic in routes
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

## Adding New Features

1. **Create Repository Methods** (if needed)
   ```javascript
   // src/lib/repositories/newRepository.js
   export const findById = async (id) => { ... };
   export const create = async (data) => { ... };
   ```

2. **Create Service Methods**
   ```javascript
   // src/lib/services/newService.js
   export const createNew = async (data) => {
     // Business logic here
     return await newRepository.create(data);
   };
   ```

3. **Create API Route**
   ```javascript
   // src/app/api/new/route.js
   export async function POST(request) {
     await connectDB();
     const body = await request.json();
     const result = await newService.createNew(body);
     return NextResponse.json({ success: true, data: result }, { status: 201 });
   }
   ```

## Summary

This three-layer architecture provides:
- ✅ Clear separation of concerns
- ✅ Easy to test and maintain
- ✅ Scalable and flexible
- ✅ Follows industry best practices
- ✅ Works seamlessly with Next.js API Routes

Each layer has a specific purpose and should not mix responsibilities with other layers.
