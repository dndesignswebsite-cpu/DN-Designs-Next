/**
 * Page by Type API Route
 * GET /api/pages/type/:type - Get page by pageType (e.g., 'home', 'about', 'services')
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as pageService from "@/lib/services/pageService.js";
import { getAuthUser } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function GET(request, { params }) {
  try {
    await connectDB();

    const currentUser = await getAuthUser(request);
    const { type } = await params;

    const userContext = currentUser
      ? { id: currentUser.id, role: currentUser.role }
      : null;
    const page = await pageService.getPageByType(type, userContext);

    return NextResponse.json({
      success: true,
      data: page,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

