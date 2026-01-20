"use client";
import React from "react";
import styles from "./HomePageBtn.module.css";
import { useRouter } from "next/navigation";

function HomePageBtn() {
  const router = useRouter();

  const goToContact = () => {
    router.push("/contact-us");
  };

  return (
    <div className={styles.hero}>
      {/* normal button */}
      <button onClick={goToContact}>Talk To Us</button>

      {/* ID based scroll */}
      <a href="#ourworksection" className={styles.btnLink}>
        Explore Our Work
      </a>
    </div>
  );
}

export default HomePageBtn;
