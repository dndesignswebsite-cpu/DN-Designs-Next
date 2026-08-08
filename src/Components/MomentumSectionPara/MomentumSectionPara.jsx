"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MomentumSectionPara.css';

gsap.registerPlugin(ScrollTrigger);

const MomentumSectionPara = ({
  children,
  className = "",
  as: Tag = 'h2',
  triggerSelector = null,
  start = 'top 85%',
  end = 'bottom 10%',
}) => {
  const textRef = useRef(null);

  const extractText = (node) => {
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join(' ');
    if (React.isValidElement(node) && node.props.children) {
      return extractText(node.props.children);
    }
    return '';
  };

  const rawText = extractText(children).trim();

  useEffect(() => {
    if (!textRef.current) return;

    let ctx;
    let cancelled = false;

    const charContainers = textRef.current.querySelectorAll('.char-wrapper .char-inner');
    if (!charContainers.length) return;

    const triggerEl = triggerSelector
      ? document.querySelector(triggerSelector)
      : textRef.current;

    // Wait for fonts to finish loading before measuring/animating.
    // Font-swap changes line-wrapping and character positions — if
    // ScrollTrigger calculates start/end BEFORE fonts settle, the numbers
    // are wrong and you get the patchy reload glitch.
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

    fontsReady.then(() => {
      if (cancelled || !textRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          charContainers,
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.3,
            stagger: 0.009,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: triggerEl || textRef.current,
              start,
              end,
              toggleActions: 'play reverse play reverse',
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // extra safety refresh after everything (images) is fully loaded
      ScrollTrigger.refresh();
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', refresh);
    });

    return () => {
      cancelled = true;
      window.removeEventListener('load', refresh);
      imgs.forEach((img) => img.removeEventListener('load', refresh));
      if (ctx) ctx.revert();
    };
  }, [children, rawText, triggerSelector, start, end]);

  const splitText = rawText.split(/\s+/).map((word, wordIndex, array) => (
    <React.Fragment key={wordIndex}>
      <span className="word-group">
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className="char-wrapper">
            <span className="char-inner">{char}</span>
          </span>
        ))}
      </span>
      {wordIndex < array.length - 1 && <span className="space-wrapper">&nbsp;</span>}
    </React.Fragment>
  ));

  return (
    <Tag className={`animated-text-on-scroll ${className}`} ref={textRef}>
      {splitText}
    </Tag>
  );
};

export default MomentumSectionPara;