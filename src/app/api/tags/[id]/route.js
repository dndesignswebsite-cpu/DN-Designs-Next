/**
 * Tag Individual API Route
 * GET /api/tags/[id] - Get single tag
 * PUT /api/tags/[id] - Update tag (Admin only)
 * DELETE /api/tags/[id] - Delete tag (Admin only)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as tagService from "@/lib/services/tagService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const tag = await tagService.getTagById(id);
    return NextResponse.json({ success: true, data: tag });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();

    const authResult = await withAuth(request, "admin", "editor");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const body = await request.json();
    const tag = await tagService.updateTag(id, body);

    return NextResponse.json({ success: true, data: tag });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    await tagService.deleteTag(id);

    return NextResponse.json({ success: true, message: "Tag deleted" });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
