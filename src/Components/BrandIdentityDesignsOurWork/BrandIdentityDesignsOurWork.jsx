import React from 'react'
import "./BrandIdentityDesignsOurWork.css"
import Image from 'next/image'

function BrandIdentityDesignsOurWork() {
    const imageUrl = "https://dndesigns.co.in/uploads/pages/";
  return (
    <div>
      <section className="our-work">
      
            <div className="container-fluid">
              <h2 className="text-center mb-4">
                Brands  <span className="every-pr">We’ve Built</span>
              </h2>



              

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

                                   <div className="col-sm-12 col-md-6 fluke-video-div-col">
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

                                        </div>
      
              
                <div className="row our-work-row">
                  <div className="col-sm-12 col-md-6 our-work-div-unit">
                    <div className="imag-cont">
                      
      
                      <Image
                        src={imageUrl + "enlite graphic.webp"}
                        alt="blog"
                        width={1500}
                        height={1000}
                        className="responsive-img image-cont-img"
                      />
      
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
                             <div className="col-sm-12 col-md-6 col-lg-6 our-work-div-unit our-work-div-unit-purelux">
                                         <div className="imag-cont">
                                              {/* <img src={imageUrl + "i orgainc gif.gif"} alt="demo" /> */}
                            
                                                <Image
                                             src={imageUrl + "lets (1).webp"}
                                              alt="blog"
                                              width={1500}
                                              height={1000}
                                              className="responsive-img image-cont-img"
                                            />
                                              <div className="overlay"></div>
                                              <div className="overlay-box">
                                                <div className="overlay-title">Let's Supp</div>
                                                <p className="Pras">Complete Wellness, Simplified</p>
                                              </div>
                                            </div>
                                        </div>
                            </div>



                            
                </div>
                </section>
      
    </div>
  )
}

export default BrandIdentityDesignsOurWork
