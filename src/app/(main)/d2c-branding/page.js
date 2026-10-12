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
import PagesHero from '@/Components/PagesHero/PagesHero';
import IndustriesSectionNewLayout from '@/Components/IndustriesSectionNewLayout/IndustriesSectionNewLayout';


// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("d2c-branding", null, false);
  } catch (error) {
    console.log("D2C Branding", error);
    return {
      title: "D2C Branding",
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
            pageData = await getPageById("d2c-branding", null, true);
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
  // let heroLabel = "Building Distinctive CPG Brands From Strategy To Shelf.";
  // let heroHead = "CPG Branding Agency";
  // let heroParaDesc =
  //   "A great product gets you into the aisle. But it’s branding that gets you into a cart and back into that same cart next month. CPG is a crowded, unforgiving category, and shoppers choose between your product and three nearly identical ones in a few seconds. That decision rarely comes down to what's inside the pack. It comes down to whether the brand in front of them looks like it knows what it's doing. That's the entire job of CPG branding: turning a good product into something a stranger trusts enough to pick up without thinking twice. DN Designs works as a CPG branding agency for founders who need that trust built in from day one, not bolted on after the product's already struggling on the shelf.";

  //   let pageHeroimgurl ="https://dndesigns.co.in/uploads/pages/cpg-branding-banner-hero-image.jpg"


   const heading = "D2C Branding Agency";
  const subHeading = "From Scroll To Sale: Building A Brand That Performs. ";
  const para =
    (<>D2C brands don’t have a shopkeeper standing between the product and the buyer's decision. No shelf placement is doing the reassurance job for them. Just a screen, a few seconds of attention, and brands that either earn the clicks and sales or don't. Many D2C founders never see that decision happen. What they do see are carts that got abandoned, ads that didn't convert, and reviews that say "looks a bit off." A D2C brand development agency like DN Designs exists to close that gap: to make sure that D2C brands move from scroll to sale. We help ambitious brands build a loyal customer base in markets crowded with familiar names. </>);

    


     let phaseLabel = "From Product to Brand People Choose";
  let phaseHead = (<>Our D2C  
 <span className="every-pr"> Branding Process 
</span></>);

  const phases = [
    {
      number: "01",
      label: "PHASE ONE",
      title: "Discovery & Category Audit",
      desc: "This first step is crucial. We understand the product and founder’s vision, audit the category, direct competitors, the shelf and the reviews customers are already leaving on similar products. The aim is to understand your product, audience and market, then identify the crucial gap nobody else is occupying.",
    },
    {
      number: "02",
      label: "PHASE TWO",
      title: "Strategy & Positioning",
      desc: "We turn research and insights into a strategic brand direction. Your D2C branding strategy and positioning get locked in this stage. With the two in place, every design decision has a clear purpose and direction going forward. ",
    },

    {
      number: "03",
      label: "PHASE THREE",
      title: "Visual Identity & Packaging System Development",
      desc: "We build logo, colour, typography, graphic and packaging design as one connected system, not separate deliverables signed off in isolation. This is where the positioning becomes something a customer can actually see and recognise at a glance.",
    },

    {
      number: "04",
      label: "PHASE FOUR",
      title: "Prototyping & Testing",
      desc: "Your D2C brand packaging gets mocked up as physical samples, not just flat renders on a screen. Print, texture, and shelf or unboxing behaviour get checked before production commitments are made, because a beautiful file and a beautiful object are not always the same thing.",
    },

    {
      number: "05",
      label: "PHASE FIVE",
      title: "Website Design",
      desc: "We now design your e-commerce website around how your customers actually discover, evaluate and buy. We ensure the website is visually appealing, offers clear product information, guides a frictionless user journey, and finally leads to a smooth purchase and checkout process.",
    },

    {
      number: "06",
      label: "PHASE SIX",
      title: "Launch & Ongoing Support",
      desc: "Post your brand launch, we stay involved through the first campaign push, checking that the ad creative, packaging, and the website are all speaking with one voice. This is usually where brands lose consistency fastest, so it's where we, a D2C branding company, pay the closest attention.",
    },
  ];

  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Fewer Returns",
      description:
        "Return rate drops when packaging and product pages set accurate expectations. Fewer customers open a box expecting something the brand never actually claimed in the first place.",
      image:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagedesktop11.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Sharper Ad Spend ",
      description:
        "Ad spend works harder because every creative has a distinct visual system to lean on, instead of the whole account competing purely on the lowest cost per click.",
      image:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagedesktop22.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Stronger Margins ",
      description:
        "Price stops being the first thing reviewers mention, which means the brand can hold its margin instead of getting dragged into a discount war with cheaper copies.",
      image:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagedesktop33.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Retail Readiness",
      description:
        "Retail buyers take the brand seriously at the first meeting, because the packaging already looks like it belongs on a shelf next to names customers already trust.",
      image:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagedesktop44.jpg",
    },
    {
      id: 5,
      point: "05",
      title: "Investor Confidence ",
      description:
        "Investors read visual consistency as a proxy for operational discipline, so a brand that looks the same everywhere raises fewer questions in a funding conversation.",
      image:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagedesktop55.jpg",
    }
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagemobile11.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagemobile22.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagemobile33.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagemobile44.jpg",
    },
    
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/d2cbrandinghoverimagemobile55.jpg",
    },
  ];

  const leftFaqs = [
    {
      question: "What is D2C branding?  ",
      answer:
        "It’s a process of building a brand that sells directly to consumers, mostly through its own website, app, social media platforms and other online marketplaces. It involves everything, from brand strategy and positioning to identity, packaging and website design.  ",
    },
    {
      question:
        "Why does a D2C brand need branding?",
      answer:
        "Customers often discover, compare and purchase online. Clear branding helps them understand the product, trust its claims, recognise it later and choose it without needing a salesperson to explain the offer.",
    },
    {
      question:
        "How is D2C branding different from branding for a retail brand? ",
      answer: 
          "Retail brands borrow trust from wherever they're sold. D2C brands have to build all of it themselves, on a screen, before a single sale happens."
        
    }
  ];

  const rightFaqs = [
   
    {
      question:
        "What does a D2C branding agency actually do? ",
      answer:
        "A D2C branding agency such as DN Designs handles the entire branding process: positioning, naming, messaging, visual identity design, packaging design and website design. Think of it as the full stack behind how customers discover, perceive and choose your brand before they've even tried what you sell.",
    },

    {
      question: "What's the best packaging for D2C brands in India? ",
      answer:
        (<>Good D2C packaging in India needs to do a few jobs at once:
        <ul>
          <li>Stop the scroll in the crowded D2C space.</li>
          <li>Communicate value to build confidence.</li>
          <li>Drive purchase to earn revenue. </li>
          <li>Survive courier handling without denting.</li>
           <li>Photograph well for an unboxing video. </li>
            <li>And hold up on a physical shelf if the brand ever expands into retail.</li>
          </ul>
          At our D2C branding agency, we build for all from the start.</>),
    },

    {
      question:
        "Can DN Design craft packaging that works for both online and retail shelves? ",
      answer:
        "Yes, that's one of the more common briefs DN Designs gets. Packaging design for D2C brands built for both channels from day one avoids a costly redesign later. ",
    }
    
  ];

  // form section content
  const FormHead = "Let's Talk Over a Cup of Coffee";
  const FormPara =
    "Right now, somewhere, a customer has two tabs open. They are reviewing two competitor D2C products, deciding which one looks worth the risk. That call gets made in seconds, on repeat, every day. If you’re a startup D2C brand, you definitely don’t want to leave that decision to chance. It’s, after all, where your success story begins. At our D2C branding company, we have built several D2C brands successfully from the ground up. Let's talk over a cup of coffee and see how we can shape yours.";


  return (
    <div>

         {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "cpg-branding"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      {/* breadcrump */}
      <Breadcrumb/>

      {/* hero section */}
        {/* <IndustriesPageHero heroLabel={heroLabel} heroHead={heroHead} heroParaDesc={heroParaDesc} pageHeroimgurl={pageHeroimgurl}/> */}

         <section className="branding-hero">
                <PagesHero heading={heading} subHeading={subHeading} para={para} />
              </section>
            

        


    

       {/* work portfolio */}
            <section className="portfolio">
              <div className="container">
                <h2 className="text-center">
                  Our<span className="every-pr"> Work Portfolio</span>
                </h2>

                <div className="row port-row">


                            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
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
                            <h3>1:AM </h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Web Design</h4>
                            <h4 className="our-port-btn">Brand Identity</h4>
                          </div> */}
                        </div>
      
                        <p>
                          Canned Cold Coffee Brand. From logo and identity to website and social media, we brewed a bold and pretty cool brand that Gen Z love vibing with. 
                        </p>
                      </div>
                    </div>
                  </div>
               
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

          <img src="https://dndesigns.co.in/uploads/pages/let.jpg" className="img-fluid"/>
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Let’s Supp</h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Label Design</h4>
                            <h4 className="our-port-btn">Brand Identity</h4>
                          </div> */}
                        </div>
      
                        <p>
                         Nutraceutical Brand. We built a cohesive identity, packaging, and digital design to reflect simplicity, consistency, and care - inspiring trust and making wellness a daily ritual.
                        </p>
                      </div>
                    </div>
                  </div> 


                       {/* <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
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
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Packaging</h4>
                            <h4 className="our-port-btn">Web Design</h4>
                          </div>
                        </div>
      
                        <p>
                        Cocktail bomb brand. From identity and packaging to website and social media strategy, we designed a brand as fun and explosive as the product itself.
                        </p>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/nwjkebhdn.webp" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Wlue's</h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Packaging</h4>
                          </div> */}
                        </div>
      
                        <p>
                         Makhana brand. With a retro superhero-inspired identity and packaging, we gave it main-character energy, making it a Gen Z favourite and the snack aisle hero.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                          <div className="row port-row">

                            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
                    <div className="port-div">
                             {/* <video
            src="https://dndesigns.co.in/uploads/pages/fmcgnectarpure.jpg.jpeg"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className=""
          /> */}
          <img src="https://dndesigns.co.in/uploads/pages/fmcgnectarpure.jpg.jpeg" className="img-fluid"/>
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>NectarPure</h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Logo Design</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div> */}
                        </div>
      
                        <p>
                          Whey protein brand. We crafted a clean, minimal identity and label design to position it as a lifestyle product, not another gym supplement. 
                        </p>
                      </div>
                    </div>
                  </div>


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
                            <h3>3Sisters</h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">UI/UX</h4>
                            <h4 className="our-port-btn">Web Design</h4>
                          </div> */}
                        </div>
      
                        <p>
                        Premium Non-Alcoholic Drinks Brand. We built the digital home for a full lineup of their non-alcoholic beverages that are anything but ordinary.
                        </p>
                      </div>
                    </div>
                  </div>

              
                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/lppackgingorgainc.gif" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Iorganic</h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div> */}
                        </div>
      
                        <p>
                          Organic Food & Dairy brand. We brought a refined, nature-inspired aesthetic to their festive and corporate gift boxes, ensuring the unboxing experience is as special as what's inside.
                        </p>
                      </div>
                    </div>
                  </div>


                

                </div>



                           <div className="row port-row">
                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                        <img src="https://dndesigns.co.in/uploads/pages/newupdatednbrendKozu.jpg.jpeg" className="img-fluid"></img>
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Kozu</h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Logo Design</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div> */}
                        </div>
      
                        <p>
                        Caffeinated water brand. For this first-of-its-kind beverage in India, we designed a bold and minimal brand identity and packaging to help it stand out, build trust and boost recall.
                        </p>
                      </div>
                    </div>
                  </div>

              
                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/industrypagesiwehjdsmiatra.jpg.jpeg" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Miatra</h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Logo Design</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div> */}
                        </div>
      
                        <p>
                          For Miatra, a makhana brand from the Mithila region of Bihar, we crafted a complete visual identity and label design inspired by the famous Mithila art. The design reflects the art’s visual richness and Bihar’s makhana heritage.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
                    <div className="port-div">
                      
           {/* <img src="https://dndesigns.co.in/uploads/pages/cta-swipperrewbdfjdoodh-soda.jpg.jpeg" className='img-fluid'></img> */}
            <video src="https://dndesigns.co.in/uploads/videos/doodhsodavideoforindustrypageswjendewjdb.mp4" playsInline autoPlay muted loop className="img-fluid"></video>
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Doodh Soda</h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Web Design</h4>
                            <h4 className="our-port-btn">Brand Identity</h4>
                          </div> */}
                        </div>
      
                        <p>
                          A category first: India’s first milk-based soda brand. We built a brand identity and label design that felt just as unexpected, bold, expressive, confident and fun as the product itself. 
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
              <h2 className="why-fandb-section-head">Why D2C Branding   <span className="why-fandb-section-head-span">Matters 
