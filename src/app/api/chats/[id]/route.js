import { NextResponse } from "next/server";

import connectDB from "@/lib/config/database.js";
import * as chatService from "@/lib/services/chatService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ==========================================
// GET SINGLE CHAT
// GET /api/chats/[id]
// ==========================================
export async function GET(request, { params }) {
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

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Chat ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    const chat = await chatService.getChatById(id);

    return NextResponse.json({
      success: true,
      data: chat,
    });
  } catch (error) {
    console.error("Chat Detail API Error:", error);

    const { statusCode, body } = handleError(error);

    return NextResponse.json(body, {
      status: statusCode,
    });
  }
}

// ==========================================
// DELETE SINGLE CHAT
// DELETE /api/chats/[id]
// ==========================================
export async function DELETE(request, { params }) {
  try {
    await connectDB();

    // Only admin can delete chats
    const authResult = await withAuth(
      request,
      "admin"
    );

    if (authResult.error) {
      return NextResponse.json(
        authResult.error.body,
        {
          status: authResult.error.statusCode,
        }
      );
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Chat ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    await chatService.deleteChat(id);

    return NextResponse.json({
      success: true,
      message: "Chat deleted successfully.",
    });
  } catch (error) {
    console.error("Chat Delete API Error:", error);

    const { statusCode, body } = handleError(error);

    return NextResponse.json(body, {
      status: statusCode,
    });
  }
}