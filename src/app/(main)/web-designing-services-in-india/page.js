export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./web-designing-services-in-india.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import PagesHero from "@/Components/PagesHero/PagesHero";
import WebdesignVideoSwipper from "@/Components/WebdesignVideoSwipper/WebdesignVideoSwipper";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("web-designing-services-in-india", null, false);
  } catch (error) {
    return {
      title: "Web Designing Services in India",
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
  let imageUrl = "https://dndesigns.co.in/uploads/pages/";
  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("web-designing-services-in-india", null, true);
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

  const heading = "Website Design Agency";
  const subHeading = "Building Websites That Deliver Results";
  const para =
    "In the online space, a website represents and promotes your business. It informs your audience about who you are and what you are offering. Additionally, it helps establish an emotional connection and trust with your customers. However, just a random website cannot achieve the desired results. A website needs to be thoughtful, beautiful and technically robust. Want to know in greater detail? Follow us, a website design agency in India, and find out how we create websites that deliver results. Browse through our website design services and work portfolio, and find answers to some related questions that you might have.";

  // faqs content
  const leftFaqs = [
    {
      question:
        "What kind of services does a website design company like DN Designs offer? ",
      answer:
        "A website design company like DN Designs offers a complete range of services. It includes creating a brand new website or redesigning an existing one. It could either be an informative or an e-commerce website. We also create content for your website and offer SEO services to promote your business. In addition, we help you migrate your website to other platforms, too.",
    },
    {
      question:
        "Could you elaborate on the time and the cost associated with website design?",
      answer:
        "Each website is different. So, time and cost involved are also not the same. A simple and small website takes comparatively less time and money than a large complex one. However, you can keep an estimated timeframe of 4-8 weeks for the entire website design and development work.",
    },
    {
      question: "I need to redesign my current website. Can you do it?",
      answer:
        "Yes, we can surely redesign your website. Just contact us and let's discuss your goals and vision.",
    },

    {
      question: "How do you create a website? How does your process unfold?",
      answer:
        "Our website design and development process begins with a discussion about your brand and goals. We then plan out the website, design its UI/UX and create content. When everything is ready, we begin the website development work. In the end, we test it, fix errors and make it live.",
    },

    {
      question:
        "Will I be informed about the progress of my website design while it is still being made?",
      answer:
        "Yes, we make sure that you are constantly informed and updated about the progress of your website design. We welcome any suggestions from your side throughout the process and incorporate them (if possible) into our website design.",
    },

    {
      question:
        "Can I expect DN Designs to build an e-commerce website for my business?",
      answer:
        "Yes, you can absolutely approach us to build your e-commerce website. In nearly a decade of our existence, we have built several of these for our clients and thus have plenty of experience in the field. ",
    },

    {
      question: "Can you suggest a suitable platform for my website? ",
      answer:
        "Yes, this is an important part of our website design process. Once we understand your product and goals, we decide the type of website best suited for your business. This directly leads us to suggesting and selecting the best platform for your website.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "What about third-party tools and apps? Is integration with my website a possibility?",
      answer:
        "Yes, it is totally a possibility. If there is a need to integrate third-party tools and apps, we take care of that as well during our design and development process.",
    },

    {
      question: "Will my website work well on mobile phones?",
      answer:
        "Yes, we build mobile-friendly websites. Your customers can easily browse through and take necessary actions (like purchasing a product) on your website while using their mobile phones.",
    },

    {
      question: "Can you provide SEO services and promote my website?",
      answer:
        "As a website design company, we create SEO-optimised websites for better search rankings and user experience. However, if you need other on-page and off-page SEO activities on an ongoing basis, we can include them in your package.",
    },

    {
      question: "Do you offer maintenance and support work afterwards?",
      answer:
        "We are aware that certain issues may need our attention after the website is live. So, yes, we do provide maintenance work for 9 to 12 months after delivering your project.",
    },

    {
      question: "Will I be able to add and update content on the website?",
      answer:
        "Yes. Once we hand over your site, you can add and update information yourself. Both WordPress and Shopify are user-friendly platforms, and you can easily work on them. If you are new to these platforms, we can offer you initial guidance to get started.",
    },

    {
      question: "Do you provide hosting & domain services as well?",
      answer:
        "No, we are a website design and development company in India. We specialise in designing and developing websites. We do not provide domain or hosting services. However, we can make suitable suggestions for your business website.",
    },

    {
      question: "I want you to design my website. How should we get started?",
      answer:
        "Firstly, we are glad that you have decided to work with us. To get started, you can simply fill out the form below. Alternatively, you can drop us an email at info@dndesigns.co.in or give us a call at  91 9416011100.",
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Need a website that can help build awareness and trust for your brand? Maybe you want to generate leads or increase online sales through your website. Whatever your goals may be, as a website design and development company in India, we ensure that you achieve them. We build websites that look good, reflect your brand identity and provide positive user experiences. Interested in finding out more? Let’s meet and discuss.";
  const pageName = "website-design";

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "web-designing-services-in-india"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* ui/ux design */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>

      {/* Brand Identity We Created*/}
      <section className="brand-identity">
        <div className="container">
          <h2 className="text-center">
            Websites We <span className="every-pr"> Created</span>
          </h2>
          <div className="row brand-identity-row">
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                <img
                  // src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                  src={imageUrl + "bobalist-mockup.webp"}
                  className="img-fluid"
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>The Bobalist</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    The Bobalist is a first-of-its-kind product in India. The
                    brand collaborated with us to create an interactive
                    E-Commerce website to appeal to its young and fun-loving
                    audience. Our website design not only impressed the audience
                    but also increased their sales.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                <img src={imageUrl + "Qualiteq.webp"} className="img-fluid" />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Qualiteq</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Dubai-based company, Qualiteq, offers its services in the
                    telecommunications and technology sectors. For them, we
                    created a website that exuded a professional aura. In
                    addition, we designed the website to highlight Qualiteq’s
                    key services and areas of expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row brand-identity-row">
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                <img src={imageUrl + "bombzy.webp"} className="img-fluid" />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Mr. Bomzy</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Another first-of-its-kind product in India, Mr. Bomzy offers
                    cocktail bombs to make your cocktails and parties more
                    exciting. We created an E-commerce website with a playful
                    vibe to attract its Gen Z audience and give them a good
                    shopping experience. Lively visuals and videos further
                    elevated the customer experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                <img src={imageUrl + "foodsure.webp"} className="img-fluid" />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Foodsure </h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    India’s number one food and beverage consultant, Foodsure,
                    wanted a more professional-looking website which effectively
                    showcased its work and connected with its audience. We
                    designed an interactive website that fulfilled its
                    requirements and helped it increase engagement with its
                    current audience base.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row brand-identity-row">
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                <img src={imageUrl + "parda.webp"} className="img-fluid" />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>The Parda</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    The Parda, one of the first brands to introduce blackout
                    curtains in India, already enjoyed a strong presence on
                    e-commerce platforms. However, it approached us to create
                    its own e-commerce website to expand its reach. We designed
                    a premium-looking website that retained a traditional feel
                    and provided an easy browsing, filtering and shopping
                    experience to its customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                <img src={imageUrl + "Letssup.webp"} className="img-fluid" />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Let's Supp </h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    As a nutraceutical brand, Let’s Supp aspired to win the
                    trust of its customers through transparency. The founder
                    wanted to establish that wellness isn’t complicated; it is
                    simple and joyful. We designed an elegant & minimal website
                    that highlighted its key information and messages clearly
                    and made purchasing its supplements an effortless process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Catalogue Designing - Our Process desktop view */}

      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Our Website Design <span className="every-pr">Process</span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Research & Planning</h2>
                  <p>
                    We begin with research and planning. We sit down with our
                    clients to understand them - their business, vision and
                    goals. Additionally, we research to understand their target
                    audience and market. Once we know their needs, we plan the
                    website. Should it be E-Commerce or an informative website?
                    What should be its structure, and what technologies should
                    be used to build it? We plan out every detail at the outset.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>UI/UX Design</h2>
                  <p>
                    In the next step, our expert website designers create the
                    UI/UX of the website. Our focus is on creating a responsive
                    website design that appears visually pleasing, gives a
                    positive impression and provides a good user experience. To
                    fulfil these goals, we design the layout of the website, its
                    visual appearance, and its navigation structure.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Content Creation</h2>
                  <p>
                    With the design ready, it is now time to develop content.
                    And, by content, we do not mean just the written text;
                    rather, we include graphics, illustrations, videos, and all
                    other materials that form part of the website. All these,
                    together, play a key role in the success of your website.
                    Hence, we make them relevant and valuable for your audience.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Website Development</h2>
                  <p>
                    Both the UI/UX design and content development work are now
                    complete; therefore, we proceed to the next stage in our
                    process. Here, we develop the website and add content as
                    well as additional features (contact forms, navigation menu,
                    SEO tools) into it. By the end of this stage, a properly
                    functioning website is ready.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Review & Launch</h2>
                  <p>
                    Once the website is ready, we test it to make sure that it
                    works well on all devices. If there are mistakes, we correct
                    them. When everything is perfect, we make the website live.
                    Afterwards, another round of testing is carried out to
                    address any new issues that might have emerged.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Creative Catalogue Designing - Our Process mobile view */}

      <section className="creating-your-brand-mobile">
        <div className="conatiner">
          <h2 className="text-center our-brand-heading-a-mobile">
            Our Website Design <span className="every-pr"> Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Research & Planning</h2>
                  <p>
                    We begin with research and planning. We sit down with our
                    clients to understand them - their business, vision and
                    goals. Additionally, we research to understand their target
                    audience and market. Once we know their needs, we plan the
                    website. Should it be E-Commerce or an informative website?
                    What should be its structure, and what technologies should
                    be used to build it? We plan out every detail at the outset.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>UI/UX Design</h2>
                  <p>
                    In the next step, our expert website designers create the
                    UI/UX of the website. Our focus is on creating a responsive
                    website design that appears visually pleasing, gives a
                    positive impression and provides a good user experience. To
                    fulfil these goals, we design the layout of the website, its
                    visual appearance, and its navigation structure.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Content Creation</h2>
                  <p>
                    With the design ready, it is now time to develop content.
                    And, by content, we do not mean just the written text;
                    rather, we include graphics, illustrations, videos, and all
                    other materials that form part of the website. All these,
                    together, play a key role in the success of your website.
                    Hence, we make them relevant and valuable for your audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Website Development</h2>
                  <p>
                    Both the UI/UX design and content development work are now
                    complete; therefore, we proceed to the next stage in our
                    process. Here, we develop the website and add content as
                    well as additional features (contact forms, navigation menu,
                    SEO tools) into it. By the end of this stage, a properly
                    functioning website is ready.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Review & Launch</h2>
                  <p>
                    Once the website is ready, we test it to make sure that it
                    works well on all devices. If there are mistakes, we correct
                    them. When everything is perfect, we make the website live.
                    Afterwards, another round of testing is carried out to
                    address any new issues that might have emerged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics of Good Brand Name? */}

      <section className="characteristics-of-good">
        <div className="container">
          {/* 1st row */}
          <div className="row">
            <h2 className="text-center headg">
              What We
              <span className="every-pr"> Actually Do</span>
            </h2>
            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "Frame 427324115 (4).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>New Website Development</h3>
                  <p>
                    Whether you are a new business aspiring to establish your
                    online presence or a successful business just realising the
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>New Website Development</h3>
                  <p>
                    Whether you are a new business aspiring to establish your
                    online presence or a successful business just realising the
                    importance of a strong digital presence, what you need is a
                    website. And that too, a beautiful-looking website that
                    effectively fulfils your objectives, be it building brand
                    awareness or boosting sales. As a website design agency, we
                    offer you just that – we build brand new websites for you.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "Group 36813 (1).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Website Redesign</h3>
                  <p>
                    Does your website appear dull and outdated, or does it not
                    amply reflect your brand identity? Is the user experience
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Website Redesign</h3>
                  <p>
                    Does your website appear dull and outdated, or does it not
                    amply reflect your brand identity? Is the user experience
                    poor, or are there technical issues troubling you? Whatever
                    the problem, you surely do not need to worry. Our design
                    experts are here to redesign your website and make it more
                    visually appealing, SEO-friendly and technically solid.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "Frame 427324115 (5).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Migration To WordPress/Shopify</h3>
                  <p>
                    Several reasons can compel you to shift your website to
                    WordPress or Shopify. For example, you might want to make
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Migration To WordPress/Shopify</h3>
                  <p>
                    Several reasons can compel you to shift your website to
                    WordPress or Shopify. For example, you might want to make
                    your website more secure, responsive, SEO-friendly and easy
                    to use. However, migrating a website is a bit of a technical
                    task, best performed by experts. This is where we step in.
                    We make sure that your website migration process is smooth
                    and error-free.
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
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "Frame 427324115 (6).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>SEO Service</h3>
                  <p>
                    A well-made website with few visitors can be a little
                    disappointing. However, this is how a website may end up
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>SEO Service</h3>
                  <p>
                    A well-made website with few visitors can be a little
                    disappointing. However, this is how a website may end up
                    without any SEO activities. SEO ensures that your website
                    appears at the top of the SERP whenever users search for
                    certain keywords. Our SEO experts are here to achieve
                    precisely this ranking for your business. We aspire to
                    increase traffic, conversions and profits for your business.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "Frame 427324115 (7).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Ongoing Support</h3>
                  <p>
                    A website needs to be regularly updated, monitored and
                    maintained. We are aware of this, and therefore, we do not
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Ongoing Support</h3>
                  <p>
                    A website needs to be regularly updated, monitored and
                    maintained. We are aware of this, and therefore, we do not
                    immediately leave our website once we have designed,
                    developed, and delivered it to our clients. We are there to
                    solve any problem or complete work that may arise at a later
                    stage and require our attention. Our web design experts
                    provide ongoing support for a specific period of time for
                    this purpose.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "Group 36813 (2).svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Content Management System</h3>
                  <p>
                    You need to update your website continuously. For instance,
                    you may want to promote a new product or a limited-period
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Content Management System</h3>
                  <p>
                    You need to update your website continuously. For instance,
                    you may want to promote a new product or a limited-period
                    offer. There could also be an upcoming event about which you
                    want to share information. While our user-friendly websites
                    make it easy for you to do these yourself, we are also there
                    to perform these tasks on your behalf if you want us to. We
                    make sure that your website stays updated and relevant for
                    your customers all the time.
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

      {/* Our Technologies */}

      <section className="our-technologies">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="our-technologies-content">
                <h3>
                  Our <span className="every-pr">Technologies</span>
                </h3>
                <p>
                  How do we create exceptional websites? It’s simple, through
                  our technology toolkit. The toolkit includes modern
                  frameworks, powerful programming languages and dynamic CMS
                  platforms. It helps us create websites that are robust,
                  secure, user-friendly, adaptable and visually appealing, all
                  at the same time.
                </p>
                <p>
                  To elaborate a little on our tools, we utilise frameworks like
                  React Native, languages like JavaScript, PHP and HTML/CSS and
                  CMS platforms like WordPress and Shopify.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6 our-technologies-img-div">
              <img
                src={imageUrl + "Frame-1000001599.jpg"}
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/* WebdesignVideoSwipper */}
      <WebdesignVideoSwipper />

      {/* Make your brand click! */}
      <section className="make-your-brand">
        <div className="container">
          <div className="row">
            <h2>Make your brand click!</h2>
            <img
              src={imageUrl + "lowest-image-on-page.webp"}
              className="img-fluid"
            />

            <div className="col-12 col-md-6 make-your-brand-col">
              <p>
                What makes a brand click? A good product aside, it is its power
                to connect with customers and win their trust that works in its
                favour. A website plays a huge role in this. A beautiful and
                easy-to-navigate website with plenty of relevant information
                helps customers connect with and trust a brand more.
              </p>
            </div>

            <div className="col-12 col-md-6 make-your-brand-col">
              <p>
                At DN Designs, we excel in creating these websites. We build
                websites that are visually pleasing, responsive, SEO-optimised
                and full of valuable information. With our creative website
                designs, you can successfully reach your audience, build
                connections and trust, increase sales and make your brand click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}

      <section className="faqs">
        <div className="container">
          <div className="row text-center">
            {/* <h2>Frequently Asked Questions</h2> */}
          </div>
        </div>
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName} />
    </div>
  );
}

export default page;
