
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./BrandAuditCta.css"
import Link from 'next/link';

function BrandAuditCta() {
    
  return (
    <div>
      <div className="talk-to-us-div" >
        <Link href="/contact-us" className="talk-to-us talk-to-us-Laptop">
                      Contact Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" />
                      </Link>
                    </div>
                     
                     <Link href="/contact-us" className="talk-to-us talk-to-us-mobile">
                Contact Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" />
                 </Link>
                
    </div>
  )
}

export default BrandAuditCta
