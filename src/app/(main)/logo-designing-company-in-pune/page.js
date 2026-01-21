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

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("logo-designing-company-in-pune", null, false);
  } catch (error) {
    return {
      title: "Logo Designing Company In Pune",
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
    pageData = await getPageById("logo-designing-company-in-pune", null, true);
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
  const heading = "Professional Logo Designs";
  const subHeading = "Logo Designs That Are Unique And Creative";
  const para =
    " Your logo is your brand’s face, and creating a face to speak your brand’s story can be tricky. It’s much like solving a puzzle, which requires patience and strategy. But you do not need strategy or patience; you only need DN Designs! We are a professional logo design agency in Pune, and we design logos that carry a brand’s essence and attract people’s attention. With us, create logos that stand out!";

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "We are a team of highly creative designers and strategists who work to create something special for your brand. Our logo design services, in particular, give your brand a face that is recognisable and highly popular. Still wondering why you should choose us? A premier logo design company in India, we have the experience, confidence and expertise to create a compelling brand identity for you. So, let’s meet and discuss more over a cup of coffee.";

  // faqs content
  const leftFaqs = [
    {
      question:
        "Which is the best logo designing company in Pune?",
      answer:
        "With over eight years of experience in the industry, DN Designs is renowned among customers as the best logo designing company in Pune. Our professional logo design leaves a lasting impact on the people while creating a unique yet strong brand identity.",
    },
    {
      question: "How is your logo better than so many in the market?",
      answer:
        "Our logo designs are creatively made and go through a lengthy process. Our team of logo designers in Pune ensures your logo matches your brand image and makes you stand out.",
    },
    {
      question: "What is your process of making a logo?",
      answer:
        "Being the best logo design firm in Pune, we start by learning about your brand and doing market research. Later, we will discuss with our creative graphic designers to create multiple sketches for you. After getting your feedback, we will finalize and hand you your creative logo design!",
    },
    {
      question: "What details do you need for logo design?",
      answer:
        "To get started, we need details about your brand, target audience, competitors, style preference, and any specific ideas you may have. Details like these help us design a blueprint for your logo. ",
    },
    {
      question: "When will I get my logo design?",
      answer:
        "Our logo design process takes around 7-8 days. Even that entirely depends on your needs, as we initiate logo design as soon as we know your wants and vision. Our professional logo designers ensure you get the designs on time.",
    },
    {
      question:
        "Would your logo get global reach?",
      answer:
        "As an experienced creative agency in Pune, we have many clients worldwide for our logo design services in Pune. Our clients love our professional logo designs and are left in ‘awe.’ ",
    },
  ];

  const rightFaqs = [
    {
      question: "I want to redesign my logo. Can you help me?",
      answer:
        "Offering logo design in Pune, we can redesign your logo to match your brand value and identity. Our top priority is to maintain uniformity with your overall brand design.",
    },
    {
      question: "In what formats will I get the logos?",
      answer:
        "To meet your needs, we provide logos in formats like raster files ( JPEG, PNG) and vector files (AI, EPS). It confirms you can use your logo on any platform. ",
    },
    {
      question: "Do you offer revision for the designs?",
      answer:
        "Yes, you will get unlimited revisions for your logo design. It is because our only goal is your satisfaction. ",
    },
    {
      question: "How much do you charge for your logo design?",
      answer:
        "Our logo design costs depend on your needs, the complexity of your project, and the additional services you are likely to take up. After knowing about your project, we also offer custom quotes for your specific needs. ",
    },
    {
      question: "Do you provide logo trademark service?",
      answer:
        "As the best brand building agency in Pune, India, we can assist you with your logo trademark. We can help you collaborate with a trademark attorney to ensure you acquire your logo under intellectual property law.",
    },
    {
      question: "What services do you offer in logo design?",
      answer:
        "Besides logo design services, we offer packaging, brand identity, web development, catalogue, website, company profiling, and display box design. We provide end-to-end services to help brands like yours reach the next level! ",
    }
  ];

  let para1 = "Being a top logo designing company in Pune, we advise you to choose your logo correctly because there are different logo styles. Whether the logos are in combination marks or words, letters, abstract signs, emblems, three-dimensional logos, animated logos, or dynamic logos, it’s all based on the approach you want to take to communicate your brand’s philosophy, personality and culture. Each logo style has meaning; we ensure you pick the right one since it represents your brand. For example, the wordmark logo is perfect if you have a short brand name and desire more brand visibility. Our expert logo design services in Pune ensure your brand gets visibility in overcrowded markets.";

 let para2 = "The choice of colour is a significant consideration in logo design. When it comes to a logo colour, it signifies your brand’s character and creates moods. They also form a key part of brand image. Remember Cadbury’s purple or Marvel’s red colour? Our logo design services in Pune specialize in selecting the right colour for your brand. We ensure that our creative logo designers in Pune choose the colour palette that resonates with your target market and conveys your unique selling proposition (USP).";

 let para3 = "Typography is one of the important aspects of your logo that greatly expresses your brand’s message. Your business logo design’s typography should depict the mood you want to connect with. For example, script fonts convey exclusivity and elaboration, and modern fonts handle bold messages better. To get the desired balance in logo design, we pay close attention to the typography used in your logo. It can be as simple as Disney’s font or as classy as Zara’s and may contribute to your brand recall.";

 let para4 = "Presumably, shapes are quite important regarding how consumers perceive your brand. Being the best logo design company in Pune, we mix the right shape with typography, colours and images to make the logo more meaningful. As shapes have deep psychological aspects, we design memorable and great logos. Shape has a subconsciously embedded message, and we apply this knowledge as the foundation for creating your logo.";

 let para5 = "More often than not, logo style, colour, typography, and shape are distinctive aspects overshadowed by the layout. Again, the layout defines how your logo looks as it is being placed on the designing platform.  For instance, Ikea’s yellow or McDonald’s red background signifies a logo layout. We are a reputed logo design company in Pune, so design your business logo layout to make the logo noticeable without much effort.";

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "logo-designing-company-in-pune"}`}
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
                <img
                  // src="https://dndesigns.co.in/uploads/videos/Nature-balance.webp"

                  src={imageUrl + "3gweudjgwer.webp"}
                  className="img-fluid"
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
                <img src={imageUrl + "jhewjrhjbf.webp"} className="img-fluid" />
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
                <img src={imageUrl + "Rosnax.webp"} className="img-fluid" />
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
                <img src={imageUrl + "tftyfhgchg.webp"} className="img-fluid" />
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
                <img
                  src={imageUrl + "bake-o-Tech.webp"}
                  className="img-fluid"
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
                <img
                  src={imageUrl + "erhfLuxmi-cars.webp"}
                  className="img-fluid"
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
                <img
                  src={imageUrl + "deeproot-logo.webp"}
                  className="img-fluid"
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
             The Importance of 
  <span className="every-pr"> Your Logo Design</span>
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
                  <h3>Powerful First Impression</h3>
                  <p>
                    Your business logo often makes a first impression on people. A creatively designed logo can compel your customers and
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Powerful First Impression</h3>
                  <p>
                   Your business logo often makes a first impression on people. A creatively designed logo can compel your customers and make them want to know more about your brand.
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
                  <h3>Grabs Attention</h3>
                  <p>
                    Your logo can instantly grab people's attention and convey your brand values. Having a memorable logo design adds to 
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Grabs Attention</h3>
                  <p>
                   Your logo can instantly grab people's attention and convey your brand values. Having a memorable logo design adds to your advantage.
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
                  <h3>Forms Brand Identity</h3>
                  <p>
                   Your creative logo is important for your brand identity design. As your logo reflects your brand’s essence, it forms the
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Forms Brand Identity</h3>
                  <p>
                    Your creative logo is important for your brand identity design. As your logo reflects your brand’s essence, it forms the foundation of your brand identity.
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
                  <h3>Make You Stand Out</h3>
                  <p>
                   With so many competitors in the industry, our professional logo designers in Pune design logos to make you more recognizable
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Make You Stand Out</h3>
                  <p>
                  With so many competitors in the industry, our professional logo designers in Pune design logos to make you more recognizable and stronger.
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
               Monogram logos are ideal for brand names with many letters as these logos combine your image into a clean, easily recognizable shape. Sleek typography makes these logos memorable and intensive for corporate, fashion or luxury brands. As the top logo design company in Pune, we specialize in creating logos – an embodiment of your brand’s spirit.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-12 com-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "HBO logo.webp"}
                    alt="HBO logo"
                    className="img-fluid logo"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "IBM logo.webp"}
                    alt="IBM logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "Nasa logo.webp"}
                    alt="NASA logo"
                    className="img-fluid"
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
              When your brand name is the hero, a wordmark logo is a star. These logos are created using chosen typefaces, turning your brand’s name into artwork. With the help of the right selection of colours and fonts, we reveal the nature of your brand in the most vulnerable manner.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "visa logo.webp"}
                    alt="Visa logo"
                    className="img-fluid logo"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "coca logo.webp"}
                    alt="Coca-Cola logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "google logo.webp"}
                    alt="Google logo"
                    className="img-fluid"
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
                Picture this: a symbol that conveys your company’s message to the public; that’s what a pictorial logo does. Pictorial mark logos or icon-based logos are the logos that define the soul of your brand. These logos keep constructing a relationship with your audience and create a unique brand identity that is difficult to forget.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "apple logo.webp"}
                    alt="Apple logo"
                    className="img-fluid logo"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "twitter logo.webp"}
                    alt="X logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "pintrest logo.webp"}
                    alt="Pinterest logo"
                    className="img-fluid"
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
             Abstract logos develop the unique identity of your brand and the message by working with figures, usually symbolic or geometric. Unlike the purely figurative marks, these logos themselves do not represent a specific object but imply certain meanings at a deeper level. Being the best brand-building agency in Pune, we deal with abstract logos that can leave people in awe.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "addidas logo.webp"}
                    alt="adidas logo"
                    className="img-fluid logo"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "bp[ logo.webp"}
                    alt="BP logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "pepsi logo.webp"}
                    alt="Pepsi logo"
                    className="img-fluid"
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
              Are you thinking of making your brand lively? A mascot logo is what you need. Mascot logos incorporate illustrated characters that help to give your brand personality in a friendly manner. Whether it is a friendly face or a quirky figure, mascot logos can make your brand more memorable and likeable.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "kfc logo.webp"}
                    alt="KFC logo"
                    className="img-fluid logo"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "pringles.webp"}
                    alt="Pringles logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "amul logo.webp"}
                    alt="Amul logo"
                    className="img-fluid"
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
                A combination mark is the fusion of image and text. It pairs abstract symbols with wordmarks that give your brand the flexibility to be displayed in multiple ways. These are often designed side by side or on top of each other and share your brand story through both visuals and words, adding to your versatility.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "doritos.webp"}
                    alt="Doritos logo"
                    className="img-fluid logo"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "burger king logo.webp"}
                    alt="Burger King logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "lacoster logo.webp"}
                    alt="Lacoste logo"
                    className="img-fluid"
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
              Emblem logos are the essence of tradition and timelessness. You may think of these as a combination of heritage, professionalism and authority. Emblem logos are perfect for government organizations or schools to remain timeless forever.
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 logo-list">
              <div className="row logo-brand-row">
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "harley logo.webp"}
                    alt="Harley-Davidson logo"
                    className="img-fluid logo"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "vi ri logo.webp"}
                    alt="Harvard logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-lg-4 col-md-4">
                  <img
                    src={imageUrl + "starbucks logo.webp"}
                    alt="Starbucks logo"
                    className="img-fluid"
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
              <img
                src={imageUrl + "nectarpure graph.webp"}
                alt="Nectarpure"
                className="img-fluid logo-design-img"
              />

              <img
                src={imageUrl + "imgi_36_nec.webp"}
                alt="Slide Overlay"
                className="img-fluid logo-overlay-img"
              />
            </div>

            <div className="col-lg-4 col-md-5 mb-sm-4 image-stack">
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src={imageUrl + "wordmark.webp"}
                    alt=""
                    className="img-fluid logo-design-img2"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src={imageUrl + "2b3ewebdjh.webp"}
                    alt=""
                    className="img-fluid logo-design-img2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoDesigningTab para1={para1} para2={para2} para3={para3} para4={para4} para5={para5}/>

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
