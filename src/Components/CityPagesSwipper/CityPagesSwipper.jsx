"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./CityPagesSwipper.css";

function CityPagesSwipper() {
  return (
    <section className="citypagesswipper">
      <div className="container">
        <h2 className="citypagesswipper-h2">
          Branding and Marketing Services That Build Trust — And Admiration Too
        </h2>

        <Swiper
          loop={true}
          spaceBetween={30}
          navigation={true}
          pagination={false}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="city-swiper"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Brand Name Suggestion</h3>
                <p>
                  What’s in the name? We say, it’s quite significant, especially in branding. It reflects identity and evokes positive responses from consumers. We craft names that don't get lost in the shuffle and are remembered by your audience.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/branddevecity.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Brand Development</h3>
                <p>
                  Without branding, your business will not be recognised, trusted or remembered. We are your one-stop solution for creating a strong brand. We craft your brand strategy, design your identity & establish your online brand presence.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/brandidentitycity.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Brand Identity Design</h3>
                <p>
                  It is said that there is no second chance to make a first impression. And your logo is your first impression. We design logos that are versatile, unique, and clearly communicate your brand’s essence and values to your target audience.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/packagingdesigncity.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Packaging Design</h3>
                <p>
                  Want your product to impress your consumer at first glance? Designing attractive packaging can be your winning move. We create designs that don’t just wow your consumer but deeply show what your brand wants to say.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default CityPagesSwipper;
