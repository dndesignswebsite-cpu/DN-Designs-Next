import React from "react";
import "./seo-marketing-agency-in-noida.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import PagesHero from "@/Components/PagesHero/PagesHero";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import ContactUsBtn from "@/Components/ContactUsBtn/ContactUsBtn";
import Form from "@/Components/Form/Form";
import Faqs from "@/Components/Faqs/Faqs";
import AutoCounter from "@/Components/AutoCounter/AutoCounter";
import WebsiteAuditForm from "@/Components/WebsiteAuditForm/WebsiteAuditForm";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("about-us", null, false);
  } catch (error) {
    console.log(error);
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
// ends here

async function page() {
  // const response = await getPageData();
  // const pageData = response?.data;

  // if (!pageData) {
  //   notFound();
  // }

  // seo hero
  const heading = "SEO Agency in Noida";
  const subHeading =
    "From Search to Conversion - Script Your Success Story With Us";
  const para =
    "Hard work and commitment drive results. This is particularly true for search engine optimisation or SEO. It is not a quick fix or magic; rather it is research-oriented, quality-focused, guideline-driven and time-consuming process. The results, though, are fruitful and long-lasting – worth every effort invested. Join us, as we take you through this story of effort and growth. Understand the importance of SEO, learn about our services and processes and read the FAQs for greater clarity.";

  const leftFaqs = [
    {
      question: "Why should I get my website SEO-optimised?",
      answer:
        "SEO-optimised websites rank well on SERP and, therefore, enhance the online visibility of a brand. These websites load faster and work well on various devices, thus enhancing user experience. Their relevant content, user-friendly navigation and strong CTAs also help convert visitors into customers. So, if you want your website to perform well and generate leads and profits, optimising it for SEO is important. If you need assistance, contact us - the best SEO company in India.",
    },
    {
      question: "How many types of SEO services do you provide?",
      answer:
        "As a white label SEO agency in Noida, we provide a wide variety of services, including startup SEO, E-Commerce SEO, local SEO, international SEO, and YouTube SEO. In addition, we also provide generative engine optimisation (GEO), artificial intelligence engine optimisation (AIEO) and ask engine optimisation (AEO).",
    },
    {
      question: "Do you provide international SEO services?",
      answer:
        "Yes, we provide international SEO services and help your website rank high in the SERP of the target country. For this, we conduct country-specific keyword research, craft content that is useful and suitable for the target audience and create backlinks with that particular country in mind. On the technical side, we implement country-specific domain strategies and include the Hreflang tag to show content in the target audience’s language. ",
    },

    {
      question: "How can your SEO services help me with my local business?",
      answer:
        "Your local business needs a local audience. We, an SEO agency in Noida, understand this and therefore provide you with local SEO services. Local SEO aims at improving your website’s online ranking and visibility in a particular area through the creation of a Google Business Profile, website optimisation for local search and local citation and link building activities.",
    },

    {
      question: "How long does your SEO process take? What about results?",
      answer:
        "The required time for an SEO process depends entirely on the individual project and its goals. For example, a smaller website with fewer pages will take less time than one with hundreds of pages. Similarly, SEO goals like increasing brand awareness, traffic and leads, each demand a different time frame for completion. To give you an idea, though, it can take anywhere between 3-6 months to complete the process and achieve results.",
    },

    {
      question:
        "Do you optimise our existing content or create fresh new content?",
      answer:
        "This again depends on the project demand and your business goals. If your website already has existing quality content, we can optimise it. On the other hand, we can also create fresh content for your website. A combination of both is another option where we optimise your existing content and further add newer content based on our keyword and industry research. Adding new content can help keep your website updated and additionally draw in new visitors.",
    },
  ];

  const rightFaqs = [
    {
      question: "What makes you the best SEO agency in Noida?",
      answer:
        "With over 8 years of experience, DN Designs is the best SEO company in Noida. We craft your SEO strategy only after understanding your business and auditing your website. We perform an elaborate keyword research, optimise content, build high-quality links, and last but not least, ensure the technical health of the site. We have worked for a variety of industries and keep ourselves updated with the latest trends (algorithm updates & new AI search). We also provide you with regular reports so that you can assess the progress of your work and the results achieved. ",
    },
    {
      question: "What are some common SEO mistakes businesses make?",
      answer:
        "There are a whole lot of SEO mistakes that businesses make. These include neglecting proper keyword research, incorrect keyword targeting on pages, creating duplicate or subpar content and building low-quality backlinks. Moreover, businesses also err when they do not focus on creating a fast, mobile-friendly, secure and user-friendly website.",
    },

    {
      question:
        "Do we receive any reports regarding the work? If yes, how often?",
      answer:
        "You will receive a monthly report of all the SEO activities done and results achieved. This includes reports on keyword rankings, traffic, leads, and CTR. You will also receive a comparison report stating your progress from the last month.",
    },

    {
      question:
        "Do you keep track of Google’s guidelines and follow ethical SEO practices?",
      answer:
        "For sure. As a white label SEO agency, we make sure to keep updated with all the guidelines of Google to provide you with the best SEO services possible. In addition, we also keep track of the happenings, trends and updates in the SEO industry.",
    },

    {
      question: "Do you use any tools for SEO activity?",
      answer:
        "As an SEO agency in Noida, we use multiple tools to get the most out of our SEO efforts. These tools include GA4, Google Search Console, Google Keyword Planner, SemRush, Ahrefs and Ubersuggest. With the assistance of these tools, we conduct activities like keyword research, site audit, competitors research as well as content & backlink analysis.",
    },

    {
      question: "Apart from SEO, what other services do you offer?",
      answer:
        "We are a branding, design and marketing agency and therefore offer a whole spectrum of services related to it, be it your brand identity creation, packaging design and catalogue design. We also help you establish your communication and digital marketing strategies.",
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "As a white label SEO agency in Noida, we apply data-driven insights and craft your SEO strategies accordingly to achieve your business goals. Our SEO experts in Noida ensure that your website ranks high on SERP, attracts target visitors and eventually turn into customers. Whether you are a startup business or an already established one, we can help you boost your online presence and reputation. Want us to have a look at your website? Let’s do it over a cup of coffee!";

  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* branding hero */}
      {/* ui/ux design */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>

      {/* what-drives-our-growth */}
      <section className="what-drives-our-growth">
        <div className="container">
          <h2 className="what-drives-our-growth-heading">
            What Drives <span className="rrrr">Our Growth</span>
          </h2>
          <div className="row what-drives-our-growth-row">
            <div className="col-12 col-md-12 col-lg-6 what-drives-our-growth-content">
              <h3>Data Driven Insights</h3>
              <p>
                We depend on your website data more than opinions and
                assumptions. Through data analysis, we discover your
                top-performing keywords and content and the users’ intent in
                seeking them. We also examine user behaviour, bounce rate and
                CTR on your website. This data-driven analysis helps us, an SEO
                company in Noida, create smarter SEO strategies.
              </p>
              <ContactUsBtn />
            </div>
            <div className="col-12 col-md-12 col-lg-6 what-drives-our-growth-img-section">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/jkjk.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/* comprehensive seo stregety */}
      <section className="comprehensive-seo-stregety">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 comprehensive-seo-stregety-col">
              <div className="comprehensive-seo-stregety-content">
                <h2>Comprehensive SEO Strategy</h2>
                <p>
                  We make the most of our data analysis and design a tailored
                  SEO strategy to build your business’s online presence and
                  drive more organic traffic. At the core are on-page and
                  off-page optimisation as well as technical SEO.
                </p>
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/jhfjhh.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-6 comprehensive-seo-stregety-col">
              <div className="transparent-reporting-content">
                <h2>Transparent Reporting</h2>
                <p>
                  All work and no known results can be frustrating. Therefore,
                  reporting is essential to assess the performance of SEO
                  activities. It also helps confirm whether the strategy is
                  yielding positive results or requires modifications.
                </p>
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/jkjk.png"
                  className="img-fluid"
                />
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
              Why
              <span className="every-pr"> SEO?</span>
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
                  <h3>Generate Organic Traffic</h3>
                  <p>
                    Start now with SEO if you want to rank high in the SERP. A
                    set of practices and techniques
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Generate Organic Traffic</h3>
                  <p>
                    Start now with SEO if you want to rank high in the SERP. A
                    set of practices and techniques, SEO helps optimise your
                    site, draw in more attention and organic traffic.
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
                  <h3>Build Brand</h3>
                  <p>
                    With more people visiting your website, you are now getting
                    recognised as a business. Customers find you easily and know
                    what your services
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Build Brand</h3>
                  <p>
                    With more people visiting your website, you are now getting
                    recognised as a business. Customers find you easily and know
                    what your services, values, beliefs and USP are. All these
                    help build your brand.
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
                  <h3>Generate Lead</h3>
                  <p>
                    When your SEO efforts move in the right direction, your
                    website attracts the target audience. Some of these seek
                    information, while
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Generate Lead</h3>
                  <p>
                    When your SEO efforts move in the right direction, your
                    website attracts the target audience. Some of these seek
                    information, while others are there to purchase your product
                    or hire your services. You, therefore, generate leads
                    through SEO.
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
                  <h3>Increased ROI</h3>
                  <p>
                    Every business strives to earn revenue; it is the end goal.
                    If a company fails to do so, it cannot last for a long time.
                    SEO achieves this result
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Increased ROI</h3>
                  <p>
                    Every business strives to earn revenue; it is the end goal.
                    If a company fails to do so, it cannot last for a long time.
                    SEO achieves this result - more traffic, more visitors,
                    greater chances of conversion and hence increased return on
                    investment.
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
          <div className="cont">
            <div className="row appr-pro-row-main">
              <div className="col-12 col-md-12 col-lg-6 mt-3">
                <h2 className="appr-pro-main-head">
                  Our Comprehensive <br></br>
                  <span className="every-pr"> SEO Services</span>
                </h2>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-gray">
                  <div>
                    <h3>Start-up SEO</h3>
                    <p>
                      Partner with us, a white label SEO agency, to give your
                      new business the support it needs and deserves. It
                      includes keyword research, content optimisation &
                      technical SEO.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Local SEO</h3>
                    <p>
                      Set your business up for success in your local area. Our
                      local SEO service pack comprises GBP optimisation, local
                      keyword optimisation and local citation building.
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
                  <h3>Global SEO</h3>
                  <p>
                    Our SEO agency in Noida helps you connect with international
                    or multilingual audiences with a global SEO strategy. We
                    target country-specific keywords and language and ensure
                    culturally appropriate content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>E-Commerce SEO</h3>
                  <p>
                    Make your product a hit with customers on e-commerce
                    websites and generate more ROI. Our e-commerce SEO services
                    include optimising product & category pages, content and
                    technical elements.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>YouTube SEO</h3>
                  <p>
                    As an SEO agency, we leverage the power of YouTube SEO to
                    generate organic traffic and leads for your business. This
                    includes keyword research and optimisation of videos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Answer Engine Optimisation</h3>
                  <p>
                    Our SEO experts optimise your content to answer user
                    queries. The answers appear straight in the SERP results
                    like in rich snippets or ‘People Also Ask’ segment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd row */}
          <div className="row appr-pro-row-main">
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Generative Engine Optimisation</h3>
                  <p>
                    Want your website to pop up in AI-driven search results
                    -Google’s AI overview, ChatGPT and Perplexity? We create
                    structured and optimised content for better performance on
                    generative platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Artificial Engine Optimisation</h3>
                  <p>
                    Adapt your strategy to changing times. Team up with us to
                    make your website content friendly for search engines,
                    assistants, and AI agents (read Siri, Alexa, ChatGPT &
                    Gemini).
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Search Experience Optimisation</h3>
                  <p>
                    Trust us to make your users’ journey - from their initial
                    search to final conversion - a seamless experience. Content
                    & layout optimisation & clear CTA form part of this service.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Ask Engine Optimisation</h3>
                  <p>
                    Let’s optimise your website content to rank high for users’
                    questions on search engines. Climb up the rank, get traffic
                    & capture leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Research to Design How We Create Your Logo desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Our <span className="rrrr">Process</span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Website Analysis</h2>
                  <p>
                    As an SEO company in India, our first step is to analyse the
                    existing website - its technical aspects, content, on-page
                    optimisation and off-page performance. These typically
                    include the analysis of the site for speed, indexation,
                    mobile-friendliness, keyword ranking, content quality and
                    backlinks. Our objective here is to understand the website
                    in its entirety, its performance in SERP and the potential
                    areas of improvement.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Keyword Research</h2>
                  <p>
                    Once we have a good idea about your website, we focus more
                    on the existing keywords' ranking. Additionally, our SEO
                    experts also research and compile a huge list of new
                    potential keywords that customers are searching for. With
                    further research, we narrow down this list to include only
                    those keywords that are most promising and have the highest
                    chances of success. This includes analysing keywords’ search
                    volume, difficulty and search Intent.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>On-Page SEO</h2>
                  <p>
                    Now we begin with individual page optimisation. We
                    add/improve the content and integrate relevant keywords
                    naturally into it. We also incorporate keywords in the URL,
                    title tags, meta descriptions, heading tags and alt tags.
                    The important thing we, as a white label SEO marketing
                    agency, pay particular attention to in this step is to avoid
                    spamming. We, additionally, optimise images, add schema data
                    and create internal linkings.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Off-Page SEO</h2>
                  <p>
                    While your on-page optimisation activities focus on making
                    your website user and search engine friendly, the off-page
                    optimisation activities further focus on boosting your
                    website's online authority and reputation, and improving its
                    SERP ranking. Our SEO experts in Noida now perform link
                    building and citation activities. For this, they conduct
                    in-depth online research to find relevant high-authority
                    websites and create quality backlinks to enhance the trust
                    factor of your website.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Technical SEO</h2>
                  <p>
                    This step is vital to ensure that the faulty technical
                    aspects and elements of your website do not break it down or
                    dampen the user experience. For this, we check and correct
                    your website for proper site architecture, page
                    crawlability, indexing, speed, responsiveness and security.
                    Other technical SEO activities that we carry out include
                    submission of sitemaps, fixing broken links, reviewing
                    robots.txt and adding structured data.
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
            Our
            <span className="every-pr"> Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Website Analysis</h2>
                  <p>
                    As an SEO company in India, our first step is to analyse the
                    existing website - its technical aspects, content, on-page
                    optimisation and off-page performance. These typically
                    include the analysis of the site for speed, indexation,
                    mobile-friendliness, keyword ranking, content quality and
                    backlinks. Our objective here is to understand the website
                    in its entirety, its performance in SERP and the potential
                    areas of improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Keyword Research</h2>
                  <p>
                    Once we have a good idea about your website, we focus more
                    on the existing keywords' ranking. Additionally, our SEO
                    experts also research and compile a huge list of new
                    potential keywords that customers are searching for. With
                    further research, we narrow down this list to include only
                    those keywords that are most promising and have the highest
                    chances of success. This includes analysing keywords’ search
                    volume, difficulty and search Intent.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>On-Page SEO</h2>
                  <p>
                    Now we begin with individual page optimisation. We
                    add/improve the content and integrate relevant keywords
                    naturally into it. We also incorporate keywords in the URL,
                    title tags, meta descriptions, heading tags and alt tags.
                    The important thing we, as a white label SEO marketing
                    agency, pay particular attention to in this step is to avoid
                    spamming. We, additionally, optimise images, add schema data
                    and create internal linkings.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Off-Page SEO</h2>
                  <p>
                    While your on-page optimisation activities focus on making
                    your website user and search engine friendly, the off-page
                    optimisation activities further focus on boosting your
                    website's online authority and reputation, and improving its
                    SERP ranking. Our SEO experts in Noida now perform link
                    building and citation activities. For this, they conduct
                    in-depth online research to find relevant high-authority
                    websites and create quality backlinks to enhance the trust
                    factor of your website.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Technical SEO</h2>
                  <p>
                    This step is vital to ensure that the faulty technical
                    aspects and elements of your website do not break it down or
                    dampen the user experience. For this, we check and correct
                    your website for proper site architecture, page
                    crawlability, indexing, speed, responsiveness and security.
                    Other technical SEO activities that we carry out include
                    submission of sitemaps, fixing broken links, reviewing
                    robots.txt and adding structured data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="industries-we-serve">
        <div className="container">
          <div className="row">
            <h3>
              Industries <span className="rrrr">We Serve</span>
            </h3>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="industries-we-serve-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  className="img-fluid"
                />
                <h4>Business to Business (B2B)</h4>
                <p>
                  Impress your business customers by understanding their
                  specific needs and crafting SEO strategies to generate leads
                  and build brand authority.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="industries-we-serve-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  className="img-fluid"
                />
                <h4>Business to Customers (B2C)</h4>
                <p>
                  We help B2C companies reach the target audience through
                  keyword research, content optimisation, strong CTAs and local
                  SEO.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="industries-we-serve-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  className="img-fluid"
                />
                <h4>Educational Institutions</h4>
                <p>
                  Our SEO experts in Noida ensure that your educational
                  institute ranks well above your competitors and is deemed
                  trustworthy in the industry.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="industries-we-serve-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  className="img-fluid"
                />
                <h4>Retail or Online Business</h4>
                <p>
                  Expand the reach of your retail or online business with our
                  white label SEO marketing services. More visitors mean more
                  purchasing customers.
                </p>
              </div>
            </div>
          </div>

          <div className="row industries-we-serve-row-2">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="industries-we-serve-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  className="img-fluid"
                />
                <h4>Innovation and SaaS</h4>
                <p>
                  Attract potential customers interested in your product or
                  software with our specialised SEO services for the industry.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="industries-we-serve-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  className="img-fluid"
                />
                <h4>Financial Services (BFSI)</h4>
                <p>
                  Grow your online visibility and build brand trust through
                  E.E.A.T., content marketing and legally compliant SEO
                  activities.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="industries-we-serve-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  className="img-fluid"
                />
                <h4>Pharma and Medical services</h4>
                <p>
                  Rank your medical websites high on search engines and provide
                  relevant and valuable information to your stakeholders -
                  patients, HCPs and payers. Build trust and authority.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="industries-we-serve-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  className="img-fluid"
                />
                <h4>Diversion and Gaming</h4>
                <p>
                  Let your gaming website be discovered more online and provide
                  a seamless experience to your visitors. Our gaming SEO
                  services help level up your site performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get a Free Website Audit */}

      <section className="website-audit">
        <div className="container">
          <div className="row website-audit-row">
            <h3>
              Get a <span className="rrrr">Free Website</span> Audit
            </h3>
            <p>
              Unlock your website's hidden potential for increased organic
              traffic and leads. Contact us today to drive growth!
            </p>
            <WebsiteAuditForm />
          </div>
        </div>
      </section>

      {/* Projects Completed 300+ Successfully delivered across industries */}
      <section className="projects-completed">
        <div className="container">
          <div className="row projects-completed-main-row">
            <div className="col-12 col-md-12 col-lg-6 projects-completed-div-main-col">
              <h2 className="projects-completed-heading">
                Why <span className="rrrr">Choose Us</span> ?
              </h2>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="projects-completed-div">
                    <h3>
                      <AutoCounter target={300} />+
                    </h3>
                    <h4>Projects Completed</h4>
                    <p>Successfully delivered across industries</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="projects-completed-div projects-completed-div-box-sh">
                    <h3>
                      <AutoCounter target={150} />+
                    </h3>
                    <h4>Happy Clients</h4>
                    <p>Trusted by businesses worldwide</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="projects-completed-div projects-completed-div-box-sh">
                    <h3>
                      <AutoCounter target={8} />+
                    </h3>
                    <h4>Years Experience</h4>
                    <p>Proven expertise in SEO</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="projects-completed-div">
                    <h3>
                      <AutoCounter target={98} />%
                    </h3>
                    <h4>Client Satisfaction</h4>
                    <p>Exceeding expectation consistently</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/seo-01.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}

      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form
        FormHead={FormHead}
        FormPara={FormPara}
        pageName="seo-marketing-agency-in-noida"
      />
    </div>
  );
}

export default page;
