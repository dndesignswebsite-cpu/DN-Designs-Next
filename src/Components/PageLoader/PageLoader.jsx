"use client";

import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

export default function PageLoader({ children }) {
  const [exit, setExit] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 1200);


    const removeTimer = setTimeout(() => {
      setRemove(true);
    }, 1900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      
      <div className="site-content">
        {children}
      </div>

      
      {!remove && (
        <div className={`loader-overlay ${exit ? "loader-exit" : ""}`}>
          <Loader />
        </div>
      )}
    </>
  );
}
