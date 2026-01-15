"use client"

import React,{useState} from 'react'
import "./OurWorkServiceTabs.css"

export default function OurWorkServiceTabs() {
    const [activeTab, setActiveTab] = useState("Branding");
    const imageUrl = "https://powerfilldrinks.com/uploads/pages/";



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
                  className={`tablinks ${activeTab === "Branding" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("Branding")}
                >
                  Branding
                </button>
                <button
                  className={`tablinks ${activeTab === "Packaging Design" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("Packaging Design")}
                >
                  Packaging Design
                </button>
                <button
                  className={`tablinks ${activeTab === "Brand Identity" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("Brand Identity")}
                >
                  Brand Identity
                </button>
                <button
                  className={`tablinks ${activeTab === "Website Development" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("Website Development")}
                >
                  Website Development
                </button>

                <button
                  className={`tablinks ${activeTab === "CGI Ads" ? "active" : ""
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
                      <img
                       src={imageUrl + "i orgainc gif.gif"}
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                           src={imageUrl + "enlite graphic.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                           src={imageUrl + "smartyums_GIf.gif"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                            src={imageUrl + "nature-balance (1).webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src={imageUrl + "nectarpure-2.webp"}
                            className="img-fluid tab-img"
                          ></img>
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
                      <img
                        src={imageUrl + "greenhorn-manu.webp"}
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                           src={imageUrl + "BObalist.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src={imageUrl + "thames.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                            src={imageUrl + "kalprishi.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src={imageUrl + "Wlues graphic.webp"}
                            className="img-fluid tab-img"
                          ></img>
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
                      <img
                        src={imageUrl + "wehgdwej.webp"}
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                             src={imageUrl + "nature-balance-22.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                             src={imageUrl + "deeproot-3.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                             src={imageUrl + "logo-mock-up.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                          src={imageUrl + "luxmi-cars.webp"}
                            className="img-fluid tab-img"
                          ></img>
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
                      <img
                         src={imageUrl + "web-vihaan.webp"}
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                             src={imageUrl + "5.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                             src={imageUrl + "2.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                             src={imageUrl + "Qualiteq-image.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                             src={imageUrl + "mr-bomzy-2-1.webp"}
                            className="img-fluid tab-img"
                          ></img>
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
                      <img
                        src={imageUrl + "3.webp"}
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                           src={imageUrl + "Natures-Balance-3D.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src={imageUrl + "EAU.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                           src={imageUrl + "greenhorn-THUMB.webp"}
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                           src={imageUrl + "foodsure-thumb.webp"}
                            className="img-fluid tab-img"
                          ></img>
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

  )
}
