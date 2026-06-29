import React from "react";
import LPHeader from "@/Components/LPHeader/LPHeader";
import LPFooter from "@/Components/LPFooter/LPFooter";
import LPMarque from "@/Components/LPMarque/LPMarque";
import "./brand-identity.css";
import OurWorkHomeSection from "@/Components/LPOurWork/OurWorkHomeSection";
import LPTestimonialSwipper from "@/Components/LPTestimonialSwipper/LPTestimonialSwipper";
import LPFAQ from "@/Components/LPFAQ/LPFAQ";
import LPForm from "@/Components/LPForm/LPForm";
import AutoCounter from "@/Components/AutoCounter/AutoCounter";

function page() {
  // marque images
  const topBrands = [
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "Veskn",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/audi logo.webp",
      alt: "Kafoori",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/PB_Business logo.webp",
      alt: "Luxmi",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/iOrganic-Logo.webp",
      alt: "One Science",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/wlues logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/1am.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/enlite logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/nectarpure (1).webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/smartyum logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/Thames logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/veikk logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/Pureluxe.webp",
      alt: "Legal4Sure",
    },
  ];

  const bottomBrands = [
    {
      image: "https://dndesigns.co.in/uploads/pages/bobalist logo.webp",
      alt: "Veskn",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/wjvaghsdvhesgadcv.webp",
      alt: "Kafoori",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/Bachpan logo.webp",
      alt: "Luxmi",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/qualiteq logo.webp",
      alt: "One Science",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/rungta logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/logoconstLet's-Supp.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/david logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/Ekos.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/Brrat.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/fluke logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/one science logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/mr-bomzy logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/3-sisters-logo-1.webp",
      alt: "Legal4Sure",
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Usually, customers prefer to watch an animated video over reading long blogs, manuals or documentation. How do we know this? Well, statistics say this, and we, as consumers, do the same. As an animation company in Noida, we create videos that capture attention, provide the required information, strike an emotional chord with customers and build trust. Want a similar experience for your customers? Let’s discuss your project over a cup of coffee.";
  const pageName = "lp/brand-identity";
  return (
    <div>
      {/* header */}
      <LPHeader />

      {/* hero */}
      <div className="container" id="enquiry-form-desktop">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="hero-left-col-div">

              <div className="hero-col-label">
 <div className="rating-icons">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#CA2734"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#CA2734"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#CA2734"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#CA2734"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#CA2734"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <span className="hero-label-para">Trusted by India's growing brands</span>
              </div>

              <h1 className="hero-head">
                Your Creative Partner for <span className="hero-head-span">Packaging, Branding & Digital</span>
                Experiences
              </h1>
              <p className="hero-para-desc">
                We help FMCG, Pharma, Healthcare and Consumer brands build
                memorable identities through strategic branding, packaging, web
                design and marketing creatives.
              </p>


               <div className="lpform-right-col-div-mobile" id="enquiry-form">
          <div className="lpform-right-col-div">
            <LPForm pageName={pageName} />
            </div>
            </div>

              {/* hero counter row */}
              <div className="hero-counter-row-div-for-desktop">
              <div className="row">
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={68} />%
                      </h3>
                      <p>of the global population uses the Internet</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={63} />%
                      </h3>

                      <p>of the global population are social media users.</p>
                    </div>
                  </div>
                </div>
              </div>


             

              {/* hero counter row */}
              
              <div className="row">
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={68} />%
                      </h3>
                      <p>of the global population uses the Internet</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={63} />%
                      </h3>

                      <p>of the global population are social media users.</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="">
          <div className="lpform-right-col-div lpform-right-col-div-desktop" >
            <LPForm pageName={pageName} />
            </div>
            </div>

{/* for mobile aito counter */}
            <div>
    <div className="hero-counter-row-div-for-mobile">
              <div className="row">
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={68} />%
                      </h3>
                      <p>of the global population uses the Internet</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={63} />%
                      </h3>

                      <p>of the global population are social media users.</p>
                    </div>
                  </div>
                </div>
              </div>

                 <div className="row">
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={68} />%
                      </h3>
                      <p>of the global population uses the Internet</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={63} />%
                      </h3>

                      <p>of the global population are social media users.</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            {/* for mobile autocounter*/}
          </div>
        </div>
      </div>

      <div className="red-bg-overlay"></div>

      {/* marque */}

      <div className="brands-that-us">
        <div className="container">
          <h2 className="brands-that-us-head">Brands That <span className="brands-that-us-head-span">Trust Us</span></h2>
          <p className="brands-that-us-para">
            We've partnered with startups, SMEs and established companies across
            multiple industries.
          </p>
        </div>
      </div>
      <div className="marque-div">
        <LPMarque brands={topBrands} speed={22} />
      </div>
      <div className="marque-div">
        <LPMarque brands={bottomBrands} reverse speed={22} />
      </div>

      {/* What We Do */}
      <div className="what-we-do" id="services">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-left-col">
                <p className="what-we-do-lefty-col-para">What We Do</p>
                <h2 className="what-we-do-lefty-col-head">
                  Everything You Need To Build A Strong Brand
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-right-col">
                <p className="what-we-do-right-col-para">
                  End-to-end creative solutions for FMCG, Pharma, Healthcare and
                  Consumer brands.
                </p>
              </div>
            </div>
          </div>

          <div className="row what-we-do-row-div">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <div className="what-we-do-box-div">
                <div className="what-we-do-box-div-img-overlay">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/aboutbranding1%20(2).webp"
                    className="img-fluid what-we-do-box-div-img"
                  ></img>
                  <div className="overlay-lp-page">
                    <div className="overlay-upper">
                      <h2 className="overlay-upper-number">01</h2>
                    </div>
                    <div className="overlay-bottom">
                      <p className="overlay-para">
                        Identity · Strategy · Visual System
                      </p>
                      <h2 className="overlay-head">Branding</h2>
                    </div>
                  </div>
                </div>
                <div className="what-we-do-box-div-content">
                  <p className="what-we-do-box-div-content-para">
                    We build brands that command attention, create loyalty, and
                    communicate value before a word is spoken.
                  </p>
                  <div className="what-we-do-spans-div">
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <div className="what-we-do-box-div">
                <div className="what-we-do-box-div-img-overlay">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/communicationabout2.webp"
                    className="img-fluid what-we-do-box-div-img"
                  ></img>
                  <div className="overlay-lp-page">
                    <div className="overlay-upper">
                      <h2 className="overlay-upper-number">02</h2>
                    </div>
                    <div className="overlay-bottom">
                      <p className="overlay-para">
                        Identity · Strategy · Visual System
                      </p>
                      <h2 className="overlay-head">Branding</h2>
                    </div>
                  </div>
                </div>
                <div className="what-we-do-box-div-content">
                  <p className="what-we-do-box-div-content-para">
                    We build brands that command attention, create loyalty, and
                    communicate value before a word is spoken.
                  </p>
                  <div className="what-we-do-spans-div">
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                  </div>
                 
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <div className="what-we-do-box-div">
                <div className="what-we-do-box-div-img-overlay">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/aboutuswebsite.webp"
                    className="img-fluid what-we-do-box-div-img"
                  ></img>
                  <div className="overlay-lp-page">
                    <div className="overlay-upper">
                      <h2 className="overlay-upper-number">03</h2>
                    </div>
                    <div className="overlay-bottom">
                      <p className="overlay-para">
                        Identity · Strategy · Visual System
                      </p>
                      <h2 className="overlay-head">Branding</h2>
                    </div>
                  </div>
                </div>
                <div className="what-we-do-box-div-content">
                  <p className="what-we-do-box-div-content-para">
                    We build brands that command attention, create loyalty, and
                    communicate value before a word is spoken.
                  </p>
                  <div className="what-we-do-spans-div">
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Brand Identity</span>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our work */}
      <div id="our-work">
      <OurWorkHomeSection />
      </div>

      {/* testimonial */}
      <div  id="testimonials">
      <LPTestimonialSwipper/>
      </div>
      
      {/* LPFAQ */}
      <div id="faq">
      <LPFAQ />
      </div>

      {/* footer */}
      <LPFooter />
    </div>
  );
}

export default page;
