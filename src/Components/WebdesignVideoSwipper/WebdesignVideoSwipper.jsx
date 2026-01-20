"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import "./WebdesignVideoSwipper.css";

export default function WebdesignVideoSwipper() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="container  website-design-video-swipper">
       <h2>Websites Tailored For You</h2>
        
     <div className="custom-buttons">
  <button
    onClick={() => swiperRef.current.slideToLoop(0)}
    className={activeIndex === 0 ? 'active' : ''}
  >
    For Start-ups
  </button>

  <button
    onClick={() => swiperRef.current.slideToLoop(1)}
    className={activeIndex === 1 ? 'active' : ''}
  >
    For Enterprise
  </button>

  <button
    onClick={() => swiperRef.current.slideToLoop(2)}
    className={activeIndex === 2 ? 'active' : ''}
  >
    For E-Commerce
  </button>
</div>


      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={true}
        spaceBetween={50}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <div>
            <div className="ratio ratio-16x9 shoot-video-youtube">
              {/* <iframe
                width="1120"
                height="630"
                src="https://www.youtube.com/embed/s-PQhgPFPjE"
                title="Nectarpure - 3D Product Cinematic Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe> */}

              <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/uploads/videos/Startups.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
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
                  You are a new business and aspire to be successful. However, customers have no idea about you or your products. What you primarily need to do then is to build awareness and inspire confidence. 
                  </p>
                </div>

                <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                  <p>
                    A website can help do just that, and we can help you build it. As a website design agency, we can craft a visually stunning, technically sound and SEO-optimised website for you, all within a limited budget. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="ratio ratio-16x9 shoot-video-youtube">
              {/* <iframe
                width="1120"
                height="630"
                src="https://www.youtube.com/embed/dt35fewQRho"
                title="Cinematic 3D Brand Film for Green Horn Energy Drink | Crafted by DN Designs"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe> */}

              <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/uploads/videos/enterprise.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
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
                    You need a well-built and secure website that can handle a huge amount of data & traffic. You also need a website where multiple users can work conveniently, and several tools can be integrated.
                  </p>
                </div>

                <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                  <p>
                    We design a website that offers you all these and more. We build your website on an enterprise-level CMS that can handle the challenges and complexities involved with a big business website. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <div className="ratio ratio-16x9 shoot-video-youtube">
              {/* <iframe
                width="1120"
                height="630"
                src="https://www.youtube.com/embed/FfouzC6rBJY"
                title="Premium 3D Render for Nature&#39;s Balance - Juices &amp; Salads | A DN Designs Project"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe> */}

                <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/uploads/videos/Ecommerce.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
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
                   A good e-commerce website serves two purposes. First, it allows users to explore and purchase products easily. Secondly, it enables the platform owner to perform tasks easily - management of data, orders, inventory and customer relationships.
                  </p>
                </div>

                <div className="col animation-video-swipper-content animation-video-swipper-content-only">
                  <p>
                  Our web design experts craft a SEO-friendly and responsive website that delivers on both fronts. We create a beautiful and easy-to-navigate frontend for users, and a robust, scalable, secure and smoothly functioning backend for you. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
