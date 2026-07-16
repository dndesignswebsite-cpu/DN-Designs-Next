import React from 'react'
import LPHeader from '@/Components/LPBrandIdentityHeader/LPHeader'
import "./brand-identity-01.css"
import LPForm from '@/Components/LPForm/LPForm'
import LPFooter from '@/Components/LPFooter/LPFooter';
import LPFAQ from '@/Components/LPFAQ/LPFAQ';
import LPTestimonialSwipper from '@/Components/LPTestimonialSwipper/LPTestimonialSwipper';
import LPMarque from '@/Components/LPMarque/LPMarque';
import OurWorkHomeSection from '@/Components/LPOurWorkNewBrandIdentity/OurWorkHomeSection';



function page() {

     // faqs content
   const leftFaqs = [
       {
          question: "What services does DN Designs offer? ",
          answer:
            (<>As a full-service branding & marketing agency, we offer complete branding solutions for modern businesses. We craft your brand strategy and positioning, and design your identity, packaging and catalogue. In addition, we help boost your brand presence through our digital marketing, photography and animation services.</>)
        },
        {
          question: "How are you different from other branding agencies?",
          answer:
            (<>We don’t focus on the visual aspect alone. Instead, we combine research, strategy and creativity to create brands that impress visually and drive recognition, sales and profits.</>)
        },
        {
          question: "Which industries do you serve? ",
          answer:
            (<>We work across multiple industries, including FMCG, food & beverage, pharmaceuticals, nutraceutical, skincare, jewellery, technology, education, tourism, etc.</>)
        },
        {
          question: "Can you work with clients outside India? ",
          answer:
            "Yes, we are a global branding agency and work with both Indian and international clients.",
        },
        {
          question: "Do you work only with established businesses? ",
          answer:
            "We work with all types of businesses - startups, mid-size and well-established. We customise our branding, design and marketing services to suit their requirements.",
        },
        {
          question: "Do you provide packaging design services? ",
          answer:
            "Yes, we provide packaging design services. Our strategic packaging designs help your products stand out and drive purchase in both physical and digital environments.",
        },
        {
          question: "Does your creative agency provide animation and photography services?",
          answer:
            "Yes, our creative agency offers services like product photography, brand shoots, motion graphics and animated videos. These help brands capture attention, build recognition, and connect with their audience across platforms.",
        },    
      ];

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


    // form section content
  const pageName = "lp/brand-identity";

  return (
    <div>
     <LPHeader/>

     {/* hero sectio  */}
     <section className='brand-identity-hero-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                <div className='brand-identity-hero-section-left-col-upper'>
                <h1 className='brand-identity-hero-section-head'>A Full-Stack Branding Agency – Building Brands That Don't Just Get Seen. <span className='every-pr'>They Get Chosen.</span> </h1>
                <p className='brand-identity-hero-section-para'>We're a full-service branding agency building brand strategy, communication and web design for FMCG, pharma, healthcare and consumer brands. Collaborate with us to build a brand that stands out, inspires confidence and drives growth.</p>
                </div>



                <div className='brand-identity-hero-section-left-col-bottom'>
                {/* folder div */}
                <div className='folder-parnet-div'>
                {/* folder 1 */}
                <div className='folder-01'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderthree.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder1imagetwo.png" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder1imgone.png" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                  <p className='folder-name-para'>Packaging-design</p>
                </div>
                </div>


                {/* folder 2 */}
                <div className='folder-02'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderthree.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder2imageone.png" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hovverfolder2imagetwo.png" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                  <p className='folder-name-para'>Logo Design</p>
                </div>
                </div>

                {/* folder 3 */}
                <div className='folder-03'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderthree.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder3imageone.png" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder3imagetwo.png" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                  <p className='folder-name-para'>Brand Identity</p>
                </div>
                </div>
                </div>
                {/* folder div end*/}
                </div>





                </div>

                <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                <div className='brand-identity-hero-section-right-col'>
                    <LPForm pageName={pageName} />
                </div>
                {/* folder mobile view */}
                <div className='brand-identity-hero-section-left-col-bottom-mobile'>
                {/* folder div */}
                <div className='folder-parnet-div'>
                {/* folder 1 */}
                <div className='folder-01'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderthree.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                 <img src="https://dndesigns.co.in/uploads/pages/hoverfolder1imagetwo.png" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder1imgone.png" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                </div>
                </div>


                {/* folder 2 */}
                <div className='folder-02'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderthree.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder2imageone.png" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hovverfolder2imagetwo.png" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                </div>
                </div>

                {/* folder 3 */}
                <div className='folder-03'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderthree.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                   <img src="https://dndesigns.co.in/uploads/pages/hoverfolder3imageone.png" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder3imagetwo.png" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                </div>
                </div>
                </div>
                {/* folder div end*/}
                </div>
                {/* folder mobile view end */}
                </div>
            </div>
        </div>
     </section>



     {/* marque div */}
     <div className="marque-div-container">
        <div className='container marque-div-container-content'>
            <h2 className='marque-div-container-head'>50+</h2>
            <h3 className='marque-div-container-sub-head'>Brands We've Built</h3>
            <p className='marque-div-container-para'>Our studio is a high-speed factory for legendary first impressions.</p>
        </div>
        <div className="marque-div">
                <LPMarque brands={topBrands} speed={22} />
              </div>
              <div className="marque-div marque-div-2">
                <LPMarque brands={bottomBrands} reverse speed={22} />
              </div>
     </div>



     {/* our work */}
     <OurWorkHomeSection/>

     {/* Communication Strategy hover section*/}
     <section className='communication-strategy-hover-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className='communication-strategy-hover-section-left-col'>
            <p className='communication-strategy-label-para'>What We Do</p>
            <h2 className='communication-strategy-head'>Every Service You Need For  Your Brand</h2>
          </div>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className='communication-strategy-hover-section-right-col'>
            <p className='communication-strategy-desc-para'>End-to-end creative solutions for FMCG, Pharma, Healthcare and Consumer brands.</p>
          </div>
          </div>
        </div>

        <div className='row'>
        {/* col 1 */}
        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4 communication-strategy-hover-col-origianl d-flex'>
          <div className='communication-strategy-hover-col'>
            <div className='communication-strategy-hover-col-upper'>
              <div className='communication-strategy-hover-col-upper-head-div'>
                <h2 className='communication-strategy-hover-col-upper-head-div-heading'>Brand Identity</h2>
                <p className='communication-strategy-hover-col-upper-head-div-para'>01</p>
              </div>
              <div className='communication-strategy-hover-col-video-div'>
               <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
              <video
          src="https://dndesigns.co.in/uploads/videos/Bobalist-hh.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          className="communication-strategy-hover-col-video"
          loop
        />
        </div>
            </div>

            <div className='communication-strategy-hover-col-bottom'>
              <p className='communication-strategy-hover-col-bottom-para-desc'>
                From label to shelf, we craft packaging that stops shoppers, communicates quality, and drives conversions.
              </p>
              <div className='communication-strategy-hover-col-bottom-btn-div'>
                <span className='communication-strategy-hover-col-bottom-btn'>Product Packaging</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Label Design</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Box Packaging</span>

                <span className='communication-strategy-hover-col-bottom-btn'>Print Design</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Packaging Systems</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Dieline & Artwork</span>
              </div>
            </div>
            {/* <img src="https://dndesigns.co.in/uploads/pages/brandidentityhovercircle.svg" className='img-fluid communication-strategy-hover-col-circle-img'/> */}
          </div>
        </div>
        {/* col 2 */}
        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4 communication-strategy-hover-col-origianl d-flex'>
          <div className='communication-strategy-hover-col'>
            <div className='communication-strategy-hover-col-upper'>
              <div className='communication-strategy-hover-col-upper-head-div'>
                <h2 className='communication-strategy-hover-col-upper-head-div-heading'>Brand Identity</h2>
                <p className='communication-strategy-hover-col-upper-head-div-para'>01</p>
              </div>
              <div className='communication-strategy-hover-col-video-div'>
               <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
              <video
          src="https://dndesigns.co.in/uploads/videos/Bobalist-hh.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          className="communication-strategy-hover-col-video"
          loop
        />
        </div>
            </div>

            <div className='communication-strategy-hover-col-bottom'>
              <p className='communication-strategy-hover-col-bottom-para-desc'>
                From label to shelf, we craft packaging that stops shoppers, communicates quality, and drives conversions.
              </p>
              <div className='communication-strategy-hover-col-bottom-btn-div'>
                <span className='communication-strategy-hover-col-bottom-btn'>Product Packaging</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Label Design</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Box Packaging</span>

                <span className='communication-strategy-hover-col-bottom-btn'>Print Design</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Packaging Systems</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Dieline & Artwork</span>
              </div>
            </div>
            {/* <img src="https://dndesigns.co.in/uploads/pages/brandidentityhovercircle.svg" className='img-fluid communication-strategy-hover-col-circle-img'/> */}
          </div>
        </div>

        {/* col 3 */}
        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4 communication-strategy-hover-col-origianl d-flex'>
          <div className='communication-strategy-hover-col'>
            <div className='communication-strategy-hover-col-upper'>
              <div className='communication-strategy-hover-col-upper-head-div'>
                <h2 className='communication-strategy-hover-col-upper-head-div-heading'>Brand Identity</h2>
                <p className='communication-strategy-hover-col-upper-head-div-para'>01</p>
              </div>
              <div className='communication-strategy-hover-col-video-div'>
               <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
              <video
          src="https://dndesigns.co.in/uploads/videos/Bobalist-hh.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          className="communication-strategy-hover-col-video"
          loop
        />
        </div>
            </div>

            <div className='communication-strategy-hover-col-bottom'>
              <p className='communication-strategy-hover-col-bottom-para-desc'>
                From 
              </p>
              <div className='communication-strategy-hover-col-bottom-btn-div'>
                <span className='communication-strategy-hover-col-bottom-btn'>Product Packaging</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Label Design</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Box Packaging</span>

                <span className='communication-strategy-hover-col-bottom-btn'>Print Design</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Packaging Systems</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Dieline & Artwork</span>
              </div>
            </div>
            {/* <img src="https://dndesigns.co.in/uploads/pages/brandidentityhovercircle.svg" className='img-fluid communication-strategy-hover-col-circle-img'/> */}
          </div>
        </div>
        </div>

      </div>
     </section>
 



     {/* what we do categories*/}
     <div className='brand-identity-what-we-do'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div className='brand-identity-what-we-do-col-div-left'>
                <p className='brand-identity-what-we-do-col-div-left-para-label'>What We Do</p>
                <h2 className='brand-identity-what-we-do-col-div-left-head'>Industries that we have catered to</h2>
                </div>
                </div>

                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div className='brand-identity-what-we-do-col-div-right'>
                    <p className='brand-identity-what-we-do-col-div-left-para-desc'>End-to-end creative solutions for FMCG, Pharma, Healthcare and Consumer brands.</p>
                </div>
                </div>
            </div>


            <div className='row categories-row-div'>
            {/* col 1 */}
                <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                    <div className='categories-col'>
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                    

                    
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                   

                    
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                    </div>
                </div>
                {/* col 2 */}

                <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                    <div className='categories-col'>
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                    

                    
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                    

                    
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                    </div>
                </div>

                {/* col 3 */}
                <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                    <div className='categories-col'>
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                   
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                    

                    
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                    </div>
                </div>

                {/* col 4 */}
                <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                    <div className='categories-col'>
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                    

                   
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/foodandberageslpbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Food & Beverage</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>

      {/* testimonial */}
      <div  id="testimonials">
      <LPTestimonialSwipper/>
      </div>
      
      {/* LPFAQ */}
      <div id="faq">
      <LPFAQ  leftFaqs={leftFaqs}/>
      </div>

      {/* footer */}
      <LPFooter />


    </div>
  )
}

export default page
