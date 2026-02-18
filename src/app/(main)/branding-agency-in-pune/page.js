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
    seo = await getPageById("branding-agency-in-pune", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency in Pune",
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
  const title = "Branding Agency in Pune - Driving Your Brand Forward";
  const description =
    "Trust the best branding agency in Pune to transform your business into a unique, attractive and profitable brand. Let’s join hands to create something great.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("branding-agency-in-pune", null, true);
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
      question:
        "Why is branding important for startups and established businesses in Pune?",
      answer:
        "Pune presents a highly competitive environment for businesses, together with strong economic growth, a rapidly growing IT and manufacturing sector and a large consumer base. Businesses, both startups and established, therefore need branding services to create a space for themselves in this market and get recognised and appreciated.",
    },
    {
      question: "How to choose the best branding agency in Pune?",
      answer:
        "To choose the best branding company in Pune, research the available options and check out their work portfolio and processes. This is important to understand whether they align with your business goals and work standards. It is also important to see whether they fit into your budget and can deliver your work in the given timeframe you want.",
    },
    {
      question: "What makes DN Designs the best branding agency in Pune?",
      answer:
        "DN Designs comes with extensive experience and proven expertise in brand development. We have worked in this space for over 8 years now and have helped build several brands in different verticals. Our talented team members - strategists, designers and editors - are all passionate individuals who work tirelessly to build your brand and make you happy.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "What industries does DN Designs specialise in for branding services?",
      answer:
        "DN Designs works across industries, be it retail, food & beverage, pharmaceuticals, nutraceuticals, education, tourism and cosmetics & skincare.",
    },
    {
      question:
        "Do you provide rebranding services for existing companies in Pune?",
      answer:
        "Certainly, we help existing brand update their identity, positioning and messaging to stay relevant and attractive to their audience.",
    },
    {
      question: "Do you also provide packaging design and brand strategy?",
      answer:
        "Both brand strategy development and packaging design are part of our branding services in Pune. You can avail these services as part of our complete branding package, or opt for individual services too.",
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
          key={`schema-page-${pageData._id || "branding-agency-in-pune"}`}
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
              <h1>Branding Agency in Pune - Driving Your Brand Forward</h1>
              <p className="para-roboto">
                Trust the best branding agency in Pune to transform your
                business into a unique, attractive and profitable brand. Let’s
                join hands to create something great.
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
      </section>
      */}

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
                <h2>What is Branding All About</h2>
                <p>
                  Branding isn’t a single activity. It involves a lot more than
                  what you think. From product/market/audience research and the
                  overall brand strategy development to deciding on finer design
                  details like colour and typography, branding includes
                  everything. To elaborate, it is what defines your brand;
                  establishes its values, messaging and voice; crafts its visual
                  identity and customer interaction; and finally builds customer
                  perception, connection, trust and loyalty.
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
                <h2>The Power of Professional Branding</h2>
                <p>
                  With branding being so important, you sure want it for your
                  business. You might have a vision for the future as well;
                  however, the knowledge and the range of skills needed to build
                  a strong brand might just be missing. That’s where a
                  professional branding company in Pune can really give your
                  business a boost. It comes with strategic insights, creative
                  expertise and plenty of branding experience. It can help
                  transform your vision into a strong, memorable identity that
                  people recognise and connect with at every touch point.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>The Difference We Can Make</h2>
                <p>
                  As the best branding agency in Pune, we can collaborate with
                  you to build a brand that is authentic, consistent,
                  distinctive and memorable. We offer comprehensive branding
                  services in Pune, right from consultation and research to
                  brand identity development, packaging design and catalogue
                  design. To establish your online presence, we also design and
                  develop your website and promote your brand through digital
                  media strategies, photography and animation.
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
