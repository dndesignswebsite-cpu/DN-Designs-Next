"use client";

import React, { useState } from "react";
import "./AboutUsHoverPage.css";
import Link from "next/link";

function AboutUsHoverPage() {
  const [activeImage, setActiveImage] = useState(
    "https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp",
  );

  const services = [
    {
      title: "Brand Strategy",
      img: "https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp",
      url: "/",
    },
    {
      title: "Brand Positioning",
      img: "https://dndesigns.co.in/uploads/blogs/1-2-768x768.webp",
      url: "/",
    },
    {
      title: "Brand Identity Design",
      img: "https://dndesigns.co.in/uploads/blogs/10-768x768.webp",
      url: "/",
    },
    {
      title: "Packaging Design",
      img: "https://dndesigns.co.in/uploads/blogs/11-768x768.webp",
      url: "/",
    },
    {
      title: "Editorial and Catalogue Designing",
      img: "https://dndesigns.co.in/uploads/blogs/12-768x768.webp",
      url: "/",
    },
    {
      title: "Brand Naming",
      img: "https://dndesigns.co.in/uploads/blogs/14-768x768.webp",
      url: "/",
    },
    {
      title: "Rebranding",
      img: "https://dndesigns.co.in/uploads/blogs/14-768x768.webp",
      url: "/",
    },
     {
      title: "GTM",
      img: "https://dndesigns.co.in/uploads/blogs/14-768x768.webp",
      url: "/",
    },
  ];

  const servicesTwo = [
    {
      title: "Digital Marketing",
      img: "https://dndesigns.co.in/uploads/blogs/15-768x768.webp",
      url: "/",
    },
    {
      title: "Social Media Marketing",
      img: "https://dndesigns.co.in/uploads/blogs/16-768x768.webp",
      url: "/",
    },
    {
      title: "Influencer Marketing",
      img: "https://dndesigns.co.in/uploads/blogs/19-768x768.webp",
      url: "/",
    },
    {
      title: "Photography",
      img: "https://dndesigns.co.in/uploads/blogs/20-768x768.webp",
      url: "/",
    },
    {
      title: "Animation",
      img: "https://dndesigns.co.in/uploads/blogs/2fdb227c80faa66e892e2a457ab188e0-768x768.webp",
      url: "/",
    },
    {
      title: "Brand Video Shoot",
      img: "https://dndesigns.co.in/uploads/blogs/31-768x768.webp",
      url: "/",
    },
  ];

  const servicesThree = [
    {
      title: "Web Designing",
      img: "https://dndesigns.co.in/uploads/blogs/34hje.webp",
      url: "/",
    },
    {
      title: "UI/UX Design",
      img: "https://dndesigns.co.in/uploads/blogs/38-768x768.webp",
      url: "/",
    },
    {
      title: "SEO",
      img: "https://dndesigns.co.in/uploads/blogs/10-768x768.webp",
      url: "/",
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
            <img src="https://dndesigns.co.in/uploads/blogs/10-768x768.webp" className="img-fluid about-us-hover-section-mobile-div-img"></img>
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
            <img src="https://dndesigns.co.in/uploads/blogs/10-768x768.webp" className="img-fluid about-us-hover-section-mobile-div-img"></img>
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
            <img src="https://dndesigns.co.in/uploads/blogs/10-768x768.webp" className="img-fluid about-us-hover-section-mobile-div-img"></img>
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
