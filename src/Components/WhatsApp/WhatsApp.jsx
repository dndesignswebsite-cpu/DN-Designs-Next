"use client";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsApp.css";

function WhatsApp() {
  return (
    <div>
        <a href="https://wa.me/+919416011100" target="_blank" rel="noopener noreferrer">
      <button className="Whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "40px" }}/>
            </button>
    </a>
    </div>
  )
}

export default WhatsApp
