import React from "react";
import "./services.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";

import "./services.css";
import OurWorkServiceTabs from "@/Components/OurWorkServiceTabs/OurWorkServiceTabs";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";

function page() {
  // hero section content
const heading ="Services"
const para = "Successful brands are not made in a day. They are a result of consistent hard work, perseverance and unwavering passion. Long-term vision, strategy and creativity are pivotal too. Lots of work and lots of dedication are required. This is why you need the services of a branding & design agency like us. Let’s walk you through our services and inform you of our capabilities and approach. If there are questions in your mind, check out our FAQs section. Alternatively, reach out to us and we will promptly answer them."
  


// faqs content
  const leftFaqs = [
    {
      question: "How can I contact your team?",
      answer:
        "You can use the contact form or call us directly at +91-9999999999.",
    },
    {
      question: "Do you offer remote consultation?",
      answer:
        "Yes! We do virtual meetings over Zoom, Google Meet, or Microsoft Teams.",
    },
    {
      question: "Do you offer remote consultation?",
      answer:
        "Yes! We do virtual meetings over Zoom, Google Meet, or Microsoft Teams.",
    },
  ];

  const rightFaqs = [
    {
      question: "Where is your office located?",
      answer: "We are based in Noida, India, but work with clients worldwide.",
    },
    {
      question: "What is your response time?",
      answer: "We usually reply within 24 hours of receiving your query.",
    },
  ];

  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

        {/* services hero */}
      <section>
        <PagesHero heading={heading}  para={para}/>
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
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/brand-identity.jpg"
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
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/brand-identity.jpg"
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
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/brand-identity.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>01</h3>
                  <p>Brand  Catalogue Designing</p>
                </div>

                <div className="back">
                  <div className="back-up">
                    <h3>01</h3>
                    <p>Brand  Catalogue Designing</p>
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
                    <h3>Discovery & Planning</h3>
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
                    <h3>Testing & Launch</h3>
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
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
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
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
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
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design – we have
                    expertise and experience in all. We understand your vision
                    and create a design that boosts your brand value and
                    increases ROI.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
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
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design – we have
                    expertise and experience in all. We understand your vision
                    and create a design that boosts your brand value and
                    increases ROI.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* our work service tabs */}
      <OurWorkServiceTabs />

      {/* faqs */}

      <section className="faqs">
        <div className="container">
          <div className="row text-center">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>

        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>


      {/* Form */}
      <Form/>
    </div>
  );
}

export default page;
