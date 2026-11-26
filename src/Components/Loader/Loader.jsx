
// import "./Loader.css";

// export default function Loader() {
//   return (
//     <div className="dot-loader-container">
//       <div className="dot-loader">
//         {[...Array(4)].map((_, i) => (
//           <span key={i}></span>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Wait until the component is mounted/hydrated
    const timer = requestAnimationFrame(() => {
      setStarted(true);
    });

    return () => {
      cancelAnimationFrame(timer);
    };
  }, []);

  return (
    <div className="dn-loader-animation">

      <svg
        className={`dn-loader-mark ${
          started ? "dn-loader-start" : ""
        }`}
        viewBox="0 0 1439 496"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >

        {/* D */}
        <svg
          x="0"
          y="0"
          width="493"
          height="496"
          overflow="hidden"
        >
          <path
            className="dn-loader-d"
            d="M0 0.609375C19.787 1.41347 40.4623 1.12236 60.292 0.955078C176.521 -0.0186018 293.232 2.50459 409.414 0.706055C424.585 17.4258 442.705 34.8444 458.54 51.1211C466.544 59.3489 484.274 77.5145 492.395 83.6104L492.284 413.006C477.759 426.678 463.49 440.619 449.482 454.82C436.261 468.143 423.552 481.764 410.009 494.812C273.845 496.571 136.147 493.314 0.637695 495.391L0 0.609375ZM371.73 87.6562C351.106 85.3374 299.778 87.1082 277.141 87.1924L95.8486 87.0625L80.71 87.2744C82.7277 144.446 81.1225 205.214 81.209 262.568C81.2828 312.092 82.2653 362.76 81.5039 412.11L276.04 411.555C300.356 411.532 349.91 412.918 372.375 410.716C376.002 406.578 380.269 401.437 384.142 397.659C392.057 389.669 400.693 380.605 408.734 372.87L409.204 124.817C398.576 114.761 381.157 95.4849 371.73 87.6562Z"
          />
        </svg>

        {/* N - LEFT */}
        <rect
          className="dn-loader-block dn-loader-stem-left"
          x="544.5"
          y="0"
          width="99"
          height="398.5"
        />

        {/* STEP 1 */}
        <rect
          className="dn-loader-block dn-loader-step dn-loader-s1"
          x="642"
          y="397.5"
          width="166.5"
          height="98"
        />

        {/* STEP 2 */}
        <rect
          className="dn-loader-block dn-loader-step dn-loader-s2"
          x="807.5"
          y="297.5"
          width="124"
          height="100.5"
        />

        {/* STEP 3 */}
        <rect
          className="dn-loader-block dn-loader-step dn-loader-s3"
          x="930.5"
          y="197"
          width="124"
          height="101"
        />

        {/* STEP 4 */}
        <rect
          className="dn-loader-block dn-loader-step dn-loader-s4"
          x="1053.5"
          y="98"
          width="124"
          height="99.5"
        />

        {/* STEP 5 */}
        <rect
          className="dn-loader-block dn-loader-step dn-loader-s5"
          x="1176"
          y="0"
          width="165.5"
          height="99.5"
        />

        {/* N - RIGHT */}
        <rect
          className="dn-loader-block dn-loader-stem-right"
          x="1340.5"
          y="98"
          width="98.5"
          height="397"
        />

      </svg>
    </div>
  );
}