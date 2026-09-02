export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from 'react'
import "./at-one-am-case-study.css"
import MomentumSection from '@/Components/MomentumSection/MomentumSection'
import MomentumSectionPara from '@/Components/MomentumSectionPara/MomentumSectionPara'
import AtOneAmContinueSlider from '@/Components/AtOneAmContinueSlider/AtOneAmContinueSlider'
import AtOneAmCaseStudyHero from '@/Components/AtOneAmCaseStudyHero/AtOneAmCaseStudyHero'
import AtOneAm from '@/Components/AtOneAm/AtOneAm'
import AOSProvider from '@/Components/AosProvider/AosProvider'

// import Script from "next/script";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import Image from "next/image";
import AtOneAmVideoOnScroll from '@/Components/AtOneAmVideoOnScroll/AtOneAmVideoOnScroll';
import AtOneAmBoxBottle from '@/Components/AtOneAmBoxBottle/AtOneAmBoxBottle';
import SkateboardAnimation from '@/Components/SkateboardAnimation/SkateboardAnimation';
import BlockReveal from '@/Components/BlockReveal/BlockReveal';




// meta   data
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("at-one-am-case-study", null, false);
  } catch (error) {
    console.log("At One Am Case Study Error", error);
    return {
      title: "At One Am Case Study",
      robots: "noindex, nofollow",
    };
  }
  // console.log(seo.content)

  return {
    title: seo.metaTitle || seo.title,
    description: seo.metaDescription || seo.description,

    robots: seo.robotsTag || "index, follow",

    alternates: {
      canonical: seo.alternates?.canonical,
    },

    openGraph: {
      type: seo.openGraph?.type || "website",
      title: seo.openGraph?.title || seo.metaTitle,
      description: seo.openGraph?.description || seo.metaDescription,
      url: seo.openGraph?.url || seo.alternates?.canonical,
      images: seo.openGraph?.images?.length
        ? seo.openGraph.images.map((img) => ({
            url: img.url,
            alt: img.alt || seo.title,
            width: img.width || 1200,
            height: img.height || 630,
          }))
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.twitter?.title || seo.metaTitle,
      description: seo.twitter?.description || seo.metaDescription,
      images: seo.twitter?.images?.length
        ? seo.twitter.images.map((img) => img.url)
        : [],
    },
  };
}
// ends here




