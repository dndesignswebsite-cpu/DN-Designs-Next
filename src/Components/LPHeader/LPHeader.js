"use client";

import React, { useState } from "react";
import "./LPHeader.css";
import Image from "next/image";
import { getLenis } from "@/Components/SmoothScroll";

function LPHeader() {

  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id) => {
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(`#${id}`);
  }
};

  return (
    <>
      <header>

        <div className="container">

          {/* Desktop Header */}

          <div className="row navlink-row-desktop">

            <div className="col-2">
              <div className="head-brand-logo-div">
                <Image
                  src="https://dndesigns.co.in/uploads/pages/dn-logo.png"
                  alt="DN Designs Logo"
                  width={250}
                  height={250}
                  priority
                  className="head-brand-logo"
                />
              </div>
            </div>

            <div className="col-10">

              <div className="navlinks-div">

                <ul className="navlinks-list-ul">

                  <li>
                    <a href="#services" className="navlink-anchor-tag">
                      Services
                    </a>
                  </li>

                  <li>
                    <a href="#our-work" className="navlink-anchor-tag">
                      Our Work
                    </a>
                  </li>

                  <li>
                    <a href="#testimonials" className="navlink-anchor-tag">
                      Testimonials
                    </a>
                  </li>

                  <li>
                    <a href="#faq" className="navlink-anchor-tag">
                      FAQ
                    </a>
                  </li>

                </ul>

              </div>

            </div>

            {/* <div className="col-2">

              <div className="lets-connect-cta-div">
                <button className="lets-connect-cta-btn">
                  Lets Connect
                </button>
              </div>

            </div> */}

          </div>

          {/* Mobile Header */}

          <div className="row navlink-row-mobile">

            <div className="col-6">

              <div className="head-brand-logo-div">

                <Image
                  src="https://dndesigns.co.in/uploads/pages/dn-logo.png"
                  alt="DN Designs Logo"
                  width={250}
                  height={250}
                  priority
                  className="head-brand-logo"
                />

              </div>

            </div>

            <div className="col-6">

              {/* <div
  className={`mobile-navbar-bar ${menuOpen ? "hide-hamburger" : ""}`}
  onClick={() => setMenuOpen(true)}
>

                <span className="navbar-bar-line"></span>
                <span className="navbar-bar-line"></span>
                <span className="navbar-bar-line"></span>

              </div> */}


              <div className="lets-connect-cta-div">
              <a href="tel:+919876543210">
                <button className="lets-connect-cta-btn">
                  Lets Connect
                </button>
                </a>
              </div>
              
            </div>

          </div>

        </div>

      </header>

      {/* Overlay */}

      {/* <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div> */}

      {/* Close Button */}

      {/* <button
        className={`close-btn ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        ✕
      </button> */}

      {/* Mobile Drawer */}

      {/* <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <ul>

          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>

          <li>
            <a href="#our-work" onClick={() => setMenuOpen(false)}>
              Our Work
            </a>
          </li>

          <li>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
          </li>

          <li>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </li>

          <li className="menu-btn">

            <button className="lets-connect-cta-btn">
              Lets Connect
            </button>

          </li>

        </ul>

      </div> */}

    </>
  );
}

export default LPHeader;