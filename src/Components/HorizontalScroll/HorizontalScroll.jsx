"use client";
import React, { useLayoutEffect, useRef } from "react";
import "./HorizontalScroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// horizontal scroll data
const slidesData = [
  {
    title: "Rithm's Enlite",
    img: "https://dndesigns.co.in/uploads/pages/enlite.webp",
    type: "image",
    para: "For Rithm’s Enlite, a brand with sparkling mineral water and prebiotic drink range, we designed a thoughtful and eye-catching brand identity, including can design, logo design and character design. We created the character and the overall brand design around the brand name to promote the refreshing and calming properties of the product.",
    btn1: "Brand Identity",
    btn2: "Packaging Design",
    btn3: "Communication Design",
    link: "/enlite-case-study",
  },

  {
    title: "Let's Supp",
    img: "https://dndesigns.co.in/uploads/pages/hero44.jpg",
    type: "image",
    para: "For the nutraceutical brand Let’s Supp, we designed a structured packaging system with intuitive information hierarchy, abstract infinity-led composition, and transparent containers - creating clarity, reinforcing purity, and delivering a calm, credible, effortless product experience.",
    btn1: "Brand Identity",
    btn2: "Packaging Design",
    btn3: "UI/UX Design",
    link: "/letssupp-case-study",
  },

  {
    title: "Wlue's",
    video: "https://dndesigns.co.in/uploads/videos/GIF_1_1.mp4",
    type: "video",
    para: "Makhana brand Wlue’s approached us to launch and promote its product in the market. Their target audience was the youth worldwide. We created its logo and packaging design. In its packaging, we adopted a retro approach with a superhero vibe, while through its logo (with a star integrated in it), we established that the product is meant for winners.",
    btn1: "Brand Identity",
    btn2: "Packaging Design",
    btn3: "UI/UX Design",
    link: "/wlues-case-study",
  },
  {
    title: "Nectarpure",
    img: "https://dndesigns.co.in/uploads/pages/nectarpure-3.webp",
    type: "image",
    para: "NECTARPURE, providing Whey protein and wellness products, wanted to establish itself as a premium lifestyle brand in the protein market. As a brand marketing agency, we created their identity, label design and 3D Ad to give a premium feel. In addition, we also designed and developed their UI/UX and complete website.",
    btn1: "Brand Identity",
    btn2: "Label Design",
    btn3: "UI/UX Design",
    link: "/nectarpure-case-study",
  },
  {
    title: "Grin Care",
    img: "https://dndesigns.co.in/uploads/pages/13.webp",
    type: "image",
    para: "Grincare aspired to establish itself in the highly competitive oral care market. As a brand marketing agency, we worked to build their identity and a strong digital presence. We crafted their identity, designed their UI/UX and developed their website to establish them as a business offering premium oral care solutions.",
    btn1: "Brand Identity",
    btn2: "Packaging Design",
    btn3: "UI/UX Design",
    link: "/grincare-case-study",
  },
  
  
];

export default function HorizontalScroll() {
  const containerRef = useRef(null);

  // useLayoutEffect(() => {
  //   let container = containerRef.current;
  //   let ctx;
  //   let handleResize;

  //   const setupAnimations = () => {
  //     if (ctx) {
  //       ctx.revert();
  //     }

  //     ctx = gsap.context(() => {
  //       let tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: container,
  //           pin: true,
  //           scrub: 1,

  //           // end: () => container.scrollWidth - document.documentElement.clientWidth
  //           end: () => "+=" + (container.scrollWidth - window.innerWidth),
  //         },
  //         defaults: { ease: "none", duration: 1 },
  //       });

  //       tl.to(".parallax", { x: 300 })
  //         .to(
  //           ".hrpanel",
  //           {
  //             x: () =>
  //               -(container.scrollWidth - document.documentElement.clientWidth),
  //           },
  //           0,
  //         )
  //         .from(
  //           ".secondAn",
  //           {
  //             opacity: 0,
  //             scale: 0.5,
  //             duration: 0.2,
  //             stagger: { amount: 0.8 },
  //           },
  //           0,
  //         );

  //       gsap.from(".firstAn", {
  //         duration: 1,
  //         opacity: 0,
  //         scale: 0.5,
  //         scrollTrigger: {
  //           trigger: container,
  //           start: "top 90%",
  //           end: "bottom 10%",
  //           toggleActions: "play none none reverse",
  //         },
  //       });
  //     }, container);

  //     ScrollTrigger.refresh();
  //   };

  //   setupAnimations();

  //   handleResize = () => {
  //     setupAnimations();
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     if (ctx) {
  //       ctx.revert();
  //     }
  //   };
  // }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ctx;

    const setup = () => {
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        const panels = gsap.utils.toArray(".hrpanel");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              end: () => "+=" + (container.scrollWidth - window.innerWidth),
            },
          })
          .to(panels, {
            x: () => -(container.scrollWidth - window.innerWidth),
            ease: "none",
          });
      }, container);

      ScrollTrigger.refresh();
    };

    setup();
    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
      ctx && ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="hrspacer"></div>     {" "}
      <section className="section-hori hrportfolio" ref={containerRef}>
         {" "}
        {slidesData.map((item, i) => (
          <div className="hrpanel" key={i}>
                       {" "}

            
            <div className="hrpanel_item">
            
              <div className="hr-branding-that-div">
              <Link href={item.link} className="panel-link">
                <div className="horizonatl-scroll-all-content">
                  {/* <img src={item.img} className="img-fluid" /> */}
                  {item.type === "video" ? (
                    <video
                      src={item.video}
                      className="img-fluid horizontal-scroll-video"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img src={item.img} className="img-fluid" />
                  )}
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
                </Link>
                
              </div>
              
              

                         {" "}
            </div>
            


                     {" "}
          </div>
        ))}
             {" "}
      </section>
            <div className="hrspacer"></div>
    </>
  );
}
