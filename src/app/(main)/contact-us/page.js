export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import "./contact.css";
// import ContactPageForm from "@/Components/ContactPageForm/ContactPageForm";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import ContactPageForm from "@/Components/ContactPageFormV1/ContactPageForm";

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

    {/* hero */}
      <section className="contact-hero">
      <div className="container">
      <div className="contact-hero-content-div">
        <h1 className="contact-hero-head">Ready to Build Your Next Big Brand? </h1>
        <p className="contact-hero-para-desc">Drop us an email, give us a quick call or simply visit us at our office. We’d love to hear from you and explore how we can build something great together.</p>
        </div>

        <div className="row">

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
            <div className="contact-info-col-div">
              <div className="contact-info-col-icon-div">
                <img src="https://dndesigns.co.in/uploads/pages/newdncontacvtnewemailshewbdshvety2ewvd.svg" className="img-fluid contact-info-col-icon-div-icon"></img>
              </div>
              <div className="contact-info-col-text-div">
                <p className="contact-info-col-text-div-label">Email</p>
                <p className="contact-info-col-text-div-para-desc"><a href="mailto:info@dndesigns.co.in">info@dndesigns.co.in</a></p>
              </div>
            </div>
          </div>

           <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
            <div className="contact-info-col-div">
              <div className="contact-info-col-icon-div">
                <img src="https://dndesigns.co.in/uploads/pages/dnnewweadsjbjbhvdhxsvhgd.svg" className="img-fluid contact-info-col-icon-div-icon"></img>
              </div>
              <div className="contact-info-col-text-div">
                <p className="contact-info-col-text-div-label">Mobile Number</p>
                <p className="contact-info-col-text-div-para-desc contact-info-col-text-div-para-desc-number"><a href="tel:+91 8683911100">+91 8683911100</a>, <a href="tel:+91 7206605872">+91 7206605872</a></p>
              </div>
            </div>
          </div>

           <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
            <div className="contact-info-col-div">
              <div className="contact-info-col-icon-div">
                <img src="https://dndesigns.co.in/uploads/pages/newdncontactvwebashdknwawdj.svg" className="img-fluid contact-info-col-icon-div-icon"></img>
              </div>
              <div className="contact-info-col-text-div">
                <p className="contact-info-col-text-div-label">Address</p>
                <p className="contact-info-col-text-div-para-desc">C-40, Second Floor, Block C, Sector 58, Noida, Uttar Pradesh, 201301</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </section>


      {/* let’s get in touch with us */}
      <section className="lets-get-touch-section">
        <div className="container">
          <div className="lets-get-touch-section-content">
            <h2 className="lets-get-touch-section-content-head">Let’s Build Something Meaningful </h2>
            <p className="lets-get-touch-section-content-para-desc">We’re based in Sector 58, Noida. If you’re around Delhi NCR, come meet us and let’s talk about your brand over a cup of coffee. Together, let’s turn your ideas and vision into a clear, compelling brand that looks distinct, feels relevant, and stays memorable.</p>
          </div>
        </div>
      </section>

      {/* <ContactPageForm /> */}
      <ContactPageForm/>
      
    </div>
  );
}

export default page;
