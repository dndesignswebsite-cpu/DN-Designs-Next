/**
 * All Emails API Route
 * GET /api/emails/all - Get all active email addresses (Admin only)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as emailService from '@/lib/services/emailService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function GET(request) {
  try {
    await connectDB();
    
    const authResult = await withAuth(request, 'admin');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const emails = await emailService.getAllActiveEmails();

    return NextResponse.json({
      success: true,
      count: emails.length,
      data: emails,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

