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
          <video src="https://dndesigns.co.in/uploads/videos/atoneamshowreelasd.mp4" loop muted autoPlay className="img-fluid banner-after-hero-img"></video>
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

      {/* section 1 */}
      <section className="sticky-section-parent section-one-for-desktop" id="sticky-parent-1">
        <div className='container-fluid-custom'>

          <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-1" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-1" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
          </div>

          <div className='sticky-section-img-div'>
            <img src="https://dndesigns.co.in/uploads/pages/atoneamsectionfirstimageone.jpg" className='img-fluid sticky-section-img-left' alt="" />
            <img src="https://dndesigns.co.in/uploads/pages/atoneamsectionfirstimagetwo.jpg" className='img-fluid sticky-section-img-right' alt="" />
          </div>

          <div className='sticky-section-img-div-two'>
            <img src="https://dndesigns.co.in/uploads/pages/stillbrewingwefjdb14.jpg.jpeg" className='img-fluid sticky-section-img-right' alt="" />
            {/* <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-left' alt="" /> */}
            <video src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagefourvideoFirst.mp4" autoPlay muted loop className='at-one-am-video-after-banner'></video>
          </div>

          <div className='sticky-section-img-div-three'>
            <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagesixdj.jpg" className='img-fluid sticky-section-img-right' alt="" />
            <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagesevened.jpg" className='img-fluid sticky-section-img-left' alt="" />
          </div>

        </div>
      </section>


      {/* section 1 for mobil */}
      



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
            Coffee is the medium. The real product is momentum. 1 AM transforms an everyday beverage into a badge of ambition for people whose most productive hours begin when the rest of the world switches off.
          </MomentumSectionPara>
        </div>
      </div>
      </div>

      <section className="sticky-section-parent section-two-for-desktop blue-background" id="sticky-parent-2">
        <div className='container-fluid-custom'>

          <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-3" className="sticky-section-text at-one-am-font at-one-am-font-white">LOREM IPSUM</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-3" className="sticky-section-text at-one-am-font at-one-am-font-white">LOREM IPSUM</MomentumSection>
          </div>

          <div className='sticky-section-img-div'>
            <img src="https://dndesigns.co.in/uploads/pages/atoneamcoinimage.jpg" className='img-fluid sticky-section-img-left-section-2' alt="" />
            {/* <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagesevened.jpg" className='img-fluid sticky-section-img-right' alt="" /> */}
            <video src="https://dndesigns.co.in/uploads/videos/daynightgif.mp4" autoPlay muted loop className='at-one-am-video-section-two-video-one'></video>
          </div>

          <div className='sticky-section-two-img-div-two'>
            {/* <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-right' alt="" /> */}
            {/* <video src="https://dndesigns.co.in/uploads/videos/atoneam-watch-viedoComp 2-compressed.mp4" autoPlay muted loop className='at-one-am-section-2-video-2'></video> */}
            <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionseond-image-two.jpg" className='img-fluid atoneamsectionseond-image-two' alt="" />

            <div className='video-in-end'>
            <video src="https://dndesigns.co.in/uploads/videos/atoneam-watch-viedoComp 2-compressed.mp4" autoPlay muted loop className='at-one-am-section-2-video-2'></video>
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
       <img src="https://dndesigns.co.in/uploads/videos/atoneamsection2.5imageafter-slider.jpg" className='img-fluid sticky-section-img-right' alt="" />
     
         <img src="https://dndesigns.co.in/uploads/videos/httpsdndesigns.co.inuploadsvideosatoneamsection2.5imageafter-imagetwo.jpg" className='img-fluid sticky-section-img-left' alt="" /> 
        
      </div>
      </div>
      </div>

      {/* mobile view */}

      



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
            Coffee is the medium. The real product is momentum. 1 AM transforms an everyday beverage into a badge of ambition for people whose most productive hours begin when the rest of the world switches off.
          </MomentumSectionPara>
        </div>
      </div>
      </div>

      <section className="sticky-section-parent skate-board-desktop" id="sticky-parent-2">
        <div className='container-fluid-custom'>

          <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-5" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-5" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
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
          <MomentumSection triggerSelector="#sticky-parent-6" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
          <img src="https://dndesigns.co.in/uploads/videos/skatesectionimageoneatoneam.jpg" className='img-fluid skate-board-section-mobile-img-one' alt="" />
        </div>

        <div className='skate-board-mobile-div-two'>
          <MomentumSection triggerSelector="#sticky-parent-6" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
          <img src="https://dndesigns.co.in/uploads/videos/skatesectionimagetwoatoneam.jpg" className='img-fluid skate-board-section-mobile-img-one' alt="" />
        </div>
      </section>


       {/* glb section */}
      <AtOneAmBoxBottle/>

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






      {/* color palete video */}
      <section className='color-palate-video-section'>
        <div className='container-fluid-custom'>
          <div className='color-palate-video-div'>
            <video src="https://dndesigns.co.in/uploads/videos/color-palet-desktopWhatsApp Video 2026-08-20 at 17.54.41.mp4" className='color-palate-desktop-video' autoPlay loop muted playsInline></video>

            <video src="https://dndesigns.co.in/uploads/videos/color-palate-mobileWhatsApp Video 2026-08-20 at 17.54.40.mp4" className='color-palate-mobile-video' autoPlay loop muted playsInline></video>
          </div>
        </div>
      </section>


      {/* video on scroll box opening */}
      {/* <AtOneAmVideoOnScroll/> */}


      {/* own-the-hour-section */}
      <section className='own-the-hour-section'>
        <div className='container-fluid-custom'>
          <div className='sticky-section-div'>
            <MomentumSection triggerSelector="#sticky-parent-7" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-7" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
          </div>

          <div className="own-the-hour-images-div">
            <img src="https://dndesigns.co.in/uploads/pages/ownthehourfirstimage.jpg" className='img-fluid own-the-hour-img-1'></img>
            <img src="https://dndesigns.co.in/uploads/pages/own-thehourimg2e.jpg" className='img-fluid own-the-hour-img-2'></img>
          </div>
        </div>
      </section>


      {/* shot show reel video section */}
      <section className='shot-show-reel-section'>
        <div className='shot-show-reel-section-div'>
           <video src="https://dndesigns.co.in/uploads/videos/showreelhjref1amfinalvideo.mp4" className='shot-show-reel-video' autoPlay loop muted playsInline></video>
        </div>
      </section>
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
            <img src="https://dndesigns.co.in/uploads/pages/at1amshowreelimage3.jpg" className='img-fluid social-media-showcase-image-1'></img>
              <video src="https://dndesigns.co.in/uploads/videos/socialmediaimg2ewjd.mp4" autoPlay loop muted className='img-fluid social-media-showcase-image-2'></video>
          </div>
        </div>
      </section>


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
            <MomentumSection triggerSelector="#sticky-parent-8" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-8" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
          </div>

