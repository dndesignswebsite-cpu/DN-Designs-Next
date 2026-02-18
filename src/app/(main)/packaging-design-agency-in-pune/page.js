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
    seo = await getPageById("packaging-design-agency-in-pune", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Packaging Design Agency in Pune",
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
  const title = "Packaging Design Agency in Pune: Designing Impressive Packaging For You";
  const description =
    "Let’s increase your product’s market appeal through standout packaging designs. As a packaging design agency in Pune, we craft designs that instantly attract consumers’ attention, convey your brand values and increase sales.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("packaging-design-agency-in-pune", null, true);
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
      question: "How do packaging designs help my brand stand out in Pune?",
      answer:
        "Pune has a competitive market, and consumers have plenty of choices. An impressive packaging design is crucial to draw their attention and make them purchase your product. When you invest in packaging design services in Pune, you essentially give your brand a chance to perform well.",
    },
    {
      question: "How do I select the best packaging design company in Pune?",
      answer:
        "You need to research and shortlist packaging design agencies in Pune, and then review their past work. Understand the kind of work they have done and what their previous clients have to say about them. Also, talk to them directly to figure out if they suit your goals and budget. Finally, choose one that you think can deliver results.",
    },
    {
      question:
        "Why is DN Designs one of the top packaging design companies in Pune?",
      answer:
        "We are a leading packaging design company in Pune with plenty of experience behind us. Over the last eight years, we have designed packaging for various products and brands, and are therefore competently positioned to create a standout design for you as well. We don’t believe in creating just designs; rather, we focus on creating designs that work. For this reason, we base all our designs on solid research. Lastly, customer satisfaction is vital for us, so we work to make our customers happy.",
    },
  ];

  const rightFaqs = [
    {
      question: "What is your packaging design process?",
      answer:
        "As a packaging design agency in Pune, we have a very structured approach to our work. We begin the process with a meeting with you. We try to understand your product and vision and then conduct our own research. Thereafter, we share design ideas and concepts with you through reference boards and mood boards. After you approve a design, we create your packaging and deliver the final files to you. ",
    },
    {
      question:
        "How long does it take for a packaging design agency to complete a project?",
      answer:
        "The delivery time is not fixed as project requirements may vary. Sometimes the number of designs can take up more time, while at other times, the design complexities can consume more than expected time. You may, however, keep a timeframe of 3-4 weeks for the completion of the project.",
    },
    {
      question: "Can you redesign the packaging of my existing products?",
      answer:
        "Sure, we can redesign the packaging of your existing products to make it more modern, attractive and in sync with your brand values. ",
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
          key={`schema-page-${pageData._id || "packaging-design-agency-in-pune"}`}
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
                Packaging Design Agency in Pune: Designing Impressive Packaging
                For You
              </h1>
              <p className="para-roboto">
                Let’s increase your product’s market appeal through standout
                packaging designs. As a packaging design agency in Pune, we
                craft designs that instantly attract consumers’ attention,
                convey your brand values and increase sales.
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
                <h2>What Makes Our Packaging Designs Special</h2>
                <p>
                  We design our packages to be showstoppers. Just as a
                  showstopper steals the show on the ramp, our packaging designs
                  make heads turn and create a buzz. This is super important
                  because, unless this happens, your products run the risk of
                  getting lost on store shelves (both physical and online
                  stores). We, as a packaging design agency in Pune, bring our
                  creative best to ensure that your products make an impression
                  and leave a strong recall value with your customers.
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
                <h2>How Do We Make Impactful Designs</h2>
                <p>
                  Great packaging designs don’t just happen on their own. They
                  are a result of strategy, creativity and most importantly,
                  plenty of hard work. As an agency, we do exactly that. We
                  understand your product, research the market, study your
                  consumer behaviour and analyse your competitors’ work to
                  figure out the right design direction. Every single element of
                  the packaging design is selected carefully to make a
                  difference, be it the colour, the font or the images.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>We Design For Present & Future</h2>
                <p>
                  Our packaging design services in Pune go beyond a single
                  product design or designs for the present. Whether you have
                  multiple products and variants currently, or are planning to
                  expand in future, we are perfectly prepared to deliver
                  exceptional results. Our designs ensure that each of your
                  products has a distinctive identity, but still reflects a
                  unified brand identity. Clarity, consistency and strong brand
                  strength - that’s what we aspire to achieve for your present
                  performance and future growth.
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
