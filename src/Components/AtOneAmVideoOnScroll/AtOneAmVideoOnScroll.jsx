"use client";

import React, { useEffect, useRef, useState } from "react";
import "./AtOneAmVideoOnScroll.css";

const DESKTOP_VIDEO = "https://dndesigns.co.in/uploads/videos/websiteatoneamiewughdsvideo.mp4";
// const MOBILE_VIDEO = "https://dndesigns.co.in/uploads/videos/Bobalist-hh.mp4"; 

const MOBILE_VIDEO = "https://dndesigns.co.in/uploads/videos/websiteatoneamiewughdsvideo.mp4"; 

function AtOneAmVideoOnScroll() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");

 
  useEffect(() => {
    const handleSourceSwitch = () => {
      const isMobile = window.innerWidth <= 768;
      const selectedSrc = isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO;
      
      setVideoSrc((prev) => (prev !== selectedSrc ? selectedSrc : prev));
    };

    handleSourceSwitch();
    window.addEventListener("resize", handleSourceSwitch);
    return () => window.removeEventListener("resize", handleSourceSwitch);
  }, []);

  
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video || !videoSrc) return;

    let rafId = null;
    let targetProgress = 0;
    let currentProgress = 0;

    // Smoothness (LERP Factor): Lower value = silkier & smoother, Higher = instant/choppy
    const smoothness = 0.08; 

    const updateTargetProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollDistance = section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      let progress = -rect.top / scrollDistance;
      targetProgress = Math.max(0, Math.min(1, progress));
    };

    const animate = () => {
      // Linear Interpolation (LERP) smooth transitions ke liye
      currentProgress += (targetProgress - currentProgress) * smoothness;

      if (
        video.readyState >= 2 &&
        Number.isFinite(video.duration) &&
        video.duration > 0
      ) {
        const targetTime = currentProgress * video.duration;

      
        if (Math.abs(video.currentTime - targetTime) > 0.03) {
          video.currentTime = targetTime;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    const handleScroll = () => updateTargetProgress();
    const handleResize = () => updateTargetProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    updateTargetProgress();
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [videoSrc]);

  return (
    <section ref={sectionRef} className="at-one-am-scroll-section">
      <div className="at-one-am-video-sticky">
        {videoSrc && (
          <video
            ref={videoRef}
            key={videoSrc}
            className="at-one-am-video-on-scroll"
            src={videoSrc}
            muted
            playsInline
            preload="auto"
          />
        )}
      </div>
    </section>
  );
}

export default AtOneAmVideoOnScroll;