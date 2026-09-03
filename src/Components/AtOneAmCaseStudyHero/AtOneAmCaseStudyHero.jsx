import React from 'react'
import "./AtOneAmCaseStudyHero.css"
import MomentumSection from '../MomentumSection/MomentumSection'

function AtOneAmCaseStudyHero() {
  return (
    <div>
      <section className='at-one-am-hero-section'>
        <div className='container'>
        <div className="container-div">
            <div className='at-one-am-hero-heading-div'>

            <div className='nav-text-parent-div'>
            <div className='nav-text-child-div'>
              <span className='nav-text-parent-span'>BRANDING</span>
              <span className='nav-text-parent-span'>STRATEGY</span>
              <span className='nav-text-parent-span'>IDENTITY</span>
              <span className='nav-text-parent-span'>PACKAGING</span>
            </div>
             
<MomentumSection as="h1" className="hero-heading hero-heading-1" playOnLoad>
  COFFEE FOR THE ONES
</MomentumSection>

</div>
               <img src="https://dndesigns.co.in/uploads/pages/atoneamheroimageone.jpeg" className='img-fluid at-one-am-hero-img at-one-am-hero-img-1'></img>
            </div>

            <div className='at-one-am-hero-heading-div-2'>
            <img src="https://dndesigns.co.in/uploads/pages/atoneamheroimagethree.jpeg"  className='img-fluid at-one-am-hero-img-2'></img>
            <div>
            
<MomentumSection as="h1" className="hero-heading hero-heading-2" playOnLoad>
  WHO CREATE WHEN THE
</MomentumSection>
            <div className='at-one-am-hero-heading-div-2-sub-div'>
            <img src="https://dndesigns.co.in/uploads/pages/atoneamheroimagetwo.jpeg" className='img-fluid at-one-am-hero-img-sub-div'></img>
           
           <div className='nav-text-parent-div-two'>
<MomentumSection as="h1" className="hero-heading hero-heading-3" playOnLoad>
  WORLD GOES QUIET
</MomentumSection>


<div className='nav-text-child-div-two'>
              <span className='nav-text-parent-span'>MARKETING</span>
              <span className='nav-text-parent-span'>SOCIAL</span>
              <span className='nav-text-parent-span'>WEBSITE</span>
            </div>

</div>
            </div>
            </div>
            </div>
</div>
        </div>
      </section>
    </div>
  )
}

export default AtOneAmCaseStudyHero
