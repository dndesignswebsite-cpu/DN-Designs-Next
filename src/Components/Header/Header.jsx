"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faArrowCircleRight,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
  faPinterest,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const TRANSITION_DURATION = 1000;

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const toggleNav = () => {
    if (isLocked) return;

    setIsLocked(true);

    if (isAnimating) {
      setIsAnimating(false);

      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflowY = "auto";
        setIsLocked(false);
      }, TRANSITION_DURATION);
    } else {
      window.scrollTo(0, 0);
      document.body.style.overflowY = "hidden";
      setIsVisible(true);

      setTimeout(() => {
        setIsAnimating(true);
      }, 50);

      setTimeout(() => {
        setIsLocked(false);
      }, TRANSITION_DURATION);
    }
  };
  // toggle nav
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
      <header
        className={`${styles["header"]} ${
          isVisible ? styles["nav-open"] : ""
        } container`}
      >
        <div className={`${styles["logo"]}`}>
          <Link href="/" onClick={handleLinkClick}>
            <img
              src="https://dndesigns.co.in/uploads/avatars/DN-new-logo.png"
              alt="DN Designs – home"
              // style={{width:"120px"}}
              className={`${styles["logo-image-dn"]}`}
            />
          </Link>
        </div>

        <button
          className={`${styles["nav-toggle-btn"]} ${
            isAnimating ? styles["is-active"] : ""
          }`}
          onClick={toggleNav}
          disabled={isLocked}
          aria-label="Toggle Navigation"
          aria-expanded={isAnimating}
        >
          <span className={`${styles["toggle-icon"]}`}></span>
        </button>
      </header>

      <div
        className={`${styles["desktop-nav"]}`}
        onWheel={(e) => e.stopPropagation()}
      >
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
              <div className={`${styles["links-cols"]} row`}>

                {/* main links */}
                <div className="col">
                  <div
                    className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <p className={`${styles["header-solo-heading"]}`}>
                      Main Links
                    </p>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>
                    <li>
                      <Link
                        href="/"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/" ? styles["active"] : ""
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/about-us" ? styles["active"] : ""
                        }`}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/services" ? styles["active"] : ""
                        }`}
                      >
                        Services
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="/blog"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/blog" ? styles["active"] : ""
                        }`}
                      >
                        Blog
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="/career"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/career" ? styles["active"] : ""
                        }`}
                      >
                        Career
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="/contact-us"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/contact-us" ? styles["active"] : ""
                        }`}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>


                {/* brand identity */}
                <div className="col">
                  <div
                    className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <span className={`${styles["header-solo-heading"]}`}>
                      Brand Identity
                    </span>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>
                    <li>
                      <Link
                        href="/branding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/branding" ? styles["active"] : ""
                        }`}
                      >
                        Branding
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/brand-identity-design-services"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/brand-identity-design-services" ? styles["active"] : ""
                        }`}
                      >
                        Brand Identity Design
                      </Link>
                    </li>
                      <li>
                      <Link
                        href="/logo-designing"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/logo-designing" ? styles["active"] : ""
                        }`}
                      >
                        Logo Designing
                      </Link>
                    </li>
                    
                    <li>
                      <Link
                        href="/packaging-design"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/packaging-design"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        Packaging Design
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/catalogue-designing"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/catalogue-designing"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                       
                        Editorial and Catalogue Designing
                      </Link>
                    </li>

                    {/* <li>
                      <Link
                        href="/brand-name-suggestion"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/brand-name-suggestion"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                      
                        Brand Naming
                      </Link>
                    </li> */}

                     {/* <li>
                      <Link
                        href="/rebranding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/rebranding"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                      
                        Rebranding
                      </Link>
                    </li> */}

                       {/* <li>
                      <Link
                        href="/brand-positioning"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/brand-positioning"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        
                        Brand Positioning
                      </Link>
                    </li> */}

                  </ul>
                </div>
               

               {/* Marketing */}
                <div className="col">
                  <div
                    className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <p className={`${styles["header-solo-heading"]}`}>
                      Marketing
                    </p>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>
                     <li>
                      <Link
                        href="/digital-marketing-agency-in-noida"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/digital-marketing-agency-in-noida"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        Digital Marketing
                      </Link>
                    </li>
                     <li>
                      <Link
                        href="/social-media-marketing"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/social-media-marketing"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        Social Media Marketing
                      </Link>
                    </li>
                   
                   
                    <li>
                      <Link
                        href="/influencer-marketing"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/influencer-marketing"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        {/* Influencer Marketing */}
                        Influencer and Strategic Seeding
                      </Link>
                    </li>
                     <li>
                      <Link
                        href="/seo-marketing-agency-in-noida"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/seo-marketing-agency-in-noida"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        SEO
                      </Link>
                    </li>

                   
                  </ul>
                </div>


                {/* Web & Content */}
                <div className="col">
                  <div
                    className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <p className={`${styles["header-solo-heading"]}`}>
                      Web & Content
                    </p>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>
                    <li>
                      <Link
                        href="/web-designing-services-in-india"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/web-designing-services-in-india"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        Web Designing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ui-ux-design"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/ui-ux-design" ? styles["active"] : ""
                        }`}
                      >
                        Ui/Ux Design
                      </Link>
                    </li>
                    
                    

                     <li>
                      <Link
                        href="/photography"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/photography" ? styles["active"] : ""
                        }`}
                      >
                        Photography
                      </Link>
                    </li>

                      <li>
                      <Link
                        href="/brand-video-shoots"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/brand-video-shoots"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        Brand Video Shoots
                      </Link>
                    </li>

                      <li>
                      <Link
                        href="/animation"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/animation" ? styles["active"] : ""
                        }`}
                      >
                        Animation
                      </Link>
                    </li>

                   
                  </ul>
                </div>
              </div>

              <div className={`${styles["links-cols"]} row`}>
                {/* Industries */}

                <div className="col-3">
                  <div
                    className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <p className={`${styles["header-solo-heading"]}`}>
                      Industries
                    </p>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>

                    <li>
                      <Link
                        href="/fmcg-branding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/fmcg-branding" ? styles["active"] : ""
                        }`}
                      >
                        FMCG
                      </Link>
                    </li>

                      {/* <li>
                      <Link
                        href="/cpg-branding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/cpg-branding" ? styles["active"] : ""
                        }`}
                      >
                        CPG
                      </Link>
                    </li> */}


                    {/* <li>
                      <Link
                        href="/d2c-branding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/d2c-branding" ? styles["active"] : ""
                        }`}
                      >
                        D2C
                      </Link>
                    </li> */}

                     {/* <li>
                      <Link
                        href="/startup-branding-agency"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/startup-branding-agency" ? styles["active"] : ""
                        }`}
                      >
                        Startups
                      </Link>
                    </li> */}

                     <li>
                      <Link
                        href="/food-beverage-branding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/food-beverage-branding" ? styles["active"] : ""
                        }`}
                      >
                        Food & Beverage
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="/beverage-branding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/beverage-branding" ? styles["active"] : ""
                        }`}
                      >
                        Beverage
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="/wellness-branding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/wellness-branding" ? styles["active"] : ""
                        }`}
                      >
                        Wellness
                      </Link>
                    </li>

                    {/* <li>
                      <Link
                        href="/supplement-branding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/supplement-branding" ? styles["active"] : ""
                        }`}
                      >
                        Supplements
                      </Link>
                    </li> */}

                    <li>
                      <Link
                        href="/skincare-branding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/skincare-branding" ? styles["active"] : ""
                        }`}
                      >
                       Skincare
                      </Link>
                    </li>

                  </ul>
                </div>

                {/* case studies */}
                <div className="col-3">
                  <div
                    className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <p className={`${styles["header-solo-heading"]}`}>
                      Case Studies
                    </p>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>
                    <li>
                      <Link
                        href="/case-studies/enlite"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/case-studies/enlite"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        Enlite
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/case-studies/letssupp"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/case-studies/letssupp"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        Let's Supp
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/case-studies/1am"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/case-studies/1am"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        1 AM
                      </Link>
                    </li>
                   

                    <li>
                      <Link
                        href="/case-studies/wlues"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/case-studies/wlues"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        Wlues
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="/case-studies"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/case-studies"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        View All
                      </Link>
                    </li>


                  </ul>
                </div>


                 {/* DN Playbook */}
                <div className="col-3">
                  <div
                    className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <p className={`${styles["header-solo-heading"]}`}>
                      DN Playbook
                    </p>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>

                    <li>
                      <Link
                        href="/dn-playbook/gully-labs"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/dn-playbook/gully-labs"
                            ? styles["active"]
                            : ""
                        }`}
                      >
                        Gully Labs
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/dn-playbook/snitch"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/dn-playbook/snitch" ? styles["active"] : ""
                        }`}
                      >
                        Snitch
                      </Link>
                    </li>

                      <li>
                      <Link
                        href="/dn-playbook/superyou"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/dn-playbook/superyou" ? styles["active"] : ""
                        }`}
                      >
                        SuperYou
                      </Link>
                    </li>

                      <li>
                      <Link
                        href="/dn-playbook/phool"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/dn-playbook/phool" ? styles["active"] : ""
                        }`}
                      >
                        Phool
                      </Link>
                    </li>

                   
                  </ul>
                </div>

                
                 {/*Brand Strategy  */}
                <div className="col-3">
                  <div
                    className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className="px-2 mb-1"
                      style={{ fontSize: "26px" }}
                    />
                    <p className={`${styles["header-solo-heading"]}`}>Brand Strategy</p>
                  </div>
                  <ul className={`${styles["nav-main-links"]}`}>

                    <li>
                      <Link
                        href="/brand-strategy"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/brand-strategy" ? styles["active"] : ""
                        }`}
                      >
                        Brand Strategy
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/brand-positioning"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/brand-positioning" ? styles["active"] : ""
                        }`}
                      >
                        Brand Positioning
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="/go-to-market-strategy"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/go-to-market-strategy" ? styles["active"] : ""
                        }`}
                      >
                        Go-To-Market Strategy
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="/brand-name-suggestion"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/brand-name-suggestion" ? styles["active"] : ""
                        }`}
                      >
                        Brand Naming
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="/rebranding"
                        onClick={handleLinkClick}
                        className={`${styles["header-solo-link"]} ${
                          pathname === "/rebranding" ? styles["active"] : ""
                        }`}
                      >
                        Rebranding
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
                  <span className={`${styles["header-solo-heading"]}`}>
                    Contact Us
                  </span>
                </div>

                <div
                  className={`${styles["contact-us-col"]} col-12 col-md-6 col-lg-3`}
                >
                  <Image
                    src="/phone.svg"
                    alt="Phone"
                    width={40}
                    height={40}
                    className={`${styles["me-2"]}`}
                  />
                  <div>
                    <span className={`${styles["contact-us-col-h4"]}`}>
                      Phone Number
                    </span>
                    {/* <p>+91 941 601 1100</p>
                    <p>+91 720 660 5872</p> */}

                    <p className={`${styles["header-desktop-mobile-number"]}`}>
                      <a href="tel:+91 8683911100">+91 868 391 1100</a>
                    </p>

                    <p className={`${styles["header-desktop-mobile-number"]}`}>
                      <a href="tel:+917206605872">+91 720 660 5872</a>
                    </p>
                  </div>
                </div>

                <div
                  className={`${styles["contact-us-col"]} col-12 col-md-6 col-lg-3`}
                >
                  <Image
                    src="/Email.svg"
                    alt="Email"
                    width={40}
                    height={40}
                    className={`${styles["me-2"]}`}
                  />
                  <div>
                    <span className={`${styles["contact-us-col-h4"]}`}>
                      Email Address
                    </span>
                    {/* <p>info@dndesigns.co.in</p> */}
                    <p>
                      <a href="mailto:info@dndesigns.co.in">
                        info@dndesigns.co.in
                      </a>
                    </p>
                  </div>
                </div>

                <div
                  className={`${styles["contact-us-col"]} col-12 col-md-6 col-lg-3`}
                >
                  <Image
                    src="/Address.svg"
                    alt="Office address"
                    width={40}
                    height={40}
                    className={`${styles["me-2"]}`}
                  />
                  <div>
                    <span className={`${styles["contact-us-col-h4"]}`}>
                      Office Address
                    </span>
                    <p>
                      C-40, Second Floor, Block C, Sector 58, Noida, Uttar
                      Pradesh 201301
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                  <div className={`${styles["contact-us-col"]}`}>
                    <div
                      className={`${styles["header-solo-heading-parent"]} d-flex align-items-center`}
                    >
                      <FontAwesomeIcon
                        icon={faMobileScreen}
                        className="px-2 mb-1"
                        style={{ fontSize: "24px" }}
                      />
                      <span className={`${styles["header-solo-heading"]}`}>
                        Follow Us
                      </span>
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
                      href="https://www.behance.net/dndesignss"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Behance"
                    >
                      <FontAwesomeIcon
                        icon={faBehance}
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
              <div
                className={`${styles["navbar-for-mobile"]} accordion`}
                id="accordionExample"
              >
                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <p className="accordion-header">
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
                        <span className={`${styles["header-solo-heading"]}`}>
                          Main Links
                        </span>
                      </div>
                    </button>
                  </p>
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

                        <li>
                          <Link
                            href="/blog"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Blog
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/career"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Career
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact-us"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <span className="accordion-header">
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
                        <span className={`${styles["header-solo-heading"]}`}>
                          Brand Identity
                        </span>
                      </div>
                    </button>
                  </span>
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
                            href="/brand-identity-design-services"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Brand Identity Design
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
                            href="/packaging-design"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Packaging Design
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/catalogue-designing"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            {/* Catalogue Designing */}
                            Editorial and Catalogue Designing
                          </Link>
                        </li>
{/* 
                        <li>
                          <Link
                            href="/brand-name-suggestion"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            
                            Brand Naming
                          </Link>
                        </li> */}

                         {/* <li>
                          <Link
                            href="/rebranding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            
                            Rebranding
                          </Link>
                        </li> */}

                        {/* <li>
                          <Link
                            href="/brand-positioning"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                          
                            Brand Positioning
                          </Link>
                        </li> */}

                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <span className="accordion-header">
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
                        <span className={`${styles["header-solo-heading"]}`}>
                          Marketing
                        </span>
                      </div>
                    </button>
                  </span>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className={`${styles["nav-main-links"]}`}>

                        

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
                            href="/social-media-marketing"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Social Media Marketing
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/influencer-marketing"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            {/* Influencer Marketing */}
                            Influencer and Strategic Seeding
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
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <span className="accordion-header">
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
                        <span className={`${styles["header-solo-heading"]}`}>
                          Web & Content
                        </span>
                      </div>
                    </button>
                  </span>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
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
                            UI/UX Design
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/photography"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Photography
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/brand-video-shoots"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Brand Video Shoots
                          </Link>
                        </li>

                       
                        
                        <li>
                          <Link
                            href="/animation"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Animation
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <span className="accordion-header">
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
                        <span className={`${styles["header-solo-heading"]}`}>
                          Industries
                        </span>
                      </div>
                    </button>
                  </span>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className={`${styles["nav-main-links"]}`}>


                        <li>
                          <Link
                            href="/fmcg-branding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            FMCG
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/cpg-branding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            CPG
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/d2c-branding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            D2C
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/startup-branding-agency"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Startups
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/food-beverage-branding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Food & Beverage
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/beverage-branding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                           Beverage
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/wellness-branding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                          Wellness
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/supplement-branding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                          Supplements
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/skincare-branding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                          Skincare
                          </Link>
                        </li>



                        

                        
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <span className="accordion-header">
                    <button
                      className={`${styles["accordion-item-button"]} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faArrowCircleRight}
                          className="px-2 mb-1"
                          style={{ fontSize: "1.6em" }}
                        />
                        <span className={`${styles["header-solo-heading"]}`}>
                          Case Studies
                        </span>
                      </div>
                    </button>
                  </span>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className={`${styles["nav-main-links"]}`}>
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
                </div> */}

                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <span className="accordion-header">
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
                        <span className={`${styles["header-solo-heading"]}`}>
                          Case Studies
                        </span>
                      </div>
                    </button>
                  </span>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className={`${styles["nav-main-links"]}`}>
                        <li>
                          <Link
                            href="/case-studies/enlite"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Enlite Case Study
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/case-studies/letssupp"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Let's Supp Case Study
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/case-studies/1am"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            1 AM Case Study
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/case-studies/nectarpure"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Nectarpure Case Study
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/case-studies/wlues"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Wlues Case Study
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <span className="accordion-header">
                    <button
                      className={`${styles["accordion-item-button"]} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faArrowCircleRight}
                          className="px-2 mb-1"
                          style={{ fontSize: "1.6em" }}
                        />
                        <span className={`${styles["header-solo-heading"]}`}>
                          DN Playbook
                        </span>
                      </div>
                    </button>
                  </span>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className={`${styles["nav-main-links"]}`}>

                        <li>
                          <Link
                            href="/dn-playbook/gully-labs"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Gully Labs
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/dn-playbook/snitch"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Snitch
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/dn-playbook/superyou"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            SuperYou
                          </Link>
                        </li>

                         <li>
                          <Link
                            href="/dn-playbook/phool"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                            Phool
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>


                <div
                  className={`${styles["accordion-item-custom"]} accordion-item`}
                >
                  <span className="accordion-header">
                    <button
                      className={`${styles["accordion-item-button"]} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faArrowCircleRight}
                          className="px-2 mb-1"
                          style={{ fontSize: "1.6em" }}
                        />
                        <span className={`${styles["header-solo-heading"]}`}>
                          Brand Strategy
                        </span>
                      </div>
                    </button>
                  </span>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className={`${styles["nav-main-links"]}`}>
                        <li>
                          <Link
                            href="/brand-strategy"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                           Brand Strategy
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/brand-positioning"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                           Brand Positioning
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/go-to-market-strategy"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                          Go-To-Market Strategy
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/brand-name-suggestion"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                          Brand Naming
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/rebranding"
                            onClick={handleLinkClick}
                            className={`${styles["header-solo-link"]}`}
                          >
                         Rebranding
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
