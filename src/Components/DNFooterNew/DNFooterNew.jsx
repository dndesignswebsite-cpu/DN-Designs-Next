import React from 'react'
import "./DNFooterNew.css"
import Link from 'next/link'

function DNFooterNew() {
  return (
    <div>
      <section className='DNFooterNewSection'>
        <div className='container'>
            <div className='DNFooterNew-head-div'>
                <p className='DNFooterNew-head'>Your Brand. Our Expertise.
                    Let’s Build Something Worth Noticing.</p>
                <p className='DNFooterNew-para DNFooterNew-para-mail'><a href="mailto:info@dndesigns.co.in">info@dndesigns.co.in</a></p>
            </div>


            <div className='row DNFooterNew-footer-list'>

              <div className='col-12 col-sm-12 col-md-6 col-lg-3 DNFooterNew-footer-list-div mt-4 order-1 order-md-1'>
              <p className='DNFooterNew-footer-list-label'>Quick Links</p>
              <ul className='DNFooterNew-footer-list-item-div'>
                <li className='DNFooterNew-footer-list-item'><Link href="/">Home</Link></li>

                <li className='DNFooterNew-footer-list-item'><Link href="/about-us">About Us</Link></li>

                <li className='DNFooterNew-footer-list-item'><Link href="/services">Services</Link></li>

                <li className='DNFooterNew-footer-list-item'><Link href="/contact-us">Contact Us</Link></li>

                <li className='DNFooterNew-footer-list-item'><Link href="/blog">Blog</Link></li>
              </ul>
              </div>

              <div className='col-12 col-sm-12 col-md-6 col-lg-3 DNFooterNew-footer-list-div mt-4 order-2 order-md-2'>
              <p className='DNFooterNew-footer-list-label'>Case Studies</p>
              <ul className='DNFooterNew-footer-list-item-div'>
                <li className='DNFooterNew-footer-list-item'><Link href="/1am-case-study">1 AM</Link></li>

               <li className='DNFooterNew-footer-list-item'><Link href="/letssupp-case-study">Let's Supp</Link></li>

                <li className='DNFooterNew-footer-list-item'><Link href="/enlite-case-study">Enlite</Link></li>
              </ul>
              </div>

              

              <div className='col-12 col-sm-12 col-md-6 col-lg-3 DNFooterNew-footer-list-div mt-4 order-4 order-md-3'>
              <p className='DNFooterNew-footer-list-label'>Social</p>
              <ul className='DNFooterNew-footer-list-item-div'>
                <div className='social-icon-div'>
              <a  href="https://www.instagram.com/dn_designs_india/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram">
              <img src="https://dndesigns.co.in/uploads/pages/neinstabahudtvhasdwi236.svg" className='footer-social-icons'></img>
              </a>

              <a  href="https://www.behance.net/dndesignss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance">
              <img src="https://dndesigns.co.in/uploads/pages/NEWbehancefooterimagesvgformat.svg" className='footer-social-icons'></img>
              </a>

                  <a href="https://www.linkedin.com/company/dn-designs-india"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin">
              <img src="https://dndesigns.co.in/uploads/pages/newlinkindinefooetrsvgformat.svg" className='footer-social-icons'>
              </img>
              </a>
                 
                </div>
              </ul>
              </div>

              <div className='col-12 col-sm-12 col-md-6 col-lg-3 DNFooterNew-footer-list-div mt-4 order-3 order-md-4'>
              <p className='DNFooterNew-footer-list-label'>Contact Us</p>
              <ul className='DNFooterNew-footer-list-item-div'>
                 <li className='DNFooterNew-footer-list-item'><a href="tel:+91 8683911100"> +91 868 391 1100 </a></li>

                 <li className='DNFooterNew-footer-list-item'> <a href="tel:+91 7206605872"> +91 720 660 5872 </a></li>
                  
                  <li className='DNFooterNew-footer-list-item web-designing-services-in-india-address'>
                   <a
                  href="https://www.google.com/maps/place/DN+Designs/@28.6026697,77.3518461,17z/data=!3m1!4b1!4m6!3m5!1s0x390e656d7b05555d:0xf4c59d6befa39e13!8m2!3d28.602665!4d77.354421!16s%2Fg%2F11sm_vf71p?shorturl=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                <p className="mb-0">
                  C-40, Second Floor, Block C, Sector 58, Noida,
                  <br />
                  Uttar Pradesh 201301
                </p>
                </a></li>
              </ul>
              </div>

             
              
            </div>

        </div>


        <div className='footer-dn-logo-div'>
          <img src="https://dndesigns.co.in/uploads/avatars/dnnewlogoGroup37152.svg" className='img-fluid footer-dn-logo'></img>
        </div>
      </section>
    </div>
  )
}

export default DNFooterNew
