"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import HTMLFlipBook from "react-pageflip";

export default function LightBoxBookCatalouge({ children, src, type, pages = [] }) {
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
                  marginTop:"20px"
                }}
              >
                ✕
              </button>
              {/*  FLIPBOOK */}
              {type === "flipbook" && pages.length > 0 && (
                <HTMLFlipBook
                  width={550}
                  height={733}
                  size="stretch"
                  minWidth={315}
                  maxWidth={1000}
                  minHeight={400}
                  maxHeight={1536}
                  maxShadowOpacity={0.5}
                  showCover={true}
                  mobileScrollSupport={true}
                  style={{
                    margin: "0 auto",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {pages.map((page, index) => (
                    <div key={index} className="page">
                      <img
                        src={page}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </HTMLFlipBook>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
