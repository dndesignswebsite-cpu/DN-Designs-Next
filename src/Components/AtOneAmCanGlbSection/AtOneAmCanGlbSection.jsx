"use client";

import React, {
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";

import {
  Canvas,
  useFrame,
  useThree,
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

const CAN_URLS = [
  "https://cdn.shopify.com/3d/models/f2514ce3b662efef/single_can_.glb",
  "https://cdn.shopify.com/3d/models/483e157d6df7309e/can2_.glb",
  "https://cdn.shopify.com/3d/models/f2514ce3b662efef/single_can_.glb",
  "https://cdn.shopify.com/3d/models/f2514ce3b662efef/single_can_.glb",
  "https://cdn.shopify.com/3d/models/f2514ce3b662efef/single_can_.glb",
];


/* =========================================================
   PRELOAD GLB
   ========================================================= */

CAN_URLS.forEach((url) => {
  useGLTF.preload(url);
});


/* =========================================================
   MODEL ORIENTATION
   ========================================================= */

const MODEL_ROTATION_OFFSET = {
  x: Math.PI / 2 + Math.PI,
  y: 0,
  z: Math.PI,
};


/* =========================================================
   MODEL SIZE
   ========================================================= */

const TARGET_HEIGHT = 2.8;


/* =========================================================
   CAN TEXT CONTENT
   ========================================================= */

const CAN_TEXTS = [

  /* =======================================================
     CAN 1
     ======================================================= */

  {
    leftEyebrow: "Pre-Trade Energy",

    leftTitle: "SOLANA SPLASH",

    leftSubTitle:
      "330ml with Zero Sugar",

    rightTitle:
      "INTRODUCTION TO DRINK",

    rightDescription:
      "Solana Splash by HydroFlow is the world's first tokenized energy drink, blending cutting-edge blockchain innovation with peak performance. Designed for the modern trader, Solana Splash combines refreshing taste with tokenized transparency, redefining how you hydrate and energize.",
  },


  /* =======================================================
     CAN 2
     ======================================================= */

  {
    leftEyebrow: "Performance Energy",

    leftTitle: "SOLANA SPLASH",

    leftSubTitle:
      "330ml with Zero Sugar",

    rightTitle:
      "BUILT FOR PERFORMANCE",

    rightDescription:
      "A refreshing energy experience designed for people who move fast. Solana Splash combines modern performance with a bold new approach to everyday hydration.",
  },


  /* =======================================================
     CAN 3
     ======================================================= */

  {
    leftEyebrow: "Next Generation",

    leftTitle: "SOLANA SPLASH",

    leftSubTitle:
      "330ml with Zero Sugar",

    rightTitle:
      "THE NEW ENERGY",

    rightDescription:
      "A new generation of energy drinks created around a modern digital lifestyle. Every detail is designed to feel fresh, simple and unmistakably different.",
  },


  /* =======================================================
     CAN 4
     ======================================================= */

  {
    leftEyebrow: "Modern Hydration",

    leftTitle: "SOLANA SPLASH",

    leftSubTitle:
      "330ml with Zero Sugar",

    rightTitle:
      "REFRESH & ENERGIZE",

    rightDescription:
      "Refresh your routine with a drink designed to keep up with your day. Clean visual language, bold flavor and a modern energy experience come together in one can.",
  },


  /* =======================================================
     CAN 5
     ======================================================= */

  {
    leftEyebrow: "Final Experience",

    leftTitle: "SOLANA SPLASH",

    leftSubTitle:
      "330ml with Zero Sugar",

    rightTitle:
      "THE COMPLETE EXPERIENCE",

    rightDescription:
      "Solana Splash brings together energy, hydration and a forward-thinking identity. A drink made for the modern world and designed to stand out from every angle.",
  },

];


/* =========================================================
   SINGLE CAN MODEL
   ========================================================= */

function CanModel({
  url,
  state,
}) {

  const { scene } = useGLTF(url);

  const { size } = useThree();

  const pivotRef =
    useRef(null);

  const modelRef =
    useRef(null);

  const correctionRef =
    useRef(null);

  const normalizedRef =
    useRef(false);


  /* =======================================================
     CLONE GLB
     ======================================================= */

  const clonedScene = useMemo(() => {

    const clone =
      scene.clone(true);


    clone.traverse((child) => {

      if (!child.isMesh) {
        return;
      }


      child.castShadow = true;

      child.receiveShadow = true;


      if (child.material) {

        /*
         * Independent material for
         * every can.
         */

        child.material =
          child.material.clone();


        /*
         * Required for opacity control.
         */

        child.material.transparent =
          true;


        /*
         * Hidden cans must not interfere
         * with the visible can.
         */

        child.material.depthWrite =
          false;

        child.material.depthTest =
          true;

      }

    });


    return clone;

  }, [scene]);


  /* =======================================================
     NORMALIZE + TRUE CENTER
     ======================================================= */

  useLayoutEffect(() => {

    if (!modelRef.current) {
      return;
    }

    if (!correctionRef.current) {
      return;
    }

    if (normalizedRef.current) {
      return;
    }


    /* -------------------------------------------------------
       RESET
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


    const modelSize =
      new THREE.Vector3();

    const center =
      new THREE.Vector3();


    box.getSize(
      modelSize
    );


    box.getCenter(
      center
    );


    /* -------------------------------------------------------
       MAX DIMENSION
       ------------------------------------------------------- */

    const maxDimension =
      Math.max(
        modelSize.x,
        modelSize.y,
        modelSize.z
      );


    if (
      !Number.isFinite(
        maxDimension
      ) ||
      maxDimension <= 0
    ) {
      return;
    }


    /* -------------------------------------------------------
       NORMALIZED SCALE
       ------------------------------------------------------- */

    const normalizedScale =
      TARGET_HEIGHT /
      maxDimension;


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
      -center.x *
        normalizedScale,

      -center.y *
        normalizedScale,

      -center.z *
        normalizedScale
    );


    modelRef.current.updateMatrixWorld(
      true
    );


    normalizedRef.current =
      true;

  }, [clonedScene]);


  /* =======================================================
     THREE FRAME
     ======================================================= */

  useFrame(() => {

    if (!pivotRef.current) {
      return;
    }


    /* =====================================================
       ROTATION
       ===================================================== */

    pivotRef.current.rotation.x =
      state.rotationX;

    pivotRef.current.rotation.y =
      state.rotationY;

    /*
     * Z remains locked.
     */

    pivotRef.current.rotation.z =
      0;


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
       RESPONSIVE SCALE
       ===================================================== */

    let responsiveScale = 1;


    if (size.width >= 1200) {

      responsiveScale = 1;

    } else if (size.width >= 769) {

      responsiveScale = 0.86;

    } else {

      responsiveScale = 0.68;

    }


    pivotRef.current.scale.setScalar(
      responsiveScale
    );


    /* =====================================================
       OPACITY
       ===================================================== */

    const opacity =
      state.opacity;


    clonedScene.traverse(
      (child) => {

        if (!child.isMesh) {
          return;
        }

        if (!child.material) {
          return;
        }


        /* -------------------------------------------------
           MULTIPLE MATERIALS
           ------------------------------------------------- */

        if (
          Array.isArray(
            child.material
          )
        ) {

          child.material.forEach(
            (material) => {

              material.transparent =
                true;

              material.opacity =
                opacity;

              material.depthWrite =
                opacity > 0.99;

            }
          );


        /* -------------------------------------------------
           SINGLE MATERIAL
           ------------------------------------------------- */

        } else {

          child.material.transparent =
            true;

          child.material.opacity =
            opacity;

          child.material.depthWrite =
            opacity > 0.99;

        }

      }
    );

  });


  return (

    <group
      ref={pivotRef}
    >

      <group
        ref={modelRef}
      >

        <group
          ref={correctionRef}
        >

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
     TEXT REFS
     ======================================================= */

  const textRefs =
    useRef([]);


  /* =======================================================
     CAN STATES
     ======================================================= */

  const canStates =
    useRef([

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


    if (
      !section ||
      !pin
    ) {
      return;
    }


    const ctx =
      gsap.context(
        () => {


          /* =================================================
             RESET CAN STATES
             ================================================= */

          canStates.current.forEach(
            (
              state,
              index
            ) => {

              state.rotationX =
                0;

              state.rotationY =
                0;

              state.positionX =
                0;

              state.positionY =
                0;

              state.positionZ =
                0;

              state.opacity =
                index === 0
                  ? 1
                  : 0;

            }
          );


          /* =================================================
             RESET TEXT
             ================================================= */

          textRefs.current.forEach(
            (
              item,
              index
            ) => {

              if (!item) {
                return;
              }


              gsap.set(
                item.left,
                {
                  opacity:
                    index === 0
                      ? 1
                      : 0,

                  y: 0,
                }
              );


              gsap.set(
                item.right,
                {
                  opacity:
                    index === 0
                      ? 1
                      : 0,

                  y: 0,
                }
              );

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
             CAN SEQUENCE
             ================================================= */

          canStates.current.forEach(
            (
              currentCan,
              index
            ) => {


              /* =============================================
                 FULL X + Y ROTATION
                 ============================================= */

              timeline.to(
                currentCan,
                {

                  /*
                   * One complete X flip.
                   */

                  rotationX:
                    Math.PI * 2,

                  /*
                   * One complete Y rotation.
                   */

                  rotationY:
                    Math.PI * 2,

                  duration:
                    1.25,

                  ease:
                    "power1.inOut",

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


                const currentText =
                  textRefs.current[
                    index
                  ];


                const nextText =
                  textRefs.current[
                    index + 1
                  ];


                /* =========================================
                   IMPORTANT CAN TRANSITION
                   =========================================

                   The next can starts rotating at the
                   EXACT SAME TIME as the current can.

                   It stays invisible while rotating.

                   Because both cans use the SAME rotation
                   duration + SAME easing, their orientation
                   is identical throughout the animation.

                   During the final 0.25 seconds we simply
                   crossfade them.

                   This makes the model swap almost invisible.
                   ========================================= */


                /*
                 * Start next can from zero.
                 */

                nextCan.rotationX = 0;
                nextCan.rotationY = 0;


                /*
                 * Next can stays invisible.
                 */

                nextCan.opacity = 0;


                /* =========================================
                   NEXT CAN ROTATION
                   =========================================

                   IMPORTANT:

                   This starts at the SAME TIMELINE POSITION
                   as the current can rotation.

                   So both cans rotate together.

                   The next can is simply hidden until the
                   final part of the rotation.
                   ========================================= */

                timeline.to(
                  nextCan,
                  {

                    rotationX:
                      Math.PI * 2,

                    rotationY:
                      Math.PI * 2,

                    duration:
                      1.25,

                    ease:
                      "power1.inOut",

                  },
                  "<"
                );


                /* =========================================
                   CAN CROSSFADE

                   Starts during the LAST 0.25 SECOND
                   of the rotation.

                   At this point both cans are already
                   almost at the exact same angle.
                   ========================================= */

                timeline.to(
                  currentCan,
                  {

                    opacity: 0,

                    duration:
                      0,

                    ease:
                      "power2.inOut",

                  },
                  "-=0.45"
                );


                timeline.to(
                  nextCan,
                  {

                    opacity: 1,

                    duration:
                      0,

                    ease:
                      "power2.inOut",

                  },
                  "<"
                );


                /* =========================================
                   LEFT TEXT OUT
                   ========================================= */

                if (
                  currentText?.left
                ) {

                  timeline.to(
                    currentText.left,
                    {

                      opacity: 0,

                      y: 0,

                      duration:
                        0.18,

                      ease:
                        "power2.inOut",

                    },
                    "<"
                  );

                }


                /* =========================================
                   RIGHT TEXT OUT
                   ========================================= */

                if (
                  currentText?.right
                ) {

                  timeline.to(
                    currentText.right,
                    {

                      opacity: 0,

                      y: 0,

                      duration:
                        0.18,

                      ease:
                        "power2.inOut",

                    },
                    "<"
                  );

                }


                /* =========================================
                   LEFT TEXT IN
                   ========================================= */

                if (
                  nextText?.left
                ) {

                  timeline.to(
                    nextText.left,
                    {

                      opacity: 1,

                      y: 0,

                      duration:
                        0.18,

                      ease:
                        "power2.inOut",

                    },
                    "<"
                  );

                }


                /* =========================================
                   RIGHT TEXT IN
                   ========================================= */

                if (
                  nextText?.right
                ) {

                  timeline.to(
                    nextText.right,
                    {

                      opacity: 1,

                      y: 0,

                      duration:
                        0.18,

                      ease:
                        "power2.inOut",

                    },
                    "<"
                  );

                }


                /* =========================================
                   RESET NEXT CAN

                   Both cans have now reached 2PI.

                   2PI and 0 are visually identical.

                   Reset happens AFTER the crossfade.
                   ========================================= */

                timeline.set(
                  nextCan,
                  {

                    rotationX: 0,

                    rotationY: 0,

                  }
                );

              }

            }
          );


          /* =================================================
             SCROLLTRIGGER
             ================================================= */

          ScrollTrigger.create({

            trigger:
              section,

            start:
              "top top",

            end:
              "+=500%",

            pin:
              pin,

            pinSpacing:
              true,

            scrub:
              0.9,

            animation:
              timeline,

            anticipatePin:
              1,

            invalidateOnRefresh:
              true,

          });


          /* =================================================
             INITIAL REFRESH
             ================================================= */

          requestAnimationFrame(
            () => {

              requestAnimationFrame(
                () => {

                  ScrollTrigger.refresh(
                    true
                  );

                }
              );

            }
          );

        },

        section
      );


    /* =====================================================
       RESIZE
       ===================================================== */

    const handleResize =
      () => {

        ScrollTrigger.refresh(
          true
        );

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


        {/* =================================================
            LEFT INFORMATION
            ================================================= */}

        <div
          className="can-info-wrapper"
        >

          {CAN_TEXTS.map(
            (
              content,
              index
            ) => (

              <div
                key={
                  `left-${index}`
                }

                ref={(el) => {

                  if (
                    !textRefs.current[
                      index
                    ]
                  ) {

                    textRefs.current[
                      index
                    ] = {
                      left: null,
                      right: null,
                    };

                  }


                  textRefs.current[
                    index
                  ].left = el;

                }}

                className="can-left-info"
              >

                <div
                  className="can-eyebrow"
                >
                  {
                    content.leftEyebrow
                  }
                </div>


                <h2
                  className="can-title"
                >
                  {
                    content.leftTitle
                  }
                </h2>


                <div
                  className="can-subtitle"
                >
                  {
                    content.leftSubTitle
                  }
                </div>

              </div>

            )
          )}

        </div>


        {/* =================================================
            RIGHT INFORMATION
            ================================================= */}

        <div
          className="can-description-wrapper"
        >

          {CAN_TEXTS.map(
            (
              content,
              index
            ) => (

              <div
                key={
                  `right-${index}`
                }

                ref={(el) => {

                  if (
                    !textRefs.current[
                      index
                    ]
                  ) {

                    textRefs.current[
                      index
                    ] = {
                      left: null,
                      right: null,
                    };

                  }


                  textRefs.current[
                    index
                  ].right = el;

                }}

                className="can-right-info"
              >

                <h3
                  className="can-description-title"
                >
                  {
                    content.rightTitle
                  }
                </h3>


                <p
                  className="can-description"
                >
                  {
                    content.rightDescription
                  }
                </p>

              </div>

            )
          )}

        </div>


        {/* =================================================
            THREE.JS CANVAS
            ================================================= */}

        <div
          className="can-canvas"
        >

          <Canvas
            camera={{
              position: [
                0,
                0,
                5.8,
              ],

              fov: 38,
            }}

            dpr={[
              1,
              2,
            ]}

            gl={{
              antialias: true,

              alpha: true,

              powerPreference:
                "high-performance",
            }}
          >


            {/* =============================================
                LIGHTING
                ============================================= */}

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


            {/* =============================================
                CAN 1
                ============================================= */}

            <CanModel
              url={
                CAN_URLS[0]
              }

              state={
                canStates.current[0]
              }
            />


            {/* =============================================
                CAN 2
                ============================================= */}

            <CanModel
              url={
                CAN_URLS[1]
              }

              state={
                canStates.current[1]
              }
            />


            {/* =============================================
                CAN 3
                ============================================= */}

            <CanModel
              url={
                CAN_URLS[2]
              }

              state={
                canStates.current[2]
              }
            />


            {/* =============================================
                CAN 4
                ============================================= */}

            <CanModel
              url={
                CAN_URLS[3]
              }

              state={
                canStates.current[3]
              }
            />


            {/* =============================================
                CAN 5
                ============================================= */}

            <CanModel
              url={
                CAN_URLS[4]
              }

              state={
                canStates.current[4]
              }
            />


            {/* =============================================
                CONTACT SHADOW
                ============================================= */}

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