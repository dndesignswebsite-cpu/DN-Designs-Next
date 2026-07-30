"use client"

import React from 'react'
import "./HomePageIndustriesSwipper.css"
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function HomePageIndustriesSwipper() {
    // city pages slider data
    let cityPagesSlideData = {

       CityPagesSwipper_heading : "Branding and Marketing Services That Build Trust and Admiration",
       
       slide_1_slide_head : "Food & Beverage",
       slide_1_slide_para : "F&B brands need to entice and evoke a desire to purchase. That is precisely what we do - create a brand identity that ignites cravings, drives differentiation and encourages repeat purchase. ",

       slide_2_slide_head : "FMCG",
       slide_2_slide_para : "From catching attention on the store shelf to reaching the billing counter, FMCG products face a challenging journey. Our branding and packaging design services help them stand out and achieve checkout success.",

       slide_3_slide_head : "Personal Wellness",
       slide_3_slide_para : "Wellness brands succeed only when they feel authentic and inspire trust. We design brands that do just that. We help brands communicate their purpose clearly and connect emotionally with customers.",

       slide_4_slide_head : "Healthcare Brands",
       slide_4_slide_para : "When it comes to healthcare branding, expertise, authority and compassionate communication go together. We build brands that convey clinical authority, inspire confidence and make people feel cared for.",

       slide_5_slide_head : "Jewellery",
       slide_5_slide_para : "In this industry, authenticity, trust, craftsmanship, and reputation reign supreme. Our strategic branding and design services help jewellery brands communicate these to build credibility and desirability.",

       slide_6_slide_head : "Skincare ",
       slide_6_slide_para : "Great formulations are important, but standing out amidst countless skincare brands is equally significant. We create distinctive skincare brands that simplify complex science, build trust and desire, and drive purchase.",

       slide_7_slide_head : "Fashion",
       slide_7_slide_para : "The fashion industry is not just saturated; it is also trend-driven. Standing out and staying relevant is quite challenging. We build strong fashion brands that rise above fleeting trends and build desire, differentiation and loyalty.",

       slide_8_slide_head : "Education",
       slide_8_slide_para : "Parents & students look for trust and reliability when it comes to education. Our branding, design, and communication solutions help brands build authority and reputation and drive growth.",

       slide_9_slide_head : "Travel & Hospitality ",
       slide_9_slide_para : "Travellers and guests prefer brands they remember and trust. We build travel & hospitality brands that feel welcoming and premium, build lasting guest connections and increase direct bookings.",

       slide_10_slide_head : "Technology",
       slide_10_slide_para : "The tech landscape is evolving rapidly, and innovation alone is not sufficient to succeed. We build technology brands that succeed with strategic identity and positioning and simplicity in communication. ",
       
       slide_11_slide_head : "Automobile",
       slide_11_slide_para : "In the intensely competitive market, standing out and earning customers’ trust is important. We develop powerful brand identities that communicate engineering, aspiration and reliability - all at once.",
    }

  return (
    <div className='homepageindusriesswipper'>
    <div className='container'>
    <div className='row homepageindusriesswipper-content'>
        <div className='col-12 col-dm-12 col-md-6 col-lg-6'>
        <div className='homepageindusriesswipper-content-left-col'>
        <p className='homepageindusriesswipper-content-left-para-label'>Sector Expertise</p>
        <h2 className='homepageindusriesswipper-content-left-head'>Categories We Build</h2>
        </div>
        </div>
        <div className='col-12 col-dm-12 col-md-6 col-lg-6'>
        <div className='homepageindusriesswipper-content-right-col'>
        <p className='homepageindusriesswipper-content-right-para-desc'>Providing end-to-end solutions to build brands across categories. </p>
            </div>
        </div>
    </div>
    {/* swipper started */}
        <Swiper
                  loop={true}
                  spaceBetween={0}
                  navigation={true}
                  pagination={false}
                  // autoplay={{
                  //   delay: 3000, 
                  //   disableOnInteraction: false,
                  // }}
                  modules={[Navigation, Autoplay]}
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
            <Link href="/">
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_1_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_1_slide_para}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_2_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_2_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_3_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_3_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_4_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_4_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>


          {/* SLIDE 5 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_5_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_5_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>


          {/* SLIDE 6 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_6_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_6_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>

            {/* SLIDE 7 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_7_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_7_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>

            {/* SLIDE 8 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_8_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_8_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>

            {/* SLIDE 9 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_9_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_9_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>


            {/* SLIDE 10 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_10_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_10_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>

            {/* SLIDE 11 */}
          <SwiperSlide>
              <div className="citypagewiper-slide">
                 <Image src={"https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"}
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
               
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_11_slide_head}</h3>
                  <p>{cityPagesSlideData.slide_11_slide_para}</p>
                </div>
              </div>
          </SwiperSlide>

                </Swiper>
    </div>
    </div>
  )
}

export default HomePageIndustriesSwipper
