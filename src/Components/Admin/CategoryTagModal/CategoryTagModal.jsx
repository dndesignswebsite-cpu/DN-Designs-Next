"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave } from "@fortawesome/free-solid-svg-icons";

export default function CategoryTagModal({
  isOpen,
  onClose,
  onSave,
  initialData = null,
  type = "category", // "category" or "tag"
  isLoading = false,
}) {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    metaKeywords: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        slug: initialData.slug || "",
        description: initialData.description || "",
        metaKeywords: initialData.metaKeywords
          ? initialData.metaKeywords.join(", ")
          : "",
      });
    } else {
      setFormData({
        name: "",
        slug: "",
        description: "",
        metaKeywords: "",
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };

      // Auto-generate slug from name if slug wasn't manually edited (simplified check)
      if (name === "name" && !initialData) {
        newData.slug = value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      }

      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSave = { ...formData };

    if (type === "category") {
      dataToSave.metaKeywords = formData.metaKeywords
        ? formData.metaKeywords.split(",").map((k) => k.trim())
        : [];
    } else {
      delete dataToSave.metaKeywords;
    }

    onSave(dataToSave);
  };

  if (!isOpen) return null;

  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal" style={{ maxWidth: "500px" }}>
        <div className="admin-modal-header">
          <h2 className="admin-modal-title">
            {initialData ? "Edit" : "Add New"}{" "}
            {type === "category" ? "Category" : "Tag"}
          </h2>
          <button className="admin-modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="admin-modal-body">
            <div className="admin-form-group">
              <label className="admin-form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="admin-form-input"
                placeholder={`e.g., ${
                  type === "category" ? "Marketing" : "SEO"
                }`}
                required
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="admin-form-input"
                placeholder="url-friendly-slug"
              />
              <small className="admin-form-hint">
                Leave blank to auto-generate from name
              </small>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="admin-form-input"
                rows="3"
                placeholder={`Brief description of the ${type}...`}
              />
            </div>

            {type === "category" && (
              <div className="admin-form-group">
                <label className="admin-form-label">Meta Keywords</label>
                <input
                  type="text"
                  name="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={handleChange}
                  className="admin-form-input"
                  placeholder="Keyword 1, Keyword 2, ..."
                />
                <small className="admin-form-hint">
                  Comma separated keywords for SEO
                </small>
              </div>
            )}
          </div>

          <div className="admin-modal-footer">
            <button
              type="button"
              className="admin-btn admin-btn-outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              disabled={isLoading}
            >
              <FontAwesomeIcon icon={faSave} />
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
