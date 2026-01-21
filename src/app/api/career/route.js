/**
 * Career Application API Route
 * POST /api/career - Submit career application (Public)
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/config/database.js";
import * as emailRepository from "@/lib/repositories/emailRepository.js";
import { sendCareerApplicationEmail } from "@/lib/config/email.js";
import { handleError, logError } from "@/lib/middleware/errorHandler.js";

export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();

    // Extract form fields
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const jobRole = formData.get("jobRole");
    const experience = formData.get("experience");
    const portfolioLink = formData.get("portfolioLink");
    const coverLetter = formData.get("coverLetter");
    const resumeFile = formData.get("resume");

    // Validation
    if (!firstName || firstName.length < 2 || firstName.length > 50) {
      return NextResponse.json(
        {
          success: false,
          message: "First name must be between 2 and 50 characters",
        },
        { status: 400 },
      );
    }

    if (!lastName || lastName.length < 2 || lastName.length > 50) {
      return NextResponse.json(
        {
          success: false,
          message: "Last name must be between 2 and 50 characters",
        },
        { status: 400 },
      );
    }

    if (
      !email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    if (
      !mobile ||
      !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(
        mobile,
      )
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid mobile number" },
        { status: 400 },
      );
    }

    if (!jobRole || jobRole.length < 2 || jobRole.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Job role must be between 2 and 100 characters",
        },
        { status: 400 },
      );
    }

    if (!experience || experience.length < 1 || experience.length > 50) {
      return NextResponse.json(
        {
          success: false,
          message: "Experience must be between 1 and 50 characters",
        },
        { status: 400 },
      );
    }

    if (!coverLetter || coverLetter.length < 100 || coverLetter.length > 500) {
      return NextResponse.json(
        {
          success: false,
          message: "Cover letter must be between 100 and 500 characters",
        },
        { status: 400 },
      );
    }

    if (!resumeFile || !(resumeFile instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please upload your resume",
        },
        { status: 400 },
      );
    }

    // Validate file type (accept common resume formats)
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(resumeFile.type)) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume must be a PDF!",
        },
        { status: 400 },
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (resumeFile.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume file size must not exceed 5MB",
        },
        { status: 400 },
      );
    }

    // Convert file to buffer
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const resumeFileData = {
      buffer: buffer,
      filename: resumeFile.name,
      mimetype: resumeFile.type,
      size: resumeFile.size,
    };

    // Prepare application data
    const applicationData = {
      firstName,
      lastName,
      email,
      mobile,
      jobRole,
      experience,
      portfolioLink: portfolioLink || "",
      coverLetter,
    };

    // Fetch job-applications email group
    let additionalEmails = [];
    try {
      const jobApplicationsGroup =
        await emailRepository.findByType("job-applications");
      if (jobApplicationsGroup && jobApplicationsGroup.emails) {
        additionalEmails = jobApplicationsGroup.emails;
      }
    } catch (error) {
      // Log error but don't fail the request if email group doesn't exist
      logError(error, {
        function: "POST /api/career",
        message: "Failed to fetch job-applications email group",
      });
    }

    // Send email with attachment
    await sendCareerApplicationEmail(
      applicationData,
      resumeFileData,
      additionalEmails,
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your application! We have received your details and will get back to you soon.",
      },
      { status: 201 },
    );
  } catch (error) {
    const { statusCode, body } = handleError(error);
    return NextResponse.json(body, { status: statusCode });
  }
}
