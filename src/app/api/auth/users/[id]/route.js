/**
 * User by ID API Route
 * GET /api/auth/users/:id - Get user by ID (Admin only)
 * PUT /api/auth/users/:id - Update user (Admin only)
 * DELETE /api/auth/users/:id - Delete user (Admin only)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as authService from '@/lib/services/authService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function GET(request, { params }) {
  try {
    await connectDB();
    
    const authResult = await withAuth(request, 'admin');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { id } = await params;
    const user = await authService.getUserById(id);

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    
    const authResult = await withAuth(request, 'admin');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { id } = await params;
    
    const formData = await request.formData();
    
    const updateData = {};
    if (formData.has('name')) updateData.name = formData.get('name');
    if (formData.has('email')) updateData.email = formData.get('email');
    if (formData.has('password')) updateData.password = formData.get('password');
    if (formData.has('role')) updateData.role = formData.get('role');
    if (formData.has('isActive')) updateData.isActive = formData.get('isActive') === 'true';

    let avatarBuffer = null;
    const avatarFile = formData.get('avatar');
    if (avatarFile && avatarFile.size > 0) {
      const bytes = await avatarFile.arrayBuffer();
      avatarBuffer = Buffer.from(bytes);
    }

    const currentUser = {
      id: authResult.user.id,
      role: authResult.user.role,
    };

    const updatedUser = await authService.updateUser(id, updateData, currentUser, avatarBuffer);

    return NextResponse.json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    
    const authResult = await withAuth(request, 'admin');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { id } = await params;
    
    const currentUser = {
      id: authResult.user.id,
      role: authResult.user.role,
    };

    await authService.deleteUser(id, currentUser);

    return NextResponse.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

