"use client";

import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./LetssuppAosComp.css";

function LetssuppAosCompFirst() {
     useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
      });
  
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }, []);
  return (
    <div>
        <div className="modern-essentials-textsec text-center">
              <h2 data-aos="fade-down">modern <br></br><span className='letsupfont-head'>essentials.</span></h2>
            </div>
    </div>
  )
}

export default LetssuppAosCompFirst
