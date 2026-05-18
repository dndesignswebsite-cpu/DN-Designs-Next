// "use client";

// import { useEffect, useState } from "react";
// import "./templateSlide.css";

// export default function Template({ children }) {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     // Start animation after mount
//     const t = setTimeout(() => {
//       setShow(true);
//     }, 20);
  
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <>
//       <div className={`page-transition ${show ? "run" : ""}`} />
//       {children}
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./templateSlide.css";

export default function Template({ children }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    
    const t = setTimeout(() => {
      setShow(true);
    }, 10);

    
    const reset = setTimeout(() => {
      setShow(false);
    }, 1500); 
    return () => {
      clearTimeout(t);
      clearTimeout(reset);
    };
  }, [pathname]); 

  return (
    <>
      {show && (
        <div className="page-transition run" />
      )}
      {children}
    </>
  );
}

