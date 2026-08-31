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
import CTAMarqueSwipper from '@/Components/CTAMarqueSwipper/CTAMarqueSwipper';
import BookDirectCallCTA from '@/Components/BookDirectCallCTA/BookDirectCallCTA';


// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("supplement-branding", null, false);
  } catch (error) {
    console.log("Supplement Branding", error);
    return {
      title: "Supplement Branding",
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
            pageData = await getPageById("supplement-branding", null, true);
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
  let heroLabel = "Building Trusted Supplement Brands That Drive Growth.";
  let heroHead = "Supplement Branding Agency";
  let heroParaDesc =
    "A supplement brand carries a weight most consumer products don't. People aren't buying a look or a lifestyle here; they're deciding whether to put something inside their body based on a name, a label and a few seconds of scanning. That's a harder trust to earn than almost anywhere else in retail, which is why formulas alone rarely win. The category is full of founders who nailed the science and never solved the belief. That fragmentation is where the real friction sits. DN Designs, a supplement branding agency, builds the part that earns that belief: identity, packaging and strategy that make a good formula worth trusting at first sight. ";

    let pageHeroimgurl ="https://dndesigns.co.in/uploads/pages/supplementbrandingpageheroimage.jpeg"

    


     let phaseLabel = "Our Process";
  let phaseHead = (<>How We Turn Formula Into <span className="every-pr">Brand That Sells
</span></>);

  const phases = [
    {
      number: "01",
      label: "PHASE ONE",
      title: "Discover",
      desc: "We dig into your product, your buyer and your competitors before touching a single design tool. ",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",

      // ],
    },
    {
      number: "02",
      label: "PHASE TWO",
      title: "Define",
      desc: "Positioning and brand strategy get locked so every future decision has a reference point to check against.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "03",
      label: "PHASE THREE",
      title: "Design ",
      desc: "Identity, label, and packaging design come together as one connected system, not separate deliverables. UI/UX design and website development unfold alongside this stage. ",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "04",
      label: "PHASE FOUR",
      title: "Refine ",
      desc: "We stress-test the work against shelf, screen and real feedback before it's called finished.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "05",
      label: "PHASE FIVE",
      title: "Launch ",
      desc: "GTM support carries the brand into the market with the same clarity it was built with.",
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
      title: "Higher Conversion",
      description:
        "Buyers stop scanning past the bottle and start picking it up, which directly moves the ratio between footfall and actual purchase.",
      image:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehover1.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Stronger Retail Negotiation",
      description:
        'Retail buyers ask "how much can you supply?" instead of "what is this?" shortening the distance between a pitch meeting and a shelf placement.',
      image:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehover2.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Better Repeat Purchase",
      description:
        "Consistent identity across pouch, page and post means the product people once tried is instantly recognisable and loved the second time around.",
      image:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehover3.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Lower Sales Friction",
      description:
        "Founders stop re-explaining the brand on every call because the packaging and messaging are already doing that convincing work upfront.",
      image:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehover4.jpg",
    },
    {
      id: 5,
      point: "05",
      title: "Premium Pricing Power",
      description:
        "A brand that looks considered earns permission to price above the category average, without the buyer questioning the number.",
      image:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehover5.jpg",
    }
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehovermobile1.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehovermobile2.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehovermobile3.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehovermobile4.jpg",
    },
    
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/supplementrystandalnehovermobile5.jpg",
    },
  ];

  const leftFaqs = [
    {
      question: "What does a supplement branding agency actually do?  ",
      answer:
        "A supplement branding company or agency builds everything a buyer sees and reads before they trust a product enough to try it. Name, identity, label design, and the messaging it's trying to put together - everything that shapes and builds a brand perception in the market.",
    },
    {
      question:
        "How is supplement packaging design different from regular product packaging?",
      answer:
        "Supplement packaging design carries more weight. Claims, compliance text and dosage information all have to sit within a design that still looks premium and easy to trust at a glance.",
    },
    {
      question:
        "What's included in a full supplement branding package? ",
      answer: 
          "Brand strategy and messaging, identity and label design, and brand guidelines form part of the complete supplement branding package. It is built as a single connected system rather than as separate pieces handed over one at a time."
        
    },

    {
      question:
        "Do you work with both new and existing supplement brands?  ",
      answer:
        "Yes. We build first-time identities for new launches and handle rebranding for supplement companies that have outgrown their original look.",
    },

  ];

  const rightFaqs = [
    {
      question: "What makes premium supplement branding different from a standard approach?",
      answer:
        "Restraint, mostly. Premium and luxury supplement branding leans on material choice, typography and quieter design decisions rather than loud claims and busy layouts.",
    },
    {
      question:
        "What categories of supplement brands do you work with?  ",
      answer:
        "Our supplement branding company works with nutrition, sports & fitness, performance, beauty and specialised wellness supplement brands. Each is approached with the strategy and visual language its specific buyer actually responds to. ",
    },

    {
      question: "Do you design both brand identity and packaging, or just one? ",
      answer:
        "Both, and everything in between. Identity, label or packaging design, and communication design are built together so nothing feels disconnected once it's on the shelf.",
    },

    {
      question:
        "How long does a full supplement branding project take? ",
      answer:
        "It depends on the scope of work, the number of SKUs and the complexities involved. As a supplement branding company, we provide a tailored timeline after a detailed discussion of your project. ",
    }
  ];

  // form section content
  const FormHead = "Let's Discuss Over Coffee";
  const FormPara =
    "Most supplement founders realise their branding is the problem only after sales plateau, not before. By then, months and ad spend are already gone chasing a fix the product never actually needed. That gap gets more expensive the longer it sits unaddressed; competitors on the same crowded shelf keep sharpening their look while yours stays frozen at launch day. Let's talk before that happens to you. Grab a coffee, virtual or real, with the DN Designs team and let’s walk through exactly where your supplement brand stands today, no pitch, just a straight look.";


  return (
    <div>

         {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "supplement-branding"}`}
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
            <div className="col-12 col-md-12 col-lg-6 px-2 port-main-div">
              <div className="port-div">
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

            <div className="col-12 col-md-12 col-lg-6 px-2 port-main-div">
              <div className="port-div">
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
          </div>
        </div>
      </section>



       {/* why f and b */}
            <section className="why-fandb-section">
              <div className="container">
              <div className='why-fandb-section-head-div'>
              <h2 className="why-fandb-section-head">The Supplement Branding  <span className="why-fandb-section-head-span">Landscape 
</span></h2>
<TalkToUs/>
</div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">Supplement branding is the layer that turns a formula into something people are willing to trust with their body. It covers brand strategy, identity design, label design, packaging and the voice a brand uses to talk about its own claims. It's a harder discipline than branding a beverage or a fashion label, because every design choice sits next to compliance text and dosage numbers and has to appeal to a buyer who's naturally sceptical of health claims. Get the identity too loud, and it reads unsafe. Get it too clinical, and it feels complicated. The bar isn't just standing out; it's earning belief while working inside rules that don't bend for creativity.</p>
                    </div>
                  </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">Moreover, the category refuses to sit still. Nutrition supplement branding, sports & fitness supplement branding, performance supplement branding, beauty supplement branding and specialised wellness supplement branding all draw from overlapping shelves but speak to completely different buyers, each with their own idea of what looks credible. Evolving market and customers make things more challenging. A dietary supplement branding approach that worked five years ago gets ignored today because buyers read labels differently: suspicious first, curious second. Solve for one sub-tribe, and the branding often fails the next. This is where the expertise of a supplement branding agency makes a difference.</p>
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
                  What Makes Health Supplement
                  <span className="appr-pro-anime-main-head-span">
                    {" "}
                     Branding Complex
                  </span>
                </h2>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                  <div>
                    <h3>Trust Deficit</h3>
                    <p>
                     Buyers approach health claims sceptically by default, so branding has to work harder to earn belief than in most other categories.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Technical Complexity </h3>
                    <p>
                    Scientific and technical information (ingredients, nutritional info, & mechanism) is difficult to understand. Branding has to do the job of simplifying. 
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
                  <h3>Claim Sensitivity </h3>
                  <p>
                  Every creative choice sits next to regulatory language, so design can't tip into a compliance risk. Branding has to work within a strict regulatory framework. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Category Confusion</h3>
                  <p>
                 Nutrition, fitness and beauty buyers all have their specific needs. They read the same shelf differently, and branding needs to speak to all three meaningfully.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Emotional Credibility </h3>
                  <p>
                   A too-luxurious or too clinical approach can drive customers away. Branding has to balance scientific credibility with emotional connection. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Cross-Channel Consistency </h3>
                  <p>
                  Website, social media, pharmacies, or Q-commerce - branding has to ensure the business remains recognisable and convincing for consumers everywhere. 
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
            Supplement Segments  {" "}
            <span className="fmcg-industries-head-span">We Serve</span>
          </h2>
          </div>

          <div className="fmcg-industries-row-div">
          {/* 1 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservice11984081826 (1).svg" className="fmcg-industries-icon"></img> */}
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/supplementbrandingicon1.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Nutrition </p>
            </div>
            {/* 2 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservice2Frame1984081826 (1).svg" className="fmcg-industries-icon"></img> */}
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/guthealrhicon2.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Gut Health </p>
            </div>
            {/* 3 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservice3Frame1984081826 (1).svg" className="fmcg-industries-icon"></img> */}
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/beutyhealdthewkjd.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Beauty </p>
            </div>
            {/* 4 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservice4Frame1984081826 (1).svg" className="fmcg-industries-icon"></img> */}
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/immunityehgdsupplament.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Immunity </p>
            </div>
            {/* 5 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservicewedjFrame 1984081826 (1).svg" className="fmcg-industries-icon"></img> */}
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/performanncehebdaswhj.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Performance </p>
            </div>
            {/* 6 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameserviceayurvedicFrame1984081826 (1).svg" className="fmcg-industries-icon"></img> */}
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/speciliaesedwellnessede.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Specialised Wellness</p>
            </div>
            {/* 7 */}
            <div className="fmcg-industries-single-col-div">
              {/* <img src="https://dndesigns.co.in/uploads/pages/healthandwellnessFrameservicewsdaeFrame1984081826 (1).svg" className="fmcg-industries-icon"></img> */}
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/2u3ihbd3huydguguuedu.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Sports </p>
            </div>
            
           
           
          </div>
        </div>
      </section>


      {/* everything-a-food */}
      <section className="everything-a-food-section">
        <div className="container">
          <div className="everything-a-food-section-head-div">
            <h2 className="everything-a-food-section-head">
              Everything Your Brand  {" "}
              <span className="everything-a-food-section-head-span">
                {" "}
                Needs To Convert 
              </span>
            </h2>
            <TalkToUs/>
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
                      The foundation of a strong supplement brand. We craft a brand strategy based on solid research, so your positioning, messaging and packaging all have a clear, consistent direction.
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
                      Brand Identity Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                     Several supplement brands start with a logo and back into a personality later. This is why they feel generic. We design brand identity strategically, so whether it’s colour or a typo, every element has a reason to exist.
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
                      A pouch that looks fine in isolation often disappears next to ten competitors. We design for shelf context from day one, so the product reads instantly under retail lighting and a fast scroll.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/supplementrywdfjpackaging-design.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/photography">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      04 / Visual
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Visual Storytelling
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      Photography and 3D animation reveal the supplement brand’s story beyond a static label. From studio-shot bottles to animated formula visuals, we build visuals for shelf, social and campaign use. 
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/supplmenthwevisual-story-telling.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/web-designing-services-in-india">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      05 /  Website
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                     Website Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      Website and UI/UX design have to carry the same brand language from label to screen. From product pages to checkout flow, we make sure the site feels as trustworthy and considered as the packaging itself. 
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
                     A strong brand with a weak launch plan still stalls. We map channel-specific rollout, from retail-ready assets to D2C creative, so the brand performs the same way everywhere it shows up. 
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/wellnessbrandinggtm.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

       {/* cta section */}
      <BookDirectCallCTA/>



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
             How We Turn Formula Into  {" "}
              <span className="our-stregetic-framework-head-span">
                Brand That Sells
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
                      Discover 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                   We dig into your product, your buyer and your competitors before touching a single design tool.
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
                    Define 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    Positioning and brand strategy get locked so every future decision has a reference point to check against.
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
                     Design 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                     Identity, label, and packaging design come together as one connected system, not separate deliverables. UI/UX design and website development unfold alongside this stage. 
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
                     Refine 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We stress-test the work against shelf, screen and real feedback before it's called finished.
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
                     Launch 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    GTM support carries the brand into the market with the same clarity it was built with.
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
             Proof This Moves 
              <span className="every-pr">
                {" "}
             The Needle
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
                  <p className="looking-for-someone-para">Ready to Bring Your Brand <br></br>  to Life? Get on a call with us. </p>
                  <TalkToUs/>
                </div>
              </div>
            </section>

      {/* Why DN Designs? desktop*/}
      {/* <section className="why-dn-designs">
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
              <h2 className="why-dn-head">Why Work With Us? </h2>
              <p className="why-dn-para">
                We've worked across nutraceuticals, functional beverages, Ayurveda and personal care brands, building everything from first-time identities to full packaging and website systems. As one of the most consistent branding agencies working with health and wellness founders, our practice sits at the intersection of strategy and design, the kind of holistic wellness branding that treats a formula, a founder's story and a shelf full of competitors as one connected challenge to solve. 
              </p>
            </div>

            <div className="col-12 col-lg-6 why-dn-sec-content-btn-col">
              <TalkToUs />
            </div>
          </div>
        </div>
      </section> */}

      {/* Why DN Designs? mobile*/}

      {/* <div className="why-dn-designs-mobile">
        <div className="container">
          <div className="why-dn-designs-mobile-content">
            <h2 className="why-dn-designs-mobile-head">Why Work With Us ?</h2>
            <p className="why-dn-designs-mobile-para">
              We've worked across nutraceuticals, functional beverages, Ayurveda and personal care brands, building everything from first-time identities to full packaging and website systems. As one of the most consistent branding agencies working with health and wellness founders, our practice sits at the intersection of strategy and design, the kind of holistic wellness branding that treats a formula, a founder's story and a shelf full of competitors as one connected challenge to solve.
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
      </div> */}

      <CTAMarqueSwipper/>

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
