"use client";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function WhatsApp() {
  return (
    <div>
      <button className="Whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </button>
    </div>
  )
}

export default WhatsApp
