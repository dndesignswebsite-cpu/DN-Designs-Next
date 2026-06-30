"use client"

import OurWorkToggle from "./OurWorkToggle";
import "./OurWorkHomeSection.css";
import Image from "next/image";
import PureluxVideo from "./PureluxVideo";
import TalkToUs from "../TalkToUs/TalkToUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


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

      <div className="container-fluid">
         

        <div id="always-visible">
          <div className="row our-work-row">
            <div className="col-sm-12 col-md-6 our-work-div-unit">
              <div className="imag-cont">
                

                {/* <Image
                  src={imageUrl + "enlite graphic.webp"}
                  alt="blog"
                  width={1500}
                  height={1000}
                  className="responsive-img image-cont-img"
                /> */}

                <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/uploads/videos/Can-2-1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                

                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Rithm's Enlite</div>
                  <p className="Pras">Bubbles with benefits</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 our-work-div-unit">
              <div className="imag-cont ">
                

                 <Image
                  src={imageUrl + "nectarpure graphic.webp"}
                  alt="blog"
                  width={750}
                  height={1050}
                  className="responsive-img image-cont-img"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">NectarPure</div>
                  <p className="Pras">A Revolution in Nutritional Absorption</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 our-work-div-unit">
              <div className="imag-cont">
                

                <Image
                  src={imageUrl + "brrat.jpg"}
                  alt="blog"
                  width={750}
                  height={1050}
                  className="responsive-img image-cont-img"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">BRRAT</div>
                  <p className="Pras">Sip the Chaos. Stay a Brrat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row our-work-row">
            <div className="col-sm-12 col-md-3">
              <div className="imag-cont">
                <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/uploads/videos/the bobalist video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">The Bobalist</div>
                  <p className="Pras">Pop the boba, feel the Fun</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 our-work-div-unit">
              <div className="imag-cont">
                {/* <img src={imageUrl + "nature-balance (1).webp"} alt="demo" /> */}

                 {/* <Image
                  src={imageUrl + "nature-balance (1).webp"}
                  alt="blog"
                  width={1500}
                  height={1000}
                  className="responsive-img image-cont-img"
                /> */}
                <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/uploads/videos/threeSistersVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">3 sisters</div>
                  <p className="Pras">Taste the Freedom to Celebrate
</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 our-work-div-unit">
              <div className="imag-cont">
                {/* <img src={imageUrl + "VEIKK.webp"} alt="demo" /> */}

                 <Image
                  src={imageUrl + "VEIKK.webp"}
                  alt="blog"
                  width={750}
                  height={1050}
                  className="responsive-img image-cont-img"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Veikk</div>
                  <p className="Pras">Photography</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row our-work-row">
            <div className="col-sm-12 col-md-12 col-lg-6">
