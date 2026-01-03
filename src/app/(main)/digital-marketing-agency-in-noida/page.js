import React from "react";
import "./digital-marketing-agency-in-noida.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import StandAlonePackaging from "@/Components/StandAlonePackaging/StandAlonePackaging";
import AutoCounter from "@/Components/AutoCounter/AutoCounter";
import OurConstant from "@/Components/OurConstant/OurConstant";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";
import DigitalMarketingToggleBtn from "@/Components/DigitalMarketingToggleBtn/DigitalMarketingToggleBtn";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("about-us", null, false);
  } catch (error) {
    return {
      title: "About Us",
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
//meta end here

async function page() {
  // const response = await getPageData();
  // const pageData = response?.data;

  // if (!pageData) {
  //   notFound();
  // }

  const heading = "Digital Marketing Agency in Noida";
  const subHeading = "Smart Marketing For Digital Impact, Growth & Success";
  const para =
    "Scale your business confidently with our data-driven digital marketing strategies. Enhance brand exposure, gain traffic, turn prospects into buyers and encourage repeat purchases. There is just so much you can do with online marketing! Interested in learning more? Let’s dive in together. Understand the concept of digital marketing, find out about our expertise and services, and gain further answers in our FAQs section.";

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Go beyond traditional marketing methods to build your brand and increase sales. Digital marketing services help you connect and engage with a wider audience base, just when they need you the most. Multiple platforms, several techniques, higher adaptability, measurable results and a unique brand identity – the advantages of digital marketing are simply amazing. Want your brand to soar beyond limits with digital marketing? Let’s explore the strategies over a cup of coffee.";
  const pageName = "digital-marketing-agency-in-noida";

  const leftFaqs = [
    {
      question:
        "How do traditional marketing and digital marketing differ from each other? Which one is more cost-effective?",
      answer:
        "Traditional marketing entails marketing through print media (newspapers & magazines), broadcast media (television & radio), billboards, flyers and direct mail. Further, it can also include marketing through special events, activities and sponsorships. In contrast, digital marketing uses different online platforms (websites, social media, emails, search engines) for business promotion. Compared to traditional marketing, digital marketing achieves faster, measurable and more cost-effective results.",
    },
    {
      question: "Why is digital marketing important? What are its benefits?",
      answer:
        "Digital marketing is important because brands cannot afford to be absent from places and platforms where their customers are. And in present times, an increasing number of people are online. With a far wider reach than traditional marketing, online marketing helps brands reach and engage with the target audience (global and local) more effectively. The results are measurable and strategies are far more flexible. All this leads to an increase in conversion and profits for the business.",
    },
    {
      question:
        "What kind of services does a full-service digital marketing company in India provide?",
      answer:
        "A full-service digital marketing agency in India takes care of every aspect of a business’s online marketing, be it brand building and awareness or generating traffic and profits. To elaborate, it takes care of the following services - website design & development, search engine optimisation (SEO), social media marketing, content marketing, influencer marketing, email marketing and paid advertising. In addition, a digital marketing company in India also conducts market research and crafts a comprehensive online marketing strategy for its clients.",
    },
    {
      question: "Does my business really need digital marketing services?",
      answer:
        "In simple words, yes, it does. In this digital era where people spend so much time online, not investing in digital marketing services is a serious oversight from the business’s side. If you are not sure about what exactly you need to do, just get in touch with us. As a digital marketing agency in Noida, we can offer you consultation services and also help you figure out strategies and channels that can earn a high return on your investment.",
    },
    {
      question:
        "How is hiring an online marketing agency better than doing the work inhouse?",
      answer:
        "When it comes to online marketing, an agency possesses the required expertise and experience that can help your business perform better. Furthermore, by hiring professionals, you can give your team the crucial time they may need to improve your core product or service. Also, if your competitors are availing the services of a digital marketing agency, you know you are missing out on something important.",
    },
    {
      question:
        "I already have an internal online marketing team. Can you work in collaboration?",
      answer:
        "Gladly. We are always open to collaborate with your internal team and provide strategic direction and support (in whatever areas it is needed) to your online marketing efforts.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "What are the things that I should do while choosing a digital marketing agency in India?",
      answer:
        "To begin with, you should first establish your business goals and set your budget and resources. Thereafter, you should look for various digital marketing agency options and check their credentials - expertise, experience, track record, work portfolio - and pricing model. Select an agency which aligns most with your business objectives and budget.",
    },
    {
      question:
        "How does online marketing help businesses reach their target audience?",
      answer:
        "In online marketing, experts use both organic and paid methods to reach the target customers. Search engine optimisation attracts organic traffic while paid advertising (on search engines, YouTube, Facebook & Instagram) attracts more intent-driven customers (ready to make a purchase). Then there are emails and social media campaigns that help reach target customers based on their location, demographics, interests, and browsing behaviour. ",
    },

    {
      question: "What makes you a top digital marketing agency in Noida?",
      answer:
        "We have worked for 8 years and thus have solid work experience behind us. Our team of digital marketers excel in their areas, be it website development, SEO, SMO or email marketing. We focus on understanding your business and goals and conduct thorough market research before crafting your online marketing strategy. Moreover, we also believe in transparency and keep you informed about the progress and results at every step. All these make us a top digital marketing agency. ",
    },

    {
      question: "How much do your digital marketing services typically cost?",
      answer:
        "There isn’t any fixed cost per se. It all depends on your project requirements and the services you want us to deliver.",
    },

    {
      question:
        "How much time does it take before we can see results from the digital marketing efforts?",
      answer:
        "Online marketing involves a wide range of sub-services and all these can take different time frames to show results. For instance, paid advertisement can yield results in a much shorter time frame than organic SEO efforts. To give you an idea, the former can begin to show results within a week, whereas the latter may take up anywhere between 3-6 months for concrete results to start coming in.",
    },

    {
      question:
        "How do you know that your online marketing efforts have succeeded? What are your measurement techniques?",
      answer:
        "As a digital marketing company in India, setting KPIs (key performance indicators) before we begin the actual implementation of strategies is important for us. These KPIs measure various business objectives like an increase in website traffic, lead generation, sales, social media engagement, brand mentions, etc.",
    },
  ];

  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Website Design and Development and SEO ",
      description:
        "We created their website, a professional-looking one with an added element of fun. Our SEO strategies ensure that it ranks well in the SERP.",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/3-1-1.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Content Strategy & Creation",
      description:
        "Content strategy and creation followed as we crafted content that highlighted the benefits of their cocktail bombs and attracted the target customers.",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/4-1-2.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Social Media Management",
      description:
        "With a product like Mr. Bomzy, social media had to be an integral part of the larger marketing plan. We helped establish their presence on various social media platforms.",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/2-1-1.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Email Marketing & Automation",
      description:
        "Our e-mail marketing campaigns helped them reach out to their target customers regularly, build strong relationships and drive sales.",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/3-2-1.jpg",
    },
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/1-1-1.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/wp-content/uploads/2025/06/7-2.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/nature-balance-mangoe-2.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/wp-content/uploads/2025/06/1-1.jpg",
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

      {/* Switch on your potential with digital marketing */}

      <section className="switch-on">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="row">
                <div className="col-12 col-md-6 switch-on-div-main">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={68} />%
                      </h3>
                      <p>of the global population uses the Internet</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 switch-on-div-main">
                  <div className="switch-on-div">
                    <div className="vertical-bar"></div>
                    <div className="switch-on-div-content">
                      <h3>
                        <AutoCounter target={63} />%
                      </h3>
                      <p>of the global population are social media users.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row switch-row">
                <div className="col-9 ">
                  <div className="switch-on-middle-div-para">
                    <p>Switch on your potential with digital marketing</p>
                  </div>
                </div>
                <div className="col-3 toggle-btn">
                  <DigitalMarketingToggleBtn />
                </div>
              </div>

              <div className="switch-on-middle-div-img-last">
                <div className="col switch-on-middle-div-img">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/06/1-01-01.png"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6 main-switch-img">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/07/ghfh.jpg"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* We Are The Leading Video */}
      <section className="we-are-the-leading">
        <div className="container">
          <div className="row">
            <h3>
              Digital Marketing - A World of Endless
              <span className="every-pr"> Opportunities Possibilities</span>{" "}
            </h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                First, it was word of mouth, public announcements and pamphlets.
                Then came the newspapers, television and radio. And now there is
                digital media. Marketers have, since the beginning, found
                creative ways to promote their business and earn profit. With
                the latest one, though, they have managed to reach customers
                globally and that too, at the right place and time.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                Digital marketing encompasses a diverse set of practices and
                techniques, both paid and earned. SEO, SMO, email campaign,
                content marketing and digital ads are just a few of these.
                Through these, marketers take the product or service to
                potential customers, arouse their interest, build trust and
                ultimately convert them into buyers and brand advocates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* top capibilities */}

      <section className="top-cap">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Our Digital <span className="every-pr"> Marketing Services</span>
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
                  <h3>Website Design & Development</h3>
                  <p>
                    Let the experts at our digital marketing agency in Noida
                    design and develop a professional
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Website Design & Development</h3>
                  <p>
                    Let the experts at our digital marketing agency in Noida
                    design and develop a professional, captivating,
                    user-friendly and SEO-optimised website for your business.
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
                  <h3>Search Engine Optimisation</h3>
                  <p>
                    Your website cannot deliver the desired outcomes without
                    SEO. This organic and cost-effective service
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Search Engine Optimisation</h3>
                  <p>
                    Your website cannot deliver the desired outcomes without
                    SEO. This organic and cost-effective service is a must for
                    increasing online visibility and traffic, boosting
                    engagement and driving conversions.
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
                  <h3>Social Media Marketing</h3>
                  <p>
                    We know that a significant percentage of your core audience
                    is on social media. Therefore, through
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Social Media Marketing</h3>
                  <p>
                    We know that a significant percentage of your core audience
                    is on social media. Therefore, through our digital media
                    strategies, we unlock the full potential of these platforms
                    for your business.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>

          <div className="row top-cap-row-2">
            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className=" top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Influencer Marketing</h3>
                  <p>
                    We collaborate with online creators (from your industry)
                    with a large number of loyal and
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Influencer Marketing</h3>
                  <p>
                    We collaborate with online creators (from your industry)
                    with a large number of loyal and engaged followers to give
                    your brand the boost it needs.
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
                  <h3>Pay-per-Click</h3>
                  <p>
                    Let’s advertise your business on SERP, Google-affiliated
                    websites and social platforms (YouTube, Instagram &
                    Facebook). Reach the target
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Pay-per-Click</h3>
                  <p>
                    Let’s advertise your business on SERP, Google-affiliated
                    websites and social platforms (YouTube, Instagram &
                    Facebook). Reach the target audience, drive traffic, build
                    your brand and increase sales.
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
                  <h3>Digital Videos</h3>
                  <p>
                    Engage your audience with high-quality videos of your
                    product & services. We help you create
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Digital Videos</h3>
                  <p>
                    Engage your audience with high-quality videos of your
                    product & services. We help you create, optimise and share
                    your videos on platforms like YouTube, Instagram and
                    Facebook.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>

          <div className="row top-cap-row-3">
            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className=" top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Content Writing & Marketing</h3>
                  <p>
                    Your target audience needs relevant and valuable content
                    that solves their information needs and helps them proceed
                    in their purchase
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Content Writing & Marketing</h3>
                  <p>
                    Your target audience needs relevant and valuable content
                    that solves their information needs and helps them proceed
                    in their purchase journey. As a digital marketing company in
                    India, we provide just that.
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
                  <h3>Online Reputation Management</h3>
                  <p>
                    Online reputation is critical, whether it is of a brand or a
                    person. The team at our digital
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Online Reputation Management</h3>
                  <p>
                    Online reputation is critical, whether it is of a brand or a
                    person. The team at our digital marketing agency in Noida
                    ensure you have a positive online image.
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
                  <h3>Email Campaigns</h3>
                  <p>
                    Emails are powerful tools. Connect with potential customers,
                    build loyalty and increase sales. As the best digital
                    marketing agency in Delhi NCR
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Email Campaigns</h3>
                  <p>
                    Emails are powerful tools. Connect with potential customers,
                    build loyalty and increase sales. As the best digital
                    marketing agency in Delhi NCR, we craft email marketing
                    campaigns that drive conversions.
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

      <section className="standalone-sec">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Digital Marketing{" "}
              <span className="every-pr"> Success Story Mr. Bomzy</span>{" "}
            </h2>
          </div>
        </div>
        <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />
      </section>

      {/* Organic Sessions */}
      <section className="organic-sessions">
        <div className="container">
          <div className="row organic-sessions-row">
            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={120} />%
              </h3>
              <p>Organic Sessions (6 mo)</p>
            </div>

            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={4.8} />%
              </h3>
              <p>Average Engagement Rate</p>
            </div>

            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={250} />+
              </h3>
              <p>Quality Backlinks</p>
            </div>

            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={4.5} />%
              </h3>
              <p>Click-Through Rate</p>
            </div>
          </div>
        </div>
      </section>

      <OurConstant />

      {/* faqs */}

      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName} />
    </div>
  );
}

export default page;
