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
import Link from "next/link";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Form from "@/Components/Form/Form";

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Image from "next/image";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import HomePageHero from "@/Components/HomePageHero/HomePageHero";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById(
      "packaging-design-agency-in-ahmedabad",
      null,
      false,
    );
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Packaging Design Agency in Ahmedabad",
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
  const title = "Packaging Design Agency in Ahmedabad: Design That Speaks";
  const description =
    "Our packaging feels like a beautifully drafted invitation that warmly draws consumers in, holds their attention, and leaves a memorable impression long after they’ve seen it.";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById(
      "packaging-design-agency-in-ahmedabad",
      null,
      true,
    );
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
      question:
        "How is DN Designs the best packaging design agency in Ahmedabad?",
      answer:
        "What makes us widely regarded as the top packaging design agency in Ahmedabad is our determination to bring together strategy, creativity, and market insights, all together to provide designs that guarantee results. We have a team of professionals who are all experts in their field, and work with an aim to boost your product’s visibility and sales in the market.",
    },
    {
      question: "Why is packaging design so important in Ahmedabad?",
      answer:
        "As competition increases in the FMCG, food, beauty, and retail sectors, good packaging design helps brands stand out and quickly gain consumer trust.",
    },
    {
      question:
        "What key elements can make a design stand out in Ahmedabad’s competitive market?",
      answer:
        (<>Clear communication, right colours & typography, captivating images, thoughtful placement of elements and brand consistency are some of the key elements that help make packaging design effective. Hence, these are the main focuses of our <Link href="/packaging-design" className="faq-link">packaging design services,</Link> too.</>)
    },
  ];

  const rightFaqs = [
    {
      question:
        "Do packaging design companies also provide other services like brand strategy development and visual identity creation?",
      answer:
        (<>Yes. Many packaging design companies do more than just create the pack. They often handle complete <Link href="/branding" className="faq-link">branding</Link> work, that is, they develop brand strategy, define visual identity elements like <Link href="/logo-designing" className="faq-link">logos,</Link> and make sure the packaging is consistent with the overall brand story.</>)
    },
    {
      question:
        "What makes a good packaging design from a consumer psychology perspective?",
      answer:
        "A strong packaging design connects with how consumers think and make choices. It uses clear organisation, familiar signs, and emotional triggers to build trust and interest. Good packaging quickly shows value, is easy to understand, and stands out visually.",
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
          key={`schema-page-${pageData._id || "packaging-design-agency-in-ahmedabad"}`}
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
              <h1>Packaging Design Agency in Ahmedabad: Design That Speaks</h1>
              <p className="para-roboto">
                Our packaging feels like a beautifully drafted invitation that
                warmly draws consumers in, holds their attention, and leaves a
                memorable impression long after they’ve seen it.
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
      </section> */}

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
                <h2>Why Packaging Design Is Important</h2>
                <p>
                  In the city’s busy market, your product can often get lost
                  among countless options, reducing its visibility and sales. In
                  such a situation, strong packaging becomes essential to
                  outshine. As a leading packaging design company in Ahmedabad,
                  we help brands overcome this very challenge with memorable
                  visuals. Our packaging design services ensure your product
                  looks premium, professional, and ready to compete in the
                  market.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img
                  src={imageUrl + "Packaging-Design.webp"}
                  className="img-fluid"
                /> */}

                <Image
                  src={imageUrl + "Packaging-Design.webp"}
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
                {/* <img
                  src={imageUrl + "How-We-Help-Your-Product-Stand-Out.webp"}
                  className="img-fluid"
                /> */}

                 <Image
                  src={imageUrl + "How-We-Help-Your-Product-Stand-Out.webp"}
                  className="responsive-img image-box-city-page-img"
                  alt="home city page image"
                  width={1500}
                  height={1000}
                />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>The Process for High-Impact Packaging Design</h2>
                <p>
                  We have a very structured approach to packaging design which
                  focuses on delivering result which has a sense of clarity,
                  consumer appeal, and storytelling to it. We study your
                  audience, industry & market trends, and behaviour to create
                  packaging that works both in online and offline stores. Our
                  expert professionals make sure that every element, starting
                  from colours to typography, is perfected.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Packaging That Makes a Difference</h2>
                <p>
                  As the leading packaging design company in Ahmedabad, we
                  create product packaging that makes customers choose you in an
                  instant. We are committed to creating packaging designs that
                  attract attention, clearly convey your identity and story,
                  build trust, and enhance recall and loyalty among consumers.
                  This ensures that your product is set for success in the
                  market.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                {/* <img
                  src={imageUrl + "Ready-to-Win-Every-Heart.webp"}
                  className="img-fluid"
                /> */}

                  <Image
                  src={imageUrl + "Ready-to-Win-Every-Heart.webp"}
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
