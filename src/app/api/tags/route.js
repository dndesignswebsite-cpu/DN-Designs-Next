/**
 * Tags API Route
 * GET /api/tags - Get all tags
 * POST /api/tags - Create new tag (Admin only)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as tagService from "@/lib/services/tagService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const filters = {};
    if (search) {
      filters.search = search;
    }
    const pagination = {
      page: parseInt(searchParams.get("page")) || 1,
      limit: parseInt(searchParams.get("limit")) || 10,
    };

    const result = await tagService.getAllTags(filters, pagination);

    return NextResponse.json({
      success: true,
      count: result.tags.length,
      total: result.pagination.total,
      pages: result.pagination.pages,
      page: result.pagination.page,
      data: result.tags,
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

    const body = await request.json();
    const tag = await tagService.createTag(body);

    return NextResponse.json({ success: true, data: tag }, { status: 201 });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
