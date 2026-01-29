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
    seo = await getPageById("branding-agency-in-gurgaon", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency in Gurgaon",
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
    pageData = await getPageById("branding-agency-in-gurgaon", null, true);
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
        "Branding builds identity and makes your business recognisable. It helps you stand out from the competition and, most importantly, builds trust, making customers more likely to choose you over your competitors.",
    },
    {
      question: "How can a branding agency in Gurgaon assist small businesses?",
      answer:
        "A branding agency in Gurgaon can help create brand identity and presence - compelling brand name, logos, packaging, digital strategy, and an engaging website, to name a few. These give your brand its own identity, establish it in the market, and make it look credible.",
    },
    {
      question: "What services does your branding agency offer?",
      answer:
        "We offer a complete range of branding services - from identity design to website and communication design. To elaborate, we design brand logos, packaging, catalogue, UI/UX and website and also help you with services like SEO, social media marketing, influencer marketing, animation and photography.",
    },
  ];

  const rightFaqs = [
    {
      question: "What is your branding process?",
      answer:
        "We begin by understanding your product, market and audience. Next, we move on to creating and implementing a practical brand strategy, ensuring that it fits well with your core values and vision. In the end, we analyse results and make the required changes.",
    },
    {
      question: "How do I get started with your branding services?",
      answer:
        "Just reach out to us at info@dndesigns.co.in or give us a call at +91 941 601 1100 / +91 720 660 5872.",
    },
    {
      question: "How much do your branding services cost?",
      answer:
        "The cost of our branding services varies depending on the specific solutions you require or the package you choose.",
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
          key={`schema-page-${pageData._id || "branding-agency-in-gurgaon"}`}
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
                Branding Agency in Gurgaon - Designing Iconic Brands For You
              </h1>
              <p className="para-roboto">
                We are a creative branding agency, passionate about helping
                businesses create an impactful brand presence.
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
                <h2>Gurgaon: India’s Economic & Business Hub</h2>
                <p>
                  For businesses, nothing could be better than the thriving
                  environment of Gurgaon. With established and small businesses
                  as well as new startups, all vying for consumer attention, it
                  is also a fiercely competitive market. Customers come from a
                  varied background, are brand-conscious and social media fans.
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
                <h2>Be the Brand They Remember</h2>
                <p>
                  In a market brimming with brands, consumers often forget new
                  businesses, struggle to choose, and look for products they can
                  trust. Businesses, therefore, must find ways to rise above the
                  crowd. Strong branding addresses these challenges. It helps
                  your brand get noticed, recognised and chosen the first time,
                  while building a loyal customer base over time.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>We Bring Your Brand to Life</h2>
                <p>
                  As a creative agency, we analyse your brand to identify what
                  makes it unique. We create an identity and experience that
                  will leave a lasting impact on your audience. Whether you are
                  just starting, want to expand or rebrand, we offer the best
                  branding services to create a consistent and compelling brand
                  for you.
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
