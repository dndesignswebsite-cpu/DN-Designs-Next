export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import styles from "../page.module.css";
import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import OurConstant from "@/Components/OurConstant/OurConstant";
import OurWorkHomeSection from "@/Components/OurWorkHomeSection/OurWorkHomeSection";
import TalkToUsCityPages from "@/Components/TalkToUsCityPages/TalkToUsCityPages";
import "./branding-agency-in-gurgaon.css";
import CityPagesSwipper from "@/Components/CityPagesSwipper/CityPagesSwipper";
import Faqs from "@/Components/Faqs/Faqs";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Form from "@/Components/Form/Form";

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Link from "next/link";
import Image from "next/image";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import HomePageHero from "@/Components/HomePageHero/HomePageHero";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-hyderabad", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency in Hyderabad",
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
  const imageUrl = "https://dndesigns.co.in/uploads/pages/";

  // home page hero content
  const title = "Branding Agency in Hyderabad - For Comprehensive Brand Development";
  const description =
    "Looking for the best branding agency in Hyderabad to transform your new business into a success story? No worries, we are right here!";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("branding-agency-in-hyderabad", null, true);
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
      question: "What is a branding company, and what does it do?",
      answer:
        "A branding company is a firm that excels in creating a complete brand identity design for a business. Be it your product’s visual identity (logos, packaging design, catalogue design) or your positioning, values, story and messaging, a branding company in Hyderabad helps establish and convey it to your audience. It conducts market and audience research, crafts a branding strategy, puts the strategy into action and finally monitors the progress.",
    },
    {
      question: "How much does brand development cost with a branding agency?",
      answer:
        "There isn’t a fixed price when it comes to brand development. It all depends on the individual project and the work involved.",
    },
    {
      question:
        "Why should I choose DN Designs as my branding agency in Hyderabad?",
      answer:
        "DN Designs has expertise and industry knowledge that stems from talent and experience. Our team - a set of enthusiastic and skilled professionals - prioritises your vision and makes sure that you successfully achieve your branding objective. All our work is backed by research, which ensures that your brand is market-ready at the time of launch.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "What are the main branding services offered by DN Designs in Hyderabad?",
      answer:
        "Our branding services in Hyderabad include an entire spectrum. We offer brand consultation, research and strategy design as well as logo design, packaging design, catalogue design, photography and animation. Additionally, we also help promote your brand through our digital marketing services.",
    },
    {
      question:
        "Do you offer digital branding and marketing services along with design in Hyderabad?",
      answer:
        "Yes, at DN Designs, we offer digital branding and marketing services too. We design your UI/UX and develop an SEO friendly website for you. We also help promote your brand through our services like SEO, digital marketing, social media marketing and influencer marketing. Additionally, we provide photography and animation video creation services as well to boost your brand.",
    },
    {
      question: "How can I request a quote for branding in Hyderabad?",
      answer:
        "Just fill out our contact-us form, or drop us an email at info@dndesigns.co.in. Alternatively, you can call us at +91 941 601 1100 or +91 720 660 5872.",
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Some brands simply stand out! You recognise them, you trust them and you do not think twice before purchasing from them. That’s how powerful a brand can be! However, building such an influential brand is quite a task. No worries for you, though, for we are here to turn your dreams into reality. If you have the same vision for your brand, think no further. Just get in touch with us and tell us all you have in mind for your product.Let’s discuss how to make your brand something others love and envy.";
  const pageName = "branding";

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-agency-in-hyderabad"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*.....hero...... */}
      {/* <section className={`${styles.hero}`}>
        <div className="container">
          <div className={`${styles["hero-rows"]} row`}>
            <div className={`${styles["left-hero"]} col`}>
              <h1>
                Branding Agency in Hyderabad - For Comprehensive Brand
                Development
              </h1>
              <p className="para-roboto">
                Looking for the best branding agency in Hyderabad to transform
                your new business into a success story? No worries, we are right
                here!
              </p>
              <div>
                <HomePageBtn />
              </div>
            </div>
            <div className={`${styles["hero-img"]} col`}>

              <Image
                src={imageUrl + "gkjeg.webp"}
                className={`${styles["hero-bg-img"]} ${styles["responsive-img"]}`}
                alt="home page image"
                width={1000}
                height={1000}
                priority
              />


              <Image
                src={imageUrl + "hgefef.webp"}
                className={`${styles["hero-img-main"]} ${styles["responsive-img"]}`}
                alt="home page image"
                width={700}
                height={700}
                priority
              />
            </div>
          </div>
        </div>
      </section> */}

       {/*.....hero...... */}
     <HomePageHero title={title} description={description} />
    


     {/* our brands section */}
        <OurBrandsSectionHome/>
        
      {/*.....our-constant-companions...... */}
      <OurConstant />
      {/*.....Our work...... */}
      <OurWorkHomeSection />

      {/* next sectiion */}
      <section className="city-pages-content-img-sec">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>What Makes Branding Important?</h2>
                <p>
                  Branding is what you need if you want to make your presence
                  felt in the market. Why is that so? It is because branding
                  helps you establish your unique identity - visual, verbal and
                  emotional (logo, colours, typography, voice, story, messaging,
                  mission, vision, values and positioning) in the market.
                  Without this identity, it is not possible for customers to
                  either recognise, connect and trust your brand or purchase
                  from you.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img src={imageUrl + "city.webp"} className="img-fluid" /> */}
                <Image
                                  src={imageUrl + "city.webp"}
                                  className="responsive-img image-box-city-page-img"
                                  alt="home city page image"
                                  width={1500}
                                  height={1000}
                                />
              </div>
            </div>
          </div>

          <div className="row flex-column-reverse flex-xl-row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img src={imageUrl + "city-2.webp"} className="img-fluid" /> */}
                 <Image
                                  src={imageUrl + "city-2.webp"}
                                  className="responsive-img image-box-city-page-img"
                                  alt="home city page image"
                                  width={1500}
                                  height={1000}
                                />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Why You Need A Branding Agency in Hyderabad?</h2>
                <p>
                  Branding is not a simple task. It is a process that involves a
                  whole set of activities, right from logo design, packaging
                  design and catalogue design to website design. It requires a
                  varied skillset, from research and strategy development to
                  designing skills. A branding company in Hyderabad brings you
                  just that - expertise, experience and vision that can catapult
                  your brand to popularity.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Let’s Make Your Brand Grow - Together</h2>
                <p>
                  At DN Designs, we offer comprehensive branding and marketing
                  services for your business. Whether you need a complete
                  branding package or individual service, we are here to help
                  you at every step. We aspire to turn your brand into a story
                  of growth, achievement and inspiration. Want to work with us?
                  Why not contact us today and start a conversation?
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img src={imageUrl + "city-3.webp"} className="img-fluid" /> */}
                <Image
                                  src={imageUrl + "city-3.webp"}
                                  className="responsive-img image-box-city-page-img"
                                  alt="home city page image"
                                  width={1500}
                                  height={1000}
                                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* swipper */}
      <CityPagesSwipper />

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
