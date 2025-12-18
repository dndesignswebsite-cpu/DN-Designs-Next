"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./CreativeBrochureDesign.css"

function CreativeBrochureDesign() {
  return (
    <div>

       {/* Creative Brochure Design But With A Twist */}
      <section className="creative-brochure">
      <div className="container creative-brochure-div text-center">
       <h2>
            Creative Brochure Design <span className="every-pr"> But With A Twist</span>
          </h2>
      
        <Swiper
          slidesPerView={1.2} 
          spaceBetween={30}
           loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
           <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
           <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
           <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
           <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </section>

    </div>
  )
}

export default CreativeBrochureDesign
