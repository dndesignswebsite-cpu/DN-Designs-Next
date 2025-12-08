/**
 * Emails API Route
 * GET /api/emails - Get all email groups (Admin only)
 * POST /api/emails - Create new email group (Admin only)
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

    const { searchParams } = new URL(request.url);
    
    const filters = {
      type: searchParams.get('type'),
      isActive: searchParams.get('isActive'),
    };

    const emailGroups = await emailService.getAllEmailGroups(filters);

    return NextResponse.json({
      success: true,
      count: emailGroups.length,
      data: emailGroups,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    
    const authResult = await withAuth(request, 'admin');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const body = await request.json();
    const emailGroup = await emailService.createEmailGroup(body);

    return NextResponse.json(
      {
        success: true,
        message: 'Email group created successfully',
        data: emailGroup,
      },
      { status: 201 }
    );
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

