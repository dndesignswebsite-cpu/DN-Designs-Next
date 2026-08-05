import React from 'react'
import LPHeader from '@/Components/LPPagePackagingHeader/LPHeader'
import "../packaging-design-agency/packaging-design-agency.css"
import LPForm from '@/Components/LPForm/LPForm'
import LPMarque from '@/Components/LPMarque/LPMarque';
import LPBradingServicesTestimonial from '@/Components/LPBradingServicesTestimonial/LPBradingServicesTestimonial';
import LPFAQ from '@/Components/LPFAQ/LPFAQ';
import LPFooter from '@/Components/LPFooter/LPFooter';
import LPPureluxVideo from '@/Components/OurWorkHomeSection/LPPureLuxVideo';

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


   // faqs content
   const leftFaqs = [
       {
          question: "What makes a good food, beverage or supplement branding?",
          answer:
            (<>A great supplement, food or beverage branding builds instant recognition and long-lasting loyalty through standout design, clear positioning, honest communication, and above all, a distinct emotional identity. It ensures the brand looks and feels consistent across platforms, whether it’s packaging or social media, so that customers can recognise, trust and choose it over competitors. </>)
        },
        {
          question: "Why is professional FMCG packaging design important? ",
          answer:
            (<>Because there’s tough competition out there. To survive and win, beautiful packaging alone is not sufficient. What you need is FMCG branding and packaging design based on research and strategy, so your product stands out and gets chosen. A professional FMCG packaging design agency achieves just that for you.</>)
        },
        {
          question: "What does an FMCG packaging design agency actually do? ",
          answer:
            (<>An FMCG packaging design agency combines research, strategy and creativity to create packaging that expresses the brand, helps it stand out on store shelves, enhances the customer experience and drives purchase decisions. </>)
        },
        {
          question: "Can you help with multiple SKUs or product variants during beverage branding? ",
          answer:
            "Yes, we can craft packaging designs for all your beverage SKUs and product variants. Our design systems help customers identify and differentiate each product while ensuring your overall brand identity and messaging stay consistent.",
        },
        {
          question: "Do you handle wellness and supplement branding specifically?  ",
          answer:
            "Yes, wellness and supplement branding and supplement label design are a large part of our work, alongside food and drinks branding.",
        },
        {
          question: "How many revisions can I get during the beverage branding and packaging design process?",
          answer:
            "Unlimited. We don’t focus on the number of revisions. What’s important to us is your satisfaction. We rework our designs until it is what you really wanted and envisioned.",
        }  
      ];

      // form section content
  const pageName = "lp/packaging-design-agency";


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
                The Global Branding  
<span className="hero-head-span"> Partner for Food, Beverage </span>
                   & Wellness Brands.
              </h1>
              <p className="hero-para-desc">
               Collaborate with us to build a food, beverage or wellness brand that stands out, survives the shelf, and drives real sales. We are your trusted partner in your branding and packaging journey.
              </p>
            </div>
            <div className='lppackagingHero-left-col-bottom'>    
                   {/* <LPPackgingAgencyPopImages/> */}
            </div>

            </div>
            </div>

            <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4 packging-design-agency-form' id='enquiry-form'>
            <LPForm  className="form-section-packging"/>
            </div>
          </div>  
        </div>

        <div className="popImages-div-wrapper">

        <div className='popImages-div'>

        <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHerossh-1.png" className='PopImagessectionimg1 img-fluid'/>

       <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHeroMineral-Water-1.png" className='PopImagessectionimg2 img-fluid'/>

         <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHeroRed--1.png" className='PopImagessectionimg3 img-fluid'/>

         <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHeroOmega-Jar-1.png" className='PopImagessectionimg4 img-fluid'/>

         <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHero1-1285610144.png" className='PopImagessectionimg5 img-fluid'/>

          <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHero-1.png" className='PopImagessectionimg6 img-fluid'/>

           <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHero4-14224225.png" className='PopImagessectionimg7 img-fluid'/>

            <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHeroMAKIO-2.png" className='PopImagessectionimg8 img-fluid'/>

             <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHeromockup-final-cashew-1.png" className='PopImagessectionimg9 img-fluid'/>


        <img src="https://dndesigns.co.in/uploads/pages/compreesedpopimageProteinLPHeroRender_Mockup_1920_1920_2026-01-21-(1)-1.png" className='PopImagessectionimg10 img-fluid'/>

        <img src="https://dndesigns.co.in/uploads/pages/compressed13psd-3.png" className='PopImagessectionimg11 img-fluid'/>

        <img src="https://dndesigns.co.in/uploads/pages/compress12edLichi-1.png" className='PopImagessectionimg12 img-fluid'/>

        <img src="https://dndesigns.co.in/uploads/pages/compress11ed1-1285610148.png" className='PopImagessectionimg13 img-fluid'/>

        </div>
        </div>
    </div>



    {/* what we do section */}

    <section className='what-we-do-section' id="our-work">
      <div className='container'>
        <div className='row what-we-do-section-content-row'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
        <div className=' everything-you-need-head-div'>
          <p className='everything-you-need-para'>Project Showcase</p>
          <h2 className='everything-you-need-head'> Our Branding Journal
