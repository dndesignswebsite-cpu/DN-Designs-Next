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
  faFile,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmModal from "@/Components/Admin/ConfirmModal/ConfirmModal";
import { useAdminAuth } from "@/Components/Admin/AdminAuthContext";

const fetchWithAuth = async (url) => {
  const token = Cookies.get("admin_token");
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export default function PagesList() {
  const { user } = useAdminAuth();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [deleteModal, setDeleteModal] = useState({
    open: false,
    pageItem: null,
  });
  const queryClient = useQueryClient();

  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["pages", page, search, status],
    queryFn: () => {
      let url = `/api/pages?page=${page}&limit=10`;
      if (search) url += `&search=${search}`;
      if (status) url += `&isPublished=${status}`;
      return fetchWithAuth(url);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/pages/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pages"] });
      setDeleteModal({ open: false, pageItem: null });
    },
  });

  const openDeleteModal = (pageItem) => {
    setDeleteModal({ open: true, pageItem });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.pageItem) {
      deleteMutation.mutate(deleteModal.pageItem._id);
    }
  };

  // Permission Checks
  const canCreate = user?.role === "admin" || user?.role === "editor";
  const canEdit = user?.role === "admin" || user?.role === "editor";
  const canDelete = user?.role === "admin";

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
            Pages{" "}
            <FontAwesomeIcon
              onClick={refetch}
              icon={faArrowsRotate}
              className={(isLoading || isRefetching) ? "spin" : ""}
              style={{cursor: "pointer"}}
            />
          </h1>
          <p className="admin-page-subtitle">Manage your website pages</p>
        </div>
        {canCreate && (
          <Link href="/admin/pages/new" className="admin-btn admin-btn-primary">
            <FontAwesomeIcon icon={faPlus} />
            New Page
          </Link>
        )}
      </div>

      <div className="admin-card">
        {/* Toolbar */}
        <div className="admin-toolbar">
          <div className="admin-search">
            <FontAwesomeIcon icon={faSearch} className="admin-search-icon" />
            <input
              type="text"
              placeholder="Search pages..."
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

        {/* Table */}
        {isLoading ? (
          <div className="admin-loading" style={{ padding: "40px" }}>
            <div className="admin-loading-spinner"></div>
          </div>
        ) : data?.data?.length > 0 ? (
          <>
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Order</th>
                    <th>Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((pageItem) => (
                    <tr key={pageItem._id}>
                      <td>
                        <strong>{pageItem.title}</strong>
                      </td>
                      <td>/{pageItem.slug}</td>
                      <td>
                        <span className="admin-badge admin-badge-info">
                          {pageItem.pageType}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`admin-badge ${
                            pageItem.isPublished
                              ? "admin-badge-success"
                              : "admin-badge-warning"
                          }`}
                        >
                          {pageItem.isPublished ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td>{pageItem.order}</td>
                      <td>
                        {new Date(pageItem.updatedAt).toLocaleDateString()}
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          <Link
                            href={`/${pageItem.slug}`}
                            target="_blank"
                            className="admin-btn admin-btn-outline admin-btn-sm admin-btn-icon"
                            title="View"
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </Link>
                          {canEdit && (
                            <Link
                              href={`/admin/pages/${pageItem._id}`}
                              className="admin-btn admin-btn-outline admin-btn-sm admin-btn-icon"
                              title="Edit"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </Link>
                          )}
                          {canDelete && (
                            <button
                              onClick={() => openDeleteModal(pageItem)}
                              className="admin-btn admin-btn-danger admin-btn-sm admin-btn-icon"
                              title="Delete"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          )}
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
            <FontAwesomeIcon icon={faFile} className="admin-empty-icon" />
            <h3>No pages found</h3>
            <p>Create your first page to get started.</p>
            {canCreate && (
              <Link
                href="/admin/pages/new"
                className="admin-btn admin-btn-primary"
              >
                <FontAwesomeIcon icon={faPlus} />
                Create Page
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, pageItem: null })}
        onConfirm={handleConfirmDelete}
        title="Delete Page"
        message={`Are you sure you want to delete "${deleteModal.pageItem?.title}"? This action cannot be undone.`}
        confirmText="Yes, Delete"
        cancelText="Cancel"
        type="danger"
        isLoading={deleteMutation.isPending}
      />
    </div>
  );
}
