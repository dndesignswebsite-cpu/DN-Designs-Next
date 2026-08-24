export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./fmcg-branding.css";
import IndustriesPageHero from "@/Components/IndustriesPageHero/IndustriesPageHero";
import Link from "next/link";
import AOSProvider from "@/Components/AosProvider/AosProvider";
import StrategicFrameworkFNB from "@/Components/StrategicFrameworkFNB/StrategicFrameworkFNB";
import Form from "@/Components/Form/Form";
import Faqs from "@/Components/Faqs/Faqs";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import StandAlonePackaging from "@/Components/StandAlonePackaging/StandAlonePackaging";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";

// import Script from "next/script";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import CTAMarqueSwipper from "@/Components/CTAMarqueSwipper/CTAMarqueSwipper";
import BookDirectCallCTA from "@/Components/BookDirectCallCTA/BookDirectCallCTA";




// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("fmcg-branding", null, false);
  } catch (error) {
    console.log("FMCG Branding", error);
    return {
      title: "FMCG Branding",
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
   // ---
          await connectDB();
          let pageData;
          try {
            pageData = await getPageById("fmcg-branding", null, true);
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
  
  // hero banner data
  let heroLabel = "Building FMCG Brands That Get Chosen";
  let heroHead = "FMCG Branding Agency in India";
  let heroParaDesc =
    "FMCG brands do not get a second chance at a first impression, not on a shelf, not on a quick commerce app, not in a customer's hand. Every product is competing against dozens fighting for the same three seconds of attention. We work as an FMCG branding agency in India, building identity and packaging that hold up under that pressure. The work starts with strategy, so nothing on the shelf is there by accident.";
  let pageHeroimgurl = "https://dndesigns.co.in/uploads/pages/heroFMCG-2.jpg.jpeg";

  let phaseLabel = "Our Process";
  let phaseHead = (<>From Insight to Shelf, <span className="every-pr">Step by Step</span></>);

  const phases = [
    {
      number: "01",
      label: "PHASE ONE",
      title: "Market and Category Audit",
      desc: "As an FMCG branding agency, we start by understanding where a brand actually sits (competitors, price bands, retail formats) and where the category is actually shifting, before proposing a single design direction. ",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",

      // ],
    },
    {
      number: "02",
      label: "PHASE TWO",
      title: "Positioning and Strategy",
      desc: "We develop a clear brand strategy  with unique brand positioning as the next step. It’s a clear point of view on what the brand stands for and who it is built for, so every decision after this has something to measure against.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "03",
      label: "PHASE THREE",
      title: "Brand Design Planning & Execution",
      desc: "At this stage, we begin turning strategy into visuals. Concepts and ideas for identity, packaging, and website design are brainstormed and developed. Shortlisted ideas are shared for your review, and only afterwards a final design is locked. Your brand now comes to life as something consumers can see, experience, and interact with. ",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "04",
      label: "PHASE FOUR",
      title: "The Market Entry",
      desc: "With the launch date closing in, we now plan out the GTM strategy. It helps put the brand in front of the right channels and retail formats at the right time, so the launch lands where it actually matters, not everywhere at once.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "05",
      label: "PHASE FIVE",
      title: "Track and Refine ",
      desc: "Once live, we monitor market response and adjust positioning, packaging, and design as needed. Branding does not stop working at launch, which is really the whole point of treating FMCG branding as a strategy rather than a one-time project.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },
  ];

  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Improved Visibility",
      description:
        "An FMCG brand built to be noticed on a shelf and a grid gets picked up faster, in more places, without relying on discounting to earn attention.",
      image:
        "https://dndesigns.co.in/uploads/pages/fmcghover-desktop-improve-visibility.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Enhanced Trust",
      description:
        "Consistent positioning and honest claims mean a first-time buyer does not have to think twice. That hesitation is usually what costs a sale.",
      image:
        "https://dndesigns.co.in/uploads/pages/fmcghover-desktop-trust.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Revenue Growth",
      description:
        "A strong brand has higher perceived value, fewer stalled purchase decisions and more repeat buys. Result? Increased sales and improved profitability.",
      image:
        "https://dndesigns.co.in/uploads/pages/fmcghover-desktop-revenue.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Higher Recall Value",
      description:
        "Consistency strengthens brand recognition. One identity across platforms means a brand stays recognisable no matter where a customer meets it next.",
      image:
        "https://dndesigns.co.in/uploads/pages/fmcghover-GROWTH-desktop-higher recall value.jpg",
    },
    {
      id: 5,
      point: "05",
      title: "Growth Readiness",
      description:
        "A brand system built to flex across SKUs and categories means expansion does not have to start from the identity conversation over and over again.",
      image:
        "https://dndesigns.co.in/uploads/pages/fmcghover-GROWTH-desktop-READINESS.jpg",
    },
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/fmcghover-mobile-1.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/fmcghover-mobile-2.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/fmcghover-mobile-3.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/fmcghover-mobile-4.jpg",
    },

     {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/fmcghover-mobile-5.jpg",
    },
  ];

  const leftFaqs = [
    {
      question: "What does an FMCG branding agency actually do?",
      answer:
        "It handles the strategy and design decisions behind how a product looks, sounds, and gets positioned, from the name on the pack to the words on the website. A good agency makes sure all of that adds up to one brand, not five disconnected pieces.",
    },
    {
      question:
        "How is FMCG branding different from branding in other industries?",
      answer:
        "FMCG products move faster and get judged harder. A customer decides in seconds, on a shelf or a screen, and there is rarely a salesperson around to explain the product. So branding has to do that convincing on its own.",
    },
    {
      question:
        "Does FMCG packaging design really matter that much for sales?",
      answer: 
          "Yes, more than most founders expect going in. FMCG packaging design is often the only thing standing between a product and a purchase decision. A strong one boosts conversion, while a weak one loses to competitors."
        
    },

    {
      question:
        "Do you work with legacy FMCG brands or only new ones?",
      answer:
        "Both, and the work looks quite different depending on which one we are talking to. New brands usually need help building trust from scratch. Legacy brands usually need help staying relevant without losing what already works for them.",
    },

    {
      question:
        "Can you help with GTM strategy along with design?",
      answer:
        "Yes, design and go-to-market planning are not treated as separate projects here. A pack that looks right but launches on the wrong channels, or with the wrong retail approach, still fails.",
    },
    {
      question:
        "What is the typical process like when working with DN Designs?",
      answer:
        "It starts with understanding the category and the brand's actual position in it, then moves into strategy, design and finally rollout. Nothing gets designed without a reason behind it.",
    },
  ];

  const rightFaqs = [
    {
      question: "We are relaunching an old product line; can that honestly work?",
      answer:
        "It can, and it is often more interesting work than a fresh launch. The tricky part is not the redesign itself; it is not losing the customers who already trust the product while updating everything around it.",
    },
    {
      question:
        "Do you offer photography as part of the branding work?",
      answer:
        "Yes, we also offer product photography services, if needed, as part of our FMCG branding services. This is important since so much of the buying decision now happens on a screen where a customer cannot touch or smell the product.",
    },

    {
      question: "Why is FMCG branding important in the first place?",
      answer:
        "Because competition is intense in the FMCG landscape and products do not usually have a salesperson standing next to them explaining the difference. Strong branding ensures your products make that case entirely on their own, in the two or three seconds someone actually gives them.",
    },

    {
      question:
        "How do you make sure branding stays consistent across shelves, apps and websites?",
      answer:
        "By building the identity system to work across all three from the start, rather than designing for one format and adapting it later. That is usually where consistency breaks down for other agencies. Brand guidelines further ensure your brand stays consistent across platforms.",
    },

    {
      question:
        "Is it worth investing in branding for a smaller FMCG brand right now?",
      answer: 
          "Genuinely, yes, arguably more than for a larger one. Smaller brands do not have existing recognition to fall back on, so the branding has to work harder from day one to earn that first purchase."
        
    },
  ];

  // form section content
  const FormHead = "Ready to Turn Attention Into Loyalty? Let's Talk";
  const FormPara =
    "Every FMCG brand still standing today figured out how to earn attention and loyalty early on. That is the hardest part, and it is where most of our work actually happens. If your brand is fighting for shelf space, app visibility, or just a bit more trust from someone scrolling past it, that is worth an honest conversation. No pitch deck, no sales script. Just coffee and a real look at what it would take to get your brand noticed and chosen.";

  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "fmcg-branding"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      {/* breadcrump  */}
      <Breadcrumb />

      {/* fnb page hero */}
      <IndustriesPageHero
        heroLabel={heroLabel}
        heroHead={heroHead}
        heroParaDesc={heroParaDesc}
        pageHeroimgurl={pageHeroimgurl}
      />

      {/* work portfolio */}
      <section className="portfolio">
        <div className="container">
          <h2 className="text-center">
            Our<span className="every-pr"> Work Portfolio</span>
          </h2>

          <div className="row port-row">
            {/* <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/Untitled-sunny-singh.webp" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Pureluxe</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          For the protein bar brand ‘Pureluxe’, we crafted a premium packaging design to appeal to its health-conscious and taste-driven consumers. The design captures the essence of indulgence and sophistication while balancing nutrition and flavour appeal. Each of the three variants reflects a modern and premium identity and creates a strong shelf presence.
                        </p>
                      </div>
                    </div>
                  </div> */}

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                {/* <video
                  src="https://dndesigns.co.in/uploads/videos/enli.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                /> */}
                <img src="https://dndesigns.co.in/uploads/pages/fmcgnectarpure.jpg.jpeg" className="img-fluid"></img>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Nectarpure</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Brand Identity</h4>
                    </div>
                  </div>

                  <p>
                    Whey protein brand. We crafted a clean, minimal identity and
                    label design to position it as a lifestyle product, not
                    another gym supplement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                {/* <video
                  src="https://dndesigns.co.in/uploads/videos/3ewhbhfderbj.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                /> */}
                <img src="https://dndesigns.co.in/uploads/pages/let.jpg" className="img-fluid"></img>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Let’s Supp</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Packaging</h4>
                      <h4 className="our-port-btn">Web Design</h4>
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

            {/* <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/fluke.webp" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Fluke</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          For Fluke, a functional beverage brand, we created a clean, premium can design to resonate with its young & health-conscious audience. Through our design, we clearly highlighted key elements such as logo, functional benefits & flavour cues (accent colours behind the logo). With a white background, we created space for every element to shine.
                        </p>
                      </div>
                    </div>
                  </div> */}

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/nwjkebhdn.webp"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Wlue's</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Packaging</h4>
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
            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                {/* <img src="https://dndesigns.co.in/uploads/pages/thames-5.webp" className="img-fluid" /> */}
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
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
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

            {/* <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/nwjkebhdn.webp" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Wlue's</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Packaging</h4>
                          </div>
                        </div>
      
                        <p>
                          Makhana brand Wlue’s wanted to establish itself as a premium snacking brand globally. Its target audience were Gen Zers. Accordingly, we created colourful and eye-catching packaging designs for all its variants to appeal to its young and fun-loving audience.
                        </p>
                      </div>
                    </div>
                  </div> */}

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
               <video
                  src="https://dndesigns.co.in/uploads/videos/fmcg3sistersvideo.mp4"
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
                      <h3>3 Sisters</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div>
                  </div>

                  <p>
                    Premium Non-Alcoholic Drinks Brand. We built the digital
                    home for a full lineup of their non-alcoholic beverages that
                    are anything but ordinary.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                {/* <video
                  src="https://at1am.com/wp-content/uploads/2026/03/IMG_5792_1.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                /> */}
                <img src="https://dndesigns.co.in/uploads/pages/lppackgingorgainc.gif" className="img-fluid"></img>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>iOrganic</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    Organic Food & Dairy brand. We brought a refined,
                    nature-inspired aesthetic to their festive and corporate
                    gift boxes, ensuring the unboxing experience is as special
                    as what's inside.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* understanding fmcg */}
      <section className="understanding-fmcg">
        <div className="container">
          <h2 className="understanding-fmcg-head">
            Understanding Today's{" "}
            <span className="understanding-fmcg-head-span">FMCG Landscape</span>
          </h2>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="understanding-fmcg-col-div">
                <p className="understanding-fmcg-col-para">
                  The FMCG category in India is not what it was even five years
                  ago. Retail used to be the whole game. Now a product has to
                  work across a kirana counter, a modern trade aisle, and a
                  ten-minute delivery app, often at the same time.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="understanding-fmcg-col-div">
                <p className="understanding-fmcg-col-para">
                  Consumers have more choice than they know what to do with, and
                  loyalty is harder to earn and easier to lose than ever. This
                  is exactly where the importance of branding in FMCG products
                  becomes hard to ignore; a brand that cannot hold attention
                  across all three simply gets skipped.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*The Protagonists */}
      <section className="appr-pro-anime">
        <div className="container">
          <div>
            <div className="row appr-pro-anime-row-main">
              <div className="col-12 col-md-12 col-lg-6 mt-3">
                <h2 className="appr-pro-anime-main-head">
                  A Few Things Define The
                  <span className="appr-pro-anime-main-head-span">
                    {" "}
                    Landscape Right Now
                  </span>
                </h2>
                {/* <p className="appr-pro-anime-main-para">
                  Great results are not achieved randomly. They need planning,
                  hard work, perseverance, and, when it comes to animated
                  videos, plenty of strategic vision and creativity as well.
                  That’s exactly what we do and what sets us apart.
                </p> */}
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                {/* <div className="app-pro-div app-pro-div-white">
                  <div>
                    <h3>Goal & Message</h3>
                    <p>
                      Before doing anything else, we establish our core
                      objectives - what do we want to achieve and what do we
                      want to communicate through the video.
                    </p>
                  </div>
                </div> */}
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Digital-First Discovery</h3>
                    <p>
                      Quick commerce has changed the rules. Products get
                      discovered on a grid, not a shelf, and FMCG packaging
                      design has to work as a thumbnail first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row appr-pro-anime-row-main">
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>The Rise of D2C Brands</h3>
                  <p>
                    D2C brands are eating into categories legacy players once
                    owned, forcing established names to rethink their FMCG
                    branding strategy faster than they're used to.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Changing Consumer Expectations</h3>
                  <p>
                    Consumers read labels now: ingredients, claims, and sourcing
                    get scrutinised in ways they weren't a decade ago.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>The Regional Brand Boom</h3>
                  <p>
                    Regional and value brands are gaining ground, which means
                    national players can't rely on brand recognition alone
                    anymore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Scattered Attention</h3>
                  <p>
                    Attention is fragmented, so a brand's shelf, app and social
                    presence all need to say the same thing, which is really
                    what FMCG branding agency is meant to solve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FMCG Industries We Brand */}
      <section className="fmcg-industries-we-section">
        <div className="container">
        <div className="fmcg-industries-head-content">
          <h2 className="fmcg-industries-head">
            FMCG Industries{" "}
            <span className="fmcg-industries-head-span">We Brand</span>
          </h2>
          </div>

          <div className="fmcg-industries-row-div">
          {/* 1 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img> */}
              <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgindustesersweservelogooneMaskgroup.svg" className="fmcg-industries-icon"></img>
              </div>

              <p className="fmcg-industries-para">Food & Packaged Foods</p>
            </div>
            {/* 2 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/bevargegesfmcgbraningicon.svg" className="fmcg-industries-icon"></img> */}
              <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgindustesersweservelogooneMaskgroup.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Beverages</p>
            </div>
            {/* 3 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/fmcgbraningicondaiiry.svg" className="fmcg-industries-icon"></img> */}
              <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgindustesersweservelogooneMaskgroup.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Dairy</p>
            </div>
            {/* 4 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/fmcgbraningiconconfectinary.svg" className="fmcg-industries-icon"></img> */}

              <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgindustesersweservelogooneMaskgroup.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Confectionery</p>
            </div>
            {/* 5 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/groceryfmcgbraningicon.svg" className="fmcg-industries-icon"></img> */}

              <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgindustesersweservelogooneMaskgroup.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Staples & Grocery</p>
            </div>
            {/* 6 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/personalcasrefmcgbraningicon.svg" className="fmcg-industries-icon"></img> */}
              <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgindustesersweservelogooneMaskgroup.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Personal Care</p>
            </div>
            {/* 7 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/fmcgbraningiconhomecare.svg" className="fmcg-industries-icon"></img> */}
              <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgindustesersweservelogooneMaskgroup.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Home Care</p>
            </div>
            {/* 8 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/fmcgbraningiconbabycare.svg" className="fmcg-industries-icon"></img> */}
              <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgindustesersweservelogooneMaskgroup.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Baby Care</p>
            </div>
            {/* 9 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/wellnessfmcgbraningicon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Health & Wellness</p>
            </div>
            {/* 10 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgbraningiconpetcare.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Pet Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* everything-a-food */}
      <section className="everything-a-food-section">
        <div className="container">
          <div className="everything-a-food-section-head-div">
            <h2 className="everything-a-food-section-head">
              Everything an FMCG Brand{" "}
              <span className="everything-a-food-section-head-span">
                {" "}
                Needs to Sell
              </span>
            </h2>
            <TalkToUs/>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/brand-identity-design-services">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      01 / Identity
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Brand Identity Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      An FMCG brand's identity has to work at thumbnail size on
                      an app and at full size on a shelf. We build identity
                      systems that hold their shape across both, so recognition
                      does not drop just because the format changes.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foodandbaveragesupdatedidentity.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/brand-positioning">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      02 / Positioning
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Brand Positioning
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      In a crowded category, trying to appeal to everyone
                      usually means being memorable to no one. This is the core
                      of FMCG branding strategy. So, before designing, we
                      finalise what a brand can credibly claim and who it is
                      actually for.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/fmcg-pagebrand-positining.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/packaging-design">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      03 / Packaging
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Packaging Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      As competition intensifies across digital and retail
                      shelves, FMCG packaging design carries more
                      responsibilities than ever. We design packaging that grabs
                      attention, builds buzz, and turns browsers into
                      buyers.{" "}
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foodandbaveragesupdatedpackaging-design.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/web-designing-services-in-india">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      04 / Website
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Website Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      For many FMCG brands, the website is where a first-time
                      buyer checks credibility before trusting an app listing or
                      a shelf pack. We build sites that turn that curiosity into
                      a first purchase.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foodandbaveragesupdatedwebsite-design.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/photography">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      05 / Visual Asset
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Visual Asset Creation
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      Visuals have the power to capture attention and engage way
                      more than words ever can. We bring your FMCG products to
                      life with our professional photography and video content,
                      so they appeal and sell more across platforms.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/fmcg-pagevisual-assets.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/go-to-market-strategy">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      06 / GTM
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      GTM Strategy
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      Launching or relaunching an FMCG product means knowing
                      exactly which channels, listings and retail formats matter
                      first. We build GTM plans around how the category actually
                      moves, not a generic launch checklist.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foodandbaveragesupdatedgtm.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STRATEGIC FRAMEWORK desktop*/}
      <div className="fnb-our-framework-dektop">
        <StrategicFrameworkFNB
          phases={phases}
          phaseLabel={phaseLabel}
          phaseHead={phaseHead}
        />
      </div>

      {/* OUR STRATEGIC FRAMEWORK mobile*/}
      <section className="our-stregetic-framework fnb-our-framework-mobile">
        <div className="container">
          <div className="our-stregetic-framework-head-content-div">
            <p className="our-stregetic-framework-label-para">Our Process</p>
            <h2 className="our-stregetic-framework-head">
              From Insight to Shelf,{" "}
              <span className="our-stregetic-framework-head-span">
                Step by Step{" "}
              </span>
            </h2>
          </div>

          {/* phase 1 */}
          <AOSProvider>
            <div data-aos="fade-right" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE ONE
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                      Market and Category Audit
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                     As an FMCG branding agency, we start by understanding where a brand actually sits (competitors, price bands, retail formats) and where the category is actually shifting, before proposing a single design direction.
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>

          {/* phase 2 */}
          <AOSProvider>
            <div data-aos="fade-left" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE TWO
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                      Positioning and Strategy
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                     We develop a clear brand strategy  with unique brand positioning as the next step. It’s a clear point of view on what the brand stands for and who it is built for, so every decision after this has something to measure against.
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>
          {/* phase 3 */}
          <AOSProvider>
            <div data-aos="fade-right" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE THREE
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                      Brand Design Planning & Execution
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                      At this stage, we begin turning strategy into visuals. Concepts and ideas for identity, packaging, and website design are brainstormed and developed. Shortlisted ideas are shared for your review, and only afterwards a final design is locked. Your brand now comes to life as something consumers can see, experience, and interact with.{" "}
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>

          {/* phase 4 */}
          <AOSProvider>
            <div data-aos="fade-left" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE FOUR
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                      The Market Entry 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                      With the launch date closing in, we now plan out the GTM strategy. It helps put the brand in front of the right channels and retail formats at the right time, so the launch lands where it actually matters, not everywhere at once. {" "}
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>

          {/* phase 5 */}
          <AOSProvider>
            <div data-aos="fade-right" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE FIVE
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                      Track and Refine
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                      Once live, we monitor market response and adjust positioning, packaging, and design as needed. Branding does not stop working at launch, which is really the whole point of treating FMCG branding as a strategy rather than a one-time project.{" "}
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>
        </div>
      </section>

      {/* stand alone hover section */}
      <section className="standalone-sec-pac">
        <div className="container">
          <div className="row headg-row-div">
            <h2 className="text-center headg">
              What Changes When{" "}
              <span className="every-pr">
                {" "}
                Branding Actually Works{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />
      </section>


      {/* Looking for something */}
      
            <section className="looking-for-someone">
              <div className="container">
                <div className="looking-for-someone-container">
                  <p className="looking-for-someone-para">Ready to Bring Your Brand  <br></br> to Life? Get on a call with us.</p>
                  <TalkToUs/>
                </div>
              </div>
            </section>

      {/* Why DN Designs? desktop*/}
      <section className="why-dn-designs">
        <div className="container">
          <div className="row">
            <div className="div-of-abs-img">
              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_5.jpg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-1"
              />

              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_1.jpeg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-2"
              />

              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_2.jpg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-3"
              />

              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_3.jpg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-4"
              />

              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_4.jpg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-5"
              />
            </div>
          </div>

          <div className="row why-dn-sec-content-row">
            <div className="col-12 col-lg-6">
              <h2 className="why-dn-head">Why Choose Us </h2>
              <p className="why-dn-para">
                We do not treat FMCG branding as a design exercise. We treat it as a market problem. As an FMCG branding firm, every identity, packaging, and page we build is shaped around how a brand actually gets discovered, trusted, and repurchased in a category where attention is short, and competition never lets up. Whether it is a legacy name losing ground or a new brand trying to earn its first thousand customers, we build what it takes to hold shelf space and keep it. 
              </p>
            </div>

            <div className="col-12 col-lg-6 why-dn-sec-content-btn-col">
              <TalkToUs />
            </div>
          </div>
        </div>
      </section>


      {/* cta swipper */}
      {/* <CTAMarqueSwipper/> */}
      {/* book a direct call */}
      <BookDirectCallCTA/>

      {/* Why DN Designs? mobile*/}

      <div className="why-dn-designs-mobile">
        <div className="container">
          <div className="why-dn-designs-mobile-content">
            <h2 className="why-dn-designs-mobile-head">Why Choose Us</h2>
            <p className="why-dn-designs-mobile-para">
              We do not treat FMCG branding as a design exercise. We treat it as a market problem. As an FMCG branding firm, every identity, packaging, and page we build is shaped around how a brand actually gets discovered, trusted, and repurchased in a category where attention is short, and competition never lets up. Whether it is a legacy name losing ground or a new brand trying to earn its first thousand customers, we build what it takes to hold shelf space and keep it. 
            </p>
            <TalkToUs />
          </div>

          <div className="row">
            <div className="col-6">
              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_5.jpg"
                }
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
            <div className="col-6">
              <img
                src={"https://dndesigns.co.in/uploads/pages/2_mob.jpg"}
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row why-dn-designs-mobile-mid-div">
            <div className="col-12">
              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_1.jpeg"
                }
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <img
                src={"https://dndesigns.co.in/uploads/pages/3_mob.jpg"}
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
            <div className="col-6">
              <img
                src={"https://dndesigns.co.in/uploads/pages/4_mob.jpg"}
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* faqs */}
      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} />
    </div>
  );
}

export default page;
