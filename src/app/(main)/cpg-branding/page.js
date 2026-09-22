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
    seo = await getPageById("cpg-branding", null, false);
  } catch (error) {
    console.log("CPG Branding", error);
    return {
      title: "CPG Branding",
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
            pageData = await getPageById("cpg-branding", null, true);
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
  let heroLabel = "Building Distinctive CPG Brands From Strategy To Shelf.";
  let heroHead = "CPG Branding Agency";
  let heroParaDesc =
    "A great product gets you into the aisle. But it’s branding that gets you into a cart and back into that same cart next month. CPG is a crowded, unforgiving category, and shoppers choose between your product and three nearly identical ones in a few seconds. That decision rarely comes down to what's inside the pack. It comes down to whether the brand in front of them looks like it knows what it's doing. That's the entire job of CPG branding: turning a good product into something a stranger trusts enough to pick up without thinking twice. DN Designs works as a CPG branding agency for founders who need that trust built in from day one, not bolted on after the product's already struggling on the shelf.";

    let pageHeroimgurl ="https://dndesigns.co.in/uploads/pages/cpg-branding-banner-hero-image.jpg"

    


     let phaseLabel = "How We Work";
  let phaseHead = (<>From First Call 
 <span className="every-pr"> to Shelf 
</span></>);

  const phases = [
    {
      number: "01",
      label: "PHASE ONE",
      title: "Discovery",
      desc: "We start with research: the product, the category, the audience and who you're genuinely up against on the shelf, not just the obvious three names. Every strategy decision in the next phase is built on what is discovered in this stage.",
    },
    {
      number: "02",
      label: "PHASE TWO",
      title: "Strategy & Positioning ",
      desc: "We define the brand’s unique value proposition, what it stands for and, more importantly, who it is for. This strategy and positioning form the basis of every design decision that follows.",
    },

    {
      number: "03",
      label: "PHASE THREE",
      title: "Identity Development ",
      desc: "Naming, logo, colour system, font system, messaging and tone get developed together so the brand reads as one decision, not separate elements stitched together later. ",
    },

    {
      number: "04",
      label: "PHASE FOUR",
      title: "Packaging and Website Design",
      desc: "We now design your packaging and website, ensuring your brand identity is consistently reflected in both to build trust. We also design both with conversion in mind.",
    },

    {
      number: "05",
      label: "PHASE FIVE",
      title: "Testing & Launch",
      desc: "Finally, it’s time to launch. We test the designs, make required modifications, chart a GTM strategy and finally launch your CPG product in the market.",
    },
  ];

  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Shelf Pull",
      description:
        "Distinct identity and packaging break a product out of a row of look-alikes, turning a passing glance into an actual reach for the pack.",
      image:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejndesktop11.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Retailer Confidence",
      description:
        "Strong brands not only win customers; they also win retailers' confidence. Retailers reorder brands that look like they'll keep performing.",
      image:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejndesktop22.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Pricing Power",
      description:
        "A brand that signals quality strengthens perceived value and supports premium pricing. No questions asked.",
      image:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejndesktop33.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Faster Category Read",
      description:
        "Clear branding instantly tells shoppers whether a product is premium, everyday or better for you. This helps faster decisions and reduces friction at the POP.",
      image:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejndesktop44.jpg",
    },
    {
      id: 5,
      point: "05",
      title: "A Brand Built to Grow",
      description:
        "A consistent system across packaging and digital means every future launch starts with earned trust instead of starting from zero all over again.",
      image:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejndesktop55.jpg",
    }
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejnmobile11.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejnmobile22.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejnmobile33.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejnmobile44.jpg",
    },
    
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/cpgbrandinghoverimageswejnmobile55.jpg",
    },
  ];

  const leftFaqs = [
    {
      question: "What services do CPG branding agencies usually offer? ",
      answer:
        "A CPG branding agency like DN Designs offers a whole spectrum of branding services: from research and strategy development to identity design, packaging design, digital marketing, photography and animation creation.",
    },
    {
      question:
        "Does DN Designs work with new CPG brands and product launches? ",
      answer:
        "Yes. At DN Designs, we love working with both early-stage CPG brands as well as already established ones ready to launch new products or variants.",
    },
    {
      question:
        "Can DN Designs develop the complete branding and packaging for a CPG product?",
      answer: 
          "For sure. DN Designs can take your CPG product through the complete branding and packaging design journey. The idea is to create a brand that appears consistent, trustworthy and worth choosing across all physical and digital touchpoints."
        
    },

    {
      question:
        "Can DN Designs create a packaging system for multiple SKUs? ",
      answer:
        "Yes, we can create a complete packaging system where each SKU stands out with distinctive personality and still looks like part of the same brand family. This is very crucial when you plan to launch multiple products.",
    },
      {
      question:
        "Can DN Designs rebrand an existing product instead of building from scratch?",
      answer:
        "Yes. If you’re looking for an agency to rebrand your CPG brand, you can contact us. We can rebrand your existing product, so you don’t need to build it from the ground up. Rebrands need extra care since there's usually an existing customer base that recognises the current look. So we plan your rebrand in a way that you don’t lose your current customer base.",
    },
     {
      question: "Does DN Designs consider print and production requirements during CPG product packaging design?",
      answer:
        "Yes, we consider the practicalities while designing because a design that doesn’t work beyond the screen is of no use. We also take into account material, print processes, dimensions, finishes, legibility and production constraints while designing your CPG product.",
    },

  ];

  const rightFaqs = [
   
    {
      question:
        "Does DN Designs help with CPG brand launch communication?",
      answer:
        "Yes. Other than designing your brand identity and packaging, we also design and develop your communication strategy. This includes product photography, brand video shoots, animation, website development, digital marketing and marketing collateral creation.",
    },

    {
      question: "Does DN Designs only work with food and beverage CPG brands?",
      answer:
        "No, DN Designs works as a branding agency for CPG brands across food, drinks, household and personal care.",
    },

    {
      question:
        "What makes CPG branding harder than branding in other categories?",
      answer:
        "Retail is unforgiving, shelf space is limited, and a shopper decides in seconds. There's far less room to explain yourself than most categories allow, so the branding has to do all the convincing upfront.",
    },
      {
      question:
        "How long does a CPG branding or packaging project take?",
      answer:
        "Every project is different. Sometimes, there is a single product, whereas at other times an entire lineup of SKUs is involved. Both require different timelines. Design complexities and the number of revisions required also affect timelines. So, in short, there is no fixed timeline. We give you a timeline once we have understood your project.",
    },
     {
      question:
        "How much does CPG branding and packaging design cost?",
      answer:
        "Again, the project requirements determine the final cost. We provide a tailored quote after we’ve discussed your project and understood its scope.",
    },
     {
      question:
        "How soon can work actually start?",
      answer:
        "Usually within a week or two once scope is clear. CPG timelines move fast, particularly around retail deadlines and DN Designs’ onboarding is built to keep pace rather than slow a founder down.",
    },
  ];

  // form section content
  const FormHead = "Let's Talk Over a Cup of Coffee";
  const FormPara =
    "Right now, as you read this, somewhere, a shopper is scrolling, scanning and deciding what makes it into their cart. It’s a split-second decision, often shaped by how your product looks and feels. Essentially, your branding. You don’t want to leave that moment to chance. After all, how your product performs in that moment can influence its market success. DN Designs has spent years working for CPG brands that needed to win that exact moment. Trust us, it’s more than just looking good. Want to discuss more? A cup of coffee, actual or virtual, is usually where that conversation starts.";


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
         <IndustriesPageHero heroLabel={heroLabel} heroHead={heroHead} heroParaDesc={heroParaDesc} pageHeroimgurl={pageHeroimgurl}/>


    

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
                            <h4 className="our-port-btn">Label Design</h4>
                            <h4 className="our-port-btn">Brand Identity</h4>
                          </div>
                        </div>
      
                        <p>
                          Sparkling Mineral Water & Prebiotic Drinks Brand. We gave it a vibrant yet calming identity: a logo, a character and a can that fizzes with personality and freshness.
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
                  </div>

                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
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
                         Makhana brand. With a retro superhero-inspired identity and packaging, we gave it main-character energy, making it a Gen Z favourite and the snack aisle hero.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                          <div className="row port-row">
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
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Packaging</h4>
                            <h4 className="our-port-btn">Web Design</h4>
                          </div>
                        </div>
      
                        <p>
                        Premium Non-Alcoholic Drinks Brand. We built the digital home for a full lineup of their non-alcoholic beverages that are anything but ordinary.
                        </p>
                      </div>
                    </div>
                  </div>

              
                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
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
                          Premium Protein Bar Brand. We designed the packaging and digital experience that celebrates indulgence and taste while balancing nutrition and health.
                        </p>
                      </div>
                    </div>
                  </div>


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
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Web Design</h4>
                            <h4 className="our-port-btn">Brand Identity</h4>
                          </div>
                        </div>
      
                        <p>
                          Canned Cold Coffee Brand. From logo and identity to website and social media, we brewed a bold and pretty cool brand that Gen Z love vibing with. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>



                           <div className="row port-row">
                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                                {/* <video
            src="https://dndesigns.co.in/uploads/videos/fmcg3sistersvideo.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className=""
          /> */}<img src="https://dndesigns.co.in/uploads/pages/ourbrandsworkindusrtrypageskozu.jpg" className="img-fluid"></img>
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Kozu</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Packaging</h4>
                            <h4 className="our-port-btn">Web Design</h4>
                          </div>
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
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          For Miatra, a makhana brand from the Mithila region of Bihar, we crafted a complete visual identity and label design inspired by the famous Mithila art. The design reflects the art’s visual richness and Bihar’s makhana heritage.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
                    <div className="port-div">
                             {/* <video
            src="https://dndesigns.co.in/uploads/videos/fmcgatoneamvideo.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className=""
          />
           */}
           <img src="https://dndesigns.co.in/uploads/pages/cta-swipperrewbdfjdoodh-soda.jpg.jpeg" className='img-fluid'></img>
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Doodh Soda</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Web Design</h4>
                            <h4 className="our-port-btn">Brand Identity</h4>
                          </div>
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
              <h2 className="why-fandb-section-head">The Real Challenge   <span className="why-fandb-section-head-span">in CPG Branding  
