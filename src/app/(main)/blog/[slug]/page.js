import React from "react";
import connectDB from "@/lib/config/database";
import * as blogService from "@/lib/services/blogService";
import DefaultTemplate from "../DefaultTemplate";
import CaseStudyTemplate from "../CaseStudyTemplate";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getAuthUserFromToken } from "@/lib/middleware/auth";

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;

  await connectDB();

  // Get authentication context for previewing unpublished blogs
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  const user = await getAuthUserFromToken(token);

  try {
    // Pass user context to allow admins/editors to see unpublished posts
    const blog = await blogService.getBlogById(slug, user);

    if (!blog) {
      notFound();
    }

    // Fetch recent posts for sidebar
    const recentResult = await blogService.getAllBlogs(
      { isPublished: "true" },
      { limit: 5 }
    );
    const recentPosts = recentResult.blogs;

    // Use the layout field to determine which template to show
    if (blog.layout === "case-study") {
      return <CaseStudyTemplate blog={blog} recentPosts={recentPosts} />;
    }

    // Default template for "default" or any other unrecognized layout
    return <DefaultTemplate blog={blog} recentPosts={recentPosts} />;
  } catch (error) {
    console.error("Error fetching blog:", error);
    notFound();
  }
}
