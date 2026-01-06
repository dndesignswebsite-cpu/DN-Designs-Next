export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./career.css";
import CareerPageTab from "@/Components/CareerPageTabs/CareerPageTab";
import CareerPageForm from "@/Components/CareerPageForm/CareerPageForm";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("career", null, false);
  } catch (error) {
    return {
      title: "Career",
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
//meta end here

async function page() {
  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("career", null, true);
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
          key={`schema-page-${pageData._id || "career"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

      {/* career hero banner */}
      <section className="career-hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 career-hero-col-l">
              <h1>
                Together, Let's Create Something{" "}
                <span className="wow">WOW….</span>
              </h1>
              <p>
                If you’re passionate about design, branding, and marketing, love
                challenges, and want to make a real and lasting impact, this is
                your place. Join us, and let’s build something wow as a team!
              </p>
            </div>
            <div className="col-12 col-md-6 career-hero-col-r">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/11/IMAGE.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* career tabs */}
      <CareerPageTab />

      {/* career page form */}
      <CareerPageForm />
    </div>
  );
}

export default page;
