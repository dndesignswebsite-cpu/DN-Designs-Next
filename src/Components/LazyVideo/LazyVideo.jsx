"use client";

import { useEffect, useRef } from "react";

const LazyVideo = ({
  src,
  media = null,
  eager = false,
  rootMargin = "400px",
  autoPlay = false,
  ...props
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !src) return;

    const mediaQuery = media ? window.matchMedia(media) : null;
    let observer = null;
    let started = false;

    const matchesMedia = () => !mediaQuery || mediaQuery.matches;

    const startVideo = () => {
      if (started || !matchesMedia() || !videoRef.current) return;

      started = true;

      if (autoPlay) {
        const playPromise = videoRef.current.play();

        if (playPromise?.catch) {
          playPromise.catch(() => {
            started = false;
          });
        }
      }
    };

    const observeVideo = () => {
      if (observer || !videoRef.current) return;

      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            startVideo();
            observer?.disconnect();
            observer = null;
          }
        },
        {
          rootMargin,
          threshold: 0.01,
        }
      );

      observer.observe(videoRef.current);
    };

    const handleMediaChange = (event) => {
      if (event.matches) {
        if (eager) {
          startVideo();
        } else {
          observeVideo();
        }
      } else {
        video.pause();
        started = false;

        if (observer) {
          observer.disconnect();
          observer = null;
        }
      }
    };

    if (matchesMedia()) {
      if (eager) {
        startVideo();
      } else if (autoPlay) {
        observeVideo();
      }
    }

    mediaQuery?.addEventListener?.("change", handleMediaChange);

    return () => {
      observer?.disconnect();
      mediaQuery?.removeEventListener?.("change", handleMediaChange);
    };
  }, [src, media, eager, rootMargin, autoPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      preload="none"
      autoPlay={false}
      {...props}
    />
  );
};

export default LazyVideo;
