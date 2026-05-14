"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./CityPagesSwipper.css";
import Link from "next/link";
import Image from "next/image";

function CityPagesSwipper({cityPagesSlideData}) {

  return (
    <section className="citypagesswipper">
      <div className="container">
        <h2 className="citypagesswipper-h2 ">
         {cityPagesSlideData.CityPagesSwipper_heading}
        </h2>

        <Swiper
          loop={true}
          spaceBetween={30}
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
            <Link href="/brand-name-suggestion">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/citypageswiper1.webp"
                  alt="Branding"
                /> */}
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
            <Link href="/branding">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/branddevecity.webp"
                  alt="Branding"
                /> */}

                 <Image src="https://dndesigns.co.in/uploads/pages/branddevecity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_2_slide_head}</h3>
                  <p>
                    {cityPagesSlideData.slide_2_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <Link href="/logo-designing">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/brandidentitycity.webp"
                  alt="Branding"
                /> */}

                 <Image src="https://dndesigns.co.in/uploads/pages/brandidentitycity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_3_slide_head}</h3>
                  <p>
                    {cityPagesSlideData.slide_3_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
            <Link href="/packaging-design">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/packagingdesigncity.webp"
                  alt="Branding"
                /> */}

                 <Image src="https://dndesigns.co.in/uploads/pages/packagingdesigncity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_4_slide_head}</h3>
                  <p>
                   {cityPagesSlideData.slide_4_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 5 */}
          <SwiperSlide>
            <Link href="/catalogue-designing">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/catalougecity.webp"
                  alt="Branding"
                /> */}
                 <Image src="https://dndesigns.co.in/uploads/pages/catalougecity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_5_slide_head}</h3>
                  <p>
                  {cityPagesSlideData.slide_5_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 6 */}
          <SwiperSlide>
            <Link href="/digital-marketing-agency-in-noida">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/digitalmarketing.webp"
                  alt="Branding"
                /> */}
                 <Image src="https://dndesigns.co.in/uploads/pages/digitalmarketing.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_6_slide_head}</h3>
                  <p>
                    {cityPagesSlideData.slide_6_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 7 */}
          <SwiperSlide>
            <Link href="/influencer-marketing">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/cityswiperr1.webp"
                  alt="Branding"
                /> */}
                 <Image src="https://dndesigns.co.in/uploads/pages/cityswiperr1.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_7_slide_head}</h3>
                  <p>
                   {cityPagesSlideData.slide_7_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 8 */}
          <SwiperSlide>
            <Link href="/social-media-marketing">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/socialmediamarketingcity.webp"
                  alt="Branding"
                /> */}
                 <Image src="https://dndesigns.co.in/uploads/pages/socialmediamarketingcity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_8_slide_head}</h3>
                  <p>
                    {cityPagesSlideData.slide_8_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 9 */}
          <SwiperSlide>
            <Link href="/animation">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/animationcity.webp"
                  alt="Branding"
                /> */}
                 <Image src="https://dndesigns.co.in/uploads/pages/animationcity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_9_slide_head}</h3>
                  <p>
                    {cityPagesSlideData.slide_9_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 10 */}
          <SwiperSlide>
            <Link href="/seo-marketing-agency-in-noida">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/seocity.webp"
                  alt="Branding"
                /> */}
                 <Image  src="https://dndesigns.co.in/uploads/pages/seocity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_10_slide_head}</h3>
                  <p>
                    {cityPagesSlideData.slide_10_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 11 */}
          <SwiperSlide>
            <Link href="/web-designing-services-in-india">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/webdesigncity.webp"
                  alt="Branding"
                /> */}
                 <Image src="https://dndesigns.co.in/uploads/pages/webdesigncity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_11_slide_head}</h3>
                  <p>
                    {cityPagesSlideData.slide_11_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 12 */}
          <SwiperSlide>
            <Link href="/ui-ux-design">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/uiuxcity.webp"
                  alt="Branding"
                /> */}
                 <Image src="https://dndesigns.co.in/uploads/pages/uiuxcity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_12_slide_head}</h3>
                  <p>
                    {cityPagesSlideData.slide_12_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 13 */}
          <SwiperSlide>
            <Link href="/photography">
              <div className="citypagewiper-slide">
                {/* <img
                  src="https://dndesigns.co.in/uploads/pages/photographycity.webp"
                  alt="Branding"
                /> */}
                 <Image src="https://dndesigns.co.in/uploads/pages/photographycity.webp"
               alt="Green Horn Catalogue"
                width={750} 
                height={1050} 
                className="responsive-img city-page-swiperr-slide-img responsive-img" 
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideData.slide_13_slide_head}</h3>
                  <p>
                   {cityPagesSlideData.slide_13_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default CityPagesSwipper;
