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
    seo = await getPageById("branding-agency-in-hyderabad", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Branding Agency in Hyderabad",
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
  const title = "Branding Agency in Hyderabad - For Comprehensive Brand Development";
  const description =
    "Looking for the best branding agency in Hyderabad to transform your new business into a success story? No worries, we are right here!";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("branding-agency-in-hyderabad", null, true);
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
      question: "What is a branding company, and what does it do?",
      answer:
        "A branding company is a firm that excels in creating a complete brand identity design for a business. Be it your product’s visual identity (logos, packaging design, catalogue design) or your positioning, values, story and messaging, a branding company in Hyderabad helps establish and convey it to your audience. It conducts market and audience research, crafts a branding strategy, puts the strategy into action and finally monitors the progress.",
    },
    {
      question: "How much does brand development cost with a branding agency?",
      answer:
        "There isn’t a fixed price when it comes to brand development. It all depends on the individual project and the work involved.",
    },
    {
      question:
        "Why should I choose DN Designs as my branding agency in Hyderabad?",
      answer:
        (<><Link href="/" className="faq-link">DN Designs</Link> has expertise and industry knowledge that stems from talent and experience. Our team - a set of enthusiastic and skilled professionals - prioritises your vision and makes sure that you successfully achieve your branding objective. All our work is backed by research, which ensures that your brand is market-ready at the time of launch.</>)
    },
  ];

  const rightFaqs = [
    {
      question:
        "What are the main branding services offered by DN Designs in Hyderabad?",
      answer:
        (<>Our branding services in Hyderabad include an entire spectrum. We offer brand consultation, research and strategy design as well as logo design,<Link href="/packaging-design-agency-in-hyderabad" className="faq-link"> packaging design,</Link> catalogue design, photography and <Link href="/animation" className="faq-link">animation.</Link> Additionally, we also help promote your brand through our digital marketing services.</>)
    },
    {
      question:
        "Do you offer digital branding and marketing services along with design in Hyderabad?",
      answer:
        (<>Yes, at DN Designs, we offer <Link href="/branding" className="faq-link">digital branding </Link>and marketing services too. We design your UI/UX and develop an <Link href="/web-designing-services-in-india" className="faq-link">SEO friendly website</Link> for you. We also help promote your brand through our services like SEO, digital marketing, social media marketing and influencer marketing. Additionally, we provide photography and animation video creation services as well to boost your brand.</>)
    },
    {
      question: "How can I request a quote for branding in Hyderabad?",
      answer:
        (<>Just fill out our contact-us form, or drop us an email at <a href="mailto:info@dndesigns.co.in" className="faq-link">info@dndesigns.co.in</a>. Alternatively, you can call us at <a href="tel:+919416011100" className="faq-link">+91 941 601 1100</a> or <a href="tel:+917206605872" className="faq-link">+91 720 660 5872</a>.</>)
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
          key={`schema-page-${pageData._id || "branding-agency-in-hyderabad"}`}
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
                Branding Agency in Hyderabad - For Comprehensive Brand
                Development
              </h1>
              <p className="para-roboto">
                Looking for the best branding agency in Hyderabad to transform
                your new business into a success story? No worries, we are right
                here!
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
                <h2>What Makes Branding Important?</h2>
                <p>
                  Branding is what you need if you want to make your presence
                  felt in the market. Why is that so? It is because branding
                  helps you establish your unique identity - visual, verbal and
                  emotional (logo, colours, typography, voice, story, messaging,
                  mission, vision, values and positioning) in the market.
                  Without this identity, it is not possible for customers to
                  either recognise, connect and trust your brand or purchase
                  from you.
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
                <h2>Why You Need A Branding Agency in Hyderabad?</h2>
                <p>
                  Branding is not a simple task. It is a process that involves a
                  whole set of activities, right from logo design, packaging
                  design and catalogue design to website design. It requires a
                  varied skillset, from research and strategy development to
                  designing skills. A branding company in Hyderabad brings you
                  just that - expertise, experience and vision that can catapult
                  your brand to popularity.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>Let’s Make Your Brand Grow - Together</h2>
                <p>
                  At DN Designs, we offer comprehensive branding and marketing
                  services for your business. Whether you need a complete
                  branding package or individual service, we are here to help
                  you at every step. We aspire to turn your brand into a story
                  of growth, achievement and inspiration. Want to work with us?
                  Why not contact us today and start a conversation?
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
