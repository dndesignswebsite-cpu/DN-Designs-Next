"use client";
import React, { useLayoutEffect, useRef } from "react";
import "./HorizontalScroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// horizontal scroll data
  const slidesData = [
    { title: "The Bobalist", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/14.jpg',
       para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water ",
       btn1:"UI/UX Design", btn2:"Packaging Design", btn3:"Catalouge Design"
     
     },
    { title: "Grin Care", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/11h.jpg',
       para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water ",
       btn1:"UI/UX Design", btn2:"Packaging Design", btn3:"Catalouge Design"
     
     },
    { title: "Nature's Balance", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/12.jpg',
       para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water ",
       btn1:"UI/UX Design", btn2:"Packaging Design", btn3:"Catalouge Design"
     
     },
    { title: "Nectarpure", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg',
      para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water ",
      btn1:"UI/UX Design", btn2:"Packaging Design", btn3:"Catalouge Design"
     },
];


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
        
            // end: () => container.scrollWidth - document.documentElement.clientWidth
            end: () => "+=" + (container.scrollWidth - window.innerWidth)

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
  {slidesData.map((item, i) => (
          <div className="hrpanel" key={i}>
            <div className="hrpanel_item">

             <div className="hr-branding-that-div">
             <div className="horizonatl-scroll-all-content">
                <img src={item.img} className="img-fluid"/>
                <div className="overlay-data">

                
                <div className="overlay-content-pure">
                   <h2>{item.title}</h2>
                   <button>{item.btn1}</button>
                   <button>{item.btn2}</button>
                   <button>{item.btn3}</button>
                   <p>{item.para}</p>
                 </div>
                  
                 </div>
                    </div>
                </div>
                

            </div>
          </div>
        ))} 


      </section>
      <div className="hrspacer"></div>
    </>
  );
} 





{/* <div className="hr-brand-that-overlay">
                        <div className="hr-our-brand-that-content">
                            <h3>{slidesData.title}</h3>
                            <div className="hr-brand-that-buttons">
                                <button>Brand Identity</button>
                                <button>UI/UX</button>
                                <button>Website</button>
                                <button>Website</button>
                            </div>
                            <p>{slidesData.para}</p>
                        </div>
                    </div> */}