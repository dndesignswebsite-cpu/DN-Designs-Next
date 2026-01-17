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





// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("packaging-design-agency-in-hyderabad", null, false);
  } catch (error) {
    console.log("About Us Error", error);
    return {
      title: "Packaging Design Agency in Hyderabad",
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
  const imageUrl = "https://powerfilldrinks.com/uploads/pages/";



  // ---
    await connectDB();
    let pageData;
    try {
      pageData = await getPageById("packaging-design-agency-in-hyderabad", null, true);
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
      question: "How does a packaging design agency in Hyderabad create designs that boost sales?",
      answer:
        "A packaging design agency in Hyderabad focuses on understanding your products and goals, and thereafter conducts market research to find out what will appeal to the customers. Its experts then create packaging designs that will help you attract customers and boost sales and revenue.",
    },
    {
      question: "How is a dedicated product packaging design company in Hyderabad better than a freelance designer?",
      answer:
        "An agency is better suited to offer package design services for the simple reason that it has much more experience and expertise. It has a team of strategic and creative experts who together ensure that your packaging is both beautiful and powerful. Moreover, an agency is more reliable, has a structured workflow and a solid communication system in place too.",
    },
    {
      question: "Can you also handle brand strategy and visual identity for my product?",
      answer:
        "Sure, we can handle brand strategy development and visual identity design for your product. We are a branding and design agency, and so we offer comprehensive branding solutions for your business.",
    }
  ];

  const rightFaqs = [
    {
      question: "Do you, as a product packaging design company in Hyderabad, also support printing and vendor coordination?",
      answer:
        "As a branding and packaging design agency in Hyderabad, our focus is primarily on creating powerful designs. However, we can certainly put you in touch with our network of printers and vendors.",
    },
    {
      question: "Do you offer packaging redesign services for existing products?",
      answer:
        "Yes, we can surely redesign the packaging of your existing product to reflect your current identity and increase sales.",
    }
    ,
    {
      question: "Do you offer packaging design consulting for startups in Hyderabad?",
      answer:
        "Absolutely, we can definitely provide consultation services to startups looking for packaging design services in Hyderabad.",
    }
    
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Some brands simply stand out! You recognise them, you trust them and you do not think twice before purchasing from them. That’s how powerful a brand can be! However, building such an influential brand is quite a task. No worries for you, though, for we are here to turn your dreams into reality. If you have the same vision for your brand, think no further. Just get in touch with us and tell us all you have in mind for your product.Let’s discuss how to make your brand something others love and envy.";
  const pageName = "branding";


  return (
    <div>

    {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "packaging-design-agency-in-hyderabad"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*.....hero...... */}
      <section className={`${styles.hero}`}>
        <div className="container">
          <div className={`${styles["hero-rows"]} row`}>
            <div className={`${styles["left-hero"]} col`}>
              <h1>Packaging Design Company in Hyderabad: Compelling Designs That Deliver Results

</h1>
              <p className="para-roboto">
              Packaging Design should be visually striking, but together with that, it should be persuasive enough to generate sales and contribute to revenue growth. As a packaging design company in Hyderabad, we create designs to fulfil this objective.
              </p>
              <div>
                <HomePageBtn />
              </div>
            </div>
            <div className={`${styles["hero-img"]} col`}>
              <img
                src={imageUrl + "gkjeg.webp"}
                className={`${styles["hero-bg-img"]}`}
              ></img>
              <img
                src={imageUrl + "hgefef.webp"}
                className={`${styles["hero-img-main"]}`}
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/*.....our brands desktop view...... */}
      <section className={`${styles["our-brand"]}`}>
        <div className="container">
          <h2
            className={`${styles["our-brand-heading"]} text-center heading-corbert`}
          >
            Our <span className={`${styles["every-pr"]}`}>Brand Journals</span>
          </h2>
          <ul className={`${styles["cards"]}`}>
            <li className={`${styles["card"]} ${styles["card-1"]}`}>
              <div
                className={`${styles["card-body"]} ${styles["card-body-enlite"]}`}
              >
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3 className="heading-corbert">Rithm’s Enlite</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">Packaging Design</button>
                      <button className="para-roboto">
                        Communication Design
                      </button>
                    </div>
                    <p className="para-roboto">
                      For Rithm’s Enlite, a brand with sparkling mineral water
                      and prebiotic drink range, we designed a thoughtful and
                      eye-catching brand identity, including can design, logo
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={`${styles["card"]} ${styles["card-2"]}`}>
              <div className={`${styles["card-body"]}`}>
                <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://powerfilldrinks.com/uploads/videos/GIF_1_1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3 className="heading-corbert">Wlue's</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">Packaging Design</button>
                      <button className="para-roboto">UI/UX</button>
                      <button className="para-roboto">Website</button>
                    </div>
                    <p className="para-roboto">
                      Makhana brand Wlue’s approached us to launch and promote
                      its product in the market. Their target audience was the
                      youth worldwide. We created its logo and packaging design.
                      In its packaging, we adopted a retro approach with a
                      superhero vibe, while through its logo (with a star
                      integrated in it), we established that the product is
                      meant for winners.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={`${styles["card"]} ${styles["card-3"]}`}>
              <div
                className={`${styles["card-body"]} ${styles["card-body-nectarpure"]}`}
              >
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3 className="heading-corbert">Nectarpure</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">Label Design</button>
                      <button className="para-roboto">UI/UX</button>
                    </div>
                    <p className="para-roboto">
                      Nutraceutical brand NECTARPURE partnered with us primarily
                      to establish its FusionMax Whey Protein product as a niche
                      lifestyle protein brand in the market. We shaped their
                      brand identity and crafted their label design to give the
                      product a premium feel. In addition, we also focused on
                      creating a compelling 3D ad for their product and designed
                      their website.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={`${styles["card"]} ${styles["card-4"]}`}>
              <div
                className={`${styles["card-body"]} ${styles["card-body-grin"]}`}
              >
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3 className="heading-corbert">Grin Care</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">UI/UX</button>
                      <button className="para-roboto">Website</button>
                    </div>
                    <p className="para-roboto">
                      Oral care product brand GrinCare teamed up with us to
                      create a brand presence for itself in the dental
                      healthcare market. We helped design its brand identity,
                      clarify its market positioning, and craft a visually
                      appealing, user-friendly, and conversion-driven website.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* our brand mobile view */}
      <section className={`${styles["mobile-view-our-brand"]}`}>
        <div className="container">
          <div className="row">
            <h2
              className={`${styles["our-brand-heading"]} text-center heading-corbert`}
            >
              Our{" "}
              <span className={`${styles["every-pr"]}`}>Brand Journals</span>
            </h2>
            <div className={`${styles["our-brand-mobile-all-div"]} row`}>
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <img
                    src={imageUrl + "enlite main graphic.webp"}
                    className="img-fluid"
                  />
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
                    <h3
                      className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                    >
                      Rithm’s Enlite
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Packaging Design
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Packaging Design
                      </h4>
                    </div>
                    <div>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center para-roboto`}
                      >
                        Communication Design
                      </h4>
                    </div>
                    <p className="para-roboto">
                      For Rithm’s Enlite, a brand with sparkling mineral water
                      and prebiotic drink range, we designed a thoughtful and
                      eye-catching brand identity, including can design, logo
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/GIF_1_1.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
                    <h3
                      className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                    >
                      Wlue's
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Brand Identity
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Packaging Design
                      </h4>
                    </div>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        UI/UX
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Website
                      </h4>
                    </div>
                    <p className="para-roboto">
                      Makhana brand Wlue’s approached us to launch and promote
                      its product in the market. Their target audience was the
                      youth worldwide. We created its logo and packaging design.
                      In its packaging, we adopted a retro approach with a
                      superhero vibe, while through its logo (with a star
                      integrated in it), we established that the product is
                      meant for winners.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <img
                    src={imageUrl + "grin care case study.webp"}
                    className="img-fluid"
                  />
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
                    <h3
                      className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                    >
                      Nectarpure
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Brand Identity
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto `}
                      >
                        Label Design
                      </h4>
                    </div>
                    <div>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center para-roboto`}
                      >
                        UI/UX
                      </h4>
                    </div>
                    <p className="para-roboto">
                      Nutraceutical brand NECTARPURE partnered with us primarily
                      to establish its FusionMax Whey Protein product as a niche
                      lifestyle protein brand in the market. We shaped their
                      brand identity and crafted their label design to give the
                      product a premium feel. In addition, we also focused on
                      creating a compelling 3D ad for their product and designed
                      their website.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <img
                    src={imageUrl + "nectarpure case study.webp"}
                    className="img-fluid"
                  />
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
                    <h3
                      className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                    >
                      Grin Care
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Brand Identity
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        UI/UX
                      </h4>
                    </div>
                    <div>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center para-roboto`}
                      >
                        Website
                      </h4>
                    </div>
                    <p className="para-roboto">
                      Oral care product brand GrinCare teamed up with us to
                      create a brand presence for itself in the dental
                      healthcare market. We helped design its brand identity,
                      clarify its market positioning, and craft a visually
                      appealing, user-friendly, and conversion-driven website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <h2>Why Packaging Design Matters in Hyderabad