async function page() {


  // ---
      await connectDB();
      let pageData;
      try {
        pageData = await getPageById("at-one-am-case-study", null, true);
      } catch (error) {
        notFound();
      }
    
      if (!pageData) {
        notFound();
      }
    
      // ---  SCHEMA CLEANING LOGIC START ---
      let cleanSchema = "";
      if (pageData.headCode) {
        // Script tags remove karke raw JSON nikalna
        cleanSchema = pageData.headCode
          .replace(/<script.*?>/gi, "")
          .replace(/<\/script>/gi, "")
          .trim();
        if (cleanSchema.includes('""')) {
          cleanSchema = cleanSchema.replace(/""/g, '"');
        }
      }
      // --- SCHEMA CLEANING LOGIC END ---
    
  return (
    <>
     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "at-one-am-case-study"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}

    <div className='at-one-am-case-study-page'>

    {/* <AtOneAm/> */}

    <AtOneAmCaseStudyHero/>
  
      <div className='container-fluid-custom'>
        <div className='banner-after-hero-div'>
          {/* <img src="https://dndesigns.co.in/uploads/pages/atoneamcasestidybannerafetrhero.jpeg" className='img-fluid banner-after-hero-img' alt="" /> */}
          <video src="https://dndesigns.co.in/uploads/videos/atoneamherovideoewjde2whj.mp4" loop muted autoPlay className="img-fluid banner-after-hero-img"></video>
        </div>
      </div>

      <div className='container-fluid-custom'>
        <div className='para-desc-para-section'>
        <MomentumSectionPara as="p" className="para-desc-para at-one-am-font" >
            Coffee is the medium. The real product is momentum. 1 AM transforms an everyday beverage into a badge of ambition for people whose most productive hours begin when the rest of the world switches off.
          </MomentumSectionPara>
        </div>
      </div>

      <div className='at-one-am-logo-section'>
        <div className='container-fluid-custom container-fluid-custom-for-logo'>
          <img src="https://dndesigns.co.in/uploads/pages/1am.webp" className='img-fluid at-one-am-logo' alt="" />
        </div>
      </div>


       {/* it beagan section  1*/}
      <section className="it-began-section">
      <div className='container-fluid-custom'>
        <div className="row">

          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className="it-began-left-col">
            <h2 className='it-began-left-col-head'>
            The Making of
            </h2>
            <p className='it-began-left-col-para-1'>A Cold Coffee 

<br></br>Brand <span className='orange-at-one-color'>1 AM</span></p>
            <p className='it-began-left-col-para-2'>Turning an Hour Into a Brand.</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className='it-began-right-col'>
              <p className="it-began-right-col-para-1">The night looks different  <span className='orange-at-one-color'>when you're building something.</span></p>
              <p className='it-began-right-col-para-2'>1 AM speaks to a generation that works late, thinks differently, and turns quiet hours into productive ones. We brought that attitude to life through a complete brand identity, creating the logo, visual language, can design, and website as one cohesive experience. </p>
              {/* <p className="it-began-right-col-para-3">That's who <span className='at-one-am-orange-and-neutroinc'>1AM</span> was built for.</p> */}
               <p className="it-began-right-col-para-3">The goal was simple: make the brand as memorable as its audience.</p>
            </div>
          </div>

        </div>
      </div>
      </section>
      {/* it beagan section end */}



      {/* section 1 */}
      <section className="sticky-section-parent section-one-for-desktop" id="sticky-parent-1">
        <div className='container-fluid-custom'>

          <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-1" className="sticky-section-text at-one-am-font">FUEL YOUR</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-1" className="sticky-section-text at-one-am-font">1AM SELF</MomentumSection>
          </div>

          <div className='sticky-section-img-div'>
            <img src="https://dndesigns.co.in/uploads/pages/atoneamsectionfirstimageone.jpg" className='img-fluid sticky-section-img-left' alt="" />
            <div className='sticky-section-img-right'>
            <img src="https://dndesigns.co.in/uploads/pages/atoneamsectionfirstimagetwo.jpg" className='img-fluid ' alt="" />
              <p className="one-am-para-text-right">
      <BlockReveal>
        1AM stands for momentum, not moderation
      </BlockReveal>
    </p>
            </div>
          </div>

          <div className='sticky-section-img-div-two'>
        
            <img src="https://dndesigns.co.in/uploads/pages/stillbrewingwefjdb14.jpg.jpeg" className='img-fluid sticky-section-img-right' alt="" />
           
            
            {/* <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-left' alt="" /> */}
            <video src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagefourvideoFirst.mp4" autoPlay muted loop className='at-one-am-video-after-banner'></video>
          </div>

          <div className='sticky-section-img-div-three'>
          <div className='for-text'>
            <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagesixdj.jpg" className='img-fluid ' alt="" />
          <p className="one-am-para-text-left">
      <BlockReveal>
        1AM keeps its coffee fam coming back every day.
      </BlockReveal>
    </p>
             </div>

            <img src="https://dndesigns.co.in/uploads/pages/newimagejwebdfnvvvvvv.jpg.jpeg" className='img-fluid sticky-section-img-left' alt="" />
          </div>

        </div>
      </section>

      {/* section 1 for mobil */}
      {/* <section className="container-fluid-custom at-one-section-one-mobile">
        <div className='img-one-div-1'>
        <MomentumSection triggerSelector="#sticky-parent-1" className="sticky-section-text at-one-am-font">FUEL YOUR</MomentumSection>
         <img src="https://dndesigns.co.in/uploads/pages/atoneamsectionfirstimageone.jpg" className='img-fluid sticky-section-img-left' alt="" />
        </div>


         <div className='img-one-div-2'>
         <MomentumSection triggerSelector="#sticky-parent-1" className="sticky-section-text at-one-am-font">1AM SELF</MomentumSection>
         <div className='sticky-section-img-right'>
            <img src="https://dndesigns.co.in/uploads/pages/atoneamsectionfirstimagetwo.jpg" className='img-fluid ' alt="" />
              <p className="one-am-para-text-right">
      <BlockReveal>
        1AM stands for momentum, not moderation
      </BlockReveal>
    </p>
            </div>
        </div>


        <div className="img-one-div-3">
           <img src="https://dndesigns.co.in/uploads/pages/stillbrewingwefjdb14.jpg.jpeg" className='img-fluid sticky-section-img-right' alt="" />

           <video src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagefourvideoFirst.mp4" autoPlay muted loop className='at-one-am-video-after-banner'></video>
        </div>

        <div className='img-one-div-4'>
        <div className='img-one-div-img-6'>
            <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagesixdj.jpg" className='img-fluid ' alt="" />
          <p className="one-am-para-text-left">
      <BlockReveal>
        1AM stands for momentum, not moderation
      </BlockReveal>
    </p>
             </div>

          <img src="https://dndesigns.co.in/uploads/pages/newimagejwebdfnvvvvvv.jpg.jpeg" className='img-fluid img-one-div-img-7' alt="" />
        </div>

      
      </section> */}

 {/* it beagan section  2*/}
      <section className="it-began-section">
      <div className='container-fluid-custom'>
        <div className="row">

          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className="it-began-left-col">
            <h2 className='it-began-left-col-head'>
            The Identity Design
            </h2>
            <p className='it-began-left-col-para-1'><span className='orange-at-one-color'>A Logo</span> With Many Layers<br></br> One Mark. Multiple<br></br> Meanings
<br></br></p>
            <p className='it-began-left-col-para-2'></p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className='it-began-right-col'>
              <p className="it-began-right-col-para-1">The challenge was turning an hour into an identity.</p>
              <p className='it-began-right-col-para-2'>So we let the name lead. 1 AM became a timestamp - bold, minimal, and instantly recognisable. The monochrome palette kept it clean and timeless, while the radiating strokes added energy and movement. A ticking clock, a spark of inspiration, a mind switched on. The beauty was in not choosing just one.</p>
              <p className="it-began-right-col-para-3">Because 1 AM means all of it.
 </p>
            </div>
          </div>

        </div>
      </div>
      </section>
      {/* it beagan section end 2*/}

      
      



      {/* section 2 */}
      {/* blue background */}
      <div className='blue-background-section'></div>
     <div className='banner-image-section'>
      <div className='container-fluid-custom'>
        <div className='banner-after-hero-div'>
          <img src="https://dndesigns.co.in/uploads/pages/atoneamnsecondsectionbabnnerbbbn.jpg.jpeg" className='img-fluid banner-after-hero-img' alt="" />
        </div>
      </div>
      </div>


  
  <div className='negative-margin-text'>
    <div className='container-fluid-custom'>
        <div className='para-desc-para-section'>
        <MomentumSectionPara as="p" className="para-desc-para at-one-am-font" >
            The 1AM mark had to read like a timestamp and a statement. Built around a clock-cue wordmark, a colour system loud enough to stop a scroll — then stripped to nothing but essentials.
          </MomentumSectionPara>
        </div>
      </div>
      </div>

      <section className="sticky-section-parent section-two-for-desktop blue-background" id="sticky-parent-2">
        <div className='container-fluid-custom'>

          <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-3" className="sticky-section-text at-one-am-font at-one-am-font-white">LOUD NOT MESSY</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-3" className="sticky-section-text at-one-am-font at-one-am-font-white">BUILT THE GRIND</MomentumSection>
          </div>

          <div className='sticky-section-img-div'>
          <div className='sticky-section-img-left-section-2'>
            <img src="https://dndesigns.co.in/uploads/pages/atoneamcoinimage.jpg" className='img-fluid ' alt="" />
               <p className="one-am-para-text-white">
      <BlockReveal>
        1 AM isn't a time on the clock. It's a state of mind.

      </BlockReveal>
    </p>
            </div>
            {/* <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagesevened.jpg" className='img-fluid sticky-section-img-right' alt="" /> */}
            <video src="https://dndesigns.co.in/uploads/videos/daynightgif.mp4" autoPlay muted loop className='at-one-am-video-section-two-video-one'></video>
          </div>

          <div className='sticky-section-two-img-div-two'>
            {/* <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-right' alt="" /> */}
            {/* <video src="https://dndesigns.co.in/uploads/videos/atoneam-watch-viedoComp 2-compressed.mp4" autoPlay muted loop className='at-one-am-section-2-video-2'></video> */}
            <div className="atoneamsectionseond-image-two">
            <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionseond-image-two.jpg" className='img-fluid ' alt="" />
                  <p className="one-am-para-text-white">
      <BlockReveal>
        Everything We Built The Idea. The Insight. The Audience.
      </BlockReveal>
    </p>
    </div>

            <div className='video-in-end'>
            <video src="https://dndesigns.co.in/uploads/videos/atoneam-watch-viedoComp 2-compressed.mp4" autoPlay muted loop className='at-one-am-section-2-video-2 video-in-end-video-last'></video>
            </div>
            <div>
            {/* <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionseond-image-two.jpg" className='img-fluid atoneamsectionseond-image-two' alt="" />
            <div className="second-section-stack-img">
            <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionseond-image-three.jpg" className='img-fluid sticky-section-img-left' alt="" />
            </div> */}

            
            </div>
          </div>

        </div>
      </section>

      {/* section 2 for mobile */}
    



      {/* swipper continues slider */}
      <AtOneAmContinueSlider/>


      {/* alone two images after slider section 2.5 */}
      <div className='alone-two-images alone-two-images-desktop'>
      <div className='container-fluid-custom'>
      <div className="alone-two-images-after-slider-div">
      <div className='sticky-section-img-right'>
       <img src="https://dndesigns.co.in/uploads/videos/atoneamsection2.5imageafter-slider.jpg" className='img-fluid' alt="" />
             <p className="one-am-para-text-left">
      <BlockReveal>
        Every visual choice screams main character energy, period.
      </BlockReveal>
    </p>
       </div>
     
         <img src="https://dndesigns.co.in/uploads/videos/httpsdndesigns.co.inuploadsvideosatoneamsection2.5imageafter-imagetwo.jpg" className='img-fluid sticky-section-img-left' alt="" /> 
        
      </div>
      </div>
      </div>

     

      {/* it beagan section  3*/}
      <section className="it-began-section">
      <div className='container-fluid-custom'>
        <div className="row">

          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className="it-began-left-col">
            <h2 className='it-began-left-col-head'>
            Can Design
            </h2>
            <p className='it-began-left-col-para-1'>Built to Command 
<br></br>Attention 
<span className='orange-at-one-color'> Shelf Impact</span></p>
            <p className='it-began-left-col-para-2'>Minimal. Bold. Unmissable.</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className='it-began-right-col'>
              <p className="it-began-right-col-para-1">We didn't design a can. We designed a mini billboard.</p>
              <p className='it-began-right-col-para-2'>The idea wasn't to make 1 AM different. It was to make it impossible to miss. We kept the cans deliberately minimal, letting bold typography and vibrant colour create the impact. The product name takes centre stage, while each flavour gets a distinct colour personality. A consistent design system ties everything together, making every can instantly recognisable as part of 1 AM.</p>

              <p className="it-began-right-col-para-3">Minimal design. Maximum shelf presence.
</p>
            </div>
          </div>

        </div>
      </div>
      </section>
      {/* it beagan section end 3*/}


      



       {/* section 3  skate board*/}
     
      <div className='blue-background-section'></div>
     <div className='banner-image-section'>
      <div className='container-fluid-custom'>
        <div className='banner-after-hero-div'>
          <img src="https://dndesigns.co.in/uploads/pages/atoneewghdsvhblur.jpg.jpeg" className='img-fluid banner-after-hero-img' alt="" />
        </div>
      </div>
      </div>

  <div className='negative-margin-text'>
    <div className='container-fluid-custom'>
        <div className='para-desc-para-section'>
        <MomentumSectionPara as="p" className="para-desc-para at-one-am-font" >
            Six SKUs. Zero identity compromise. A strict visual hierarchy — flavour name dominant, format and claims beneath, one colour per variant. Bold enough to own a shelf. Flexible enough to tell a story.
          </MomentumSectionPara>
        </div>
      </div>
      </div>

      <section className="sticky-section-parent skate-board-desktop" id="sticky-parent-2">
        <div className='container-fluid-custom'>

          <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-5" className="sticky-section-text at-one-am-font">DESIGNED</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-5" className="sticky-section-text at-one-am-font">FOR THE DROP</MomentumSection>
          </div>

          <div className='sticky-section-img-div'>
           <img src="https://dndesigns.co.in/uploads/pages/glassewbdsj1-am-character-02.jpg.jpeg" className='img-fluid sticky-section-img-right' alt="" />
            <img src="https://dndesigns.co.in/uploads/videos/skatesectionimagetwoatoneam.jpg" className='img-fluid sticky-section-img-left' alt="" />
          </div>

        <div className="skate-board-div">
  <SkateboardAnimation />
</div>

          {/* <div className='skate-board-div'>
          <AOSProvider> <div data-aos="slide-right"
    data-aos-duration="3000"
    data-aos-once="false"
    >
            <img src="https://dndesigns.co.in/uploads/pages/ssqwsdxatoneamcasestudysaketeboard.jpg.png" className='img-fluid skate-borad-img'></img>
            </div>
             </AOSProvider>
          </div> */}
        </div>
      </section>

     

      {/* skate board for mobile */}
      <section className='container-fluid-custom skate-board-mobile'>
        <div className='skate-board-mobile-div-one'>
          <MomentumSection triggerSelector="#sticky-parent-6" className="sticky-section-text at-one-am-font">DESIGNED</MomentumSection>
          <img src="https://dndesigns.co.in/uploads/videos/skatesectionimageoneatoneam.jpg" className='img-fluid skate-board-section-mobile-img-one' alt="" />
        </div>

        <div className='skate-board-mobile-div-two'>
          <MomentumSection triggerSelector="#sticky-parent-6" className="sticky-section-text at-one-am-font">FOR THE DROP</MomentumSection>
          <img src="https://dndesigns.co.in/uploads/videos/skatesectionimagetwoatoneam.jpg" className='img-fluid skate-board-section-mobile-img-one' alt="" />
        </div>
      </section>


       {/* video on scroll box opening */}
       
      {/* <AtOneAmVideoOnScroll/> */}
      


       {/* glb section */}
      {/* <AtOneAmBoxBottle/> */}

      {/* section after skate board */}

      <section className='section-after-skate-and-box'>
        <div className='container-fluid-custom'>
          <div className='section-after-skate-and-box-div'>
            <div className='section-after-skate-and-box-div-child'>
            <img src="https://dndesigns.co.in/uploads/pages/wedfeoadspagessection-after-skate-and-box-divimg-two.jpg" className='img-fluid section-after-skate-and-box-div-child-img-one'></img>
             <video src="https://dndesigns.co.in/uploads/videos/atoneamlogoimagevideosectionafterskate.mp4" autoPlay muted loop className='section-after-skate-and-box-div-child-video-one'></video>
            </div>
            <div className='section-after-skate-and-box-div-child'>
              <img src="https://dndesigns.co.in/uploads/pages/section-after-skate-and-box-divimg-one.jpg" className='img-fluid section-after-skate-and-box-div-child-img-two'></img>
            </div>  
          </div>
           <video src="https://dndesigns.co.in/uploads/videos/trainatonevideo%20(1).mp4"  autoPlay loop muted playsInline className='tarinatonevideo'></video>
        </div>
      </section>



      {/* it beagan section  4*/}
      <section className="it-began-section">
      <div className='container-fluid-custom'>
        <div className="row">

          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className="it-began-left-col">
            <h2 className='it-began-left-col-head'>
            the color theory
            </h2>
            <p className='it-began-left-col-para-1'>COLOUR WASN'T DECORATION.<br></br>IT WAS <span className='orange-at-one-color'>THE ALARM.</span></p>
            <p className='it-began-left-col-para-2'>We didn't pick colours that looked good. <br></br> We picked colours that couldn't be ignored.</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className='it-began-right-col'>
              <p className="it-began-right-col-para-1">Most brands choose colours. We chose weapons. <span className='orange-at-one-color'></span></p>
              <p className='it-began-right-col-para-2'>The brief was simple walk past a refrigerator full of competing cans and stop at 1:AM before you even know why.That half-second of attention?That's where a brand lives or dies</p>
              <p className="it-began-right-col-para-3">So every colour in the 1:AM palette was chosennot for beauty but for stopping power.</p>
            </div>
          </div>

        </div>
      </div>
      </section>
      {/* it beagan section end 4*/}







      {/* color palete video */}
      <section className='color-palate-video-section'>
        <div className='container-fluid-custom'>
          <div className='color-palate-video-div'>
            <video src="https://dndesigns.co.in/uploads/videos/color-palet-desktopWhatsApp Video 2026-08-20 at 17.54.41.mp4" className='color-palate-desktop-video' autoPlay loop muted playsInline></video>

            <video src="https://dndesigns.co.in/uploads/videos/color-palate-mobileWhatsApp Video 2026-08-20 at 17.54.40.mp4" className='color-palate-mobile-video' autoPlay loop muted playsInline></video>
          </div>
        </div>
      </section>


     


      {/* own-the-hour-section */}
      <section className='own-the-hour-section'>
        <div className='container-fluid-custom'>
          <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-7-1" className="sticky-section-text at-one-am-font">HOME OF THE</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-7-" className="sticky-section-text at-one-am-font">CLUB</MomentumSection>
          </div>

          <div className="own-the-hour-images-div">
          <div className='own-the-hour-img-1'>
            <img src="https://dndesigns.co.in/uploads/pages/ownthehourfirstimage.jpg" className='img-fluid '></img>
                  <p className="one-am-para-text-left">
      <BlockReveal>
        This feed was built for the ones who never log off.
      </BlockReveal>
    </p>
    </div>
            <img src="https://dndesigns.co.in/uploads/pages/own-thehourimg2e.jpg" className='img-fluid own-the-hour-img-2'></img>
          </div>
        </div>
      </section>



     


      {/* shot show reel video section */}
      <div className="container-fluid-custom">
      <section className='shot-show-reel-section '>
        <div className='shot-show-reel-section-div'>
           <video src="https://dndesigns.co.in/uploads/videos/wekuwkued1amfinalvideo(1).mp4" className='shot-show-reel-video' autoPlay loop muted playsInline></video>
        </div>
      </section>
      </div>




       {/* it beagan section  5 typography*/}
      {/* <section className="it-began-section">
      <div className='container-fluid-custom'>
        <div className="row">

          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className="it-began-left-col">
            <h2 className='it-began-left-col-head-typography'>
            typo <br></br>graphy
            </h2>
            <p className='it-began-left-col-para-1-typography'>neutronic <br></br>
condensed </p>
            <p className='it-began-left-col-para-2-typography'>The 1AM story how a timestamp<br></br> became a cultural identity.</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className='it-began-right-col'>
              <p className="it-began-right-col-para-1">1:AM wasn't built to compete in the cold coffee category. <span className='orange-at-one-color'>It was built to own a feeling.</span></p>
              <p className='it-began-right-col-para-2'>The feeling of being awake when everyone else has stopped. Of doing your best work after midnight. Of choosing momentum over comfort. We weren't briefed to make another beverage brand we were briefed to make cold coffee impossible to ignore, for a generation that ignores everything that doesn't earn their attention. This is that story.</p>
              <p className="it-began-right-col-para-3">That's who <span className='at-one-am-orange-and-neutroinc'>1AM</span> was built for.</p>
            </div>
          </div>

        </div>
      </div>
      </section> */}


      <section className='it-began-section'>
        <div className="container-fluid-custom">
        <div className='it-beagan-typo-graphy'>
          <h2 className='typography-head-1'>FONT PALLATE</h2>
          <p className='typography-para-2'>DISPLAY & HEADLINE TYPEFACE</p>
          <p className='typography-para-3'>neutronic narrow &</p>
          <p className="typography-para-4">neutronic condensed</p>
          <p className='typography-para-5'>BOLD, CONDENSED AND UNAPOLOGERICALLY URBAN</p>
           <p className='typography-para-6'>BODY & UI TYPEFACE</p>
            <p className='typography-para-7'>NEUTRONIC</p>
            <p className='typography-para-8'>THE BODY COMPANION. NEUTRONIC REGULAR KEEPS READABILITY EFFORTLESS AT SMALLER SIZES, INHERITING THE SAME DNA AS THE HEADLINE FONT FOR TOTAL VISUAL HARMONY.</p>
            <p className='typography-para-9'>abcdefghijklmnopqrstuvwxyz</p>
            <p className='typography-para-10'>abcdefghijklmnopqrstuvwxyz</p>
        </div>

        <div className='it-began-section-row'>
          <div className='it-began-section-row-col-1'>
            <p className='it-began-section-row-col-para-1'>aM</p>
            <p className='it-began-section-row-col-para-2'>neutronic narrow</p>
          </div>
          <div className='it-began-section-row-col-2'>
            <p className='it-began-section-row-col-para-3'>aM</p>
            <p className="it-began-section-row-col-para-4">neutronic condensed</p>
          </div>
        </div>
        </div>
      </section>
      {/* it beagan section end 5*/}

      {/* shot show reel image section */}

      <section className="shot-show-reel-image-section">
        <div className='container-fluid-custom'>
          <div className='shot-show-reel-image-row'>
            <div className='shot-show-reel-image-col-1'>
              <img src="https://dndesigns.co.in/uploads/pages/shootshowreelimage-1new-2.jpg" className='img-fluid shot-show-reel-img-1'></img>
              <video src="https://dndesigns.co.in/uploads/videos/atoneamvideog3dkjhjewdb.mp4" className='img-fluid shot-show-reel-img-2' autoPlay loop muted ></video>
            </div>

            <div className='shot-show-reel-image-col-2'>
              <img src="https://dndesigns.co.in/uploads/pages/at1amshowreelimage3.jpg" className='img-fluid shot-show-reel-img-3'></img>
                    <p className="one-am-para-text-right">
      <BlockReveal>
       brewing dreams one can at a time.

      </BlockReveal>
    </p>
            </div>

          </div>
        </div>
      </section>


       {/* shot show reel video section */}
      {/* <section className='social-media-showcase-section'>
        <div className='container-fluid-custom'>
           <video src="https://dndesigns.co.in/uploads/videos/socialmediashocasevideofivemb.mp4" className='social-media-showcase-video' autoPlay loop muted playsInline></video>
        </div>
      </section> */}

       <section className='social-media-showcase-section'>
        {/* <div className='container-fluid-custom'> */}
           <video src="https://dndesigns.co.in/uploads/videos/socialmediashocasevideofivemb.mp4" className='social-media-showcase-video' autoPlay loop muted playsInline></video>
        {/* </div> */}
      </section>


{/* social-media-showcase-image-section */}
      <section clasName="social-media-showcase-image-section">
        <div className='container-fluid-custom'>
          <div className='social-media-showcase-image-div'>
            <img src="https://dndesigns.co.in/uploads/pages/socialmediaewidtablet.jpg.jpeg" className='img-fluid social-media-showcase-image-1'></img>
            <div className='social-media-showcase-image-2'>
              <video src="https://dndesigns.co.in/uploads/videos/socialmediaimg2ewjd.mp4" autoPlay loop muted className='img-fluid '></video>
                    <p className="one-am-para-text-right">
      <BlockReveal>
        scoop. brew. pour. sip. Ahhh
      </BlockReveal>
    </p>
              </div>
          </div>
        </div>
      </section>



      {/* it beagan section  6*/}
      <section className="it-began-section">
      <div className='container-fluid-custom'>
        <div className="row">

          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div className="it-began-left-col">
            <h2 className='it-began-left-col-head'>
            website design
            </h2>
            <p className='it-began-left-col-para-1'>Built to Keep the Energy Alive
<br></br><span className='orange-at-one-color'>Digital Presence</span></p>
            <p className='it-began-left-col-para-2'>Bold. Playful. Full of Energy. </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className='it-began-right-col'>
              <p className="it-began-right-col-para-1">The website couldn't be an afterthought to the can. </p>
              <p className='it-began-right-col-para-2'>We translated the visual language into a bold digital experience, pairing oversized headers with dark, moody backdrops and expressive product moments. Rather than presenting every flavour the same way, we gave each one a distinct character and narrative creating a digital shelf that feels varied yet connected through one unmistakable 1 AM design system. Motion, colour, and copy work together so it feels just as alive, loud, and unmissable as the physical one. 
</p>
              <p className="it-began-right-col-para-3">The digital shelf matches the brand’s attitude.
</p>
            </div>
          </div>

        </div>
      </div>
      </section>
      {/* it beagan section end 6*/}









      {/* website showcaase */}
      <section className='website-showcase-section'>
      <div className='container-fluid-custom'>
        <video className='website-showcase-video img-fluid' src="https://dndesigns.co.in/uploads/videos/websiteshowcasingvideoatoneamewhdj.mp4" loop muted autoPlay></video>
      </div>
      </section>




{/* brewed for section */}
<section className='brewed-for-section'>
  <div className='container-fluid-custom'>
    <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-9" className="sticky-section-text at-one-am-font">BREWED FOR</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-9" className="sticky-section-text at-one-am-font">THE HUSTLER</MomentumSection>
          </div>

<div>
          <div className='brewed-for-image-div'>
            <img src="https://dndesigns.co.in/uploads/pages/brewed-for-image-1.jpg" className='img-fluid brewed-for-image-1'></img>
            <div className='brewed-for-image-2'>
            <img src="https://dndesigns.co.in/uploads/pages/httpsdndesigns.co.inuploadspagesbr2systum.jpg" className='img-fluid '></img>
                  <p className="one-am-para-text-right">
      <BlockReveal>
        Built to Keep the Energy Alive
      </BlockReveal>
    </p>
    </div>
          </div>

           <div className='brewed-for-image-div'>
           <div className='brewed-for-image-4'>
            <img src="https://dndesigns.co.in/uploads/pages/skipbasicimagatoneamvvvv.jpg" className='img-fluid brewed-for-image-4-img'></img>
            <p className="one-am-para-text-left">
      <BlockReveal>
        The digital shelf matches the brand’s attitude. 
      </BlockReveal>
    </p>
            </div>

            <video src="https://dndesigns.co.in/uploads/videos/ewkrhfjyug3erwpost2(1).mp4" muted loop autoPlay className='img-fluid brewed-for-image-video-3'></video>
          </div>
          </div>
  </div>
</section>


{/* vending machine section */}

{/* vending machine div*/}
<section className='vending-machine-section'>
  <div className='container-fluid-custom'>
    <div className='vending-machine-img-div-1'>
      <img src="https://dndesigns.co.in/uploads/pages/cartenimgvendingmachineimg1.jpg" className='vending-machine-img-1'></img>
      <div className='vending-machine-img-2'>
      <img src="https://dndesigns.co.in/uploads/pages/have1amvendingmachineimg2.jpg" className='img-fluid'></img>
            <p className="one-am-para-text-right">
      <BlockReveal>
        
Turning an Hour Into a Brand

      </BlockReveal>
    </p>
      </div>
    </div>

    <div className='vending-machine-img-div-2'>
    <div className='vending-machine-img-3'>
      <img src="https://dndesigns.co.in/uploads/pages/nightmodesectionimgfdjtshirt.jpg" className='img-fluid'></img>
         <p className="one-am-para-text-left">
      <BlockReveal>
        The night looks different when you're building something.
      </BlockReveal>
    </p>
    </div>

      <video src="https://dndesigns.co.in/uploads/videos/atoneamwendingmachineimg4.mp4"  className='vending-machine-img-4' autoPlay muted loop></video>
      
    </div>
  </div>
</section>








       {/* section 4*/}
      {/* blue background */}
      {/* <div className='blue-background-section'></div>
     <div className='banner-image-section'>
      <div className='container-fluid-custom'>
        <div className='banner-after-hero-div'>
          <img src="https://dndesigns.co.in/uploads/pages/atoneamcasestidybannerafetrhero.jpeg" className='img-fluid banner-after-hero-img' alt="" />
        </div>
      </div>
      </div>

  <div className='negative-margin-text'>
    <div className='container-fluid-custom'>
        <div className='para-desc-para-section'>
    
          <MomentumSectionPara as="p" className="para-desc-para at-one-am-font" >
            Coffee is the medium. The real product is momentum. 1 AM transforms an everyday beverage into a badge of ambition for people whose most productive hours begin when the rest of the world switches off.
          </MomentumSectionPara>
        </div>
      </div>
      </div>

      <section className="sticky-section-parent" id="sticky-parent-2">
        <div className='container-fluid-custom'>

          <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-4" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-4" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
          </div>

          <div className='sticky-section-img-div'>
           <img src="https://dndesigns.co.in/uploads/pages/3ewrcgyurgyu.webp" className='img-fluid sticky-section-img-right' alt="" />
            <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-left' alt="" />
          </div>

        </div>
      </section> */}





       {/* footer video */}
      <section className='footer-video-section'>
        <div className='container-fluid-custom'>
          <div className='footer-video-div'>
            <video src="https://dndesigns.co.in/uploads/videos/footervideoatoneamMotion3 (1).mp4" className='footer-video' autoPlay loop muted playsInline></video>
          </div>
        </div>
      </section>



      {/* footer section */}
      <section className='footer-section'>
      <div className='container-fluid-custom'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6'>
            <div className='btn-div-col'>
            <div className='btn-div'>
              <span className='blue-footer-btn'>BRANDING</span>
              <span className='orange-footer-btn'>STRATEGY</span>
              </div>

              <div className='btn-div'>
              <span className='orange-footer-btn'>IDENTITY</span>
              <span className='blue-footer-btn'>PACKAGING</span>
              <span className='orange-footer-btn'>MARKETING</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div className="footer-right-col">
              <h2 className='footer-right-col-head'>1: AM</h2>
              <p className='footer-right-col-para'>#SigningOff</p>
            </div>
          </div>
        </div>
      </div>
      </section>

    </div>
    </>
  )
}

export default page