/**
 * Contact API Route
 * GET /api/contact - Get all contacts (Admin only)
 * POST /api/contact - Create new contact (Public)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as contactService from "@/lib/services/contactService.js";
import { withAuth } from "@/lib/middleware/auth.js";
import { handleError } from "@/lib/middleware/errorHandler.js";

export async function GET(request) {
  try {
    await connectDB();

    const authResult = await withAuth(request, "admin");
    if (authResult.error) {
      return NextResponse.json(authResult.error.body, {
        status: authResult.error.statusCode,
      });
    }

    const { searchParams } = new URL(request.url);

    const filters = {
      status: searchParams.get("status"),
      email: searchParams.get("email"),
      search: searchParams.get("search"),
    };

    const pagination = {
      page: parseInt(searchParams.get("page")) || 1,
      limit: parseInt(searchParams.get("limit")) || 10,
    };

    const result = await contactService.getAllContacts(filters, pagination);

    return NextResponse.json({
      success: true,
      count: result.count,
      total: result.total,
      page: result.page,
      pages: result.pages,
      data: result.contacts,
    });
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, mobile, message, pageName } = body;

    // Validation
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name must be between 2 and 100 characters",
        },
        { status: 400 }
      );
    }

    if (
      !email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (
      !mobile ||
      !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(
        mobile
      )
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid mobile number" },
        { status: 400 }
      );
    }

    if (!message || message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message must be between 10 and 5000 characters",
        },
        { status: 400 }
      );
    }

    // Get client IP
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    const contact = await contactService.createContact(
      { name, email, mobile, message, pageName },
      ipAddress
    );

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We will get back to you soon.",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
