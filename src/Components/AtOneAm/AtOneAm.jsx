"use client";

import React, { useRef, useEffect } from "react";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  useGLTF,
  useAnimations,
} from "@react-three/drei";

import * as THREE from "three";

import gsap from "gsap";
import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

import "./AtOneAm.css";

gsap.registerPlugin(
  ScrollTrigger,
  useGSAP
);


/* =========================================================
   GLB URL
========================================================= */

const MODEL_URL =
  "https://dndesigns.co.in/uploads/avatars/1AM_casestudy_scene4_4mb.glb";


/* =========================================================
   IMPORTANT ANIMATION CONTROL
========================================================= */

/*
  This controls how much of the GLB animation is played.

  1.00 = complete GLB animation
  0.80 = 80%
  0.70 = 70%
  0.60 = 60%
  0.50 = 50%

  Because your cans are going too high,
  we intentionally stop BEFORE the final part.

  Start with 0.62.

  If cans still go too high:
  0.55

  If box doesn't open enough:
  0.68
*/

const ANIMATION_END = 0.62;


/*
  Bigger model.

  Previous:
  1.5

  Now:
  2.0
*/

const MODEL_SCALE = 2.0;


/* =========================================================
   CHARACTER MODEL
========================================================= */

function CharacterModel({
  scrollProgress,
}) {
  const {
    scene,
    animations,
  } = useGLTF(MODEL_URL);

  const {
    actions,
    names,
  } = useAnimations(
    animations,
    scene
  );

  const actionRef =
    useRef(null);

  /*
    Actual smooth animation progress.
  */

  const smoothProgress =
    useRef(0);


  /* =======================================================
     INITIALIZE GLB
  ======================================================= */

  useEffect(() => {
    if (!scene) return;


    /*
      Material settings
    */

    scene.traverse((child) => {

      if (child.isMesh) {

        child.material.wireframe =
          false;

        child.material.needsUpdate =
          true;


        if (child.material.map) {

          child.material.map.anisotropy =
            8;

        }

      }

    });


    /*
      Animation setup
    */

    if (names.length > 0) {

      const action =
        actions[names[0]];

      if (!action) return;


      action.setLoop(
        THREE.LoopOnce,
        1
      );

      action.clampWhenFinished =
        true;


      action.reset();

      action.play();


      /*
        We control animation manually.
      */

      action.paused = true;


      actionRef.current =
        action;

    }

  }, [
    scene,
    animations,
    actions,
    names,
  ]);


  /* =======================================================
     FRAME LOOP
  ======================================================= */

  useFrame((state, delta) => {

    const action =
      actionRef.current;

    if (!action) return;


    const duration =
      action.getClip().duration;


    /*
      Scroll target
    */

    const target =
      THREE.MathUtils.clamp(
        scrollProgress.current,
        0,
        1
      );


    /*
      VERY SLOW FOLLOWING

      Lower number = slower.

      0.6 = extremely slow.
    */

    const smoothSpeed =
      0.6;


    smoothProgress.current =
      THREE.MathUtils.damp(
        smoothProgress.current,
        target,
        smoothSpeed,
        delta
      );


    /*
      ======================================================
      CRITICAL PART
      ======================================================

      We DO NOT play the full animation.

      Example:

      ANIMATION_END = 0.62

      means:

      Scroll 0 → 100%
      maps to
      GLB 0 → 62%

      So the last 38% of the GLB animation
      is never played.

      This prevents the cans from flying
      too far upward.
    */

    const animationProgress =
      smoothProgress.current *
      ANIMATION_END;


    /*
      Set animation time.
    */

    action.time =
      animationProgress *
      duration;

  });


  /* =======================================================
     MODEL
  ======================================================= */

  return (
    <primitive
      object={scene}

      /*
        BIGGER BOX
      */

      scale={MODEL_SCALE}

      /*
        Vertical position
      */

      position={[
        0,
        -0.8,
        0,
      ]}

      /*
        Keep original orientation
      */

      rotation={[
        0,
        Math.PI,
        0,
      ]}
    />
  );
}


/* =========================================================
   CAMERA RIG
========================================================= */

