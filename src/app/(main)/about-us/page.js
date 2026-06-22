export const dynamic = "force-dynamic";
export const revalidate = 0;

import AboutUsZoomSection from '@/Components/AboutUsZoomSection/AboutUsZoomSection';
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb';
import PagesHero from '@/Components/PagesHero/PagesHero';
import React from 'react'
import CreativeAgencySwipper from "@/Components/CreativeAgencySwipper/CreativeAgencySwipper";
import "./about-us-version-01.css"
import OurConstant from '@/Components/OurConstant/OurConstant';
import AboutUsHoverPage from '@/Components/AboutUsHoverPage/AboutUsHoverPage';
import Faqs from '@/Components/Faqs/Faqs';
import Form from '@/Components/Form/Form';
import Link from 'next/link';

// import Script from "next/script";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Image from "next/image";



// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("about-us", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "About Us",
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
      pageData = await getPageById("about-us", null, true);
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
  

    // hero section content
  const heading = "A Creative Studio";
  const subHeading = "Let’s Design, Develop and Promote Your Brand";
  const para =
    "Launching a new business, but not really sure how to create a standout brand? Don’t worry, many startups struggle with the same thought. This is where we come in. We are a creative brand design studio and your trusted partner at every step of your branding journey. We understand your vision and craft a powerful brand that customers remember. Do you want to know more about us? Come along and discover who we are, what motivates us and the services we offer to build a winning brand for you.";


    // city pages slider data
    let cityPagesSlideDataCreativeAgency = {

       CityPagesSwipper_heading : "Our Services",
       
       slide_1_slide_head : "Brand Design",
       slide_1_slide_para : "Collaborate with us to create a brand that leads. As a creative branding agency, we strategically design your visual and verbal identity, as well as your packaging, website, catalogue, and communication to help you connect with your customers and drive growth. ",

       slide_2_slide_head : "Photography",
       slide_2_slide_para : "Visuals shape consumers’ perception in a big way. This is precisely the reason why professional photography is a key driver of your success story. Let our skilled visual storytellers bring your brand to life by building strong visual impressions that boost marketing performance.",

       slide_3_slide_head : "Brand Identity Design",
       slide_3_slide_para : "Your brand’s primary identity - your logo - is the first thing people notice. It is also what they remember and recall in the long term. This is why a strong, compelling and memorable logo design becomes non-negotiable. Let’s team up to create a meaningful and impactful logo.",

       slide_4_slide_head : "Packaging Design",
       slide_4_slide_para : "On a crowded store shelf or a digital space, if your product struggles to capture attention and build trust, success becomes highly unlikely. This is where we make a difference. We ensure that your packaging attracts, communicates and persuades - all in a matter of a few seconds.",

       slide_5_slide_head : "Catalogue Design",
       slide_5_slide_para : "Catalogues are strategic assets. Whether you want to showcase your products, create a strong brand impression, educate your customers, or support your sales team, a well-designed catalogue is essential. Choose us to create a truly effective catalogue. ",

       slide_6_slide_head : "Digital Growth Design",
       slide_6_slide_para : "Your brand doesn’t just compete in physical stores; in fact, it faces an equally fierce competition online. A strategic and creative growth plan is, therefore, essential to ensure success. And that’s precisely what we do – design your digital growth path and creatives.",

       slide_7_slide_head : "Animation",
       slide_7_slide_para : "Animations have the power to captivate audiences and keep them hooked until the very end. They turn concepts, ideas and messages into compelling visual stories that leave a lasting impact. Do you want to impress your customers with engaging, impactful animation? Start your project with us today!",

       slide_8_slide_head : "Brand Video Shoot",
       slide_8_slide_para : "Customers buy only when your brand feels reliable and relatable. Our brand video shoot services help you build this connection and trust. We showcase your product, the team behind the brand and the actual workspace where things unfold. All these make your brand feel credible. So, let’s get started!",

       slide_9_slide_head : "Web Design",
       slide_9_slide_para : "A strong UI/UX design establishes the framework of a good website. However, content, graphics, videos, and illustrations form part of it too. And then, there is the website development part as well. Let our experts design and develop a visually appealing and engaging website for your customers.",

       slide_10_slide_head : "UI/UX Design",
       slide_10_slide_para : "Have you ever abandoned a website or app because it looks and feels absolutely frustrating? That’s what a bad UI/UX design is, and you definitely do not want this for your brand. Eliminate any chance of a negative customer experience. Hire us to build a user-friendly UI/UX design. ",
    }


    const leftFaqs = [
        {
          question: "What does your creative studio specialise in?",
          answer:
            (<>We specialise in building complete brand systems - from identity and packaging design to communication and digital design. </>)
        },
        {
          question: "Do you offer complete branding solutions?",
          answer:
            (<>Yes, our brand design studio offers end-to-end branding services. We offer every essential service needed to build and grow a brand.</>)
        },
        {
          question: "Do you work with only established brands?",
          answer:
            "No. We work with all kinds of brands, whether it is a start-up looking to build a brand from scratch or an established business wanting to elevate and modernise its brand. ",
        },
    
        {
          question: "How are you different from other branding agencies?",
          answer:
            "We don’t design for looks alone, nor do we focus on isolated design output (like just a logo or packaging). We focus on creating a complete brand that aligns with your vision and delivers the results you want. Research, strategy, creativity and consistency are at the core of everything we do.",
        },
    
        {
          question: "What is your process?",
          answer:
            "At our branding studio, we usually start with a conversation with you, followed by market and audience research. Brand planning and the actual designing stage follow. We further refine our work based on your feedback and finally launch your brand in the market.",
        },
      ];
    
      const rightFaqs = [
        {
          question:
            "Do you also provide digital and online branding services?",
          answer:
            (<>Yes, we design and develop websites that align with your brand identity. Also, experts at our creative design studio craft digital brand assets (such as social media creatives and online ads) and offer SEO services to strengthen your brand’s online presence. In short, we ensure that your brand is both seen and remembered online. </>)
        },
        {
          question:
            "Can you rebrand my existing brand?",
          answer:
            "For sure! We can definitely help rebrand your business to keep it relevant in the current market. ",
        },
    
        {
          question: "What industries do you work in?",
          answer:
            (<>We love to work across different industries, be it FMCG, food & beverage, cosmetics, pharmaceuticals, nutraceuticals, jewellery, education and tourism.</>)
        },
    
        {
          question: "How can we get started?",
          answer:
            "It is simple, just drop us a message or give us a call, and we can get started immediately.",
        },
    
      ];
    
      // form section content
      const FormHead = "Let’s Discuss Over a Cup of Coffee";
      const FormPara =
        "Usually, customers prefer to watch an animated video over reading long blogs, manuals or documentation. How do we know this? Well, statistics say this, and we, as consumers, do the same. As an animation company in Noida, we create videos that capture attention, provide the required information, strike an emotional chord with customers and build trust. Want a similar experience for your customers? Let’s discuss your project over a cup of coffee.";
      const pageName = "about-us";
    


  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "about-us"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* about hero */}
      <section>
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>


      {/* AboutUsZoomSection */}
      <AboutUsZoomSection/>


       {/* creative agency swipper  */}
      <CreativeAgencySwipper cityPagesSlideDataCreativeAgency={cityPagesSlideDataCreativeAgency}/>


      {/* brand building section */}
      <section className="brand-building-section">
      <div className='container'>
        <div className='row'>

          <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
          <div className='brand-building-content-col'>
            <h2 className='brand-building-main-head'>We Design With Passion, Are Driven By Purpose, & Focused On Results.</h2>
            <div className='brand-building-content-sub-div'>
            <h3 className='brand-building-h3-head'>Core Passion</h3>
            <p className='brand-building-para'>Crafting brands that people remember is our passion, and we absolutely love it when something challenging comes our way. It is our chance to get ready for an exciting and fun-filled branding journey ahead and create something new, something out of the box.</p>
            </div>
            <div className='brand-building-content-sub-div'>
            <h3 className='brand-building-h3-head'>Core Intent</h3>
            <p className='brand-building-para'>As a creative branding and design studio, we don’t design for aesthetics alone; we design to make a difference. We strive to build impactful brands that stand strong - at home and across global markets - and drive revenue growth for you.</p>
            </div>
          </div>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-5'>
            <div className='brand-building-angled-text'>
              <h2 className='brand-building-angled-head-first'>& Purpose</h2>
              <h2 className='brand-building-angled-head-second'>Passion</h2>
            </div>
            <div className='brand-building-angled-text-mobile'>
            <h2 className='brand-building-angled-head-second-mobile'>Passion</h2>
            <h2 className='brand-building-angled-head-first-mobile'>& Purpose</h2>
            </div>
          </div>
        </div>
      </div>
      </section>  


      {/* Our constant companies */}
        <OurConstant />

    


        {/* product and brand */}
        <section className='product-and-brand'>
          <div className='container'>

            <div className='row product-and-brand-row'>
              <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                <div className='product-and-brand-img-col g-0'>
                  <img src="https://dndesigns.co.in/uploads/pages/aboutbranding1 (2).webp" className='img-fluid product-and-brand-img'></img>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-7 col-lg-7'>
              <div className='product-and-brand-content-col'>
                  <h2 className='product-and-brand-content-col-head'>Branding</h2>
                  <p className='product-and-brand-content-col-label-para'>Insight-Led, Growth-Focused</p>
                  <p className='product-and-brand-content-col-para'>Collaborate with our branding studio to build a future-ready brand. We combine research, strategy, and creativity to build a powerful and profitable brand for you. </p>
              </div>
              </div>
            </div>


             <div className='row product-and-brand-row product-and-brand-row-second g-0 flex-md-row flex-column-reverse'>
             <div className='col-12 col-sm-12 col-md-7 col-lg-7'>
              <div className='product-and-brand-content-col'>
                  <h2 className='product-and-brand-content-col-head'>Communication </h2>
                  <p className='product-and-brand-content-col-label-para'>Brand-Aligned, Clear & Consistent </p>
                  <p className='product-and-brand-content-col-para'>Communication influences how people connect with, perceive and remember your brand. We bring your brand closer to your customers through strategic digital campaigns and engaging visual content. </p>
              </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                <div className='product-and-brand-img-col'>
                  <img src="https://dndesigns.co.in/uploads/pages/communicationabout2.webp" className='img-fluid product-and-brand-img'></img>
                </div>
              </div> 
            </div>


            <div className='row product-and-brand-row product-and-brand-row-third g-0'>
              <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                <div className='product-and-brand-img-col'>
                  <img src="https://dndesigns.co.in/uploads/pages/aboutuswebsite.webp" className='img-fluid product-and-brand-img'></img>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-7 col-lg-7'>
              <div className='product-and-brand-content-col'>
                  <h2 className='product-and-brand-content-col-head'>Web Design</h2>
                  <p className='product-and-brand-content-col-label-para'>User-Focused, Conversion-Oriented</p>
                  <p className='product-and-brand-content-col-para'>A professionally designed website is important to strengthen your brand’s digital presence. Trust our experts to build a website that is not just visually stunning, but also engaging and result-driven. </p>
              </div>
              </div>
            </div>

          </div>
        </section>

          {/* AboutUsHoverPage */}
        <AboutUsHoverPage/>

        {/* faqs */}
      <section className="faqs">
                <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
              </section>

               {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName} />


    </div>
  )
}

export default page
