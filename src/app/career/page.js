import React from 'react'
import "./career.css"
import CareerPageTab from '@/Components/CareerPageTabs/CareerPageTab'

// meta tags
export const metadata = {
  title: "Career | DN Designs",
  description: "We build brands that inspire confidence and drive profit",
  openGraph: {
    title: "Career | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    url: "https://dndesigns.co.in/",
    siteName: "DN Designs",
    images: [
      {
        url: "https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png",
        width: 1200,
        height: 630,
        alt: "DN Designs Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    images: [
      "https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"
    ],
  },
};

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
