import React from 'react'
import "./contact.css"
import ContactPageForm from '@/Components/ContactPageForm/ContactPageForm'


// meta data 
export const metadata = {
  title: "Contact Us – DN Designs",
  description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
  
  authors: [{ name: "DN Designs Team", url: "https://dn-designs-next.vercel.app/brand-name-suggestion" }],
  
  alternates: { canonical: "https://dn-designs-next.vercel.app/brand-name-suggestion" },
  
  robots: { index: true, follow: true, nocache: true },
  
  openGraph: {
    title: "Brand Name Suggestion – DN Designs",
    description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
    url: "https://dn-designs-next.vercel.app/brand-name-suggestion",
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
      <section className='contact-hero'>
      <div className='container'> 
       <div className='contact-h1'><h1>PARTNER WITH US</h1></div>
      <div className='contact-para'><p>We take pride in everything we achieve on behalf of our clients. Making it Wonderful is easy, making it correct is hard</p></div>
      </div>
      </section>

      <ContactPageForm/>
    </div>

  )
}

export default page
