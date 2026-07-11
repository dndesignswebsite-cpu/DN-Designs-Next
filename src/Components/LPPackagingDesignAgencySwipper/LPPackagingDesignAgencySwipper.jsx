"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./LPPackagingDesignAgencySwipper.css"

function LPPackagingDesignAgencySwipper() {
  return (
    <div className="container LPPackagingDesignAgencySwipperContainer">
      <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true} 
          speed={1500}
           allowTouchMove= {false}
          navigation={true}
          pagination={false}
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false,
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
              slidesPerView: 2.5,
            },
          }}
          className="city-swiper"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
          <div className="swipeer-slide-div">
            <img src="https://dndesigns.co.in/uploads/avatars/1769062656523-cd49da6ceb4aeaf0.jpg" className="img-fluid swipeer-slide-div-img"/>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
          <div className="swipeer-slide-div">
            <img src="https://dndesigns.co.in/uploads/avatars/1769062656523-cd49da6ceb4aeaf0.jpg" className="img-fluid swipeer-slide-div-img"/>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
          <div className="swipeer-slide-div">
            <img src="https://dndesigns.co.in/uploads/avatars/1769062656523-cd49da6ceb4aeaf0.jpg" className="img-fluid swipeer-slide-div-img"/>
            </div>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
          <div className="swipeer-slide-div">
            <img src="https://dndesigns.co.in/uploads/avatars/1769062656523-cd49da6ceb4aeaf0.jpg" className="img-fluid swipeer-slide-div-img"/>
            </div>
          </SwiperSlide>

          {/* SLIDE 5 */}
         <SwiperSlide>
          <div className="swipeer-slide-div">
            <img src="https://dndesigns.co.in/uploads/avatars/1769062656523-cd49da6ceb4aeaf0.jpg" className="img-fluid swipeer-slide-div-img"/>
            </div>
          </SwiperSlide>

        </Swiper>

    </div>
  )
}

export default LPPackagingDesignAgencySwipper
