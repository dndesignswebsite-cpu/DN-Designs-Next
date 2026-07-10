export const dynamic = "force-dynamic";
export const revalidate = 0;

import AutoCounter from '@/Components/AutoCounter/AutoCounter';
import LPForm from '@/Components/LPForm/LPForm'
import LPHeader from '@/Components/BrandingServicesHeader/LPHeader'
import React from 'react'
import "./branding-services.css"
import LPMarque from '@/Components/LPMarque/LPMarque';
import LPTestimonialSwipper from '@/Components/LPTestimonialSwipper/LPTestimonialSwipper';
import LPFAQ from '@/Components/LPFAQ/LPFAQ';
import LPFooter from '@/Components/LPFooter/LPFooter';
import LPWhatWeCanBrandingServices from '@/Components/LPWhatWeCanBrandingServices/LPWhatWeCanBrandingServices';
import LPBrandServicesSwipper from '@/Components/LPBrandServicesSwipper/LPBrandServicesSwipper';
import LPBradingServicesTestimonial from '@/Components/LPBradingServicesTestimonial/LPBradingServicesTestimonial';

// import Script from "next/script";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Image from "next/image";
import LPFooterTwo from '@/Components/LPFooterThree/LPFooterTwo';


// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-services", null, false);
  } catch (error) {
    console.log("Branding Services Error", error);
    return {
      title: "Branding Services",
      robots: "noindex, nofollow",
    };
  }
  // console.log(seo.content)

  return {
    title: seo.metaTitle || seo.title,
    description: seo.metaDescription || seo.description,

    robots: seo.robotsTag || "index, follow",

    alternates: {
      canonical: seo.alternates?.canonical,
    },

    openGraph: {
      type: seo.openGraph?.type || "website",
      title: seo.openGraph?.title || seo.metaTitle,
      description: seo.openGraph?.description || seo.metaDescription,
      url: seo.openGraph?.url || seo.alternates?.canonical,
      images: seo.openGraph?.images?.length
        ? seo.openGraph.images.map((img) => ({
            url: img.url,
            alt: img.alt || seo.title,
            width: img.width || 1200,
            height: img.height || 630,
          }))
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.twitter?.title || seo.metaTitle,
      description: seo.twitter?.description || seo.metaDescription,
      images: seo.twitter?.images?.length
        ? seo.twitter.images.map((img) => img.url)
        : [],
    },
  };
}
// ends here



