"use client"

import OurWorkToggle from "./OurWorkToggle";
import "./OurWorkHomeSection.css";
import Image from "next/image";
// import LPPureluxVideo from "./LPPureluxVideo";
import TalkToUs from "../TalkToUs/TalkToUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LPPureluxVideo from "./LPPureLuxVideo";


export default function OurWorkHomeSection() {
  const imageUrl = "https://dndesigns.co.in/uploads/pages/";

  


  return (
    <section className="our-work">
    <div className="container">
      <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-left-col">
                <p className="what-we-do-lefty-col-para">Our Work Portfolio</p>
                <h2 className="what-we-do-lefty-col-head">
                   Explore Our Finest Brand Creations
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="what-we-do-right-col">
                {/* <TalkToUs/> */}

                 <a
          href="#enquiry-form-desktop"
          className='btn-2-for-scroll'
        >
       <button className="talk-to-us">Talk to Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button> 
       </a>
              </div>
            </div>
          </div>
    </div>

      <div className="container">
         

        <div id="always-visible">
          <div className='row-div-what-we-do'>
          <div className='coldiv-what-we-do-left mt-4'>
          <div className='foundation-col'>
            <img src="https://dndesigns.co.in/uploads/pages/lppackgingorgainc.gif" className='img-fluid foundation-col-img'/>
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

          {/* <LPPureluxVideo/> */}
          <LPPureluxVideo/>
          </div>
          </div>  
        </div>

        <div className='row-div-what-we-do'>
          <div className='coldiv-what-we-do-one mt-4'>
          <div className='foundation-col'>
            <img src="https://dndesigns.co.in/uploads/pages/lppackpackgingfluke-gr.jpg.jpeg" className='img-fluid foundation-col-img'/>
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
            <img src="https://dndesigns.co.in/uploads/pages/lppackgingDAVID20graphic.jpg.jpeg" className='img-fluid foundation-col-img'/>
          </div>
          </div>  
        </div>
        </div>

        {/* Hidden content (SEO-rendered but hidden by default) */}
        <div id="more-content" style={{ display: "none" }}>
          {/*  Still server-rendered for SEO */}
          <div>
            <div className="row our-work-row">
              <div className="col-sm-12 col-md-6">
                <div className="imag-cont">
                

                   <Image
                  src={imageUrl + "the bobalist website.webp"}
                  alt="blog"
                  width={1500}
                  height={1000}
                  className="responsive-img image-cont-img"
                />
                 
                </div>
              </div>
              <div className="col-sm-12 col-md-3 our-work-div-unit">
                <div className="imag-cont">
                  {/* <img src={imageUrl + "i organic.webp"} alt="demo" /> */}
                   <Image
                  src={imageUrl + "i organic.webp"}
                  alt="blog"
                  width={750}
                  height={1050}
                  className="responsive-img image-cont-img"
                />
                </div>
              </div>
              <div className="col-sm-12 col-md-3 our-work-div-unit">
                <div className="imag-cont">
                    <Image
                 src={imageUrl + "koshish.webp"}
                  alt="blog"
                  width={750}
                  height={1050}
                  className="responsive-img image-cont-img"
                />
                </div>
              </div>
            </div>

         

          </div>
        </div>

        {/* Client toggle button */}
        <OurWorkToggle />
      </div>
    </section>
  );
}
