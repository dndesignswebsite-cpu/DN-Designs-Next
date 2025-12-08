/**
 * Get Current User API Route
 * GET /api/auth/me
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as authService from '@/lib/services/authService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function GET(request) {
  try {
    await connectDB();
    
    const authResult = await withAuth(request);
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const user = await authService.getCurrentUser(authResult.user.id);

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