<div className="purelux-video-component">
<PureluxVideo/>
</div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 our-work-div-unit our-work-div-unit-purelux">
             <div className="imag-cont">
                  {/* <img src={imageUrl + "i orgainc gif.gif"} alt="demo" /> */}

                    {/* <Image
                 src={imageUrl + "lets (1).webp"}
                  alt="blog"
                  width={1500}
                  height={1000}
                  className="responsive-img image-cont-img"
                /> */}

                <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/uploads/videos/lat3vid.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">Let's Up</div>
                    <p className="Pras">Complete Wellness, Simplified</p>
                  </div>
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
                  {/* <img
                    src={imageUrl + "the bobalist website.webp"}
                    alt="demo"
                  /> */}

                   <Image
                  src={imageUrl + "the bobalist website.webp"}
                  alt="blog"
                  width={1500}
                  height={1000}
                  className="responsive-img image-cont-img"
                />
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">The Bobalist</div>
                    <p className="Pras">Pop the boba, feel the Fun</p>
                  </div>
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
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">iOrganic</div>
                    <p className="Pras">Ideal food for you</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 our-work-div-unit">
                <div className="imag-cont">
                  {/* <img src={imageUrl + "koshish.webp"} alt="demo" /> */}
                    <Image
                 src={imageUrl + "koshish.webp"}
                  alt="blog"
                  width={750}
                  height={1050}
                  className="responsive-img image-cont-img"
                />
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">Koshish</div>
                    <p className="Pras">Vasudhaiva Kutumvakam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row our-work-row">
              <div className="col-sm-12 col-md-3">
                <div className="imag-cont">
                 

                   <Image
                 src={imageUrl + "Deeproot logo.webp"}
                  alt="blog"
                  width={750}
                  height={1050}
                  className="responsive-img image-cont-img"
                />
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">Deeproot</div>
                    <p className="Pras">One crunch, many flavours</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 our-work-div-unit">
                <div className="imag-cont">
                  <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/uploads/videos/qualiteq website.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">Qualiteq</div>
                    <p className="Pras">Because your vision needs precision</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 our-work-div-unit">
                <div className="imag-cont">
                 

                   <Image
                 src={imageUrl + "smartyums graphic.webp"}
                  alt="blog"
                  width={750}
                  height={1050}
                  className="responsive-img image-cont-img"
                />
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">Smart Yums</div>
                    <p className="Pras">Food of the Future</p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="row our-work-row">
              <div className="col-sm-12 col-md-6">
                <div className="imag-cont">
                  {/* <img src={imageUrl + "Wlues graphic.webp"} alt="demo" /> */}
                    <Image
                 src={imageUrl + "Wlues graphic.webp"}
                  alt="blog"
                  width={1500}
                  height={1000}
                  className="responsive-img image-cont-img"
                />
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">Wlue's</div>
                    <p className="Pras">Only for winners</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 our-work-div-unit">
                <div className="imag-cont">
                  {/* <img src={imageUrl + "i orgainc gif.gif"} alt="demo" /> */}

                    <Image
                 src={imageUrl + "i orgainc gif.gif"}
                  alt="blog"
                  width={1500}
                  height={1000}
                  className="responsive-img image-cont-img"
                />
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">iOrganic</div>
                    <p className="Pras">Ideal food for you</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row our-work-row">
              <div className="col-sm-12 col-md-6">
                <div className="imag-cont">
                  <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/uploads/videos/finaljhhh.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">Fluke</div>
                    <p className="Pras">Energy With Purpose</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 our-work-div-unit">
                <div className="imag-cont">
                  {/* <img src={imageUrl + "DAVID graphic.webp"} alt="demo" /> */}

                      <Image
                 src={imageUrl + "DAVID graphic.webp"} 
                  alt="blog"
                  width={750}
                  height={1050}
                  className="responsive-img image-cont-img"
                />
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">David Morris</div>
                    <p className="Pras">The London Jeweller</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 our-work-div-unit">
                <div className="imag-cont">
                  <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/uploads/videos/Mr bomzy video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">Mr.Bomzy</div>
                    <p className="Pras">Drop Fizz Chill Spik</p>
                  </div>
                </div>
              </div>
            </div>




            <div className="row our-work-row">
              <div className="col-sm-12 col-md-6">
                <div className="imag-cont">
                  {/* <img src={imageUrl + "Wlues graphic.webp"} alt="demo" /> */}
                   <Image
                  src={imageUrl + "nature-balance (1).webp"}
                  alt="blog"
                  width={1500}
                  height={1000}
                  className="responsive-img image-cont-img"
                />
                  <div className="overlay"></div>
                  <div className="overlay-box">
                    <div className="overlay-title">Nature's Balance</div>
                    <p className="Pras">Fuel your day the green way</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 our-work-div-unit">
                <div className="imag-cont">
                {/* <img src={imageUrl + "kalprishi.webp"} alt="demo" /> */}
                 <Image
                  src={imageUrl + "kalprishi.webp"}
                  alt="blog"
                  width={1500}
                  height={1000}
                  className="responsive-img image-cont-img"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Kalprishi</div>
                  <p className="Pras">Flavours that celebrate</p>
                </div>
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
