import React from 'react'
import "./career.css"
import CareerPageTab from '@/Components/CareerPageTabs/CareerPageTab'

// meta data 
export const metadata = {
  title: "Career – DN Designs",
  description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
  
  authors: [{ name: "DN Designs Team", url: "https://dn-designs-next.vercel.app/career" }],
  
  alternates: { canonical: "https://dn-designs-next.vercel.app/career" },
  
  robots: { index: true, follow: true, nocache: true },
  
  openGraph: {
    title: "Career – DN Designs",
    description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
    url: "https://dn-designs-next.vercel.app/career",
    siteName: "DN Designs",
    images: [{ 
      url: "https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg", 
      width: 1200, 
      height: 630, 
      alt: "DN Designs Animation Services" 
    }],
    type: "website"
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Animation Services – DN Designs",
    description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"]
  }
};
//meta end here




function page() {
  return (
    <div>
      {/* career hero banner */}
      <section className='career-hero'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 career-hero-col-l'>
                    <h2>Together, Let's Create Something <span className='wow'>WOW….</span></h2>
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
    </div>
  )
}

export default page
