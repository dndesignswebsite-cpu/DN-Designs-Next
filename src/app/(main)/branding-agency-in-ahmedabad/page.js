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
import Image from "next/image";

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-ahmedabad", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency in Ahmedabad",
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
    pageData = await getPageById("branding-agency-in-ahmedabad", null, true);
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
      question: "What kind of branding services does DN Designs provide?",
      answer:
        "We provide complete branding services, including brand consultation, brand strategy development, visual identity creation, packaging design, catalogue design, and the establishment of clear brand messaging, voice, story, and values. Our expertise also extends to digital branding, helping businesses build a consistent and memorable brand presence across platforms.",
    },
    {
      question:
        "Can you elaborate on your branding process from beginning to end?",
      answer:
        "Everything begins with a detailed chat with you. Once we gain an insight into your vision, we conduct market and audience research. We then create a brand strategy and put the entire plan into action (designing your visual and verbal identity, collaterals and digital branding, etc). We keep you involved and conduct testing at every step. Once your brand is launched, we provide you with post-launch support.",
    },
    {
      question:
        "How will you ensure that my brand stands out in the Ahmedabad market?",
      answer:
        "Through research and creativity. We conduct a thorough market and audience research to understand what will click with the audience. Only after this, we craft a creative brand identity that attracts customers and stands out in the cluttered market of Ahmedabad.",
    },
  ];

  const rightFaqs = [
    {
      question: "What kind of industries and businesses do you work with?",
      answer:
        "We work with different types of businesses, be it start-ups, SMBs or bigger companies. We also do not limit ourselves to certain industries and work with a diverse range, from food and beverage to retail, nutraceutical, cosmetics and many more.",
    },
    {
      question: "Can you help us with the rebranding service?",
      answer:
        "Yes, we provide rebranding services. We ensure that your brand aligns with your current values, doesn’t feel outdated visually and matches the sensibilities of your target audience.",
    },
    {
      question:
        "Do you provide a full branding package or individual services?",
      answer:
        "We provide both a complete package as well as individual branding services in Ahmedabad.",
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
          key={`schema-page-${pageData._id || "branding-agency-in-ahmedabad"}`}
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
                Branding Agency in Ahmedabad: Designing Brands That Inspire
              </h1>
              <p className="para-roboto">
                Looking for perfection in branding? You have just found it. Our
                branding services in Ahmedabad take your business to the next
                level.
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
                <h2>Importance of Branding in Ahmedabad</h2>
                <p>
                  Ahmedabad is a city where tradition, innovation, and
                  entrepreneurial spirit thrive. It houses both small growing
                  startups and multinational companies. A good location, modern
                  infrastructure and supportive government policies ensure
                  businesses reach greater heights. However, this also means
                  increased competition and a struggle to make your business
                  stand out. That’s what makes branding crucial for businesses
                  in Ahmedabad.
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
                <h2>How A Branding Agency in Ahmedabad Can Help</h2>
                <p>
                  A branding agency is a specialised firm that can help you
                  understand the market you are about to enter and give shape to
                  your vision. It establishes your visual and verbal identity
                  and helps form an emotional connection with your target
                  audience. This is important because the customers need to
                  trust you to buy from you. When you hire the services of a
                  branding company in Ahmedabad, you essentially allow your
                  business to soar high.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>How We Drive Your Brand Growth</h2>
                <p>
                  As a brand design company, we offer a full range of branding
                  services in Ahmedabad - right from brand consultation and
                  strategy development to logo, packaging, catalogue and website
                  design. In addition, we also drive the growth of your brand
                  through our digital marketing, photography and animation
                  services. So, if you are looking for the best branding agency
                  in Ahmedabad to power up your brand, your search ends right
                  here. Contact DN Designs today!
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
