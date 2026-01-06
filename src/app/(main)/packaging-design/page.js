export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import "./packaging-design.css";
import StandAlonePackaging from "@/Components/StandAlonePackaging/StandAlonePackaging";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("packaging-design", null, false);
  } catch (error) {
    return {
      title: "Packaging Design",
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
    // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("packaging-design", null, true);
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


  const heading = "Strategic Packaging Design Agency";
  const subHeading = "Get Noticed, Build Connection and Drive Sales";
  const para =
    "Packaging design is similar to a movie teaser. If it doesn’t capture the audience’s interest, they will spend their time and money elsewhere. Packaging design is, therefore, crucial to make the first impactful impression on customers that will eventually lead to sales. As a creative design agency in India, we offer you just that. Stay with us as we walk you through our work portfolio and structured work process.";

  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Consultation and Research",
      description:
        "You want a product package design & your mind is flooded with ideas and questions about design, market & audience. Let’s solve them one at a time.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/smart-adult-caucasi.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Brand Identity Design",
      description:
        "Whether it is the name, logo, tagline or a unique feature, all form part of your brand identity. Partner with us to create one that commands attention. ",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/9-1.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Product Photography",
      description:
        "Want a captivating photograph to enhance the appeal of your packaging design? Utilise our professional product photography service to elevate your packaging.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/Untitled-1.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Legal Compliance",
      description:
        "Legal compliance can sound a bit complex & intimidating, but your packaging design is incomplete without it. Contact us to create a legally compliant design.",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/10.jpg",
    },
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/jgkj.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/wp-content/uploads/2025/06/2-4.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/nature-balance-mangoe-2.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/wp-content/uploads/2025/06/1-1.jpg",
    },
  ];

  const leftFaqs = [
    {
      question: "What does packaging design entail?",
      answer:
        "Packaging design is all about designing a visually appealing outer packaging for products. Its purpose is to attract the shoppers and turn them into buyers. In addition, it also includes selecting an appropriate packet/bottle or any other container to secure the product inside. ",
    },
    {
      question: "What is your process of creating packaging design?",
      answer:
        "Our process starts with a conversation to understand your product and its USP. The research, design planning and review phases follow, and only thereafter do we sit down to design your product package. In the end, we deliver ready-for-printing design files to you.",
    },
    {
      question:
        "How are your package designs unique or better than other label designing companies?",
      answer:
        "DN Designs is a branding and design company with over 8 years of experience in creative packaging, label, can and pouch design. Our designs are created to reflect your brand identity, establish a unique positioning for your product in the market and attract the target customer segment. We base all our packaging and label designs on an accurate product understanding and solid research work (market & audience). That, combined with the skills of our creative design team, is what sets us apart from other label design companies. Our list of happy customers is only growing, and we invite you to be one of them.",
    },

    {
      question: "How long does it take you to create a label design?",
      answer:
        "The time required for the completion of any label design project depends entirely on the brand objectives and the design intricacies involved. To give you an estimate, though, it can take around 3-4 weeks.",
    },

    {
      question:
        "I want to sell my product both in physical stores and on e-commerce platforms. Will your package design fit both spaces?",
      answer:
        "Yes, our designs are created keeping in mind both the retail and e-commerce space. Wherever you might want to sell your product, our designs will ensure that your brand stands out.",
    },

    {
      question:
        "My product has several variants. Can you design the package as per the specifications of each?",
      answer:
        "Yes, we understand that certain products can have variants (like different flavours in a juice brand), and therefore, we design for each of them according to their specifications. However, we ensure that brand visual consistency is maintained.",
    },
  ];

  const rightFaqs = [
    {
      question: "What if I want to use my image in the package design?",
      answer:
        "For sure, we can do that for you. All you need to do on your end is to provide us with a high-resolution image of yours, and we will incorporate it into your package design.",
    },
    {
      question: "How many revisions could I get for my package design?",
      answer:
        "The count doesn’t matter so much to us. What matters, though, is your satisfaction with our work. Therefore, we provide unlimited revisions to ensure that the final packaging and label design is what you envisioned for your product.",
    },

    {
      question:
        "I am planning to launch my brand in another country. Can you help create a packaging design that appeals to the audience there?",
      answer:
        "Yes, we can help you create a design that is suitable for a particular country, or even a specific region within India. The key things that we take care of here are cultural sensitivities, language preferences and local regulatory norms.",
    },

    {
      question:
        "I want help with printing and production of the designs. Do you offer this service too?",
      answer:
        "As a branding and design company, we are primarily focussed on creating stunning package, pouch and label designs for your products. However, we can put you in touch with a few of our reliable printers who can help you with the matter.",
    },

    {
      question: "What services do you provide other than package designing?",
      answer:
        "We are a Noida-based branding and design agency, and our suite of services includes everything - from branding solutions to website design and communication strategy development. To put it broadly, we help your business establish its presence both online and offline.",
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "As a product packaging design agency, we have solid experience in creating compelling, meaningful and legally compliant designs for your product’s package, label or pouch. We strive to create a design that has a magnetic effect on your target audience. Our core objective is to enhance your brand’s awareness in the market and thereby increase sales. Sounds just like what you are looking for? Contact us ASAP.! We can’t wait to design a striking packaging and label design for you.";

  return (
    <div>


    {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "packaging-design"}`}
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

      {/* Our Work Portfolio */}
      <section className="portfolio">
        <div className="container">
          <h2 className="text-center">
            Our <span className="every-pr"> Work Portfolio</span>
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
                      <h3>NECTARPURE</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Nutraceutical brand NECTARPURE wanted to establish its
                    FusionMax Whey Protein product as a niche lifestyle protein
                    brand. We provided consultation services to them and created
                    a premium label design to appeal to their target audience.
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
                      <h3>Green Horn</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Website</h4>
                    </div>
                  </div>

                  <p>
                    With their energy drink, Green Horn aspired to appeal to its
                    young audience, who frequent clubs in New Zealand. We
                    created a can design for the brand which conveyed a sense of
                    energy and fun, perfect for party-loving youth.
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
                      <h4 className="our-port-btn">Packaging</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div>
                  </div>

                  <p>
                    For the cocktail bomb brand, Mr. Bomzy, we created a
                    packaging design that conveyed a sense of fun and ease (of
                    making a drink). Moreover, we assisted them in selecting an
                    appropriate box—a window box with a magnetic flap—for a
                    better user experience.
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
                      <h3>Thames</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Packaging</h4>
                      <h4 className="our-port-btn">Website</h4>
                    </div>
                  </div>

                  <p>
                    Thames specialises in offering healthy snacking options to
                    its customers. For its various products, like dry fruits,
                    oats, muesli and protein bars, it collaborated with us to
                    create package designs that reflected health and
                    refreshment. We, no doubt, delivered.
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
                      <h3>Wlue's</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    Makhana brand Wlue’s wanted to establish itself as a premium
                    snacking brand globally. Its target audience were Gen Zers.
                    Accordingly, we created colourful and eye-catching packaging
                    designs for all its variants to appeal to its young and
                    fun-loving audience.
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
                      <h3>The Bobalist</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Web design</h4>
                    </div>
                  </div>

                  <p>
                    The Bobalist, the popping boba drink bottle, is a fresh new
                    product for the Indian market and has been developed to
                    target a young audience. We helped in selecting a suitable
                    bottle and designing a label that reflects fun and
                    freshness.
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
                      <h3>Enlite</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Enlite’s healthy sparkling mineral water & prebiotic drinks
                    come in a variety. Our can design for them included
                    character creation around the brand name. We also used
                    design elements to convey a sense of freshness and calmness.
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
                      <h3>Kalprishi</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Rebranding</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    The makers are veterans of the spice industry and
                    collaborated with us for their own brand. For over 20 of
                    their variants, we created a packaging design that blended
                    modern and traditional elements to appeal to the target
                    audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creating Your Brand desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Crafting the First Impression
            <span className="every-pr">
              <br />A Glimpse of Our Packaging Design Process
            </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Briefing & Interaction</h2>
                  <p>
                    We get the ball rolling with a briefing and interaction
                    session. This is where we sit down to discuss your product,
                    its USP and STP (segmentation, targetting and positioning).
                    This helps us understand your product’s speciality (and its
                    need in the market), decide its segment, define the customer
                    base and plan the best market positioning for it. For us,
                    your inputs at this stage are extremely crucial to better
                    understand your product and vision, and set the goals.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Research & Analysis</h2>
                  <p>
                    This is our research stage. Once we get a briefing from you,
                    we set out to explore the market, the competitors and the
                    audience. This is important for the simple reason that your
                    product will ultimately be launched in the same market and
                    compete with other brands in the same category. Your product
                    packaging and label design need to stand out to maintain a
                    competitive edge while fulfilling customers’ requirements
                    and expectations.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Ideation & Planning</h2>
                  <p>
                    This is where we decide the KLD (key line dimension), colour
                    palette, typography, fonts, visuals, and other aspects of
                    designing. We also create and share reference boards and
                    mood boards with you so that you get a comprehensive visual
                    idea about the various existing creative
                    packaging/label/pouch designs in the market and your product
                    design’s appeal and impact in comparison. Your active
                    participation and feedback are crucial in finalising the
                    design concepts in this stage as well.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Implementation & Review</h2>
                  <p>
                    The creative process continues as we now finally move
                    towards actually designing your product packaging. We take
                    care of every design element - be it your logo, label, or
                    graphics - and address any issues that might jeopardise the
                    effective completion of the process. In addition, we ensure
                    to integrate information critical for legal compliance. The
                    prototyping and review phase follows until we reach the
                    final design.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Finalising & Delivering</h2>
                  <p>
                    Congratulations! You now have your beautiful design ready.
                    We share the final design files with you in AI, CDR, PDF
                    format for printing purposes. As a packaging design company,
                    it is a proud moment for us.
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
            Crafting the First Impression
            <span className="every-pr">
              {" "}
              A Glimpse of Our Packaging Design Process
            </span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Briefing & Interaction</h2>
                  <p>
                    We get the ball rolling with a briefing and interaction
                    session. This is where we sit down to discuss your product,
                    its USP and STP (segmentation, targetting and positioning).
                    This helps us understand your product’s speciality (and its
                    need in the market), decide its segment, define the customer
                    base and plan the best market positioning for it. For us,
                    your inputs at this stage are extremely crucial to better
                    understand your product and vision, and set the goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Research & Analysis</h2>
                  <p>
                    This is our research stage. Once we get a briefing from you,
                    we set out to explore the market, the competitors and the
                    audience. This is important for the simple reason that your
                    product will ultimately be launched in the same market and
                    compete with other brands in the same category. Your product
                    packaging and label design need to stand out to maintain a
                    competitive edge while fulfilling customers’ requirements
                    and expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Ideation & Planning</h2>
                  <p>
                    This is where we decide the KLD (key line dimension), colour
                    palette, typography, fonts, visuals, and other aspects of
                    designing. We also create and share reference boards and
                    mood boards with you so that you get a comprehensive visual
                    idea about the various existing creative
                    packaging/label/pouch designs in the market and your product
                    design’s appeal and impact in comparison. Your active
                    participation and feedback are crucial in finalising the
                    design concepts in this stage as well.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Implementation & Review</h2>
                  <p>
                    The creative process continues as we now finally move
                    towards actually designing your product packaging. We take
                    care of every design element - be it your logo, label, or
                    graphics - and address any issues that might jeopardise the
                    effective completion of the process. In addition, we ensure
                    to integrate information critical for legal compliance. The
                    prototyping and review phase follows until we reach the
                    final design.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Finalising & Delivering</h2>
                  <p>
                    Congratulations! You now have your beautiful design ready.
                    We share the final design files with you in AI, CDR, PDF
                    format for printing purposes. As a packaging design company,
                    it is a proud moment for us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* top capibilities */}

      <section className="top-cap">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Your Visual Guide Through Your
              <span className="every-pr"> Packaging Design Journey</span>
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
                  <h3>Reference Board</h3>
                  <p>
                    How does a packaging design agency convey its design plan
                    research to clients? It’s given that words alone can never
                    do justice to it. After all, design is a visual creative
                    process, and you need to see it
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Reference Board</h3>
                  <p>
                    How does a packaging design agency convey its design plan
                    research to clients? It’s given that words alone can never
                    do justice to it. After all, design is a visual creative
                    process, and you need to see it to get a feel of it. In
                    comes the reference board, a perfect visual tool through
                    which we share with you our inspiration, design references
                    and style direction. It includes visuals of existing
                    packaging, label and pouch designs in the market as well as
                    structural or dieline inspirations.
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
                  <h3>Mood Board</h3>
                  <p>
                    While the reference board draws on inspiration and design
                    ideas from the market, the mood board is where we define the
                    design ideas for your product. It includes colours,
                    typography and visuals - all of which
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Mood Board</h3>
                  <p>
                    While the reference board draws on inspiration and design
                    ideas from the market, the mood board is where we define the
                    design ideas for your product. It includes colours,
                    typography and visuals - all of which convey a certain
                    emotion suitable to your brand identity. It offers a better
                    visual idea of the final design, even before the design
                    process has begun. In addition, it serves as a guide to the
                    entire design process that follows, ensuring that the
                    process stays on track and the number of revisions is
                    minimal.
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
                  <h3>3D Mockups</h3>
                  <p>
                    Your label design is ready, but you are still struggling to
                    visualise how it will eventually look. Don’t worry, you are
                    not alone. This is a pretty common issue, and we have just
                    the perfect solution for you - 3D mockups. These
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>3D Mockups</h3>
                  <p>
                    Your label design is ready, but you are still struggling to
                    visualise how it will eventually look. Don’t worry, you are
                    not alone. This is a pretty common issue, and we have just
                    the perfect solution for you - 3D mockups. These give you a
                    more precise and practical visualisation of how your product
                    will appear and feel in the real world. Even now, if
                    something doesn’t feel right, modifications and refinements
                    can be made before finalising the design. Super helpful and
                    interesting, right?
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

      {/* stand alone packaging design */}
      <section className="standalone-sec-pac">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Standalone Packaging{" "}
              <span className="every-pr"> Design Services</span>{" "}
            </h2>
          </div>
        </div>
        <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />
      </section>

      {/* faqs */}

      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form
        FormHead={FormHead}
        FormPara={FormPara}
        pageName="packaging-design"
      />
    </div>
  );
}

export default page;
