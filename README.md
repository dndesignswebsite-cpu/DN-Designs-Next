# DN Designs - Next.js Backend API

A comprehensive Next.js backend API for DN Designs website with authentication, blog management, page management, contact forms, and email management.

## Features

- 🔐 **Authentication** - JWT-based auth with admin/user roles
- 📝 **Blog Management** - Full CRUD with SEO fields, social meta tags
- 📄 **Page Management** - Dynamic page content management from dashboard
- 📧 **Contact Forms** - Form submissions with email notifications
- 📨 **Email Management** - Email groups and promotional emails
- 🖼️ **File Storage** - Local VPS storage with Cloudflare CDN support

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Email**: Nodemailer (Gmail SMTP)
- **File Storage**: Local VPS + Cloudflare CDN

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Gmail account with App Password (for emails)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd DN-Designs-Next

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run development server
npm run dev
```

### Environment Variables

Create a `.env` file with:

```env
# Server
NODE_ENV=development
PORT=3000
BASE_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# MongoDB
MONGODB_URI=mongodb://localhost:27017/dn-designs

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=30d

# Email (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
ADMIN_EMAIL=admin@yourdomain.com
```

## File Storage

Files are stored locally in `/public/uploads/` and served through Cloudflare CDN in production.

### Supported File Types

| Type   | Formats                  | Max Size |
| ------ | ------------------------ | -------- |
| Images | JPG, PNG, GIF, WebP, SVG | 10MB     |
| Videos | MP4, MOV, AVI, MKV, WebM | 500MB    |

### Directory Structure

```
public/uploads/
├── images/    # General images
├── videos/    # Video files
├── avatars/   # User profile pictures
├── blogs/     # Blog post images
├── pages/     # Page images
└── misc/      # Other files
```

### File URLs

- **Development**: `http://localhost:3000/uploads/images/filename.jpg`
- **Production**: `https://yourdomain.com/uploads/images/filename.jpg` (via Cloudflare)
- **Videos**: `https://yourdomain.com/uploads/videos/filename.mp4`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/update-profile` - Update profile
- `GET /api/auth/users` - List users (Admin)
- `GET/PUT/DELETE /api/auth/users/:id` - User management (Admin)

### Pages

- `GET /api/pages` - List pages
- `POST /api/pages` - Create page (Admin)
- `GET /api/pages/:id` - Get page by ID/slug
- `PUT /api/pages/:id` - Update page (Admin)
- `DELETE /api/pages/:id` - Delete page (Admin)
- `GET /api/pages/type/:type` - Get page by type
- `GET /api/pages/stats` - Page statistics (Admin)

### Blogs

- `GET /api/blogs` - List blogs
- `POST /api/blogs` - Create blog (Admin)
- `GET /api/blogs/:id` - Get blog by ID/slug
- `PUT /api/blogs/:id` - Update blog (Admin)
- `DELETE /api/blogs/:id` - Delete blog (Admin)

### Contact

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - List contacts (Admin)
- `GET /api/contact/:id` - Get contact (Admin)
- `PUT /api/contact/:id` - Update contact (Admin)
- `DELETE /api/contact/:id` - Delete contact (Admin)

### Emails

- `GET /api/emails` - List email groups (Admin)
- `POST /api/emails` - Create email group (Admin)
- `POST /api/emails/:type/send` - Send promotional email (Admin)

## Production Deployment (Hostinger Ubuntu + Cloudflare)

### 1. Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx
```

### 2. Deploy Application

```bash
# Clone and setup
git clone <repository-url> /var/www/dn-designs
cd /var/www/dn-designs
npm install
npm run build

# Set file permissions
sudo chown -R www-data:www-data public/uploads
sudo chmod -R 755 public/uploads

# Start with PM2
pm2 start npm --name "dn-designs" -- start
pm2 save
pm2 startup
```

### 3. Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    # Static files (uploads)
    location /uploads/ {
        alias /var/www/dn-designs/public/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Next.js app
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. Cloudflare Setup

1. Add your domain to Cloudflare
2. Update nameservers at Hostinger
3. Enable SSL (Full Strict)
4. Create Page Rules for caching:
   - `/uploads/*` → Cache Level: Cache Everything, Edge Cache TTL: 1 month

### 5. Environment Variables

```env
NODE_ENV=production
BASE_URL=https://yourdomain.com
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
# ... other variables
```

## Postman Collection

Import the Postman collection from `/postman/DN-Designs-API.postman_collection.json` for API testing.

## License

Private - DN Designs
