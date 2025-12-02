# Quick Setup Guide

## Step 1: Install Dependencies

```bash
cd server
npm install
```

## Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` with your credentials:

### MongoDB Setup
- **Local MongoDB**: `mongodb://localhost:27017/dn-designs`
- **MongoDB Atlas**: Get connection string from your Atlas dashboard

### Cloudinary Setup
1. Sign up at https://cloudinary.com
2. Go to Dashboard
3. Copy your:
   - Cloud Name
   - API Key
   - API Secret

### Email Setup (Gmail Example)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate App Password: https://support.google.com/accounts/answer/185833
3. Use:
   - `EMAIL_HOST=smtp.gmail.com`
   - `EMAIL_PORT=587`
   - `EMAIL_USER=your-email@gmail.com`
   - `EMAIL_PASS=your-app-password`

### JWT Secret
Generate a random string for `JWT_SECRET`:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Step 3: Start the Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## Step 4: Create Your First Admin User

Use Postman, Thunder Client, or curl to register an admin user:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@dndesigns.co.in",
    "password": "your-password",
    "role": "admin"
  }'
```

Then manually update the user role to "admin" in MongoDB if needed, or use the login endpoint to get a token.

## Testing the API

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@dndesigns.co.in",
    "password": "your-password"
  }'
```

Save the token from the response for authenticated requests.

### Test Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "mobile": "+1234567890",
    "message": "This is a test message"
  }'
```

## Common Issues

### MongoDB Connection Error
- Ensure MongoDB is running
- Check your connection string
- For Atlas, ensure your IP is whitelisted

### Cloudinary Upload Error
- Verify your Cloudinary credentials
- Check file size limits (5MB default)

### Email Not Sending
- Verify SMTP credentials
- For Gmail, use App Password (not regular password)
- Check spam folder

### Port Already in Use
- Change `PORT` in `.env`
- Or kill the process using port 5000

