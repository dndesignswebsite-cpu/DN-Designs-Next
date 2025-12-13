/**
 * Remove Email from Group API Route
 * DELETE /api/emails/:type/remove - Remove email from group (Admin only)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as emailService from '@/lib/services/emailService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    
    // Allow editor and admin to remove email
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

    const updatedEmailGroup = await emailService.removeEmailFromGroup(type, email);

    return NextResponse.json({
      success: true,
      message: 'Email removed successfully',
      data: updatedEmailGroup,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
