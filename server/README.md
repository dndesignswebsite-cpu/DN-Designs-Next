# DN Designs Backend API

Backend server for DN Designs website built with Express, MongoDB, Node.js, and Cloudinary.

## 🚀 Features

- **Authentication**: JWT-based user authentication with role-based access control
- **Blog Management**: Full CRUD operations for blog posts with image uploads
- **Contact Form**: Contact form submissions with email notifications
- **Email Management**: Manage email groups and distribution lists
- **Image Upload**: Cloudinary integration for image storage and management
- **Email Notifications**: Nodemailer integration for sending emails

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account
- Email service (Gmail, SendGrid, etc.)

## 🔧 Installation

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the server directory (copy from `.env.example`):

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
   - MongoDB connection string
   - JWT secret
   - Cloudinary credentials
   - Email service credentials
   - Admin email

## ⚙️ Environment Variables

See `.env.example` for all required environment variables.

### Required Variables:

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Your Cloudinary API key
- `CLOUDINARY_API_SECRET` - Your Cloudinary API secret
- `EMAIL_HOST` - SMTP server host
- `EMAIL_USER` - Email address for sending emails
- `EMAIL_PASS` - Email password or app password
- `ADMIN_EMAIL` - Email address to receive contact form notifications

## 🏃 Running the Server

### Development Mode (with auto-reload):

```bash
npm run dev
```

### Production Mode:

```bash
npm start
```

The server will run on `http://localhost:5000` by default (or the port specified in `.env`).

## 📚 API Endpoints

### Authentication (`/api/auth`)

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)
- `PUT /api/auth/update-profile` - Update current user profile (Protected)
- `GET /api/auth/users` - Get all users (Admin only)
- `GET /api/auth/users/:id` - Get user by ID (Admin only)
- `PUT /api/auth/users/:id` - Update user (Admin only)
- `DELETE /api/auth/users/:id` - Delete user (Admin only)

### Blog (`/api/blogs`)

- `GET /api/blogs` - Get all blog posts (Public for published, Admin for all)
- `GET /api/blogs/:id` - Get blog post by ID or slug (Public for published)
- `POST /api/blogs` - Create blog post (Admin only)
- `PUT /api/blogs/:id` - Update blog post (Admin only)
- `DELETE /api/blogs/:id` - Delete blog post (Admin only)
- `POST /api/blogs/:id/images` - Add images to blog post (Admin only)
- `DELETE /api/blogs/:id/images/:imageId` - Delete image from blog post (Admin only)

### Contact (`/api/contact`)

- `POST /api/contact` - Submit contact form (Public)
- `GET /api/contact` - Get all contact submissions (Admin only)
- `GET /api/contact/:id` - Get contact submission by ID (Admin only)
- `PUT /api/contact/:id` - Update contact submission (Admin only)
- `DELETE /api/contact/:id` - Delete contact submission (Admin only)
- `GET /api/contact/stats/summary` - Get contact statistics (Admin only)

### Email Management (`/api/emails`)

- `GET /api/emails` - Get all email groups (Admin only)
- `GET /api/emails/all` - Get all active email addresses (Admin only)
- `GET /api/emails/:id` - Get email group by ID or type (Admin only)
- `POST /api/emails` - Create email group (Admin only)
- `PUT /api/emails/:id` - Update email group (Admin only)
- `DELETE /api/emails/:id` - Delete email group (Admin only)
- `POST /api/emails/:type/add` - Add email to group (Admin only)
- `DELETE /api/emails/:type/remove` - Remove email from group (Admin only)
- `POST /api/emails/:type/send` - Send promotional/advertisement email to group (Admin only)

## 🔐 Authentication

Most endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 📝 Request/Response Examples

### Register User

```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}
```

### Create Blog Post

```json
POST /api/blogs
Headers: Authorization: Bearer <token>
Form Data:
  - title: "Blog Title"
  - content: "Blog content..."
  - excerpt: "Short excerpt"
  - tags: ["design", "branding"]
  - featuredImage: <file>
```

### Submit Contact Form

```json
POST /api/contact
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "mobile": "+1234567890",
  "message": "I'm interested in your services"
}
```

## 🗂️ Project Structure

```
server/
├── config/          # Configuration files (database, cloudinary, email)
├── controllers/     # Route controllers (business logic)
├── middleware/      # Custom middleware (auth, validation, error handling)
├── models/          # MongoDB schemas
├── routes/          # API routes
├── utils/           # Utility functions
├── uploads/         # Temporary file storage (gitignored)
├── server.js        # Main server file
└── package.json     # Dependencies
```

## 🛠️ Technologies Used

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage
- **Multer** - File upload handling
- **Nodemailer** - Email sending
- **Express Validator** - Request validation

## 📧 Email Setup

### Gmail Setup:

1. Enable 2-factor authentication
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use the app password in `EMAIL_PASS`

### Other Email Services:

Update `EMAIL_HOST` and `EMAIL_PORT` in `.env` according to your email provider's SMTP settings.

## 🐛 Error Handling

All errors are handled centrally by the error handler middleware. Errors return a consistent format:

```json
{
  "success": false,
  "message": "Error message"
}
```

## 📄 License

ISC
