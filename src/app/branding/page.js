import React from "react";
import "./branding.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import OurConstant from "@/Components/OurConstant/OurConstant";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";

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
        <Breadcrumb />
      </section>

      {/* branding hero */}
      <section className="branding-hero">
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

      {/* work portfolio */}
      <section className="portfolio">
        <div className="container">
          <h2 className="text-center">
            Our<span className="every-pr"> Work Portfolio</span>
          </h2>
          <div className="row port-row">
            <div className="col-12 col-md-6 px-2 port-main-div ">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Enlite</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Enlite’s sparkling mineral water and prebiotic drink range,
                    meant to refresh and rejuvenate customers, required a
                    captivating brand identity, including can and logo design,
                    to attract a young audience. We offered them just that.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/I-organic.jpg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>iOrganic</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    For the organic dairy & food brand, iOrganic, we created a
                    vibrant and engaging packaging design. Additionally, we
                    provided professional photography services for their
                    e-commerce sale and advertising purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row port-row">
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className=" port-div">
                <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2025/08/Bombzy.mp4#t=,3"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Mr. Bomzy</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    We delivered comprehensive services to the cocktail bombs
                    brand Mr. Bomzy. This included creating their identity,
                    crafting brand guidelines, designing the package, developing
                    UI/UX design & website, and framing social media strategy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className=" port-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/Deeproots.jpg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Deeproot</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Deeproot, offering wholesome snacks, collaborated with our
                    creative design agency to strengthen their brand presence in
                    the market. Our range of services for them included identity
                    design, packaging design, UI/UX design and website
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row port-row">
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className=" port-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/Thames.jpg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Thames</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div>
                  </div>

                  <p>
                    Created an alluring packaging design for Thames dried
                    blueberries product to capture the attention of the
                    audience. To boost their online presence, we also designed
                    their UI/UX and provided website development solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className=" port-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/Smartyums.jpg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Smartyums</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Merchandising</h4>
                    </div>
                  </div>

                  <p>
                    Smartyums, with their crunchy protein bite products, wanted
                    a packaging design that focussed on, and attracted kids.
                    Expert designers at our agency created a playful and
                    visually appealing packaging design for them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* branding identity */}
      <section className="branding-identity">
        <div className="container">
          {/* first row */}
          <div className="row brand-identity-div-row">
            <h2 className="text-center">
              <span className="every-pr">Branding </span> is VALUE
            </h2>

            <div className="col-12 col-md-12 col-lg-4 identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/2-3.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Identity</h3>
                  <p>
                    Let’s create an impactful brand identity for your business.
                    Trust us, it’s important. It is how customers will recognise
                    and connect with your product and distinguish it from others
                    in the market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4  identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/3-3.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Voice</h3>
                  <p>
                    Understanding ‘what is brand voice’ is quite simple. It is
                    your brand’s personality and the way it speaks with its
                    target customers. Brand voice helps breathe life into your
                    brand, and we help you find that voice.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4  identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/7-1.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Positioning</h3>
                  <p>
                    Why should customers prefer your product over your
                    competitors? What makes you so special and different? That’s
                    what positioning is all about. It creates a place for your
                    product in the market and your target audience’s mind.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="row brand-identity-div-row">
            <div className="col-12 col-md-12 col-lg-4 identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/6-1.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Messaging</h3>
                  <p>
                    Let’s help you develop a compelling brand message. Why is
                    that important? Because, as a business, you have certain
                    core values and a USP which need to reach your target
                    audience. It fosters connection and inspires trust.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4  identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/5-1.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Value</h3>
                  <p>
                    Businesses have certain values and beliefs that form the
                    basis of and direct their functioning. For instance,
                    transparency and sustainability are good examples of a
                    company’s values. What’s your brand value?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4  identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/4-3.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Rebranding</h3>
                  <p>
                    Brands that appealed once may appear outdated today.
                    Branding should, therefore, adapt and evolve with changing
                    times to suit current market conditions and consumer
                    expectations. Rebranding is the solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our constant */}
      <OurConstant/>

      {/* marque */}
      <section className="marque-sec">
        <marquee className="noun-mar" direction="left" scrollamount="12">
          {" "}
          A Noun in Your Life, A Verb in Ours
        </marquee>
      </section>

      {/* Creating Your Brand desktop view */}
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

      {/* Creating Your Brand mobile view */}

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
