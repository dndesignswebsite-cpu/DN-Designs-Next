import React from "react";
import "./photography-01.css";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";
import Form from "@/Components/Form/Form";
import PhotographyPrompt from "@/Components/PhotographyPrompt/PhotographyPrompt"
import PhotographyHoverLinks from "@/Components/PhotographyHoverLinks/PhotographyHoverLinks"
import PhotographyPromptAnother from "@/Components/PhotographyPromptAnother/PhotographyPromptAnother";
import PhotographyHero from "@/Components/PhotographyHero/PhotographyHero";

function page() {
   // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "It’s difficult to be seen and heard in a crowd, isn’t it? There is just so much noise. It is the same with product market – too many brands, lots of promise and intense competition. Rising above this chaos is what helps you establish your identity and secure your position in this competitive landscape. This is what we, as a branding and design agency, do for you. Curious to know more about us? Let’s sit down, enjoy a cup of coffee and discuss your project.";
    const pageName = "about-us";
  return (
    <div>


    <PhotographyHero/>


     {/* Numbers that Define Us */}
      <section className="numbers-that-define-us">
        <div className="container">

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
               <h2 className="numbers-that-define-us-head">Numbers that Define Us</h2>
               <p className="numbers-that-define-us-para">Velvet Signal is a studio of soft power — where design moves gently yet leaves a lasting mark. We create digital experiences that feel tactile and human, translating  subtle emotion into rich visual texture. Each project begins with quiet intuition, refined  into timeless, balanced form.</p>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            {/* <div className="hover-section-to-div">
              <a href="#theme-based" className="hover-section-to-anchor-link"><h2 className="hover-section-to-div-head">AI Photography</h2></a> <span className="hover-section-to-div-head-span">Projects launched, refined, an.</span>
            </div>

            <div className="hover-section-to-div">
              <a href="#e-commerce" className="hover-section-to-anchor-link"><h2 className="hover-section-to-div-head">E-Commerce</h2></a> <span className="hover-section-to-div-head-span">Projects launched, refined, an.</span>
            </div>

            <div className="hover-section-to-div">
              <a href="#content-creation" className="hover-section-to-anchor-link"><h2 className="hover-section-to-div-head">Theme Based</h2></a> <span className="hover-section-to-div-head-span">Projects launched, refined, an.</span>
            </div>

            <div className="hover-section-to-div">
              <a href="#content-creation" className="hover-section-to-anchor-link"><h2 className="hover-section-to-div-head">Content Creation</h2></a> <span className="hover-section-to-div-head-span">Projects launched, refined, an.</span>
            </div>  */}
            <PhotographyHoverLinks/>
            
            </div>
          </div>

          <div className="driven-by-curiosity-content">
             <h2 className="driven-by-curiosity-content-head">Driven by curiosity</h2>
              <p className="driven-by-curiosity-content-para">At Echelon®, we design beyond convention. Every detail, every motion, every moment — crafted to redefine what a studio website can be.</p> 
          </div>

          {/* <PhotographyPrompt/> */}
            <PhotographyPromptAnother/>

          <div className="row theme-based-content-row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para-theme">
                At Echelon, we build more than websites — we craft digital
                presence with purpose. Standing at the intersection of design,
                strategy, and technology, we create experiences that move brands
                forward and leave a lasting impression.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4">
              <div className="at-echelon-mid-col">
                <TalkToUs />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para-theme">
                At Echelon, we build more than websites — we craft digital
                presence with purpose. Standing at the intersection of design,
                strategy, and technology, we create experiences that move brands
                forward and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* content-creation */}
      <section className="content-creation-section" id="content-creation">
        <div className="container">
          <h2 className="content-creation-head">Content Creation</h2>

          <div className="row content-creation-main-row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="content-creation-main-col">
                <p className="content-creation-main-col-label-para">
                  Personalise Reels Shot
                </p>
                <div className="row content-creation-main-sub-row">
                  <div className="col-3 content-creation-main-sub-col-left">
                    <img
                      src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                      className="img-fluid content-creation-main-sub-col-left-img"
                    ></img>
                  </div>

                  <div className="col-6 content-creation-main-sub-col-mid">
                    <img
                      src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                      className="img-fluid content-creation-main-sub-col-mid-upper-img"
                    ></img>
                    <div className="row content-creation-main-sub-mid-col-super-sub-row">
                      <div className="col content-creation-main-sub-mid-col-super-sub-col">
                        <img
                          src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-left-img"
                        ></img>
                      </div>
                      <div className="col content-creation-main-sub-mid-col-super-sub-col">
                        <img
                          src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-right-img"
                        ></img>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 content-creation-main-sub-col-right">
                    <img
                      src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                      className="img-fluid content-creation-main-sub-col-right-img"
                    ></img>
                  </div>
                </div>

                <div className="content-creation-content">
                  <h2 className="content-creation-col-head">
                    Your product, new scenes on demand.
                  </h2>
                  <div className="content-creation-col-para-logo-div">
                    <p className="content-creation-col-para-logo-div-logo-para">
                      Drop a product photo and we build clean packshots and
                      styled lifestyle scenes around it.
                    </p>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0700/6037/6225/files/promotes.svg?v=1779782296"
                      className="content-creation-col-para-logo-div-logo"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="content-creation-main-col">
                <p className="content-creation-main-col-label-para">
                  Personalise Reels Shot
                </p>
                <div className="row content-creation-main-sub-row">
                  <div className="col-3 content-creation-main-sub-col-left">
                    <img
                      src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                      className="img-fluid content-creation-main-sub-col-left-img"
                    ></img>
                  </div>
                  <div className="col-6 content-creation-main-sub-col-mid">
                    <img
                      src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                      className="img-fluid content-creation-main-sub-col-mid-upper-img"
                    ></img>
                    <div className="row content-creation-main-sub-mid-col-super-sub-row">
                      <div className="col content-creation-main-sub-mid-col-super-sub-col">
                        <img
                          src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-left-img"
                        ></img>
                      </div>
                      <div className="col content-creation-main-sub-mid-col-super-sub-col">
                        <img
                          src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
                          className="img-fluid content-creation-main-sub-mid-col-super-sub-col-right-img"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 content-creation-main-sub-col-right">
                    <img
                      src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                      className="img-fluid content-creation-main-sub-col-right-img"
                    ></img>
                  </div>
                </div>
                <div className="content-creation-content">
                  <h2 className="content-creation-col-head">
                    Your product, new scenes on demand.
                  </h2>
                  <div className="content-creation-col-para-logo-div">
                    <p className="content-creation-col-para-logo-div-logo-para">
                      Drop a product photo and we build clean packshots and
                      styled lifestyle scenes around it.
                    </p>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0700/6037/6225/files/promotes.svg?v=1779782296"
                      className="content-creation-col-para-logo-div-logo"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* at-echelon */}
      <section className="at-echelon-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para">
                At Echelon, we build more than websites — we craft digital
                presence with purpose. Standing at the intersection of design,
                strategy, and technology, we create experiences that move brands
                forward and leave a lasting impression.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4">
              <div className="at-echelon-mid-col">
                <TalkToUs />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para">
                At Echelon, we build more than websites — we craft digital
                presence with purpose. Standing at the intersection of design,
                strategy, and technology, we create experiences that move brands
                forward and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* theme based */}
      <section className="theme-based-section" id="theme-based">
        <div className="container">
          <h2 className="theme-based-head">Theme Based </h2>
          <video
            src="https://dndesigns.co.in/uploads/videos/finaljhhh.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className=""
          />
          <div className="row theme-based-content-row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para-theme">
                At Echelon, we build more than websites — we craft digital
                presence with purpose. Standing at the intersection of design,
                strategy, and technology, we create experiences that move brands
                forward and leave a lasting impression.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4">
              <div className="at-echelon-mid-col">
                <TalkToUs />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para-theme">
                At Echelon, we build more than websites — we craft digital
                presence with purpose. Standing at the intersection of design,
                strategy, and technology, we create experiences that move brands
                forward and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E- Commerce Photography */}
      <section className="e-commerce-photography" id="e-commerce">
        <div className="container">
          <div className="row e-commerce-photography-row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <h2 className="e-commerce-photography-head">
                E- Commerce Photography{" "}
              </h2>
              <p className="e-commerce-photography-para">
                At Echelon®, we design beyond convention. Every detail, every
                motion, every moment — crafted to redefine what a studio website
                can be.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 mt-4">
              <video
                src="https://dndesigns.co.in/uploads/videos/threeSistersVideo.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para">
                At Echelon, we build more than websites — we craft digital
                presence with purpose. Standing at the intersection of design,
                strategy, and technology, we create experiences that move brands
                forward and leave a lasting impression.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-4">
              <div className="at-echelon-mid-col">
                <TalkToUs />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-4">
              <p className="at-echelon-para">
                At Echelon, we build more than websites — we craft digital
                presence with purpose. Standing at the intersection of design,
                strategy, and technology, we create experiences that move brands
                forward and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="form">
         <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName} />
      </section>


     


    </div>
  );
}

export default page;
