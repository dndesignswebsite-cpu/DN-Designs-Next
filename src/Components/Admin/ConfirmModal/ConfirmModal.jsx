"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faTrash,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./ConfirmModal.css";

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Yes, Delete",
  cancelText = "Cancel",
  type = "danger", // danger, warning, info
  isLoading = false,
}) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const iconMap = {
    danger: faTrash,
    warning: faExclamationTriangle,
    info: faExclamationTriangle,
  };

  return (
    <div className="confirm-modal-overlay" onClick={onClose}>
      <div
        className={`confirm-modal confirm-modal-${type}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`confirm-modal-icon confirm-modal-icon-${type}`}>
          <FontAwesomeIcon icon={iconMap[type] || faExclamationTriangle} />
        </div>

        <h3 className="confirm-modal-title">{title}</h3>
        <p className="confirm-modal-message">{message}</p>

        <div className="confirm-modal-actions">
          <button
            type="button"
            className="confirm-modal-btn confirm-modal-btn-cancel"
            onClick={onClose}
            disabled={isLoading}
          >
            <FontAwesomeIcon icon={faTimes} />
            {cancelText}
          </button>
          <button
            type="button"
            className={`confirm-modal-btn confirm-modal-btn-${type}`}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="confirm-modal-spinner"></span>
                Processing...
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={iconMap[type] || faExclamationTriangle}
                />
                {confirmText}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
