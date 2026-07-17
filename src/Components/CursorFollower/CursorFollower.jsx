"use client";

import { useRef } from "react";
import "./CursorFollower.css";

export default function CursorFollower({
  children,
  text = "Start your journey now • Start your journey now •",
}) {
  const cursorRef = useRef(null);

  const moveCursor = (e) => {
    if (!cursorRef.current) return;

    cursorRef.current.style.left = `${e.clientX}px`;
    cursorRef.current.style.top = `${e.clientY}px`;
  };

  const showCursor = (e) => {
    cursorRef.current.classList.add("is-visible");
    moveCursor(e);
  };

  const hideCursor = () => {
    cursorRef.current.classList.remove("is-visible");
  };

  return (
    <>
      <div
        className="cursor-hover-wrapper"
        onMouseEnter={showCursor}
        onMouseMove={moveCursor}
        onMouseLeave={hideCursor}
      >
        {children}
      </div>

      <div className="cursor-follower" ref={cursorRef}>
        <svg className="cursor-follower__ring" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="63" />

          <defs>
            <path
              id="cursorTextPath"
              d="M65,65 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
            />
          </defs>

          <text>
            <textPath href="#cursorTextPath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>

        <div className="cursor-follower__arrow">↗</div>
      </div>
    </>
  );
}