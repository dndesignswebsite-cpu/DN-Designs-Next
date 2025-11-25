"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

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
      <header className={`${styles["header"]} container`}>
        <div className={`${styles["logo"]}`}>
          <Link href="/" onClick={handleLinkClick}>
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2019/02/cropped-dn_new-logolines.png"
              alt="DN Designs Logo"
            />
          </Link>
        </div>

        <button
          className={`${styles["nav-toggle-btn"]} ${
            isAnimating ? styles["is-active"] : ""
          }`}
          onClick={toggleNav}
          aria-label="Toggle Navigation"
          aria-expanded={isAnimating}
        >
          <span className={`${styles["toggle-icon"]}`}></span>
        </button>
      </header>

      {/* <nav
        // className={`full-screen-nav ${isAnimating ? "is-open" : ""}`}
        className={`${styles["full-screen-nav"]} ${
          isAnimating ? styles["is-open"] : ""
        }`}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <div className="container">
          <div className={`${styles["nav-content-wrapper"]}`}>
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className={`${styles["header-content"]}`}>
                  <h2>DN Designs</h2>
                  <p>
                    C-40, Second Floor, Block C, Sector 58, Noida,
                    <br /> Uttar Pradesh 201301 info@dndesigns.co.in <br />
                    +91 941 601 1100
                    <br />
                    +91 720 660 5872
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-2"></div>

              <div className="col-12 col-lg-5 ">
                <div className={`${styles["open-nav-btn"]}`}>
                  <button
                    className={`${styles["nav-toggle-btn"]} ${
                      isAnimating ? styles["is-active"] : ""
                    }`}
                    onClick={toggleNav}
                    aria-label="Toggle Navigation"
                    aria-expanded={isAnimating}
                  >
                    <span className={`${styles["toggle-icon"]}`}></span>
                  </button>
                </div>

                <div className={`${styles["all-main-links"]}`}>
                  <ul className={`${styles["nav-main-links"]}`}>
                    <li>
                      <Link
                        href="/"
                        onClick={handleLinkClick}
                        className="text-dark text-decoration-none"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={handleLinkClick}
                        className="text-dark text-decoration-none"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        onClick={handleLinkClick}
                        className="text-dark text-decoration-none"
                      >
                        Services
                      </Link>
                    </li>

                    <hr />

                    <li className={`${styles["dropdown-link"]}`}>
                      <span className="text-dark text-decoration-none">
                        Branding Identity
                      </span>
                      <FontAwesomeIcon icon={faChevronDown} />
                      <div className={`${styles["dropdown"]}`}>
                        <ul>
                          <li>
                            <Link
                              href="/branding"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Branding
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/logo-designing"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Logo Designing
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/catalogue-designing"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Catalogue Designing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/brand-name-suggestion"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Brand Name Suggestion
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <Link
                        href="/packaging-design"
                        onClick={handleLinkClick}
                        className="text-dark text-decoration-none"
                      >
                        Packaging Design
                      </Link>
                    </li>

                    <li className={`${styles["dropdown-link"]}`}>
                      Communication
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="drop-down-icon"
                      />
                      <div className={`${styles["dropdown"]}`}>
                        <ul>
                          <li>
                            <Link
                              href="/animation"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Animation
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/digital-marketing-agency-in-noida"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/influencer-marketing"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Influencer Marketing
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/social-media-marketing"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Social Media Marketing
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className={`${styles["dropdown-link"]}`}>
                      <span className="text-dark text-decoration-none">
                        Web Designing
                      </span>
                      <FontAwesomeIcon icon={faChevronDown} />
                      <div className={`${styles["dropdown"]}`}>
                        <ul>
                          <li>
                            <Link
                              href="/web-designing-services-in-india"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Web Designing
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/ui-ux-design"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              Ui/Ux Design
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/seo-marketing-agency-in-noida"
                              onClick={handleLinkClick}
                              className={`${styles["sub-menu-link"]}`}
                            >
                              SEO
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <hr />

                    <li>
                      <Link
                        href="/contact-us"
                        onClick={handleLinkClick}
                        className="text-dark text-decoration-none"
                      >
                        Contact
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/photography"
                        onClick={handleLinkClick}
                        className="text-dark text-decoration-none"
                      >
                        Photography
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/blog"
                        onClick={handleLinkClick}
                        className="text-dark text-decoration-none"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <nav
        className={`${styles["full-screen-nav"]} ${
          isAnimating ? styles["is-open"] : ""
        }`}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <div className="container">
          <div className={`${styles["nav-content-wrapper"]}`}>
            <div className="row">
              <div className={`${styles["open-nav-col"]} col-12`}>
                <div className={`${styles["open-nav-btn"]}`}>
                  <button
                    className={`${styles["nav-toggle-btn"]} ${
                      isAnimating ? styles["is-active"] : ""
                    }`}
                    onClick={toggleNav}
                    aria-label="Toggle Navigation"
                    aria-expanded={isAnimating}
                  >
                    <span className={`${styles["toggle-icon"]}`}></span>
                  </button>
                </div>
              </div>
            </div>

            <div className={`${styles["links-cols"]} row`}>
              <div className="col">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="px-2 mb-1"
                    style={{ fontSize: "1.6em" }}
                  />
                  <h3 className={`${styles["header-solo-heading"]}`}>
                    Main Links
                  </h3>
                </div>
                <ul className={`${styles["nav-main-links"]}`}>
                  <li>
                    <Link
                      href="/"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="px-2 mb-1"
                    style={{ fontSize: "1.6em" }}
                  />
                  <h3 className={`${styles["header-solo-heading"]}`}>
                    Brand Identity
                  </h3>
                </div>
                <ul className={`${styles["nav-main-links"]}`}>
                  <li>
                    <Link
                      href="/branding"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/logo-designing"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Logo Designing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/catalogue-designing"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Catalogue Designing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/brand-name-suggestion"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Brand Name Suggestion
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="px-2 mb-1"
                    style={{ fontSize: "1.6em" }}
                  />
                  <h3 className={`${styles["header-solo-heading"]}`}>
                    Communication Strategy
                  </h3>
                </div>
                <ul className={`${styles["nav-main-links"]}`}>
                  <li>
                    <Link
                      href="/animation"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Animation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/digital-marketing-agency-in-noida"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/influencer-marketing"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Influencer Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/social-media-marketing"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Social Media Marketing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="px-2 mb-1"
                    style={{ fontSize: "1.6em" }}
                  />
                  <h3 className={`${styles["header-solo-heading"]}`}>
                    Website Design
                  </h3>
                </div>
                <ul className={`${styles["nav-main-links"]}`}>
                  <li>
                    <Link
                      href="/web-designing-services-in-india"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Web Designing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ui-ux-design"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Ui/Ux Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/seo-marketing-agency-in-noida"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      SEO
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/packaging-design"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Packaging Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`${styles["links-cols"]} row`}>
              <div className="col">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="px-2 mb-1"
                    style={{ fontSize: "1.6em" }}
                  />
                  <h3 className={`${styles["header-solo-heading"]}`}>
                    Main Links
                  </h3>
                </div>
                <ul className={`${styles["nav-main-links"]}`}>
                  <li>
                    <Link
                      href="/"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="px-2 mb-1"
                    style={{ fontSize: "1.6em" }}
                  />
                  <h3 className={`${styles["header-solo-heading"]}`}>
                    Brand Identity
                  </h3>
                </div>
                <ul className={`${styles["nav-main-links"]}`}>
                  <li>
                    <Link
                      href="/branding"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/logo-designing"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Logo Designing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/catalogue-designing"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Catalogue Designing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/brand-name-suggestion"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Brand Name Suggestion
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="px-2 mb-1"
                    style={{ fontSize: "1.6em" }}
                  />
                  <h3 className={`${styles["header-solo-heading"]}`}>
                    Communication Strategy
                  </h3>
                </div>
                <ul className={`${styles["nav-main-links"]}`}>
                  <li>
                    <Link
                      href="/animation"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Animation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/digital-marketing-agency-in-noida"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/influencer-marketing"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Influencer Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/social-media-marketing"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Social Media Marketing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="px-2 mb-1"
                    style={{ fontSize: "1.6em" }}
                  />
                  <h3 className={`${styles["header-solo-heading"]}`}>
                    Website Design
                  </h3>
                </div>
                <ul className={`${styles["nav-main-links"]}`}>
                  <li>
                    <Link
                      href="/web-designing-services-in-india"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Web Designing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ui-ux-design"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Ui/Ux Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/seo-marketing-agency-in-noida"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      SEO
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/packaging-design"
                      onClick={handleLinkClick}
                      className={`${styles["header-solo-link"]}`}
                    >
                      Packaging Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
