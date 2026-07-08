"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules"; 

import "swiper/css";
import "./LPBrandServicesSwipper.css";

const projects = [
  {
    title: "Hermès Ski",
    image: "https://dndesigns.co.in/uploads/avatars/hoverswipperidentity (2).jpg",
  },
  {
    title: "Dior Rouge",
    image: "https://dndesigns.co.in/uploads/avatars/hoverswipperlogo.jpg",
  },
  {
    title: "Vogue The Independents",
    image: "https://dndesigns.co.in/uploads/avatars/hoverswippernaming.jpg",
  },
  {
    title: "Louis Vuitton Cruise",
    image: "https://dndesigns.co.in/uploads/avatars/hoverswipperpositining.jpg",
  },
  {
    title: "Jacquemus",
    image: "https://dndesigns.co.in/uploads/avatars/hoverswipperrebranding.jpg",
  },
  {
    title: "Vogue Beyond Paris",
    image: "https://dndesigns.co.in/uploads/avatars/hoverswipperstrtergy.jpg",
  },
];

export default function LPBrandServicesSwiper() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("vertical");
  const isHoverChanging = useRef(false);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setDirection("horizontal");
      } else {
        setDirection("vertical");
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const changeSlide = (index) => {
    if (!swiperRef.current || swiperRef.current.realIndex === index) return;

    isHoverChanging.current = true;
    setActive(index);

   
    if (swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }

    setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.slideToLoop(index, 600);
        
        setTimeout(() => {
          isHoverChanging.current = false;
          
          if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start();
          }
        }, 600);
      }
    }, 0);
  };

  const handleMouseEnter = (index) => {
    if (direction === "vertical") {
      changeSlide(index);
    }
  };

  const handleClick = (index) => {
    if (direction === "horizontal") {
      changeSlide(index);
    }
  };

  return (
    <section className="portfolio__section">
      <div className="portfolio__window">
        
       
        <div className="portfolio__left">
        <div className="portfolio__left-head-para">
        <p className="portfolio__left-para">Our Work</p>
        <h2 className="portfolio__left-head">Work That Speaks For Itself</h2>
        </div>
          <div className="portfolio__list">
            {projects.map((item, index) => (
              <div
                key={index}
                className={`portfolio__item ${active === index ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={() => handleClick(index)}
              >
                {item.title}
                {active === index && <span className="active__indicator"></span>}
              </div>
            ))}
          </div>
        </div>

      
        <div className="portfolio__right">
          <Swiper
            key={direction} 
            direction={direction}
            slidesPerView={direction === "horizontal" ? 1.5 : 3} 
            centeredSlides={true}
            // spaceBetween={typeof window !== "undefined" && window.innerWidth <= 992 ? 15 : 30}
            spaceBetween={direction === "horizontal" ? 20 : 100}
            speed={600}
            loop={true}
            
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
              pauseOnMouseEnter: true, 
            }}
            modules={[Mousewheel, Autoplay]} 
            mousewheel={{ forceToAxis: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiperInstance) => {
              if (!isHoverChanging.current) {
                setActive(swiperInstance.realIndex);
              }
            }}
            className="portfolioSwiper"
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="imageCard">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={280}
                    priority={index < 3}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}