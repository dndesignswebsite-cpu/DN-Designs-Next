"use client";

import React, {
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Environment,
  useGLTF,
  ContactShadows,
} from "@react-three/drei";

import * as THREE from "three";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./AtOneAmCanGlbSection.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   CAN URLS
   ========================================================= */

/*
 * Abhi testing ke liye same GLB 5 baar.
 *
 * Baad mein inhe apne actual 5 GLB URLs se replace kar dena.
 */

const CAN_URLS = [
  "https://cdn.shopify.com/3d/models/f2514ce3b662efef/single_can_.glb",
  "https://cdn.shopify.com/3d/models/f2514ce3b662efef/single_can_.glb",
  "https://cdn.shopify.com/3d/models/f2514ce3b662efef/single_can_.glb",
  "https://cdn.shopify.com/3d/models/f2514ce3b662efef/single_can_.glb",
  "https://cdn.shopify.com/3d/models/f2514ce3b662efef/single_can_.glb",
];

CAN_URLS.forEach((url) => {
  useGLTF.preload(url);
});


/* =========================================================
   MODEL ORIENTATION
   ========================================================= */

const MODEL_ROTATION_OFFSET = {
  /*
   * Existing working orientation
   *
   * Math.PI / 2 = upright correction
   *
   * + Math.PI = 180° X flip
   * so the can starts upside down.
   */

  x: Math.PI / 2 + Math.PI,

 
   y: 0,

  z: 0,
};


/* =========================================================
   MODEL SIZE
   ========================================================= */

const TARGET_HEIGHT = 3.5;


/* =========================================================
   SINGLE CAN MODEL
   ========================================================= */

