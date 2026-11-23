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
import CityBrandingPagesSwipper from "@/Components/CityBrandingPagesSwipper/CityBrandingPagesSwipper";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-kochi", null, false);
  } catch (error) {
    console.log("Branding Design Agency In Kochi", error);
    return {
      title: "Branding Design Agency in Kochi",
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
    pageData = await getPageById("branding-agency-in-kochi", null, true);
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
  const title = "Branding Agency in Kochi: Where Brands Find Their Direction ";
  const description =
    "Every great port begins with a clear course. The experts at our branding agency in Kochi chart that course for your brand and steer it toward real results.";

  // form section content
  const FormHead = "Bring Your Brand Ashore, Then Take It Worldwide";
  const FormPara =
    "Kochi has been a gateway to the world for centuries, and your brand can follow that same route. Start by making it unmistakable at home, on Kerala’s shelves, screens and storefronts. Then carry it across India and overseas. That journey needs the right strategy, planning and execution. If you are searching for a top branding agency in Kochi, we are ready to help. Our branding services give your FMCG, food and beverage, coconut or wellness brand a clear brand identity, sharp positioning and room to grow. Reach out today, share your vision and let us build a brand ready to sail far beyond the backwaters.";

  // faqs content
  const leftFaqs = [
    {
      question:
        " What does a branding agency in Kochi do?",
      answer: (
        <>
          A branding agency builds your brand's strategy, positioning, identity and messaging so customers recognise and trust you. At DN Designs, we also handle packaging, website and launch support under one roof.
        </>
      ),
    },
    {
      question:
        "How do I choose the best branding agency in Kochi?",
      answer: (
        <>
          Look for an agency that leads with strategy and shows relevant work in your category, such as FMCG, food and beverage or nutraceutical. A team that treats your brand as a long-term partnership is the best sign.
        </>
      ),
    },
    {
      question: "What branding services do you offer for Kochi businesses?",
      answer:
        (<>Our branding services in Kochi include brand positioning, brand identity design, packaging design, rebranding and GTM strategy. We also offer website design, catalogues, photography and brand video shoots as part of our branding and marketing services.</>),
    },
    {
      question:
        "Do you work with food and beverage and FMCG brands in Kochi?",
      answer:
        (<>Yes, these are core categories for us. We build food and beverage and FMCG brands that stand out on supermarket shelves, e-commerce and quick commerce.</>),
    },
    {
      question: "Can you help with coconut product branding?",
      answer: (
        <>
          Yes. Our coconut product branding covers oils, coconut water, snacks and value-added products. We give them an identity that suits both local and export shelves.
        </>
      ),
    },
  ];

  const rightFaqs = [
    {
      question:
        "Do you work with health, wellness and Ayurvedic product brands?",
      answer:
        (<>Yes. We work with brands across Ayurvedic & herbal formulations, dietary supplements, vitamins, minerals, nutraceuticals, functional foods and wellness products. We create distinctive brand identities and packaging that communicate product value, build trust and stand out in the market.</>),
    },
    {
      question: "When should a Kochi business consider rebranding?",
      answer:
        (<>Consider it when your audience, product range or ambitions have outgrown your current look. We help you decide what to refresh and what to keep so loyal customers stay connected.</>),
    },
    {
      question:
        "Is brand positioning really necessary for a small business?",
      answer: (
        <>
      Yes, it is what makes customers pick you over similar options. Clear positioning guides your name, messaging, packaging and pricing from the start.
        </>
      ),
    },
    {
      question:
        "How long does a branding project take, and what does it cost?",
      answer: (
        <>
          Timelines and costs depend on the number of SKUs, design complexity and revision rounds. Once we understand your requirements, we share a clear estimate.
        </>
      ),
    },
    {
      question:
        "How do I get started with a branding company in Kochi?",
      answer:
        (<>Book a consultation with us, online or in person, and share your business details and vision. We will map out the next steps together.</>),
    },
  ];

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-agency-in-kochi"}`}
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
            Branding for Kochi’s   {" "}
            <span className="why-you-should-work-section-head-span">
              Ambitious Businesses 
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Branding_for_Kochi_s_Ambitious_Businesses_.webp"
                  className="why-you-should-work-section-img img-fluid"
                  alt="Branding strategy and creative packaging design for Surat businesses"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                  Kochi has always been a place where trade meets the world, and today that energy shows up in new food and beverage ventures, FMCG start-ups, coconut-based products, tea & coffee businesses, Ayurvedic labels and supplement brands. With established trade networks, a growing startup ecosystem and an expanding D2C market, competition on every shelf and screen is rising. A good product alone is no longer enough. If customers cannot recognise, remember or trust you, they will simply move on to the next option. 
                </p>

                 <p className="why-you-should-work-section-para">
                  As the best branding agency in Kochi, we help your products get noticed and chosen. We build brands that look sharp, speak clearly and stay consistent, wherever your customers find you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



       {/* Our Packaging Design Services */}
            <section className='our-packging-design-servics-section'>
              <div className='container'>
                  <div className='row our-packging-design-servics-section-head-row'>
                      <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                          <h2 className='our-packging-design-servics-section-head-row-head'>Complete Branding Services for <span className='our-packging-design-servics-section-head-row-head-span'>Kochi Businesses</span></h2>
                      </div>
                      <div className='col-12 col-sm-12 col-md-12 col-lg-5'>
                          <p className='our-packging-design-servics-section-head-row-para'>As a branding company in Kochi, we deliver complete branding services that bring strategy, creativity and execution together:</p>
                          {/* <p className='our-packging-design-servics-section-head-row-para'>Our services include: </p> */}
                      </div>
                  </div>
      
                  {/* <PackagingDesignSwipper/> */}
                <CityBrandingPagesSwipper/>
            
              </div>
            </section>



      {/* Why You Should Work With Us */}
      <section className="why-you-should-work-section">
        <div className="container">
          <h2 className="why-you-should-work-section-head">
           The Journey from Idea {" "}
            <span className="why-you-should-work-section-head-span">
              to Identity
            </span>
          </h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-2 order-lg-1">
              <div className="why-you-should-work-section-col">
                <p className="why-you-should-work-section-para">
                 Before any logo or label, there is an idea. Maybe it is a coconut-based snack, a spice blend or a new health sector service. Our role as your branding partner is to give that idea a shape people can recognise and remember. 
                </p>
                 <p className="why-you-should-work-section-para">
                 We begin by listening to your goals, audience and ambitions. Then we build a strategy that sets your brand positioning, finds the right words for your story and expresses it through a distinctive brand identity. The result is a cohesive brand that feels true to your product and stays in the minds of customers, from Fort Cochin to Kakkanad and well beyond.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4 order-1 order-lg-2">
              <div className="why-you-should-work-section-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/The_Journey_from_Idea_to_Identity.webp"
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
                  From Ayurvedic Roots to   {" "}
                  <span className="packaging-design-across-section-head-span">
                    Coffee Brews
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                Kerala's product landscape is as diverse as its heritage. From Ayurvedic formulations and coconut-based products to Wayanad coffee, Idukki spices and locally made chocolates, the region has no shortage of distinctive products and stories. The opportunity lies in translating these qualities into brands that connect with today's consumers.
                </p>
                  <p className="packaging-design-across-section-para">
                Whether you're taking a family-run coconut business into organised retail, launching an Ayurvedic range or building a coffee or chocolate brand, we bring your product's character to the forefront. Through thoughtful brand strategy, identity and packaging, we help turn what makes your business different into something customers can recognise and remember.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="image-col">
                <img
                  src="https://dndesigns.co.in/uploads/pages/From_Ayurvedic_Roots_to_Coffee_Brews.webp"
                  className="img-fluid"
                  alt="Brand identity and packaging design for Surat businesses"
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
                  src="https://dndesigns.co.in/uploads/pages/Rooted_in_Kochi__Tailored_for_Your_Market.webp"
                  className="img-fluid"
                  alt="Consistent brand identity and packaging design across retail and digital channels"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div className="packaging-design-across-section-col">
                <h2 className="packaging-design-across-section-head">
                  Rooted in Kochi. Tailored for 
                  <span className="packaging-design-across-section-head-span">
                    Your Market
                  </span>
                </h2>
                <p className="packaging-design-across-section-para">
                  No two markets behave alike, and neither do their consumers. What catches a shopper's eye in Kochi may not resonate with someone in another part of India or overseas. Buying habits, cultural sensibilities, category expectations and legal requirements all shape how a product needs to be presented. 
                </p>
                  <p className="packaging-design-across-section-para">
                 As a leading branding agency in Kochi, we bring these insights into every branding decision, from positioning and messaging to identity and packaging. Whether you're reaching customers across Kerala, expanding into new Indian markets or taking your products overseas, we create brand experiences that feel relevant, connect with the right audiences and meet market-specific requirements.
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
              One Brand, From Shelf to Screen 
            </h2>
            <p className="key-elements-effective-section-container-para">
             Your brand lives in many places at once: a supermarket shelf in Edappally, a marketplace listing, an Instagram post, a hoarding on the highway or an export catalogue. Wherever people encounter it, they should experience the same brand. That consistency builds recognition, strengthens trust and gives customers a reason to return.
              </p>
               <p className="key-elements-effective-section-container-para">
            At DN Designs, we bring your packaging, website and digital content together under one cohesive identity. From how your product appears on a retail shelf to how your business communicates online, every touchpoint works together to tell the same brand story.
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
                    src="https://dndesigns.co.in/uploads/pages/Getting_Your_Brand_Market-Ready.webp"
                    className="packaging-design-india-consumers-section-col-img img-fluid"
                    alt="Branding process from concept to go-to-market strategy"
                  ></img>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 packaging-design-india-consumers-section-row">
                <div className="packaging-design-india-consumers-section-col">
                  <h2 className="packaging-design-india-consumers-section-col-head">
                    Getting Your Brand  {" "}
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     Market-Ready
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                 A successful launch takes more than a good product and an attractive pack. It needs a clear plan for reaching the right customers and competing in the right markets. Our go-to-market (GTM) strategy is part of that journey from day one, bringing together brand positioning, packaging, messaging, pricing, channel selection and launch planning.
                  </p>
                  <p className="packaging-design-india-consumers-section-col-para">
                 We shape this strategy around where your products need to make their mark:
                  </p>
                  <ul className="packaging-design-india-consumers-section-col-para-list">
                     <li className="packaging-design-india-consumers-section-col-para"><b>On the Kerala shelf:</b> supermarkets and local retail.</li>
                      <li className="packaging-design-india-consumers-section-col-para"><b>On the screen:</b> e-commerce and quick commerce.</li>
                       <li className="packaging-design-india-consumers-section-col-para"><b>Across the sea:</b> international markets and export channels.</li>
                  </ul>
                  <p className="packaging-design-india-consumers-section-col-para">
                 This gives your brand a clearer path from launch to market and beyond.
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
                   Every Stage. Every Ambition. 
                    <span className="packaging-design-india-consumers-section-col-head-span">
                      {" "}
                     One Partner
                    </span>
                  </h2>
                  <p className="packaging-design-india-consumers-section-col-para">
                    Every brand has its own starting point and its own idea of what's next. From new businesses preparing to make their mark to established names ready for a refresh or a bigger leap, we work with brands at every stage of growth. Wherever you are in your journey, we bring the strategy and creative thinking to help you move forward.
                  </p>
                   <p className="packaging-design-india-consumers-section-col-para">
                    And distance doesn't have to slow that journey down. We collaborate with Kochi-based businesses through online consultations, shared project boards and regular feedback rounds, keeping conversations flowing, decisions clear, and projects moving. It's a straightforward, connected way to build your brand, wherever you're based.
                  </p>
                </div>
              </div>

              <div className="col-12 cl-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="packaging-design-india-consumers-section-col">
                  <img
                    src="https://dndesigns.co.in/uploads/pages/Every_Stage__Every_Ambition__One_Partner.webp"
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
                  src="https://dndesigns.co.in/uploads/pages/Rebranding_Is_It_Time_for_a_New_Chapter.webp"
                  className="img-fluid"
                  alt="Scalable brand identity and strategic branding by DN Designs"
                ></img>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="how-we-approach-section-col-content">
                <h2 className="how-we-approach-section-col-head">
                 Rebranding: Is It Time for a New Chapter? 
                </h2>
                <p className="how-we-approach-section-col-para">
            Brands age as businesses grow. Your audience may have shifted, your range may have expanded, or your look may no longer match your ambition. Rebranding or a smart refresh could be the push you need. The real question is how much should change. We help you decide what to modernise and what to keep, so loyal customers feel at home while new ones feel drawn in. 
                </p>
                 <p className="how-we-approach-section-col-para">
          Many established Kochi businesses, from family-run coconut oil and coir makers to long-standing food, rubber and health sector names, carry strong legacy value. We sharpen brand positioning, refresh visuals and update communication to give them renewed momentum.
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
