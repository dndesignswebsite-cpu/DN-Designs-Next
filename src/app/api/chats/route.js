import { NextResponse } from "next/server";

import connectDB from "@/lib/config/database.js";
import * as chatService from "@/lib/services/chatService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await connectDB();

    // Admin authentication
    const authResult = await withAuth(
      request,
      "admin",
      "editor",
      "user"
    );

    if (authResult.error) {
      return NextResponse.json(
        authResult.error.body,
        {
          status: authResult.error.statusCode,
        }
      );
    }

    const { searchParams } = new URL(request.url);

    const page = parseInt(
      searchParams.get("page") || "1",
      10
    );

    const limit = parseInt(
      searchParams.get("limit") || "10",
      10
    );

    const conversationId =
      searchParams.get("conversationId") || "";

    const visitorId =
      searchParams.get("visitorId") || "";

    const result =
      await chatService.getAllChats(
        {
          conversationId,
          visitorId,
        },
        {
          page,
          limit,
        }
      );

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Chats API Error:", error);

    const { statusCode, body } =
      handleError(error);

    return NextResponse.json(body, {
      status: statusCode,
    });
  }
}