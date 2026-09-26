"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter, usePathname } from "next/navigation";
import "./BrandAuditCta.css"

function BrandAuditCta() {
    const router = useRouter();
      const pathname = usePathname();
    
        const goToContact = () => {
          sessionStorage.setItem("sourcePage", pathname);
          router.push("/contact-us");
        };
  return (
    <div>
      <div className="talk-to-us-div">
                      <button className="talk-to-us talk-to-us-Laptop" onClick={goToContact}>REACH OUT NOW<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button>
                    </div>
                 <button className="talk-to-us talk-to-us-mobile" onClick={goToContact}>REACH OUT NOW<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button> 
    </div>
  )
}

export default BrandAuditCta
