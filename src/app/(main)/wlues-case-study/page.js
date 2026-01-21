export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./wlues-case-study.css";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("wlues-case-study", null, false);
  } catch (error) {
    return {
      title: "Wlues Case Study",
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
    pageData = await getPageById("wlues-case-study", null, true);
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
          key={`schema-page-${pageData._id || "wlues-case-study"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      <div className="container-fluid p-0">
        <video
          src="https://dndesigns.co.in/uploads/videos/wlues01final.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          className="casestudy-video"
        />
      </div>

      <div className="container wlue-winner">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 col-md-6">
            <h2 id="caststudy-heading">Wlue's</h2>
            <p id="casestudy-span">#Onlyforwinners</p>
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <div className="case-study-wrapper">
              <div className="case-study-points">Wlues</div>
              <div className="case-study-points1">Branding</div>
              <div className="case-study-points">Visual Identity</div>
            </div>

            <div className="case-study-wrapper1">
              <div className="case-study-points1">Packaging design</div>
              <div className="case-study-points">Onlyforwinners</div>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src={imageUrl + "wlues1.webp"}
            alt=""
            className="img-fluid mt-5 case-study-img1"
          />
        </div>

        <div className="row align-items-start mt-5">
          <div className="col-lg-6 col-md-6 col-12">
            <h2 id="overview-heading1">Overview</h2>
            <h2 id="overview-heading2">
              From Boring to Bold: Crafting a Fun Snacking Identity
            </h2>
            <div className="overview-wrapper mt-5">
              <div className="overview-points1">Food</div>
              <div className="overview-points">Makhana Brand</div>
              <div className="overview-points1">2025</div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <p id="overview-p">
              Wlue’s is new-age snack brand offering Makhana for the Gen Z
              consumers. It offers 3 flavours - Cheesy Jalapeno, Cream and Onion
              and Peri Peri Makhana.
            </p>
            <h2 id="overview-h2">Problem Statement</h2>
            <p id="overview-para">
              Unlike traditional Makhana brands that leaned into heritage and
              Ayurveda, Wlue’s wanted to position Makhana as a fun, modern snack
              for Gen Z. They had to break stereotypes, educate a new audience,
              and stand out in a crowded snacking market — all while balancing
              clean ingredients with bold, playful branding. The core challenge:
              making an ancient snack feel relevant, exciting, and snackable in
              today’s digital-first world.
            </p>
          </div>
        </div>
      </div>

      <div className="container casestudy-images">
        <div className="row">
          <div className="col-lg-6 col-12 col-md-6 mb-3 mb-lg-0">
            <img
              src={imageUrl + "gsadjgjhsd.webp"}
              alt=""
              className="img-fluid case-study-img8"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <img
              src={imageUrl + "wvehdhjej.webp"}
              alt=""
              className="img-fluid case-study-img9"
            />
          </div>
        </div>

        <div className="row">
          <img
            src={imageUrl + "3ygewudhgew.webp"}
            alt=""
            className="img-fluid case-study-img5"
          />
        </div>

        <div className="row">
          <video
            src="https://dndesigns.co.in/uploads/videos/wlues5.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className="casestudy-video1"
          />
        </div>

        <div className="row pt-5">
          <div className="col-lg-6 col-12 col-md-6">
            <h2 id="approach-heading1">Our Approach</h2>
            <h2 id="approach-heading2">Logo Design</h2>
            <p id="overview-para">
              We designed a retro-inspired superhero logo featuring a bold star,
              symbolising victory and confidence. The design reflects Wlue’s
              bold, playful identity and positions the brand as a snack made for
              winners with standout energy. Together, the packaging and the logo
              created a fun, energetic identity that made healthy snacking feel
              cool, not conventional.
            </p>
          </div>
          <div className="col-lg-6 col-12 col-md-6">
            <video
              src="https://dndesigns.co.in/uploads/videos/wlues6.mp4"
              width="100%"
              autoPlay
              muted
              loop
              playsInline
              className="casestudy-video1"
            />
          </div>
        </div>

        <div className="row g-0">
          <div className="col-lg-6 col-md-6 col-12 px-0">
            <img
              src={imageUrl + "whevdhvhjvh.webp"}
              alt=""
              className="img-fluid case-study-img2 mt-lg-4"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-12 px-0">
            <img
              src={imageUrl + "whgevghsdavcd.webp"}
              alt=""
              className="img-fluid case-study-img3 mt-lg-4"
            />
          </div>
        </div>

        <div className="row">
          <video
            src="https://dndesigns.co.in/uploads/videos/video-1-1.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className="casestudy-video1"
          />
        </div>

        <div className="row pt-lg-5">
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src={imageUrl + "tfewgygvdhgvw.webp"}
              alt=""
              className="img-fluid case-study-img6"
            />
          </div>
          <div className="col-lg-6 col-12 col-md-6">
            <h2 id="approach-heading1">Our Approach</h2>
            <h2 id="approach-heading2">Packaging Design</h2>
            <p id="overview-para">
              To appeal to Gen Z, we created a playful and colourful packaging
              that brings Wlue’s bold personality to life across its three fun
              variants. Each design was built to grab attention on shelves,
              spark curiosity, and turn a simple snack into a statement.
            </p>
          </div>
        </div>
      </div>

      <div className="container casestudy-images">
        <div className="row">
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src={imageUrl + "uyfjhjhjhgvvhj.webp"}
              alt=""
              className="img-fluid case-study-img7"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <img
              src={imageUrl + "rwqtefdgwvh.webp"}
              alt=""
              className="img-fluid case-study-img7"
            />
          </div>
        </div>

        <div className="row">
          <img
            src={imageUrl + "werwhvdshj.webp"}
            alt=""
            className="img-fluid case-study-img"
          />
        </div>

        <div className="row g-0">
          <div className="col-lg-6 col-12 col-md-6 px-0">
            <img
              src={imageUrl + "rwefhdgvhrjdj.webp"}
              alt=""
              className="img-fluid case-study-img2 mt-lg-4"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6 px-0">
            <img
              src={imageUrl + "nwjkebhdn.webp"}
              alt=""
              className="img-fluid case-study-img3 mt-lg-4"
            />
          </div>
        </div>

        <div className="row">
          <img
            src={imageUrl + "mweghgcadsvjg.webp"}
            alt=""
            className="img-fluid case-study-img"
          />
        </div>

        <div className="row g-0">
          <div className="col-lg-6 col-12 col-md-6 px-0">
            <img
              src={imageUrl + "wyegwhdvbnbn.webp"}
              alt=""
              className="img-fluid case-study-img2 mt-lg-4"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6 px-0">
            <img
              src={imageUrl + "yewfdewghe.webp"}
              alt=""
              className="img-fluid case-study-img3 mt-lg-4"
            />
          </div>
        </div>

        <div className="row">
          <img
            src={imageUrl + "tyweffdcewghvh.webp"}
            alt=""
            className="img-fluid case-study-img"
          />
        </div>

        <div className="row mt-lg-4">
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src={imageUrl + "nwejkbhdvvjh.webp"}
              alt=""
              className="img-fluid case-study-img7"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <img
              src={imageUrl + "weigydshvwjd.webp"}
              alt=""
              className="img-fluid case-study-img7"
            />
          </div>
        </div>

        <div className="row">
          <img
            src={imageUrl + "wejhbvdhgvwehd.webp"}
            alt=""
            className="img-fluid case-study-img mt-4 p-2"
          />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="overview-wrapper">
              <div className="case-study-points">Wlues</div>
              <div className="case-study-points1">Branding</div>
              <div className="case-study-points">Visual Identity</div>
            </div>

            <div className="overview-wrapper mt-3">
              <div className="case-study-points1">Packaging design</div>
              <div className="case-study-points">Onlyforwinners</div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 wlue-sign-off">
            <h2 id="caststudy-heading">Wlue's</h2>
            <p id="casestudy-span">#SigningOff</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
