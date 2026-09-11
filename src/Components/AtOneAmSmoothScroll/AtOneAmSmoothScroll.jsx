"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function AtOneAmSmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reduceMotion.matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,

      smoothWheel: true,
      syncTouch: false,

      duration: 1.1,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,

      gestureOrientation: "vertical",
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}