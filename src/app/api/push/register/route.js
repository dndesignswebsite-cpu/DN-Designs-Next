
import { NextResponse } from "next/server";

import connectDB from "@/lib/config/database.js";
import { withAuth } from "@/lib/middleware/auth.js";
import {
  registerPushToken,
  deactivatePushToken,
} from "@/lib/repositories/pushtokenrepositreis.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// REGISTER DEVICE TOKEN
export async function POST(request) {
  try {
    await connectDB();

    const authResult = await withAuth(
      request,
      "admin",
      "editor",
      "user"
    );

    if (authResult.error) {
      return NextResponse.json(
        authResult.error.body,
        { status: authResult.error.statusCode }
      );
    }

    const body = await request.json();

    const { token, platform = "android" } = body;

    if (
      !token ||
      typeof token !== "string" ||
      !/^(ExpoPushToken|ExponentPushToken)\[.+\]$/.test(token)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "A valid Expo push token is required.",
        },
        { status: 400 }
      );
    }

    if (!["android", "ios"].includes(platform)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid device platform.",
        },
        { status: 400 }
      );
    }

    const savedToken = await registerPushToken({
      userId: authResult.user._id,
      token,
      platform,
    });

    return NextResponse.json({
      success: true,
      message: "Push token registered successfully.",
      data: {
        id: savedToken._id,
      },
    });
  } catch (error) {
    console.error("Push Token Registration Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to register push token.",
      },
      { status: 500 }
    );
  }
}

// UNREGISTER DEVICE TOKEN ON LOGOUT
export async function DELETE(request) {
  try {
    await connectDB();

    const authResult = await withAuth(
      request,
      "admin",
      "editor",
      "user"
    );

    if (authResult.error) {
      return NextResponse.json(
        authResult.error.body,
        { status: authResult.error.statusCode }
      );
    }

    const body = await request.json();
    const { token } = body;

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Push token is required.",
        },
        { status: 400 }
      );
    }

    await deactivatePushToken({
      userId: authResult.user._id,
      token,
    });

    return NextResponse.json({
      success: true,
      message: "Push token deactivated successfully.",
    });
  } catch (error) {
    console.error("Push Token Unregistration Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to unregister push token.",
      },
      { status: 500 }
    );
  }
}
