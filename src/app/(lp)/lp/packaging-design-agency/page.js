import React from 'react'
import LPHeader from '@/Components/LPPagePackagingHeader/LPHeader'
import "./packaging-design-agency.css"
import LPForm from '@/Components/LPForm/LPForm'
import LPMarque from '@/Components/LPMarque/LPMarque';
import LPWhatWeCanBrandingServices from '@/Components/LPWhatWeCanBrandingServices/LPWhatWeCanBrandingServices';
import LPTestimonialSwipper from '@/Components/LPTestimonialSwipper/LPTestimonialSwipper';
import LPBradingServicesTestimonial from '@/Components/LPBradingServicesTestimonial/LPBradingServicesTestimonial';
import LPFAQ from '@/Components/LPFAQ/LPFAQ';
import LPFooter from '@/Components/LPFooter/LPFooter';

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
          question: "What does a brand design agency actually do? ",
          answer:
            (<>A branding agency helps you define your positioning, build a visual identity, shape your core messaging and establish a digital presence so your business looks and feels like a brand people trust and choose, not just one they scroll past. </>)
        },
        {
          question: "What kind of branding services do you offer?",
          answer:
            (<>We offer comprehensive branding services including brand strategy, brand identity design, brand positioning, brand naming and packaging design. We also provide rebranding services.</>)
        },
        {
          question: "Do we require branding before building a website? ",
          answer:
            (<>Yes, and it's worth getting it right. A website built without a clear brand strategy tends to feel generic. Your brand sets the direction, tone and messaging of the website; then it becomes a true expression of your brand, not just a set of pages.  </>)
        },
        {
          question: "How involved do we need to be in the process? ",
          answer:
            "Thoroughly. Your insights, data and your point of view are very crucial in building the brand you envisioned.",
        },
        {
          question: "What's the difference between a logo and a brand identity?",
          answer:
            "A logo is one asset. Brand identity is the complete system that includes the logo as well as the brand name, colour, typography, imagery, tone, and other elements that make your brand identifiable. Think of the logo as the face and the identity as the personality of a person.",
        },
        {
          question: "Do you only work with startups, or established businesses too? ",
          answer:
            "We work with both new brands and existing ones looking to sharpen, reposition or rebuild what they already have. ",
        },
        {
          question: "How can we get started with your brand consultant services?",
          answer:
            "Simply fill out our contact form or give us a call. We can schedule a meeting immediately or as per your convenience.",
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
                      <div>
      <div className='what-we-can-branding-services'>
        <div className="container">

          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-left-col">
                <p className="what-we-do-lefty-col-para">Our Service</p>
                <h2 className="what-we-do-lefty-col-head">
                 End-To-End Branding Solutions
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-right-col">
                <p className="what-we-do-right-col-para">
                  See how we transform your vision into an impactful brand experience.
                </p>
              </div>
            </div>
          </div>

          {/* row 1 */}
          <div className='row-div-abc'>
          <div className='col-div-left mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>FOUNDATION</p>
                <h2 className='asthetic-head'> Brand Strategy</h2>
                <p className='asthetic-para-desc'> Every strong brand starts with a decision, not a design. We define your direction, your audience, and your message before anything gets built, so nothing after this stage is guesswork, and nothing gets built twice.</p>
                </div>
                {/* <img src="https://dndesigns.co.in/uploads/pages/lpfrow1colstrategy.jpg" className='img-fluid what-we-can-do-col-left-img'></img> */}
                <img src="https://dndesigns.co.in/uploads/pages/seclphdbidentity.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
            </div>
          </div>

           <div className='col-div-right mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>SYSTEM</p>
                <h2 className='asthetic-head'>Brand Identity Design</h2>
                <p className='asthetic-para-desc'>We build a visual and verbal identity that signals where you're going, not just where you are. One that earns its place in the market without needing an explanation.</p>
                </div>
                {/* <img src="https://dndesigns.co.in/uploads/pages/seclphdbidentity.jpg" className='img-fluid what-we-can-do-col-left-img'></img> */}
                 <img src="https://dndesigns.co.in/uploads/pages/thirdlpjdbhlogo.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
            </div>
          </div>
          </div>
           {/* row 2 */}
          <div className='row-div-abc'>
          <div className='col-div-right mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>MARK</p>
                <h2 className='asthetic-head'> Logo Design</h2>
                <p className='asthetic-para-desc'>A logo has one job: get recognised in half a second. We design marks that hold up at a glance, stay memorable and hold their own across every size and surface.</p>
                </div>
                {/* <img src="https://dndesigns.co.in/uploads/pages/thirdlpjdbhlogo.jpg" className='img-fluid what-we-can-do-col-left-img'></img> */}
                <img src="https://dndesigns.co.in/uploads/pages/lpfrow1colstrategy.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
            </div>
          </div>

           <div className='col-div-left mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>TERRITORY</p>
                <h2 className='asthetic-head'> Brand Positioning</h2>
                <p className='asthetic-para-desc'> Being different means nothing if nobody notices it. We carve out a place in the market that's unmistakably yours, so people choose you without comparing you to anyone else, and stop mistaking you for a competitor.</p>
                </div>
                <img src="https://dndesigns.co.in/uploads/pages/fourthlpdvdhpositining.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
            </div>
          </div>
          </div>


           {/* row 3 */}
          <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-7 mt-4'>
            <div className='what-we-can-do-col-left-third-div'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>TITLE</p>
                <h2 className='asthetic-head'>Brand Naming</h2>
                <p className='asthetic-para-desc'>A name plays a crucial role in carving the space for a brand in the market. It  has to do its job before anyone hears the pitch. We find one that's ownable, easy to say and true to what you actually stand for. It has to survive a trademark search, a domain check and a first impression, all at once. And it has to sound just as right in a pitch deck as it does out loud, five years from now.</p>
                </div>
                <img src="https://dndesigns.co.in/uploads/pages/fifthlpjedjhNaming.jpg" className='img-fluid  what-we-can-do-col-left-img-third-row'></img>
            </div>
          </div>

           <div className='col-12 col-sm-12 col-md-12 col-lg-5 mt-4'>
            <div className='what-we-can-do-col-left'>
            <div className='what-we-can-do-col-left-content'>
                <p className='asthetic-para-label'>EVOLUTION</p>
                <h2 className='asthetic-head'>Rebranding</h2>
                <p className='asthetic-para-desc'>Brands outgrow themselves. We rebuild your brand around who you've become, keeping what customers already trust you for and cutting what no longer fits.</p>
                </div>
                <img src="https://dndesigns.co.in/uploads/pages/lastpfrowcolRebranding.jpg" className='img-fluid what-we-can-do-col-left-img'></img>
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
            <span className="every-pr"> Branding Process </span>
          </h2>
          <ul id="cards-create">
            <li className="card-create" id="card1-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Discover</h2>
                  <p>
                   Our brand designing services start with research, not assumptions. We understand your audience, your competitors and your market position. This stage sets the base everything else gets built on. Skip it, and every decision made afterwards is guesswork dressed up as a strategy.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card2-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Define</h2>
                  <p>
                  Facts become direction here. We lock your positioning, your messaging and the reason why customers should pick you. This is the strategic backbone of the brand, decided before a single visual gets touched, so design has something real to express.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card3-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Design</h2>
                  <p>
                   The full visual system of logo, colour and typography is now built. This is where the brand becomes visible. Every choice here answers back to what we defined in stage two, not to trend or taste. 
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card4-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2> Apply</h2>
                  <p>
                  Strategy and design mean nothing sitting in a folder. Our creative branding agency now rolls the identity out across packaging, website, social and every surface it needs to live on. We ensure it holds up consistently everywhere, not just on the deck.
                  </p>
                </div>
              </div>
            </li>

            <li className="card-create" id="card5-create">
              <div className="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Launch & Grow</h2>
                  <p>
                   We don't hand over a brand book and disappear. Post-launch, we stay on to check the brand is being applied correctly, catch where it's drifting and sharpen it wherever needed.
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
            <span className="every-pr"> Branding Process</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-1">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Discover</h2>
                  <p>
                 Our brand designing services start with research, not assumptions. We understand your audience, your competitors and your market position. This stage sets the base everything else gets built on. Skip it, and every decision made afterwards is guesswork dressed up as a strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-2">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Define</h2>
                  <p>
                    Facts become direction here. We lock your positioning, your messaging and the reason why customers should pick you. This is the strategic backbone of the brand, decided before a single visual gets touched, so design has something real to express.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-3">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Design</h2>
                  <p>
                   The full visual system of logo, colour and typography is now built. This is where the brand becomes visible. Every choice here answers back to what we defined in stage two, not to trend or taste. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-4">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Apply</h2>
                  <p>
                   Strategy and design mean nothing sitting in a folder. Our creative branding agency now rolls the identity out across packaging, website, social and every surface it needs to live on. We ensure it holds up consistently everywhere, not just on the deck.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 creating-brand-mobile-row-col creating-brand-mobile-row-col-5">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2> Launch & Grow</h2>
                  <p>
                    We don't hand over a brand book and disappear. Post-launch, we stay on to check the brand is being applied correctly, catch where it's drifting and sharpen it wherever needed.
                  </p>
                </div>
              </div>
            </div>

             

          </div>
        </div>
      </section>


{/* our work swipper component */}



{/* testimonial */}
<LPBradingServicesTestimonial/>



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
