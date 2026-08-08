"use client";

import "./AtOneAmContinueSlider.css";

export default function AtOneAmContinueSlider() {
  const slides = [
    "https://dndesigns.co.in/uploads/pages/brand-strategydesktopbanner.jpg",
    "https://dndesigns.co.in/uploads/pages/brand-strategydesktopbanner.jpg",
    "https://dndesigns.co.in/uploads/pages/brand-strategydesktopbanner.jpg",
    "https://dndesigns.co.in/uploads/pages/brand-strategydesktopbanner.jpg",
  ];

   const slides_two = [
    "https://dndesigns.co.in/uploads/pages/brand-strategydesktopbanner.jpg",
    "https://dndesigns.co.in/uploads/pages/brand-strategydesktopbanner.jpg",
    "https://dndesigns.co.in/uploads/pages/brand-strategydesktopbanner.jpg",
    "https://dndesigns.co.in/uploads/pages/brand-strategydesktopbanner.jpg",
  ];

  return (
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
  );
}