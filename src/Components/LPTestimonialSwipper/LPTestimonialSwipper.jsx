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
        <h2 className="what-our-client-say-head">Client Testimonials</h2>
        <p className="what-our-client-say-para">Find out what our clients have to say about our services.</p>
          <Swiper
  loop={true}
  spaceBetween={30}
  autoplay={{
    delay: 3000,
    disableOnInteraction: true,
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
            <div className="swipper-slider-wrapper-div-for-height">
              <div className="lp-testimonial-swipper-slide-div">
                <div className="rating-icons">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                <p className="lp-testimonial-para">
                  "After researching several branding and design
                            agencies, I connected with Mr. Paras Kalra. I really
                            appreciate the hard work he and his team put in to
                            position Nature’s Balance as a premium brand in the
                            market. My project was completed successfully and on
                            time."
                </p>

                <div className="client-info-div">
                <div className="client-info-div-left">
                  <div className="client-img">
                    <img src="https://dndesigns.co.in/uploads/pages/nature-balance-CEO.jpg.jpeg" className="client-img-for-lp-swipper img-fluid"/>
                  </div>
                  <div className="client-name-designation">
                    <span className="client-name">Mr. Bhagwat Aggarwal</span>
                    <span className="client-designation">Founder, Nature Balance</span>
                  </div>
                  </div>
                  <div className="client-info-div-right">
                    <img src="https://dndesigns.co.in/uploads/pages/lpnaturebalance.png" className="img-fluid client-info-div-right-img"></img>
                  </div>
                </div>

              </div>
              </div>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
            <div className="swipper-slider-wrapper-div-for-height">
              <div className="lp-testimonial-swipper-slide-div">
                <div className="rating-icons">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                <p className="lp-testimonial-para">
                  "Our association with DN Designs was very fruitful.
                            They handled the entire branding for us, right from
                            consultation to the final launch of the products in
                            the retail market. Customer feedback is simply
                            amazing. Great Work Team! Way to Go!"
                </p>

                <div className="client-info-div">
                <div className="client-info-div-left">
                  <div className="client-img">
                  <img src="https://dndesigns.co.in/uploads/pages/bobalist-CEO.jpg.jpeg" className="client-img-for-lp-swipper img-fluid"/>
                  </div>
                  <div className="client-name-designation">
                    <span className="client-name">Mr. Vineet Tiwari</span>
                    <span className="client-designation">Founder, The Bobalist</span>
                  </div>
                  </div>
                  <div className="client-info-div-right">
                    <img src="https://dndesigns.co.in/uploads/pages/lpbobalist.png" className="img-fluid client-info-div-right-img"></img>
                  </div>
                </div>

              </div>
              </div>
            </SwiperSlide>


            {/* slide 3 */}
          <SwiperSlide>
          <div className="swipper-slider-wrapper-div-for-height">
              <div className="lp-testimonial-swipper-slide-div">
                <div className="rating-icons">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                <p className="lp-testimonial-para">
                  "We wanted to position NectarPure as a premium
                            lifestyle nutrition brand. The team perfectly
                            understood what we were trying to do and created a
                            subtle and minimal brand design for us. The 3D AD
                            they created is just fantastic!"
                </p>

                <div className="client-info-div">
                <div className="client-info-div-left">
                  <div className="client-img">
                    <img src="https://dndesigns.co.in/uploads/pages/nectarpure-CEO.jpg.jpeg" className="client-img-for-lp-swipper img-fluid"/>
                  </div>
                  <div className="client-name-designation">
                    <span className="client-name">Mr. Pramod</span>
                    <span className="client-designation">Founder, NectarPure</span>
                  </div>
                  </div>
                  <div className="client-info-div-right">
                    <img src="https://dndesigns.co.in/uploads/pages/lpnectarpure.png" className="img-fluid client-info-div-right-img"></img>
                  </div>
                </div>

              </div>
              </div>
            </SwiperSlide>


            {/* slide 4 */}
           <SwiperSlide>
           <div className="swipper-slider-wrapper-div-for-height">
              <div className="lp-testimonial-swipper-slide-div">
                <div className="rating-icons">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="#FFD700"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                <p className="lp-testimonial-para">
                 "If you’ve found DN Designs, consider yourself genuinely lucky. I’ve rarely seen this level of professionalism, innovation, and punctuality anywhere. Paras, Milind, Saloni, and the entire team operate on a different wavelength- they listen, they create, and they deliver exactly what you dreamt of, sometimes even better."
                </p>

                <div className="client-info-div">
                <div className="client-info-div-left">
                  <div className="client-img">
                    {/* <p className="client-img-para">A</p> */}
                    <img src="https://dndesigns.co.in/uploads/pages/1am-CEO.jpg.jpeg" className="client-img-for-lp-swipper img-fluid"/>
                  </div>
                  <div className="client-name-designation">
                    <span className="client-name">Arihant Jain</span>
                    <span className="client-designation">@1AM</span>
                  </div>
                  </div>
                  <div className="client-info-div-right">
                    <img src="https://dndesigns.co.in/uploads/pages/at1am.png" className="img-fluid client-info-div-right-img"></img>
                  </div>
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
