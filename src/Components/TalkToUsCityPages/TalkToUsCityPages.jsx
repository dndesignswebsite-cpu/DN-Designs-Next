"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./TalkToUsCityPages.css"

function TalkToUs() {
  return (
    <>
      <div className="talk-to-us-div">
                <button className="talk-to-us talk-to-us-Laptop">Talk to Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button>
              </div>
           <button className="talk-to-us talk-to-us-mobile">Talk to Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button> 
               
    </>
  )
}

export default TalkToUs
