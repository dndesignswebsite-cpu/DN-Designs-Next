# API Documentation

Base URL: `http://localhost:5000/api`

## Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

**Roles:**
- **admin**: Full access to all resources.
- **editor**: Can Create, Read, Update resources. No Delete access.
- **user**: Read-only access to most business resources (Blogs, Contacts, Emails). No access to User Management.

---

## 🔐 Authentication Endpoints

### Register User

**POST** `/auth/register`

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user" // Optional: "user" or "admin" (default: "user")
}
```

**Response:**

```json
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "avatar": null
  }
}
```

---

### Login

**POST** `/auth/login`

**Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "avatar": null
  }
}
```

---

### Get Current User

**GET** `/auth/me`  
**Protected:** Yes

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "avatar": null,
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### Update Profile

**PUT** `/auth/update-profile`  
**Protected:** Yes

**Body (multipart/form-data):**

- `name` (optional)
- `email` (optional)
- `password` (optional)
- `avatar` (optional, file)

**Response:**

```json
{
  "success": true,
  "data": {
    /* updated user object */
  }
}
```

---

### Get All Users

**GET** `/auth/users`  
**Protected:** Yes (Admin only)

**Query Parameters:**

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `role` - Filter by role
- `isActive` - Filter by active status
- `search` - Search in name/email

**Response:**

```json
{
  "success": true,
  "count": 10,
  "total": 50,
  "page": 1,
  "pages": 5,
  "data": [
    /* array of users */
  ]
}
```

---

### Get User by ID

**GET** `/auth/users/:id`  
**Protected:** Yes (Admin only)

---

### Update User

**PUT** `/auth/users/:id`  
**Protected:** Yes (Admin only)

**Body (multipart/form-data):**

- `name` (optional)
- `email` (optional)
- `password` (optional)
- `role` (optional, Admin only)
- `isActive` (optional, Admin only)
- `avatar` (optional, file)

---

### Delete User

**DELETE** `/auth/users/:id`  
**Protected:** Yes (Admin only)

---

## 📝 Blog Endpoints

### Get All Blogs

**GET** `/blogs`

**Query Parameters:**

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `category` - Filter by category
- `tags` - Filter by tags (comma-separated)
- `author` - Filter by author ID
- `search` - Search in title/content
- `isPublished` - Filter by published status (Admin only)

**Response:**

```json
{
  "success": true,
  "count": 10,
  "total": 50,
  "page": 1,
  "pages": 5,
  "data": [
    /* array of blogs (without content) */
  ]
}
```

---

### Get Blog by ID or Slug

**GET** `/blogs/:id`

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "blog-id",
    "title": "Blog Title",
    "slug": "blog-title",
    "content": "Full blog content...",
    "excerpt": "Short excerpt",
    "featuredImage": {
      "url": "https://...",
      "publicId": "dn-designs/..."
    },
    "images": [
      /* array of images */
    ],
    "author": {
      "_id": "author-id",
      "name": "Author Name",
      "email": "author@example.com"
    },
    "tags": ["design", "branding"],
    "category": "Design",
    "isPublished": true,
    "publishedAt": "2024-01-01T00:00:00.000Z",
    "views": 100,
    "readingTime": 5,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### Create Blog

**POST** `/blogs`  
**Protected:** Yes (Admin, Editor)

**Body (multipart/form-data):**

- `title` (required)
- `content` (required)
- `excerpt` (optional)
- `tags` (optional, JSON array or comma-separated)
- `category` (optional)
- `metaDescription` (optional)
- `metaKeywords` (optional, JSON array or comma-separated)
- `isPublished` (optional, boolean)
- `featuredImage` (optional, file)

**Response:**

```json
{
  "success": true,
  "data": {
    /* created blog object */
  }
}
```

---

### Update Blog

**PUT** `/blogs/:id`  
**Protected:** Yes (Admin, Editor)

**Body (multipart/form-data):**

- Same fields as Create Blog

---

### Delete Blog

**DELETE** `/blogs/:id`  
**Protected:** Yes (Admin only)

**Response:**

```json
{
  "success": true,
  "message": "Blog post deleted successfully"
}
```

---

### Add Images to Blog

**POST** `/blogs/:id/images`  
**Protected:** Yes (Admin, Editor)

**Body (multipart/form-data):**

- `images` (required, multiple files, max 10)
- `captions` (optional, JSON array)

---

### Delete Image from Blog

**DELETE** `/blogs/:id/images/:imageId`  
**Protected:** Yes (Admin, Editor)

---

## 📧 Contact Endpoints

### Submit Contact Form

**POST** `/contact`

