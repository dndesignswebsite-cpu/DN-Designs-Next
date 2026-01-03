import React from "react";
import "./ui-ux-design.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import PagesHero from "@/Components/PagesHero/PagesHero";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
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

  // page hero
  const heading = "UI/UX Design Agency in India";
  const subHeading = "Designing For Lasting Impression";
  const para =
    "Don’t you enjoy travelling along a clean, well-lit path with proper signage? Well, of course you do! It helps you reach your destination hassle-free, making your entire travelling experience smooth and memorable. A good UI/UX design is like this path. It serves a similar purpose – guiding users to accomplish what they set out to do. Wondering how? Join us, as we, the best UI/UX design company in India, will clarify your basics, introduce you to our processes, highlight our strengths and offer you an insight into the digital products we craft.";

    // faqs

  const leftFaqs = [
    {
      question: "Being the best UI/UX agency, what do you think is the difference between UI and UX design?",
      answer:
        "UI means user interface, where the focus is on the practicality, appearance, and feel of the website or app design. Contrary to it, UX  stands for user experience, where the focus is on making the complete journey and experience of the user seamless and satisfactory.",
    },
    {
      question: "Why is User Interface & User Experience design consultancy important for my brand?",
      answer:
        "If, as a brand, you intend to enhance user experience and satisfaction with your product and eventually increase profitability, you need UI/UX design consultancy. A creative UI/UX agency, we have a team of experts who can design a strategic and visually appealing design that can help you connect with your target audience.",
    },
    {
      question: "Does User Interface & User Experience design affect SEO and search rankings?",
      answer:
        "Yes, UI/UX design does have an impact on SEO and search rankings. A good design ensures that the website is visually appealing, has a proper information architecture and loads quickly on all kinds of devices. All these enhance user experience and, therefore, they spend more time on the website. This reduces the bounce rate. A logical architecture also helps search engines crawl and index a website easily.",
    },

    {
      question: "Can the UI/UX design company help reduce the bounce rate of my website?",
      answer:
        "Yes, one of the primary purposes of a UI and UX design agency is to provide you with design solutions that enhance user experience. When users can easily navigate through your site and find the information they are looking for, they stay longer and explore more. This improves dwell time and decreases bounce rate on your website.",
    },

    {
      question: "How do you, a UI/UX website design studio, confirm that the interface design complements my target audience's needs?",
      answer:
        "To ascertain that our UI and UX development services complement your target audience’s needs, we conduct thorough research, create user personas, and perform usability testing. Every decision we make is compelled by strategically collected data and user behaviour.",
    },

    {
      question: "Can your website/app design help me build a strong brand identity?",
      answer:
        "Yes, a strong UI and UX design leads to a good user experience on your website, and a positive perception is crucial for building a brand identity.",
    },

      {
      question: "Being an expert interface design company, how do you ensure my UI and UX design complements my branding?",
      answer:
        "While designing, our team of UI/UX designers consider your brand’s visual identity (typography, colour palette & imagery) as well as its positioning, messaging and voice. We incorporate these design elements into the interface and additionally ensure that your brand appears consistent across platforms and connects with your target audience emotionally.",
    },
  ];

  const rightFaqs = [
    {
      question: "What is the duration of your Interface design process?",
      answer: "The required time to complete the design depends entirely on your project and vision. Once we understand the project, we set a deadline for its completion. Thereafter, our UI/UX designers instantly start working on it to hand it over to you on time.",
    },
    {
      question: "What if I don't like your UI and UX design?",
      answer: "Your satisfaction is our priority, and it is a thought we live by. We welcome your feedback on our design process. Even then, if you don’t like our design, we work closely with you to make necessary revisions until the design turns into something you love..",
    },

    {
      question: "How do you handle feedback during the design?",
      answer: "We have an open communication system and welcome all your feedback, even if it is negative.  Based on your inputs, we make corrections to ensure the design meets your expectations.",
    },

    {
      question: "How do you offer ongoing support after the project is done?",
      answer: "We continue our support services even after your project is launched. This includes optimising the website performance, fixing bugs, and regularly updating the designs. This helps in keeping your UI/UX design up to date and performing better.",
    },

    {
      question: "What is the price of your interface design services?",
      answer: "The cost of your product design services depends on your project and its nuances. Our customised package is completely based on your needs.",
    },

    {
      question: "What other services do you provide?",
      answer: "Apart from our professional UI/UX design services, we offer services like website development, SEO, content marketing, branding, and more. We offer complete branding and marketing services to create a complete brand experience.",
    },
  ];


  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee"
  const FormPara = "Transform your users’ experience with your website into something special and memorable with our captivating UI/UX designs. We want your visitors to feel exactly what you want to communicate. Therefore, our experts build intuitive designs that reflect your brand identity, connect with customers on an emotional level, provide them with a seamless experience and guide them through task completion. What about discussing your vision over a cup of coffee?"


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
          <h2 className="text-center designs-that-head">
            Designs That Speak Your
            <br />
            <span className="every-pr">Industry's Language</span>
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
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 text-start">
              <h2 id="ui-heading">UI/UX Meaning - Nailing the Basics</h2>
              <div className="ui-description">
                <p className="ui-description">
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
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            UI/UX Design Process - From
            <span className="every-pr">
              <br />
               Start To End
            </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>User Research & Analysis</h2>
                  <p>
                    Understanding your target audience forms the crucial first
                    step of our process. For this, we conduct comprehensive
                    research of your target audience and analyse their problems.
                    This research, later, helps us create solutions that meet
                    your users’ requirements.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Designing Information Architecture</h2>
                  <p>
                    Users should be able to move between content seamlessly and
                    easily discover the information they are searching for. For
                    this, proper sequencing, structuring and labelling of the
                    website content is important. At this stage, we do exactly
                    that. As an expert UI/UX design agency, we plan a
                    well-organised information architecture to help your users
                    easily browse through the website.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Crafting Visual Design</h2>
                  <p>
                    A visually pleasing website can make your audience return to
                    your website again and again (thereby boosting the retention
                    rate). Therefore, at this stage of our process, we work on
                    the design aesthetic. We chose the best layout, typography,
                    imagery, and colour palette to give your interface a
                    compelling look.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Moving to Interaction Design</h2>
                  <p>
                    We now focus on creating user-friendly, smooth, and
                    efficient interactions. For this, we map out the series of
                    steps users take to complete their task. We ensure a smooth
                    experience for them and additionally make sure that they
                    receive relevant feedback from their interaction with the
                    product throughout. For this, our UI/UX designers add design
                    elements like buttons, navigation menus, and forms and
                    confirm that they are functional.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Usability Testing</h2>
                  <p>
                    Testing is important before launch to see if the user
                    interface and user experience design are easy to use. We
                    analyse the interface to see how it works. Later, we conduct
                    usability testing to identify issues and make the necessary
                    changes. We ensure your website is dynamic and
                    user-friendly, and only then go ahead with the final launch.
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
            UI/UX Design Process -
            <span className="every-pr"> From Start To End</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>User Research & Analysis</h2>
                  <p>
                    Understanding your target audience forms the crucial first
                    step of our process. For this, we conduct comprehensive
                    research of your target audience and analyse their problems.
                    This research, later, helps us create solutions that meet
                    your users’ requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Designing Information Architecture</h2>
                  <p>
                    Users should be able to move between content seamlessly and
                    easily discover the information they are searching for. For
                    this, proper sequencing, structuring and labelling of the
                    website content is important. At this stage, we do exactly
                    that. As an expert UI/UX design agency, we plan a
                    well-organised information architecture to help your users
                    easily browse through the website.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Crafting Visual Design</h2>
                  <p>
                    A visually pleasing website can make your audience return to
                    your website again and again (thereby boosting the retention
                    rate). Therefore, at this stage of our process, we work on
                    the design aesthetic. We chose the best layout, typography,
                    imagery, and colour palette to give your interface a
                    compelling look.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Moving to Interaction Design</h2>
                  <p>
                    We now focus on creating user-friendly, smooth, and
                    efficient interactions. For this, we map out the series of
                    steps users take to complete their task. We ensure a smooth
                    experience for them and additionally make sure that they
                    receive relevant feedback from their interaction with the
                    product throughout. For this, our UI/UX designers add design
                    elements like buttons, navigation menus, and forms and
                    confirm that they are functional.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Usability Testing</h2>
                  <p>
                    Testing is important before launch to see if the user
                    interface and user experience design are easy to use. We
                    analyse the interface to see how it works. Later, we conduct
                    usability testing to identify issues and make the necessary
                    changes. We ensure your website is dynamic and
                    user-friendly, and only then go ahead with the final launch.
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
              Our Core Strengths<br></br>
              <span className="every-pr">
                {" "}
                How We Make Your UI/UX Design Look Effortless
              </span>
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
                  <h3>Audience Research & Persona Mapping</h3>
                  <p>
                    Your target audience and their needs and problems are our
                    focus areas. Therefore, we conduct thorough research to
                    comprehend them. We also understand
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Audience Research & Persona Mapping</h3>
                  <p>
                    Your target audience and their needs and problems are our
                    focus areas. Therefore, we conduct thorough research to
                    comprehend them. We also understand that each user will have
                    his/her own journey and experience (problems and challenges)
                    with your website. We create several user personas for this
                    purpose.
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
                  <h3>Wireframing & Prototyping</h3>
                  <p>
                    With the help of wireframing and prototyping, we highlight
                    the functional and structural aspects as well as the layout
                    of a website. The emphasis is on user
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Wireframing & Prototyping</h3>
                  <p>
                    With the help of wireframing and prototyping, we highlight
                    the functional and structural aspects as well as the layout
                    of a website. The emphasis is on user flow and user
                    hierarchy. Issues that can hurt user experience are
                    addressed even before the coding begins.
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
                  <h3>Brand Aesthetic - Visual Design</h3>
                  <p>
                    Your website’s visual appearance and appeal are important.
                    We know this and, therefore, we choose the right colour
                    palette, typography, iconography, and imagery to refine your
                    site’s visual appeal
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Brand Aesthetic - Visual Design</h3>
                  <p>
                    Your website’s visual appearance and appeal are important.
                    We know this and, therefore, we choose the right colour
                    palette, typography, iconography, and imagery to refine your
                    site’s visual appeal. For this, we consider your brand’s
                    identity and people’s natural response to design features.
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
          <div className="row characteristics-of-good-2nd-row">
            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Usability Testing</h3>
                  <p>
                    To understand whether the UI and UX design is user-friendly and fulfils the goals set in the initial stage, we conduct a usability test. This test reveals what is working on the site and where the users are</p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Usability Testing</h3>
                  <p>
                  To understand whether the UI and UX design is user-friendly and fulfils the goals set in the initial stage, we conduct a usability test. This test reveals what is working on the site and where the users are facing problems. On the basis of this test, we make changes necessary to increase user interaction and satisfaction.
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
                  <h3>Client Feedback & Refinement</h3>
                  <p>
                    It is your product and we understand that you have a specific vision for it. Hence, your feedback on the interface design that we have created is vital. We welcome your suggestions and integrate
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Client Feedback & Refinement</h3>
                  <p>
                   It is your product and we understand that you have a specific vision for it. Hence, your feedback on the interface design that we have created is vital. We welcome your suggestions and integrate them into our design. Once everything is approved, we forward it to our development team for actual implementation.
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
                  <h3>Launch & Monitoring</h3>
                  <p>
                    Post-launch, we monitor the performance to once again see how positive the users’ experience is with the website. We also keep track of the latest related
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Launch & Monitoring</h3>
                  <p>
                   Post-launch, we monitor the performance to once again see how positive the users’ experience is with the website. We also keep track of the latest related design trends to ensure that your website is updated and meets audiences’ expectations.
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
          <h2 className="text-center craft-desktop-head">
            Web Solutions
            <span className="every-pr"> We Craft</span>
          </h2>

          <div className="row g-4 row-1">
            <div className="col-12 col-lg-5 col-md-12 d-flex">
              <div className="landing-row p-5 rounded-4 text-start">
                <h2 className="craft-heading">
                  LANDING <br />
                  PAGE
                </h2>
                <p className="craft-para mt-5">
                  Your landing page’s sole purpose is to win over your audience,
                  be it in perception, engagement or conversion. It should build
                  brand identity, establish trust, and guide customers to take
                  the desired actions. As a UI/UX design agency, we create
                  exactly that.
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
                  help users navigate from one wow moment to the next one.
                  Because who doesn’t want to hear a great story?
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
                  We don’t just design in Figma; we live in it. It’s a place
                  where we turn our ideas into functional yet aesthetic designs.
                  Whether it’s wireframes or the final best dashboard designs,
                  we make sure your UI is pixel-perfect and has a purpose.
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
                  LANDING PAGE
                </h2>
                <p>
                 Your landing page’s sole purpose is to win over your audience, be it in perception, engagement or conversion. It should build brand identity, establish trust, and guide customers to take the desired actions. As a UI/UX design agency, we create exactly that.
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
                  MULTIPAGE WEBSITE

                </h2>
                <p>
                  Your complete brand story, relevant information and product showcase – sharing all these with just a page doesn’t sound practical, right?  We, therefore, design multipage websites to help users navigate from one wow moment to the next one. Because who doesn’t want to hear a great story?
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
                  ONLINE STORE
                </h2>
                <p>
                 Your online store is not just about your products. It’s where you can turn your casual visitors into loyal shoppers. Being a professional UI/UX design company, we brainstorm, strategise, and build online stores that are sophisticated, fast, and checkout-ready so your customers keep coming back for more.
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
                  DESIGN IN FIGMA
                </h2>
                <p>
                  We don’t just design in Figma; we live in it. It’s a place where we turn our ideas into functional yet aesthetic designs. Whether it’s wireframes or the final best dashboard designs, we make sure your UI is pixel-perfect and has a purpose.
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
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara}/>
    </div>
  );
}

export default page;
