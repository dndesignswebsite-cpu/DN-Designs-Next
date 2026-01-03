/**
 * Blogs API Route
 * GET /api/blogs - Get all blogs
 * POST /api/blogs - Create new blog (Admin only)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as blogService from "@/lib/services/blogService.js";
import { getAuthUser, withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function GET(request) {
  try {
    await connectDB();

    // Get current user (optional for public access)
    const currentUser = await getAuthUser(request);

    const { searchParams } = new URL(request.url);

    const filters = {
      category: searchParams.get("category"),
      author: searchParams.get("author"),
      tags: searchParams.get("tags") || searchParams.get("tag"),
      search: searchParams.get("search"),
      isPublished: searchParams.get("isPublished"),
      sortBy: searchParams.get("sortBy"),
      sortOrder: searchParams.get("sortOrder"),
    };

    const pagination = {
      page: parseInt(searchParams.get("page")) || 1,
      limit: parseInt(searchParams.get("limit")) || 10,
    };

    const userContext = currentUser
      ? { id: currentUser.id, role: currentUser.role }
      : null;
    const result = await blogService.getAllBlogs(
      filters,
      pagination,
      userContext
    );

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

    const authResult = await withAuth(request, "admin", "editor");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const formData = await request.formData();

    const publishedAt = formData.get("publishedAt");

    const blogData = {
      title: formData.get("title"),
      content: formData.get("content"),
      excerpt: formData.get("excerpt"),
      primaryCategory: formData.get("primaryCategory") || "General",
      layout: formData.get("layout") || "default",
      isPublished: formData.get("isPublished") === "true",
      publishedAt: publishedAt ? new Date(publishedAt) : undefined,
      editorMode: formData.get("editorMode") || "visual",
    };

    // Handle tags
    const tags = formData.get("tags");
    if (tags) {
      blogData.tags = tags.split(",").map((t) => t.trim());
    }

    // Handle categories
    const categories = formData.get("categories");
    if (categories) {
      blogData.categories = categories.split(",").map((c) => c.trim());
    }

    // Handle meta keywords
    const metaKeywords = formData.get("metaKeywords");
    if (metaKeywords) {
      blogData.metaKeywords = metaKeywords.split(",").map((k) => k.trim());
    }

    // SEO fields
    if (formData.has("metaTitle"))
      blogData.metaTitle = formData.get("metaTitle");
    if (formData.has("metaDescription"))
      blogData.metaDescription = formData.get("metaDescription");
    if (formData.has("canonicalUrl")) {
      blogData.alternates = { canonical: formData.get("canonicalUrl") };
    }
    if (formData.has("robotsTag"))
      blogData.robotsTag = formData.get("robotsTag");
    if (formData.has("headCode")) blogData.headCode = formData.get("headCode");

    // Open Graph fields
    const ogTitle = formData.get("ogTitle");
    const ogDescription = formData.get("ogDescription");
    const ogUrl = formData.get("ogUrl");
    if (ogTitle || ogDescription || ogUrl) {
      blogData.openGraph = {
        title: ogTitle,
        description: ogDescription,
        url: ogUrl,
      };
    }

    // Twitter Card fields
    const twitterTitle = formData.get("twitterTitle");
    const twitterDescription = formData.get("twitterDescription");
    if (twitterTitle || twitterDescription) {
      blogData.twitter = {
        title: twitterTitle,
        description: twitterDescription,
      };
    }

    // New Image URL and Alt Text fields
    if (formData.has("featuredImageUrl"))
      blogData.featuredImageUrl = formData.get("featuredImageUrl");
    if (formData.has("featuredImageAltText"))
      blogData.featuredImageAltText = formData.get("featuredImageAltText");
    if (formData.has("ogImageUrl"))
      blogData.ogImageUrl = formData.get("ogImageUrl");
    if (formData.has("ogImageAltText"))
      blogData.ogImageAltText = formData.get("ogImageAltText");
    if (formData.has("twitterImageUrl"))
      blogData.twitterImageUrl = formData.get("twitterImageUrl");
    if (formData.has("twitterImageAltText"))
      blogData.twitterImageAltText = formData.get("twitterImageAltText");

    // Validation
    if (
      !blogData.title ||
      blogData.title.length < 5 ||
      blogData.title.length > 200
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Title must be between 5 and 200 characters",
        },
        { status: 400 }
      );
    }

    if (!blogData.content || blogData.content.length < 50) {
      return NextResponse.json(
        {
          success: false,
          message: "Content must be at least 50 characters long",
        },
        { status: 400 }
      );
    }

    // Handle featured image
    let imageBuffer = null;
    const imageFile = formData.get("featuredImage");
    if (imageFile && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      imageBuffer = Buffer.from(bytes);
    }

    // Handle OG image
    let ogImageBuffer = null;
    const ogImageFile = formData.get("ogImage");
    if (ogImageFile && ogImageFile.size > 0) {
      const bytes = await ogImageFile.arrayBuffer();
      ogImageBuffer = Buffer.from(bytes);
    }

    // Handle Twitter image
    let twitterImageBuffer = null;
    const twitterImageFile = formData.get("twitterImage");
    if (twitterImageFile && twitterImageFile.size > 0) {
      const bytes = await twitterImageFile.arrayBuffer();
      twitterImageBuffer = Buffer.from(bytes);
    }

    const blog = await blogService.createBlog(
      blogData,
      authResult.user.id,
      imageBuffer,
      { ogImageBuffer, twitterImageBuffer }
    );

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
