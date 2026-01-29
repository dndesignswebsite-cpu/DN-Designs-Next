export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import "../logo-designing/logo-designing.css";
import LogoDesigningTab from "@/Components/LogoDesingningTab/LogoDesigningTab";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Image from "next/image";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("logo-designing-company-in-mumbai", null, false);
  } catch (error) {
    return {
      title: "Logo Designing Company In Mumbai",
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
  let imageUrl = "https://dndesigns.co.in/uploads/pages/";
  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById(
      "logo-designing-company-in-mumbai",
      null,
      true,
    );
  } catch (error) {
    notFound();
  }

  if (!pageData) {
    notFound();
  }

  // ---  SCHEMA CLEANING LOGIC START ---
  let cleanSchema = "";
  if (pageData.headCode) {
    // Script tags remove karke raw JSON nikalna
    cleanSchema = pageData.headCode
      .replace(/<script.*?>/gi, "")
      .replace(/<\/script>/gi, "")
      .trim();
    if (cleanSchema.includes('""')) {
      cleanSchema = cleanSchema.replace(/""/g, '"');
    }
  }
  // --- SCHEMA CLEANING LOGIC END ---

  const pageName = "Logo Design Services";
  // hero section content
  const heading = "Creative Logo Designs";
  const subHeading = "Logo Design That Are Professional and Affordable";
  const para =
    " A logo is the image of your brand that tells your story. Hitting people’s hearts by creatively creating a logo that aligns with your brand’s value is like solving one of the most challenging puzzles. But with DN Designs, you don’t have to! Being the top logo design company in Mumbai for a long time, we design logos that represent brands and attract the target audience.";

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "We are a team of highly creative designers and strategists who work to create something special for your brand. Our logo design services, in particular, give your brand a face that is recognisable and highly popular. Still wondering why you should choose us? A premier logo design company in India, we have the experience, confidence and expertise to create a compelling brand identity for you. So, let’s meet and discuss more over a cup of coffee.";

  // faqs content
  const leftFaqs = [
    {
      question: "Who is the best logo design company in Mumbai?",
      answer:
        "DN Designs is the best logo design company in Mumbai, and it has been providing services for over eight years now. Our team of expert logo designers provides an excellent service, creates unique logo designs that could be easily imprinted in people’s minds and provide firms with consistent branding solutions",
    },
    {
      question: "How do you design your logo?",
      answer:
        "Being one of the top logo design firms in Mumbai, we begin by assessing your company and studying the trends. In our design stage, our creative designers propose several ideas based on this study. Once we forward you the designs, we will enhance the logo to give your business a creative yet professional logo design.",
    },
    {
      question: "What sets your logos apart?",
      answer:
        "Our logos are designed after conducting thorough research to understand your market and competitors. Our team makes sure that each logo design fits appropriately with the image you want to portray to your customers.",
    },
    {
      question: "What details do I need to share with you for my logo design?",
      answer:
        "Before starting the design process, we must know about your brand and audience, competition, style, and any other specific ideas for logo design you may have in mind. Using this information, we developed a design strategy for the logo. ",
    },
    {
      question: "Can you help me recreate my current logo?",
      answer:
        "As professionals in logo design in Mumbai,  we can help you redesign your logo to enhance your organisational image. We aim to design one such logo for you that complements the rest of your branding plan.",
    },
    {
      question: "How much time will it take to design my logo?",
      answer:
        "The logo design process can take about 7-8 days on average. After understanding your requirements, our professional designers aim to implement the final design within the required duration. ",
    },
  ];

  const rightFaqs = [
    {
      question: "Can the logo you design get global recognition?",
      answer:
        "Over the years, we have specialised in logo designing services as a creative agency in Mumbai; we have worked for international clients. Our clients are satisfied with our work and are amazed at the professional look of the logo design.",
    },
    {
      question: "How many revisions am I entitled to?",
      answer:
        "We have unlimited revisions to guarantee you the quality of the work delivered to you. Firstly, we aim to create a logo that you will be proud to own, and for this reason, we are willing to make as many changes as possible. ",
    },
    {
      question: "In what formats do you deliver the logo?",
      answer:
        "We provide logos in pixel-based formats, jpeg and png, as well as for professional publishing in vector formats, AI and eps. This will guarantee that you can use the logo in as many ways as possible. ",
    },
    {
      question: "Do you help with trademarking logos?",
      answer:
        "As the logo design agency in Mumbai, India, we can help in trademarking a logo. To finish the registration process, we advise hiring a trademark attorney who is a specialist in Intellectual Property Law. ",
    },
    {
      question: "What does it cost to design a logo?",
      answer:
        "Our logo design services are priced differently, depending on the level of your job and the need that you have given to us. When that is done, we will give you a quote based on your needs.",
    },
    {
      question: "What other services do you offer apart from designing logos?",
      answer:
        "Besides logo designing, we have services like packaging, web design, brand identity, catalogue, company profile, website, and display box designing. It is because it is our responsibility to make your brand shine through a complete service offering.",
    },
  ];

  let para1 =
    "Being the best logo design company in Mumbai, we understand that choosing the right style for the logo is critical. If you are planning to get logo-like combination marks, wordmarks, abstract logos, emblems, or dynamic 3-dimensional designs, then consider your brand’s identity and values significantly. For instance, wordmark logos are suitable for brands which have short names so that people can easily recognise them. Our expert logo designers in Mumbai work to give you logos that define your brand while helping your business succeed in a competitive market.";

  let para2 =
    "Selecting the appropriate colour palette remains one of the most critical decisions when creating a logo. It is because colours reflect your brand personality and decide what emotions you want to invoke in the people. Our logo design services in Mumbai focus on choosing the appropriate and best colour for your brand. Our creative logo designers ensure the allocation of the right colour schemes that are aligned with your brand’s colour palette and convey your unique selling proposition (USP).";

  let para3 =
    "Another crucial aspect that is worth attention is typography – an essential part of your logo design. The font of the logo that you decide on is the first step towards determining the overall theme of your brand. For instance, script fonts are associated with luxury, while modern fonts come with power-packed messages. In terms of the typography, it conveys your brand’s character. Your typography can make your logo memorable, like Disney or Zara’s logo.";

  let para4 =
    "The shape of your logo highly affects how people see your brand. Being the top logo design company in Mumbai, we understand that each shape should complement the typography, colours, and images used to design creative logos. Shapes have hidden psychological meanings, and using this as a fact, we design logos that impact the audience’s minds.";

  let para5 =
    "Logo layout is a creative concept that integrates style, colour, and typography to advance the design of the logo. The alignment of your logo defines its appearance.  For instance, the background of Ikea’s logo is yellow, and McDonald’s is red; these are examples of good layouts. As a reputed logo design company in Mumbai, we strive to come up with logo designs that not only look good but are easily identifiable.";

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "logo-designing-company-in-mumbai"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* ui/ux design */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>

      {/* Brand Identity We Created*/}
      <section className="brand-identity">
        <div className="container">
          <h2 className="text-center">
            Brand Identity<span className="every-pr"> We Created</span>
          </h2>
          <div className="row brand-identity-row">
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                {/* <img
                  src={imageUrl + "3gweudjgwer.webp"}
                  className="img-fluid"
                /> */}
                <Image
                  src={imageUrl + "3gweudjgwer.webp"}
                  className="responsive-img brand-identity-div-img"
                  alt="grin care case study page image"
                  width={1500}
                  height={1500}
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Nature’s Balance</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    An upscale cafe, Nature’s Balance, collaborated with us to
                    create a brand identity that simultaneously highlighted
                    health, nature and luxury. We created a comprehensive
                    identity for them to establish them as a premium wellness
                    cafe.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                {/* <img src={imageUrl + "jhewjrhjbf.webp"} className="img-fluid" /> */}
                <Image
                  src={imageUrl + "jhewjrhjbf.webp"}
                  className="responsive-img brand-identity-div-img"
                  alt="grin care case study page image"
                  width={1500}
                  height={1500}
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Koshish</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Koshish functions in multiple industries, for instance,
                    solar and biogas. It partnered with us to create a brand
                    identity which leaned towards minimalism. We supported them
                    in their rebranding initiative and also provided them with
                    brand guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row brand-identity-row">
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                {/* <img src={imageUrl + "Rosnax.webp"} className="img-fluid" /> */}
                <Image
                  src={imageUrl + "Rosnax.webp"}
                  className="responsive-img brand-identity-div-img"
                  alt="grin care case study page image"
                  width={1500}
                  height={1500}
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Rosnax</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    FMCG company Rosnax offers premium flavoured roasted snacks
                    like makhana to its customers. It envisioned a brand
                    identity that conveyed a sense of wholesomeness and
                    simultaneously exuded a playful and fun vibe. We gave them
                    exactly what they needed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                {/* <img src={imageUrl + "tftyfhgchg.webp"} className="img-fluid" /> */}
                <Image
                  src={imageUrl + "tftyfhgchg.webp"}
                  className="responsive-img brand-identity-div-img"
                  alt="grin care case study page image"
                  width={1500}
                  height={1500}
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Wlue’s</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    Makhana brand Wlue's wished to position itself as a product
                    for winners and appeal to the youth globally. We designed
                    its brand identity accordingly with a retro superhero feel
                    and a star incorporated in its logo to attract winners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row brand-identity-row">
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                {/* <img
                  src={imageUrl + "bake-o-Tech.webp"}
                  className="img-fluid"
                /> */}

                <Image
                  src={imageUrl + "bake-o-Tech.webp"}
                  className="responsive-img brand-identity-div-img"
                  alt="grin care case study page image"
                  width={1500}
                  height={1500}
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Bake O Tech</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Web Design</h4>
                    </div>
                  </div>

                  <p>
                    Offering food & bakery consultancy, Bake O Tech wanted a
                    professional and unique brand identity that set them apart
                    in the industry. We played with the initial letters to
                    reflect their name and establish the industry they belong
                    to.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                {/* <img
                  src={imageUrl + "erhfLuxmi-cars.webp"}
                  className="img-fluid"
                /> */}
                <Image
                  src={imageUrl + "erhfLuxmi-cars.webp"}
                  className="responsive-img brand-identity-div-img"
                  alt="grin care case study page image"
                  width={1500}
                  height={1500}
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Luxmi Cars</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Social Media</h4>
                    </div>
                  </div>

                  <p>
                    A passion for cars and a love for luxury is what Luxmi Cars
                    - a car dealer in Karnal - wanted to showcase in their brand
                    identity. We played with colours and typography to achieve
                    the desired effect for the brand.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row brand-identity-row">
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                {/* <img
                 src={imageUrl+"erhfLuxmi-cars.webp"}
                  className="img-fluid"
                /> */}

                <video
                  src="https://dndesigns.co.in/uploads/videos/Greephoria.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="enlitecasestudy-video1"
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Gleephoria</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Website Design</h4>
                    </div>
                  </div>

                  <p>
                    Concept-based toy brand, Gleephoria wanted its identity to
                    be all about kids, fun, education, inspiration and
                    creativity. We incorporated all these in our design and
                    created an identity that appealed to its young audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                {/* <img
                  src={imageUrl + "deeproot-logo.webp"}
                  className="img-fluid"
                /> */}

                <Image
                  src={imageUrl + "deeproot-logo.webp"}
                  className="responsive-img brand-identity-div-img"
                  alt="grin care case study page image"
                  width={1500}
                  height={1500}
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Deep Root</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Rebranding</h4>
                      <h4 className="brand-identity-btn">Website Design</h4>
                    </div>
                  </div>

                  <p>
                    Flavoured makhana brand, Deep Root aspired to appeal to both
                    Indian and international audiences. We crafted a modern logo
                    that reflected nature, purity and its brand ethos ‘rooted in
                    tradition and culture’.
                  </p>
                </div>
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
              Know the Importance
              <span className="every-pr"> of a Good Logo</span>
            </h2>
            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className=" but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "Frame-427324115-300x295.webp"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>A Strong First Impression</h3>
                  <p>
                    In many cases, customers encounter your logo before they get
                    to know or buy anything else from your brand. So, having a
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>A Strong First Impression</h3>
                  <p>
                    In many cases, customers encounter your logo before they get
                    to know or buy anything else from your brand. So, having a
                    good logo design is essential to grabbing their attention.
                  </p>
                </div>
              </div>
              <img
                className="but-why-check-eye"
                src="https://dndesigns.co.in/uploads/pages/imgi_2_Frame-427324112.webp"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className=" but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "jhguhg-300x295.webp"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Attention-Grabbing</h3>
                  <p>
                    A good logo can get your audience's attention and capture
                    your brand's voice, ranking you ahead of your
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Attention-Grabbing</h3>
                  <p>
                    A good logo can get your audience's attention and capture
                    your brand's voice, ranking you ahead of your counterparts.
                  </p>
                </div>
              </div>
              <img
                className="but-why-check-eye"
                src="https://dndesigns.co.in/uploads/pages/imgi_2_Frame-427324112.webp"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className="p-3 but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "hdgh-300x295.webp"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Building Brand Identity</h3>
                  <p>
                    A well-developed logo constitutes the backbone of your brand
                    image, which, in fact, can be considered the foundation
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Building Brand Identity</h3>
                  <p>
                    A well-developed logo constitutes the backbone of your brand
                    image, which, in fact, can be considered the foundation of
                    your enterprise.
                  </p>
                </div>
              </div>
              <img
                className="but-why-check-eye"
                src="https://dndesigns.co.in/uploads/pages/imgi_2_Frame-427324112.webp"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className="p-3 but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src={imageUrl + "fgjhg-300x295.webp"}
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Standout Recognition</h3>
                  <p>
                    In the current market, professional logo designers in Mumbai
                    would give your business the exposure it deserves.
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Standout Recognition</h3>
                  <p>
                    In the current market, professional logo designers in Mumbai
                    would give your business the exposure it deserves.
                  </p>
                </div>
              </div>
              <img
                className="but-why-check-eye"
                src="https://dndesigns.co.in/uploads/pages/imgi_2_Frame-427324112.webp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* From Research to Design How We Create Your Logo desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            From Research to Design
            <span className="every-pr">
              <br />
              How We Create Your Logo
            </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Evaluate and Understand the Brand</h2>
                  <p>
                    A small design, nonetheless, a logo is pivotal to your
                    company’s identity. It is how consumers remember you, and
                    therefore, it should reflect your values, beliefs and
                    personality. As a logo design agency, we know this, and
                    therefore, our logo creation journey begins with
                    understanding your brand and how you want to be perceived.
                    Is it fun and quirky, or sophisticated and elegant, or
                    perhaps, something entirely different? We discuss your brand
                    and ask a lot of questions about your vision and goals.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Research The Industry</h2>
                  <p>
                    Your business or product invariably has to compete with
                    other businesses or products in the same vertical/category.
                    Hence, it makes sense to assess the existing brands in the
                    industry and the types of logos they use. Our next step
                    covers exactly this. We research the industry and figure out
                    what kind of logos work best and which design elements can
                    add more value to your brand identity. Conversely, this
                    research also reveals the overused/outdated elements that
                    can adversely impact your brand identity.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Determine Logo Placement Needs</h2>
                  <p>
                    Business logos are used in multiple places. This could
                    include websites, social media, letterheads, documents,
                    billboards, emails, packaging design, and many more. The
                    space and layout constraints for each of these physical and
                    digital touchpoints are different, and, therefore, the
                    creative company logo should be flexible enough to fit into
                    each one of these. In this step, we figure out this aspect.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Brainstorm & Sketch Creative Concepts</h2>
                  <p>
                    With all essential details in place, we now begin
                    brainstorming concepts and ideas. Our expert logo designers
                    in Noida office sit down and discuss words, themes, images
                    or symbols that best reflect your brand identity, story and
                    personality. We sketch down individual ideas, cluster them
                    up to create something new, and design variations. By the
                    end of this step, we narrow down on a few design concepts to
                    proceed to the next stage.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Digitise the Shortlisted Concepts</h2>
                  <p>
                    Till now, we have had the design sketches on paper, but now
                    we move forward to create digital drafts. In this stage, we
                    have greater creative liberty, and therefore we play around
                    with colours, fonts, shapes, and backgrounds to see which
                    one works best. In addition, our logo designers in Noida
                    also work and improve upon minute design details that were
                    not possible in the sketching stage.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card6-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">06</div>
                <div className="col-10">
                  <h2>Ask For Feedback & Review</h2>
                  <p>
                    Once we have finalised our digital drafts, it is now time to
                    share them with you for review. Based on the feedback we
                    receive from you, we make further adjustments, refinements
                    and changes, and reshare the drafts with you. This process
                    is repeated until the creative company logo design is
                    finalised.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card7-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">07</div>
                <div className="col-10">
                  <h2>Deliver The Final Logo</h2>
                  <p>
                    The work is now completed, and the only remaining part is
                    the final delivery. Depending on your requirement, we
                    deliver your premium logo design in JPEG, PNG, CDR, AI, EPS
                    and other formats.
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
                  <h2>Evaluate and Understand the Brand</h2>
                  <p>
                    A small design, nonetheless, a logo is pivotal to your
                    company’s identity. It is how consumers remember you, and
                    therefore, it should reflect your values, beliefs and
                    personality. As a logo design agency, we know this, and
                    therefore, our logo creation journey begins with
                    understanding your brand and how you want to be perceived.
                    Is it fun and quirky, or sophisticated and elegant, or
                    perhaps, something entirely different? We discuss your brand
                    and ask a lot of questions about your vision and goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Research The Industry</h2>
                  <p>
                    Your business or product invariably has to compete with
                    other businesses or products in the same vertical/category.
                    Hence, it makes sense to assess the existing brands in the
                    industry and the types of logos they use. Our next step
                    covers exactly this. We research the industry and figure out
                    what kind of logos work best and which design elements can
                    add more value to your brand identity. Conversely, this
                    research also reveals the overused/outdated elements that
                    can adversely impact your brand identity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Determine Logo Placement Needs</h2>
                  <p>
                    Business logos are used in multiple places. This could
                    include websites, social media, letterheads, documents,
                    billboards, emails, packaging design, and many more. The
                    space and layout constraints for each of these physical and
                    digital touchpoints are different, and, therefore, the
                    creative company logo should be flexible enough to fit into
                    each one of these. In this step, we figure out this aspect.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Brainstorm & Sketch Creative Concepts</h2>
                  <p>
                    With all essential details in place, we now begin
                    brainstorming concepts and ideas. Our expert logo designers
                    in Noida office sit down and discuss words, themes, images
                    or symbols that best reflect your brand identity, story and
                    personality. We sketch down individual ideas, cluster them
                    up to create something new, and design variations. By the
                    end of this step, we narrow down on a few design concepts to
                    proceed to the next stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Digitise the Shortlisted Concepts</h2>
                  <p>
                    Till now, we have had the design sketches on paper, but now
                    we move forward to create digital drafts. In this stage, we
                    have greater creative liberty, and therefore we play around
                    with colours, fonts, shapes, and backgrounds to see which
                    one works best. In addition, our logo designers in Noida
                    also work and improve upon minute design details that were
                    not possible in the sketching stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">06</h3>
                <div className="card-body-create-mobile">
                  <h2>Ask For Feedback & Review</h2>
                  <p>
                    Once we have finalised our digital drafts, it is now time to
                    share them with you for review. Based on the feedback we
                    receive from you, we make further adjustments, refinements
                    and changes, and reshare the drafts with you. This process
                    is repeated until the creative company logo design is
                    finalised.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">07</h3>
                <div className="card-body-create-mobile">
                  <h2>Deliver The Final Logo</h2>
                  <p>
                    The work is now completed, and the only remaining part is
                    the final delivery. Depending on your requirement, we
                    deliver your premium logo design in JPEG, PNG, CDR, AI, EPS
                    and other formats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Brand  */}
      <section>
        <div className="container logo-brand-parent">
          <h2 className="text-center brand-logo-heading">
            Types of Brand Identity{" "}
            <span className="red-headg">Logos We Design</span>
          </h2>
          <div className="row logo-brand1">
            <div className="col-12 col-lg-5 col-md-12">
              <h2 className="logo-brand-title">Monogram</h2>
              <h6 className="logo-type">Lettermark</h6>
              <p className="logo-brand-paragraph">
                Most applicable to brands with long names, monogram logos pack
                lots of information into one neat and easy-to-identify image.
                These logos are clear and memorable and are most suitable for
                corporate, fashion or any luxury brands. Being the best logo
                design company in Mumbai, we design logos that embody the
                brand’s spirit.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-12 com-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "HBO logo.webp"}
                    alt="HBO logo"
                    className="img-fluid logo"
                  /> */}
                  <Image
                    src={imageUrl + "HBO logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "IBM logo.webp"}
                    alt="IBM logo"
                    className="img-fluid"
                  /> */}
                  <Image
                    src={imageUrl + "IBM logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "Nasa logo.webp"}
                    alt="NASA logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "Nasa logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row logo-brand2">
            <div className="col-12 col-lg-5 col-md-12">
              <h2 className="logo-brand-title">Wordmarks</h2>
              <h6 className="logo-type">Similar to letter mark</h6>
              <p className="logo-brand-paragraph">
                If you wish your brand name to stand out and dominate your logo,
                a wordmark design is most suitable. These logos are made from
                the chosen typefaces, transforming one’s brand name into an
                artwork. We make sure your logo enriches your brand’s image by
                opting for the right colour combination and fonts.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "visa logo.webp"}
                    alt="Visa logo"
                    className="img-fluid logo"
                  /> */}

                  <Image
                    src={imageUrl + "visa logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "coca logo.webp"}
                    alt="Coca-Cola logo"
                    className="img-fluid"
                  /> */}
                  <Image
                    src={imageUrl + "coca logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "google logo.webp"}
                    alt="Google logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "google logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row logo-brand3">
            <div className="col-12 col-lg-5 col-md-12">
              <h2 className="logo-brand-title">Pictorial</h2>
              <h6 className="logo-type"> Symbols</h6>
              <p className="logo-brand-paragraph">
                Imagine if you target the consumer with the most straightforward
                message to understand your brand as much as possible. That is
                what a pictorial mark logo does. Also called icon logos, these
                designs can convey your brand message and establish an emotional
                relationship between your company and the public.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "apple logo.webp"}
                    alt="Apple logo"
                    className="img-fluid logo"
                  /> */}

                  <Image
                    src={imageUrl + "apple logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "twitter logo.webp"}
                    alt="X logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "twitter logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "pintrest logo.webp"}
                    alt="Pinterest logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "pintrest logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row logo-brand4">
            <div className="col-12 col-lg-5 col-md-12">
              <h2 className="logo-brand-title">Abstract</h2>
              <h6 className="logo-type">Represent Your Brand</h6>
              <p className="logo-brand-paragraph">
                Abstract logos are ideal for displaying unique brand personality
                through the use of symbols or figures. These are not thereby
                pictorial but are representative and have hidden meanings,
                unlike the objects being illustrated. Being the best brand
                building agency in Mumbai, we design abstract logos that are
                memorable and tell a brand story.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "addidas logo.webp"}
                    alt="adidas logo"
                    className="img-fluid logo"
                  /> */}

                  <Image
                    src={imageUrl + "addidas logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "bp[ logo.webp"}
                    alt="BP logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "bp[ logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "pepsi logo.webp"}
                    alt="Pepsi logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "pepsi logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row logo-brand5">
            <div className="col-12 col-lg-5 col-md-12">
              <h2 className="logo-brand-title">Mascots</h2>
              <h6 className="logo-type">Characters</h6>
              <p className="logo-brand-paragraph">
                If you want your brand to come to life with energy and
                personality, a mascot logo is the best way to go about it. Such
                logos include illustrated characters, which give your brand a
                warm, friendly look. Mascot logos look enjoyable and allow
                brands to engage with people directly on a more personal level.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "kfc logo.webp"}
                    alt="KFC logo"
                    className="img-fluid logo"
                  /> */}

                  <Image
                    src={imageUrl + "kfc logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "pringles.webp"}
                    alt="Pringles logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "pringles.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "amul logo.webp"}
                    alt="Amul logo"
                    className="img-fluid"
                  /> */}
                  <Image
                    src={imageUrl + "amul logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row logo-brand6">
            <div className="col-12 col-lg-5 col-md-12">
              <h2 className="logo-brand-title">Combination</h2>
              <h6 className="logo-type">Picture and Text</h6>
              <p className="logo-brand-paragraph">
                Combination marks involve the use of text and images, symbols,
                or other abstract details to give the logo a unique selling
                proposition story. These flexible logos are primarily designed
                using both text and the picture placed beside or above or below
                the other, allowing you freedom in how your brand is marketed.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "doritos.webp"}
                    alt="Doritos logo"
                    className="img-fluid logo"
                  /> */}
                  <Image
                    src={imageUrl + "doritos.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "burger king logo.webp"}
                    alt="Burger King logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "burger king logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "lacoster logo.webp"}
                    alt="Lacoste logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "lacoster logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row logo-brand7">
            <div className="col-12 col-lg-5 col-md-12">
              <h2 className="logo-brand-title">The Emblem</h2>
              <h6 className="logo-type">Symbol or an Icon</h6>
              <p className="logo-brand-paragraph">
                Emblem logos are the most universal and are associated with
                professionalism and endurance. They are suitable for
                organisations such as learning institutions or government
                establishments as prestige and conventionalism are valued at
                home by such organisations.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "harley logo.webp"}
                    alt="Harley-Davidson logo"
                    className="img-fluid logo"
                  /> */}

                  <Image
                    src={imageUrl + "harley logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "vi ri logo.webp"}
                    alt="Harvard logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "vi ri logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  {/* <img
                    src={imageUrl + "starbucks logo.webp"}
                    alt="Starbucks logo"
                    className="img-fluid"
                  /> */}

                  <Image
                    src={imageUrl + "starbucks logo.webp"}
                    className="responsive-img logo"
                    alt="logo-designing page"
                    width={1500}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Wow-Making */}
      <section>
        <div className="container logo-design-parent ">
          <div className="row text-center">
            <h2 className="text-center  logo-design-heading">
              The Wow-Making Elements Of
              <span className="red-headg">
                <br /> Professional Logo Design
              </span>
            </h2>
          </div>

          <div className="row logo-design-section">
            <div className="col-lg-8 col-md-7 position-relative logo-hover-wrapper">
              {/* <img
                src={imageUrl + "nectarpure graph.webp"}
                alt="Nectarpure"
                className="img-fluid logo-design-img"
              /> */}

              <Image
                src={imageUrl + "nectarpure graph.webp"}
                className="responsive-img logo-design-img"
                alt="logo-designing "
                width={1500}
                height={1000}
              />
              {/* 
              <img
                src={imageUrl + "imgi_36_nec.webp"}
                alt="Slide Overlay"
                className="img-fluid logo-overlay-img"
              /> */}

              <Image
                src={imageUrl + "imgi_36_nec.webp"}
                className="responsive-img logo-overlay-img"
                alt="logo-designing "
                width={1500}
                height={1000}
              />
            </div>

            <div className="col-lg-4 col-md-5 mb-sm-4 image-stack">
              <div className="row">
                <div className="col-lg-12">
                  {/* <img
                    src={imageUrl + "wordmark.webp"}
                    alt=""
                    className="img-fluid logo-design-img2"
                  /> */}

                  <Image
                    src={imageUrl + "wordmark.webp"}
                    className="responsive-img logo-design-img2"
                    alt="logo-designing "
                    width={1600}
                    height={942}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {/* <img
                    src={imageUrl + "2b3ewebdjh.webp"}
                    alt=""
                    className="img-fluid logo-design-img2"
                  /> */}

                  <Image
                    src={imageUrl + "2b3ewebdjh.webp"}
                    className="responsive-img logo-design-img2"
                    alt="logo-designing "
                    width={1600}
                    height={942}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoDesigningTab
        para1={para1}
        para2={para2}
        para3={para3}
        para4={para4}
        para5={para5}
      />

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
