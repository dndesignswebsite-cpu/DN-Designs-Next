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
    seo = await getPageById("logo-designing", null, false);
  } catch (error) {
    return {
      title: "Logo Designing",
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
    pageData = await getPageById("logo-designing", null, true);
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
  const heading = "Unique Logo Designs";
  const subHeading = "Logo Designs That Are Professional And Creative";
  const para =
    " Your logo represents your brand and tells your brand story. Creating such a logo design demands both time and proper strategy. But you don’t need any of these because DN Designs is here to help you. Being a leading logo design agency in Delhi, NCR, India, we create logos that reflect the essence of your brand in a glimpse while making a lasting impression!";

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "We are a team of highly creative designers and strategists who work to create something special for your brand. Our logo design services, in particular, give your brand a face that is recognisable and highly popular. Still wondering why you should choose us? A premier logo design company in India, we have the experience, confidence and expertise to create a compelling brand identity for you. So, let’s meet and discuss more over a cup of coffee.";

  // faqs content
  const leftFaqs = [
    {
      question:
        "What makes DN Designs the best logo design company in Delhi NCR?",
      answer:
        "With over eight years of experience in logo design, we’re popular among our clients as the best logo designing company in Delhi NCR. Our professional logo design makes a lasting impact on people while sharing your brand story.",
    },
    {
      question: "Why should I choose you for my logo design?",
      answer:
        "Our business logo designs are uniquely made and go through a complete planning process. Our team of logo designers in Delhi NCR make sure your logo matches your brand while making you stand out.",
    },
    {
      question: "How do you make a logo design?",
      answer:
        "Being the best logo design firm in Delhi NCR, we start with understanding your brand and performing market research. We discuss with our graphic designers how to create sketches for you. After your review, we will finalize and hand you your logo design! ",
    },
    {
      question: "What information do you need me to start the logo design?",
      answer:
        "First of all, we must know more about your brand, competitors, target audience, style, and if you have any preferences or ideas you may have. Such details assist us in developing what we call the road map for the logo designing process. ",
    },
    {
      question: "How long is your logo design process?",
      answer:
        "Usually, designing a logo takes around 7-8 days. But that, too, depends on your needs as we begin your logo design as soon as we know your wants and expectations. Our professional logo designers make sure to share your design on time.",
    },
    {
      question:
        "Can you redesign my logo?",
      answer:
        "We offer logo design in Delhi NCR and can redesign your logo to make sure it matches your brand’s core values. While designing a logo from scratch, we redesign the logo as well. ",
    },
  ];

  const rightFaqs = [
    {
      question: "In what formats do you share logos?",
      answer:
        "We share logos in raster formats including, JPEGs, PNGs and vector formats including, AIs, and EPS files if required. We do this to help you place your logo anywhere you want it to be.",
    },
    {
      question: "Would your logo be so good to get global reach?",
      answer:
        "As an experienced creative logo design agency in Delhi NCR, we have many clients worldwide for our logo design services in Delhi. Our clients love our timeless logo designs and are left in ‘awe.’",
    },
    {
      question: "I also need my logo trademark. Can you help me?",
      answer:
        "Indeed, as the most popular brand building agency in Delhi NCR, we can assist you with your logo trademark. We can assist you in involving a trademark attorney to get your logo under the regime of intellectual property.",
    },
    {
      question: "How many revisions do you provide to the logo design that I need from you?",
      answer:
        "You don’t need to worry about your logo designs; we offer unlimited revisions. Our ultimate goal and priority is your satisfaction.",
    },
    {
      question: "How much does your logo cost?",
      answer:
        "As for the logo design cost, it depends on your requirements and the overall specifics of the project as well as the shift toward other services you would like to order. After knowing about your project, we also offer custom quotes for your specific needs.",
    },
    {
      question: "Apart from logo designing, which services do you provide?",
      answer:
        "In addition to logo designing services, we also provide many more services including catalogue designing, brand identity designing, web development, packaging designing, display box designing, website designing and company profiling services. We offer you end-to-end services to aid you better! ",
    }
  ];

  let para1 = "We at DN Designs, the best logo design company in Delhi NCR, create logos in styles like wordmarks, letter marks, combination marks, abstract designs, dynamic, emblems, 3D, and animated. Your logo style should thoroughly reflect your brand’s philosophy, personality, and culture.";

 let para2 = "Colour speaks differently and uniquely to people’s emotions and moods. Our premium logo design services in Delhi emphasise choosing the suitable colour depending on how you want people to perceive your brand. Our premium logo designers in Delhi NCR choose your logo colour after thorough planning.";

 let para3 = "The typography of your logo design highlights a certain tone while conveying your brand message. As a crucial element of your logo design, we carefully choose the right typography to ensure it makes you stand out.";

 let para4 = "With the right choice of images, typography, and colours, shapes add a deep meaning to your logo designs. As a top logo design company in Delhi, NCR, India, we understand the hidden meaning behind every shape and place the right foundation for your logo designs.";

 let para5 = "The underdog of logo design is the layout, which means the background of your design. If you have a slogan or symbol and your brand’s name, we make the best business logo design for you.";

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "logo-designing"}`}
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
              But Why Does Your <span className="every-pr"> Brand’s Logo Design Even Matter</span>
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
                    The power of a logo lies in making a strong first impression organically differentiating you from the others
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Powerful First Impression</h3>
                  <p>
                   The power of a logo lies in making a strong first impression organically differentiating you from the others. A good logo lets your target audience know what you do without emphasising much on it.
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
                    Your logo can quickly grab viewers' attention and perfectly convey your brand values. By making your logo memorable, you can add 
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Grabs Attention</h3>
                  <p>
                   Your logo can quickly grab viewers' attention and perfectly convey your brand values. By making your logo memorable, you can add to your advantage.
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
                    Your creative logo is essential to your brand identity design. As your logo tells your brand story, it forms the basis of your brand identity.
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Forms Brand Identity</h3>
                  <p>
                    Your creative logo is essential to your brand identity design. As your logo tells your brand story, it forms the basis of your brand identity.
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
                   With many competitors in the market, our professional logo designers in Delhi NCR create logos to make you more recognizable 
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Make You Stand Out</h3>
                  <p>
                    With many competitors in the market, our professional logo designers in Delhi NCR create logos to make you more recognizable and stronger.
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
               Monogram logos are ideal for brands with a longer name or even those who want to make their brand memorable. DN Designs, a creative logo design company in Delhi NCR, believes that monogram logos are best for fashion, luxury, and corporate brands.
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
                Designed completely from the brand’s name, wordmark logos are designed in a custom typeface that reflects a brand’s unique identity. These allow you to highlight your brand’s essence through the right colour palette, typography, and style to resonate with the target audience.
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
                Known as graphic or icon-based logos, pictorial marks logos symbolize a brand’s essence. These logos enable spontaneous recognition and resonance with the people. They are ideal for brands that wish to establish a symbolic bond with their target customers.
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
                Abstract logos use geometric shapes to create a non-representational image of the brand to communicate your message. As the best brand-building agency in Delhi NCR, we create abstract logo marks that convey your concepts using the right shapes.
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
                Among all types of logos, mascot logos are the most playful and have illustrated characters that describe your brand. These logos make your brand more approachable and create a resonating image.
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
                Combination marks have a wordmark and a pictorial mark. The pictures and text in this type of logo are placed on top of each other or side by side. Combination marks outline the complete representation of a brand identity.
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
               Emblem logos are a combination of a symbol and an icon. These have a traditional appearance and show authority and professionalism. Emblem logos have a classic style that makes a brand image timeless.
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

              {/* <img
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