async function page() {


   // ---
      await connectDB();
      let pageData;
      try {
        pageData = await getPageById("branding-services", null, true);
      } catch (error) {
        notFound();
      }
    
      if (!pageData) {
        notFound();
      }
    
      // ---  SCHEMA CLEANING LOGIC START ---
      let cleanSchema = "";
      if (pageData.headCode) {
        // Script tags remove karke raw JSON nikalna
        cleanSchema = pageData.headCode
          .replace(/<script.*?>/gi, "")
          .replace(/<\/script>/gi, "")
          .trim();
        if (cleanSchema.includes('""')) {
          cleanSchema = cleanSchema.replace(/""/g, '"');
        }
      }
      // --- SCHEMA CLEANING LOGIC END ---



       // faqs content
   const leftFaqs = [
       {
          question: "What does a brand design agency actually do? ",
          answer:
            (<>A branding agency helps you define your positioning, build a visual identity, shape your core messaging and establish a digital presence so your business looks and feels like a brand people trust and choose, not just one they scroll past. </>)
        },
        {
          question: "What kind of branding services do you offer?",
          answer:
            (<>We offer comprehensive branding services including brand strategy, brand identity design, brand positioning, brand naming and packaging design. We also provide rebranding services.</>)
        },
        {
          question: "Do we require branding before building a website? ",
          answer:
            (<>Yes, and it's worth getting it right. A website built without a clear brand strategy tends to feel generic. Your brand sets the direction, tone and messaging of the website; then it becomes a true expression of your brand, not just a set of pages.  </>)
        },
        {
          question: "How involved do we need to be in the process? ",
          answer:
            "Thoroughly. Your insights, data and your point of view are very crucial in building the brand you envisioned.",
        },
        {
          question: "What's the difference between a logo and a brand identity?",
          answer:
            "A logo is one asset. Brand identity is the complete system that includes the logo as well as the brand name, colour, typography, imagery, tone, and other elements that make your brand identifiable. Think of the logo as the face and the identity as the personality of a person.",
        },
        {
          question: "Do you only work with startups, or established businesses too? ",
          answer:
            "We work with both new brands and existing ones looking to sharpen, reposition or rebuild what they already have. ",
        },
        {
          question: "How can we get started with your brand consultant services?",
          answer:
            "Simply fill out our contact form or give us a call. We can schedule a meeting immediately or as per your convenience.",
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
  const pageName = "lp/brand-services";
  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-services"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      <LPHeader/>

      {/* hero */}
      <div className='branding-services-hero'>

       <div className='video-div-hero video-div-hero-desktop'>
        <video
          src="https://dndesigns.co.in/uploads/videos/cube.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="branding-lp-services-video"
        />
      </div>

      <div className='video-div-hero video-div-hero-mobile'>
        <video
          src="https://dndesigns.co.in/uploads/videos/mmmmobilecub2.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="branding-lp-services-video"
        />
      </div>

  
      <div className="container branding-services-hero-container" >
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
                A Full-Service   Branding<span className="hero-head-span"> Agency For Growth, </span>
                 Recognition & Impact
              </h1>
              <p className="hero-para-desc">
               Collaborate with us to build a brand that stands out, inspires confidence, drives loyalty and brings in business profit. We are your trusted partner in your branding journey.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="lpform-dektop-form" id="enquiry-form">
          <div className="lpform-right-col-div" >
            <LPForm pageName={pageName} />
            </div>
            </div>
          </div>

        </div>
      </div>

     
      </div>


      {/* marque */}
            <div className="brands-that-us" id="our-clients">
              <div className="container brands-that-us-head-div">
                <h2 className="brands-that-us-head">Trusted By  <span className="brands-that-us-head-span">Visionary Brands</span></h2>
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



            {/* what we can do brnading services */}
            <div id='services'>
            <LPWhatWeCanBrandingServices/>
            </div>



            {/* process */}
             {/* Creative Catalogue Designing - Our Process desktop view */}
             <div id="our-process">
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Our  {" "}
            <span className="every-pr"> Branding Process </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Discover</h2>
                  <p>
                   Our brand designing services start with research, not assumptions. We understand your audience, your competitors and your market position. This stage sets the base everything else gets built on. Skip it, and every decision made afterwards is guesswork dressed up as a strategy.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Define</h2>
                  <p>
                  Facts become direction here. We lock your positioning, your messaging and the reason why customers should pick you. This is the strategic backbone of the brand, decided before a single visual gets touched, so design has something real to express.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Design</h2>
                  <p>
                   The full visual system of logo, colour and typography is now built. This is where the brand becomes visible. Every choice here answers back to what we defined in stage two, not to trend or taste. 
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2> Apply</h2>
                  <p>
                  Strategy and design mean nothing sitting in a folder. Our creative branding agency now rolls the identity out across packaging, website, social and every surface it needs to live on. We ensure it holds up consistently everywhere, not just on the deck.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Launch & Grow</h2>
                  <p>
                   We don't hand over a brand book and disappear. Post-launch, we stay on to check the brand is being applied correctly, catch where it's drifting and sharpen it wherever needed.
                  </p>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </section>

      </div>

      {/* Creative Catalogue Designing - Our Process mobile view */}
      <section className="creating-your-brand-mobile">
        <div className="conatiner creating-your-brand-mobile">
          <h2 className="text-center our-brand-heading-a-mobile">
            Our 
            <span className="every-pr"> Branding Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-1">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Discover</h2>
                  <p>
                 Our brand designing services start with research, not assumptions. We understand your audience, your competitors and your market position. This stage sets the base everything else gets built on. Skip it, and every decision made afterwards is guesswork dressed up as a strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-2">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Define</h2>
                  <p>
                    Facts become direction here. We lock your positioning, your messaging and the reason why customers should pick you. This is the strategic backbone of the brand, decided before a single visual gets touched, so design has something real to express.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-3">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Design</h2>
                  <p>
                   The full visual system of logo, colour and typography is now built. This is where the brand becomes visible. Every choice here answers back to what we defined in stage two, not to trend or taste. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-4">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Apply</h2>
                  <p>
                   Strategy and design mean nothing sitting in a folder. Our creative branding agency now rolls the identity out across packaging, website, social and every surface it needs to live on. We ensure it holds up consistently everywhere, not just on the deck.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-5">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2> Launch & Grow</h2>
                  <p>
                    We don't hand over a brand book and disappear. Post-launch, we stay on to check the brand is being applied correctly, catch where it's drifting and sharpen it wherever needed.
                  </p>
                </div>
              </div>
            </div>

             

          </div>
        </div>
      </section>


      {/* lp brnad services hover swipper */}
      <div id="our-work">
      <LPBrandServicesSwipper/>
</div>


      {/* testimonials */}
        {/* testimonial */}
      <div  id="testimonials">
      {/* <LPTestimonialSwipper/> */}
      <LPBradingServicesTestimonial/>
      </div>
      
      {/* LPFAQ */}
      <div id="faq">
      <LPFAQ  leftFaqs={leftFaqs}/>
      </div>

      {/* footer */}
      <LPFooter />
      {/* <LPFooterTwo/> */}


            

      
    </div>
  )
}

export default page
