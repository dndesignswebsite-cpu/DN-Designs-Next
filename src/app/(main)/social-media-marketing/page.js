import React from "react";
import "./social-media-marketing.css";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import Form from "@/Components/Form/Form";
import Faqs from "@/Components/Faqs/Faqs";
import AutoCounter from "@/Components/AutoCounter/AutoCounter";
import PagesHero from "@/Components/PagesHero/PagesHero";
import { notFound } from "next/navigation";

// meta tags
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
async function getPageData() {
  const res = await fetch(`${BASE_URL}/api/pages/about-us`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata() {
  const response = await getPageData();
  console.log(response)
  if (!response?.success) {
    return {
      title: "About Us",
      robots: "noindex, nofollow",
    };
  }

  const seo = response.data;

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
        ? seo.openGraph.images.map(img => ({
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
        ? seo.twitter.images.map(img => img.url)
        : [],
    },
  };
}
// ends here

async function page() {

  // const response = await getPageData();
  // const pageData = response?.data;

  // if (!pageData) {
  //   notFound();
  // }
  
  // hero page
  const heading = "Social Media Marketing Agency in Noida";
  const subHeading =
    "Leverage the Influence of Social Media - Maximise Business Growth";
  const para =
    "Gone are the days when social media was simply meant to interact with people. It has now transformed into something bigger and far more important. For brands, it is a valuable asset. Curious to know why? Get ready to explore with us, a social media marketing agency in India. Discover the importance of social media marketing and the most popular social media platforms. Also, familiarise yourself with our services, processes and success stories. Scroll through our FAQs section to gain further insights.";

  const leftFaqs = [
    {
      question:
        "How do I know whether I need social media marketing for my business?",
      answer:
        "You need social media marketing if you want to gain more online recognition for your brand or sell your product online. Also, if your intended audience is on social media, you cannot miss out on social media marketing from your overall marketing plan. The same goes for competitors. If they are there, you too, need to leverage the benefits of social media for your business.",
    },
    {
      question: "How does social media marketing benefit my business?",
      answer:
        "Social media marketing can boost your company’s visibility in the market, send back traffic to your website and help generate business leads. It is a great way to build a strong brand-user interaction and can therefore make customer relations and support more effective. Moreover, these interactions also provide significant insights into customer behaviour and preferences - extremely crucial data for businesses to succeed.",
    },
    {
      question:
        "What type of services does a social media marketing agency in India provide?",
      answer:
        "A social media marketing agency in India offers a comprehensive range of services, right from developing a data-driven strategy to creating and publishing relevant content, interacting with and managing the community and monitoring performance. Apart from these, agencies may also offer services like paid advertising, influencer marketing, social listening & brand monitoring, reputation management, as well as social media training and consulting.",
    },

    {
      question:
        "How do I identify the best social media marketing agency for my brand?",
      answer:
        "To begin with, you should outline your business objectives and identify your target audience. You should also understand your resources, budget and time.  Thereafter, research and shortlist agencies whose work experience, services, communication style, and pricing match yours. Further, check what other clients in the industry have to say about them. Also, confirm if they are transparent in communication and reporting. The agency, which fulfils all the criteria, is the one best suited for your business.",
    },

    {
      question:
        "How are you different from other agencies offering social media marketing services in India?",
      answer:
        "At DN Designs, we have spent over 8 years building brands. We know that every project is unique; therefore, we try to understand your brand, business goals, industry and audience first. Our experts use this insight to create a customised social media marketing plan for your business. We also actively participate in community interactions and promptly respond to customers’ queries. In addition, we regularly share the progress of the project with our clients.",
    },

    {
      question: "What is included in your social media strategy?",
      answer:
        "Our social media strategy includes identification of business goals, research of the target audience, setting of KPIs, selection of suitable social media channels, content creation & publishing, community engagement, paid advertisement (if needed) and tracking and sharing of results.",
    },

    {
      question:
        "What kinds of social media marketing services do you offer - organic or paid, or both?",
      answer:
        "As the best social media marketing agency in India, we offer comprehensive social media marketing services, be it organic or paid.",
    },

    {
      question:
        "What type of industries and business verticals do you work for",
      answer:
        "We work across industries, be it food & beverages, real estate, pharmaceuticals, or nutraceuticals. We also work with startups as well as well-established companies, local businesses and personal brands. ",
    },
  ];

  const rightFaqs = [
    {
      question:
        "Which social media platforms do you work with? How do you decide which platform is best for my business?",
      answer:
        "We work with multiple social media platforms. To decide which of these platforms is best for your business, we understand your business goals and determine where your target audience is spending their time. For example, if your target audience is a fashion brand and you want to generate awareness about your business, we may choose to go for Instagram.",
    },
    {
      question:
        "Do you provide the content for various social media platforms? Can I review them before they are posted/published?",
      answer:
        "Yes, we can provide content for various social media platforms. It could be in the form of creative text, videos and images. And yes, we do share the content with you in advance and seek your approval on it.",
    },

    {
      question: "Do I have access to my social media accounts?",
      answer:
        "Yes, you have complete access to all your social media accounts at all times. We only need admin permission so that we can work (publish content, respond to comments, etc) on your behalf.",
    },

    {
      question:
        "How long does it take for results to show and how do you measure them?",
      answer:
        "The time required for results to reflect depends on whether you decide to promote your business through organic means or paid advertising. The latter will, no doubt, yield results in a much shorter time than the former. Organic methods may take up to 3-6 months to show results. ",
    },

    {
      question: "Do you provide monthly plans? What does it typically include?",
      answer:
        "Yes, we have monthly plans for your project. This monthly plan involves creating the content calendar as well as the content itself. It also includes scheduling and posting of content, engagement with the community and performance tracking and reporting.",
    },

    {
      question:
        "What about one-time campaigns? Do you provide social media marketing services for it?",
      answer:
        "New product launches (or relaunch of existing product) and special events require a one-time campaign. And as the best social media marketing agency in India, we certainly work on one-time campaigns.",
    },

    {
      question: "Is the contract term flexible?",
      answer:
        "To begin with, you can opt for monthly contracts. If you are satisfied with our services and wish to continue our association for a longer time, we can convert this into a six-month contract. In case you wish to continue with the earlier monthly option, we will be glad to do so, too.",
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Social media is a rich and powerful arena. And we, as a social media marketing company in Noida, make the most of it to ensure your business success. We craft custom strategies, reach out to your target audience, engage with them creatively, build brand awareness and maximise your revenue. Plenty of advantages, right? So, are you ready to take your brand into the social spotlight? Shall we get in touch and discuss how to scale your business with social media marketing? ";

  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* social media marketing */}
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
                    There are billions of active social media users globally.
                    Businesses are aware of this. Therefore, they leverage the
                    power of social media to connect with their target
                    customers, build brand awareness, increase website traffic,
                    and generate leads.
                  </p>
                  <p>
                    This is exactly what social media marketing is all about. It
                    includes developing a social media strategy, crafting
                    content, engaging with the community, running targeted ad
                    campaigns and analysing the performance of all the efforts.
                  </p>
                  <p>
                    Social media marketing is a part of a larger and much more
                    comprehensive digital media marketing plan.
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
              Social Media{" "}
              <span className="every-pr"> Marketing Platforms</span>
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
                    The vast consumer base of Facebook is perfect for you to
                    build brand awareness and customer engagement. You can
                    further carry out cost-effective
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Facebook</h3>
                  <p>
                    The vast consumer base of Facebook is perfect for you to
                    build brand awareness and customer engagement. You can
                    further carry out cost-effective and targeted ad campaigns
                    to generate leads for your business.
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
                    It is currently one of the most favourite social media
                    platforms that allows users to share captivating photographs
                    and short videos
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Instagram</h3>
                  <p>
                    It is currently one of the most favourite social media
                    platforms that allows users to share captivating photographs
                    and short videos. You can leverage its visual appeal to
                    communicate your brand identity and attract loyal customers.
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
                    People love to consume videos, and YouTube is the ultimate
                    platform for it. You can share a variety of engaging content
                    to showcase your products & services
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>YouTube</h3>
                  <p>
                    People love to consume videos, and YouTube is the ultimate
                    platform for it. You can share a variety of engaging content
                    to showcase your products & services, boost your brand
                    presence and increase lead generation.
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
                    This is the ideal platform for you to establish brand
                    presence and authority in your industry. You can share
                    thought leadership articles
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Linkedin</h3>
                  <p>
                    This is the ideal platform for you to establish brand
                    presence and authority in your industry. You can share
                    thought leadership articles, business achievements and run
                    campaigns to capture leads.
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
              <br />- Our Process
            </span>
          </h2>
          <ul id="cards-create">
            <li class="card-create" id="card1-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Identifying & Setting Goals </h2>
                  <p>
                    The first step in our process is to understand what you want
                    to achieve as a business from your social media marketing
                    efforts. Therefore, we, a social media marketing agency in
                    Noida, in collaboration with you, set SMART goals (specific,
                    measurable, achievable, relevant, time-bound) for your
                    business.
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
                    The next step in our process is to understand who your
                    target customers are. We conduct comprehensive research to
                    find out who your target audience is and which social media
                    channels they are most active on. This step is vital for us
                    to move further, as we are now aware of where our target
                    audience is and what kind of content they will engage with.
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
                    With goal identification and extensive audience research
                    done, we now select the social media platform that will
                    yield the best results from our marketing efforts. We keep
                    this selection to the ‘most relevant ones’ to ensure that
                    our endeavours are focused on the few right platforms
                    instead of being spread everywhere.
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
                    It is now time to establish our content themes (educational,
                    promotional), formats (blogs, videos, reels), brand voice
                    (fun, professional, sophisticated) and visual guidelines
                    (colour themes). We also create a content calendar to
                    organise our content creation and posting process.
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
                    For business, it is important to interact and engage with
                    their customers. Therefore, in this step, we define the ways
                    to respond to customers - be it a simple comment, a direct
                    message or even a negative review. We also work out ways to
                    increase engagement. It could include short & interesting
                    polls, interactive Q&A sessions or UGC campaigns.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card6-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">06</div>
                <div className="col-10">
                  <h2>Plan Approval & Implementation</h2>
                  <p>
                    Our social media marketing plan is now ready, and we submit
                    it to you for approval. We incorporate the changes you
                    suggest and resubmit the plan for review. After we receive
                    your approval, we put the plan into action. We continue with
                    the various planned activities for a few months and then
                    move to the next stage - analysis.{" "}
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card7-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">07</div>
                <div className="col-10">
                  <h2>Analysing Performance</h2>
                  <p>
                    Performance analysis is important to know whether we are
                    moving in the right direction or not. This includes
                    monitoring the content performance, engagement rate and
                    conversions. We also verify if the goals set in the first
                    step have been achieved or not.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card8-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">08</div>
                <div className="col-10">
                  <h2>Reporting & Revision</h2>
                  <p>
                    We share with you the headway we have made in this final
                    stage. We highlight our work, key achievements and future
                    course of action in our monthly or quarterly reports. We
                    incorporate necessary changes in our social media marketing
                    plan and continue with our efforts.
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
            Social Media Marketing -
            <span className="every-pr"> Our Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Identifying & Setting Goals </h2>
                  <p>
                    The first step in our process is to understand what you want
                    to achieve as a business from your social media marketing
                    efforts. Therefore, we, a social media marketing agency in
                    Noida, in collaboration with you, set SMART goals (specific,
                    measurable, achievable, relevant, time-bound) for your
                    business.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Identifying Target Audience</h2>
                  <p>
                    The next step in our process is to understand who your
                    target customers are. We conduct comprehensive research to
                    find out who your target audience is and which social media
                    channels they are most active on. This step is vital for us
                    to move further, as we are now aware of where our target
                    audience is and what kind of content they will engage with.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Selecting the Correct Platforms</h2>
                  <p>
                    With goal identification and extensive audience research
                    done, we now select the social media platform that will
                    yield the best results from our marketing efforts. We keep
                    this selection to the ‘most relevant ones’ to ensure that
                    our endeavours are focused on the few right platforms
                    instead of being spread everywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Planning Content Strategy & Calendar </h2>
                  <p>
                    It is now time to establish our content themes (educational,
                    promotional), formats (blogs, videos, reels), brand voice
                    (fun, professional, sophisticated) and visual guidelines
                    (colour themes). We also create a content calendar to
                    organise our content creation and posting process.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Planning For Community Engagement</h2>
                  <p>
                    For business, it is important to interact and engage with
                    their customers. Therefore, in this step, we define the ways
                    to respond to customers - be it a simple comment, a direct
                    message or even a negative review. We also work out ways to
                    increase engagement. It could include short & interesting
                    polls, interactive Q&A sessions or UGC campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">06</h3>
                <div className="card-body-create-mobile">
                  <h2>Plan Approval & Implementation</h2>
                  <p>
                    Our social media marketing plan is now ready, and we submit
                    it to you for approval. We incorporate the changes you
                    suggest and resubmit the plan for review. After we receive
                    your approval, we put the plan into action. We continue with
                    the various planned activities for a few months and then
                    move to the next stage - analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">07</h3>
                <div className="card-body-create-mobile">
                  <h2>Analysing Performance </h2>
                  <p>
                    Performance analysis is important to know whether we are
                    moving in the right direction or not. This includes
                    monitoring the content performance, engagement rate and
                    conversions. We also verify if the goals set in the first
                    step have been achieved or not.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">08</h3>
                <div className="card-body-create-mobile">
                  <h2>Reporting & Revision</h2>
                  <p>
                    We share with you the headway we have made in this final
                    stage. We highlight our work, key achievements and future
                    course of action in our monthly or quarterly reports. We
                    incorporate necessary changes in our social media marketing
                    plan and continue with our efforts.
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
              <h3 className="text-center">
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
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section> 
      {/* Form */} 
      <Form FormHead={FormHead} FormPara={FormPara} />
    </div>
  );
}

export default page;
