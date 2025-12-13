import React from "react";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import "./logo-designing.css";
import LogoDesigningTab from "@/Components/LogoDesingningTab/LogoDesigningTab";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";

// meta tags
export const metadata = {
  title: "Logo Designing | DN Designs",
  description: "We build brands that inspire confidence and drive profit",
  openGraph: {
    title: "Logo Designing | DN Designs",
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
    title: "Logo Designing | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"],
  },
};

function page() {
  const heading = "Logo Design Services";
  const subHeading = "Don’t Just Be Seen, Be Remembered";
  const para =
    "  Logos have strong recall value. A compelling and creative company logo can, therefore, make your business a brand that people will forever remember. As a premium brand identity design agency in India, we strive to achieve exactly that for you. Come along as we show you the types of logos we design and our work process. Explore our portfolio and read through the FAQs to find the answers you are looking for.";

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "We are a team of highly creative designers and strategists who work to create something special for your brand. Our logo design services, in particular, give your brand a face that is recognisable and highly popular. Still wondering why you should choose us? A premier logo design company in India, we have the experience, confidence and expertise to create a compelling brand identity for you. So, let’s meet and discuss more over a cup of coffee.";

  // faqs content
  const leftFaqs = [
    {
      question:
        "Why are there so many types of logos? How should I choose the best one for my business?",
      answer:
        "Businesses have their own distinct identity, values and vision. They want their logo to reflect all these. Moreover, they also want their logo to appeal to their target audience. The different types of logos help them do that. To decide which type of logo best suits your business, you must consider the various factors mentioned above. Alternatively, you can just get in touch with us and we will do the needful.",
    },
    {
      question: "What are logo variations and what are their different types?",
      answer:
        "Businesses need to use their company logo in different places -  official website, social media platforms, business cards, emails, reports, product packaging and letterhead. A single logo is not suitable for all due to space and layout restrictions. Therefore, businesses adapt the primary logo and use the variations in different places. These variations include a secondary logo (stacked or horizontal), submark logo, wordmark/lettermark logo, icon/brandmark design,  monochrome/one-colour logo and inverted/reversed logo.",
    },
    {
      question: "How do I design a good logo?",
      answer:
        "To design a logo, you must use the right mix of strategy, creativity and style. If you have these skill sets, you can certainly design a good logo yourself. However, we suggest that for a more professional design, you should collaborate with a creative logo design company in India. ",
    },
    {
      question: "What makes you the best logo designing company?",
      answer:
        "Noida-based DN Designs has been in the business for over 8 years and, therefore, has concrete experience in understanding what kind of logo will best suit a particular brand. We have created professional, creative, quirky and premium logo designs for a variety of businesses. Our logos reflect brand identity and values, and have an outstanding recall potential. Happy customers are what we want to achieve in the end. ",
    },
    {
      question: "What's your process of creating a logo design?",
      answer:
        "Our logo design process begins with researching your brand, industry and logo integration needs across physical and digital space. This is followed by brainstorming, where ideas and concepts are explored and sketched on paper. Further refinements are made once these design sketches are narrowed down and digitised. The final designs are sent for your approval. Once finalised, we deliver the premium logo design to you.",
    },
    {
      question:
        "What information do you need from me to start the logo design process?",
      answer:
        "You own the brand and you have a specific vision for it. We need to understand it to design the creative company logo you envisioned. To elaborate, we need details about your brand (name & industry), target audience & competitors, as well as any design preference/idea/inspiration you may have and want to share with us. ",
    },
    {
      question: "Will you redesign my existing logo?",
      answer:
        "Yes, we can redesign your existing logo depending on your current brand values, as well as market and audience preferences. We can also redesign your existing logo in a way that gives it a fresh look but retains your existing brand identity and values.",
    },
    {
      question: "How many revisions could I get for my logo design?",
      answer:
        "Our primary objective is to provide you with the best and premium logo design services. We work in pursuit of this goal, and therefore do not restrict ourselves to a particular number of revisions.",
    },
  ];

  const rightFaqs = [
    {
      question: "How long does it take you to create a logo?",
      answer:
        "Usually, it takes around a week for a premium logo design; however, depending on your project requirements and the number of revisions needed, it can take a little longer.",
    },
    {
      question: "In what formats do you provide logos?",
      answer:
        "We provide logos in multiple formats to ensure that you can use them wherever you need. These include raster files (JPEG, PNG), vector files (AI, EPS) and web-friendly formats.",
    },
    {
      question: "How much do your creative company logo design services cost?",
      answer:
        "The cost of our logo design services can differ based on your needs and the design complexities involved. The cost may also vary depending on other services that you might request.",
    },
    {
      question: "Do you specialise in creating logos for a specific industry?",
      answer:
        "As a creative design agency, we do not restrict ourselves to any particular vertical; rather, we work for different industries like tech, fashion, food, wellness, real estate, and more. We ensure to create a captivating logo design that reflects the brand identity, whichever industry it may be from.",
    },
    {
      question: "Would your logo be so appealing to get global reach?",
      answer:
        "Yes, we work with clients worldwide and therefore have experience in creating a creative company logo that appeals to the audience around the globe. Our clients have always loved the timeless and premium logos we have created for them.",
    },
    {
      question: "Can you help me with the logo trademark?",
      answer:
        "Yes, we assist you in obtaining a logo trademark.  We put you in touch with a trademark attorney, and through him/her, we ensure that your logo is obtained under intellectual property rights. ",
    },
    {
      question: "What services do you provide other than logo designing?",
      answer:
        "As a full-service branding and design agency, we offer a comprehensive suite of services including brand identity design, packaging design, catalogue design, web design & development, and company profiling. In addition, we can also provide digital marketing, brand video shoots, product photography and animation services.",
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
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                  className="img-fluid"
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                  className="img-fluid"
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                  className="img-fluid"
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
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
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                  className="img-fluid"
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
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
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
              But Why Your<span className="every-pr"> Logo Even Matters?</span>
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
                  <h3>Leaves A Powerful First Impression</h3>
                  <p>
                    A logo catches attention instantly, and when it does, it
                    creates a powerful first impression.
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Leaves A Powerful First Impression</h3>
                  <p>
                    A logo catches attention instantly, and when it does, it
                    creates a powerful first impression. Let’s elucidate a
                    little. With a declining attention span, businesses have
                    just a few seconds to command attention. An expertly crafted
                    logo can draw customers, spark curiosity and encourage
                    engagement.
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
                  <h3>Forms The Core of Brand Identity</h3>
                  <p>
                    Brand identity includes several elements but the logo forms
                    its foundation. It is what people identify & associate with
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Forms The Core of Brand Identity</h3>
                  <p>
                    Brand identity includes several elements but the logo forms
                    its foundation. It is what people identify & associate with
                    & also what they remember in the long term. Think of any big
                    brand - Ford, IBM, Airtel and Reliance? You most definitely
                    remember what their logo looks like. Don’t you?
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
                  <h3>Builds Differentiation & Brand Loyalty</h3>
                  <p>
                    How do consumers differentiate between brands and trust one?
                    Brand values, beliefs and USP play
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Builds Differentiation & Brand Loyalty</h3>
                  <p>
                    How do consumers differentiate between brands and trust one?
                    Brand values, beliefs and USP play a major role here and
                    your logo represents all these. Take the same brand examples
                    again. When you see their familiar logo, you trust them and
                    are therefore willing to engage with them again.
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
                  <h3>Fulfils Audience Expectations</h3>
                  <p>
                    As a brand, you will communicate with your audience
                    variously - emails, website, social media, brochures, etc.
                  </p>
                </div>
                <div className="but-why-back-content">
                  <h3>Fulfils Audience Expectations</h3>
                  <p>
                    As a brand, you will communicate with your audience
                    variously - emails, website, social media, brochures, etc.
                    Whatever the means may be, the consistent part is the
                    inclusion of the logo in all. It is this brand identity that
                    customers expect. It establishes the authenticity of your
                    communication.
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
            From Research to Design
            <span className="every-pr">
              <br />
              How We Create Your Logo
            </span>
          </h2>
          <ul id="cards-create">
            <li class="card-create" id="card1-create">
              <div class="card-body-create row">
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

            <li class="card-create" id="card2-create">
              <div class="card-body-create row">
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

            <li class="card-create" id="card3-create">
              <div class="card-body-create row">
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

            <li class="card-create" id="card4-create">
              <div class="card-body-create row">
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

            <li class="card-create" id="card5-create">
              <div class="card-body-create row">
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

            <li class="card-create" id="card6-create">
              <div class="card-body-create row">
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

            <li class="card-create" id="card7-create">
              <div class="card-body-create row">
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
        <div class="container logo-brand-parent">
          <h2 class="text-center brand-logo-heading">
            Types of Brand Identity{" "}
            <span className="red-headg">Logos We Design</span>
          </h2>
          <div class="row logo-brand1">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="logo-brand-title">Monogram</h2>
              <h6 class="logo-type">Lettermark</h6>
              <p class="logo-brand-paragraph">
                This combines the initial letters of the brand name to create an
                abbreviated version. Think of ESPN (Entertainment and Sports
                Programming Network) and P&G (Procter & Gamble). Companies with
                longer names prefer this type of design to make their logo
                compact and memorable.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-12 com-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/16.png"
                    alt="HBO logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/13.png"
                    alt="IBM logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/8.png"
                    alt="NASA logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand2">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Wordmarks</h2>
              <h6 class="logo-type">Logotype</h6>
              <p class="logo-brand-paragraph">
                This comprises solely the brand name. Examples include Google,
                L’oreal and ebay. Brands with concise names and a strong persona
                pick this type of logo. Custom typography and styling that
                reflect brand identity make these logos memorable.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/22.png"
                    alt="Visa logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/18.png"
                    alt="Coca-Cola logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/4.png"
                    alt="Google logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand3">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Pictorial</h2>
              <h6 class="logo-type">Brandmark/Symbol</h6>
              <p class="logo-brand-paragraph">
                As per its name, this type of logo draws on graphics, images,
                icons and symbols from the real world. The best example of this
                is Apple. This type of logo is best when brands can find
                pictures or symbols that appropriately present their business,
                whether literally or figuratively. This is very easy to
                recognise.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/2-1.png"
                    alt="Apple logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/9.png"
                    alt="X logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/14.png"
                    alt="Pinterest logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand4">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Abstract</h2>
              <h6 class="logo-type">Represent Your Brand</h6>
              <p class="logo-brand-paragraph">
                In contrast to pictorial logos that use images from the real
                world, abstract logos use geometric shapes and colours to convey
                the right message and emotion. Few brands that use this type of
                logo include Mastercard, Pepsi and Mitsubishi. Brands that want
                a timeless logo that breaks cultural and language barriers (and
                thus has a global appeal) opt for an abstract logo.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/15.png"
                    alt="adidas logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/11.png"
                    alt="BP logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/7.png"
                    alt="Pepsi logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand5">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Mascots</h2>
              <h6 class="logo-type">Characters</h6>
              <p class="logo-brand-paragraph">
                Brands that want to evoke a more fun and friendly emotion opt
                for this type of logo. Remember the logos of KFC and Amul? This
                type of logo has an illustrated character that represents the
                brand and fosters a strong emotional connection with the
                customers.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/5.png"
                    alt="KFC logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/19.png"
                    alt="Pringles logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/1-1.png"
                    alt="Amul logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand6">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Combination</h2>
              <h6 class="logo-type">Text and Pictures</h6>
              <p class="logo-brand-paragraph">
                This logo combines text with symbol, image, mascot and shape to
                create a unique identity for the brand. It is adaptable, giving
                brands a scope to split the main logo and carve out variations
                from it. Few examples of this type of logos include Puma, Jaguar
                and Burger King.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/3.png"
                    alt="Doritos logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/12.png"
                    alt="Burger King logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/17.png"
                    alt="Lacoste logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand7">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">The Emblem</h2>
              <h6 class="logo-type">Badge</h6>
              <p class="logo-brand-paragraph">
                Businesses that wish to convey an air of legacy, prestige and
                tradition usually go for an emblem logo. These logos include a
                shape that encompasses text, image or symbol. Some of the best
                examples of this type of logos are Harley-Davidson, Starbucks,
                Harvard University and Oxford University.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/logo.png"
                    alt="Harley-Davidson logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/6.png"
                    alt="Harvard logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/21.png"
                    alt="Starbucks logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Wow-Making */}
      <section>
        <div class="container logo-design-parent ">
          <div className="row text-center">
            <h2 class="text-center  logo-design-heading">
              The Wow-Making Elements Of
              <span className="red-headg">
                <br /> Professional Logo Design
              </span>
            </h2>
          </div>

          <div class="row logo-design-section">
            <div class="col-lg-8 col-md-7 position-relative logo-hover-wrapper">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/04/1-3.jpg"
                alt="Nectarpure"
                class="img-fluid logo-design-img"
              />

              <img
                src="https://dndesigns.co.in/wp-content/uploads/2019/02/nec.jpg"
                alt="Slide Overlay"
                class="img-fluid logo-overlay-img"
              />
            </div>

            <div class="col-lg-4 col-md-5 mb-sm-4 image-stack">
              <div class="row">
                <div class="col-lg-12">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/06/wordmark-2048x1078.png"
                    alt=""
                    class="img-fluid logo-design-img2"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/06/nectarpure-1-2048x1078.jpg"
                    alt=""
                    class="img-fluid logo-design-img2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoDesigningTab />

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
      <Form FormHead={FormHead} FormPara={FormPara} pageName={metadata.title} />
    </div>
  );
}

export default page;
