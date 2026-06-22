"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./AboutUsZoomSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsZoomSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);


  // responsiveness for video 
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  check();
  window.addEventListener("resize", check);

  return () => window.removeEventListener("resize", check);
}, []);
// end

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
        <h1 ref={textTopRef} className="bg-text top-text">DN</h1>
        <h1 ref={textBottomRef} className="bg-text bottom-text">DESIGNS</h1>
      </div>

      <div className="container bg-stick-text-container">
        <p className="bg-stick-text">You Envision It. <br></br>We Design It</p>
        <p className="bg-stick-text">The World <br></br>Experiences It.</p>
      </div>


      {/* Video Layer */}
      <div className="container container-zoom">
        <div className="zoom-inner">
  {isMobile ? (
    <video
      ref={videoRef}
      src="https://dndesigns.co.in/uploads/videos/aboutmobilevideoIMG_1884_1.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="zoom-video"
    />
  ) : (
    <video
      ref={videoRef}
      src="https://dndesigns.co.in/uploads/videos/aboutusfinalvideo3 (1).mp4"
      autoPlay
      muted
      loop
      playsInline
      className="zoom-video"
    />
  )}
</div>
      </div>
    </section>
  );
}