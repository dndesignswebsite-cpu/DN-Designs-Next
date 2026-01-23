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

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById(
      "packaging-design-agency-in-bangalore",
      null,
      false,
    );
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Packaging Design Agency in Bangalore",
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
      "packaging-design-agency-in-bangalore",
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
      question: "What does a packaging design agency in Bangalore do?",
      answer:
        "A product packaging design agency in Bangalore creates strong and visually appealing packaging that helps your product attract buyers both in online & offline stores. From research and conceptualisation to layout design and delivery of final print files, an agency does it all and guarantees a great performance when it comes to packaging.",
    },
    {
      question: "What sets your agency apart?",
      answer:
        "We have been in the industry for over 8 years now and have extensive experience in packaging design. We base all our designs on a combination of your vision, local market knowledge and understanding of consumer psychology. Our skilled designers craft captivating designs which help your product perform better than your competitors. Also, for us, your satisfaction is our top priority.",
    },
    {
      question: "How long does the packaging design process take?",
      answer:
        "Every project varies, but mostly takes anywhere between 3 to 4 weeks (based on the SKUs and the design scope). As one of the top packaging design agencies in Bangalore, we provide a clear schedule before work starts.",
    },
  ];

  const rightFaqs = [
    {
      question: "Can you redesign my current packaging?",
      answer:
        "Definitely, our packaging design services include redesigning your current packaging as well. Our team can modernise, overhaul or completely give your product a new packaging to improve brand recognition, shelf impact, and customer appeal.",
    },
    {
      question:
        "Why should I hire a dedicated product packaging design agency instead of a freelance designer?",
      answer:
        "Hiring a packaging design agency ensures that a full team of experts creates strategic, eye-catching designs that align with your brand vision and goals. They handle everything, from concept to production, offering reliability and experience that freelancers may lack.",
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
          key={`schema-page-${pageData._id || "packaging-design-agency-in-bangalore"}`}
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
                Packaging Design Agency In Bangalore: We Design to Impress &
                Connect
              </h1>
              <p className="para-roboto">
                We create thoughtful packaging by turning simple ideas into
                striking designs. We help brands stand out, connect with
                customers, and grow even in a fast-moving market.
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
            <Link href="/enlite-case-study" className="mobile-casestudy-wrapper-link">
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
              <Link href="/wlues-case-study" className="mobile-casestudy-wrapper-link">
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/uploads/videos/GIF_1_1.mp4"
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
              <Link href="/nectarpure-case-study" className="mobile-casestudy-wrapper-link">
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
              <Link href="/grincare-case-study" className="mobile-casestudy-wrapper-link">
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
                <h2>Importance of Packaging Design in Bangalore</h2>
                <p>
                  Over the year, Bangalore, or Bengaluru, as it is now known,
                  has become a megacity. The market has evolved, customers'
                  expectations have increased, and the competition has become
                  tougher. Branding and packaging design have therefore gained
                  more prominence. With just a few seconds to capture consumers’
                  attention, brands need product packaging designs that are both
                  visually stunning and effectively convey their brand identity
                  and values.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                <img
                  src={imageUrl + "Packaging-Design.webp"}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row flex-column-reverse flex-xl-row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                <img
                  src={imageUrl + "How-We-Help-Your-Product-Stand-Out.webp"}
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>What We Offer for Bangalore Brands</h2>
                <p>
                  As the best packaging design agency in Bangalore, we strive to
                  provide customised solutions that cater to the needs of both
                  startups and established businesses. We work across all
                  industries and create packaging designs that appeal and
                  connect alike. As a trusted product packaging design company
                  in Bangalore, we support businesses with fresh and
                  market-ready designs that promise to leave a great shelf
                  impact.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>The Reason Why Bangalore Brands Choose Us</h2>
                <p>
                  We help your product make a strong first impression. Brands
                  choose us because we understand the city’s pace, its
                  consumers, and their expectations. Our packaging is clean,
                  creative and attractive, and performs efficiently in-store and
                  online as well. We believe in a simple, collaborative approach
                  and set a precise timeline for the completion of the projects.
                  So, if you are a brand in Bangalore and need your product
                  packaging design to appeal and resonate with your target
                  customers, just get in touch with us.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                <img
                  src={imageUrl + "Ready-to-Win-Every-Heart.webp"}
                  className="img-fluid"
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
