"use client";
import React, { useLayoutEffect, useRef } from "react";
import "./HorizontalScroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// horizontal scroll data
const slidesData = [
  {
    title: "RITHM'S ENLITE",
    img: "https://dndesigns.co.in/uploads/pages/enlite.webp",
    para: "For Rithm’s Enlite, a brand with sparkling mineral water and prebiotic drink range, we designed a thoughtful and eye-catching brand identity, including can design, logo design and character design. We created the character and the overall brand design around the brand name to promote the refreshing and calming properties of the product.",
    btn1: "Brand Identity",
    btn2: "Packaging Design",
    btn3: "Communication Design",
  },
  {
    title: "Grin Care",
    img: "https://dndesigns.co.in/uploads/pages/13.webp",
    para: "Grincare aspired to establish itself in the highly competitive oral care market. As a brand marketing agency, we worked to build their identity and a strong digital presence. We crafted their identity, designed their UI/UX and developed their website to establish them as a business offering premium oral care solutions.",
    btn1: "Brand Identity",
    btn2: "Packaging Design",
    btn3: "UI/UX Design",
  },
  {
    title: "Nature's Balance",
    img: "https://dndesigns.co.in/uploads/pages/nature-balance-case-study.webp",
    para: "An upscale health-focussed cafe, Nature’s Balance approached us with the purpose of building its brand presence. We worked to create their identity & label design. In addition, as a creative design agency, we also provided them with menu design, 3D Ad design, as well as environment design services.",
    btn1: "Brand Identity",
    btn2: "Environment Design",
    btn3: "Label Design",
  },
  {
    title: "Nectarpure",
    img: "https://dndesigns.co.in/uploads/pages/nectarpure-3.webp",
    para: "NECTARPURE, providing Whey protein and wellness products, wanted to establish itself as a premium lifestyle brand in the protein market. As a brand marketing agency, we created their identity, label design and 3D Ad to give a premium feel. In addition, we also designed and developed their UI/UX and complete website.",
    btn1: "Brand Identity",
    btn2: "Label Design",
    btn3: "UI/UX Design",
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

      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () =>
            "+=" + (container.scrollWidth - window.innerWidth),
        },
      }).to(panels, {
        x: () =>
          -(container.scrollWidth - window.innerWidth),
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
                <div className="horizonatl-scroll-all-content">
                  <img src={item.img} className="img-fluid" />
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


