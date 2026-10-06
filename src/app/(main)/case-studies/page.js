export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from 'react'
import "./dnplaybook.css"
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb'
import Form from '@/Components/Form/Form'
import Link from 'next/link';


import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";


// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("case-studies", null, false);
  } catch (error) {
    return {
      title: "Case Studies",
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
            pageData = await getPageById("case-studies", null, true);
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
      

    const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "A strong brand doesn’t happen by accident. It’s built with intention. And that’s exactly what we do at DN Designs. We combine research, strategy and creativity to craft brands that get noticed, build trust and earn profits. You’ve already seen our work. Now let’s talk about your vision. Let’s see how we can turn your idea from paper into a brand that’s ready to compete, connect and grow. Contact us today!";
  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "case-studies"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


    <Breadcrumb/>

    {/* dn-playbook-parent-hero */}
    <section className='dn-playbook-parent-hero'>
      <div className='container'>
         <div className='dn-playbook-parent-hero-container'>
            <h1 className='dn-playbook-parent-hero-head'>Explore the Brands We’ve Built</h1>
            <p className='dn-playbook-parent-hero-para-desc'>Don’t just take our word for it. Explore our case studies to see how we’ve built brands from the ground up. Take a closer look at the challenges we tackled and understand how our strategy, design thinking and execution came together to shape each brand.</p>
         </div>
      </div>
    </section>

    {/* parent page blocks section */}
    <section className='parent-page-blocks-section'>
        <div className='container'>
            <div className='parent-page-blocks-container'>
                
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    <Link href="/case-studies/1am"  className="parent-page-blocks-col-link">
                        <div className='parent-page-blocks-col-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/pranet-page-one-am.jpeg" className='img-fluid parent-page-blocks-col-img'></img>
                            <h2 className='parent-page-blocks-col-head'>1 AM</h2>
                            <p className='parent-page-blocks-col-para'>Built for an audience that comes alive when the rest of the world sleeps.</p>
                        </div>
                        </Link>
                    </div>

                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    <Link href="/case-studies/enlite"  className="parent-page-blocks-col-link">
                        <div className='parent-page-blocks-col-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/parent-page-enlite.jpeg" className='img-fluid parent-page-blocks-col-img'></img>
                            <h2 className='parent-page-blocks-col-head'>Enlite</h2>
                            <p className='parent-page-blocks-col-para'>Designing a brand with a personality that feels vibrant yet calming.</p>
                        </div>
                        </Link>
                    </div>
                </div>


                <div className='row parant-page-row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    <Link href="/case-studies/letssupp"  className="parent-page-blocks-col-link">
                        <div className='parent-page-blocks-col-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/parent-page-letssupp.jpeg" className='img-fluid parent-page-blocks-col-img'></img>
                            <h2 className='parent-page-blocks-col-head'>Let’s Supp  </h2>
                            <p className='parent-page-blocks-col-para'>A brand built to inspire trust and turn wellness into a simple, joyful ritual. </p>
                        </div>
                        </Link>
                    </div>

                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    <Link href="/case-studies/nectarpure"  className="parent-page-blocks-col-link">
                        <div className='parent-page-blocks-col-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/parent-page-nectarpure.jpeg" className='img-fluid parent-page-blocks-col-img'></img>
                            <h2 className='parent-page-blocks-col-head'>Nectarpure</h2>
                            <p className='parent-page-blocks-col-para'>Crafting a protein brand that becomes a lifestyle choice, beyond the gym. </p>
                        </div>
                        </Link>
                    </div>
                </div>


                    <div className='row parant-page-row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    <Link href="/case-studies/wlues"  className="parent-page-blocks-col-link">
                        <div className='parent-page-blocks-col-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/parent-page-wlues.jpeg" className='img-fluid parent-page-blocks-col-img'></img>
                            <h2 className='parent-page-blocks-col-head'>Wlue’s</h2>
                            <p className='parent-page-blocks-col-para'>Transforming a traditional snack into a bold, playful Gen Z brand.</p>
                        </div>
                        </Link>
                    </div>

                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    <Link href="/case-studies/grincare"  className="parent-page-blocks-col-link">
                        <div className='parent-page-blocks-col-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/parent-page-grincare.jpeg" className='img-fluid parent-page-blocks-col-img'></img>
                            <h2 className='parent-page-blocks-col-head'>Grincare</h2>
                            <p className='parent-page-blocks-col-para'>Creating a digital presence for an oral care brand to build recognition and trust. </p>
                        </div>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    </section>


    {/* form */}
    <Form FormHead={FormHead} FormPara={FormPara}  />

    </div>
  )
}

export default page
