export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./contact.css";
import ContactPageForm from "@/Components/ContactPageForm/ContactPageForm";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("contact-us", null, false);
  } catch (error) {
    return {
      title: "Contact Us",
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
    pageData = await getPageById("contact-us", null, true);
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
          key={`schema-page-${pageData._id || "contact-us"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      <section className="contact-hero">
        <div className="container">
          <div className="contact-h1">
            <h1>PARTNER WITH US</h1>
          </div>
          <div className="contact-para">
            <p>
              We take pride in everything we achieve on behalf of our clients.
              Making it Wonderful is easy, making it correct is hard
            </p>
          </div>
        </div>
      </section>

      <ContactPageForm />
    </div>
  );
}

export default page;