</h2>
                <p>
                 Hyderabad is no more a simple city. It is a major urban centre and a key economic hub. Its population is a diverse mix - from urban professionals to families and students from all over India and abroad. Business-wise, it has seen massive growth in the FMCG and D2C sector, with shoppers buying products from local stores, supermarkets, hypermarkets, speciality stores as well as e-commerce platforms. In such a competitive environment, brands need compelling packaging design to stand out in the market and impress customers.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                <img src={imageUrl + "Packaging-Design.webp"} className="img-fluid" />
              </div>
            </div>
          </div>



          
          <div className="row mt-5">

          <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                <img src={imageUrl + "How-We-Help-Your-Product-Stand-Out.webp"} className="img-fluid" />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>
                  What Packaging Design Achieves For Your Brand

</h2>
                <p>
               It is often said that packaging design is your silent salesperson. Nothing is truer than this. Your product packaging design pulls consumers’ attention in the busy market (through overall appearance), conveys your identity and story (through logo, taglines, colours and typography) and delivers essential information (for example, ingredients and nutritional facts of a food or beverage) that helps convince the customers and win their trust. This eventually leads to a boost in sales.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>
          </div>



          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-content-col">
              <div className="content-box-city-page">
                <h2>How We Can Help
</h2>
                <p>
               If you are searching for the best packaging design company in Hyderabad, DN Designs is your perfect option. We create packaging designs that look stunning, efficiently convey who you are, inspire confidence and boost overall profitability. And yes, we take care of local and cultural preferences as well. Our packaging design services in Hyderabad include everything - from market and audience research to design conceptualisation and actual designing and delivery of files.
                </p>
                <TalkToUsCityPages />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 city-image-col">
              <div className="image-box-city-page">
                <img src={imageUrl + "Ready-to-Win-Every-Heart.webp"} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* swipper */}
      <CityPagesSwipper/>

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
