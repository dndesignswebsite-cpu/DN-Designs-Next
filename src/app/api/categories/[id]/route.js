/**
 * Category Individual API Route
 * GET /api/categories/[id] - Get single category (supports both ID and slug)
 * PUT /api/categories/[id] - Update category (Admin only)
 * DELETE /api/categories/[id] - Delete category (Admin only)
 */

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/config/database.js";
import * as categoryService from "@/lib/services/categoryService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();

    let category;
    if (mongoose.Types.ObjectId.isValid(id)) {
      category = await categoryService.getCategoryById(id);
    } else {
      category = await categoryService.getCategoryBySlug(id);
    }

    return NextResponse.json({ success: true, data: category });
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
    const category = await categoryService.updateCategory(id, body);

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();

    const authResult = await withAuth(request, "admin", "editor");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    await categoryService.deleteCategory(id);

    return NextResponse.json({ success: true, message: "Category deleted" });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
