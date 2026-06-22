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
import "./brand-positioning.css";
import "../brand-name-suggestion/brand-name-suggestion.css";

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
// import AtOneAm from '@/Components/AtOneAm/AtOneAm';




// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("brand-positioning", null, false);
  } catch (error) {
    console.log("Brand Positioning Error", error);
    return {
      title: "Brand Positioning",
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
        pageData = await getPageById("brand-positioning", null, true);
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
  const heading = "Brand Positioning Agency";
  const subHeading = "Helping Brands Find Their Unique Position ";
  const para = "There are just so many brands out there offering the same product or service as you. Does your brand stand out and give your customers a compelling reason to choose you over others? If not, perhaps it is time to hire a brand positioning agency and give your brand the competitive edge it needs. But what exactly do we mean by brand positioning, and how do we create a strong and distinctive brand positioning? Come along, as we explain everything you need to know. For a better understanding, we have also answered some commonly asked questions around brand positioning in the end. ";


  

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
          question: "What is a brand positioning statement? ",
          answer:
            (<>It is an internal document - clear and concise - which defines your brand’s unique value that sets it apart from competitors in the market. It typically defines your target audience, product category, the unique benefits offered, and the reason why customers should trust your brand. It ensures your messaging and marketing stay consistent.</>)
        },
        {
          question: "What does a brand positioning agency do?",
          answer:
            (<>A brand positioning agency, like DN Designs, helps businesses create a distinct space for themselves in the market and the customers’ minds. It combines research insights and creativity to craft a positioning that connects with customers and drives profit.</>)
        },
        {
          question: "How long does the brand positioning process take? ",
          answer:
            (<>Usually, it takes 2 to 6 weeks to complete the process; however, the timelines can vary depending on the project complexities.</>)
        },
        {
          question: "Can an existing brand be repositioned? ",
          answer:
            "Yes, if you want to better adapt to market changes, target new audiences and grow your business, you can reposition your brand. As a brand positioning agency, we offer both brand positioning and repositioning services.  ",
        },
    
        
      ];
    
      const rightFaqs = [
        {
          question: "Will this affect my current branding and marketing? ",
          answer:
            "Yes. Once your positioning changes, your branding and marketing are automatically impacted. The good part - it is a positive change that gives your branding and marketing a clear direction as to how to present your brand consistently, both visually and verbally.",
        },
        {
          question:
            "Who needs brand positioning services?",
          answer:
            (<>All kinds of businesses, whether it is a start-up or an established one, can benefit from brand positioning services. This is especially true if your brand lacks a clear differentiation, struggles with weak brand perception in the market and inconsistent messaging across brand touch points. </>)
        },
        {
          question:
            "What will I receive at the end of the project? ",
          answer:
            "Before wrapping up the project, we deliver a complete brand positioning strategy, positioning statement, messaging framework, and communication guidelines to you. These ensure that you present and promote your brand clearly and consistently across all touchpoints.",
        },
    
       
      ];
    
      // form section content
      const FormHead = "Let’s Discuss Over a Cup of Coffee";
      const FormPara = "As a business, you need to position your brand strategically to succeed. If customers have no idea what you stand for, how you are different from your competitors, or what unique value (or benefit) you are offering, they will never connect with your brand. But how do you position your brand for success? This is exactly where we enter. Get in touch with us to know how we can help make a difference. ";

      const pageName = "brand-positioning";



  return (
    <div>

      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "brand-positioning"}`}
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


      {/* brand positioning banner image*/}
      <section className="brand-positioning-banner-img">
        <div className='container'>
          <div className="brand-positioning-banner-img-desktop">
         
           <Image
                          src="https://dndesigns.co.in/uploads/pages/BRAND-POSITINING-lap.webp"
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
                          src="https://dndesigns.co.in/uploads/pages/bp-phone.webp"
                          alt="brand positioning"
                          width={1080}
                          height={864}
                          className="brand-positioning-banner-img-mobile-img"
                           sizes="(max-width:768px) 100vw, 100vw"
                          priority
                        />
          </div>
        </div>
      </section>



     {/* We Are The Leading Video */}
      <section className="we-are-the-leading">
        <div className="container">
          <div className="row">
            <h3>
              What Is Brand Positioning  
              <span className="every-pr">
                {" "}
                and Why Does It Matter?
              </span>{" "}
            </h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                First up, let’s understand what brand positioning is. Simply put, it is the process through which brands create a unique space for themselves in the market and in customers’ minds. Think about it. If your brand appears just like the others in your category, customers will have no reason to choose you. You will struggle to connect and build long-term loyalty. Moreover, charging a premium price will become difficult, and marketing efforts will be all over the place.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                When brands communicate what makes them different and the values they bring to customers, they build strong emotional connections. Trust and credibility get a boost, and brand recall increases, too. A strong positioning gives you a competitive advantage that helps you grow not just in the present but also in future. The expertise of a brand positioning agency can be invaluable in establishing a strong and distinctive market presence. 
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
              Types of Brand {" "}
              <span className="every-pr"> Positioning</span>
            </h2>
            <div>
            <TalkToUs/>
            </div>
            </div>
            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/brandpositioningGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Price-Value Based</h3>
                  <p>
                     Brands position themselves as the one offering the best value for money. Importantly, it is not about
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Price-Value Based</h3>
                  <p>
                    Brands position themselves as the one offering the best value for money. Importantly, it is not about being low cost; it is about offering quality products at a reasonable price. And customers absolutely love the combination of affordability and value.
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
                    src="https://dndesigns.co.in/uploads/pages/Frame 427324115 (8).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Quality Based</h3>
                  <p>
                    The focus here is on exceptional product qualities that set the brand apart from competitors. Points such as premium material, superior product quality,
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Quality Based</h3>
                  <p>
                    The focus here is on exceptional product qualities that set the brand apart from competitors. Points such as premium material, superior product quality, expert workmanship, lasting durability and strong performance are highlighted to support premium pricing. 
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
                    src="https://dndesigns.co.in/uploads/pages/brandpositioningehgdwsGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Benefits-Features Based</h3>
                  <p>
                     At the heart of this positioning type are the functional features and benefits. It identifies the customers’ needs and desires and highlights 
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Benefits-Features Based</h3>
                  <p>
                    At the heart of this positioning type are the functional features and benefits. It identifies the customers’ needs and desires and highlights the brand’s product as the solution. These features and benefits are unique to the brand, and that is what adds to their appeal.
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
                    src="https://dndesigns.co.in/uploads/pages/brandpositioningesdFrame 427324114.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Convenience-Based </h3>
                  <p>
                    The central idea here is convenience. It emphasises how easy to use and access the particular product or service is, and how customers 
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Convenience-Based </h3>
                  <p>
                    The central idea here is convenience. It emphasises how easy to use and access the particular product or service is, and how customers save time using it. This approach strongly appeals to customers who expect and value efficiency and simplicity when buying.
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
                    src="https://dndesigns.co.in/uploads/pages/brandpositioninewsjdgGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Customer-Centric </h3>
                  <p>
                    This positioning approach revolves around the personalised and exceptional customer service offered to the customers. It is what gives the brand
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Customer-Centric </h3>
                  <p>
                   This positioning approach revolves around the personalised and exceptional customer service offered to the customers. It is what gives the brand a competitive advantage in the market. By highlighting this, brands build a favourable and elevated perception. 

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
                    src="https://dndesigns.co.in/uploads/pages/brandpositioningwehbdjGroup 36813 (3).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Competitors Based</h3>
                  <p>
                    This brand positioning framework makes a straightforward comparison with competitors. It highlights how the product is better than others in
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Competitors Based</h3>
                  <p>
                   This brand positioning framework makes a straightforward comparison with competitors. It highlights how the product is better than others in the market. It could be through features, performance, or price. When customers compare, this product stands out.
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
                    src="https://dndesigns.co.in/uploads/pages/brandpositionwesdgvhingFrame 427324112 (13).svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Lifestyle Based</h3>
                  <p>
                     This positioning is built around interests, aspirations and causes (social, environmental and cultural) that consumers want to associate with. It
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Lifestyle Based</h3>
                  <p>
                   This positioning is built around interests, aspirations and causes (social, environmental and cultural) that consumers want to associate with. It goes beyond simply selling a product, focusing on fostering a deeper and more meaningful bond with customers.

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
                    src="https://dndesigns.co.in/uploads/pages/brandpositioningehwbdjFrame 427324114.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Disruptive </h3>
                  <p>
                     Disruption here is not about a new product innovation; rather, it is about redefining customers’ expectations in the category. So, while the product stays the
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Disruptive </h3>
                  <p>
                  Disruption here is not about a new product innovation; rather, it is about redefining customers’ expectations in the category. So, while the product stays the same, the positioning highlights a different way of evaluating it. This can be around pricing, product experience or communication style.

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

      


      {/* Creative Catalogue Designing - Our Process desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Our {" "}
            <span className="every-pr"> Process </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Understanding the Brand</h2>
                  <p>
                   This is where we start - exploring your brand’s core. We review your products and services, your vision and mission, as well as your strengths and challenges. These help us understand where your brand stands today, and where it aims to reach in future.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Analysing Market & Competitors</h2>
                  <p>
                   In this next step, we dive deep into the competitive landscape and compile insights on the market and competitors. We understand the positioning strategies of the competitors and figure out marketing gaps and positioning opportunities. This stage enables us to determine the area where a strong positioning can be built.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Researching the Audience</h2>
                  <p>
                  Here, the focus is solely on the target customers. What are their pain points? What exactly do they need? What prompts them to choose one product over the other? Insights like these are valuable when crafting a strong brand positioning strategy.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Defining Your Unique Value Proposition</h2>
                  <p>
                   What sets your brand apart from the competitors? Why should customers choose you? Identifying and defining this unique value is what we focus on doing in this step. Without this, moving forward and creating a strong positioning strategy is impossible.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Crafting a Brand Positioning Strategy</h2>
                  <p>
                   At this stage, we shape a comprehensive positioning strategy using all the data gathered earlier. It establishes how your brand should be perceived in the market and how all future branding, marketing and communication efforts should move. To elaborate, this strategic framework defines your brand’s core positioning direction, messaging themes, competitive differentiation, and overall personality and tone. 
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card6-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">06</div>
                <div className="col-10">
                  <h2>Developing Brand Positioning Statement</h2>
                  <p>
                 Now, we draft a clear, concise positioning statement that serves as a guide for your business’s internal functioning. In just 2-3 sentences, we define your target audience, category, unique value and key differentiating point. This statement gives your team a clear direction about what the brand stands for and how it thinks, speaks, and communicates in the market. This direction ensures your brand appears consistent everywhere.
                  </p>
                </div>
              </div>
            </li>

              <li className="card-create" id="card7-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">07</div>
                <div className="col-10">
                  <h2>Creating a Clear Brand Messaging Framework</h2>
                  <p>
                Your brand needs to communicate its positioning with clarity and consistency. So, at this stage, we focus on developing key messaging pillars and communication guidelines. We work on the key brand messages, messaging hierarchy, tone of voice and communication guidelines.
                  </p>
                </div>
              </div>
            </li>

              <li className="card-create" id="card8-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">08</div>
                <div className="col-10">
                  <h2>Implementation and Brand Alignment  </h2>
                  <p>
                 We have now reached the final stage. Here, we ensure that your positioning is clearly reflected across the brand, be it your visual identity, marketing materials, website content, and customer communications. The brand positioning process is now complete.
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
            Our 
            <span className="every-pr">  Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Understanding the Brand</h2>
                  <p>
                   This is where we start - exploring your brand’s core. We review your products and services, your vision and mission, as well as your strengths and challenges. These help us understand where your brand stands today, and where it aims to reach in future.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Analysing Market & Competitors</h2>
                  <p>
                  In this next step, we dive deep into the competitive landscape and compile insights on the market and competitors. We understand the positioning strategies of the competitors and figure out marketing gaps and positioning opportunities. This stage enables us to determine the area where a strong positioning can be built.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Researching the Audience</h2>
                  <p>
                  Here, the focus is solely on the target customers. What are their pain points? What exactly do they need? What prompts them to choose one product over the other? Insights like these are valuable when crafting a strong brand positioning strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Defining Your Unique Value Proposition</h2>
                  <p>
                   What sets your brand apart from the competitors? Why should customers choose you? Identifying and defining this unique value is what we focus on doing in this step. Without this, moving forward and creating a strong positioning strategy is impossible.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Crafting a Brand Positioning Strategy</h2>
                  <p>
                    At this stage, we shape a comprehensive positioning strategy using all the data gathered earlier. It establishes how your brand should be perceived in the market and how all future branding, marketing and communication efforts should move. To elaborate, this strategic framework defines your brand’s core positioning direction, messaging themes, competitive differentiation, and overall personality and tone. 
                  </p>
                </div>
              </div>
            </div>

               <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">06</h3>
                <div className="card-body-create-mobile">
                  <h2>Developing Brand Positioning Statement</h2>
                  <p>
                    Now, we draft a clear, concise positioning statement that serves as a guide for your business’s internal functioning. In just 2-3 sentences, we define your target audience, category, unique value and key differentiating point. This statement gives your team a clear direction about what the brand stands for and how it thinks, speaks, and communicates in the market. This direction ensures your brand appears consistent everywhere.
                  </p>
                </div>
              </div>
            </div>

             <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">07</h3>
                <div className="card-body-create-mobile">
                  <h2>Creating a Clear Brand Messaging Framework</h2>
                  <p>
                    Your brand needs to communicate its positioning with clarity and consistency. So, at this stage, we focus on developing key messaging pillars and communication guidelines. We work on the key brand messages, messaging hierarchy, tone of voice and communication guidelines.
                  </p>
                </div>
              </div>
            </div>

             <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">08</h3>
                <div className="card-body-create-mobile">
                  <h2>Implementation and Brand Alignment  </h2>
                  <p>
                   We have now reached the final stage. Here, we ensure that your positioning is clearly reflected across the brand, be it your visual identity, marketing materials, website content, and customer communications. The brand positioning process is now complete.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



     {/* creative agency swipper  */}
      <CreativeAgencySwipper cityPagesSlideDataCreativeAgency={cityPagesSlideDataCreativeAgency}/>


      {/* testimonial  */}
      <Testimonial />


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
                   Effective brand positioning is key to business success. It needs to go beyond simple visuals. With years of experience in strategic branding, we understand this perfectly well. Therefore, we adopt a research-based and customer-centric approach to build a brand positioning strategy that ensures you stand out in the market. What’s more, we don’t work for short-term impact; instead, we develop a positioning strategy that helps you grow over time.
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
                <p className="why-dn-designs-mobile-para">Effective brand positioning is key to business success. It needs to go beyond simple visuals. With years of experience in strategic branding, we understand this perfectly well. Therefore, we adopt a research-based and customer-centric approach to build a brand positioning strategy that ensures you stand out in the market. What’s more, we don’t work for short-term impact; instead, we develop a positioning strategy that helps you grow over time.</p>
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
