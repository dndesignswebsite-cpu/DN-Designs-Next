"use client"

import React, { useEffect, useRef, useState } from 'react';
import './BlockReveal.css';

const BlockReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
       
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={blockRef} className={`block-reveal ${isVisible ? 'active' : ''}`}>
      <span className="block-reveal-content">{children}</span>
    </span>
  );
};

export default BlockReveal;