</h2>
        </div>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
        <div className=' everything-you-need-desc-div'>
          <p className='everything-you-need-desc'>A look at the branding and design projects we’ve shipped from concept to shelf. Real products, real categories, real results.</p>
          </div>
        </div>
        </div>

        <div className='row-div-what-we-do'>
          <div className='coldiv-what-we-do-left mt-4'>
          <div className='foundation-col'>
            {/* <img src="https://dndesigns.co.in/uploads/pages/lppackgingorgainc.gif" className='img-fluid foundation-col-img'/> */}
            {/* <video src="https://dndesigns.co.in/uploads/videos/enli.mp4" width="100%" autoplay muted loop class="lp-packaging-video"></video> */}
            <video
            src="https://dndesigns.co.in/uploads/videos/enli.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className='lp-packaging-video'
          />
          </div>
          </div>

          <div className='coldiv-what-we-do-right mt-4'>
          <div className='foundation-col'>
           
            {/* <video
            src="https://dndesigns.co.in/uploads/videos/lppackgingvideonewsection.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className='lp-packaging-video'
          /> */}
          <img src="https://dndesigns.co.in/uploads/pages/brandidentityletsupimagelppageghjkl;.jpg.jpeg" className='img-fluid foundation-col-img'/>

          {/* <LPPureluxVideo/> */}
          </div>
          </div>  
        </div>

        <div className='row-div-what-we-do'>
          <div className='coldiv-what-we-do-one mt-4'>
          <div className='foundation-col'>
            <img src="https://dndesigns.co.in/uploads/pages/weasbjhdwebjdnectarpure20graphic-(1).jpg" className='img-fluid foundation-col-img'/>
          </div>
          </div>

          <div className='coldiv-what-we-do-two mt-4'>
          <div className='foundation-col'>
            {/* <img src="https://dndesigns.co.in/uploads/pages/1.webp" className='img-fluid foundation-col-img'/> */}

             <video
            src="https://dndesigns.co.in/uploads/videos/threeSistersVideo.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className='lp-packaging-video'
          />
          </div>
          </div> 

          <div className='coldiv-what-we-do-three mt-4'>
          <div className='foundation-col'>
            <img src="https://dndesigns.co.in/uploads/pages/wesjdkwekjdjjbrrat-(2.jpg" className='img-fluid foundation-col-img'/>
          </div>
          </div>  
        </div>


        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
          <div className='foundation-col'>
            <img src="https://dndesigns.co.in/uploads/pages/lppackgingorgainc.gif" className='img-fluid foundation-col-img'/>
          </div>
          </div>

          <div className='col mt-4'>
          <div className='foundation-col'>
            <img src="https://dndesigns.co.in/uploads/pages/wlues-packhing-lp-pagegrapihc.jpeg" className='img-fluid foundation-col-img'/>

             {/* <video
            src="https://dndesigns.co.in/uploads/videos/threeSistersVideo.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className='lp-packaging-video'
          /> */}
          </div>
          </div> 

          <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
          <div className='foundation-col'>
            {/* <img src="https://dndesigns.co.in/uploads/pages/lppackgingorgainc.gif" className='img-fluid foundation-col-img'/> */}
            
             <video
            src="https://at1am.com/wp-content/uploads/2026/03/IMG_5792_1.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className='lp-packaging-video'
          />
          </div>
          </div>  
        </div>
        
      </div>
    </section>



     {/* marque */}
                <div className="brands-that-us" id="our-clients">
                  <div className="container brands-that-us-head-div">
                    <h2 className="brands-that-us-head">Chosen by<span className="brands-that-us-head-span"> Ambitious Brands </span></h2>
                    <p className="brands-that-us-para">
                     From FMCG to pharma, we provide branding and design services to businesses across categories.
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
      <div className='what-we-can-branding-services'>
        <div className="container">

          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-left-col">
                <p className="what-we-do-lefty-col-para">Our Services</p>
                <h2 className="what-we-do-lefty-col-head">
                 Everything That Goes Into Getting Branding, Packaging & Design Right
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-right-col">
                <p className="what-we-do-right-col-para">
                 End-to-End branding & design solutions for FMCG, food & beverage and wellness brands.
                </p>
              </div>
            </div>
          </div>

          {/* row 1 */}
          <div className='row-div-abc'>
          <div className='col-div-left mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>Foundation</p>
                <h2 className='asthetic-head'>Brand Strategy</h2>
                <p className='asthetic-para-desc'>We research your category, competitors, and audience to craft a strategy that puts your brand on the path to success. Every design decision that follows is rooted in this strategy.</p>
                </div>
                {/* <img src="https://dndesigns.co.in/uploads/pages/lpfrow1colstrategy.jpg" className='img-fluid what-we-can-do-col-left-img'></img> */}
                <img src="https://dndesigns.co.in/uploads/pages/compreddsedRectangle-25740.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
            </div>
          </div>

           <div className='col-div-right mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>Engineering</p>
                <h2 className='asthetic-head'>Brand Positioning </h2>
                <p className='asthetic-para-desc'> A distinct space in market and consumers’ minds makes a world of difference. We craft that positioning, so you stand out and make target customers choose your brand over competitors.</p>
                </div>
                {/* <img src="https://dndesigns.co.in/uploads/pages/seclphdbidentity.jpg" className='img-fluid what-we-can-do-col-left-img'></img> */}
                 <img src="https://dndesigns.co.in/uploads/pages/compressedimage-247.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
            </div>
          </div>
          </div>
           {/* row 2 */}
          <div className='row-div-abc'>
          <div className='col-div-right mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>Aesthetics</p>
                <h2 className='asthetic-head'>Packaging Design</h2>
                <p className='asthetic-para-desc'> We design layout, hierarchy, graphic colour and typography to capture attention in under three seconds from two feet away, because that's roughly what you get on a crowded shelf.  </p>
                </div>
                {/* <img src="https://dndesigns.co.in/uploads/pages/thirdlpjdbhlogo.jpg" className='img-fluid what-we-can-do-col-left-img'></img> */}
                <img src="https://dndesigns.co.in/uploads/pages/compreddsedimage-248.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
            </div>
          </div>

           <div className='col-div-left mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>Symbolism</p>
                <h2 className='asthetic-head'>Brand Identity Design</h2>
                <p className='asthetic-para-desc'>Whether it’s the logo, tagline or USP, we craft every element to hold up across packaging, website and print marketing materials. So the brand looks like one brand whether it's on a 50ml bottle or a brochure.</p>
                </div>
                <img src="https://dndesigns.co.in/uploads/pages/compredsedRectangle-25741.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
            </div>
          </div>
          </div>


           {/* row 3 */}
          <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-7 mt-4'>
            <div className='what-we-can-do-col-left-third-div'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>Imagery</p>
                <h2 className='asthetic-head'>Product Photography</h2>
                <p className='asthetic-para-desc'>Shot to show texture, scale and real use, not staged perfection. We deliver the kind of images that convert on Amazon listings and Instagram feeds, where design alone can't close the sale.</p>
                </div>
                {/* <img src="https://dndesigns.co.in/uploads/pages/compressedRectangle-25742.jpg" className='img-fluid  what-we-can-do-col-left-img-third-row'></img> */}
                <video src="https://dndesigns.co.in/uploads/videos/photographypagecontentcreationvideo4 - RESIZE - Videobolt.net (1).mp4" autoPlay loop muted className='img-fluid  what-we-can-do-col-left-img-third-row'></video>
            </div>
          </div>

           <div className='col-12 col-sm-12 col-md-12 col-lg-5 mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>Standards</p>
                <h2 className='asthetic-head'>Legal Compliance</h2>
                <p className='asthetic-para-desc'> FSSAI, Legal Metrology and category mandatories reviewed at the design stage, not after your batch is printed and stuck at customs or pulled off a shelf.</p>
                </div>
                <img src="https://dndesigns.co.in/uploads/pages/compredssedRectangle-25743.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>




    {/* process */}
             {/* Creative Catalogue Designing - Our Process desktop view */}
             <div id="our-process">
      <section className="creating-your-brand">
        <div className="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Our  {" "}
            <span className="every-pr"> Process </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Discovery & Brief</h2>
                  <p>
                  Every branding, packaging and design service starts here - understanding your product, category, competitors, audience, budget and timeline. This is also where consultation and research happen, the groundwork that prevents every later stage from becoming guesswork.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Positioning</h2>
                  <p>
                 The research reveals crucial details - competitors, category conventions, what's overused and what's missing. Based on this, the USP and positioning are decided. In FMCG, food, beverage and supplement branding especially, this stage decides whether a product gets noticed and earns trust or gets lost among forty other boxes that look the same.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Design Planning & Execution</h2>
                  <p>
                 Brand identity, packaging and website design happen side by side here, not in a one-after-the-other sequence. Logo, colours, typography, messaging, voice, story - every element that helps create a standout brand and enhance customer experience - takes centre stage here. Legal compliance like FSSAI and Legal Metrology are checked in parallel, not after approval.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2> Feedback & Refinement  </h2>
                  <p>
                  Design is tightened around client feedback. It's the stage where we catch problems early to prevent passing them down to the later stage.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>  Production Handoff</h2>
                  <p>
                 Final print-ready artwork, product photography, and website go out, checked against every design, technical and compliance requirement one last time. This is what separates a brand design studio from a design-only shop. Your brand is ready to grow.
                  </p>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </section>

      </div>

      {/* Creative Catalogue Designing - Our Process mobile view */}
      <section className="creating-your-brand-mobile">
        <div className="conatiner creating-your-brand-mobile">
          <h2 className="text-center our-brand-heading-a-mobile">
            Our 
            <span className="every-pr"> Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-1">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>  Discovery & Brief</h2>
                  <p>
              Every branding, packaging and design service starts here - understanding your product, category, competitors, audience, budget and timeline. This is also where consultation and research happen, the groundwork that prevents every later stage from becoming guesswork.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-2">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2> Positioning</h2>
                  <p>
                   The research reveals crucial details - competitors, category conventions, what's overused and what's missing. Based on this, the USP and positioning are decided. In FMCG, food, beverage and supplement branding especially, this stage decides whether a product gets noticed and earns trust or gets lost among forty other boxes that look the same.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-3">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2> Design Planning & Execution</h2>
                  <p>
                  Brand identity, packaging and website design happen side by side here, not in a one-after-the-other sequence. Logo, colours, typography, messaging, voice, story - every element that helps create a standout brand and enhance customer experience - takes centre stage here. Legal compliance like FSSAI and Legal Metrology are checked in parallel, not after approval.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-4">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Feedback & Refinement </h2>
                  <p>
                   Design is tightened around client feedback. It's the stage where we catch problems early to prevent passing them down to the later stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-5">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2> Production Handoff</h2>
                  <p>
                   Final print-ready artwork, product photography, and website go out, checked against every design, technical and compliance requirement one last time. This is what separates a brand design studio from a design-only shop. Your brand is ready to grow.
                  </p>
                </div>
              </div>
            </div>

             

          </div>
        </div>
      </section>


{/* our work swipper component */}
{/* <LPPackagingDesignAgencySwipper/> */}


{/* testimonial */}
<div id='testimonials'>
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
