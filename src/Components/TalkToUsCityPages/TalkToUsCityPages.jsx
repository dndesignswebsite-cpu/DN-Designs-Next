"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

import "./TalkToUsCityPages.css"

function TalkToUs() {
   const router = useRouter();
      const goToContact = () => {
        router.push("/contact-us");
      };
  return (
    <>
      <div className="talk-to-us-div">
                <button className="talk-to-us talk-to-us-Laptop" onClick={goToContact}>Talk to Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button>
              </div>
           <button className="talk-to-us talk-to-us-mobile" onClick={goToContact}>Talk to Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button> 
               
    </>
  )
}

export default TalkToUs
