// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

// let lenisInstance = null;

// // Export getter
// export const getLenis = () => lenisInstance;

// export default function SmoothScroll({ children }) {
//   useEffect(() => {

//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//       smoothTouch: false,
//     });

//     lenisInstance = lenis; // save instance

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//       lenisInstance = null;
//     };

//   }, []);

//   return <>{children}</>;
// }




"use client";

import { useEffect } from "react";

let lenisInstance = null;


export const getLenis = () => lenisInstance;

export default function SmoothScroll({ children }) {
  useEffect(() => {
   
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      ) || window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) {
      lenisInstance = null;
      return;
    }

   
    let lenis = null;
    let rafId = null;

    const initLenis = async () => {
      const { default: Lenis } = await import("lenis");

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      lenisInstance = lenis;

      
      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

  
    if (document.readyState === "complete") {
      initLenis();
    } else {
      window.addEventListener("load", initLenis, { once: true });
    }

    return () => {
      
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      lenisInstance = null;
      window.removeEventListener("load", initLenis);
    };
  }, []);

  return <>{children}</>;
}