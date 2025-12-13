/**
 * Page by ID API Route
 * GET /api/pages/:id - Get page by ID or slug
 * PUT /api/pages/:id - Update page (Admin only)
 * DELETE /api/pages/:id - Delete page (Admin only)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as pageService from "@/lib/services/pageService.js";
import { getAuthUser, withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function GET(request, { params }) {
  try {
    await connectDB();

    const currentUser = await getAuthUser(request);
    const { id } = await params;

    const userContext = currentUser
      ? { id: currentUser.id, role: currentUser.role }
      : null;
    const page = await pageService.getPageById(id, userContext);

    return NextResponse.json({
      success: true,
      data: page,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const { id } = await params;
    const formData = await request.formData();

    const updateData = {};

    if (formData.has("title")) updateData.title = formData.get("title");
    if (formData.has("slug")) updateData.slug = formData.get("slug");
    if (formData.has("description")) updateData.description = formData.get("description");
    if (formData.has("pageType")) updateData.pageType = formData.get("pageType");
    if (formData.has("order")) updateData.order = parseInt(formData.get("order")) || 0;
    if (formData.has("isPublished")) updateData.isPublished = formData.get("isPublished") === "true";

    // Handle content as JSON
    const contentStr = formData.get("content");
    if (contentStr) {
      try {
        updateData.content = JSON.parse(contentStr);
      } catch {
        updateData.content = { raw: contentStr };
      }
    }

    // Handle publishedAt
    const publishedAt = formData.get("publishedAt");
    if (publishedAt) {
      updateData.publishedAt = new Date(publishedAt);
    }

    // Handle focus keywords
    const focusKeywords = formData.get("focusKeywords");
    if (focusKeywords) {
      updateData.focusKeywords = focusKeywords.split(",").map((k) => k.trim());
    }

    // SEO fields
    if (formData.has("metaTitle")) updateData.metaTitle = formData.get("metaTitle");
    if (formData.has("metaDescription")) updateData.metaDescription = formData.get("metaDescription");
    if (formData.has("canonicalUrl")) updateData.canonicalUrl = formData.get("canonicalUrl");
    if (formData.has("robotsTag")) updateData.robotsTag = formData.get("robotsTag");
    if (formData.has("headCode")) updateData.headCode = formData.get("headCode");

    // Open Graph fields
    if (formData.has("ogTitle")) updateData.ogTitle = formData.get("ogTitle");
    if (formData.has("ogDescription")) updateData.ogDescription = formData.get("ogDescription");

    // Twitter Card fields
    if (formData.has("twitterTitle")) updateData.twitterTitle = formData.get("twitterTitle");
    if (formData.has("twitterDescription")) updateData.twitterDescription = formData.get("twitterDescription");

    // Validation
    if (updateData.title && (updateData.title.length < 2 || updateData.title.length > 200)) {
      return NextResponse.json(
        {
          success: false,
          message: "Title must be between 2 and 200 characters",
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
      updateData.featuredImageAlt = formData.get("featuredImageAlt") || "";
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

    const updatedPage = await pageService.updatePage(
      id,
      updateData,
      authResult.user.id,
      imageBuffer,
      { ogImageBuffer, twitterImageBuffer }
    );

    return NextResponse.json({
      success: true,
      data: updatedPage,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const { id } = await params;
    await pageService.deletePage(id);

    return NextResponse.json({
      success: true,
      message: "Page deleted successfully",
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

