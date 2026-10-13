// "use client"

// import React from 'react'
// import "./BookDirectCTABtn.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { useRouter, usePathname } from "next/navigation";

// function BookDirectCTABtn() {
//     const router = useRouter();
//        const pathname = usePathname();
//           const goToContact = () => {
//             sessionStorage.setItem("sourcePage", pathname);
//             router.push("/contact-us");
//           };
//   return ( 
//     <div>
      
//                       <button className="talk-to-us-cta" onClick={goToContact}>Talk to Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button>

        
//     </div>
//   )
// }

// export default BookDirectCTABtn



"use client";

import React from "react";
import Link from "next/link";
import "./BookDirectCTABtn.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

function BookDirectCTABtn() {
  const pathname = usePathname();

  const goToContact = () => {
    sessionStorage.setItem("sourcePage", pathname);
  };

  return (
    <div>
      <Link
        href="/contact-us"
        className="talk-to-us-cta"
        onClick={goToContact}
      >
        Talk to Us
        <FontAwesomeIcon
          icon={faArrowRight}
          size="lg"
          className="fontAwesomeIcon-right-arrow"
        />
      </Link>
    </div>
  );
}

export default BookDirectCTABtn;
