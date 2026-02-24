"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTop.css";

import { getLenis } from "@/Components/SmoothScroll";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {

  const [show, setShow] = useState(false);
  const pathname = usePathname();

  // Show / hide button
  useEffect(() => {

    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  // Auto scroll on route change
  useEffect(() => {

    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

  }, [pathname]);

  // Button click
  const scrollToTop = () => {

    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(0, { smooth: true });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

  };

  return (
    <button
      className={`scroll-to-top-btn ${show ? "visible" : ""}`}
      onClick={scrollToTop}
      title="Scroll to Top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}