import React from 'react'
import LPHeader from '@/Components/LPBrandIdentityHeader/LPHeader'
import "./brand-identity-01.css"
import LPForm from '@/Components/LPForm/LPForm'
import LPFooter from '@/Components/LPFooter/LPFooter';
import LPFAQ from '@/Components/LPFAQ/LPFAQ';
import LPTestimonialSwipper from '@/Components/LPTestimonialSwipper/LPTestimonialSwipper';
import LPMarque from '@/Components/LPMarque/LPMarque';
import OurWorkHomeSection from '@/Components/LPOurWorkNewBrandIdentity/OurWorkHomeSection';
import LPBradingServicesTestimonial from '@/Components/LPBradingServicesTestimonial/LPBradingServicesTestimonial';



function page() {

     // faqs content
   const leftFaqs = [
       {
          question: "What does a branding agency actually do? ",
          answer:
            (<>A creative branding agency builds the entire brand identity, both visual and verbal. This includes logo, packaging design, messaging and the digital experience. It defines how the brand appears and communicates, and how it is perceived by the customers. The goal is to build a brand that people recognise, trust and choose.</>)
        },
        {
          question: "What makes your branding company unique?",
          answer:
            (<>Our branding services are rooted in thorough research and analysis. We hold detailed discussions with you to understand your product and additionally conduct market, audience and competitor research to define a strategic direction. It’s only after these that we get to the actual design part. Also, for us, customer satisfaction is paramount. We work to make our client happy with our work.</>)
        },
        {
          question: "What's included in brand identity design? ",
          answer:
            (<>Brand identity design covers both visual and verbal identity. To elaborate, it covers logo, colour, typography, messaging, taglines, voice, tone, and images. Together, these keep a brand consistent on a shelf, website and social feed alike.</>)
        },
        {
          question: "Why does packaging design matter this much for FMCG brands?  ",
          answer:
            "For most FMCG products, the market competition is intense. Capturing consumers’ attention and inspiring them to make a purchase is a real challenge. This is where an effective packaging design plays a crucial role. It serves as a silent salesperson, communicating the brand identity and product information clearly. It helps build connection and trust with the customers, which eventually leads to sales.",
        },
        {
          question: "What triggers the need for a rebranding agency?  ",
          answer:
            "Rebranding is a strategic reset - new positioning, new visual system, and sometimes a new name. However, before rebranding, it's essential to evaluate your brand, audience, and competitive landscape. A poorly executed rebrand can do more harm than good. A rebranding agency has the expertise in the field. It audits what's still working before touching what isn't.",
        },
        {
          question: "Can one creative agency deliver branding, web design and packaging design services together? ",
          answer:
            "Yes, and it's the stronger route. When branding, packaging design and web design sit under one branding company, the brand stays intact across every format instead of getting diluted through multiple vendors and multiple interpretations of the same brief.",
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
                <h1 className='brand-identity-hero-section-head'>A Full-Stack Branding Agency – Building   <span className='every-pr'>Brands That Don't Just</span> Get Seen. They Get Chosen.</h1>
                <p className='brand-identity-hero-section-para'>We're a full-service branding agency building brand strategy, communication and web design for FMCG, pharma, healthcare and consumer brands. Collaborate with us to build a brand that stands out, inspires confidence and drives growth.  </p>
                </div>



                <div className='brand-identity-hero-section-left-col-bottom'>
                {/* folder div */}
                <div className='folder-parnet-div'>
                {/* folder 1 */}
                <div className='folder-01'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/packagingbackimage.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                  <img src="https://dndesigns.co.in/uploads/pages/nectarpure graphic.webp" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/nectarpure graphic.webp" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder3imagetwo.png" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                  {/* <p className='folder-name-para'>Packaging-design</p> */}
                </div>
                </div>


                {/* folder 2 */}
                <div className='folder-02'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/logodesignbackimage.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                   <img src="https://dndesigns.co.in/uploads/pages/letssuppnewcase11hewjd.webp" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/weigydshvwjd.webp" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                  {/* <p className='folder-name-para'>Logo Design</p> */}
                </div>
                </div>

                {/* folder 3 */}
                <div className='folder-03'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/barndidentity.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder3imageone.png" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hovverfolder2imagetwo.png" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                  {/* <p className='folder-name-para'>Brand Identity</p> */}
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
                  <img src="https://dndesigns.co.in/uploads/pages/packagingbackimage.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                  <img src="https://dndesigns.co.in/uploads/pages/nectarpure graphic.webp" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hoverfolder3imagetwo.png" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                </div>
                </div>


                {/* folder 2 */}
                <div className='folder-02'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/logodesignbackimage.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                 

                  <img src="https://dndesigns.co.in/uploads/pages/letssuppnewcase11hewjd.webp" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/weigydshvwjd.webp" className='img-fluid folder-content-img-two'/>
                  {/* folder layer upper */}
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfolderone.png" className='folder-upper-layer-img img-fluid'/>
                </div>
                </div>

                {/* folder 3 */}
                <div className='folder-03'>
                <div className='folder'>
                  <img src="https://dndesigns.co.in/uploads/pages/barndidentity.png" className='folder-base-layer-img img-fluid'/>
                  <img src="https://dndesigns.co.in/uploads/pages/brandidentityfoldertwo.svg" className='folder-mid-layer-img img-fluid'/>
                  {/* folder images */}
                   <img src="https://dndesigns.co.in/uploads/pages/hoverfolder3imageone.png" className='img-fluid folder-content-img'/>
                  <img src="https://dndesigns.co.in/uploads/pages/hovverfolder2imagetwo.png" className='img-fluid folder-content-img-two'/>
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



    



     {/* our work */}
     <div id='our-work'>
     <OurWorkHomeSection/>
     </div>

     {/* Communication Strategy hover section*/}
     <section className='communication-strategy-hover-section' id="capabilities">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className='communication-strategy-hover-section-left-col'>
            <p className='communication-strategy-label-para'>CAPABILITIES</p>
            <h2 className='communication-strategy-head'>Strategy, Design, and Digital, Built As One System</h2>
          </div>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className='communication-strategy-hover-section-right-col'>
            <p className='communication-strategy-desc-para'>End-to-end branding and marketing solutions for businesses - handled under one roof.</p>
          </div>
          </div>
        </div>

        <div className='row'>
        {/* col 1 */}
        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4 communication-strategy-hover-col-origianl d-flex'>
          <div className='communication-strategy-hover-col'>
            <div className='communication-strategy-hover-col-upper'>
              <div className='communication-strategy-hover-col-upper-head-div'>
                <h2 className='communication-strategy-hover-col-upper-head-div-heading'>Branding</h2>
                <p className='communication-strategy-hover-col-upper-head-div-para'>01</p>
              </div>
              <div className='communication-strategy-hover-col-video-div'>
               <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
              <video
           src="https://dndesigns.co.in/uploads/videos/comunicationbrandidentityvideo.mp4"
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
                Brand design rooted in strategy first. Logo, naming, positioning and packaging design built to hold up among competitors. 
              </p>
              <div className='communication-strategy-hover-col-bottom-btn-div'>
                <span className='communication-strategy-hover-col-bottom-btn'>Brand Identity</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Brand Strategy</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Brand Naming</span>

                <span className='communication-strategy-hover-col-bottom-btn'>Brand Positioning</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Packaging Design</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Rebranding</span>
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
                <h2 className='communication-strategy-hover-col-upper-head-div-heading'>Communication</h2>
                <p className='communication-strategy-hover-col-upper-head-div-para'>02</p>
              </div>
              <div className='communication-strategy-hover-col-video-div'>
               <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
              <video
         src="https://dndesigns.co.in/uploads/videos/brandidentitybrandvideo.mp4"
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
               Brand communication that carries the same strategy across offline and online campaigns. Consistency competitors can't replicate.
              </p>
              <div className='communication-strategy-hover-col-bottom-btn-div'>
                <span className='communication-strategy-hover-col-bottom-btn'>Digital Marketing</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Social Media Marketing</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Influencer Marketing</span>

                <span className='communication-strategy-hover-col-bottom-btn'>Animation</span>
                <span className='communication-strategy-hover-col-bottom-btn'>Photography</span>
                <span className='communication-strategy-hover-col-bottom-btn'> Brand Video Shoot</span>
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
                <h2 className='communication-strategy-hover-col-upper-head-div-heading'>Web Design</h2>
                <p className='communication-strategy-hover-col-upper-head-div-para'>03</p>
              </div>
              <div className='communication-strategy-hover-col-video-div'>
               <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
              <video
          src="https://dndesigns.co.in/uploads/videos/webdesigningbrandidenityvideo.mp4"
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
                Websites built to convert, not just look good. We design digital touchpoints that feel world-class, load fast and turn visitors into leads, not just page views.
              </p>
              <div className='communication-strategy-hover-col-bottom-btn-div'>
                <span className='communication-strategy-hover-col-bottom-btn'>UI/UX</span>
                <span className='communication-strategy-hover-col-bottom-btn'> Web Design</span>
                <span className='communication-strategy-hover-col-bottom-btn'>SEO</span>
              </div>
            </div>
            {/* <img src="https://dndesigns.co.in/uploads/pages/brandidentityhovercircle.svg" className='img-fluid communication-strategy-hover-col-circle-img'/> */}
          </div>
        </div>
        </div>

      </div>
     </section>



      {/* marque div */}
     <div className="marque-div-container" id="our-clients">
        <div className='container marque-div-container-content'>
            <h2 className='marque-div-container-head'>50+</h2>
            <h3 className='marque-div-container-sub-head'>Brands. Every One Built To Be Remembered. Real Growth. Zero Guesswork.</h3>
            <p className='marque-div-container-para'>From early-stage D2C startups to established FMCG names. Here's who trusted us to build their brand.</p>
        </div>
        <div className="marque-div">
                <LPMarque brands={topBrands} speed={22} />
              </div>
              <div className="marque-div marque-div-2">
                <LPMarque brands={bottomBrands} reverse speed={22} />
              </div>
     </div>
 



     {/* what we do categories*/}
     <div className='brand-identity-what-we-do' id="services">
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div className='brand-identity-what-we-do-col-div-left'>
                <p className='brand-identity-what-we-do-col-div-left-para-label'>Sector Expertise</p>
                <h2 className='brand-identity-what-we-do-col-div-left-head'>Industries We Serve</h2>
                </div>
                </div>

                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div className='brand-identity-what-we-do-col-div-right'>
                    <p className='brand-identity-what-we-do-col-div-left-para-desc'>Providing end-to-end solutions to build brands across categories. </p>
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
                            <img src="https://dndesigns.co.in/uploads/pages/fmcgbarnd-identity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>FMCG</span>
                        </div>
                   

                    
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/personalwellnessbrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Personal Wellness</span>
                        </div>
                    </div>
                </div>
                {/* col 2 */}

                <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                    <div className='categories-col'>
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/healthcarebarndsidenoity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Healthcare Brands</span>
                        </div>
                    

                    
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/jwellarybrandidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Jewellery</span>
                        </div>
                    

                    
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/skincarebarndidentity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Skincare </span>
                        </div>
                    </div>
                </div>

                {/* col 3 */}
                <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                    <div className='categories-col'>
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/fashionbrandidenity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Fashion</span>
                        </div>
                   
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/educationbrandideniuty.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Education</span>
                        </div>
                    

                    
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/travelandhospiotialtybrandsidenity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Travel & Hospitality </span>
                        </div>
                    </div>
                </div>

                {/* col 4 */}
                <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                    <div className='categories-col'>
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/technologybrandidenity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Technology</span>
                        </div>
                    

                   
                        <div className='category-div'>
                            <img src="https://dndesigns.co.in/uploads/pages/automobilebrandidenity.svg" className='img-fluid category-div-img'></img>
                            <span className='category-div-para'>Automobile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>

      {/* testimonial */}
      <div  id="testimonials">
      {/* <LPTestimonialSwipper/> */}
      <LPBradingServicesTestimonial/>
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
