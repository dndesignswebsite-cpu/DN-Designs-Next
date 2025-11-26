import React from "react";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import "./influencer-marketing.css";
import StandAlonePackaging from "@/Components/StandAlonePackaging/StandAlonePackaging";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";



// meta tags
export const metadata = {
  title: "Influencer Marketing | DN Designs",
  description: "We build brands that inspire confidence and drive profit",
  openGraph: {
    title: "Influencer Marketing | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    url: "https://dndesigns.co.in/",
    siteName: "DN Designs",
    images: [
      {
        url: "https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png",
        width: 1200,
        height: 630,
        alt: "DN Designs Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer MArketing  | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    images: [
      "https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"
    ],
  },
};

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

      {/* influencer marketing  */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>

      
      {/*grow-your-business  */}
      <section className="grow-your-business">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-3">
              <div className="grow-your-bussiness-col-main">
                <div className="grow-your-bussiness-col-1">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="img-fluid"
                  ></img>
                  <h3>Grow Your Business</h3>
                  <p>
                    Leverage established credibility and personal connections to
                    build authentic brand trust and loyalty.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6">
              <div className="grow-your-bussiness-col-2">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2023/10/kerfin7_nea_3157.png"
                  className="img-fluid"
                ></img>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-3">
              <div className="grow-your-bussiness-col-main">
                <div className="grow-your-bussiness-col-3">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="img-fluid"
                  ></img>
                  <h3>Grow Your Business</h3>
                  <p>
                    Leverage established credibility and personal connections to
                    build authentic brand trust and loyalty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* standalone */}
      <StandAlonePackaging />

      {/* top capibilities */}

      <section className="top-cap">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Top<span className="every-pr"> Capabilities</span>
            </h2>
            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className=" top-cap-div m-3">
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
              <div className="p-3 top-cap-div m-3">
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
              <div className="p-3 top-cap-div m-3">
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

          <div className="row">
            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className=" top-cap-div m-3">
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
              <div className="p-3 top-cap-div m-3">
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
              <div className="p-3 top-cap-div m-3">
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
