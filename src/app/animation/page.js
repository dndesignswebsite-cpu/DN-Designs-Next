import React from "react";
import "./animation.css";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import AnimationSwipper from "@/Components/AnimationSwipper/AnimationSwipper";
import PagesHero from "@/Components/PagesHero/PagesHero";

function page() {

  const heading ="Where Brands Are Born"
  const subHeading ="A Creative Branding Agency"
  const para ="  Successful brands are not made in a day. They are a result of consistent hard work, perseverance and unwavering passion. Long-term vision, strategy and creativity are pivotal too. Lots of work and lots of dedication are required. This is why you need the services of a branding & design agency like us. Let’s walk you through our services and inform you of our capabilities and approach. If there are questions in your mind, check out our FAQs section. Alternatively, reach out to us and we will promptly answer them."
  

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

      {/* branding hero */}
      {/* ui/ux design */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para}/>
      </section>



      <AnimationSwipper/>

      {/* We Are The Leading Video */}
      <section className="we-are-the-leading">
        <div className="container">
          <div className="row">
            <h3>We Are The Leading Video Production Company For Brands</h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                A video shouldn’t just play; it should pull its viewer in (well,
                figuratively speaking). It should fulfil its objective (educate,
                promote or entertain), communicate brand value, build trust and
                inspire customers to convert. As a business animation studio in
                Noida, we provide you just that. It doesn’t matter whether you
                are an emerging start-up or an established brand; we work with
                equal enthusiasm.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                We focus on your objectives and vision and pair them up with our
                creative and technical skills. Our studio is teeming with
                strategists, scriptwriters, cinematographers, editors, social
                media experts and production team – all of whom pool in their
                special talents to transform your vision into reality. Want us
                to create a compelling video that grabs attention, evokes
                emotion and enhances engagement? Just get in touch with us.
              </p>
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

      {/*The Protagonists */}

      <section className="appr-pro">
        <div className="container">
          <div className="">
            <div className="row appr-pro-row-main">
              <div className="col-12 col-md-12 col-lg-6 mt-3">
                <h2 className="appr-pro-main-head">
                  The Protagonists of
                  <span className="every-pr"> Catalogue Design</span>
                </h2>
              </div>

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
            </div>
          </div>

          <div className="row appr-pro-row-main">
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Discovery & Planning</h3>
                  <p>
                    The fundamentals come first - understanding the product, its
                    USP, the brand’s vision, its target audience and
                    competitors. Solid research leads to a solid foundation upon
                    which we base our strategic plan.
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
                    launch. This is to ensure that everything works smoothly at
                    both stages.
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
                    project is over. If you face problems post-completion of the
                    work, we are there to resolve them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Animation */}
      <section className="power-of-animation">
        <diV className="container">
          <div className="row text-center power-of-animation-row">
            <h3>The Power of Animation</h3>
            <p>Spark Interest & Build Engagement</p>
            <div className="col-12 col-md-6 ">
              <div className="horror-image-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.jpg"
                  className="img-fluid horror-img"
                ></img>
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/11.jpg"
                  className="img-fluid normal-img"
                ></img>
              </div>
            </div>

            <div className="col-12 col-md-6  ">
              <div className="horror-image-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/2-2.jpg"
                  className="img-fluid horror-img"
                ></img>
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/22.jpg"
                  className="img-fluid normal-img"
                ></img>
              </div>
            </div>
          </div>
        </diV>
      </section>

      {/* User Engagement  User Conversion */}

      <section className="user-engagement">
        <div className="container">
          <div className="row">
            <div className="col-5"> 
            <div className="user-engagement-div user-engagement-div-sh">
              <div className="user-eng-up-div">
                <img
                  className="user-eng-svg-img"
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                ></img>
                <h4><span className="user-engagement-number">36% <br/></span> INCREASE</h4>
              </div>
              <h3>User Engagement</h3>
              <p>Users are more inclined to engage with and trust a business after watching animation videos. The engagement can increase 2X on interactive videos compared to static ones.</p>
            </div>
            </div>

               <div className="col-2"> 
            <div className="user-engagement-div">
            <img src="http://dndesigns.co.in/wp-content/uploads/2025/07/172356855_ae84189b-ee2b-40e9-8ad6-4b3c9585df84.jpg" className="img-fluid"></img>
            </div>
            </div>


                  <div className="col-5"> 
            <div className="user-engagement-div user-engagement-div-sh">
              <div className="user-eng-up-div">
                <img
                  className="user-eng-svg-img"
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                ></img>
                <h4><span className="user-engagement-number">36% <br/></span> INCREASE</h4>
              </div>
              <h3>User Engagement</h3>
              <p>Users are more inclined to engage with and trust a business after watching animation videos. The engagement can increase 2X on interactive videos compared to static ones.</p>
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
      <Form/>
    

    </div>
  );
}

export default page;
