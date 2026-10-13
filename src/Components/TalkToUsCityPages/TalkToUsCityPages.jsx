// "use client"
// import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { useRouter, usePathname } from "next/navigation";

// import "./TalkToUsCityPages.css"

// function TalkToUs() {
//    const router = useRouter();
//    const pathname = usePathname();
//       const goToContact = () => {
//         sessionStorage.setItem("sourcePage", pathname);
//         router.push("/contact-us");
//       };
//   return (
//     <>
//       <div className="talk-to-us-div">
//                 <button className="talk-to-us talk-to-us-Laptop" onClick={goToContact}>Talk to Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button>
//               </div>
//            <button className="talk-to-us talk-to-us-mobile" onClick={goToContact}>Talk to Us<FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></button> 
               
//     </>
//   )
// }

// export default TalkToUs




"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

import "./TalkToUsCityPages.css";

function TalkToUs() {
  const pathname = usePathname();

  const goToContact = () => {
    sessionStorage.setItem("sourcePage", pathname);
  };

  return (
    <>
      <div className="talk-to-us-div">
        <Link
          href="/contact-us"
          className="talk-to-us talk-to-us-Laptop"
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

      <Link
        href="/contact-us"
        className="talk-to-us talk-to-us-mobile"
        onClick={goToContact}
      >
        Talk to Us
        <FontAwesomeIcon
          icon={faArrowRight}
          size="lg"
          className="fontAwesomeIcon-right-arrow"
        />
      </Link>
    </>
  );
}

export default TalkToUs;
