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
    seo = await getPageById("logo-designing-company-in-noida", null, false);
  } catch (error) {
    return {
      title: "Logo Designing Company In Noida",
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
    pageData = await getPageById("logo-designing-company-in-noida", null, true);
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
  const heading = "Custom Logo Designs";
  const subHeading = "Logo Designs That Are Eye-Catchy And Memorable";
  const para =
    " Your logo is your brand’s identity, and creating an identity that puts forth your brand story can take time and effort. Logo designing is like putting the puzzle pieces together, testing your creativity and patience and demanding a well-thought-out strategy. But who needs these when you have DN Designs? We are the leading logo designing agency in Noida, India, known for creating logos that speak your brand story at a glance. So, what about leaving a lasting impression with your logo?";

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "We are a team of highly creative designers and strategists who work to create something special for your brand. Our logo design services, in particular, give your brand a face that is recognisable and highly popular. Still wondering why you should choose us? A premier logo design company in India, we have the experience, confidence and expertise to create a compelling brand identity for you. So, let’s meet and discuss more over a cup of coffee.";

  // faqs content
  const leftFaqs = [
    {
      question: "How is DN Designs the best logo designing company in Noida?",
      answer:
        "Being a logo designing company in Noida with over eight years of experience working in the design industry, we are known to be the best among our clients. We make a lasting first impression on the audience while telling your brand story to your audience.",
    },
    {
      question: "How is your logo better?",
      answer:
        "Our experience and expertise in the industry have enabled us to create unique logo designs that go through a long stage of planning. Our team of logo designers in Noida ensures your logo aligns with your brand and makes you stand out.",
    },
    {
      question: "Would your logo be so good enough to get global reach?",
      answer:
        "Our experience in the industry makes us the best creative agency in Noida. Our professional design team develops easily recognizable and aesthetically pleasing logos for the international market. Global clients have appreciated our premium logo designs.",
    },
    {
      question: "What's the process of creating a logo design?",
      answer:
        "As the best logo design firm in Noida, we start by understanding your brand and doing market research. We discuss with our expert graphic designers how to make multiple logo variations. After getting your valuable feedback, we will finalize and hand you your logo design! ",
    },
    {
      question: "What details do you need to start the logo design process?",
      answer:
        "To start the logo design process, we need details, including your target audience, competitor, and any specific inspiration or idea you may have for the logo. Such detail helps us to create the best logos for you.",
    },
    {
      question: "What if I want to redesign my existing logo?",
      answer:
        "Offering logo design in Noida, we can surely redesign your current logo to ensure it matches your brand identity and value. The only concern we have is to keep your branding in check. ",
    },
  ];

  const rightFaqs = [
    {
      question: "How long does it take you to create a logo design?",
      answer:
        "The average duration for logo design is usually 7 to 8 days. This can also differ based on the extent of the revisions that may be required in line with the project’s complexity. Our professional logo designers ensure you get the designs at the right time.",
    },
    {
      question: "How many logo design revisions could you offer me?",
      answer:
        "Our packages include free unlimited revisions to all our logo design services. We work on your logo for as long as you are not fully satisfied. ",
    },
    {
      question: "In what formats will I get logos?",
      answer:
        "You will receive the high-resolution logo in raster (JPEG, PNG) and vector (AI, EPS) format. This will allow you to use them on different platforms. ",
    },
    {
      question: "How much does your logo design cost?",
      answer:
        "The cost of our logo design depends on your project. Please get in touch with us for more details. ",
    },
    {
      question: "Can you help me with the logo trademark?",
      answer:
        "As the best brand building agency in Noida, we can help by procuring a trademark attorney’s services for the logo’s trademark process. We can thoroughly guide you with your logo trademark and offer complete support.",
    },
    {
      question: "What services do you provide other than logo designing?",
      answer:
        "Apart from logo designing services, we offer packaging, catalogue, web development, website, brand identity, display box designing, and company profiling. We provide complete branding and designing services to help you achieve success! ",
    },
  ];

  let para1 =
    "DN Designs, the best logo designing company in Noida, creates logos in styles like combination marks, wordmarks, letter marks, abstract designs, emblems, 3D, animated and dynamic. Your logo style should depend thoroughly on your brand’s personality, philosophy and culture. Our team brainstorms what style would align with your brand.";

  let para2 =
    "Every colour speaks uniquely and differently to people’s moods and emotions. Our expert logo designing services focus on choosing the right colour depending on what you want people to think of your brand. Our creative logo designers in Noida choose your logo colour after thorough contemplation.";

  let para3 =
    "The typography of your logo design speaks a specific tone and communicates your brand message. As a crucial element of your logo design, we carefully choose the right typography to ensure it makes you stand out.";

  let para4 =
    "Coupled with the right choice of typography, images and colours, shapes add a sustainable meaning to your logo designs. As a top logo design company in Noida, India, we understand the hidden subconscious meaning behind every shape and set the proper foundation for your logo designs.";

  let para5 =
    "The most underrated element of logo design is the layout, which, in short, is the background of your design. Based on if you have a slogan or symbol and your company’s name, we craft the best business logo design for you.";

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "logo-designing-company-in-noida"}`}
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
              But Why Do You <span className="every-pr"> Even Need A Logo</span>
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
                    The power of a logo is that people can pick you in a single
                    glance in a crowded market, organically differentiating
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Powerful First Impression</h3>
                  <p>
                    The power of a logo is that people can pick you in a single
                    glance in a crowded market, organically differentiating you
                    and making them know what you do without them having to give
                    it much thought.
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
                    Your logo can grab your audience’s attention and communicate
                    your brand‘s message in seconds. If your logo is memorable
                    and
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Grabs Attention</h3>
                  <p>
                    Your logo can grab your audience’s attention and communicate
                    your brand‘s message in seconds. If your logo is memorable
                    and eye-catching, it is a brownie point for your brand.
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
                    Your logo design is the foundation of your brand. It's not
                    just a visual but an element that tells your brand story and
                    defines
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Forms Brand Identity</h3>
                  <p>
                    Your logo design is the foundation of your brand. It's not
                    just a visual but an element that tells your brand story and
                    defines people's thoughts.
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
                    Everyone wants to stand out from the competition, right? A
                    logo can help you do that. Our team of expert logo designers
                    in Noida
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Make You Stand Out</h3>
                  <p>
                    Everyone wants to stand out from the competition, right? A
                    logo can help you do that. Our team of expert logo designers
                    in Noida can make your brand instantly recognizable with
                    good logos.
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
                Made from a brand’s initial, monogram logos are best for brands
                with a longer name or those who want to make their brand
                memorable. DN Designs, a creative logo company in Noida, is
                confident that monogram logos are best for luxury, fashion and
                corporate brands.
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
                Designed entirely from the brand’s name, wordmark logos are made
                in a custom typeface that speaks to a brand’s unique identity.
                These allow you to reflect your brand’s essence through the
                right typography, colour palette and style to better resonate
                with the audience.
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
                Also known as graphic or icon-based logos, pictorial marks
                symbolize a brand’s essence. These logos stand alone, enabling
                spontaneous recognition and connection with your audience. They
                are perfect for brands that wish to establish a symbolic bond
                with their customers.
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
                Abstract logos use geometric shapes to design a
                non-representational image of the brand that carries your values
                and communicates your message. Being the best brand-building
                agency in Noida, we create abstract logos that convey your
                concepts using suitable shapes.
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
                Among all types of logos, mascot logos are playful and have
                illustrated characters that represent your brand. These logos
                make the brand more approachable and create a resonating image.
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
                Combination mark logos have both a wordmark and a pictorial
                mark. The pictures and text in this logo are placed side by side
                or designed at the top of each other. Combination marks reflect
                the complete representation of a brand identity.
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
                Emblem logos are a fusion of a symbol and an icon. These have a
                conventional appearance and reflect authority and
                professionalism. Emblem logos have a classic style that gives a
                brand a timeless look.
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
