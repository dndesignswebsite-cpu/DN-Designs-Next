"use client";

import Image from "next/image";
import "./LPMarque.css";

export default function LPMarque({
  brands,
  reverse = false,
  speed = 25,
}) {

  const items = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="lp-marquee">
      <div
        className={`lp-marquee-track ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((brand, index) => (
          <div className="lp-marquee-item" key={index}>
            <Image
              src={brand.image}
              alt={brand.alt}
              width={140}
              height={70}
            />
          </div>
        ))}
      </div>
    </div>
  );
}