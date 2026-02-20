"use client";

import React, { useState } from "react";
import "./OurWorkServiceTabs.css";
import Image from "next/image";
import CatalougePageFlip from "../LightBox/LightBox";

export default function OurWorkServiceTabs() {
  const [activeTab, setActiveTab] = useState("Branding");
  const imageUrl = "https://dndesigns.co.in/uploads/pages/";

  return (
    <div>
      <section className="our-work-tab">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Our<span className="every-pr"> Work</span>
            </h2>

            <div>
              <div className="tab">
                <button
                  className={`tablinks ${
                    activeTab === "Branding" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Branding")}
                >
                  Branding
                </button>
                <button
                  className={`tablinks ${
                    activeTab === "Packaging Design" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Packaging Design")}
                >
                  Packaging Design
                </button>
                <button
                  className={`tablinks ${
                    activeTab === "Brand Identity" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Brand Identity")}
                >
                  Brand Identity
                </button>
                <button
                  className={`tablinks ${
                    activeTab === "Website Development" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Website Development")}
                >
                  Website Development
                </button>

                <button
                  className={`tablinks ${
                    activeTab === "CGI Ads" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("CGI Ads")}
                >
                  CGI Ads
                </button>
              </div>

              {activeTab === "Branding" && (
                <div id="Branding" className="tabcontent">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                      {/* <img
                        src={imageUrl + "i orgainc gif.gif"}
                        className="img-fluid tab-img"
                      ></img> */}

                      <Image
                        src={imageUrl + "i orgainc gif.gif"}
                        alt="blog"
                        width={1500}
                        height={1000}
                        className="responsive-img tab-img"
                      />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "enlite graphic.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                          <Image
                            src={imageUrl + "enlite graphic.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "smartyums_GIf.gif"}
                            className="img-fluid tab-img"
                          ></img> */}
                          <Image
                            src={imageUrl + "smartyums_GIf.gif"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "nature-balance (1).webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                          <Image
                            src={imageUrl + "nature-balance (1).webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "nectarpure-2.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                          <Image
                            src={imageUrl + "nectarpure-2.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Packaging Design" && (
                <div id="Packaging Design" className="tabcontent">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                      {/* <img
                        src={imageUrl + "greenhorn-manu.webp"}
                        className="img-fluid tab-img"
                      ></img> */}
                      <Image
                        src={imageUrl + "greenhorn-manu.webp"}
                        alt="blog"
                        width={1500}
                        height={1000}
                        className="responsive-img tab-img"
                      />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "BObalist.webp"}
                            className="img-fluid tab-img"
                          ></img> */}

                          <Image
                            src={imageUrl + "BObalist.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "thames.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                          <Image
                            src={imageUrl + "thames.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "kalprishi.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                          <Image
                            src={imageUrl + "kalprishi.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "Wlues graphic.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                          <Image
                            src={imageUrl + "Wlues graphic.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Brand Identity" && (
                <div id="Brand Identity" className="tabcontent">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                      {/* <img
                        src={imageUrl + "wehgdwej.webp"}
                        className="img-fluid tab-img"
                      ></img> */}
                      <Image
                        src={imageUrl + "wehgdwej.webp"}
                        alt="blog"
                        width={1500}
                        height={1000}
                        className="responsive-img tab-img"
                      />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "nature-balance-22.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                          <Image
                            src={imageUrl + "nature-balance-22.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "deeproot-3.webp"}
                            className="img-fluid tab-img"
                          ></img> */}

                          <Image
                            src={imageUrl + "deeproot-3.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "logo-mock-up.webp"}
                            className="img-fluid tab-img"
                          ></img> */}

                          <Image
                            src={imageUrl + "logo-mock-up.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "luxmi-cars.webp"}
                            className="img-fluid tab-img"
                          ></img> */}

                          <Image
                            src={imageUrl + "luxmi-cars.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Website Development" && (
                <div id="Website Development" className="tabcontent">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                      {/* <img
                        src={imageUrl + "web-vihaan.webp"}
                        className="img-fluid tab-img"
                      ></img> */}
                      <Image
                        src={imageUrl + "web-vihaan.webp"}
                        alt="blog"
                        width={1500}
                        height={1000}
                        className="responsive-img tab-img"
                      />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "5.webp"}
                            className="img-fluid tab-img"
                          ></img> */}

                          <Image
                            src={imageUrl + "5.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "2.webp"}
                            className="img-fluid tab-img"
                          ></img> */}

                          <Image
                            src={imageUrl + "2.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "Qualiteq-image.webp"}
                            className="img-fluid tab-img"
                          ></img> */}

                          <Image
                            src={imageUrl + "Qualiteq-image.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "mr-bomzy-2-1.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                          <Image
                            src={imageUrl + "mr-bomzy-2-1.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "CGI Ads" && (
                <div id="CGI Ads" className="tabcontent">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                      {/* <img
                        src={imageUrl + "3.webp"}
                        className="img-fluid tab-img"
                      ></img> */}
                       <CatalougePageFlip
                                      src="https://youtu.be/s-PQhgPFPjE?si=OChhC9NiQYv-6LQd"
                                      type="youtube"
                                    >
                      <Image
                        src={imageUrl + "3.webp"}
                        alt="blog"
                        width={1500}
                        height={1000}
                        className="responsive-img tab-img"
                      />
                      </CatalougePageFlip>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "Natures-Balance-3D.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                           <CatalougePageFlip
                                      src="https://youtu.be/FfouzC6rBJY?si=mwNz09qzDZTzWzOw"
                                      type="youtube"
                                    >
                          <Image
                            src={imageUrl + "Natures-Balance-3D.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                          </CatalougePageFlip>
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "EAU.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                           <CatalougePageFlip
                                      src="https://youtu.be/vJMby5XhQ9Y?si=q4HdfoqoXwSbD5SQ"
                                      type="youtube"
                                    >
                          <Image
                            src={imageUrl + "EAU.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                          </CatalougePageFlip>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "greenhorn-THUMB.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                           <CatalougePageFlip
                                      src="https://youtu.be/dt35fewQRho?si=d0pg4tQOrymXjcql"
                                      type="youtube"
                                    >
                          <Image
                            src={imageUrl + "greenhorn-THUMB.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                          </CatalougePageFlip>
                        </div>
                        <div className="col-6">
                          {/* <img
                            src={imageUrl + "foodsure-thumb.webp"}
                            className="img-fluid tab-img"
                          ></img> */}
                           <CatalougePageFlip
                                      src="https://youtu.be/21i1C-297-M?si=YYDzNTm3AyAWorl-"
                                      type="youtube"
                                    >
                          <Image
                            src={imageUrl + "foodsure-thumb.webp"}
                            alt="blog"
                            width={1500}
                            height={1000}
                            className="responsive-img tab-img"
                          />
                          </CatalougePageFlip>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* <div className="explore-more text-center">
              <button>Explore More</button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
