"use client";
import React from "react";
import styles from "./HomePageBtn.module.css";
import { useRouter, usePathname } from "next/navigation";

function HomePageBtn() {
  const router = useRouter();
  const pathname = usePathname();

  const goToContact = () => {
  const sourcePage = pathname === "/" ? "Home" : pathname;
  sessionStorage.setItem("sourcePage", sourcePage);
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
