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
import "./BlogForm.css";

// Dynamic import for React Quill (SSR issues)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

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

export default function BlogForm({ initialData, isEditing }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [showHtmlEditor, setShowHtmlEditor] = useState(false);
  const [error, setError] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    category: "",
    layout: "default",
    tags: "",
    isPublished: false,
    publishedAt: "",
    // SEO
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    canonicalUrl: "",
    robotsTag: "index, follow",
    headCode: "",
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

  // Load initial data
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        slug: initialData.slug || "",
        content: initialData.content || "",
        excerpt: initialData.excerpt || "",
        category: initialData.category || "",
        layout: initialData.layout || "default",
        tags: initialData.tags?.join(", ") || "",
        isPublished: initialData.isPublished || false,
        publishedAt: initialData.publishedAt
          ? new Date(initialData.publishedAt).toISOString().slice(0, 16)
          : "",
        metaTitle: initialData.metaTitle || "",
        metaDescription: initialData.metaDescription || "",
        metaKeywords: initialData.metaKeywords?.join(", ") || "",
        canonicalUrl: initialData.alternates?.canonical || "",
        robotsTag: initialData.robotsTag || "index, follow",
        headCode: initialData.headCode || "",
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

  const mutation = useMutation({
    mutationFn: async (data) => {
      const token = Cookies.get("admin_token");
      const url = isEditing ? `/api/blogs/${initialData._id}` : "/api/blogs";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to save blog");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      router.push("/admin/blogs");
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== "" && formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });

    if (featuredImage) {
      data.append("featuredImage", featuredImage);
    }
    if (ogImage) {
      data.append("ogImage", ogImage);
    }
    if (twitterImage) {
      data.append("twitterImage", twitterImage);
    }
    if (formData.layout) {
      data.append("layout", formData.layout);
    }

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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <label className="admin-form-label" style={{ margin: 0 }}>
                  Content *
                </label>
                <button
                  type="button"
                  className="admin-btn admin-btn-outline admin-btn-sm"
                  onClick={() => setShowHtmlEditor(!showHtmlEditor)}
                >
                  <FontAwesomeIcon icon={faCode} />
                  {showHtmlEditor ? "Visual Editor" : "HTML Editor"}
                </button>
              </div>
              {showHtmlEditor ? (
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="admin-form-textarea"
                  style={{ minHeight: "400px", fontFamily: "monospace" }}
                  placeholder="<p>Enter HTML content here...</p>"
                />
              ) : (
                <div className="admin-editor-wrapper">
                  <ReactQuill
                    theme="snow"
                    value={formData.content}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, content: value }))
                    }
                    modules={quillModules}
                    placeholder="Write your blog content..."
                  />
                </div>
              )}
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Excerpt</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                className="admin-form-textarea"
                rows="3"
                placeholder="Brief description for previews"
              />
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
                <label className="admin-form-label">Meta Keywords</label>
                <input
                  type="text"
                  name="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={handleChange}
                  className="admin-form-input"
                  placeholder="keyword1, keyword2, keyword3"
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
                placeholder="<script>...</script> or custom tracking code"
                style={{ fontFamily: "monospace" }}
              />
              <p className="admin-form-hint">
                Add custom scripts or meta tags to the page head
              </p>
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
                  placeholder="Open Graph title"
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
                  placeholder="Open Graph description"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">OG Image</label>
                <input
                  type="file"
                  accept="image/*"
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
                  placeholder="Twitter card title"
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
                  placeholder="Twitter card description"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Twitter Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "twitter")}
                  className="admin-form-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="admin-form-sidebar">
          {/* Publish Card */}
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
              <Link href="/admin/blogs" className="admin-btn admin-btn-outline">
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
                  : "Publish"}
              </button>
            </div>
          </div>

          {/* Featured Image */}
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
                  accept="image/*"
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

          {/* Layout Settings */}
          <div className="admin-card">
            <h3 className="admin-card-title">Layout Settings</h3>
            <div className="admin-form-group">
              <label className="admin-form-label">Blog Layout</label>
              <select
                name="layout"
                value={formData.layout}
                onChange={handleChange}
                className="admin-form-select"
              >
                <option value="layout-001">Layout 001</option>
                <option value="layout-002">Layout 002</option>
              </select>
            </div>
          </div>

          {/* Category & Tags */}
          <div className="admin-card">
            <h3 className="admin-card-title">Organization</h3>

            <div className="admin-form-group">
              <label className="admin-form-label">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="admin-form-input"
                placeholder="e.g., Design, Marketing"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="admin-form-input"
                placeholder="tag1, tag2, tag3"
              />
              <p className="admin-form-hint">Separate with commas</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
