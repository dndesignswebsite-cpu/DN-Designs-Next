"use client"

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ECataloguesBtn.css"
import { useRouter, usePathname } from "next/navigation";

function ECataloguesBtn() {

   const router = useRouter();
   const pathname = usePathname();
      const goToContact = () => {
        sessionStorage.setItem("sourcePage", pathname);
        router.push("/contact-us");
      };

  return (
    <div>
        <div className="e-catalogues-left-btn-div">
                  <button onClick={goToContact}>Get in Touch
                   <FontAwesomeIcon
                    icon={faArrowRight}
                    size="18px"
                    className="fontAwesomeIcon-right-arrow"
                  />
                  </button>
                </div>
    </div>
  )
}

export default ECataloguesBtn
