/**
 * Email Group by Type/ID API Route
 * GET /api/emails/:type - Get email group by type or ID (Admin only)
 * PUT /api/emails/:id - Update email group (Admin only)
 * DELETE /api/emails/:id - Delete email group (Admin only)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as emailService from '@/lib/services/emailService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function GET(request, { params }) {
  try {
    await connectDB();
    
    // Allow user, editor, and admin to view email group details
    const authResult = await withAuth(request, 'admin', 'editor', 'user');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { type } = await params;
    
    // Check if identifier is ObjectId or type
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(type);

    let emailGroup;
    if (isObjectId) {
      emailGroup = await emailService.getEmailGroupById(type);
    } else {
      emailGroup = await emailService.getEmailGroupByType(type);
    }

    return NextResponse.json({
      success: true,
      data: emailGroup,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    
    // Allow editor and admin to update email groups
    const authResult = await withAuth(request, 'admin', 'editor');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { type: id } = await params;
    const body = await request.json();

    const updatedEmailGroup = await emailService.updateEmailGroup(id, body);

    return NextResponse.json({
      success: true,
      message: 'Email group updated successfully',
      data: updatedEmailGroup,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    
    // Admin only
    const authResult = await withAuth(request, 'admin');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { type: id } = await params;
    await emailService.deleteEmailGroup(id);

    return NextResponse.json({
      success: true,
      message: 'Email group deleted successfully',
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
