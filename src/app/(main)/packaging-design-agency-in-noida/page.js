export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from 'react';
import "./packaging-design-agency-in-noida.css"
import HomePageHeroNew from '@/Components/HomePageHeroNew/HomePageHeroNew';
import PackagingDesignSwipper from '@/Components/PackagingDesignSwipper/PackagingDesignSwipper';
import OurBrandsSectionHome from '@/Components/OurBrandsSectionHome/OurBrandsSectionHome';
import BookADirectCallNewCTASection from '@/Components/BookADirectCallNewCTASection/BookADirectCallNewCTASection';
import BookDirectCallCTA from '@/Components/BookDirectCallCTA/BookDirectCallCTA';
import IndustriesSectionNewLayout from '@/Components/IndustriesSectionNewLayout/IndustriesSectionNewLayout';
import CTAMarqueSwipper from '@/Components/CTAMarqueSwipper/CTAMarqueSwipper';
import Link from 'next/link';
import Faqs from '@/Components/Faqs/Faqs';
import Form from '@/Components/Form/Form';

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";


// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("packaging-design-agency-in-noida", null, false);
  } catch (error) {
    console.log("Packaging Design Agency In Noida", error);
    return {
      title: "Packaging Design Agency in Noida",
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
      pageData = await getPageById("packaging-design-agency-in-noida", null, true);
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
  const title = "Packaging Design Agency in Noida: For Packaging That Speaks Before Your Product Does ";
  const description =
    "Packaging should be eye-catching and give customers a reason to buy. As a packaging design agency in Noida, we create packaging that brings your brand to life and makes your product hard to pass.";


    // form section content
      const FormHead = "Ready to Make Your Packaging Stand Out?";
      const FormPara =
        "Whether you want a packaging design for a single product or an entire SKU range, we're here to help you figure out the right direction. Share what's on your mind, and let's create designs that stand out, reflect your brand identity, highlight what makes your product unique and eventually help it get chosen. Contact us today. Let’s discuss your project and put the best packaging designs forward.";
    
      // faqs content
      const leftFaqs = [
        {
          question:
            "Do you design packaging for international brands, or only Indian brands?",
          answer:
            (<>We work with both domestic and international brands. For each market, we keep consumer preferences, cultural sensitivities, regulatory requirements and retail expectations in mind when designing our packaging.</>),
        },
        {
          question: "Are you able to redesign the packaging of an existing product?",
          answer:
            (<>Yes, we can help you <Link href="/packaging-design" className='inter-linking-link'>redesign your existing product packaging design</Link> so it better suits changing market trends and customers’ expectations.</>),
        },
        {
          question: "Do you take into account legal compliance when designing packaging?",
          answer:
            "Yes. We follow all the regulations applicable to your product category and target market and create a legally compliant packaging design.",
        },
        {
          question: " How long does the packaging design process take?",
          answer:
            "The packaging design process typically takes 3 to 4 weeks. However, the final timelines may vary depending on your brand objectives, number of product variants and feedback cycles.",
        },
        {
          question: "How do I get started with DN Designs for packaging design?",
          answer:
            "Call us, drop us an email or simply fill out our contact form. Tell us about your vision for the brand, and we will apply our experience and expertise to bring it to life.",
        },
      ];

      const rightFaqs = [
          {
            question: "How do I choose the right packaging design agency in Noida?",
            answer:
              "Before finalising an agency, make sure they understand your vision. Take a look at their work portfolio and understand their work process. Pricing and timelines matter, so make sure you choose an agency that aligns with your budget and deadlines.",
          },
          {
            question: "Can packaging design help increase product sales?",
            answer:
              "Yes, effective packaging design can attract attention, communicate product benefits and influence purchase decisions.",
          },
          {
            question: "Does DN Designs create custom packaging designs for different product sizes and variants?",
            answer:
              (<>Yes, we do provide <Link href="/packaging-design" className='inter-linking-link'>customised packaging design services</Link> for different sizes, formats and product variants. We ensure each product packaging shines on its own while still retaining overall brand visual consistency.</>),
          },
          {
            question: " Does DN Designs provide packaging design for FMCG and food products?",
            answer:
              "Yes. We create customised FMCG and food packaging design that reflects your brand identity and connects with your target audience.",
          },
          {
            question: "Do you only provide packaging design or packaging printing as well?",
            answer:
              (<>As a <Link href="/" className='inter-linking-link'>branding and packaging design company</Link>, we focus on designing exceptional brand design along with package, pouch and label designs for your products. For packaging printing, we can put you in touch with a few of our reliable printers.</>),
          }
        ];
      
    

      
    return (
        <div>

          {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "packaging-design-agency-in-noida"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}
      
             {/*.....hero...... */}
                 {/* <HomePageHero title={title} description={description} /> */}
                 <HomePageHeroNew title={title} description={description}/>
                 


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
                    {/* <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Brand Identity</h4>
                    </div> */}
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
                    {/* <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Packaging</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div> */}
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
                    {/* <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div> */}
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
                    {/* <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div> */}
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
               {/* <video
                  src="https://dndesigns.co.in/uploads/videos/fmcg3sistersvideo.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                /> */}
                <img src="https://dndesigns.co.in/uploads/pages/Untitled-sunny-singh.webp" className="img-fluid"></img>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Pureluxe</h3>
                    </div>
                    {/* <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div> */}
                  </div>

                  <p>
                   Premium Protein Bar Brand. We designed the packaging and digital experience that celebrates indulgence and taste while balancing nutrition and health.
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
                <img src="https://dndesigns.co.in/uploads/pages/egwdjjbjhewFLUKE.jpg.jpeg" className="img-fluid"></img>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Fluke</h3>
                    </div>
                    {/* <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div> */}
                  </div>

                  <p>
                    For this functional beverage brand, we crafted a complete brand identity, including a minimal, premium logo and can design that communicates clarity, focus and functional energy at a glance.
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
                      <img src="https://dndesigns.co.in/uploads/pages/rekwhrfdjbrrat_03.jpg.jpeg" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Brrat</h3>
                          </div>
                          {/* <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Logo Design</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div> */}
                        </div>
      
                        <p>
                         For Brrat Energy drink, our work spanned brand identity, logo, can packaging and website design - each built to hit as hard and be as unapologetic as the drink itself.
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


      {/* Why You Should Work With Us */}
      <section className='why-you-should-work-section'>
        <div className='container'>
            <h2 className='why-you-should-work-section-head'>Why You Should <span className='why-you-should-work-section-head-span'>Work With Us</span></h2>
            <div className='row'>

                <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    <div className='why-you-should-work-section-col'>
                        <img src="https://dndesigns.co.in/uploads/pages/packging-design-noida-hero-image.jpg.jpeg" className='why-you-should-work-section-img img-fluid'></img>
                    </div>
                </div>

                <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    <div className="why-you-should-work-section-col">
                        <p className='why-you-should-work-section-para'>Each product has a story, and the packaging should present it well. It must also convey key information customers expect, simply. And visual appeal? That’s non-negotiable. Together, these elements help your product stand out and drive sales in a competitive market. At our packaging design studio in Noida, we do just that: craft captivating packaging design that gets noticed and earns revenue. Over the years, our expert team has delivered multiple successful product packaging design projects for Noida, Greater Noida or NCR based businesses.</p>
                        <p className='why-you-should-work-section-para'>Moreover, we aren’t just a design studio; we are a creative partner for your brand. From branding and packaging to website design, digital marketing, photography, and animation, we offer end-to-end branding and marketing services to help you build and launch a strong brand.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Our Packaging Design Services */}
      <section className='our-packging-design-servics-section'>
        <div className='container'>
            <div className='row our-packging-design-servics-section-head-row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                    <h2 className='our-packging-design-servics-section-head-row-head'>Our Packaging  <span className='our-packging-design-servics-section-head-row-head-span'>Design Services</span></h2>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                    <p className='our-packging-design-servics-section-head-row-para'>From initial research to final design, we offer end-to-end packaging and label design services. Our goal? To craft packaging that reflects your brand’s personality and clearly communicates the product value, so your consumers understand what you’re offering and why they should choose you over others. </p>
                    {/* <p className='our-packging-design-servics-section-head-row-para'>Our services include: </p> */}
                </div>
            </div>

            <PackagingDesignSwipper/>
        </div>
      </section>


      {/* our brand jurnals */}
      <OurBrandsSectionHome heading1="Our " heading2="Brand Journals"/>

      {/* Packaging Design Across Industries */}
      <section className='packaging-design-across-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <div className='packaging-design-across-section-col'>
                <h2 className='packaging-design-across-section-head'>
                  Packaging Design  <span className='packaging-design-across-section-head-span'>Across Industries</span>
                </h2>
                <p className='packaging-design-across-section-para'>Each product has different packaging needs. For a snack brand, flavour and appetite appeal matter more, whereas for a skincare brand, benefits, ingredients and efficacy are crucial. We take into consideration industry requirements, customer expectations and category-specific legal compliance, and then shape packaging around what each product needs to communicate. All this while keeping your brand identity intact. Here’s a quick glimpse of a few industries we work for:</p>
                <div className='packaging-design-across-section-col-points-div'>
                  <span className='packaging-design-across-section-col-points'>FMCG</span>
                  <span className='packaging-design-across-section-col-points'>Food & Beverage</span>
                  <span className='packaging-design-across-section-col-points'>Health & Wellness</span>
                  <span className='packaging-design-across-section-col-points'>Jewellery</span>
                  <span className='packaging-design-across-section-col-points'>Skincare & Beauty</span>
                  <span className='packaging-design-across-section-col-points'>Fashion & Lifestyle</span>
                  <span className='packaging-design-across-section-col-points'>Electronics & Consumer Durables</span>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <div className='image-col'>
                <img src="https://dndesigns.co.in/uploads/pages/packging-degn-across-packaging-design-agency-in-noida.jpg" className='img-fluid'></img>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* book a call with founder */}
       <BookDirectCallCTA/>

       {/* Packaging Design for Indian & International Consumers */}
       <section className='packaging-design-india-consumers-section'>
        <div className='container-fl'>
          <div className='row g-0'>

            <div className='col-12 cl-sm-12 col-md-12 col-lg-6'>
              <div className='packaging-design-india-consumers-section-col'>
                   <img src="https://dndesigns.co.in/uploads/pages/packging-design-for-indian-packaging-design-agency-in-noida.jpg" className='packaging-design-india-consumers-section-col-img img-fluid'></img>
              </div>
            </div>

            <div className='col-12 cl-sm-12 col-md-12 col-lg-6 packaging-design-india-consumers-section-row'>
              <div className='packaging-design-india-consumers-section-col'>
                <h2 className='packaging-design-india-consumers-section-col-head'>Packaging Design for <span className='packaging-design-india-consumers-section-col-head-span'> Indian & International Consumers</span></h2>
                <p className='packaging-design-india-consumers-section-col-para'>Consumers worldwide have unique preferences, purchasing patterns, and expectations when it comes to products and their pricing. A label design that appeals to one group of customers may not have the same impact on another group. In India, especially, regional preferences and cultural influences also affect a consumer’s response to different packaging designs.  </p>

                  <p className='packaging-design-india-consumers-section-col-para'>When crafting packaging designs, therefore, we first understand the target audience’s preferences (language, design sensibilities), regional/cultural elements and local regulatory requirements. We ensure the final product is legally compliant, connects with your target consumers and drives conversions.  </p>
              </div>
            </div>

          </div>
        </div>
       </section>


       {/* Key Elements of Effective Packaging Design */}

       <section className='key-elements-effective-section'>
        <div className='container'>
          <div className='key-elements-effective-section-container'>
            <h2 className='key-elements-effective-section-container-heading'>Key Elements of Effective Packaging Design</h2>
            <p className='key-elements-effective-section-container-para'>Good packaging is attractive, informative, functional and aligns with your brand’s vision. That’s why every element in our packaging design has a reason for being there. It contributes to the whole product experience. A few key elements include:</p>
            <div className='key-elements-effective-section-span-div'>
              <span className='key-elements-effective-section-span'>Brand’s Logo</span>
              <span className='key-elements-effective-section-span'>Visual Design (colours, typography, graphics & imagery)</span>
              <span className='key-elements-effective-section-span'>Clear and Concise messaging</span>
              <span className='key-elements-effective-section-span'>Unique Selling Points</span>
              <span className='key-elements-effective-section-span'>SKU distinction</span>
              <span className='key-elements-effective-section-span'>Information Hierarchy</span>
              <span className='key-elements-effective-section-span'>Regulatory Compliance & Labelling </span>
              <span className='key-elements-effective-section-span'>Functionality & Usability  </span>
                 <span className='key-elements-effective-section-span'>Digital & Shelf-Appeal</span>
            </div>
          </div>
        </div>
       </section>


       {/* How We Approach Packaging Design */}
       <section className='how-we-approach-section'>
        <div className='container'>
          <div className='row how-we-approach-section-row g-0'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <div className='how-we-approach-section-col'>
                <img src="https://dndesigns.co.in/uploads/pages/section-packaging-approach.jpg.jpeg" className='img-fluid'></img>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <div className='how-we-approach-section-col-content'>
                
                <h2 className='how-we-approach-section-col-head'>How We Approach Packaging Design</h2>
                <p className='how-we-approach-section-col-para'>With us, a packaging design process always starts with an understanding of your product, your audience and the competitive landscape. Research-backed strategy forms the foundation of the overall process, which moves in a structured way, incorporating your feedback at every step. Typically, this is what our packaging design process looks like:</p>
                <ul className='how-we-approach-section-col-list'>
                  <li className='how-we-approach-section-col-list-item'>Understanding your brand </li>
                  <li className='how-we-approach-section-col-list-item'>Research the market and audience </li>
                  <li className='how-we-approach-section-col-list-item'>Locking in the positioning </li>
                  <li className='how-we-approach-section-col-list-item'>Defining the design direction </li>
                   <li className='how-we-approach-section-col-list-item'>Developing & designing packaging concepts</li>
                    <li className='how-we-approach-section-col-list-item'>Refining the design</li>
                     <li className='how-we-approach-section-col-list-item'>Execution & final delivery</li>
                </ul>

                <img src="https://dndesigns.co.in/uploads/pages/packgingdesignagecyswipperladder.png" className='img-fluid how-we-approach-section-ladder-image'></img>
              </div>
            </div>

          </div>
        </div>
       </section>


             {/* IndustriesSectionNewLayout */}       
              <IndustriesSectionNewLayout/>

              {/* Your Packaging Design Partner in Noida0 */}

              <section className='your-packaging-design-noida-section'>
                <div className='container'>
                  <h2 className='your-packaging-design-noida-section-heading'>Your Packaging Design <span className='your-packaging-design-noida-section-heading-span'>Partner in Noida</span></h2>

                   <div className='row'>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-5 mt-4'>
                    <div className='your-packaging-design-noida-section-img-col'>
                    <img src="https://dndesigns.co.in/uploads/pages/partener-in-noida-packaging-design-agency-in-noida.jpg" className='your-packaging-design-noida-section-img img-fluid'></img>
                    </div>
                  </div>

                  <div className='col-12 col-sm-12 col-md-12 col-lg-7 mt-4'>
                    <div  className='your-packaging-design-noida-section-ewdjhe'>
                      <div>
                      <p className='your-packaging-design-noida-section-content-col'>Your product needs packaging that reflects its identity, communicates its value and inspires your audience to choose it over competitors’ products. Here, at DN Designs, we partner with FMCG, food, beverage, skin care, fashion and D2C brands to create strategic, compelling packaging that does exactly that. We design to win your audience. Our approach is to think outside the box while simultaneously understanding the demands of customers and the market. </p>
                      <p className='your-packaging-design-noida-section-content-col'>So, if you’re searching for a packaging design agency that can create impactful product packaging designs, pause here. We are your packaging design partner in Noida. Reach out to us, and let’s discuss your project. </p>
                      </div>
                      <img src="https://dndesigns.co.in/uploads/pages/partner-in-noida-egpackaging-design-agency-in-noida.jpg" className='your-packaging-design-noida-section-content-col-img img-fluid'></img>
                    </div>
                  </div>
                </div>
                </div>
              </section>


              {/* what brewing in dn */}
              <CTAMarqueSwipper/>




               {/* faqs */}
              
                    <section className="faqs">
                      <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
                    </section>

                    
              
                    {/* Form */}
                    <Form FormHead={FormHead} FormPara={FormPara}  />
                    








        </div>
    );
}

export default Page;
