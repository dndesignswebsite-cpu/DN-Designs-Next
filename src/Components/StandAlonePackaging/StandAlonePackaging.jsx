"use client";

import React, { useState } from "react";
import "./StandAlonePackaging.css";
import Image from "next/image";

function StandAlonePackaging({ cards, mobileCrads }) {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(cards);

  return (
    <div>
      {/* Standalone Packaging Design Services desktop view */}
      <section className="standalone">
        <div className="container my-5 d-xl-block d-none">
          {/* <h2 className="text-center packaging-heading">
          {cards[0].mainTitle}
        </h2> */}

          <div className="row align-items-start g-5">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              {/* <img
              src={cards[activeIndex].image}
              alt={cards[activeIndex].title}
              className="img-fluid packaging-images"
              style={{ transition: "0.5s ease" }}
            /> */}

              <Image
                src={cards[activeIndex].image}
                alt={cards[activeIndex].title}
                className="img-fluid packaging-images standalone-hover-desktop-img"
                style={{ transition: "0.5s ease" }}
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
              
            </div>

            <div className="col-lg-6">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`row p-3 packaging-cards mb-2 ${
                    activeIndex === index ? "active-card" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="col-lg-2 text-center">
                    <h3 className="fw-bold packaging-point-number">
                      {card.point}
                    </h3>
                  </div>
                  <div className="col-lg-10 text-start">
                    <h3 className="fw-semibold packaging-points-title">
                      {card.title}
                    </h3>
                    <p className="packaging-points-para m-0">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Packaging Design Services mobile view */}

      {/* <section>
        <div className="container my-5 d-xl-none d-block">
         

          <div className="row  standalone-packaging-mobile">
            <div className=" col-12">
            

              <Image
                src={mobileCrads[0].mobileImage}
                alt={cards[activeIndex].title}
                className="img-fluid mb-3 packaging-images standalone-mobile-aspect-img"
                width={800}
                height={533}
                sizes="(max-width:767px) 100vw, 100vw"
              />

              <div className="d-flex align-items-center">
                <h3 className="fw-bold packaging-point-number m-0">01</h3>
                <h4 className="fw-semibold packaging-points-title ms-4 text-start">
                  {cards[0].title}
                </h4>
              </div>
              <p className="mt-4 packaging-points-para text-start">
                {cards[0].description}
              </p>
            </div>

            <div className=" col-12">
           

              <Image
                src={mobileCrads[1].mobileImage}
                alt={cards[activeIndex].title}
                className="img-fluid mb-3 packaging-images standalone-mobile-aspect-img"
                width={800}
                height={533}
                sizes="(max-width:767px) 100vw, 100vw"
              />

              <div className="d-flex align-items-center">
                <h3 className="fw-bold packaging-point-number m-0">02</h3>
                <h4 className="fw-semibold packaging-points-title ms-4 text-start">
                  {cards[1].title}
                </h4>
              </div>
              <p className="mt-4 packaging-points-para text-start">
                {cards[1].description}
              </p>
            </div>
          </div>

          <div className="row  mt-2">
            <div className=" col-12">
             

              <Image
                src={mobileCrads[2].mobileImage}
                alt={cards[activeIndex].title}
                className="img-fluid mb-3 packaging-images standalone-mobile-aspect-img"
                width={800}
                height={533}
                sizes="(max-width:767px) 100vw, 100vw"
              />
              <div className="d-flex align-items-center">
                <h3 className="fw-bold packaging-point-number m-0">03</h3>
                <h4 className="fw-semibold packaging-points-title ms-4 text-start">
                  {cards[2].title}
                </h4>
              </div>
              <p className="mt-4 packaging-points-para text-start">
                {cards[2].description}
              </p>
            </div>

            <div className=" col-12">
            
              <Image
                src={mobileCrads[3].mobileImage}
                alt={cards[activeIndex].title}
                className="img-fluid mb-3 packaging-images standalone-mobile-aspect-img"
                width={800}
                height={533}
                sizes="(max-width:767px) 100vw, 100vw"
              />
              <div className="d-flex align-items-center">
                <h3 className="fw-bold packaging-point-number m-0">04</h3>
                <h4 className="fw-semibold packaging-points-title ms-4 text-start">
                  {cards[3].title}
                </h4>
              </div>
              <p className="mt-4 packaging-points-para text-start">
                {cards[3].description}
              </p>
            </div>


              <div className=" col-12">
          
              <Image
                src={mobileCrads[4].mobileImage}
                alt={cards[activeIndex].title}
                className="img-fluid mb-3 packaging-images standalone-mobile-aspect-img"
                width={800}
                height={533}
                sizes="(max-width:767px) 100vw, 100vw"
              />
              <div className="d-flex align-items-center">
                <h3 className="fw-bold packaging-point-number m-0">05</h3>
                <h4 className="fw-semibold packaging-points-title ms-4 text-start">
                  {cards[4].title}
                </h4>
              </div>
              <p className="mt-4 packaging-points-para text-start">
                {cards[4].description}
              </p>
            </div>


          </div>
        </div>
      </section> */}


      {/* Standalone Packaging Design Services mobile view */}

<section>
  <div className="container my-5 d-xl-none d-block">
    <div className="row standalone-packaging-mobile">
      {mobileCrads?.map((mobileCard, index) => {
        const card = cards?.[index];

        // Agar corresponding card nahi hai to render mat karo
        if (!card) return null;

        return (
          <div className="col-12" key={card.id || index}>
            <Image
              src={mobileCard.mobileImage}
              alt={card.title}
              className="img-fluid mb-3 packaging-images standalone-mobile-aspect-img"
              width={800}
              height={533}
              sizes="(max-width:767px) 100vw, 100vw"
            />

            <div className="d-flex align-items-center">
              <h3 className="fw-bold packaging-point-number m-0">
                {card.point || String(index + 1).padStart(2, "0")}
              </h3>

              <h4 className="fw-semibold packaging-points-title ms-4 text-start">
                {card.title}
              </h4>
            </div>

            <p className="mt-4 packaging-points-para text-start">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>


    </div>
  );
}

export default StandAlonePackaging;
