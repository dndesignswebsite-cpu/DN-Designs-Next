export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import styles from "../page.module.css";
import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import OurConstant from "@/Components/OurConstant/OurConstant";
import OurWorkHomeSection from "@/Components/OurWorkHomeSection/OurWorkHomeSection";
import TalkToUsCityPages from "@/Components/TalkToUsCityPages/TalkToUsCityPages";
import "./branding-agency-in-mumbai.css";
import CityPagesSwipper from "@/Components/CityPagesSwipper/CityPagesSwipper";
import Faqs from "@/Components/Faqs/Faqs"; 
import Testimonial from "@/Components/Testimonial/Testimonial";
import Form from "@/Components/Form/Form";
import Image from "next/image";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Link from "next/link";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import HomePageHero from "@/Components/HomePageHero/HomePageHero";
import LPBrandIdentityCategorySwipper from "@/Components/LPBrandIdentityCategorySwipper/LPBrandIdentityCategorySwipper";
import IndustriesSectionNewLayout from "@/Components/IndustriesSectionNewLayout/IndustriesSectionNewLayout";
import CTAMarqueSwipper from "@/Components/CTAMarqueSwipper/CTAMarqueSwipper";
import BookDirectCallCTA from "@/Components/BookDirectCallCTA/BookDirectCallCTA";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-noida", null, false);
  } catch (error) {
    console.log("Branding Agency In Noida", error);
    return {
      title: "Branding Agency In Noida",
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
  const imageUrl = "https://dndesigns.co.in/uploads/pages/";

  // home page hero content
  const title = "Branding Agency in Noida - Building Brands That Grow ";
  const description =
    "Forward is where your brand belongs. The experts at our branding agency in Noida ensure your brand keeps moving ahead and delivers real results.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("branding-agency-in-noida", null, true);
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

  // faqs content
  const leftFaqs = [
    {
      question: "Why should I hire a branding agency instead of just a graphic designer? ",
      answer:
        (<>A graphic designer can create excellent visuals for your brand; however, to ensure that your brand succeeds in a competitive environment, you need to look at the bigger picture. You need to <Link href="/brand-positioning" className="faq-link">establish your brand positioning,</Link> visual identity, messaging, communication style, and lastly, the overall customer experience. It's a job that’s broader in concept and execution. A branding agency is best suited for this job.</>),
    },
    {
      question: "Do you work with new businesses and startups, or only established businesses? ",
      answer:
        (<>Both. It doesn’t matter whether you’re a startup or an established business. At our branding and design agency in Noida, we love <Link href="/startup-branding-agency" className="faq-link">building a new brand</Link> from the ground up and <Link href="/rebranding" className="faq-link">rebranding your business</Link> for its next stage of growth. </>)
    },
    {
      question: "Can you help us rebrand an existing business?",
      answer:
        "Yes, absolutely! We know that as your business expands, it could lose relevance in the market if it appears outdated. There will also be new product launches, new markets to enter, and perhaps even significant organisational changes (like mergers & acquisitions) as time goes by. All these could call for rebranding, and our creative brand agency is right here to do that.",
    },
    
    {
      question: "What services does DN Designs offer as a branding company in Noida?  ",
      answer:
        (<>Our branding company in Noida offers <Link href="/branding" className="faq-link">end-to-end branding services</Link> under one roof, including brand strategy, brand positioning, brand identity design, packaging design and GTM strategy. Other branding services you can avail of at our <Link href="/creative-branding-agency" className="faq-link">creative branding agency</Link> include catalogue design, website design, brand collateral design, digital marketing, photography and 3D brand video creation. Everything is built to create a consistent brand system that consumers recognise and choose.</>),
    },
    
    {
      question: "Can we meet in person, or is everything remote?",
      answer:
        "Yes, we can definitely meet in person. We are a branding and design agency based out of Noida, and if you’re also based here, we’d love to meet you in person to discuss the project and your brand vision.",
    },
  ];

  const rightFaqs = [
    {
      question: "What are the benefits of working with a local branding agency in Noida?",
      answer:
        "Working with a local branding company in Noida comes with a big bag of benefits. Being closer means you can walk into our office for face-to-face strategy sessions, check out the work progress in person and even collaborate easily for a brand video shoot or other work whenever needed. Being in the same location means no clash with regard to time. In short, work gets completed smoothly and swiftly.",
    },
    {
      question: "Do you only work with businesses in Noida? ",
      answer:
        (<>Not at all. We work with businesses all over the country and world. Our approach is centred on your products, market, audience and your brand vision, not your location.</>)
    },
    {
      question: "How long does a branding project take, and how much does it cost?",
      answer:
        (<>For both, the answer is: it depends on your project, the number of SKUs involved, the design complexities and the number of revisions required. We give a timeline and costing estimate once we discuss the project and understand the requirements.</>)
    },
    
    {
      question: "What if I already have a logo but need a full brand identity?",
      answer:
        (<>In this scenario, we can <Link href="/brand-identity-design-services" className="faq-link">build your entire brand identity</Link> (colours, typography, etc.) around your logo. Alternatively, we can refine your logo so that it aligns with your brand vision and market positioning, and then build a complete brand identity system around it. In both cases, the ultimate goal is to make your brand feel impactful and consistent across platforms, without necessarily having to start from scratch. </>),
    }
    ,
    {
      question: "How do I get started with DN Designs? ",
      answer:
        (<>Begin by booking a consultation with us, either in our office or online. <Link href="/contact-us" className="faq-link">Talk to our branding experts</Link> and share details about your business. Tell us all about your vision and ambitions, and we can take it from there. Let’s get started on our exciting branding journey.</>),
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Some brands simply stand out! You recognise them, you trust them and you do not think twice before purchasing from them. That’s how powerful a brand can be! However, building such an influential brand is quite a task. No worries for you, though, for we are here to turn your dreams into reality. If you have the same vision for your brand, think no further. Just get in touch with us and tell us all you have in mind for your product.Let’s discuss how to make your brand something others love and envy.";

    // city pages slider data
    let cityPagesSlideData = {

       CityPagesSwipper_heading : "Branding and Marketing Services That Build Trust and Admiration",
       
       slide_1_slide_head : "Brand Name Suggestion",
       slide_1_slide_para : "   What’s in the name? We say, it’s quite significant, especially in branding. It reflects identity and evokes positive responses from consumers. We craft names that don't get lost in the shuffle and are remembered by your audience.",

       slide_2_slide_head : "Brand Development",
       slide_2_slide_para : "Without branding, your business will not be recognised, trusted or remembered. We are your one-stop solution for creating a strong brand. We craft your brand strategy, design your identity & establish your online brand presence.",

       slide_3_slide_head : "Brand Identity Design",
       slide_3_slide_para : "It is said that there is no second chance to make a first impression. And your logo is your first impression. We design logos that are versatile, unique, and clearly communicate your brand’s essence and values to your target audience.",

       slide_4_slide_head : "Packaging Design",
       slide_4_slide_para : "Want your product to impress your consumer at first glance? Designing attractive packaging can be your winning move. We create designs that don’t just wow your consumer but deeply show what your brand wants to say.",

       slide_5_slide_head : "Catalogue Design",
       slide_5_slide_para : "Your business & your product deserve all the spotlight. So, we create attractive and organised catalogues that reflect your brand and product with clarity, making it impossible to go unnoticed.",

       slide_6_slide_head : "Digital Marketing",
       slide_6_slide_para : "In this digital era, businesses cannot negate the importance of digital marketing. We create digital marketing strategies that target your online audience the right way, increase visibility, drive traffic, and generate measurable results.",

       slide_7_slide_head : "Influencer Marketing",
       slide_7_slide_para : "Influencers can boost your brand awareness and help generate revenue through their campaigns. We help you collaborate with the right influencers so that you can build trust among your target audience and drive engagement.",

       slide_8_slide_head : "Social Media Marketing",
       slide_8_slide_para : "To succeed, social media marketing is important. We are here to help you establish, manage and grow your social media presence. We provide comprehensive social media marketing services, from crafting a strategy to analysing performance.",

       slide_9_slide_head : "Animation",
       slide_9_slide_para : "Animations have the power to captivate and win hearts. We create stunning animations to bring your brand to life. Be it 2D or 3D animation, we create visuals that capture audience attention and leave an enduring impact.",

       slide_10_slide_head : "SEO",
       slide_10_slide_para : "Your website must appear prominently on search engines to improve your brand visibility, traffic and leads. We create and implement SEO strategies for this purpose. Be visible, attract customers and generate profit.",
       
       slide_11_slide_head : "Web Design",
       slide_11_slide_para : "Your website is your online office or store. It must impress those who visit it. We, therefore, create SEO optimised websites that are visually appealing, functional, and reflect your brand identity. Our designs ensure a good user experience.",

       slide_12_slide_head : "UI/UX Design",
       slide_12_slide_para : "Your website is your online office or store. It must impress those who visit it. We, therefore, create SEO optimised websites that are visually appealing, functional, and reflect your brand identity. Our designs ensure a good user experience.",

       slide_13_slide_head : "Photography",
       slide_13_slide_para : "Visuals speak louder than words. We capture the essence of your brand through our professional photography service. We create visuals that highlight your brand’s personality, connect with your audience and leave an everlasting impression."
    }


  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "branding-agency-in-noida"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*.....hero...... */}
      {/* <section className={`${styles.hero}`}>
        <div className="container">
          <div className={`${styles["hero-rows"]} row`}>
            <div className={`${styles["left-hero"]} col`}>
              <h1>Branding Agency In Mumbai: Your Vision, Our Design</h1>
              <p className="para-roboto">
                We are a leading branding agency in Mumbai, offering solutions
                that establish your brand’s identity & voice in the market and
                propel its massive growth.
              </p>
              <div>
                <HomePageBtn />
              </div>
            </div>
            <div className={`${styles["hero-img"]} col`}>


              <Image
                src={imageUrl + "gkjeg.webp"}
                className={`${styles["hero-bg-img"]} ${styles["responsive-img"]}`}
                alt="home page image"
                width={1000}
                height={1000}
                priority
              />


              <Image
                src={imageUrl + "hgefef.webp"}
                className={`${styles["hero-img-main"]} ${styles["responsive-img"]}`}
                alt="home page image"
                width={700}
                height={700}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      */}

       {/*.....hero...... */}
     <HomePageHero title={title} description={description} />

     {/* our brands section */}
             <OurBrandsSectionHome heading1="Our " heading2="Brand Journals"/>
             
      {/*.....our-constant-companions...... */}
      <OurConstant />
      
        {/* industries we serve */}
            {/* <LPBrandIdentityCategorySwipper/> */}
           
         
        
      {/*.....Our work...... */}
      {/* <OurWorkHomeSection /> */}
      {/*.....Our work...... */}
              <section id="ourworksection" className="our-work-home-section">
              <OurWorkHomeSection />
              </section>

               {/* IndustriesSectionNewLayout */}
        <IndustriesSectionNewLayout/>

         <BookDirectCallCTA/>

      {/* next sectiion */}
      <section className="city-pages-content-img-sec">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Branding for Noida's Next-Generation Businesses</h2>
                <p>
                  The Noida-Greater Noida area is increasingly seeing new business launches across the nutraceutical, F&B, health & wellness, FMCG, and many other industries. However, more business launches mean more intense market competition. As a business, you need to make your product stand out. You cannot afford to blend in with other products in the market or confuse your customers with inconsistency. Your product might be good, but it means little if your customers walk past it. As a branding agency in Noida, we are here to help your products get recognised and chosen.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img src={imageUrl + "city.webp"} className="img-fluid" /> */}
                <Image
                  src={imageUrl + "city.webp"}
                  className="responsive-img image-box-city-page-img"
                  alt="home city page image"
                  width={1500}
                  height={1000}
                  sizes="(max-width:1200px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="row flex-column-reverse flex-xl-row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img src={imageUrl + "city-2.webp"} className="img-fluid" /> */}
                <Image
                  src={imageUrl + "city-2.webp"}
                  className="responsive-img image-box-city-page-img"
                  alt="home city page image"
                  width={1500}
                  height={1000}
                  sizes="(max-width:1200px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>End-to-End Branding Services in Noida </h2>
                <p>
                  Wondering how we help your brand stand out and succeed in the highly competitive market? It’s by building every layer of your brand, not just its logo. We deliver end-to-end branding solutions combining strategy, creativity and execution under one roof. Our branding service package includes brand strategy & positioning, naming & brand messaging, logo & visual identity design, packaging design, brand guidelines, website & digital brand experience and GTM strategy. It’s one complete branding journey that we take with you to build a brand that performs and gets chosen.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Global Perspective. Local Partnership. Stronger Brands </h2>
                <p>
                From new brands ready to launch to established ones ready to take a new turn in their branding journey, we work with businesses at different phases of growth. Whatever the ambition, we take your business from where it is today and build it to go where you want to take it next, beyond Noida to the rest of India and the world. Based in Noida, we bring the local agency advantage too: an understanding of the NCR market and consumer behaviour, face-to-face discussions and faster turnaround. <br>
                </br>
                Have a vision for what’s next? Let’s bring it to life. 
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img src={imageUrl + "city-3.webp"} className="img-fluid" /> */}
                <Image
                  src={imageUrl + "city-3.webp"}
                  className="responsive-img image-box-city-page-img"
                  alt="home city page image"
                  width={1500}
                  height={1000}
                  sizes="(max-width:1200px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* swipper */}
       <CityPagesSwipper cityPagesSlideData={cityPagesSlideData}/>

       <CTAMarqueSwipper/>
      

      {/* faqs */}
      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* testimonial  */}
      <Testimonial />
      <Form FormHead={FormHead} FormPara={FormPara} />
    </div>
  );
}

export default page;
