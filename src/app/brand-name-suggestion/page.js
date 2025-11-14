import React from 'react'
import "./brand-name-suggestion.css"
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb'
import TalkToUs from '@/Components/TalkToUs/TalkToUs'
import Faqs from '@/Components/Faqs/Faqs'
import Form from '@/Components/Form/Form'

function page() {
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
        <Breadcrumb/>
      </section>

      {/* branding hero */}
      <section className="logo-designing-hero">
        <div className="container">
          <div className="row">
            <h1>Where Brands Are Born</h1>
            <h3>A Creative Branding Agency</h3>
            <div className="col-12 col-md-4">{/* .. */}</div>
            <div className="col-12 col-md-8">
              <div className="talk-to-us-desktop">
                <TalkToUs />
              </div>
              <p>
                Successful brands are not made in a day. They are a result of
                consistent hard work, perseverance and unwavering passion.
                Long-term vision, strategy and creativity are pivotal too. Lots
                of work and lots of dedication are required. This is why you
                need the services of a branding & design agency like us. Let’s
                walk you through our services and inform you of our capabilities
                and approach. If there are questions in your mind, check out our
                FAQs section. Alternatively, reach out to us and we will
                promptly answer them.
              </p>
              <div className="talk-to-us-mobile">
                <TalkToUs />
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
              Characteristics of <span className="every-pr"> Good Brand Name?</span>
            </h2>
            <div className="col-12 col-md-6 col-lg-3 px-2 characteristics-of-good-main-div">
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

            <div className="col-12 col-md-6 col-lg-3 px-2 characteristics-of-good-main-div">
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

            <div className="col-12 col-md-6 col-lg-3 px-2 characteristics-of-good-main-div">
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

            <div className="col-12 col-md-6 col-lg-3 px-2 characteristics-of-good-main-div">
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
            <div className="col-12 col-md-6 col-lg-3 px-2 characteristics-of-good-main-div">
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

            <div className="col-12 col-md-6 col-lg-3 px-2 characteristics-of-good-main-div">
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

            <div className="col-12 col-md-6 col-lg-3 px-2 characteristics-of-good-main-div">
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

            <div className="col-12 col-md-6 col-lg-3 px-2 characteristics-of-good-main-div">
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


 {/* Winning Brand Names - Crafted By Us */}
      <section className="winning-brand-names">
      <div className="container">
        <div className="row">
        <div className="winning-brand-names-heading-div">
          <h2>Winning Brand Names -<span className="every-pr"> Crafted By Us</span></h2>
                

                <TalkToUs/>
        </div>
        <p>Brand names evoke a feeling. If this feeling is positive, rest assured, your business is already on its winning path. At DN Designs, we come up with creative product or business name ideas that leave a positive first impression and set you on a path to success.</p>

          <div className="winning-brand-companies-col">
               <div className="row">
               <div className="col-12 col-md-6 col-lg-3">
               <div className="winning-brand-companies">
               <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/fluke.png" className="img-fluid"/>
               </div>
               </div>
               <div className="col-12 col-md-6 col-lg-3">
               <div className="winning-brand-companies">
               <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/site-icon-1.png" className="img-fluid"/>
               </div>
               </div>
               <div className="col-12 col-md-6 col-lg-3">
               <div className="winning-brand-companies">
               <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/mr-bomzy.png" className="img-fluid"/>
               </div>
               </div>
               <div className="col-12 col-md-6 col-lg-3">
               <div className="winning-brand-companies">
               <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/bobalist.png" className="img-fluid"/>
               </div>
               </div>
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
  )
}

export default page
