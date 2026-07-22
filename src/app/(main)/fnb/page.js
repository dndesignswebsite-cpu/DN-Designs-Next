import React from "react";
import "./fnb.css";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import ContactUsBtn from "@/Components/ContactUsBtn/ContactUsBtn";
import Image from "next/image";

function page() {
    let imageUrl = "https://dndesigns.co.in/uploads/pages/";
  return (
    <div>
      {/* fnb page hero */}
      <section className="fnb-page-hero">
        <div className="container">
          <div className="row">

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="fnb-page-hero-content-col">
                <p className="fnb-page-hero-content-col-label-para">Turning Recipes and Formulas Into Brands People Trust</p>
                <h1 className="fnb-page-hero-content-col-head">Turning Recipes and Formulas Into Brands People Trust</h1>
                <p className="fnb-page-hero-content-col-desc-para">
                  A food or beverage brand gets judged in seconds. We craft
                  strategy, identities, packaging, and GTM systems that turn
                  products into brands people remember and buy from.
                </p>
                <div className="fnb-page-hero-content-cta-div">
                    <TalkToUs/>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                <div className="fnb-page-hero-img-col">
                    <img src="https://dndesigns.co.in/uploads/pages/Deeproot logo.webp" className="img-fluid fnb-page-hero-img-col-img"></img>
                </div>
            </div>

          </div>
        </div>
      </section>




       {/* work portfolio */}
            <section className="portfolio">
              <div className="container">
                <h2 className="text-center">
                  Our<span className="every-pr"> Work Portfolio</span>
                </h2>

                <div className="row port-row">
                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src={imageUrl + "Enlite-3.webp"} className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Enlite</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          Enlite’s sparkling mineral water and prebiotic drink range,
                          meant to refresh and rejuvenate customers, required a
                          captivating brand identity, including can and logo design,
                          to attract a young audience. We offered them just that.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src={imageUrl + "Enlite-3.webp"} className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Enlite</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          Enlite’s sparkling mineral water and prebiotic drink range,
                          meant to refresh and rejuvenate customers, required a
                          captivating brand identity, including can and logo design,
                          to attract a young audience. We offered them just that.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
                    <div className="port-div">
                      <img src={imageUrl + "I-organic.webp"} className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>iOrganic</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Label Design</h4>
                            <h4 className="our-port-btn">Packaging</h4>
                          </div>
                        </div>
      
                        <p>
                          For the organic dairy & food brand, iOrganic, we created a
                          vibrant and engaging packaging design. Additionally, we
                          provided professional photography services for their
                          e-commerce sale and advertising purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                          <div className="row port-row">
                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src={imageUrl + "Enlite-3.webp"} className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Enlite</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          Enlite’s sparkling mineral water and prebiotic drink range,
                          meant to refresh and rejuvenate customers, required a
                          captivating brand identity, including can and logo design,
                          to attract a young audience. We offered them just that.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src={imageUrl + "Enlite-3.webp"} className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Enlite</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          Enlite’s sparkling mineral water and prebiotic drink range,
                          meant to refresh and rejuvenate customers, required a
                          captivating brand identity, including can and logo design,
                          to attract a young audience. We offered them just that.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
                    <div className="port-div">
                      <img src={imageUrl + "I-organic.webp"} className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>iOrganic</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Label Design</h4>
                            <h4 className="our-port-btn">Packaging</h4>
                          </div>
                        </div>
      
                        <p>
                          For the organic dairy & food brand, iOrganic, we created a
                          vibrant and engaging packaging design. Additionally, we
                          provided professional photography services for their
                          e-commerce sale and advertising purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* why f and b */}
            <section className="why-fandb-section">
              <div className="container">
              <h2 className="why-fandb-section-head">Why F&B Branding Needs a <span className="why-fandb-section-head-span">Different Approach</span></h2>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">Food and beverage brands don't compete on logic alone. They compete on instinct, trust and split-second shelf appeal. A shopper scanning a quick-commerce grid or a retail aisle decides in seconds whether a pack deserves a second look. Most brands lose that moment before they even get a chance to explain why their product is better. And trust - that’s paramount. Unlike clothing or tech brands, F&B products call for a different level of consumer trust because they’re all about health. A brand that feels unfamiliar and untrustworthy is rarely chosen and stands the risk of being forgotten quickly.</p>
                    </div>
                  </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">Food and beverage brands don't compete on logic alone. They compete on instinct, trust and split-second shelf appeal. A shopper scanning a quick-commerce grid or a retail aisle decides in seconds whether a pack deserves a second look. Most brands lose that moment before they even get a chance to explain why their product is better. And trust - that’s paramount. Unlike clothing or tech brands, F&B products call for a different level of consumer trust because they’re all about health. A brand that feels unfamiliar and untrustworthy is rarely chosen and stands the risk of being forgotten quickly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* everything-a-food */}

            <section className="everything-a-food-section">
              <div className="container">
                
              </div>
            </section>
             
            
                </div>
  );
}

export default page;
