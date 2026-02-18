export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import styles from "../page.module.css";
import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import OurConstant from "@/Components/OurConstant/OurConstant";
import OurWorkHomeSection from "@/Components/OurWorkHomeSection/OurWorkHomeSection";
import TalkToUsCityPages from "@/Components/TalkToUsCityPages/TalkToUsCityPages";
import "./branding-agency-in-mumbai.css";
import CityPagesSwipper from "@/Components/CityPagesSwipper/CityPagesSwipper";
import Faqs from "@/Components/Faqs/Faqs"; 
import Testimonial from "@/Components/Testimonial/Testimonial";
import Form from "@/Components/Form/Form";
import Image from "next/image";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Link from "next/link";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import HomePageHero from "@/Components/HomePageHero/HomePageHero";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-mumbai", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency In Mumbai",
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
  const title = "Branding Agency In Mumbai: Your Vision, Our Design";
  const description =
    "We are a leading branding agency in Mumbai, offering solutions that establish your brand’s identity & voice in the market and propel its massive growth.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("branding-agency-in-mumbai", null, true);
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
      question: "Why should I hire a professional branding company in Mumbai?",
      answer:
        "Hiring a professional branding agency in Mumbai makes sure your brand leaves a lasting impression. It brings in an experienced team which, through strategic thinking, creative expertise, and deep market understanding, gives your brand an impactful and consistent brand image that connects with your audience.",
    },
    {
      question: "What types of branding services do you offer?",
      answer:
        "We offer a comprehensive range of branding services in Mumbai to help establish and accelerate your brand’s growth. Our services include logo design, brand name suggestions, packaging design, catalogue design, digital marketing, and web design. Essentially, everything your brand needs to shine.",
    },
    {
      question: "How long does the branding process take?",
      answer:
        "The duration of the branding process primarily depends on the project's complexity. Generally, it takes about 4 to 8 weeks to develop a new brand. On the other hand, rebranding may take slightly longer, depending on the depth of the required changes.",
    },
  ];

  const rightFaqs = [
    {
      question: "Can you help with rebranding my existing business in Mumbai?",
      answer:
        "Absolutely. We can help you rebrand your business by creating a fresh visual identity and positioning, and modernising your communication to keep you relevant and appealing even in a challenging market.",
    },
    {
      question: "Do you offer branding services outside Mumbai?",
      answer:
        "Yes, we do. We provide branding services not only in Mumbai but around the world. We work to maintain a seamless collaboration between our team and you. This helps us attain the same level of creativity and attention to detail, regardless of where your business is located.",
    },
    {
      question: "How can I get started with your branding services?",
      answer:
        "To contact us, you can fill out our contact form, email us at info@dndesigns.co.in, or call 9416011100 and schedule a consultation. Our team will get back to you shortly to discuss your needs.",
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Some brands simply stand out! You recognise them, you trust them and you do not think twice before purchasing from them. That’s how powerful a brand can be! However, building such an influential brand is quite a task. No worries for you, though, for we are here to turn your dreams into reality. If you have the same vision for your brand, think no further. Just get in touch with us and tell us all you have in mind for your product.Let’s discuss how to make your brand something others love and envy.";

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-agency-in-mumbai"}`}
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
              <h1>Branding Agency In Mumbai: Your Vision, Our Design</h1>
              <p className="para-roboto">
                We are a leading branding agency in Mumbai, offering solutions
                that establish your brand’s identity & voice in the market and
                propel its massive growth.
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
                <h2>Branding: The Reason Behind Every Strong Brand</h2>
                <p>
                  In a city full of dreams, achieving yours isn’t a cakewalk.
                  That is why your product/business needs a strong branding plan
                  that helps you express your values and attract your target
                  audience. The sole objective of branding is to establish a
                  unique identity in the market that people remember, connect
                  with & trust. It is eventually this connection and trust that
                  drive sales and profit for your business.
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
                <h2>Why is Professional Branding Service Essential?</h2>
                <p>
                  In a jam-packed market like Mumbai’s, the right branding can
                  do wonders for your brand. It helps draw attention and creates
                  lasting recall among consumers while improving your
                  credibility. Even successful businesses can fade over a period
                  of time without a strong branding plan. Working with a
                  professional branding company in Mumbai can help you establish
                  a strong brand identity which is seen, remembered and chosen.
                  It will give an edge over your competitors.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Why We’re the Right Fit for Your Branding Services</h2>
                <p>
                  As the best branding agency in Mumbai, we strive to strike a
                  perfect balance between innovation & expertise to help brands
                  achieve their goal. Our team offers customised branding
                  solutions to give your brand a boost, making it distinctive,
                  loved, and profitable. Our profound understanding of consumer
                  behaviour and trends ensures that you get noticed instantly.
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
