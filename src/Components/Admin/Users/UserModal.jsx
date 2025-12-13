"use client";

import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSave,
  faUser,
  faEnvelope,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./UserModal.css";

export default function UserModal({ isOpen, onClose, user }) {
  const queryClient = useQueryClient();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
    isActive: true,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "user",
        isActive: user.isActive,
      });
      setError("");
    }
  }, [user]);

  const mutation = useMutation({
    mutationFn: async (data) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to update user");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onClose();
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
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="user-modal-overlay" onClick={onClose}>
      <div className="user-modal" onClick={(e) => e.stopPropagation()}>
        <div className="user-modal-header">
          <h2>Edit User</h2>
          <button className="user-modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="user-modal-form">
          {error && <div className="user-modal-error">{error}</div>}

          <div className="user-modal-field">
            <label>
              <FontAwesomeIcon icon={faUser} /> Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="user-modal-input"
            />
          </div>

          <div className="user-modal-field">
            <label>
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="user-modal-input"
            />
          </div>

          <div className="user-modal-field">
            <label>
              <FontAwesomeIcon icon={faShieldAlt} /> Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="user-modal-select"
            >
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="user-modal-field checkbox-field">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
              Active Account
            </label>
          </div>

          <div className="user-modal-actions">
            <button
              type="button"
              className="user-modal-btn cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="user-modal-btn save"
              disabled={mutation.isPending}
            >
              <FontAwesomeIcon icon={faSave} />
              {mutation.isPending ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
