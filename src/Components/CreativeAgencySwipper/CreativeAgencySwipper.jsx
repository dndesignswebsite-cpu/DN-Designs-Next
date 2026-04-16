"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./CreativeAgencySwipper.css";
import Link from "next/link";

function CityPagesSwipper({cityPagesSlideDataCreativeAgency}) {

  return (<>
          {/* swipper */}
      <section className="city-pages-swipper">
        <section className="citypagesswipper">
      <div className="container">
        <h2 className="citypagesswipper-h2 ">
         {cityPagesSlideDataCreativeAgency.CityPagesSwipper_heading}
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
                <img
                  src="https://dndesigns.co.in/uploads/pages/branddevecity.webp"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_1_slide_head}</h3>
                  <p>{cityPagesSlideDataCreativeAgency.slide_1_slide_para}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <Link href="/photography">
              <div className="citypagewiper-slide">
                <img
                  src="https://dndesigns.co.in/uploads/pages/photographycity.webp"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_2_slide_head}</h3>
                  <p>
                    {cityPagesSlideDataCreativeAgency.slide_2_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <Link href="/branding">
              <div className="citypagewiper-slide">
                <img
                  src="https://dndesigns.co.in/uploads/pages/brandidentitycity.webp"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_3_slide_head}</h3>
                  <p>
                    {cityPagesSlideDataCreativeAgency.slide_3_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
            <Link href="/packaging-design">
              <div className="citypagewiper-slide">
                <img
                  src="https://dndesigns.co.in/uploads/pages/packagingdesigncity.webp"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_4_slide_head}</h3>
                  <p>
                   {cityPagesSlideDataCreativeAgency.slide_4_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 5 */}
          <SwiperSlide>
            <Link href="/catalogue-designing">
              <div className="citypagewiper-slide">
                <img
                  src="https://dndesigns.co.in/uploads/pages/catalougecity.webp"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_5_slide_head}</h3>
                  <p>
                  {cityPagesSlideDataCreativeAgency.slide_5_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 6 */}
          <SwiperSlide>
            <Link href="/digital-marketing-agency-in-noida">
              <div className="citypagewiper-slide">
                <img
                  src="https://dndesigns.co.in/uploads/pages/digitalmarketing.webp"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_6_slide_head}</h3>
                  <p>
                    {cityPagesSlideDataCreativeAgency.slide_6_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 7 */}
          <SwiperSlide>
            <Link href="/animation">
              <div className="citypagewiper-slide">
                <img
                  src="https://dndesigns.co.in/uploads/pages/animationcity.webp"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_7_slide_head}</h3>
                  <p>
                   {cityPagesSlideDataCreativeAgency.slide_7_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 8 */}
          <SwiperSlide>
            <Link href="/brand-video-shoots">
              <div className="citypagewiper-slide">
                <img
                  src="https://dndesigns.co.in/uploads/pages/man-recording-video-blog.jpg"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_8_slide_head}</h3>
                  <p>
                    {cityPagesSlideDataCreativeAgency.slide_8_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 9 */}
          <SwiperSlide>
            <Link href="/web-designing-services-in-india">
              <div className="citypagewiper-slide">
                <img
                  src="https://dndesigns.co.in/uploads/pages/webdesigncity.webp"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_9_slide_head}</h3>
                  <p>
                    {cityPagesSlideDataCreativeAgency.slide_9_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 10 */}
          <SwiperSlide>
            <Link href="/ui-ux-design">
              <div className="citypagewiper-slide">
                <img
                  src="https://dndesigns.co.in/uploads/pages/uiuxcity.webp"
                  alt="Branding"
                />
                <div className="cityswiperoverlay">
                  <h3>{cityPagesSlideDataCreativeAgency.slide_10_slide_head}</h3>
                  <p>
                    {cityPagesSlideDataCreativeAgency.slide_10_slide_para}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
      </section>
      </>
  );
}

export default CityPagesSwipper;
