import React from 'react'
import "./DNFooterNew.css"

function DNFooterNew() {
  return (
    <div>
      <section className='DNFooterNewSection'>
        <div className='container'>
            <div className='DNFooterNew-head-div'>
                <p className='DNFooterNew-head'>Have a project in mind? We’re ready to collaborate.</p>
                <p className='DNFooterNew-para'>info@dndesigns.com</p>
            </div>


            <div className='row DNFooterNew-footer-list'>
              <div className='col-6 col-sm-6 col-md-6 col-lg-3 DNFooterNew-footer-list-div mt-4'>
              <p className='DNFooterNew-footer-list-label'>Resources</p>
              <ul className='DNFooterNew-footer-list-item-div'>
                <li className='DNFooterNew-footer-list-item'>Home</li>
                <li className='DNFooterNew-footer-list-item'>Blogs</li>
                <li className='DNFooterNew-footer-list-item'>Case Studies</li>
                <li className='DNFooterNew-footer-list-item'>Brand Audits</li>
                <li className='DNFooterNew-footer-list-item'>Contact Us</li>
              </ul>
              </div>

              <div className='col-6 col-sm-6 col-md-6 col-lg-3 DNFooterNew-footer-list-div mt-4'>
              <p className='DNFooterNew-footer-list-label'>Services</p>
              <ul className='DNFooterNew-footer-list-item-div'>
                <li className='DNFooterNew-footer-list-item'>Branding</li>
                <li className='DNFooterNew-footer-list-item'>Web Design</li>
                <li className='DNFooterNew-footer-list-item'>Commiunication Strategy</li>
              </ul>
              </div>

              <div className='col-6 col-sm-6 col-md-6 col-lg-3 DNFooterNew-footer-list-div mt-4'>
              <p className='DNFooterNew-footer-list-label'>Socials</p>
              <ul className='DNFooterNew-footer-list-item-div'>
                <li className='DNFooterNew-footer-list-item'>Instagram</li>
                <li className='DNFooterNew-footer-list-item'>LinkedIn</li>
                <li className='DNFooterNew-footer-list-item'>X</li>
              </ul>
              </div>

              <div className='col-6 col-sm-6 col-md-6 col-lg-3 DNFooterNew-footer-list-div mt-4'>
              <p className='DNFooterNew-footer-list-label'>Policy</p>
              <ul className='DNFooterNew-footer-list-item-div'>
                <li className='DNFooterNew-footer-list-item'>Privacy Policy</li>
                <li className='DNFooterNew-footer-list-item'>Terms and Conditions</li>
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
