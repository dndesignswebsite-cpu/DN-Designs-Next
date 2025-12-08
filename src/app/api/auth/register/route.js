/**
 * Register API Route
 * POST /api/auth/register
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as authService from '@/lib/services/authService.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, email, password, role } = body;

    // Validation
    if (!name || name.length < 2 || name.length > 50) {
      return NextResponse.json(
        { success: false, message: 'Name must be between 2 and 50 characters' },
        { status: 400 }
      );
    }

    if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    const result = await authService.register({ name, email, password, role });

    return NextResponse.json(
      { success: true, token: result.token, user: result.user },
      { status: 201 }
    );
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

