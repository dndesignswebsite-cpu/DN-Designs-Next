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
import OurBrandsSectionHome from '@/Components/OurBrandsSectionHome/OurBrandsSectionHome';


// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("skincare-branding", null, false);
  } catch (error) {
    console.log("Skincare Branding", error);
    return {
      title: "Skincare Branding",
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
            pageData = await getPageById("skincare-branding", null, true);
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
  let heroLabel = "Creating Skincare Brands People Trust";
  let heroHead = "Skincare Branding Agency";
  let heroParaDesc =
    "Nobody trusts a skincare product on looks alone, not when it's going straight onto their face. Skin is personal, so beauty and skincare branding carries a different kind of pressure than most categories. A customer isn't just judging your bottle; they're judging whether they can trust what's inside it or not, so it doesn’t react badly on skin that's already sensitive to change. That's the real job of skincare branding: communicating safety and results before a single patch test happens. The formula earns loyalty. The branding earns the first try. At our skincare branding agency, we map this work by building identities and packaging that make trust visible at first glance. ";

    let pageHeroimgurl ="https://dndesigns.co.in/uploads/pages/skincarebrandingimagehero.jpg"

    


     let phaseLabel = "Our Process";
  let phaseHead = (<>From First Call to  <span className="every-pr">Launch Day 
</span></>);

  const phases = [
    {
      number: "01",
      label: "PHASE ONE",
      title: "Discovery",
      desc: "We start by understanding your formula, vision, audience and who you're actually up against on the shelf, not just the obvious names. Every decision after this is grounded in what is discovered here, and not on guesswork.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",

      // ],
    },
    {
      number: "02",
      label: "PHASE TWO",
      title: "Positioning",
      desc: "We define what your skincare brand actually stands for - science-backed skincare, barrier-first care, or anti-hype beauty - specific enough that saying no to the wrong customer becomes as clear as saying yes to the right one.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "03",
      label: "PHASE THREE",
      title: "Identity Development",
      desc: "Names, visuals and tone get built together so the brand feels like one coherent decision, not separate pieces stitched together later. This is where skincare branding either earns its calm, or ends up looking chaotic and unfinished.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "04",
      label: "PHASE FOUR",
      title: "Bringing The Identity To Life",
      desc: "We take the identity across packaging, digital and in-store, testing how it actually holds up where customers meet it, not just how it looks in a presentation deck. Beauty shelves are unforgiving, so we test for that reality early.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "05",
      label: "PHASE FIVE",
      title: "Launch Support",
      desc: "We stay involved through the go-to-market phase, defining how to launch, where to launch, as well as how to price, distribute and retain customers. With this, we make sure your brand launches strong and creates a desired impact.",
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
      title: "Shelf Pull",
      description:
        "Distinct packaging and identity make a product stand out among rows of near-identical bottles, turning a passing glance into an actual pick off the shelf.",
      image:
        "https://dndesigns.co.in/uploads/pages/skincarehoverimagedesktop11.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Repeat Purchase",
      description:
        'A brand that feels considered and consistent earns trust fast, and trust is what brings a buyer back to buy again instead of trying something new next time.',
      image:
        "https://dndesigns.co.in/uploads/pages/skincarehoverimagedesktop22.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Price Perception",
      description:
        "Premium skincare branding shifts the conversation from price to value. Customers are willing to pay more without hesitation.",
      image:
        "https://dndesigns.co.in/uploads/pages/skincarehoverimagedesktop33.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Category Positioning",
      description:
        "Clarity in branding tells buyers instantly whether a product is luxury, clinical or minimal. It builds confidence and reduces decision making time in store.",
      image:
        "https://dndesigns.co.in/uploads/pages/skincarehoverimagedesktop44.jpg",
    },
    {
      id: 5,
      point: "05",
      title: "Long Term Recognition",
      description:
        "A consistent identity across physical and digital makes a brand recognisable. New launches under the same name inherit trust instead of starting from zero.",
      image:
        "https://dndesigns.co.in/uploads/pages/skincarehoverimagedesktop55.jpg",
    }
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/skincaremobilehoverimage11.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/skincaremobilehoverimage22.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/skincaremobilehoverimage33.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/skincaremobilehoverimage44.jpg",
    },
    
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/skincaremobilehoverimage55.jpg",
    },
  ];

  const leftFaqs = [
    {
      question: "What does a skincare branding agency actually do? ",
      answer:
        "A skincare branding agency shapes everything a customer sees and feels before they even open the product: the name, the visual identity (logo, colour, typography), the verbal identity (messaging, voice, brand story) and packaging design. The process also folds in brand strategy and positioning so the visuals actually do a job, and aren’t there for just decoration.",
    },
    {
      question:
        "What's the difference between skincare branding and skincare packaging design? ",
      answer:
        "Branding is the whole identity, the name, the strategy, the visual system. Skincare product packaging design is one output of that system, the physical container a customer actually holds.",
    },
    {
      question:
        "Does DN Designs work with luxury skincare brands? ",
      answer: 
          "Yes. DN Designs works with every kind of skincare brand, whether they need luxury skincare branding, premium skincare branding or minimal skincare branding."
        
    },

    {
      question:
        "What makes skincare packaging design harder than regular product packaging design?",
      answer:
        "Skincare product packaging design has to win the battle of trust, differentiation, and desirability all at once. If it fails to accomplish the job, customers simply walk past it, which means no sales. Moreover, when compared to other product categories, there's noticeably less room for error because of the nature of the products.",
    },

  ];

  const rightFaqs = [
    {
      question: "How does DN Designs land on names and colours for a new skincare brand?",
      answer:
        "Plenty of research, rounds of discussion, an understanding of the product, its positioning and the market - a whole list of things is considered before deciding every brand and design element. Everything, including final name and colour, has to earn its place.",
    },
    {
      question:
        "Can DN Designs rebrand an existing skincare line instead of building a new one?",
      answer:
        "Yes. Our range of branding services also includes rebranding. Rebrands need extra care because there's usually an existing customer base that recognises the old look, so a transition gets built in wherever the brand can afford one.",
    },

    {
      question: "How soon can work actually begin?",
      answer:
        "Usually within a week or two of a proper first conversation, once scope is clear. Beauty and skincare timelines move fast in this market, and DN's onboarding is built to keep pace rather than slow founders down.",
    },

    {
      question:
        "How much does skincare branding cost?",
      answer:
        "It depends heavily on the scope of work. We give a cost estimate once we have understood this. Get in touch with us to discuss your project, so that we can give a proper quote to you.",
    }
  ];

  // form section content
  const FormHead = "Let's Talk Over a Cup of Coffee";
  const FormPara =
    "Somewhere right now, a beauty buyer is choosing between two skincare products purely on how the packaging and brand identity feel in hand. If you’re launching a skincare brand, that's a decision worth influencing before the shelf makes the choice instead. At DN Designs, we build skincare and beauty brands that earn shelf space and repeat buyers, not just compliments. Interested? A cup of coffee, actual or virtual, is usually where that conversation starts.";


  return (
    <div>

         {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "skincare-branding"}`}
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
      {/* <section className="portfolio">
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
      </section> */}



       {/* why f and b */}
            <section className="why-fandb-section">
              <div className="container">
              <div className='why-fandb-section-head-div'>
              <h2 className="why-fandb-section-head">What Makes Skincare   <span className="why-fandb-section-head-span">Branding Challenging 
</span></h2>
<TalkToUs/>
</div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">Skincare buyers read ingredient lists the way other shoppers read reviews, carefully and more than once. And that’s precisely why skincare branding might look calm on the shelf, but underneath, it has to convince the formula won't irritate, won't disappoint, and won't join the pile of half-used bottles under someone's sink. A pretty label doesn't earn trust here; it's earned by a label that tells the truth clearly enough to be believed on the first read.</p>
                    </div>
                  </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">When that trust isn't built in, skincare and beauty brands end up competing purely on price, undercutting a formula that might genuinely be better than the premium alternative next to it. Customers who can't tell a serious beauty skincare branding effort from a rushed one choose whichever name they already recognise, usually the market leader, not the newer, better product quietly sitting beside it on the shelf.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


             {/* case studies section */}
                  {/* case studies our brands section */}
              <OurBrandsSectionHome heading1="Our " heading2="Brand Journals"/> 


              {/*The Protagonists */}
      {/* <section className="appr-pro-anime">
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
 */}

     
              


       {/* FMCG Industries We Brand */}
      {/* <section className="fmcg-industries-we-section">
        <div className="container">
        <div className="fmcg-industries-head-content">
          <h2 className="fmcg-industries-head">
            Supplement Segments  {" "}
            <span className="fmcg-industries-head-span">We Serve</span>
          </h2>
          </div>

          <div className="fmcg-industries-row-div">
          1
            <div className="fmcg-industries-single-col-div">
            
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/supplementbrandingicon1.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Nutrition </p>
            </div>
            2
            <div className="fmcg-industries-single-col-div">
            
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/guthealrhicon2.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Gut Health </p>
            </div>
            3
            <div className="fmcg-industries-single-col-div">
            
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/beutyhealdthewkjd.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Beauty </p>
            </div>
            4
            <div className="fmcg-industries-single-col-div">
     
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/immunityehgdsupplament.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Immunity </p>
            </div>
            5
            <div className="fmcg-industries-single-col-div">
            
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/performanncehebdaswhj.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Performance </p>
            </div>
            6
            <div className="fmcg-industries-single-col-div">
        
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/speciliaesedwellnessede.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Specialised Wellness</p>
            </div>
            7
            <div className="fmcg-industries-single-col-div">
       
               <div className="fmcg-industries-icon-div">
              <img src="https://dndesigns.co.in/uploads/pages/2u3ihbd3huydguguuedu.svg" className="fmcg-industries-icon"></img>
              </div>
              <p className="fmcg-industries-para">Sports </p>
            </div>
            
           
           
          </div>
        </div>
      </section> */}


      {/* everything-a-food */}
      <section className="everything-a-food-section">
        <div className="container">
          <div className="everything-a-food-section-head-div">
            <h2 className="everything-a-food-section-head">
               Everything That Goes   {" "}
              <span className="everything-a-food-section-head-span">
                {" "}
                Into Skincare Brand Design 
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
                      Your brand has to win in a competitive landscape, speak to a specific audience and establish a unique market positioning to stand out and sell. That’s where the right strategy makes the difference. We build this brand strategy for you.
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
                     You have a formula, but no face people recognise and connect with on the shelf. We build the name, logo, colour, voice and tone that make your skincare brand instantly recognisable and credible.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/skiancarelogo-design.jpg"
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
                     Your formula is good, but the pack doesn't say so. Skincare packaging design has to work in a two-second glance, on shelf or on a phone screen, so we design it to look as clean as the product actually is.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/skiancarepackaging-design.jpg"
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
                      Many skincare websites feel disconnected from the packaging. That gap makes buyers hesitate before purchase. We build SEO-optimised websites that reflect the same identity online, build trust, and guide users to purchase.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/skiancarewebsite.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/branding">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      05 /  Communication
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                     Communication Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                     Your customers are left confused if your website, Amazon listing and Instagram grid sound different. We build communication that covers every touchpoint so a customer sees one consistent skincare brand wherever they meet it.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/skiancarecommunication-design.jpg"
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
                      06 /  Launch
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                     Launch & Growth 
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                     A strong brand shouldn’t have a weak debut. We design your GTM (go-to-market) strategy to ensure your brand gets a strong launch. Post-launch support helps fine-tune the brand as real-world feedback comes in. 
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/skiancarelaunch-and-growth.jpg"
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
             From First Call to   {" "}
              <span className="our-stregetic-framework-head-span">
                Launch Day 
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
                    Discovery
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                   We start by understanding your formula, vision, audience and who you're actually up against on the shelf, not just the obvious names. Every decision after this is grounded in what is discovered here, and not on guesswork.
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
                    Positioning
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We define what your skincare brand actually stands for - science-backed skincare, barrier-first care, or anti-hype beauty - specific enough that saying no to the wrong customer becomes as clear as saying yes to the right one.
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
                     Identity Development
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    Names, visuals and tone get built together so the brand feels like one coherent decision, not separate pieces stitched together later. This is where skincare branding either earns its calm, or ends up looking chaotic and unfinished.
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
                     Bringing The Identity To Life
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We take the identity across packaging, digital and in-store, testing how it actually holds up where customers meet it, not just how it looks in a presentation deck. Beauty shelves are unforgiving, so we test for that reality early.
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
                     Launch Support
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                   We stay involved through the go-to-market phase, defining how to launch, where to launch, as well as how to price, distribute and retain customers. With this, we make sure your brand launches strong and creates a desired impact.
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

       {/* cta section */}
      <BookDirectCallCTA/>

     

      {/* stand alone hover section */}
      <section className="standalone-sec-pac">
        <div className="container">
          <div className="row headg-row-div">
            <h2 className="text-center headg">
             The Business Impact of 
              <span className="every-pr">
                {" "}
             Better Skincare Branding  
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
