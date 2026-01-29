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

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("packaging-design-agency-in-chennai", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Packaging Design Agency in Chennai",
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
    pageData = await getPageById(
      "packaging-design-agency-in-chennai",
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
        "What makes DN Designs one of the top packaging design agencies in Chennai?",
      answer:
        "At DN Designs, we believe in basing all our designs on sound research. We create packaging designs that reflect your brand identity, resonate with your target audience, are culturally appropriate and establish a unique positioning for your product in the market. Our experience and expertise ensure that you stand out in the market and earn profits.",
    },
    {
      question: "What is your packaging design process?",
      answer:
        "We begin by discussing your project. Thereafter, we carry out our research and create packaging design concepts. Once you approve a concept, we start working on the actual design. In the end, we deliver the designs files to you.",
    },
    {
      question:
        "Will your packaging design work both in physical and online stores?",
      answer:
        "For sure. As a product packaging design company in Chennai, we craft designs that appear impressive on both store shelves and e-commerce platforms. With our designs, you can enhance your engagement and conversion rate in both places.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "I have several products and their respective variants. Can you design packaging for each?",
      answer:
        "Yes, we can definitely create packaging designs for your different products and their variants. We make sure that each of your products appears attractive and different from the other, and yet stays consistent with the overall identity of your brand.",
    },
    {
      question:
        "What is the duration for the completion of a packaging design project?",
      answer:
        "Since each project comes with its own set of needs and challenges, it is difficult to give a specific timeline. In general, you can take around 3-4 weeks for the completion of a project.",
    },
    {
      question: "How many revisions can I ask for?",
      answer:
        "You can ask for as many revisions as you want. We don’t believe in numbers when it comes to revisions. We want you to be happy with the outcome.",
    },
  ];

  // form section content
  const FormHead = "Do you also assist with printing?";
  const FormPara =
    "Since we are a product packaging design company in Bangalore, our primary focus is on designing high-impact visuals and labels for your packaging. But in case you need help with printing, we can connect you with trusted printers, too.";
  const pageName = "branding";

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "packaging-design-agency-in-chennai"}`}
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
                Packaging Design Company in Chennai: Creating Designs That
                Engage & Convert
              </h1>
              <p className="para-roboto">
                Collaborate with us, a packaging design company in Chennai, to
                give your product a modern, crisp and clean appearance. Your
                customers will surely love it.
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
                <h2>Why Packaging Design is Important</h2>
                <p>
                  Do you want your product to sell like hot cakes? What you need
                  to do then is focus on creating a packaging design that
                  attracts and engages. Why? Because in any market, consumers
                  see multiple options of the product they want to buy. Their
                  final choice invariably depends on how the product appears and
                  captivates attention. Consumers ultimately purchase the
                  product that they feel is most convincing. Packaging design,
                  therefore, directly influences the success of any product.
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
                <h2>Our Packaging Design Services in Chennai</h2>
                <p>
                  As a branding and product packaging design company in Chennai,
                  DN Designs offers complete packaging design services. What
                  does that include? Well, that includes research (market,
                  audience and competitor research) to ascertain what will work
                  in the market, creating design concepts and finalising the
                  packaging design. We meticulously select each design element
                  and combine them with important information to create a
                  packaging that is not just beautiful, but also legally
                  compliant.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Why Brands Choose Us</h2>
                <p>
                  When brands search for a product packaging design agency in
                  Chennai, what they essentially want is a company that makes
                  their product click in the market. This is what we offer our
                  customers. With solid experience behind us, we know what
                  succeeds in the market. Our team of strategy and creative
                  experts researches and designs a product packaging that
                  doesn’t just attract, but also converts. What’s more, our
                  client’s satisfaction means the world to us, so we make every
                  effort to make them happy.
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
