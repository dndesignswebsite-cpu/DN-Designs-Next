export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./photography-01.css";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import Form from "@/Components/Form/Form";
import PhotographyPrompt from "@/Components/PhotographyPrompt/PhotographyPrompt"
import PhotographyHoverLinks from "@/Components/PhotographyHoverLinks/PhotographyHoverLinks"
import PhotographyPromptAnother from "@/Components/PhotographyPromptAnother/PhotographyPromptAnother";
import PhotographyHero from "@/Components/PhotographyHero/PhotographyHero";

import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import ConceptualPhotographyArrow from "@/Components/ConceptualPhotographyArrow/ConceptualPhotographyArrow";



// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("photography", null, false);
  } catch (error) {
    return {
      title: "Photography",
      robots: "noindex, nofollow",
    };
  }

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
      pageData = await getPageById("photography", null, true);
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
  

   // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "It’s difficult to be seen and heard in a crowd, isn’t it? There is just so much noise. It is the same with product market – too many brands, lots of promise and intense competition. Rising above this chaos is what helps you establish your identity and secure your position in this competitive landscape. This is what we, as a branding and design agency, do for you. Curious to know more about us? Let’s sit down, enjoy a cup of coffee and discuss your project.";
    // const pageName = "about-us";
  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "photography"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


    <PhotographyHero/>


     {/* Numbers that Define Us */}
      <section className="numbers-that-define-us">
        <div className="container">

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
               <h2 className="numbers-that-define-us-head">Photography Beyond Images</h2>
               <p className="numbers-that-define-us-para">Visuals reveal brand ideas, stories and messages in a way words cannot. Want to tell yours through compelling visuals? Connect with us for professional photography services. From food and beverages to jewellery, cosmetics, apparel, and home decor, we work across industries to visually tell brand and product stories effectively. We transform how customers see, trust, and choose your brand. </p>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            {/* <div className="hover-section-to-div">
              <a href="#theme-based" className="hover-section-to-anchor-link"><h2 className="hover-section-to-div-head">AI Photography</h2></a> <span className="hover-section-to-div-head-span">Projects launched, refined, an.</span>
            </div>

            <div className="hover-section-to-div">
              <a href="#e-commerce" className="hover-section-to-anchor-link"><h2 className="hover-section-to-div-head">E-Commerce</h2></a> <span className="hover-section-to-div-head-span">Projects launched, refined, an.</span>
            </div>

            <div className="hover-section-to-div">
              <a href="#content-creation" className="hover-section-to-anchor-link"><h2 className="hover-section-to-div-head">Theme Based</h2></a> <span className="hover-section-to-div-head-span">Projects launched, refined, an.</span>
            </div>

            <div className="hover-section-to-div">
              <a href="#content-creation" className="hover-section-to-anchor-link"><h2 className="hover-section-to-div-head">Content Creation</h2></a> <span className="hover-section-to-div-head-span">Projects launched, refined, an.</span>
            </div>  */}
            <PhotographyHoverLinks/>
            
            </div>
          </div>

          <div className="driven-by-curiosity-content" id="ai-photography">
             <h2 className="driven-by-curiosity-content-head">AI Product Photography</h2>
              <p className="driven-by-curiosity-content-para">Give your product photography an AI edge. It’s sharper, smarter and faster.</p> 
          </div>

          {/* <PhotographyPrompt/> */}
            <PhotographyPromptAnother/>

          <div className="row theme-based-content-row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para-theme">
                No, we don’t generate your brand and product images using AI. Instead, we enhance them with our AI product photography service. We begin with real product photography and use AI to make it more impactful. Better background, lighting, colour and texture. Result? Better images that look premium and flawless, never fake and fabricated. 
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4 at-echelon-mid-col-desktop">
              <div className="at-echelon-mid-col ">
                <TalkToUs />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para-theme">
                Still sceptical? Here’s what makes it even better. You don’t just get high-quality images; you get authentic and campaign-ready images right on time, whenever you need them for promotions or campaigns. No repeat shoots. No unnecessary spending. No time lost. Perfect for brands that need quality, consistency, speed and scale without compromise.
              </p>
            </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4 at-echelon-mid-col-mobile">
              <div className="at-echelon-mid-col ">
                <TalkToUs />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* content-creation */}
      <section className="content-creation-section" id="content-creation">
        <div className="container">
          <h2 className="content-creation-head">Content Creation</h2>

          <div className="row content-creation-main-row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="content-creation-main-col">
                <p className="content-creation-main-col-label-para">
                  One Product
                </p>
                <div className="row content-creation-main-sub-row">
                  <div className="col-3 content-creation-main-sub-col-left">
                    {/* <img
                      src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                      className="img-fluid content-creation-main-sub-col-left-img"
                    ></img> */}
                     <video
          src="https://dndesigns.co.in/uploads/videos/photographypageB&FFinal.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="img-fluid content-creation-main-sub-col-left-img"
        />
                  </div>

                  <div className="col-6 content-creation-main-sub-col-mid">
                    {/* <img
                      src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                      className="img-fluid content-creation-main-sub-col-mid-upper-img"
                    ></img> */}
                               <video
          src="https://dndesigns.co.in/uploads/videos/photographycontentcreation10video (1).mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="img-fluid content-creation-main-sub-col-mid-upper-img"
        />
                    <div className="row content-creation-main-sub-mid-col-super-sub-row">
                      <div className="col content-creation-main-sub-mid-col-super-sub-col">
                        {/* <img
                          src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-left-img"
                        ></img> */}
                            <video
          src="https://dndesigns.co.in/uploads/videos/photographypagecontentcreationvideo6.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-left-img"
        />
                      </div>
                      <div className="col content-creation-main-sub-mid-col-super-sub-col">
                        {/* <img
                          src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-right-img"
                        ></img> */}
                            <video
          src="https://dndesigns.co.in/uploads/videos/photographypagecontentcreationvideo7.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-right-img"
        />
                      </div>
                    </div>
                  </div>

                  <div className="col-3 content-creation-main-sub-col-right">
                    {/* <img
                      src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                      className="img-fluid content-creation-main-sub-col-right-img"
                    ></img> */}
                           <video
          src="https://dndesigns.co.in/uploads/videos/photographypagecontentcreationvideo3.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="img-fluid content-creation-main-sub-col-right-img"
        />
                  </div>
                </div>

                <div className="content-creation-content">
                  <h2 className="content-creation-col-head">
                     Countless Stories
                  </h2>
                  <div className="content-creation-col-para-logo-div">
                    <p className="content-creation-col-para-logo-div-logo-para">
                      We capture authentic product shots and transform them into high-performing visuals tailored for every digital and retail platform.
                    </p>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0700/6037/6225/files/promotes.svg?v=1779782296"
                      className="content-creation-col-para-logo-div-logo"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="content-creation-main-col">
                <p className="content-creation-main-col-label-para">
                 Video Campaigns
                </p>
                <div className="row content-creation-main-sub-row">
                  <div className="col-3 content-creation-main-sub-col-left">
                    {/* <img
                      src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                      className="img-fluid content-creation-main-sub-col-left-img"
                    ></img> */}
                           <video
          src="https://dndesigns.co.in/uploads/videos/photographypagecontentcreationvideo5.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="img-fluid content-creation-main-sub-col-left-img"
        />
                  </div>
                  <div className="col-6 content-creation-main-sub-col-mid">
                    {/* <img
                      src="https://dndesigns.co.in/uploads/pages/10.webp"
                      className="img-fluid content-creation-main-sub-col-mid-upper-img"
                    ></img> */}
                              <video
          src="https://dndesigns.co.in/uploads/videos/photographypagecontentcreationvideo4.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="img-fluid content-creation-main-sub-col-mid-upper-img"
        />
                    {/* <div className="row content-creation-main-sub-mid-col-super-sub-row">
                      <div className="col content-creation-main-sub-mid-col-super-sub-col">
                        <img
                          src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-left-img"
                        ></img>
                      </div>
                      <div className="col content-creation-main-sub-mid-col-super-sub-col">
                        <img
                          src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-right-img"
                        ></img>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-3 content-creation-main-sub-col-right">
                    {/* <img
                      src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                      className="img-fluid content-creation-main-sub-col-right-img"
                    ></img> */}
                           <video
          src="https://dndesigns.co.in/uploads/videos/photographypagecontentcreationvideo2.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
          className="img-fluid content-creation-main-sub-col-right-img"
        />
                  </div>
                </div>
                <div className="content-creation-content">
                  <h2 className="content-creation-col-head">
                     Stories Set in Motion
                  </h2>
                  <div className="content-creation-col-para-logo-div">
                    <p className="content-creation-col-para-logo-div-logo-para">
                     Tell stories that inspire action. We deliver compelling videos created specifically for product launches, brand promotions and digital marketing.
                    </p>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0700/6037/6225/files/promotes.svg?v=1779782296"
                      className="content-creation-col-para-logo-div-logo"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* at-echelon */}
      <section className="at-echelon-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para">
                To succeed in a competitive market, brands and products need to perform everywhere customers find them. We craft visual content that does exactly that: perform at every point of interaction, whether it’s your website, social media, digital campaigns, or marketing collateral. Our creative photography is designed to win shelf, screen, and campaign. 
              </p>
            </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4 at-echelon-mid-col-desktop">
              <div className="at-echelon-mid-col ">
                <TalkToUs />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para">
               Here’s what you can expect from our photography studio. Captivating images and videos that demand attention, not something that exudes generic stock-photo energy. Content planned around what your customer actually needs to know (features, functionality, or key benefits) before they buy, and tailored specifically for the platform’s requirements.  
              </p>
            </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4 at-echelon-mid-col-mobile">
              <div className="at-echelon-mid-col ">
                <TalkToUs />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* theme based */}
      <section className="theme-based-section" id="conceptual-photography">
        <div className="container">
          <h2 className="theme-based-head">Conceptual<br></br> Photography </h2>
          {/* <video
            src="https://dndesigns.co.in/uploads/videos/finaljhhh.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className=""
          /> */}
          <div className="conceptual-photgraphy-div-desktop">
          <ConceptualPhotographyArrow/>
          </div>
          <div className="conceptual-photgraphy-div-mobile">
          <div className="conceptual-photgraphy-div-mobile-img-div">
            <img src="https://dndesigns.co.in/uploads/pages/conceptualphotography1.jpg" className="img-fluid conceptual-photgraphy-div-mobile-img"/>
          </div>

          <div className="conceptual-photgraphy-div-mobile-img-div">
            <img src="https://dndesigns.co.in/uploads/pages/conceptualphotography2.jpg" className="img-fluid conceptual-photgraphy-div-mobile-img"/>
          </div>

          <div className="conceptual-photgraphy-div-mobile-img-div">
            <img src="https://dndesigns.co.in/uploads/pages/newoneresizedconceptulphotographyimage.jpg" className="img-fluid conceptual-photgraphy-div-mobile-img"/>
          </div>

          <div className="conceptual-photgraphy-div-mobile-img-div">
            <img src="https://dndesigns.co.in/uploads/pages/conceptualphotography3.jpg" className="img-fluid conceptual-photgraphy-div-mobile-img"/>
          </div>

          <div className="conceptual-photgraphy-div-mobile-img-div">
            <img src="https://dndesigns.co.in/uploads/pages/conceptualphotography4.jpg" className="img-fluid conceptual-photgraphy-div-mobile-img"/>
          </div>
          </div>

          <div className="row theme-based-content-row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para-theme">
                Imagine a skincare product surrounded by water droplets, fresh botanicals, and soft textures. It tells the story of purity and hydration. It evokes a feeling of freshness, care and trust. Want your product to narrate a story, communicate ideas and messages, and evoke certain emotions, too? Our conceptual photography service is designed just for you.
              </p>
            </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4 at-echelon-mid-col-desktop">
              <div className="at-echelon-mid-col ">
                <TalkToUs />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para-theme">
               Curious about our creative process? It all begins with brainstorming and mood board creation. A final visual direction, including colour palette, styling direction, props, backdrop, and creative concept, is locked before the actual shoot begins 
