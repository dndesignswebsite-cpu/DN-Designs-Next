"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./PackagingDesignSwipper.css";


const PackagingDesignSwipper = () => {
    return (
        <div>
    <Swiper 
          loop={true}
          spaceBetween={20}
          navigation={true}
          pagination={false}
          speed={800}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
          }}
          modules={[Navigation, Autoplay]}
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
          <img src="https://dndesigns.co.in/uploads/blogs/1-2-768x768.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/foodandbevaragesevenimage.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-light">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-light">01.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-light" >Research and Consultation</h3>
          <img src="https://dndesigns.co.in/uploads/blogs/1-2-768x768.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/packgingdesignagecyswipperladder.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-dark">01.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Research and Consultation</h3>
          <img src="https://dndesigns.co.in/uploads/blogs/1-2-768x768.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/foodandbevaragesevenimage.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>

     <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-light">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-light">01.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-light" >Research and Consultation</h3>
          <img src="https://dndesigns.co.in/uploads/blogs/1-2-768x768.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/packgingdesignagecyswipperladder.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>

       <SwiperSlide>
        <div className="packging-design-swipper-swiper-slide packging-design-swipper-swiper-slide-dark">
          <span className="packging-design-swipper-swiper-slide-number packging-design-swipper-swiper-slide-number-dark">01.</span>
          <div className="packging-design-swipper-swiper-slide-content">
          <h3 className="packging-design-swipper-swiper-slide-head packging-design-swipper-swiper-slide-head-dark" >Research and Consultation</h3>
          <img src="https://dndesigns.co.in/uploads/blogs/1-2-768x768.webp" className="img-fluid packging-design-swipper-swiper-slide-main-image"></img>
          </div>
          <img src="https://dndesigns.co.in/uploads/pages/foodandbevaragesevenimage.png" className="packging-design-swipper-swiper-slide-ladder-img"></img>
        </div>
      </SwiperSlide>

    </Swiper>
        </div>
    );
}

export default PackagingDesignSwipper;
