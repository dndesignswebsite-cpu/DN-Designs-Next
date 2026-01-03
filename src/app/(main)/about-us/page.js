import React from 'react'
import "./about.css"
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb'
import TalkToUs from '@/Components/TalkToUs/TalkToUs'
import OurWorkServiceTabs from '@/Components/OurWorkServiceTabs/OurWorkServiceTabs'
import OurConstant from '@/Components/OurConstant/OurConstant'
import Form from '@/Components/Form/Form'
import PagesHero from '@/Components/PagesHero/PagesHero'
import AutoCounter from '@/Components/AutoCounter/AutoCounter'
import { notFound } from "next/navigation";
import Script from "next/script";


// meta data
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
async function getPageData() {
  const res = await fetch(`${BASE_URL}/api/pages/about-us`, {
   cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata() {
  const response = await getPageData();
  // console.log(response);
  if (!response?.success) {
    return {
      title: "About Us",
      robots: "noindex, nofollow",
    };
  }

  const seo = response.data;
  // console.log(seo.content)

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

 const response = await getPageData();
  const pageData = response?.data;

  if (!pageData) {
    notFound();
  }

  // hero section content
  const heading = "A Branding  Design Studio"
  const subHeading = "Let’s Design, Develop and Promote Your Brand"
  const para = "A collaborative branding and design studio, we build impactful brands. In the last eight years, we have successfully established multiple brands in the market. Our team of creative and marketing experts begin by discussing your product, vision and goals, and thereafter works towards realising your branding dreams. Do you want to know more about us? Come along and discover who we are and what motivates us. Find out about our services and meet the team that works behind the scenes to build a winning brand for you."

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee"
  const FormPara = "It’s difficult to be seen and heard in a crowd, isn’t it? There is just so much noise. It is the same with product market – too many brands, lots of promise and intense competition. Rising above this chaos is what helps you establish your identity and secure your position in this competitive landscape. This is what we, as a branding and design agency, do for you. Curious to know more about us? Let’s sit down, enjoy a cup of coffee and discuss your project."
  const pageName = "about-us"


  return (
    <div>
{/* schema */}
{pageData?.content?.raw && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: pageData.content.raw
        .replace(/<script[^>]*>/gi, "")
        .replace(/<\/script>/gi, "")
        .trim(),
    }}
  />
)}
{/*schema ends here */}

      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* about hero */}
      <section>
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>


      {/* Projects Completed 300+ Successfully delivered across industries */}
      <section className='projects-completed'>
        <div className='container'>
          <div className='row projects-completed-main-row'>
            <div className='col-12 col-md-12 col-lg-6'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/ghfh.jpg' className='img-fluid' />
            </div>
            <div className='col-12 col-md-12 col-lg-6 projects-completed-div-main-col'>
              <div className='row'>
                <div className='col'>
                  <div className='projects-completed-div'>
                    <h3><AutoCounter target={300} speed={7} />+</h3>
                    <h4>Projects Completed</h4>
                    <p>Successfully delivered across industries</p>
                  </div>
                </div>
                <div className='col'>
                  <div className='projects-completed-div projects-completed-div-box-sh'>
                    <h3><AutoCounter target={150} speed={15} />+</h3>
                    <h4>Happy Clients</h4>
                    <p>Trusted by businesses worldwide</p>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='projects-completed-div projects-completed-div-box-sh'>
                    <h3><AutoCounter target={8} speed={60} />+</h3>
                    <h4>Years Experience</h4>
                    <p>Proven expertise in design</p>
                  </div>
                </div>
                <div className='col'>
                  <div className='projects-completed-div'>
                    <h3><AutoCounter target={98} speed={20} />%</h3>
                    <h4>Client Satisfaction</h4>
                    <p>Exceeding expectations consistently</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/*Our Core Passion */}

      <section className="appr-pro">
        <div className="container">


          <div className="row appr-pro-row-main">

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div-first app-pro-div-white ">
                <div>
                  <h3>Our Core Passion</h3>
                  <div className='app-pro-div-first-btn'>
                    <TalkToUs />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Challenging Work</h3>
                  <p>
                    We absolutely love it when something challenging comes our way. It’s our chance to get ready for an exciting and fun-filled branding journey ahead.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Innovation</h3>
                  <p>
                    ‘Let’s do something new, something out of the box’ - that’s how we approach each project. Implementing innovative designs and strategies is how we thrive and stay ahead.
                  </p>
                </div>
              </div>
            </div>

          </div>


          <div className="row appr-pro-row-main">
            <div className="col-12 col-md-6 col-lg-3 mt-3">

            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Team Collaboration</h3>
                  <p>
                    Together, we win. We firmly believe that it is the collaborative effort of all our teams that ultimately makes us winners. And, isn’t it always more fun to work together?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Making a Difference</h3>
                  <p>We don’t simply wish to work; we want to make a difference. We want to make your brand the best in the industry - something that even the competitors admire.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Happy Customers</h3>
                  <p>
                    This is our ultimate goal - to see our clients happy with our work. We love to see them succeed in the market. We consider their happiness to be our biggest achievement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* We have got a dedicated team to support you and your vision */}
      <section className="dedicated-team">
        <div className='container'>
          <div className='row text-center'>
            <div className='dedicated-team-hedg'>
              <h2>We have got a dedicated team to
                <span className='dedicated-team-hedg-span'> support you and your vision</span></h2>
            </div>
            <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/jfhf-scaled.jpg' className='img-fluid' />
          </div>
        </div>
      </section>

      {/* points-about */}

      <section className='point'>
        <div className="container point-cont">
          <div className="row points-about-row">
            <div className="col-3 points-about-left">
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/350x1100.jpg' />
            </div>
            <div className="col-12 col-md-12 col-lg-9 points-about-right">
              <div className='points-about row'>
                <div className="col-12 col-md-12 col-lg-2">
                  <h2>1</h2>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                  <h3>Branding</h3>
                </div>
                <div className='points-about-para col-12 col-md-12 col-lg-4'>
                  <p>Brand identity is a necessity. Without it, customers may never get an idea about who you are and what your product is all about. Identity includes the visual appearance of your brand, its voice, story and messaging - essentially everything that helps shape customers’ perception.</p>
                </div>
                <div className='points-about-para col-12 col-md-12 col-lg-3'>
                  <p>Creating an identity is a difficult, complex and time-consuming process. We do realise this, and that is exactly why we are here. We are your partner in building a solid brand identity - one that is visually stunning, resonates with your target audience and boosts sales and eventually profits.</p>
                </div>
              </div>

              <div className='points-about row points-about-Comm'>
                <div className="col-12 col-md-12 col-lg-2">
                  <h2>2</h2>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                  <h3>Communication Strategy</h3>
                </div>
                <div className='points-about-para col-12 col-md-12 col-lg-4'>
                  <p>Customers need to be aware of your product to buy it. If they have no clue about the existence of your product, there is no way it can succeed. For this reason, strategic communication is important. It ensures that your product is well-presented before your target audience, wherever they might interact with it.</p>
                </div>
                <div className='points-about-para col-12 col-md-12 col-lg-3'>
                  <p>If this feels like a slightly complicated task to do on your own, don’t worry. We are right here! Our team of communication experts excel in creating strategies that effectively establish and promote your brand in the market. All you need to do is contact us.</p>
                </div>
              </div>

              <div className='points-about row'>
                <div className="col-12 col-md-12 col-lg-2">
                  <h2>3</h2>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                  <h3>Web Design</h3>
                </div>
                <div className='points-about-para col-12 col-md-12 col-lg-4'>
                  <p>Perhaps you want to share informative content with your audience, or maybe you want to sell your products online. Whichever your goal may be, what you need here is a website. A website where your customers can find everything - details about your company and ways to purchase your goods. However, just any website doesn’t work in a competitive landscape.</p>
                </div>
                <div className='points-about-para col-12 col-md-12 col-lg-3'>
                  <p>It should be aesthetically appealing and easy to explore. Visitors should conveniently find what they are looking for and complete the tasks they have in mind. And this is exactly what we strive to do. Our web designers create and develop search-engine-friendly as well as user-friendly UI/UX design for your website.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our work tabs */}
      <OurWorkServiceTabs />

      {/* Our constant companies */}
      <OurConstant />
      {/* Form */}

      <div className="form-section">
        <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName} />
      </div>
    </div>
  )
}

export default page
