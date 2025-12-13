"use client";

import PageForm from "@/Components/Admin/PageForm/PageForm";

export default function NewPage() {
  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Create New Page</h1>
        <p className="admin-page-subtitle">Create a new website page</p>
      </div>
      <PageForm />
    </div>
  );
}

