// "use client";

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Momentum.css';

// gsap.registerPlugin(ScrollTrigger);

// const MomentumSection = ({
//   children,
//   className = "",
//   as: Tag = 'h2',
//   triggerSelector = null,
//   start = 'top 90%',
//   end = 'bottom 5%',
// }) => {
//   const textRef = useRef(null);

//   const extractText = (node) => {
//     if (typeof node === 'string' || typeof node === 'number') return String(node);
//     if (Array.isArray(node)) return node.map(extractText).join(' ');
//     if (React.isValidElement(node) && node.props.children) {
//       return extractText(node.props.children);
//     }
//     return '';
//   };

//   const rawText = extractText(children).trim();

//   useEffect(() => {
//     if (!textRef.current) return;

//     let ctx;
//     let cancelled = false;

//     const charContainers = textRef.current.querySelectorAll('.char-wrapper .char-inner');
//     if (!charContainers.length) return;

//     const triggerEl = triggerSelector
//       ? document.querySelector(triggerSelector)
//       : textRef.current;

  
//     const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

//     fontsReady.then(() => {
//       if (cancelled || !textRef.current) return;

//       ctx = gsap.context(() => {
//         gsap.fromTo(
//           charContainers,
//           { y: '110%', opacity: 0 },
//           {
//             y: '0%',
//             opacity: 1,
//             duration: 0.8,
//             stagger: 0.02,
//             ease: 'power3.out',
//             scrollTrigger: {
//               trigger: triggerEl || textRef.current,
//               start,
//               end,
//               toggleActions: 'play reverse play reverse',
//               invalidateOnRefresh: true,
//             },
//           }
//         );
//       });

//       // extra safety refresh after everything (images) is fully loaded
//       ScrollTrigger.refresh();
//     });

//     const refresh = () => ScrollTrigger.refresh();
//     window.addEventListener('load', refresh);
//     const imgs = document.querySelectorAll('img');
//     imgs.forEach((img) => {
//       if (!img.complete) img.addEventListener('load', refresh);
//     });

//     return () => {
//       cancelled = true;
//       window.removeEventListener('load', refresh);
//       imgs.forEach((img) => img.removeEventListener('load', refresh));
//       if (ctx) ctx.revert();
//     };
//   }, [children, rawText, triggerSelector, start, end]);

//   const splitText = rawText.split(/\s+/).map((word, wordIndex, array) => (
//     <React.Fragment key={wordIndex}>
//       <span className="word-group">
//         {word.split('').map((char, charIndex) => (
//           <span key={charIndex} className="char-wrapper">
//             <span className="char-inner">{char}</span>
//           </span>
//         ))}
//       </span>
//       {wordIndex < array.length - 1 && <span className="space-wrapper">&nbsp;</span>}
//     </React.Fragment>
//   ));

//   return (
//     <Tag className={`animated-text-on-scroll ${className}`} ref={textRef}>
//       {splitText}
//     </Tag>
//   );
// };

// export default MomentumSection;



// "use client";

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Momentum.css';

// gsap.registerPlugin(ScrollTrigger);

// const MomentumSection = ({
//   children,
//   className = "",
//   as: Tag = 'h2',
//   triggerSelector = null,
//   start = 'top 90%',
//   end = 'bottom 5%',
//   playOnLoad = false,   // 👈 hero jaisa above-the-fold text ke liye true karo
// }) => {
//   const textRef = useRef(null);

//   const extractText = (node) => {
//     if (typeof node === 'string' || typeof node === 'number') return String(node);
//     if (Array.isArray(node)) return node.map(extractText).join(' ');
//     if (React.isValidElement(node) && node.props.children) {
//       return extractText(node.props.children);
//     }
//     return '';
//   };

//   const rawText = extractText(children).trim();

//   useEffect(() => {
//     if (!textRef.current) return;

//     let ctx;
//     let cancelled = false;

//     const charContainers = textRef.current.querySelectorAll('.char-wrapper .char-inner');
//     if (!charContainers.length) return;

//     const triggerEl = triggerSelector
//       ? document.querySelector(triggerSelector)
//       : textRef.current;

//     const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

//     fontsReady.then(() => {
//       if (cancelled || !textRef.current) return;

//       ctx = gsap.context(() => {
//         if (playOnLoad) {
//           // Hero jaisa content: scroll ka wait mat karo, load hote hi seedha play.
//           gsap.fromTo(
//             charContainers,
//             { y: '110%', opacity: 0 },
//             {
//               y: '0%',
//               opacity: 1,
//               duration: 1.2,
//               stagger: 0.08,
//               ease: 'power3.out',
//               delay: 0.1,
//             }
//           );
//         } else {
//           gsap.fromTo(
//             charContainers,
//             { y: '110%', opacity: 0 },
//             {
//               y: '0%',
//               opacity: 1,
//               duration: 0.8,
//               stagger: 0.02,
//               ease: 'power3.out',
//               scrollTrigger: {
//                 trigger: triggerEl || textRef.current,
//                 start,
//                 end,
//                 toggleActions: 'play reverse play reverse',
//                 invalidateOnRefresh: true,
//               },
//             }
//           );
//         }
//       });

