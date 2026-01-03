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

    const authResult = await withAuth(request, "admin", "editor");
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
    if (formData.has("description"))
      updateData.description = formData.get("description");
    if (formData.has("pageType"))
      updateData.pageType = formData.get("pageType");
    if (formData.has("order"))
      updateData.order = parseInt(formData.get("order")) || 0;
    if (formData.has("isPublished"))
      updateData.isPublished = formData.get("isPublished") === "true";

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

    // Handle authors
    const authors = formData.get("authors");
    if (authors) {
      try {
        updateData.authors = JSON.parse(authors);
      } catch (e) {
        console.error("Error parsing authors:", e);
      }
    }

    // SEO fields
    if (formData.has("metaTitle"))
      updateData.metaTitle = formData.get("metaTitle");
    if (formData.has("metaDescription"))
      updateData.metaDescription = formData.get("metaDescription");
    if (formData.has("canonicalUrl")) {
      if (!updateData.alternates) updateData.alternates = {};
      updateData.alternates.canonical = formData.get("canonicalUrl");
    }
    if (formData.has("robotsTag"))
      updateData.robotsTag = formData.get("robotsTag");
    if (formData.has("headCode"))
      updateData.headCode = formData.get("headCode");

    // Open Graph fields
    const ogTitle = formData.get("ogTitle");
    const ogDescription = formData.get("ogDescription");
    const ogUrl = formData.get("ogUrl");

    if (ogTitle || ogDescription || ogUrl) {
      if (!updateData.openGraph) updateData.openGraph = {};
      if (ogTitle) updateData.openGraph.title = ogTitle;
      if (ogDescription) updateData.openGraph.description = ogDescription;
      if (ogUrl) updateData.openGraph.url = ogUrl;
    }

    // Twitter Card fields
    const twitterTitle = formData.get("twitterTitle");
    const twitterDescription = formData.get("twitterDescription");

    if (twitterTitle || twitterDescription) {
      if (!updateData.twitter) updateData.twitter = {};
      if (twitterTitle) updateData.twitter.title = twitterTitle;
      if (twitterDescription)
        updateData.twitter.description = twitterDescription;
    }

    // New Image URL and Alt Text fields
    if (formData.has("featuredImageUrl"))
      updateData.featuredImageUrl = formData.get("featuredImageUrl");
    if (formData.has("featuredImageAltText"))
      updateData.featuredImageAltText = formData.get("featuredImageAltText");
    if (formData.has("ogImageUrl"))
      updateData.ogImageUrl = formData.get("ogImageUrl");
    if (formData.has("ogImageAltText"))
      updateData.ogImageAltText = formData.get("ogImageAltText");
    if (formData.has("twitterImageUrl"))
      updateData.twitterImageUrl = formData.get("twitterImageUrl");
    if (formData.has("twitterImageAltText"))
      updateData.twitterImageAltText = formData.get("twitterImageAltText");

    // Validation
    if (
      updateData.title &&
      (updateData.title.length < 2 || updateData.title.length > 200)
    ) {
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
