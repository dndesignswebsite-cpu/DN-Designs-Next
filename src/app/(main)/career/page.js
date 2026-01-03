import React from 'react'
import "./career.css"
import CareerPageTab from '@/Components/CareerPageTabs/CareerPageTab'
import CareerPageForm from '@/Components/CareerPageForm/CareerPageForm';
import { notFound } from "next/navigation";

// meta data 
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
async function getPageData() {
  const res = await fetch(`${BASE_URL}/api/pages/about-us`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata() {
  const response = await getPageData();
  console.log(response)
  if (!response?.success) {
    return {
      title: "About Us",
      robots: "noindex, nofollow",
    };
  }

  const seo = response.data;

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
        ? seo.openGraph.images.map(img => ({
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
        ? seo.twitter.images.map(img => img.url)
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
      {/* career hero banner */}
      <section className='career-hero'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 career-hero-col-l'>
                    <h1>Together, Let's Create Something <span className='wow'>WOW….</span></h1>
                    <p>If you’re passionate about design, branding, and marketing, love challenges, and want to make a real and lasting impact, this is your place. Join us, and let’s build something wow as a team!</p>
                </div>
                <div className='col-12 col-md-6 career-hero-col-r'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2024/11/IMAGE.png' className='img-fluid'/>
                </div>
            </div>
        </div>
      </section>

      {/* career tabs */}
      <CareerPageTab/>

      {/* career page form */}
      <CareerPageForm/>
    </div>
  )
}

export default page
