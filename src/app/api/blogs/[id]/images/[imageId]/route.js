/**
 * Blog Image by ID API Route
 * DELETE /api/blogs/:id/images/:imageId - Delete image from blog
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as blogService from '@/lib/services/blogService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    
    const authResult = await withAuth(request, 'admin');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { id, imageId } = await params;
    const updatedBlog = await blogService.deleteBlogImage(id, imageId);

    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully',
      data: updatedBlog,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

