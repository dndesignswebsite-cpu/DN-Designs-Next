"use client"

import React from 'react'

function StandAlonePackaging() {
  return (
    <div>
      {/* Standalone Packaging Design Services desktop view */}
  <div className="container my-5 d-xl-block d-none">
      <h2 className="text-center fw-bold packaging-heading mb-3">
        Standalone Packaging 
        <span style={{ color: "#CA2734" }}> Design Services</span>
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
                <p className="packaging-points-para m-0">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  )
}

export default StandAlonePackaging
