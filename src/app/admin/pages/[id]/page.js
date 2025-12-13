"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import PageForm from "@/Components/Admin/PageForm/PageForm";

export default function EditPage() {
  const params = useParams();
  const { id } = params;

  const { data, isLoading, error } = useQuery({
    queryKey: ["page", id],
    queryFn: async () => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/pages/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch page");
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="admin-loading" style={{ padding: "60px" }}>
        <div className="admin-loading-spinner"></div>
        <p>Loading page...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-alert admin-alert-error">
        Error loading page: {error.message}
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Edit Page</h1>
        <p className="admin-page-subtitle">Update your website page</p>
      </div>
      <PageForm initialData={data?.data} isEditing />
    </div>
  );
}

