export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./brand-name-suggestion.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("brand-name-suggestion", null, false);
  } catch (error) {
    return {
      title: "Brand Name Suggestion",
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
//meta end here

async function page() {

  let imageUrl = "https://powerfilldrinks.com/uploads/pages/";
  
  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("brand-name-suggestion", null, true);
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

  const heading = "Brand Name Suggestion";
  const subHeading = "Crafting Memorable Names For Your Business";
  const para =
    "Brand names are an integral part of brand identity, which, in turn, is crucial for the brand’s success. Brand naming, therefore, has tremendous significance in the entire branding process. Names should be distinctive, memorable, enduring and legally available. Want to know more about what other criteria make a good brand name and what kind of naming suggestions we can make for your business? Continue reading, as we have got everything covered for you here. Do check out FAQs, as we have answered questions that you may have.";

  const leftFaqs = [
    {
      question:
        "What can I expect from you if I go for your brand name suggestion service?",
      answer:
        "To begin with, we will sit down with you to understand your brand, vision and goal. Based on our understanding, we will conduct research and come up with brand name suggestions that can work well with your target audience. For every option, we will provide a detailed explanation as to why we chose it, what its meaning is and why, according to us, it will work. Once you shortlist names, we will run a final check, complete formalities and finalise your business or product name.",
    },
    {
      question: "How much time do you take to provide brand-name ideas?",
      answer:
        "Post the initial round of discussion, it takes us around 15 - 20 days to conduct research and finally send you the product or business name ideas.",
    },
    {
      question:
        "Do you provide more options in case I do not like the ones you have provided in the first round?",
      answer:
        "Since we suggest all the brand name ideas after proper research, it is highly unlikely that you will need more options after the first round. However, if you do require them, we will certainly provide you with more suggestions.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "What about the domain name associated with my brand name? As a naming agency, can you help check if it is available?",
      answer:
        "Yes, we can check whether the domain name associated with your business is available. We can also suggest suitable domain names for your brand.",
    },
    {
      question: "What about legalities? How can you help me with it?",
      answer:
        "In the initial stages, we conduct basic research to confirm that the brand name is not used by any other business. However, post the shortlisting phase, we conduct a proper trademark search to avoid confusion and legal issues that may arise in future. Once your brand name is decided, we go a step ahead and help you trademark it. With this, we prevent any usage of your business or product name by competitors.",
    },
    {
      question: "I want to rename my current brand. Can DN Designs help?",
      answer: "Yes, we can certainly help rename your current brand.",
    },
  ];

  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Since you now understand the importance of brand names, you want the best one for your business, right? But it is not an easy job. It requires an understanding of the product, the market, as well as the legalities involved. You don’t need to worry, though, since we are right here. As a brand identity design agency, we make brand name suggestions that perfectly suit your brand. So, let’s meet and discuss your brand.";
  const pageName = "brand-name-suggestion";

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "brand-name-suggestion"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* branding hero */}
      {/* ui/ux design */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>

      {/* Characteristics of Good Brand Name? */}

      <section className="characteristics-of-good">
        <div className="container">
          {/* 1st row */}
          <div className="row">
            <h2 className="text-center">
              Characteristics of{" "}
              <span className="every-pr"> Good Brand Name?</span>
            </h2>
            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "download (8).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Reflects Brand Identity</h3>
                  <p>
                    Brand identity is important for success, and identity begins
                    with the brand’s name. A playful name doesn’t really suit a
                    company that provides
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Reflects Brand Identity</h3>
                  <p>
                    Brand identity is important for success, and identity begins
                    with the brand’s name. A playful name doesn’t really suit a
                    company that provides medical equipment. Similarly, a toy
                    brand with a serious-sounding name will not connect with the
                    kids. A good brand name should, therefore, reflect the brand
                    identity.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                 src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                     src={imageUrl + "download (7).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Uniqueness</h3>
                  <p>
                    Along with the product, the brand name, too, should be
                    unique. The primary reason for this is the intense market
                    competition. With so many products in one category vying for
                    consumers
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Uniqueness</h3>
                  <p>
                    Along with the product, the brand name, too, should be
                    unique. The primary reason for this is the intense market
                    competition. With so many products in one category vying for
                    consumers’ attention, it is important to have a brand name
                    that stands out. Similar-sounding names create confusion in
                    buyers’ minds.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                 src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "download (6).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Easy To Spell & Pronounce</h3>
                  <p>
                    You have definitely come across business names that are
                    difficult to say aloud. While several of these are
                    successful, ideally, a brand name should be short
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Easy To Spell & Pronounce</h3>
                  <p>
                    You have definitely come across business names that are
                    difficult to say aloud. While several of these are
                    successful, ideally, a brand name should be short and simple
                    to pronounce. It should also sound pleasing. A brand name
                    that sounds good and has simple spellings sticks with the
                    customers.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                 src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                     src={imageUrl + "download (5).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Easy To Remember</h3>
                  <p>
                    Write down all the business names you can think of. These
                    are brand names that can be termed good (mostly). Why?
                    Because you could easily remember them
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Easy To Remember</h3>
                  <p>
                    Write down all the business names you can think of. These
                    are brand names that can be termed good (mostly). Why?
                    Because you could easily remember them. Business or product
                    names with easy recall value emerge victorious amidst tough
                    competition. When customers remember your brand, they are
                    more likely to purchase from you.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                 src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="row  characteristics-of-good-row-2">
            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                     src={imageUrl + "download (4).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Good Appearance</h3>
                  <p>
                    Other than sounding good, a brand name should also look
                    good. It is important to remember that a brand name appears
                    in every place - on packaging, website
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Good Appearance</h3>
                  <p>
                    Other than sounding good, a brand name should also look
                    good. It is important to remember that a brand name appears
                    in every place - on packaging, website, social media,
                    marketing collaterals and also along with the logo. If it
                    doesn’t appear good, customers may turn away.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                 src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                     src={imageUrl + "download (3).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Evokes Positive Responses</h3>
                  <p>
                    A creative brand name evokes positive responses from
                    customers around the world. It helps customers connect with
                    the brand on an emotional
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Evokes Positive Responses</h3>
                  <p>
                    A creative brand name evokes positive responses from
                    customers around the world. It helps customers connect with
                    the brand on an emotional level and trust it. Also, a good
                    brand name is culturally sensitive - it doesn’t hurt the
                    sentiments of any group of people.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                     src={imageUrl + "download (2).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Flexibility & Scalability</h3>
                  <p>
                    Every business aims to grow and become huge. New products
                    and services, inevitably, become part of it. A brand name
                    should, thus, be adaptable so that it can
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Flexibility & Scalability</h3>
                  <p>
                    Every business aims to grow and become huge. New products
                    and services, inevitably, become part of it. A brand name
                    should, thus, be adaptable so that it can accommodate the
                    company's growing needs. This flexibility also enables it to
                    adjust to a changing market environment and stay relevant.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                 src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-xxl-3 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "download (1).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Legally Available & Protectable</h3>
                  <p>
                    Legal availability of the brand name is important. If it is
                    already owned by someone else, you might not get it at all.
                    Also, the name should be trademarkable
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Legally Available & Protectable</h3>
                  <p>
                    Legal availability of the brand name is important. If it is
                    already owned by someone else, you might not get it at all.
                    Also, the name should be trademarkable. It is a vital step
                    to ensure any wrongful use by competitors. Domain name
                    availability for the brand’s name is crucial to building an
                    online presence.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                 src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Winning Brand Names - Crafted By Us */}
      <section className="winning-brand-names">
        <div className="container">
          <div className="row">
            <div className="winning-brand-names-heading-div">
              <h2>
                Winning Brand Names -
                <span className="every-pr"> Crafted By Us</span>
              </h2>

              <TalkToUs />
            </div>
            <p>
              Brand names evoke a feeling. If this feeling is positive, rest
              assured, your business is already on its winning path. At DN
              Designs, we come up with creative product or business name ideas
              that leave a positive first impression and set you on a path to
              success.
            </p>

            <div className="winning-brand-companies-col">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="winning-brand-companies">
                    <img
                      src={imageUrl + "fluke logo.webp"}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="winning-brand-companies">
                    <img
                      src={imageUrl + "miviq logom.webp"}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="winning-brand-companies">
                    <img
                      src={imageUrl + "mr-bomzy logo.webp"}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="winning-brand-companies">
                    <img
                      src={imageUrl + "bobalist logo.webp"}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}

      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName} />
    </div>
  );
}

export default page;
