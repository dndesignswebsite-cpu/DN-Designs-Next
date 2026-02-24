"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance = null;

// Export getter
export const getLenis = () => lenisInstance;

export default function SmoothScroll({ children }) {
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisInstance = lenis; // save instance

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };

  }, []);

  return <>{children}</>;
}