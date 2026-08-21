export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from 'react'
import "../wellness-branding/wellness-branding.css"
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb'
import IndustriesPageHero from '@/Components/IndustriesPageHero/IndustriesPageHero'
import Link from 'next/link';
import StrategicFrameworkFNB from '@/Components/StrategicFrameworkFNB/StrategicFrameworkFNB';
import Faqs from '@/Components/Faqs/Faqs';
import Form from '@/Components/Form/Form';
import StandAlonePackaging from '@/Components/StandAlonePackaging/StandAlonePackaging';
import AOSProvider from '@/Components/AosProvider/AosProvider';
import TalkToUs from '@/Components/TalkToUs/TalkToUs';

// import Script from "next/script";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";


// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("wellness-branding", null, false);
  } catch (error) {
    console.log("Wellness Branding", error);
    return {
      title: "Wellness Branding",
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
            pageData = await getPageById("wellness-branding", null, true);
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
  let heroLabel = "Brands Engineered For Trust, Growth And Repeat Sales ";
  let heroHead = "Beverage Branding Agency";
  let heroParaDesc =
    "Every beverage category is crowded. Beverages have to fight harder: rows of cans, packed shelves, and barely a moment to make an impression. Whether it's a craft kombucha, a functional wellness can, or a premium tropical juice, the line between a shelf-warmer and a bestseller usually isn't the drink itself; it's the branding wrapped around it. A beverage branding agency, DN Designs builds brand identities and packaging systems for beverage startups ready to scale. We work with founders who know their product is good and just need the world to notice. ";

    let pageHeroimgurl ="https://dndesigns.co.in/uploads/pages/wellness-hero-bannermain-image.jpg.jpeg"

    


     let phaseLabel = "Our Process";
  let phaseHead = (<>The Making of a 
 <span className="every-pr"> Beverage Brand</span></>);

  const phases = [
    {
      number: "01",
      label: "PHASE ONE",
      title: "Discovery & Research",
      desc: "We start by understanding your product, category, competitors and target audience through founder interviews, market scans and shelf audits. This is essential before a single design decision gets made, so that strategy leads and aesthetics follow. ",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",

      // ],
    },
    {
      number: "02",
      label: "PHASE TWO",
      title: "Positioning & Strategy",
      desc: "We define what your beverage stands for, who it's for, and why it beats the next can on the shelf, building a strategic foundation for every future design and marketing decision.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "03",
      label: "PHASE THREE",
      title: "Identity & Design",
      desc: "The actual design work, planning as well as implementation, is the hero here.  Logo, colour, typography, and packaging come together into one visual system, tested under real shelf conditions and in digital placements. This ensures the brand looks as strong in a cooler as it does on Instagram. This is also where we design your website.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "04",
      label: "PHASE FOUR",
      title: "Refinement & Testing ",
      desc: "We pressure-test designs one last time against real-world scenarios, integrating your feedback and refining until the branding works in practice, not just on a screen. ",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "05",
      label: "PHASE FIVE",
      title: "Launch & Support ",
      desc: "Finally, we hand over design assets, brand guidelines, and GTM guidance for the launch. We further extend ongoing brand support, staying involved as your beverage brand grows.",
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
      title: "Differentiation",
      description:
        "Clear positioning separates your beverage brand from competitors selling nearly identical products, so buyers know exactly why to choose you.",
      image:
        "https://dndesigns.co.in/uploads/pages/wellnessbrandinghealthdesktop1.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Trust",
      description:
        "A polished, consistent beverage brand identity signals quality before the first sip, turning sceptical first-time buyers into confident repeat customers.",
      image:
        "https://dndesigns.co.in/uploads/pages/wellnessbrandinghealthdesktop2.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Retail Traction ",
      description:
        "Packaging designed for real-world conditions helps you win in physical/online retail environments and hold space against bigger, better-funded competitors.",
      image:
        "https://dndesigns.co.in/uploads/pages/wellnessbrandinghealthdesktop3.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Scalability",
      description:
        "A strategic and flexible beverage brand system supports the launch of new flavours, formats and market entry. No starting from scratch every time.",
      image:
        "https://dndesigns.co.in/uploads/pages/wellnessbrandinghealthdesktop4.jpg",
    }
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/wellnessbrandinghealthmobile1.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/wellnessbrandinghealthmobile3.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/wellnessbrandinghealthmobile2.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/wellnessbrandinghealthmobile4.jpg",
    },
  ];

  const leftFaqs = [
    {
      question: "What is beverage or drinks branding and why does it matter? ",
      answer:
        "Modern beverage branding revolves around designing the identity, packaging and messaging system that make a drink recognisable and desirable on shelf and screen. It matters because most buying decisions happen in seconds, and branding is what gets a beverage picked up in the first place.",
    },
    {
      question:
        " How much does creative beverage branding cost? ",
      answer:
        "Cost depends on scope. We provide a tailored amount after understanding your category, SKU count and growth stage.",
    },
    {
      question:
        " How long does a beverage branding project takes? ",
      answer: 
          "It depends on scope, how many SKUs are involved, and how many revision rounds you need before production. "
        
    },

    {
      question:
        "What's the difference between beverage branding and packaging design? ",
      answer:
        "Branding is the strategy, identity design and story behind a drink - the why and the who. Packaging design is one output of that strategy: the physical can, bottle and label that carries the brand into a buyer's hand.",
    },

    {
      question:
        " Do you work with small or early-stage beverage startups?  ",
      answer:
        "Yes. As a beverage branding company, we love working with small and early-stage beverage startups.",
    },
    
  ];

  const rightFaqs = [
    {
      question:
        "Can you help with functional beverage branding specifically? ",
      answer:
        "Yes. Functional beverages need branding that communicates a claim, like energy, focus or gut health, fast and credibly, without looking like a supplement label. That's a distinct design challenge from standard drink branding.",
    },

    {
      question: "What makes premium beverage branding different from budget branding? ",
      answer:
        "Premium beverage branding leans on restraint, fewer elements, better materials, more considered typography, signalling quality through what's left off the can as much as what's on it.",
    },

    {
      question:
        " Can you design for both packaging and digital presence?",
      answer:
        "Yes. Beverage brands need to look consistent on a shelf and on a screen, so identity, packaging and website work are typically scoped together rather than as separate projects.",
    },

    {
      question:
        " What segments within the beverage industry do you work with?  ",
      answer: 
          "Work spans across functional drinks, wellness beverages, craft and RTD beverages, juices, energy drinks and other emerging categories within the beverage industry."
        
    },
  ];

  // form section content
  const FormHead = "Let's Talk Over a Cup of Coffee";
  const FormPara =
    "Your beverage deserves more than a good recipe; it deserves a brand people reach for without thinking twice. Without strong branding, every day is a day a competitor’s can gets picked instead of yours. Our beverage branding agency has helped brands get noticed and admired and turned shelf-scrolls into sales, from first sip to repeat order. Let's talk over a cup of coffee, real or virtual, and figure out how your brand can become customers’ first choice.";


  return (
    <div>

         {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "wellness-branding"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      {/* breadcrump */}
      <Breadcrumb/>

      {/* hero section */}
         <IndustriesPageHero heroLabel={heroLabel} heroHead={heroHead} heroParaDesc={heroParaDesc} pageHeroimgurl={pageHeroimgurl}/>


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
                    Whey protein brand. We crafted a clean, minimal identity and label design to position it as a lifestyle product, not another gym supplement.
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
                    Nutraceutical Brand. We built a cohesive identity, packaging, and digital design to reflect simplicity, consistency, and care - inspiring trust and making wellness a daily ritual.
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
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/nwjkebhdn.webp"
                  className="img-fluid"
                /> */}
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
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                   Sparkling Mineral Water & Prebiotic Drinks Brand. We gave it a vibrant yet calming identity: a logo, a character and a can that fizzes with personality and freshness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row port-row">
            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                {/* <img src="https://dndesigns.co.in/uploads/pages/thames-5.webp" className="img-fluid" /> */}
                {/* <video
                  src="https://dndesigns.co.in/uploads/videos/fmcg3sistersvideo.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                /> */}
                <img
                  src="https://dndesigns.co.in/uploads/pages/our-work-portfolioneuzen.jpg.jpeg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Neuzen</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    A mental wellness brand with a productivity drink as its debut product. From identity to positioning and packaging design, we crafted a brand experience as sharp and focused as the product itself.  
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
                <img
                  src="https://dndesigns.co.in/uploads/pages/Untitled-sunny-singh.webp"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Pureluxe</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div>
                  </div>

                  <p>
                   Premium Protein Bar Brand. We designed the packaging and digital experience that celebrates indulgence and taste while balancing nutrition and health.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                <video
                  src="https://at1am.com/wp-content/uploads/2026/03/IMG_5792_1.mp4"
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
                      <h3>1AM</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    Canned Cold Coffee Brand. From logo and identity to website and social media, we brewed a bold and pretty cool brand that Gen Z love vibing with. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



       {/* why f and b */}
            <section className="why-fandb-section">
              <div className="container">
              <h2 className="why-fandb-section-head">What Is Beverage Branding and   <span className="why-fandb-section-head-span">Why Is It Complex 
</span></h2>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">Beverage branding is not just a logo and a colour palette slapped onto a can, it's the entire system that decides whether a drink survives contact with the market. Every year, hundreds of new beverage brands launch with a genuinely good product and no real answer to who it's for, why it exists and why a buyer should trust it over the fifteen other cans on the same shelf. That gap between good product and good business is where most beverage founders lose momentum. Not because the drink was wrong, but because nobody built a brand strong enough to carry it past the first sample.</p>
                    </div>
                  </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">What makes drinks branding genuinely difficult is that it has to work across more surfaces than almost any other category. A beverage bottle or can has to perform in a retail store fridge under fluorescent light, on a phone screen in three seconds of scrolling, on a restaurant menu, and next to a dozen near-identical competitors at a trade show. Add to this shifting consumer expectations, and branding stops being decoration. It becomes the single hardest strategic decision a beverage founder makes. And that’s where a beverage branding agency steps in to ensure your drink brand performs everywhere consistently. </p>
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
                  Why Beverage Branding 
                  <span className="appr-pro-anime-main-head-span">
                    {" "}
                    Is Challenging
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
                <div className="app-pro-div app-pro-div-white">
                  <div>
                    <h3>Product Can’t Speak</h3>
                    <p>
                     You can see and feel a piece of apparel before buying. Taste, though, cannot be previewed or photographed. Branding has to create desire and convey experience. 
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Low Attention, High Frequency </h3>
                    <p>
                      Beverage purchase decisions are quick, not researched. Branding has just 2-3 seconds to land on the shelf and scroll - through colour, form and messaging.  
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
                  <h3>Balancing Familiarity with Distinctiveness </h3>
                  <p>
                   Every beverage category has its own visual language. Too close, you blend in. Too far, you confuse. Branding has to balance familiarity and differentiation. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Regulatory Limits</h3>
                  <p>
                    Labelling laws and health-claim restrictions limit how much creative freedom a brand actually has. Drinks branding must balance creativity with compliance. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Category Ambiguity</h3>
                  <p>
                  New formats like functional sodas and adaptogenic drinks don't fit existing shelf sets or consumer mental models yet, making positioning genuinely hard.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Claim Fatigue</h3>
                  <p>
                   Overused language like "natural," "functional", and "wellness" has left consumers sceptical, so a brand has to earn trust rather than just claim it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* FMCG Industries We Brand */}
      {/* <section className="fmcg-industries-we-section">
        <div className="container">
        <div className="fmcg-industries-head-content">
          <h2 className="fmcg-industries-head">
            Industries We {" "}
            <span className="fmcg-industries-head-span">Serve</span>
          </h2>
          </div>

          <div className="fmcg-industries-row-div">
          1
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservice11984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Nutraceuticals</p>
            </div>
            2
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservice2Frame1984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Supplements</p>
            </div>
            3
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservice3Frame1984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Functional Beverages</p>
            </div>
            4
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservice4Frame1984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Healthy Snacks</p>
            </div>
            5
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservicewedjFrame 1984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Organic Foods</p>
            </div>
             6 
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameserviceayurvedicFrame1984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Ayurveda and Herbal Products</p>
            </div>
             7 
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservicewsdaeFrame1984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Sports Nutrition</p>
            </div>
             8 
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservicewegvdshvhvqw778Frame1984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Skincare and Personal Care</p>
            </div>
             9 
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservicemcbdrew789Frame1984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Medical Nutrition</p>
            </div>
             10 
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservicewsadvnnmeFrame1984081826 (1).svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Wellness Startups</p>
            </div>
          </div>
        </div>
      </section> */}


      {/* everything-a-food */}
      <section className="everything-a-food-section">
        <div className="container">
          <div className="everything-a-food-section-head-div">
            <h2 className="everything-a-food-section-head">
              Full-Service Branding,  {" "}
              <span className="everything-a-food-section-head-span">
                {" "}
                Done Right  
              </span>
            </h2>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/brand-strategy">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      01 / Strategy
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Brand Strategy
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                     We map your positioning, audience and category context, answering why your beverage exists, who it's for, and how it stands apart from competitors already crowding the same fridge, cooler or search result.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foodandbaveragesupdatedstrategy.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/brand-identity-design-services">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      02 / Identity
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Brand Identity
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                     Logo, colour system, typography and visual and verbal language built to work everywhere your beverage shows up, from can and bottle to website and social, so buyers recognise you instantly.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/wellnessbrandingbrand-identity.jpg"
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
                      Can, bottle and label design engineered to sell in three seconds flat, balancing shelf standout with regulatory requirements, print production realities, and the practical demands of retail and ecommerce display.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/wellnessbrandingpackaging-design.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/branding">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      04 / Website
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Website Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      A website built to convert browsers into buyers and retailers into believers, translating your beverage brand into a digital storefront that sells the story as clearly as the can does.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/wellnessbrandingcommunication-design.jpg"
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
                      05 / Video
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Video & Photography
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      Visuals designed to convey, convince and captivate the target audience on packaging, website, and social media. Because sometimes a frame says what a sentence cannot.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/wellnessbrandinggtm.jpg"
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
                      06 / GTM
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                     GTM Strategy 
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      Launch planning that covers pricing, distribution channels, retail positioning and early messaging, so your beverage brand enters the market with a plan for who buys and how they find you, not just a launch date.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/wellnessbrandingproduct-visual.jpg"
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
             The Making of a  {" "}
              <span className="our-stregetic-framework-head-span">
                Beverage Brand{" "}
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
                      Discovery & Research
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We start by understanding your product, category, competitors and target audience through founder interviews, market scans and shelf audits. This is essential before a single design decision gets made, so that strategy leads and aesthetics follow.
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
                     Positioning & Strategy 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We define what your beverage stands for, who it's for, and why it beats the next can on the shelf, building a strategic foundation for every future design and marketing decision.
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
                     Identity & Design
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                     The actual design work, planning as well as implementation, is the hero here.  Logo, colour, typography, and packaging come together into one visual system, tested under real shelf conditions and in digital placements. This ensures the brand looks as strong in a cooler as it does on Instagram. This is also where we design your website.
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
                      Refinement & Testing 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We pressure-test designs one last time against real-world scenarios, integrating your feedback and refining until the branding works in practice, not just on a screen. 
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
                      Launch & Support
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    Finally, we hand over design assets, brand guidelines, and GTM guidance for the launch. We further extend ongoing brand support, staying involved as your beverage brand grows.
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
              What Changes When 
              <span className="every-pr">
                {" "}
              Beverage Branding Works 
              </span>{" "}
            </h2>
          </div>
        </div>
        <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />
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
              <h2 className="why-dn-head">Why Choose Us? </h2>
              <p className="why-dn-para">
                We have built beverage brands across categories, from popping boba drinks and cold coffee to premium juices and prebiotic sparkling drink brands. With our extensive experience in the category, we have helped founders go from a vague concept to impactful shelf-ready identities. The result: brands that didn’t just launch; they won. At our beverage branding agency, we work with startups, category disruptors and established brands entering new formats and markets, bringing the same enthusiasm to every project so that the result is always what you envisioned. 
              </p>
            </div>

            <div className="col-12 col-lg-6 why-dn-sec-content-btn-col">
              <TalkToUs />
            </div>
          </div>
        </div>
      </section>

      {/* Why DN Designs? mobile*/}

      <div className="why-dn-designs-mobile">
        <div className="container">
          <div className="why-dn-designs-mobile-content">
            <h2 className="why-dn-designs-mobile-head">Why Choose Us?</h2>
            <p className="why-dn-designs-mobile-para">
             We have built beverage brands across categories, from popping boba drinks and cold coffee to premium juices and prebiotic sparkling drink brands. With our extensive experience in the category, we have helped founders go from a vague concept to impactful shelf-ready identities. The result: brands that didn’t just launch; they won. At our beverage branding agency, we work with startups, category disruptors and established brands entering new formats and markets, bringing the same enthusiasm to every project so that the result is always what you envisioned. 
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
  )
}

export default page
