"use client";

import { useEffect, useRef } from "react";
import "./BrandIdentityServiceWhyDN.css";

const items = [
  {
    src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg",
    title: "SYNERGY CLINIC",
    link: "#",
  },
  {
    src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg",
    title: "COPPELIA",
    link: "#",
  },
  {
    src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg",
    title: "PITCH PRO",
    link: "#",
  },
  {
    src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg",
    title: "NIRIN BRANDING",
    link: "#",
  },
  {
    src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg",
    title: "ART & SAVEUR",
    link: "#",
  },
  {
    src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg",
    title: "SYNERGY CLINIC",
    link: "#",
  },
  {
    src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg",
    title: "COPPELIA",
    link: "#",
  },
];

// Duplicate for infinite look
const loopItems = [...items, ...items, ...items];

export default function BrandIdentityServiceWhyDN() {

  const sectionRef = useRef(null);

  const trackRef = useRef(null);

  const cardsRef = useRef([]);

  useEffect(() => {

    const section = sectionRef.current;

    const track = trackRef.current;

    if (!section || !track) return;

    // Animation code will come in Part 3

  }, []);

  return (

    <section
      ref={sectionRef}
      className="why-section"
    >

      <div className="sticky-wrap">

        <div className="scene">

          <div
            className="track"
            ref={trackRef}
          >

            {loopItems.map((item, index) => (

              <a
                href={item.link}
                key={index}
                className="card"
                ref={(el) => (cardsRef.current[index] = el)}
              >

                <img
                  src={item.src}
                  alt=""
                />

                <div className="overlay"/>

                <div className="title">

                  {item.title}

                </div>

              </a>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}