"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Testimonial.css";

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
              delay: 500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Navigation]}
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
                            <img
                              src="https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
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
                            Mr. Bhagwat Aggarwal
                          </h2>
                          <p className="fs-6 opacity-75">
                            Founder, Nature Balance
                          </p>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 col-lg-4 testi-main-img">
                        <img
                          src="https://dndesigns.co.in/wp-content/uploads/2025/09/TDG06181.jpg"
                          alt="Testimonial Person"
                          className="img-fluid"
                        />
                      </div>

                      <div className="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "After researching several branding and design agencies, I connected with Mr. Paras Kalra. I really appreciate the hard work he and his team put in to position Nature’s Balance as a premium brand in the market. My project was completed successfully and on time."
                          </i>
                        </p>

                        <div className="rating-icons">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i>
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
                            <img
                              src="https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
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
                        <img
                          src="https://dndesigns.co.in/wp-content/uploads/2025/09/1662129811700.jpg"
                          alt="Testimonial Person"
                          className="img-fluid"
                        />
                      </div>

                      <div className="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "Our association with DN Designs was very fruitful. They handled the entire branding for us, right from consultation to the final launch of the products in the retail market. Customer feedback is simply amazing. Great Work Team! Way to Go!"
                          </i>
                        </p>

                        <div className="rating-icons">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i>
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
                            <img
                              src="https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
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
                            Mr. Pramod 
                          </h2>
                          <p className="fs-6 opacity-75">
                            Founder, NectarPure
                          </p>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 testi-main-img">
                        <img
                          src="https://dndesigns.co.in/wp-content/uploads/2025/09/1737743837430.jpg"
                          alt="Testimonial Person"
                          className="img-fluid"
                        />
                      </div>

                      <div className="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "We wanted to position NectarPure as a premium lifestyle nutrition brand. The team perfectly understood what we were trying to do and created a subtle and minimal brand design for us. The 3D AD they created is just fantastic!"
                          </i>
                        </p>

                        <div className="rating-icons">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i>
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
