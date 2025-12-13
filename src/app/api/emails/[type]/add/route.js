/**
 * Add Email to Group API Route
 * POST /api/emails/:type/add - Add email to group (Admin only)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as emailService from '@/lib/services/emailService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function POST(request, { params }) {
  try {
    await connectDB();
    
    // Allow editor and admin to add email
    const authResult = await withAuth(request, 'admin', 'editor');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { type } = await params;
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email address is required' },
        { status: 400 }
      );
    }

    const updatedEmailGroup = await emailService.addEmailToGroup(type, email);

    return NextResponse.json({
      success: true,
      message: 'Email added successfully',
      data: updatedEmailGroup,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
