"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; 
import styles from "./Header.module.css"

const TRANSITION_DURATION = 1000;

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleNav = () => {
    if (isAnimating) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflowY = "auto";
      }, TRANSITION_DURATION);
    } else {
      setIsVisible(true);
      document.body.style.overflowY = "hidden";
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    }
  };

  const toggleSubMenu = (menuId) => {
    setOpenSubmenu(openSubmenu === menuId ? null : menuId);
  };

  const handleLinkClick = () => {
    if (isAnimating) {
      toggleNav();
      setOpenSubmenu(null);
    }
  };

  const handleSubmenuParentClick = (e, menuId) => {
    if (e.target.tagName !== "A" && e.target.closest("A") === null) {
      toggleSubMenu(menuId);
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div>
      <header className={`${styles['header']} container`}>
        <div className={`${styles['logo']}`}>
          <Link href="/">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2019/02/cropped-dn_new-logolines.png"
              alt="DN Designs Logo"
            />
          </Link>
        </div>

        <button
         className={`${styles['nav-toggle-btn']} ${isAnimating ? styles['is-active'] : ''}`}
          onClick={toggleNav}
          aria-label="Toggle Navigation"
          aria-expanded={isAnimating}
        >
          <span className={`${styles['toggle-icon']}`}></span>
        </button>
      </header>

      <nav
        // className={`full-screen-nav ${isAnimating ? "is-open" : ""}`}
        className={`${styles['full-screen-nav']} ${isAnimating ? styles['is-open'] : ''}`}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <div className="container">
          <div className={`${styles['nav-content-wrapper']}`}>
            <ul className={`${styles['nav-main-links']}`}>
              <li>
                <Link href="/" onClick={handleLinkClick}>Home</Link>
              </li>
              <li>
                <Link href="/about" onClick={handleLinkClick}>About Us</Link>
              </li>
              <li>
                <Link href="/contact-us" onClick={handleLinkClick}>Contact</Link>
              </li>
              <li>
                <Link href="/services" onClick={handleLinkClick}>Services</Link>
              </li>
              <li>
                <Link href="/branding" onClick={handleLinkClick}>Branding</Link>
              </li>
              <li>
                <Link href="/logo-designing" onClick={handleLinkClick}>
                  Logo Designing
                </Link>
              </li>
              <li>
                <Link href="/packaging-design" onClick={handleLinkClick}>
                  Packaging Design
                </Link>
              </li>
              <li>
                <Link href="/catalogue-designing" onClick={handleLinkClick}>
                  Catalogue Designing
                </Link>
              </li>
              <li>
                <Link href="/brand-name-suggestion" onClick={handleLinkClick}>
                  Brand Name Suggestion
                </Link>
              </li>
              <li>
                <Link href="/animation" onClick={handleLinkClick}>
                  Animation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
