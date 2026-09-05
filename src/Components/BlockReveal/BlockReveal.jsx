// "use client"

// import React, { useEffect, useRef, useState } from 'react';
// import './BlockReveal.css';

// const BlockReveal = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const blockRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
       
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     if (blockRef.current) {
//       observer.observe(blockRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <span ref={blockRef} className={`block-reveal ${isVisible ? 'active' : ''}`}>
//       <span className="block-reveal-content">{children}</span>
//     </span>
//   );
// };

// export default BlockReveal;



"use client";

import React, { useEffect, useRef, useState } from "react";
import "./BlockReveal.css";

const BlockReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const element = blockRef.current;

    if (!element) return;

    // Mobile:
    // No IntersectionObserver or animation.
    if (window.matchMedia("(max-width: 767px)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span
      ref={blockRef}
      className={`block-reveal ${isVisible ? "active" : ""}`}
    >
      <span className="block-reveal-content">
        {children}
      </span>
    </span>
  );
};

export default BlockReveal;