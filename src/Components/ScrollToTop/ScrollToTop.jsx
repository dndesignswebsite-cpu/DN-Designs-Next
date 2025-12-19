"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTop.css";





function ScrollToTop() {


    const [showScrollTop, setShowScrollTop] = useState(false);
    
useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Scroll to Top Button */}
            <button
              className={`scroll-to-top-btn ${showScrollTop ? "visible" : ""}`}
              onClick={scrollToTop}
              title="Scroll to Top"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
    </div>
  )
}

export default ScrollToTop
