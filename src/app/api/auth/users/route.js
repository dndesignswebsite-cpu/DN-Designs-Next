/**
 * Users API Route
 * GET /api/auth/users - Get all users (Admin only)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as authService from '@/lib/services/authService.js';
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
      role: searchParams.get('role'),
      isActive: searchParams.get('isActive'),
      search: searchParams.get('search'),
    };

    const pagination = {
      page: parseInt(searchParams.get('page')) || 1,
      limit: parseInt(searchParams.get('limit')) || 10,
    };

    const result = await authService.getAllUsers(filters, pagination);

    return NextResponse.json({
      success: true,
      count: result.count,
      total: result.total,
      page: result.page,
      pages: result.pages,
      data: result.users,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

