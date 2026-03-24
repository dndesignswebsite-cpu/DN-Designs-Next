export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import styles from "../page.module.css";
import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import OurConstant from "@/Components/OurConstant/OurConstant";
import OurWorkHomeSection from "@/Components/OurWorkHomeSection/OurWorkHomeSection";
import TalkToUsCityPages from "@/Components/TalkToUsCityPages/TalkToUsCityPages";
import "./branding-agency-in-gurgaon.css";
import CityPagesSwipper from "@/Components/CityPagesSwipper/CityPagesSwipper";
import Faqs from "@/Components/Faqs/Faqs";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Form from "@/Components/Form/Form";

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Link from "next/link";
import Image from "next/image";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import HomePageHero from "@/Components/HomePageHero/HomePageHero";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("branding-agency-in-jaipur", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency in Jaipur",
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
  const title = "Branding Agency In Jaipur: Good Branding Speaks Before You Do";
  const description =
    "Our branding agency in Jaipur ensures your brand appeals and connects with your target audience. Get in touch with us today to build a brand that is powerful and inspiring.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("branding-agency-in-jaipur", null, true);
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
      question: "Why is branding important for my business?",
      answer:
        "Branding helps shape your image in the market. Any brand that aims to build strong recognition, trust, and communication with its consumer base should invest in professional branding services. These services are backed up by market research and a deep understanding of the target audience.",
    },
    {
      question: "How long does the branding process take?",
      answer:
        "The exact duration of the branding process can vary from one project to another. This is because every project is different and has its own needs and challenges. However, roughly, you can take around four weeks for a branding project.",
    },
    {
      question: "How involved will I be in the branding process?",
      answer:
        "We believe in a collaborative approach, and hence we include you in every key discussion, feedback, and decision. This helps us ensure that the final brand identity that we deliver truly depicts your goals and vision for your brand.",
    },
  ];

  const rightFaqs = [
    {
      question: "Can you help us name our brand or products?",
      answer:
        (<>Definitely. Our comprehensive branding services in Jaipur cover everything, including <Link href="/brand-name-suggestion" className="faq-link">brand name suggestions.</Link> We help you select a name that reflects your brand identity, is distinctive, memorable, scalable and most importantly, legally available.</>)
    },
    {
      question: "What makes your agency different?",
      answer:
        (<>Being the best branding agency in Jaipur, we believe that striking a balance between research-driven strategy and creativity can deliver the best results. We focus on providing customised <Link href="/branding" className="faq-link">branding solutions</Link> for your brand and are committed to delivering high-quality results. Your satisfaction with our services is of vital importance to us, and we work diligently to achieve this goal.</>)
    },
    {
      question: "How do we start working with you?",
      answer:
        (<>Simply contact us through our website form. You can also book a consultation by emailing <a href="mailto:info@dndesigns.co.in" className="faq-link">info@dndesigns.co.in</a> or calling <a href="tel:9416011100" className="faq-link">9416011100</a>. Our team will connect with you promptly and guide you through the next steps.</>)
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Some brands simply stand out! You recognise them, you trust them and you do not think twice before purchasing from them. That’s how powerful a brand can be! However, building such an influential brand is quite a task. No worries for you, though, for we are here to turn your dreams into reality. If you have the same vision for your brand, think no further. Just get in touch with us and tell us all you have in mind for your product.Let’s discuss how to make your brand something others love and envy.";
  const pageName = "branding";

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
          key={`schema-page-${pageData._id || "branding-agency-in-jaipur"}`}
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
              <h1>
                Branding Agency In Jaipur: Good Branding Speaks Before You Do
              </h1>
              <p className="para-roboto">
                Our branding agency in Jaipur ensures your brand appeals and
                connects with your target audience. Get in touch with us today
                to build a brand that is powerful and inspiring.
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
        <OurBrandsSectionHome/>
      
      {/*.....our-constant-companions...... */}
      <OurConstant />
      {/*.....Our work...... */}
      <OurWorkHomeSection />

      {/* next sectiion */}
      <section className="city-pages-content-img-sec">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>The Start of Every Brand Experience</h2>
                <p>
                  In a city like Jaipur, where everything, from Hawa Mahal’s
                  façade to the lanes of Johari Bazaar, speaks of beautiful
                  design, your brand must appear beautiful too. Customers will
                  evaluate your brand by its visual appearance first, even
                  before they explore details about you. They will pay attention
                  to your logo, colours, images and overall look. That shows
                  that visuals naturally attract people and make them curious to
                  learn more about you.
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
                />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>How Your Message Builds Connection</h2>
                <p>
                  Once your appearance stirs your consumers' interest, they will
                  want to know more about your brand's purpose, values, story
                  and personality. They will trust you only if they feel an
                  emotional connection with your brand. And it is nothing short
                  of essential to align your visual identity with your verbal
                  identity to make your brand feel more genuine and confident.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>How We Make Your Brand Memorable</h2>
                <p>
                  As a branding agency in Jaipur, we make sure to create a brand
                  identity that connects with your target audience. We provide
                  consistent branding across your website, packaging, social
                  media, and ads, ensuring people recognise you instantly
                  wherever they see you. When your identity feels uniform and
                  dependable, your brand becomes easier for your consumers to
                  remember, trust, and confidently recommend to others.
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* swipper */}
       <CityPagesSwipper cityPagesSlideData={cityPagesSlideData}/>

      {/* faqs */}
      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* testimonial  */}
      <Testimonial />
      <Form FormHead={FormHead} FormPara={FormPara} pageName="Landing Page" />
    </div>
  );
}

export default page;
