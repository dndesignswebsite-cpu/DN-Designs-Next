"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./CityPagesSwipper.css";
import Link from "next/link";

function CityPagesSwipper() {
  return (
    <section className="citypagesswipper">
      <div className="container">
        <h2 className="citypagesswipper-h2 ">
          Branding and Marketing Services That Build Trust - And Admiration Too
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
          <Link href="/brand-name-suggestion">
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
            </Link>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
          <Link href="/branding">
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
            </Link>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
          <Link href="/logo-designing">
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
                <h3>Packaging Design</h3>
                <p>
                  Want your product to impress your consumer at first glance? Designing attractive packaging can be your winning move. We create designs that don’t just wow your consumer but deeply show what your brand wants to say.
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
                <h3>Catalogue Design</h3>
                <p>
                  Your business & your product deserve all the spotlight. So, we create attractive and organised catalogues that reflect your brand and product with clarity, making it impossible to go unnoticed.
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>


            {/* SLIDE 6 */}
          <SwiperSlide>
          <Link href="/digital-marketing">
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/digitalmarketing.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Digital Marketing</h3>
                <p>
                  In this digital era, businesses cannot negate the importance of digital marketing. We create digital marketing strategies that target your online audience the right way, increase visibility, drive traffic, and generate measurable results.
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>



            {/* SLIDE 7 */}
          <SwiperSlide>
          <Link href="/influencer-marketing">
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/cityswiperr1.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Influencer Marketing</h3>
                <p>
                  Influencers can boost your brand awareness and help generate revenue through their campaigns. We help you collaborate with the right influencers so that you can build trust among your target audience and drive engagement.
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>


            {/* SLIDE 8 */}
          <SwiperSlide>
          <Link href="/social-media-marketing">
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/socialmediamarketingcity.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Social Media Marketing</h3>
                <p>
                  To succeed, social media marketing is important. We are here to help you establish, manage and grow your social media presence. We provide comprehensive social media marketing services, from crafting a strategy to analysing performance.
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>


            {/* SLIDE 9 */}
          <SwiperSlide>
          <Link href="/animation">
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/animationcity.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Animation</h3>
                <p>
                  Animations have the power to captivate and win hearts. We create stunning animations to bring your brand to life. Be it 2D or 3D animation, we create visuals that capture audience attention and leave an enduring impact.
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>


            {/* SLIDE 10 */}
          <SwiperSlide>
          <Link href="/seo-marketing-agency-in-noida">
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/seocity.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>SEO</h3>
                <p>
                  Your website must appear prominently on search engines to improve your brand visibility, traffic and leads. We create and implement SEO strategies for this purpose. Be visible, attract customers and generate profit.
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>



            {/* SLIDE 11 */}
          <SwiperSlide>
          <Link href="/web-designing-services-in-india">
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/webdesigncity.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Web Design</h3>
                <p>
                  Your website is your online office or store. It must impress those who visit it. We, therefore, create SEO optimised websites that are visually appealing, functional, and reflect your brand identity. Our designs ensure a good user experience.
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>



            {/* SLIDE 12 */}
          <SwiperSlide>
          <Link href="/ui-ux-design">
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/uiuxcity.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>UI/UX Design</h3>
                <p>
                 Websites and app designs should be visually appealing and easy to use. We create exactly this by studying user behaviour, planning layouts, and designing interactions. We ensure your audience has a smooth experience with the website/app.
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>




            {/* SLIDE 13 */}
          <SwiperSlide>
          <Link href="/photography">
            <div className="citypagewiper-slide">
              <img
                src="https://dndesigns.co.in/uploads/pages/photographycity.webp"
                alt="Branding"
              />
              <div className="cityswiperoverlay">
                <h3>Photography</h3>
                <p>
                 Visuals speak louder than words. We capture the essence of your brand through our professional photography service. We create visuals that highlight your brand’s personality, connect with your audience and leave an everlasting impression.
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
