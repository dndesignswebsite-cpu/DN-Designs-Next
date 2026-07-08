"use client"

import React from 'react'
import "./LPFooterTwo.css"

function LPFooterTwo() {
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

      <div className='lp-footer'>
    <div className='container'>
      <p className='lp-footer-para'>Copyright © 2026 DN Designs . All rights reserved</p>
    </div>

    <div className='mobile-footer-btn-div'>
       
       
       {/* <a href="tel:+918683911100" className='mobile-footer-btn-1-ahref'>
      <button className='mobile-footer-btn mobile-footer-btn-1'>Call Now</button>
      </a> */}
      


        <a
          href="#enquiry-form"
          onClick={(e) => {
            e.preventDefault();
            handleScroll();
          }}

          className='btn-2-for-scroll'
        >
       <button className='mobile-footer-btn mobile-footer-btn-2'>Enquire Now</button>
       </a>

    </div>
    </div>
      
    </div>
  )
}

export default LPFooterTwo
