"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import BlogForm from "@/Components/Admin/BlogForm/BlogForm";

export default function EditBlog() {
  const params = useParams();
  const { id } = params;

  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch blog");
      return res.json();
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return (
      <div className="admin-loading" style={{ padding: "60px" }}>
        <div className="admin-loading-spinner"></div>
        <p>Loading blog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-alert admin-alert-error">
        Error loading blog: {error.message}
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Edit Blog</h1>
        <p className="admin-page-subtitle">Update your blog post</p>
      </div>
      <BlogForm initialData={data?.data} isEditing />
    </div>
  );
}
