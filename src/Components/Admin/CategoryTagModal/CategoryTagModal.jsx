"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSave,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const sectionStyle = {
  marginBottom: "1.5rem",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  overflow: "hidden",
  background: "#fff",
};

const sectionHeaderStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  background: "#f9fafb",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#374151",
};

const sectionContentStyle = {
  padding: "1rem",
  borderTop: "1px solid #e5e7eb",
};

const formRowStyle = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
};

export default function CategoryTagModal({
  isOpen,
  onClose,
  onSave,
  initialData = null,
  type = "category",
  isLoading = false,
  readOnly = false,
}) {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    metaKeywords: "",
    metaTitle: "",
    metaDescription: "",
    canonicalUrl: "",
    robotsTag: "index, follow",
    ogTitle: "",
    ogDescription: "",
    ogUrl: "",
    ogSiteName: "",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "",
    twitterDescription: "",
  });

  const [expandedSections, setExpandedSections] = useState({
    seo: false,
    openGraph: false,
    twitter: false,
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
        metaTitle: initialData.metaTitle || "",
        metaDescription: initialData.metaDescription || "",
        canonicalUrl: initialData.alternates?.canonical || "",
        robotsTag: initialData.robotsTag || "index, follow",
        ogTitle: initialData.openGraph?.title || "",
        ogDescription: initialData.openGraph?.description || "",
        ogUrl: initialData.openGraph?.url || "",
        ogSiteName: initialData.openGraph?.siteName || "",
        ogType: initialData.openGraph?.type || "website",
        twitterCard: initialData.twitter?.card || "summary_large_image",
        twitterTitle: initialData.twitter?.title || "",
        twitterDescription: initialData.twitter?.description || "",
      });
    } else {
      setFormData({
        name: "",
        slug: "",
        description: "",
        metaKeywords: "",
        metaTitle: "",
        metaDescription: "",
        canonicalUrl: "",
        robotsTag: "index, follow",
        ogTitle: "",
        ogDescription: "",
        ogUrl: "",
        ogSiteName: "",
        ogType: "website",
        twitterCard: "summary_large_image",
        twitterTitle: "",
        twitterDescription: "",
      });
    }
  }, [initialData, isOpen]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
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
    const dataToSave = {
      name: formData.name,
      slug: formData.slug,
      description: formData.description,
      metaKeywords: formData.metaKeywords
        ? formData.metaKeywords.split(",").map((k) => k.trim())
        : [],
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      alternates: {
        canonical: formData.canonicalUrl || null,
      },
      robotsTag: formData.robotsTag,
      openGraph: {
        title: formData.ogTitle,
        description: formData.ogDescription,
        url: formData.ogUrl || null,
        siteName: formData.ogSiteName || null,
        type: formData.ogType,
      },
      twitter: {
        card: formData.twitterCard,
        title: formData.twitterTitle,
        description: formData.twitterDescription,
      },
    };
    onSave(dataToSave);
  };

  if (!isOpen) return null;

  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal" style={{ maxWidth: "900px", width: "95%" }}>
        <div className="admin-modal-header">
          <h2 className="admin-modal-title">
            {readOnly ? "View" : initialData ? "Edit" : "Add New"}{" "}
            {type === "category" ? "Category" : "Tag"}
          </h2>
          <button className="admin-modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            className="admin-modal-body"
            style={{ maxHeight: "70vh", overflowY: "auto" }}
          >
            {/* Basic Info Section */}
            <div style={sectionStyle}>
              <div style={{ ...sectionHeaderStyle, cursor: "default" }}>
                <span>Basic Information</span>
              </div>
              <div style={sectionContentStyle}>
                <div style={formRowStyle}>
                  <div
                    className="admin-form-group"
                    style={{ flex: 1, minWidth: "200px" }}
                  >
                    <label className="admin-form-label">Name *</label>
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
                      disabled={readOnly}
                    />
                  </div>
                  <div
                    className="admin-form-group"
                    style={{ flex: 1, minWidth: "200px" }}
                  >
                    <label className="admin-form-label">Slug</label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      className="admin-form-input"
                      placeholder="url-friendly-slug"
                      disabled={readOnly}
                    />
                    {!readOnly && (
                      <small className="admin-form-hint">
                        Leave blank to auto-generate
                      </small>
                    )}
                  </div>
                </div>
                <div className="admin-form-group" style={{ marginTop: "1rem" }}>
                  <label className="admin-form-label">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="admin-form-input"
                    rows="3"
                    placeholder={`Brief description of the ${type}...`}
                    disabled={readOnly}
                  />
                </div>
              </div>
            </div>

            {/* SEO Settings Section */}
            <div style={sectionStyle}>
              <button
                type="button"
                style={sectionHeaderStyle}
                onClick={() => toggleSection("seo")}
              >
                <span>SEO Settings</span>
                <FontAwesomeIcon
                  icon={expandedSections.seo ? faChevronUp : faChevronDown}
                />
              </button>
              {expandedSections.seo && (
                <div style={sectionContentStyle}>
                  <div style={formRowStyle}>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">Meta Title</label>
                      <input
                        type="text"
                        name="metaTitle"
                        value={formData.metaTitle}
                        onChange={handleChange}
                        className="admin-form-input"
                        placeholder="SEO title (max 70 chars)"
                        maxLength={70}
                        disabled={readOnly}
                      />
                      <small className="admin-form-hint">
                        {formData.metaTitle.length}/70
                      </small>
                    </div>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">Robots Tag</label>
                      <select
                        name="robotsTag"
                        value={formData.robotsTag}
                        onChange={handleChange}
                        className="admin-form-input"
                        disabled={readOnly}
                      >
                        <option value="index, follow">Index, Follow</option>
                        <option value="index, nofollow">
                          Index, No Follow
                        </option>
                        <option value="noindex, follow">
                          No Index, Follow
                        </option>
                        <option value="noindex, nofollow">
                          No Index, No Follow
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="admin-form-group"
                    style={{ marginTop: "1rem" }}
                  >
                    <label className="admin-form-label">Meta Description</label>
                    <textarea
                      name="metaDescription"
                      value={formData.metaDescription}
                      onChange={handleChange}
                      className="admin-form-input"
                      rows="2"
                      placeholder="SEO description (max 160 chars)"
                      maxLength={160}
                      disabled={readOnly}
                    />
                    <small className="admin-form-hint">
                      {formData.metaDescription.length}/160
                    </small>
                  </div>
                  <div style={{ ...formRowStyle, marginTop: "1rem" }}>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">Meta Keywords</label>
                      <input
                        type="text"
                        name="metaKeywords"
                        value={formData.metaKeywords}
                        onChange={handleChange}
                        className="admin-form-input"
                        placeholder="keyword1, keyword2, ..."
                        disabled={readOnly}
                      />
                    </div>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">Canonical URL</label>
                      <input
                        type="url"
                        name="canonicalUrl"
                        value={formData.canonicalUrl}
                        onChange={handleChange}
                        className="admin-form-input"
                        placeholder="https://..."
                        disabled={readOnly}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Open Graph Section */}
            <div style={sectionStyle}>
              <button
                type="button"
                style={sectionHeaderStyle}
                onClick={() => toggleSection("openGraph")}
              >
                <span>Open Graph</span>
                <FontAwesomeIcon
                  icon={
                    expandedSections.openGraph ? faChevronUp : faChevronDown
                  }
                />
              </button>
              {expandedSections.openGraph && (
                <div style={sectionContentStyle}>
                  <div style={formRowStyle}>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">OG Title</label>
                      <input
                        type="text"
                        name="ogTitle"
                        value={formData.ogTitle}
                        onChange={handleChange}
                        className="admin-form-input"
                        placeholder="Open Graph title"
                        maxLength={95}
                        disabled={readOnly}
                      />
                      <small className="admin-form-hint">
                        {formData.ogTitle.length}/95
                      </small>
                    </div>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">OG Type</label>
                      <select
                        name="ogType"
                        value={formData.ogType}
                        onChange={handleChange}
                        className="admin-form-input"
                        disabled={readOnly}
                      >
                        <option value="website">Website</option>
                        <option value="article">Article</option>
                        <option value="profile">Profile</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="admin-form-group"
                    style={{ marginTop: "1rem" }}
                  >
                    <label className="admin-form-label">OG Description</label>
                    <textarea
                      name="ogDescription"
                      value={formData.ogDescription}
                      onChange={handleChange}
                      className="admin-form-input"
                      rows="2"
                      placeholder="Open Graph description"
                      maxLength={200}
                      disabled={readOnly}
                    />
                    <small className="admin-form-hint">
                      {formData.ogDescription.length}/200
                    </small>
                  </div>
                  <div style={{ ...formRowStyle, marginTop: "1rem" }}>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">OG URL</label>
                      <input
                        type="url"
                        name="ogUrl"
                        value={formData.ogUrl}
                        onChange={handleChange}
                        className="admin-form-input"
                        placeholder="https://..."
                        disabled={readOnly}
                      />
                    </div>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">OG Site Name</label>
                      <input
                        type="text"
                        name="ogSiteName"
                        value={formData.ogSiteName}
                        onChange={handleChange}
                        className="admin-form-input"
                        placeholder="Your Site Name"
                        disabled={readOnly}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Twitter Card Section */}
            <div style={sectionStyle}>
              <button
                type="button"
                style={sectionHeaderStyle}
                onClick={() => toggleSection("twitter")}
              >
                <span>Twitter Card</span>
                <FontAwesomeIcon
                  icon={expandedSections.twitter ? faChevronUp : faChevronDown}
                />
              </button>
              {expandedSections.twitter && (
                <div style={sectionContentStyle}>
                  <div style={formRowStyle}>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">Twitter Title</label>
                      <input
                        type="text"
                        name="twitterTitle"
                        value={formData.twitterTitle}
                        onChange={handleChange}
                        className="admin-form-input"
                        placeholder="Twitter card title"
                        maxLength={70}
                        disabled={readOnly}
                      />
                      <small className="admin-form-hint">
                        {formData.twitterTitle.length}/70
                      </small>
                    </div>
                    <div
                      className="admin-form-group"
                      style={{ flex: 1, minWidth: "200px" }}
                    >
                      <label className="admin-form-label">Card Type</label>
                      <select
                        name="twitterCard"
                        value={formData.twitterCard}
                        onChange={handleChange}
                        className="admin-form-input"
                        disabled={readOnly}
                      >
                        <option value="summary">Summary</option>
                        <option value="summary_large_image">
                          Summary Large Image
                        </option>
                        <option value="app">App</option>
                        <option value="player">Player</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="admin-form-group"
                    style={{ marginTop: "1rem" }}
                  >
                    <label className="admin-form-label">
                      Twitter Description
                    </label>
                    <textarea
                      name="twitterDescription"
                      value={formData.twitterDescription}
                      onChange={handleChange}
                      className="admin-form-input"
                      rows="2"
                      placeholder="Twitter card description"
                      maxLength={200}
                      disabled={readOnly}
                    />
                    <small className="admin-form-hint">
                      {formData.twitterDescription.length}/200
                    </small>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="admin-modal-footer">
            <button
              type="button"
              className="admin-btn admin-btn-outline"
              onClick={onClose}
              disabled={isLoading}
            >
              {readOnly ? "Close" : "Cancel"}
            </button>
            {!readOnly && (
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={isLoading}
              >
                <FontAwesomeIcon icon={faSave} />
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
