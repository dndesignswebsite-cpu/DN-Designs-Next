"use client";

import React, { useEffect } from "react";
import "./thankyou.css";
import LPHeader from "@/Components/LPHeader/LPHeader";
import LPFooter from "@/Components/LPFooter/LPFooter";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("/lp/brand-identity"); 
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [router]);

//   useEffect(() => {
//   const timer = setTimeout(() => {
//     const returnUrl =
//       sessionStorage.getItem("returnUrl") || "/lp/brand-identity";

//     router.replace(returnUrl);
//   }, 5000);

//   return () => clearTimeout(timer);
// }, [router]);

  return (
    <div>
      <LPHeader />

      <div className="container">
        <div className="thankyou-container">
          <img
            src="https://dndesigns.co.in/uploads/pages/Success-Icon.png"
            className="img-fluid thankyou-container-img"
            alt="Success"
          />

          <h1 className="thankyou-container-head">
            Thank You!
          </h1>

          <p className="thankyou-container-para">
            Your message has been received. We've notified our creative team and
            we'll get back to you with a strategic response within 24 hours.
          </p>

          <button className="return-to-homepage"   onClick={() => {
  const returnUrl =
    sessionStorage.getItem("returnUrl") || "/lp/brand-identity";

  router.replace(returnUrl);
}}>Return to Homepage</button>
        </div>
      </div>

      <LPFooter />
    </div>
  );
}

export default Page;