import React from 'react'
import LPHeader from '@/Components/LPPagePackagingHeader/LPHeader'
import "./packaging-design-agency.css"
import LPForm from '@/Components/LPForm/LPForm'
import LPMarque from '@/Components/LPMarque/LPMarque';
import LPWhatWeCanBrandingServices from '@/Components/LPWhatWeCanBrandingServices/LPWhatWeCanBrandingServices';

function page() {

   // marque images
  const topBrands = [
    {
      image: "https://dndesigns.co.in/uploads/pages/holidayinn_logo.webp",
      alt: "Veskn",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/audi logo.webp",
      alt: "Kafoori",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/PB_Business logo.webp",
      alt: "Luxmi",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/iOrganic-Logo.webp",
      alt: "One Science",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/wlues logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/1am.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/enlite logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/nectarpure (1).webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/smartyum logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/Thames logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/veikk logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/Pureluxe.webp",
      alt: "Legal4Sure",
    },
  ];

  const bottomBrands = [
    {
      image: "https://dndesigns.co.in/uploads/pages/bobalist logo.webp",
      alt: "Veskn",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/wjvaghsdvhesgadcv.webp",
      alt: "Kafoori",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/Bachpan logo.webp",
      alt: "Luxmi",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/qualiteq logo.webp",
      alt: "One Science",
    },
    {
      image: "https://dndesigns.co.in/uploads/pages/rungta logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/logoconstLet's-Supp.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/david logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/Ekos.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/Brrat.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/fluke logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/one science logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/mr-bomzy logo.webp",
      alt: "Legal4Sure",
    },
     {
      image: "https://dndesigns.co.in/uploads/pages/3-sisters-logo-1.webp",
      alt: "Legal4Sure",
    },
  ];

  return (
    <div>

    {/* header */}
    <LPHeader/>

    {/* hero banner */}
    <div className='lppackagingHero'>
   
        <div className="container">
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
            <div className='lppackagingHero-left-col'>
            <div className='lppackagingHero-left-col-upper'>
             <img src="https://dndesigns.co.in/uploads/pages/tapimagestraightimage-113.png" className='img-fluid lpheropackingstraighttape'></img>
    <img src="https://dndesigns.co.in/uploads/pages/tapimagetiltimage-114.png" className='img-fluid lpherotaptiltimg'></img>
    
                <h1 className="hero-head">
                A Full-Service   Branding<span className="hero-head-span"> Agency For Growth, </span>
                 Recognition & Impact
              </h1>
              <p className="hero-para-desc">
               Collaborate with us to build a brand that stands out, inspires confidence, drives loyalty and brings in business profit. We are your trusted partner in your branding journey.
              </p>
            </div>
            <div className='lppackagingHero-left-col-bottom'>
            {/* <div className='popImagesdiv'>
                <img src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp" className='img-fluid pop-up-image'/>
                <img src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp" className='img-fluid pop-up-image'/>
                <img src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp" className='img-fluid pop-up-image'/>
            </div> */}
            {/* <div className="popImagesdiv">
  <img
    src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
    className="img-fluid pop-up-image img1"
  />

  <img
    src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
    className="img-fluid pop-up-image img2"
  />

  <img
    src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
    className="img-fluid pop-up-image img3"
  />

  <img
    src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
    className="img-fluid pop-up-image img4"
  />

  <img
    src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
    className="img-fluid pop-up-image img5"
  />
</div> */}

            
            </div>

            </div>
            </div>

            <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4 packging-design-agency-form'>
            <LPForm/>
            </div>
          </div>  
        </div>
    </div>



     {/* marque */}
                <div className="brands-that-us" id="our-clients">
                  <div className="container brands-that-us-head-div">
                    <h2 className="brands-that-us-head">Trusted By  <span className="brands-that-us-head-span">Visionary Brands</span></h2>
                    <p className="brands-that-us-para">
                      From food & beverage to nutraceuticals, we partner with businesses across industries to create lasting impact.
                    </p>
                  </div>
                </div>
                <div className="marque-div">
                  <LPMarque brands={topBrands} speed={22} />
                </div>
                <div className="marque-div marque-div-2">
                  <LPMarque brands={bottomBrands} reverse speed={22} />
                </div>



                 {/* what we can do brnading services */}
                            <div id='services'>
                            <LPWhatWeCanBrandingServices/>
                            </div>

                





    </div>
  )
}

export default page
