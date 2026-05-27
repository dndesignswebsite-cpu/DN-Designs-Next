"use client";

import { useState } from "react";
import Image from "next/image";
import "./PhotographyHoverLinks.css"

export default function HoverLinks() {
  const [hoveredImage, setHoveredImage] = useState("");
  const [showImage, setShowImage] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const items = [
    {
      title: "AI Photography",
      href: "#theme-based",
      image: "https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp",
    },
    {
      title: "E-Commerce",
      href: "#e-commerce",
      image: "https://dndesigns.co.in/uploads/blogs/1-2-768x768.webp",
    },
    {
      title: "Theme Based",
      href: "#content-creation",
      image: "https://dndesigns.co.in/uploads/blogs/10-768x768.webp",
    },
    {
      title: "Content Creation",
      href: "#content-creation",
      image: "https://dndesigns.co.in/uploads/blogs/12-768x768.webp",
    },
  ];

  return (
    <div className="position-relative">
      {items.map((item, index) => (
        <div className="hover-section-to-div" key={index}>
          <a
            href={item.href}
            className="hover-section-to-anchor-link"
            onMouseEnter={() => {
              setHoveredImage(item.image);
              setShowImage(true);
            }}
            onMouseLeave={() => {
              setShowImage(false);
            }}
            onMouseMove={(e) => {
              setPosition({
                x: e.clientX,
                y: e.clientY,
              });
            }}
          >
            <h2 className="hover-section-to-div-head">
              {item.title}
            </h2>
          </a>

          <span className="hover-section-to-div-head-span">
            Projects launched, refined, an.
          </span>
        </div>
      ))}

      {/* Floating Image */}
      {showImage && (
        <div
          className="floating-hover-image"
          style={{
            left: `${position.x + 20}px`,
            top: `${position.y + 20}px`,
          }}
        >
          <Image
            src={hoveredImage}
            alt="preview"
            width={220}
            height={140}
            className="hover-preview-image"
          />
        </div>
      )}
    </div>
  );
}