"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./CityPagesSwipper.css";

function CityPagesSwipper() {
  return (
    <section className="creative-brochure">
      <div className="container creative-brochure-div text-center">
        <h2>
          Creative Brochure Design{" "}
          <span className="every-pr">But With A Twist</span>
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slidesData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="swipper-slide-div-brochure">
                <div className="service-sli">
                  <img src={item.img} alt={item.title} />

                  <div className="service-sli-overlay"></div>

                  <div className="service-sli-overlay-box">
                    <div className="service-sli-overlay-title">
                      {item.title}
                    </div>
                    <p className="service-sli-Pras">{item.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CityPagesSwipper;

const slidesData = [
  {
    title: "Brand Name Suggestion",
    desc:
      "What’s in the name? We say, it’s quite significant, especially in branding. We craft names that are remembered.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

  {
    title: "Brand Development",
    desc:
      "Without branding, your business will not be recognised, trusted or remembered. We create strong brands.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

  {
    title: "Brand Identity Design",
    desc:
      "Your logo is your first impression. We design logos that communicate your brand’s essence.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

  {
    title: "Packaging Design",
    desc:
      "Attractive packaging can be your winning move. We design packaging that speaks your brand.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

  {
    title: "Catalogue Design",
    desc:
      "We create organised catalogues that reflect your product with clarity and impact.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

  {
    title: "Digital Marketing",
    desc:
      "We create digital marketing strategies that increase visibility and drive measurable results.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

   {
    title: "Digital Marketing",
    desc:
      "We create digital marketing strategies that increase visibility and drive measurable results.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

   {
    title: "Digital Marketing",
    desc:
      "We create digital marketing strategies that increase visibility and drive measurable results.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

   {
    title: "Digital Marketing",
    desc:
      "We create digital marketing strategies that increase visibility and drive measurable results.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

   {
    title: "Digital Marketing",
    desc:
      "We create digital marketing strategies that increase visibility and drive measurable results.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

   {
    title: "Digital Marketing",
    desc:
      "We create digital marketing strategies that increase visibility and drive measurable results.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

   {
    title: "Digital Marketing",
    desc:
      "We create digital marketing strategies that increase visibility and drive measurable results.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

   {
    title: "Digital Marketing",
    desc:
      "We create digital marketing strategies that increase visibility and drive measurable results.",
    img: "https://powerfilldrinks.com/uploads/pages/swip1.webp",
  },

];
