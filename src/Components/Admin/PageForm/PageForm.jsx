"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Editor } from "@monaco-editor/react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faArrowLeft,
  faImage,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "../BlogForm/BlogForm.css";

export default function PageForm({ initialData, isEditing }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [error, setError] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    pageType: "default",
    order: 0,
    content: "",
    isPublished: false,
    publishedAt: "",
    // SEO
    metaTitle: "",
    metaDescription: "",
    focusKeywords: "",
    canonicalUrl: "",
    robotsTag: "index, follow",
    headCode: "",
    authors: [],
    // Social
    ogTitle: "",
    ogDescription: "",
    ogUrl: "",
    twitterTitle: "",
    twitterDescription: "",
    editorLanguage: "html",
    featuredImageUrl: "",
    featuredImageAltText: "",
    ogImageUrl: "",
    ogImageAltText: "",
    twitterImageUrl: "",
    twitterImageAltText: "",
  });

  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState("");
  const [ogImage, setOgImage] = useState(null);
  const [ogImagePreview, setOgImagePreview] = useState("");
  const [twitterImage, setTwitterImage] = useState(null);
  const [twitterImagePreview, setTwitterImagePreview] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        slug: initialData.slug || "",
        description: initialData.description || "",
        pageType: initialData.pageType || "default",
        order: initialData.order || 0,
        content: initialData.content || "",
        isPublished: initialData.isPublished || false,
        publishedAt: initialData.publishedAt
          ? new Date(initialData.publishedAt).toISOString().slice(0, 16)
          : "",
        metaTitle: initialData.metaTitle || "",
        metaDescription: initialData.metaDescription || "",
        focusKeywords: initialData.focusKeywords?.join(", ") || "",
        canonicalUrl: initialData.alternates?.canonical || "",
        robotsTag: initialData.robotsTag || "index, follow",
        headCode: initialData.headCode || "",
        authors: initialData.authors || [],
        ogTitle: initialData.openGraph?.title || "",
        ogDescription: initialData.openGraph?.description || "",
        ogUrl: initialData.openGraph?.url || "",
        twitterTitle: initialData.twitter?.title || "",
        twitterDescription: initialData.twitter?.description || "",
        editorLanguage: initialData.editorLanguage || "html",
        featuredImageUrl: initialData.featuredImage?.url || "",
        featuredImageAltText: initialData.featuredImage?.altText || "",
        ogImageUrl: initialData.openGraph?.images?.[0]?.url || "",
        ogImageAltText: initialData.openGraph?.images?.[0]?.altText || "",
        twitterImageUrl: initialData.twitter?.images?.[0]?.url || "",
        twitterImageAltText: initialData.twitter?.images?.[0]?.altText || "",
      });
      if (initialData.featuredImage?.url) {
        setFeaturedImagePreview(initialData.featuredImage.url);
      }
      if (initialData.openGraph?.images?.[0]?.url) {
        setOgImagePreview(initialData.openGraph.images[0].url);
      }
      if (initialData.twitter?.images?.[0]?.url) {
        setTwitterImagePreview(initialData.twitter.images[0].url);
      }
    }
  }, [initialData]);

  // Auto-generate slug from title (only if not manually edited)
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const newSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    setFormData((prev) => ({
      ...prev,
      title,
      slug: slugManuallyEdited ? prev.slug : newSlug,
    }));
  };

  // Track manual slug edits
  const handleSlugChange = (e) => {
    setSlugManuallyEdited(true);
    setFormData((prev) => ({
      ...prev,
      slug: e.target.value,
    }));
  };

  const mutation = useMutation({
    mutationFn: async (data) => {
      const token = Cookies.get("admin_token");
      const url = isEditing ? `/api/pages/${initialData._id}` : "/api/pages";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to save page");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pages"] });
      router.push("/admin/pages");
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const data = new FormData();

    const contentValue = formData.content;

    data.append("title", formData.title);
    data.append("slug", formData.slug);
    data.append("description", formData.description);
    data.append("pageType", formData.pageType);
    data.append("order", formData.order);
    data.append("content", contentValue);
    data.append("isPublished", formData.isPublished);
    if (formData.publishedAt) data.append("publishedAt", formData.publishedAt);
    if (formData.focusKeywords)
      data.append("focusKeywords", formData.focusKeywords);
    if (formData.metaTitle) data.append("metaTitle", formData.metaTitle);
    if (formData.metaDescription)
      data.append("metaDescription", formData.metaDescription);
    if (formData.canonicalUrl)
      data.append("canonicalUrl", formData.canonicalUrl);
    if (formData.robotsTag) data.append("robotsTag", formData.robotsTag);
    if (formData.headCode) data.append("headCode", formData.headCode);
    if (formData.authors && formData.authors.length > 0) {
      data.append("authors", JSON.stringify(formData.authors));
    }
    if (formData.ogTitle) data.append("ogTitle", formData.ogTitle);
    if (formData.ogDescription)
      data.append("ogDescription", formData.ogDescription);
    if (formData.ogUrl) data.append("ogUrl", formData.ogUrl);
    if (formData.twitterTitle)
      data.append("twitterTitle", formData.twitterTitle);
    if (formData.twitterDescription)
      data.append("twitterDescription", formData.twitterDescription);

    // Image URL and Alt Text fields
    data.append("featuredImageUrl", formData.featuredImageUrl);
    data.append("featuredImageAltText", formData.featuredImageAltText);
    data.append("ogImageUrl", formData.ogImageUrl);
    data.append("ogImageAltText", formData.ogImageAltText);
    data.append("twitterImageUrl", formData.twitterImageUrl);
    data.append("twitterImageAltText", formData.twitterImageAltText);

    if (featuredImage) data.append("featuredImage", featuredImage);
    if (ogImage) data.append("ogImage", ogImage);
    if (twitterImage) data.append("twitterImage", twitterImage);

    mutation.mutate(data);
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === "featured") {
        setFeaturedImage(file);
        setFeaturedImagePreview(URL.createObjectURL(file));
        setFormData((prev) => ({ ...prev, featuredImageUrl: "" }));
      } else if (type === "og") {
        setOgImage(file);
        setOgImagePreview(URL.createObjectURL(file));
        setFormData((prev) => ({ ...prev, ogImageUrl: "" }));
      } else if (type === "twitter") {
        setTwitterImage(file);
        setTwitterImagePreview(URL.createObjectURL(file));
        setFormData((prev) => ({ ...prev, twitterImageUrl: "" }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addAuthor = () => {
    setFormData((prev) => ({
      ...prev,
      authors: [...prev.authors, { name: "", url: "" }],
    }));
  };

  const removeAuthor = (index) => {
    setFormData((prev) => ({
      ...prev,
      authors: prev.authors.filter((_, i) => i !== index),
    }));
  };

  const handleAuthorChange = (index, field, value) => {
    setFormData((prev) => {
      const newAuthors = [...prev.authors];
      newAuthors[index] = { ...newAuthors[index], [field]: value };
      return { ...prev, authors: newAuthors };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="admin-blog-form">
      {error && <div className="admin-alert admin-alert-error">{error}</div>}

      <div className="admin-form-layout">
        {/* Main Content */}
        <div className="admin-form-main">
          <div className="admin-card">
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="admin-form-input"
                  placeholder="Page title"
                  required
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Slug *</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleSlugChange}
                  className="admin-form-input"
                  placeholder="page-url-slug"
                  required
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="admin-form-textarea"
                rows="2"
                placeholder="Brief description"
              />
            </div>

            <div className="admin-form-group">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <label className="admin-form-label" style={{ margin: 0 }}>
                  Content ({formData.editorLanguage?.toUpperCase() || "HTML"})
                </label>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <label style={{ fontSize: "0.85rem", color: "#666" }}>
                    Language:
                  </label>
                  <select
                    name="editorLanguage"
                    value={formData.editorLanguage}
                    onChange={handleChange}
                    className="admin-form-select admin-form-select-sm"
                    style={{
                      padding: "4px 8px",
                      fontSize: "0.85rem",
                      width: "auto",
                    }}
                  >
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                  </select>
                </div>
              </div>

              <div className="admin-editor-wrapper code-editor-wrapper">
                <Editor
                  height="calc(100vh - 400px)"
                  language={formData.editorLanguage}
                  path={`content.${
                    formData.editorLanguage === "javascript"
                      ? "js"
                      : formData.editorLanguage
                  }`}
                  value={formData.content}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, content: value || "" }))
                  }
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: "on",
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    renderLineHighlight: "none",
                    hideCursorInOverviewRuler: true,
                    suggestOnTriggerCharacters: true,
                    quickSuggestions: true,
                    bracketPairColorization: { enabled: true },
                    formatOnPaste: true,
                    formatOnType: true,
                    autoClosingTags: true,
                    autoClosingBrackets: "always",
                    autoClosingQuotes: "always",
                  }}
                />
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="admin-card">
            <h3 className="admin-card-title">SEO Settings</h3>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  className="admin-form-input"
                  placeholder="SEO title (max 70 chars)"
                  maxLength="70"
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Canonical URL</label>
                <input
                  type="url"
                  name="canonicalUrl"
                  value={formData.canonicalUrl}
                  onChange={handleChange}
                  className="admin-form-input"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Meta Description</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                className="admin-form-textarea"
                rows="2"
                placeholder="SEO description (max 160 chars)"
                maxLength="160"
              />
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label">Focus Keywords</label>
                <input
                  type="text"
                  name="focusKeywords"
                  value={formData.focusKeywords}
                  onChange={handleChange}
                  className="admin-form-input"
                  placeholder="keyword1, keyword2"
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Robots Tag</label>
                <select
                  name="robotsTag"
                  value={formData.robotsTag}
                  onChange={handleChange}
                  className="admin-form-select"
                >
                  <option value="index, follow">Index, Follow</option>
                  <option value="index, nofollow">Index, No Follow</option>
                  <option value="noindex, follow">No Index, Follow</option>
                  <option value="noindex, nofollow">No Index, No Follow</option>
                </select>
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Custom Head Code</label>
              <textarea
                name="headCode"
                value={formData.headCode}
                onChange={handleChange}
                className="admin-form-textarea"
                rows="3"
                placeholder="<script>...</script>"
                style={{ fontFamily: "monospace" }}
              />
            </div>

            <div className="admin-form-group">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <label className="admin-form-label" style={{ margin: 0 }}>
                  Authors
                </label>
                <button
                  type="button"
                  onClick={addAuthor}
                  className="admin-btn admin-btn-outline admin-btn-sm"
                >
                  + Add Author
                </button>
              </div>
              {formData.authors.map((author, index) => (
                <div
                  key={author.id || `author-${index}`}
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "10px",
                    alignItems: "start",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <input
                      type="text"
                      placeholder="Author Name"
                      value={author.name}
                      onChange={(e) =>
                        handleAuthorChange(index, "name", e.target.value)
                      }
                      className="admin-form-input"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <input
                      type="text"
                      placeholder="Author URL"
                      value={author.url}
                      onChange={(e) =>
                        handleAuthorChange(index, "url", e.target.value)
                      }
                      className="admin-form-input"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAuthor(index)}
                    className="admin-btn admin-btn-danger admin-btn-sm"
                    style={{ marginTop: "2px" }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Grid */}
          <div
            className="admin-grid-row"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Open Graph Card */}
            <div className="admin-card">
              <h3 className="admin-card-title">Open Graph</h3>

              <div className="admin-form-group">
                <label className="admin-form-label">OG Title</label>
                <input
                  type="text"
                  name="ogTitle"
                  value={formData.ogTitle}
                  onChange={handleChange}
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">OG URL</label>
                <input
                  type="text"
                  name="ogUrl"
                  value={formData.ogUrl}
                  onChange={handleChange}
                  className="admin-form-input"
                  placeholder="https://..."
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">OG Description</label>
                <textarea
                  name="ogDescription"
                  value={formData.ogDescription}
                  onChange={handleChange}
                  className="admin-form-textarea"
                  rows="2"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">OG Image</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="text"
                    name="ogImageUrl"
                    value={formData.ogImageUrl}
                    onChange={(e) => {
                      handleChange(e);
                      if (e.target.value) {
                        setOgImage(null);
                        setOgImagePreview(e.target.value);
                      } else if (!ogImage) {
                        setOgImagePreview("");
                      }
                    }}
                    className="admin-form-input"
                    placeholder="OG Image URL"
                  />
                  <input
                    type="text"
                    name="ogImageAltText"
                    value={formData.ogImageAltText}
                    onChange={handleChange}
                    className="admin-form-input"
                    placeholder="OG Image Alt Text"
                  />
                </div>
                <input
                  type="file"
                  accept="image/*,.webp"
                  onChange={(e) => handleImageChange(e, "og")}
                  className="admin-form-input"
                />
                {ogImagePreview && (
                  <div
                    className="admin-featured-preview"
                    style={{ marginTop: "10px" }}
                  >
                    <img src={ogImagePreview} alt="OG Preview" />
                    <button
                      type="button"
                      className="admin-featured-remove"
                      onClick={() => {
                        setOgImage(null);
                        setOgImagePreview("");
                        setFormData((prev) => ({ ...prev, ogImageUrl: "" }));
                      }}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Twitter Card */}
            <div className="admin-card">
              <h3 className="admin-card-title">Twitter Card</h3>

              <div className="admin-form-group">
                <label className="admin-form-label">Twitter Title</label>
                <input
                  type="text"
                  name="twitterTitle"
                  value={formData.twitterTitle}
                  onChange={handleChange}
                  className="admin-form-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Twitter Description</label>
                <textarea
                  name="twitterDescription"
                  value={formData.twitterDescription}
                  onChange={handleChange}
                  className="admin-form-textarea"
                  rows="2"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Twitter Image</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="text"
                    name="twitterImageUrl"
                    value={formData.twitterImageUrl}
                    onChange={(e) => {
                      handleChange(e);
                      if (e.target.value) {
                        setTwitterImage(null);
                        setTwitterImagePreview(e.target.value);
                      } else if (!twitterImage) {
                        setTwitterImagePreview("");
                      }
                    }}
                    className="admin-form-input"
                    placeholder="Twitter Image URL"
                  />
                  <input
                    type="text"
                    name="twitterImageAltText"
                    value={formData.twitterImageAltText}
                    onChange={handleChange}
                    className="admin-form-input"
                    placeholder="Twitter Image Alt Text"
                  />
                </div>
                <input
                  type="file"
                  accept="image/*,.webp"
                  onChange={(e) => handleImageChange(e, "twitter")}
                  className="admin-form-input"
                />
                {twitterImagePreview && (
                  <div
                    className="admin-featured-preview"
                    style={{ marginTop: "10px" }}
                  >
                    <img src={twitterImagePreview} alt="Twitter Preview" />
                    <button
                      type="button"
                      className="admin-featured-remove"
                      onClick={() => {
                        setTwitterImage(null);
                        setTwitterImagePreview("");
                        setFormData((prev) => ({
                          ...prev,
                          twitterImageUrl: "",
                        }));
                      }}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="admin-form-sidebar">
          <div className="admin-card">
            <h3 className="admin-card-title">Publish</h3>

            <div className="admin-form-group">
              <label className="admin-checkbox">
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={handleChange}
                />
                <span>Published</span>
              </label>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Publish Date</label>
              <input
                type="datetime-local"
                name="publishedAt"
                value={formData.publishedAt}
                onChange={handleChange}
                className="admin-form-input"
              />
            </div>

            <div className="admin-form-actions">
              <Link href="/admin/pages" className="admin-btn admin-btn-outline">
                <FontAwesomeIcon icon={faArrowLeft} />
                Cancel
              </Link>
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={mutation.isPending}
              >
                <FontAwesomeIcon icon={faSave} />
                {mutation.isPending
                  ? "Saving..."
                  : isEditing
                  ? "Update"
                  : "Create"}
              </button>
            </div>
          </div>

          <div className="admin-card">
            <h3 className="admin-card-title">Featured Image</h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <input
                type="text"
                name="featuredImageUrl"
                value={formData.featuredImageUrl}
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value) {
                    setFeaturedImage(null);
                    setFeaturedImagePreview(e.target.value);
                  } else if (!featuredImage) {
                    setFeaturedImagePreview("");
                  }
                }}
                className="admin-form-input"
                placeholder="Image URL (paste here)"
              />
              <input
                type="text"
                name="featuredImageAltText"
                value={formData.featuredImageAltText}
                onChange={handleChange}
                className="admin-form-input"
                placeholder="Image Alt Text"
              />
            </div>

            {featuredImagePreview ? (
              <div className="admin-featured-preview">
                <img src={featuredImagePreview} alt="Featured" />
                <button
                  type="button"
                  className="admin-featured-remove"
                  onClick={() => {
                    setFeaturedImage(null);
                    setFeaturedImagePreview("");
                    setFormData((prev) => ({ ...prev, featuredImageUrl: "" }));
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ) : (
              <label className="admin-file-upload">
                <input
                  type="file"
                  accept="image/*,.webp"
                  onChange={(e) => handleImageChange(e, "featured")}
                />
                <FontAwesomeIcon
                  icon={faImage}
                  className="admin-file-upload-icon"
                />
                <p>Click to upload</p>
              </label>
            )}
          </div>

          <div className="admin-card">
            <h3 className="admin-card-title">Page Settings</h3>

            <div className="admin-form-group">
              <label className="admin-form-label">Page Type</label>
              <input
                type="text"
                name="pageType"
                value={formData.pageType}
                onChange={handleChange}
                className="admin-form-input"
                placeholder="e.g., home, about, services"
              />
              <p className="admin-form-hint">
                Used for fetching specific pages
              </p>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Display Order</label>
              <input
                type="number"
                name="order"
                value={formData.order}
                onChange={handleChange}
                className="admin-form-input"
                min="0"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
