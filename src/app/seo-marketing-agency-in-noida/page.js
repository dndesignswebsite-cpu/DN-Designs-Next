import React from 'react'
import "./seo-marketing-agency-in-noida.css"
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb'
import PagesHero from '@/Components/PagesHero/PagesHero'
import TalkToUs from '@/Components/TalkToUs/TalkToUs'
import ContactUsBtn from '@/Components/ContactUsBtn/ContactUsBtn'
import Form from '@/Components/Form/Form'
import Faqs from '@/Components/Faqs/Faqs'
import AutoCounter from '@/Components/AutoCounter/AutoCounter'
import WebsiteAuditForm from '@/Components/WebsiteAuditForm/WebsiteAuditForm'

function page() {
     const heading ="Where Brands Are Born"
  const subHeading ="A Creative Branding Agency"
  const para ="  Successful brands are not made in a day. They are a result of consistent hard work, perseverance and unwavering passion. Long-term vision, strategy and creativity are pivotal too. Lots of work and lots of dedication are required. This is why you need the services of a branding & design agency like us. Let’s walk you through our services and inform you of our capabilities and approach. If there are questions in your mind, check out our FAQs section. Alternatively, reach out to us and we will promptly answer them."

  const leftFaqs = [
    {
      question: "How can I contact your team?",
      answer:
        "You can use the contact form or call us directly at +91-9999999999.",
    },
    {
      question: "Do you offer remote consultation?",
      answer:
        "Yes! We do virtual meetings over Zoom, Google Meet, or Microsoft Teams.",
    },
    {
      question: "Do you offer remote consultation?",
      answer:
        "Yes! We do virtual meetings over Zoom, Google Meet, or Microsoft Teams.",
    },
  ];

  const rightFaqs = [
    {
      question: "Where is your office located?",
      answer: "We are based in Noida, India, but work with clients worldwide.",
    },
    {
      question: "What is your response time?",
      answer: "We usually reply within 24 hours of receiving your query.",
    },
  ];

 
  return (
    <div>
       {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>
      

      {/* branding hero */}
      {/* ui/ux design */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para}/>
      </section>

{/* what-drives-our-growth */}
      <section className='what-drives-our-growth'>
        <div className='container'>
            <div className='row what-drives-our-growth-row'>
                <div className='col what-drives-our-growth-content'>
                    <h3>Data Driven Insights</h3>
                    <p>We depend on your website data more than opinions and assumptions. Through data analysis, we discover your top-performing keywords and content and the users’ intent in seeking them. We also examine user behaviour, bounce rate and CTR on your website. This data-driven analysis helps us, an SEO company in Noida, create smarter SEO strategies.</p>
                     <ContactUsBtn/>
                </div>
                <div className='col'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/jkjk.png' className='img-fluid'></img>
                </div>
            </div>
        </div>
      </section>


{/* comprehensive seo stregety */}
      <section className='comprehensive-seo-stregety'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <div className='comprehensive-seo-stregety-content'>
                    <h2>Comprehensive SEO Strategy</h2>
                    <p>We make the most of our data analysis and design a tailored SEO strategy to build your business’s online presence and drive more organic traffic. At the core are on-page and off-page optimisation as well as technical SEO.</p>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/jhfjhh.png' className='img-fluid'/>
                </div>
                </div>

                <div className='col'>
                <div className='transparent-reporting-content'>
                    <h2>Transparent Reporting</h2>
                    <p>All work and no known results can be frustrating. Therefore, reporting is essential to assess the performance of SEO activities. It also helps confirm whether the strategy is yielding positive results or requires modifications.</p>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/jkjk.png' className='img-fluid'/>
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
              Characteristics of{" "}
              <span className="every-pr"> Good Brand Name?</span>
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
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and Designing is our core, and we
                    excel in it. BeDesigning is our core, and we excel in it.
                    BeDesigning is our core, and we excel in it. Bewe excel in
                    it. Be it the overall brand design, website design or
                    content design – we have expertise and experience in all. We
                    understand your vision and create a design that boosts your
                    brand value and increases ROI.
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
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and Designing is our core, and we
                    excel in it. BeDesigning is our core, and we excel in it.
                    BeDesigning is our core, and we excel in it. Bewe excel in
                    it. Be it the overall brand design, website design or
                    content design – we have expertise and experience in all. We
                    understand your vision and create a design that boosts your
                    brand value and increases ROI.
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
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design – we have
                    expertise and experience in all. We understand your vision
                    and create a design that boosts your brand value and
                    increases ROI.
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
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design – we have
                    expertise and experience in all. We understand your vision
                    and create a design that boosts your brand value and
                    increases ROI.
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
                    <h3>Discovery & Planning</h3>
                    <p>
                      The fundamentals come first - understanding the product,
                      its USP, the brand’s vision, its target audience and
                      competitors. Solid research leads to a solid foundation
                      upon which we base our strategic plan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Discovery & Planning</h3>
                    <p>
                      The fundamentals come first - understanding the product,
                      its USP, the brand’s vision, its target audience and
                      competitors. Solid research leads to a solid foundation
                      upon which we base our strategic plan.
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
                  <h3>Discovery & Planning</h3>
                  <p>
                    The fundamentals come first - understanding the product, its
                    USP, the brand’s vision, its target audience and
                    competitors. Solid research leads to a solid foundation upon
                    which we base our strategic plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Design, Development & Execution</h3>
                  <p>
                    Designing and developing practical options follows. A
                    crucial aspect of this step is revision and refinement. We
                    work on and modify our designs to ensure they match your
                    vision.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Testing & Launch</h3>
                  <p>
                    Once everything is ready, it’s time to test it. For us,
                    testing is important both before and after the product
                    launch. This is to ensure that everything works smoothly at
                    both stages.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Ongoing Support</h3>
                  <p>
                    We provide our clients with ongoing support even after the
                    project is over. If you face problems post-completion of the
                    work, we are there to resolve them.
                  </p>
                </div>
              </div>
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
                  <h2>Brand Understanding</h2>
                  <p>
                    If anything has to stand the test of time, it needs to begin
                    with a firm footing. In branding, this beginning is
                    understanding the product/business. We sit down with you for
                    a deep discussion to understand your product or service as
                    well as your vision and mission. This helps us make a good
                    start and prepares us for an exciting journey ahead.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card2-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Competitor Analysis</h2>
                  <p>
                    You are not alone in the market; there are several other
                    products in the same category out there trying to build
                    their presence. How do you craft your own little corner?
                    Analysing competition is crucial, and this is what we, as a
                    brand design company, do next. We conduct a thorough
                    research of your competitors and understand your current
                    position in the market to ensure that we have enough
                    knowledge and data to take a step forward, creating your
                    branding strategy.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card3-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Planning Your Brand</h2>
                  <p>
                    It’s now time to create your brand strategy. Every aspect of
                    branding is carefully thought out and discussed with you -
                    be it your brand personality, story, message, values, or
                    even communication and website design. As a creative
                    branding agency, we decide on these elements based on how we
                    want the audience to perceive your brand.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card4-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Implementing the Strategy</h2>
                  <p>
                    Let’s turn words and ideas into action. We now sit down to
                    do the actual work - naming your brand, designing your logo,
                    creating your packaging design, crafting a tagline,
                    composing your message, and much more. In addition, we
                    design and develop your website too.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card5-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Feedback & Launch</h2>
                  <p>
                    The final stage in our branding journey, this is where we
                    seek a review of our work. Based on your feedback, we make
                    changes, and reseek your feedback. Once we receive a green
                    light from you, we go ahead and launch your brand.
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
                  <h2>Brand Understanding</h2>
                  <p>
                    If anything has to stand the test of time, it needs to begin
                    with a firm footing. In branding, this beginning is
                    understanding the product/business. We sit down with you for
                    a deep discussion to understand your product or service as
                    well as your vision and mission. This helps us make a good
                    start and prepares us for an exciting journey ahead.
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
                    You are not alone in the market; there are several other
                    products in the same category out there trying to build
                    their presence. How do you craft your own little corner?
                    Analysing competition is crucial, and this is what we, as a
                    brand design company, do next. We conduct a thorough
                    research of your competitors and understand your current
                    position in the market to ensure that we have enough
                    knowledge and data to take a step forward, creating your
                    branding strategy.
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
                    It’s now time to create your brand strategy. Every aspect of
                    branding is carefully thought out and discussed with you -
                    be it your brand personality, story, message, values, or
                    even communication and website design. As a creative
                    branding agency, we decide on these elements based on how we
                    want the audience to perceive your brand.
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
                    Let’s turn words and ideas into action. We now sit down to
                    do the actual work - naming your brand, designing your logo,
                    creating your packaging design, crafting a tagline,
                    composing your message, and much more. In addition, we
                    design and develop your website too.
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
                    The final stage in our branding journey, this is where we
                    seek a review of our work. Based on your feedback, we make
                    changes, and reseek your feedback. Once we receive a green
                    light from you, we go ahead and launch your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className='industries-we-serve'>
        <div className='container'>
            <div className='row'>
            <h3>Industries We Serve</h3>
                <div className='col-12 col-md-6 col-lg-3'>
                <div className='industries-we-serve-col'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg' className='img-fluid'/>
                    <h4>Business to Business (B2B)</h4>
                    <p>Impress your business customers by understanding their specific needs and crafting SEO strategies to generate leads and build brand authority.</p>
                </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3'>
                <div className='industries-we-serve-col'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg' className='img-fluid'/>
                    <h4>Business to Business (B2B)</h4>
                    <p>Impress your business customers by understanding their specific needs and crafting SEO strategies to generate leads and build brand authority.</p>
                </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3'>
                <div className='industries-we-serve-col'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg' className='img-fluid'/>
                    <h4>Business to Business (B2B)</h4>
                    <p>Impress your business customers by understanding their specific needs and crafting SEO strategies to generate leads and build brand authority.</p>
                </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3'>
                <div className='industries-we-serve-col'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg' className='img-fluid'/>
                    <h4>Business to Business (B2B)</h4>
                    <p>Impress your business customers by understanding their specific needs and crafting SEO strategies to generate leads and build brand authority.</p>
                </div>
                </div>
            </div>


            <div className='row'>
                <div className='col-12 col-md-6 col-lg-3'>
                <div className='industries-we-serve-col'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg' className='img-fluid'/>
                    <h4>Business to Business (B2B)</h4>
                    <p>Impress your business customers by understanding their specific needs and crafting SEO strategies to generate leads and build brand authority.</p>
                </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3'>
                <div className='industries-we-serve-col'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg' className='img-fluid'/>
                    <h4>Business to Business (B2B)</h4>
                    <p>Impress your business customers by understanding their specific needs and crafting SEO strategies to generate leads and build brand authority.</p>
                </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3'>
                <div className='industries-we-serve-col'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg' className='img-fluid'/>
                    <h4>Business to Business (B2B)</h4>
                    <p>Impress your business customers by understanding their specific needs and crafting SEO strategies to generate leads and build brand authority.</p>
                </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3'>
                <div className='industries-we-serve-col'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg' className='img-fluid'/>
                    <h4>Business to Business (B2B)</h4>
                    <p>Impress your business customers by understanding their specific needs and crafting SEO strategies to generate leads and build brand authority.</p>
                </div>
                </div>
            </div>

        </div>
      </section>

      {/* Get a Free Website Audit */}

      <section className='website-audit'>
        <div className='container'>
            <div className='row website-audit-row'>
            <h3>Website Audit</h3>
            <p>Unlock your website's hidden potential for increased organic traffic and leads. Contact us today to drive growth!</p>
                <WebsiteAuditForm/>
            </div>
        </div>
      </section>

{/* Projects Completed 300+ Successfully delivered across industries */}
<section className='projects-completed'>
    <div className='container'>
      <div className='row projects-completed-main-row'>
      <div className='col-12 col-md-12 col-lg-6 projects-completed-div-main-col'>
          <div className='row'>
            <div className='col'>
              <div className='projects-completed-div'>
                 <h3><AutoCounter target={300}/></h3>
                 <h4>Projects Completed</h4>
                 <p>Successfully delivered across industries</p>
              </div>
            </div>
            <div className='col'>
              <div className='projects-completed-div projects-completed-div-box-sh'>
                 <h3><AutoCounter target={300}/>+</h3>
                 <h4>Projects Completed</h4>
                 <p>Successfully delivered across industries</p>
              </div>
            </div>
          </div>

                    <div className='row'>
                     <div className='col'>
              <div className='projects-completed-div projects-completed-div-box-sh'>
                 <h3><AutoCounter target={300}/>+</h3>
                 <h4>Projects Completed</h4>
                 <p>Successfully delivered across industries</p>
              </div>
            </div>
            <div className='col'>
              <div className='projects-completed-div'>
                 <h3><AutoCounter target={300}/>+</h3>
                 <h4>Projects Completed</h4>
                 <p>Successfully delivered across industries</p>
              </div>
            </div>
           
          </div>
        </div>
        <div className='col-12 col-md-12 col-lg-6'>
            <img  src='https://dndesigns.co.in/wp-content/uploads/2025/07/ghfh.jpg' className='img-fluid'/>
        </div>
        
      </div>
    </div>
</section>


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
      <Form/>

    </div>
  )
}

export default page
