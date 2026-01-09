import { NextResponse } from "next/server";
import { listFiles, uploadFileBuffer } from "@/lib/config/fileStorage.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";
import fs from "fs";
import path from "path";

// List folders or files
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder"); // e.g., 'images', 'blogs'

    const authResult = await withAuth(request, "admin", "editor", "user");
    if (authResult.error) {
      // We allow viewing files, but typically admin pages are protected.
      // Keeping strict for gallery management.
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    if (folder) {
      // List files in specific folder
      const files = await listFiles(folder);
      // Map to full objects if needed, but listFiles returns relative paths
      // We want to return objects with url, name, etc.
      const fileObjects = await Promise.all(
        files.map(async (filePath) => {
          const publicId = filePath; // uploads/images/foo.jpg
          const name = path.basename(filePath);
          const url = `${process.env.NEXT_PUBLIC_MEDIA_URL || ""}/${filePath}`;
          return {
            name,
            url,
            publicId,
            path: filePath,
          };
        })
      );

      return NextResponse.json({ success: true, data: fileObjects });
    } else {
      // List available subdirectories in 'uploads'
      // Hardcoded or dynamic? fileStorage has UPLOAD_DIRS.
      // Dynamic is better.
      const uploadBase = path.join(process.cwd(), "public", "uploads");
      if (fs.existsSync(uploadBase)) {
        const items = await fs.promises.readdir(uploadBase, {
          withFileTypes: true,
        });
        const folders = items
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => dirent.name);
        return NextResponse.json({ success: true, data: folders });
      }
      return NextResponse.json({ success: true, data: [] });
    }
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

// Upload file
export async function POST(request) {
  try {
    const authResult = await withAuth(request, "admin", "editor");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const formData = await request.formData();
    const files = formData.getAll("file");
    const folder = formData.get("folder") || "images";

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: "No files uploaded" },
        { status: 400 }
      );
    }

    const results = [];
    for (const file of files) {
      // Skip if not a File object (just in case)
      if (typeof file === "string") continue;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const result = await uploadFileBuffer(buffer, {
        folder: folder,
        filename: file.name,
      });
      results.push(result);
    }

    return NextResponse.json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
