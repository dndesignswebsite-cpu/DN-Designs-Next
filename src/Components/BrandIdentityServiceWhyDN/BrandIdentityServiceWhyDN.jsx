"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./BrandIdentityServiceWhyDN.css";

const items = [
  { src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg", title: "SYNERGY CLINIC", category: "WEBSITE", link: "#" },
  { src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg", title: "COPPELIA", category: "WEBSITE", link: "#" },
  { src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg", title: "PITCH PRO", category: "WEBSITE", link: "#" },
  { src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg", title: "NIRIN", category: "BRANDING", link: "#" },
  { src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg", title: "ART & SAVEUR", category: "WEBSITE", link: "#" },
  { src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg", title: "BALLOONS", category: "WEBSITE", link: "#" },
  { src: "https://dndesigns.co.in/uploads/pages/uyrygjk.jpg", title: "MADREPUNK", category: "STUDIO", link: "#" },
];

const CELL_WIDTH = 5.6;   // three.js world units per card slot
const CELL_HEIGHT = 4.2;
const loopItems = [...items, ...items, ...items]; // buffer copies for wraparound

// ---- Shaders -------------------------------------------------------
// Vertex shader: cards away from the center of the row recede
// backward in Z (never forward) and curve slightly, but we do NOT
// scale width — scaling a card's width without moving its neighbor
// closer just opens a visible gap, which is exactly what we don't want.
const vertexShader = /* glsl */ `
  uniform float uProgress; // 0 at center -> 1 at edge of the squeeze zone
  varying vec2 vUv;
  void main() {
    vUv = uv;
    float absP = clamp(abs(uProgress), 0.0, 1.0);
    vec3 pos = position;
    pos.z -= absP * absP * 2.4;            // recede into depth, never forward
    pos.z -= sin(uv.x * 3.14159265) * absP * 0.35; // subtle ribbon curve across each card
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// Fragment shader: RGB channel split (chromatic aberration) driven by
// scroll velocity, plus fine grain and edge fade for the receded cards.
const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  uniform float uVelocity;
  uniform float uProgress;
  varying vec2 vUv;

  float grain(vec2 uv, float t) {
    return fract(sin(dot(uv * t, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    float shift = clamp(uVelocity, -0.06, 0.06);
    float r = texture2D(uTexture, vUv + vec2(shift, 0.0)).r;
    float g = texture2D(uTexture, vUv).g;
    float b = texture2D(uTexture, vUv - vec2(shift, 0.0)).b;
    vec3 color = vec3(r, g, b);

    float n = (grain(vUv, 1.0) - 0.5) * 0.05;
    color += n;

    float absP = clamp(abs(uProgress), 0.0, 1.0);
    color *= mix(1.0, 0.55, absP); // dim as it recedes

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function BrandIdentityServiceWhyDN() {
  const wrapRef = useRef(null);
  const canvasHostRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvasHost = canvasHostRef.current;
    const overlay = overlayRef.current;
    if (!wrap || !canvasHost || !overlay) return;

    let width = canvasHost.clientWidth;
    let height = canvasHost.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    canvasHost.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const geometry = new THREE.PlaneGeometry(CELL_WIDTH, CELL_HEIGHT, 32, 1);

    const meshes = loopItems.map((item, i) => {
      const texture = loader.load(item.src);
      texture.colorSpace = THREE.SRGBColorSpace;
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTexture: { value: texture },
          uProgress: { value: 0 },
          uVelocity: { value: 0 },
        },
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData.baseX = i * CELL_WIDTH;
      mesh.userData.item = item;
      scene.add(mesh);
      return mesh;
    });

    const totalWidth = CELL_WIDTH * items.length;

    // ---- Scroll / drag state ----
    // Page scroll (while the section is pinned) is the PRIMARY driver of
    // horizontal position. Dragging adds a manual offset on top of that,
    // so you can still nudge the row, but scrolling the page is what
    // actually moves it and is what makes position:sticky "stick".
    let scrollX = totalWidth * 0.5;
    let dragOffset = 0;
    let targetDragOffset = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartOffset = 0;

    const getScrollProgress = () => {
      const rect = wrap.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return 0;
      const progress = -rect.top / scrollable;
      return THREE.MathUtils.clamp(progress, 0, 1);
    };

    const onPointerDown = (e) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartOffset = targetDragOffset;
      canvasHost.style.cursor = "grabbing";
    };
    const onPointerMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      targetDragOffset = dragStartOffset - dx * 0.02;
    };
    const onPointerUp = () => {
      isDragging = false;
      canvasHost.style.cursor = "grab";
    };

    canvasHost.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // ---- Kinetic text overlay (matches the inspected markup style) ----
    function makeKineticSpan(text) {
      const container = document.createElement("div");
      container.className = "kinetic-line";
      [...text].forEach((ch, i) => {
        const wrapSpan = document.createElement("span");
        wrapSpan.className = "kinetic-char-wrap";
        const inner = document.createElement("span");
        inner.className = "kinetic-char";
        inner.style.setProperty("--i", i);
        inner.textContent = ch === " " ? "\u00A0" : ch;
        wrapSpan.appendChild(inner);
        container.appendChild(wrapSpan);
      });
      return container;
    }

    const overlayCells = meshes.map((mesh) => {
      const a = document.createElement("a");
      a.className = "hitbox";
      a.href = mesh.userData.item.link;
      a.target = "_blank";
      a.rel = "noopener";

      const title = makeKineticSpan(mesh.userData.item.title);
      title.classList.add("kinetic-title");
      const category = makeKineticSpan(mesh.userData.item.category);
      category.classList.add("kinetic-category");

      a.appendChild(title);
      a.appendChild(category);
      overlay.appendChild(a);

      a.addEventListener("mouseenter", () => a.classList.add("is-active"));
      a.addEventListener("mouseleave", () => a.classList.remove("is-active"));

      return { mesh, el: a };
    });

    // ---- Animation loop ----
    let rafId;

    function project(mesh) {
      const vector = new THREE.Vector3();
      mesh.getWorldPosition(vector);
      vector.project(camera);
      const x = (vector.x * 0.5 + 0.5) * width;
      const y = (-vector.y * 0.5 + 0.5) * height;
      return { x, y };
    }

    // How far the row should travel across the whole pinned scroll.
    // Tune this together with .why-section's height in the CSS — more
    // scroll runway (taller section) with the same travel = slower,
    // less runway = faster. Currently set to cycle through the loop
    // about 3x over the full pin duration.
    const scrollTravel = totalWidth * 3;

    // How far (in "card slots") the squeeze zone reaches from center.
    // Cards beyond this are fully squeezed to MIN_WIDTH_SCALE.
    const SQUEEZE_EDGE = 3;
    const MIN_WIDTH_SCALE = 0.32;

    function widthScaleAt(t) {
      const a = THREE.MathUtils.clamp(Math.abs(t) / SQUEEZE_EDGE, 0, 1);
      const eased = a * a * (3 - 2 * a); // smoothstep
      return THREE.MathUtils.lerp(1, MIN_WIDTH_SCALE, eased);
    }

    function tick() {
      dragOffset += (targetDragOffset - dragOffset) * 0.12;
      const progress = getScrollProgress();
      const targetScrollX = totalWidth * 0.5 + progress * scrollTravel + dragOffset;

      const prevScrollX = scrollX;
      scrollX += (targetScrollX - scrollX) * 0.15;
      const velocity = scrollX - prevScrollX;

      // "Logical" continuous slot position for every mesh, wrapped so
      // each of the 3 duplicate copies picks whichever representative
      // sits nearest the center — same idea as the old modulo wrap,
      // just done in slot-units instead of world-x units.
      const N = items.length;
      const scrollSlots = scrollX / CELL_WIDTH;
      const infos = meshes.map((mesh, i) => {
        const rawT = i - scrollSlots;
        const t = rawT - Math.round(rawT / N) * N;
        return { mesh, t };
      });

      // Lay them out edge-to-edge: each card's rendered width comes
      // from its distance-from-center, and every next card's left
      // edge is placed exactly at the previous card's right edge —
      // so no matter how much a card squeezes, there is never a gap.
      infos.sort((a, b) => a.t - b.t);
      const widths = infos.map((info) => CELL_WIDTH * widthScaleAt(info.t));
      const totalRowWidth = widths.reduce((a, b) => a + b, 0);
      let runningX = -totalRowWidth / 2;

      infos.forEach((info, idx) => {
        const w = widths[idx];
        const centerX = runningX + w / 2;
        runningX += w;

        const { mesh, t } = info;
        mesh.position.x = centerX;
        mesh.scale.x = w / CELL_WIDTH; // squeeze the mesh itself to width w
        const distance = THREE.MathUtils.clamp(Math.abs(t) / SQUEEZE_EDGE, 0, 1);
        mesh.material.uniforms.uProgress.value = distance;
        mesh.material.uniforms.uVelocity.value = velocity;
      });

      overlayCells.forEach(({ mesh, el }) => {
        const { x, y } = project(mesh);
        const offscreen = x < -100 || x > width + 100;
        el.style.display = offscreen ? "none" : "block";
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      });

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    }
    tick();

    // ---- Resize ----
    const onResize = () => {
      width = canvasHost.clientWidth;
      height = canvasHost.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      canvasHost.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", onResize);
      meshes.forEach((m) => {
        m.material.uniforms.uTexture.value.dispose();
        m.material.dispose();
      });
      geometry.dispose();
      renderer.dispose();
      canvasHost.removeChild(renderer.domElement);
      overlay.innerHTML = "";
    };
  }, []);

  return (
    <section ref={wrapRef} className="why-section">
      <div className="sticky-wrap">
        <div className="canvas-host" ref={canvasHostRef} />
        <div className="kinetic-overlay" ref={overlayRef} />
      </div>
    </section>
  );
}