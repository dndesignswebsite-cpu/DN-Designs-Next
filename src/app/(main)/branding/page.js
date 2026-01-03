import React from "react";
import "./branding.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import OurConstant from "@/Components/OurConstant/OurConstant";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";
import HorizontalScroll from "@/Components/HorizontalScroll/HorizontalScroll";
import { notFound } from "next/navigation";


// meta data 
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
//meta end here



function page() {
// const response = await getPageData();
  // const pageData = response?.data;

  // if (!pageData) {
  //   notFound();
  // }


  // hero section content
  const heading ="Where Brands Are Born"
  const subHeading ="A Creative Branding Agency"
  const para ="Branding shapes the future of your business. It determines whether you will craft a legacy or simply fade into oblivion like many others. But what is branding and why is it so crucial? Want to know? Take this exciting branding journey with us – learn about branding, explore our portfolio, & go behind the scenes of our branding process. If you still have queries, check out our FAQs section."
  
  
// form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee"
  const FormPara = "A leading branding agency in India, we have the expertise and experience to turn your product into a successful brand. We take up every project as a new challenge and commit ourselves to creating something unique and valuable. Our goal is to actualise your vision and mission and in the process make ourselves happy too. So, shall we meet and discuss your project over a steaming hot cup of coffee?"
  const pageName = "branding";

  // faqs content
   const leftFaqs = [
    {
      question: "What is branding and why is it Important?",
      answer:
        "Branding involves carrying out a set of activities around the product. Designing a visual identity, crafting messages & values, establishing a voice and creating a unique positioning in the market, all form part of the process. The purpose is to leave a strong impression on the customer by creating a brand image that is recognisable, cohesive and unforgettable. When you turn your product into a brand, you have higher chances of becoming a successful business.",
    },
    {
      question: "What are the important elements of a successful brand?",
      answer:
        "Several key elements have to work in perfect unison to create a successful brand. These include an unforgettable name and logo, a consistent visual identity (colour & typography), a captivating brand story & message, a clear vision and mission statement, a unique voice & positioning, strong values, and an overall seamless brand experience.",
    },
    {
      question: "Why do I need a brand consultation services company?",
      answer:
        "A brand consultation company can help you transform your simple product into a successful brand that customers remember and buy. It has a team of skilled and experienced strategists, designers and marketers who can combine their expertise to create a winning brand for you.",
    },
    {
      question: "What does a branding agency do?",
      answer:
        "A creative branding agency takes care of your entire branding work, right from conducting market and competitive research to planning your brand strategy, designing your visual identity (logo, label and packaging design), shaping your brand story and messaging, etc. It can also build responsive websites for you.",
    },
    {
      question: "How do you choose a branding agency?",
      answer:
        "To decide whether a particular agency is suitable for your business, you should check its work experience across business verticals as well as global and local markets. A knowledge of the latest design and marketing trends in the industry is essential too. Also, the brand design agency must understand your product and vision for the future.",
    },
  ];

  const rightFaqs = [
    {
      question: "What makes your branding company unique?",
      answer:
        "We conduct detailed discussions and thorough research before beginning the actual work. That is one of the reasons why we have consistently turned products into unique and successful brands. Also, customer satisfaction is vital for us. We work to make our clients happy and can proudly say that we have always earned immense appreciation from them.",
    },
    {
      question: "How long is the branding process?",
      answer:
        "Every project is different, so specifying an exact timeline is difficult; however, to give you an idea, typically it takes around four weeks to complete an entire branding project.",
    },
    {
      question: "What kinds of branding services do you offer?",
      answer:
        "We offer a complete range of branding services, right from the consultation phase to the final launch stage, and every other service that comes in between. These include audience and market research; crafting brand strategy; designing a strikingly appealing logo, label and package; creating engaging interfaces and robust functional websites; and shaping a comprehensive communication strategy. We also provide environment design and professional photography services.",
    },
    {
      question: "What are brand guidelines? Do you provide one and what does it include?",
      answer:
        "An important aspect of branding is consistency. A brand must appear the same and convey the same messaging and emotion across platforms. Brand guidelines help it to do exactly that. It lists out rules that guide businesses in presenting their brand consistently across all communication channels. We do provide brand guidelines. It includes details about the brand identity and presents its logo. Also included are details about the brand’s colour palette, typography, tone & voice and image.",
    },
    {
      question: "What is the difference between branding and marketing?",
      answer:
        "Branding creates a unique identity and image of the product. It leaves a forever-lasting impression on the customers and builds their loyalty. Marketing promotes this brand with techniques like advertising and promotional campaigns. Its ultimate aim is to increase awareness, generate leads and eventually increase sales and revenue. As one of the best branding and marketing agencies in Delhi NCR, DN Designs provides both services to our customers.",
    },

  ];


  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* branding hero section */}
      <section>
        <PagesHero heading={heading} subHeading={subHeading} para={para}/>
      </section>


      
      

      {/* work portfolio */}
      <section className="portfolio">
        <div className="container">
          <h2 className="text-center">
            Our<span className="every-pr"> Work Portfolio</span>
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
                      <h3>Enlite</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Enlite’s sparkling mineral water and prebiotic drink range, meant to refresh and rejuvenate customers, required a captivating brand identity, including can and logo design, to attract a young audience. We offered them just that.
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
                      <h3>iOrganic</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    For the organic dairy & food brand, iOrganic, we created a vibrant and engaging packaging design. Additionally, we provided professional photography services for their e-commerce sale and advertising purposes.
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
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    We delivered comprehensive services to the cocktail bombs brand Mr. Bomzy. This included creating their identity, crafting brand guidelines, designing the package, developing UI/UX design & website, and framing social media strategy.
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
                      <h3>Deeproot</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Deeproot, offering wholesome snacks, collaborated with our creative design agency to strengthen their brand presence in the market. Our range of services for them included identity design, packaging design, UI/UX design and website development.
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
                      <h3>Thames</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div>
                  </div>

                  <p>
                    Created an alluring packaging design for Thames dried
                    blueberries product to capture the attention of the
                    audience. To boost their online presence, we also designed
                    their UI/UX and provided website development solutions.
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
                      <h3>Smartyums</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Merchandising</h4>
                    </div>
                  </div>

                  <p>
                    Smartyums, with their crunchy protein bite products, wanted
                    a packaging design that focussed on, and attracted kids.
                    Expert designers at our agency created a playful and
                    visually appealing packaging design for them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Branding That Breaks Through desktop*/}
      <section className="branding-that-breaks">
      <div className="container text-center">
        <h2>Branding That<span className="every-pr"> Breaks Through</span></h2>
      </div>
      <HorizontalScroll/>
      </section>
      
