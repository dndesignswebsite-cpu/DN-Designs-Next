import React from 'react'
import "./HomePageHeroNew.css"

function HomePageHeroNew() {
  return (
    <div>
    <section className='home-page-hero-section'>
      <div className='container'>
      <div className='col-12 col-sm-12 col-md-12 col-lg-5 home-page-hero-content-div'>
        <h1 className='home-page-hero-content-heading'>We Build Brands That Inspire Confidence and Drive Profit</h1>
        <p className='home-page-hero-content-para'>Let’s collaborate and craft a truly standout brand for you.</p>
        <div className='home-page-hero-btn-div'>
        <button className='talk-to-us-hero-btn'>Talk to Us</button>
        <button className='explore-our-work-hero-btn'>Explore Our Work</button>
        </div>
        </div>
      </div>


    <div className='hero-banner-images-for-abs-div'>
    <div className='hero-banner-images'>
    <img src="https://dndesigns.co.in/uploads/images/homepageladderredleftimahebhebd.svg" className="hero-red-ladder-img img-fluid"></img>
    <div className='ladder-image-home-page-hero-div'>
      <img src="https://dndesigns.co.in/uploads/images/homepagenewbannenrimagebackgsvg.svg" className='ladder-image-home-page-hero img-fluid'></img>
</div>
     <div className='girl-image-home-page-hero-div'>
      <img src="https://dndesigns.co.in/uploads/images/hj 4.png" className='girl-image-home-page-hero img-fluid'></img>
      </div>
      </div>
      </div>

      </section>



      {/* hero banner second section */}
      <section className='hero-banner-second-section'>
        <div className='hero-banner-second-div'>
        <img src="https://dndesigns.co.in/uploads/images/homepageladderredleftimahebhebd.svg"  className=" img-fluid hero-banner-second-section-img-1"></img>
          <h2 className='hero-banner-second-section-head'>#We Build <br></br><span className='hero-banner-second-section-head-span-1'>BRANDS</span> <br></br><span className='hero-banner-second-section-head-span-2'>THAT</span> <br></br><span className='hero-banner-second-section-head-span-3'>MEans business</span> </h2>

           <img src="https://dndesigns.co.in/uploads/images/hoempageheronewgrayladderimage.svg"  className=" img-fluid hero-banner-second-section-img-3"></img>

           <img src="https://dndesigns.co.in/uploads/images/redladderimagenewherobannerhimepage.svg"  className=" img-fluid hero-banner-second-section-img-2"></img>

        </div>
      </section>
    </div>
  )
}

export default HomePageHeroNew
