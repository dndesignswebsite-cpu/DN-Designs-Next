import React from "react";
import styles from "./OurConstant.module.css";
import Image from "next/image";

function OurConstant() {
  const imageUrl = "https://dndesigns.co.in/uploads/pages/";
  return (
    <div>
      <section className={`${styles["our-constant-companions"]}`}>
        <div className={`${styles["large-screen"]} container text-center`}>
          <h2 className={`${styles["our-brand-heading"]}`}>
            Our{" "}
            <span className={`${styles["our-constant-comapny-heqadg-red"]}`}>
              Constant Companions
            </span>
          </h2>
          <div className={`${styles["comapnies-logo-row"]}`}>
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "holidayinn_logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                src={imageUrl + "holidayinn_logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "audi logo.webp"}
                className="img-fluid"
                alt=""
              ></img> */}

               <Image
               src={imageUrl + "audi logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />

            </div>

            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "PB_Business logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
              src={imageUrl + "PB_Business logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "iOrganic-Logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
              src={imageUrl + "iOrganic-Logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "wlues logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
             src={imageUrl + "wlues logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "Grin care logo.webp"}
                className="img-fluid"
              ></img> */}

                <Image
                src={imageUrl + "Grin care logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "enlite logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
                src={imageUrl + "enlite logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 8 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "nectarpure (1).webp"}
                className="img-fluid"
              ></img> */}

              <Image
                src={imageUrl + "nectarpure (1).webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 9 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "smartyum logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                src={imageUrl + "smartyum logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 10 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "Thames logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
                  src={imageUrl + "Thames logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 11 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "veikk logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                  src={imageUrl + "veikk logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 12 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "enliiv logo.webp"}
                className="img-fluid"
              ></img> */}
                <Image
                  src={imageUrl + "enliiv logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />

            </div>

            {/* 13 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "bobalist logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                  src={imageUrl + "bobalist logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 14 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "wjvaghsdvhesgadcv.webp"}
                className="img-fluid"
              ></img> */}
              <Image
                  src={imageUrl + "wjvaghsdvhesgadcv.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 15 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "Bachpan logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                  src={imageUrl + "Bachpan logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 16 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "qualiteq logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                  src={imageUrl + "qualiteq logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 17 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "rungta logo.webp"}
                className="img-fluid"
              ></img> */}
               <Image
                   src={imageUrl + "rungta logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 18 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "floris logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                  src={imageUrl + "floris logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 19 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "david logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                 src={imageUrl + "david logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 20 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "gleephoria logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                 src={imageUrl + "gleephoria logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 21 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "himalayan.webp"}
                className="img-fluid"
              ></img> */}

               <Image
                 src={imageUrl + "himalayan.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 22 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "fluke logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                 src={imageUrl + "fluke logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 23 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "one science logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                 src={imageUrl + "one science logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 24 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "mr-bomzy logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
                src={imageUrl + "mr-bomzy logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
            <div className={`${styles["companies"]}`}>
              
            </div>
          </div>
        </div>

        {/* tab */}

        <div className={`${styles["tab-screen"]} container text-center`}>
          <h2 className={`${styles["our-brand-heading"]}`}>
            Our{" "}
            <span className={`${styles["our-constant-comapny-heqadg-red"]}`}>
              Constant Companions
            </span>
          </h2>
          <div className={`${styles["comapnies-logo-row"]}`}>
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "holidayinn_logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                src={imageUrl + "holidayinn_logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "audi logo.webp"}
                className="img-fluid"
              ></img> */}
                <Image
                src={imageUrl + "audi logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />

            </div>

            {/* 3 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "PB_Business logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                src={imageUrl + "PB_Business logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 4 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "iOrganic-Logo.webp"}
                className="img-fluid"
              ></img> */}
               <Image
                src={imageUrl + "iOrganic-Logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 5 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "wlues logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
              src={imageUrl + "wlues logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 6 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "Grin care logo.webp"}
                className="img-fluid"
              ></img> */}
               <Image
              src={imageUrl + "Grin care logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 7 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "enlite logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
              src={imageUrl + "enlite logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 8 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "nectarpure (1).webp"}
                className="img-fluid"
              ></img> */}

              <Image
              src={imageUrl + "nectarpure (1).webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 9 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "smartyum logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
              src={imageUrl + "smartyum logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 10 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "Thames logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
               src={imageUrl + "Thames logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 11 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "veikk logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
               src={imageUrl + "veikk logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 12 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "enliiv logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
               src={imageUrl + "enliiv logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 13 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "bobalist logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
               src={imageUrl + "bobalist logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 14 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "wjvaghsdvhesgadcv.webp"}
                className="img-fluid"
              ></img> */}

               <Image
               src={imageUrl + "wjvaghsdvhesgadcv.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 15 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "Bachpan logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
              src={imageUrl + "Bachpan logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 16 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "qualiteq logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
              src={imageUrl + "qualiteq logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 17 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "rungta logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
              src={imageUrl + "rungta logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 18 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "floris logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
              src={imageUrl + "floris logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 19 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "david logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
              src={imageUrl + "david logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 20 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "gleephoria logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
              src={imageUrl + "gleephoria logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 21 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "himalayan.webp"}
                className="img-fluid"
              ></img> */}

               <Image
              src={imageUrl + "himalayan.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 22 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "fluke logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
               src={imageUrl + "fluke logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 23 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "one science logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
               src={imageUrl + "one science logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 24 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "mr-bomzy logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
            src={imageUrl + "mr-bomzy logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>

        {/* mobile */}

        <div
          className={`${styles["our-constant-mobile-screen"]} container text-center`}
        >
          <h2 className={`${styles["our-brand-heading"]} text-center`}>
            Our{" "}
            <span className={`${styles["our-constant-comapny-heqadg-red"]}`}>
              Constant Companions
            </span>
          </h2>
          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 1 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "holidayinn_logo.webp"}
                className="img-fluid"
              ></img> */}

                  <Image
            src={imageUrl + "holidayinn_logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 2 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "audi logo.webp"}
                className="img-fluid"
              ></img> */}

                <Image
            src={imageUrl + "audi logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 3 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "PB_Business logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
            src={imageUrl + "PB_Business logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 4 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "iOrganic-Logo.webp"}
                className="img-fluid"
              ></img> */}

                <Image
            src={imageUrl + "iOrganic-Logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 5 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "wlues logo.webp"}
                className="img-fluid"
              ></img> */}

                <Image
                src={imageUrl + "wlues logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 6 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "Grin care logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
                src={imageUrl + "Grin care logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 7 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "enlite logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
                src={imageUrl + "enlite logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 8 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "nectarpure (1).webp"}
                className="img-fluid"
              ></img> */}

              <Image
                src={imageUrl + "nectarpure (1).webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 9 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "smartyum logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
                src={imageUrl + "smartyum logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 10 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "Thames logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
                src={imageUrl + "Thames logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 11 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "veikk logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
               src={imageUrl + "veikk logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 12 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "enliiv logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
               src={imageUrl + "enliiv logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 13 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "bobalist logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
               src={imageUrl + "bobalist logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 14 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "wjvaghsdvhesgadcv.webp"}
                className="img-fluid"
              ></img> */}

              <Image
             src={imageUrl + "wjvaghsdvhesgadcv.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 15 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "Bachpan logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
              src={imageUrl + "Bachpan logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 16 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "qualiteq logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
              src={imageUrl + "qualiteq logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 17 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "rungta logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
              src={imageUrl + "rungta logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 18 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "floris logo.webp"}
                className="img-fluid"
              ></img> */}

                <Image
              src={imageUrl + "floris logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 19 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "david logo.webp"}
                className="img-fluid"
              ></img> */}
              <Image
              src={imageUrl + "david logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 20 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "gleephoria logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
              src={imageUrl + "gleephoria logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 21 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "himalayan.webp"}
                className="img-fluid"
              ></img> */}

              <Image
              src={imageUrl + "himalayan.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 22 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "fluke logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
             src={imageUrl + "fluke logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className={`${styles["comapnies-logo-row"]}`}>
            {/* 23 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "one science logo.webp"}
                className="img-fluid"
              ></img> */}

              <Image
            src={imageUrl + "one science logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>

            {/* 24 */}
            <div className={`${styles["companies"]}`}>
              {/* <img
                src={imageUrl + "mr-bomzy logo.webp"}
                className="img-fluid"
              ></img> */}

               <Image
           src={imageUrl + "mr-bomzy logo.webp"}
                className={`${styles["responsive-img"]} ${styles["companies-img"]}`}
                alt="home page image"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurConstant;
