// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import "./PhotographyPromptAnother.css";

// function PhotographyPromptAnother() {
//   const text =
//     "At Echelon, we build more than websites — we craft digital presence with purpose. Standing at the intersection of design, strategy, and technology, we create experiences";

//   const [displayedText, setDisplayedText] = useState("");
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             let index = 0;

//             const interval = setInterval(() => {
//               setDisplayedText(text.slice(0, index + 1));
//               index++;
//               if (index === text.length) {
//                 clearInterval(interval);
//               }
//             }, 30);
//             observer.disconnect();
//           }
//         });
//       },
//       {
//         threshold: 0.4,
//       },
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="photography-prompt-section" ref={sectionRef}>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <div className="prompt-left-img-div">
//               <img
//                 src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
//                 className="img-fluid prompt-left-img-div-img"
//               ></img>
//             </div>
//           </div>

//           <div className="col">
//             <div className="prompt-text-area-mid-div-parent-div">
//               <div className="prompt-text-area-mid-div">
//                 <p className="prompt-text-area-mid-div-para">
//                   {displayedText}
//                   <span className="cursor">|</span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col">
//             <div className="prompt-right-img-div">
//               <img
//                 src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
//                 className="img-fluid prompt-right-img-div-img"
//               ></img>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PhotographyPromptAnother;




// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import "./PhotographyPromptAnother.css";

// function PhotographyPromptAnother() {
//   const text =
//     "At Echelon, we build more than websites — we craft digital presence with purpose. Standing at the intersection of design, strategy, and technology, we create experiences";

//   const [displayedText, setDisplayedText] = useState("");
//   const [animationStep, setAnimationStep] = useState(0); // Steps: 0 to 4
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Section visible hote hi Step 1 trigger karo (First Arrow Animation)
//             setAnimationStep(1);
//             observer.disconnect();
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => observer.disconnect();
//   }, []);

//   // Control the sequence of animations
//   useEffect(() => {
//     if (animationStep === 1) {
//       // Arrow 1 draws for 1000ms, then start typing
//       const timer = setTimeout(() => {
//         setAnimationStep(2);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }

//     if (animationStep === 2) {
//       // Typing text effect
//       let index = 0;
//       const interval = setInterval(() => {
//         setDisplayedText(text.slice(0, index + 1));
//         index++;
//         if (index === text.length) {
//           clearInterval(interval);
//           // Typing complete hone ke baad, Step 3 start karo (Second Arrow)
//           setTimeout(() => {
//             setAnimationStep(3);
//           }, 300);
//         }
//       }, 25);
//       return () => clearInterval(interval);
//     }

//     if (animationStep === 3) {
//       // Arrow 2 draws for 1000ms, then show right image
//       const timer = setTimeout(() => {
//         setAnimationStep(4);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [animationStep]);

//   return (
//     <div className="photography-prompt-section" ref={sectionRef}>
//       <div className="prompt-container">
        
//         {/* Left Image Box */}
//         <div className="prompt-box prompt-left-box">
//           <div className="prompt-img-wrapper">
//             <img
//               src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
//               alt="Left Visual"
//               className="prompt-img"
//             />
//           </div>
//         </div>

//         {/* Dynamic Connector SVG Container */}
//         <div className="prompt-svg-connector">
//           <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
//             {/* Arrow Marker Definitions */}
//             <defs>
//               <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
//                 <polygon points="0 0, 6 3, 0 6" fill="#555555" />
//               </marker>
//             </defs>

//             {/* Left Box to Center Prompt Arrow */}
//             <path
//               d="M 10,100 C 120,100 80,220 235,220"
//               className={`connector-path path-left-to-mid ${animationStep >= 1 ? "animate" : ""}`}
//               markerEnd="url(#arrowhead)"
//             />

//             {/* Center Prompt to Right Box Arrow */}
//             <path
//               d="M 565,220 C 720,220 680,100 790,100"
//               className={`connector-path path-mid-to-right ${animationStep >= 3 ? "animate" : ""}`}
//               markerEnd="url(#arrowhead)"
//             />
//           </svg>
//         </div>

//         {/* Center Prompt Text Box */}
//         <div className={`prompt-box prompt-mid-box ${animationStep >= 2 ? "visible" : ""}`}>
//           <div className="prompt-text-heading">Prompt</div>
//           <div className="prompt-text-area-mid-div">
//             <p className="prompt-text-area-mid-div-para">
//               {displayedText}
//               {animationStep === 2 && <span className="cursor">|</span>}
//             </p>
//           </div>
//         </div>

//         {/* Right Image Box */}
//         <div className={`prompt-box prompt-right-box ${animationStep === 4 ? "reveal" : ""}`}>
//           <div className="prompt-img-wrapper">
//             <img
//               src="https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp"
//               alt="Right Visual"
//               className="prompt-img"
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default PhotographyPromptAnother;




