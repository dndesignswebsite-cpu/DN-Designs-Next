"use client"

import React from 'react'
import "./LPStickyCTAFooter.css"

function LPStickyCTAFooter() {
     const handleScroll = () => {
    const section = document.getElementById("enquiry-form");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div>

        <div className='fixed-cta'>
        <div className='fixed-cta-content-wrapper'>
        <div className='fixed-cta-content'>
          <span className='fixed-cta-content-para'>Made up your mind?</span>
           <a
          href="#enquiry-form"
          onClick={(e) => {
            e.preventDefault();
            handleScroll();
          }}
        //   className='btn-2-for-scroll'
        >
       <button className='mobile-footer-btn-2-zz'>Let’s Connect</button>
       </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LPStickyCTAFooter
