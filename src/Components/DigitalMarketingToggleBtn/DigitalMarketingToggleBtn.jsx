"use client"
import React from 'react'
import "./DigitalMarketingToggleBtn.css"
import { useRouter } from "next/navigation";

function DigitalMarketingToggleBtn() {
  const router = useRouter();
      const goToContact = () => {
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
