import React from 'react'
import "./contact.css"
import ContactPageForm from '@/Components/ContactPageForm/ContactPageForm'

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
