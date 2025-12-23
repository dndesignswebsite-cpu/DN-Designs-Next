"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faArrowLeft,
  faImage,
  faTimes,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "../BlogForm/BlogForm.css";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["clean"],
  ],
};

export default function PageForm({ initialData, isEditing }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [showJsonEditor, setShowJsonEditor] = useState(false);
  const [error, setError] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    pageType: "default",
    order: 0,
    content: {},
    contentRaw: "",
    isPublished: false,
    publishedAt: "",
    // SEO
    metaTitle: "",
    metaDescription: "",
    focusKeywords: "",
    canonicalUrl: "",
    robotsTag: "index, follow",
    headCode: "",
    headCode: "",
    authors: [],
    // Social
    ogTitle: "",
    ogDescription: "",
    ogUrl: "",
    twitterTitle: "",
    twitterDescription: "",
  });

  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState("");
  const [ogImage, setOgImage] = useState(null);
  const [twitterImage, setTwitterImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        slug: initialData.slug || "",
        description: initialData.description || "",
        pageType: initialData.pageType || "default",
        order: initialData.order || 0,
        content: initialData.content || {},
        contentRaw:
          typeof initialData.content === "object"
            ? JSON.stringify(initialData.content, null, 2)
            : initialData.content || "",
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
      });
      if (initialData.featuredImage?.url) {
        setFeaturedImagePreview(initialData.featuredImage.url);
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

    // Handle content - try to parse as JSON
    let contentValue = formData.contentRaw;
    try {
      if (formData.contentRaw) {
        JSON.parse(formData.contentRaw); // Validate JSON
        contentValue = formData.contentRaw;
      }
    } catch {
      // If not valid JSON, send as raw string
      contentValue = JSON.stringify({ raw: formData.contentRaw });
    }

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
      } else if (type === "og") {
        setOgImage(file);
      } else if (type === "twitter") {
        setTwitterImage(file);
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
                  Content (JSON)
                </label>
                <button
                  type="button"
                  className="admin-btn admin-btn-outline admin-btn-sm"
                  onClick={() => setShowJsonEditor(!showJsonEditor)}
                >
                  <FontAwesomeIcon icon={faCode} />
                  {showJsonEditor ? "Visual Helper" : "JSON Editor"}
                </button>
              </div>

              {showJsonEditor ? (
                <textarea
                  name="contentRaw"
                  value={formData.contentRaw}
                  onChange={handleChange}
                  className="admin-form-textarea"
                  style={{
                    minHeight: "400px",
                    fontFamily: "monospace",
                    fontSize: "0.9rem",
                  }}
                  placeholder='{"hero": {"heading": "Welcome", "subheading": "..."}}'
                />
              ) : (
                <div>
                  <textarea
                    name="contentRaw"
                    value={formData.contentRaw}
                    onChange={handleChange}
                    className="admin-form-textarea"
                    style={{
                      minHeight: "300px",
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                    }}
                    placeholder="Enter JSON content structure for your page..."
                  />
                  <p className="admin-form-hint">
                    Enter page content as JSON. Example:{" "}
                    {`{"hero": {"title": "Welcome"}, "sections": [...]}`}
                  </p>
                </div>
              )}
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
                  key={index}
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
                <input
                  type="file"
                  accept="image/*,.webp"
                  onChange={(e) => handleImageChange(e, "og")}
                  className="admin-form-input"
                />
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
                <input
                  type="file"
                  accept="image/*,.webp"
                  onChange={(e) => handleImageChange(e, "twitter")}
                  className="admin-form-input"
                />
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

            {featuredImagePreview ? (
              <div className="admin-featured-preview">
                <img src={featuredImagePreview} alt="Featured" />
                <button
                  type="button"
                  className="admin-featured-remove"
                  onClick={() => {
                    setFeaturedImage(null);
                    setFeaturedImagePreview("");
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
