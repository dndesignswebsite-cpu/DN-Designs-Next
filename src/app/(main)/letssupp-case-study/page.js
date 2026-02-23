import React from "react";
import "./lets-up-case-study.css";
import Image from "next/image";

function page() {
  let imageUrl = "https://dndesigns.co.in/uploads/pages/";
  return (
    <div>
      {/* hero section */}
      <section className="lets-up-hero">
        <div className="container-fluid p-0">
          <video
            src="https://dndesigns.co.in/uploads/videos/letsupCaseStudy.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            // className="enlitecasestudy-video"
          />
        </div>
      </section>

      {/* elevate your wellness ritual */}
      <section className="lets-up-elevate">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="lets-up-elevate-h1">Let’s Supp</h1>
              <h2 className="lets-up-elevate-h2">
                Elevate Your Wellness Ritual
              </h2>
            </div>
            <div className="col-12 col-md-6 lets-up-elevate-btn">
              <div className="lets-up-elevate-btn-up-div">
                <span className="btn-1">Let’s Supp</span>
                <span className="btn-2">Branding</span>
                <span className="btn-3">Visual Identity</span>
              </div>

              <div className="lets-up-elevate-btn-down-div">
                <span className="btn-4">Packaging Design</span>
                <span className="btn-5">Nutraceutical</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* lets-up-first-image */}
      <section className="lets-up-first-image">
        <div className="container">
          <div className="row">
            {/* <Image
              src={imageUrl + "Enlite1.webp"}
              className="responsive-img mt-5 lets-up-study-img1"
              alt="enlite case study page image"
              width={1500}
              height={1000}
            /> */}
             <video
            src="https://dndesigns.co.in/uploads/videos/lat1vid.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className="enlitecasestudy-video"
          />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Overview</h3>
              <h2 className="overview-h3-main-head">
                Building a Ritual-Driven Nutraceutical Brand
              </h2>
              <div className="overview-btn-div">
                <span className="overview-btn-1">Nutraceuticals</span>
                <sapn className="overview-btn-2">Health Supplements</sapn>
                <span className="overview-btn-3">2025</span>
              </div>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-para1">
                Let’s Supp is a modern nutraceutical brand built around one core belief - wellness should not feel complicated, it should instead feel simple and joyful. In a category defined by aggressive claims and visual overload, the goal was to create a brand that feels calm, clear, and trustworthy. We developed a complete identity and packaging system that transforms supplementation from a complex process to a simple, repeatable daily wellness ritual. 
              </p>

              <h3 className="overview-content-head">Problem Statement</h3>

              <p className="overview-content-para2">
                The nutraceutical landscape is saturated with complex scientific information, exaggerated promises, and visually overwhelming packaging systems. 
              </p>

              <p className="overview-content-para2">
                Brands compete for attention through urgency, rather than clarity, forcing consumers to evaluate and decode their choices constantly. This creates friction, fatigue, and weak long-term recall. 
              </p>

              <p className="overview-content-para2">
               Let’s Supp needed to stand apart not by saying more - but by creating a system built on clarity, continuity, and quiet confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* three image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcase1.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcase2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>

          <div className="row">
            {/* <img
                      src={imageUrl + "Enlite4.webp"}
                      alt=""
                      className="img-fluid enlitecase-study-img5"
                    /> */}

            <Image
              src={imageUrl + "letsupcase4.webp"}
              className="responsive-img letsup-case-study-three-image-row-img"
              alt="enlite case study page image"
              width={1500}
              height={1000}
            />
          </div>
        </div>
      </section>

      {/*  text and image section  */}
      <section className="text-image-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="text-image-head">Strategic Insight</h2>
              <p className="text-image-head-first">
                Wellness Lives in Repetition
              </p>
              <div className="second-para-div">
              <p className="text-image-head-second">
                Wellness is not defined by intensity. It is defined by consistency. The most meaningful health behaviours are quiet, repeated actions embedded into daily routine. 
              </p>

              <p className="text-image-head-second">
                This revealed an opportunity to reposition supplementation - not as a performance tool, but as a ritual.
              </p>

              <p className="text-image-head-second">This insight became the strategic foundation of the brand.</p>
              </div>
            </div>

            <div className="col-12 col-md-6">
                {/* <Image
                src={imageUrl + "Enlite2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              /> */}

                <video
            src="https://dndesigns.co.in/uploads/videos/lat2vid.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className="enlitecasestudy-video"
          />
            </div>
          </div>
        </div>
      </section>

       {/* lets-up-single-video */}
      <section className="">
        <div className="container">
           <video
            src="https://dndesigns.co.in/uploads/videos/lat3vid.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className="enlitecasestudy-video"
          />

          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcase7.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsup8.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section>


      {/*  text and image section  */}
      <section className="text-image-section">
        <div className="container">
          <div className="row">
           <div className="col-12 col-md-6">
                <Image
                src={imageUrl + "letsup9.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-6">
              <h2 className="text-image-head">Brand Idea</h2>
              <p className="text-image-head-first">
                Continuity as the Core Visual Language
              </p>
              <div className="second-para-div">
              <p className="text-image-head-second">
                To express this philosophy, we built the brand around a single principle: continuity.
              </p>

              <p className="text-image-head-second">
                This idea was expressed through the infinity structure - representing uninterrupted nourishment, daily repetition, and sustained wellbeing. 
              </p>

              <p className="text-image-head-second">Rather than functioning as a decorative symbol, continuity became the structural logic governing the entire identity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* three image 1*/}
      <section className="three-image1">
        <div className="container">
         

          <div className="row">

            <Image
              src={imageUrl + "caselets.webp"}
              className="responsive-img letsup-case-study-three-image-row-img"
              alt="enlite case study page image"
              width={1500}
              height={1000}
            />
          </div>

           <div className="row">
            <div className="col-12 col-md-6">
               <video
            src="https://dndesigns.co.in/uploads/videos/lat4vid.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className="enlitecasestudy-video"
          />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcase12.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section>

       {/*  text and image section  */}
      <section className="text-image-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="text-image-head">Identity System</h2>
              <p className="text-image-head-first">
                A System Built on Flow, Not Fragments
              </p>
              <div className="second-para-div">
              <p className="text-image-head-second">
               The infinity principle shapes every element of the visual identity. It is embedded within the logo itself, integrated into the double “P” of the wordmark, making continuity inseparable from the brand.
              </p>

              <p className="text-image-head-second">
                It also governs layout behaviour, information hierarchy, and colour organisation - ensuring every touchpoint feels connected and intentional.
              </p>

              <p className="text-image-head-second">Colour is used as a navigational tool, assigning distinct tonal identities to product categories while preserving system unity.</p>

              <p className="text-image-head-second">This creates a cohesive visual language that is both flexible and instantly recognisable.
              </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
                <Image
                src={imageUrl + "letsupcase13.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section>


      {/* small-large-image section */}
      {/* <section className="small-large-image-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
                  <Image
                src={imageUrl + "Enlite2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

             <div className="col-12 col-md-5">
                  <Image
                src={imageUrl + "Enlite2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section>


      
      <section className="small-large-image-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
                  <Image
                src={imageUrl + "Enlite2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

             <div className="col-12 col-md-5">
                  <Image
                src={imageUrl + "Enlite2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
         

           <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letscase17.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcase18.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section>

        {/*  text and image section  */}
      <section className="text-image-section">
        <div className="container">
          <div className="row">
           <div className="col-12 col-md-6">
                <Image
                src={imageUrl + "letsupcase19.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-6">
              <h2 className="text-image-head">Packaging System
</h2>
              <p className="text-image-head-first">
               Creating Clarity Through Structure
              </p>
              <div className="second-para-div">
              <p className="text-image-head-second">
               The packaging was designed to simplify decision-making. Information is organised in a clear, intuitive hierarchy, allowing users to understand the product quickly and confidently.
              </p>

              <p className="text-image-head-second">
                Transparent containers reinforce honesty and openness, allowing natural light to interact with the product and emphasise purity.
              </p>

              <p className="text-image-head-second">The result is packaging that feels calm, credible, and effortless to engage with.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* three image 1*/}
      <section className="three-image1">
        <div className="container">
         

          <div className="row">
            <Image
              src={imageUrl + "letsupcase20.jpg"}
              className="responsive-img letsup-case-study-three-image-row-img"
              alt="enlite case study page image"
              width={1500}
              height={1000}
            />
          </div>
        </div>
      </section>


      {/* three col content section start */}

      <section className="three-col-content-section">
        <div className="container">
          <div className="row three-row-content">
              <div className="col-12 col-md-4 three-col-content1">
                <p className="three-col-content-para">Protect, energize, and thrive with</p>
                <h3 className="three-col-content-head">Advanced Omega 3 care</h3>
              </div>

              <div className="col-12 col-md-4 three-col-content2">
                <p className="three-col-content-para">No Fish. No Smell. No Guilt. Just Pure</p>
                <h3 className="three-col-content-head">Plant Based Vegan Omega</h3>
              </div>


              <div className="col-12 col-md-4 three-col-content3">
                <p className="three-col-content-para">Daily Stress? Restore your inner calm with </p>
                <h3 className="three-col-content-head">Magnesium Balance</h3>
              </div>
          </div>
        </div>
      


      {/* three image in a column */}
      <section className="three-img-col">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
                   <Image
                src={imageUrl + "letsupcase21.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-4">
                   <Image
                src={imageUrl + "letsupcase22.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-4">
                   <Image
                src={imageUrl + "letscasej23.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section>
      </section>

      {/* three col content section for mobile */}

      <section className="three-col-content-mobile">
       <div className="container">
       <div className="row three-row-content">
              <div className="col-12 three-col-mob-content1">
                <p className="three-col-content-para">Protect, energize, and thrive with</p>
                <h3 className="three-col-content-head">Advanced Omega 3 care</h3>
              </div>

              <div className="col-12">
                    <Image
                src={imageUrl + "letsupcase21.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
              </div>



              <div className="col-12 three-col-mob-content2">
                <p className="three-col-content-para">No Fish. No Smell. No Guilt. Just Pure</p>
                <h3 className="three-col-content-head">Plant Based Vegan Omega</h3>
              </div>

               <div className="col-12">
                    <Image
                src={imageUrl + "letsupcase22.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
              </div>


              <div className="col-12 three-col-mob-content3">
                <p className="three-col-content-para">Daily Stress? Restore your inner calm with</p>
                <h3 className="three-col-content-head">Magnesium Balance</h3>
              </div>

               <div className="col-12">
                    <Image
                src={imageUrl + "letscasej23.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
              </div>


          </div>
       </div>
      </section>


      {/* three col content section end */}


       {/*  text and image section  */}
      <section className="text-image-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="text-image-head">Brand in Experience</h2>
              <p className="text-image-head-first">
                Extending Continuity Beyond Packaging
              </p>
              <div className="second-para-div">
              <p className="text-image-head-second">
                The identity translates seamlessly across digital and physical environments.
              </p>

              <p className="text-image-head-second">
                From interface design to brand communications, the system maintains consistency while adapting fluidly to context.
              </p>

              <p className="text-image-head-second">This creates a unified ecosystem where each interaction reinforces recognition and trust.
</p>
              </div>
            </div>

            <div className="col-12 col-md-6">
                <Image
                src={imageUrl + "letsupcasess24.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section>



        {/* three image 1*/}
      <section className="three-image1">
        <div className="container">
         

          <div className="row">

            {/* <Image
              src={imageUrl + "Enlite4.webp"}
              className="responsive-img letsup-case-study-three-image-row-img"
              alt="enlite case study page image"
              width={1500}
              height={1000}
            /> */}

               <video
            src="https://dndesigns.co.in/uploads/videos/lat5vid.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className="enlitecasestudy-video"
          />
          </div>

           <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcasen25.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcasehdb26.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section>



{/* lets-up-single-video */}
      <section className="">
        <div className="container">
            <video
            src="https://dndesigns.co.in/uploads/videos/lat6vid.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className="enlitecasestudy-video"
          />
        </div>
      </section>


       {/*  text and image section  */}
      <section className="text-image-section">
        <div className="container">
          <div className="row">
           <div className="col-12 col-md-6">
                <Image
                src={imageUrl + "letsupcase27.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-6">
              <h2 className="text-image-head">Outcome
</h2>
              <p className="text-image-head-first">
                A Brand Designed to Make Supplementation Feel Effortless

              </p>
              <div className="second-para-div">
              <p className="text-image-head-second">
               Let’s Supp introduces a new approach to nutraceutical branding - one rooted in clarity, consistency, and emotional resonance.
              </p>

              <p className="text-image-head-second">
               The system creates strong shelf presence, clear differentiation, and lasting recall while aligning naturally with human behaviour.
              </p>

              <p className="text-image-head-second">The result is not just a product people purchase, but a ritual they return to.
</p>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* lets-up-single-video */}
      <section className="">
        <div className="container">
          <video
            src="https://dndesigns.co.in/uploads/videos/lat7vid.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className="enlitecasestudy-video"
          />
        </div>
      </section>



       {/* three image in a column */}
      {/* <section className="three-img-col">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
                   <Image
                src={imageUrl + "Enlite2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-4">
                   <Image
                src={imageUrl + "Enlite2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-4">
                   <Image
                src={imageUrl + "Enlite2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section> */}



       {/* three image 1*/}
      <section className="three-image1">
        <div className="container">
           <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "ejletsupcase.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcasea31.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
              />
            </div>
          </div>


          <div className="row">

            <Image
              src={imageUrl + "letsupcaseh32.jpg"}
              className="responsive-img letsup-case-study-three-image-row-img"
              alt="enlite case study page image"
              width={1500}
              height={1000}
            />
          </div>
        </div>
      </section>





    </div>
  );
}

export default page;
