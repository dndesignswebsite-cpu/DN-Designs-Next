"use client";

import React, { useState } from "react";
import "./AboutUsHoverPage.css";
import Link from "next/link";

function AboutUsHoverPage() {
  const [activeImage, setActiveImage] = useState(
    "https://dndesigns.co.in/uploads/pages/brand-stratergy.webp",
  );

  const services = [
    // {
    //   title: "Brand Strategy",
    //   img: "https://dndesigns.co.in/uploads/pages/brand-stratergy.webp",
    //   url: "/branding",
    // },
    {
      title: "Brand Positioning",
      img: "https://dndesigns.co.in/uploads/pages/aboutbrand-positning.webp",
      url: "/brand-positioning",
    },
    {
      title: "Brand Identity Design",
      img: "https://dndesigns.co.in/uploads/pages/brand-identy.webp",
      url: "/branding",
    },
    {
      title: "Packaging Design",
      img: "https://dndesigns.co.in/uploads/pages/aboutpackaging-design.webp",
      url: "/packaging-design",
    },
    {
      title: "Editorial and Catalogue Designing",
      img: "https://dndesigns.co.in/uploads/pages/abouteditorialcatalog.webp",
      url: "/catalogue-designing",
    },
    {
      title: "Brand Naming",
      img: "https://dndesigns.co.in/uploads/pages/aboutbrand-name.webp",
      url: "/brand-name-suggestion",
    },
    {
      title: "Rebranding",
      img: "https://dndesigns.co.in/uploads/pages/aboutrebranding.webp",
      url: "/rebranding",
    },
    //  {
    //   title: "GTM",
    //   img: "https://dndesigns.co.in/uploads/pages/GTM.webp",
    //   url: "/",
    // },
  ];

  const servicesTwo = [
    {
      title: "Digital Marketing",
      img: "https://dndesigns.co.in/uploads/pages/aboutdigital-marketing.webp",
      url: "/digital-marketing-agency-in-noida",
    },
    {
      title: "Social Media Marketing",
      img: "https://dndesigns.co.in/uploads/pages/social-media-marketing.webp",
      url: "/social-media-marketing",
    },
    {
      title: "Influencer Marketing",
      img: "https://dndesigns.co.in/uploads/pages/influencer-marketing.webp",
      url: "/influencer-marketing",
    },
    {
      title: "Photography",
      img: "https://dndesigns.co.in/uploads/pages/aboutphotoshoot.webp",
      url: "/photography",
    },
    {
      title: "Animation",
      img: "https://dndesigns.co.in/uploads/pages/aboutanimationhover4.webp",
      url: "/animation",
    },
    {
      title: "Brand Video Shoot",
      img: "https://dndesigns.co.in/uploads/pages/aboutvideography.webp",
      url: "/brand-video-shoots",
    },
  ];

  const servicesThree = [
    {
      title: "Web Designing",
      img: "https://dndesigns.co.in/uploads/pages/aboutwebsite-development.webp",
      url: "/web-designing-services-in-india",
    },
    {
      title: "UI/UX Design",
      img: "https://dndesigns.co.in/uploads/pages/aboutui-ux.webp",
      url: "/ui-ux-design",
    },
    {
      title: "SEO",
      img: "https://dndesigns.co.in/uploads/pages/abouthoverseo.webp",
      url: "/seo-marketing-agency-in-noida",
    },
  ];

  return (
    <section className="about-us-hover-section">
      <div className="container">

      <div className="about-us-hover-section-head-div">
        <h2 className="about-us-hover-section-head-div-head">Full-Service Brand Studio </h2>
        <p className="about-us-hover-section-head-div-para">Everything Under One Roof</p>
      </div>


        <div className="row about-us-hover-section-desktop">
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 about-us-hover-img-col-div-for-hide">
            <div className="about-us-hover-img-col">
              <img
                key={activeImage}
                src={activeImage}
                alt="service"
                className="about-us-hover-img fade-in"
              />
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-7">
            <div className="about-us-list-col-div">
              <div className="about-us-hover-list-div">
                <h3 className="about-us-hover-list-head">
                  [ Branding ]
                </h3>
                {services.map((item, index) => (
                  <Link href={item.url} key={index} className="list-item-link">
                    <p
                      onMouseEnter={() => setActiveImage(item.img)}
                      className="about-us-hover-list-item"
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="about-us-hover-list-div">
                <h3 className="about-us-hover-list-head">
                  [ Communication ]
                </h3>
                {servicesTwo.map((item, index) => (
                  <Link href={item.url} key={index} className="list-item-link">
                    <p
                      onMouseEnter={() => setActiveImage(item.img)}
                      className="about-us-hover-list-item"
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="about-us-hover-list-div">
                <h3 className="about-us-hover-list-head">[ Web Design ]</h3>
                {servicesThree.map((item, index) => (
                  <Link href={item.url} key={index} className="list-item-link">
                    <p
                      onMouseEnter={() => setActiveImage(item.img)}
                      className="about-us-hover-list-item"
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* about-us-hover-section mobile */}
        <div className="about-us-hover-section-mobile">

          <div className="about-us-hover-section-mobile-div">
            <img src="https://dndesigns.co.in/uploads/pages/brand-stratergy.webp" className="img-fluid about-us-hover-section-mobile-div-img"></img>
          <div className="about-us-hover-list-div">
                <h3 className="about-us-hover-list-head">
                  [ Branding ]
                </h3>
                {services.map((item, index) => (
                  <Link href={item.url} key={index} className="list-item-link">
                    <p
                      onMouseEnter={() => setActiveImage(item.img)}
                      className="about-us-hover-list-item"
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
              </div>


               <div className="about-us-hover-section-mobile-div">
            <img src="https://dndesigns.co.in/uploads/pages/aboutdigital-marketing.webp" className="img-fluid about-us-hover-section-mobile-div-img"></img>
          <div className="about-us-hover-list-div">
                <h3 className="about-us-hover-list-head">
                  [ Communication ]
                </h3>
                {servicesTwo.map((item, index) => (
                  <Link href={item.url} key={index} className="list-item-link">
                    <p
                      onMouseEnter={() => setActiveImage(item.img)}
                      className="about-us-hover-list-item"
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
              </div>


               <div className="about-us-hover-section-mobile-div">
            <img src="https://dndesigns.co.in/uploads/pages/aboutwebsite-development.webp" className="img-fluid about-us-hover-section-mobile-div-img"></img>
          <div className="about-us-hover-list-div">
                <h3 className="about-us-hover-list-head">
                  [ Web Design ]
                </h3>
                {servicesThree.map((item, index) => (
                  <Link href={item.url} key={index} className="list-item-link">
                    <p
                      onMouseEnter={() => setActiveImage(item.img)}
                      className="about-us-hover-list-item"
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
              </div>


        </div>


      </div>
    </section>
  );
}

export default AboutUsHoverPage;
