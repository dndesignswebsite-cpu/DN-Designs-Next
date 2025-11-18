"use client";
import React, { useLayoutEffect, useRef } from "react";
import "./HorizontalScroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function HorizontalScroll() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let container = containerRef.current;
    let ctx;
    let handleResize;
    

    const setupAnimations = () => {
      
      if (ctx) {
        ctx.revert();
      }
      
      ctx = gsap.context(() => {
        
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
        
            end: () => container.scrollWidth - document.documentElement.clientWidth
          },
          defaults: { ease: "none", duration: 1 }
        });

        tl.to(".parallax", { x: 300 })
          .to(
            ".hrpanel",
            {
              x: () =>
               
                -(container.scrollWidth - document.documentElement.clientWidth)
            },
            0
          )
          .from(
            ".secondAn",
            {
              opacity: 0,
              scale: 0.5,
              duration: 0.2,
              stagger: { amount: 0.8 }
            },
            0
          );

        
        gsap.from(".firstAn", {
          duration: 1,
          opacity: 0,
          scale: 0.5,
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        });

      }, container); 

      
      ScrollTrigger.refresh();
    };

    
    setupAnimations();

    
    handleResize = () => {
      
      setupAnimations();
    };
    
    
    window.addEventListener("resize", handleResize);

    return () => {
      
      window.removeEventListener("resize", handleResize);
      if (ctx) {
        ctx.revert();
      }
    };
  }, []); 

  
  return (
    <>
      <div className="hrspacer"></div>

      <section className="section-hori hrportfolio" ref={containerRef}>
       

        {["firstAn", "firstAn", "secondAn", ""].map((cls, i) => (
          <div className="hrpanel" key={i}>
            <div className="hrpanel_item">
              <img
                className={`hrpanel_img ${cls} img-fluid`}
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                alt=""
              />
            </div>
          </div>
        ))}
      </section>

      <div className="hrspacer"></div>
    </>
  );
}