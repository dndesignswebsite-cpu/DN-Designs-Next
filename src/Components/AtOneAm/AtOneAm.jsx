"use client"

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import "./AtOneAm.css"

gsap.registerPlugin(ScrollTrigger, useGSAP);

function CharacterModel({ scrollProgress }) {
  // FIX: Yahan apni real camera-head wali glb file ka naam dalo jo public folder mein hai
  // Example: '/camera_man.glb'
  const { scene, animations } = useGLTF('https://cdn.shopify.com/3d/models/2585765b3bf53769/walking.glb');
  const { actions, names } = useAnimations(animations, scene);
  const mixerRef = useRef(null);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          // Pure model se wireframe ko block kiya taaki original geometry and skin textures dikhein
          child.material.wireframe = false; 
          child.material.needsUpdate = true;
        }
      });

      if (names.length > 0) {
        const action = actions[names[0]];
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.clampWhenFinished = false;
        action.reset().play();
        action.paused = true; 
        mixerRef.current = action.getMixer();
      }
    }
  }, [scene, animations, actions, names]);

  useFrame(() => {
    if (mixerRef.current && names.length > 0) {
      const action = actions[names[0]];
      const duration = action.getClip().duration;
      action.time = (scrollProgress.current * duration * 3) % duration;
    }
  });

  return (
    <primitive object={scene} scale={0.8} position={[0, -1.0, 0]} />
  );
}

function CameraRig() {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.set(0, 0, 3.5);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function AtOneAm() {
  const containerRef = useRef(null);
  const scrollProgress = useRef(0);

  useGSAP(() => {
    gsap.to(scrollProgress, {
      current: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      }
    });
  }, { scope: containerRef });

  return (
    <div className='at1amhero'>
    <div ref={containerRef} className="scroll-container">
      <div className="canvas-wrapper">
        <Canvas gl={{ antialias: true }}>
          {/* High-quality studio lights taaki textures real lagien */}
          <ambientLight intensity={2.0} /> 
          <directionalLight position={[5, 5, 5]} intensity={3.0} />
          <directionalLight position={[-5, 5, -5]} intensity={1.5} />
          
          <CameraRig />
          <CharacterModel scrollProgress={scrollProgress} />
        </Canvas>

        <div className="scroll-indicator">
          SCROLL TO EXPLORE THE EXPERIENCE
        </div>
      </div>

      <div className="trigger-zone"></div>
    </div>
    </div>
  );
}