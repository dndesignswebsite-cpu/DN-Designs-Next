// "use client"

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ECataloguesBtn.css"
// import { useRouter, usePathname } from "next/navigation";
import Link from 'next/link';

function ECataloguesBtn() {

  //  const router = useRouter();
  //  const pathname = usePathname();
  //     const goToContact = () => {
  //       sessionStorage.setItem("sourcePage", pathname);
  //       router.push("/contact-us");
  //     };

  return (
    <div>
        <div className="e-catalogues-left-btn-div">
          
                  <Link href="/contact-us" className='e-catalogues-left-button'>Get in Touch
                   <FontAwesomeIcon
                    icon={faArrowRight}
                    size="18px"
                    className="fontAwesomeIcon-right-arrow"
                  />
                  </Link>
                
                </div>
    </div>
  )
}

export default ECataloguesBtn
