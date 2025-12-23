"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
const ReactQuill = dynamic(
  async () => {
    const { default: RQ, Quill } = await import("react-quill-new");
    if (typeof window !== "undefined") {
      window.Quill = Quill;
    }
    const { default: ImageResize } = await import(
      "quill-image-resize-module-react"
    );
    if (Quill) {
      Quill.register("modules/imageResize", ImageResize);
    }
    return RQ;
  },
  { ssr: false }
);

import "react-quill-new/dist/quill.snow.css";

const getISTString = () => {
  const now = new Date();
  const istOffset = 330 * 60 * 1000;
  const istDate = new Date(now.getTime() + istOffset);
  return istDate.toISOString().slice(0, 16);
};

export default function BlogForm({ initialData, isEditing }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const quillRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    categories: [],
    primaryCategory: "",
    layout: "default",
    tags: "",
    isPublished: false,
    publishedAt: getISTString(),
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

  const [showHtmlEditor, setShowHtmlEditor] = useState(false);
  const [error, setError] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  // Common Upload Logic
  const uploadImage = async (file) => {
    const formDataObj = new FormData();
    formDataObj.append("image", file);
    if (initialData?._id) {
      formDataObj.append("blogId", initialData._id);
    }

    try {
      const token = Cookies.get("admin_token");
      const res = await fetch("/api/blogs/upload-image", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formDataObj,
      });

      const result = await res.json();
      if (result.success) {
        return result.data.url;
      } else {
        setError(result.message || "Failed to upload image");
        return null;
      }
    } catch (err) {
      setError("Error uploading image");
      return null;
    }
  };

  // Custom Image Handler for Quill (Toolbar)
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*,.webp");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const url = await uploadImage(file);
      if (url) {
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, "image", url);
      }
    };
  };

  // Prevent Base64: Intercept Paste & Drop
  useEffect(() => {
    if (!quillRef.current) return;
    const quill = quillRef.current.getEditor();
    const root = quill.root;

    const handleFileUploadRequest = async (files) => {
      const filesArray = Array.from(files);
      const imageFiles = filesArray.filter((file) =>
        file.type.startsWith("image/")
      );

      if (imageFiles.length === 0) return;

      // For multiple images, we keep track of selection
      let range = quill.getSelection(true);
      let index = range ? range.index : quill.getLength();

      for (const file of imageFiles) {
        const url = await uploadImage(file);
        if (url) {
          quill.insertEmbed(index, "image", url);
          index += 1; // Move index forward for next image
        }
      }
    };

    const pasteHandler = async (e) => {
      const clipboardData = e.clipboardData || window.clipboardData;
      if (
        clipboardData &&
        clipboardData.files &&
        clipboardData.files.length > 0
      ) {
        e.preventDefault();
        await handleFileUploadRequest(clipboardData.files);
      }
    };

    const dropHandler = async (e) => {
      if (
        e.dataTransfer &&
        e.dataTransfer.files &&
        e.dataTransfer.files.length > 0
      ) {
        e.preventDefault();
        await handleFileUploadRequest(e.dataTransfer.files);
      }
    };

    root.addEventListener("paste", pasteHandler);
    root.addEventListener("drop", dropHandler);

    return () => {
      root.removeEventListener("paste", pasteHandler);
      root.removeEventListener("drop", dropHandler);
    };
  }, [quillRef.current, initialData?._id]);

  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
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
        handlers: {
          image: imageHandler,
        },
      },
      imageResize: {
        modules: ["Resize", "DisplaySize"],
      },
    }),
    [initialData?._id]
  );

  // Load initial data
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        slug: initialData.slug || "",
        content: initialData.content || "",
        excerpt: initialData.excerpt || "",
        categories:
          initialData.categories ||
          (initialData.category ? [initialData.category] : []),
        primaryCategory:
          initialData.primaryCategory || initialData.category || "",
        layout: initialData.layout || "default",
        tags: initialData.tags?.join(", ") || "",
        isPublished: initialData.isPublished || false,
        publishedAt: initialData.publishedAt
          ? new Date(initialData.publishedAt).toISOString().slice(0, 16)
          : getISTString(),
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
        headers: {
          Authorization: `Bearer ${token}`,
          // Note: Browser will automatically set boundary for FormData
        },
        body: data, // data is a FormData object from handleSubmit
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to save blog post");
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

  // Fetch categories and tags
  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ["admin-categories-minimal"],
    queryFn: async () => {
      const res = await fetch("/api/categories?limit=100");
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
  });

  const { data: tagsData, isLoading: tagsLoading } = useQuery({
    queryKey: ["admin-tags-minimal"],
    queryFn: async () => {
      const res = await fetch("/api/tags?limit=100");
      if (!res.ok) throw new Error("Failed to fetch tags");
      return res.json();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== "" && formData[key] !== null) {
        if (key === "categories") {
          data.append(key, formData[key].join(","));
        } else {
          data.append(key, formData[key]);
        }
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
                    ref={quillRef}
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
                <option value="default">Default</option>
                <option value="case-study">Case Study</option>
              </select>
            </div>
          </div>

          {/* Category & Tags */}
          <div className="admin-card">
            <h3 className="admin-card-title">Organization</h3>

            <div className="admin-form-group">
              <label className="admin-form-label">
                Categories (Primary Selection)
              </label>
              <div className="admin-category-box">
                <div className="admin-category-list-modern">
                  {categoriesLoading ? (
                    <div className="admin-category-loading">Loading...</div>
                  ) : categoriesData?.data?.length > 0 ? (
                    categoriesData.data.map((cat) => (
                      <div key={cat._id} className="admin-category-item-modern">
                        <label className="admin-checkbox-label">
                          <input
                            type="checkbox"
                            checked={formData.categories.includes(cat.name)}
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              setFormData((prev) => {
                                let newCats;
                                let newPrimary = prev.primaryCategory;

                                if (isChecked) {
                                  newCats = [...prev.categories, cat.name];
                                  if (!newPrimary) newPrimary = cat.name;
                                } else {
                                  newCats = prev.categories.filter(
                                    (c) => c !== cat.name
                                  );
                                  if (newPrimary === cat.name) {
                                    newPrimary =
                                      newCats.length > 0 ? newCats[0] : "";
                                  }
                                }

                                return {
                                  ...prev,
                                  categories: newCats,
                                  primaryCategory: newPrimary,
                                };
                              });
                            }}
                          />
                          <span className="admin-category-name-text">
                            {cat.name}
                          </span>
                        </label>

                        <label className="admin-radio-label">
                          <input
                            type="radio"
                            name="primaryCategory"
                            value={cat.name}
                            checked={formData.primaryCategory === cat.name}
                            disabled={!formData.categories.includes(cat.name)}
                            onChange={() => {
                              setFormData((prev) => ({
                                ...prev,
                                primaryCategory: cat.name,
                              }));
                            }}
                          />
                          <span className="admin-radio-custom"></span>
                        </label>
                      </div>
                    ))
                  ) : (
                    <div className="admin-category-empty">
                      No categories found
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Tags</label>
              <div className="admin-category-box">
                <div className="admin-category-list">
                  {tagsLoading ? (
                    <div className="admin-category-loading">Loading...</div>
                  ) : tagsData?.data?.length > 0 ? (
                    tagsData.data.map((tag) => (
                      <label key={tag._id} className="admin-category-item">
                        <input
                          type="checkbox"
                          value={tag.slug}
                          checked={
                            formData.tags
                              ? formData.tags
                                  .split(", ")
                                  .filter((t) => t)
                                  .includes(tag.slug)
                              : false
                          }
                          onChange={(e) => {
                            const currentTags = formData.tags
                              ? formData.tags.split(", ").filter((t) => t)
                              : [];
                            let newTags;
                            if (e.target.checked) {
                              newTags = [...currentTags, tag.slug];
                            } else {
                              newTags = currentTags.filter(
                                (t) => t !== tag.slug
                              );
                            }
                            setFormData((prev) => ({
                              ...prev,
                              tags: newTags.join(", "),
                            }));
                          }}
                        />
                        <span className="admin-category-name">{tag.name}</span>
                      </label>
                    ))
                  ) : (
                    <div className="admin-category-empty">No tags found</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
