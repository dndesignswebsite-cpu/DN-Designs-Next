/**
 * Page Image by ID API Route
 * DELETE /api/pages/:id/images/:imageId - Delete specific image from page (Admin only)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as pageService from "@/lib/services/pageService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const { id, imageId } = await params;
    const updatedPage = await pageService.deletePageImage(id, imageId);

    return NextResponse.json({
      success: true,
      message: "Image deleted successfully",
      data: updatedPage,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

