"use client";

import { useEffect, useRef, useState } from "react";
import "./PhotographyPrompt.css";

const TYPEWRITER_TEXT =
  "We don't chase trends — we challenge them. Guided by curiosity, we design at the edge of innovation — blending interaction, motion, and clarity to craft.";

// ─── Apni images yahan daalo ───
const LEFT_IMAGE  = "https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp";
const RIGHT_IMAGE = "https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp";

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

const DESKTOP_PATH1    = "M 360,145 C 430,145 400,320 460,375";
const DESKTOP_PATH2    = "M 740,375 C 850,400 750,145 840,180";
const DESKTOP_PATH_LEN = 310;

const MOBILE_PATH1    = "M 240,230 C 240,270 240,290 240,310";
const MOBILE_PATH2    = "M 240,460 C 240,490 240,510 240,540";
const MOBILE_PATH_LEN = 80;

export default function AnimatedStudioSection() {
  const sectionRef = useRef(null);
  const [mounted,        setMounted]        = useState(false);
  const [isMobile,       setIsMobile]       = useState(false);
  const [phase,          setPhase]          = useState("idle");
  const [typedText,      setTypedText]      = useState("");
  const [arrow1Progress, setArrow1Progress] = useState(0);
  const [arrow2Progress, setArrow2Progress] = useState(0);
  const hasTriggered = useRef(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setTimeout(() => setPhase("arrow1"), 400);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  useEffect(() => {
    if (phase !== "arrow1") return;
    let raf, start = null;
    const duration = isMobile ? 700 : 1200;
    const animate = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setArrow1Progress(p);
      if (p < 1) raf = requestAnimationFrame(animate);
      else setPhase("typing");
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [phase, isMobile]);

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    setTypedText("");
    const id = setInterval(() => {
      i++;
      setTypedText(TYPEWRITER_TEXT.slice(0, i));
      if (i >= TYPEWRITER_TEXT.length) {
        clearInterval(id);
        setTimeout(() => setPhase("arrow2"), 500);
      }
    }, 26);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "arrow2") return;
    let raf, start = null;
    const duration = isMobile ? 700 : 1200;
    const animate = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setArrow2Progress(p);
      if (p < 1) raf = requestAnimationFrame(animate);
      else setPhase("done");
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [phase, isMobile]);

  const replay = () => {
    hasTriggered.current = false;
    setPhase("idle");
    setTypedText("");
    setArrow1Progress(0);
    setArrow2Progress(0);
    setTimeout(() => {
      hasTriggered.current = true;
      setPhase("arrow1");
    }, 300);
  };

  const a1 = easeInOut(arrow1Progress);
  const a2 = easeInOut(arrow2Progress);

  const showArrow1Head = arrow1Progress >= 0.98 || ["typing", "arrow2", "done"].includes(phase);
  const showArrow2Head = arrow2Progress >= 0.98 || phase === "done";
  const showArrow2Path = phase === "arrow2" || phase === "done";
  const showPath1      = phase !== "idle";
  const rightOpacity   = phase === "done" ? 1 : phase === "arrow2" ? a2 : 0;

  /* ── SSR shell ── */
  if (!mounted) {
    return (
      <section className="studio-section">
        {/* <p className="studio-label">Our Process</p>
        <h2 className="studio-heading">
          Every pixel is a deliberate <em>moment</em> — crafted to redefine what a studio website can be.
        </h2> */}
        <div className="studio-canvas-wrapper">
          <svg viewBox="0 0 1200 520" className="studio-svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="clipLeft"><rect x="40" y="40" width="320" height="210" rx="12" /></clipPath>
              <clipPath id="clipRight"><rect x="840" y="40" width="320" height="210" rx="12" /></clipPath>
            </defs>
            <image href={LEFT_IMAGE}  x="40"  y="40"  width="320" height="210" clipPath="url(#clipLeft)"  preserveAspectRatio="xMidYMid slice" />
            <rect  x="40"  y="40"  width="320" height="210" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <rect  x="840" y="40"  width="320" height="210" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="463" y="298" fill="rgba(255,255,255,0.45)" fontSize="13" fontFamily="'Helvetica Neue',Arial,sans-serif" letterSpacing="0.03em">Prompt</text>
            <rect  x="460" y="305" width="280" height="140" rx="10" fill="rgba(22,22,22,0.95)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          </svg>
        </div>
      </section>
    );
  }

  /* ════════════════════════════════════════
     MOBILE LAYOUT
  ════════════════════════════════════════ */
  if (isMobile) {
    const dash1 = MOBILE_PATH_LEN * a1;
    const dash2 = MOBILE_PATH_LEN * a2;
    return (
      <section ref={sectionRef} className="studio-section">
        {/* <p className="studio-label">Our Process</p>
        <h2 className="studio-heading">
          Every pixel is a deliberate <em>moment</em> — crafted to redefine what a studio website can be.
        </h2> */}

        <div className="studio-canvas-wrapper">
          <svg viewBox="0 0 480 760" className="studio-svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="mah1" markerWidth="9" markerHeight="9" refX="4.5" refY="7" orient="auto">
                <path d="M1,0 L4.5,8 L8,0 Z" fill="rgba(255,255,255,0.65)" />
              </marker>
              <marker id="mah2" markerWidth="9" markerHeight="9" refX="4.5" refY="7" orient="auto">
                <path d="M1,0 L4.5,8 L8,0 Z" fill="rgba(255,255,255,0.65)" />
              </marker>
              <clipPath id="mClipLeft">
                <rect x="60" y="30" width="360" height="200" rx="12" />
              </clipPath>
              <clipPath id="mClipRight">
                <rect x="60" y="540" width="360" height="200" rx="12" />
              </clipPath>
            </defs>

            {/* LEFT IMAGE */}
            <image href={LEFT_IMAGE}  x="60" y="30"  width="360" height="200" clipPath="url(#mClipLeft)"  preserveAspectRatio="xMidYMid slice" />
            <rect x="60" y="30" width="360" height="200" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

            {/* PROMPT BOX */}
            <text x="63" y="303" fill="rgba(255,255,255,0.45)" fontSize="13" fontFamily="'Helvetica Neue',Arial,sans-serif" letterSpacing="0.03em">Prompt</text>
            <rect x="60" y="310" width="360" height="150" rx="10" fill="rgba(22,22,22,0.95)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

            {/* RIGHT IMAGE — fades in */}
            <image href={RIGHT_IMAGE} x="60" y="540" width="360" height="200" clipPath="url(#mClipRight)" preserveAspectRatio="xMidYMid slice" opacity={rightOpacity} />
            <rect x="60" y="540" width="360" height="200" rx="12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" opacity={rightOpacity} />
            {/* dim overlay before reveal */}
            <rect x="60" y="540" width="360" height="200" rx="12" fill="rgba(11,11,11,0.85)" opacity={1 - rightOpacity} />

            {showPath1     && <path d={MOBILE_PATH1} fill="none" stroke="rgba(255,255,255,0.1)"  strokeWidth="1.5" strokeDasharray="5 6" />}
            {showArrow2Path && <path d={MOBILE_PATH2} fill="none" stroke="rgba(255,255,255,0.1)"  strokeWidth="1.5" strokeDasharray="5 6" />}

            {showPath1 && (
              <path d={MOBILE_PATH1} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5"
                strokeDasharray={`${dash1} ${MOBILE_PATH_LEN + 20}`} strokeLinecap="round"
                markerEnd={showArrow1Head ? "url(#mah1)" : undefined} />
            )}
            {showArrow2Path && (
              <path d={MOBILE_PATH2} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5"
                strokeDasharray={`${dash2} ${MOBILE_PATH_LEN + 20}`} strokeLinecap="round"
                markerEnd={showArrow2Head ? "url(#mah2)" : undefined} />
            )}
          </svg>

          <div className="studio-typewriter studio-typewriter--mobile">
            <p>
              {typedText}
              {phase === "typing" && <span className="studio-cursor" />}
            </p>
          </div>
        </div>

        {phase === "done" && (
          <button className="studio-replay-btn" onClick={replay}>Replay ↺</button>
        )}
      </section>
    );
  }

  /* ════════════════════════════════════════
     DESKTOP LAYOUT
  ════════════════════════════════════════ */
  const dash1 = DESKTOP_PATH_LEN * a1;
  const dash2 = DESKTOP_PATH_LEN * a2;
  return (
    <section ref={sectionRef} className="studio-section">
      {/* <p className="studio-label">Our Process</p>
      <h2 className="studio-heading">
        Every pixel is a deliberate <em>moment</em> — crafted to redefine what a studio website can be.
      </h2> */}

      <div className="studio-canvas-wrapper">
        <svg viewBox="0 0 1200 520" className="studio-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="ah1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
              <path d="M0,1 L8,4.5 L0,8 Z" fill="rgba(255,255,255,0.65)" />
            </marker>
            <marker id="ah2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
              <path d="M0,1 L8,4.5 L0,8 Z" fill="rgba(255,255,255,0.65)" />
            </marker>
            <clipPath id="clipLeft">
              <rect x="40" y="40" width="320" height="210" rx="12" />
            </clipPath>
            <clipPath id="clipRight">
              <rect x="840" y="40" width="320" height="210" rx="12" />
            </clipPath>
          </defs>

          {/* LEFT IMAGE */}
          <image href={LEFT_IMAGE}  x="40"  y="40"  width="320" height="210" clipPath="url(#clipLeft)"  preserveAspectRatio="xMidYMid slice" />
          <rect x="40" y="40" width="320" height="210" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* RIGHT IMAGE — fades in */}
          <image href={RIGHT_IMAGE} x="840" y="40"  width="320" height="210" clipPath="url(#clipRight)" preserveAspectRatio="xMidYMid slice" opacity={rightOpacity} />
          <rect x="840" y="40" width="320" height="210" rx="12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" opacity={rightOpacity} />
          {/* dim overlay before reveal */}
          <rect x="840" y="40" width="320" height="210" rx="12" fill="rgba(11,11,11,0.85)" opacity={1 - rightOpacity} />

          {showPath1     && <path d={DESKTOP_PATH1} fill="none" stroke="rgba(255,255,255,0.1)"  strokeWidth="1.5" strokeDasharray="5 6" />}
          {showArrow2Path && <path d={DESKTOP_PATH2} fill="none" stroke="rgba(255,255,255,0.1)"  strokeWidth="1.5" strokeDasharray="5 6" />}

          {showPath1 && (
            <path d={DESKTOP_PATH1} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5"
              strokeDasharray={`${dash1} ${DESKTOP_PATH_LEN + 20}`} strokeLinecap="round"
              markerEnd={showArrow1Head ? "url(#ah1)" : undefined} />
          )}
          {showArrow2Path && (
            <path d={DESKTOP_PATH2} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5"
              strokeDasharray={`${dash2} ${DESKTOP_PATH_LEN + 20}`} strokeLinecap="round"
              markerEnd={showArrow2Head ? "url(#ah2)" : undefined} />
          )}

          {/* PROMPT BOX */}
          <text x="463" y="298" fill="rgba(255,255,255,0.45)" fontSize="13" fontFamily="'Helvetica Neue',Arial,sans-serif" letterSpacing="0.03em">Prompt</text>
          <rect x="460" y="305" width="280" height="140" rx="10" fill="rgba(22,22,22,0.95)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        </svg>

        <div className="studio-typewriter studio-typewriter--desktop">
          <p>
            {typedText}
            {phase === "typing" && <span className="studio-cursor" />}
          </p>
        </div>
      </div>

      {phase === "done" && (
        <button className="studio-replay-btn" onClick={replay}>Replay ↺</button>
      )}
    </section>
  );
}