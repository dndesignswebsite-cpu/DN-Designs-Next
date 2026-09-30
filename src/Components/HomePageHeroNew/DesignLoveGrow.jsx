"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./DesignLoveGrow.css";

export default function DesignLoveGrow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const words = container.querySelectorAll(".animated-word");

    gsap.set(words, {
      opacity: 0,
    });

    words.forEach((word) => {
      const letters = word.querySelectorAll(".letter");

      gsap.set(letters, {
        opacity: 0,
        y: 30,
        rotateX: -60,
        scale: 0.8,
      });
    });

    const timeline = gsap.timeline({
      repeat: -1,
    });

    words.forEach((word) => {
      const letters = word.querySelectorAll(".letter");

      timeline.set(word, {
        opacity: 1,
      });

      timeline.to(letters, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.08,
        ease: "back.out(1.7)",
      });

      timeline.to({}, {
        duration: 1,
      });

      timeline.to(letters, {
        opacity: 0,
        y: -30,
        rotateX: 60,
        scale: 0.8,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.in",
      });

      timeline.set(word, {
        opacity: 0,
      });

      timeline.set(letters, {
        y: 30,
        rotateX: -60,
      });
    });

    return () => timeline.kill();
  }, []);

  return (
    <span ref={containerRef} className="design-love-grow">
      <span className="animated-word">
        {"DESIGN".split("").map((letter, index) => (
          <span className="letter" key={index}>
            {letter}
          </span>
        ))}
      </span>

      <span className="animated-word">
        {"LOVE".split("").map((letter, index) => (
          <span className="letter" key={index}>
            {letter}
          </span>
        ))}
      </span>

      <span className="animated-word">
        {"GROW".split("").map((letter, index) => (
          <span className="letter" key={index}>
            {letter}
          </span>
        ))}
      </span>

      <span className="animated-word">
        {"Packging".split("").map((letter, index) => (
          <span className="letter" key={index}>
            {letter}
          </span>
        ))}
      </span>

      <span className="animated-word">
        {"Branding".split("").map((letter, index) => (
          <span className="letter" key={index}>
            {letter}
          </span>
        ))}
      </span>

      <span className="animated-word">
        {"WEBSITE".split("").map((letter, index) => (
          <span className="letter" key={index}>
            {letter}
          </span>
        ))}
      </span>

      <span className="animated-word">
        {"UI/UX".split("").map((letter, index) => (
          <span className="letter" key={index}>
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
}