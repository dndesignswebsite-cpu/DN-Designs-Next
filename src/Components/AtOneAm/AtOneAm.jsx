"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./AtOneAm.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);


// ======================================================
// GLB MODEL
// ======================================================

function CharacterModel({ scrollProgress }) {
  const { scene, animations } = useGLTF(
    "https://dndesigns.co.in/uploads/avatars/1AM_casestudy_scene4_4mb.glb"
  );

  const { actions, names } = useAnimations(animations, scene);

  const actionRef = useRef(null);

  // Smooth animation progress
  const smoothProgress = useRef(0);


  // ====================================================
  // SETUP MODEL + ANIMATION
  // ====================================================

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = false;
        child.material.needsUpdate = true;

        if (child.material.map) {
          child.material.map.anisotropy = 8;
        }
      }
    });


    if (names.length > 0) {
      const action = actions[names[0]];

      if (!action) return;

      // Only ONE animation cycle
      action.setLoop(THREE.LoopOnce, 1);

      action.clampWhenFinished = true;

      action.reset();
      action.play();

      // We control time manually
      action.paused = true;

      actionRef.current = action;
    }
  }, [scene, actions, names]);


  // ====================================================
  // SMOOTH SCROLL → ANIMATION
  // ====================================================

  useFrame((state, delta) => {
    const action = actionRef.current;

    if (!action) return;

    const duration = action.getClip().duration;

    // Target progress coming from ScrollTrigger
    const target = THREE.MathUtils.clamp(
      scrollProgress.current,
      0,
      1
    );


    /*
      IMPORTANT:

      Don't directly do:

      action.time = target * duration

      because wheel/touch can jump.

      Instead smoothly approach the target.
    */

    const smoothSpeed = 4;

    smoothProgress.current = THREE.MathUtils.damp(
      smoothProgress.current,
      target,
      smoothSpeed,
      delta
    );


    // Final animation position
    action.time = smoothProgress.current * duration;
  });


  return (
    <primitive
      object={scene}

      // Model size
      scale={1.25}

      // Center position
      position={[0, -0.8, 0]}

      // Front side
      rotation={[0, Math.PI, 0]}
    />
  );
}


// ======================================================
// CAMERA
// ======================================================

function CameraRig() {
  const { camera, size } = useThree();

  useEffect(() => {

    const isMobile = size.width < 768;

    camera.fov = isMobile ? 52 : 45;

    camera.position.set(
      0,
      0,
      isMobile ? 3.1 : 2.7
    );

    camera.lookAt(0, -0.1, 0);

    camera.updateProjectionMatrix();

  }, [camera, size.width]);


  return null;
}


// ======================================================
// MAIN COMPONENT
// ======================================================

export default function AtOneAm() {

  const containerRef = useRef(null);

  /*
    This is NOT the actual animation.

    This is only the target scroll progress.
  */

  const scrollProgress = useRef(0);


  // ====================================================
  // GSAP SCROLL TRIGGER
  // ====================================================

  useGSAP(
    () => {

      const container = containerRef.current;

      if (!container) return;


      const trigger = ScrollTrigger.create({

        trigger: container,

        start: "top top",

        /*
          More scroll distance.

          GLB animation will take
          around 300vh of page scrolling.
        */

        end: "+=300vh",

        /*
          Very smooth connection between
          scroll and target progress.
        */

        scrub: 1.5,

        onUpdate: (self) => {

          /*
            Only update target.

            CharacterModel will smoothly
            approach this value.
          */

          scrollProgress.current = self.progress;
        },

      });


      return () => {
        trigger.kill();
      };

    },

    {
      scope: containerRef,
    }
  );


  return (
    <div className="at1amhero">

      <div
        ref={containerRef}
        className="scroll-container"
      >

        {/* =========================================
            STICKY CANVAS
        ========================================= */}

        <div className="canvas-wrapper">

          <Canvas
            dpr={[1, 1.5]}

            camera={{
              position: [0, 0, 2.7],
              fov: 45,
            }}

            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
            }}
          >

            {/* LIGHT */}

            <ambientLight intensity={2} />

            <directionalLight
              position={[5, 5, 5]}
              intensity={3}
            />

            <directionalLight
              position={[-5, 5, -5]}
              intensity={1.5}
            />

            <directionalLight
              position={[0, -2, 5]}
              intensity={0.8}
            />


            {/* CAMERA */}

            <CameraRig />


            {/* GLB */}

            <CharacterModel
              scrollProgress={scrollProgress}
            />

          </Canvas>


          {/* =======================================
              SCROLL INDICATOR
          ======================================= */}

          <div className="scroll-indicator">
            SCROLL TO EXPLORE THE EXPERIENCE
          </div>

        </div>


        {/* =========================================
            SCROLL SPACE
        ========================================= */}

        <div className="trigger-zone"></div>

      </div>

    </div>
  );
}


// ======================================================
// PRELOAD GLB
// ======================================================

useGLTF.preload(
  "https://dndesigns.co.in/uploads/avatars/1AM_casestudy_scene4_4mb.glb"
);