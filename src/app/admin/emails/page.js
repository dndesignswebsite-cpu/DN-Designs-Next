"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faPaperPlane,
  faTimes,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmModal from "@/Components/Admin/ConfirmModal/ConfirmModal";
import "react-quill-new/dist/quill.snow.css";
import { useAdminAuth } from "@/Components/Admin/AdminAuthContext";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const fetchWithAuth = async (url) => {
  const token = Cookies.get("admin_token");
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export default function EmailsPage() {
  const { user } = useAdminAuth();
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [editingGroup, setEditingGroup] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groupForm, setGroupForm] = useState({
    type: "",
    emails: "",
    description: "",
  });
  const [emailForm, setEmailForm] = useState({ subject: "", content: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteModal, setDeleteModal] = useState({ open: false, group: null });
  const queryClient = useQueryClient();

  // Permission Checks
  const canDelete = user?.role === "admin";
  const canCreate = user?.role === "admin" || user?.role === "editor";
  const canEdit = user?.role === "admin" || user?.role === "editor";
  const canSend = user?.role === "admin" || user?.role === "editor";

  const {
    data: groups,
    isLoading,
    isError,
    error: queryError,
  } = useQuery({
    queryKey: ["emailGroups"],
    queryFn: () => fetchWithAuth("/api/emails"),
  });

  // Debug: log the query result
  console.log("Email groups query:", {
    groups,
    isLoading,
    isError,
    queryError,
  });

  const createMutation = useMutation({
    mutationFn: async (data) => {
      const token = Cookies.get("admin_token");
      const res = await fetch("/api/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to create");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["emailGroups"] });
      setShowGroupModal(false);
      setGroupForm({ type: "", emails: "", description: "" });
      setSuccess("Email group created successfully!");
    },
    onError: (err) => setError(err.message),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/emails/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["emailGroups"] });
      setShowGroupModal(false);
      setEditingGroup(null);
      setGroupForm({ type: "", emails: "", description: "" });
      setSuccess("Email group updated successfully!");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/emails/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["emailGroups"] });
      setSuccess("Email group deleted successfully!");
      setDeleteModal({ open: false, group: null });
    },
  });

  const openDeleteModal = (group) => {
    setDeleteModal({ open: true, group });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.group) {
      deleteMutation.mutate(deleteModal.group._id);
    }
  };

  const sendMutation = useMutation({
    mutationFn: async ({ type, data }) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/emails/${type}/send`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to send");
      }
      return res.json();
    },
    onSuccess: (data) => {
      setShowSendModal(false);
      setSelectedGroup(null);
      setEmailForm({ subject: "", content: "" });
      setSuccess(
        `Email sent successfully to ${data.data?.recipients || 0} recipients!`
      );
    },
    onError: (err) => setError(err.message),
  });

  const handleCreateGroup = () => {
    setEditingGroup(null);
    setGroupForm({ type: "", emails: "", description: "" });
    setShowGroupModal(true);
  };

  const handleEditGroup = (group) => {
    setEditingGroup(group);
    setGroupForm({
      type: group.type,
      emails: group.emails.join(", "),
      description: group.description || "",
    });
    setShowGroupModal(true);
  };

  const handleSaveGroup = () => {
    setError("");
    const data = {
      type: groupForm.type,
      emails: groupForm.emails
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean),
      description: groupForm.description,
    };

    if (editingGroup) {
      updateMutation.mutate({ id: editingGroup._id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleSendEmail = () => {
    setError("");
    if (!emailForm.subject || !emailForm.content) {
      setError("Please fill in subject and content");
      return;
    }
    sendMutation.mutate({
      type: selectedGroup.type,
      data: {
        subject: emailForm.subject,
        content: emailForm.content,
        isHtml: true,
      },
    });
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
          <h1 className="admin-page-title">Email Management</h1>
          <p className="admin-page-subtitle">
            Manage email groups and send promotional emails
          </p>
        </div>
        {canCreate && (
          <button
            onClick={handleCreateGroup}
            className="admin-btn admin-btn-primary"
          >
            <FontAwesomeIcon icon={faPlus} />
            New Group
          </button>
        )}
      </div>

      {success && (
        <div className="admin-alert admin-alert-success">
          {success}
          <button
            onClick={() => setSuccess("")}
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}

      <div className="admin-card">
        {isLoading ? (
          <div className="admin-loading" style={{ padding: "40px" }}>
            <div className="admin-loading-spinner"></div>
          </div>
        ) : isError ? (
          <div className="admin-alert admin-alert-error">
            Error loading email groups: {queryError?.message || "Unknown error"}
          </div>
        ) : groups?.data?.length > 0 ? (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Group Type</th>
                  <th>Emails</th>
                  <th>Description</th>
                  <th>Status</th>
                  {(canEdit || canDelete) && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {groups.data.map((group) => (
                  <tr key={group._id}>
                    <td>
                      <strong>{group.type}</strong>
                    </td>
                    <td>{group.emails.length} email(s)</td>
                    <td>{group.description || "-"}</td>
                    <td>
                      <span
                        className={`admin-badge ${
                          group.isActive
                            ? "admin-badge-success"
                            : "admin-badge-secondary"
                        }`}
                      >
                        {group.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    {(canEdit || canDelete) && (
                      <td>
                        <div className="admin-table-actions">
                          {canSend && (
                            <button
                              onClick={() => {
                                setSelectedGroup(group);
                                setShowSendModal(true);
                              }}
                              className="admin-btn admin-btn-primary admin-btn-sm admin-btn-icon"
                              title="Send Email"
                            >
                              <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                          )}
                          {canEdit && (
                            <button
                              onClick={() => handleEditGroup(group)}
                              className="admin-btn admin-btn-outline admin-btn-sm admin-btn-icon"
                              title="Edit"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                          )}
                          {canDelete && (
                            <button
                              onClick={() => openDeleteModal(group)}
                              className="admin-btn admin-btn-danger admin-btn-sm admin-btn-icon"
                              title="Delete"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="admin-empty">
            <FontAwesomeIcon icon={faEnvelope} className="admin-empty-icon" />
            <h3>No email groups</h3>
            <p>Create your first email group to start sending emails.</p>
            {canCreate && (
              <button
                onClick={handleCreateGroup}
                className="admin-btn admin-btn-primary"
              >
                <FontAwesomeIcon icon={faPlus} />
                Create Group
              </button>
            )}
          </div>
        )}
      </div>

      {/* Create/Edit Group Modal */}
      {showGroupModal && (
        <div
          className="admin-modal-overlay"
          onClick={() => setShowGroupModal(false)}
        >
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {editingGroup ? "Edit Email Group" : "Create Email Group"}
              </h3>
              <button
                className="admin-modal-close"
                onClick={() => setShowGroupModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="admin-modal-body">
              {error && (
                <div className="admin-alert admin-alert-error">{error}</div>
              )}

              <div className="admin-form-group">
                <label className="admin-form-label">Group Type *</label>
                <input
                  type="text"
                  value={groupForm.type}
                  onChange={(e) =>
                    setGroupForm({ ...groupForm, type: e.target.value })
                  }
                  className="admin-form-input"
                  placeholder="e.g., newsletter, customers"
                  disabled={editingGroup}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Email Addresses *</label>
                <textarea
                  value={groupForm.emails}
                  onChange={(e) =>
                    setGroupForm({ ...groupForm, emails: e.target.value })
                  }
                  className="admin-form-textarea"
                  rows="4"
                  placeholder="email1@example.com, email2@example.com"
                />
                <p className="admin-form-hint">
                  Separate multiple emails with commas
                </p>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Description</label>
                <input
                  type="text"
                  value={groupForm.description}
                  onChange={(e) =>
                    setGroupForm({ ...groupForm, description: e.target.value })
                  }
                  className="admin-form-input"
                  placeholder="Optional description"
                />
              </div>
            </div>
            <div className="admin-modal-footer">
              <button
                onClick={() => setShowGroupModal(false)}
                className="admin-btn admin-btn-outline"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveGroup}
                className="admin-btn admin-btn-primary"
                disabled={createMutation.isPending || updateMutation.isPending}
              >
                {createMutation.isPending || updateMutation.isPending
                  ? "Saving..."
                  : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Send Email Modal */}
      {showSendModal && selectedGroup && (
        <div
          className="admin-modal-overlay"
          onClick={() => setShowSendModal(false)}
        >
          <div
            className="admin-modal"
            style={{ maxWidth: "800px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                Send Email to: {selectedGroup.type}
              </h3>
              <button
                className="admin-modal-close"
                onClick={() => setShowSendModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="admin-modal-body">
              {error && (
                <div className="admin-alert admin-alert-error">{error}</div>
              )}

              <p style={{ marginBottom: "16px", color: "#7f8c8d" }}>
                Sending to {selectedGroup.emails.length} recipient(s)
              </p>

              <div className="admin-form-group">
                <label className="admin-form-label">Subject *</label>
                <input
                  type="text"
                  value={emailForm.subject}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, subject: e.target.value })
                  }
                  className="admin-form-input"
                  placeholder="Email subject"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Content *</label>
                <div className="admin-editor-wrapper">
                  <ReactQuill
                    theme="snow"
                    value={emailForm.content}
                    onChange={(value) =>
                      setEmailForm({ ...emailForm, content: value })
                    }
                    placeholder="Write your email content..."
                    style={{ minHeight: "200px" }}
                  />
                </div>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button
                onClick={() => setShowSendModal(false)}
                className="admin-btn admin-btn-outline"
              >
                Cancel
              </button>
              <button
                onClick={handleSendEmail}
                className="admin-btn admin-btn-primary"
                disabled={sendMutation.isPending}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                {sendMutation.isPending ? "Sending..." : "Send Email"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, group: null })}
        onConfirm={handleConfirmDelete}
        title="Delete Email Group"
        message={`Are you sure you want to delete the email group "${deleteModal.group?.type}"? This action cannot be undone.`}
        confirmText="Yes, Delete"
        cancelText="Cancel"
        type="danger"
        isLoading={deleteMutation.isPending}
      />
    </div>
  );
}
