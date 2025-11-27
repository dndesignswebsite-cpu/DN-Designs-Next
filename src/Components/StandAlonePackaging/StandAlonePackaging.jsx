"use client";

import React, { useState } from "react";
import "./StandAlonePackaging.css";

function StandAlonePackaging({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(cards);

  return (
    <div>
      {/* Standalone Packaging Design Services desktop view */}
      <div className="container my-5 d-xl-block d-none">
        <h2 className="text-center  packaging-heading mb-3">
          {cards[0].mainTitle}
        </h2>

        <div className="row align-items-start g-5">
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src={cards[activeIndex].image}
              alt={cards[activeIndex].title}
              className="img-fluid packaging-images"
              style={{ transition: "0.5s ease" }}
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

      {/* Standalone Packaging Design Services mobile view */}

      <section>
        <div className="container my-5 d-xl-none d-block">
          <h2 className="text-center fw-bold packaging-heading mb-4">
           {cards[0].mainTitle}
          </h2>

          <div className="row  standalone-packaging-mobile  ">
            <div className="col-md-6 col-12">
              <img
                src={cards[0].image}
                alt=""
                className="img-fluid mb-3 packaging-images"
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

            <div className="col-md-6 col-12">
              <img
                src={cards[1].image}
                alt=""
                className="img-fluid mb-3 packaging-images"
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
            <div className="col-md-6 col-12">
              <img
                src={cards[2].image}
                alt=""
                className="img-fluid mb-3 packaging-images"
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

            <div className="col-md-6 col-12">
              <img
                src={cards[3].image}
                alt=""
                className="img-fluid mb-3 packaging-images"
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default StandAlonePackaging;
