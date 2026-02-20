"use client";

import { useEffect, useState } from "react";
import "./templateSlide.css";

export default function Template({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Start animation after mount
    const t = setTimeout(() => {
      setShow(true);
    }, 20);
  
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className={`page-transition ${show ? "run" : ""}`} />
      {children}
    </>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import "./templateSlide.css";

// export default function Template({ children }) {
//   const pathname = usePathname();
//   const [show, setShow] = useState(false);

//   useEffect(() => {
    
//     setShow(false);

//     const t = setTimeout(() => {
//       setShow(true);
//     }, 10);

//     return () => clearTimeout(t);
//   }, [pathname]); 

//   return (
//     <>
//       <div className={`page-transition ${show ? "run" : ""}`} />
//       {children}
//     </>
//   );
// }

