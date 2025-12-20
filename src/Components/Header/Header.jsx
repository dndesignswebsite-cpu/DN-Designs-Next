"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faArrowCircleRight, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
      // document.body.style.overflowY = "hidden";
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

  const pathname = usePathname();

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
          className={`${styles["nav-toggle-btn"]} ${isAnimating ? styles["is-active"] : ""
            }`}
          onClick={toggleNav}
          aria-label="Toggle Navigation"
          aria-expanded={isAnimating}
        >
          <span className={`${styles["toggle-icon"]}`}></span>
        </button>
      </header>
      <div className={`${styles["desktop-nav"]}`} onWheel={(e) => e.stopPropagation()}>
        <nav
          className={`${styles["full-screen-nav"]} ${isAnimating ? styles["is-open"] : ""
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
                      className={`${styles["nav-toggle-btn"]} ${isAnimating ? styles["is-active"] : ""
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
                  <div className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
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
                        className={`${styles["header-solo-link"]} ${pathname === "/" ? styles["active"] : ""
                          }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/about-us" ? styles["active"] : ""
                          }`}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/services" ? styles["active"] : ""
                          }`}
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <div className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
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
                        className={`${styles["header-solo-link"]} ${pathname === "/branding" ? styles["active"] : ""
                          }`}
                      >
                        Branding
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/logo-designing"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/logo-designing" ? styles["active"] : ""
                          }`}
                      >
                        Logo Designing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalogue-designing"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/catalogue-designing" ? styles["active"] : ""
                          }`}
                      >
                        Catalogue Designing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/packaging-design"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/packaging-design" ? styles["active"] : ""
                          }`}
                      >
                        Packaging Design
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/brand-name-suggestion"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/brand-name-suggestion" ? styles["active"] : ""
                          }`}
                      >
                        Brand Name Suggestion
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <div className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
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
                        className={`${styles["header-solo-link"]} ${pathname === "/animation" ? styles["active"] : ""
                          }`}
                      >
                        Animation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/digital-marketing-agency-in-noida"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/digital-marketing-agency-in-noida" ? styles["active"] : ""
                          }`}
                      >
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/influencer-marketing"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/influencer-marketing" ? styles["active"] : ""
                          }`}
                      >
                        Influencer Marketing
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/social-media-marketing"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/social-media-marketing" ? styles["active"] : ""
                          }`}
                      >
                        Social Media Marketing
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <div className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
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
                        className={`${styles["header-solo-link"]} ${pathname === "/web-designing-services-in-india" ? styles["active"] : ""
                          }`}
                      >
                        Web Designing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ui-ux-design"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/ui-ux-design" ? styles["active"] : ""
                          }`}
                      >
                        Ui/Ux Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/seo-marketing-agency-in-noida"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/seo-marketing-agency-in-noida" ? styles["active"] : ""
                          }`}
                      >
                        SEO
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>

              <div className={`${styles["links-cols"]} row`}>
                <div className="col-3">
                  <div className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <h3 className={`${styles["header-solo-heading"]}`}>
                      Case Studies
                    </h3>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>
                    <li>
                      <Link
                        href="/enlite-case-study"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/enlite-case-study" ? styles["active"] : ""
                          }`}
                      >
                        Enlite
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/grincare-case-study"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/grincare-case-study" ? styles["active"] : ""
                          }`}
                      >
                        Grincare
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nectarpure-case-study"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/nectarpure-case-study" ? styles["active"] : ""
                          }`}
                      >
                        Nectarpure
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/wlues-case-study"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/wlues-case-study" ? styles["active"] : ""
                          }`}
                      >
                        Wlues
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-3">
                  <div className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <h3 className={`${styles["header-solo-heading"]}`}>
                      Additional Links
                    </h3>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>
                    <li>
                      <Link
                        href="/career"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/career" ? styles["active"] : ""
                          }`}
                      >
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/brand-video-shoots"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/brand-video-shoots" ? styles["active"] : ""
                          }`}
                      >
                        Brand Video Shoots
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/photography"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/photography" ? styles["active"] : ""
                          }`}
                      >
                        Photography
                      </Link>
                    </li>


                    <li>
                      <Link
                        href="/contact-us"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/contact-us" ? styles["active"] : ""
                          }`}
                      >
                        Contact Us
                      </Link>
                    </li>



                  </ul>
                </div>

                <div className="col-3">
                  <div className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <h3 className={`${styles["header-solo-heading"]}`}>
                      Blog System
                    </h3>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>

                    <li>
                      <Link
                        href="/blog"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${pathname === "/blog" ? styles["active"] : ""
                          }`}
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`${styles["contact-us-row"]} row`}>
                <div className={`${styles["contact-us-heading-div"]}`}>
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="px-2 mb-1"
                    style={{ fontSize: "26px" }}
                  />
                  <h3 className={`${styles["header-solo-heading"]}`}>
                    Contact Us
                  </h3>
                </div>

                <div className={`${styles["contact-us-col"]} col-3`}>
                  <Image src="/phone.svg" alt="Phone" width={40} height={40} className={`${styles["me-2"]}`} />
                  <div>
                    <h4>Phone Number</h4>
                    <p>+91 941 601 1100</p>
                    <p>+91 941 601 1100</p>
                  </div>
                </div>

                <div className={`${styles["contact-us-col"]} col-3`}>
                  <Image src="/Email.svg" alt="Phone" width={40} height={40} className={`${styles["me-2"]}`} />
                  <div>
                    <h4>Email Address</h4>
                    <p>info@dndesigns.co.in</p>
                  </div>
                </div>

                <div className={`${styles["contact-us-col"]} col-3`}>
                  <Image src="/Address.svg" alt="Phone" width={40} height={40} className={`${styles["me-2"]}`} />
                  <div>
                    <h4>Office Address</h4>
                    <p>
                      C-40, Second Floor, Block C, Sector 58, Noida, Uttar
                      Pradesh 201301
                    </p>
                  </div>
                </div>

                <div className="col-3">
                  <div className={`${styles["contact-us-col"]}`}>
                    <div className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}>
                      <FontAwesomeIcon
                        icon={faMobileScreen}
                        className="px-2 mb-1"
                        style={{ fontSize: "24px" }}
                      />
                      <h3 className={`${styles["header-solo-heading"]}`}>
                        Follow Us
                      </h3>
                    </div>

                  </div>
                  <div className={`${styles["footer-social-icons"]}`}>
                    <a
                      href="https://www.instagram.com/dn_designs_india/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={styles["footer-social-icons-unit"]}
                      />
                    </a>

                    <a
                      href="https://www.facebook.com/digitizersnation"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={`${styles["footer-social-icons-unit"]}`}
                      />
                    </a>

                    <a
                      href="https://x.com/digitizersn?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                    >
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className={`${styles["footer-social-icons-unit"]}`}
                      />
                    </a>

                    <a
                      href="https://in.pinterest.com/dndesigns1100/_created/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Pinterest"
                    >
                      <FontAwesomeIcon
                        icon={faPinterest}
                        className={`${styles["footer-social-icons-unit"]}`}
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/dn-designs-india"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Linkedin"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className={`${styles["footer-social-icons-unit"]}`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* mobile view */}

      <div className={`${styles["mobile-nav"]}`}>
        <nav
          className={`${styles["full-screen-nav"]} ${isAnimating ? styles["is-open"] : ""
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
                      className={`${styles["nav-toggle-btn"]} ${isAnimating ? styles["is-active"] : ""
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

              <div
                className={`${styles["navbar-for-mobile"]} accordion`}
                id="accordionExample"
              >
                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
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
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
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
                            href="/about-us"
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
                  </div>
                </div>

                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
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
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
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
                  </div>
                </div>

                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`${styles["accordion-item-button"]} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
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
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
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
                  </div>
                </div>



                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`${styles["accordion-item-button"]} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faArrowCircleRight}
                          className="px-2 mb-1"
                          style={{ fontSize: "1.6em" }}
                        />
                        <h3 className={`${styles["header-solo-heading"]}`}>
                          Web Design
                        </h3>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className={`${styles["nav-main-links"]}`}>
                        <li>
                          <Link
                            href="/ui-ux-design"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            UI/UX Design
                          </Link>
                        </li>
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
                </div>



                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`${styles["accordion-item-button"]} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faArrowCircleRight}
                          className="px-2 mb-1"
                          style={{ fontSize: "1.6em" }}
                        />
                        <h3 className={`${styles["header-solo-heading"]}`}>
                          Additional Pages
                        </h3>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className={`${styles["nav-main-links"]}`}>
                        <li>
                          <Link
                            href="/contact-us"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/blog"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>



                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`${styles["accordion-item-button"]} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faArrowCircleRight}
                          className="px-2 mb-1"
                          style={{ fontSize: "1.6em" }}
                        />
                        <h3 className={`${styles["header-solo-heading"]}`}>
                          Case Studies
                        </h3>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className={`${styles["nav-main-links"]}`}>
                        <li>
                          <Link
                            href="/wlues-case-study"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Wlues Case Study
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/grincare-case-study"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Grincare Case Study
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/enlite-case-study"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Enlite Case Study
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/nectarpure-case-study"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Nectarpure Case Study
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
