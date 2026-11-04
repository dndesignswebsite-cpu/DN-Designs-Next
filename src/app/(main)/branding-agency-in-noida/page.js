export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./branding-agency-in-noida-v1.css";
import HomePageHeroNew from "@/Components/HomePageHeroNew/HomePageHeroNew";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import BookDirectCallCTA from "@/Components/BookDirectCallCTA/BookDirectCallCTA";
import IndustriesSectionNewLayout from "@/Components/IndustriesSectionNewLayout/IndustriesSectionNewLayout";
import CTAMarqueSwipper from "@/Components/CTAMarqueSwipper/CTAMarqueSwipper";
import Link from "next/link";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-noida", null, false);
  } catch (error) {
    console.log("Branding Design Agency In Noida", error);
    return {
      title: "Branding Design Agency in Noida",
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

const Page = async () => {
  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("branding-agency-in-noida", null, true);
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

  // home page hero content
  const title = "Branding Agency in Noida : Building Brands That Grow";
  const description =
    "Forward is where your brand belongs. The experts at our branding agency in Noida ensure your brand keeps moving forward and delivers real results.";

  // form section content
  const FormHead = "Let's Put Your Brand On The Map ";
  const FormPara =
    "Your business is based in Noida, but you want your brand to make its mark on both the local and global stage. That’s brilliant! But big ambitions need the right strategy, planning and execution. And that’s what we do: strategic brand development for Noida businesses. Our professional branding services ensure your FMCG, food and beverage, nutraceutical, or D2C brand makes an impact across India and beyond. So, reach out, and let's talk about taking your brand places. ";

  // faqs content
  const leftFaqs = [
    {
      question:
        "Why should I hire a branding agency instead of just a graphic designer?  ",
      answer: (
        <>
          A graphic designer can create excellent visuals for your brand;
          however, to ensure that your brand succeeds in a competitive
          environment, you need to look at the bigger picture. You need to
          establish your brand positioning, visual identity, messaging,
          communication style, and lastly, the overall customer experience. It's
          a job that’s broader in concept and execution. A branding agency is
          best suited for this job.
        </>
      ),
    },
    {
      question:
        "Do you work with new businesses and startups, or only established businesses? ",
      answer: (
        <>
          Both. It doesn’t matter whether you’re a startup or an established
          business. At our branding and design agency in Noida, we love <Link className="inter-linking-link" href="/startup-branding-agency">building
          a new brand</Link> from the ground up and rebranding your business for its
          next stage of growth.{" "}
        </>
      ),
    },
    {
      question: "Can you help us rebrand an existing business?",
      answer:
        "Yes, absolutely! We know that as your business expands, it could lose relevance in the market if it appears outdated. There will also be new product launches, new markets to enter, and perhaps even significant organisational changes (like mergers & acquisitions) as time goes by. All these could call for rebranding, and our creative brand agency is right here to do that.",
    },
    {
      question:
        " What services does DN Designs offer as a branding company in Noida?  ",
      answer:
        (<>Our branding company in Noida offers end-to-end branding services under one roof, including brand strategy, brand positioning, brand identity design, packaging design and GTM strategy. Other branding services you can avail of at our <Link href="/" className="inter-linking-link">creative branding agency</Link> include catalogue design, website design, brand collateral design, digital marketing, photography and 3D brand video creation. Everything is built to create a consistent brand system that consumers recognise and choose.</>),
    },
    {
      question: "Can we meet in person, or is everything remote?",
      answer: (
        <>
          Yes, we can definitely meet in person. We are a branding and design
          agency based out of Noida, and if you’re also based here, we’d love to
          meet you in person to discuss the project and your brand vision.
        </>
      ),
    },
  ];

  const rightFaqs = [
    {
      question:
        "What are the benefits of working with a local branding agency in Noida?",
      answer:
        "Working with a local branding company in Noida comes with a big bag of benefits. Being closer means you can walk into our office for face-to-face strategy sessions, check out the work progress in person and even collaborate easily for a brand video shoot or other work whenever needed. Being in the same location means no clash with regard to time. In short, work gets completed smoothly and swiftly.",
    },
    {
      question: "Do you only work with businesses in Noida? ",
      answer:
        "Not at all. We work with businesses all over the country and world. Our approach is centred on your products, market, audience and your brand vision, not your location.",
    },
    {
      question:
        "How long does a branding project take, and how much does it cost?",
      answer: (
        <>
          For both, the answer is: it depends on your project, the number of
          SKUs involved, the design complexities and the number of revisions
          required. We give a timeline and costing estimate once we discuss the
          project and understand the requirements.
        </>
      ),
    },
    {
      question:
        " What if I already have a logo but need a full brand identity? ",
      answer: (
        <>
          In this scenario, we can <Link href="/brand-identity-design-services" className="inter-linking-link">build your entire brand identity</Link> (colours,
          typography, etc.) around your logo. Alternatively, we can refine your
          logo so that it aligns with your brand vision and market positioning,
          and then build a complete brand identity system around it. In both
          cases, the ultimate goal is to make your brand feel impactful and
          consistent across platforms, without necessarily having to start from
          scratch.{" "}
        </>
      ),
    },
    {
      question: "How do I get started with DN Designs? ",
      answer: (
        <>
          Begin by booking a consultation with us, either in our office or
          online. <Link href="/contact-us" className="inter-linking-link">Talk to our branding experts</Link> and share details about your
          business. Tell us all about your vision and ambitions, and we can take
          it from there. Let’s get started on our exciting branding journey.
        </>
      ),
    },
  ];

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-agency-in-noida"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*.....hero...... */}
      <HomePageHeroNew title={title} description={description} />

      {/* work portfolio */}
      <section className="portfolio">
        <div className="container">
          <h2 className="text-center">
            Our<span className="every-pr"> Work Portfolio</span>
          </h2>

          <div className="row port-row">
            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                <video
                  src="https://dndesigns.co.in/uploads/videos/enli.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Enlite</h3>
                    </div>
                  </div>

                  <p>
                    Sparkling Mineral Water & Prebiotic Drinks Brand. We gave it
                    a vibrant yet calming identity: a logo, a character and a
                    can that fizzes with personality and freshness.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                <video
                  src="https://dndesigns.co.in/uploads/videos/doodhsodavideoforindustrypageswjendewjdb.mp4"
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="img-fluid"
                ></video>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Doodh Soda</h3>
                    </div>
                  </div>

                  <p>
                    A category first: India’s first milk-based soda brand. We
                    built a brand identity and label design that felt just as
                    unexpected, bold, expressive, confident and fun as the
                    product itself.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/newupdatednbrendKozu.jpg.jpeg"
                  className="img-fluid"
                  alt="Kozu caffeinated water bottle branding and packaging design"
                ></img>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Kozu</h3>
                    </div>
                  </div>

                  <p>
                    Caffeinated water brand. For this first-of-its-kind beverage
                    in India, we designed a bold and minimal brand identity and
                    packaging to help it stand out, build trust and boost
                    recall.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row port-row">
            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                <video
                  src="https://dndesigns.co.in/uploads/videos/fmcgatoneamvideo.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>1 AM</h3>
                    </div>
                  </div>

                  <p>
                    Canned Cold Coffee Brand. From logo and identity to website
                    and social media, we brewed a bold and pretty cool brand
                    that Gen Z love vibing with.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                <video
                  src="https://dndesigns.co.in/uploads/videos/3ewhbhfderbj.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Mr. Bomzy</h3>
                    </div>
                  </div>
                  <p>
                    Cocktail bomb brand. From identity and packaging to website
                    and social media strategy, we designed a brand as fun and
                    explosive as the product itself.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/nwjkebhdn.webp"
                  className="img-fluid"
                  alt="Wlue's makhana snack packaging with retro superhero branding"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Wlue's</h3>
                    </div>
                  </div>

                  <p>
                    Makhana brand. With a retro superhero-inspired identity and
                    packaging, we gave it main-character energy, making it a Gen
                    Z favourite and the snack aisle hero.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row port-row">
            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/let.jpg"
                  className="img-fluid"
                  alt="Let's Supp nutraceutical brand identity and packaging design"
                ></img>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Let’s Supp</h3>
                    </div>
                  </div>
                  <p>
                    Nutraceutical Brand. We built a cohesive identity,
                    packaging, and digital design to reflect simplicity,
                    consistency, and care - inspiring trust and making wellness
                    a daily ritual.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/egwdjjbjhewFLUKE.jpg.jpeg"
                  className="img-fluid"
                  alt="Fluke functional energy drink can and brand identity design"
                ></img>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Fluke</h3>
                    </div>
                  </div>

                  <p>
                    For this functional beverage brand, we crafted a complete
                    brand identity, including a minimal, premium logo and can
                    design that communicates clarity, focus and functional
                    energy at a glance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/rekwhrfdjbrrat_03.jpg.jpeg"
                  className="img-fluid"
                  alt="Brrat energy drink can packaging and visual identity"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Brrat</h3>
                    </div>
                  </div>

                  <p>
                    For Brrat Energy drink, our work spanned brand identity,
                    logo, can packaging and website design - each built to hit
                    as hard and be as unapologetic as the drink itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="like-what-you-see-section">
        <div className="container">
          <div className="like-what-you-see-section-container">
            <h2 className="like-what-you-see-section-heading">
              Want to Be Our Next Big Brand Success{" "}
              <span className="like-what-you-see-section-heading-span">
                {" "}
                Story? Let's Make It Happen.
              </span>
            </h2>
            <Link href="/contact-us">
              <span className="like-what-you-see-section-button">
                Get in Touch
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="fontAwesomeIcon-right-arrow"
                />{" "}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why You Should Work With Us */}
      <section className="why-you-should-work-section ">
        <div className="container why-you-should-work-section-upper">
          <h2 className="why-you-should-work-section-head">
            Branding for Noida’s{" "}
            <span className="why-you-should-work-section-head-span">
              Next-Generation Businesses
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/branding-for-noida-branding-section.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Creative packaging design solutions for brands by DN Designs in Noida"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  The Noida-Greater Noida area is increasingly seeing new
                  business launches across the nutraceutical, F&B, health &
                  wellness, FMCG, D2C, skincare and many other industries.
                  However, more business launches mean more intense market
                  competition. As a business, you need to make your product
                  stand out. You cannot afford to blend in with other products
                  in the market or confuse your customers with inconsistency.
                  Because your product might be good, but it means little if
                  your customers walk past it. As a branding agency in Noida, we
                  are here to help your products get recognised and chosen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Should Work With Us */}
      <section className="why-you-should-work-section">
        <div className="container">
          <h2 className="why-you-should-work-section-head">
            End-to-End{" "}
            <span className="why-you-should-work-section-head-span">
              Branding Services in Noida
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-2 order-lg-1">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  Wondering how we help your brand stand out and succeed in the
                  highly competitive market? It's by building every layer of
                  your brand, not just its logo. We deliver <Link href="/branding" className="inter-linking-link">end-to-end branding </Link> 
                   solutions combining strategy, creativity and execution under
                  one roof. Our branding service package includes brand strategy
                  & positioning, naming & brand messaging, logo & visual
                  identity design, packaging design, and brand guidelines. We
                  also design and develop your website & digital brand
                  experience. It's one complete branding journey that we take
                  with you to build a brand that performs and gets chosen.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-1 order-lg-2">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/End-to-End-Branding-Services-in-Noida.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Creative packaging design solutions for brands by DN Designs in Noida"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our brand jurnals */}
      <OurBrandsSectionHome heading1="Our " heading2="Brand Journals" />

      {/* Packaging Design Across Industries */}
      <section className="packaging-design-across-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="packaging-design-across-section-col">
                <h2 className="packaging-design-across-section-head">
                  From Business Vision to{" "}
                  <span className="packaging-design-across-section-head-span">
                    Brand Identity
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                  A strong brand starts with having a clear idea of what you
                  want to achieve with your business. And as your branding
                  partner, it is our job to turn those ideas into a brand people
                  can recognise and remember. By understanding your goals, we
                  shape a <Link href="/brand-strategy" className="inter-linking-link">strategy</Link> that defines your market positioning,
                  captures your brand story through meaningful messaging and
                  brings it all together with a distinctive visual identity. The
                  result is a cohesive brand that reflects your vision and
                  creates a lasting impression on your customers.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="image-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/From-Business-Vision-to-Brand-Identity.webp"
                  className="img-fluid"
                  alt="Packaging design projects and creative product branding by DN Designs"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Design Across Industries */}
      <section className="packaging-design-across-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
              <div className="image-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/a-brand-built-cart-image.webp"
                  className="img-fluid"
                  alt="Packaging design projects and creative product branding by DN Designs"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="packaging-design-across-section-col">
                <h2 className="packaging-design-across-section-head">
                  A Brand Built Around Your Market,{" "}
                  <span className="packaging-design-across-section-head-span">
                    Not a Template
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                  No two businesses compete in exactly the same way. Every
                  industry has different customer expectations, category norms
                  and competitive pressures, making it hard to apply a
                  "one-size-fits-all" strategy.{" "}
                </p>
                <p className="packaging-design-across-section-para">
                  As a branding development agency in Noida, we have better
                  insights into the local market and competition. This enables
                  us to discover what your customers care about, how your
                  competitors are positioning their brands and how you can
                  create brand differentiation. For FMCG, food and beverage,
                  nutraceutical and wellness brands, these insights help in
                  shaping key branding decisions, from visual identity and
                  messaging to packaging design and <Link className="inter-linking-link" href="/brand-positioning">market positioning.</Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Like what you see? Let’s design packaging that gets your product picked. */}

      <section className="like-what-you-see-section">
        <div className="container">
          <div className="like-what-you-see-section-container">
            <h2 className="like-what-you-see-section-heading">
              Let's Talk About Building{" "}
              <span className="like-what-you-see-section-heading-span">
                {" "}
                a Brand That Stands Out.
              </span>
            </h2>
            <Link href="/contact-us">
              <span className="like-what-you-see-section-button">
                Contact Us
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="fontAwesomeIcon-right-arrow"
                />{" "}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Packaging Design for Indian & International Consumers */}
      <div className="packaging-design-india-consumers-section-parent">
        <section className="packaging-design-india-consumers-section">
          <div className="container-fl">
            <div className="row g-0">
              <div className="col-12 cl-sm-12 col-md-12 col-lg-6">
                <div className="packaging-design-india-consumers-section-col">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/One-Brand-Every-Shelf-and-Screen.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Indian product packaging design and brand identity portfolio"
                  ></img>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 packaging-design-india-consumers-section-row">
                <div className="packaging-design-india-consumers-section-col">
                  <h2 className="packaging-design-india-consumers-section-col-head">
                    One Brand. Every{" "}
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                      Shelf and Screen.
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                    Your brand shows up on a retail shelf, e-commerce thumbnail,
                    social media post, billboard and marketing material. To
                    ensure uniformity, everything from your packaging to your
                    logo, message, website and digital content should be seen as
                    part of your brand. Your brand should also be consistent
                    throughout to win recognition, trust and loyalty.
                  </p>

                  <p className="packaging-design-india-consumers-section-col-para">
                    At <Link href="/" className="inter-linking-link">DN Designs</Link>, we help you build a distinctive and
                    consistent brand. From how your products look on store
                    shelves to how your business comes across online, every
                    element reflects the same identity and communicates what
                    your brand stands for.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packaging Design for Indian & International Consumers */}
        <section className="packaging-design-india-consumers-section">
          <div className="container-fl">
            <div className="row g-0">
              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 packaging-design-india-consumers-section-row order-2 order-lg-1">
                <div className="packaging-design-india-consumers-section-col">
                  <h2 className="packaging-design-india-consumers-section-col-head">
                    {" "}
                    Making Your Brand{" "}
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                      Ready for Market
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                    A brand can look compelling in a presentation and still
                    struggle when it's time to reach customers. To ensure
                    success in the market, it is vital to understand your
                    audience, competitors, sales channels and launch
                    requirements.
                  </p>

                  <p className="packaging-design-india-consumers-section-col-para">
                    Our <Link href="/go-to-market-strategy" className="inter-linking-link">GTM strategy</Link> (go-to-market) services ensure branding and
                    market launch are aligned from the start, so your brand is
                    set up for success when it enters the market. Be it brand
                    positioning, packaging, messaging, pricing, channel mix or
                    launch sequencing, we consider everything and make sure that
                    your product reaches the right customers, at the right time,
                    through the right channel. Whether you are launching a new
                    product line or looking to enter the e-commerce and quick
                    commerce market, we think about how your brand is perceived
                    across the required sales channels.
                  </p>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="packaging-design-india-consumers-section-col">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/Miatra_Makhana_Billboard_Above_Overpass.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Indian product packaging design and brand identity portfolio"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Key Elements of Effective Packaging Design */}

      <section className="key-elements-effective-section">
        <div className="container">
          <div className="key-elements-effective-section-container">
            <h2 className="key-elements-effective-section-container-heading">
              Global Perspective. Local Partnership. Stronger Brands.
            </h2>
            <p className="key-elements-effective-section-container-para">
              From new brands ready to launch to established ones ready to take
              a new turn in their branding journey, we work with businesses at
              different phases of growth. Whatever the ambition, we take your
              business from where it is today and build it to go where you want
              to take it next, beyond Noida to the rest of India and the
              world.{" "}
            </p>

            <p className="key-elements-effective-section-container-para">
              Based in Noida, we bring the local agency advantage too: an
              understanding of the NCR market and consumer behaviour, an
              opportunity for face-to-face discussions and much faster
              turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* How We Approach Packaging Design */}
      <section className="how-we-approach-section">
        <div className="container">
          <div className="row how-we-approach-section-row g-0">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="how-we-approach-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Corporate_Cool__Enlite_Can_Contrast.webp"
                  className="img-fluid"
                  alt="DN Designs strategic approach to product packaging design"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="how-we-approach-section-col-content">
                <h2 className="how-we-approach-section-col-head">
                  Brand Refresh and Rebranding: Ready for Your Brand’s Next
                  Chapter?
                </h2>
                <p className="how-we-approach-section-col-para">
                  As your company develops, you may realise that your brand
                  needs to evolve. Whether your target audience has changed, you
                  now offer more products, or your brand no longer represents
                  where you are going, the reason could be any, but the fact is:
                  your brand needs a fresh direction to move forward.{" "}
                </p>

                <p className="how-we-approach-section-col-para">
                  The real question is whether your brand needs a refresh or a
                  complete rebrand. We can help you understand that: what
                  changes should be made and what should stay the same so that
                  your current audience doesn’t feel alienated and a new
                  audience connects easily. At DN Designs, we know what it takes
                  to give an existing brand a fresh lease of life. We have
                  expertise in improving brand positioning, updating brand
                  visuals and communications to create an effective <Link href="/rebranding" className="inter-linking-link">refresh or
                  rebrand</Link>.{" "}
                </p>

                <img
                  src="https://dndesigns.co.in/uploads/pages/packgingdesignagecyswipperladder.png"
                  className="img-fluid how-we-approach-section-ladder-image"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IndustriesSectionNewLayout */}
      <IndustriesSectionNewLayout />

      {/* book a call with founder */}
      <BookDirectCallCTA />

      {/* what brewing in dn */}
      <CTAMarqueSwipper />

      {/* faqs */}

      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} />
    </div>
  );
};

export default Page;
