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
import Link from "next/link";
import Image from "next/image";

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import HomePageHero from "@/Components/HomePageHero/HomePageHero";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("packaging-design-agency-in-kolkata", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Packaging Design Agency in Kolkata",
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
  const title = "Packaging Design Agency in Kolkata We Create Powerful Brand";
  const description =
    "Your product’s packaging design speaks to your customers and forms a long-lasting connection with them. It is essentially your brand ambassador, and we make sure that it is powerful.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById(
      "packaging-design-agency-in-kolkata",
      null,
      true,
    );
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
      question: "Why is packaging design important?",
      answer:
        "Your packaging design is important because it offers the first glimpse of your product. It is your first impression, and if it is not positive and powerful, customers will move on and pick up another product. So, in order to encourage your customers to choose your product, you need to ensure that its packaging design is impactful.",
    },
    {
      question:
        "What are the benefits of working with a packaging design agency in Kolkata?",
      answer:
        "When you hire a product packaging design agency in Kolkata, you essentially hire a team of professional experts. This team has the industry knowledge and design experience to create a packaging that conveys your brand identity perfectly and resonates with your target audience. Availing package design services in Kolkata can really help your product establish a strong presence in the market.",
    },
    {
      question:
        "Will your packaging design work well in physical stores as well as e-commerce platforms?",
      answer:
        "For sure. Our expert designers create packaging designs that succeed in all kinds of retail environments, whether physical stores or e-commerce platforms.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "Can you design packaging for all my products and their variants?",
      answer:
        "Absolutely! We would be delighted to create product packaging designs for all your products and their variants.",
    },
    {
      question: "Do you accept revisions? How many can I get?",
      answer:
        "Yes, we accept revisions, and there is no fixed number for them. We revise our designs till the time you feel that it is as per your vision.",
    },
    {
      question:
        "I want to expand into newer markets. Can you design my product’s packaging to suit the taste of the target audience there?",
      answer:
        "Yes, we can certainly create packaging designs to cater to the taste and preferences of your target audience. We always keep cultural sensitivities and language preferences in mind while designing our packaging.",
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
          key={`schema-page-${pageData._id || "packaging-design-agency-in-kolkata"}`}
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
                Packaging Design Agency in Kolkata We Create Powerful Brand
              </h1>
              <p className="para-roboto">
                Your product’s packaging design speaks to your customers and
                forms a long-lasting connection with them. It is essentially
                your brand ambassador, and we make sure that it is powerful.
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
                <h2>Creative Packaging Designs</h2>
                <p>
                  Our creative experts excel in crafting packaging designs that
                  appear absolutely striking and make their presence felt in a
                  crowded marketplace. Be it food or beverage or any other
                  lifestyle or wellness product, we design packaging for brands
                  belonging to diverse industries. As the best packaging design
                  agency in Kolkata, we are forever there to transform your
                  simple product into something exciting and powerful through
                  design.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img
                  src={imageUrl + "Packaging-Design.webp"}
                  className="img-fluid"
                /> */}

                <Image
                  src={imageUrl + "Packaging-Design.webp"}
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
                {/* <img
                  src={imageUrl + "How-We-Help-Your-Product-Stand-Out.webp"}
                  className="img-fluid"
                /> */}

                <Image
                  src={imageUrl + "How-We-Help-Your-Product-Stand-Out.webp"}
                  className="responsive-img image-box-city-page-img"
                  alt="home city page image"
                  width={1500}
                  height={1000}
                />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Conveying Brand Identity Through Design</h2>
                <p>
                  Consumers buy from you only when they trust you, and they
                  cannot trust you unless they know who you are and what you
                  stand for. That’s why we design packaging that efficiently
                  conveys your brand identity, story and values. We use every
                  packaging design element for this purpose, be it logo, colour,
                  typography, images, or taglines. Whether you want to convey a
                  premium elegance or a playful identity, we make sure that your
                  brand’s personality shines through our design and builds
                  strong customer connection and loyalty.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Design Based on Market Research</h2>
                <p>
                  We put in motion our package design process with in-depth
                  market research. We try to grasp the consumer psychology and
                  tailor our design to appeal to their taste and preferences. We
                  also make sure that our designs perform well in both physical
                  and digital retail environments. So, if you are searching for
                  a product packaging design agency in Kolkata that can really
                  make a difference to your brand and yield profit, look no
                  further. Contact DN Designs Today.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img
                  src={imageUrl + "Ready-to-Win-Every-Heart.webp"}
                  className="img-fluid"
                /> */}
                <Image
                  src={imageUrl + "Ready-to-Win-Every-Heart.webp"}
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
