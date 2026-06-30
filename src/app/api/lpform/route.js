/**
 * Landing Page Form API Route
 * POST /api/lpform
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as emailRepository from "@/lib/repositories/emailRepository.js";
import { sendLPFormEmail } from "@/lib/config/email.js";
import { handleError, logError } from "@/lib/middleware/errorHandler.js";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      name,
      email,
      mobile,
      serviceRequired,
      projectDetails,
      pageName,
    } = body;

    // Name Validation
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name must be between 2 and 100 characters",
        },
        { status: 400 },
      );
    }

    // Email Validation
    if (
      !email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address",
        },
        { status: 400 },
      );
    }

    // Mobile Validation
    if (
      !mobile ||
      !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(
        mobile,
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid mobile number",
        },
        { status: 400 },
      );
    }

    // Service Required
    if (
      !serviceRequired ||
      serviceRequired.length < 3 ||
      serviceRequired.length > 500
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Service Required must be between 3 and 500 characters",
        },
        { status: 400 },
      );
    }

    // Project Details
    if (
      !projectDetails ||
      projectDetails.length < 10 ||
      projectDetails.length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Project Details must be between 10 and 5000 characters",
        },
        { status: 400 },
      );
    }

    // Prepare Data
    const lpData = {
      name,
      email,
      mobile,
      serviceRequired,
      projectDetails,
      pageName,
    };

    // Fetch Contact Email Group
    let additionalEmails = [];

    try {
      const contactGroup =
        await emailRepository.findByType("ads");

      if (contactGroup && contactGroup.emails) {
        additionalEmails = contactGroup.emails;
      }
    } catch (error) {
      logError(error, {
        function: "POST /api/lpform",
        message: "Failed to fetch ads email group",
      });
    }

    // Send Email
    await sendLPFormEmail(lpData, additionalEmails);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! We have received your enquiry and will contact you shortly.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    const { statusCode, body } = handleError(error);

    return NextResponse.json(body, {
      status: statusCode,
    });
  }
}