"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./CatalougePageFlip.css";

function CatalougePageFlip() {
  

  return (
    <>
      <div className="conatiner">
        <div className="row">
            <div className="col">
                <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className="img-fluid"/>
            </div>
            <div className="col">
                <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/1.jpg' className="img-fluid"/>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <img src='https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp' className="img-fluid"/>
            </div>
            <div className="col">
                <img src='https://dndesigns.co.in/wp-content/uploads/2023/12/eiuwhiofwej.jpg' className="img-fluid"/>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Naturz_-Veda-Moc.jpg' className="img-fluid"/>
            </div>
            <div className="col">
                <img src='https://dndesigns.co.in/wp-content/uploads/2019/02/1.png.webp' className="img-fluid"/>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/kavaliers.jpg' className="img-fluid"/>
            </div>
            <div className="col">
                <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/kavaliers-1.jpg' className="img-fluid"/>
            </div>
        </div>
      </div>
    </>
  );
}

export default CatalougePageFlip;
