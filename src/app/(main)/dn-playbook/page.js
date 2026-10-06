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
    seo = await getPageById("dn-playbook", null, false);
  } catch (error) {
    return {
      title: "DN Playbook",
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
        pageData = await getPageById("dn-playbook", null, true);
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
    


    const FormHead = "Let’s Discuss Over A Cup Of Coffee";
  const FormPara =
    "Now, that you have seen how we look at brands and analyse them, you know that we can bring that thinking to your brand too. So, let’s meet up and discuss how to make your brand the next big story. Whether you need branding from scratch or want to give a new identity and direction to your existing brand, we can help with both. Let’s build something worth talking about.";
  return (
    <div>

      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "dn-playbook"}`}
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
            <h1 className='dn-playbook-parent-hero-head'>Brands, Unpacked. Opportunities, Uncovered</h1>
            <p className='dn-playbook-parent-hero-para-desc'>This is a space where we take a closer look at the brands that are shaping their categories. We dive deeper to understand their strategy and choices; essentially, what makes them the brands they are today. We also identify the gaps and uncover opportunities worth pursuing. Explore them for an unfiltered look at brands. </p>
         </div>
      </div>
    </section>

    {/* parent page blocks section */}
    <section className='parent-page-blocks-section'>
        <div className='container'>
            <div className='parent-page-blocks-container'>
                
                <div className='row'>


                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    <Link href="/dn-playbook/gully-labs"  className="parent-page-blocks-col-link">
                        <div className='parent-page-blocks-col-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/parent-page-gully-labs.jpg.jpeg" className='img-fluid parent-page-blocks-col-img'></img>
                            <h2 className='parent-page-blocks-col-head'>Gully Labs</h2>
                            <p className='parent-page-blocks-col-para'>Exploring a handcrafted sneaker brand rooted in Indian street fashion and culture. </p>
                        </div>
                        </Link>
                    </div>

                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    {/* <Link href="/dn-playbook/gully-labs"  className="parent-page-blocks-col-link"> */}
                        <div className='parent-page-blocks-col-div'>
                         <img src="https://dndesigns.co.in/uploads/pages/dnplaybookparentsnitch.jpg.jpeg" className='img-fluid parent-page-blocks-col-img'></img>

                           
                            <h2 className='parent-page-blocks-col-head'>Snitch</h2>
                            <p className='parent-page-blocks-col-para'>Unpacking the strategic thinking behind a strong digital-first menswear brand. </p>
                        </div>
                        {/* </Link> */}
                    </div>

                </div>


                 <div className='row parant-page-row'>
                   <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    {/* <Link href="/dn-playbook/gully-labs"  className="parent-page-blocks-col-link"> */}
                        <div className='parent-page-blocks-col-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/dnplaybookparentsyperyou.jpg.jpeg" className='img-fluid parent-page-blocks-col-img'></img>
                            <h2 className='parent-page-blocks-col-head'>Super You </h2>
                            <p className='parent-page-blocks-col-para'>Examining how the brand is bringing protein into the snacking conversation.</p>
                        </div>
                        {/* </Link> */}
                    </div>

                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                    {/* <Link href="/dn-playbook/gully-labs"  className="parent-page-blocks-col-link"> */}
                        <div className='parent-page-blocks-col-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/dnplaybookparentPhool.jpg.jpeg" className='img-fluid parent-page-blocks-col-img'></img>
                            <h2 className='parent-page-blocks-col-head'>Phool Organic</h2>
                            <p className='parent-page-blocks-col-para'>Digging into a brand that’s built on sustainability, purpose and product innovation. </p>
                        </div>
                        {/* </Link> */}
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
