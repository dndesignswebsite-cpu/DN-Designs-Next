import React from 'react'
import "./contact.css"
import ContactPageForm from '@/Components/ContactPageForm/ContactPageForm'


// meta tags
export const metadata = {
  title: "Contact Us | DN Designs",
  description: "We build brands that inspire confidence and drive profit",
  openGraph: {
    title: "Contact Us | DN Designs",
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
    title: "Contact Us | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    images: [
      "https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"
    ],
  },
};

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
