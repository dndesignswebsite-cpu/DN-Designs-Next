/**
 * Page Stats API Route
 * GET /api/pages/stats - Get page statistics (Admin only)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as pageService from "@/lib/services/pageService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function GET(request) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin", "editor", "user");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const stats = await pageService.getPageStats();

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

