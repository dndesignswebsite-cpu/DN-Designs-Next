"use client"

import React, {useState} from 'react'
import "./StandAlonePackaging.css"

function StandAlonePackaging() {

  /* Standalone Packaging Design Services */
   const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      point: "01",
      title: "Consultation and Research",
      description:
        "You want a product package design & your mind is flooded with ideas and questions about design, market & audience. Let’s solve them one at a time.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/smart-adult-caucasi.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Brand Identity Design",
      description:
        "Whether it is the name, logo, tagline or a unique feature, all form part of your brand identity. Partner with us to create one that commands attention.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/9-1.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Product Photography",
      description:
        "Want a captivating photograph to enhance the appeal of your packaging design? Utilise our professional product photography service to elevate your packaging.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/Untitled-1.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Legal Compliance",
      description:
        "Legal compliance can sound a bit complex & intimidating, but your packaging design is incomplete without it. Contact us to create a legally compliant design.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/10.jpg",
    },
  ];

  
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

    {/* Standalone Packaging Design Services mobile view */}

    <section>
       <div className="container my-5 d-xl-none d-block">
      <h2 className="text-center fw-bold packaging-heading mb-4">
        Standalone Packaging{" "}
        <span style={{ color: "#CA2734" }}>Design Services</span>
      </h2>

      <div className="row  standalone-packaging-mobile  ">
        <div className="col-md-6 col-12">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/06/smart-adult-caucasi.jpg"
            alt=""
            className="img-fluid mb-3 packaging-images"
          />
          <div className="d-flex align-items-center">
            <h3 className="fw-bold packaging-point-number m-0">01</h3>
            <h4 className="fw-semibold packaging-points-title ms-4 text-start">
              Consultation and Research
            </h4>
          </div>
          <p className="mt-4 packaging-points-para text-start">
            You want a product package design & your mind is flooded with ideas
            and questions about design, market & audience. Let’s solve them one
            at a time.
          </p>
        </div>

        <div className="col-md-6 col-12">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/06/9-1.jpg"
            alt=""
            className="img-fluid mb-3 packaging-images"
          />
          <div className="d-flex align-items-center">
            <h3 className="fw-bold packaging-point-number m-0">02</h3>
            <h4 className="fw-semibold packaging-points-title ms-4 text-start">
              Brand Identity Design
            </h4>
          </div>
          <p className="mt-4 packaging-points-para text-start">
            Whether it is the name, logo, tagline or a unique feature, all form
            part of your brand identity. Partner with us to create one that
            commands attention.
          </p>
        </div>
      </div>

      <div className="row  mt-2">
        <div className="col-md-6 col-12">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/06/Untitled-1.jpg"
            alt=""
            className="img-fluid mb-3 packaging-images"
          />
          <div className="d-flex align-items-center">
            <h3 className="fw-bold packaging-point-number m-0">03</h3>
            <h4 className="fw-semibold packaging-points-title ms-4 text-start">
              Product Photography
            </h4>
          </div>
          <p className="mt-4 packaging-points-para text-start">
            Want a captivating photograph to enhance the appeal of your packaging design? Utilise our professional product photography service to elevate your packaging.
          </p>
        </div>

        <div className="col-md-6 col-12">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/06/10.jpg"
            alt=""
            className="img-fluid mb-3 packaging-images"
          />
          <div className="d-flex align-items-center">
            <h3 className="fw-bold packaging-point-number m-0">04</h3>
            <h4 className="fw-semibold packaging-points-title ms-4 text-start">
              Legal Compliance
            </h4>
          </div>
          <p className="mt-4 packaging-points-para text-start">
            Legal compliance can sound a bit complex & intimidating, but your packaging design is incomplete without it. Contact us to create a legally compliant design.
          </p>
        </div>
      </div>
    </div>
    </section>

    </div>
  )
}

export default StandAlonePackaging
