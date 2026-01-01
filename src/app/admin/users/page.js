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
  faSpinner,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmModal from "@/Components/Admin/ConfirmModal/ConfirmModal";
import UserModal from "@/Components/Admin/Users/UserModal";
import "@/Components/Admin/BlogForm/BlogForm.css";

export default function UsersPage() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [userToDelete, setUserToDelete] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch Users
  const {
    data: usersData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", searchTerm],
    queryFn: async () => {
      const token = Cookies.get("admin_token");
      const res = await fetch(
        `/api/users${searchTerm ? `?search=${searchTerm}` : ""}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
  });

  const users = usersData?.data?.users || [];
  const currentUserId = Cookies.get("admin_user_id"); // Assuming we store ID, or we fetch profile

  // Delete User Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to delete user");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setUserToDelete(null);
      setIsDeleting(false);
    },
    onError: (err) => {
      alert(err.message);
      setIsDeleting(false);
    },
  });

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setIsDeleting(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      deleteMutation.mutate(userToDelete._id);
    }
  };

  if (isLoading) {
    return (
      <div className="admin-loading">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );
  }

  if (error) {
    return <div className="admin-error">Error: {error.message}</div>;
  }

  return (
    <div className="admin-container">
      <div
        className="admin-page-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h1 className="admin-page-title">Users</h1>
          <p className="admin-page-subtitle">Manage administrative access</p>
        </div>
        <Link href="/admin/users/new" className="admin-btn admin-btn-primary">
          <FontAwesomeIcon icon={faPlus} />
          Add User
        </Link>
      </div>

      <div className="admin-card" style={{ marginTop: "24px" }}>
        {/* Toolbar */}
        <div className="admin-toolbar">
          <div className="admin-search">
            <FontAwesomeIcon icon={faSearch} className="admin-search-icon" />
            <input
              type="text"
              placeholder="Search user by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="5" className="admin-table-empty">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                            alt={user.name}
                          />
                        ) : (
                          <div
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: "50%",
                              backgroundColor: "#e2e8f0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#64748b",
                            }}
                          >
                            <FontAwesomeIcon icon={faUser} size="sm" />
                          </div>
                        )}
                        {user.name}
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span
                        className={`admin-badge admin-badge-${
                          user.role === "admin" ? "blue" : "gray"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`admin-badge admin-badge-${
                          user.isActive ? "green" : "red"
                        }`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td>
                      <div className="admin-table-actions">
                        <button
                          onClick={() => setEditingUser(user)}
                          className="admin-btn admin-btn-outline admin-btn-sm admin-btn-icon"
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(user)}
                          className="admin-btn admin-btn-danger admin-btn-sm admin-btn-icon"
                          title="Delete"
                          disabled={
                            user.role === "admin" &&
                            users.filter((u) => u.role === "admin").length <= 1
                          }
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={isDeleting}
        onClose={() => setIsDeleting(false)}
        onConfirm={confirmDelete}
        title="Delete User"
        message={`Are you sure you want to delete "${userToDelete?.name}"? This action cannot be undone.`}
        isLoading={deleteMutation.isPending}
        loadingText="Processing..."
      />

      {/* Edit User Modal */}
      <UserModal
        isOpen={!!editingUser}
        user={editingUser}
        onClose={() => setEditingUser(null)}
      />
    </div>
  );
}
