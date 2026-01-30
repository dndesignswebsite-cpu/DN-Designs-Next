export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import PagesHero from "@/Components/PagesHero/PagesHero";
import "./photography.css";
import AutoCounter from "@/Components/AutoCounter/AutoCounter";
import Form from "@/Components/Form/Form";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Image from "next/image";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("photography", null, false);
  } catch (error) {
    return {
      title: "Photography",
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
    pageData = await getPageById("photography", null, true);
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


  const heading = "Capturing creativity in every frame";
  const subHeading = "A modern photography studio focused on creativity";
  const para =
    "  Exceptional photography requires time, dedication, and a deep understanding of light, composition, and emotion. That’s where we come in. As a professional photography studio, we work closely with our clients to capture authentic moments and compelling visuals that leave a lasting impression. Let us take you through our photography services and showcase our capabilities, style, and creative process. If you have any questions, feel free to explore our FAQs section. Alternatively, reach out to us anytime—we’ll be happy to assist you.";

  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Capturing moments that tell your brand's story is our passion. Our photography services are designed to highlight what makes your products and services unique. Shall we discuss your vision for the perfect shoot?";
  const pageName = "photography";

  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "photography"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


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
            {/* <img
              src="https://dndesigns.co.in/uploads/pages/sahbdnvnbn.webp"
              className="img-fluid"
            /> */}

                <Image
                  src="https://dndesigns.co.in/uploads/pages/sahbdnvnbn.webp"
                  className="responsive-img"
                  alt="photography page image"
                  width={1600}
                  height={800}
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
                  <h3>Portrait Photography</h3>
                  <p>
                    Our portrait photography focuses on personality, expression, and confidence, using creative lighting and composition to deliver natural, elegant portraits that reflect individuality, emotion, and style for personal or professional use.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Commercial & Product Photography</h3>
                  <p>
                    We create impactful commercial and product photographs that highlight details, texture, and brand identity, helping businesses showcase products professionally, attract customers, and build trust through clean, creative visuals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Event & Lifestyle Photography
</h3>
                  <p>
                   From corporate events to lifestyle shoots, we document real moments and interactions with a candid approach, capturing energy, atmosphere, and storytelling visuals that communicate experiences naturally and memorably.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Fashion & Editorial Photography
</h3>
                  <p>
                    Our fashion and editorial photography blends concept, styling, and creative direction to produce striking visuals, capturing trends, attitude, and storytelling imagery designed for magazines, campaigns, portfolios, and digital platforms.
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
                <AutoCounter target={200} />+
              </h3>
              <p>Projects Completed</p>
            </div>

            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={7} />+
              </h3>
              <p>Years Professional Experience</p>
            </div>

            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={250} />+
              </h3>
              <p>Happy Clients</p>
            </div>

            <div className="col-12 col-md-3 organic-sessions-col">
              <h3>
                <AutoCounter target={100} />%
              </h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting visual stories that drive business impact. */}
      <section className="visual-stories-that">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="visual-stories-that-content">
                <h3>Food Product Photography</h3>
                <p>
                 Our food product photography highlights texture, freshness, and detail through carefully styled compositions and professional lighting. We create visually appetizing images that enhance brand appeal, attract customers, and communicate quality across websites, menus, packaging, and marketing campaigns.{" "}
                </p>
              </div>
            </div>
            <div className="col">
              {/* <img
                src="https://dndesigns.co.in/uploads/pages/TDG02954.webp"
                className="img-fluid"
              ></img> */}

              <Image
                  src="https://dndesigns.co.in/uploads/pages/TDG02954.webp"
                  className="responsive-img visual-stories-that-img"
                  alt="photography page image"
                  width={1600}
                  height={1067}
                />
            </div>
          </div>
        </div>
      </section>

      {/* Crafting visual stories that drive business impact. */}
      <section className="visual-stories-that">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-12 col-md-12 col-lg-6">
              {/* <img
                src="https://dndesigns.co.in/uploads/pages/Neha-Secretary-Look-2-scaled.webp"
                className="img-fluid"
              ></img> */}

               <Image
                  src="https://dndesigns.co.in/uploads/pages/Neha-Secretary-Look-2-scaled.webp"
                  className="responsive-img visual-stories-that-img"
                  alt="photography page image"
                  width={1600}
                  height={1067}
                />
            </div>
            <div className="col">
              <div className="visual-stories-that-content">
                <h3>Fashion Model Photography</h3>
                <p>
                 Our fashion model photography captures confidence, style, and personality through creative direction, professional lighting, and refined compositions. We produce striking visuals that enhance portfolios, support brand campaigns, and showcase individuality across editorials, lookbooks, social media, and advertising platforms.{" "}
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
            <div className="col-12 col-md-12 col-lg-6">
              <div className="visual-stories-that-content">
                <h3>Jewellery Photography</h3>
                <p>
                 Our jewellery photography emphasizes brilliance, craftsmanship, and fine details using precise lighting and elegant compositions. We create luxurious visuals that highlight textures, stones, and finishes, helping brands elevate presentation, attract customers, and build trust across catalogs, websites, and marketing campaigns.{" "}
                </p>
              </div>
            </div>
            <div className="col">
              {/* <img
                src="https://dndesigns.co.in/uploads/pages/qwhjehbjbhjbh.webp"
                className="img-fluid"
              ></img> */}

                <Image
                  src="https://dndesigns.co.in/uploads/pages/qwhjehbjbhjbh.webp"
                  className="responsive-img visual-stories-that-img"
                  alt="photography page image"
                  width={1600}
                  height={1067}
                />
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
