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

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-chennai", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency in Chennai",
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
    pageData = await getPageById("branding-agency-in-chennai", null, true);
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
        "A branding company in Chennai helps businesses build and communicate their brand identity consistently on all platforms by developing a brand strategy, visual identity, and much more.",
    },
    {
      question: "How much does professional branding cost in Chennai?",
      answer:
        "Every brand has its own goals, style, and needs, so pricing varies from project to project. We adjust the cost based on your vision, scope of work, and the level of branding services you require.",
    },
    {
      question: "Do you work with both startups and established companies?",
      answer:
        "Yes, we do. As a leading branding agency in Chennai, we work with startups that want a unique identity as well as with established businesses that need a rebranding.",
    },
  ];

  const rightFaqs = [
    {
      question: "Do you also offer packaging design and brand strategy?",
      answer:
        "Absolutely. Our branding services in Chennai include everything from brand identity, packaging, to web design and communication strategy. We offer you a comprehensive package as well as individual services so that you get everything you need to market yourself effectively.",
    },
    {
      question: "Can I see examples of your branding work?",
      answer:
        "Yes, you can. As the best branding agency in Chennai, we’ve built various brands across diverse sectors. Feel free to check out our branding portfolio.",
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
          key={`schema-page-${pageData._id || "branding-agency-in-chennai"}`}
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
              <h1>Branding Agency in Chennai: Building Brands With a Pulse</h1>
              <p className="para-roboto">
                As the best branding agency in Chennai, we believe that every
                brand here has a story, but we make sure yours tells the best
                one.
              </p>
              <div>
                <HomePageBtn />
              </div>
            </div>
            <div className={`${styles["hero-img"]} col`}>
              <img
                src={imageUrl + "gkjeg.webp"}
                className={`${styles["hero-bg-img"]}`}
              ></img>
              <img
                src={imageUrl + "hgefef.webp"}
                className={`${styles["hero-img-main"]}`}
              ></img>
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
                      <button className="para-roboto">Packaging Design</button>
                      <button className="para-roboto">
                        Communication Design
                      </button>
                    </div>
                    <p className="para-roboto">
                      For Rithm’s Enlite, a brand with sparkling mineral water
                      and prebiotic drink range, we designed a thoughtful and
                      eye-catching brand identity, including can design, logo
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
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
                      <button className="para-roboto">Packaging Design</button>
                      <button className="para-roboto">UI/UX</button>
                      <button className="para-roboto">Website</button>
                    </div>
                    <p className="para-roboto">
                      Makhana brand Wlue’s approached us to launch and promote
                      its product in the market. Their target audience was the
                      youth worldwide. We created its logo and packaging design.
                      In its packaging, we adopted a retro approach with a
                      superhero vibe, while through its logo (with a star
                      integrated in it), we established that the product is
                      meant for winners.
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
                      Nutraceutical brand NECTARPURE partnered with us primarily
                      to establish its FusionMax Whey Protein product as a niche
                      lifestyle protein brand in the market. We shaped their
                      brand identity and crafted their label design to give the
                      product a premium feel. In addition, we also focused on
                      creating a compelling 3D ad for their product and designed
                      their website.
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


            <Link href="/enlite-case-study">
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <img
                    src={imageUrl + "enlite main graphic.webp"}
                    className="img-fluid"
                  />
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
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
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
                    </p>
                  </div>
                </div>
              </div>

              </Link>
              <Link href="/wlues-case-study">
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/GIF_1_1.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
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
                      youth worldwide. We created its logo and packaging design.
                      In its packaging, we adopted a retro approach with a
                      superhero vibe, while through its logo (with a star
                      integrated in it), we established that the product is
                      meant for winners.
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href="/nectarpure-case-study">
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <img
                    src={imageUrl + "grin care case study.webp"}
                    className="img-fluid"
                  />
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
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
                      Nutraceutical brand NECTARPURE partnered with us primarily
                      to establish its FusionMax Whey Protein product as a niche
                      lifestyle protein brand in the market. We shaped their
                      brand identity and crafted their label design to give the
                      product a premium feel. In addition, we also focused on
                      creating a compelling 3D ad for their product and designed
                      their website.
                    </p>
                  </div>
                </div>
              </div>

              </Link>
              <Link href="/grincare-case-study">
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <img
                    src={imageUrl + "nectarpure case study.webp"}
                    className="img-fluid"
                  />
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
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
                <h2>We Begin by Hearing You First</h2>
                <p>
                  In Chennai, each business has its own rhythm. We start by
                  listening to yours, as you tell us your goals, objectives,
                  ideas, and what you wish to create. We decode how your
                  audience thinks, what the market needs, and what makes you
                  unique. This process is the very foundation of every dream
                  branding that each business wants.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                <img src={imageUrl + "city.webp"} className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                <img src={imageUrl + "city-2.webp"} className="img-fluid" />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>We Build Your Brand With Purpose</h2>
                <p>
                  We refine your simple ideas to make your brand, aligning with
                  the competitive spirit of Chennai. Our team of experts builds
                  a customised visual identity & voice that resonates with your
                  local and global audiences. Each element of your brand
                  identity represents your business and helps you outshine the
                  competition with authenticity even in a crowded market.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>EYour Brand Leaves a Lasting First Impression</h2>
                <p>
                  Good branding helps your brand communicate better with your
                  target audience as a consistent identity and a polished
                  presence easily grasps people's attention. Branding aids you
                  in building trust more quickly, improving recall, and
                  presenting yourself confidently in a city where attention must
                  be earned every day.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                <img src={imageUrl + "city-3.webp"} className="img-fluid" />
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
