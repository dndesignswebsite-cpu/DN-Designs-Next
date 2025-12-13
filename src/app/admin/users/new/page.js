"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "@/Components/Admin/BlogForm/BlogForm.css"; // Reusing form styles

export default function NewUserPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const token = Cookies.get("admin_token");
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to create user");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      router.push("/admin/users");
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    mutation.mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div className="admin-header-left">
          <Link href="/admin/users" className="admin-back-btn">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Link>
          <h1 className="admin-title">Add New User</h1>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit} className="admin-blog-form">
          {error && (
            <div className="admin-alert admin-alert-error">{error}</div>
          )}

          <div className="admin-card">
            <div className="admin-alert admin-alert-info">
              A random password will be generated and emailed to the user.
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="admin-form-input"
                placeholder="Data Note"
                required
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="admin-form-input"
                placeholder="user@example.com"
                required
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="admin-form-select"
              >
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="admin-form-actions">
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={mutation.isPending}
              >
                <FontAwesomeIcon icon={faSave} />
                {mutation.isPending ? "Creating..." : "Create User"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
