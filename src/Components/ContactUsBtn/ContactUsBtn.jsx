import React from 'react'
import "./ContactUsBtn.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ContactUsBtn() {
  return (
    <div className='contact-us-btn'>
      <button>Contact Us <FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button>
    </div>
  )
}

export default ContactUsBtn
