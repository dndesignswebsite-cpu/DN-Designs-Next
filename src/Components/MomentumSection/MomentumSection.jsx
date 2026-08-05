"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Momentum.css';

gsap.registerPlugin(ScrollTrigger);

const MomentumSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const rawText = "Coffee is the medium. The real product is momentum. 1 AM transforms an everyday beverage into a badge of ambition for people whose most productive hours begin when the rest of the world switches off.";

  useEffect(() => {
    const wordContainers = textRef.current.querySelectorAll('.word-wrapper .word-inner');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordContainers,
        {
          y: '110%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: 0.9,
          stagger: 0.03, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 100%',
            toggleActions: 'play none none reset',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  
  const splitText = rawText.split(' ').map((word, index) => (
    <span key={index} className="word-wrapper">
      <span className="word-inner">{word}</span>
      &nbsp;
    </span>
  ));

  return (
    <section className="momentum-wrapper" ref={sectionRef}>
      <div className="container-fluid-custom text-center">
        <h2 className="animated-text-on-scroll" ref={textRef}>
          {splitText}
        </h2>
      </div>
    </section>
  );
};

export default MomentumSection;