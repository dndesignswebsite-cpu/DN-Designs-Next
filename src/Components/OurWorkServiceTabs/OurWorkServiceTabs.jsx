"use client"

import React,{useState} from 'react'
import "./OurWorkServiceTabs.css"

export default function OurWorkServiceTabs() {
    const [activeTab, setActiveTab] = useState("Branding");
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
                        src="https://dndesigns.co.in/wp-content/uploads/2024/10/ezgif.com-speed-1.gif"
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2024/10/smartyums_GIf.gif"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/08/nature-balance.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/08/nectarpure-2.jpg"
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
                        src="https://dndesigns.co.in/wp-content/uploads/2025/07/greenhorn-manu.jpg"
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/08/BObalist.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/08/thames.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/08/kalprishi.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/08/Wlues.jpg"
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
                        src="https://dndesigns.co.in/wp-content/uploads/2025/08/koshish.jpg"
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/08/nature-balance-22.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/08/deeproot-3.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2024/09/logo-mock-up.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/07/luxmi-cars.jpg"
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
                        src="https://dndesigns.co.in/wp-content/uploads/2025/07/web-vihaan.jpg"
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/04/5.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/04/2.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/07/Qualiteq-image.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/07/mr-bomzy-2-1.jpg"
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
                        src="https://dndesigns.co.in/wp-content/uploads/2025/07/3.jpg"
                        className="img-fluid tab-img"
                      ></img>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/07/Natures-Balance-3D.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/07/EAU.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/07/greenhorn-THUMB.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://dndesigns.co.in/wp-content/uploads/2025/07/foodsure-thumb.jpg"
                            className="img-fluid tab-img"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="explore-more text-center">
              <button>Explore More</button>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
