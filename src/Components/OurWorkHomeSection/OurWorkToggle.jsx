"use client";

import { useState, useEffect } from "react";
import styles from "./OurWorkToggle.module.css"

export default function OurWorkToggle() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const hiddenSection = document.getElementById("more-content");
    if (hiddenSection) {
      hiddenSection.style.display = showMore ? "block" : "none";
    }
  }, [showMore]);

  return (
    <div className="mt-3 text-center">
      <button
        className={`${styles['showmore-btn']}`}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
