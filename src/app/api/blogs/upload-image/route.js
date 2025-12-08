/**
 * Upload Content Image API Route
 * POST /api/blogs/upload-image - Upload image for content insertion
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as blogService from '@/lib/services/blogService.js';
import { withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function POST(request) {
  try {
    await connectDB();
    
    const authResult = await withAuth(request, 'admin');
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, { status: authResult.error.statusCode });
    }

    const formData = await request.formData();
    
    const imageFile = formData.get('image');
    if (!imageFile || imageFile.size === 0) {
      return NextResponse.json(
        { success: false, message: 'Please upload an image file' },
        { status: 400 }
      );
    }

    const blogId = formData.get('blogId');

    const bytes = await imageFile.arrayBuffer();
    const imageBuffer = Buffer.from(bytes);

    const result = await blogService.uploadContentImage(imageBuffer, blogId);

    return NextResponse.json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        url: result.url,
        publicId: result.publicId,
        htmlTag: result.htmlTag,
      },
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

