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
    seo = await getPageById("packaging-design-agency-in-delhi", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Packaging Design Agency in Delhi",
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
  const title = "Packaging Design Agency in Delhi: Turning Ideas Into Iconic Packaging";
  const description =
    "Trust us to create absolutely alluring packaging designs for your products. With a seamless blend of strategy and creativity, we turn every product into a memorable experience.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById(
      "packaging-design-agency-in-delhi",
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
        "How does a packaging design company in Delhi improve my product’s performance?",
      answer:
        "A packaging design agency in Delhi makes packaging designs that clearly communicate your product’s core values, boost its shelf visibility, and create a stronger brand impression on consumers.",
    },
    {
      question:
        "Do you offer complete packaging design services from start to finish?",
      answer:
        (<>Yes, our <Link href="/packaging-design" className="faq-link">packaging design services </Link>include everything from start to finish. It begins from market & audience research and is followed by concept creation, design planning and implementation, revisions and final delivery of the design files.</>)
    },
    {
      question:
        "Are you suitable for startups looking for a packaging design company in Delhi?",
      answer:
        "Yes. We work for both startups and established companies alike. We assist new brands in creating beautiful packaging with clarity and structure to make sure that they capture consumer attention and communicate their brand values.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "Can you redesign my existing packaging to make it more appealing?",
      answer:
        "Absolutely. Our packaging design services include modernising outdated packaging design to keep it relevant to your current brand values and the market expectations.",
    },
    {
      question: "Can you support large brands with multiple products?",
      answer:
        (<>Yes, we can surely support larger brands that have several products and sub-variants. We can design packages that give a unique identity to each of your products, and yet reflect the overall <Link href="/branding" className="faq-link">brand identity.</Link></>)
    },
  ];

  // form section content
  const FormHead = "Do you also assist with printing?";
  const FormPara =
    "Since we are a product packaging design company in Bangalore, our primary focus is on designing high-impact visuals and labels for your packaging. But in case you need help with printing, we can connect you with trusted printers, too.";
  const pageName = "branding";

  // city pages slider data
    let cityPagesSlideData = {

       CityPagesSwipper_heading : "Branding and Marketing Services That Build Trust and Admiration",
       
       slide_1_slide_head : "Brand Name Suggestion",
       slide_1_slide_para : "   What’s in the name? We say, it’s quite significant, especially in branding. It reflects identity and evokes positive responses from consumers. We craft names that don't get lost in the shuffle and are remembered by your audience.",

       slide_2_slide_head : "Brand Development",
       slide_2_slide_para : "Without branding, your business will not be recognised, trusted or remembered. We are your one-stop solution for creating a strong brand. We craft your brand strategy, design your identity & establish your online brand presence.",

       slide_3_slide_head : "Brand Identity Design",
       slide_3_slide_para : "It is said that there is no second chance to make a first impression. And your logo is your first impression. We design logos that are versatile, unique, and clearly communicate your brand’s essence and values to your target audience.",

       slide_4_slide_head : "Packaging Design",
       slide_4_slide_para : "Want your product to impress your consumer at first glance? Designing attractive packaging can be your winning move. We create designs that don’t just wow your consumer but deeply show what your brand wants to say.",

       slide_5_slide_head : "Catalogue Design",
       slide_5_slide_para : "Your business & your product deserve all the spotlight. So, we create attractive and organised catalogues that reflect your brand and product with clarity, making it impossible to go unnoticed.",

       slide_6_slide_head : "Digital Marketing",
       slide_6_slide_para : "In this digital era, businesses cannot negate the importance of digital marketing. We create digital marketing strategies that target your online audience the right way, increase visibility, drive traffic, and generate measurable results.",

       slide_7_slide_head : "Influencer Marketing",
       slide_7_slide_para : "Influencers can boost your brand awareness and help generate revenue through their campaigns. We help you collaborate with the right influencers so that you can build trust among your target audience and drive engagement.",

       slide_8_slide_head : "Social Media Marketing",
       slide_8_slide_para : "To succeed, social media marketing is important. We are here to help you establish, manage and grow your social media presence. We provide comprehensive social media marketing services, from crafting a strategy to analysing performance.",

       slide_9_slide_head : "Animation",
       slide_9_slide_para : "Animations have the power to captivate and win hearts. We create stunning animations to bring your brand to life. Be it 2D or 3D animation, we create visuals that capture audience attention and leave an enduring impact.",

       slide_10_slide_head : "SEO",
       slide_10_slide_para : "Your website must appear prominently on search engines to improve your brand visibility, traffic and leads. We create and implement SEO strategies for this purpose. Be visible, attract customers and generate profit.",
       
       slide_11_slide_head : "Web Design",
       slide_11_slide_para : "Your website is your online office or store. It must impress those who visit it. We, therefore, create SEO optimised websites that are visually appealing, functional, and reflect your brand identity. Our designs ensure a good user experience.",

       slide_12_slide_head : "UI/UX Design",
       slide_12_slide_para : "Your website is your online office or store. It must impress those who visit it. We, therefore, create SEO optimised websites that are visually appealing, functional, and reflect your brand identity. Our designs ensure a good user experience.",

       slide_13_slide_head : "Photography",
       slide_13_slide_para : "Visuals speak louder than words. We capture the essence of your brand through our professional photography service. We create visuals that highlight your brand’s personality, connect with your audience and leave an everlasting impression."
    }


  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "packaging-design-agency-in-delhi"}`}
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
                Packaging Design Agency in Delhi: Turning Ideas Into Iconic
                Packaging
              </h1>
              <p className="para-roboto">
                Trust us to create absolutely alluring packaging designs for
                your products. With a seamless blend of strategy and creativity,
                we turn every product into a memorable experience.
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
              />

              <Image
                src={imageUrl + "hgefef.webp"}
                className={`${styles["hero-img-main"]} ${styles["responsive-img"]}`}
                alt="home page image"
                width={700}
                height={700}
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
                <h2>Why Packaging Design Matters in Delhi</h2>
                <p>
                  Delhi has a crowded market, with an increasing pool of
                  competitors. In such a scenario, your products can really
                  struggle to stand out. This makes it essential to invest in
                  quality packaging design, as it can be a good differentiator
                  for your product. As a top packaging design agency in Delhi,
                  we recognise potential problems and help you overcome them. We
                  offer complete packaging design services that make your
                  product memorable.
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
                <h2>How We Contribute to Your Success</h2>
                <p>
                  As a dedicated product packaging design company in Delhi, we
                  create designs that not only look great but also encourage
                  customers to choose your product. We research the audience,
                  study their feedback, analyse market trends, and get a deep
                  understanding of your brand values to deliver effective
                  results. We ensure that our services help your products gain
                  trust, visibility, and improved performance.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Our Packaging Design Strategy</h2>
                <p>
                  Our packaging design company in Delhi follows a clear, market
                  insight-driven strategy to give your product’s packaging a
                  strong visual identity. With extensive experience in packaging
                  design in Delhi, we focus on structure, colours, typography,
                  images, information and every other branding element, and
                  incorporate them thoughtfully in the packaging design. Our
                  services ensure that every element supports your brand and
                  improves shelf impact.
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
       <CityPagesSwipper cityPagesSlideData={cityPagesSlideData}/>

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