//       if (!playOnLoad) ScrollTrigger.refresh();
//     });

//     const refresh = () => ScrollTrigger.refresh();
//     if (!playOnLoad) {
//       window.addEventListener('load', refresh);
//     }
//     const imgs = document.querySelectorAll('img');
//     if (!playOnLoad) {
//       imgs.forEach((img) => {
//         if (!img.complete) img.addEventListener('load', refresh);
//       });
//     }

//     return () => {
//       cancelled = true;
//       if (!playOnLoad) {
//         window.removeEventListener('load', refresh);
//         imgs.forEach((img) => img.removeEventListener('load', refresh));
//       }
//       if (ctx) ctx.revert();
//     };
//   }, [children, rawText, triggerSelector, start, end, playOnLoad]);

//   const splitText = rawText.split(/\s+/).map((word, wordIndex, array) => (
//     <React.Fragment key={wordIndex}>
//       <span className="word-group">
//         {word.split('').map((char, charIndex) => (
//           <span key={charIndex} className="char-wrapper">
//             <span className="char-inner">{char}</span>
//           </span>
//         ))}
//       </span>
//       {wordIndex < array.length - 1 && <span className="space-wrapper">&nbsp;</span>}
//     </React.Fragment>
//   ));

//   return (
//     <Tag className={`animated-text-on-scroll ${className}`} ref={textRef}>
//       {splitText}
//     </Tag>
//   );
// };

// export default MomentumSection;





"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Momentum.css';

gsap.registerPlugin(ScrollTrigger);

const MomentumSection = ({
  children,
  className = "",
  as: Tag = 'h2',
  triggerSelector = null,
  start = 'top 90%',
  end = 'bottom 5%',
  playOnLoad = false,
}) => {
  const textRef = useRef(null);

  const extractText = (node) => {
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join(' ');
    if (React.isValidElement(node) && node.props.children) {
      return extractText(node.props.children);
    }
    return '';
  };

  const rawText = extractText(children).trim();

  useEffect(() => {
    if (!textRef.current) return;

    let ctx;
    let cancelled = false;

    const charContainers = textRef.current.querySelectorAll('.char-wrapper .char-inner');
    if (!charContainers.length) return;

    const triggerEl = triggerSelector
      ? document.querySelector(triggerSelector)
      : textRef.current;

    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

    fontsReady.then(() => {
      if (cancelled || !textRef.current) return;

      ctx = gsap.context(() => {
        if (playOnLoad) {
          // Paused timeline banao — load pe turant play() karenge,
          // scroll se koi dependency nahi, isliye 100% guaranteed chalega.
          const tl = gsap.timeline({ paused: true }).fromTo(
            charContainers,
            { y: '110%', opacity: 0 },
            {
              y: '0%',
              opacity: 1,
              duration: 0.8,
              stagger: 0.02,
              ease: 'power3.out',
            }
          );

          tl.play();

          // Isi timeline ko ab scroll ke saath bhi jodo — taaki neeche
          // scroll karne par (leave) hide ho jaye, aur wapas upar/neeche
          // scroll karne par (enter/enterBack) dobara play ho jaye.
          ScrollTrigger.create({
            trigger: triggerEl || textRef.current,
            start,
            end,
            onEnter: () => tl.play(),
            onEnterBack: () => tl.play(),
            onLeave: () => tl.reverse(),
            onLeaveBack: () => tl.reverse(),
          });
        } else {
          gsap.fromTo(
            charContainers,
            { y: '110%', opacity: 0 },
            {
              y: '0%',
              opacity: 1,
              duration: 0.8,
              stagger: 0.02,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: triggerEl || textRef.current,
                start,
                end,
                toggleActions: 'play reverse play reverse',
                invalidateOnRefresh: true,
              },
            }
          );
        }
      });

      if (!playOnLoad) ScrollTrigger.refresh();
    });

    const refresh = () => ScrollTrigger.refresh();
    if (!playOnLoad) {
      window.addEventListener('load', refresh);
    }
    const imgs = document.querySelectorAll('img');
    if (!playOnLoad) {
      imgs.forEach((img) => {
        if (!img.complete) img.addEventListener('load', refresh);
      });
    }

    return () => {
      cancelled = true;
      if (!playOnLoad) {
        window.removeEventListener('load', refresh);
        imgs.forEach((img) => img.removeEventListener('load', refresh));
      }
      if (ctx) ctx.revert();
    };
  }, [children, rawText, triggerSelector, start, end, playOnLoad]);

  const splitText = rawText.split(/\s+/).map((word, wordIndex, array) => (
    <React.Fragment key={wordIndex}>
      <span className="word-group">
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className="char-wrapper">
            <span className="char-inner">{char}</span>
          </span>
        ))}
      </span>
      {wordIndex < array.length - 1 && <span className="space-wrapper">&nbsp;</span>}
    </React.Fragment>
  ));

  return (
    <Tag className={`animated-text-on-scroll ${className}`} ref={textRef}>
      {splitText}
    </Tag>
  );
};

export default MomentumSection;