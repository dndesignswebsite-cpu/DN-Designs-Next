"use client";

import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./PhotographyHero.css";

const BASE_IMAGES = [
  'https://picsum.photos/600/600?random=1',
  'https://picsum.photos/600/600?random=2',
  'https://picsum.photos/600/600?random=3',
  'https://picsum.photos/600/600?random=4',
  'https://picsum.photos/600/600?random=5',
  'https://picsum.photos/600/600?random=6',
  'https://picsum.photos/600/600?random=7',
  'https://picsum.photos/600/600?random=8',
  'https://picsum.photos/600/600?random=9',
  'https://picsum.photos/600/600?random=10',
  'https://picsum.photos/600/600?random=11',
  'https://picsum.photos/600/600?random=12',
];

const PATTERN_COLUMNS = 6;

const TILE_BREAKPOINTS = [
  { maxWidth: 400, tileSize: 140, gap: 12 },
  { maxWidth: 640, tileSize: 180, gap: 16 },
  { maxWidth: 1024, tileSize: 220, gap: 20 },
  { maxWidth: Infinity, tileSize: 280, gap: 24 },
];

function getResponsiveTileTokens(viewportWidth) {
  return (
    TILE_BREAKPOINTS.find((bp) => viewportWidth <= bp.maxWidth) ||
    TILE_BREAKPOINTS[TILE_BREAKPOINTS.length - 1]
  );
}

function buildPattern() {
  const rows = Math.ceil(BASE_IMAGES.length / PATTERN_COLUMNS);
  const patternSize = rows * PATTERN_COLUMNS;
  const pattern = [];
  for (let i = 0; i < patternSize; i++) {
    pattern.push(BASE_IMAGES[i % BASE_IMAGES.length]);
  }
  return { rows, pattern };
}

function buildTiledGrid(pattern, rows, tileRepeat) {
  const tiles = [];
  for (let tileRow = 0; tileRow < tileRepeat; tileRow++) {
    for (let tileCol = 0; tileCol < tileRepeat; tileCol++) {
      for (let i = 0; i < pattern.length; i++) {
        const localRow = Math.floor(i / PATTERN_COLUMNS);
        const localCol = i % PATTERN_COLUMNS;
        tiles.push({
          key: `${tileRow}-${tileCol}-${i}`,
          row: tileRow * rows + localRow,
          col: tileCol * PATTERN_COLUMNS + localCol,
          url: pattern[i],
        });
      }
    }
  }
  return tiles;
}

export default function PhotographyHero() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const dragX = useRef(0);
  const dragY = useRef(0);
  const parallaxX = useRef(0);
  const parallaxY = useRef(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 65, stiffness: 180, mass: 1.2 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const [, setIsDragging] = useState(false);
  const [tileRepeat, setTileRepeat] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  const { rows, pattern } = useMemo(() => buildPattern(), []);

  const recompute = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    setIsMobile(vw <= 768); 

    const { tileSize, gap } = getResponsiveTileTokens(vw);
    const oneTileW = PATTERN_COLUMNS * tileSize + (PATTERN_COLUMNS - 1) * gap;
    const oneTileH = rows * tileSize + (rows - 1) * gap;

    const neededForW = (vw + oneTileW * 2) / oneTileW;
    const neededForH = (vh + oneTileH * 2) / oneTileH;
    let n = Math.ceil(Math.max(neededForW, neededForH));
    if (n % 2 === 0) n += 1;
    if (n < 3) n = 3;
    setTileRepeat(n);

    dragX.current = 0;
    dragY.current = 0;
    x.set(0);
    y.set(0);
  }, [rows, x, y]);

  useEffect(() => {
    recompute();
    const t = setTimeout(recompute, 60);
    window.addEventListener("resize", recompute);
    return () => {
      window.removeEventListener("resize", recompute);
      clearTimeout(t);
    };
  }, [recompute]);

  const tiles = useMemo(() => buildTiledGrid(pattern, rows, tileRepeat), [pattern, rows, tileRepeat]);

  const updateMotionValues = useCallback(() => {
    x.set(dragX.current + parallaxX.current);
    y.set(dragY.current + parallaxY.current);
  }, [x, y]);

  const handlePointerMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    const intensity = 200;

    parallaxX.current = relativeX * -intensity;
    parallaxY.current = relativeY * -intensity;
    updateMotionValues();
  }, [updateMotionValues]);

  const handlePointerLeave = useCallback(() => {
    parallaxX.current = 0;
    parallaxY.current = 0;
    updateMotionValues();
  }, [updateMotionValues]);

  const handleDrag = useCallback((_, info) => {
    dragX.current += info.delta.x;
    dragY.current += info.delta.y;
    updateMotionValues();
  }, [updateMotionValues]);

  const handleDragEnd = useCallback(() => {
    setTimeout(() => setIsDragging(false), 50);
    const node = wrapperRef.current;
    if (!node || tileRepeat < 1) return;

    const tileW = node.offsetWidth / tileRepeat;
    const tileH = node.offsetHeight / tileRepeat;

    if (Math.abs(dragX.current) > tileW / 2) {
      const wraps = Math.round(dragX.current / tileW);
      dragX.current -= wraps * tileW;
    }
    if (Math.abs(dragY.current) > tileH / 2) {
      const wraps = Math.round(dragY.current / tileH);
      dragY.current -= wraps * tileH;
    }
    updateMotionValues();
  }, [tileRepeat, updateMotionValues]);

  return (
    <div
      className="hero-container"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">
          DN DESIGNS<span className="registered">®</span>
        </h1>
      </div>

      <motion.div
        ref={wrapperRef}
        className="grid-wrapper"
        style={{ x: smoothX, y: smoothY }}
        drag={isMobile ? "x" : true} 
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        <div className="image-grid" style={{ "--pattern-cols": PATTERN_COLUMNS }}>
          {tiles.map((tile) => (
            <div
              key={tile.key}
              className="grid-item-card"
              style={{
                gridRow: tile.row + 1,
                gridColumn: tile.col + 1,
              }}
            >
              <img src={tile.url} alt="Gallery item" draggable="false" loading="lazy" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}