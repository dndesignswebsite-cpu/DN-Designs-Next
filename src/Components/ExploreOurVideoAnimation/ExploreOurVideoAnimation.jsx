"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import CatalougePageFlip from "../LightBox/LightBox";

function ExploreOurVideoAnimation() {
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/comex.jpg"
                  className="img-fluid"
                />
              </CatalougePageFlip>
            </SwiperSlide>

            <SwiperSlide>
              <CatalougePageFlip
                src="https://youtu.be/X8Wmc9gMNE4"
                type="youtube"
              >
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/BKMcr1Fkg5o-HD.jpg"
                  className="img-fluid"
                />
              </CatalougePageFlip>
            </SwiperSlide>

            <SwiperSlide>
              <CatalougePageFlip
                src="https://youtu.be/X8Wmc9gMNE4"
                type="youtube"
              >
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/21i1C-297-M-HD.jpg"
                  className="img-fluid"
                />
              </CatalougePageFlip>
            </SwiperSlide>

            <SwiperSlide>
              <CatalougePageFlip
                src="https://youtu.be/X8Wmc9gMNE4"
                type="youtube"
              >
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/X8Wmc9gMNE4-SD.jpg"
                  className="img-fluid"
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
