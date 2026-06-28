"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./LPTestimonialSwipper.css";
import Image from "next/image";

function LPTestimonialSwipper() {
  return (
    <div>
      <div className="lp-testimonial-swipper">
        <div className="container">
        <h2 className="what-our-client-say-head">What Our Clients Say</h2>
        <p className="what-our-client-say-para">Real feedback from brands we've helped grow.</p>
          <Swiper
  loop={true}
  spaceBetween={30}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={{
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  }}
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
  modules={[Navigation, Pagination, Autoplay]}
>

          {/* slide 1  */}
            <SwiperSlide>
              <div className="lp-testimonial-swipper-slide-div">
                <div className="rating-icons">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                <p className="lp-testimonial-para">
                  "We were struggling with brand differentiation in a crowded
                  FMCG market. Their branding strategy and packaging redesign
                  gave us an edge that our retail partners and customers
                  immediately noticed."
                </p>

                <div className="client-info-div">
                  <div className="client-img">
                    <p className="client-img-para">A</p>
                  </div>
                  <div className="client-name-designation">
                    <p className="client-name">Arvind Kapoor</p>
                    <p className="client-designation">GM Foods Pvt. Ltd.</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
              <div className="lp-testimonial-swipper-slide-div">
                <div className="rating-icons">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                <p className="lp-testimonial-para">
                  "We were struggling with brand differentiation in a crowded
                  FMCG market. Their branding strategy and packaging redesign
                  gave us an edge that our retail partners and customers
                  immediately noticed."
                </p>

                <div className="client-info-div">
                  <div className="client-img">
                    <p className="client-img-para">A</p>
                  </div>
                  <div className="client-name-designation">
                    <p className="client-name">Arvind Kapoor</p>
                    <p className="client-designation">GM Foods Pvt. Ltd.</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>


            {/* slide 3 */}
            <SwiperSlide>
              <div className="lp-testimonial-swipper-slide-div">
                <div className="rating-icons">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                <p className="lp-testimonial-para">
                  "We were struggling with brand differentiation in a crowded
                  FMCG market. Their branding strategy and packaging redesign
                  gave us an edge that our retail partners and customers
                  immediately noticed."
                </p>

                <div className="client-info-div">
                  <div className="client-img">
                    <p className="client-img-para">A</p>
                  </div>
                  <div className="client-name-designation">
                    <p className="client-name">Arvind Kapoor</p>
                    <p className="client-designation">GM Foods Pvt. Ltd.</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>


            {/* slide 4 */}
            <SwiperSlide>
              <div className="lp-testimonial-swipper-slide-div">
                <div className="rating-icons">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                <p className="lp-testimonial-para">
                  "We were struggling with brand differentiation in a crowded
                  FMCG market. Their branding strategy and packaging redesign
                  gave us an edge that our retail partners and customers
                  immediately noticed."
                </p>

                <div className="client-info-div">
                  <div className="client-img">
                    <p className="client-img-para">A</p>
                  </div>
                  <div className="client-name-designation">
                    <p className="client-name">Arvind Kapoor</p>
                    <p className="client-designation">GM Foods Pvt. Ltd.</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>

          </Swiper>


          <div className="testimonial-controls">

  <div className="testimonial-prev">

    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  </div>

  <div className="swiper-pagination"></div>

  <div className="testimonial-next">

    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  </div>

</div>
        </div>
      </div>
    </div>
  );
}

export default LPTestimonialSwipper;
