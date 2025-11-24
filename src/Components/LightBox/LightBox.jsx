"use client";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function CatalougePageFlip({ children, src, type }) {
  const [open, setOpen] = useState(false);

  const isYouTube =
    type === "youtube" ||
    src?.includes("youtube.com") ||
    src?.includes("youtu.be");

  const getYouTubeEmbed = (url) => {
    let videoId = "";
    if (url.includes("watch?v=")) videoId = url.split("watch?v=")[1];
    else if (url.includes("youtu.be")) videoId = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>
      <div onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        {children}
      </div>

      {open &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999999999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "90vw",
                height: "90vh",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0px",
                  background: "white",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                ✕
              </button>

              {type === "image" && (
                <img
                  src={src}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              )}

              {type === "video" && !isYouTube && (
                <video
                  src={src}
                  controls
                  autoPlay
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              )}

              {isYouTube && (
                <iframe
                  src={getYouTubeEmbed(src)}
                  width="100%"
                  height="100%"
                  style={{
                    border: "none",
                    borderRadius: "10px",
                  }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
