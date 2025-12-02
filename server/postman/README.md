# Postman Collection for DN Designs API

This directory contains Postman collection and environment files for testing the DN Designs API.

## Files

- `DN-Designs-API.postman_collection.json` - Complete API collection with all endpoints
- `DN-Designs-API.postman_environment.json` - Environment variables for Postman

## Importing to Postman

### Method 1: Import Collection
1. Open Postman
2. Click **Import** button
3. Select `DN-Designs-API.postman_collection.json`
4. Click **Import**

### Method 2: Import via URL
1. Open Postman
2. Click **Import**
3. Select **Link** tab
4. Paste the file path or use Git URL

## Setting Up Environment

1. After importing the collection, import the environment file:
   - Click **Import** → Select `DN-Designs-API.postman_environment.json`

2. Select the environment:
   - Click the environment dropdown (top right)
   - Select **DN Designs API Environment**

3. Update environment variables:
   - Click the eye icon next to environment name
   - Update `base_url` if your server runs on a different port
   - Other variables will be auto-populated when you run requests

## Using the Collection

### Automatic Token Management
The collection includes scripts that automatically save tokens:
- `auth_token` - Saved after login/register
- `admin_token` - Saved after admin login/register
- `user_id`, `blog_id`, `contact_id`, `email_id` - Saved after creation

### Request Flow

1. **Health Check** - Verify server is running
2. **Register/Login** - Get authentication token
3. **Use Protected Endpoints** - Token is automatically included

### Testing Workflow

1. Start with **Health Check** to verify server
2. **Register Admin** or **Login** to get admin token
3. Test **Blog** endpoints (requires admin)
4. Test **Contact** endpoints (public for submission, admin for management)
5. Test **Email Management** endpoints (admin only) - Create email groups for contact notifications
6. Test **User Management** endpoints (admin only)

## Environment Variables

The collection uses these variables:
- `base_url` - API base URL (default: http://localhost:5000)
- `auth_token` - User authentication token
- `admin_token` - Admin authentication token
- `user_id` - User ID (auto-populated)
- `blog_id` - Blog ID (auto-populated)
- `contact_id` - Contact ID (auto-populated)
- `email_id` - Email group ID (auto-populated)

## Tips

1. **Run Collection**: Right-click collection → **Run collection** to run all requests
2. **Save Responses**: Responses are saved automatically for reference
3. **Test Scripts**: Some requests include test scripts to validate responses
4. **Variables**: Variables are automatically updated by test scripts

## Troubleshooting

### Token Not Working
- Make sure you've run Login/Register first
- Check that environment is selected
- Verify token is saved in environment variables

### 401 Unauthorized
- Check if token is expired (default: 7 days)
- Re-run Login to get new token
- Verify Authorization header format: `Bearer <token>`

### Connection Refused
- Ensure server is running: `npm run dev`
- Check `base_url` in environment variables
- Verify server port matches environment

## Collection Structure

```
DN Designs API
├── Health Check
├── Authentication
│   ├── Register User
│   ├── Register Admin
│   ├── Login
│   ├── Get Current User
│   ├── Update Profile
│   ├── Get All Users (Admin)
│   ├── Get User by ID (Admin)
│   ├── Update User (Admin)
│   └── Delete User (Admin)
├── Blog
│   ├── Get All Blogs
│   ├── Get Blog by ID
│   ├── Create Blog (Admin)
│   ├── Update Blog (Admin)
│   ├── Delete Blog (Admin)
│   ├── Add Images to Blog (Admin)
│   └── Delete Image from Blog (Admin)
└── Contact
    ├── Submit Contact Form
    ├── Get All Contacts (Admin)
    ├── Get Contact by ID (Admin)
    ├── Update Contact (Admin)
    ├── Delete Contact (Admin)
    └── Get Contact Statistics (Admin)
└── Email Management
    ├── Get All Email Groups (Admin)
    ├── Get All Active Emails (Admin)
    ├── Get Email Group by ID or Type (Admin)
    ├── Create Email Group (Admin)
    ├── Update Email Group (Admin)
    ├── Delete Email Group (Admin)
    ├── Add Email to Group (Admin)
    └── Remove Email from Group (Admin)
```

## Additional Resources

- [Postman Documentation](https://learning.postman.com/)
- [API Documentation](../API_DOCUMENTATION.md)
- [Server README](../README.md)

