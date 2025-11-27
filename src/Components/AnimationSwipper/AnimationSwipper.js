"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./AnimationSwipper.css";

export default function AnimationSwipper() {
  return (
    <div>
      <div className="container">
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
          className="mySwiper_mm"
        >
          <SwiperSlide>
            <div className="">
              <div className="ratio ratio-16x9 shoot-video-youtube">
                <iframe
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/s-PQhgPFPjE"
                  title="Nectarpure - 3D Product Cinematic Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="swipper-content-animation">
                <div className="animation-video-swipper-up">
                  <h3>NECTACPURE</h3>
                  <button>Know More</button>
                </div>
                <div className="hr-animation"></div>
                <div className="row animation-video-swipper-bottom">
                  <div className="col animation-video-swipper-content">
                    <h4>2025</h4>
                  </div>

                  <div className="col animation-video-swipper-content">
                    <h4>TYPE 3-D ANIMATION</h4>
                    <p>
                      Premier nutrition brand NECTARPURE partnered with us to
                      launch and promote its FusionMax Whey protein product in
                      the market. Its goal was to project the product as a
                      premium lifestyle protein brand and create a niche space
                      for itself in the market.
                    </p>
                  </div>

                  <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                    <p>
                      For the fulfilment of this objective, we created an
                      impactful and cinematic 3D product advertisement video. In
                      this visually stunning video, the product is revealed
                      gradually to make a lasting impression. The making of the
                      product is also revealed effectively. We ensured an
                      overall premium vibe in the video.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
              <div className="ratio ratio-16x9 shoot-video-youtube">
                <iframe
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/dt35fewQRho"
                  title="Cinematic 3D Brand Film for Green Horn Energy Drink | Crafted by DN Designs"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="swipper-content-animation">
                <div className="animation-video-swipper-up">
                  <h3>Green Horn</h3>
                  <button>Know More</button>
                </div>
                <div className="hr-animation"></div>
                <div className="row animation-video-swipper-bottom">
                  <div className="col animation-video-swipper-content">
                    <h4>2025</h4>
                  </div>

                  <div className="col animation-video-swipper-content">
                    <h4>TYPE 3-D ANIMATION</h4>
                    <p>
                      New Zealand-based DM Group collaborated with us for a
                      creative video advertisement introducing and promoting its
                      energy drink product range named Green Horn.
                    </p>
                  </div>

                  <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                    <p>
                      Through our 3D product animation video, we revealed the
                      three variants of the product. To further draw more
                      attention, we highlighted them against a dark background
                      and lent an energetic feel to the entire video.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
              <div className="ratio ratio-16x9 shoot-video-youtube">
                <iframe
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/FfouzC6rBJY"
                  title="Premium 3D Render for Nature&#39;s Balance - Juices &amp; Salads | A DN Designs Project"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="swipper-content-animation">
                <div className="animation-video-swipper-up">
                  <h3>Nature’s Balance</h3>
                  <button>Know More</button>
                </div>
                <div className="hr-animation"></div>
                <div className="row animation-video-swipper-bottom">
                  <div className="col animation-video-swipper-content">
                    <h4>2025</h4>
                  </div>

                  <div className="col animation-video-swipper-content">
                    <h4>TYPE 3-D ANIMATION</h4>
                    <p>
                      Nature’s Balance, a premium health-focused cafe, hired us
                      to create a captivating and strikingly lifelike video of
                      its signature products – organic juices and fresh salads.
                      Following their design brief, we made a 3D product
                      visualisation video that showcases these products in a
                      delightful and super-realistic fashion.
                    </p>
                  </div>

                  <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                    <p>
                      The animation video highlights health, natural goodness
                      and freshness – the core values of the brand. The
                      colourful video also introduces the various flavours of
                      the juices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
              <div className="ratio ratio-16x9 shoot-video-youtube">
                <iframe
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/vJMby5XhQ9Y"
                  title="3D Product Video For Water Heater EAU CHAUFFAGE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="swipper-content-animation">
                <div className="animation-video-swipper-up">
                  <h3>Eau-Chauffage</h3>
                  <button>Know More</button>
                </div>
                <div className="hr-animation"></div>
                <div className="row animation-video-swipper-bottom">
                  <div className="col animation-video-swipper-content">
                    <h4>2024</h4>
                  </div>

                  <div className="col animation-video-swipper-content">
                    <h4>TYPE 3-D ANIMATION</h4>
                    <p>
                      Canada-based water heater brand Eau-Chauffage brought us
                      on board to create their product launch video. With the
                      help of the latest animation techniques, our experts at DN
                      Designs created a cinematic 3D advertising video.
                    </p>
                  </div>

                  <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                    <p>
                      Through our creative, elegant and professional-looking
                      video, we established Eau-Chauffage as a premium brand.
                      The video not only presents the product but also
                      stylistically showcases its advanced technology, features
                      and advantages for the benefit of the users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
