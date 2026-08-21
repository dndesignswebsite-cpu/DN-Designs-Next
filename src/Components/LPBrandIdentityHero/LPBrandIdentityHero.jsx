import React from 'react'
import "./LPBrandIdentityHero.css"
import LPForm from '../LPBrandIdentityNewForm/LPForm'


function LPBrandIdentityHero() {
  return (
    <div>
     <div className='brand-identity-hero-section-new'>
        <div className='container'>

            <div className='row brand-identity-hero-head-row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div className='brand-identity-hero-head-col'>
                <h1 className='brand-identity-hero-head-col-heading'>A Full-Stack <span className='brand-identity-hero-head-col-heading-span'>Branding</span> Agency - Building <span className='brand-identity-hero-head-col-heading-span'>Brands</span> That Don't Just</h1>
                </div>
                </div>

                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div className='brand-identity-hero-head-col'>
                <p className='brand-identity-hero-head-col-para'>We're a full-service branding agency building brand strategy, communication and web design for FMCG, pharma, healthcare and consumer brands. Collaborate with us to build a brand that stands out, inspires confidence and drives growth.</p>
                </div>
                </div>
            </div>

            <div className='row brand-identity-new-hero-form-row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-8 mt-4'>
                <div className='brand-identity-new-hero-form-col-left'>
                  <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                      <img src="https://cdn.shopify.com/s/files/1/0979/8615/0767/files/1.webp?v=1787209469" className='img-fluid brand-identity-hero-img'></img>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 brand-identity-new-hero-form-col-left-two-img-div'>
                      <img src="https://cdn.shopify.com/s/files/1/0979/8615/0767/files/hjweghj_1.webp?v=1787210424" className='img-fluid brand-identity-hero-img'></img>
                       <img src="https://cdn.shopify.com/s/files/1/0979/8615/0767/files/hjweghj_1.webp?v=1787210424" className='img-fluid brand-identity-hero-img'></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4' id='enquiry-form'>
             <LPForm/>
              </div>
            </div>

        </div>
     </div>
    </div>
  )
}

export default LPBrandIdentityHero
