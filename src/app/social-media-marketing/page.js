import React from "react";
import "./social-media-marketing.css";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import Form from "@/Components/Form/Form";
import Faqs from "@/Components/Faqs/Faqs";
import AutoCounter from "@/Components/AutoCounter/AutoCounter";
import PagesHero from "@/Components/PagesHero/PagesHero";

// meta tags
export const metadata = {
  title: "Social Media Marketing | DN Designs",
  description: "We build brands that inspire confidence and drive profit",
  openGraph: {
    title: "Social Media Marketing | DN Designs",
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
    title: "Social Media Marketing | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"],
  },
};

function page() {
  // hero page
  const heading = "Social Media Marketing Agency in Noida";
  const subHeading =
    "Leverage the Influence of Social Media - Maximise Business Growth";
  const para =
    "Gone are the days when social media was simply meant to interact with people. It has now transformed into something bigger and far more important. For brands, it is a valuable asset. Curious to know why? Get ready to explore with us, a social media marketing agency in India. Discover the importance of social media marketing and the most popular social media platforms. Also, familiarise yourself with our services, processes and success stories. Scroll through our FAQs section to gain further insights.";

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

      {/* What is Social Media Marketing? */}
      <section className="social-media">
        <div className="container">
          <div className="row social-media-row">
            <div className="social-media-main-div">
              <div className="wrapper-content">
                <div className="social-media-content">
                  <h2>An Introduction to Social Media Marketing</h2>
                  <p>
                    There are billions of active social media users globally. Businesses are aware of this. Therefore, they leverage the power of social media to connect with their target customers, build brand awareness, increase website traffic, and generate leads.
                  </p>
                  <p>
                    This is exactly what social media marketing is all about. It includes developing a social media strategy, crafting content, engaging with the community, running targeted ad campaigns and analysing the performance of all the efforts.
                  </p>
                  <p>
                    Social media marketing is a part of a larger and much more comprehensive digital media marketing plan.
                  </p>
                  <div className="btn-social-media">
                    <TalkToUs />
                  </div>
                </div>
              </div>

              <div className="social-media-image-div">
                <img
                  src="https://scandiweb.com/blog/wp-content/uploads/2024/07/instagramprofile_rhodeskin-1-623x1024.png"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* But Why Your Logo Even Matters?*/}
      <section className="but-why">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Social Media <span className="every-pr"> Marketing Platforms</span>
            </h2>
            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className=" but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Facebook</h3>
                  <p>
                    The vast consumer base of Facebook is perfect for you to build brand awareness and customer engagement. You can further carry out cost-effective
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Facebook</h3>
                  <p>
                   The vast consumer base of Facebook is perfect for you to build brand awareness and customer engagement. You can further carry out cost-effective and targeted ad campaigns to generate leads for your business.

                  </p>
                </div>
              </div>
              <img
                className="but-why-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className=" but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Instagram</h3>
                  <p>
                    It is currently one of the most favourite social media platforms that allows users to share captivating photographs and short videos
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Instagram</h3>
                  <p>
                   It is currently one of the most favourite social media platforms that allows users to share captivating photographs and short videos. You can leverage its visual appeal to communicate your brand identity and attract loyal customers.
                  </p>
                </div>
              </div>
              <img
                className="but-why-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className="p-3 but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>YouTube</h3>
                  <p>
                   People love to consume videos, and YouTube is the ultimate platform for it. You can share a variety of engaging content to showcase your products & services
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>YouTube</h3>
                  <p>
                   People love to consume videos, and YouTube is the ultimate platform for it. You can share a variety of engaging content to showcase your products & services, boost your brand presence and increase lead generation.
                  </p>
                </div>
              </div>
              <img
                className="but-why-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className="p-3 but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Linkedin</h3>
                  <p>
                    This is the ideal platform for you to establish brand presence and authority in your industry. You can share thought leadership articles
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Linkedin</h3>
                  <p>
                   This is the ideal platform for you to establish brand presence and authority in your industry. You can share thought leadership articles, business achievements and run campaigns to capture leads.
                  </p>
                </div>
              </div>
              <img
                className="but-why-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* From Research to Design How We Create Your Logo desktop view */}
      <section className="creating-your-brand">
        <div class="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Social Media Marketing 
            <span className="every-pr">
              <br />
            - Our Process
            </span>
          </h2>
          <ul id="cards-create">
            <li class="card-create" id="card1-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Identifying & Setting Goals  </h2>
                  <p>
                    The first step in our process is to understand what you want to achieve as a business from your social media marketing efforts. Therefore, we, a social media marketing agency in Noida, in collaboration with you, set SMART goals (specific, measurable, achievable, relevant, time-bound) for your business. 
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card2-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Identifying Target Audience</h2>
                  <p>
                  The next step in our process is to understand who your target customers are. We conduct comprehensive research to find out who your target audience is and which social media channels they are most active on. This step is vital for us to move further, as we are now aware of where our target audience is and what kind of content they will engage with.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card3-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Selecting the Correct Platforms</h2>
                  <p>
                    With goal identification and extensive audience research done, we now select the social media platform that will yield the best results from our marketing efforts. We keep this selection to the ‘most relevant ones’ to ensure that our endeavours are focused on the few right platforms instead of being spread everywhere. 
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card4-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Planning Content Strategy & Calendar </h2>
                  <p>
                    It is now time to establish our content themes (educational, promotional), formats (blogs, videos, reels), brand voice (fun, professional, sophisticated) and visual guidelines (colour themes). We also create a content calendar to organise our content creation and posting process. 
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card5-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Planning For Community Engagement</h2>
                  <p>
                    For business, it is important to interact and engage with their customers. Therefore, in this step, we define the ways to respond to customers - be it a simple comment, a direct message or even a negative review. We also work out ways to increase engagement. It could include short & interesting polls, interactive Q&A sessions or UGC campaigns.
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
            From Research to Design
            <span className="every-pr"> How We Create Your Logo</span>
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

      {/* Projects Completed 300+ Successfully delivered across industries */}
      <section className="projects-completed">
        <div className="container">
          <div className="row projects-completed-main-row">
            <div className="col-12 col-md-12 col-lg-6">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/07/ghfh.jpg"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-6 projects-completed-div-main-col">
              <h3 className="e-com-counter text-center">
                E-commerce Brand Growth
              </h3>
              <div className="row">
                <div className="col">
                  <div className="projects-completed-div">
                    <h3>
                      <AutoCounter target={300} />+
                    </h3>
                    <h4>Projects Completed</h4>
                    <p>Successfully delivered across industries</p>
                  </div>
                </div>
                <div className="col">
                  <div className="projects-completed-div projects-completed-div-box-sh">
                    <h3>
                      <AutoCounter target={300} />+
                    </h3>
                    <h4>Projects Completed</h4>
                    <p>Successfully delivered across industries</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="projects-completed-div projects-completed-div-box-sh">
                    <h3>
                      <AutoCounter target={300} />+
                    </h3>
                    <h4>Projects Completed</h4>
                    <p>Successfully delivered across industries</p>
                  </div>
                </div>
                <div className="col">
                  <div className="projects-completed-div">
                    <h3>
                      <AutoCounter target={300} />+
                    </h3>
                    <h4>Projects Completed</h4>
                    <p>Successfully delivered across industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sucess stories */}
      <section className="sucess-stories">
        <div className="container success-stories py-5">
          <h2 className="success-stories-title text-center">Success Stories</h2>
          <p className="success-stories-para text-center">
            See how we've helped brands achieve remarkable growth through
            strategic social media marketing.
          </p>
          <div className="row gx-4">
            <div className="col-12 col-lg-4 col-md-6 text-start px-3 py-0 mt-4">
              <div className="success-story p-0">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/WhatsApp-Image-2023-09-23-at-1.24.33-PM.jpeg"
                  className="img-fluid"
                />
                <div className="p-4 success-story-content">
                  <h3>E-commerce Brand Growth</h3>
                  <p>
                    Increased social media engagement by 300% and drove $2M in
                    revenue.
                  </p>
                  <div className="mt-4 success-points">
                    <span>+300% Engagement</span>
                    <span>$2M Revenue</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6 text-start px-3 py-0 mt-4">
              <div className="success-story p-0">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/WhatsApp-Image-2023-09-23-at-1.24.33-PM.jpeg"
                  className="img-fluid"
                />
                <div className="p-4 success-story-content">
                  <h3>E-commerce Brand Growth</h3>
                  <p>
                    Increased social media engagement by 300% and drove $2M in
                    revenue.
                  </p>
                  <div className="mt-4 success-points">
                    <span>+300% Engagement</span>
                    <span>$2M Revenue</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6 text-start px-3 py-0 mt-4">
              <div className="success-story p-0">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/WhatsApp-Image-2023-09-23-at-1.24.33-PM.jpeg"
                  className="img-fluid"
                />
                <div className="p-4 success-story-content">
                  <h3>E-commerce Brand Growth</h3>
                  <p>
                    Increased social media engagement by 300% and drove $2M in
                    revenue.
                  </p>
                  <div className="mt-4 success-points">
                    <span>+300% Engagement</span>
                    <span>$2M Revenue</span>
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
      <Form />
    </div>
  );
}

export default page;
