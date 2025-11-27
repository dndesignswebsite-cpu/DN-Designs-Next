import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import React from "react";
import "./catalogue-designing.css";
import ECataloguesBtn from "@/Components/E-Catalogues-Btn/ECataloguesBtn";
import CreativeBrochureDesign from "@/Components/CreativeBrochureDesign/CreativeBrochureDesign";
import Form from "@/Components/Form/Form";
import Faqs from "@/Components/Faqs/Faqs";
import PagesHero from "@/Components/PagesHero/PagesHero";
import CatalougePageFlip from "@/Components/LightBox/LightBox";
import CatalougeBook from "@/Components/CatalougeBook/CatalougeBook";

// meta tags
export const metadata = {
  title: "Catalouge Designing | DN Designs",
  description: "We build brands that inspire confidence and drive profit",
  openGraph: {
    title: "Catalouge Designing | DN Designs",
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
    title: "Catalouge Designing | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"],
  },
};

function page() {
  const heading = "Catalogue Design Agency";
  const subHeading =
    "Let’s Create Designs That Spark Interest & Drive Conversion";
  const para =
    "Catalogues are essential marketing collateral that are meant to raise brand recognition, engagement and trust as well as sales and revenue. As a brochure and catalogue design agency, we strive to create professional, pleasing and engrossing catalogues for your business. Do you want us to elaborate on what makes a catalogue or brochure effective and how exactly we create one for you? Stay with us as we cover everything for you. Also, browse through our FAQs to gain further clarity on the topic and our catalogue design services.";

  const leftFaqs = [
    {
      question: "Are a brochure and a catalogue the same thing? How are they different?",
      answer:
        "A brochure and a catalogue are similar and yet different things. Both help businesses raise awareness about their company as well as their products and services. A catalogue, however, is much more comprehensive. It includes detailed information about the products or services offered by a business. In contrast, a brochure is much more compact with to-the-point information.",
    },
    {
      question: "As a business, how can I benefit from a brochure or a catalogue?",
      answer:
        "With the help of a catalogue or a brochure, you can share important information about your brand, products and services. They can help you boost brand awareness and customer engagement. They can also increase customers’ confidence in your brand. Moreover, they do not require a heavy investment. Therefore, you can give your brand a boost without investing much.",
    },
    {
      question: "Can you explain the different types of catalogues?",
      answer:
        "At a broader level, catalogues can be categorised into physical or digital catalogues. The former is the more traditional form of catalogue and requires printing, while the latter includes catalogues meant for online platforms like websites. Catalogues can also be categorised based on their purpose. A company catalogue offers details about the company (history, values, mission and services), while a product/service catalogue lists the products/services offered by the company.",
    },

     {
      question: "What do you mean by brochure style? How many styles are there?",
      answer:
        "Brochure style is all about the layouts and folds of the brochure. These decide how users will open and read the information given in the brochure. For example, in the Bi-fold style, the paper is folded into two distinct halves with four panels (two each on front and back) containing information. Other than Bi-fold, brochure styles also include Tri-fold, Accordion-fold, Gate-fold, Double Gate-fold, French-fold, Roll-fold and Double Parallel-fold.",
    },

     {
      question: "What are the essential elements of a good catalogue or a brochure?",
      answer:
        "A good brochure and catalogue design must have a captivating cover, visually appealing design, compelling and valuable information, strong CTAs and contact details. In addition, it should also reflect brand identity and be both print and digital-friendly.",
    }
  ];

  const rightFaqs = [
    {
      question: "What is the process of brochure and catalogue design?",
      answer: "The process begins with understanding the objectives and the target audience of the brochure and catalogue. After this, the data collection, design planning and concept development stages follow. Once the design concept is finalised, the actual design is created and the content is integrated. The final stages involve reviewing and making required corrections. In the end, printing and publishing of the catalogue are done.",
    },
    {
      question: "Why should I choose DN Designs for my catalogue and brochure design? What is included in your catalogue design services?",
      answer: "As a professional catalogue design agency, DN Designs has the required expertise and experience to provide effective brochures and catalogue design services to our clients. We cover every aspect of catalogue design in our services, including understanding the target audiences, planning and designing the layout and structure, as well as content creation. Additionally, we also assist you in printing and publishing the brochures or the catalogues.",
    },
    {
      question: "I need to redesign my catalogue. How can you help?",
      answer: "Our company catalogue design services include redesigning your existing catalogue, too. We can work on your catalogue to make it look more appealing and be more useful for your audience.",
    },
    {
      question: "How much time do you need to design a catalogue or a brochure?",
      answer: "Every brochure and catalogue is unique, and therefore, the time needed to complete them is also different. A big and difficult project can take time, while a simple one can be completed quickly. The time can also vary depending upon the availability of materials needed (content, images, brand guidelines) and the number of revisions required.",
    },
  ];


  const FormHead ="Let’s Discuss Over a Cup of Coffee"    
  const FormPara ="Do you want to showcase your brand as well as your products and services in a compelling and visually appealing manner? A creatively and professionally designed catalogue and brochure is what you need, and at DN Designs, we craft just that for you. Our brochures and catalogues are designed to attract attention, engage the audience and convert them into customers. Want to work with us? Let’s begin by discussing your objectives."   
 
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

      {/* catalouge book */}
      <CatalougeBook />

      {/*The Protagonists */}

      <section className="appr-pro">
        <div className="container">
          <div className="">
            <div className="row appr-pro-row-main">
              <div className="col-12 col-md-12 col-lg-6 mt-3">
                <h2 className="appr-pro-main-head">
                  The Protagonists of
                  <span className="every-pr"> Catalogue Design</span>
                </h2>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Captivating Cover</h3>
                    <p>
                      First introduction often sets the mood. If it is positive,
                      half the battle is won. In a catalogue, this first
                      introduction is the cover. It should, thus, be interesting
                      and captivating.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Visual Appeal and Hierarchy</h3>
                    <p>
                      A well-designed brochure and catalogue design not only attracts customers but also makes it easy for them to navigate through it. Colours, typography, white spaces, images and a well-laid-out content structure - all play a vital role.
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
                  <h3>Consistent Branding</h3>
                  <p>
                   Consistent brand identity builds trust. Thus, in a catalogue, elements like logo, colours, typography, as well as story, values, mission, and tone should all be consistent with the overall brand identity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Compelling Content</h3>
                  <p>
                    For brands, it is important to connect with customers, and content is instrumental in forming this connection. Informative, interesting and expressive writing can engage customers, thus enhancing impressions and sales.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Strong CTAs</h3>
                  <p>
                    A company catalogue design is created for a purpose, and CTAs (call-to-action) work to fulfil this purpose. They guide customers towards the next step - make a purchase or download a guide. Particularly good for e-catalogue designs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Contact Details and Ordering Information</h3>
                  <p>
                   A catalogue without the company’s contact details is pointless. Customers need to know how to contact and place an order with you. The company’s address, phone number, email, website and social media links should be included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Catalogues */}

      <section className="e-catalogues">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 e-catalogues-main-col">
              <div className="e-catalogues-left">
                <h4>E-Catalogues</h4>
                <h3>
                  Make Your Catalogues More Accessible, Interactive And
                  Shareable
                </h3>
                <p>
                  Conveniently share and update information about your company,
                  products and services through online brochures and catalogues.
                  These are downloadable and enable customers to place an order
                  right there.
                </p>
                <ECataloguesBtn />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 e-catalogues-main-col">
              <div className="e-catalogues-right">
                <div className="row e-catalogues-right-row">
                  <div className="col-12 col-md-12 col-lg-6">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/02/1.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 e-cata-right-img">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/02/2.jpg"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="row e-catalogues-right-row e-catalogues-right-row-d">
                  <div className="col-12 col-md-12 col-lg-6">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/02/3.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 e-cata-right-img">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/02/4.jpg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Catalogue Designing - Our Process desktop view */}

      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Creative Catalogue Designing -
            <span className="every-pr">
               Our Process
            </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Understanding Purpose & Target Audience</h2>
                  <p>
                    Our professional catalogue design process begins with answering a few questions. What is the purpose of the brochure and catalogue? Does it aim to inform the audience about the company, or is it the various products that it wants to showcase? And who is the target audience? Are they the end-consumers, businesses, sales representatives, field marketers or other stakeholders? We hold discussions with you to find answers to these.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Planning & Concept Development</h2>
                  <p>
                    After a basic understanding is reached, we move to our next stage and begin gathering relevant information. We figure out the important information that needs to be presented, and accordingly plan the design of the catalogue. We create a few of these designs and send them to you for your feedback and approval.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Designing the Catalogue</h2>
                  <p>
                    Once we receive your approval on one of the designs, we accelerate the process and begin the actual designing. Our design experts create a design that is not just visually appealing but also amply reflects your brand identity. We ensure a design wherein your key information and products get highlighted. Additionally, we include high-quality photographs and call-to-action (CTAs) to increase engagement and conversions.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Content Creation & Integration</h2>
                  <p>
                    At this stage, we begin to create content for your brochure and catalogue. While creating content, we make sure that it is not just high-quality and professional, but also tailored for your target audience. Additionally, we consider your brand voice and tone too. Once the content work is finished (or if you have provided the content), we move forward and insert it into the design.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Printing & Publishing</h2>
                  <p>
                    Your catalogue is almost ready. It is now time to review it. We check it on our end and also seek your feedback. If there are errors, we correct them and then finally proceed to the final step. Here, we help you print (paper format) and publish (digital format) your catalogue.
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
            Creative Catalogue Designing - 
            <span className="every-pr"> Our Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Understanding Purpose & Target Audience</h2>
                  <p>
                    Our professional catalogue design process begins with answering a few questions. What is the purpose of the brochure and catalogue? Does it aim to inform the audience about the company, or is it the various products that it wants to showcase? And who is the target audience? Are they the end-consumers, businesses, sales representatives, field marketers or other stakeholders? We hold discussions with you to find answers to these.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Planning & Concept Development</h2>
                  <p>
                    After a basic understanding is reached, we move to our next stage and begin gathering relevant information. We figure out the important information that needs to be presented, and accordingly plan the design of the catalogue. We create a few of these designs and send them to you for your feedback and approval.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Designing the Catalogue</h2>
                  <p>
                    Once we receive your approval on one of the designs, we accelerate the process and begin the actual designing. Our design experts create a design that is not just visually appealing but also amply reflects your brand identity. We ensure a design wherein your key information and products get highlighted. Additionally, we include high-quality photographs and call-to-action (CTAs) to increase engagement and conversions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Content Creation & Integration</h2>
                  <p>
                    At this stage, we begin to create content for your brochure and catalogue. While creating content, we make sure that it is not just high-quality and professional, but also tailored for your target audience. Additionally, we consider your brand voice and tone too. Once the content work is finished (or if you have provided the content), we move forward and insert it into the design.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Printing & Publishing</h2>
                  <p>
                    Your catalogue is almost ready. It is now time to review it. We check it on our end and also seek your feedback. If there are errors, we correct them and then finally proceed to the final step. Here, we help you print (paper format) and publish (digital format) your catalogue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Creative Brochure Design But With A Twist */}
      <CreativeBrochureDesign />

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
      <Form FormHead={FormHead} FormPara={FormPara}/>
    </div>
  );
}

export default page;
