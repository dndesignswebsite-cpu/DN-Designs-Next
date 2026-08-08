"use client";

import "./AtOneAmContinueSlider.css";

export default function AtOneAmContinueSlider() {
  const slides = [
    "https://dndesigns.co.in/uploads/pages/atoneamcasestudyslider1.jpg",
    "https://dndesigns.co.in/uploads/pages/atoneamcasestudyslider2.jpg",
    "https://dndesigns.co.in/uploads/pages/atoneamcasestudyslider7.jpg",
    "https://dndesigns.co.in/uploads/pages/atoneamcasestudyslider3.jpg",
  ];

   const slides_two = [
    "https://dndesigns.co.in/uploads/pages/atoneamcasestudyslider8.jpg",
    "https://dndesigns.co.in/uploads/pages/atoneamcasestudyslider5.jpg",
    "https://dndesigns.co.in/uploads/pages/atoneamcasestudyslider6.jpg",
    "https://dndesigns.co.in/uploads/pages/atoneamcasestudyslider4.jpg",
  ];

  return (
    <div className="atoneam-continue-slider">
    <div className="slider-wrapper">

      {/* Row 1 */}
      <div className="slider-container">
        <div className="slider-track">
          {[...slides, ...slides].map((img, i) => (
            <div className="slide" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="slider-container second-row">
        <div className="slider-track reverse">
          {[...slides_two, ...slides_two].map((img, i) => (
            <div className="slide" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>

    </div>
    </div>
  );
}