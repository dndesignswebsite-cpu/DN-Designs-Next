import { NextResponse } from "next/server";
import { deleteFile } from "@/lib/config/fileStorage.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function DELETE(request) {
  try {
    const authResult = await withAuth(request, "admin"); // Only admin can delete? Or editor too? Let's say admin/editor.
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    // We can use searchParams for GET/DELETE usually, but body is safer for paths with slashes?
    // Actually standard fetch DELETE can have body, but nextjs handling might vary.
    // Let's use searchParams ?path=...
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");

    if (!path) {
      return NextResponse.json(
        { success: false, message: "Path is required" },
        { status: 400 }
      );
    }

    const result = await deleteFile(path);

    if (result.result === "not_found") {
      return NextResponse.json(
        { success: false, message: "File not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "File deleted successfully",
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
