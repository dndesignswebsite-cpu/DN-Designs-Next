"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import CatalougePageFlip from "../LightBox/LightBox";
import "./ExploreOurVideoAnimation.css";
import Image from "next/image";

function ExploreOurVideoAnimation() {
  const imageUrl = "https://dndesigns.co.in/uploads/pages/";

  return (
    <div>
      <section className="testimonial">
        <div className="container testimonial-swiper">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <CatalougePageFlip
                src="https://youtu.be/X8Wmc9gMNE4"
                type="youtube"
              >
                {/* <img
                 src={imageUrl + "stava.jpg"}
                  className="img-fluid"
                /> */}

                <Image
                 src={imageUrl + "stava.jpg"}
                 alt="Green Horn Catalogue"
                 width={1280} 
                 height={720} 
                 className="responsive-img city-page-swiperr-slide-img-cr-animation responsive-img" 
                 sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                 /> 

              </CatalougePageFlip>
            </SwiperSlide>

            <SwiperSlide>
              <CatalougePageFlip
                src="https://youtu.be/BKMcr1Fkg5o"
                type="youtube"
              >
                {/* <img
                  src={imageUrl + "kharvas.jpg"}
                  className="img-fluid"
                /> */}

                <Image
                 src={imageUrl + "kharvas.jpg"}
                 alt="Green Horn Catalogue"
                 width={1280} 
                 height={720} 
                 className="responsive-img city-page-swiperr-slide-img-cr-animation responsive-img" 
                 sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                 /> 
              </CatalougePageFlip>
            </SwiperSlide>

            <SwiperSlide>
              <CatalougePageFlip
                src="https://youtu.be/21i1C-297-M"
                type="youtube"
              >
                {/* <img
                 src={imageUrl + "foodsure12.jpg"}
                  className="img-fluid"
                /> */}
                <Image
                 src={imageUrl + "foodsure12.jpg"}
                 alt="Green Horn Catalogue"
                 width={1280} 
                 height={720} 
                 className="responsive-img city-page-swiperr-slide-img-cr-animation responsive-img" 
                 sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                 /> 
              </CatalougePageFlip>
            </SwiperSlide>

            <SwiperSlide>
              <CatalougePageFlip
                src="https://youtu.be/CUAECKViZsg"
                type="youtube"
              >
                {/* <img
                  src={imageUrl + "comex.jpg"}
                  className="img-fluid"
                /> */}
                <Image
                  src={imageUrl + "comex.jpg"}
                 alt="Green Horn Catalogue"
                 width={1280} 
                 height={720} 
                 className="responsive-img city-page-swiperr-slide-img-cr-animation responsive-img" 
                 sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                 /> 
              </CatalougePageFlip>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default ExploreOurVideoAnimation;
