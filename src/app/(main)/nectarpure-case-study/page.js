export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./nectarpure-case-study.css";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("nectarpure-case-study", null, false);
  } catch (error) {
    return {
      title: "Nectarpure Case Study",
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

  let imageUrl = "https://powerfilldrinks.com/uploads/pages/"
  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("nectarpure-case-study", null, true);
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


  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "nectarpure-case-study"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      <div className="container nectarpure">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <img
              src={imageUrl+"34ebjrhbkr.webp"}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-lg-8 col-md-7 justify-content-space-between">
            <h2 className="nectarpure-h1">
              Created a premium package design for a whey protein brand to
              establish them in the market.
            </h2>
            <div className="nectarpurecase-study-wrapper">
              <div className="nectarpurecase-study-points">GRAPHIC</div>
              <div className="nectarpurecase-study-points">BRAND IDENTITY</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <iframe
          width="1522"
          height="855"
          src="https://www.youtube.com/embed/s-PQhgPFPjE"
          title="Nectarpure - 3D Product Cinematic Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container nectarpure-second">
        <div className="row">
          <div className="col-12 col-lg-7 col-md-12">
            <h2 className="nectarpure-h2">Objective</h2>
            <p className="nectarpure-p">
              Our primary objective was to create a distinctive package design
              to help NectarPure FusionMax Whey Protein stand out in the market.
              We aimed to create a package design that looked superior and
              classy and established NectarPure as a premium product meant for
              customers seeking better absorption, digestion, and immunity from
              protein consumption. In addition, we intended to position it as a
              lifestyle protein brand.
            </p>
          </div>
          <div className="col-12 col-lg-5 col-md-12 nectarpurecase-study">
            <div className="nectarpurecase-study-wrapper">
              <div className="nectarpurecase-study-points">Logo Design</div>
              <div className="nectarpurecase-study-points">Label Design</div>
              <div className="nectarpurecase-study-points">
                Packaging Design
              </div>
            </div>
            <div className="nectarpurecase-study-wrapper1">
              <a
                href="https://www.nectarpure.in/"
                target="_blank"
                className="nectarpure-link"
              >
                https://www.nectarpure.in/
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Container */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 nectarpure-sticky">
            <img
              src={imageUrl+"34ebjrhbkr.webp"}
              alt=""
              className="img-fluid"
            />
            <div className="nectarpure-buttons d-flex flex-column align-items-start">
              <a href="#problem-statement" className="nectarpure-button1">
                Problem Statement
              </a>
              <a href="#packaging-design" className="nectarpure-button1">
                Packaging Design
              </a>
              <a href="#new-identity" className="nectarpure-button1">
                A New Identity
              </a>
            </div>
          </div>

          <div className="col-md-8 col-lg-8">
            <div className="row problem-statement" id="problem-statement">
              <div>
                <h2 className="problem-statement-h3">Problem Statement</h2>
                <p className="problem-para">
                  NectarPure wanted to create a niche space for itself in the
                  protein market with its FusionMax Whey Protein. Enhanced with
                  clinically studied BC30™ probiotics, NectarPure FusionMax Whey
                  Protein is meant to enhance protein digestion and gut health,
                  thereby eliminating uncomfortable digestion issues and
                  speeding up muscle repair.
                  <br />
                  NectarPure wanted to launch the product as a premium lifestyle
                  protein instead of a regular gym protein. The challenge it
                  faced was to establish its new product in the market amidst
                  other brands that are backed by aggressive marketing. Our
                  challenge, therefore, was to create a brand design that drew
                  attention from the target customers and established NectarPure
                  as a premium whey protein brand.
                </p>
                <div className="row nectarpure-problem-img">
                  <div className="col-md-7 col-lg-7">
                    <img
                      src={imageUrl+"wbehgdvwe.webp"}
                      alt=""
                      className="img-fluid nectarpureproblem-img1"
                    />
                  </div>
                  <div className="col-md-5 col-lg-5">
                    <img
                     src={imageUrl+"nectarpure 1.webp"}
                      alt=""
                      className="img-fluid nectarpureproblem-img2 mb-lg-3 mb-md-3"
                    />
                    <img
                      src={imageUrl+"nectarpure 2.webp"}
                      alt=""
                      className="img-fluid nectarpureproblem-img2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row packaging-design" id="packaging-design">
              <div>
                <h2 className="problem-statement-h3">Packaging Design</h2>
                <p className="problem-para">
                  With packaging design, we choose design elements aimed at the
                  premium segment. In contrast to most other protein brands that
                  primarily go for black or dark shades, we chose a white box
                  and a clean label design to serve as a differentiating factor
                  and simultaneously evoke a sense of high-quality product in
                  the market. With our minimalistic design, we ensured that the
                  product’s USP and health benefits take the centre stage.
                </p>
                <img
                  src={imageUrl+"nectarpure 5.webp"}
                  alt=""
                  className="img-fluid packaging-design-img"
                />
              </div>
            </div>

            <div className="row new-identity" id="new-identity">
              <div>
                <h2 className="problem-statement-h3">A New Identity</h2>
                <p className="problem-para">
                  With the logo, we yet again focused on minimalistic features.
                  The logo is a simple rectangular shape with the brand name
                  within it. It is a combination of two colours (white and blue)
                  and two fonts (TT Wellingtons & Corbert) that highlight both
                  words in the brand name, each in its own distinctive way.
                </p>
                <div className="row nectarpure-problem-img">
                  <div className="col-md-5 col-lg-5">
                    <img
                      src={imageUrl+"Untitled-2.webp"}
                      alt=""
                      className="img-fluid nectarpureproblem-img1 mb-3 mb-lg-0 mb-md-0"
                    />{" "}
                  </div>
                  <div className="col-md-7 col-lg-7">
                    <img
                      src={imageUrl+"Frame-427324120.webp"}
                      alt=""
                      className="img-fluid nectarpureproblem-img1"
                    />
                  </div>
                </div>
                <div className="row px-4 py-2">
                  <img
                    src={imageUrl+"Group-427321841-2048x807.webp"}
                    alt=""
                    className="img-fluid nectarpureproblem-img1 mb-3"
                  />
                  <img
                    src={imageUrl+"Frame-427324252-2048x808.webp"}
                    alt=""
                    className="img-fluid nectarpureproblem-img1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <img
          src={imageUrl+"nectarpure 6.webp"}
          alt=""
          className="img-fluid w-100"
        />
        <img
          src={imageUrl+"nectarpure 3.webp"}
          alt=""
          className="img-fluid w-100"
        />
        <img
         src={imageUrl+"nectarpure 7.webp"}
          alt=""
          className="img-fluid w-100"
        />
      </div>
    </div>
  );
}

export default page;
