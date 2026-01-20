export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./services.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import OurWorkServiceTabs from "@/Components/OurWorkServiceTabs/OurWorkServiceTabs";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("services", null, false);
  } catch (error) {
    return {
      title: "Services",
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
    pageData = await getPageById("services", null, true);
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
  const heading = "Services";
  const para =
    "Successful brands are not made in a day. They are a result of consistent hard work, perseverance and unwavering passion. Long-term vision, strategy and creativity are pivotal too. Lots of work and lots of dedication are required. This is why you need the services of a branding & design agency like us. Let’s walk you through our services and inform you of our capabilities and approach. If there are questions in your mind, check out our FAQs section. Alternatively, reach out to us and we will promptly answer them.";

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Your product is your passion project. You want it to look stunning, attract customers and be a total sell-out. However, in reality, it is easier said than done. There are just so many things to take care of. It can be a little overwhelming. We know this, and therefore we offer a complete range of branding and design services for your benefit. All you need to do is get in touch with us and we can discuss your project over a cup of coffee.";

  // faqs content
  const leftFaqs = [
    {
      question: "What services does DN Designs Offer?",
      answer:
        "At DN Designs, we offer end-to-end branding and design solutions. This includes conducting research as well as creating and executing a brand strategy. We design the logo, packaging, website and marketing collaterals for brands. In addition, we also provide digital marketing, photography & video animation solutions.",
    },
    {
      question:
        "How can a creative branding & design agency like DN Designs help me, a new business?",
      answer:
        "DN Designs can help design your brand identity and strategy. We can design your logo, packaging, catalogue, and website. We can also help craft your communication strategy and establish your digital presence through our services like SEO, social media marketing, performance marketing, photography and video marketing. All these can, together, make your brand stand out and be successful amidst tough competition.",
    },
    {
      question: "How do you decide on a branding & design concept?",
      answer:
        "Research comes first. This involves understanding your product and its USP, your vision for the future, your target audience, your competitors and the overall market. Based on the research, we create reference boards and mood boards that provide you with several branding & design ideas. Once you select an option, we work to refine it as per your suggestions. Eventually, we achieve the final branding and design concept.",
    },
    {
      question:
        "Can you help us rebrand while ensuring that we do not alienate our existing customers?",
      answer:
        "Yes, we do provide rebranding services. Also, we are aware that your existing customers are important to you, and they have certain expectations from your brand. We realise that significant changes can hurt your brand and alienate your existing customers. Therefore, our rebranding strategy is designed with your current customers and their expectations from you in mind. ",
    },
    {
      question:
        "Do you provide packaging design services for FMCG or D2C brands?",
      answer:
        "Absolutely, we do provide custom packaging solutions for FMCG and D2C brands. We create packaging designs that stand out on store shelves and additionally engage customers on online stores. Our packaging design services ensure that your product performs well in the market, improves sales and drives revenue. ",
    },
    {
      question:
        "Do you provide UI/UX design services for apps or digital products?",
      answer:
        "Yes, we design user interface (UI) and user experience (UX) for your websites and applications. Through our UI/UX design, we ensure that your website and app have beautiful and easy-to-use interfaces and that users have an overall positive experience with your digital products.",
    },
    {
      question:
        "I need digital marketing services apart from design services? Do you provide it?",
      answer:
        "Yes, being an end-to-end branding and design agency, we do offer digital marketing services. These include website design & development, SEO, social media marketing, performance marketing, influencer marketing and video marketing.",
    },
    {
      question:
        "Can DN Designs handle end-to-end e-commerce website development?",
      answer:
        "Yes, we can surely take care of your e-commerce website development - right from the initial planning stage to finally creating your website. In addition to making your e-commerce website visually appealing, user-friendly and SEO optimised, we also ensure integration of a payment gateway and upload and manage inventory (the latter for 6 to 12 months, depending on your project).",
    },
  ];

  const rightFaqs = [
    {
      question:
        "What industries do you work with, and what geographical area do you serve?",
      answer:
        "Though we are a Noida-based company, we collaborate and work with clients globally. We are also not restricted to particular verticals and are happy to work with different types of companies, be it retail, food & beverage, pharmaceuticals, nutraceuticals, education, tourism and cosmetics & skincare. In addition, we work with start-ups, medium-sized companies as well as big established brands.",
    },
    {
      question: "Do you offer retainer or monthly creative support packages?",
      answer:
        "This entirely depends on the services you are seeking. For some services, like logo design, packaging design, company profiling, UI/UX and website design, we charge one-time fees. For services that require continuous work, we offer a monthly creative support package. These include activities like social media marketing, SEO, and performance marketing.",
    },
    {
      question:
        "How do you deal with feedback and revisions during the project?",
      answer:
        "Client feedback is important; that is what we believe in. Your feedback helps us effectively align our design with your vision and goal. For this reason, except for a couple of services, we do not restrict ourselves to any particular number of revisions. We accept feedback and provide revisions until the client is satisfied with the final product.",
    },
    {
      question:
        "Will we have someone to serve as a point of contact throughout the project?",
      answer:
        "Yes, there will be a dedicated project manager who will not only serve as a point of contact throughout but will also ensure the timely and satisfactory delivery of your work.",
    },
    {
      question:
        "Do you offer consultations before we actually say yes to working with you?",
      answer:
        "Certainly! We understand that you have multiple doubts and questions, and you need a resolution for all these before you entrust us with your project. Therefore, we gladly provide you with consultancy services and try to give you all the necessary information.",
    },
    {
      question:
        "Do you offer a complete package, or can I choose the services I need?",
      answer:
        "We are an end-to-end branding and design agency; therefore, we offer a complete branding package. However, we are also quite flexible, and hence, provide you with a customised package tailored to your needs.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes, we collaborate with clients all over the world. We work remotely for them and communicate with them in their preferred time zone.",
    },
    {
      question: "Can I be involved in the creative process?",
      answer:
        "It is your product that we are working for; therefore, you are an integral part of the entire process. We discuss your project with you, share our design concepts and ideas, seek your feedback and get your approval on the final design before launching it.",
    },
  ];

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "services"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* services hero */}
      <section>
        <PagesHero heading={heading} para={para} />
      </section>

      {/* our services */}
      <section className="our-service">
        <div className="container">
          <div className="row">
            <h2>
              <span className="our">Our</span> Services
            </h2>
            <div className="col-12 col-md-4 service-div">
              <div className="service-card">
                <div className="front">
                  <img
                    src={imageUrl + "brand-identity.webp"}
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>01</h3>
                  <p>Brand Identity</p>
                </div>

                <div className="back">
                  <div className="back-up">
                    <h3>01</h3>
                    <p>Brand Identity</p>
                    <div className="hr"></div>
                  </div>

                  <div className="back-down">
                    <ul>
                      <li>
                        <a
                          href="https://dndesigns.co.in/branding/"
                          className="page-linking"
                        >
                          Branding
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/logo-designing/"
                          className="page-linking"
                        >
                          Logo Designing
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/brand-name-suggestion/"
                          className="page-linking"
                        >
                          Brand Name Suggestion
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/packaging-design/"
                          className="page-linking"
                        >
                          Packaging Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/catalogue-designing/"
                          className="page-linking"
                        >
                          Catalogue Designing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 service-div">
              <div className="service-card">
                <div className="front">
                  <img
                    src={imageUrl + "Communication.webp"}
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>02</h3>
                  <p>Communication strategy</p>
                </div>

                <div className="back">
                  <div className="back-up">
                    <h3>02</h3>
                    <p>Communication strategy</p>
                    <div className="hr"></div>
                  </div>

                  <div className="back-down">
                    <ul>
                      <li>
                        <a
                          href="https://dndesigns.co.in/branding/"
                          className="page-linking"
                        >
                          Animation
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/logo-designing/"
                          className="page-linking"
                        >
                          Digital Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/brand-name-suggestion/"
                          className="page-linking"
                        >
                          Influencer Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/packaging-design/"
                          className="page-linking"
                        >
                          Social Media Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/catalogue-designing/"
                          className="page-linking"
                        >
                          Photography
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 service-div">
              <div className="service-card">
                <div className="front">
                  <img
                    src={imageUrl + "wegheghhvg.webp"}
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>03</h3>
                  <p>Web Design</p>
                </div>

                <div className="back">
                  <div className="back-up">
                    <h3>03</h3>
                    <p>Web Design</p>
                    <div className="hr"></div>
                  </div>

                  <div className="back-down">
                    <ul>
                      <li>
                        <a
                          href="https://dndesigns.co.in/branding/"
                          className="page-linking"
                        >
                          UI/UX Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/logo-designing/"
                          className="page-linking"
                        >
                          Web Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/brand-name-suggestion/"
                          className="page-linking"
                        >
                          SEO
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach project */}

      <section className="appr-pro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="appr-pro-main-head">
                How We Approach <span className="every-pr">Every Project</span>
              </h2>
              <p className="appr-pro-main-para">
                For us, every new project is a fresh new journey with its own
                set of challenges. Each demands an innovative strategy and
                solution; however, certain steps stay common and consistent.
              </p>
            </div>
            <div className="row appr-pro-row-main">
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Discovery and Planning</h3>
                    <p>
                      The fundamentals come first - understanding the product,
                      its USP, the brand’s vision, its target audience and
                      competitors. Solid research leads to a solid foundation
                      upon which we base our strategic plan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className="app-pro-div app-pro-div-gray">
                  <div>
                    <h3>Design, Development & Execution</h3>
                    <p>
                      Designing and developing practical options follows. A
                      crucial aspect of this step is revision and refinement. We
                      work on and modify our designs to ensure they match your
                      vision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Testing and Launch</h3>
                    <p>
                      Once everything is ready, it’s time to test it. For us,
                      testing is important both before and after the product
                      launch. This is to ensure that everything works smoothly
                      at both stages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-gray">
                  <div>
                    <h3>Ongoing Support</h3>
                    <p>
                      We provide our clients with ongoing support even after the
                      project is over. If you face problems post-completion of
                      the work, we are there to resolve them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* top capibilities */}

      <section className="top-cap">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Top<span className="every-pr"> Capabilities</span>
            </h2>
            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="top-cap-div m-3">
                <div className="text-center m-5">
                  <img src={imageUrl + "3gewugj.svg"} className="cap-img"></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and Designing is our core, and we
                    excel in it. BeDesigning is our core, and we excel in it.
                    BeDesigning is our core, and we excel in it. Bewe excel in
                    it. Be it the overall brand design, website design or
                    content design – we have expertise and experience in all. We
                    understand your vision and create a design that boosts your
                    brand value and increases ROI.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "engage-1.svg"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Engage</h3>
                  <p>
                    Interaction and engagement are vital for a brand’s success.
                    And we have mastered this art. Whether it is through text or
                    visuals,
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Engage</h3>
                  <p>
                    Interaction and engagement are vital for a brand’s success.
                    And we have mastered this art. Whether it is through text or
                    visuals, or organic or paid means, we take every route to
                    reach and engage with your audience. Engagement leads to
                    trust, which in turn enhances sales and revenue.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="top-cap-div m-3">
                <div className="text-center m-5">
                  <img src={imageUrl + "Achieve.svg"} className="cap-img"></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Achieve</h3>
                  <p>
                    We are a group of achievers. We firmly believe in achieving
                    results for all our endeavours.
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Achieve</h3>
                  <p>
                    We are a group of achievers. We firmly believe in achieving
                    results for all our endeavours. Hence, we adopt a
                    research-oriented and strategic approach in all our
                    projects. The ever-increasing addition to our ‘happy
                    clients’ list is a testimony to our achievements.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src={imageUrl + "imgi_2_Frame-427324112.webp"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* our work service tabs */}
      <OurWorkServiceTabs />

      {/* faqs */}

      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} pageName="services" />
    </div>
  );
}

export default page;