</span></h2>
<TalkToUs/>
</div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">In D2C, branding carries more weight because the customer meets the product without borrowed trust. There’s no salesperson to make the pitch and no retail store to build credibility. Customers judge the product’s name, visual language, claims, website, reviews and packaging before they judge its performance. Every detail answers an unspoken question: is this brand credible and worth purchasing, or is it another product making promises online? Strong D2C branding reduces hesitation at this exact moment. It turns first impressions into sales and first-time buyers into repeat customers. It builds a recognisable experience customers can return to, recommend and recognise across channels.</p>
                    </div>
                  </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">On the other hand, weak D2C branding creates friction before the product gets a chance. A crowded product page, unclear benefits, a generic logo or an overdesigned pack confuses the buyer. They struggle to understand what is being sold and why it deserves consideration. On social media, the brand disappears among better-presented competitors. In search, low trust suppresses clicks and conversions. In the customer’s mind, the product becomes interchangeable, forcing the business to compete through discounts, chase paid acquisition and risk being mistaken for a lesser competitor. That’s where a D2C branding agency like DN Designs becomes critical. We build brands that attract, convert, and keep customers coming back.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


             {/* case studies section */}
                  {/* case studies our brands section */}
              <OurBrandsSectionHome heading1="Our " heading2="Brand Journals"/> 


            
      {/* everything-a-food */}
      <section className="everything-a-food-section">
        <div className="container">
          <div className="everything-a-food-section-head-div">
            <h2 className="everything-a-food-section-head">
            Everything Your Brand    {" "}
              <span className="everything-a-food-section-head-span">
                Needs to Grow 
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
                     D2C consumers have endless options at their fingertips. They need a reason to choose you. That’s the strategy we build: right from defining your target audience to establishing your brand’s positioning, unique value and voice.
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
                     A logo built in isolation rarely survives contact with a checkout page and an Instagram grid at the same time. We design complete identity systems built for that stretch, so the brand holds together across every surface it has to live on.
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
                     Packaging for D2C brands has to work twice. Once as a photograph online and then as a physical object in someone's hands post-unboxing. We design for both moments, so the product that arrives matches the promise that sold it. 
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
                     Website & Storefront Design 

                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      A poor website can be a recipe for D2C brand failure. We design digital storefronts that capture attention, clearly communicate value, offer an engaging user experience and turn simple browsing into buying.
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
                    Ad creative, product copy and social content built without a shared system end up looking like three different brands. We build the visual and verbal language once, so every campaign reinforces the same brand instead of diluting it.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foodandbaveragesupdatedbrand-communication.jpg"
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
                 Launch & Growth Support
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                    Most brands are strongest on day one and lose definition by month six as new people touch the assets. At our D2C brand design agency, we stay on through the early growth phase to support your brand as it evolves. 
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
            <p className="our-stregetic-framework-label-para">From Product to Brand People Choose</p>
            <h2 className="our-stregetic-framework-head">
             Our D2C      {" "}
              <span className="our-stregetic-framework-head-span">
               {"  "}  Branding Process 
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
                    Discovery & Category Audit
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                 This first step is crucial. We understand the product and founder’s vision, audit the category, direct competitors, the shelf and the reviews customers are already leaving on similar products. The aim is to understand your product, audience and market, then identify the crucial gap nobody else is occupying.
                    </p>
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
                   Strategy & Positioning
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We turn research and insights into a strategic brand direction. Your D2C branding strategy and positioning get locked in this stage. With the two in place, every design decision has a clear purpose and direction going forward. 
                    </p>
                   
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
                     Visual Identity & Packaging System Development
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We build logo, colour, typography, graphic and packaging design as one connected system, not separate deliverables signed off in isolation. This is where the positioning becomes something a customer can actually see and recognise at a glance.
                    </p>
                   
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
                     Prototyping & Testing
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                 Your D2C brand packaging gets mocked up as physical samples, not just flat renders on a screen. Print, texture, and shelf or unboxing behaviour get checked before production commitments are made, because a beautiful file and a beautiful object are not always the same thing.
                    </p>
                   
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
                    Website Design
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
             We now design your e-commerce website around how your customers actually discover, evaluate and buy. We ensure the website is visually appealing, offers clear product information, guides a frictionless user journey, and finally leads to a smooth purchase and checkout process.
                    </p>
                  
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>


          {/* phase 6 */}
          <AOSProvider>
            <div data-aos="fade-left" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE SIX
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                    Launch & Ongoing Support
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                 Post your brand launch, we stay involved through the first campaign push, checking that the ad creative, packaging, and the website are all speaking with one voice. This is usually where brands lose consistency fastest, so it's where we, a D2C branding company, pay the closest attention.
                    </p>
                   
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
             The Commercial Impact of 
              <span className="every-pr">
                {" "}
             Strong D2C Branding 
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

              {/* industries cards section */}
      <IndustriesSectionNewLayout/>

   
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
