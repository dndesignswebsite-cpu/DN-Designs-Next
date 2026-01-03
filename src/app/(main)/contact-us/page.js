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
    seo = await getPageById("about-us", null, false);
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
  // const response = await getPageData();
  // const pageData = response?.data;

  // if (!pageData) {
  //   notFound();
  // }

  return (
    <div>
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
