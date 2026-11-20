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
    seo = await getPageById("branding-agency-in-surat", null, false);
  } catch (error) {
    console.log("Branding Design Agency In Surat", error);
    return {
      title: "Branding Design Agency in Surat",
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
    pageData = await getPageById("branding-agency-in-surat", null, true);
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
  const title = "Branding Agency in Surat: Where Bold Brands Take Shape";
  const description =
    "Surat knows how to make a mark. Is your brand ready to make one? We combine strategy, design and execution to build standout brands that grow.";

  // form section content
  const FormHead = "Let’s Take Your Surat Brand Further";
  const FormPara =
    "Your business may be rooted in Surat, but your brand can travel much further. Big ambitions need strategy, careful planning and sharp execution, and that is where we come in. Our branding services help Surat’s FMCG, food and beverage, textile, nutraceutical and D2C brands make an impact across India and beyond. We take time to understand your product, your customers and your goals before we design a single thing. Ready to get started? Share your plans, and we will map out how to turn them into a brand people notice, trust and choose.";

  // faqs content
  const leftFaqs = [
    {
      question:
        "Is DN Designs based in Surat?",
      answer: (
        <>
          No, our brand design studio is in Noida. We work with Surat businesses remotely through video calls, shared files and structured review rounds.
        </>
      ),
    },
    {
      question:
        "Do you design websites as part of the branding project?",
      answer: (
        <>
          Yes. We <Link href="/web-designing-services-in-india" className="inter-linking-link">design your website</Link> as part of the branding journey, so your logo, packaging, messaging and digital presence stay consistent.
        </>
      ),
    },
    {
      question: "Does DN Designs work with startups and new businesses?",
      answer:
        (<>Yes. We excel in <Link className="inter-linking-link" href="/startup-branding-agency">building brands from scratch</Link>, from strategy and naming to identity, packaging and website, so you launch with a brand that looks established from day one.</>),
    },
    {
      question:
        "Can you rebrand an established business?",
      answer:
        (<>Yes. We can <Link className="inter-linking-link" href="/rebranding">rebrand your business</Link>. Essentially, we keep the recognition you have built and refresh the rest, so loyal customers stay comfortable while new audiences take notice.</>),
    },
    {
      question: "Does your creative branding agency offer packaging design as part of branding?",
      answer: (
        <>
          Yes, we offer packaging design for all your products, SKUs and variants. We ensure all your products look consistent on the shelf, online and on every platform.
        </>
      ),
    },
  ];

  const rightFaqs = [
    {
      question:
        "Can you help us launch on e-commerce and quick-commerce platforms?",
      answer:
        (<>Yes. Our GTM strategy support aligns your branding with <Link href="/brand-positioning" className="inter-linking-link">positioning</Link>, pricing and channel mix, so your brand is ready for every sales channel.</>),
    },
    {
      question: "Do you work with textile, diamond and jewellery brands?",
      answer:
        (<>Yes. We build brands across categories, including jewellery, fashion, food and wellness, and study your buyers and trade channels first so the identity suits your category.</>),
    },
    {
      question:
        "Can your branding company build a full brand identity if we already have a logo?",
      answer: (
        <>
      Yes. We can <Link href="/brand-identity-design-services" className="inter-linking-link">build a complete brand identity</Link> around your logo. We can also refine it first if it no longer matches your positioning.
        </>
      ),
    },
    {
      question:
        "Will I get a timeline and cost estimate before the work begins?",
      answer: (
        <>
          Yes. Timelines and costs depend on the scope, so we share a clear estimate once we understand your requirements and before the work starts.
        </>
      ),
    },
    {
      question:
        "Should I hire a creative branding agency in Surat instead of a freelance designer?",
      answer:
        (<>If you need more than visuals, you should <Link className="inter-linking-link" href="/branding">choose a brand development agency</Link> that offers end-to-end branding solutions. An agency brings positioning, identity, messaging, packaging and go-to-market thinking together under one team.</>),
    },
  ];

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-agency-in-surat"}`}
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
            Branding for Surat’s   {" "}
            <span className="why-you-should-work-section-head-span">
              Fast-Moving Businesses
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/BrandingforSuratsFastMovingBusinesses.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Branding strategy and creative packaging design for Surat businesses"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  Surat is one of India’s most enterprising business cities. Known for textiles, diamonds and a thriving food culture, it is now seeing a wave of new <Link className="inter-linking-link" href="/d2c-branding">D2C</Link>, FMCG, wellness and skincare brands launching from its markets and manufacturing units. But more launches mean tougher competition. Your product may be excellent, yet shoppers decide in seconds, and a forgettable pack or an inconsistent message sends them elsewhere. Strong branding gives your business an identity that customers recognise, trust and return to. Looking for the best branding agency in Surat? We are here to help your products get noticed and chosen. 
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
           Complete Branding Services  {" "}
            <span className="why-you-should-work-section-head-span">
              for Surat Brands
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-2 order-lg-1">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                 A logo alone can’t carry a brand through a crowded market. That is why our branding services in Surat cover every layer, from idea to launch. We begin with <Link className="inter-linking-link" href="/brand-strategy">brand strategy</Link> and positioning, then move to naming, messaging, logo and visual identity. From there, we design packaging that works on the shelf and online, create practical brand guidelines, and build a website that tells your story well. We combine strategy, design and execution under one roof, so nothing gets lost. The outcome is a connected brand system that looks sharp, feels consistent and gives customers a reason to choose you.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-1 order-lg-2">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/CompleteBrandingServicesforSuratBrands.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Complete branding services and brand identity design for Surat brands"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our brand jurnals */}
      <section id="ourworksection">
      <OurBrandsSectionHome heading1="Our " heading2="Brand Journals" />
       </section>
       
      {/* Packaging Design Across Industries */}
      <section className="packaging-design-across-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="packaging-design-across-section-col">
                <h2 className="packaging-design-across-section-head">
                  Your Vision, Shaped Into a   {" "}
                  <span className="packaging-design-across-section-head-span">
                    Brand Identity
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                 Every strong brand begins with one question: what do you want your business to become? Whether you are a family-run unit scaling up or a new founder entering the market, we start by listening. We dive deeper into your vision, goals, customers, and competition, then turn that understanding into a brand strategy that defines your position, voice, and story. Our designers then translate it into a logo, colours, typography and imagery that feel uniquely yours. That is what a top branding agency in Surat should deliver: a brand that is easy to recognise, simple to remember and ready to leave a lasting impression on every customer.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="image-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/YourVisionShapedIntoaBrandIdentity.webp"
                  className="img-fluid"
                  alt="Brand identity and packaging design for Surat businesses"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Key Elements of Effective Packaging Design */}
      <section className="key-elements-effective-section">
        <div className="container">
          <div className="key-elements-effective-section-container">
            <h2 className="key-elements-effective-section-container-heading">
              Built for Surat’s Market, Not Borrowed From a Template
            </h2>
            <p className="key-elements-effective-section-container-para">
             Surat has its own way of doing business. Its markets are fast, price-aware and full of established names, and its buyers range from wholesale traders to young online shoppers. A borrowed template cannot handle that mix.
              </p>
               <p className="key-elements-effective-section-container-para">
             So we study your category before we design anything. We look at what your customers value, how rival brands present themselves and where the gaps are that you can own. For <Link className="inter-linking-link" href="/food-beverage-branding">food and beverage</Link>, FMCG, textile, wellness and skincare brands, this research guides every decision, from identity and messaging to packaging design and <Link href="/brand-positioning" className="inter-linking-link">market positioning</Link>, so your brand stands apart for reasons that are real and relevant.
              </p>
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
                  src="https://dndesigns.co.in/uploads/pages/ConsistentFromCountertoCart.webp"
                  className="img-fluid"
                  alt="Consistent brand identity and packaging design across retail and digital channels"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="packaging-design-across-section-col">
                <h2 className="packaging-design-across-section-head">
                  Consistent From {" "}
                  <span className="packaging-design-across-section-head-span">
                    Counter to Cart
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                  Your brand lives in many places at once: a kirana shelf, a supermarket aisle, an online thumbnail, a social post, a trade catalogue or a shopfront in the market. If each one looks and sounds different, customers struggle to trust it. Consistency turns scattered touchpoints into a single, recognisable presence. At our <Link className="inter-linking-link" href="/branding">branding company</Link>, we build brand systems that hold together everywhere, from packaging to website and digital content. Whether a shopper meets you in a Surat store or on a phone screen in another state, they meet the same identity and understand exactly what your brand stands for.
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
                    src="https://dndesigns.co.in/uploads/pages/LaunchReadyBrandingBackedbyGoToMarketThinking.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Branding process from concept to go-to-market strategy"
                  ></img>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 packaging-design-india-consumers-section-row">
                <div className="packaging-design-india-consumers-section-col">
                  <h2 className="packaging-design-india-consumers-section-col-head">
                    Launch-Ready Branding, Backed by   {" "}
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     Go-To-Market Thinking
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                  A brand can look brilliant in a presentation and still struggle once it reaches real customers. That is why we link branding with <Link href="/go-to-market-strategy" className="inter-linking-link">go-to-market planning</Link> from day one. Our GTM strategy considers your audience, competitors, sales channels and launch needs before the design is finalised. We work through positioning, packaging, messaging, pricing, channel mix and launch sequencing, so your product reaches the right buyers at the right time through the right channel. If you are bringing a new range to market or moving into e-commerce and quick commerce, we shape how your brand is seen on each platform that matters.
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
                   Surat Ambitions, Backed by a 
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     Dedicated Branding Partner
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                    Surat businesses are known for thinking big, and many are ready to take their brands beyond Gujarat to the rest of India and the world. We work with brands at every stage, from new launches to established names planning their next move. Though our <Link className="inter-linking-link" href="/branding-agency-in-noida">branding studio is in Noida</Link>, distance has never slowed our work with clients across the country. We co-ordinate over video calls, share progress openly and keep timelines tight. You get the focus of a dedicated team and a partner that understands where your ambition is headed.
                  </p>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="packaging-design-india-consumers-section-col">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/SuratAmbitionsBackedbyaDedicatedBrandingPartner.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Rebranding and brand identity design for growing businesses"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>



      {/* How We Approach Packaging Design */}
      <section className="how-we-approach-section">
        <div className="container">
          <div className="row how-we-approach-section-row g-0">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="how-we-approach-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/IsItTimetoRefreshorRebuildYourBrand.webp"
                  className="img-fluid"
                  alt="Scalable brand identity and strategic branding by DN Designs"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="how-we-approach-section-col-content">
                <h2 className="how-we-approach-section-col-head">
                 Is It Time to Refresh or Rebuild Your Brand?
                </h2>
                <p className="how-we-approach-section-col-para">
             Many Surat businesses have run successfully for decades, but a legacy look can start to feel dated next to newer competitors. You may have added products or outgrown the story your brand tells. Either of these is a good reason to look again. The real question is whether you need a refresh or a full rebrand. We help you decide what to change and what to keep, so loyal customers stay comfortable while new ones feel drawn in. At <Link href="/" className="inter-linking-link">DN Designs</Link>, we sharpen positioning, update visuals and refine communication to give an established brand a confident new chapter.
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
