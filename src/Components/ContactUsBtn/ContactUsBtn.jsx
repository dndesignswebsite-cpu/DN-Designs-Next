"use client"

import React from 'react'
import "./ContactUsBtn.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter, usePathname } from "next/navigation";

function ContactUsBtn() {

  const router = useRouter();
  const pathname = usePathname();
      const goToContact = () => {
        sessionStorage.setItem("sourcePage", pathname);
        router.push("/contact-us");
      };

  return (
    <div className='contact-us-btn'>
      <button onClick={goToContact}>Contact Us <FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button>
    </div>
  )
}

export default ContactUsBtn
