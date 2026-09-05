
// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./SkateBoardAnimationDesktop.css";

// gsap.registerPlugin(ScrollTrigger);

// const SkateBoardAnimationDesktop = () => {
//   const skateboardDesktopRef = useRef(null);
//   const containerDesktopRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         skateboardDesktopRef.current,
//         {
//           x: -300,
//         },
//         {
//           x: 1500,
//           ease: "none",
//           scrollTrigger: {
//             trigger: containerDesktopRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     }, containerDesktopRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerDesktopRef}
//       className="skateboard-desktop-animation"
//     >
//       <img
//         ref={skateboardDesktopRef}
//         src="https://dndesigns.co.in/uploads/pages/ssqwsdxatoneamcasestudysaketeboard.jpg.png"
//         className="skateboard-desktop-img"
//         alt="Skateboard"
//       />
//     </div>
//   );
// };

// export default SkateBoardAnimationDesktop;




"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SkateBoardAnimationDesktop.css";

gsap.registerPlugin(ScrollTrigger);

const SkateBoardAnimationDesktop = () => {
  const skateboardDesktopRef = useRef(null);
  const containerDesktopRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerDesktopRef.current;
    const skateboard = skateboardDesktopRef.current;

    if (!container || !skateboard) return;

    let ctx;
    let resizeObserver;
    let refreshTimeout;

    const initAnimation = () => {
      if (!container || !skateboard) return;

      // Kill any previous ScrollTriggers created by this component
      if (ctx) {
        ctx.revert();
      }

      ctx = gsap.context(() => {
        gsap.fromTo(
          skateboard,
          {
            x: -300,
          },
          {
            x: 1500,
            ease: "none",

            scrollTrigger: {
              trigger: container,

              start: "top bottom",
              end: "bottom top",

              scrub: true,

              invalidateOnRefresh: true,
            },
          }
        );
      }, container);

      // Recalculate after GSAP has been created
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    /*
     * Wait until the browser has completed
     * the current rendering/layout cycle.
     */
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        initAnimation();

        // Observe layout changes caused by lazy images/videos
        resizeObserver = new ResizeObserver(() => {
          clearTimeout(refreshTimeout);

          refreshTimeout = setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        });

        resizeObserver.observe(document.body);
        resizeObserver.observe(container);
      });

      return () => cancelAnimationFrame(raf2);
    });

    return () => {
      cancelAnimationFrame(raf1);

      clearTimeout(refreshTimeout);

      resizeObserver?.disconnect();

      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={containerDesktopRef}
      className="skateboard-desktop-animation"
    >
      <img
        ref={skateboardDesktopRef}
        src="https://dndesigns.co.in/uploads/pages/ssqwsdxatoneamcasestudysaketeboard.jpg.png"
        className="skateboard-desktop-img"
        alt="Skateboard"
      />
    </div>
  );
};


export default SkateBoardAnimationDesktop;