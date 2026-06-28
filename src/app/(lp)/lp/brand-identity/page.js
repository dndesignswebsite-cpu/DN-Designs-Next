import React from "react";
import LPHeader from "@/Components/LPHeader/LPHeader";
import LPFooter from "@/Components/LPFooter/LPFooter";
import LPMarque from "@/Components/LPMarque/LPMarque";
import "./brand-identity.css";
import OurWorkHomeSection from "@/Components/OurWorkHomeSection/OurWorkHomeSection";
import LPTestimonialSwipper from "@/Components/LPTestimonialSwipper/LPTestimonialSwipper";
import LPFAQ from "@/Components/LPFAQ/LPFAQ";
import LPForm from "@/Components/LPForm/LPForm";

function page() {
  // marque images
  const topBrands = [
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "Veskn",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "Kafoori",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/audi logo.webp",
      alt: "Luxmi",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "One Science",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "Legal4Sure",
    },
  ];

  const bottomBrands = [
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "Veskn",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "Kafoori",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "Luxmi",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "One Science",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "Legal4Sure",
    },
  ];

   // form section content
      const FormHead = "Let’s Discuss Over a Cup of Coffee";
      const FormPara =
        "Usually, customers prefer to watch an animated video over reading long blogs, manuals or documentation. How do we know this? Well, statistics say this, and we, as consumers, do the same. As an animation company in Noida, we create videos that capture attention, provide the required information, strike an emotional chord with customers and build trust. Want a similar experience for your customers? Let’s discuss your project over a cup of coffee.";
      const pageName = "about-us";
  return (
    <div>
      {/* header */}
      <LPHeader />

      {/* hero */}
      <div className="container">
      <div className="row">

      <div className="col-12 col-sm-12 col-md-12 col-lg-6">

      </div>

      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
      <LPForm  pageName={pageName}/>
      </div>

      </div>
      </div>

<div className="red-bg-overlay"></div>


      {/* marque */}

      <div className="brands-that-us">
        <div className="container">
          <h2 className="brands-that-us-head">Brands That Trust Us</h2>
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
      <div className="what-we-do">
        <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="what-we-do-left-col">
              <p className="what-we-do-lefty-col-para">What We Do</p>
              <h2 className="what-we-do-lefty-col-head">Everything You Need To Build A Strong Brand</h2>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div className="what-we-do-right-col">
              <p className="what-we-do-right-col-para">
                End-to-end creative solutions for FMCG, Pharma, Healthcare and Consumer brands.
              </p>
            </div>
          </div>
        </div>

        <div className="row what-we-do-row-div">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
            <div className="what-we-do-box-div">
            <div className="what-we-do-box-div-img-overlay">
              <img src="https://dndesigns.co.in/uploads/avatars/Hero.webp" className="img-fluid what-we-do-box-div-img"></img>
              <div className="overlay">
              <div className="overlay-upper">
                <h2 className="overlay-upper-number">01</h2>
              </div>
              <div className="overlay-bottom">
                <p className="overlay-para">Identity · Strategy · Visual System</p>
                <h2 className="overlay-head">Branding</h2>
                </div>
              </div>
              </div>
              <div className="what-we-do-box-div-content">
                <p className="what-we-do-box-div-content-para">We build brands that command attention, create loyalty, and communicate value before a word is spoken.</p>
                <div className="what-we-do-spans-div">
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                </div>
                <p className="start-your-jouney-para">Start Your Journey Now</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
            <div className="what-we-do-box-div">
            <div className="what-we-do-box-div-img-overlay">
              <img src="https://dndesigns.co.in/uploads/avatars/Hero.webp" className="img-fluid what-we-do-box-div-img"></img>
              <div className="overlay">
              <div className="overlay-upper">
                <h2 className="overlay-upper-number">02</h2>
              </div>
              <div className="overlay-bottom">
                <p className="overlay-para">Identity · Strategy · Visual System</p>
                <h2 className="overlay-head">Branding</h2>
                </div>
              </div>
              </div>
              <div className="what-we-do-box-div-content">
                <p className="what-we-do-box-div-content-para">We build brands that command attention, create loyalty, and communicate value before a word is spoken.</p>
                <div className="what-we-do-spans-div">
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                </div>
                <p className="start-your-jouney-para">Start Your Journey Now</p>
              </div>
            </div>
          </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
            <div className="what-we-do-box-div">
            <div className="what-we-do-box-div-img-overlay">
              <img src="https://dndesigns.co.in/uploads/avatars/Hero.webp" className="img-fluid what-we-do-box-div-img"></img>
              <div className="overlay">
              <div className="overlay-upper">
                <h2 className="overlay-upper-number">03</h2>
              </div>
              <div className="overlay-bottom">
                <p className="overlay-para">Identity · Strategy · Visual System</p>
                <h2 className="overlay-head">Branding</h2>
                </div>
              </div>
              </div>
              <div className="what-we-do-box-div-content">
                <p className="what-we-do-box-div-content-para">We build brands that command attention, create loyalty, and communicate value before a word is spoken.</p>
                <div className="what-we-do-spans-div">
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                  <span className="what-we-do-span">Brand Identity</span>
                </div>
                <p className="start-your-jouney-para">Start Your Journey Now</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>


      {/* our work */}
      <OurWorkHomeSection/>

      {/* testimonial */}
      <LPTestimonialSwipper/>


      {/* LPFAQ */}
      <LPFAQ/>



      {/* footer */}
      <LPFooter />
    </div>
  );
}

export default page;
