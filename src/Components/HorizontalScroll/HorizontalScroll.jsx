"use client";
import React, { useLayoutEffect, useRef } from "react";
import "./HorizontalScroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// horizontal scroll
  const slidesData = [
    { title: "The Bobalist", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/14.jpg',
       para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water "
     
     },
    { title: "Grin Care", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/11h.jpg',
       para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water "
     
     },
    { title: "Nature's Balance", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/12.jpg',
       para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water "
     
     },
    { title: "Nectarpure", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg',
      para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water "
     },
];






const panelContent = [
  {
    heading: "Project One",
    paragraph: "This is the description for the first project panel. Scroll to see more.",
    cls: "firstAn"
  },
  {
    heading: "Project Two",
    paragraph: "Here is the summary of the second exciting project. This uses the same animation class.",
    cls: "firstAn"
  },
  {
    heading: "Project Three (Animated)",
    paragraph: "The third panel features an extra scale-up animation because it has the 'secondAn' class.",
    cls: "secondAn"
  },
  {
    heading: "Project Four (No Animation)",
    paragraph: "This is the final panel. It does not have the extra fade/scale animation, just the horizontal scroll.",
    cls: "" 
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
        {/* <h2 className="portfolio_title text-stroke parallax">Portfolio</h2> */}

        
{/*         {panelContent.map((item, i) => (
          <div className="hrpanel" key={i}>
            <div className="hrpanel_item">
                <div className={`text-content ${item.cls}`}>
                    <h1 style={{ fontSize: '3rem', color: '#fff' }}>{item.heading}</h1>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '80%' }}>{item.paragraph}</p>
                </div>
            </div>
          </div>
        ))} */}


  {slidesData.map((item, i) => (
          <div className="hrpanel" key={i}>
            <div className="hrpanel_item">

             <div className="hr-branding-that-div">
             <div className="horizonatl-scroll-all-content">
                <img src={item.img} className="img-fluid"/>
                 <div className="hr-brand-that-overlay">
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