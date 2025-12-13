import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as userService from "@/lib/services/userService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

// GET /api/users - List all users (Admin only)
export async function GET(request) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    // Parse filters
    const { searchParams } = new URL(request.url);
    const role = searchParams.get("role");
    const search = searchParams.get("search");

    const filters = {};
    if (role) filters.role = role;
    if (search) filters.search = search;

    const users = await userService.getAllUsers(filters);

    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

// POST /api/users - Create new user (Admin only)
export async function POST(request) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const { name, email, role } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    const newUser = await userService.createUser({
      name,
      email,
      role: role || "user",
    });

    return NextResponse.json({
      success: true,
      data: newUser,
      message: "User created and credentials emailed successfully",
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
