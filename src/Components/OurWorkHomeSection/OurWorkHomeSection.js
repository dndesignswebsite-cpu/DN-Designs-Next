import OurWorkToggle from "./OurWorkToggle";
import  "./OurWorkHomeSection.css"

export default function  OurWorkHomeSection() {
  return (
    <section className="our-work">
      <div className="container-fluid">
        <h2 className="text-center mb-4">Our Work</h2>

        
        <div id="always-visible">
          <div className="row our-work-row">
            <div className="col-sm-12 col-md-6 our-work-div-unit">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
                  alt="demo"
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/2-3.jpg"
                  alt="demo"
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/thames-graphic-webiste-750x1050-1.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Thames</div>
                  <p className="Pras">For the Love of Protein</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row our-work-row">
            <div className="col-sm-12 col-md-3">
              <div className="imag-cont">
                 <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/finalboba.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Thames</div>
                  <p className="Pras">For the Love of Protein</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 our-work-div-unit">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/nature-balance.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Nature's Balance</div>
                  <p className="Pras">Fuel your day the green way</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 our-work-div-unit">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/VEIKK.jpg"
                  alt="demo"
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
            <div className="col-sm-12 col-md-6">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/greenhorn-manu.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Green Horn</div>
                  <p className="Pras">Smart Energy, Bold You</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 our-work-div-unit">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/kalprishi.jpg"
                  alt="demo"
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

        {/* Hidden content (SEO-rendered but hidden by default) */}
        <div id="more-content" style={{ display: "none" }}>
          {/* ✅ Still server-rendered for SEO */}
         <div>
              <div className="row our-work-row">
                <div className="col-sm-12 col-md-6">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/04/5.jpg"
                      alt="demo"
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
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/9.jpg"
                      alt="demo"
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
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/3-2.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">Koshish</div>
                      <p className="Pras">Vasudhaiva Kutumvakam</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row our-work-row">
                <div className="col-sm-12 col-md-3">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/Logo.jpg"
                      alt="demo"
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
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/jhfjk.mp4"
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
                <div className="col-sm-12 col-md-3 our-work-div-unit">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/smartyums-1.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">Smart Yums</div>
                      <p className="Pras">Food of the Future</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row our-work-row">
                <div className="col-sm-12 col-md-6">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/08/Wlues.jpg"
                      alt="demo"
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
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2024/10/ezgif.com-speed-1.gif"
                      alt="demo"
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
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/finaljhhh.mp4"
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
                <div className="col-sm-12 col-md-3 our-work-div-unit">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/9.jpg"
                      alt="demo"
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
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/3-2.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">Koshish</div>
                      <p className="Pras">Vasudhaiva Kutumvakam</p>
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

