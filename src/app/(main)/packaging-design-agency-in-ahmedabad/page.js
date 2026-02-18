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
import Link from "next/link";
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
    seo = await getPageById(
      "packaging-design-agency-in-ahmedabad",
      null,
      false,
    );
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Packaging Design Agency in Ahmedabad",
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
  const title = "Packaging Design Agency in Ahmedabad: Design That Speaks";
  const description =
    "Our packaging feels like a beautifully drafted invitation that warmly draws consumers in, holds their attention, and leaves a memorable impression long after they’ve seen it.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById(
      "packaging-design-agency-in-ahmedabad",
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
      question:
        "How is DN Designs the best packaging design agency in Ahmedabad?",
      answer:
        "What makes us widely regarded as the top packaging design agency in Ahmedabad is our determination to bring together strategy, creativity, and market insights, all together to provide designs that guarantee results. We have a team of professionals who are all experts in their field, and work with an aim to boost your product’s visibility and sales in the market.",
    },
    {
      question: "Why is packaging design so important in Ahmedabad?",
      answer:
        "As competition increases in the FMCG, food, beauty, and retail sectors, good packaging design helps brands stand out and quickly gain consumer trust.",
    },
    {
      question:
        "What key elements can make a design stand out in Ahmedabad’s competitive market?",
      answer:
        "Clear communication, right colours & typography, captivating images, thoughtful placement of elements and brand consistency are some of the key elements that help make packaging design effective. Hence, these are the main focuses of our packaging design services, too.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "Do packaging design companies also provide other services like brand strategy development and visual identity creation?",
      answer:
        "Yes. Many packaging design companies do more than just create the pack. They often handle complete branding work, that is, they develop brand strategy, define visual identity elements like logos, and make sure the packaging is consistent with the overall brand story.",
    },
    {
      question:
        "What makes a good packaging design from a consumer psychology perspective?",
      answer:
        "A strong packaging design connects with how consumers think and make choices. It uses clear organisation, familiar signs, and emotional triggers to build trust and interest. Good packaging quickly shows value, is easy to understand, and stands out visually.",
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
          key={`schema-page-${pageData._id || "packaging-design-agency-in-ahmedabad"}`}
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
              <h1>Packaging Design Agency in Ahmedabad: Design That Speaks</h1>
              <p className="para-roboto">
                Our packaging feels like a beautifully drafted invitation that
                warmly draws consumers in, holds their attention, and leaves a
                memorable impression long after they’ve seen it.
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
                <h2>Why Packaging Design Is Important</h2>
                <p>
                  In the city’s busy market, your product can often get lost
                  among countless options, reducing its visibility and sales. In
                  such a situation, strong packaging becomes essential to
                  outshine. As a leading packaging design company in Ahmedabad,
                  we help brands overcome this very challenge with memorable
                  visuals. Our packaging design services ensure your product
                  looks premium, professional, and ready to compete in the
                  market.
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
                <h2>The Process for High-Impact Packaging Design</h2>
                <p>
                  We have a very structured approach to packaging design which
                  focuses on delivering result which has a sense of clarity,
                  consumer appeal, and storytelling to it. We study your
                  audience, industry & market trends, and behaviour to create
                  packaging that works both in online and offline stores. Our
                  expert professionals make sure that every element, starting
                  from colours to typography, is perfected.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Packaging That Makes a Difference</h2>
                <p>
                  As the leading packaging design company in Ahmedabad, we
                  create product packaging that makes customers choose you in an
                  instant. We are committed to creating packaging designs that
                  attract attention, clearly convey your identity and story,
                  build trust, and enhance recall and loyalty among consumers.
                  This ensures that your product is set for success in the
                  market.
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
