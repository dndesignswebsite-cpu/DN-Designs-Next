"use client";

import React, { useEffect, useRef, useState } from "react";
import "./AtOneAmVideoOnScroll.css";

const DESKTOP_VIDEO =
  "https://dndesigns.co.in/uploads/videos/websiteatoneamiewughdsvideo.mp4";

function AtOneAmVideoOnScroll() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");
  const [isReady, setIsReady] = useState(false);

  // Desktop-only section: below 767px we don't even set a src, so no
  // bandwidth is wasted downloading a video that's hidden anyway.
  useEffect(() => {
    const handleSourceSwitch = () => {
      const isMobile = window.innerWidth <= 767;
      setVideoSrc(isMobile ? "" : DESKTOP_VIDEO);
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
    let readyTimeoutId = null;
    let targetProgress = 0;
    let currentProgress = 0;
    let lastTime = performance.now();
    let inView = false;
    let pendingSeek = false; // never stack a second seek on top of one in-flight

    // Smoothness = time (ms) to catch up to target. Frame-rate independent,
    // so it feels identical on 60Hz and 120Hz+ screens.
    const SMOOTH_MS = 220; // lower = snappier, higher = more glide
    const SEEK_EPSILON = 0.015; // seconds — ignore seeks smaller than this

    const markReady = () => {
      if (readyTimeoutId) clearTimeout(readyTimeoutId);
      setIsReady(true);
    };

    const updateTargetProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollDistance = section.offsetHeight - window.innerHeight;
      if (scrollDistance <= 0) return;
      const progress = -rect.top / scrollDistance;
      targetProgress = Math.max(0, Math.min(1, progress));
    };

    const seekVideo = (time) => {
      if (pendingSeek) return;
      if (Math.abs(video.currentTime - time) < SEEK_EPSILON) return;

      pendingSeek = true;
      const onSeeked = () => {
        pendingSeek = false;
        video.removeEventListener("seeked", onSeeked);
      };
      video.addEventListener("seeked", onSeeked);

      if (typeof video.fastSeek === "function") {
        video.fastSeek(time);
      } else {
        video.currentTime = time;
      }
    };

    const animate = (now) => {
      const dt = now - lastTime;
      lastTime = now;

      if (inView) {
        const t = 1 - Math.exp(-dt / SMOOTH_MS);
        currentProgress += (targetProgress - currentProgress) * t;

        if (
          video.readyState >= 2 &&
          Number.isFinite(video.duration) &&
          video.duration > 0
        ) {
          const targetTime = currentProgress * video.duration;
          seekVideo(targetTime);
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleScroll = () => updateTargetProgress();
    const handleResize = () => updateTargetProgress();

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(section);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Multiple fallbacks so the video can NEVER get stuck invisible:
    // loadeddata fires once a frame is actually paintable, canplay is a
    // second safety net, and a hard timeout guarantees visibility even if
    // both events fail to fire for some reason (slow network, odd codec etc).
    video.addEventListener("loadeddata", markReady, { once: true });
    video.addEventListener("canplay", markReady, { once: true });
    readyTimeoutId = setTimeout(markReady, 1500);

    // if the video is already cached/ready by the time this runs
    if (video.readyState >= 2) markReady();

    updateTargetProgress();
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      if (readyTimeoutId) clearTimeout(readyTimeoutId);
      io.disconnect();
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
            className={`at-one-am-video-on-scroll${isReady ? " is-ready" : ""}`}
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