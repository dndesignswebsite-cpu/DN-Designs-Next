export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from 'react'
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import PagesHero from '@/Components/PagesHero/PagesHero';
import AutoCounter from '@/Components/AutoCounter/AutoCounter';
import DigitalMarketingToggleBtn from '@/Components/DigitalMarketingToggleBtn/DigitalMarketingToggleBtn';
import Image from "next/image";
import "./rebranding.css";
import ECataloguesBtn from '@/Components/E-Catalogues-Btn/ECataloguesBtn';
import StandAlonePackaging from '@/Components/StandAlonePackaging/StandAlonePackaging';
import CreativeAgencySwipper from "@/Components/CreativeAgencySwipper/CreativeAgencySwipper";
import Testimonial from '@/Components/Testimonial/Testimonial';
import TalkToUs from '@/Components/TalkToUs/TalkToUs';
import OurConstant from '@/Components/OurConstant/OurConstant';
import Faqs from '@/Components/Faqs/Faqs';
import Form from "@/Components/Form/Form";
import Link from 'next/link';

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";




// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("rebranding", null, false);
  } catch (error) {
    console.log("Rebranding Error", error);
    return {
      title: "Rebranding",
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
        pageData = await getPageById("rebranding", null, true);
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
  const heading = "Strategic Rebranding Agency";
  const subHeading = "Let's Revive Your Brand and Renew Its Impact. ";
  const para = "Wondering why your business is growing at a snail's pace? Chances are that your business is no longer connecting with customers. This means your branding is not working as effectively as it should. What you need is rebranding. It can give your brand the push it needs to succeed in the competitive market. Want to know more about rebranding? Join us as we discuss the topic in detail. Also, understand how a rebranding agency like DN Designs can help grow your business. If you still need more information, our FAQ section may have the answers you are looking for.";


  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Improves Reach & Relevance",
      description:
        "With a fresh new identity and strong positioning, your brand better connects with your current customers and successfully attracts new ones.",
      image: "https://dndesigns.co.in/uploads/pages/rebrandingstand11.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Creates Differentiation",
      description:
        "Rebranding helps highlight what sets you apart from your competitors. Customers now have a reason to choose you.",
      image: "https://dndesigns.co.in/uploads/pages/rebrandingstand12.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Supports Business Growth",
      description:
        "It strengthens your business and helps it grow through every change, be it a new product launch or major organisational changes.",
      image: "https://dndesigns.co.in/uploads/pages/rebrandingstand13.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Manage Reputation",
      description:
        "A fresh identity and narrative help clear negative perceptions about the brand. Reputation and trust are re-established.",
      image: "https://dndesigns.co.in/uploads/pages/rebrandingstand14.jpg",
    },
    {
      id: 5,
      point: "05",
      title: "Improves Morale & Retention",
      description:
        "Strong brands attract and retain top talent. Employees love to work for a company that gives them a sense of purpose and direction.",
      image: "https://dndesigns.co.in/uploads/pages/rebrandingstand15.jpg",
    },
  ];

  const mobileCrads = [
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/rebrandingmobile1.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/rebrandingmobile2.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/rebrandingmobile3.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/uploads/pages/rebrandingmobile4.jpg",
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
          question: "What is rebranding?",
          answer:
            (<>Rebranding is essentially a brand makeover. It is not just a visual makeover, though; rather, it is a strategic move that redefines your brand identity, positioning, vision, mission and messaging. The goal is to make your brand more relevant to your audience, boost market presence and drive business growth.</>)
        },
        {
          question: "How do I know if my business needs a rebrand?",
          answer:
            (<>If your brand appears outdated, doesn’t stand out in the market, fails to connect with your audience or appears inconsistent across different touchpoints, it perhaps needs a rebrand. New products, markets, or organisational changes may also call for a rebrand. If you are unsure, just get in touch with us. We can help you understand if your business needs a rebrand.</>)
        },
        {
          question: "What is the difference between a brand refresh, a brand reboot and a complete rebrand?",
          answer:
            "Brand refresh is the simplest form of rebranding wherein only subtle changes to logo, colours or messaging are made to give the brand a more modern feel.  A reboot, meanwhile, involves key changes to logo, tagline and visuals to indicate the new brand direction. In the end, a total rebrand redefines the brand entirely. It completely rebuilds how the brand looks, feels, and connects with audiences.  ",
        },
    
        {
          question: "How long does a rebranding process take?",
          answer:
            "This entirely depends on what needs to be done. While a simple refresh and reboot can be completed in a few weeks, a complete rebrand may take over a month.",
        },
    
        {
          question: "Will rebranding affect my existing customers?",
          answer:
            "No, rebranding does not alienate your existing customers. The goal of a strategic rebranding, in fact, is to strengthen the connection with existing customers and reach out to new ones simultaneously.",
        },
    
        {
          question:
            "What does a rebranding process typically include?",
          answer:
            "A typical rebranding process includes brand audit, rebrand strategy development, visual and verbal identity design, brand guidelines design, internal testing and the final launch. ",
        }
      ];
    
      const rightFaqs = [
        {
          question:
            "Can rebranding help my business grow?",
          answer:
            (<>Rebranding, when done right, definitely helps you grow your business. </>)
        },
        {
          question:
            "Do I need to change my company name when rebranding?",
          answer:
            "It is not always necessary to change the name, but sometimes it can be essential for rebranding to be successful",
        },
    
        {
          question: "How do you ensure the new brand aligns with our business goals?",
          answer:
            (<>Research and strategy are the key here. We conduct in-depth research of your brand and market and accordingly create a rebranding strategy that aligns with your business goals.</>)
        },
    
        {
          question: "Why should I work with a branding agency for rebranding?",
          answer:
            "Rebranding agencies like DN Designs have the strategic and creative expertise to carry out an effective rebranding. We ensure that our work sets your business on the growth path. ",
        },
    
        {
          question: "How much does rebranding cost?",
          answer:
            "The costing depends on the scope of work. Contact us for a customised quote.",
        }
      ];
    
      // form section content
      const FormHead = "Let’s Discuss Over A Cup Of Coffee";
      const FormPara = "Success can be elusive if your brand feels outdated, weak, inconsistent and untrustworthy. The reason for these could be any – new markets, evolved customers, business expansion, or organisational restructuring – but there is only one way forward - REBRANDING. If your business is facing similar challenges, and you are wondering whether rebranding and repositioning can help make a difference, connect with us today. Let’s collaborate to boost your brand presence and drive growth. ";

      const pageName = "rebranding";



  return (
    <div>

      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "rebranding"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

    {/*Breadcrumb*/}
          <section>
            <Breadcrumb />
          </section>

    {/* about hero */}
      <section>
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>


      {/* Switch on your potential with digital marketing */}
            <section className="switch-on">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-6">
                    <div className="row">
                      <div className="col-12 col-md-6 switch-on-div-main">
                        <div className="switch-on-div">
                          <div className="vertical-bar"></div>
                          <div className="switch-on-div-content">
                            <h3>
                              {/* <AutoCounter target={74} />% */}
                              74%
                            </h3>
                            <p> S&P 100 companies rebranded within their first 7 years.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 switch-on-div-main">
                        <div className="switch-on-div">
                          <div className="vertical-bar"></div>
                          <div className="switch-on-div-content">
                            <h3>
                              {/* <AutoCounter target={10} /> years */}
                              7-10 years
                            </h3>
                            <p> Average rebranding cycle for businesses.</p>
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div className="row switch-row">
                      <div className="col-9 ">
                        <div className="switch-on-middle-div-para">
                          <p>Switch On Strategic Rebranding</p>
                        </div>
                      </div>
                      <div className="col-3 toggle-btn">
                        <DigitalMarketingToggleBtn />
                      </div>
                    </div>
      
                    <div className="switch-on-middle-div-img-last">
                      <div className="col switch-on-middle-div-img">
                        {/* <img
                          src={imageUrl + "successfull groth.webp"}
                          className="img-fluid"
                        ></img> */}
                           <Image
                        src={imageUrl + "successfull groth.webp"}
                        className="responsive-img"
                        alt="digital markting page image"
                        width={1500}
                        height={800}
                      />

                
                      </div>
                    </div>
                  </div>
      
                  <div className="col-12 col-md-12 col-lg-6 main-switch-img">
                    {/* <img src={imageUrl + "2-01.webp"} className="img-fluid" /> */}
                      {/* <Image
                        src={imageUrl + "2-01.webp"}
                        className="responsive-img"
                        alt="digital markting page image"
                        width={600}
                        height={600}
                      /> */}

                            <video
            src="https://dndesigns.co.in/uploads/videos/rebradningfinalvideo.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className="rebranding-video"
          />
                  </div>
                </div>
              </div>
            </section>

     {/* We Are The Leading Video */}
      <section className="we-are-the-leading">
        <div className="container">
          <div className="row">
            <h3>
              What Every Business Should 
              <span className="every-pr">
                {" "}
                Know About Rebranding 
              </span>{" "}
            </h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                A brand - whether it is a company, a product or a service - has an identity. Customers perceive it in specific ways. However, when this identity doesn’t resonate with the audience or becomes outdated, and market perception begins to weaken, rebranding becomes necessary. Rebranding involves changing the brand’s visual and verbal identity, along with its positioning, to improve its market image and performance.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                The important thing to understand here is that rebranding can take different forms depending on the reasons for rebranding and the goals to be achieved. Sometimes a simple refresh or reboot (partial rebrand) is enough, while at other times a complete overhaul (complete rebrand) is needed. No matter which one you choose, a research-based strategic approach is essential to ensure success. A rebranding agency can really help sail through the process.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Brand Identity We Created*/}
            {/* <section className="brand-identity">
              <div className="container">
                <h2 className="text-center">
                  Brand Identity<span className="every-pr"> We Created</span>
                </h2>
                <div className="row brand-identity-row">
                  <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
                    <div className="brand-identity-div">
                     
      
                      <Image
                       src={imageUrl + "3gweudjgwer.webp"}
                        className="responsive-img brand-identity-div-img"
                        alt="grin care case study page image"
                        width={1500}
                        height={1500}
                      />
      
                      <div className="brand-identity-content">
                        <div className="brand-identity-div-btns">
                          <div className="brand-identity-div-headg">
                            <h3>Nature’s Balance</h3>
                          </div>
                          <div className="brand-identity-btn-up">
                            <h4 className="brand-identity-btn">Brand Identity</h4>
                            <h4 className="brand-identity-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          An upscale cafe, Nature’s Balance, collaborated with us to
                          create a brand identity that simultaneously highlighted
                          health, nature and luxury. We created a comprehensive
                          identity for them to establish them as a premium wellness
                          cafe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
                    <div className="brand-identity-div">
                     
      
                       <Image
                       src={imageUrl + "jhewjrhjbf.webp"} 
                        className="responsive-img brand-identity-div-img"
                        alt="grin care case study page image"
                        width={1500}
                        height={1500}
                      />
                      <div className="brand-identity-content">
                        <div className="brand-identity-div-btns">
                          <div className="brand-identity-div-headg">
                            <h3>Koshish</h3>
                          </div>
                          <div className="brand-identity-btn-up">
                            <h4 className="brand-identity-btn">Brand Identity</h4>
                            <h4 className="brand-identity-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          Koshish functions in multiple industries, for instance,
                          solar and biogas. It partnered with us to create a brand
                          identity which leaned towards minimalism. We supported them
                          in their rebranding initiative and also provided them with
                          brand guidelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="row brand-identity-row">
                  <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
                    <div className="brand-identity-div">
                   
      
                       <Image
                       src={imageUrl + "Rosnax.webp"}  
                        className="responsive-img brand-identity-div-img"
                        alt="grin care case study page image"
                        width={1500}
                        height={1500}
                      />
                      <div className="brand-identity-content">
                        <div className="brand-identity-div-btns">
                          <div className="brand-identity-div-headg">
                            <h3>Rosnax</h3>
                          </div>
                          <div className="brand-identity-btn-up">
                            <h4 className="brand-identity-btn">Brand Identity</h4>
                            <h4 className="brand-identity-btn">Packaging</h4>
                          </div>
                        </div>
      
                        <p>
                          FMCG company Rosnax offers premium flavoured roasted snacks
                          like makhana to its customers. It envisioned a brand
                          identity that conveyed a sense of wholesomeness and
                          simultaneously exuded a playful and fun vibe. We gave them
                          exactly what they needed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
                    <div className="brand-identity-div">
                   
      
                        <Image
                       src={imageUrl + "tftyfhgchg.webp"}
                        className="responsive-img brand-identity-div-img"
                        alt="grin care case study page image"
                        width={1500}
                        height={1500}
                      />
                      <div className="brand-identity-content">
                        <div className="brand-identity-div-btns">
                          <div className="brand-identity-div-headg">
                            <h3>Wlue’s</h3>
                          </div>
                          <div className="brand-identity-btn-up">
                            <h4 className="brand-identity-btn">Brand Identity</h4>
                            <h4 className="brand-identity-btn">Packaging</h4>
                          </div>
                        </div>
      
                        <p>
                          Makhana brand Wlue's wished to position itself as a product
                          for winners and appeal to the youth globally. We designed
                          its brand identity accordingly with a retro superhero feel
                          and a star incorporated in its logo to attract winners.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="row brand-identity-row">
                  <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
                    <div className="brand-identity-div">
                     
      
                       <Image
                       src={imageUrl + "bake-o-Tech.webp"}
                        className="responsive-img brand-identity-div-img"
                        alt="grin care case study page image"
                        width={1500}
                        height={1500}
                      />
                      <div className="brand-identity-content">
                        <div className="brand-identity-div-btns">
                          <div className="brand-identity-div-headg">
                            <h3>Bake O Tech</h3>
                          </div>
                          <div className="brand-identity-btn-up">
                            <h4 className="brand-identity-btn">Brand Identity</h4>
                            <h4 className="brand-identity-btn">Web Design</h4>
                          </div>
                        </div>
      
                        <p>
                          Offering food & bakery consultancy, Bake O Tech wanted a
                          professional and unique brand identity that set them apart
                          in the industry. We played with the initial letters to
                          reflect their name and establish the industry they belong
                          to.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
                    <div className="brand-identity-div">
                     
      
                       <Image
                       src={imageUrl + "erhfLuxmi-cars.webp"}
                        className="responsive-img brand-identity-div-img"
                        alt="grin care case study page image"
                        width={1500}
                        height={1500}
                      />
                      <div className="brand-identity-content">
                        <div className="brand-identity-div-btns">
                          <div className="brand-identity-div-headg">
                            <h3>Luxmi Cars</h3>
                          </div>
                          <div className="brand-identity-btn-up">
                            <h4 className="brand-identity-btn">Brand Identity</h4>
                            <h4 className="brand-identity-btn">Social Media</h4>
                          </div>
                        </div>
      
                        <p>
                          A passion for cars and a love for luxury is what Luxmi Cars
                          - a car dealer in Karnal - wanted to showcase in their brand
                          identity. We played with colours and typography to achieve
                          the desired effect for the brand.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="row brand-identity-row">
                  <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
                    <div className="brand-identity-div">
                      
      
                      <video
                        src="https://dndesigns.co.in/uploads/videos/Greephoria.mp4"
                        width="100%"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="enlitecasestudy-video1"
                      />
                      <div className="brand-identity-content">
                        <div className="brand-identity-div-btns">
                          <div className="brand-identity-div-headg">
                            <h3>Gleephoria</h3>
                          </div>
                          <div className="brand-identity-btn-up">
                            <h4 className="brand-identity-btn">Brand Identity</h4>
                            <h4 className="brand-identity-btn">Website Design</h4>
                          </div>
                        </div>
      
                        <p>
                          Concept-based toy brand, Gleephoria wanted its identity to
                          be all about kids, fun, education, inspiration and
                          creativity. We incorporated all these in our design and
                          created an identity that appealed to its young audience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
                    <div className="brand-identity-div">
                     
      
                       <Image
                      src={imageUrl + "deeproot-logo.webp"}
                        className="responsive-img brand-identity-div-img"
                        alt="grin care case study page image"
                        width={1500}
                        height={1500}
                      />
                      <div className="brand-identity-content">
                        <div className="brand-identity-div-btns">
                          <div className="brand-identity-div-headg">
                            <h3>Deep Root</h3>
                          </div>
                          <div className="brand-identity-btn-up">
                            <h4 className="brand-identity-btn">Rebranding</h4>
                            <h4 className="brand-identity-btn">Website Design</h4>
                          </div>
                        </div>
      
                        <p>
                          Flavoured makhana brand, Deep Root aspired to appeal to both
                          Indian and international audiences. We crafted a modern logo
                          that reflected nature, purity and its brand ethos ‘rooted in
                          tradition and culture’.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}


    {/*The Protagonists */}
      <section className="appr-pro">
        <div className="container">
          <div className="">
            <div className="row appr-pro-row-main">
              <div className="col-12 col-md-12 col-lg-6 mt-3">
                <h2 className="appr-pro-main-head">
                  When to Rewrite Your 
                  <span className="every-pr"> Brand Story</span>
                </h2>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-gray">
                  <div>
                    <h3>Outdated Brand Identity</h3>
                    <p>
                     As your business grows, you launch new products, target new audiences and evolve your vision and mission. If your identity and branding don’t represent your current business, it is time to rebrand. 
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>No Differentiation</h3>
                    <p>
                     Customers need a reason to choose your product. If your brand fails to communicate what sets you apart from competitors, repositioning becomes essential. It helps convey your brand’s distinct personality and USP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row appr-pro-row-main">
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Confusing Brand Presence </h3>
                  <p>
                   What does your brand offer? Why is the experience different everywhere? If your brand leaves your customers feeling confused, it is high time you start thinking about rebranding.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Major Business Shifts </h3>
                  <p>
                   Major organisational changes, such as restructuring, mergers and acquisitions, may require rebranding to ensure your brand identity and positioning align with your current goals and future vision.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Business Stagnation</h3>
                  <p>
                    Slow growth rate and decreasing market share are big indicators that your brand is not connecting with your customers the way it should. Strategic rebranding can revitalise business growth. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Negative Perception</h3>
                  <p>
                    A positive brand reputation helps business growth. When this reputation takes a hit, customer trust and business growth are affected too. Rebranding can help clear the air and rebuild positive perception.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Creative Catalogue Designing - Our Process desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Our {" "}
            <span className="every-pr"> Rebranding Process </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Brand Audit</h2>
                  <p>
                   ‘What went wrong?’ Or ‘What isn’t working?’ Finding answers to these is where our rebranding process begins. We conduct a brand audit to figure out where the brand stands in the current market and why it is not connecting with customers anymore. We understand its strengths and weaknesses and additionally analyse the market, target audience and competition to get a better sense of the problem.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Brand Strategy Development</h2>
                  <p>
                   Valuable insights gained in the previous step give direction to our rebranding strategy. We now define the core of the brand - its vision, mission, values, principles, USP, positioning, as well as the target audience. Defining this core is essential because these foundational elements shape the brand's visual and verbal identity in the next step.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Building Visual & Verbal Identity</h2>
                  <p>
                   It’s now time to establish the brand’s visual identity and communication style. For this, we design the brand’s logo and define its colours, typography, graphics, iconography and illustration styles. Along with these, we craft the brand’s story, taglines, key messages, and describe the voice, tone and guidelines for communication.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Building Design Systems</h2>
                  <p>
                   No brand can ever succeed if it confuses its customers, so at this stage of our rebranding process, we work towards consistency. We create comprehensive brand guidelines and design systems (social media & presentation templates, marketing collateral, packaging guidelines) to ensure a cohesive brand experience across physical and digital touchpoints.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Updating & Internal Testing</h2>
                  <p>
                   We now update all your brand assets - website, packaging, marketing material and social media - to reflect the new brand identity. Thereafter, we introduce the new brand internally. The goal is to identify and fix issues before the final launch. Additionally, when the internal team understands the new brand better, communicating it to the customers post-launch becomes easier.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card6-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">06</div>
                <div className="col-10">
                  <h2>Launch, Monitoring & Optimisation</h2>
                  <p>
                  Your new brand has finally launched. We closely monitor the feedback and progress, and make further changes accordingly. The rebranding process is now complete.
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
            <span className="every-pr"> Rebranding Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Audit</h2>
                  <p>
                   ‘What went wrong?’ Or ‘What isn’t working?’ Finding answers to these is where our rebranding process begins. We conduct a brand audit to figure out where the brand stands in the current market and why it is not connecting with customers anymore. We understand its strengths and weaknesses and additionally analyse the market, target audience and competition to get a better sense of the problem. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Strategy Development</h2>
                  <p>
                    Valuable insights gained in the previous step give direction to our rebranding strategy. We now define the core of the brand - its vision, mission, values, principles, USP, positioning, as well as the target audience. Defining this core is essential because these foundational elements shape the brand's visual and verbal identity in the next step.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Building Visual & Verbal Identity</h2>
                  <p>
                   It’s now time to establish the brand’s visual identity and communication style. For this, we design the brand’s logo and define its colours, typography, graphics, iconography and illustration styles. Along with these, we craft the brand’s story, taglines, key messages, and describe the voice, tone and guidelines for communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Building Design Systems</h2>
                  <p>
                   No brand can ever succeed if it confuses its customers, so at this stage of our rebranding process, we work towards consistency. We create comprehensive brand guidelines and design systems (social media & presentation templates, marketing collateral, packaging guidelines) to ensure a cohesive brand experience across physical and digital touchpoints.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Updating & Internal Testing</h2>
                  <p>
                    We now update all your brand assets - website, packaging, marketing material and social media - to reflect the new brand identity. Thereafter, we introduce the new brand internally. The goal is to identify and fix issues before the final launch. Additionally, when the internal team understands the new brand better, communicating it to the customers post-launch becomes easier.
                  </p>
                </div>
              </div>
            </div>

               <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">06</h3>
                <div className="card-body-create-mobile">
                  <h2>Launch, Monitoring & Optimisation</h2>
                  <p>
                    Your new brand has finally launched. We closely monitor the feedback and progress, and make further changes accordingly. The rebranding process is now complete.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



       {/* E-Catalogues */}
            {/* <section className="e-catalogues">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-6 e-catalogues-main-col">
                    <div className="e-catalogues-left">
                      <h4>E-Catalogues</h4>
                      <h3>
                        Make Your Catalogues More Accessible, Interactive And
                        Shareable
                      </h3>
                      <p>
                        Conveniently share and update information about your company,
                        products and services through online brochures and catalogues.
                        These are downloadable and enable customers to place an order
                        right there.
                      </p>
                      <ECataloguesBtn />
                    </div>
                  </div>
      
                  <div className="col-12 col-md-12 col-lg-12 col-xl-6 e-catalogues-main-col">
                    <div className="e-catalogues-right">
                      <div className="row e-catalogues-right-row">
                        <div className="col-12 col-md-12 col-lg-6">
                         
                          <Image
                        src={imageUrl + "wueygdhwvebjf.webp"}
                        className="responsive-img e-catalogues-right-img"
                        alt="home city page image"
                        width={1500}
                        height={1000}
                      />
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 e-cata-right-img">
                         
      
                            <Image
                        src={imageUrl + "hegwhdjh.webp"}
                        className="responsive-img e-catalogues-right-img"
                        alt="home city page image"
                        width={1500}
                        height={1000}
                      />
                        </div>
                      </div>
      
                      <div className="row e-catalogues-right-row e-catalogues-right-row-d">
                        <div className="col-12 col-md-12 col-lg-6">
                          
                              <Image
                        src={imageUrl + "32egwhdvwehv.webp"}
                        className="responsive-img e-catalogues-right-img"
                        alt="home city page image"
                        width={1500}
                        height={1000}
                      />
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 e-cata-right-img">
                         
                             <Image
                        src={imageUrl + "gyewhdvewf.webp"}
                        className="responsive-img e-catalogues-right-img"
                        alt="home city page image"
                        width={1500}
                        height={1000}
                      />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}



            {/* standalone section */}
            <section className="standalone-sec">
                    <div className="container">
                      <div className="row">
                        <h2 className="text-center headg">
                          The Impact of a {" "}
                          <span className="every-pr"> Strategic Rebrand</span>{" "}
                        </h2>
                      </div>
                    </div>
                    <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />    
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
                     At DN Designs, we are a bunch of enthusiastic and experienced professionals who turn every rebranding challenge into victory. We know that a successful rebrand goes beyond aesthetics and addresses fundamental branding issues that hinder growth. For this reason, we adopt a holistic rebranding approach. We combine our creative and strategic skills to build a brand that’s ready for both present and future success.
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
                <p className="why-dn-designs-mobile-para">At DN Designs, we are a bunch of enthusiastic and experienced professionals who turn every rebranding challenge into victory. We know that a successful rebrand goes beyond aesthetics and addresses fundamental branding issues that hinder growth. For this reason, we adopt a holistic rebranding approach. We combine our creative and strategic skills to build a brand that’s ready for both present and future success.</p>
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
            <Form FormHead={FormHead} FormPara={FormPara} />
    


      
        

      

      


      


     
    </div>
  )
}

export default page
