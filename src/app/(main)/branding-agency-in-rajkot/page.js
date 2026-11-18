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
    seo = await getPageById("branding-agency-in-rajkot", null, false);
  } catch (error) {
    console.log("Branding Design Agency In Rajkot", error);
    return {
      title: "Branding Design Agency in Rajkot",
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
    pageData = await getPageById("branding-agency-in-rajkot", null, true);
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
  const title = "Branding Agency in Rajkot: Shaping Brands for Lasting Impact";
  const description =
    "Turn your business vision into a compelling brand. We help Rajkot businesses build, strengthen and grow brands through strategic thinking, creative direction and consistent branding. ";

  // form section content
  const FormHead = "Your Legacy, Our Brand Strategy.";
  const FormPara =
    "Rajkot’s businesses are built on craft, hard work and trust, from engineering and machine tools to jewellery, food and fast-growing new ventures. Your brand should show that same strength. At DN Designs, we study your market, sharpen your story and design an identity that helps you win customers across Rajkot, Saurashtra and beyond. Whether you’re launching something new or taking a family business to the next level, share your plans with us.";

  // faqs content
  const leftFaqs = [
    {
      question:
        "What does a branding agency in Rajkot actually do?",
      answer: (
        <>
          We shape how your business is seen and remembered: positioning, name, messaging, logo, packaging and website. The aim is one clear identity that helps customers choose you.
        </>
      ),
    },
    {
      question:
        "Why does packaging matter so much for Rajkot’s food and FMCG brands?",
      answer: (
        <>
          On a crowded shelf, your pack gets about a second to be noticed. Strong packaging design earns that second and builds trust before the customer has tried anything. 
        </>
      ),
    },
    {
      question: "Can a family-run business launch a new consumer brand with you?",
      answer:
        (<>Yes. We often help established manufacturers and traders turn a trusted name into a consumer-facing brand, with its own identity, packaging and market plan.</>),
    },
    {
      question:
        "Do you help with brand naming and taglines?",
      answer:
        (<>Yes. We develop names and taglines that are easy to say, easy to remember and rooted in your positioning, so they work on a shelf, a screen and in conversation.</>),
    },
    {
      question: "How does branding help on e-commerce and quick commerce?",
      answer: (
        <>
          Your product appears as a small thumbnail among dozens of others. A distinctive identity makes it recognisable at that size and gives shoppers a reason to click.
        </>
      ),
    },
  ];

  const rightFaqs = [
    {
      question:
        "Will you also design our website and social media?",
      answer:
        "Yes. We design the website and digital presence so they carry the same identity as your packaging, which keeps the brand consistent on every channel.",
    },
    {
      question: "How do you make sure our brand doesn’t look like a competitor’s?",
      answer:
        (<>We study your category and your competitors before any design begins. That shows us which looks and messages are overused, so we can build something genuinely different.</>),
    },
    {
      question:
        "Can you build a brand ready for export markets?",
      answer: (
        <>
      Yes. We design identity, packaging and messaging that read clearly to international buyers while staying true to your product’s origin and craft. 
        </>
      ),
    },
    {
      question:
        "What do you need from us to get started?",
      answer: (
        <>
          A brief on your product, audience and goals, plus any existing logo or packaging. If you are still shaping the idea, a first conversation with our team is enough.
        </>
      ),
    },
    {
      question:
        "How do we know the branding is working?",
      answer:
        "We look at recall, shelf pickup, repeat purchase, enquiry quality and channel performance. Together they show whether the brand is being noticed, chosen and bought again.",
    },
  ];

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-agency-in-rajkot"}`}
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
            Branding for Rajkot's Growing  {" "}
            <span className="why-you-should-work-section-head-span">
              Business Landscape
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/BrandingforRajkotsGrowingBusinessLandscape.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Branding strategy and creative packaging design by DN Designs"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  Rajkot has a diverse business ecosystem shaped by engineering, machine tools, automotive components, foundries and jewellery manufacturing. The city also has a strong presence in textiles, food processing and emerging consumer businesses. As companies explore new markets and customer segments, building a recognisable brand becomes increasingly important. A good product may open the door, but its identity, presentation and communication influence how customers perceive it.
                </p>
                 <p className="why-you-should-work-section-para">
                 As a branding company in Rajkot, we understand the need for brands to communicate their strengths, establish credibility and create a distinct market presence. Our approach combines brand strategy, visual identity and creative communication to help businesses move beyond simply selling products and start building lasting brand recognition.
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
           Complete Branding Services in  {" "}
            <span className="why-you-should-work-section-head-span">
              Rajkot for Growing Businesses
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-2 order-lg-1">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  A successful brand is shaped by several elements working together. Its positioning, name, visual identity, messaging and customer experience all contribute to how people recognise and remember it. Our branding firm offers comprehensive branding services in Rajkot, covering brand strategy, naming, logo design, visual identity, packaging and brand guidelines. Our work also extends to website design and digital brand experiences, ensuring consistency across different platforms. Whether you're building a brand from the ground up or looking to improve an existing one, our branding solutions are developed around your business objectives, category and audience. At DN Designs, our team serves businesses across industries. We bring every brand element together to create a cohesive identity that reflects your business values and supports your growth.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-1 order-lg-2">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/CompleteBrandingServicesinRajkot forGrowingBusinesses.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Professional branding services and brand identity design by DN Designs"
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
                  A Process Designed   {" "}
                  <span className="packaging-design-across-section-head-span">
                    for Your Brand
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                 Every business has something that sets it apart. The challenge is communicating that difference in a way customers can understand and appreciate. Our branding process begins with understanding your business, audience, competitors and long-term objectives. These insights help shape your positioning, brand messaging and creative direction. From there, we develop the visual elements that bring your identity to life, including your logo, typography, colours and overall design language. 
                </p>
                 <p className="packaging-design-across-section-para">
                As a top-notch 360 branding agency in Rajkot, we believe every creative decision should have a purpose. The result is a well-considered brand identity that reflects your business rather than following a passing design trend.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="image-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/AStrategicBrandingProcessThatBringsYourVisiontolife.webp"
                  className="img-fluid"
                  alt="Brand strategy and creative packaging design by DN Designs"
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
              A Creative Branding Agency for Brands in Rajkot
            </h2>
            <p className="key-elements-effective-section-container-para">
             Rajkot's business community includes traditional manufacturers, family-run enterprises, jewellery businesses and new-age consumer brands. Each operates in a different category and speaks to a different audience. A jewellery label may need to communicate craftsmanship and exclusivity, while an engineering company may want to highlight technical expertise and reliability. As a brand design agency serving Rajkot, we consider these differences before developing a brand direction. We study your category, competition and customer expectations to identify opportunities for differentiation. This allows us to create relevant branding solutions for businesses in Rajkot, giving each brand a clear and consistent direction. 
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
                  src="https://dndesigns.co.in/uploads/pages/ConsistentBrandDesignAcrossEveryCustomerTouchpoint.webp"
                  className="img-fluid"
                  alt="Brand identity and packaging design for Delhi's diverse market"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="packaging-design-across-section-col">
                <h2 className="packaging-design-across-section-head">
                  A Unified {" "}
                  <span className="packaging-design-across-section-head-span">
                    Brand Experience
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                  Your brand appears in more places than you might realise. A product package, retail display, company catalogue, website or social media post can all shape a customer's impression. When these touchpoints look and communicate differently, it becomes harder for people to recognise your business. At DN Design studio, we ensure a consistent visual identity and communication system. From colours and typography to imagery and messaging, every detail follows a common direction. Our brand design solutions help businesses maintain this consistency, making their identity familiar wherever customers discover, explore or interact with their products.
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
                    src="https://dndesigns.co.in/uploads/pages/BrandingandMarketingThatPrepareYourBusinessforGrowth.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Branding process from initial concept to final brand identity"
                  ></img>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 packaging-design-india-consumers-section-row">
                <div className="packaging-design-india-consumers-section-col">
                  <h2 className="packaging-design-india-consumers-section-col-head">
                    Branding and Marketing That Prepare  {" "}
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     Your Business for Growth
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                   Taking a product to market involves several decisions beyond its design and packaging. Businesses need to understand their customers, evaluate competitors, establish pricing and identify the right distribution channels. As a branding and marketing agency serving Rajkot businesses, we bring these considerations together with your branding objectives. Our go-to-market services cover product positioning, audience understanding, packaging, communication and channel planning to prepare businesses for launch. Whether you're introducing a new FMCG, health and wellness, jewellery businesses or expanding an established manufacturing business or exploring e-commerce and quick commerce, we help create a clear market approach that connects your product with the right audience.
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
                   From Local Business Strength to 
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     Global Brand Presence
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                    Rajkot businesses have built their reputation across manufacturing, engineering, jewellery and several consumer categories. Today, many have opportunities to reach customers beyond their immediate markets, whether across India or internationally. Making that move requires a brand that can communicate effectively to different audiences while retaining its core identity. At DN Designs, we bring together strategic thinking, design expertise and a wider market perspective to help businesses prepare for these opportunities. As a leading brand design company working with businesses across India, we help Rajkot brands develop identities that reflect their ambitions and support their next stage of growth.
                  </p>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="packaging-design-india-consumers-section-col">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/FromLocalBusinessStrengthtoGlobalBrandPresence.webp"
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
                  src="https://dndesigns.co.in/uploads/pages/RebrandingServicesinRajkotGiveYourBrandaFreshDirection.webp"
                  className="img-fluid"
                  alt="Scalable brand identity and strategic branding by DN Designs"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="how-we-approach-section-col-content">
                <h2 className="how-we-approach-section-col-head">
                 Rebranding Services in Rajkot: Give Your Brand a Fresh Direction
                </h2>
                <p className="how-we-approach-section-col-para">
              As a business grows, its brand may need to evolve alongside it. New product categories, changing customer expectations, market expansion or an outdated visual identity can all signal the need for a refresh. Rebranding doesn't always mean starting from zero. Sometimes, refining your logo, updating your messaging or revisiting your positioning can make a meaningful difference. Our rebranding services help businesses assess their existing identity and decide what needs to change. From a complete visual transformation to a few thoughtful updates, we create a direction that feels relevant while retaining the qualities customers already associate with your business.
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
