"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./Testimonial.css";
import Image from "next/image";

function Testimonial() {
  return (
    <div>
      {/*.....testimonial...... */}

      <section className="testimonial">
        <div className="container testimonial-swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false, // user swipe kare tab bhi autoplay continue rahe
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
            navigation={true}
            className="custom-swiper"
          >
            <SwiperSlide>
              <div>
                <div className="custom-swiper">
                  <div className="swiper-slide">
                    <div className="row align-items-stretch testi-slide">
                      <div className="col-6 col-md-4 col-lg-4 testi-left-content">
                        <div>
                          <div className="testi-icon">
                            <Image
                              src="https://dndesigns.co.in/uploads/pages/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
                              width="24"
                              height="24"
                            />
                            <p>TESTIMONIALS</p>
                          </div>
                          <h3>
                            WHAT THEY SAY
                            <br />
                            ABOUT US
                          </h3>
                          <div className="quote-mark">&#x201C;</div>
                        </div>

                        <div className="founder-name">
                          <h2 className="fs-4 mb-0">Mr. Bhagwat Aggarwal</h2>
                          <p className="fs-6 opacity-75">
                            Founder, Nature Balance
                          </p>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 col-lg-4 testi-main-img">
                        {/* <img
                          src="https://dndesigns.co.in/uploads/pages/Bhagwat aggarwal client.webp"
                          alt="Testimonial Person"
                          className="img-fluid"
                        /> */}

                        <Image
                          src="https://dndesigns.co.in/uploads/pages/Bhagwat aggarwal client.webp"
                          alt="testinomial"
                          width={500}
                          height={700}
                          className="responsive-img testinomail-img-for-aspect"
                          sizes="(max-width:992px) 100vw, 50vw"
                        />
                      </div>

                      <div className="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "After researching several branding and design
                            agencies, I connected with Mr. Paras Kalra. I really
                            appreciate the hard work he and his team put in to
                            position Nature’s Balance as a premium brand in the
                            market. My project was completed successfully and on
                            time."
                          </i>
                        </p>

                        <div className="rating-icons">
                          {/* <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i> */}
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
                            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="custom-swiper">
                  <div className="swiper-slide">
                    <div className="row align-items-stretch testi-slide">
                      <div className="col-6 col-md-4 testi-left-content">
                        <div>
                          <div className="testi-icon">
                            <Image
                              src="https://dndesigns.co.in/uploads/pages/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
                              width="24"
                              height="24"
                            />
                            <p>TESTIMONIALS</p>
                          </div>
                          <h3>
                            WHAT THEY SAY
                            <br />
                            ABOUT US
                          </h3>
                          <div className="quote-mark">&#x201C;</div>
                        </div>

                        <div className="founder-name">
                          <h2 className="fs-4 fw-bold mb-0">
                            Mr. Vineet Tiwari
                          </h2>
                          <p className="fs-6 opacity-75">
                            Founder, The Bobalist
                          </p>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 testi-main-img">
                        {/* <img
                          src="https://dndesigns.co.in/uploads/pages/Vineet tiwari.webp"
                          alt="Testimonial Person"
                          className="img-fluid"
                        /> */}

                        <Image
                          src="https://dndesigns.co.in/uploads/pages/Vineet tiwari.webp"
                          alt="testinomial"
                          width={500}
                          height={700}
                          className="responsive-img testinomail-img-for-aspect"
                          sizes="(max-width:992px) 100vw, 50vw"
                        />
                      </div>

                      <div className="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "Our association with DN Designs was very fruitful.
                            They handled the entire branding for us, right from
                            consultation to the final launch of the products in
                            the retail market. Customer feedback is simply
                            amazing. Great Work Team! Way to Go!"
                          </i>
                        </p>

                        <div className="rating-icons">
                          {/* <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i> */}
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="custom-swiper">
                  <div className="swiper-slide">
                    <div className="row align-items-stretch testi-slide">
                      <div className="col-6 col-md-4 testi-left-content">
                        <div>
                          <div className="testi-icon">
                            <Image
                              src="https://dndesigns.co.in/uploads/pages/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
                              width="24"
                              height="24"
                            />
                            <p>TESTIMONIALS</p>
                          </div>
                          <h3>
                            WHAT THEY SAY
                            <br />
                            ABOUT US
                          </h3>
                          <div className="quote-mark">&#x201C;</div>
                        </div>

                        <div className="founder-name">
                          <h2 className="fs-4 fw-bold mb-0">Mr. Pramod</h2>
                          <p className="fs-6 opacity-75">Founder, NectarPure</p>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 testi-main-img">
                        {/* <img
                          src="https://dndesigns.co.in/uploads/pages/nectarpure client.webp"
                          alt="Testimonial Person"
                          className="img-fluid"
                        /> */}

                        <Image
                          src="https://dndesigns.co.in/uploads/pages/nectarpure client.webp"
                          alt="testinomial"
                          width={500}
                          height={700}
                          className="responsive-img testinomail-img-for-aspect"
                          sizes="(max-width:992px) 100vw, 50vw"
                        />
                      </div>

                      <div className="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "We wanted to position NectarPure as a premium
                            lifestyle nutrition brand. The team perfectly
                            understood what we were trying to do and created a
                            subtle and minimal brand design for us. The 3D AD
                            they created is just fantastic!"
                          </i>
                        </p>

                        <div className="rating-icons">
                          {/* <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i> */}
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
                            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
