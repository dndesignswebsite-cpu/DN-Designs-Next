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
    seo = await getPageById("branding-agency-in-delhi", null, false);
  } catch (error) {
    console.log("Branding Design Agency In Delhi", error);
    return {
      title: "Branding Design Agency in Delhi",
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
    pageData = await getPageById("branding-agency-in-delhi", null, true);
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
  const title = "Branding Agency in Delhi: Where Brands Find Their Voice";
  const description =
    "As the best branding agency in Delhi, we help your business become a brand which people recognise, remember and choose.";

  // form section content
  const FormHead = "Have a Brand Idea? Let's Talk!";
  const FormPara =
    "Every great brand starts with an idea, and we'd love to hear yours! Whether you're starting with a fresh concept or looking to take your existing brand in a new direction, we're here to help you figure things out. Tell us a little about what you're envisioning, what inspires you and where you'd like to take your brand. We'd love to get to know your story, exchange ideas and explore what we can create together!";

  // faqs content
  const leftFaqs = [
    {
      question:
        "Why should I hire a professional branding agency in Delhi? ",
      answer: (
        <>
          A professional branding company in Delhi can help create a memorable and consistent brand identity that connects with consumers. A company comes with expert skills, deep market insights, great design sensibilities, and clear communication, which can really help you in your branding journey. 
        </>
      ),
    },
    {
      question:
        "What types of branding services do you offer? ",
      answer: (
        <>
          Our branding services in Delhi, customised to fit your brand values and business goals, include <Link href="/brand-strategy" className="inter-linking-link">brand strategy design</Link>, logo design, brand name suggestions, packaging design, catalogue design, digital marketing, and web design. 
        </>
      ),
    },
    {
      question: "What category of business do you specialise in? ",
      answer:
        (<>We work across a wide range of businesses, including <Link href="/food-beverage-branding" className="inter-linking-link">food & beverage</Link>, FMCG, D2C, <Link href="/wellness-branding" className="inter-linking-link">health & wellness</Link>, lifestyle, skincare, jewellery and fashion.</>),
    },
    {
      question:
        " How long does the branding process take?  ",
      answer:
        (<>The timeline varies based on the project scope. Typically, developing a brand can take 8-12 weeks from start to finish. Rebranding projects can take a similar timeline. </>),
    },
    {
      question: "Can you help with rebranding my existing business in Delhi? ",
      answer: (
        <>
          Absolutely. We <Link href="/rebranding" className="inter-linking-link">specialise in rebranding</Link>, redefining positioning, and modernising so that your brand stays relevant in today’s market.
        </>
      ),
    },
  ];

  const rightFaqs = [
    {
      question:
        "Can you help businesses launch new products under an existing brand?",
      answer:
        "Yes, we help businesses extend their existing brand into new product categories through strategic positioning, product branding and packaging design. We ensure new launches complement the parent brand while having their own distinct identity.",
    },
    {
      question: "Can you create branding for businesses targeting international markets?",
      answer:
        (<>Yes, we <Link href="/brand-identity-design-services" className="inter-linking-link">develop brand identities</Link>, packaging designs, website and communication systems for businesses looking to expand beyond India. Our approach involves understanding and strategising branding work keeping the local culture, legalities and audience expectations in mind. </>),
    },
    {
      question:
        "What makes your agency the best branding agency in Delhi? ",
      answer: (
        <>
       We are among the top branding & marketing agencies, not just in Delhi but worldwide. We blend strategy, creative design, and market insight to build your brand. Every design we create is backed by research. You can <Link href="/case-studies" className="inter-linking-link">check out our case studies</Link> to see how we approach every project and make it a branding success story. 
        </>
      ),
    },
    {
      question:
        " How can I get started with your branding services?  ",
      answer: (
        <>
          Just reach out through our contact form. Alternatively, schedule a consultation by emailing us at <a href="mailto:info@dndesigns.co.in" className="inter-linking-link">info@dndesigns.co.in</a> or calling <a href="tel:9416011100" className="inter-linking-link">9416011100</a>. Our team will get back to you as soon as possible. 
        </>
      ),
    },
  ];

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-agency-in-delhi"}`}
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
            Why Branding Matters: From Simple {" "}
            <span className="why-you-should-work-section-head-span">
              Business to Iconic Brand 
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Why-Branding-Matters-From-Simple-Business-to-Iconic-Brand.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Branding strategy and creative packaging design by DN Designs"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  Branding is about creating the right image for your business. It is an important part of your business and goes far beyond a logo, a colour palette and a tagline. Effective branding helps in creating trust and building an emotional connection with your customers while defining your brand’s purpose. This is what guides every decision you make, from the products you offer to the way you communicate. With time, it transforms an ordinary business into an iconic brand that leaves a lasting legacy in a competitive and fast moving market.
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
            Why Every Brand Needs {" "}
            <span className="why-you-should-work-section-head-span">
              Expert Branding Services
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-2 order-lg-1">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  In today's world, businesses need professional branding services to achieve success in a fiercely competitive marketplace. Expert branding helps shape identity and messaging and strengthens the positioning of the brand. Moreover, it helps attract the right audience while building recognition and loyalty among them. In Delhi's demanding market landscape, branding is a service that turns humble businesses into big names. A brand development agency in Delhi, like <Link href="/" className="inter-linking-link">DN Designs</Link>, delivers strategic brand building solutions that help you reach your business goals.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-1 order-lg-2">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/WhyEveryBrandNeedsExpertBrandingServices.webp"
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
                  Powerful Brands {" "}
                  <span className="packaging-design-across-section-head-span">
                    Start Here
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                  As the best branding agency in Delhi, our aim is to provide outstanding results by balancing creativity and strategic thinking. Regardless of whether you’re a start-up or a well-established brand, we create innovative solutions to give you an edge in your market. Our <Link href="/branding" className="inter-linking-link">brand building company</Link> helps you create a unique brand identity, powerful messaging and stunning visuals that work equally well across platforms. The result is a brand that looks distinctive, sounds consistent and connects with people who matter most for your business. 
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="image-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/PowerfulBrandsStartHere.webp"
                  className="img-fluid"
                  alt="Brand strategy and creative packaging design by DN Designs"
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
                  src="https://dndesigns.co.in/uploads/pages/BuildingBrandsForDelhisDiverseMarket.webp"
                  className="img-fluid"
                  alt="Brand identity and packaging design for Delhi's diverse market"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="packaging-design-across-section-col">
                <h2 className="packaging-design-across-section-head">
                  Building Brands For Delhi’s{" "}
                  <span className="packaging-design-across-section-head-span">
                    Diverse Market
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                  Delhi has a competitive, diverse and dynamic market where tradition and modernity exist side by side. Successful branding here depends on understanding both, along with the local culture and buying behaviour of consumers. Businesses across the city, from new D2C startups and FMCG brands to existing retail and lifestyle brands, all operate in their own market, with varying levels of competition and expectations. A brand that works must be tailored to your business, category, and goals. Our team studies your audience, defines your positioning, and crafts a brand identity that feels relevant to both traditional buyers and digital-first consumers. 
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
                    src="https://dndesigns.co.in/uploads/pages/FromTheFirstSketchTTheFinalBrandTheBrandingProcess.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Branding process from initial concept to final brand identity"
                  ></img>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 packaging-design-india-consumers-section-row">
                <div className="packaging-design-india-consumers-section-col">
                  <h2 className="packaging-design-india-consumers-section-col-head">
                    From Strategy To The Final {" "}
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                      Brand
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                   It takes more than just good ideas to make great brands. Careful research, creativity and thoughtful development are needed. That’s why we first take time to understand your business and what you want to achieve. We study your competitors and market, and based on the insights gained, we begin building your brand. This includes <Link href="/brand-positioning" className="inter-linking-link">developing your positioning strategy</Link>, visual design, messaging and creative assets. Everything supports each other and the overall objective, so your brand has a strong sense of cohesion. By the launch date, you have a brand with a clear direction and solid potential for growth and revenue.
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
                    Outgrowing Your Identity? It's 
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     Time to Evolve
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                    As your business develops, your brand needs to grow too. The identity that once reflected your vision may now no longer represent your products, positioning or future goals. A well-planned rebrand can revive your brand and give it a new lease of life. At our <Link href="/" className="inter-linking-link">branding and design studio</Link>, we make that transformation happen smoothly and effectively. From identity to messaging, we reshape every element of your brand so it feels fresh, relevant, and ready for today’s audience. Whether you are entering new markets or expanding your offering, we can help your brand match your future.
                  </p>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="packaging-design-india-consumers-section-col">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/WhenYourBrandIsReadyForANewChapter.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Rebranding and brand identity design for growing businesses"
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
              Every Touchpoint, One Consistent Brand 
            </h2>
            <p className="key-elements-effective-section-container-para">
              A customer might discover your brand on a store shelf, on a quick commerce thumbail, browse it online, or come across it through a campaign. If your brand appears different in different places, customers lose clarity and your brand equity takes a hit. So, wherever that interaction happens, the experience should feel connected. 
              </p>
              <p className="key-elements-effective-section-container-para">
              Consistent visuals, messaging, and design choices help people recognise your brand across different channels without making every interaction look identical. Our team brings these elements together to create a cohesive brand presence, from product packaging and marketing materials to websites and digital communication.
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
                  src="https://dndesigns.co.in/uploads/pages/CreatingBrandsThatGrowBeyondBoundaries.webp"
                  className="img-fluid"
                  alt="Scalable brand identity and strategic branding by DN Designs"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="how-we-approach-section-col-content">
                <h2 className="how-we-approach-section-col-head">
                 Creating Brands That Grow Beyond Boundaries
                </h2>
                <p className="how-we-approach-section-col-para">
               As your business grows, you will naturally move into new markets, products and sales channels. This means that while your start might be in Delhi, the potential of your brand could take you far. But without room to grow, it can become rigid, inconsistent, and difficult to extend. As your strategic branding partner in Delhi, we help you by building a scalable brand system, one that helps you stay strong, recognisable and consistent as you grow. Whether you are launching a new product or expanding your existing brand into new markets, having a solid creative foundation will make taking your business forward much easier.
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
