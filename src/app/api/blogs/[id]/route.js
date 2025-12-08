/**
 * Blog by ID API Route
 * GET /api/blogs/:id - Get blog by ID or slug
 * PUT /api/blogs/:id - Update blog (Admin only)
 * DELETE /api/blogs/:id - Delete blog (Admin only)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as blogService from '@/lib/services/blogService.js';
import { getAuthUser, withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function GET(request, { params }) {
  try {
    await connectDB();
    
    const currentUser = await getAuthUser(request);
    const { id } = await params;
    
    const userContext = currentUser ? { id: currentUser.id, role: currentUser.role } : null;
    const blog = await blogService.getBlogById(id, userContext);

    return NextResponse.json({
      success: true,
      data: blog,
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
    if (formData.has('title')) updateData.title = formData.get('title');
    if (formData.has('content')) updateData.content = formData.get('content');
    if (formData.has('excerpt')) updateData.excerpt = formData.get('excerpt');
    if (formData.has('category')) updateData.category = formData.get('category');
    if (formData.has('metaDescription')) updateData.metaDescription = formData.get('metaDescription');
    if (formData.has('isPublished')) updateData.isPublished = formData.get('isPublished') === 'true';

    // Handle tags
    const tags = formData.get('tags');
    if (tags) {
      updateData.tags = tags.split(',').map(t => t.trim());
    }

    // Handle meta keywords
    const metaKeywords = formData.get('metaKeywords');
    if (metaKeywords) {
      updateData.metaKeywords = metaKeywords.split(',').map(k => k.trim());
    }

    // Validation
    if (updateData.title && (updateData.title.length < 5 || updateData.title.length > 200)) {
      return NextResponse.json(
        { success: false, message: 'Title must be between 5 and 200 characters' },
        { status: 400 }
      );
    }

    if (updateData.content && updateData.content.length < 50) {
      return NextResponse.json(
        { success: false, message: 'Content must be at least 50 characters long' },
        { status: 400 }
      );
    }

    let imageBuffer = null;
    const imageFile = formData.get('featuredImage');
    if (imageFile && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      imageBuffer = Buffer.from(bytes);
    }

    const updatedBlog = await blogService.updateBlog(id, updateData, imageBuffer);

    return NextResponse.json({
      success: true,
      data: updatedBlog,
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
    await blogService.deleteBlog(id);

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

