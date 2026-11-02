"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "./PackagingDesignSwipper.css";


const PackagingDesignSwipper = () => {
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
      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-dark">01.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Research and Consultation</h3>
          <img src="https://dndesigns.co.in/uploads/pages/research-and-consultaion-packaging-design-agency-in-noida.jpg" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/foodandbevaragesevenimage.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-light">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-light">02.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-light" >Packaging Architecture</h3>
          <img src="https://dndesigns.co.in/uploads/pages/packaging-architure-packaging-design-agency-in-noida.jpg" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/packgingdesignagecyswipperladder.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-dark">03.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Packaging Design</h3>
          <img src="https://dndesigns.co.in/uploads/pages/packging-design-packaging-design-agency-in-noida.jpg" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/foodandbevaragesevenimage.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>

     <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-light">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-light">04.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-light" >Brand Identity Design</h3>
          <img src="https://dndesigns.co.in/uploads/pages/brand-identity-design-packaging-design-agency-in-noida.jpg" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/packgingdesignagecyswipperladder.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>

       <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-dark">05.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Product Photography</h3>
          
          <img src="https://dndesigns.co.in/uploads/pages/legal-complinace-packaging-design-agency-in-noida.jpg" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/foodandbevaragesevenimage.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-light">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-light">06.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-light" >Legal Compliance </h3>
          <img src="https://dndesigns.co.in/uploads/pages/product-photography-packaging-design-agency-in-noida.jpg" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/packgingdesignagecyswipperladder.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>

    </Swiper>
        </div>
    );
}

export default PackagingDesignSwipper;
