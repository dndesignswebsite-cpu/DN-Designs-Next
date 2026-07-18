"use client";

import { useEffect, useRef } from "react";

export default function LPVideoHoverCardBrandIdentity({
  src,
  className,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Mobile: autoplay
    if (window.innerWidth <= 991) {
      video.play().catch(() => {});
      return;
    }

    // Desktop: hover play/pause
    const card = video.closest(".communication-strategy-hover-col");

    if (!card) return;

    const play = () => {
      video.play().catch(() => {});
    };

    const pause = () => {
      video.pause();
      video.currentTime = 0;
    };

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", pause);

    return () => {
      card.removeEventListener("mouseenter", play);
      card.removeEventListener("mouseleave", pause);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}