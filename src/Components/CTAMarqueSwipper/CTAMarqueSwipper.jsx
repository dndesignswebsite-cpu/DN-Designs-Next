"use client"

import React from 'react'
import "./CTAMarqueSwipper.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';

function CTAMarqueSwipper() {
  return (
    <div className='cta-swipper-section-parent-div'>
    <section className='cta-swipper-section'>
    <div className='container'>
    <div className='swipper-slider-cta-head-div'>
      <h2 className='swipper-slider-cta-head'>Currently Brewing at DN </h2>
    </div>
       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        speed= {1700}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >



{/* 1 */}
        <SwiperSlide>
          <div className='cta-swipper-slide  cta-swipper-slide-special'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className='cta-swipper-slide-col'>
                   <div className="cta-col-content-div">
                      
                         <p className="cta-swipper-label-para">When Our Clients Win, We Win  </p>

                        <h2 className="cta-swipper-heading">Q-Commerce, Retail & College Campus. 1 AM Is Moving Fast.</h2>


                        <Link href="https://www.linkedin.com/posts/dn-designs-india_branding-brandidentity-packagingdesign-activity-7492826988022423552-kIio?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD2HA4YBoM8hp69NFIHiZnJ59fPIN18jdy8">
                        <div className="cta-swipper-para-icon-div">
                        <p className="cta-swipper-para-desc">Explore More </p>
                        <FontAwesomeIcon icon={faArrowRight} size="18px" className="cta-swipper-fontAwesomeIcon-right-arrow" />
                        </div>
                        </Link>

                        </div> 
                </div>
              </div>

              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <div className='cta-col-img-div cta-col-img-div-special'>
                  {/* <img src="https://dndesigns.co.in/uploads/pages/ctanewswipperjsimagesunny.jpg.jpeg" className='img-fluid cta-swipper-img'/> */}
                  <video  src="https://dndesigns.co.in/uploads/videos/fmcgatoneamvideo.mp4" className='img-fluid cta-swipper-img cta-swipper-img-desktop' autoPlay loop
                  muted playsInline></video>

                  <video  src="https://dndesigns.co.in/uploads/pages/ctaatoneamvideo1AM WEBSITE (2).mp4" className='img-fluid cta-swipper-img cta-swipper-img-mobile' autoPlay loop
                  muted playsInline></video>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


          {/* 2 */}
        <SwiperSlide>
          <div className='cta-swipper-slide'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className='cta-swipper-slide-col'>
                   <div className="cta-col-content-div">
                      
                         <p className="cta-swipper-label-para">Beyond The Brand Work  </p>

                        <h2 className="cta-swipper-heading">Meaningful Conversations Unfold, Leaving A Lasting Impact.   </h2>



                        <Link href="https://www.linkedin.com/posts/dn-designs-india_the-most-meaningful-business-meeting-of-my-activity-7473316896164208641-t3zP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2HA4YBoM8hp69NFIHiZnJ59fPIN18jdy8">
                        <div className="cta-swipper-para-icon-div">
                        <p className="cta-swipper-para-desc">Explore More </p>
                        <FontAwesomeIcon icon={faArrowRight} size="18px" className="cta-swipper-fontAwesomeIcon-right-arrow" />
                        </div>
                        </Link>

                        </div> 
                </div>
              </div>

              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <div className='cta-col-img-div'>
                  <img src="https://dndesigns.co.in/uploads/pages/ctaswipperjhdbjfggh.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-desktop'/>

                   <img src="https://dndesigns.co.in/uploads/pages/ctamarque1781774709390.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-mobile'/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


{/* 3 */}
        <SwiperSlide>
          <div className='cta-swipper-slide'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className='cta-swipper-slide-col'>
                   <div className="cta-col-content-div">
                      
                         <p className="cta-swipper-label-para">Celebrating Our Client’s Success  </p>

                        <h2 className="cta-swipper-heading">Pureluxe Turns Up The Star Power With Sunny Singh. </h2>

                        <Link href="https://www.instagram.com/reel/DY2CpSVq3Jy/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA==">
                        <div className="cta-swipper-para-icon-div">
                        <p className="cta-swipper-para-desc">Explore More </p>
                        <FontAwesomeIcon icon={faArrowRight} size="18px" className="cta-swipper-fontAwesomeIcon-right-arrow" />
                        </div>
                        </Link>

                        </div> 
                </div>
              </div>

              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <div className='cta-col-img-div'>
                  <img src="https://dndesigns.co.in/uploads/pages/ctanewswipperjsimagesunny.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-desktop'/>

                  <img src="https://dndesigns.co.in/uploads/pages/ctamamarqueswiperrrjfsunny.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-mobile'/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>







{/* 4 */}
        <SwiperSlide>
          <div className='cta-swipper-slide'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className='cta-swipper-slide-col'>
                   <div className="cta-col-content-div">
                      
                         <p className="cta-swipper-label-para">New Brand Launch Alert</p>

                        <h2 className="cta-swipper-heading">We Gave Doodh Soda Its Identity. Now It's Live For Everyone.    </h2>

                        {/* <div className="cta-swipper-para-icon-div">
                        <p className="cta-swipper-para-desc">Explore More </p>
                        <FontAwesomeIcon icon={faArrowRight} size="18px" className="cta-swipper-fontAwesomeIcon-right-arrow" />
                        </div> */}
                        </div> 
                </div>
              </div>

              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <div className='cta-col-img-div'>
                  <img src="https://dndesigns.co.in/uploads/pages/cta-swipperrewbdfjdoodh-soda.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-desktop'/>


                  <img src="https://dndesigns.co.in/uploads/pages/cramobilerbfjdoodh-soda.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-mobile'/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


          {/* 5 */}
        <SwiperSlide>
          <div className='cta-swipper-slide'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className='cta-swipper-slide-col'>
                   <div className="cta-col-content-div">
                      
                         <p className="cta-swipper-label-para">Something Exciting Is Brewing!</p>

                        <h2 className="cta-swipper-heading">A New Nutrition Mix Brand Is Taking Shape Behind The Scenes. </h2>

                        {/* <div className="cta-swipper-para-icon-div">
                        <p className="cta-swipper-para-desc">Explore More </p>
                        <FontAwesomeIcon icon={faArrowRight} size="18px" className="cta-swipper-fontAwesomeIcon-right-arrow" />
                        </div> */}
                        </div> 
                </div>
              </div>

              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <div className='cta-col-img-div'>
                  <img src="https://dndesigns.co.in/uploads/pages/swiperrrfdkjrfnutrition-mix.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-desktop'/>

                  <img src="https://dndesigns.co.in/uploads/pages/ctamarquemobilenutrition-mix.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-mobile'/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

   {/* 6 */}
        <SwiperSlide>
          <div className='cta-swipper-slide'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                <div className='cta-swipper-slide-col'>
                   <div className="cta-col-content-div">
                      
                         <p className="cta-swipper-label-para">Proudly Introducing </p>

                        <h2 className="cta-swipper-heading">India's First Productivity Drink, Branded End-To-End By DN Designs.</h2>

                        {/* <div className="cta-swipper-para-icon-div">
                        <p className="cta-swipper-para-desc">Explore More </p>
                        <FontAwesomeIcon icon={faArrowRight} size="18px" className="cta-swipper-fontAwesomeIcon-right-arrow" />
                        </div> */}
                        </div> 
                </div>
              </div>

              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <div className='cta-col-img-div'>
                  <img src="https://dndesigns.co.in/uploads/pages/ctaswipperhjwewdfh8.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-desktop'/>

                  <img src="https://dndesigns.co.in/uploads/pages/newzenrehdfmobileejh8.jpg.jpeg" className='img-fluid cta-swipper-img cta-swipper-img-mobile'/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


      



      



      </Swiper>
    </div>
    </section>
    </div>
  )
}

export default CTAMarqueSwipper
