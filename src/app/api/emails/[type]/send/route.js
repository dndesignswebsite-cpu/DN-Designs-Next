/**
 * Send Promotional Email API Route
 * POST /api/emails/:type/send - Send promotional email to group (Admin only)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as emailService from '@/lib/services/emailService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function POST(request, { params }) {
  try {
    await connectDB();
    
    // Allow editor and admin to send email
    const authResult = await withAuth(request, 'admin', 'editor');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { type: groupType } = await params;
    const body = await request.json();
    const { subject, content, isHtml } = body;

    if (!subject) {
      return NextResponse.json(
        { success: false, message: 'Email subject is required' },
        { status: 400 }
      );
    }

    if (!content) {
      return NextResponse.json(
        { success: false, message: 'Email content is required' },
        { status: 400 }
      );
    }

    const result = await emailService.sendPromotionalEmailToGroup(
      groupType,
      subject,
      content,
      isHtml
    );

    return NextResponse.json({
      success: true,
      message: result.message,
      data: {
        recipients: result.recipients,
        groupType: result.groupType,
        groupName: result.groupName,
        subject: subject,
      },
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
