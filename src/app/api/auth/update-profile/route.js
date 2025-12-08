/**
 * Update Profile API Route
 * PUT /api/auth/update-profile
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as authService from '@/lib/services/authService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function PUT(request) {
  try {
    await connectDB();
    
    const authResult = await withAuth(request);
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const formData = await request.formData();
    
    const updateData = {};
    if (formData.has('name')) updateData.name = formData.get('name');
    if (formData.has('email')) updateData.email = formData.get('email');
    if (formData.has('password')) updateData.password = formData.get('password');

    let avatarBuffer = null;
    const avatarFile = formData.get('avatar');
    if (avatarFile && avatarFile.size > 0) {
      const bytes = await avatarFile.arrayBuffer();
      avatarBuffer = Buffer.from(bytes);
    }

    // Validation
    if (updateData.name && (updateData.name.length < 2 || updateData.name.length > 50)) {
      return NextResponse.json(
        { success: false, message: 'Name must be between 2 and 50 characters' },
        { status: 400 }
      );
    }

    if (updateData.email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(updateData.email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (updateData.password && updateData.password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    const updatedUser = await authService.updateProfile(
      authResult.user.id,
      updateData,
      avatarBuffer
    );

    return NextResponse.json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

