export const dynamic = "force-dynamic";
export const revalidate = 0;


import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import CreativeAgencySwipper from "@/Components/CreativeAgencySwipper/CreativeAgencySwipper";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import OurConstant from "@/Components/OurConstant/OurConstant";
import PagesHero from "@/Components/PagesHero/PagesHero";
import React from "react";
import "./creative-agency.css";
import OurWorkServiceTabs from "@/Components/OurWorkServiceTabs/OurWorkServiceTabs";
import Faqs from "@/Components/Faqs/Faqs";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Image from "next/image";
import Form from "@/Components/Form/Form";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("creative-agency", null, false);
  } catch (error) {
    console.log("Creative Agency Error", error);
    return {
      title: "Creative Agency",
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
      pageData = await getPageById("creative-agency", null, true);
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
  const heading = "Creative Agency";
  const subHeading = "Building Brands Through Creative Designs";
  const para =
    "We believe that, at the core of every great brand, is a great design. It is a powerful tool that helps brands communicate, persuade, and sell. It is also what transforms them into an unforgettable experience. And that is why, as a creative agency, we pour in every ounce of our creativity into crafting an impactful design. We offer a full spectrum of visual, communication and experience design services, so that your brand makes a compelling impression and delivers meaningful results. Want to know more? Stay with us, as we introduce our services to you in greater detail. Also, browse through our portfolio and find answers to the most frequently asked questions.";

  // faqs content
  const leftFaqs = [
    {
      question: "What does design mean to your agency?",
      answer:
        "For us, design is not simply decoration; it is strategy in action. This means that we do not focus solely on the look aspect. Our commitment, instead, is to deliver designs that help you achieve your business goals. Every single design element - be it colour, typography, icons or layout - is chosen carefully to reflect your brand values, connect with your target audience and drive business growth.",
    },
    {
      question: "As a creative agency in India, what services do you offer?",
      answer:
        "We are a full-service creative agency in India, and therefore, we offer all creative services related to branding, promotion, and communication under one roof. This includes brand identity and strategy design, packaging design, website design, and catalogue design. As a creative marketing agency and a creative ad agency, we also help you with digital marketing, photography, brand video shoots and animation services.",
    },
    {
      question: "What makes your design approach different?",
      answer:
        "Upon receiving a project, we do not begin designing immediately. We begin by understanding your business, vision and goals, as well as your audience and the market. Accordingly, we brainstorm and finalise strategies and design concepts. Simply put, we do not just design; we design strategically.",
    },
    {
      question: "Can you design both packaging and marketing materials?",
      answer:
        "Yes, we can definitely design your packaging as well as your marketing materials. We focus on making designs that are unique and yet convey a consistent brand identity everywhere.",
    }
  ];

  const rightFaqs = [
    {
      question: "Do you offer UI/UX and website development together?",
      answer:
        "Yes. We can definitely offer you both UI/UX design and website development services together. However, in case you need only one of these services, we can also provide them individually. You just need to tell us your requirement, and we will deliver accordingly.",
    },
    {
      question: "Do you offer a fixed package or a customised one?",
      answer:
        "This once again depends on your requirements. We offer a complete brand design package, but we can also customise it as per your exact needs.",
    },
    {
      question: "Are there any hidden charges for your creative services?",
      answer:
        "No, we believe in transparency, and therefore, there are absolutely no hidden charges for our creative services. Before beginning your project, we share a detailed quotation tailored to your specific design requirements. However, any extra requirements not covered in the quote are charged separately. Get in touch with us to know more about our pricing.  ",
    },
    {
      question:
        "How long does a design project take for completion?",
      answer:
        "Each project is unique, and therefore, there are different timelines for completion. A complete brand design service takes more time than an individual design (UI/UX or packaging). Also, the complexities involved and the number of revisions required affect the final timelines. We share the exact timelines with you before we begin working on your project.",
    }
  ];

  const FormHead = "Let’s Discuss Over A Cup Of Coffee";
  const FormPara =
    "A creative design is beautiful, but when combined with strategy, it becomes powerful. It attracts, persuades, performs, and helps build enduring brands. At DN Designs, a strategic creative agency, we specialise in creating such purposeful, persuasive, and performance-driven designs. Want our creative and strategic experts to craft a design that drives growth for your business? Let’s meet and discuss your project.";


   // city pages slider data

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

  return (
    <div>

    {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "creative-agency"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* creative-agency hero */}
      <section>
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>

      {/* creative agency swipper  */}
      <CreativeAgencySwipper cityPagesSlideDataCreativeAgency={cityPagesSlideDataCreativeAgency}/>

      {/* our brands section */}
      <section className="our-brands-section-home">
        <OurBrandsSectionHome />
      </section>

      {/*.....our-constant-companions...... */}
      <section className="our-constant-companions">
        <OurConstant />
      </section>

      {/* Our Process  desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Our <span className="every-pr">  Process</span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Discussion</h2>
                  <p>
                   Clarity comes first. So, our process begins with a detailed discussion with you. We ask questions and understand your business, products, and long-term goals. This clarity ensures that we adopt the right design approach. 
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Research </h2>
                  <p>
                    Research forms the foundation of successful work. And we make sure that we are thorough in this phase. We explore the market, understand audience behaviour and analyse competition. Only then do we move to the next stage.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Ideation & Planning</h2>
                  <p>
                    This stage is all about brainstorming ideas, concepts, and strategies. Your opinions and feedback help us shortlist designs, and eventually lock the final one. As a creative agency, we ensure to bring innovative design ideas and concepts to the table at this stage.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Implementation & Review</h2>
                  <p>
                   This is where the actual work is done. Our creative experts sit down to design your brand identity, packaging, UI/UX, or whatever your design needs are. Post-completion, we ask you to review the work once again. Based on your feedback, we make the necessary changes and finalise the design. 
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>The Launch </h2>
                  <p>
                    This is the final stage, and so we perform a final round of testing to ensure our work is free from errors. Now comes the most exciting part - the launch. We unveil your brand, packaging, website, video or any other design. Cheers! They are now live and ready for the world to see and interact with.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Process mobile view */}

      <section className="creating-your-brand-mobile">
        <div className="conatiner">
          <h2 className="text-center our-brand-heading-a-mobile">
            Our 
            <span className="every-pr"> Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Discussion</h2>
                  <p>
                   Clarity comes first. So, our process begins with a detailed discussion with you. We ask questions and understand your business, products, and long-term goals. This clarity ensures that we adopt the right design approach. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Research </h2>
                  <p>
                    Research forms the foundation of successful work. And we make sure that we are thorough in this phase. We explore the market, understand audience behaviour and analyse competition. Only then do we move to the next stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Ideation & Planning</h2>
                  <p>
                    This stage is all about brainstorming ideas, concepts, and strategies. Your opinions and feedback help us shortlist designs, and eventually lock the final one. As a creative agency, we ensure to bring innovative design ideas and concepts to the table at this stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Implementation & Review</h2>
                  <p>
                   This is where the actual work is done. Our creative experts sit down to design your brand identity, packaging, UI/UX, or whatever your design needs are. Post-completion, we ask you to review the work once again. Based on your feedback, we make the necessary changes and finalise the design. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>The Launch </h2>
                  <p>
                    This is the final stage, and so we perform a final round of testing to ensure our work is free from errors. Now comes the most exciting part - the launch. We unveil your brand, packaging, website, video or any other design. Cheers! They are now live and ready for the world to see and interact with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our work tabs */}
      <section className="our-work-tabs">
        <OurWorkServiceTabs />
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
                Because we are a team of experienced professionals with the energy and enthusiasm of newcomers. We absolutely love our creative field and want to deliver work that exceeds your expectations and makes you truly happy. Also, we focus on crafting designs that do more than just look good. We want our designs to yield positive results for your business.
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
          <p className="why-dn-designs-mobile-para">Because we are a team of experienced professionals with the energy and enthusiasm of newcomers. We absolutely love our creative field and want to deliver work that exceeds your expectations and makes you truly happy. Also, we focus on crafting designs that do more than just look good. We want our designs to yield positive results for your business.</p>
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






      {/* faqs */}
      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* testimonial  */}
      <Testimonial />
      <Form FormHead={FormHead} FormPara={FormPara} pageName="Landing Page" />
    </div>
  );
}

export default page;
