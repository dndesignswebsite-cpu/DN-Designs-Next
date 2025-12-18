"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faSearch,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmModal from "@/Components/Admin/ConfirmModal/ConfirmModal";
import LoadingSpinner from "@/Components/Loading Spinner/LoadingSpinner";
import CategoryTagModal from "@/Components/Admin/CategoryTagModal/CategoryTagModal";
import { useAdminAuth } from "@/Components/Admin/AdminAuthContext";
import { toast } from "react-hot-toast";

const fetchWithAuth = async (url) => {
  const token = Cookies.get("admin_token");
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export default function TagsPage() {
  const { user } = useAdminAuth();
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState({ open: false, data: null });
  const [deleteModal, setDeleteModal] = useState({
    open: false,
    id: null,
    name: "",
  });
  const queryClient = useQueryClient();

  // Queries
  const { data, isLoading, refetch, isRefetching, error } = useQuery({
    queryKey: ["admin-tags", search],
    queryFn: () => fetchWithAuth(`/api/tags?limit=100`),
  });

  // Mutations
  const saveMutation = useMutation({
    mutationFn: async (formData) => {
      const token = Cookies.get("admin_token");
      const url = modal.data ? `/api/tags/${modal.data._id}` : "/api/tags";
      const method = modal.data ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to save tag");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-tags"] });
      setModal({ open: false, data: null });
      toast.success(`Tag ${modal.data ? "updated" : "created"} successfully`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/tags/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete tag");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-tags"] });
      setDeleteModal({ open: false, id: null, name: "" });
      toast.success("Tag deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const filteredData =
    data?.data?.filter(
      (tag) =>
        tag.name.toLowerCase().includes(search.toLowerCase()) ||
        tag.slug.toLowerCase().includes(search.toLowerCase())
    ) || [];

  const canManage = user?.role === "admin" || user?.role === "editor";
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
            Tags{" "}
            <FontAwesomeIcon
              onClick={() => refetch()}
              icon={faArrowsRotate}
              className={isLoading || isRefetching ? "spin" : ""}
              style={{ cursor: "pointer" }}
            />
          </h1>
          <p className="admin-page-subtitle">Manage blog tags</p>
        </div>
        {canManage && (
          <button
            className="admin-btn admin-btn-primary"
            onClick={() => setModal({ open: true, data: null })}
          >
            <FontAwesomeIcon icon={faPlus} />
            New Tag
          </button>
        )}
      </div>

      <div className="admin-card">
        <div className="admin-toolbar">
          <div className="admin-search">
            <FontAwesomeIcon icon={faSearch} className="admin-search-icon" />
            <input
              type="text"
              placeholder="Search tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <LoadingSpinner isLoading={isLoading} error={error}>
          {filteredData.length > 0 ? (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Description</th>
                    <th>Blogs Count</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((tag) => (
                    <tr key={tag._id}>
                      <td>
                        <strong>{tag.name}</strong>
                      </td>
                      <td>
                        <code>{tag.slug}</code>
                      </td>
                      <td style={{ maxWidth: "300px" }}>
                        <small>{tag.description || "-"}</small>
                      </td>
                      <td>
                        <span className="admin-badge admin-badge-info">
                          {tag.blogCount || 0}
                        </span>
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          {canManage && (
                            <button
                              onClick={() =>
                                setModal({ open: true, data: tag })
                              }
                              className="admin-btn admin-btn-outline admin-btn-sm admin-btn-icon"
                              title="Edit"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                          )}
                          {canDelete && (
                            <button
                              onClick={() =>
                                setDeleteModal({
                                  open: true,
                                  id: tag._id,
                                  name: tag.name,
                                })
                              }
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
          ) : (
            <div className="admin-empty">
              <FontAwesomeIcon icon={faSearch} className="admin-empty-icon" />
              <h3>No tags found</h3>
              {canManage && (
                <button
                  className="admin-btn admin-btn-primary"
                  onClick={() => setModal({ open: true, data: null })}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Create Tag
                </button>
              )}
            </div>
          )}
        </LoadingSpinner>
      </div>

      {/* Add/Edit Modal */}
      <CategoryTagModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false, data: null })}
        onSave={(formData) => saveMutation.mutate(formData)}
        initialData={modal.data}
        type="tag"
        isLoading={saveMutation.isPending}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, id: null, name: "" })}
        onConfirm={() => deleteMutation.mutate(deleteModal.id)}
        title="Delete Tag"
        message={`Are you sure you want to delete "${deleteModal.name}"? This will not delete the blogs, but they will lose this tag.`}
        confirmText="Yes, Delete"
        cancelText="Cancel"
        type="danger"
        isLoading={deleteMutation.isPending}
      />
    </div>
  );
}
