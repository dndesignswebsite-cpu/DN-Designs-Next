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
    seo = await getPageById("brand-strategy", null, false);
  } catch (error) {
    console.log("Brand Strategy Error", error);
    return {
      title: "Brand Strategy",
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
            pageData = await getPageById("brand-strategy", null, true);
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
      const heading = "Brand Strategy Services";
      const subHeading = "Positioning Brands for Long-Term Success ";
      const para = "You built a great product, but people can't recognise you. You then spent more money acquiring customers through advertising and promotions. Still, your name doesn’t stick, and messages conflict. Inconsistency across ads, website, and packaging confuses customers and wastes budgets. That's not a creative problem; it is a strategy problem. At DN Designs, we cut through the noise. We bring clarity to your messaging, positioning and customer touchpoints to build loyalty and reduce CAC. Confused? Stay with us as we walk you through the fundamentals of brand strategy and the process of our brand strategy services. Don’t forget to check out our FAQs for further insights. ";



  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Faster Decisions",
      description:
        "When everyone knows what the brand stands for, meetings stop turning into opinion wars. Decisions get made against a shared reference, not gut feeling.",
        image: "https://dndesigns.co.in/uploads/pages/brand-strategyhoverdesktop1.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Marketing That Compounds",
      description:
        "Every campaign builds on the last one, not from the start, because there's a consistent foundation underneath. It shows up every single day across every customer interaction.",
       image: "https://dndesigns.co.in/uploads/pages/brand-strategyhoverdesktop2.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Brand Loyalty",
      description:
        "Sharper positioning and a distinct voice mean you stop blending into the category and start being the one people mention by name. It drives customer retention.",
      image: "https://dndesigns.co.in/uploads/pages/brand-strategyhoverdesktop3.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Stronger Pricing Power",
      description:
        "When a brand commands a distinct positioning in the market, it also has the power to uphold a strong price point. ",
      image: "https://dndesigns.co.in/uploads/pages/brand-strategyhoverdesktop4.jpg",
    }
  ];

  const mobileCrads = [
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/brand-strategymobile1.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/brand-strategymobile2.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/brand-strategymobile3.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/brand-strategymobile4.jpg",
    },
  ];

    
    
      
    
      // rebranding our services slider data
        let cityPagesSlideDataCreativeAgency = {
    
           CityPagesSwipper_heading : "Our Services",
           
           slide_1_slide_head : "Brand Design",
           slide_1_slide_para : "Collaborate with us to create a brand that leads. As a creative branding agency, we strategically design your visual and verbal identity, as well as your packaging, website, catalogue, and communication to help you connect with your customers and drive growth. ",
    
           slide_2_slide_head : "Photography",
           slide_2_slide_para : "Visuals shape consumers’ perception in a big way. This is precisely the reason why professional photography is a key driver of your success story. Let our skilled visual storytellers bring your brand to life by building strong visual impressions that boost marketing performance.",
    
           slide_3_slide_head : "Brand Identity Design",
           slide_3_slide_para : "Your brand’s primary identity - your logo - is the first thing people notice. It is also what they remember and recall in the long term. This is why a strong, compelling and memorable logo design becomes non-negotiable. Let’s team up to create a meaningful and impactful logo.",
    
           slide_4_slide_head : "Packaging Design",
           slide_4_slide_para : "On a crowded store shelf or a digital space, if your product struggles to capture attention and build trust, success becomes highly unlikely. This is where we make a difference. We ensure that your packaging attracts, communicates and persuades - all in a matter of a few seconds.",
    
           slide_5_slide_head : "Catalogue Design",
           slide_5_slide_para : "Catalogues are strategic assets. Whether you want to showcase your products, create a strong brand impression, educate your customers, or support your sales team, a well-designed catalogue is essential. Choose us to create a truly effective catalogue. ",
    
           slide_6_slide_head : "Digital Growth Design",
           slide_6_slide_para : "Your brand doesn’t just compete in physical stores; in fact, it faces an equally fierce competition online. A strategic and creative growth plan is, therefore, essential to ensure success. And that’s precisely what we do – design your digital growth path and creatives.",
    
           slide_7_slide_head : "Animation",
           slide_7_slide_para : "Animations have the power to captivate audiences and keep them hooked until the very end. They turn concepts, ideas and messages into compelling visual stories that leave a lasting impact. Do you want to impress your customers with engaging, impactful animation? Start your project with us today!",
    
           slide_8_slide_head : "Brand Video Shoot",
           slide_8_slide_para : "Customers buy only when your brand feels reliable and relatable. Our brand video shoot services help you build this connection and trust. We showcase your product, the team behind the brand and the actual workspace where things unfold. All these make your brand feel credible. So, let’s get started!",
    
           slide_9_slide_head : "Web Design",
           slide_9_slide_para : "A strong UI/UX design establishes the framework of a good website. However, content, graphics, videos, and illustrations form part of it too. And then, there is the website development part as well. Let our experts design and develop a visually appealing and engaging website for your customers.",
    
           slide_10_slide_head : "UI/UX Design",
           slide_10_slide_para : "Have you ever abandoned a website or app because it looks and feels absolutely frustrating? That’s what a bad UI/UX design is, and you definitely do not want this for your brand. Eliminate any chance of a negative customer experience. Hire us to build a user-friendly UI/UX design. ",
        }
    
    
    
         const leftFaqs = [
           {
              question: "What is brand strategy in simple terms? ",
              answer:
                (<>Brand strategy is a streamlined process that makes your business recognisable, trusted and chosen, among competitors. It's a conversation which tells customers who you are, what you do and why they should trust you. It also includes how you interact with customers at every touch point. </>)
            },
            {
              question: "How is brand strategy different from marketing strategy?",
              answer:
                (<>Brand strategy is the blueprint; it defines who you are and why anyone should care about you. Marketing strategy is how you reach out to people who care. Marketing can generate attention, but brand strategy ensures that attention is channelled into trust, loyalty and retention. </>)
            },
            {
              question: "How much do brand strategy services cost?",
              answer:
                (<>It depends on various factors like the size of the company, market research and scope of work. </>)
            },
            {
              question: "Does a small business or startup really need a brand strategy?",
              answer:
                "Yes. When you have a streamlined system from the start, the benefits are not limited to the present. They compound in future. Clarity is the biggest asset for any business, and that is what a good brand strategy gives you.   ",
            },
        
            
          ];
        
          const rightFaqs = [
            {
              question: "How long does the brand strategy process take?",
              answer:
                "The timeline depends on how many stakeholders are involved, what category we are operating in, and how much market research is required.  ",
            },
            {
              question:
                "Should I hire an agency or build a brand strategy in-house? ",
              answer:
                (<>Both can work, but we bring true objectivity. Without the day-to-day echo chamber or internal blind spots, you get a completely fresh, honest look at how the market actually sees you. no assumptions. </>)
            },
            {
              question:
                "What happens if a business skips brand strategy and goes straight to design? ",
              answer:
                "Skipping brand strategy can be a big mistake. It is like designing a movie poster before deciding what the story is. It will grab attention, but only initially. Strategy is what will help you succeed in the long run. ",
            }, 
          ];
        
          // form section content
          const FormHead = "Let's Discuss Over a Cup of Coffee";
          const FormPara = "Building a brand without a strategy is like opening a store without deciding what you sell. You end up spending on design, ads and packaging that don't add up to anything memorable. Your customers feel the disconnect before they can even name it. A clear strategy fixes that at the root, not the surface. So let's sit down, coffee in hand and figure out what your brand is really trying to say. ";
    
          const pageName = "brand-strategy";
    
  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "brand-strategy"}`}
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
                          src="https://dndesigns.co.in/uploads/pages/brand-strategydesktopbanner.jpg"
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
                          src="https://dndesigns.co.in/uploads/pages/brand-strategy-banner-phone size.jpg.jpeg"
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
             Brand Strategy – What Is It
              <span className="every-pr">
                {" "}
                And Why It Matters
              </span>{" "}
            </h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
               Brand strategy is the thinking that sits underneath everything a brand eventually says. It's not just the logo, the colour palette or the tagline. It's the set of decisions that tell who you are, what you stand for, why anyone should care and how you are different from the brand sitting on the next shelf? Getting these answers right is the first step to bringing clarity and conviction to your brand messaging. Get them wrong, and you're left with a brand that looks finished but doesn't actually mean anything to the people you built it for.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
               Brands can spend lakhs on a logo, a website, maybe a whole packaging overhaul, but none of it will move the needle. Not because the design is bad, but because nobody has defined what the brand is supposed to say. So every team - marketing, sales, even the founder - on a sales call ends up describing the brand differently. That's a strategy gap, and it's usually the most expensive thing a growing brand never budgeted for. That gap can be filled by availing brand strategy services. A brand strategy agency like DN Designs can give your brand the direction it needs to succeed.
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
              What You Get with Our   {" "}<br></br>
              <span className="every-pr"> Brand Strategy Services</span>
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
                  <h3>Brand Positioning Strategy</h3>
                  <p>
                     We carve out a distinct place for you in the market - what you stand for, how you
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Positioning Strategy</h3>
                  <p>
                  We carve out a distinct place for you in the market - what you stand for, how you are different and why people should care - so, your brand isn’t another option but the obvious choice.
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
                  <h3>Target Audience Definition & Segmentation</h3>
                  <p>
                   We move beyond age and income. We map real motivations, pain points and buying
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Target Audience Definition & Segmentation</h3>
                  <p>
                   We move beyond age and income. We map real motivations, pain points and buying triggers so messaging lands with the people who will actually buy and advocate for you.  
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
                  <h3>Competitive Landscape Analysis</h3>
                  <p>
                     We study rivals, category moves, industry patterns and white spaces, which
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Competitive Landscape Analysis</h3>
                  <p>
                    We study rivals, category moves, industry patterns and white spaces, which tell us where to play hard, where to be different and what to disrupt without repeating others' mistakes.
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
                  <h3>Brand Messaging Framework</h3>
                  <p>
                    Clear usable messaging for every touchpoint, channel headlines, benefits, proof
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Messaging Framework</h3>
                  <p>
                  Clear usable messaging for every touchpoint, channel headlines, benefits, proof points, so your team talks like a single voice, not a committee with opinions.
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
                  <h3>Brand Voice & Tone Guidelines </h3>
                  <p>
                    We define how the brand sounds. Not just what it says, but the words it uses, the words it
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Voice & Tone Guidelines </h3>
                  <p>
                 We define how the brand sounds. Not just what it says, but the words it uses, the words it avoids, and how tone shifts or doesn't, across channels and moments. 

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
                  <h3>Brand Personality Definition</h3>
                  <p>
                       We define your brand personality to create a consistent tone, voice and core messaging which
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Personality Definition</h3>
                  <p>
                We define your brand personality to create a consistent tone, voice and core messaging which ensures smooth customer interactions and builds long-term trust. 
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
            </div>

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


      {/* standalone section */}
            <section className="standalone-sec">
                    <div className="container">
                      <div className="row">
                        <h2 className="text-center headg">
                          What Changes After  {" "}
                          <span className="every-pr">  Brand Strategy</span>{" "}
                        </h2>
                      </div>
                    </div>
                    <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />    
                  </section>

      


      {/* Creative Catalogue Designing - Our Process desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            How We Build Your   {" "}
            <span className="every-pr"> Brand Strategy </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Discovery & Listening</h2>
                  <p>
                  We start by listening, not presenting. Founders, leadership, sales teams, and sometimes customers, too. We talk to whoever has a real stake in how the brand is being perceived. The goal is to understand the business completely.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Market & Competitor Analysis</h2>
                  <p>
                   We step outside your business and study the landscape around it. Who else is chasing the same customer? What are they saying, and what are the gaps? This mapping tells us where there's room to stand out instead of blending in.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Audience Definition</h2>
                  <p>
                  A brand can't speak to everyone. We narrow it to exactly who the strategy is built for. We understand their habits, motivations and the specific problems your brand solves for them. This becomes the filter for every later decision. 
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Positioning & Differentiation</h2>
                  <p>
                   This is where we define the one thing your brand owns that nobody else can claim, quite the same way. Positioning isn't a tagline. It's a decision about where you sit in the customer's mind relative to various alternatives they have.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Brand Architecture & Messaging Framework</h2>
                  <p>
                   With a clear, distinct positioning in place, we now help build a brand architecture and messaging framework. The latter revolves around the core messaging, brand pillars, tone and voice. This works as a map for your whole team to work.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card6-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">06</div>
                <div className="col-10">
                  <h2>Strategy Validation</h2>
                  <p>
                Before anything ships, we stress-test the thinking. Does it hold up against real customer feedback? Does it survive contact with your sales team's everyday conversations? We adjust before it's locked in, not after. 
                  </p>
                </div>
              </div>
            </li>

              <li className="card-create" id="card7-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">07</div>
                <div className="col-10">
                  <h2>Handover & Activation Support </h2>
                  <p>
                A strategy that lives in a PDF nobody opens is wasted work. We hand it over with practical guidance on applying it across your website, marketing, sales conversations and any future design work so it actually gets used.
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
            How We Build Your  
            <span className="every-pr">  Brand Strategy</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Discovery & Listening</h2>
                  <p>
                  We start by listening, not presenting. Founders, leadership, sales teams, and sometimes customers, too. We talk to whoever has a real stake in how the brand is being perceived. The goal is to understand the business completely.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Market & Competitor Analysis</h2>
                  <p>
                 We step outside your business and study the landscape around it. Who else is chasing the same customer? What are they saying, and what are the gaps? This mapping tells us where there's room to stand out instead of blending in.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Audience Definition</h2>
                  <p>
                  A brand can't speak to everyone. We narrow it to exactly who the strategy is built for. We understand their habits, motivations and the specific problems your brand solves for them. This becomes the filter for every later decision.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Positioning & Differentiation</h2>
                  <p>
                   This is where we define the one thing your brand owns that nobody else can claim, quite the same way. Positioning isn't a tagline. It's a decision about where you sit in the customer's mind relative to various alternatives they have.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Architecture & Messaging Framework</h2>
                  <p>
                    With a clear, distinct positioning in place, we now help build a brand architecture and messaging framework. The latter revolves around the core messaging, brand pillars, tone and voice. This works as a map for your whole team to work.
                  </p>
                </div>
              </div>
            </div>

               <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">06</h3>
                <div className="card-body-create-mobile">
                  <h2>Strategy Validation</h2>
                  <p>
                   Before anything ships, we stress-test the thinking. Does it hold up against real customer feedback? Does it survive contact with your sales team's everyday conversations? We adjust before it's locked in, not after.
                  </p>
                </div>
              </div>
            </div>

             <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">07</h3>
                <div className="card-body-create-mobile">
                  <h2>Handover & Activation Support </h2>
                  <p>
                   A strategy that lives in a PDF nobody opens is wasted work. We hand it over with practical guidance on applying it across your website, marketing, sales conversations and any future design work so it actually gets used. 
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
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
                    <h2 className="why-dn-head">Why DN Designs?</h2>
                    <p className="why-dn-para">
                   We've spent years building brands for companies across India and beyond in diverse categories. Which means our strategy work isn't theoretical. It's grounded in what actually holds up once a brand hits shelves (or screens) and interacts with real customers. We don't hand you a strategy and walk away; our design, packaging and digital teams carry it forward, so what we build together on paper actually survives in the market.
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
                <p className="why-dn-designs-mobile-para">We've spent years building brands for companies across India and beyond in diverse categories. Which means our strategy work isn't theoretical. It's grounded in what actually holds up once a brand hits shelves (or screens) and interacts with real customers. We don't hand you a strategy and walk away; our design, packaging and digital teams carry it forward, so what we build together on paper actually survives in the market.</p>
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
      <CreativeAgencySwipper cityPagesSlideDataCreativeAgency={cityPagesSlideDataCreativeAgency}/>


      {/* testimonial  */}
      <Testimonial />


    


     {/*.....our-constant-companions...... */}
     <section className='our-constant-clients-section'>
      <OurConstant />
      </section>

       {/* faqs */}
      
            <section className="faqs">
              <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
             
            </section>
      
            {/* Form */}
            <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName} />
    


      
        

      

      


      


     
    </div>
  )
}

export default page
