"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faTimes,
  faCheckCircle,
  faExclamationCircle,
  faFileImage,
  faFileVideo,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmModal from "@/Components/Admin/ConfirmModal/ConfirmModal";

const AdminUploadContext = createContext();

// Helper to get file icon
const getFileIcon = (type) => {
  if (type.startsWith("image/")) return faFileImage;
  if (type.startsWith("video/")) return faFileVideo;
  return faFile;
};

export function AdminUploadProvider({ children }) {
  const [uploads, setUploads] = useState({}); // { [id]: { id, file, progress, status, xhr } }
  const [isExpanded, setIsExpanded] = useState(true);
  const [isManagerVisible, setIsManagerVisible] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const queryClient = useQueryClient();

  // Derived state
  const activeUploads = Object.values(uploads).filter(
    (u) => u.status === "uploading"
  );
  const hasActiveUploads = activeUploads.length > 0;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      Object.values(uploads).forEach((upload) => {
        if (upload.status === "uploading" && upload.xhr) {
          upload.xhr.abort();
        }
      });
    };
  }, []);

  const startUpload = useCallback(
    async (files, folder = "images") => {
      if (!files || files.length === 0) return;

      const shouldReset = !isManagerVisible;
      setIsManagerVisible(true);
      if (!isExpanded) setIsExpanded(true);

      const newUploads = {};
      const token = Cookies.get("admin_token");

      Array.from(files).forEach((file) => {
        const id = Math.random().toString(36).substr(2, 9);
        const xhr = new XMLHttpRequest();

        newUploads[id] = {
          id,
          file,
          progress: 0,
          status: "uploading",
          xhr,
          folder,
        };

        // Start Upload
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", folder);

        xhr.open("POST", "/api/gallery");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percentComplete = Math.round(
              (event.loaded / event.total) * 100
            );
            setUploads((prev) => ({
              ...prev,
              [id]: { ...prev[id], progress: percentComplete },
            }));
          }
        };

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            setUploads((prev) => ({
              ...prev,
              [id]: { ...prev[id], status: "completed", progress: 100 },
            }));
            queryClient.invalidateQueries({
              queryKey: ["gallery-files"],
            });
          } else {
            setUploads((prev) => ({
              ...prev,
              [id]: { ...prev[id], status: "error" },
            }));
          }
        };

        xhr.onerror = () => {
          setUploads((prev) => ({
            ...prev,
            [id]: { ...prev[id], status: "error" },
          }));
        };

        xhr.onabort = () => {
          setUploads((prev) => ({
            ...prev,
            [id]: { ...prev[id], status: "cancelled" },
          }));
        };

        xhr.send(formData);
      });

      // Update state to include new upload (and reset if needed)
      setUploads((prev) =>
        shouldReset ? newUploads : { ...prev, ...newUploads }
      );
    },
    [queryClient, isExpanded, isManagerVisible]
  );

  const cancelUpload = useCallback((id) => {
    setUploads((prev) => {
      const upload = prev[id];
      if (upload && upload.status === "uploading" && upload.xhr) {
        upload.xhr.abort();
      }
      return {
        ...prev,
        [id]: { ...prev[id], status: "cancelled" },
      };
    });
  }, []);

  const cancelAllUploads = useCallback(() => {
    Object.values(uploads).forEach((upload) => {
      if (upload.status === "uploading" && upload.xhr) {
        upload.xhr.abort();
      }
    });
    setUploads({}); // Clear all uploads
    setShowCancelModal(false);
    setIsManagerVisible(false);
  }, [uploads]);

  const closeManager = useCallback(() => {
    if (hasActiveUploads) {
      setShowCancelModal(true);
    } else {
      setIsManagerVisible(false);
      setUploads({}); // Clear finished/cancelled uploads when closed
    }
  }, [hasActiveUploads]);

  // --- UI Components ---

  const CircularProgress = ({ progress, size = 24, stroke = 2 }) => {
    const radius = (size - stroke) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#e0e0e0"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#1a73e8"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />
        </svg>
      </div>
    );
  };

  const UploadItem = ({ upload }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 16px",
        borderBottom: "1px solid #f1f3f4",
        gap: "12px",
        background: "#fff",
      }}
      className="upload-item"
    >
      <div
        style={{
          color:
            upload.status === "error"
              ? "#d93025"
              : upload.status === "completed"
              ? "#188038"
              : "#5f6368",
          fontSize: "20px",
          width: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon icon={getFileIcon(upload.file.type)} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: "13px",
            color: "#202124",
            fontWeight: 500,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={upload.file.name}
        >
          {upload.file.name}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: upload.status === "error" ? "#d93025" : "#5f6368",
            marginTop: "2px",
          }}
        >
          {upload.status === "uploading"
            ? "Uploading..."
            : upload.status === "completed"
            ? "Upload complete"
            : upload.status === "cancelled"
            ? "Upload cancelled"
            : "Upload failed"}
        </div>
      </div>
      {upload.status === "uploading" && (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <CircularProgress progress={upload.progress} />
          <button
            onClick={() => cancelUpload(upload.id)}
            className="cancel-btn"
            title="Cancel upload"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#5f6368",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              minWidth: "28px", // Prevent shrinking
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
      {upload.status === "completed" && (
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#188038" }} />
      )}
      {upload.status === "error" && (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          style={{ color: "#d93025" }}
        />
      )}
    </div>
  );

  return (
    <AdminUploadContext.Provider
      value={{
        isUploading: hasActiveUploads,
        activeUploadsCount: activeUploads.length,
        startUpload,
        cancelUpload,
      }}
    >
      {children}

      {/* Upload Manager Window */}
      {isManagerVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            right: "24px", // Google Drive style spacing
            width: "360px",
            background: "#fff",
            borderRadius: "8px 8px 0 0",
            boxShadow:
              "0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            transition: "height 0.3s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px 16px",
              background: "var(--admin-primary, #323232)", // Dark background like the example
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div style={{ fontSize: "14px", fontWeight: 500 }}>
              {hasActiveUploads
                ? `Uploading ${activeUploads.length} item${
                    activeUploads.length !== 1 ? "s" : ""
                  }`
                : Object.keys(uploads).length > 0
                ? `${Object.keys(uploads).length} uploads completed`
                : "Uploads"}
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  padding: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
              >
                <FontAwesomeIcon
                  icon={isExpanded ? faChevronDown : faChevronUp}
                />
              </button>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  padding: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  closeManager();
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>

          {/* List Content */}
          {isExpanded && (
            <>
              {hasActiveUploads && (
                <div
                  style={{
                    padding: "12px 16px",
                    background: "#f8f9fa",
                    fontSize: "12px",
                    color: "#5f6368",
                    borderBottom: "1px solid #e0e0e0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Less than a minute left</span>
                  <button
                    onClick={closeManager} // Trigger cancel modal if uploading
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#1a73e8",
                      fontWeight: 500,
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    Cancel
                  </button>
                </div>
              )}
              <div
                style={{
                  maxHeight: "300px",
                  overflowY: "auto",
                  background: "#fff",
                }}
              >
                {Object.values(uploads)
                  .reverse() // Show newest first
                  .map((upload) => (
                    <UploadItem key={upload.id} upload={upload} />
                  ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={cancelAllUploads}
        title="Cancel uploads?"
        message="Your uploads are currently in progress. Do you want to cancel them?"
        confirmText="Cancel uploads"
        cancelText="Continue uploading"
        type="warning"
      />

      {/* Global Styles for buttons */}
      <style jsx global>{`
        .cancel-btn:hover {
          background-color: #f1f3f4 !important;
          color: #202124 !important;
        }
      `}</style>
    </AdminUploadContext.Provider>
  );
}

export const useAdminUpload = () => useContext(AdminUploadContext);
