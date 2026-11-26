// "use client";

// import { useEffect, useState } from "react";
// import Loader from "../Loader/Loader";

// export default function PageLoader({ children }) {
//   const [exit, setExit] = useState(false);
//   const [remove, setRemove] = useState(false);

//   useEffect(() => {
//     const exitTimer = setTimeout(() => {
//       setExit(true);
//     }, 500);


//     const removeTimer = setTimeout(() => {
//       setRemove(true);
//     }, 1100);

//     return () => {
//       clearTimeout(exitTimer);
//       clearTimeout(removeTimer);
//     };
//   }, []);

//   return (
//     <>
      
//       <div className="site-content">
//         {children}
//       </div>

      
//       {!remove && (
//         <div className={`loader-overlay ${exit ? "loader-exit" : ""}`}>
//           <Loader />
//         </div>
//       )}
//     </>
//   );
// }



// // "use client";

// // import { useEffect, useState } from "react";
// // import Loader from "../Loader/Loader";

// // export default function PageLoader({ children }) {
// //   const [exit, setExit] = useState(false);
// //   const [remove, setRemove] = useState(false);

// //   useEffect(() => {
// //     let done = false; // ✅ ek baar se zyada trigger nahi hoga

// //     const trigger = () => {
// //       if (done) return; // ✅ already trigger ho chuka hai toh skip karo
// //       done = true;
// //       setTimeout(() => setExit(true), 100);
// //       setTimeout(() => setRemove(true), 800);
// //     };

// //     // Page already loaded hai
// //     if (document.readyState === "complete") {
// //       trigger();
// //       return;
// //     }

// //     // Page load hone ka wait karo
// //     window.addEventListener("load", trigger, { once: true });

// //     // Safety: 2s se zyada kabhi mat ruko
// //     const safetyTimer = setTimeout(trigger, 2000);

// //     return () => {
// //       window.removeEventListener("load", trigger);
// //       clearTimeout(safetyTimer);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <div className="site-content">{children}</div>

// //       {!remove && (
// //         <div className={`loader-overlay ${exit ? "loader-exit" : ""}`}>
// //           <Loader />
// //         </div>
// //       )}
// //     </>
// //   );
// // }



"use client";

import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import "./Loader.css";

export default function PageLoader({ children }) {
  const [exit, setExit] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {

    /*
      Loader animation:
      
      0.00s  → loader starts
      0.25s  → stair 1
      0.42s  → stair 2
      0.59s  → stair 3
      0.76s  → stair 4
      0.93s  → stair 5
      1.20s  → left N stem
      1.30s  → right N stem
      1.40s  → D
      2.40s  → loader exits
    */

    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 2400);


    /*
      Exit animation is 0.7s

      2.40s → exit starts
      3.10s → exit animation complete

      Extra 0.7s buffer before removing
      the overlay completely.
    */

    const removeTimer = setTimeout(() => {
      setRemove(true);
    }, 3800);


    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };

  }, []);


  return (
    <>

      {/* =========================================
          ACTUAL WEBSITE
      ========================================= */}

      <div className="site-content">
        {children}
      </div>


      {/* =========================================
          LOADER
      ========================================= */}

      {!remove && (
        <div
          className={`loader-overlay ${
            exit ? "loader-exit" : ""
          }`}
        >
          <Loader />
        </div>
      )}

    </>
  );
}