</span></h2>
<TalkToUs/>
</div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">Retail shelves and e-commerce grids are both ruthless in the same way. They reward whatever looks most decided, not always whatever tastes or performs best. A CPG brand without a clear point of view tends to blend into the row around it. Once that happens, price becomes the only leverage a founder has left to pull. That's a losing position when the product is genuinely better than the market leader beside it. Shoppers can't taste conviction from across an aisle; they only see it. And a brand that doesn't commit to a point of view reads as one that isn't sure of itself.</p>
                    </div>
                  </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">Several founders come looking for a CPG-focused branding agency only after a launch underperforms. By then, the damage isn't just a missed sale; it runs deeper. Weak branding costs CPG brands a retailer's confidence in reordering the product at all. That's a far harder thing to win back than a single week of soft sales. Buyers remember which brands looked uncertain on shelf long after the numbers are forgotten. Rebuilding that trust later always costs more than building it properly the first time. That's why branding has to be decided before launch, not patched together after it stalls.</p>
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
               What Goes Into Building    {" "}
              <span className="everything-a-food-section-head-span">
                a CPG Brand
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
                      Brand Strategy & Positioning
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                     When CPG brands try to speak to everyone, they end up being remembered by no one. We narrow that down to a position specific enough to actually stick. It’s the groundwork that guides every design decision going forward.
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
                     A logo alone doesn't build shelf trust. The entire branding needs to work. We build a full identity system: name, mark, colour, graphics, voice and message tone, so a shopper reads quality and intent in under two seconds. 
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
                     This is where CPG design and branding earns its keep. Packaging has to work at arm's length in a store, and as a thumbnail online, so we design for both distances. Compliance is considered from the start.
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
                      Many CPG brands look sharp on pack but forgettable and frustrating on their own website. We build robust websites that reflect brand identity, offer a good user experience, and guide customers to action.
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
                    It is the total output of what you say and how you say it. We build communication that holds everywhere, so customers experience one consistent personality, not five different people wearing the same logo. 
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
                  GTM Strategy
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                    A strong brand needs an equally strong launch. We build your GTM strategy, so your product enters the right market, reaches the right consumers and creates a consistent experience across every touchpoint. 
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
            <p className="our-stregetic-framework-label-para">How We Work</p>
            <h2 className="our-stregetic-framework-head">
             From First Call     {" "}
              <span className="our-stregetic-framework-head-span">
               {"  "}  to Shelf
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
                 We start with research: the product, the category, the audience and who you're genuinely up against on the shelf, not just the obvious three names. Every strategy decision in the next phase is built on what is discovered in this stage.
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
                    We define the brand’s unique value proposition, what it stands for and, more importantly, who it is for. This strategy and positioning form the basis of every design decision that follows.
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
                     Identity Development 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    Naming, logo, colour system, font system, messaging and tone get developed together so the brand reads as one decision, not separate elements stitched together later. 
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
                     Packaging and Website Design
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                   We now design your packaging and website, ensuring your brand identity is consistently reflected in both to build trust. We also design both with conversion in mind.
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
                     Testing & Launch 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                  Finally, it’s time to launch. We test the designs, make required modifications, chart a GTM strategy and finally launch your CPG product in the market.
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
             The Payoff: What Strong 
              <span className="every-pr">
                {" "}
             CPG Branding Actually Buys You
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
