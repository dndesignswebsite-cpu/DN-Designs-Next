"use client"

import { useEffect, useRef, useState } from "react";

const AutoCounter = ({ target = 100, speed = 20 }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) return prev + 1;
        clearInterval(interval);
        return target;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [start, target, speed]);

  return <span ref={ref}>{count}</span>;
};

export default AutoCounter;
