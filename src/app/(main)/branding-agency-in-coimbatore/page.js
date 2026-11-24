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
    seo = await getPageById("branding-agency-in-coimbatore", null, false);
  } catch (error) {
    console.log("Branding Design Agency In Coimbatore", error);
    return {
      title: "Branding Design Agency in Coimbatore",
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
    pageData = await getPageById("branding-agency-in-coimbatore", null, true);
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
  const title = "Branding Agency in Coimbatore: Building Brands Worth Remembering";
  const description =
    "Great brands don't just arrive; they get built. Experts at our branding agency in Coimbatore build a distinct identity for your brand that helps it stand out and grow.";

  // form section content
  const FormHead = "Got a Brand Idea Brewing in Kovai? Let’s Talk! ";
  const FormPara =
    (<>Coimbatore has always built things that last, and your brand deserves the same care. We bring research, strategy and creative thinking together to shape brands that stand out in Coimbatore and beyond. From defining your positioning to creating an identity that speaks to the right customers, we turn business ambitions into brands people remember. Whether you are launching something new or giving an established name a fresh direction, share your project details and let’s start the conversation.</>);

  // faqs content
  const leftFaqs = [
    {
      question:
        "What does a branding agency in Coimbatore do?",
      answer: (
        <>
          A branding agency in Coimbatore helps businesses build and strengthen their brands through strategy, positioning, logo design, visual identity, packaging and brand guidelines. The aim is to create a distinctive, consistent brand that connects with customers and stands out in the market. 
        </>
      ),
    },
    {
      question:
        "Which industries does DN Designs work with in Coimbatore?",
      answer: (
        <>
           We work with textile, fashion, <Link href="/fmcg-branding" className="inter-linking-link">FMCG</Link>, food and beverage, coconut products, skincare, electronics and other product brands. Each brand gets a strategy shaped around its own market. 
        </>
      ),
    },
    {
      question: "Do you offer complete branding services under one roof?",
      answer:
        (<>Yes. As a 360-degree branding company in Coimbatore, we offer end-to-end services covering brand strategy, positioning, naming, logo design, packaging, website development, digital presence and go-to-market (GTM) strategy. This gives you a single partner for all your branding needs, without having to coordinate with multiple vendors.</>),
    },
    {
      question:
        "How long does a branding project take?",
      answer:
        (<>A typical branding project may take around 8–12 weeks. We establish a realistic timeline after understanding your requirements, project complexity and scope. </>),
    },
    {
      question: "How much does branding cost in Coimbatore?",
      answer: (
        <>
           Cost depends on the services, number of products and project size. Share your requirements, and we’ll send a tailored quote.
        </>
      ),
    },
  ];

  const rightFaqs = [
    {
      question:
        "Do you design packaging for FMCG and food brands?",
      answer:
        "Yes. We create packaging for FMCG and food brands across retail, e-commerce and quick commerce, with distinctive designs, clear product messaging and strong shelf appeal that help products stand out and attract buyers. ",
    },
    {
      question: "Can you help us launch a new product?",
      answer:
        (<> Yes. Our go-to-market services align positioning, packaging, pricing and channels, so your brand launches with a clear plan.</>),
    },
    {
      question:
        "Should I refresh my brand or do a full rebrand?",
      answer: (
        <>
      That depends. If your core identity is still relevant, a refresh may be enough. If your positioning, audience or business direction has changed significantly, a complete rebrand may be the better choice. We assess your existing brand to understand what works, what needs improvement and the best way forward. 
        </>
      ),
    },
    {
      question:
        "Do you work with brands outside Coimbatore?",
      answer: (
        <>
          Absolutely. We work with businesses across India and international markets through video consultations, shared project boards and regular feedback rounds, ensuring smooth collaboration from the initial brief to final delivery. 
        </>
      ),
    },
    {
      question:
        " How do I get started with DN Designs?",
      answer:
        " Contact us with a short brief about your business and goals. We’ll set up a call to discuss the next steps.",
    },
  ];

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-agency-in-coimbatore"}`}
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
            Branding for Coimbatore’s  {" "}
            <span className="why-you-should-work-section-head-span">
              Ambitious Businesses
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/BrandingforCoimbatoresAmbitiousBusinesses.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Branding strategy and creative packaging design for Coimbatore businesses"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                Coimbatore has always been a city that builds things, from textiles and pumps to precision engineering. Today, a fresh wave of Kovai entrepreneurs is launching brands in <Link href="/food-beverage-branding" className="inter-linking-link">food and beverage</Link>, health and wellness, skincare, jewellery and the D2C space. With so many new names on the shelf, being good is no longer enough. Customers choose what they recognise, and they skip what feels forgettable or inconsistent. Great products can go unnoticed without a clear identity behind them. 
                </p>
                 <p className="why-you-should-work-section-para">
                 As a branding agency in Coimbatore, we help your product get noticed, remembered and chosen, whether it sits on a supermarket shelf or an online marketplace.
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
          Complete Branding Services for  {" "}
            <span className="why-you-should-work-section-head-span">
              Coimbatore Brands
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-2 order-lg-1">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                 Your brand is much more than what customers see. It's what they recognise, remember and connect with. Our branding services in Coimbatore cover every aspect of brand building, combining strategic thinking, creative design and seamless execution: 
                </p>
                <ul className="why-you-should-work-section-para-list">
                  <li className="why-you-should-work-section-para"><Link className="inter-linking-link" href="/brand-positioning">Brand strategy and positioning</Link></li>
                  <li className="why-you-should-work-section-para">Naming and messaging</li>
                  <li className="why-you-should-work-section-para">Logo and visual identity</li>
                  <li className="why-you-should-work-section-para"><Link href="/packaging-design" className="inter-linking-link">Packaging design</Link></li>
                  <li className="why-you-should-work-section-para">Brand guidelines</li>
                  <li className="why-you-should-work-section-para">Website and digital presence</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-1 order-lg-2">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/CompleteBrandingServicesforCoimbatoreBrands.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Complete branding services and brand identity design for Coimbatore brands"
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
                 Where Your Idea Becomes   {" "}
                  <span className="packaging-design-across-section-head-span">
                   an Identity
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                 Every successful brand begins with a clear answer to one question: what do you want this business to become? As your branding partner, we take that answer and shape it into something people can recognise and remember. We start by understanding your goals, customers and competition. From there, we build a brand strategy that sets your positioning, tells your story through sharp messaging and gives it a distinctive look.  
                </p>
                 <p className="packaging-design-across-section-para">
               Whether your ambition is to reach new markets or strengthen your presence in South India, we build a cohesive brand from scratch that grows with your business and stays true to your vision. 
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="image-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/WhereYourIdeaBecomesanIdentity.webp"
                  className="img-fluid"
                  alt="Strategic brand development and creative branding process"
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
                  src="https://dndesigns.co.in/uploads/pages/MarketSmartBrandingforEveryKindofBusiness.webp"
                  className="img-fluid"
                  alt="Consistent brand identity and visual design across customer touchpoints"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="packaging-design-across-section-col">
                <h2 className="packaging-design-across-section-head">
                  Market-Smart Branding for Every   {" "}
                  <span className="packaging-design-across-section-head-span">
                 Kind of  Business
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                  No two businesses win in the same way. A textile exporter, snack <Link href="/startup-branding-agency" className="inter-linking-link">startup</Link> and jewellery house each face different customers and competitors. As a branding company in Coimbatore, we understand the local and wider South Indian market, and create relevant identities for:
                </p>

                <ul className="packaging-design-across-section-para-list">
                  <li className="packaging-design-across-section-para"><b>Textile, fashion and ethnic apparel: </b> blending traditional influences with contemporary design.</li>
                  <li className="packaging-design-across-section-para"><b>FMCG and CPG:</b> creating distinctive identities for snacks, filter coffee and <Link href="/skincare-branding" className="inter-linking-link">skincare brands</Link>.</li>
                  <li className="packaging-design-across-section-para"><b>Electronics and automotive accessories:</b> building recognition and differentiation in competitive categories.</li>
                  <li className="packaging-design-across-section-para"><b>Medical devices:</b> making complex products easier to understand through clear, credible branding.</li>
                </ul>
                <p className="packaging-design-across-section-para">
                  Whatever your category, we help you build a clear, credible identity that earns trust in competitive markets.
                </p>
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
              Coconut Branding for the Heart of Kovai’s Coconut Belt
            </h2>
            <p className="key-elements-effective-section-container-para">
             With Pollachi’s coconut farms nearby, Coimbatore has a strong ecosystem of coconut growers, processors, and product manufacturers. But when similar products compete for attention, a good product alone may not be enough to win consumer preference. As a branding agency in Coimbatore, we help coconut product businesses build distinctive brands that communicate value and earn consumer trust.
              </p>

              <p className="key-elements-effective-section-container-para">
            We begin by identifying what sets your coconut product apart, whether it's cold-pressed oil, farm-to-pack traceability or a family recipe. We translate these strengths into a compelling brand strategy, distinctive visual identity and packaging that makes an impact across retail shelves and digital platforms. Whether you're launching a new product or transitioning from bulk supply to a consumer-facing brand, we help create a recognisable identity that gives your business room to grow.
              </p>
              
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
                    src="https://dndesigns.co.in/uploads/pages/ConsistencyFromStoreShelftoSmartphone.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Consistent brand identity across retail and digital touchpoints"
                  ></img>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 packaging-design-india-consumers-section-row">
                <div className="packaging-design-india-consumers-section-col">
                  <h2 className="packaging-design-india-consumers-section-col-head">
                   Consistency From Store Shelf  {" "}
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     to Smartphone
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                   Your brand meets customers in many places: a neighbourhood kirana, a supermarket aisle, an e-commerce thumbnail, a social post or an outdoor hoarding. If each of these looks and sounds different, people struggle to trust it. Consistency turns a product into a brand that wins recognition, loyalty, and repeat purchases. 
                  </p>
                    <p className="packaging-design-india-consumers-section-col-para">
                 At <Link href="/" className="inter-linking-link">DN Designs</Link>, we help Coimbatore businesses build a distinctive and uniform brand system. From packaging to website and digital content, every brand touchpoint carries the same identity. Whether a shopper finds you in Gandhipuram or scrolls past you online, they instantly know who you are and what you stand for. 
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
                   Branding That’s Ready for 
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                    Launch Day
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                    A brand can look brilliant in a presentation and still struggle once it meets real customers. Launch success depends on understanding your audience, competitors, sales channels and timing. Our <Link href="/go-to-market-strategy" className="inter-linking-link">go-to-market (GTM) strategy services</Link> keep branding and launch aligned from day one. We look at positioning, packaging, messaging, pricing, channel mix and launch sequence together, so the right customers find your product in the right place and at the right moment. 
                  </p>
                   <p className="packaging-design-india-consumers-section-col-para">
                   Whether you are introducing a new product line, moving from regional shelves to national distribution, or entering e-commerce and quick commerce, we plan how your brand will be seen and chosen on every channel. 
                  </p>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="packaging-design-india-consumers-section-col">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/BrandingThatsReadyforLaunchDay.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Go-to-market branding strategy for a successful product launch"
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
                  src="https://dndesigns.co.in/uploads/pages/FromLocalRootsToGlobalReach.webp"
                  className="img-fluid"
                  alt="Brand identity strategy for expanding from local to global markets"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="how-we-approach-section-col-content">
                <h2 className="how-we-approach-section-col-head">
                 From Local Roots To Global Reach
                </h2>
                <p className="how-we-approach-section-col-para">
              Experts at our <Link href="/branding" className="inter-linking-link">branding studio</Link> help Coimbatore businesses connect with the audiences that matter to them, whether locally, across South India, elsewhere in India or in international markets. Our approach combines an understanding of regional preferences with thoughtful use of language, local expressions and cultural motifs to create meaningful connections. 
                </p>
                  <p className="how-we-approach-section-col-para">
              We tailor your brand identity, messaging and design to your target audience, their needs and design sensibilities. All this while factoring in relevant market regulations, packaging standards and labelling requirements that help your brand make a smooth transition into new markets.
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


       {/* Your Packaging Design Partner in Noida */}
                    <section className='your-packaging-design-noida-section'>
                      <div className='container'>
                        <h2 className='your-packaging-design-noida-section-heading'>Is It Time for a Brand Refresh <span className='your-packaging-design-noida-section-heading-span'>or a Full Rebrand?</span></h2>
      
                         <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5 mt-4'>
                          <div className='your-packaging-design-noida-section-img-col'>
                          <img src="https://dndesigns.co.in/uploads/pages/IsItTimeforaBrandRefreshoraFullRebrand.webp" className='your-packaging-design-noida-section-img img-fluid' alt="Brand refresh and rebranding strategy for Coimbatore businesses"></img>
                          </div>
                        </div>
      
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7 mt-4'>
                          <div  className='your-packaging-design-noida-section-ewdjhe'>
                            <div>
                            <p className='your-packaging-design-noida-section-content-col'>Businesses grow, and sometimes their brands fall behind. Your audience may have changed, your product range may have expanded, or your current look may no longer match your ambitions. When that happens, the question is whether you need a refresh or a complete rebrand. We help you answer it by identifying what should evolve and what is worth keeping, so loyal customers stay with you while new ones connect easily. </p>
                            <p className='your-packaging-design-noida-section-content-col'>At DN Designs, we help established brands regain relevance and stay competitive through <Link href="/rebranding" className="inter-linking-link">strategic rebranding</Link>, from sharpening their positioning to refreshing their visual identity and communication. For long-standing Coimbatore businesses, this can help a trusted name stay relevant and move confidently into its next chapter. </p>
                            </div>
                            <img src="https://dndesigns.co.in/uploads/pages/IsItTimeforaBrandRefreshoraFullRebrandsecond.webp" className='your-packaging-design-noida-section-content-col-img img-fluid' alt="Strategic rebranding and visual identity design by DN Designs"></img>
                          </div>
                        </div>
                      </div>
                      </div>
                    </section>

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
