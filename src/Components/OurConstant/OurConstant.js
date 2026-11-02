import React from "react";
import Image from "next/image";
import styles from "./OurConstant.module.css";

function OurConstant() {
  const imageUrl = "https://dndesigns.co.in/uploads/pages/";

  const logos = [
    "holidayinn_logo.webp",
    "audi logo.webp",
    "PB_Business logo.webp",
    "iOrganic-Logo.webp",
    "wlues logo.webp",
    "1am.webp",
    "enlite logo.webp",
    "nectarpure (1).webp",
    "smartyum logo.webp",
    "Thames logo.webp",
    "veikk logo.webp",
    "Pureluxe.webp",
    "bobalist logo.webp",
    "wjvaghsdvhesgadcv.webp",
    "Bachpan logo.webp",
    "qualiteq logo.webp",
    "rungta logo.webp",
    "logoconstLet's-Supp.webp",
    "david logo.webp",
    "Ekos.webp",
    "Brrat.webp",
    "fluke logo.webp",
    "one science logo.webp",
    "mr-bomzy logo.webp",
    "3-sisters-logo-1.webp",
  ];


  const logosAlt = [
    "Holiday Inn logo",
    "Audi logo",
    "PB Business logo",
    "iOrganic logo",
    "Wlue's logo",
    "1 AM logo",
    "Rithm's Enlite logo",
    "Nectarpure logo",
    "Smart Yums logo",
    "Thames logo",
    "Veikk logo",
    "Pureluxe logo",
    "The Bobalist logo",
    "Nature Balance logo",
    "Bachpan logo",
    "Qualiteq logo",
    "Rungtas Logo",
    "Let's Supp logo",
    "David Morris logo",
    "Ekos logo",
    "BRRAT logo",
    "Fluke logo",
    "One Science logo",
    "Mr. Bomzy logo",
    "3 Sisters logo", 
  ];

  return (
    <section className={styles["our-constant-companions"]}>
      <div className="container">
        <h2 className={styles["our-brand-heading"]}>
          Our{" "}
          <span className={styles["our-constant-comapny-heqadg-red"]}>
            Constant Companions
          </span>
        </h2>

        <div className={styles["logo-grid"]}>
          {logos.map((logo, index) => (
            <div key={index} className={styles["company-item"]}>
              <Image
                src={imageUrl + logo}
                alt={logosAlt[index]}
                width={150}
                height={150}
                sizes="(max-width: 767px) 50vw, 150px"
                className={styles["companies-img"]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurConstant;

