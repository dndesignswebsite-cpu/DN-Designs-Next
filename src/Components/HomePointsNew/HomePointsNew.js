"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./HomePointsNew.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const POINTS_DATA = [
  {
    number: "01",
    title: "Branding",

    headline: "Building Brands, End-to-End",

    description:
      "It’s a significant challenge to create a space for your product in the market. It requires strategic thinking, creative skills and a relentless pursuit of goals. Worried? Don’t be, for we are here. We provide end-to-end branding services.",

    includes: [
      "Our Branding Service Suite",
      "Brand Strategy",
      "Brand Positioning",
      "Brand Identity Design",
      "Packaging Design",
      "Rebranding",
    ],

    url:[
        "/brand-strategy",
        "/brand-positioning",
        "/brand-identity-design-services",
        "/packaging-design",
        "/rebranding",
    ],

    image: "https://dndesigns.co.in/uploads/pages/homepagepointsnewpointsimagebranding.jpg.jpeg",
  },

  {
    number: "02",
    title: "Communication Strategy",

    headline: "Connecting Brands With Audiences",

    description:
      "Your brand needs to communicate in a way that resonates with your target audience and makes you memorable. We build a communication frameworks that do exactly that. Contact us and let our experts devise a communication strategy for you.",

    includes: [
      "Our Brand Communication Services",
      "Digital Marketing",
      "Social Media Marketing",
      "Influencer Marketing",
      "Photography",
      "Animation",
    ],

     url:[
        "/digital-marketing-agency-in-noida",
         "/social-media-marketing",
        "/influencer-marketing",
        "/photography",
        "/animation",
    ],

    image: "https://dndesigns.co.in/uploads/pages/homepagenewpoinstsimagecommunication.jpg.jpeg",
  },

  {
    number: "03",
    title: "Web Design",

    headline: "Designing Better Digital Experiences",

    description:
      "To establish your online presence, a visually appealing, SEO optimised and user-friendly website is essential. It boosts your brand image and generates business. We excel in designing, developing and promoting such websites. ",

    includes: [
      "Our Digital Design & Growth Services",
      "UI/UX Design",
      "Web Designing",
      "SEO",
    ],

     url:[
        "/ui-ux-design",
        "/web-designing-services-in-india",
        "/seo-marketing-agency-in-noida",
    ],

    image: "https://dndesigns.co.in/uploads/pages/homepagenewpouinyswebsiteimageweb.jpg.jpeg",
  },
];

function HomePointsNew() {
  const sectionRef = useRef(null);

  const cardRefs = useRef([]);

  const addCardRef = (element) => {
    if (element && !cardRefs.current.includes(element)) {
      cardRefs.current.push(element);
    }
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current;

      cards.forEach((card, index) => {
        if (index === cards.length - 1) {
          return;
        }

        const nextCard = cards[index + 1];

        gsap.fromTo(
          card,

          {
            y: 0,
          },

          {
            y: 300,

            ease: "none",

            scrollTrigger: {
              trigger: nextCard,

              start: "top bottom",

              end: "top top",

              scrub: true,

              invalidateOnRefresh: true,
            },
          },
        );
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      const images = section.querySelectorAll("img");

      images.forEach((image) => {
        if (!image.complete) {
          image.addEventListener(
            "load",
            () => {
              ScrollTrigger.refresh();
            },
            {
              once: true,
            },
          );
        }
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  /* 
     JSX
  */

  return (
    <section ref={sectionRef} className="home-page-points-new container">
      {POINTS_DATA.map((point, index) => (
        <div
          key={index}
          ref={addCardRef}
          className={`home-page-points-new-card home-page-points-new-card-${index + 1}`}
        >
          <div className="points-slide-home-page-div">
            <div className="points-slide-home-page">

              {/* wensakdj */}
              <div className="home-page-points-new-1">
                <div className="container">
                  <div className="home-page-points-new-container">
                    <div className="home-page-points-new-row row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="home-page-points-new-row-col">
                          <div className="home-page-points-new-row-col-up-div">
                            <h2 className="home-page-points-new-up-row-col-div-number">
                              {point.number}
                            </h2>
                            <h3 className="home-page-points-new-up-row-col-div-head">
                              {point.title}
                            </h3>
                          </div>
                          <div className="home-page-points-new-row-col-bottom-div">
                            <img src={point.image} className="img-fluid home-page-points-new-row-col-bottom-div-image"></img>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="home-page-points-new-row-col">
                          <div className="home-page-points-new-row-col-up-div">
                            <h2 className="home-page-new-col-head-label">
                              {point.headline}
                            </h2>
                            <p className="home-page-new-new-para-desc-col">
                              {point.description}
                            </p>
                          </div>
                          <div className="home-page-points-new-row-col-bottom-div">

                            <p className="home-page-points-new-bottom-col-content-para-label">
                              {point.includes[0]}
                            </p>

                            {point.includes[1] ? (
                            <Link href={`${point.url[0]}`}> 
                              <p className="home-page-new-points-underline-para home-page-new-points-underline-para-bottom">
                              {point.includes[1]}
                            </p>
                            </Link>
                                 ):null}

                           {point.includes[2] ? (
                            <Link href={`${point.url[1]}`}> 
                               <p className="home-page-new-points-underline-para home-page-new-points-underline-para-bottom">
                              {point.includes[2]}
                            </p>
                            </Link>
                                 ):null}

                            {point.includes[3] ? (
                              <Link href={`${point.url[2]}`}> 
                               <p className="home-page-new-points-underline-para home-page-new-points-underline-para-bottom">
                              {point.includes[3]}
                            </p>
                            </Link>
                                 ):null}

                               {point.includes[4] ? (
                                  <Link href={`${point.url[3]}`}> 
                               <p className="home-page-new-points-underline-para home-page-new-points-underline-para-bottom">
                              {point.includes[4]}
                            </p>
                            </Link>
                                 ):null}


                                 {point.includes[5] ? (
                                  <Link href={`${point.url[4]}`}> 
                               <p className="home-page-new-points-underline-para home-page-new-points-underline-para-bottom">
                              {point.includes[5]}
                            </p>
                            </Link>
                                 ):null}

                           

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* whjsbad */}

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HomePointsNew;
