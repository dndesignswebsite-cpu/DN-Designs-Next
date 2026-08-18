"use client"

import React, { useState } from 'react'
import "./IndustriesSectionNewLayout.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';

function IndustriesSectionNewLayout() {
    const [activeSlide, setActiveSlide] = useState(6);
    
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
    <div className='industries-section-for-padding'>

    <div className='container industreis-section-content-div'>
    <p className='industreis-section-content-label-para'>Sector Expertise</p>
    <h2 className='industreis-section-content-head'>Categories We Build</h2>
    <p className='industreis-section-content-para-desc'>Providing end-to-end solutions to build brands across categories. </p>
    </div>
    
      <section className='industries-section-layout-desktop'>
        <div className='container'> 
             <div className='industries-section-layout-images-div'>
              {/*  <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img1 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img2 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img3 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img4 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img5 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img6 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img7 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img8 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img9 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img10 img'></img>
                <img src="https://dndesigns.co.in/uploads/pages/VEIKK.webp" className='img-fluid img11 img'></img>
                */}
           

              
             <div className={`citypagewiper-slide-i img1 img ${
        activeSlide === 1 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(1)}
    onMouseLeave={() => setActiveSlide(6)}>
    <Link href="/food-beverage-branding">
                             <Image src={"https://dndesigns.co.in/uploads/pages/industriessectionFOOD-AND-BEVERAGES.jpg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                            </Link>
                           <Link href="/food-beverage-branding">
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_1_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_1_slide_para}</p>
                            </div>
                            </Link>
                          </div>
                          

                           
                          <div className={`citypagewiper-slide-i img2 img ${
        activeSlide === 2 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(2)}
    onMouseLeave={() => setActiveSlide(6)}>
    <Link href="fmcg-branding">
                             <Image src={"https://dndesigns.co.in/uploads/pages/wjegdhvjFMCG.jpg.jpeg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                             </Link>
                           <Link href="fmcg-branding">
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_2_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_2_slide_para}</p>
                            </div>
                            </Link>
                          </div>
                         


                          <div className={`citypagewiper-slide-i img3 img ${
        activeSlide === 3 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(3)}
    onMouseLeave={() => setActiveSlide(6)}>
    <Link href="wellness-branding">
                             <Image src={"https://dndesigns.co.in/uploads/pages/industriessectionPERSONAL-WELLNESS.jpg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                            </Link>
                           <Link href="wellness-branding">
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_3_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_3_slide_para}</p>
                            </div>
                            </Link>
                          </div>


                          <div className={`citypagewiper-slide-i img4 img ${
        activeSlide === 4 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(4)}
    onMouseLeave={() => setActiveSlide(6)}>
                             <Image src={"https://dndesigns.co.in/uploads/avatars/insdustriesnewoptimizedimageHEALTH.jpg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                           
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_4_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_4_slide_para}</p>
                            </div>
                          </div>


                          <div className={`citypagewiper-slide-i img5 img ${
        activeSlide === 5 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(5)}
    onMouseLeave={() => setActiveSlide(6)}>
                             <Image src={"https://dndesigns.co.in/uploads/pages/industriessectionJEWLERY.jpg.jpeg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                           
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_5_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_5_slide_para}</p>
                            </div>
                          </div>


                          <div  className={`citypagewiper-slide-i img6 img ${
        activeSlide === 6 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(6)}
    onMouseLeave={() => setActiveSlide(6)}>
                             <Image src={"https://dndesigns.co.in/uploads/pages/industriessectionSKIN-CARE.jpg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                           
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_6_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_6_slide_para}</p>
                            </div>
                          </div>


                          <div className={`citypagewiper-slide-i img7 img ${
        activeSlide === 7 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(7)}
    onMouseLeave={() => setActiveSlide(6)}>
                             <Image src={"https://dndesigns.co.in/uploads/pages/industriessectionFASHION.jpg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                           
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_7_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_7_slide_para}</p>
                            </div>
                          </div>


                          <div className={`citypagewiper-slide-i img8 img ${
        activeSlide === 8 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(8)}
    onMouseLeave={() => setActiveSlide(6)}>
                             <Image src={"https://dndesigns.co.in/uploads/pages/homeindusrryehjEDUCATION.jpg.jpeg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                           
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_8_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_8_slide_para}</p>
                            </div>
                          </div>

                          <div className={`citypagewiper-slide-i img9 img ${
        activeSlide === 9 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(9)}
    onMouseLeave={() => setActiveSlide(6)}>
                             <Image src={"https://dndesigns.co.in/uploads/pages/industriessectionTRAVELL.jpg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                           
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_9_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_9_slide_para}</p>
                            </div>
                          </div>

                          <div className={`citypagewiper-slide-i img10 img ${
        activeSlide === 10 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(10)}
    onMouseLeave={() => setActiveSlide(6)}>
                             <Image src={"https://dndesigns.co.in/uploads/pages/industriessectionTECHNOLOGY.jpg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                           
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_10_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_10_slide_para}</p>
                            </div>
                          </div>

                          <div className={`citypagewiper-slide-i img11 img ${
        activeSlide === 11 ? "active" : ""
    }`}
    onMouseEnter={() => setActiveSlide(11)}
    onMouseLeave={() => setActiveSlide(6)}>
                             <Image src={"https://dndesigns.co.in/uploads/pages/industriessectionAUTOMOBILE.jpg"}
                           alt="Green Horn Catalogue"
                            width={750} 
                            height={1050} 
                            className="responsive-img city-page-swiperr-slide-img responsive-img" 
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            />
                           
                            <div className="cityswiperoverlay-a">
                              <h3>{cityPagesSlideData.slide_11_slide_head}</h3>
                              <p>{cityPagesSlideData.slide_11_slide_para}</p>
                            </div>
                          </div>

                           </div> 
        </div>
      </section>



      {/* mobile view */}
      <section className='industry-mobile-view'>
      <div className="container">
       <Swiper
      modules={[Navigation]}
      navigation
      // pagination={{ clickable: true }}
      spaceBetween={20}
     slidesPerView={1}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
      loop={true}
    >
      <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/industriessectionFOOD-AND-BEVERAGES.jpg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_1_slide_head}</h3>
              <p>{cityPagesSlideData.slide_1_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

       <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/wjegdhvjFMCG.jpg.jpeg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_2_slide_head}</h3>
              <p>{cityPagesSlideData.slide_2_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

       <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/industriessectionPERSONAL-WELLNESS.jpg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_3_slide_head}</h3>
              <p>{cityPagesSlideData.slide_3_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

       <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/avatars/insdustriesnewoptimizedimageHEALTH.jpg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_4_slide_head}</h3>
              <p>{cityPagesSlideData.slide_4_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

             <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/industriessectionJEWLERY.jpg.jpeg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_5_slide_head}</h3>
              <p>{cityPagesSlideData.slide_5_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

             <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/industriessectionSKIN-CARE.jpg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_6_slide_head}</h3>
              <p>{cityPagesSlideData.slide_6_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

             <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/industriessectionFASHION.jpg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_7_slide_head}</h3>
              <p>{cityPagesSlideData.slide_7_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

             <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/homeindusrryehjEDUCATION.jpg.jpeg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_8_slide_head}</h3>
              <p>{cityPagesSlideData.slide_8_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

             <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/industriessectionTRAVELL.jpg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_9_slide_head}</h3>
              <p>{cityPagesSlideData.slide_9_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

             <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/industriessectionTECHNOLOGY.jpg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_10_slide_head}</h3>
              <p>{cityPagesSlideData.slide_10_slide_para}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

             <SwiperSlide>
        <div className="slide">
          <div className='slider-wrapper'>
            <img src="https://dndesigns.co.in/uploads/pages/industriessectionAUTOMOBILE.jpg" className='img-fluid industies-section-img'></img>
            <div className='overlay-text-content'>
              <h3>{cityPagesSlideData.slide_11_slide_head}</h3>
              <p>{cityPagesSlideData.slide_11_slide_para}</p>
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

export default IndustriesSectionNewLayout
