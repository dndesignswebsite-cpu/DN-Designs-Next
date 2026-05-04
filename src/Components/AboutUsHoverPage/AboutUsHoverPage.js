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
      title: "CREATIVE DIRECTION",
      img: "https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp",
      url: "/",
    },
    {
      title: "VISUAL STRATEGY",
      img: "https://dndesigns.co.in/uploads/blogs/1-2-768x768.webp",
      url: "/",
    },
    {
      title: "ART DIRECTION",
      img: "https://dndesigns.co.in/uploads/blogs/10-768x768.webp",
      url: "/",
    },
    {
      title: "STORYBOARDING",
      img: "https://dndesigns.co.in/uploads/blogs/11-768x768.webp",
      url: "/",
    },
    {
      title: "NARRATIVE DESIGN",
      img: "https://dndesigns.co.in/uploads/blogs/12-768x768.webp",
      url: "/",
    },
    {
      title: "R&D",
      img: "https://dndesigns.co.in/uploads/blogs/14-768x768.webp",
      url: "/",
    },
  ];

  const servicesTwo = [
    {
      title: "CREATIVE DIRECTION",
      img: "https://dndesigns.co.in/uploads/blogs/15-768x768.webp",
      url: "/",
    },
    {
      title: "VISUAL STRATEGY",
      img: "https://dndesigns.co.in/uploads/blogs/16-768x768.webp",
      url: "/",
    },
    {
      title: "ART DIRECTION",
      img: "https://dndesigns.co.in/uploads/blogs/19-768x768.webp",
      url: "/",
    },
    {
      title: "STORYBOARDING",
      img: "https://dndesigns.co.in/uploads/blogs/20-768x768.webp",
      url: "/",
    },
    {
      title: "NARRATIVE DESIGN",
      img: "https://dndesigns.co.in/uploads/blogs/2fdb227c80faa66e892e2a457ab188e0-768x768.webp",
      url: "/",
    },
    {
      title: "R&D",
      img: "https://dndesigns.co.in/uploads/blogs/31-768x768.webp",
      url: "/",
    },
  ];

  const servicesThree = [
    {
      title: "CREATIVE DIRECTION",
      img: "https://dndesigns.co.in/uploads/blogs/34hje.webp",
      url: "/",
    },
    {
      title: "VISUAL STRATEGY",
      img: "https://dndesigns.co.in/uploads/blogs/38-768x768.webp",
      url: "/",
    },
    {
      title: "ART DIRECTION",
      img: "https://dndesigns.co.in/uploads/blogs/10-768x768.webp",
      url: "/",
    },
    {
      title: "STORYBOARDING",
      img: "https://dndesigns.co.in/uploads/blogs/11-768x768.webp",
      url: "/",
    },
    {
      title: "NARRATIVE DESIGN",
      img: "https://dndesigns.co.in/uploads/blogs/12-768x768.webp",
      url: "/",
    },
    {
      title: "R&D",
      img: "https://dndesigns.co.in/uploads/blogs/14-768x768.webp",
      url: "/",
    },
  ];

  return (
    <section className="about-us-hover-section">
      <div className="container">

      <div className="about-us-hover-section-head-div">
        <h2 className="about-us-hover-section-head-div-head">Practice areas and expertise</h2>
        <p className="about-us-hover-section-head-div-para">From concept to craft, we deliver.</p>
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
                  [ CREATIVE DEVELOPMENT ]
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
                  [ DESIGN & MOTION ]
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
                <h3 className="about-us-hover-list-head">[ IMMERSIVE ]</h3>
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
                  [ CREATIVE DEVELOPMENT ]
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
                  [ CREATIVE DEVELOPMENT ]
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
                  [ CREATIVE DEVELOPMENT ]
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
