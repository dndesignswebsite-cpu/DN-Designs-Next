"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "./CityBrandingPagesSwipper.css";


const CityBrandingPagesSwipper = () => {
    return (
        <div className="packging-design-swipper-agency">
    <Swiper 
          loop={true}
          spaceBetween={20}
          navigation={false}
          pagination={true}
          speed={800}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="packging-deign-swipper"
    >

        {/* odd 1 */}
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <div className="packging-design-swipper-swiper-slide-content">
            <div>
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Brand<br></br> Positioning</h3>
          <p className="packging-design-swipper-swiper-slide-para packging-design-swipper-swiper-slide-para-dark">A clear space for your brand in the market.</p>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/01_brand-positioning.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image" alt="Brand positioning strategy for Kochi businesses"></img>
          
          </div>
        </div>
      </SwiperSlide>



      {/* even 2*/}
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-light">
          <div className="packging-design-swipper-swiper-slide-content">
            <div>
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-light" >Naming and <br></br>Messaging</h3>
           <p className="packging-design-swipper-swiper-slide-para packging-design-swipper-swiper-slide-para-white">The right words to tell your story.</p>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/02_naming-and-messaging.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image" alt="Brand naming and messaging strategy for businesses"></img>
          </div>
        </div>
      </SwiperSlide>


      {/* odd 3*/}
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <div className="packging-design-swipper-swiper-slide-content">
            <div>
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Brand Identity<br></br> Design</h3>
          <p className="packging-design-swipper-swiper-slide-para packging-design-swipper-swiper-slide-para-dark">A distinctive look that people recognise.</p>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/03_brand-identity-design.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image" alt="Brand identity design and visual branding"></img>
          
          </div>
        </div>
      </SwiperSlide>

      {/* even 4*/}
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-light">
          <div className="packging-design-swipper-swiper-slide-content">
            <div>
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-light" >Packaging<br></br> Design</h3>
           <p className="packging-design-swipper-swiper-slide-para packging-design-swipper-swiper-slide-para-white">Shelf-Ready packs that get picked up.</p>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/04_packaging-design.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image" alt="Packaging design for FMCG and consumer brands"></img>
          </div>
        </div>
      </SwiperSlide>


      {/* odd 5*/}
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <div className="packging-design-swipper-swiper-slide-content">
            <div>
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Go-to-Market<br></br> Strategy</h3>
          <p className="packging-design-swipper-swiper-slide-para packging-design-swipper-swiper-slide-para-dark">A clear plan to launch your brand.</p>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/05_go-to-market-strategy.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image" alt="Go-to-market strategy for new and growing brands"></img>
          
          </div>
        </div>
      </SwiperSlide>

      {/* even 6*/}
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-light">
          <div className="packging-design-swipper-swiper-slide-content">
            <div>
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-light" >Photography</h3>
           <p className="packging-design-swipper-swiper-slide-para packging-design-swipper-swiper-slide-para-white">Visuals that bring your products to life.</p>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/06_photography.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image" alt="Product photography for brand and packaging presentation"></img>
          </div>
        </div>
      </SwiperSlide>

      {/* odd 7*/}
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <div className="packging-design-swipper-swiper-slide-content">
            <div>
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Animation</h3>
          <p className="packging-design-swipper-swiper-slide-para packging-design-swipper-swiper-slide-para-dark">Motion that makes your brand stand out.</p>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/07_animation.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image" alt="Brand animation and visual communication"></img>
          
          </div>
        </div>
      </SwiperSlide>


      {/* even 8*/}
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-light">
          <div className="packging-design-swipper-swiper-slide-content">
            <div>
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-light" >Brand<br></br> Guidelines</h3>
           <p className="packging-design-swipper-swiper-slide-para packging-design-swipper-swiper-slide-para-white">Simple rules that keep every touchpoint consistent.</p>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/08_brand-guidelines.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image" alt="Brand guidelines for consistent visual identity"></img>
          </div>
        </div>
      </SwiperSlide>

      {/* odd 9*/}
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <div className="packging-design-swipper-swiper-slide-content">
            <div>
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Website and<br></br> Digital Presence</h3>
          <p className="packging-design-swipper-swiper-slide-para packging-design-swipper-swiper-slide-para-dark"> One connected system, online and offline.</p>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/09_website-and-digital-presence.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image" alt="Website and digital presence design for brands"></img>
          
          </div>
        </div>
      </SwiperSlide>


      



     
    </Swiper>
        </div>
    );
}

export default CityBrandingPagesSwipper;
