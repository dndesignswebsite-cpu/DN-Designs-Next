
'use client';

import React, { useRef } from 'react';
import './DNNewFooterLogo.css';

function DNNewFooterLogo() {
  const logoSectionRef = useRef(null);
  const torchOverlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const section = logoSectionRef.current;
    const overlay = torchOverlayRef.current;

    if (!section || !overlay) return;

    const rect = section.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    overlay.style.setProperty('--torch-x', `${x}px`);
    overlay.style.setProperty('--torch-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const overlay = torchOverlayRef.current;
    if (!overlay) return;

    overlay.style.setProperty('--torch-x', '-800px');
    overlay.style.setProperty('--torch-y', '-800px');
  };

  return (
    <section
      ref={logoSectionRef}
      className="DNNewFooterLogo-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="https://dndesigns.co.in/uploads/avatars/dnnewlogoGroup37152.svg"
        alt="DN Designs"
        className="DNNewFooterLogo-image"
      />

      <div
        ref={torchOverlayRef}
        className="DNNewFooterLogo-torch"
        aria-hidden="true"
      />
    </section>
  );
}

export default DNNewFooterLogo;
