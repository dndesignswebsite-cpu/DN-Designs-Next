
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
    const ctx = gsap.context(() => {
      gsap.fromTo(
        skateboardDesktopRef.current,
        {
          x: -300,
        },
        {
          x: 1500,
          ease: "none",
          scrollTrigger: {
            trigger: containerDesktopRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerDesktopRef);

    return () => ctx.revert();
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

