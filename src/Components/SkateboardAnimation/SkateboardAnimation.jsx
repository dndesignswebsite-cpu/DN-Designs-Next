// "use client"

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./SkateboardAnimation.css"

// gsap.registerPlugin(ScrollTrigger);

// const SkateboardAnimation = () => {
//   const skateboardRef = useRef(null);
//   const containerRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         skateboardRef.current,
//         {
//           x: -300,
//         },
//         {
//           x: 1500,
//           ease: "none",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="skate-board-animation">
//       <img
//         ref={skateboardRef}
//         src="https://dndesigns.co.in/uploads/pages/ssqwsdxatoneamcasestudysaketeboard.jpg.png"
//         className="img-fluid skate-borad-img"
//         alt="Skateboard"
//       />
//     </div>
//   );
// };

// export default SkateboardAnimation;




"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SkateboardAnimation.css";

gsap.registerPlugin(ScrollTrigger);

const SkateboardAnimation = () => {
  const skateboardRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        skateboardRef.current,
        {
          x: () => -window.innerWidth * 0.5,
        },
        {
          x: () => window.innerWidth * 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="skate-board-animation">
      <img
        ref={skateboardRef}
        src="https://dndesigns.co.in/uploads/pages/ssqwsdxatoneamcasestudysaketeboard.jpg.png"
        className="skate-borad-img"
        alt="Skateboard"
      />
    </div>
  );
};

export default SkateboardAnimation;