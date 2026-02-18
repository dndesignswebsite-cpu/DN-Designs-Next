export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
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
import Image from "next/image";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import HomePageHero from "@/Components/HomePageHero/HomePageHero";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-delhi", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency in Delhi",
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
  const title = "Branding Agency in Delhi: Where Brands Find Their Voice";
  const description =
    "As the best branding agency in Delhi, we deliver end-to-end branding services to help you build an impactful business.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("branding-agency-in-delhi", null, true);
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
      question: "Why should I hire a professional branding agency in Delhi?",
      answer:
        "A professional branding company in Delhi can help create a memorable and consistent brand identity that connects with consumers. A company comes with a skilled team, deep market insights, great designs, and clear communication, which can really help you in your branding journey",
    },
    {
      question: "What types of branding services do you offer?",
      answer:
        "Our branding services in Delhi, customised to fit your brand values and business goals, include brand strategy design, logo design, brand name suggestions, packaging design, catalogue design, digital marketing, and web design.",
    },
    {
      question: "How long does the branding process take?",
      answer:
        "The timeline varies based on the project scope. Typically, developing a brand can take 4 to 8 weeks. Rebranding projects may take longer, depending again on the project.",
    },
  ];

  const rightFaqs = [
    {
      question: "Can you help with rebranding my existing business in Delhi?",
      answer:
        "Absolutely. We specialise in rebranding, redefining positioning, and modernising so that your brand stays relevant in today’s market.",
    },
    {
      question: "What makes your agency the best branding agency in Delhi?",
      answer:
        "We are among the top branding & marketing agencies, not just in Delhi but worldwide. We blend strategy, creative design, and market insight to build your identity. Every brand we create is backed by research. You can see our work here.",
    },
    {
      question: "How can I get started with your branding services?",
      answer:
        "Just reach out through our contact form or schedule a consultation by emailing info@dndesigns.co.in or calling 9416011100. Our team will get back to you as soon as possible.",
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
          key={`schema-page-${pageData._id || "branding-agency-in-delhi"}`}
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
              <h1>Branding Agency in Delhi: Where Brands Find Their Voice</h1>
              <p className="para-roboto">
                As the best branding agency in Delhi, we deliver end-to-end
                branding services to help you build an impactful business.
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
                <h2>Understanding Branding</h2>
                <p>
                  Branding is about creating the right image for your business.
                  So it’s much more than your logo. Effective branding is what
                  helps people build trust & emotional connection while also
                  defining your brand’s purpose. This is what turns your
                  business into an iconic brand, one that will leave a lasting
                  legacy even in a fast-moving, competitive market.
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
                <h2>Why Every Brand Needs Expert Branding Services</h2>
                <p>
                  In a world driven by first impressions, brands need
                  professional branding services to achieve success. Expert
                  branding helps shape identity and messaging and strengthens
                  the positioning of the brand. Moreover, it attracts the right
                  audience while building recognition and loyalty among them. In
                  Delhi’s demanding market landscape, branding is a service that
                  can turn humble businesses into big names.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Powerful Brands Start Here</h2>
                <p>
                  As the leading branding agency in Delhi, we believe that the
                  best results come from a perfect balance of creativity and
                  strategy. From startups to established brands, we create
                  identities that are always market-forward. Our brand-building
                  company designs unique identities, clear messaging, and
                  impactful visuals, especially for you, from scratch.
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
