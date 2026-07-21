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
import "./go-to-market-strategy.css";

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
      const heading = "Go-To-Market Strategy Services";
      const subHeading = "Helping Brands Launch Smarter And Scale Faster";
      const para = "Most brands launch with a product and a prayer and then spend the next six months figuring out what they should've decided on day one. A GTM strategy is what they needed. A Go‑To‑Market (GTM) strategy is the plan that gets your product in front of the right customers at the right time, across the right channels. It answers who will buy, why they’ll buy, where you’ll be discovered and how you’ll win customers. It covers positioning, pricing, channel mix, messaging and launch sequencing. A GTM strategy helps companies launch new products, enter new markets or reposition offerings the right way. For startups and established brands alike, a GTM strategy cuts wasted spend, sharpens targeting and turns a hopeful launch into a predictable one.   ";



  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Accelerated Go-to-Market",
      description:
        "Brands without a GTM plan spend months testing what should've been decided before launch. With GTM, you enter faster, spend sharper and hit product-market fit without burning through your first-year budget finding it.",
        image: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagedesktop1.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Buyer Clarity",
      description:
        "You actually know who your customers are. And, when you know exactly who's buying, why they're buying and what makes them switch, then your product, pricing and messaging stop missing and start converting.",
       image: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagedesktop2.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Smarter Resource Allocation",
      description:
        "Scattered resource allocation produces scattered results. A GTM strategy ensures optimal use of your budget, time and talent so you invest where it counts, minimise waste, and improve profitability.",
      image: "https://dndesigns.co.in/uploads/pages/startupbrandinghoverimagedesktop3.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Category Edge",
      description:
        "You don't enter reactive; you enter positioned. Stress-tested pricing, defined differentiation and a sequenced launch so you're not catching up to the category; you're setting the pace in it. ",
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
              question: "What is a go-to-market strategy? ",
              answer:
                (<>It's the plan that connects your product to your market, covering pricing, channels, audience and positioning. Without it, you're launching on instinct instead of a roadmap built on actual buyer behaviour and market data.</>)
            },
            {
              question: "At what point should a brand actually build one?",
              answer:
                (<>Before launch is ideal, but it's never too late. New product, new market, new pricing tier- any of these moments call for a fresh GTM plan, not a recycled version of your last one. </>)
            },
            {
              question: "Why does GTM strategy even matter?",
              answer:
                (<>Because it removes guesswork. You get faster traction, better budget use, sharper customer targeting, and a real competitive edge instead of finding out what doesn't work the expensive way. </>)
            },
            {
              question: "How do you pick the right agency for GTM services?",
              answer:
                "Look past the pitch deck. Ask about their actual category experience, whether they stay for execution and if they can show real outcomes, not just frameworks they've read about.    ",
            }
        
            
          ];
        
          const rightFaqs = [
            {
              question: "Do GTM services work for an existing product or only for new launches?",
              answer:
                "Both. Existing products need GTM just as much when entering a new channel, market, or price tier. The frameworks shift slightly, but the core discipline stays the same.  ",
            },
            {
              question:
                "What's the right GTM strategy approach for a startup specifically? ",
              answer:
                (<>Startups need speed and focus more than scale. The best approach picks one or two channels to win first. It proves the model, then expands instead of trying to be everywhere at once.</>)
            },
            {
              question:
                "How do you actually know if a GTM strategy is working? ",
              answer:
                "Track customer acquisition cost, conversion rate by channel, and time to revenue. If those numbers are improving month over month, the strategy's doing its job; if not, it needs revisiting. ",
            }
          ];
        
          // form section content
          const FormHead = "Let's Talk Over A Cup Of Coffee ";
          const FormPara = (<>Most brands don't fail because the product's bad; they fail because nobody mapped how it actually reaches the right customer at the right price through the right channel. If that's where you're stuck, we'd rather hear it straight over coffee than over a sales call.<br></br> Bring the problem, we'll bring a plan.</>);
    
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
      {/* <section className="we-are-the-leading">
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
      </section> */}


       {/* Creative Catalogue Designing - Our Process desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            The Decisions That     {" "}
            <span className="every-pr"> Define Market Success  </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2> Where to Sell</h2>
                  <p>
               We map the channels that actually fit your product and buyer, not the trendy ones. Online, offline, marketplace, or all three, decided by data, not assumption.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2> Who to Sell To</h2>
                  <p>
                Real customer segmentation, not a vague "25-35, urban, tech-savvy" persona slide. We find your actual buyer and define what makes them act.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>How to Price</h2>
                  <p>
               Pricing isn't a guess based on competitors. We build it around perceived value, margin health, and what your category will actually bear.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>How to Distribute</h2>
                  <p>
                  From D2C to retail to quick commerce, we structure distribution to match demand rather than create supply chain headaches later.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>How to Acquire Customers</h2>
                  <p>
                  We build the acquisition engine - paid, organic, or partnerships - sized to your budget. It’s built to compound, not just spike once.
                  </p>
                </div>
              </div>
            </li>


             <li className="card-create" id="card6-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">06</div>
                <div className="col-10">
                  <h2>How to Scale</h2>
                  <p>
                  Growth without a system breaks things. We build the playbook that lets you grow 2x or 10x without your operations falling apart.
                  </p>
                </div>
              </div>
            </li>


             <li className="card-create" id="card7-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">07</div>
                <div className="col-10">
                  <h2>How to Retain</h2>
                  <p>
                  Acquiring a customer is the easy half. We build the loop of experience, communication, and value that keeps them coming back.
                  </p>
                </div>
              </div>
            </li>

            

             

          </ul>
        </div>
      </section>



      {/* Creative Catalogue Designing - Our Process mobile view */}
      <section className="creating-your-brand-mobile">
        <div className="conatiner">
          <h2 className="text-center our-brand-heading-a-mobile">
            The Decisions  
            <span className="every-pr">  That Define Market Success  </span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Where to Sell</h2>
                  <p>
                 We map the channels that actually fit your product and buyer, not the trendy ones. Online, offline, marketplace, or all three, decided by data, not assumption.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2> Who to Sell To</h2>
                  <p>
                Real customer segmentation, not a vague "25-35, urban, tech-savvy" persona slide. We find your actual buyer and define what makes them act.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>How to Price</h2>
                  <p>
                 Pricing isn't a guess based on competitors. We build it around perceived value, margin health, and what your category will actually bear.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>How to Distribute</h2>
                  <p>
                   From D2C to retail to quick commerce, we structure distribution to match demand rather than create supply chain headaches later.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>How to Acquire Customers</h2>
                  <p>
                   We build the acquisition engine - paid, organic, or partnerships - sized to your budget. It’s built to compound, not just spike once.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">06</h3>
                <div className="card-body-create-mobile">
                  <h2>How to Scale</h2>
                  <p>
                   Growth without a system breaks things. We build the playbook that lets you grow 2x or 10x without your operations falling apart.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">07</h3>
                <div className="card-body-create-mobile">
                  <h2>How to Retain</h2>
                  <p>
                  Acquiring a customer is the easy half. We build the loop of experience, communication, and value that keeps them coming back.
                  </p>
                </div>
              </div>
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
             Our    {" "}<br></br>
              <span className="every-pr">  Go-to-Market Framework </span>
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
                  <h3>Market Entry Strategy</h3>
                  <p>
                      Before you spend a rupee, we map the category, competitive intensity and white space. Entry 
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Market Entry Strategy</h3>
                  <p>
                 Before you spend a rupee, we map the category, competitive intensity and white space. Entry without this is an expensive gamble. We define where to go in, what positioning to lead with, what the rollout sequence should be, and what to sidestep so your first market move is your strongest.
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
                  <h3>Channel Strategy</h3>
                  <p>
                    D2C, B2B, retail, quick commerce, export - there are multiple channels, but not every channel
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Channel Strategy</h3>
                  <p>
                  D2C, B2B, retail, quick commerce, export - there are multiple channels, but not every channel deserves your budget. We rank and prioritise by reach, acquisition cost and category fit, and then build a mix that works in sync, not in silos. So, every touchpoint moves your buyer toward a decision, not away from one. 
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
                  <h3>Quick Commerce Strategy</h3>
                  <p>
                    Q-Commerce is a different game altogether. Visibility, speed and placements all matter at
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Quick Commerce Strategy</h3>
                  <p>
                    Q-Commerce is a different game altogether. Visibility, speed and placements all matter at once. We build listing strategy, pricing and in-app visibility plans for Blinkit, Zepto and Swiggy Instamart, so your brand is not just listed; it’s actually consistently found, clicked and added to cart. 
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
                  <h3>Marketplace Strategy</h3>
                  <p>
                     Being on Amazon, Flipkart, or Nykaa isn't enough. Getting noticed and chosen is equally important. We
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Marketplace Strategy</h3>
                  <p>
               Being on Amazon, Flipkart, or Nykaa isn't enough. Getting noticed and chosen is equally important. We build a full marketplace presence through catalogue strategy, pricing, A+ content and ad structure. All are engineered to win the buy box and drive consistent sales volume, not just impressions.
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
                  <h3>B2B Growth Strategy </h3>
                  <p>
                     Whether you’re selling to institutions, distributors, wholesalers, or corporates, B2B deals move
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>B2B Growth Strategy </h3>
                  <p>
               Whether you’re selling to institutions, distributors, wholesalers, or corporates, B2B deals move slower, and the stakes are higher. We build account-based pipelines, define your ICP, map the decision-making unit, and structure outreach so deals progress rather than stalling in your team's follow-up queue indefinitely. 

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
                  <h3>Retail Expansion Strategy</h3>
                  <p>
                       Shelf space is earned, not given. We plan your rollout from first listing to national distribution, mapping
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Retail Expansion Strategy</h3>
                  <p>
                Shelf space is earned, not given. We plan your rollout from first listing to national distribution, mapping the right distributor network, retail partners, trade margins and merchandising approach so expansion never outpaces what your operations can actually handle. 
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
                    src="https://dndesigns.co.in/uploads/pages/jewrbhfjGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Pricing & Margin Strategy </h3>
                  <p>
                      We build pricing models based on unit economics, not gut feeling. Value-based, competitive
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Pricing & Margin Strategy</h3>
                  <p>
                   We build pricing models based on unit economics, not gut feeling. Value-based, competitive or penetration – we choose whichever fits your category and is backed by margin analysis so you stay profitable as you grow. We also develop distributor and retailer margin structures that motivate them without compromising your profitability.

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
                    src="https://dndesigns.co.in/uploads/pages/3relwshfddjvhFrame 427324112 (13).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Launch Strategy </h3>
                  <p>
                      A launch is more than a product intro; it's a positioning strategy which sets the tone of a brand. We
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Launch Strategy  </h3>
                  <p>
                A launch is more than a product intro; it's a positioning strategy which sets the tone of a brand. We build structured plans with clear sequence, communication strategy and timelines, which simplify team alignment, build anticipation and ensure maximum impact on the day of launch and thereafter. 

                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>
          </div>

                    {/* 3nd row */}
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
                  <h3>Demand Generation Strategy</h3>
                  <p>
                     We build a demand strategy that compounds, not just campaign spikes that die when the budget stops. Grounded
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Demand Generation Strategy </h3>
                  <p>
              We build a demand strategy that compounds, not just campaign spikes that die when the budget stops. Grounded in category behaviour and consumer insights, we structure the paid, owned and earned mix (social, performance, PR, UGC) that fills your pipeline consistently every month.

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
                  <h3>Sales Enablement</h3>
                  <p>
                        A great product loses deals to a prepared competitor every single day. Your sales team shouldn't be
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Sales Enablement</h3>
                  <p>
                A great product loses deals to a prepared competitor every single day. Your sales team shouldn't be winging it in front of a prospect. We build the tools they actually need: sharp pitch decks, conversation scripts, and ready answers to every objection so every client interaction moves forward with purpose. 
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
                    src="https://dndesigns.co.in/uploads/pages/jewrbhfjGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Growth Roadmap </h3>
                  <p>
                     Growth without a plan is just momentum, and momentum runs out. We create a systematic plan backed
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Growth Roadmap</h3>
                  <p>
                   Growth without a plan is just momentum, and momentum runs out. We create a systematic plan backed by market research, consumer behaviour and category insights, with clear milestones, revenue targets and an expansion strategy. Hence, growth is consistent, not reactive. 

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
                    src="https://dndesigns.co.in/uploads/pages/3relwshfddjvhFrame 427324112 (13).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Analytics & Optimisation </h3>
                  <p>
                     Strategy without feedback is a hypothesis. We track performance across channels, identify what's
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Analytics & Optimisation  </h3>
                  <p>
               Strategy without feedback is a hypothesis. We track performance across channels, identify what's working and cut what isn't. We then refine the approach as real market data comes in, keeping the strategy sharp as the market shifts around you. 

                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>
          </div>



        </div>
      </section>


      

      


     

      {/* standalone section */}
            <section className="standalone-sec">
                    <div className="container">
                      <div className="row">
                        <h2 className="text-center headg">
                         What a Winning   {" "}
                          <span className="every-pr">  GTM Strategy Delivers </span>{" "}
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
                  We're not a deck-and-disappear agency. We've built GTM strategies across beverage, retail, and D2C brands in India, and we stick around through execution because a strategy that never leaves the slide deck isn't a strategy; it's a wish.
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
                <p className="why-dn-designs-mobile-para">We're not a deck-and-disappear agency. We've built GTM strategies across beverage, retail, and D2C brands in India, and we stick around through execution because a strategy that never leaves the slide deck isn't a strategy; it's a wish.</p>
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
