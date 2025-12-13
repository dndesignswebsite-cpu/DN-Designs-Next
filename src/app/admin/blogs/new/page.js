"use client";

import BlogForm from "@/Components/Admin/BlogForm/BlogForm";

export default function NewBlog() {
  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Create New Blog</h1>
        <p className="admin-page-subtitle">Write and publish a new blog post</p>
      </div>
      <BlogForm />
    </div>
  );
}

