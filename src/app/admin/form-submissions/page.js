"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrash,
  faSearch,
  faEnvelope,
  faPhone,
  faTimes,
  faCheck,
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

export default function ContactsList() {
  const { user } = useAdminAuth();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [deleteModal, setDeleteModal] = useState({
    open: false,
    contact: null,
  });
  const queryClient = useQueryClient();

  // Permission Checks
  const canDelete = user?.role === "admin";
  const canEdit = user?.role === "admin" || user?.role === "editor";

  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["contacts", page, search, status],
    queryFn: () => {
      let url = `/api/contact?page=${page}&limit=10`;
      if (search) url += `&search=${search}`;
      if (status) url += `&status=${status}`;
      return fetchWithAuth(url);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      setSelectedContact(null);
      setDeleteModal({ open: false, contact: null });
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, newStatus }) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/contact/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  const openDeleteModal = (contact) => {
    setDeleteModal({ open: true, contact });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.contact) {
      deleteMutation.mutate(deleteModal.contact._id);
    }
  };

  const handleView = async (contact) => {
    setSelectedContact(contact);
    // Mark as read if new AND user has edit permission
    if (contact.status === "new" && canEdit) {
      updateStatusMutation.mutate({ id: contact._id, newStatus: "read" });
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      new: "admin-badge-warning",
      read: "admin-badge-info",
      replied: "admin-badge-success",
      resolved: "admin-badge-secondary",
    };
    return badges[status] || "admin-badge-secondary";
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Contacts  <FontAwesomeIcon
                      onClick={refetch}
                      icon={faArrowsRotate}
                      className={(isLoading || isRefetching) ? "spin" : ""}
                      style={{cursor: "pointer"}}
                    /></h1>
        <p className="admin-page-subtitle">
          View and manage contact form submissions
        </p>
      </div>

      <div className="admin-card">
        {/* Toolbar */}
        <div className="admin-toolbar">
          <div className="admin-search">
            <FontAwesomeIcon icon={faSearch} className="admin-search-icon" />
            <input
              type="text"
              placeholder="Search contacts..."
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
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
              <option value="resolved">Resolved</option>
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Page</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((contact) => (
                    <tr
                      key={contact._id}
                      style={{
                        fontWeight: contact.status === "new" ? "600" : "normal",
                      }}
                    >
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.mobile}</td>
                      <td>{contact.pageName || "-"}</td>
                      <td>
                        <span
                          className={`admin-badge ${getStatusBadge(
                            contact.status
                          )}`}
                        >
                          {contact.status}
                        </span>
                      </td>
                      <td>
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          <button
                            onClick={() => handleView(contact)}
                            className="admin-btn admin-btn-outline admin-btn-sm admin-btn-icon"
                            title="View"
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                          {canDelete && (
                            <button
                              onClick={() => openDeleteModal(contact)}
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
            <FontAwesomeIcon icon={faEnvelope} className="admin-empty-icon" />
            <h3>No contacts found</h3>
            <p>Contact submissions will appear here.</p>
          </div>
        )}
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div
          className="admin-modal-overlay"
          onClick={() => setSelectedContact(null)}
        >
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Contact Details</h3>
              <button
                className="admin-modal-close"
                onClick={() => setSelectedContact(null)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="admin-modal-body">
              <div className="contact-detail">
                <div className="contact-detail-header">
                  <h4>{selectedContact.name}</h4>
                  <span
                    className={`admin-badge ${getStatusBadge(
                      selectedContact.status
                    )}`}
                  >
                    {selectedContact.status}
                  </span>
                </div>

                <div className="contact-detail-info">
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href={`mailto:${selectedContact.email}`}>
                      {selectedContact.email}
                    </a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} />
                    <a href={`tel:${selectedContact.mobile}`}>
                      {selectedContact.mobile}
                    </a>
                  </p>
                  {selectedContact.pageName && (
                    <p>
                      <strong>From Page:</strong> {selectedContact.pageName}
                    </p>
                  )}
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(selectedContact.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="contact-detail-message">
                  <strong>Message:</strong>
                  <p>{selectedContact.message}</p>
                </div>

                {canEdit && (
                  <div className="contact-detail-actions">
                    <select
                      value={selectedContact.status}
                      onChange={(e) => {
                        updateStatusMutation.mutate({
                          id: selectedContact._id,
                          newStatus: e.target.value,
                        });
                        setSelectedContact({
                          ...selectedContact,
                          status: e.target.value,
                        });
                      }}
                      className="admin-form-select"
                    >
                      <option value="new">New</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .contact-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .contact-detail-header h4 {
          margin: 0;
          font-size: 1.25rem;
        }
        .contact-detail-info {
          margin-bottom: 20px;
        }
        .contact-detail-info p {
          margin: 8px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .contact-detail-info a {
          color: #3498db;
        }
        .contact-detail-message {
          background: #f8f9fa;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .contact-detail-message strong {
          display: block;
          margin-bottom: 8px;
        }
        .contact-detail-message p {
          margin: 0;
          white-space: pre-wrap;
        }
        .contact-detail-actions {
          display: flex;
          gap: 12px;
        }
      `}</style>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, contact: null })}
        onConfirm={handleConfirmDelete}
        title="Delete Contact"
        message={`Are you sure you want to delete the contact from "${deleteModal.contact?.name}"? This action cannot be undone.`}
        confirmText="Yes, Delete"
        cancelText="Cancel"
        type="danger"
        isLoading={deleteMutation.isPending}
      />
    </div>
  );
}
