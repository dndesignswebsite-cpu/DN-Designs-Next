"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTrash,
  faEye,
  faUpload,
  faFolder,
  faImage,
  faTimes,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import ConfirmModal from "@/Components/Admin/ConfirmModal/ConfirmModal";
import { useAdminAuth } from "@/Components/Admin/AdminAuthContext";

export default function GalleryPage() {
  const queryClient = useQueryClient();
  const { user } = useAdminAuth();
  const [activeTab, setActiveTab] = useState("avatars");
  const [selectedImage, setSelectedImage] = useState(null); // For modal
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Fetch Folders
  const { data: folders, isLoading: foldersLoading } = useQuery({
    queryKey: ["gallery-folders"],
    queryFn: async () => {
      const token = Cookies.get("admin_token");
      const res = await fetch("/api/gallery", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch folders");
      const json = await res.json();
      return json.data || [];
    },
  });

  // Fetch Files for Active Tab
  const { data: files, isLoading: filesLoading } = useQuery({
    queryKey: ["gallery-files", activeTab],
    queryFn: async () => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/gallery?folder=${activeTab}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch files");
      const json = await res.json();
      return json.data || [];
    },
    enabled: !!activeTab,
  });

  // Create Mutation
  const uploadMutation = useMutation({
    mutationFn: async (files) => {
      const token = Cookies.get("admin_token");
      const formData = new FormData();

      // Append all files
      if (files && files.length) {
        Array.from(files).forEach((file) => {
          formData.append("file", file);
        });
      }

      formData.append("folder", activeTab);

      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        let errorMessage = "Upload failed";
        try {
          // Try to parse JSON error first
          const err = await res.json();
          errorMessage = err.message || errorMessage;
        } catch (e) {
          console.log(e);
          // If not JSON, check status text or use generic message
          if (res.status === 413) {
            errorMessage = "File too large. Please upload smaller files.";
          } else {
            errorMessage = res.statusText || errorMessage;
          }
        }
        throw new Error(errorMessage);
      }
      return res.json();
    },
    onMutate: () => setIsUploading(true),
    onSettled: () => setIsUploading(false),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["gallery-files", activeTab] });
      const count = data.count || 1;
      toast.success(`${count} file(s) uploaded successfully!`);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: async (path) => {
      const token = Cookies.get("admin_token");
      const res = await fetch(`/api/gallery/delete?path=${path}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Delete failed");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery-files", activeTab] });
      toast.success("File deleted successfully");
      setDeleteTarget(null);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleCopyLink = (url) => {
    let fullUrl = url;
    if (url.startsWith("/")) {
      const mediaBase = process.env.NEXT_PUBLIC_MEDIA_URL;
      if (mediaBase) {
        fullUrl = `${mediaBase.replace(/\/$/, "")}${url}`;
      } else {
        fullUrl = `${window.location.origin}${url}`;
      }
    }
    navigator.clipboard.writeText(fullUrl);
    toast.success("Full link copied to clipboard!");
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadMutation.mutate(files);
    }
  };

  return (
    <div
      className="admin-page-container"
      style={{ padding: "30px", fontFamily: "inherit" }}
    >
      <div
        className="admin-page-header"
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            className="admin-page-title"
            style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px" }}
          >
            Media Gallery
          </h1>
          <p className="admin-page-subtitle" style={{ color: "#666" }}>
            Manage your uploads and media assets
          </p>
        </div>

        {/* Upload Button */}
        {user?.role === "user" ? null : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <label className="admin-btn admin-btn-primary">
              {isUploading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <FontAwesomeIcon icon={faUpload} />
              )}
              {isUploading ? "Uploading..." : "Upload New"}
              <input
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*,video/*"
                disabled={isUploading}
              />
            </label>
            <small
              style={{
                color: "var(--admin-text-light, #666)",
                fontSize: "11px",
                marginTop: "4px",
              }}
            >
              Max: Images 10MB, Videos 50MB
            </small>
          </div>
        )}
      </div>

      {/* Segmented Tabs */}
      <div style={{ marginBottom: "24px" }}>
        <div
          className="gallery-tabs-container"
          style={{
            display: "inline-flex",
            background: "var(--admin-bg)",
            padding: "4px",
            borderRadius: "8px",
            gap: "4px",
            border: "1px solid var(--admin-border)",
          }}
        >
          {foldersLoading ? (
            <div
              style={{
                padding: "8px 16px",
                fontSize: "0.9rem",
                color: "var(--admin-text-light)",
              }}
            >
              Loading...
            </div>
          ) : (
            folders?.map((folder) => {
              const isActive = activeTab === folder;
              return (
                <button
                  key={folder}
                  onClick={() => setActiveTab(folder)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: "none",
                    background: isActive
                      ? "var(--admin-primary)"
                      : "transparent",
                    color: isActive ? "#fff" : "var(--admin-text)",
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    textTransform: "capitalize",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.2s ease",
                    boxShadow: isActive ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFolder}
                    style={{ opacity: isActive ? 1 : 0.7 }}
                  />{" "}
                  {folder}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Grid */}
      {filesLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", padding: "60px" }}
        >
          <div
            className="admin-loading-spinner"
            style={{ borderTopColor: "var(--admin-primary, #000)" }}
          ></div>
        </div>
      ) : files?.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px",
            background: "var(--admin-bg)",
            borderRadius: "8px",
            color: "var(--admin-text-light)",
          }}
        >
          <FontAwesomeIcon
            icon={faImage}
            style={{
              fontSize: "40px",
              color: "var(--admin-border)",
              marginBottom: "16px",
            }}
          />
          <p>
            No files found in <strong>{activeTab}</strong>
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {files
            ?.filter((f) => f)
            .map((file) => (
              <div
                key={file.path || file.name}
                className="gallery-card admin-card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  position: "relative",
                  height: "220px", // Increased height for better visibility
                  cursor: "pointer",
                  border: "none",
                }}
              >
                {/* Image/Video Background */}
                <div
                  className="gallery-media-wrapper"
                  onClick={() => setSelectedImage(file)}
                  style={{
                    width: "100%",
                    height: "100%",
                    transition: "all 0.4s ease",
                  }}
                >
                  {file.name.match(/\.(mp4|mov|avi|webm)$/i) ? (
                    <video
                      src={file.url}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      muted
                      loop
                      onMouseOver={(e) => e.target.play()}
                      onMouseOut={(e) => e.target.pause()}
                    />
                  ) : (
                    <img
                      src={file.url}
                      alt={file.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>

                {/* Overlay Content */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
                    color: "white",
                    transform: "translateY(100%)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                    }}
                    title={file.name}
                  >
                    {file.name}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginTop: "4px",
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyLink(file.url);
                      }}
                      title="Copy Link"
                      className="admin-btn admin-btn-sm"
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.2)",
                        color: "white",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        justifyContent: "center",
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(file);
                      }}
                      title="View"
                      className="admin-btn admin-btn-sm"
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.2)",
                        color: "white",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        justifyContent: "center",
                      }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    {user?.role !== "user" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteTarget(file);
                        }}
                        title="Delete"
                        className="admin-btn admin-btn-sm"
                        style={{
                          flex: 1,
                          background: "rgba(239, 68, 68, 0.8)", // Red with opacity
                          color: "white",
                          border: "none",
                          justifyContent: "center",
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(5px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.2s ease-out",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.1)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              position: "relative",
              background: "transparent",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.name.match(/\.(mp4|mov|avi|webm)$/i) ? (
              <video
                controls
                src={selectedImage.url}
                style={{
                  maxHeight: "80vh",
                  maxWidth: "100%",
                  display: "block",
                }}
              />
            ) : (
              <img
                src={selectedImage.url}
                alt={selectedImage.name}
                style={{
                  maxHeight: "80vh",
                  maxWidth: "100%",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            )}
            <div
              style={{
                padding: "15px",
                background: "#fff",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => handleCopyLink(selectedImage.url)}
                className="admin-btn admin-btn-primary"
              >
                <FontAwesomeIcon icon={faCopy} /> Copy Public Link
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => {
          if (deleteTarget?.path) {
            deleteMutation.mutate(deleteTarget.path);
          }
        }}
        title="Delete File"
        message={`Are you sure you want to delete "${deleteTarget?.name}"? This action cannot be undone.`}
        confirmText="Yes, Delete"
        type="danger"
        isLoading={deleteMutation.isPending}
      />
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .gallery-card:hover .gallery-media-wrapper {
          filter: blur(3px);
          // transform: scale(1.05);
        }
        .gallery-card:hover .gallery-overlay {
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