"use client";

import { useEffect, useRef, useState } from "react";
import "./PhotographyPromptAnother.css";

const TYPEWRITER_TEXT =
  "We don't chase trends — we challenge them. Guided by curiosity, we design at the edge of innovation — blending interaction, motion, and clarity to craft.";

const LEFT_IMAGE  = "https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp";
const RIGHT_IMAGE = "https://dndesigns.co.in/uploads/blogs/1-1-768x768.webp";

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export default function AnimatedStudioSection() {
  const sectionRef = useRef(null);
  const terminalBoxRef = useRef(null);
  
  const [mounted,         setMounted]         = useState(false);
  const [isMobile,       setIsMobile]       = useState(false);
  const [phase,          setPhase]          = useState("idle");
  const [typedText,      setTypedText]      = useState("");
  const [arrow1Progress, setArrow1Progress] = useState(0);
  const [arrow2Progress, setArrow2Progress] = useState(0);
  const [dynamicY,       setDynamicY]       = useState(375); // Tracks center box expansion
  const hasTriggered = useRef(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Track the actual dynamic height of the terminal box to adjust arrows on the fly
  useEffect(() => {
    if (!mounted || isMobile) return;
    
    const updateArrowCoordinates = () => {
      if (terminalBoxRef.current) {
        const boxHeight = terminalBoxRef.current.offsetHeight;
        // Base top position is 305. The arrow hits perfectly at the middle-left of the terminal box height.
        const calculatedY = 305 + (boxHeight / 2);
        setDynamicY(calculatedY);
      }
    };

    // Run initially and set up an observer to watch for dynamic text expansion changes
    updateArrowCoordinates();
    
    const resizeObserver = new ResizeObserver(() => updateArrowCoordinates());
    if (terminalBoxRef.current) resizeObserver.observe(terminalBoxRef.current);
    
    return () => resizeObserver.disconnect();
  }, [mounted, typedText, isMobile]);

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

  const showArrow1Head = arrow1Progress >= 0.96 || ["typing", "arrow2", "done"].includes(phase);
  const showArrow2Head = arrow2Progress >= 0.96 || phase === "done";
  const showArrow2Path = phase === "arrow2" || phase === "done";
  const showPath1      = phase !== "idle";
  const rightOpacity   = phase === "done" ? 1 : phase === "arrow2" ? a2 : 0;

  // Real-time calculation vectors linked directly to box updates
  const desktopPath1 = `M 360,145 C 410,145 410,${dynamicY} 456,${dynamicY}`;
  const desktopPath2 = `M 740,${dynamicY} C 790,${dynamicY} 790,145 836,145`;
  const desktopPathLen = Math.sqrt(Math.pow(456 - 360, 2) + Math.pow(dynamicY - 145, 2)) + 180;

  const MOBILE_PATH1    = "M 240,230 C 240,260 240,280 240,306";
  const MOBILE_PATH2    = "M 240,480 C 240,510 240,530 240,556"; // Adjusted mobile points relative to text growth
  const MOBILE_PATH_LEN = 90;

  if (!mounted) return <div className="studio-section" />;

  /* ── MOBILE LAYOUT ── */
  if (isMobile) {
    const mobileDash1 = MOBILE_PATH_LEN * a1;
    const mobileDash2 = MOBILE_PATH_LEN * a2;
    return (
      <section ref={sectionRef} className="studio-section">
        <div className="studio-canvas-wrapper">
          <svg viewBox="0 0 480 820" className="studio-svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="mah1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,1 L7,4 L0,7 Z" fill="#ffffff" />
              </marker>
              <marker id="mah2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,1 L7,4 L0,7 Z" fill="#ffffff" />
              </marker>
              <clipPath id="mClipLeft"><rect x="60" y="30" width="360" height="200" rx="12" /></clipPath>
              <clipPath id="mClipRight"><rect x="60" y="560" width="360" height="200" rx="12" /></clipPath>
            </defs>

            <image href={LEFT_IMAGE}  x="60" y="30"  width="360" height="200" clipPath="url(#mClipLeft)"  preserveAspectRatio="xMidYMid slice" />
            <rect x="60" y="30" width="360" height="200" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

            <image href={RIGHT_IMAGE} x="60" y="560" width="360" height="200" clipPath="url(#mClipRight)" preserveAspectRatio="xMidYMid slice" opacity={rightOpacity} />
            <rect x="60" y="560" width="360" height="200" rx="12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" opacity={rightOpacity} />
            <rect x="60" y="560" width="360" height="200" rx="12" fill="rgba(11,11,11,0.85)" opacity={1 - rightOpacity} />

            {showPath1      && <path d={MOBILE_PATH1} fill="none" stroke="rgba(255,255,255,0.15)"  strokeWidth="1.2" strokeDasharray="4 4" />}
            {showArrow2Path && <path d={MOBILE_PATH2} fill="none" stroke="rgba(255,255,255,0.15)"  strokeWidth="1.2" strokeDasharray="4 4" />}

            {showPath1 && (
              <path d={MOBILE_PATH1} fill="none" stroke="#ffffff" strokeWidth="1.5"
                strokeDasharray={`${mobileDash1} ${MOBILE_PATH_LEN + 20}`} strokeLinecap="round"
                markerEnd={showArrow1Head ? "url(#mah1)" : undefined} />
            )}
            {showArrow2Path && (
              <path d={MOBILE_PATH2} fill="none" stroke="#ffffff" strokeWidth="1.5"
                strokeDasharray={`${mobileDash2} ${MOBILE_PATH_LEN + 20}`} strokeLinecap="round"
                markerEnd={showArrow2Head ? "url(#mah2)" : undefined} />
            )}
          </svg>

          <div className="studio-prompt-html-box studio-typewriter--mobile">
            <span className="studio-label-text">Prompt</span>
            <div className="studio-terminal-inner">
              <p>
                {typedText}
                {phase === "typing" && <span className="studio-cursor" />}
              </p>
            </div>
          </div>
        </div>
        {phase === "done" && <button className="studio-replay-btn" onClick={replay}>Replay ↺</button>}
      </section>
    );
  }

  /* ── DESKTOP LAYOUT ── */
  const dash1 = desktopPathLen * a1;
  const dash2 = desktopPathLen * a2;

  return (
    <section ref={sectionRef} className="studio-section">
      <div className="studio-canvas-wrapper">
        <svg viewBox="0 0 1200 520" className="studio-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="ah1" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
              <path d="M0,1 L7,4 L0,7 Z" fill="#ffffff" />
            </marker>
            <marker id="ah2" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
              <path d="M0,1 L7,4 L0,7 Z" fill="#ffffff" />
            </marker>
            <clipPath id="clipLeft"><rect x="40" y="40" width="320" height="210" rx="12" /></clipPath>
            <clipPath id="clipRight"><rect x="840" y="40" width="320" height="210" rx="12" /></clipPath>
          </defs>

          {/* LEFT IMAGE */}
          <image href={LEFT_IMAGE}  x="40"  y="40"  width="320" height="210" clipPath="url(#clipLeft)"  preserveAspectRatio="xMidYMid slice" />
          <rect x="40" y="40" width="320" height="210" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* RIGHT IMAGE */}
          <image href={RIGHT_IMAGE} x="840" y="40"  width="320" height="210" clipPath="url(#clipRight)" preserveAspectRatio="xMidYMid slice" opacity={rightOpacity} />
          <rect x="840" y="40" width="320" height="210" rx="12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" opacity={rightOpacity} />
          <rect x="840" y="40" width="320" height="210" rx="12" fill="rgba(11,11,11,0.85)" opacity={1 - rightOpacity} />

          {/* Dynamic Dotted Pathways */}
          {showPath1      && <path d={desktopPath1} fill="none" stroke="rgba(255,255,255,0.15)"  strokeWidth="1.2" strokeDasharray="4 4" />}
          {showArrow2Path && <path d={desktopPath2} fill="none" stroke="rgba(255,255,255,0.15)"  strokeWidth="1.2" strokeDasharray="4 4" />}

          {/* Dynamic Realtime Animating Vectors */}
          {showPath1 && (
            <path d={desktopPath1} fill="none" stroke="#ffffff" strokeWidth="1.5"
              strokeDasharray={`${dash1} ${desktopPathLen + 20}`} strokeLinecap="round"
              markerEnd={showArrow1Head ? "url(#ah1)" : undefined} />
          )}
          {showArrow2Path && (
            <path d={desktopPath2} fill="none" stroke="#ffffff" strokeWidth="1.5"
              strokeDasharray={`${dash2} ${desktopPathLen + 20}`} strokeLinecap="round"
              markerEnd={showArrow2Head ? "url(#ah2)" : undefined} />
          )}
        </svg>

        {/* Dynamic HTML Terminal Container with reference binding hooks */}
        <div ref={terminalBoxRef} className="studio-prompt-html-box studio-typewriter--desktop">
          <span className="studio-label-text">Prompt</span>
          <div className="studio-terminal-inner">
            <p>
              {typedText}
              {phase === "typing" && <span className="studio-cursor" />}
            </p>
          </div>
        </div>
      </div>

      {phase === "done" && <button className="studio-replay-btn" onClick={replay}>Replay ↺</button>}
    </section>
  );
}