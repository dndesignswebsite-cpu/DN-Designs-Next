import React from "react";
import Image from "next/image";
import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import styles from "./HomePageHero.module.css";


function HomePageHero({ title, description }) {
    const imageUrl = "https://dndesigns.co.in/uploads/pages/";
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={`${styles["hero-rows"]} row`}>

          {/* Left */}
          <div className={`${styles["left-hero"]} col`}>
            <h1>{title}</h1>

            <p className="para-roboto">
              {description}
            </p>

            <div>
              <HomePageBtn />
            </div>
          </div>

          {/* Right */}
          <div className={`${styles["hero-img"]} col`}>

            <Image
              src={imageUrl + "gkjeg.webp"}
              className={`${styles["hero-bg-img"]} ${styles["responsive-img"]}`}
              alt="hero background"
              width={1000}
              height={1000}
              priority
            />

            <Image
              src={imageUrl + "hgefef.webp"}
              className={`${styles["hero-img-main"]} ${styles["responsive-img"]}`}
              alt="hero main"
              width={700}
              height={700}
              priority
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default HomePageHero;
