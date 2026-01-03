import React from "react";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import PagesHero from "@/Components/PagesHero/PagesHero";
import "./photography.css";
import AutoCounter from "@/Components/AutoCounter/AutoCounter";
import Form from "@/Components/Form/Form";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("about-us", null, false);
  } catch (error) {
    return {
      title: "About Us",
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
  // const response = await getPageData();
  // const pageData = response?.data;

  // if (!pageData) {
  //   notFound();
  // }

  const heading = "Where Brands Are Born";
  const subHeading = "A Creative Branding Agency";
  const para =
    "  Successful brands are not made in a day. They are a result of consistent hard work, perseverance and unwavering passion. Long-term vision, strategy and creativity are pivotal too. Lots of work and lots of dedication are required. This is why you need the services of a branding & design agency like us. Let’s walk you through our services and inform you of our capabilities and approach. If there are questions in your mind, check out our FAQs section. Alternatively, reach out to us and we will promptly answer them.";

  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Capturing moments that tell your brand's story is our passion. Our photography services are designed to highlight what makes your products and services unique. Shall we discuss your vision for the perfect shoot?";
  const pageName = "photography";

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

      <section className="photography-image">
        <div className="container">
          <div className="row photography-image-img">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2019/02/Neha-Secretary-Look-2-scaled.jpg"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      {/*The Protagonists */}

      <section className="appr-pro">
        <div className="container">
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

      {/* Organic Sessions */}
      <section className="organic-sessions">
        <div className="container">
          <div className="row organic-sessions-row">
            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={150} />%
              </h3>
              <p>Organic Sessions (6 mo)</p>
            </div>

            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={150} />%
              </h3>
              <p>Organic Sessions (6 mo)</p>
            </div>

            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={150} />%
              </h3>
              <p>Organic Sessions (6 mo)</p>
            </div>

            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={150} />%
              </h3>
              <p>Organic Sessions (6 mo)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting visual stories that drive business impact. */}
      <section className="visual-stories-that">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="visual-stories-that-content">
                <h3>Crafting visual stories that drive business impact.</h3>
                <p>
                  Commercial photography at DN Designs is tailored to elevate
                  brand presence through clean, professional imagery. From
                  corporate portraits to product showcases and promotional
                  shoots, the focus is on delivering visuals that speak directly
                  to target audiences.{" "}
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2019/02/flat-lay-nazakat-1-1.jpg"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting visual stories that drive business impact. */}
      <section className="visual-stories-that">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2019/02/flat-lay-nazakat-1-1.jpg"
                className="img-fluid"
              ></img>
            </div>
            <div className="col">
              <div className="visual-stories-that-content">
                <h3>Crafting visual stories that drive business impact.</h3>
                <p>
                  Commercial photography at DN Designs is tailored to elevate
                  brand presence through clean, professional imagery. From
                  corporate portraits to product showcases and promotional
                  shoots, the focus is on delivering visuals that speak directly
                  to target audiences.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting visual stories that drive business impact. */}
      <section className="visual-stories-that">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="visual-stories-that-content">
                <h3>Crafting visual stories that drive business impact.</h3>
                <p>
                  Commercial photography at DN Designs is tailored to elevate
                  brand presence through clean, professional imagery. From
                  corporate portraits to product showcases and promotional
                  shoots, the focus is on delivering visuals that speak directly
                  to target audiences.{" "}
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2019/02/flat-lay-nazakat-1-1.jpg"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/* form */}
      <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName} />
    </div>
  );
}

export default page;
