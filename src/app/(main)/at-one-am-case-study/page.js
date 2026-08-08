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
          <img src="https://dndesigns.co.in/uploads/pages/atoneamcasestidybannerafetrhero.jpeg" className='img-fluid banner-after-hero-img' alt="" />
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
      <section className="sticky-section-parent" id="sticky-parent-1">
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
            <img src="https://dndesigns.co.in/uploads/pages/atoneamsectionfirstimagefour.jpg" className='img-fluid sticky-section-img-right' alt="" />
            {/* <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-left' alt="" /> */}
            <video src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagefourvideoFirst.mp4" autoPlay muted loop className='at-one-am-video-after-banner'></video>
          </div>

          <div className='sticky-section-img-div-three'>
            <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagesixdj.jpg" className='img-fluid sticky-section-img-right' alt="" />
            <img src="https://dndesigns.co.in/uploads/videos/atoneamsectionfirstimagesevened.jpg" className='img-fluid sticky-section-img-left' alt="" />
          </div>

        </div>
      </section>

      {/* section 2 */}
      {/* blue background */}
      <div className='blue-background-section'></div>
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
            <MomentumSection triggerSelector="#sticky-parent-2" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-2" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
          </div>

          <div className='sticky-section-img-div'>
            <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-left' alt="" />
            <img src="https://dndesigns.co.in/uploads/pages/3ewrcgyurgyu.webp" className='img-fluid sticky-section-img-right' alt="" />
          </div>

          <div className='sticky-section-two-img-div-two'>
            <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-right' alt="" />
            
            <div>
            <img src="https://dndesigns.co.in/uploads/pages/3ewrcgyurgyu.webp" className='img-fluid sticky-section-img-left' alt="" />
            <div className="second-section-stack-img">
            <img src="https://dndesigns.co.in/uploads/pages/3ewrcgyurgyu.webp" className='img-fluid sticky-section-img-left' alt="" />
            </div>
            </div>
          </div>

        </div>
      </section>


      {/* swipper continues slider */}
      <AtOneAmContinueSlider/>


      {/* alone two images after slider */}
      <div className='alone-two-images'>
      <div className='container-fluid-custom'>
      <div className="alone-two-images-after-slider-div">
       <img src="https://dndesigns.co.in/uploads/pages/atoneamsectionfirstimagetwo.jpg" className='img-fluid sticky-section-img-right' alt="" />
         <img src="https://dndesigns.co.in/uploads/pages/atoneamsectionfirstimageone.jpg" className='img-fluid sticky-section-img-left' alt="" />
           
      </div>
      </div>
      </div>




       {/* section 3  skate board*/}
      {/* blue background */}
      <div className='blue-background-section'></div>
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
            <MomentumSection triggerSelector="#sticky-parent-3" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-3" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
          </div>

          <div className='sticky-section-img-div'>
           <img src="https://dndesigns.co.in/uploads/pages/3ewrcgyurgyu.webp" className='img-fluid sticky-section-img-right' alt="" />
            <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-left' alt="" />
          </div>

          <div className='skate-board-div'>
          <AOSProvider> <div data-aos="slide-right"
    data-aos-duration="3000"
    data-aos-once="false"
    >
            <img src="https://dndesigns.co.in/uploads/pages/ssqwsdxatoneamcasestudysaketeboard.jpg.png" className='img-fluid skate-borad-img'></img>
            </div>
             </AOSProvider>
          </div>
        </div>
      </section>



       {/* section 4*/}
      {/* blue background */}
      <div className='blue-background-section'></div>
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
            <MomentumSection triggerSelector="#sticky-parent-3" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
            <MomentumSection triggerSelector="#sticky-parent-3" className="sticky-section-text at-one-am-font">LOREM IPSUM</MomentumSection>
          </div>

          <div className='sticky-section-img-div'>
           <img src="https://dndesigns.co.in/uploads/pages/3ewrcgyurgyu.webp" className='img-fluid sticky-section-img-right' alt="" />
            <img src="https://dndesigns.co.in/uploads/pages/10.webp" className='img-fluid sticky-section-img-left' alt="" />
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