"use client";
import React from "react";
import "./LPBrandIdentityCategorySwipper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Link from "next/link";

function LPBrandIdentityCategorySwipper() {
  return (
    <div>
      <section className="industry-swipper-section">
        <div className="container">
          <div className="industry-swipper-section-content-div">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="industry-swipper-section-content-left-col">
                  <p className="industry-swipper-section-content-label-para">
                    Sector Expertise
                  </p>
                  <h2 className="industry-swipper-section-content-head">
                    Industries We Serve
                  </h2>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="industry-swipper-section-content-right-col">
                  <p className="industry-swipper-section-content-right-col-para-desc">
                    Providing end-to-end solutions to build brands across categories. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
            }}
             breakpoints={{
    0:{
      slidesPerView:1,
      spaceBetween:20
    },
    768:{
      slidesPerView:2,
      spaceBetween:20
    },
    992:{
      slidesPerView:3,
      spaceBetween:30
    }
  }}
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper_mm"
          >

          {/* slide 1 */}
          
            <SwiperSlide>
            <Link href="/food-beverage-branding">
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/foodandbaveragesourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Food & Beverage</h3>
                <p className="swipper-slide-div-para-desc">
                 F&B brands need to entice and evoke a desire to purchase. That is precisely what we do - create a brand identity that ignites cravings, drives differentiation and encourages repeat purchase. 
                </p>
              </div>
              </Link>
            </SwiperSlide>
            

            {/* slide 2 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/FMCGourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">FMCG</h3>
                <p className="swipper-slide-div-para-desc">
                From catching attention on the store shelf to reaching the billing counter, FMCG products face a challenging journey. Our branding and packaging design services help them stand out and achieve checkout success.
                </p>
              </div>
            </SwiperSlide>

            {/* slide 3 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/PersonalWellnessourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Personal Wellness</h3>
                <p className="swipper-slide-div-para-desc">
                  Wellness brands succeed only when they feel authentic and inspire trust. We design brands that do just that. We help brands communicate their purpose clearly and connect emotionally with customers.
                </p>
              </div>
            </SwiperSlide>


            {/* slide 4 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/HealthcareBrandsourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Healthcare Brands</h3>
                <p className="swipper-slide-div-para-desc">
                  When it comes to healthcare branding, expertise, authority and compassionate communication go together. We build brands that convey clinical authority, inspire confidence and make people feel cared for.
                </p>
              </div>
            </SwiperSlide>

            {/* slide 5 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Jewelleryourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Jewellery</h3>
                <p className="swipper-slide-div-para-desc">
                 In this industry, authenticity, trust, craftsmanship, and reputation reign supreme. Our strategic branding and design services help jewellery brands communicate these to build credibility and desirability.
                </p>
              </div>
            </SwiperSlide>


            {/* slide 6 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Skincareourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Skincare </h3>
                <p className="swipper-slide-div-para-desc">
                  Great formulations are important, but standing out amidst countless skincare brands is equally significant. We create distinctive skincare brands that simplify complex science, build trust and desire, and drive purchase.
                </p>
              </div>
            </SwiperSlide>

            {/* slide 7 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Fashionourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Fashion</h3>
                <p className="swipper-slide-div-para-desc">
                  The fashion industry is not just saturated; it is also trend-driven. Standing out and staying relevant is quite challenging. We build strong fashion brands that rise above fleeting trends and build desire, differentiation and loyalty.
                </p>
              </div>
            </SwiperSlide>

            {/* slide 8 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Educationourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Education</h3>
                <p className="swipper-slide-div-para-desc">
                  Parents & students look for trust and reliability when it comes to education. Our branding, design, and communication solutions help brands build authority and reputation and drive growth.
                </p>
              </div>
            </SwiperSlide>


            {/* slide 9 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Travel&Hospitalityourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Travel & Hospitality </h3>
                <p className="swipper-slide-div-para-desc">
                  Travellers and guests prefer brands they remember and trust. We build travel & hospitality brands that feel welcoming and premium, build lasting guest connections and increase direct bookings.
                </p>
              </div>
            </SwiperSlide>


            {/* slide 10 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Technologyourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Technology</h3>
                <p className="swipper-slide-div-para-desc">
                 The tech landscape is evolving rapidly, and innovation alone is not sufficient to succeed. We build technology brands that succeed with strategic identity and positioning and simplicity in communication. 
                </p>
              </div>
            </SwiperSlide>

            {/* slide 11 */}
            <SwiperSlide>
              <div className="swipper-slide-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Automobileourcategory.jpg"
                  className="img-fluid swipper-slide-div-img"
                ></img>
                <h3 className="swipper-slide-div-head">Automobile</h3>
                <p className="swipper-slide-div-para-desc">
                  In the intensely competitive market, standing out and earning customers’ trust is important. We develop powerful brand identities that communicate engineering, aspiration and reliability - all at once.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default LPBrandIdentityCategorySwipper;
