"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./CreativeBrochureDesign.css";
import Image from "next/image";

function CreativeBrochureDesign() {
  return (
    <div>
      {/* Creative Brochure Design But With A Twist */}
      <section className="creative-brochure">
        <div className="container creative-brochure-div text-center">
          <h2>
            Creative Brochure Design{" "}
            <span className="every-pr"> But With A Twist</span>
          </h2>

          <Swiper
            slidesPerView={1.2}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
    delay: 3000, 
    disableOnInteraction: false,
  }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swipper-slide-div-brochure">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/Bi-fold-1-2048x1229.webp"
                  className="img-fluid"
                /> */}

                 <Image
                  src="https://dndesigns.co.in/uploads/pages/Bi-fold-1-2048x1229.webp"
                  alt="Green Horn Catalogue"
                  width={1600} 
                  height={960} 
                  className="responsive-img city-page-swiperr-slide-img-cr responsive-img" 
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 100vw, 100vw"
                   />                                   
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swipper-slide-div-brochure">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/Tri-Fold-2048x1229.webp"
                  className="img-fluid"
                /> */}

                <Image
                  src="https://dndesigns.co.in/uploads/pages/Tri-Fold-2048x1229.webp"
                  alt="Green Horn Catalogue"
                  width={1600} 
                  height={960} 
                  className="responsive-img city-page-swiperr-slide-img-cr responsive-img" 
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 100vw, 100vw"
                   /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swipper-slide-div-brochure">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/Z-Fold-2048x1229.webp"
                  className="img-fluid"
                /> */}

                <Image
                  src="https://dndesigns.co.in/uploads/pages/Z-Fold-2048x1229.webp"
                  alt="Green Horn Catalogue"
                  width={1600} 
                  height={960} 
                  className="responsive-img city-page-swiperr-slide-img-cr responsive-img" 
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 100vw, 100vw"
                   /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swipper-slide-div-brochure">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/Roll-Fold-2048x1229.webp"
                  className="img-fluid"
                /> */}

                <Image
                 src="https://dndesigns.co.in/uploads/pages/Roll-Fold-2048x1229.webp"
                  alt="Green Horn Catalogue"
                  width={1600} 
                  height={960} 
                  className="responsive-img city-page-swiperr-slide-img-cr responsive-img" 
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 100vw, 100vw"
                   /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swipper-slide-div-brochure">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/Accordion-Fold-2048x1229.webp"
                  className="img-fluid"
                /> */}

                <Image
                  src="https://dndesigns.co.in/uploads/pages/Accordion-Fold-2048x1229.webp"
                  alt="Green Horn Catalogue"
                  width={1600} 
                  height={960} 
                  className="responsive-img city-page-swiperr-slide-img-cr responsive-img" 
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 100vw, 100vw"
                   /> 
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swipper-slide-div-brochure">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/Gate-Fold-2048x1229.webp"
                  className="img-fluid"
                /> */}

                <Image
                  src="https://dndesigns.co.in/uploads/pages/Gate-Fold-2048x1229.webp"
                  alt="Green Horn Catalogue"
                  width={1600} 
                  height={960} 
                  className="responsive-img city-page-swiperr-slide-img-cr responsive-img" 
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 100vw, 100vw"
                   /> 
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default CreativeBrochureDesign;
