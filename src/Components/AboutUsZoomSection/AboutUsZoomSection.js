"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./AboutUsZoomSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsZoomSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);

  useEffect(() => {
  let mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 1201px)",
    isMobile: "(max-width: 1200px)",
  }, (context) => {
    let { isDesktop, isMobile } = context.conditions;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
      },
    });

    tl.fromTo(videoRef.current, 
      { scale: 0.3 }, 
      { scale: 1, ease: "none" }, 
      0
    )
    .fromTo(textTopRef.current, 
      { x: isMobile ? -15 : -100, opacity: 1 },
      { x: 10, opacity: 1, ease: "none" }, 
      0
    )
    .fromTo(textBottomRef.current, 
      { x: isMobile ? 15 : 100, opacity: 1 },
      { x: -10, opacity: 1, ease: "none" }, 
      0
    );
  });

  return () => mm.revert(); 
}, []);


  return (
    <section ref={sectionRef} className="zoom-section">
      <div className="container bg-text-container">
        <h1 ref={textTopRef} className="bg-text top-text">INERTIA</h1>
        <h1 ref={textBottomRef} className="bg-text bottom-text">STUDIOS</h1>
      </div>

      <div className="container bg-stick-text-container">
        <p className="bg-stick-text">A Creative Studio</p>
        <p className="bg-stick-text">Based in India</p>
      </div>


      {/* Video Layer */}
      <div className="container container-zoom">
        <div className="zoom-inner">
          <video
            ref={videoRef}
            src="https://dndesigns.co.in/uploads/videos/1920-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="zoom-video"
          />
          {/*zoom-video-mobile*/}
          {/* <video
            ref={videoRef}
            src="https://download-video-ak.vimeocdn.com/v3-1/playback/2f8abaaf-816f-4772-87e3-c4c5215580c9/68ea99c9?__token__=st=1777535428~exp=1777539028~acl=%2Fv3-1%2Fplayback%2F2f8abaaf-816f-4772-87e3-c4c5215580c9%2F68ea99c9%2A~hmac=c7cc7b397e0e7250965a705d5d5ba3afa3bda44b026b307e1a0ba6c99934081e&r=dXMtY2VudHJhbDE%3D"
            autoPlay
            muted
            loop
            playsInline
            className="zoom-video-mobile"
          /> */}
        </div>
      </div>
    </section>
  );
}