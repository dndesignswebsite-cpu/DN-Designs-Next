"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./AnimationSwipper.css";

export default function AnimationSwipper() {
  return (
    <div>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              <iframe
                width="100%"
                height="700"
                src="https://www.youtube.com/embed/s-PQhgPFPjE?si=Z9izdyQSoRTC3ZKu"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="swipper-content">
              <div className="animation-video-swipper-up">
                <h3>NECTACPURE</h3>
                <button>Know More</button>
              </div>
              <hr/>
              <div className="row animation-video-swipper-bottom">
              
                <div className="col animation-video-swipper-content">
                    <h4>2025</h4>
                </div>

                <div className="col animation-video-swipper-content">
                    <h4>TYPE 3-D ANIMATION</h4>
                    <p>Premier nutrition brand NECTARPURE partnered with us to launch and promote its FusionMax Whey protein product in the market. Its goal was to project the product as a premium lifestyle protein brand and create a niche space for itself in the market.</p>
                </div>

                <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                    <p>Premier nutrition brand NECTARPURE partnered with us to launch and promote its FusionMax Whey protein product in the market. Its goal was to project the product as a premium lifestyle protein brand and create a niche space for itself in the market.</p>
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container">
              <iframe
                width="100%"
                height="700"
                src="https://www.youtube.com/embed/s-PQhgPFPjE?si=Z9izdyQSoRTC3ZKu"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="swipper-content">
              <div className="animation-video-swipper-up">
                <h3>NECTACPURE</h3>
                <button>Know More</button>
              </div>
              <hr/>
              <div className="row animation-video-swipper-bottom">
              
                <div className="col animation-video-swipper-content">
                    <h4>2025</h4>
                </div>

                <div className="col animation-video-swipper-content">
                    <h4>TYPE 3-D ANIMATION</h4>
                    <p>Premier nutrition brand NECTARPURE partnered with us to launch and promote its FusionMax Whey protein product in the market. Its goal was to project the product as a premium lifestyle protein brand and create a niche space for itself in the market.</p>
                </div>

                <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                    <p>Premier nutrition brand NECTARPURE partnered with us to launch and promote its FusionMax Whey protein product in the market. Its goal was to project the product as a premium lifestyle protein brand and create a niche space for itself in the market.</p>
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div className="container">
              <iframe
                width="100%"
                height="700"
                src="https://www.youtube.com/embed/s-PQhgPFPjE?si=Z9izdyQSoRTC3ZKu"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="swipper-content">
              <div className="animation-video-swipper-up">
                <h3>NECTACPURE</h3>
                <button>Know More</button>
              </div>
              <hr/>
              <div className="row animation-video-swipper-bottom">
              
                <div className="col animation-video-swipper-content">
                    <h4>2025</h4>
                </div>

                <div className="col animation-video-swipper-content">
                    <h4>TYPE 3-D ANIMATION</h4>
                    <p>Premier nutrition brand NECTARPURE partnered with us to launch and promote its FusionMax Whey protein product in the market. Its goal was to project the product as a premium lifestyle protein brand and create a niche space for itself in the market.</p>
                </div>

                <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                    <p>Premier nutrition brand NECTARPURE partnered with us to launch and promote its FusionMax Whey protein product in the market. Its goal was to project the product as a premium lifestyle protein brand and create a niche space for itself in the market.</p>
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
