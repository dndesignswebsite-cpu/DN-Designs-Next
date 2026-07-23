"use client";

import { useEffect, useRef } from "react";
import "./StrategicFrameworkFNB.css";

const phases = [
  {
    number: "01",
    label: "PHASE ONE",
    title: "Discovery & Category Audit",
    desc: "We start by understanding your product and studying competitors, shelf context, consumer behaviour, and regulatory constraints. Everything is researched and clarified before a single design concept is proposed, so each recommendation is grounded in how the market actually works. ",
    // points: [
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
      
    // ],
  },
  {
    number: "02",
    label: "PHASE TWO",
    title: "Strategy & Positioning Planning",
    desc: "Next comes a defined brand territory, not a mood board but a clear point of view on what the brand stands for, who it's for and why it deserves shelf or app space.",
    // points: [
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
    // ],
  },

    {
    number: "03",
    label: "PHASE THREE",
    title: "The Design Implementation",
    desc: "This is where design takes centre stage. Brand identity, packaging and websites are designed and developed with your vision and feedback integrated at every step. ",
    // points: [
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
    // ],
  },

    {
    number: "04",
    label: "PHASE FOUR",
    title: "Go-to-Market Planning ",
    desc: "At this stage, we build your GTM strategy: where to sell, who to sell to, as well as how to price and distribute products and acquire and retain customers. This strategy ensures your business launches strong and grows consistently across physical and digital platforms. ",
    // points: [
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
    // ],
  },

    {
    number: "05",
    label: "PHASE FIVE",
    title: "Launch & Monitoring",
    desc: "Once a brand is live, we track the response and refine messaging, packaging, or positioning if needed.  ",
    // points: [
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
    //   "COMPETITIVE LANDSCAPE MAPPING",
    // ],
  },

  
];

export default function StrategicFrameworkFNB() {
  const rowRefs = useRef([]);

  useEffect(() => {
    const FADE_ZONE = 550; 
    const STICKY_TOP = 350;

    const handleScroll = () => {
      rowRefs.current.forEach((row) => {
        if (!row) return;

        const numberCol = row.querySelector(
          ".our-stregetic-framework-col-number-div-col"
        );
        if (!numberCol) return;

        const rect = row.getBoundingClientRect();

        let opacity = 1;

        if (rect.top > STICKY_TOP) {
          opacity = 1;
        } else if (rect.bottom < STICKY_TOP + FADE_ZONE) {
          opacity = Math.max(0, (rect.bottom - STICKY_TOP) / FADE_ZONE);
        }

        numberCol.style.opacity = opacity;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="our-stregetic-framework">
      <div className="container">
        <div className="our-stregetic-framework-head-content-div">
          <p className="our-stregetic-framework-label-para">
            Our Process
          </p>
          <h2 className="our-stregetic-framework-head">
            How We Take a Brand From {" "}
            <span className="our-stregetic-framework-head-span">
              Idea to Shelf 
            </span>
          </h2>
        </div>

        {phases.map((phase, i) => {
          const isEven = i % 2 !== 0;

          const numberBlock = (
            <div
              className={`col our-stregetic-framework-col-number-div-col${
                isEven ? " our-stregetic-framework-col-number-div-col--even" : ""
              }`}
              key="number"
            >
              <div className="our-stregetic-framework-col-number-div">
                <h2 className="our-stregetic-framework-col-number">
                  {phase.number}
                </h2>
              </div>
            </div>
          );

          const contentBlock = (
            <div className="col" key="content">
              <div className="our-stregetic-framework-col-content-div">
                <p className="our-stregetic-framework-col-content-div-label-para">
                  {phase.label}
                </p>
                <h2 className="our-stregetic-framework-col-content-div-head">
                  {phase.title}
                </h2>
                <p className="our-stregetic-framework-col-content-div-desc-para">
                  {phase.desc}
                </p>
                {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                  {phase.points.map((point, idx) => (
                    <li
                      className="our-stregetic-framework-col-content-div-list-item"
                      key={idx}
                    >
                      {point}
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          );

          return (
            <div
              className="row our-stregetic-framework-row"
              key={i}
              ref={(el) => (rowRefs.current[i] = el)}
            >
              {i % 2 === 0
                ? [numberBlock, contentBlock]
                : [contentBlock, numberBlock]}
            </div>
          );
        })}
      </div>
    </section>
  );
}