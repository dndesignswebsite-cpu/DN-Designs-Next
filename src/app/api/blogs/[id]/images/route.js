/**
 * Blog Images API Route
 * POST /api/blogs/:id/images - Add images to blog
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as blogService from '@/lib/services/blogService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function POST(request, { params }) {
  try {
    await connectDB();
    
    // Allow editor and admin to add images
    const authResult = await withAuth(request, 'admin', 'editor');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const { id } = await params;
    const formData = await request.formData();
    
    const imageFiles = formData.getAll('images');
    const captions = formData.getAll('captions');

    if (!imageFiles || imageFiles.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please upload at least one image' },
        { status: 400 }
      );
    }

    const imageBuffers = [];
    for (const file of imageFiles) {
      if (file.size > 0) {
        const bytes = await file.arrayBuffer();
        imageBuffers.push(Buffer.from(bytes));
      }
    }

    const updatedBlog = await blogService.addBlogImages(id, imageBuffers, captions);

    return NextResponse.json({
      success: true,
      message: 'Images added successfully',
      data: updatedBlog,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
