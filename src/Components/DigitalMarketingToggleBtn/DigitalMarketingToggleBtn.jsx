"use client"
import React from 'react'
import "./DigitalMarketingToggleBtn.css"
import { useRouter, usePathname } from "next/navigation";

function DigitalMarketingToggleBtn() {
  const router = useRouter();
   const pathname = usePathname();
      const goToContact = () => {
        sessionStorage.setItem("sourcePage", pathname);
        router.push("/contact-us");
      };
  return (
    <div>
      <label className="switch">
  <input type="checkbox" id="toggleBtn" onClick={goToContact}/>
  <span className="slider"></span>
</label>
    </div>
  )
}

export default DigitalMarketingToggleBtn