No guesswork, no wasted production time, and no on-set surprises. Just visuals that tell a cohesive brand story and meet campaign objectives.

              </p>
            </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4 at-echelon-mid-col-mobile">
              <div className="at-echelon-mid-col ">
                <TalkToUs />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E- Commerce Photography */}
      <section className="e-commerce-photography" id="e-commerce">
        <div className="container">
          <div className="row e-commerce-photography-row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <h2 className="e-commerce-photography-head">
                E-Commerce Photography{" "}
              </h2>
              <p className="e-commerce-photography-para">
                Make your products irresistible online with our e-commerce product photography services. We create visuals your customers can't scroll past.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 mt-4">
              {/* <video
                src="https://dndesigns.co.in/uploads/videos/threeSistersVideo.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className=""
              /> */}

              <img src="https://dndesigns.co.in/uploads/pages/eccomercePhotography.gif" className="img-fluid"/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para">
                Why settle for ordinary product listings when you can deliver a powerful brand experience? Our professional product photography services help your product look the absolute best and win hearts on Amazon, Flipkart, Shopify, and other marketplaces. They help communicate quality, build trust, and give customers a reason to click "Buy Now." 
              </p>
            </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4 at-echelon-mid-col-desktop">
              <div className="at-echelon-mid-col ">
                <TalkToUs />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para">
                We deliver more value, every step of the way. Expect images that are compliant with and optimised for specific online marketplaces and storefronts. And about the process? It’s simple by design, powerful by outcome. We shoot on a standard white background, with every angle, aspect and feature captured with precision. 
Your customers get a complete 360° product view. 

              </p>
            </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4 at-echelon-mid-col-mobile">
              <div className="at-echelon-mid-col ">
                <TalkToUs />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form">
         <Form FormHead={FormHead} FormPara={FormPara} />
      </section>
    </div>
  );
}

export default page;
