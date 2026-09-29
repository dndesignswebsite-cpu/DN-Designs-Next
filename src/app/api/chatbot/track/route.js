import { NextResponse } from "next/server";

import connectDB from "@/lib/config/database.js";
import * as chatService from "@/lib/services/chatService.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ==========================================
// GET CLIENT IP
// ==========================================

function getClientIP(request) {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for"
    );

  if (forwardedFor) {
    return forwardedFor
      .split(",")[0]
      .trim();
  }

  const realIP =
    request.headers.get(
      "x-real-ip"
    );

  if (realIP) {
    return realIP.trim();
  }

  return null;
}

// ==========================================
// GET APPROXIMATE LOCATION FROM IP
// ==========================================

async function getLocationFromIP(
  request
) {
  try {
    const ip =
      getClientIP(request);

    // Local development
    if (
      !ip ||
      ip === "127.0.0.1" ||
      ip === "::1" ||
      ip.startsWith("192.168.") ||
      ip.startsWith("10.")
    ) {
      return null;
    }

    const response =
      await fetch(
        `https://ipapi.co/${encodeURIComponent(
          ip
        )}/json/`,
        {
          cache: "no-store",
        }
      );

    if (!response.ok) {
      return null;
    }

    const data =
      await response.json();

    return {
      country:
        data.country_name ||
        "",

      countryCode:
        data.country_code ||
        "",

      region:
        data.region ||
        "",

      city:
        data.city ||
        "",

      timezone:
        data.timezone ||
        "",
    };
  } catch (error) {
    console.error(
      "Location lookup error:",
      error
    );

    return null;
  }
}

// ==========================================
// POST - TRACK PAGE VISIT
// ==========================================

export async function POST(
  request
) {
  try {
    await connectDB();

    const body =
      await request.json();

    const {
      conversationId,
      visitorId,
      path,
      title,
    } = body;

    // ======================================
    // VALIDATION
    // ======================================

    if (!conversationId) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Conversation ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!visitorId) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Visitor ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!path) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Page path is required.",
        },
        {
          status: 400,
        }
      );
    }

    // ======================================
    // FIND CONVERSATION
    // ======================================

    const chat =
      await chatService.getChatByConversationId(
        conversationId
      );

    /*
     * We only track pages for a conversation
     * that already exists.
     *
     * This means tracking starts after the
     * visitor has actually chatted with the AI.
     */

    if (!chat) {
      return NextResponse.json({
        success: true,
        tracked: false,
        reason:
          "Conversation has not started yet.",
      });
    }

    // ======================================
    // PREVENT DUPLICATE CONSECUTIVE PAGE
    // ======================================

    const lastVisit =
      chat.pageVisits?.[
        chat.pageVisits.length - 1
      ];

    if (
      lastVisit &&
      lastVisit.path === path
    ) {
      chat.lastActivityAt =
        new Date();

      await chat.save();

      return NextResponse.json({
        success: true,
        tracked: false,
        reason:
          "Same page already tracked.",
      });
    }

    // ======================================
    // ADD PAGE VISIT
    // ======================================

    chat.pageVisits.push({
      path:
        String(path).slice(0, 500),

      title:
        typeof title === "string"
          ? title.slice(0, 300)
          : "",

      visitedAt:
        new Date(),
    });

    // ======================================
    // GET LOCATION ONLY IF NOT ALREADY SET
    // ======================================

    if (!chat.location) {
      const location =
        await getLocationFromIP(
          request
        );

      if (location) {
        chat.location =
          location;
      }
    }

    // ======================================
    // UPDATE ACTIVITY
    // ======================================

    chat.lastActivityAt =
      new Date();

    await chat.save();

    return NextResponse.json({
      success: true,
      tracked: true,
    });
  } catch (error) {
    console.error(
      "Chat Tracking Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to track visitor activity.",
      },
      {
        status: 500,
      }
    );
  }
}