{/* Branding That Breaks Through mobile*/}

      <section className="mobile-view-our-brand">
        <div className="container">
          <div className="row">
            <h2 className="our-brand-heading text-center">Our <span className="every-pr"> Breaks Through</span></h2>
            <div className="our-brand-mobile-all-div row">
              <div
                className="our-brand-mobile-div col-12 col-sm-12 col-md-6"
              >
                <div className="our-brand-mobile-div-clield">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                  className="img-fluid"
                />
                <div className="our-brand-mobile-div-content">
                  <h3 className="mobile-view-our-brand-h3">
                    Rithm’s Enlite
                  </h3>
                  <div className="our-brand-mobile-btn-up">
                    <h4 className="our-brand-mobile-btn">
                      Label Design
                    </h4>
                    <h4 className="our-brand-mobile-btn">
                      Packaging
                    </h4>
                  </div>
                  <div>
                    <h4
                      className="our-brand-mobile-btn our-brand-mobile-btn-bottom text-center"
                    >
                      Communication Design
                    </h4>
                  </div>
                  <p>
                    For Rithm’s Enlite, a brand with sparkling mineral water and
                    prebiotic drink range, we designed a thoughtful and
                    eye-catching brand identity, including can design, logo
                    design and character design. We created the character and
                    the overall brand design around the brand name to promote
                    the refreshing and calming properties of the product.
                  </p>
                </div>
              </div>
              </div>
              <div
                className="our-brand-mobile-div col-12 col-sm-12 col-md-6"
              >
                <div className="our-brand-mobile-div-clield">
                <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/GIF_1_1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="our-brand-mobile-div-content">
                  <h3 className="mobile-view-our-brand-h3">
                    Grin Care
                  </h3>
                  <div className="our-brand-mobile-btn-up">
                    <h4 className="our-brand-mobile-btn">
                      Label Design
                    </h4>
                    <h4 className="our-brand-mobile-btn">
                      Packaging
                    </h4>
                  </div>
                  <div>
                    <h4
                      className="our-brand-mobile-btn our-brand-mobile-btn-bottom text-center"
                    >
                      Communication Design
                    </h4>
                  </div>
                  <p>
                    Grincare aspired to establish itself in the highly competitive oral care market. As a brand marketing agency, we worked to build their identity and a strong digital presence. We crafted their identity, designed their UI/UX and developed their website to establish them as a business offering premium oral care solutions.
                  </p>
                </div>
              </div>
              </div>
              <div
                className="our-brand-mobile-div col-12 col-sm-12 col-md-6"
              >
                <div className="our-brand-mobile-div-clield">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                  className="img-fluid"
                />
                <div className="our-brand-mobile-div-content">
                  <h3 className="mobile-view-our-brand-h3">
                    Nature's Balance
                  </h3>
                  <div className="our-brand-mobile-btn-up">
                    <h4 className="our-brand-mobile-btn">
                      Brand Identity
                    </h4>
                    <h4 className="our-brand-mobile-btn">
                      Environment
                    </h4>
                  </div>
                  <div>
                    <h4
                      className="our-brand-mobile-btn our-brand-mobile-btn-bottom text-center"
                    >
                      Label Design
                    </h4>
                  </div>
                  <p>
                   An upscale health-focussed cafe, Nature’s Balance approached us with the purpose of building its brand presence. We worked to create their identity & label design. In addition, as a creative design agency, we also provided them with menu design, 3D Ad design, as well as environment design services.
                  </p>
                </div>
              </div>
              </div>
              <div
                className="our-brand-mobile-div col-12 col-sm-12 col-md-6"
              >
                <div className="our-brand-mobile-div-clield">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                  className="img-fluid"
                />
                <div className="our-brand-mobile-div-content">
                  <h3 className="mobile-view-our-brand-h3">
                   NECTARPURE
                  </h3>
                  <div className="our-brand-mobile-btn-up">
                    <h4 className="our-brand-mobile-btn">
                      Brand Identity
                    </h4>
                    <h4 className="our-brand-mobile-btn">
                      Label Design
                    </h4>
                  </div>
                  <div>
                    <h4
                      className="our-brand-mobile-btn our-brand-mobile-btn-bottom text-center"
                    >
                      UI/UX Design
                    </h4>
                  </div>
                  <p>
                    NECTARPURE, providing Whey protein and wellness products, wanted to establish itself as a premium lifestyle brand in the protein market. As a brand marketing agency, we created their identity, label design and 3D Ad to give a premium feel. In addition, we also designed and developed their UI/UX and complete website.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* branding identity */}
      <section className="branding-identity">
        <div className="container">
          {/* first row */}
          <div className="row brand-identity-div-row">
            <h2 className="text-center">
              <span className="every-pr">Branding </span> is VALUE
            </h2>

            <div className="col-12 col-md-12 col-lg-4 identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/2-3.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Identity</h3>
                  <p>
                    Let’s create an impactful brand identity for your business. Trust us, it’s important. It is how customers will recognise and connect with your product and distinguish it from others in the market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4  identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/3-3.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Voice</h3>
                  <p>
                    Understanding ‘what is brand voice’ is quite simple. It is your brand’s personality and the way it speaks with its target customers. Brand voice helps breathe life into your brand, and we help you find that voice.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4  identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/7-1.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Positioning</h3>
                  <p>
                    Why should customers prefer your product over your competitors? What makes you so special and different? That’s what positioning is all about. It creates a place for your product in the market and your target audience’s mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="row brand-identity-div-row">
            <div className="col-12 col-md-12 col-lg-4 identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/6-1.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Messaging</h3>
                  <p>
                    Let’s help you develop a compelling brand message. Why is that important? Because, as a business, you have certain core values and a USP which need to reach your target audience. It fosters connection and inspires trust.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4  identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/5-1.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Brand Value</h3>
                  <p>
                    Businesses have certain values and beliefs that form the basis of and direct their functioning. For instance, transparency and sustainability are good examples of a company’s values. What’s your brand value?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4  identity-main-div">
              <div className="identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/4-3.jpg"
                  className="img-fluid"
                />
                <div className="identity-div-content">
                  <h3>Rebranding</h3>
                  <p>
                    Brands that appealed once may appear outdated today. Branding should, therefore, adapt and evolve with changing times to suit current market conditions and consumer expectations. Rebranding is the solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our constant */}
      <OurConstant/>

      {/* marque */}
      <section className="marque-sec">
        <marquee className="noun-mar" direction="left" scrollamount="12">
          {" "}
          A Noun in Your Life, A Verb in Ours
        </marquee>
      </section>

      {/* Creating Your Brand desktop view */}
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Creating Your Brand Story,
            <span className="every-pr">
              <br />
              Your Way
            </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Brand Understanding</h2>
                  <p>
                   If anything has to stand the test of time, it needs to begin with a firm footing. In branding, this beginning is understanding the product/business. We sit down with you for a deep discussion to understand your product or service as well as your vision and mission. This helps us make a good start and prepares us for an exciting journey ahead.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Competitor Analysis</h2>
                  <p>
                    You are not alone in the market; there are several other products in the same category out there trying to build their presence. How do you craft your own little corner? Analysing competition is crucial, and this is what we, as a brand design company, do next. We conduct a thorough research of your competitors and understand your current position in the market to ensure that we have enough knowledge and data to take a step forward, creating your branding strategy.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Planning Your Brand</h2>
                  <p>
                    It’s now time to create your brand strategy. Every aspect of branding is carefully thought out and discussed with you - be it your brand personality, story, message, values, or even communication and website design. As a creative branding agency, we decide on these elements based on how we want the audience to perceive your brand.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Implementing the Strategy</h2>
                  <p>
                    Let’s turn words and ideas into action. We now sit down to do the actual work - naming your brand, designing your logo, creating your packaging design, crafting a tagline, composing your message, and much more. In addition, we design and develop your website too.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Feedback & Launch</h2>
                  <p>
                    The final stage in our branding journey, this is where we seek a review of our work. Based on your feedback, we make changes, and reseek your feedback. Once we receive a green light from you, we go ahead and launch your brand.
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
            Creating Your Brand Story,
            <span className="every-pr"> Your Way</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Understanding</h2>
                  <p>
                    If anything has to stand the test of time, it needs to begin with a firm footing. In branding, this beginning is understanding the product/business. We sit down with you for a deep discussion to understand your product or service as well as your vision and mission. This helps us make a good start and prepares us for an exciting journey ahead.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Competitor Analysis</h2>
                  <p>
                    You are not alone in the market; there are several other products in the same category out there trying to build their presence. How do you craft your own little corner? Analysing competition is crucial, and this is what we, as a brand design company, do next. We conduct a thorough research of your competitors and understand your current position in the market to ensure that we have enough knowledge and data to take a step forward, creating your branding strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Planning Your Brand</h2>
                  <p>
                   It’s now time to create your brand strategy. Every aspect of branding is carefully thought out and discussed with you - be it your brand personality, story, message, values, or even communication and website design. As a creative branding agency, we decide on these elements based on how we want the audience to perceive your brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Implementing the Strategy</h2>
                  <p>
                    Let’s turn words and ideas into action. We now sit down to do the actual work - naming your brand, designing your logo, creating your packaging design, crafting a tagline, composing your message, and much more. In addition, we design and develop your website too.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Feedback & Launch</h2>
                  <p>
                   The final stage in our branding journey, this is where we seek a review of our work. Based on your feedback, we make changes, and reseek your feedback. Once we receive a green light from you, we go ahead and launch your brand.
                  </p>
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
      <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName}/>
    </div>
  );
}

export default page;
