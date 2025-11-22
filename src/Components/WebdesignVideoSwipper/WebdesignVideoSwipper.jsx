"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./WebdesignVideoSwipper.css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";



export default function WebdesignVideoSwipper() {
    const slideLabels = ['Startups', 'Enterprises', 'Ecommerce'];
  return (
    <div className="WebdesignVideoSwipper-container">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
             el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}">${slideLabels[index]}</span>`;
            },
          }}
          modules={[Pagination,Navigation]}
          className="mySwiper_mm"
        >
          <SwiperSlide>
            <div>
              <div className="ratio ratio-16x9 shoot-video-youtube">
                <iframe
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/s-PQhgPFPjE"
                  title="Nectarpure - 3D Product Cinematic Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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
                      Premier nutrition brand NECTARPURE partnered with us to
                      launch and promote its FusionMax Whey protein product in
                      the market. Its goal was to project the product as a
                      premium lifestyle protein brand and create a niche space
                      for itself in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="ratio ratio-16x9 shoot-video-youtube">
                <iframe
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/dt35fewQRho"
                  title="Cinematic 3D Brand Film for Green Horn Energy Drink | Crafted by DN Designs"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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
                      Premier nutrition brand NECTARPURE partnered with us to
                      launch and promote its FusionMax Whey protein product in
                      the market. Its goal was to project the product as a
                      premium lifestyle protein brand and create a niche space
                      for itself in the market.
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
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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
                      Premier nutrition brand NECTARPURE partnered with us to
                      launch and promote its FusionMax Whey protein product in
                      the market. Its goal was to project the product as a
                      premium lifestyle protein brand and create a niche space
                      for itself in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}