<div>
          <div className='brewed-for-image-div'>
            <img src="https://dndesigns.co.in/uploads/pages/brewed-for-image-1.jpg" className='img-fluid brewed-for-image-1'></img>
            <img src="https://dndesigns.co.in/uploads/pages/httpsdndesigns.co.inuploadspagesbr2systum.jpg" className='img-fluid brewed-for-image-2'></img>
          </div>

           <div className='brewed-for-image-div'>
            <img src="https://dndesigns.co.in/uploads/pages/nightmodeatoneamnie.jpg" className='img-fluid brewed-for-image-3'></img>
            <img src="https://dndesigns.co.in/uploads/pages/skipbasicimagatoneamvvvv.jpg" className='img-fluid brewed-for-image-4'></img>
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
      <img src="https://dndesigns.co.in/uploads/pages/have1amvendingmachineimg2.jpg" className='vending-machine-img-2'></img>
    </div>

    <div className='vending-machine-img-div-2'>
      <img src="https://dndesigns.co.in/uploads/pages/nightmodesectionimgfdjtshirt.jpg" className='vending-machine-img-3'></img>
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
              <span className='blue-footer-btn'>LOREM IPSUM</span>
              <span className='orange-footer-btn'>LOREM IPSUM</span>
              </div>

              <div className='btn-div'>
              <span className='orange-footer-btn'>LOREM IPSUM</span>
              <span className='blue-footer-btn'>LOREM IPSUM</span>
              <span className='orange-footer-btn'>LOREM IPSUM</span>
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