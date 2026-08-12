"use client";

import React, { useEffect, useRef } from "react";
import "./AtOneAmVideoOnScroll.css";

function AtOneAmVideoOnScroll() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let rafId = null;
    let targetProgress = 0;
    let currentProgress = 0;

    /*
     * How smooth the video follows the scroll.
     *
     * Smaller = smoother/slower
     * Larger  = more responsive
     */
    const smoothness = 0.075;

    const updateTargetProgress = () => {
      const rect = section.getBoundingClientRect();

      /*
       * The total distance over which the video should play.
       */
      const scrollDistance = section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      /*
       * Calculate scroll progress.
       *
       * 0 = beginning of section
       * 1 = end of section
       */
      let progress = -rect.top / scrollDistance;

      progress = Math.max(0, Math.min(1, progress));

      targetProgress = progress;
    };

    const animate = () => {
      /*
       * Smoothly move current progress towards
       * the actual scroll progress.
       */
      currentProgress +=
        (targetProgress - currentProgress) * smoothness;

      if (
        video.readyState >= 2 &&
        Number.isFinite(video.duration) &&
        video.duration > 0
      ) {
        const targetTime = currentProgress * video.duration;

        /*
         * Only update currentTime when there is
         * a meaningful difference.
         *
         * This avoids unnecessary video seeking.
         */
        if (Math.abs(video.currentTime - targetTime) > 0.01) {
          video.currentTime = targetTime;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      updateTargetProgress();
    };

    const handleResize = () => {
      updateTargetProgress();
    };

    const handleLoadedMetadata = () => {
      updateTargetProgress();

      /*
       * Start video at the correct frame.
       */
      if (video.duration && Number.isFinite(video.duration)) {
        video.currentTime = targetProgress * video.duration;
      }
    };

    video.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    updateTargetProgress();

    /*
     * Start our smooth animation loop.
     */
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      video.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="at-one-am-scroll-section"
    >
      <div className="at-one-am-video-sticky">
        <video
          ref={videoRef}
          className="at-one-am-video-on-scroll "
          src="https://dndesigns.co.in/uploads/videos/atoneamonscrollvideo.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}

export default AtOneAmVideoOnScroll;