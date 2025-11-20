import React from "react";
import "./ui-ux-design.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import PagesHero from "@/Components/PagesHero/PagesHero";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";

function page() {
  const heading = "Where Brands Are Born";
  const subHeading = "A Creative Branding Agency";
  const para =
    "  Successful brands are not made in a day. They are a result of consistent hard work, perseverance and unwavering passion. Long-term vision, strategy and creativity are pivotal too. Lots of work and lots of dedication are required. This is why you need the services of a branding & design agency like us. Let’s walk you through our services and inform you of our capabilities and approach. If there are questions in your mind, check out our FAQs section. Alternatively, reach out to us and we will promptly answer them.";

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

      {/* ui/ux design */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>

      {/* Designs that speak your industryis language */}

      <section className="designs-that-speak">
        <div className="container py-5">
          <h2 className="text-center fw-bold designs-that-head  mb-4 d-none d-lg-block d-md-block">
            Designs That Speak Your
            <br />
            <span style={{ color: "#CA2734" }}>Industry's Language</span>
          </h2>
          <h2 className="text-center fw-bold packaging-heading mb-4 d-block d-lg-none d-md-none">
            Designs That Speak Your
            <span style={{ color: "#CA2734" }}> Industry's Language</span>
          </h2>

          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/02/banner.jpg"
            alt=""
            className="img-fluid ui-img1"
          />
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/04/grin-care-2.jpg"
            alt=""
            className="img-fluid ui-img2"
          />
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/04/action-air.jpg"
            alt=""
            className="img-fluid ui-img3"
          />
        </div>
      </section>

      {/* UI/UX means nailing the basics */}
      <section className="nailing-the-basics">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 text-start">
              <h2 id="ui-heading">UI/UX Meaning - Nailing the Basics</h2>
              <div className="ui-description">
                <p className="ui-description mt-5">
                  Let’s understand this with an example. You visit a website.
                  Now, analyse your entire experience browsing through it. Did
                  you face any issues? Did you get the information you wanted,
                  or could you complete the task you went in to do? If your
                  entire navigation experience through the site was seamless,
                  simple and helpful, then this particular site has a good UX
                  design (user experience).
                </p>
                <p className="ui-description">
                  {" "}
                  How about the look and feel of the website? Was the colour
                  pleasing and the text readable? Were the various interactive
                  design elements like buttons, menus and icons impressive and
                  really easy to use? Did they add to your overall positive
                  experience? If your response is yes, then the site has a good
                  UI (user interface) design too.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/ui-ux.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Catalogue Designing - Our Process desktop view */}

      <section className="creating-your-brand">
        <div class="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Creating Your Brand Story,
            <span className="every-pr">
              <br />
              Your Way
            </span>
          </h2>
          <ul id="cards-create">
            <li class="card-create" id="card1-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Brand Understanding</h2>
                  <p>
                    If anything has to stand the test of time, it needs to begin
                    with a firm footing. In branding, this beginning is
                    understanding the product/business. We sit down with you for
                    a deep discussion to understand your product or service as
                    well as your vision and mission. This helps us make a good
                    start and prepares us for an exciting journey ahead.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card2-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Competitor Analysis</h2>
                  <p>
                    You are not alone in the market; there are several other
                    products in the same category out there trying to build
                    their presence. How do you craft your own little corner?
                    Analysing competition is crucial, and this is what we, as a
                    brand design company, do next. We conduct a thorough
                    research of your competitors and understand your current
                    position in the market to ensure that we have enough
                    knowledge and data to take a step forward, creating your
                    branding strategy.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card3-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Planning Your Brand</h2>
                  <p>
                    It’s now time to create your brand strategy. Every aspect of
                    branding is carefully thought out and discussed with you -
                    be it your brand personality, story, message, values, or
                    even communication and website design. As a creative
                    branding agency, we decide on these elements based on how we
                    want the audience to perceive your brand.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card4-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Implementing the Strategy</h2>
                  <p>
                    Let’s turn words and ideas into action. We now sit down to
                    do the actual work - naming your brand, designing your logo,
                    creating your packaging design, crafting a tagline,
                    composing your message, and much more. In addition, we
                    design and develop your website too.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card5-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Feedback & Launch</h2>
                  <p>
                    The final stage in our branding journey, this is where we
                    seek a review of our work. Based on your feedback, we make
                    changes, and reseek your feedback. Once we receive a green
                    light from you, we go ahead and launch your brand.
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
            Creating Your Brand Story,
            <span className="every-pr"> Your Way</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Understanding</h2>
                  <p>
                    If anything has to stand the test of time, it needs to begin
                    with a firm footing. In branding, this beginning is
                    understanding the product/business. We sit down with you for
                    a deep discussion to understand your product or service as
                    well as your vision and mission. This helps us make a good
                    start and prepares us for an exciting journey ahead.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Competitor Analysis</h2>
                  <p>
                    You are not alone in the market; there are several other
                    products in the same category out there trying to build
                    their presence. How do you craft your own little corner?
                    Analysing competition is crucial, and this is what we, as a
                    brand design company, do next. We conduct a thorough
                    research of your competitors and understand your current
                    position in the market to ensure that we have enough
                    knowledge and data to take a step forward, creating your
                    branding strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Planning Your Brand</h2>
                  <p>
                    It’s now time to create your brand strategy. Every aspect of
                    branding is carefully thought out and discussed with you -
                    be it your brand personality, story, message, values, or
                    even communication and website design. As a creative
                    branding agency, we decide on these elements based on how we
                    want the audience to perceive your brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Implementing the Strategy</h2>
                  <p>
                    Let’s turn words and ideas into action. We now sit down to
                    do the actual work - naming your brand, designing your logo,
                    creating your packaging design, crafting a tagline,
                    composing your message, and much more. In addition, we
                    design and develop your website too.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Feedback & Launch</h2>
                  <p>
                    The final stage in our branding journey, this is where we
                    seek a review of our work. Based on your feedback, we make
                    changes, and reseek your feedback. Once we receive a green
                    light from you, we go ahead and launch your brand.
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
              Characteristics of{" "}
              <span className="every-pr"> Good Brand Name?</span>
            </h2>
            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
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
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
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
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
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
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
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
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
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
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
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
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* craft desktop view*/}
     <section className="craft-desktop-view">
      <div className="container">
        <h2 className="text-center fw-bold craft-desktop-head  mb-4">
          Web Solutions
          <span style={{ color: "#CA2734" }}> We Craft</span>
        </h2>

        <div className="row g-4 row-1">
          <div className="col-12 col-lg-5 col-md-12 d-flex">
            <div className="landing-row p-5 rounded-4 text-start">
              <h2 className="craft-heading">
                Landing <br />
                PAGE
              </h2>
              <p className="craft-para mt-5">
                Your landing page’s sole purpose is to win over your audience,
                be it in perception, engagement or conversion. It should build
                brand identity, establish trust, and guide customers to take the
                desired actions. As a UI/UX design agency, we create exactly
                that.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7 col-md-12 d-flex">
            <div className="landing-row rounded-4 d-flex">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/12/LANDING-PAGE1.png"
                alt=""
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5 row-2">
          <div className="col-12 col-lg-5 col-md-12 d-flex">
            <div className="landing-row p-5 rounded-4 text-start">
              <h2 className="craft-heading">
                MULTIPAGE <br />
                WEBSITE
              </h2>
              <p className="craft-para mt-5">
                Your complete brand story, relevant information and product
                showcase – sharing all these with just a page doesn’t sound
                practical, right? We, therefore, design multipage websites to
                help users navigate from one wow moment to the next one. Because
                who doesn’t want to hear a great story?
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7 col-md-12 d-flex">
            <div className="landing-row rounded-4 d-flex">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/12/MULTIPAGE.png"
                alt=""
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5 row-3">
          <div className="col-12 col-lg-5 col-md-12 d-flex">
            <div className="landing-row p-5 rounded-4 text-start">
              <h2 className="craft-heading">
                ONLINE <br />
                STORE
              </h2>
              <p className="craft-para mt-5">
                Your online store is not just about your products. It’s where
                you can turn your casual visitors into loyal shoppers. Being a
                professional UI/UX design company, we brainstorm, strategise,
                and build online stores that are sophisticated, fast, and
                checkout-ready so your customers keep coming back for more.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7 col-md-12 d-flex">
            <div className="landing-row rounded-4 d-flex">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/12/ONLINE.png"
                alt=""
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5 row-4">
          <div className="col-12 col-lg-5 col-md-12 d-flex">
            <div className="landing-row p-5 rounded-4 text-start">
              <h2 className="craft-heading">
                DESIGN IN <br />
                FIGMA
              </h2>
              <p className="craft-para mt-5">
                We don’t just design in Figma; we live in it. It’s a place where
                we turn our ideas into functional yet aesthetic designs. Whether
                it’s wireframes or the final best dashboard designs, we make
                sure your UI is pixel-perfect and has a purpose.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7 col-md-12 d-flex">
            <div className="landing-row rounded-4 d-flex">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/12/FIGMA.png"
                alt=""
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* craft-mobile and tab-view */}
      <section className="craft-tab-view">
      <div className="conatiner">
        <div className="row craft-tab-view-row">
          <h2 className="text-center">
          Web Solutions
          <span style={{ color: "#CA2734" }}> We Craft</span>
        </h2>
          {/* first div */}
          <div className="craft-first-div-mobile">
            <div className="craft-first-div-mobile-content">
              <h2>
                DESIGN IN <br />
                FIGMA
              </h2>
              <p>
                We don’t just design in Figma; we live in it. It’s a place where
                we turn our ideas into functional yet aesthetic designs. Whether
                it’s wireframes or the final best dashboard designs, we make
                sure your UI is pixel-perfect and has a purpose.
              </p>
            </div>

            <div className="craft-first-div-mobile-img">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/12/FIGMA.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>



          {/* second div */}
          <div className="craft-first-div-mobile">
            <div className="craft-first-div-mobile-content">
              <h2>
                DESIGN IN <br />
                FIGMA
              </h2>
              <p>
                We don’t just design in Figma; we live in it. It’s a place where
                we turn our ideas into functional yet aesthetic designs. Whether
                it’s wireframes or the final best dashboard designs, we make
                sure your UI is pixel-perfect and has a purpose.
              </p>
            </div>

            <div className="craft-first-div-mobile-img">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/12/FIGMA.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>



          {/* third div */}
          <div className="craft-first-div-mobile">
            <div className="craft-first-div-mobile-content">
              <h2>
                DESIGN IN <br />
                FIGMA
              </h2>
              <p>
                We don’t just design in Figma; we live in it. It’s a place where
                we turn our ideas into functional yet aesthetic designs. Whether
                it’s wireframes or the final best dashboard designs, we make
                sure your UI is pixel-perfect and has a purpose.
              </p>
            </div>

            <div className="craft-first-div-mobile-img">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/12/FIGMA.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>



          {/* fourth div */}
          <div className="craft-first-div-mobile">
            <div className="craft-first-div-mobile-content">
              <h2>
                DESIGN IN <br />
                FIGMA
              </h2>
              <p>
                We don’t just design in Figma; we live in it. It’s a place where
                we turn our ideas into functional yet aesthetic designs. Whether
                it’s wireframes or the final best dashboard designs, we make
                sure your UI is pixel-perfect and has a purpose.
              </p>
            </div>

            <div className="craft-first-div-mobile-img">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/12/FIGMA.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>



        </div>
      </div>
      </section>

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
      <Form />
    </div>
  );
}

export default page;
