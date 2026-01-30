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

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-jaipur", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency in Jaipur",
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

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("branding-agency-in-jaipur", null, true);
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
      question: "Why is branding important for my business?",
      answer:
        "Branding helps shape your image in the market. Any brand that aims to build strong recognition, trust, and communication with its consumer base should invest in professional branding services. These services are backed up by market research and a deep understanding of the target audience.",
    },
    {
      question: "How long does the branding process take?",
      answer:
        "The exact duration of the branding process can vary from one project to another. This is because every project is different and has its own needs and challenges. However, roughly, you can take around four weeks for a branding project.",
    },
    {
      question: "How involved will I be in the branding process?",
      answer:
        "We believe in a collaborative approach, and hence we include you in every key discussion, feedback, and decision. This helps us ensure that the final brand identity that we deliver truly depicts your goals and vision for your brand.",
    },
  ];

  const rightFaqs = [
    {
      question: "Can you help us name our brand or products?",
      answer:
        "Definitely. Our comprehensive branding services in Jaipur cover everything, including brand name suggestions. We help you select a name that reflects your brand identity, is distinctive, memorable, scalable and most importantly, legally available.",
    },
    {
      question: "What makes your agency different?",
      answer:
        "Being the best branding agency in Jaipur, we believe that striking a balance between research-driven strategy and creativity can deliver the best results. We focus on providing customised branding solutions for your brand and are committed to delivering high-quality results. Your satisfaction with our services is of vital importance to us, and we work diligently to achieve this goal.",
    },
    {
      question: "How do we start working with you?",
      answer:
        "Simply contact us through our website form. You can also book a consultation by emailing info@dndesigns.co.in or calling 9416011100. Our team will connect with you promptly and guide you through the next steps.",
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
          key={`schema-page-${pageData._id || "branding-agency-in-jaipur"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*.....hero...... */}
      <section className={`${styles.hero}`}>
        <div className="container">
          <div className={`${styles["hero-rows"]} row`}>
            <div className={`${styles["left-hero"]} col`}>
              <h1>
                Branding Agency In Jaipur: Good Branding Speaks Before You Do
              </h1>
              <p className="para-roboto">
                Our branding agency in Jaipur ensures your brand appeals and
                connects with your target audience. Get in touch with us today
                to build a brand that is powerful and inspiring.
              </p>
              <div>
                <HomePageBtn />
              </div>
            </div>
            <div className={`${styles["hero-img"]} col`}>
              {/* <img
                src={imageUrl + "gkjeg.webp"}
                className={`${styles["hero-bg-img"]}`}
              ></img> */}

              <Image
                src={imageUrl + "gkjeg.webp"}
                className={`${styles["hero-bg-img"]} ${styles["responsive-img"]}`}
                alt="home page image"
                width={1000}
                height={1000}
                priority
              />

              {/* <img
                src={imageUrl + "hgefef.webp"}
                className={`${styles["hero-img-main"]}`}
              ></img> */}

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
      {/*.....our brands desktop view...... */}
      <section className={`${styles["our-brand"]}`}>
        <div className="container">
          <h2
            className={`${styles["our-brand-heading"]} text-center heading-corbert`}
          >
            Our <span className={`${styles["every-pr"]}`}>Brand Journals</span>
          </h2>
          <ul className={`${styles["cards"]}`}>
            <Link href="/enlite-case-study">
              <li className={`${styles["card"]} ${styles["card-1"]}`}>
                <div
                  className={`${styles["card-body"]} ${styles["card-body-enlite"]}`}
                >
                  <div className={`${styles["brand-overlay"]}`}>
                    <div className={`${styles["our-brand-content"]}`}>
                      <h3 className="heading-corbert">Rithm’s Enlite</h3>
                      <div className={`${styles["brand-buttons"]}`}>
                        <button className="para-roboto">Brand Identity</button>
                        <button className="para-roboto">
                          Packaging Design
                        </button>
                        <button className="para-roboto">
                          Communication Design
                        </button>
                      </div>
                      <p className="para-roboto">
                        For Rithm’s Enlite, a brand with sparkling mineral water
                        and prebiotic drink range, we designed a thoughtful and
                        eye-catching brand identity, including can design, logo
                        design and character design. We created the character
                        and the overall brand design around the brand name to
                        promote the refreshing and calming properties of the
                        product.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="/wlues-case-study">
              <li className={`${styles["card"]} ${styles["card-2"]}`}>
                <div className={`${styles["card-body"]}`}>
                  <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/uploads/videos/GIF_1_1.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className={`${styles["brand-overlay"]}`}>
                    <div className={`${styles["our-brand-content"]}`}>
                      <h3 className="heading-corbert">Wlue's</h3>
                      <div className={`${styles["brand-buttons"]}`}>
                        <button className="para-roboto">Brand Identity</button>
                        <button className="para-roboto">
                          Packaging Design
                        </button>
                        <button className="para-roboto">UI/UX</button>
                        <button className="para-roboto">Website</button>
                      </div>
                      <p className="para-roboto">
                        Makhana brand Wlue’s approached us to launch and promote
                        its product in the market. Their target audience was the
                        youth worldwide. We created its logo and packaging
                        design. In its packaging, we adopted a retro approach
                        with a superhero vibe, while through its logo (with a
                        star integrated in it), we established that the product
                        is meant for winners.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="/nectarpure-case-study">
              <li className={`${styles["card"]} ${styles["card-3"]}`}>
                <div
                  className={`${styles["card-body"]} ${styles["card-body-nectarpure"]}`}
                >
                  <div className={`${styles["brand-overlay"]}`}>
                    <div className={`${styles["our-brand-content"]}`}>
                      <h3 className="heading-corbert">Nectarpure</h3>
                      <div className={`${styles["brand-buttons"]}`}>
                        <button className="para-roboto">Brand Identity</button>
                        <button className="para-roboto">Label Design</button>
                        <button className="para-roboto">UI/UX</button>
                      </div>
                      <p className="para-roboto">
                        Nutraceutical brand NECTARPURE partnered with us
                        primarily to establish its FusionMax Whey Protein
                        product as a niche lifestyle protein brand in the
                        market. We shaped their brand identity and crafted their
                        label design to give the product a premium feel. In
                        addition, we also focused on creating a compelling 3D ad
                        for their product and designed their website.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="/grincare-case-study">
              <li className={`${styles["card"]} ${styles["card-4"]}`}>
                <div
                  className={`${styles["card-body"]} ${styles["card-body-grin"]}`}
                >
                  <div className={`${styles["brand-overlay"]}`}>
                    <div className={`${styles["our-brand-content"]}`}>
                      <h3 className="heading-corbert">Grin Care</h3>
                      <div className={`${styles["brand-buttons"]}`}>
                        <button className="para-roboto">Brand Identity</button>
                        <button className="para-roboto">UI/UX</button>
                        <button className="para-roboto">Website</button>
                      </div>
                      <p className="para-roboto">
                        Oral care product brand GrinCare teamed up with us to
                        create a brand presence for itself in the dental
                        healthcare market. We helped design its brand identity,
                        clarify its market positioning, and craft a visually
                        appealing, user-friendly, and conversion-driven website.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </section>
      {/* our brand mobile view */}
      <section className={`${styles["mobile-view-our-brand"]}`}>
        <div className="container">
          <div className="row">
            <h2
              className={`${styles["our-brand-heading"]} text-center heading-corbert`}
            >
              Our{" "}
              <span className={`${styles["every-pr"]}`}>Brand Journals</span>
            </h2>
            <div className={`${styles["our-brand-mobile-all-div"]} row`}>
              <Link
                href="/enlite-case-study"
                className="mobile-casestudy-wrapper-link"
              >
                <div
                  className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
                >
                  <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                    {/* <img
                    src={imageUrl + "enlite main graphic.webp"}
                    className="img-fluid"
                  /> */}
                    <Image
                      src={imageUrl + "enlite main graphic.webp"}
                      className={`${styles["responsive-img"]}`}
                      alt="home page image"
                      width={1500}
                      height={1000}
                    />
                    <div
                      className={`${styles["our-brand-mobile-div-content"]}`}
                    >
                      <h3
                        className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                      >
                        Rithm’s Enlite
                      </h3>
                      <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                        >
                          Packaging Design
                        </h4>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                        >
                          Packaging Design
                        </h4>
                      </div>
                      <div>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center para-roboto`}
                        >
                          Communication Design
                        </h4>
                      </div>
                      <p className="para-roboto">
                        For Rithm’s Enlite, a brand with sparkling mineral water
                        and prebiotic drink range, we designed a thoughtful and
                        eye-catching brand identity, including can design, logo
                        design and character design. We created the character
                        and the overall brand design around the brand name to
                        promote the refreshing and calming properties of the
                        product.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/wlues-case-study"
                className="mobile-casestudy-wrapper-link"
              >
                <div
                  className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
                >
                  <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                    <video
                      className="img-fluid"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source
                        src="https://dndesigns.co.in/uploads/videos/GIF_1_1.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div
                      className={`${styles["our-brand-mobile-div-content"]}`}
                    >
                      <h3
                        className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                      >
                        Wlue's
                      </h3>
                      <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                        >
                          Brand Identity
                        </h4>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                        >
                          Packaging Design
                        </h4>
                      </div>
                      <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                        >
                          UI/UX
                        </h4>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                        >
                          Website
                        </h4>
                      </div>
                      <p className="para-roboto">
                        Makhana brand Wlue’s approached us to launch and promote
                        its product in the market. Their target audience was the
                        youth worldwide. We created its logo and packaging
                        design. In its packaging, we adopted a retro approach
                        with a superhero vibe, while through its logo (with a
                        star integrated in it), we established that the product
                        is meant for winners.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/nectarpure-case-study"
                className="mobile-casestudy-wrapper-link"
              >
                <div
                  className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
                >
                  <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                    {/* <img
                   src={imageUrl + "nectarpure case study.webp"}
                    className="img-fluid"
                  /> */}
                    <Image
                      src={imageUrl + "nectarpure case study.webp"}
                      className={`${styles["responsive-img"]}`}
                      alt="home page image"
                      width={1500}
                      height={1000}
                    />
                    <div
                      className={`${styles["our-brand-mobile-div-content"]}`}
                    >
                      <h3
                        className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                      >
                        Nectarpure
                      </h3>
                      <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                        >
                          Brand Identity
                        </h4>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto `}
                        >
                          Label Design
                        </h4>
                      </div>
                      <div>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center para-roboto`}
                        >
                          UI/UX
                        </h4>
                      </div>
                      <p className="para-roboto">
                        Nutraceutical brand NECTARPURE partnered with us
                        primarily to establish its FusionMax Whey Protein
                        product as a niche lifestyle protein brand in the
                        market. We shaped their brand identity and crafted their
                        label design to give the product a premium feel. In
                        addition, we also focused on creating a compelling 3D ad
                        for their product and designed their website.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/grincare-case-study"
                className="mobile-casestudy-wrapper-link"
              >
                <div
                  className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
                >
                  <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                    {/* <img
                    
                     src={imageUrl + "grin care case study.webp"}
                    className="img-fluid"
                  /> */}
                    <Image
                      src={imageUrl + "grin care case study.webp"}
                      className={`${styles["responsive-img"]}`}
                      alt="home page image"
                      width={1500}
                      height={1000}
                    />
                    <div
                      className={`${styles["our-brand-mobile-div-content"]}`}
                    >
                      <h3
                        className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                      >
                        Grin Care
                      </h3>
                      <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                        >
                          Brand Identity
                        </h4>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                        >
                          UI/UX
                        </h4>
                      </div>
                      <div>
                        <h4
                          className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center para-roboto`}
                        >
                          Website
                        </h4>
                      </div>
                      <p className="para-roboto">
                        Oral care product brand GrinCare teamed up with us to
                        create a brand presence for itself in the dental
                        healthcare market. We helped design its brand identity,
                        clarify its market positioning, and craft a visually
                        appealing, user-friendly, and conversion-driven website.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                <h2>The Start of Every Brand Experience</h2>
                <p>
                  In a city like Jaipur, where everything, from Hawa Mahal’s
                  façade to the lanes of Johari Bazaar, speaks of beautiful
                  design, your brand must appear beautiful too. Customers will
                  evaluate your brand by its visual appearance first, even
                  before they explore details about you. They will pay attention
                  to your logo, colours, images and overall look. That shows
                  that visuals naturally attract people and make them curious to
                  learn more about you.
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
                <h2>How Your Message Builds Connection</h2>
                <p>
                  Once your appearance stirs your consumers' interest, they will
                  want to know more about your brand's purpose, values, story
                  and personality. They will trust you only if they feel an
                  emotional connection with your brand. And it is nothing short
                  of essential to align your visual identity with your verbal
                  identity to make your brand feel more genuine and confident.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>How We Make Your Brand Memorable</h2>
                <p>
                  As a branding agency in Jaipur, we make sure to create a brand
                  identity that connects with your target audience. We provide
                  consistent branding across your website, packaging, social
                  media, and ads, ensuring people recognise you instantly
                  wherever they see you. When your identity feels uniform and
                  dependable, your brand becomes easier for your consumers to
                  remember, trust, and confidently recommend to others.
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