function CameraRig({
  scrollProgress,
}) {

  const {
    camera,
    size,
  } = useThree();


  const isMobile =
    size.width < 768;


  /*
    Camera progress
  */

  const cameraProgress =
    useRef(0);


  /* =======================================================
     START CAMERA
     
     High camera.
     Top of box visible.
  ======================================================= */

  const startPosition =
    useRef(
      new THREE.Vector3(
        0,
      3,
      1,


        isMobile
          ? 4.4
          : 4.8,

        isMobile
          ? 3.8
          : 3.6
      )
    );


  /* =======================================================
     END CAMERA

     Close + front.
  ======================================================= */

  const endPosition =
    useRef(
      new THREE.Vector3(
        0,
        1,
        1,

        isMobile
          ? 0.55
          : 0.4,

        isMobile
          ? 2.6
          : 2.4
      )
    );


  /*
    Start look target
  */

  const startLookAt =
    useRef(
      new THREE.Vector3(
        0,
        -0.3,
        0
      )
    );


  /*
    End look target
  */

  const endLookAt =
    useRef(
      new THREE.Vector3(
        0,
        -0.55,
        0
      )
    );


  const currentPosition =
    useRef(
      new THREE.Vector3()
    );


  const currentLookAt =
    useRef(
      new THREE.Vector3()
    );


  /* =======================================================
     CAMERA INITIALIZATION
  ======================================================= */

  useEffect(() => {

    camera.fov =
      isMobile
        ? 52
        : 45;


    camera.position.copy(
      startPosition.current
    );


    currentLookAt.current.copy(
      startLookAt.current
    );


    camera.lookAt(
      currentLookAt.current
    );


    camera.updateProjectionMatrix();

  }, [
    camera,
    isMobile,
  ]);


  /* =======================================================
     CAMERA FRAME
  ======================================================= */

  useFrame((state, delta) => {

    const target =
      THREE.MathUtils.clamp(
        scrollProgress.current,
        0,
        1
      );


    /*
      VERY SLOW CAMERA RESPONSE
    */

    cameraProgress.current =
      THREE.MathUtils.damp(
        cameraProgress.current,
        target,
        0.45,
        delta
      );


    /*
      Camera transition happens
      during first 50% of total scroll.

      After that camera stays
      in front.
    */

    const raw =
      THREE.MathUtils.clamp(
        cameraProgress.current /
          0.5,

        0,
        1
      );


    /*
      Cinematic easing
    */

    const eased =
      THREE.MathUtils.smoothstep(
        raw,
        0,
        1
      );


    /*
      Camera position
    */

    currentPosition.current.lerpVectors(
      startPosition.current,
      endPosition.current,
      eased
    );


    camera.position.copy(
      currentPosition.current
    );


    /*
      Camera target
    */

    currentLookAt.current.lerpVectors(
      startLookAt.current,
      endLookAt.current,
      eased
    );


    camera.lookAt(
      currentLookAt.current
    );

  });


  return null;
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AtOneAm() {

  const containerRef =
    useRef(null);


  /*
    Scroll target.

    0 = beginning
    1 = end
  */

  const scrollProgress =
    useRef(0);


  /* =======================================================
     GSAP SCROLL
  ======================================================= */

  useGSAP(
    () => {

      const container =
        containerRef.current;

      if (!container) return;


      const trigger =
        ScrollTrigger.create({

          trigger:
            container,


          start:
            "top top",


          /*
            =================================================
            EXTREMELY LONG SCROLL
            =================================================

            2000vh

            This means the animation progresses
            very slowly while scrolling.
          */

          end:
            "+=2000vh",


          /*
            High scrub gives smoother
            scroll response.
          */

          scrub:
            4,


          onUpdate:
            (self) => {

              scrollProgress.current =
                self.progress;

            },

        });


      return () => {

        trigger.kill();

      };

    },

    {
      scope:
        containerRef,
    }
  );


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="at1amhero">

      <div
        ref={containerRef}
        className="scroll-container"
      >

        <div className="canvas-wrapper">

          <Canvas

            dpr={[
              1,
              1.5,
            ]}


            camera={{
              position: [
                0,
                4.8,
                3.6,
              ],

              fov: 45,
            }}


            gl={{
              antialias:
                true,

              alpha:
                true,

              powerPreference:
                "high-performance",
            }}

          >

            {/* =========================================
                LIGHTING
            ========================================= */}

            <ambientLight
              intensity={2}
            />


            <directionalLight
              position={[
                5,
                5,
                5,
              ]}
              intensity={3}
            />


            <directionalLight
              position={[
                -5,
                5,
                -5,
              ]}
              intensity={1.5}
            />


            <directionalLight
              position={[
                0,
                -2,
                5,
              ]}
              intensity={0.8}
            />


            {/* =========================================
                CAMERA
            ========================================= */}

            <CameraRig
              scrollProgress={
                scrollProgress
              }
            />


            {/* =========================================
                GLB
            ========================================= */}

            <CharacterModel
              scrollProgress={
                scrollProgress
              }
            />

          </Canvas>


          {/* =========================================
              SCROLL INDICATOR
          ========================================= */}

          <div className="scroll-indicator">

            SCROLL TO EXPLORE
            THE EXPERIENCE

          </div>

        </div>


        {/* =============================================
            SCROLL SPACE
        ============================================= */}

        <div className="trigger-zone"></div>

      </div>

    </div>
  );
}


/* =========================================================
   PRELOAD
========================================================= */

useGLTF.preload(
  MODEL_URL
);