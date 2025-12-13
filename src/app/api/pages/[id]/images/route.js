/**
 * Page Images API Route
 * POST /api/pages/:id/images - Add images to page (Admin only)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as pageService from "@/lib/services/pageService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function POST(request, { params }) {
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

    const imageFiles = formData.getAll("images");
    if (!imageFiles || imageFiles.length === 0) {
      return NextResponse.json(
        { success: false, message: "Please upload at least one image" },
        { status: 400 }
      );
    }

    if (imageFiles.length > 10) {
      return NextResponse.json(
        { success: false, message: "Maximum 10 images allowed per upload" },
        { status: 400 }
      );
    }

    const imageBuffers = [];
    const imageData = [];

    // Parse image data (alts, captions)
    let alts = [];
    let captions = [];
    try {
      const altsStr = formData.get("alts");
      const captionsStr = formData.get("captions");
      if (altsStr) alts = JSON.parse(altsStr);
      if (captionsStr) captions = JSON.parse(captionsStr);
    } catch {
      // Ignore parse errors
    }

    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer();
        imageBuffers.push(Buffer.from(bytes));
        imageData.push({
          alt: alts[i] || "",
          caption: captions[i] || "",
        });
      }
    }

    const updatedPage = await pageService.addPageImages(id, imageBuffers, imageData);

    return NextResponse.json({
      success: true,
      message: `${imageBuffers.length} image(s) added successfully`,
      data: updatedPage,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

