"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faEye,
  faSearch,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmModal from "@/Components/Admin/ConfirmModal/ConfirmModal";
import LoadingSpinner from "@/Components/Loading Spinner/LoadingSpinner";

const fetchWithAuth = async (url) => {
  const token = Cookies.get("admin_token");
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export default function BlogsList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [deleteModal, setDeleteModal] = useState({ open: false, blog: null });
  const queryClient = useQueryClient();

  const { data, isLoading, refetch, isRefetching, error } = useQuery({
    queryKey: ["blogs", page, search, status],
    queryFn: () => {
      let url = `/api/blogs?page=${page}&limit=10`;
      if (search) url += `&search=${search}`;
      if (status) url += `&isPublished=${status}`;
      return fetchWithAuth(url);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setDeleteModal({ open: false, blog: null });
    },
  });

  const openDeleteModal = (blog) => {
    setDeleteModal({ open: true, blog });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.blog) {
      deleteMutation.mutate(deleteModal.blog._id);
    }
  };

  return (
    <div>
      <div
        className="admin-page-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h1 className="admin-page-title">
            Blogs{" "}
            <FontAwesomeIcon
              onClick={refetch}
              icon={faArrowsRotate}
              className={isLoading || isRefetching ? "spin" : ""}
              style={{ cursor: "pointer" }}
            />
          </h1>
          <p className="admin-page-subtitle">Manage your blog posts</p>
        </div>
        <Link href="/admin/blogs/new" className="admin-btn admin-btn-primary">
          <FontAwesomeIcon icon={faPlus} />
          New Blog
        </Link>
      </div>

      <div className="admin-card">
        {/* Toolbar */}
        <div className="admin-toolbar">
          <div className="admin-search">
            <FontAwesomeIcon icon={faSearch} className="admin-search-icon" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="admin-filters">
            <select
              className="admin-filter-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="true">Published</option>
              <option value="false">Draft</option>
            </select>
          </div>
        </div>

        <LoadingSpinner isLoading={isLoading} error={error}>
          {data?.data?.length > 0 ? (
            <>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.data.map((blog) => (
                      <tr key={blog._id}>
                        <td>
                          <strong>{blog.title}</strong>
                          <br />
                          <small style={{ color: "#7f8c8d" }}>
                            /{blog.slug}
                          </small>
                        </td>
                        <td>{blog.category || "-"}</td>
                        <td>{blog.authorName}</td>
                        <td>
                          <span
                            className={`admin-badge ${
                              blog.isPublished
                                ? "admin-badge-success"
                                : "admin-badge-warning"
                            }`}
                          >
                            {blog.isPublished ? "Published" : "Draft"}
                          </span>
                        </td>
                        <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                        <td>
                          <div className="admin-table-actions">
                            <Link
                              href={`/blog/${blog.slug}`}
                              target="_blank"
                              className="admin-btn admin-btn-outline admin-btn-sm admin-btn-icon"
                              title="View"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                            <Link
                              href={`/admin/blogs/${blog._id}`}
                              className="admin-btn admin-btn-outline admin-btn-sm admin-btn-icon"
                              title="Edit"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </Link>
                            <button
                              onClick={() => openDeleteModal(blog)}
                              className="admin-btn admin-btn-danger admin-btn-sm admin-btn-icon"
                              title="Delete"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {data.pages > 1 && (
                <div className="admin-pagination">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                  <span>
                    Page {page} of {data.pages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(data.pages, p + 1))}
                    disabled={page === data.pages}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="admin-empty">
              <FontAwesomeIcon icon={faSearch} className="admin-empty-icon" />
              <h3>No blogs found</h3>
              <p>Create your first blog post to get started.</p>
              <Link
                href="/admin/blogs/new"
                className="admin-btn admin-btn-primary"
              >
                <FontAwesomeIcon icon={faPlus} />
                Create Blog
              </Link>
            </div>
          )}
        </LoadingSpinner>

        {/* Table */}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, blog: null })}
        onConfirm={handleConfirmDelete}
        title="Delete Blog"
        message={`Are you sure you want to delete "${deleteModal.blog?.title}"? This action cannot be undone.`}
        confirmText="Yes, Delete"
        cancelText="Cancel"
        type="danger"
        isLoading={deleteMutation.isPending}
      />
    </div>
  );
}
