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
import LPBrandIdentityCategorySwipper from '@/Components/LPBrandIdentityCategorySwipper/LPBrandIdentityCategorySwipper';






// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("brand-identity-design-services", null, false);
  } catch (error) {
    console.log("Brand Identity Design Services Error", error);
    return {
      title: "Brand Identity Design Services",
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
            pageData = await getPageById("brand-identity-design-services", null, true);
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
      const heading = "Brand Identity Design Services";
      const subHeading = "Crafting Powerful Identities That Stand Out ";
      const para = "Once your product enters the market, it is no longer just about the quality. With multiple similar brands competing in the same category, the first few hurdles are all about getting noticed, building awareness and trust, and convincing customers that you have something different to offer. This is where brand identity becomes important. It creates a distinct space for your brand in the market. Want more clarity? Continue reading, as we elaborate on everything you need to know about brand identity and brand identity design services we offer. In the end, we have addressed commonly asked questions around brand identity design.  ";



  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Builds Recognition and Recall",
      description:
        "When your brand identity is strong and consistent across all touch points, customers recognise you instantly and remember you in the long run. The visuals, the words, the emotions conveyed - all play a key role in this.",
        image: "https://dndesigns.co.in/uploads/pages/brandidentitydesignservicesdesk2.jpg.jpeg",
     
    },
    {
      id: 2,
      point: "02",
      title: "Builds Differentiation",
      description:
        "In a market that’s overflowing with similar product offerings, a powerful brand identity design helps you stand out. Customers understand what makes you different and why they should choose you.",
       image: "https://dndesigns.co.in/uploads/pages/brandidentitydesign1.jpg.jpeg",
    },
    {
      id: 3,
      point: "03",
      title: "Builds Trust & Loyalty",
      description:
        "When your brand appears cohesive and professional, it instils trust in customers. It ensures them that your brand is credible, legitimate and worth every penny they spend. Over time, this trust turns into loyalty.",
      image: "https://dndesigns.co.in/uploads/pages/brnadidentitydesigndesk3.jpg.jpeg",
    },
    {
      id: 4,
      point: "04",
      title: "Boosts Business Growth",
      description:
        "A brand that is instantly recognised and trusted benefits in many ways - the marketing becomes smoother and more effective, customer acquisition cost goes down, and premium pricing is considered fair.",
      image: "https://dndesigns.co.in/uploads/pages/brandidentiydesigndesk4.jpg.jpeg",
    }
  ];

  const mobileCrads = [
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/brandidentitydesignmobile1.jpg.jpeg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/brandingidentyservicesmobile3.jpg.jpeg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/brandingidentitymobile2.jpg.jpeg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/brandingidentytyservicesmmobile4.jpg.jpeg",
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
              question: "What makes an effective brand identity?  ",
              answer:
                (<>An effective brand identity is unique and powerful enough to stand out in the market and be remembered in the long term. It reveals what the business is all about and helps form a connection with the target customers. It doesn’t just support present success, but is also ready for future expansion.</>)
            },
            {
              question: "Are brand identity and logo different?",
              answer:
                (<>Yes. Your brand identity is a complete system. It covers how you appear visually and how you communicate on various physical and digital touch points. A logo, on the other hand, is just a part of your brand’s visual identity.</>)
            },
            {
              question: "Who needs brand identity design services? ",
              answer:
                (<>In general, all businesses need this, whether they are startups entering the market or existing brands in need of a transformation. Companies wanting to build a strong brand presence and recognition benefit from brand identity design services.</>)
            },
            {
              question: "Can you redesign my existing identity? ",
              answer:
                "Surely. As a brand identity design agency, we can redesign your existing identity so that it reflects your current values, stands out in the market and resonates with your target audience.  ",
            },
        
            
          ];
        
          const rightFaqs = [
            {
              question: "How do I know if my brand needs a new identity? ",
              answer:
                "Multiple signs can indicate if your brand needs a new identity. For instance, if your brand looks outdated or no longer communicates what your business is all about, you may need a new identity. Also, if your brand appears inconsistent and confuses your audience, you need to avail brand identity design services. You can also hire the services of a brand identity design company when you are planning to enter a new market or target new customers. ",
            },
            {
              question:
                "Will I receive brand guidelines?",
              answer:
                (<>Yes, we will provide brand guidelines at the end of the project. </>)
            },
            {
              question:
                "What does a brand identity design package cover? ",
              answer:
                "Usually, it covers logo design systems, colour palette, typography selection, visual style direction and brand guidelines.",
            },

             {
              question:
                "How do you make sure the brand identity reflects our business? ",
              answer:
                "We conduct extensive research of your business, audience, market and competitors before we design your identity. The insights we gain help us craft a strategic brand identity design that reflects your business effectively.",
            },
        
        
           
          ];
        
          // form section content
          const FormHead = "Let’s Discuss Over a Cup of Coffee";
          const FormPara = "If you want your business to create an impact, beat market competition and drive revenue, you need a strong brand identity to start with. This is where brand identity design becomes important, and this is where we, a brand identity design agency, enter the picture. We are committed to crafting a strategic and powerful brand identity that supports both your current success and future growth. Interested in finding out more? Let’s meet and discuss. ";
    
          const pageName = "brand-identity-design-services";
    
  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "brand-identity-design-services"}`}
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
                          src="https://dndesigns.co.in/uploads/pages/BRAND-IDENTITY-BANNNdesk.jpg.jpeg"
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
                          src="https://dndesigns.co.in/uploads/pages/BRAND-IDENTITY-BANNNmobile.jpg.jpeg"
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
              What Is Brand Identity Design  
              <span className="every-pr">
                {" "}
               &  Why Does It Matter? 
              </span>{" "}
            </h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                Have you ever wondered why, on a crowded store shelf or online shopping platform, certain products get chosen immediately while others get ignored almost as quickly? It is not always about the product quality. Most of the time, it is about whether the brand stood out amidst so many other options, created a positive impression, built trust, and seemed worthy of the price point. In short, whether the brand identity was distinctive and powerful.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                Brand identity design is meant to achieve exactly this strong, clear and differentiated position that compels customers to add your product to their shopping basket/cart. It is a process of shaping visual (logos, colours, typography) and verbal (tagline, story, messaging) elements that define how the brand looks, feels and communicates across platforms. It ensures that your brand is represented consistently everywhere so that people easily recognise, remember and trust it. 
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* industries we serve */}
      <LPBrandIdentityCategorySwipper/>
      



      {/* When to Rewrite Your
      Brand Story */}
        <section className="characteristics-of-good">
        <div className="container">
          {/* 1st row */}
          <div className="row">
          <div className='rewrite-your-brand-story-head'>
            <h2 className="rewrite-your-brand-story-head-mian">
              Elements Of A Strong  {" "}<br></br>
              <span className="every-pr"> Brand Identity Design</span>
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
                  <h3>Brand Name</h3>
                  <p>
                     Just as your identity begins with your name, a brand’s identity, too, starts with a name. It is the foundational element which tells the customer who
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Name</h3>
                  <p>
                  Just as your identity begins with your name, a brand’s identity, too, starts with a name. It is the foundational element which tells the customer who you are. Since it is the first thing customers interact with, it should always be powerful, and simultaneously, simple and memorable.
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
                  <h3>Logo</h3>
                  <p>
                   It is probably the most important and recognisable part of a brand’s visual identity. Why? Because if there is any visual element that can help you
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Logo</h3>
                  <p>
                   It is probably the most important and recognisable part of a brand’s visual identity. Why? Because if there is any visual element that can help you identify the brand in the absence of a name, it is your logo. It represents your brand’s values and offerings through a simple symbol or a design.  
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
                  <h3>Brand Colours</h3>
                  <p>
                     Colours don’t just make your brand look beautiful; they add a personality to it and evoke powerful emotions in customers. Strategic use of colours
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Colours</h3>
                  <p>
                    Colours don’t just make your brand look beautiful; they add a personality to it and evoke powerful emotions in customers. Strategic use of colours can strengthen brand recognition and recall, influence customers’ moods, and ultimately drive purchase decisions. 
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
                  <h3>Typography & Fonts</h3>
                  <p>
                   Typography is all about making your text visually appealing and easy to read. It includes choosing the correct font types, sizes and weights as
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Typography & Fonts</h3>
                  <p>
                   Typography is all about making your text visually appealing and easy to read. It includes choosing the correct font types, sizes and weights as well as determining accurate spacing and alignment. Like colours, these too convey your brand’s personality and style.
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
                  <h3>Brand Images And Photographs  </h3>
                  <p>
                    Visuals convey way more than words and leave lasting impressions. That’s why the photos, illustrations and graphics are extremely
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Images And Photographs  </h3>
                  <p>
                  Visuals convey way more than words and leave lasting impressions. That’s why the photos, illustrations and graphics are extremely important brand identity elements. These effectively convey values, stories, and aspirations that resonate deeply with your target audience. 

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
                  <h3>Brand Tone and Voice</h3>
                  <p>
                      Brand identity is not just visuals; it is also about how your brand communicates with the target audience. It could be formal, sophisticated
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Tone and Voice</h3>
                  <p>
                  Brand identity is not just visuals; it is also about how your brand communicates with the target audience. It could be formal, sophisticated, humorous, witty, friendly or even playful. The voice, tone, language, and vocabulary together reveal a lot about the brand’s personality and values.
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
                  <h3>Brand Story</h3>
                  <p>
                      A compelling story captures your attention. It is the same with brand story. It goes beyond products to emotionally connect with your
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Story</h3>
                  <p>
                   A compelling story captures your attention. It is the same with brand story. It goes beyond products to emotionally connect with your target audience by telling them who you are and what your vision, mission and values are. It communicates your reason for existence beyond commercial gains.

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
            </div>
          </div>
        </div>
      </section>


      {/* standalone section */}
            <section className="standalone-sec">
                    <div className="container">
                      <div className="row">
                        <h2 className="text-center headg">
                          Importance of Brand  {" "}
                          <span className="every-pr"> Identity Design</span>{" "}
                        </h2>
                      </div>
                    </div>
                    <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />    
                  </section>

      


      {/* Creative Catalogue Designing - Our Process desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Brand Identity Design  {" "}
            <span className="every-pr"> - Our Process </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Brand Understanding</h2>
                  <p>
                  We begin our process with a conversation with you. This conversation is aimed at understanding your brand and products thoroughly. What is the brand all about, and what makes it different from competitors? What are its vision, mission and values? Who are the target customers, and what are the growth aspirations and challenges? You can expect several questions from us at this stage.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Market & Audience Understanding</h2>
                  <p>
                   As important as it is to understand the brand, it is also important to research the market, competitors and the audience. So, we now roll up our sleeves and dive deeper to uncover valuable market insights. These include understanding audience preferences, design trends and patterns within your industry and lastly opportunities for differentiation. These insights help build an effective brand identity strategy in the next step.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Brand Strategy Development</h2>
                  <p>
                  It’s now time to gather all the data and craft an effective brand strategy. We establish the brand positioning and define its personality, values, purpose and messaging. Together, these shape every decision that we take when designing your brand identity elements in the subsequent steps.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Visual Direction Exploration</h2>
                  <p>
                   Here in this stage, we explore the various creative visual directions we can take to express your brand identity. We seek design references, image styles, colour inspirations and typography options that can best represent your brand’s personality. We share the shortlisted design directions (with an explanation for each) with you for review, and finally, select one that aligns with your vision and brand.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Visual Identity Development</h2>
                  <p>
                   With visual direction locked, we now begin the actual work. Individual elements are designed and developed - logo, colour palette, typography, photographic style and graphics. These elements together set the visual language through which your brand can communicate consistently across various touchpoints.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card6-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">06</div>
                <div className="col-10">
                  <h2>Brand Messaging Development</h2>
                  <p>
                 Even as we develop the brand’s visual identity, we don’t forget that the way the brand communicates is an equally important part of its identity. So, here in this step, we define your brand’s key messaging, tagline and voice & tone. 
                  </p>
                </div>
              </div>
            </li>

              <li className="card-create" id="card7-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">07</div>
                <div className="col-10">
                  <h2>Testing & Refinement </h2>
                  <p>
                Once the various elements are finalised, we test them across real-world brand touchpoints such as packaging, business cards, websites, social media posts and other marketing materials. The gaps and loopholes that emerge during this stage (regarding clarity, scalability, and alignment with brand strategy) help us refine and strengthen the design system. 
                  </p>
                </div>
              </div>
            </li>

              <li className="card-create" id="card8-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">08</div>
                <div className="col-10">
                  <h2>Brand Guidelines Development  </h2>
                  <p>
                 Now, we focus on creating brand guidelines. This serves as a rulebook and ensures your brand identity stays consistent all over. Included in it are rules about how the logo should be (or should not be) used, as well as details about the colour system, typography, imagery, voice &tone, etc. These guidelines help both your internal team and external partners/stakeholders represent your brand correctly.
                  </p>
                </div>
              </div>
            </li>

             <li className="card-create" id="card9-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">09</div>
                <div className="col-10">
                  <h2>Final Implementation & Delivery  </h2>
                  <p>
                In this final stage of our process, we help you implement the new identity confidently across all touch points - from packaging to website and from social media platforms to marketing collaterals. Additionally, we also deliver all brand assets in proper format so that you can use them wherever you need - in digital as well as print media.
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
            Brand Identity Design 
            <span className="every-pr">  - Our Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Understanding</h2>
                  <p>
                  We begin our process with a conversation with you. This conversation is aimed at understanding your brand and products thoroughly. What is the brand all about, and what makes it different from competitors? What are its vision, mission and values? Who are the target customers, and what are the growth aspirations and challenges? You can expect several questions from us at this stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Market & Audience Understanding</h2>
                  <p>
                 As important as it is to understand the brand, it is also important to research the market, competitors and the audience. So, we now roll up our sleeves and dive deeper to uncover valuable market insights. These include understanding audience preferences, design trends and patterns within your industry and lastly opportunities for differentiation. These insights help build an effective brand identity strategy in the next step.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Strategy Development</h2>
                  <p>
                  It’s now time to gather all the data and craft an effective brand strategy. We establish the brand positioning and define its personality, values, purpose and messaging. Together, these shape every decision that we take when designing your brand identity elements in the subsequent steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Visual Direction Exploration</h2>
                  <p>
                   Here in this stage, we explore the various creative visual directions we can take to express your brand identity. We seek design references, image styles, colour inspirations and typography options that can best represent your brand’s personality. We share the shortlisted design directions (with an explanation for each) with you for review, and finally, select one that aligns with your vision and brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Visual Identity Development</h2>
                  <p>
                    With visual direction locked, we now begin the actual work. Individual elements are designed and developed - logo, colour palette, typography, photographic style and graphics. These elements together set the visual language through which your brand can communicate consistently across various touchpoints.
                  </p>
                </div>
              </div>
            </div>

               <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">06</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Messaging Development</h2>
                  <p>
                   Even as we develop the brand’s visual identity, we don’t forget that the way the brand communicates is an equally important part of its identity. So, here in this step, we define your brand’s key messaging, tagline and voice & tone. 
                  </p>
                </div>
              </div>
            </div>

             <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">07</h3>
                <div className="card-body-create-mobile">
                  <h2>Testing & Refinement </h2>
                  <p>
                    Once the various elements are finalised, we test them across real-world brand touchpoints such as packaging, business cards, websites, social media posts and other marketing materials. The gaps and loopholes that emerge during this stage (regarding clarity, scalability, and alignment with brand strategy) help us refine and strengthen the design system. 
                  </p>
                </div>
              </div>
            </div>

             <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">08</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Guidelines Development </h2>
                  <p>
                   Now, we focus on creating brand guidelines. This serves as a rulebook and ensures your brand identity stays consistent all over. Included in it are rules about how the logo should be (or should not be) used, as well as details about the colour system, typography, imagery, voice &tone, etc. These guidelines help both your internal team and external partners/stakeholders represent your brand correctly.
                  </p>
                </div>
              </div>
            </div>

             <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">09</h3>
                <div className="card-body-create-mobile">
                  <h2>Final Implementation & Delivery  </h2>
                  <p>
                   In this final stage of our process, we help you implement the new identity confidently across all touch points - from packaging to website and from social media platforms to marketing collaterals. Additionally, we also deliver all brand assets in proper format so that you can use them wherever you need - in digital as well as print media.
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
                   As a brand identity design agency, we have over 8 years of experience creating powerful identities for businesses across industries. We understand this space inside out, and therefore, our brand identity design service is not just a creative process; it is strategic and research-based. We focus on creating impactful brand identities that help you get noticed, remembered and chosen.
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
              <h2 className="why-dn-designs-mobile-head">Why DN Designs?</h2>
                <p className="why-dn-designs-mobile-para">As a brand identity design agency, we have over 8 years of experience creating powerful identities for businesses across industries. We understand this space inside out, and therefore, our brand identity design service is not just a creative process; it is strategic and research-based. We focus on creating impactful brand identities that help you get noticed, remembered and chosen.</p>
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
            <Form FormHead={FormHead} FormPara={FormPara} />
    


      
        

      

      


      


     
    </div>
  )
}

export default page
