"use client"

import React from 'react'
import "./ContactUsBtn.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

function ContactUsBtn() {

  const router = useRouter();
      const goToContact = () => {
        router.push("/contact-us");
      };

  return (
    <div className='contact-us-btn'>
      <button onClick={goToContact}>Contact Us <FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button>
    </div>
  )
}

export default ContactUsBtn
