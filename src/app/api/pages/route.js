/**
 * Pages API Route
 * GET /api/pages - Get all pages
 * POST /api/pages - Create new page (Admin only)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as pageService from "@/lib/services/pageService.js";
import { getAuthUser, withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function GET(request) {
  try {
    await connectDB();

    // Get current user (optional for public access)
    const currentUser = await getAuthUser(request);

    const { searchParams } = new URL(request.url);

    const filters = Object.fromEntries(
      Object.entries({
        pageType: searchParams.get("pageType"),
        search: searchParams.get("search"),
        isPublished: searchParams.get("isPublished"),
        sortBy: searchParams.get("sortBy"),
        sortOrder: searchParams.get("sortOrder"),
      }).filter(
        ([_, value]) => value !== null && value !== undefined && value !== ""
      )
    );

    const pagination = {
      page: parseInt(searchParams.get("page")) || 1,
      limit: parseInt(searchParams.get("limit")) || 50,
    };

    const userContext = currentUser
      ? { id: currentUser.id, role: currentUser.role }
      : null;
    const result = await pageService.getAllPages(
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
      data: result.pagesData,
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

    // Parse content as JSON if provided
    let content = {};
    const contentStr = formData.get("content");
    if (contentStr) {
      try {
        content = JSON.parse(contentStr);
      } catch {
        content = { raw: contentStr };
      }
    }

    const publishedAt = formData.get("publishedAt");

    const pageData = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      content: content,
      description: formData.get("description"),
      pageType: formData.get("pageType") || "default",
      order: parseInt(formData.get("order")) || 0,
      isPublished: formData.get("isPublished") === "true",
      publishedAt: publishedAt ? new Date(publishedAt) : undefined,
    };

    // Handle focus keywords
    const focusKeywords = formData.get("focusKeywords");
    if (focusKeywords) {
      pageData.focusKeywords = focusKeywords.split(",").map((k) => k.trim());
    }

    // Handle authors
    const authors = formData.get("authors");
    if (authors) {
      try {
        pageData.authors = JSON.parse(authors);
      } catch (e) {
        console.error("Error parsing authors:", e);
      }
    }

    // SEO fields
    if (formData.has("metaTitle"))
      pageData.metaTitle = formData.get("metaTitle");
    if (formData.has("metaDescription"))
      pageData.metaDescription = formData.get("metaDescription");
    if (formData.has("canonicalUrl")) {
      pageData.alternates = { canonical: formData.get("canonicalUrl") };
    }
    if (formData.has("robotsTag"))
      pageData.robotsTag = formData.get("robotsTag");
    if (formData.has("headCode")) pageData.headCode = formData.get("headCode");

    // Open Graph fields
    const ogTitle = formData.get("ogTitle");
    const ogDescription = formData.get("ogDescription");
    const ogUrl = formData.get("ogUrl");
    if (ogTitle || ogDescription || ogUrl) {
      pageData.openGraph = {
        title: ogTitle,
        description: ogDescription,
        url: ogUrl,
      };
    }

    // Twitter Card fields
    const twitterTitle = formData.get("twitterTitle");
    const twitterDescription = formData.get("twitterDescription");
    if (twitterTitle || twitterDescription) {
      pageData.twitter = {
        title: twitterTitle,
        description: twitterDescription,
      };
    }

    // Validation
    if (
      !pageData.title ||
      pageData.title.length < 2 ||
      pageData.title.length > 200
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Title must be between 2 and 200 characters",
        },
        { status: 400 }
      );
    }

    if (!pageData.slug || pageData.slug.length < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug is required",
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
      pageData.featuredImageAlt = formData.get("featuredImageAlt") || "";
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

    const page = await pageService.createPage(
      pageData,
      authResult.user.id,
      imageBuffer,
      { ogImageBuffer, twitterImageBuffer }
    );

    return NextResponse.json({ success: true, data: page }, { status: 201 });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
