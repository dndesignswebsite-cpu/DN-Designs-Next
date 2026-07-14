"use client"

import React from 'react'
import "./LPOurWorkSection.css";
import { useRef, useState } from "react";

function LPPureluxVideo() {

    // js for video
      const greenHornVideoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    
    const toggleGreenHornSound = (e) => {
      e.stopPropagation();
    
      const video = greenHornVideoRef.current;
    
      if (!video) return;
    
      video.muted = !video.muted;
      setIsMuted(video.muted);
    };
    // js end
  return (
    <div>
              <div className="imag-cont">
  <video
    ref={greenHornVideoRef}
    className="purelux-video"
    autoPlay
    muted
    loop
    playsInline
    style={{ borderRadius: "25px" }}
  >
    <source
      src="https://dndesigns.co.in/uploads/videos/lppackgingvideonewsection.mp4"
      type="video/mp4"
    />
  </video>

  <button
    className="sound-btn"
    onClick={toggleGreenHornSound}
  >
    {isMuted ? "🔇" : "🔊"}
  </button>

  {/* <div className="overlay"></div> */}

  {/* <div className="overlay-box">
    <div className="overlay-title">Pureluxe</div>
    <p className="Pras">Where Purity Meets Power</p>
  </div> */}
 </div>
    </div>
  )
}

export default LPPureluxVideo
