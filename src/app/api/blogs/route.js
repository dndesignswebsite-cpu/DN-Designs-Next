/**
 * Blogs API Route
 * GET /api/blogs - Get all blogs
 * POST /api/blogs - Create new blog (Admin only)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/database.js';
import * as blogService from '@/lib/services/blogService.js';
import { getAuthUser, withAuth } from '@/lib/middleware/auth.js';
import { handleError } from '@/lib/middleware/errorHandler.js';

export async function GET(request) {
  try {
    await connectDB();
    
    // Get current user (optional for public access)
    const currentUser = await getAuthUser(request);

    const { searchParams } = new URL(request.url);
    
    const filters = {
      category: searchParams.get('category'),
      author: searchParams.get('author'),
      tags: searchParams.get('tags'),
      search: searchParams.get('search'),
      isPublished: searchParams.get('isPublished'),
      sortBy: searchParams.get('sortBy'),
      sortOrder: searchParams.get('sortOrder'),
    };

    const pagination = {
      page: parseInt(searchParams.get('page')) || 1,
      limit: parseInt(searchParams.get('limit')) || 10,
    };

    const userContext = currentUser ? { id: currentUser.id, role: currentUser.role } : null;
    const result = await blogService.getAllBlogs(filters, pagination, userContext);

    return NextResponse.json({
      success: true,
      count: result.count,
      total: result.total,
      page: result.page,
      pages: result.pages,
      data: result.blogs,
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

    const formData = await request.formData();
    
    const blogData = {
      title: formData.get('title'),
      content: formData.get('content'),
      excerpt: formData.get('excerpt'),
      category: formData.get('category'),
      metaDescription: formData.get('metaDescription'),
      isPublished: formData.get('isPublished') === 'true',
    };

    // Handle tags
    const tags = formData.get('tags');
    if (tags) {
      blogData.tags = tags.split(',').map(t => t.trim());
    }

    // Handle meta keywords
    const metaKeywords = formData.get('metaKeywords');
    if (metaKeywords) {
      blogData.metaKeywords = metaKeywords.split(',').map(k => k.trim());
    }

    // Validation
    if (!blogData.title || blogData.title.length < 5 || blogData.title.length > 200) {
      return NextResponse.json(
        { success: false, message: 'Title must be between 5 and 200 characters' },
        { status: 400 }
      );
    }

    if (!blogData.content || blogData.content.length < 50) {
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

    const blog = await blogService.createBlog(blogData, authResult.user.id, imageBuffer);

    return NextResponse.json(
      { success: true, data: blog },
      { status: 201 }
    );
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