function CanModel({
  url,
  state,
}) {

  const { scene } = useGLTF(url);

  const pivotRef = useRef(null);

  const modelRef = useRef(null);

  const correctionRef = useRef(null);

  /*
   * Prevent model normalization from happening
   * more than once.
   */
  const normalizedRef = useRef(false);


  /* =======================================================
     CLONE GLB
     ======================================================= */

  const clonedScene = useMemo(() => {

    const clone = scene.clone(true);

    clone.traverse((child) => {

      if (!child.isMesh) return;


      child.castShadow = true;

      child.receiveShadow = true;


      if (child.material) {

        /*
         * Every can gets its own material.
         */
        child.material =
          child.material.clone();


        /*
         * Needed for opacity fade.
         */
        child.material.transparent = true;


        /*
         * IMPORTANT:
         *
         * Hidden/fading cans should not write
         * to the depth buffer.
         *
         * Otherwise one can can visually cut
         * another can in half.
         */
        child.material.depthWrite = false;


        /*
         * Keep normal depth testing.
         */
        child.material.depthTest = true;

      }

    });

    return clone;

  }, [scene]);


  /* =======================================================
     NORMALIZE MODEL + TRUE CENTER
     ======================================================= */

  useLayoutEffect(() => {

    if (!modelRef.current) return;

    if (!correctionRef.current) return;

    /*
     * Do not normalize again.
     */
    if (normalizedRef.current) return;


    /* -------------------------------------------------------
       RESET MODEL
       ------------------------------------------------------- */

    modelRef.current.position.set(
      0,
      0,
      0
    );

    modelRef.current.rotation.set(
      0,
      0,
      0
    );

    modelRef.current.scale.set(
      1,
      1,
      1
    );


    /* -------------------------------------------------------
       FIXED ORIENTATION
       ------------------------------------------------------- */

    correctionRef.current.rotation.set(
      MODEL_ROTATION_OFFSET.x,
      MODEL_ROTATION_OFFSET.y,
      MODEL_ROTATION_OFFSET.z
    );


    /*
     * Force Three.js to calculate the
     * corrected orientation.
     */

    modelRef.current.updateMatrixWorld(
      true
    );


    /* -------------------------------------------------------
       BOUNDING BOX
       ------------------------------------------------------- */

    const box =
      new THREE.Box3().setFromObject(
        modelRef.current
      );


    const size =
      new THREE.Vector3();

    const center =
      new THREE.Vector3();


    box.getSize(size);

    box.getCenter(center);


    /* -------------------------------------------------------
       MAX DIMENSION
       ------------------------------------------------------- */

    const maxDimension =
      Math.max(
        size.x,
        size.y,
        size.z
      );


    if (
      !Number.isFinite(maxDimension) ||
      maxDimension <= 0
    ) {
      return;
    }


    /* -------------------------------------------------------
       NORMALIZED SCALE
       ------------------------------------------------------- */

    const normalizedScale =
      TARGET_HEIGHT / maxDimension;


    /* -------------------------------------------------------
       APPLY SCALE
       ------------------------------------------------------- */

    modelRef.current.scale.setScalar(
      normalizedScale
    );


    /* -------------------------------------------------------
       TRUE CENTER
       ------------------------------------------------------- */

    modelRef.current.position.set(
      -center.x * normalizedScale,
      -center.y * normalizedScale,
      -center.z * normalizedScale
    );


    /*
     * Final matrix update.
     */

    modelRef.current.updateMatrixWorld(
      true
    );


    /*
     * Lock normalization.
     */

    normalizedRef.current = true;

  }, [clonedScene]);


  /* =======================================================
     THREE FRAME
     ======================================================= */

  useFrame(() => {

    if (!pivotRef.current) return;


    /* =====================================================
       X ROTATION
       ===================================================== */

    pivotRef.current.rotation.x =
      state.rotationX;


    /* =====================================================
       Y ROTATION
       ===================================================== */

    pivotRef.current.rotation.y =
      state.rotationY;


    /* =====================================================
       Z LOCKED
       ===================================================== */

    pivotRef.current.rotation.z = 0;


    /* =====================================================
       POSITION
       ===================================================== */

    pivotRef.current.position.x =
      state.positionX;

    pivotRef.current.position.y =
      state.positionY;

    pivotRef.current.position.z =
      state.positionZ;


    /* =====================================================
       OPACITY
       ===================================================== */

    const opacity =
      state.opacity;


    clonedScene.traverse((child) => {

      if (!child.isMesh) return;

      if (!child.material) return;


      /* ---------------------------------------------------
         MULTIPLE MATERIALS
         --------------------------------------------------- */

      if (
        Array.isArray(
          child.material
        )
      ) {

        child.material.forEach(
          (material) => {

            material.transparent = true;

            material.opacity =
              opacity;


            /*
             * Hidden / fading can does not
             * write depth.
             */
            material.depthWrite =
              opacity > 0.99;

          }
        );

      }


      /* ---------------------------------------------------
         SINGLE MATERIAL
         --------------------------------------------------- */

      else {

        child.material.transparent =
          true;

        child.material.opacity =
          opacity;


        /*
         * IMPORTANT FIX
         */
        child.material.depthWrite =
          opacity > 0.99;

      }

    });


    /*
     * Pivot scale remains fixed.
     *
     * Actual size is controlled by TARGET_HEIGHT.
     */

    pivotRef.current.scale.setScalar(
      1
    );

  });


  /* =======================================================
     JSX
     ======================================================= */

  return (

    <group ref={pivotRef}>

      {/* TRUE CENTER MODEL */}

      <group ref={modelRef}>

        {/* FIXED ORIENTATION */}

        <group ref={correctionRef}>

          <primitive
            object={clonedScene}
          />

        </group>

      </group>

    </group>
  );
}


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function AtOneAmCanGlbSection() {

  const sectionRef =
    useRef(null);

  const pinRef =
    useRef(null);


  /* =======================================================
     FIVE CAN STATES
     ======================================================= */

  const canStates = useRef([

    /* CAN 1 */

    {
      rotationX: 0,
      rotationY: 0,

      positionX: 0,
      positionY: 0,
      positionZ: 0,

      opacity: 1,
    },


    /* CAN 2 */

    {
      rotationX: 0,
      rotationY: 0,

      positionX: 0,
      positionY: 0,
      positionZ: 0,

      opacity: 0,
    },


    /* CAN 3 */

    {
      rotationX: 0,
      rotationY: 0,

      positionX: 0,
      positionY: 0,
      positionZ: 0,

      opacity: 0,
    },


    /* CAN 4 */

    {
      rotationX: 0,
      rotationY: 0,

      positionX: 0,
      positionY: 0,
      positionZ: 0,

      opacity: 0,
    },


    /* CAN 5 */

    {
      rotationX: 0,
      rotationY: 0,

      positionX: 0,
      positionY: 0,
      positionZ: 0,

      opacity: 0,
    },

  ]);


  /* =======================================================
     GSAP + SCROLLTRIGGER
     ======================================================= */

  useLayoutEffect(() => {

    const section =
      sectionRef.current;

    const pin =
      pinRef.current;


    if (!section || !pin) {
      return;
    }


    const ctx =
      gsap.context(() => {


        /* =================================================
           RESET ALL STATES
           ================================================= */

        canStates.current.forEach(
          (state, index) => {

            state.rotationX = 0;

            state.rotationY = 0;


            state.positionX = 0;

            state.positionY = 0;

            state.positionZ = 0;


            state.opacity =
              index === 0 ? 1 : 0;

          }
        );


        /* =================================================
           MASTER TIMELINE
           ================================================= */

        const timeline =
          gsap.timeline({

            paused: true,

            defaults: {
              ease: "none",
            },

          });


        /* =================================================
           FIVE CAN SEQUENCE
           ================================================= */

        canStates.current.forEach(
          (currentCan, index) => {


            /* =============================================
               ONE COMPLETE ROTATION
               ============================================= */

            timeline.to(
              currentCan,
              {

                /*
                 * One complete X end-over-end flip.
                 */
                rotationX:
                  Math.PI * 2,


                /*
                 * One complete Y rotation.
                 */
                rotationY:
                  Math.PI * 2,


                duration: 1,

                ease: "none",

              }
            );


            /* =============================================
               CHANGE TO NEXT CAN
               ============================================= */

            if (
              index <
              canStates.current.length - 1
            ) {

              const nextCan =
                canStates.current[
                  index + 1
                ];


              /*
               * Make sure next can starts
               * from its original orientation.
               */

              nextCan.rotationX = 0;

              nextCan.rotationY = 0;


              /*
               * Fade current can OUT.
               */

              timeline.to(
                currentCan,
                {

                  opacity: 0,

                  duration: 0.45,

                  ease:
                    "power1.inOut",

                }
              );


              /*
               * Fade next can IN
               * at the same time.
               */

              timeline.to(
                nextCan,
                {

                  opacity: 1,

                  duration: 0.2,

                  ease:
                    "power1.inOut",

                },
                "<"
              );

            }

          }
        );


        /* =================================================
           SCROLLTRIGGER
           ================================================= */

        ScrollTrigger.create({

          trigger: section,

          start: "top top",

          /*
           * 5 cans = 5 rotation stages.
           */
          end: "+=500%",

          pin: pin,

          pinSpacing: true,

          scrub: 0.8,

          animation:
            timeline,

          anticipatePin: 1,

          invalidateOnRefresh: true,

        });


        /* =================================================
           INITIAL REFRESH
           ================================================= */

        requestAnimationFrame(() => {

          requestAnimationFrame(() => {

            ScrollTrigger.refresh(true);

          });

        });

      }, section);


    /* =====================================================
       RESIZE
       ===================================================== */

    const handleResize = () => {

      ScrollTrigger.refresh(true);

    };


    window.addEventListener(
      "resize",
      handleResize
    );


    /* =====================================================
       CLEANUP
       ===================================================== */

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

      ctx.revert();

    };

  }, []);


  /* =======================================================
     JSX
     ======================================================= */

  return (

    <section
      ref={sectionRef}
      className="can-section"
    >

      <div
        ref={pinRef}
        className="can-pin"
      >

        <div className="can-canvas">

          <Canvas

            camera={{
              position: [
                0,
                0,
                5.8,
              ],

              fov: 38,
            }}

            dpr={[1, 2]}

            gl={{
              antialias: true,

              alpha: true,

              powerPreference:
                "high-performance",
            }}

          >

            {/* =========================================
                LIGHTING
                ========================================= */}

            <ambientLight
              intensity={1.2}
            />


            <directionalLight
              position={[
                5,
                8,
                6,
              ]}
              intensity={2.5}
            />


            <directionalLight
              position={[
                -5,
                2,
                -4,
              ]}
              intensity={1}
            />


            <Environment
              preset="studio"
            />


            {/* =========================================
                CAN 1
                ========================================= */}

            <CanModel
              url={CAN_URLS[0]}
              state={
                canStates.current[0]
              }
            />


            {/* =========================================
                CAN 2
                ========================================= */}

            <CanModel
              url={CAN_URLS[1]}
              state={
                canStates.current[1]
              }
            />


            {/* =========================================
                CAN 3
                ========================================= */}

            <CanModel
              url={CAN_URLS[2]}
              state={
                canStates.current[2]
              }
            />


            {/* =========================================
                CAN 4
                ========================================= */}

            <CanModel
              url={CAN_URLS[3]}
              state={
                canStates.current[3]
              }
            />


            {/* =========================================
                CAN 5
                ========================================= */}

            <CanModel
              url={CAN_URLS[4]}
              state={
                canStates.current[4]
              }
            />


            {/* =========================================
                SHADOW
                ========================================= */}

            <ContactShadows

              position={[
                0,
                -1.6,
                0,
              ]}

              opacity={0}

              scale={7}

              blur={2.5}

              far={4}

            />

          </Canvas>

        </div>

      </div>

    </section>
  );
}