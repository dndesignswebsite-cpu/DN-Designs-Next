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

  // faqs content
   const leftFaqs = [
       {
          question: "What services does DN Designs offer? ",
          answer:
            (<>As a full-service branding & marketing agency, we offer complete branding solutions for modern businesses. We craft your brand strategy and positioning, and design your identity, packaging and catalogue. In addition, we help boost your brand presence through our digital marketing, photography and animation services.</>)
        },
        {
          question: "How are you different from other branding agencies?",
          answer:
            (<>We don’t focus on the visual aspect alone. Instead, we combine research, strategy and creativity to create brands that impress visually and drive recognition, sales and profits.</>)
        },
        {
          question: "Which industries do you serve? ",
          answer:
            (<>We work across multiple industries, including FMCG, food & beverage, pharmaceuticals, nutraceutical, skincare, jewellery, technology, education, tourism, etc.</>)
        },
        {
          question: "Can you work with clients outside India? ",
          answer:
            "Yes, we are a global branding agency and work with both Indian and international clients.",
        },
        {
          question: "Do you work only with established businesses? ",
          answer:
            "We work with all types of businesses - startups, mid-size and well-established. We customise our branding, design and marketing services to suit their requirements.",
        },
        {
          question: "Do you provide packaging design services? ",
          answer:
            "Yes, we provide packaging design services. Our strategic packaging designs help your products stand out and drive purchase in both physical and digital environments.",
        },
        {
          question: "Does your creative agency provide animation and photography services?",
          answer:
            "Yes, our creative agency offers services like product photography, brand shoots, motion graphics and animated videos. These help brands capture attention, build recognition, and connect with their audience across platforms.",
        },    
      ];

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
{/* 
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
              </div> */}

              <h1 className="hero-head">
                A Full-Service Branding <span className="hero-head-span">Agency For Growth, </span>
                 Recognition & Impact
              </h1>
              <p className="hero-para-desc">
               Collaborate with us to build a brand that stands out, inspires confidence, drives loyalty and brings in business profit. We are your trusted partner in your branding journey.
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
                        <AutoCounter target={8} speed={150}/>+
                      </h3>
                      <p> Years of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={300} speed={10}/>+
                      </h3>

                      <p>Brands Built</p>
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
                        <AutoCounter target={10} speed={150}/>+
                      </h3>
                      <p>Industries Served</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={90} speed={40}/>%
                      </h3>

                      <p>Client Retention Rate</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="lpform-dektop-form">
          <div className="lpform-right-col-div lpform-right-col-div-desktop" >
            <LPForm pageName={pageName} />
            </div>
            </div>

{/* for mobile aito counter */}
            <div>
    <div className="hero-counter-row-div-for-mobile">
              <div className="row">
                <div className="col-6 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={8} speed={150}/>+
                      </h3>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={300} speed={10}/>+
                      </h3>

                      <p>Brands Built</p>
                    </div>
                  </div>
                </div>
              </div>

                 <div className="row">
                <div className="col-6 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={10} speed={150}/>+
                      </h3>
                      <p>Industries Served</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6 switch-on-div-main mt-4">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={90} speed={40}/>%
                      </h3>

                      <p>Client Retention Rate</p>
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
      <div className="brands-that-us" id="our-clients">
        <div className="container">
          <h2 className="brands-that-us-head">Trusted By <span className="brands-that-us-head-span">Visionary Brands</span></h2>
          <p className="brands-that-us-para">
            From food & beverage to nutraceuticals, we partner with businesses across industries to create lasting impact.
          </p>
        </div>
      </div>
      <div className="marque-div">
        <LPMarque brands={topBrands} speed={22} />
      </div>
      <div className="marque-div marque-div-2">
        <LPMarque brands={bottomBrands} reverse speed={22} />
      </div>

      {/* What We Do */}
      <div className="what-we-do" id="services">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-left-col">
                <p className="what-we-do-lefty-col-para">Explore our Expertise</p>
                <h2 className="what-we-do-lefty-col-head">
                  Branding, Design & Marketing Services
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-right-col">
                <p className="what-we-do-right-col-para">
                  See how we transform your vision into an impactful brand experience.
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
                        Insightful. Scalable. Powerful 
                      </p>
                      <h2 className="overlay-head">Branding</h2>
                    </div>
                  </div>
                </div>
                <div className="what-we-do-box-div-content">
                  <p className="what-we-do-box-div-content-para">
                    Transform your business into brands people remember and choose. We offer end-to-end branding services - from brand strategy and identity design to packaging design. 
                  </p>
                  <div className="what-we-do-spans-div">
                    <span className="what-we-do-span">Brand Strategy</span>
                    <span className="what-we-do-span">Brand Identity</span>
                    <span className="what-we-do-span">Logo Design</span>
                    <span className="what-we-do-span">Brand Positioning</span>
                    <span className="what-we-do-span">Packaging Design</span>
                    <span className="what-we-do-span">Catalogue Design</span>
                    <span className="what-we-do-span">Brand Naming</span>
                    <span className="what-we-do-span">Rebranding</span>
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
                        Brand-Aligned. Clear. Consistent
                      </p>
                      <h2 className="overlay-head">Communication</h2>
                    </div>
                  </div>
                </div>
                <div className="what-we-do-box-div-content">
                  <p className="what-we-do-box-div-content-para">
                   Fuel your business growth with strategic communications. Our brand communication services help you reach the right audience, build stronger customer relationships and drive success.
                  </p>
                  <div className="what-we-do-spans-div">
                    <span className="what-we-do-span">Digital Marketing</span>
                    <span className="what-we-do-span">Social Media Marketing</span>
                    <span className="what-we-do-span">Influencer Marketing</span>
                    <span className="what-we-do-span">Animation</span>
                    <span className="what-we-do-span">Photography</span>
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
                        User-Centric. Conversion-Oriented
                      </p>
                      <h2 className="overlay-head">Web Design</h2>
                    </div>
                  </div>
                </div>
                <div className="what-we-do-box-div-content">
                  <p className="what-we-do-box-div-content-para">
                   Build a powerful online presence to succeed in the digital-first era. We design visually appealing and user-friendly websites that attract, engage and generate results.
                  </p>
                  <div className="what-we-do-spans-div">
                    <span className="what-we-do-span">UI/UX Design</span>
                    <span className="what-we-do-span">Web Designing</span>
                    <span className="what-we-do-span">SEO</span>
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
      <LPFAQ  leftFaqs={leftFaqs}/>
      </div>

      {/* footer */}
      <LPFooter />
    </div>
  );
}

export default page;
