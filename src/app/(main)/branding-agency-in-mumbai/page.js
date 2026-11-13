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
    seo = await getPageById("branding-agency-in-mumbai", null, false);
  } catch (error) {
    console.log("Branding Design Agency In Mumbai", error);
    return {
      title: "Branding Design Agency in Mumbai",
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
    pageData = await getPageById("branding-agency-in-mumbai", null, true);
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
  // --- SCHEMA  CLEANING LOGIC END ---

  // home page hero content
  const title = "Branding Agency in Mumbai: Your Vision, Our Design";
  const description =
    "We are a leading branding agency in Mumbai, offering solutions that establish your brand’s identity & voice in the market and propel its massive growth.";

  // form section content
  const FormHead = "Have a Vision? We'd Love to Hear It! ";
  const FormPara =
    "In a city that never stops moving, standing out takes more than just a good idea. We combine research, strategy and creative thinking to build brands that make their mark in Mumbai's competitive market. From defining your brand's positioning to creating an identity that resonates with the right audience, we help turn business ambitions into meaningful brand experiences. Have a business idea or an existing brand that needs a fresh direction? Let's talk.";

  // faqs content
  const leftFaqs = [
    {
      question:
        "Why should I hire a professional branding company in Mumbai?",
      answer: (
        <>
         Hiring a professional branding agency in Mumbai makes sure your brand leaves a lasting impression. It brings in an experienced team which, through strategic thinking, creative expertise, and deep market understanding, gives your brand an impactful and consistent brand image that connects with your audience. 
        </>
      ),
    },
    {
      question:
        "What types of branding services do you offer? ",
      answer: (
        <>
          We offer a comprehensive range of branding services in Mumbai to help establish and accelerate your brand’s growth. Our <Link href="/brand-strategy" className="inter-linking-link">services include brand strategy</Link>, brand positioning, logo and identity design, brand name suggestions, packaging design, catalogue design, digital marketing, and web design. Essentially, everything your brand needs to shine. 
        </>
      ),
    },
    {
      question: "How long does the branding process take?",
      answer:
        (<>The duration of the branding process primarily depends on the project's complexity. Generally, it takes about 8 to 14 weeks to develop a new brand. On the other hand, rebranding may take slightly longer, depending on the depth of the required changes. </>),
    },
    {
      question:
        "Can you help with rebranding my existing business in Mumbai? ",
      answer:
        (<>Absolutely. We can help you <Link href="/rebranding" className="inter-linking-link">rebrand your business</Link> by creating a fresh visual identity and positioning, and modernising your communication to keep you relevant and appealing even in a challenging market. </>),
    },
    {
      question: "Do you offer branding services outside Mumbai? ",
      answer: (
        <>
          Yes, we do. We provide branding services not only in Mumbai but around the world. We work to maintain a seamless collaboration between our team and you. This helps us attain the same level of creativity and attention to detail, regardless of where your business is located. 
        </>
      ),
    },

    {
      question: "How can I get started with your branding services? ",
      answer: (
        <>
          To contact us, you can fill out our contact form, email us at <a href="mailto:info@dndesigns.co.in" className="inter-linking-link">info@dndesigns.co.in</a>, or call <a href="tel:8683911100" className="inter-linking-link">8683911100</a>/<a href="tel:7206605872" className="inter-linking-link">7206605872</a> to schedule a consultation. Our team will get back to you shortly to discuss your needs. 
        </>
      ),
    },

    {
      question: "Do you provide branding services for FMCG and D2C businesses? ",
      answer: (
        <>
          Yes. We provide branding services that can be tailored for <Link href="/fmcg-branding" className="inter-linking-link">FMCG</Link>, food and beverage, skincare, personal care, fashion, e-commerce and <Link href="/d2c-branding" className="inter-linking-link">D2C businesses</Link>. 
        </>
      ),
    },
  ];

  const rightFaqs = [
    {
      question:
        "Do you follow legal guidelines while branding?",
      answer:
        "Yes. We adhere to all necessary guidelines while branding and packaging design.",
    },
    {
      question: "What is included in a brand identity package?",
      answer:
        (<>A brand identity package includes logo design, colour palette, typography, brand guidelines and visual elements that establish a consistent brand presence.  </>),
    },
    {
      question:
        "Do you work with startups and SMEs?",
      answer: (
        <>
       Yes, <Link href="/startup-branding-agency" className="inter-linking-link">we work with startups</Link> and SMEs. We actually love shaping a brand from the ground up. 
        </>
      ),
    },
    {
      question:
        "What is brand strategy and do I really need it?",
      answer: (
        <>
          Yes, you need a brand strategy as it lays the foundation for your success. Brand strategy defines your positioning, values, messaging and market direction. It is based on solid research of the market, audience, category and competitors. It helps build a consistent identity aligned with your business goals.
        </>
      ),
    },

    {
      question:
        "How many design concepts and revisions do I get?",
      answer: (
        <>
          Unlimited. The number doesn’t matter; your satisfaction does. We work relentlessly to refine the selected design based on your feedback and deliver what you have envisioned for your brand.
        </>
      ),
    },

    {
      question:
        "Will I own the rights to my logo and brand assets?",
      answer: (
        <>
        Yes, ownership and usage rights for the final approved designs are transferred to you once the project is completed and agreed payment terms are fulfilled. 
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
            Branding: The Reason Behind  {" "}
            <span className="why-you-should-work-section-head-span">
              Every Strong Brand
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/BrandingTheReasonBehindEveryStrongBrand.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Branding strategy and creative packaging design by DN Designs"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  In a city full of dreams, achieving yours isn't always a cakewalk. That is why your product/business needs a strong branding plan that helps you express your values and attract your target audience. The sole objective of branding is to establish a unique and consistent identity in the market that people remember, connect with & trust across physical and digital platforms. From your packaging and website to your communication, every element should tell a cohesive story. It is eventually this recognition, connection and trust that drive sales and profit for your business.
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
            Why Are Professional Branding  {" "}
            <span className="why-you-should-work-section-head-span">
              Services Essential?
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-2 order-lg-1">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  As a founder, you have a million things to take care of, and branding can easily take a backseat. Partnering with a <Link href="/branding" className="inter-linking-link">professional brand development agency</Link> helps you stay focused on your business while ensuring your brand identity, positioning and communication remain consistent and aligned with your long-term goals. In a jam-packed market like Mumbai’s, the right branding services can do wonders for your brand. It can help you establish a strong brand identity which is seen, remembered and chosen. It can help draw attention and create lasting recall among consumers while improving your credibility and ROI. Lastly, hiring the services of a professional branding company in Mumbai can help you stay ahead of the competition. 
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-1 order-lg-2">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/WhyAreProfessionalBrandingServicesEssential.webp"
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
                  Why We're the Right Fit for  {" "}
                  <span className="packaging-design-across-section-head-span">
                    Your Branding Needs
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                 As the best branding agency in Mumbai, we strike a perfect balance between strategy, innovation, and creativity to build a powerful brand that helps you achieve your business goals. Our expert team of creatives and strategists crafts a distinct brand identity that reflects your business, connects with your audience and stands out from competitors. Whether you’re a startup aspiring to build your brand from scratch or an existing business looking to take your business in a new direction, we’re here to accompany you on your brand's exciting journey. 
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="image-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/WhyWetheRightFitforYourBrandingNeeds.webp"
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
              Our Branding Services: From Strategy to Visual Identity
            </h2>
            <p className="key-elements-effective-section-container-para">
             Your brand needs to look consistent and cohesive to build recognition and trust. Working with multiple design partners for different branding elements can lead to inconsistencies in how your brand looks and feels. That’s why it's always beneficial to have all your branding needs taken care of under one roof. We provide complete branding solutions, right from research and brand strategy to brand identity and packaging design, to help build a brand that looks, feels and communicates consistently, no matter where your customers encounter it. Our brand-building expertise extends to website design, product photography, creative animation and digital marketing as well.
              </p>
              <div className='key-elements-effective-section-span-div'>
              <span className='key-elements-effective-section-span'>Brand Strategy</span>
              <span className='key-elements-effective-section-span'>Brand Positioning</span>
              <span className='key-elements-effective-section-span'>Brand Identity Design</span>
              <span className='key-elements-effective-section-span'>Packaging Design</span>
              <span className='key-elements-effective-section-span'>Website Design</span>
              <span className='key-elements-effective-section-span'>Digital Marketing</span>
              <span className='key-elements-effective-section-span'>Photography</span>
              <span className='key-elements-effective-section-span'>Animation</span>
                 <span className='key-elements-effective-section-span'>Brand Video Shoot</span>
                 <span className='key-elements-effective-section-span'>Rebranding</span>
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
                  src="https://dndesigns.co.in/uploads/pages/BrandDevelopmentAcrossIndustries.webp"
                  className="img-fluid"
                  alt="Brand identity and packaging design across industries"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="packaging-design-across-section-col">
                <h2 className="packaging-design-across-section-head">
                 Brand Development {" "}
                  <span className="packaging-design-across-section-head-span">
                     Across Industries
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                  Every industry has different branding goals. Whilst a snack brand might need eye-catching packaging to build desire, a skincare business may need to focus more on ingredients and benefits to build trust. Similarly, fashion and tech brands also have different branding requirements. As a complete <Link href="/" className="inter-linking-link">brand-building studio</Link>, we have experience in bringing brands to life across industries. We know a one-size-fits-all approach doesn’t work, so we research the industry, understand the target audience's expectations, the market dynamics, the competitive landscape, communication style and industry regulations before we sit down to design your brand. Our goal is to create a brand that belongs to its industry but doesn't get lost in the crowd. 
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
                    src="https://dndesigns.co.in/uploads/pages/BuildingandRebuildingBrandsforMumbaiCompetitiveMarket.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Brand development and rebranding for businesses in Mumbai"
                  ></img>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 packaging-design-india-consumers-section-row">
                <div className="packaging-design-india-consumers-section-col">
                  <h2 className="packaging-design-india-consumers-section-col-head">
                   Building and Rebuilding Brands for  {" "}
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     Mumbai's Competitive Market
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                   Your brand should reflect where your business is today and where you want it to be tomorrow. If you're launching a new venture, you need an identity that helps people recognise and connect with it. However, if you've been in the market for years, your existing branding may need a refresh to keep pace with changing expectations and business goals. While the goal in the former is to establish a completely new identity and business, the challenge in the latter is all about identifying what works in your favour, preserving the trust you've built with your audience and refreshing what needs to evolve. We help businesses in Mumbai build their brands from the ground up or give established identities a new direction through thoughtful <Link href="/brand-positioning" className="inter-linking-link">positioning</Link>, messaging and creative development.
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
                    Our Branding Process: From 
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     Discovery to Launch
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                    Every great brand begins with a vision. If you have one, we can help bring it to life. At our branding company in Mumbai, we start by getting to know your business, audience and competitors to understand the gaps and opportunities in the market. This helps us define how your brand should be positioned in the market and what core values and messaging it should have. Moving further, we brainstorm design concepts and direction. Based on the shortlisted option, we then design your logo, visual identity and packaging. At every stage, we go through these with you, take your feedback and refine them to ensure they are right for your brand. Once everything is ready, we help you weave your <Link href="/brand-identity-design-services" className="inter-linking-link">brand identity</Link> across every customer touchpoint. 
                  </p>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="packaging-design-india-consumers-section-col">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/OurBrandingProcessFromDiscoverytoaunch.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Branding process from discovery to launch by DN Designs"
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
                  src="https://dndesigns.co.in/uploads/pages/TakingYourBrandtotheRightMarket.webp"
                  className="img-fluid"
                  alt="Strategic brand positioning and market entry by DN Designs"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="how-we-approach-section-col-content">
                <h2 className="how-we-approach-section-col-head">
                Taking Your Brand to the Right Market
                </h2>
                <p className="how-we-approach-section-col-para">
               Creating a strong brand identity is only one part; it alone cannot guarantee success. Launching in the right market and at the right time, price and platform is important too. A <Link href="/go-to-market-strategy" className="inter-linking-link">GTM strategy</Link> helps ensure you can do this effectively, and we help you build one that is strong. At <Link href="/" className="inter-linking-link">DN Designs</Link>, we help businesses build a strong brand foundation while developing a strategic direction for their market entry. 
                We ensure your brand positioning, packaging, product messaging and channel requirements are in line with your launch goals from the start. Our goal is to create a clear, compelling brand that enters the market strongly, ready for success. 
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



       {/* Your Packaging Design Partner in Noida0 */}
      
                    <section className='your-packaging-design-noida-section'>
                      <div className='container'>
                        <h2 className='your-packaging-design-noida-section-heading'>Rooted in Mumbai, Ready <span className='your-packaging-design-noida-section-heading-span'>for the World </span></h2>
      
                         <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5 mt-4'>
                          <div className='your-packaging-design-noida-section-img-col'>
                          <img src="https://dndesigns.co.in/uploads/pages/RootedinMumba,ReadyfortheWorld.webp" className='your-packaging-design-noida-section-img img-fluid' alt="Brand development for businesses in Mumbai and global markets"></img>
                          </div>
                        </div>
      
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7 mt-4'>
                          <div  className='your-packaging-design-noida-section-ewdjhe'>
                            <div>
                            <p className='your-packaging-design-noida-section-content-col'>As your business expands, you encounter new audiences, new markets and new opportunities to expand beyond your home base, Mumbai. Or perhaps, your brand was always meant to appeal to an audience in a different geography. Whatever the case may be, we specialise in strategic brand development to help businesses in Mumbai build a strong brand presence in the local market, pan-India, and on international shores. Our team also helps you keep a consistent brand identity across physical and digital platforms as you grow your product range. </p>
                            {/* <p className='your-packaging-design-noida-section-content-col'>So, if you’re searching for a packaging design agency that can create impactful product packaging designs, pause here. We are your packaging design partner in Noida. <Link className="inter-linking-link" href="/contact-us">Reach out to us</Link>, and let’s discuss your project. </p> */}
                            </div>
                            <img src="https://dndesigns.co.in/uploads/pages/GlobaTimeCurtedWellnessDisplay.webp" className='your-packaging-design-noida-section-content-col-img img-fluid' alt="Strategic brand development and packaging design by DN Designs"></img>
                          </div>
                        </div>
                      </div>
                      </div>
                    </section>

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
