export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from 'react'
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import PagesHero from '@/Components/PagesHero/PagesHero';
import AutoCounter from '@/Components/AutoCounter/AutoCounter';
import DigitalMarketingToggleBtn from '@/Components/DigitalMarketingToggleBtn/DigitalMarketingToggleBtn';
import Image from "next/image";
import "../rebranding/rebranding.css";
import ECataloguesBtn from '@/Components/E-Catalogues-Btn/ECataloguesBtn';
import StandAlonePackaging from '@/Components/StandAlonePackaging/StandAlonePackaging';
import CreativeAgencySwipper from "@/Components/CreativeAgencySwipper/CreativeAgencySwipper";
import Testimonial from '@/Components/Testimonial/Testimonial';
import TalkToUs from '@/Components/TalkToUs/TalkToUs';
import OurConstant from '@/Components/OurConstant/OurConstant';
import Faqs from '@/Components/Faqs/Faqs';
import Form from "@/Components/Form/Form";
import Link from 'next/link';
import "../brand-positioning/brand-positioning.css";
import "../brand-name-suggestion/brand-name-suggestion.css";
import "./brand-identity-design-services.css";

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import BrandIdentityDesignServicesBanner from '@/Components/BrandIdentityDesignServicesBanner/BrandIdentityDesignServicesBanner';






// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("startup-branding-agency", null, false);
  } catch (error) {
    console.log("Startup Branding Agency Error", error);
    return {
      title: "Startup Branding Agency",
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

     let imageUrl = "https://dndesigns.co.in/uploads/pages/";
    
    
        // ---
          await connectDB();
          let pageData;
          try {
            pageData = await getPageById("startup-branding-agency", null, true);
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
        
    
    
        // hero section content
      const heading = "Startup Branding Agency";
      const subHeading = "Building Brands That Earn Trust From Day One";
      const para = "Your product is good. You solved the hard part. The product works, the unit economics hold, and you know exactly who you're selling to. That's not the problem. The problem is that you don't know how to present and communicate yet. Most founders underestimate how early brand perception sets the tone. Investors read it. Retailers read it. Customers decide in seconds. A startup branding agency like DN Designs understands this pressure on startups. That’s why we don’t design your brand based on visuals and trends alone. We build your brand around research, strategy and creativity so it drives a desired impact and delivers meaningful results.  ";



  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Recognition & Recall",
      description:
        "People recognise and remember you without being reminded. Consistency across every touchpoint builds the kind of recognition that makes someone think of you first when the need finally arrives.",
        image: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagedesktop1.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Credibility",
      description:
        "Investors, retailers and customers make snap judgements. A brand built on strategy, not instinct, signals that the business behind it knows exactly what it's doing and where it's going.",
       image: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagedesktop2.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Efficiency",
      description:
        "When identity is solid, and messaging is clear, every campaign has something to stand on. Less explaining and convincing is needed. Marketing costs reduce when the brand is doing its job.",
      image: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagedesktop3.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Steady Growth",
      description:
        "Good branding goes beyond present success; it lays the foundation of future growth. Every campaign, every shelf appearance, and every conversation consistently reinforce who you are. ",
      image: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagedesktop4.jpg",
    }
  ];

  const mobileCrads = [
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagemobile1.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagemobile2.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagemobile3.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagemobile4.jpg",
    },
  ];

    
    
      
    
      
        
    
    // faqs
         const leftFaqs = [
           {
              question: "Why startups need a branding agency? ",
              answer:
                (<>Most founders treat branding as something to sort after the product is ready. Also, a majority of startups struggle to communicate their idea to their target audience. They lose on perceived value, which affects what they can charge, where they can sell, and the time it takes to build word-of-mouth. A branding agency for startups helps new businesses overcome these challenges and launch strongly.</>)
            },
            {
              question: "What does a startup branding agency actually do?",
              answer:
                (<>More than designing a logo, a startup branding agency helps a brand define its positioning, create its visual identity, develop its core messaging pillars and establish its digital presence so that the business looks and feels like a brand worth trusting and considering. </>)
            },
            {
              question: "How is branding different from marketing?",
              answer:
                (<>Branding helps you create a distinguished image in the market through strategic positioning, visual identity, and brand communication. Marketing is how you tell people about it through advertising and other strategic campaigns. </>)
            },
            {
              question: "What's a typical timeline for a branding project?",
              answer:
                "Timelines vary with the scope of work. Branding projects move in phases from research, strategy, design, visual direction, revisions and final delivery. Once we understand your needs, we share a clear timeline tailored according to your needs.    ",
            },

             {
              question: "How much does brand strategy cost?",
              answer:
                "It depends on various factors such as the depth of market research, product type, category, and scope of work.   ",
            },
        
            
          ];
        
          const rightFaqs = [
            {
              question: "What's included in a brand identity package?",
              answer:
                "It usually includes logo design variations, colour palette, typography system, iconography and graphic elements, brand guidelines and social media templates.  ",
            },
            {
              question:
                "Do we require branding before building a website? ",
              answer:
                (<>Yes. A website built without a clear brand strategy tends to look generic. The brand defines the visual direction, tone and messaging style. The website, then, becomes an expression, not a collection of pages. </>)
            },
            {
              question:
                "What's the difference between a startup branding agency and a freelancer? ",
              answer:
                "A freelancer can execute design. However, a branding agency for startups goes beyond design. It brings strategy, creativity, multiple specialisations and accountability across the full scope. The difference in output is usually significant. ",
            },
            
             {
              question:
                "What industries do you specialise in for startup branding? ",
              answer:
                "We have significant experience across industries. These include D2C, food and beverage, nutraceuticals, consumer health and lifestyle products.  ",
            }, 
          ];
        
          // form section content
          const FormHead = "Let's Discuss Over A Cup Of Coffee  ";
          const FormPara = "Startups have a lot to accomplish within a limited budget and timeframe. In this chaotic scenario, branding often takes a backseat. But it is fundamental for long-term business growth. That's where a startup branding agency like DN Design comes into the picture. We work with startups at every stage, and one of the first things we do is listen. No deck required, no commitment. Just bring the problem. We'll tell you honestly what it needs.";
    
          const pageName = "startup-branding-agency";
    
  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "startup-branding-agency"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

    {/*Breadcrumb*/}
          <section>
            <Breadcrumb />
          </section>


           {/* <AtOneAm/> */}

    {/* about hero */}
      <section>
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>


      {/* brand positioni banner image */}
      <section className="brand-positioning-banner-img">
        <div className='container'>
          <div className="brand-positioning-banner-img-desktop">
         
           <Image
                          src="https://dndesigns.co.in/uploads/pages/startupbrandingdesktop.jpg"
                          alt="brand positioning"
                          width={1500}
                          height={800}
                          className="brand-positioning-banner-img-desktop-img"
                           sizes="(max-width:768px) 100vw, 100vw"
                          priority
                        />
                        
          </div>
          <div className="brand-positioning-banner-img-mobile">
         
           <Image
                          src="https://dndesigns.co.in/uploads/pages/startupbrandingmobile.jpg"
                          alt="brand positioning"
                          width={1050}
                          height={1190}
                          className="brand-identity-banner-img-desktop-img-mobile"
                           sizes="(max-width:768px) 100vw, 100vw"
                          priority
                        />
          </div>
        </div>
      </section>

      {/* <BrandIdentityDesignServicesBanner/> */}



     {/* We Are The Leading Video */}
      <section className="we-are-the-leading">
        <div className="container">
          <div className="row">
            <h3>
             Startup Branding 
              <span className="every-pr">
                {" "}
                Problem
              </span>{" "}
            </h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
               Founders typically build their brand the way they build everything else in a startup: on instinct, with whoever's available. A cousin who does Canva. A logo from Fiverr. A colour palette was picked because it felt right. None of it is wrong exactly. But it creates a brand that looks assembled rather than purposeful. If your brand doesn't connect instantly, even a great product can't rescue a first impression that feels unprofessional. The result is a brand that struggles at every step - right from attracting customers to achieving sustainable growth.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
               The deeper issue is that branding decisions made at the start are expensive to undo. Packaging that doesn't work at retail. A website that confuses more than it converts. Visual language that doesn't scale. Inconsistent messaging on different platforms. By the time the gaps become obvious, the cost of lost customers, investor hesitation and redesign budgets becomes far higher than getting it right from the beginning. A branding agency for startups can help new businesses sidestep expensive branding errors and create a brand that stands out from day one. 
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* When to Rewrite Your
      Brand Story */}
        <section className="characteristics-of-good">
        <div className="container">
          {/* 1st row */}
          <div className="row">
          <div className='rewrite-your-brand-story-head'>
            <h2 className="rewrite-your-brand-story-head-mian">
             Our Services   {" "}<br></br>
              <span className="every-pr">  Branding Solutions For Startups</span>
            </h2>
            <div>
            <TalkToUs/>
            </div>
            </div>
            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/biFrame 427324114.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Brand Identity Design</h3>
                  <p>
                      From naming and logo to the full visual system. We build an identity that signals where
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Identity Design</h3>
                  <p>
                 From naming and logo to the full visual system. We build an identity that signals where you're going, not just where you are. One that earns its place in the market without needing an explanation. 
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/biFrame 427324115 (9).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Packaging Design</h3>
                  <p>
                   Retailers and customers see for three seconds. We design packaging that communicates
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Packaging Design</h3>
                  <p>
                   Retailers and customers see for three seconds. We design packaging that communicates clearly under that pressure, with the right structure, hierarchy, and shelf presence that converts browsers into buyers.  
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/biGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Website Design</h3>
                  <p>
                     Your website works when you don't. We design and build sites that load fast, communicate
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Website Design</h3>
                  <p>
                    Your website works when you don't. We design and build sites that load fast, communicate without friction, turn curiosity into enquiries, and guide the right visitors toward taking the desired next step. 
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/bidgdGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Digital Marketing</h3>
                  <p>
                    Today, a majority of your customers explore, engage, and shop online. We offer strategic 
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Digital Marketing</h3>
                  <p>
                 Today, a majority of your customers explore, engage, and shop online. We offer strategic digital marketing services, like social media and influencer marketing, that help you reach, engage, and convert the right audience. 
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="row  characteristics-of-good-row-2">
            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/birdfFrame 427324114.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Photography </h3>
                  <p>
                     Visuals create connections in a way words alone cannot. We offer professional photography
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Photography </h3>
                  <p>
                 Visuals create connections in a way words alone cannot. We offer professional photography services to help you capture attention, build connection, and inspire action. Impactful in every way! 

                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/erkdshbfjGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Animation</h3>
                  <p>
                       Motion communicates what static design can't. We create brand animations that simplify
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Animation</h3>
                  <p>
                Motion communicates what static design can't. We create brand animations that simplify complex ideas, add personality to digital touchpoints and give your startup a presence that feels considered and current. 
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            {/* <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/jewrbhfjGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Strategic Brand Roadmap </h3>
                  <p>
                     We build a structured plan connecting strategy to execution, so design, packaging
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Strategic Brand Roadmap </h3>
                  <p>
                   We build a structured plan connecting strategy to execution, so design, packaging and campaigns down the line aren't built on guesswork.

                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div> */}

            {/* <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/3relwshfddjvhFrame 427324112 (13).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Brand Tagline  </h3>
                  <p>
                     The final element of your brand identity is your tagline, which mostly appears with the brand name. It is a short, catchy phrase that easily sticks
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Tagline  </h3>
                  <p>
                The final element of your brand identity is your tagline, which mostly appears with the brand name. It is a short, catchy phrase that easily sticks in the customers’ minds. A good tagline is timeless and conveys the brand’s message, values or promise simply and clearly. 

                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div> */}
          </div>
        </div>
      </section>


      

      


      {/* Creative Catalogue Designing - Our Process desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            How We    {" "}
            <span className="every-pr"> Work  </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2> Discovery</h2>
                  <p>
                Before anything gets designed, we spend time understanding the business - what the product is, who you're selling to, who you're competing with, what you're actually trying to say and where the brand needs to perform. This isn't redundant paperwork. It's the foundation everything else sits on.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2> Strategy</h2>
                  <p>
                Based on the above gathered data, we define the brand's positioning, personality, visual direction and core messages. This works as a brief that guides every creative decision later. So design choices aren't made on taste alone, but on what the brand needs to communicate.
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
                 Identity, visuals, packaging, and digital touchpoints are conceptualised and designed as per the strategy and are refined with your feedback. We work in clear rounds, so feedback is structured, and the process moves without becoming a loop. 
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Launch & Grow</h2>
                  <p>
                  We review, adjust and finalise everything for a polished brand delivery. But we don't hand over files and disappear. Post-launch. We help you apply the brand across your website, social media, packaging and marketing assets. We also support your brand through digital marketing, SEO and performance tracking to ensure the brand that launched is the one that compounds.
                  </p>
                </div>
              </div>
            </li>

            {/* <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Brand Architecture & Messaging Framework</h2>
                  <p>
                   With a clear, distinct positioning in place, we now help build a brand architecture and messaging framework. The latter revolves around the core messaging, brand pillars, tone and voice. This works as a map for your whole team to work.
                  </p>
                </div>
              </div>
            </li> */}

            

             

          </ul>
        </div>
      </section>



      {/* Creative Catalogue Designing - Our Process mobile view */}
      <section className="creating-your-brand-mobile">
        <div className="conatiner">
          <h2 className="text-center our-brand-heading-a-mobile">
            How We  
            <span className="every-pr">  Work </span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Discovery</h2>
                  <p>
                  Before anything gets designed, we spend time understanding the business - what the product is, who you're selling to, who you're competing with, what you're actually trying to say and where the brand needs to perform. This isn't redundant paperwork. It's the foundation everything else sits on.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2> Strategy</h2>
                  <p>
                Based on the above gathered data, we define the brand's positioning, personality, visual direction and core messages. This works as a brief that guides every creative decision later. So design choices aren't made on taste alone, but on what the brand needs to communicate.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Design</h2>
                  <p>
                 Identity, visuals, packaging, and digital touchpoints are conceptualised and designed as per the strategy and are refined with your feedback. We work in clear rounds, so feedback is structured, and the process moves without becoming a loop.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Launch & Grow</h2>
                  <p>
                   We review, adjust and finalise everything for a polished brand delivery. But we don't hand over files and disappear. Post-launch. We help you apply the brand across your website, social media, packaging and marketing assets. We also support your brand through digital marketing, SEO and performance tracking to ensure the brand that launched is the one that compounds.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* standalone section */}
            <section className="standalone-sec">
                    <div className="container">
                      <div className="row">
                        <h2 className="text-center headg">
                          What Good Startup   {" "}
                          <span className="every-pr">  Branding Actually Builds</span>{" "}
                        </h2>
                      </div>
                    </div>
                    <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />    
                  </section>



      
      {/* Why DN Designs? desktop*/}
            <section className="why-dn-designs">
              <div className="container">
                <div className="row">
                 
                  <div className="div-of-abs-img">
                       <img
                    src={"https://dndesigns.co.in/uploads/pages/creative_agency_5.jpg"}
                    alt="why-dn-designs"
                    className="abs-img abs-img-1"
                  />
      
                  <img
                    src={"https://dndesigns.co.in/uploads/pages/creative_agency_1.jpeg"}
                    alt="why-dn-designs"
                    className="abs-img abs-img-2"
                  />
      
                  <img
                    src={"https://dndesigns.co.in/uploads/pages/creative_agency_2.jpg"}
                    alt="why-dn-designs"
                    className="abs-img abs-img-3"
                  />
      
                  <img
                    src={"https://dndesigns.co.in/uploads/pages/creative_agency_3.jpg"}
                    alt="why-dn-designs"
                    className="abs-img abs-img-4"
                  />
      
                  <img
                    src={"https://dndesigns.co.in/uploads/pages/creative_agency_4.jpg"}
                    alt="why-dn-designs"
                    className="abs-img abs-img-5"
                  />
                  </div>
      
                </div>
      
                <div className="row why-dn-sec-content-row">
                  <div className="col-12 col-lg-6">
                    <h2 className="why-dn-head">Why DN Designs </h2>
                    <p className="why-dn-para">
                   Startups look for a branding agency that can transform their vision and ambition into reality – into credible and scalable brands. And that’s what we, at DN Designs, deliver. We offer strategic guidance and compelling designs that help businesses stand out in a competitive market. We build brands that look professional, communicate with confidence, and help you achieve both immediate goals and long-term growth.
                    </p>
                  </div>
      
                  <div className="col-12 col-lg-6 why-dn-sec-content-btn-col">
                    <TalkToUs/>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Why DN Designs? mobile*/}
      
            <div className="why-dn-designs-mobile">
              <div className="container">
              <div className="why-dn-designs-mobile-content">
              <h2 className="why-dn-designs-mobile-head">Why DN Designs</h2>
                <p className="why-dn-designs-mobile-para">Startups look for a branding agency that can transform their vision and ambition into reality – into credible and scalable brands. And that’s what we, at DN Designs, deliver. We offer strategic guidance and compelling designs that help businesses stand out in a competitive market. We build brands that look professional, communicate with confidence, and help you achieve both immediate goals and long-term growth.</p>
                <TalkToUs/>
                </div>
      
                <div className="row">
                  <div className="col-6">
                     <img
                    src={"https://dndesigns.co.in/uploads/pages/creative_agency_5.jpg"}
                    alt="why-dn-designs"
                    className="img-fluid"
                  />
                  </div>
                  <div className="col-6">
                     <img
                    src={"https://dndesigns.co.in/uploads/pages/2_mob.jpg"}
                    alt="why-dn-designs"
                    className="img-fluid"
                  />
                  </div>
                </div>
      
                 <div className="row why-dn-designs-mobile-mid-div">
                  <div className="col-12">
                     <img
                    src={"https://dndesigns.co.in/uploads/pages/creative_agency_1.jpeg"}
                    alt="why-dn-designs"
                    className="img-fluid"
                  />
                  </div>
                </div>
      
                <div className="row">
                  <div className="col-6">
                     <img
                    src={"https://dndesigns.co.in/uploads/pages/3_mob.jpg"}
                    alt="why-dn-designs"
                    className="img-fluid"
                  />
                  </div>
                  <div className="col-6">
                     <img
                    src={"https://dndesigns.co.in/uploads/pages/4_mob.jpg"}
                    alt="why-dn-designs"
                    className="img-fluid"
                  />
                  </div>
                </div>
      
              </div>
            </div>



     {/* creative agency swipper  */}
      {/* <CreativeAgencySwipper cityPagesSlideDataCreativeAgency={cityPagesSlideDataCreativeAgency}/> */}


      {/* testimonial  */}
      {/* <Testimonial /> */}


    


     {/*.....our-constant-companions...... */}
     {/* <section className='our-constant-clients-section'>
      <OurConstant />
      </section> */}

       {/* faqs */}
      
            <section className="faqs">
              <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
             
            </section>
      
            {/* Form */}
            <Form FormHead={FormHead} FormPara={FormPara} />
    


      
        

      

      


      


     
    </div>
  )
}

export default page
