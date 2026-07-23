export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./fnb.css";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import ContactUsBtn from "@/Components/ContactUsBtn/ContactUsBtn";
import Image from "next/image";
import Link from "next/link";
import StandAlonePackaging from "@/Components/StandAlonePackaging/StandAlonePackaging";
import Faqs from "@/Components/Faqs/Faqs";
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb';
import Form from "@/Components/Form/Form";
import StrategicFrameworkFNB from "@/Components/StrategicFrameworkFNB/StrategicFrameworkFNB";
import AOSProvider from "@/Components/AosProvider/AosProvider";

// import Script from "next/script";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";



// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("food-beverage-branding", null, false);
  } catch (error) {
    console.log("Food Beverage Branding", error);
    return {
      title: "Food Beverage Branding",
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
    let imageUrl = "https://dndesigns.co.in/uploads/pages/";

    // ---
        await connectDB();
        let pageData;
        try {
          pageData = await getPageById("food-beverage-branding", null, true);
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
      
    // standalone
      const cards = [
        {
          id: 1,
          point: "01",
          title: "Visibility",
          description:
            "A brand that looks different and says something clear gets noticed faster, whether it's sitting on a shelf or showing up in someone's feed.",
          image: "https://dndesigns.co.in/uploads/pages/desktopfoodandbaverageshoverimageone.jpg",
        },
        {
          id: 2,
          point: "02",
          title: "Conversion",
          description:
            "When the messaging actually speaks to why someone should buy, more people follow through. Online carts fill up, and so do baskets at launch. ",
          image: "https://dndesigns.co.in/uploads/pages/desktopfoodandbaverageshoverimagefour.jpg",
        },
        {
          id: 3,
          point: "03",
          title: "Margin ",
          description:
            "Great F&B branding improves not just sales, but overall profitability by reducing price sensitivity and encouraging consistent repeat purchases. ",
          image: "https://dndesigns.co.in/uploads/pages/desktopfoodandbaverageshoverimagethree.jpg",
        },
        {
          id: 4,
          point: "04",
          title: "Loyalty",
          description:
            "A brand that feels captivating, credible and consistent is what brings a customer back a second and third time. It wins long-term loyalty.",
          image: "https://dndesigns.co.in/uploads/pages/desktopfoodandbaverageshoverimagetwo.jpg",
        },
      ];
    
      const mobileCrads = [
        {
          mobileImage: "https://dndesigns.co.in/uploads/pages/mobilefoodandbaverageshoverimageone.jpg",
        },
        {
          mobileImage: "https://dndesigns.co.in/uploads/pages/mobilefoodandbaverageshoverimagefour.jpg",
        },
        {
          mobileImage:
            "https://dndesigns.co.in/uploads/pages/mobilefoodandbaverageshoverimagethree.jpg",
        },
        {
          mobileImage: "https://dndesigns.co.in/uploads/pages/mobilefoodandbaverageshoverimagetwo.jpg",
        },
      ];
    
      const leftFaqs = [
        {
          question: "What does a food and beverage branding agency actually do?",
          answer:
            "A food and beverage branding agency helps create brands that stand out amidst tough competition and drive purchase. It's less about making things 'look pretty' and more about making decisions: what a brand says, how it looks, what its values and promises are, how it is different from competitors and why customers should choose it. A good agency makes your brand recognisable, memorable and scalable through identity, packaging and website design as well as a strong GTM strategy. ",
        },
        {
          question: "Do you work with D2C food brands or only established FMCG companies?",
          answer:
            "Both, and honestly we enjoy the contrast. Startups need someone to help shape an idea into something sellable. Legacy brands usually need someone to help them stop looking dated without losing what people already trust them for.",
        },
        {
          question:
            "What's the difference between food branding and food packaging design?",
          answer:
            (<> Food branding is all about defining how the brand appears and communicates; what it stands for, what its promise is and how it is different from competitors. Packaging is where all these show up physically, on a product, in someone's hand. Strong branding gives your customers a reason to choose you, while strong packaging ensures customers notice, trust and choose your product.</>)
        },
    
        {
          question: "Why is packaging design so important for food and beverage brands?",
          answer:
            "Because for most products, packaging is the pitch. No salesperson exists to explain why it's worth buying (think of online stores and big retail stores). The pack has to do that job, fast, before someone's hand moves to a competitor's product instead.",
        },
    
        {
          question:
            "Do your packaging designs adhere to food labelling regulations?",
          answer:
            "Yes, as a food and drink branding agency, we ensure that our packaging designs effectively integrate legally required information on the label.",
        },
      ];
    
      const rightFaqs = [
        {
          question: "Can you help launch my food & beverage brand?",
          answer:
            "Surely, our GTM services are designed specifically for this. We help your brand prepare for the launch and expansion into different areas, regions and channels.",
        },
        {
          question: "What specific industries within the larger food and beverage category do you work in?",
          answer:
            "As a food & beverage branding agency, we work across the entire sector, be it packaged food, popular beverages, functional beverages, dairy, snacks, bakery, confectionery, frozen foods, health foods, spices, condiments, ready-to-eat meals, and more. ",
        },
    
        {
          question:
            "Can you help rebrand an existing food or beverage product?",
          answer:
            "Yes, we can certainly help rebrand an existing food or beverage product. And the tricky part here isn't the redesign; it's ensuring your customers who already know and buy the product aren’t confused and alienated. A rebrand done carelessly can lose trust faster than it builds it.",
        },
    
        {
          question:
            "Can a branding agency help with both packaging and digital marketing?",
          answer:
            "Yes, definitely. At DN Designs, we offer both as part of our branding and marketing services.",
        },
    
        {
          question: "How long does a typical food and beverage branding project take?",
          answer:
            (<>It completely depends on the scope of work and the revisions required. </>)
        },
      ];
    
      // form section content
      const FormHead = "Let's Talk Over a Cup of Coffee";
      const FormPara =
        "Every brand on a shelf right now started as someone's bet on an idea. We've spent years sitting with founders at exactly that stage, turning a product they believe in into something people actually reach for. If you're picturing your brand as the one shoppers grab without a second thought, that's a conversation worth having. No pitch deck required: just coffee and an honest look at where this could go.";
    
  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "food-beverage-branding"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

       {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      

      {/* fnb page hero */}
      <section className="fnb-page-hero">
        <div className="container">
          <div className="row">

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="fnb-page-hero-content-col">
                <p className="fnb-page-hero-content-col-label-para">Turning Recipes and Formulas Into Brands People Trust </p>
                <h1 className="fnb-page-hero-content-col-head">Food And Beverage Branding Agency </h1>
                <p className="fnb-page-hero-content-col-desc-para">
                  A food or beverage brand gets judged in seconds, on a shelf, in a delivery app, or on a scroll, much before anyone actually tastes the product itself. Packaging, logo, messaging, colour, and other elements do the convincing first. And with D2C brands and legacy FMCG names, all fighting for the same eyeballs, that first impression has never mattered more. DN Designs works as a food and beverage branding agency, crafting strategy, identities, packaging, and go‑to‑market systems that turn products into brands people remember and buy from. 
                </p>
                <div className="fnb-page-hero-content-cta-div">
                    <TalkToUs/>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                <div className="fnb-page-hero-img-col">
                    <img src="https://dndesigns.co.in/uploads/pages/Enlite17.webp" className="img-fluid fnb-page-hero-img-col-img"></img>
                </div>
            </div>

          </div>
        </div>
      </section>




       {/* work portfolio */}
            <section className="portfolio">
              <div className="container">
                <h2 className="text-center">
                  Our<span className="every-pr"> Work Portfolio</span>
                </h2>

                <div className="row port-row">
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
                          For the protein bar brand ‘Pureluxe’, we crafted a premium packaging design to appeal to its health-conscious and taste-driven consumers. The design captures the essence of indulgence and sophistication while balancing nutrition and flavour appeal. Each of the three variants reflects a modern and premium identity and creates a strong shelf presence.
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
                         For the cocktail bomb brand, Mr. Bomzy, we created a packaging design that conveyed a sense of fun and ease (of making a drink). Moreover, we assisted them in selecting an appropriate box—a window box with a magnetic flap—for a better user experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
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
                  </div>


             
                </div>

                          <div className="row port-row">
                  <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/thames-5.webp" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Thames</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Packaging</h4>
                            <h4 className="our-port-btn">Website</h4>
                          </div>
                        </div>
      
                        <p>
                          Thames specialises in offering healthy snacking options to its customers. For its various products, like dry fruits, oats, muesli and protein bars, it collaborated with us to create package designs that reflected health and refreshment. We, no doubt, delivered.
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
                          Makhana brand Wlue’s wanted to establish itself as a premium snacking brand globally. Its target audience were Gen Zers. Accordingly, we created colourful and eye-catching packaging designs for all its variants to appeal to its young and fun-loving audience.
                        </p>
                      </div>
                    </div>
                  </div>


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
                          Enlite’s healthy sparkling mineral water & prebiotic drinks come in a variety. Our can design for them included character creation around the brand name. We also used design elements to convey a sense of freshness and calmness.
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
              <h2 className="why-fandb-section-head">Why Food & Beverage Businesses <span className="why-fandb-section-head-span">Need A Branding Agency</span></h2>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">Food and beverage brands don't compete on logic alone. They compete on instinct, trust and split-second shelf appeal. A shopper scanning a quick-commerce grid or a retail aisle decides in seconds whether a pack deserves a second look. Most brands lose that moment before they even get a chance to explain why their product is better. And trust, that’s paramount. Unlike clothing or tech brands, F&B products call for a different level of consumer trust because they’re all about health. A brand that feels unfamiliar and untrustworthy is rarely chosen and stands the risk of being forgotten quickly.</p>
                    </div>
                  </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">This is why food and beverage branding needs a different approach, one that not only creates desire, but also inspires confidence. A food and beverage branding agency understands this category. It therefore builds strategy, identity, packaging and messaging that win at first glance, communicate key information and differentiation efficiently and create instant trust. It ensures consistency across all touchpoints like signage, packaging, and digital presence. That consistency is what brings in the first purchase and then converts it into lasting trust and growing business profit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* everything-a-food */}

            <section className="everything-a-food-section">
              <div className="container">
              <div className="everything-a-food-section-head-div">
                <h2 className="everything-a-food-section-head">Everything a Food Brand Needs, <span className="everything-a-food-section-head-span"> Under One Roof</span></h2>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                    <div className="everything-a-food-section-col">
                      <div className="everything-a-food-section-col-content-div">
                        <p className="everything-a-food-section-col-content-div-para-label">01 / STRATEGY</p>
                        <h2 className="everything-a-food-section-col-content-div-head">Brand Strategy</h2>
                        <p className="everything-a-food-section-col-content-div-para-desc">Before any design work begins, we define what a food or beverage brand stands for: its positioning, values and the promise it can actually keep. This foundation shapes every decision that follows, from naming to packaging to campaign tone.</p>
                      </div>
                      <img src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedtwo.jpg" className="img-fluid everything-a-food-section-col-img"></img>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                    <div className="everything-a-food-section-col">
                      <div className="everything-a-food-section-col-content-div">
                        <p className="everything-a-food-section-col-content-div-para-label">02 / Identity</p>
                        <h2 className="everything-a-food-section-col-content-div-head">Brand Identity</h2>
                        <p className="everything-a-food-section-col-content-div-para-desc">A brand's identity is more than a logo; it's the visual and verbal language that makes a product recognisable across a shelf, a delivery app and a social feed. As a food branding and design agency, we build identity systems that scale as SKUs and categories expand.</p>
                      </div>
                      <img src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedthree.jpg" className="img-fluid everything-a-food-section-col-img"></img>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                    <div className="everything-a-food-section-col">
                      <div className="everything-a-food-section-col-content-div">
                        <p className="everything-a-food-section-col-content-div-para-label">03 / Design</p>
                        <h2 className="everything-a-food-section-col-content-div-head">Packaging Design</h2>
                        <p className="everything-a-food-section-col-content-div-para-desc">As a food and drink branding agency, we build packaging that wins attention first, and trust next. Together, they win customers. Our designs meet regulatory requirements and perform equally well on physical retail shelves, quick commerce, and marketplaces.  </p>
                      </div>
                      <img src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedfour.jpg" className="img-fluid everything-a-food-section-col-img"></img>
                    </div>
                  </div>
                </div>


                
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                    <div className="everything-a-food-section-col">
                      <div className="everything-a-food-section-col-content-div">
                        <p className="everything-a-food-section-col-content-div-para-label">04 / Communication</p>
                        <h2 className="everything-a-food-section-col-content-div-head">Brand Communication</h2>
                        <p className="everything-a-food-section-col-content-div-para-desc">From product copy to social posts, brand communication is where a food brand's personality either lands or falls flat. We build communication that speaks with clarity and confidence, so a brand connects emotionally with its target audience and appears credible.</p>
                      </div>
                      <img src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedone.jpeg" className="img-fluid everything-a-food-section-col-img"></img>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                    <div className="everything-a-food-section-col">
                      <div className="everything-a-food-section-col-content-div">
                        <p className="everything-a-food-section-col-content-div-para-label">05 / Website</p>
                        <h2 className="everything-a-food-section-col-content-div-head">Website Design</h2>
                        <p className="everything-a-food-section-col-content-div-para-desc">In the digital space, a website is often a food or beverage brand's first real storefront, and it needs to build trust as fast as a shelf pack does in a store. We designs and develop websites that convert browsers into buyers, with SEO built in from day one.</p>
                      </div>
                      <img src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedsix.jpg" className="img-fluid everything-a-food-section-col-img"></img>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                    <div className="everything-a-food-section-col">
                      <div className="everything-a-food-section-col-content-div">
                        <p className="everything-a-food-section-col-content-div-para-label">06 / GTM</p>
                        <h2 className="everything-a-food-section-col-content-div-head">GTM Strategy</h2>
                        <p className="everything-a-food-section-col-content-div-para-desc">Launching a food or beverage product takes more than a good recipe: it takes the right launch and expansion strategy, listing strategy, and retail approach. Our GTM strategy maps how a brand actually reaches its first customers and builds momentum.</p>
                      </div>
                      <img src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedfive.jpg" className="img-fluid everything-a-food-section-col-img"></img>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* stand alone hover section */}
            <section className="standalone-sec-pac">
        <div className="container">
          <div className="row headg-row-div">
            <h2 className="text-center headg">
              What Actually Changes {" "}
              <span className="every-pr"> When Branding's Done Right </span>{" "}
            </h2>
          </div>
        </div>
        <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />
      </section>



      {/* OUR STRATEGIC FRAMEWORK desktop*/}
      <div className="fnb-our-framework-dektop">
      <StrategicFrameworkFNB/>
      </div>

      {/* OUR STRATEGIC FRAMEWORK mobile*/}
       <section className="our-stregetic-framework fnb-our-framework-mobile">
        <div className="container">
        <div className="our-stregetic-framework-head-content-div">
        <p className="our-stregetic-framework-label-para">Our Process</p>
        <h2 className="our-stregetic-framework-head">How We Take a Brand From <span className="our-stregetic-framework-head-span">Idea to Shelf </span></h2>
        </div>

         {/* phase 1 */}
         <AOSProvider>
         <div data-aos="fade-right" data-aos-duration="1500">
          <div className="row our-stregetic-framework-row" >
          <div className="col">
            <div className="our-stregetic-framework-col-content-div">
            <p className="our-stregetic-framework-col-content-div-label-para">PHASE ONE</p>
            <h2 className="our-stregetic-framework-col-content-div-head">Discovery & Category Audit</h2>
            <p className="our-stregetic-framework-col-content-div-desc-para">We start by understanding your product and studying competitors, shelf context, consumer behaviour, and regulatory constraints. Everything is researched and clarified before a single design concept is proposed, so each recommendation is grounded in how the market actually works.</p>
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
            <p className="our-stregetic-framework-col-content-div-label-para">PHASE TWO</p>
            <h2 className="our-stregetic-framework-col-content-div-head">Strategy & Positioning Planning</h2>
            <p className="our-stregetic-framework-col-content-div-desc-para">Next comes a defined brand territory, not a mood board but a clear point of view on what the brand stands for, who it's for and why it deserves shelf or app space.</p>
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
            <p className="our-stregetic-framework-col-content-div-label-para">PHASE THREE</p>
            <h2 className="our-stregetic-framework-col-content-div-head">The Design Implementation</h2>
            <p className="our-stregetic-framework-col-content-div-desc-para">This is where design takes centre stage. Brand identity, packaging and websites are designed and developed with your vision and feedback integrated at every step. </p>
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
            <p className="our-stregetic-framework-col-content-div-label-para">PHASE FOUR</p>
            <h2 className="our-stregetic-framework-col-content-div-head">Go-to-Market Planning</h2>
            <p className="our-stregetic-framework-col-content-div-desc-para">At this stage, we build your GTM strategy: where to sell, who to sell to, as well as how to price and distribute products and acquire and retain customers. This strategy ensures your business launches strong and grows consistently across physical and digital platforms. </p>
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
            <p className="our-stregetic-framework-col-content-div-label-para">PHASE FIVE</p>
            <h2 className="our-stregetic-framework-col-content-div-head">Launch & Monitoring</h2>
            <p className="our-stregetic-framework-col-content-div-desc-para">Once a brand is live, we track the response and refine messaging, packaging, or positioning if needed.  </p>
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



      


       {/* Why DN Designs? desktop*/}
                  <section className="why-dn-designs">
                    <div className="container">
                      <div className="row">
                       
                        <div className="div-of-abs-img">
                             <img
                          src={"https://dndesigns.co.in/uploads/pages/creative_agency_5.jpg"}
                          alt="why-dn-designs"
                          className="abs-img abs-img-1"
                        />
            
                        <img
                          src={"https://dndesigns.co.in/uploads/pages/creative_agency_1.jpeg"}
                          alt="why-dn-designs"
                          className="abs-img abs-img-2"
                        />
            
                        <img
                          src={"https://dndesigns.co.in/uploads/pages/creative_agency_2.jpg"}
                          alt="why-dn-designs"
                          className="abs-img abs-img-3"
                        />
            
                        <img
                          src={"https://dndesigns.co.in/uploads/pages/creative_agency_3.jpg"}
                          alt="why-dn-designs"
                          className="abs-img abs-img-4"
                        />
            
                        <img
                          src={"https://dndesigns.co.in/uploads/pages/creative_agency_4.jpg"}
                          alt="why-dn-designs"
                          className="abs-img abs-img-5"
                        />
                        </div>
            
                      </div>
            
                      <div className="row why-dn-sec-content-row">
                        <div className="col-12 col-lg-6">
                          <h2 className="why-dn-head">Why DN Designs? </h2>
                          <p className="why-dn-para">
                           Strong branding helps F&B businesses stand out, build loyalty, lower the CAC and increase profitability. At DN Designs, we work across positioning, strategy, packaging and design to make the brand impossible to ignore. We help food startups, D2C businesses, FMCG, snack and beverage brands build an identity and shelf presence that survive tough competition and achieve success. Businesses show up with an idea and leave with a brand built to compete from day one. Whatever the brand needs to take on its market (strategy, packaging, a website that actually converts), our food branding experts build it, and build it to win.
                          </p>
                        </div>
            
                        <div className="col-12 col-lg-6 why-dn-sec-content-btn-col">
                          <TalkToUs/>
                        </div>
                      </div>
                    </div>
                  </section>
            
                  {/* Why DN Designs? mobile*/}
            
                  <div className="why-dn-designs-mobile">
                    <div className="container">
                    <div className="why-dn-designs-mobile-content">
                    <h2 className="why-dn-designs-mobile-head">Why DN Designs?</h2>
                      <p className="why-dn-designs-mobile-para">Strong branding helps F&B businesses stand out, build loyalty, lower the CAC and increase profitability. At DN Designs, we work across positioning, strategy, packaging and design to make the brand impossible to ignore. We help food startups, D2C businesses, FMCG, snack and beverage brands build an identity and shelf presence that survive tough competition and achieve success. Businesses show up with an idea and leave with a brand built to compete from day one. Whatever the brand needs to take on its market (strategy, packaging, a website that actually converts), our food branding experts build it, and build it to win.</p>
                      <TalkToUs/>
                      </div>
            
                      <div className="row">
                        <div className="col-6">
                           <img
                          src={"https://dndesigns.co.in/uploads/pages/creative_agency_5.jpg"}
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
                          src={"https://dndesigns.co.in/uploads/pages/creative_agency_1.jpeg"}
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
            <Form
              FormHead={FormHead}
              FormPara={FormPara}  
            />
            
                </div>
  );
}

export default page;
