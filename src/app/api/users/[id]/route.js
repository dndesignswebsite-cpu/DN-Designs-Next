import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as userService from "@/lib/services/userService.js";
import { withAuth, getAuthUser } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

// GET /api/users/[id] - Get user details
export async function GET(request, { params }) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const { id } = await params;
    const user = await userService.getUserById(id);

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

// PUT /api/users/[id] - Update user details
export async function PUT(request, { params }) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const { id } = await params;
    const updateData = await request.json();

    const updatedUser = await userService.updateUser(id, updateData);

    return NextResponse.json({
      success: true,
      data: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

// DELETE /api/users/[id] - Delete user
export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const currentUser = await getAuthUser(request);
    const { id } = await params;

    // Prevent deleting self
    if (currentUser.id === id) {
      return NextResponse.json(
        { success: false, message: "You cannot delete your own account" },
        { status: 400 }
      );
    }

    await userService.deleteUser(id);

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