**Body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "mobile": "+1234567890",
  "message": "I'm interested in your services"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "data": {
    "_id": "contact-id",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "mobile": "+1234567890",
    "message": "I'm interested in your services",
    "status": "new",
    "emailSent": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Note:** This endpoint automatically sends an email notification to the admin email configured in `.env`.

---

### Get All Contacts

**GET** `/contact`  
**Protected:** Yes (Admin, Editor, User)

**Query Parameters:**

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `status` - Filter by status (new, read, replied, resolved)
- `email` - Filter by email
- `search` - Search in name/email/message

---

### Get Contact by ID

**GET** `/contact/:id`  
**Protected:** Yes (Admin, Editor, User)

**Note:** Automatically marks contact as "read" if status is "new".

---

### Update Contact

**PUT** `/contact/:id`  
**Protected:** Yes (Admin, Editor)

**Body:**

```json
{
  "status": "replied", // new, read, replied, resolved
  "adminNotes": "Customer responded positively"
}
```

---

### Delete Contact

**DELETE** `/contact/:id`  
**Protected:** Yes (Admin only)

---

### Get Contact Statistics

**GET** `/contact/stats/summary`  
**Protected:** Yes (Admin only)

**Response:**

```json
{
  "success": true,
  "data": {
    "total": 100,
    "new": 25,
    "read": 30,
    "replied": 20,
    "resolved": 25,
    "recent": 15 // Last 30 days
  }
}
```

---

## 📧 Email Management Endpoints

### Get All Email Groups

**GET** `/emails`  
**Protected:** Yes (Admin, Editor, User)

**Query Parameters:**

- `type` - Filter by email type (e.g., "dn-team", "customer")
- `isActive` - Filter by active status (true/false)

**Response:**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "email-group-id",
      "type": "dn-team",
      "emails": ["team1@dndesigns.co.in", "team2@dndesigns.co.in"],
      "description": "DN Team email group",
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

### Get All Active Emails

**GET** `/emails/all`  
**Protected:** Yes (Admin, Editor, User)

**Response:**

```json
{
  "success": true,
  "count": 5,
  "data": [
    "team1@dndesigns.co.in",
    "team2@dndesigns.co.in",
    "admin@dndesigns.co.in",
    "customer1@example.com",
    "customer2@example.com"
  ]
}
```

**Note:** Returns a flattened list of all unique active email addresses from all groups.

---

### Get Email Group by ID or Type

**GET** `/emails/:id`  
**Protected:** Yes (Admin, Editor, User)

**Parameters:**

- `id` - Can be MongoDB ObjectId or email type (e.g., "dn-team")

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "email-group-id",
    "type": "dn-team",
    "emails": ["team1@dndesigns.co.in", "team2@dndesigns.co.in"],
    "description": "DN Team email group",
    "isActive": true
  }
}
```

---

### Create Email Group

**POST** `/emails`  
**Protected:** Yes (Admin, Editor)

**Body:**

```json
{
  "type": "dn-team",
  "emails": ["team1@dndesigns.co.in", "team2@dndesigns.co.in"],
  "description": "DN Team email group"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email group created successfully",
  "data": {
    "_id": "email-group-id",
    "type": "dn-team",
    "emails": ["team1@dndesigns.co.in", "team2@dndesigns.co.in"],
    "description": "DN Team email group",
    "isActive": true
  }
}
```

**Note:** The `type` field must be unique. Email addresses are automatically normalized to lowercase.

---

### Update Email Group

**PUT** `/emails/:id`  
**Protected:** Yes (Admin, Editor)

**Body:**

```json
{
  "emails": [
    "team1@dndesigns.co.in",
    "team2@dndesigns.co.in",
    "team3@dndesigns.co.in"
  ],
  "description": "Updated DN Team email group",
  "isActive": true
}
```

**Note:** All fields are optional. Only provided fields will be updated.

---

### Delete Email Group

**DELETE** `/emails/:id`  
**Protected:** Yes (Admin only)

**Response:**

```json
{
  "success": true,
  "message": "Email group deleted successfully"
}
```

---

### Add Email to Group

**POST** `/emails/:type/add`  
**Protected:** Yes (Admin, Editor)

**Body:**

```json
{
  "email": "newmember@dndesigns.co.in"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email added successfully",
  "data": {
    "_id": "email-group-id",
    "type": "dn-team",
    "emails": [
      "team1@dndesigns.co.in",
      "team2@dndesigns.co.in",
      "newmember@dndesigns.co.in"
    ]
  }
}
```

**Note:** Duplicate emails are automatically prevented.

---

### Remove Email from Group

**DELETE** `/emails/:type/remove`  
**Protected:** Yes (Admin, Editor)

**Body:**

```json
{
  "email": "oldmember@dndesigns.co.in"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email removed successfully",
  "data": {
    "_id": "email-group-id",
    "type": "dn-team",
    "emails": ["team1@dndesigns.co.in", "team2@dndesigns.co.in"]
  }
}
```

---

### Send Promotional Email to Group

**POST** `/emails/:type/send`  
**Protected:** Yes (Admin, Editor)

**Body:**

```json
{
  "subject": "Special Offer - 50% Off!",
  "content": "<h1>Special Promotion</h1><p>Get 50% off on all services this month!</p>",
  "isHtml": true
}
```

**Or with plain text:**

```json
{
  "subject": "Special Offer - 50% Off!",
  "content": "Get 50% off on all services this month! Visit our website for more details.",
  "isHtml": false
}
```

**Parameters:**

- `subject` (required) - Email subject line
- `content` (required) - Email content (HTML string or plain text)
- `isHtml` (optional) - Boolean indicating if content is HTML. If not provided, auto-detected based on HTML tags

**Response:**

```json
{
  "success": true,
  "message": "Promotional email sent successfully",
  "data": {
    "recipients": 25,
    "groupType": "dn-team",
    "groupName": "DN Team email group",
    "subject": "Special Offer - 50% Off!"
  }
}
```

**Notes:**

- Content can be HTML string or plain text
- If `isHtml` is not specified, the system auto-detects HTML by checking for HTML tags
- Plain text content is automatically wrapped in a styled HTML template
- Email group must be active and have at least one email address
- All emails in the group will receive the promotional email

---

## Health Check

### Check Server Status

**GET** `/health`

**Response:**

```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

---

## Error Responses

All errors follow this format:

```json
{
  "success": false,
  "message": "Error message here"
}
```

**Common Status Codes:**

- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing/invalid token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

---
