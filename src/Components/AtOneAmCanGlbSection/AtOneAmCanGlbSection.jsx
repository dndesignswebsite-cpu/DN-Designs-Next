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
import AtOneAmSmoothScroll from "../AtOneAmSmoothScroll/AtOneAmSmoothScroll";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   CAN URLS
   ========================================================= */

const CAN_URLS = [
  "https://cdn.shopify.com/3d/models/4736f120088f934d/white-can.glb",
  "https://cdn.shopify.com/3d/models/23b63ce912d63061/green-can-webp.glb",
  "https://cdn.shopify.com/3d/models/63f965b2f7f54f83/purple-can.glb",
  "https://cdn.shopify.com/3d/models/c6ce06913493cb12/dark-blue-draco.glb",
  "https://cdn.shopify.com/3d/models/0b915d17c4a51689/brown-can-draco.glb",
];


/* =========================================================
   PRELOAD
   ========================================================= */

CAN_URLS.forEach((url) => {
  useGLTF.preload(url);
});


/* =========================================================
   MODEL SETTINGS
   ========================================================= */

const TARGET_HEIGHT = 2.8;

const MODEL_SCALE_MULTIPLIER = 1;


/* =========================================================
   HIGHLIGHT SETTINGS
   ========================================================= */

/*
 * Keep this relatively low so the can stays glossy.
 *
 * 0.25 = more glossy
 * 0.35 = balanced
 * 0.45 = softer
 * 0.65 = matte
 */

const MODEL_ROUGHNESS = 0.35;


/*
 * Physical materials support specularIntensity.
 *
 * Lower value = less sharp white highlight.
 */

const MODEL_SPECULAR_INTENSITY = 0.15;


/* =========================================================
   CAN TEXT
   ========================================================= */

const CAN_TEXTS = [

  {
    leftEyebrow: "Function With Attitude",

    leftTitle: "BREWED PROTEIN",

    leftSubTitle:
      "Built For More",

    rightTitle:
      "Branding With More Kick",

    rightDescription:
      "The oversized “BREWED PROTEIN” typography turns the functional proposition into the visual hero, with 18g protein reinforcing the product’s performance-led positioning. The cream-and-blue palette adds distinction, while handwritten “Coffee” brings back the playful 1:AM character. ",
  },


  {
    leftEyebrow: "A New Take On Classic ",

    leftTitle: "Lactose-Free Classic ",

    leftSubTitle:
      "Same Classic. New Rules",

    rightTitle:
      "Distinct Yet Familiar",

    rightDescription:
      "The teal-and-cream palette gives the variant a distinct visual identity. More importantly, the oversized “LACTOSE FREE” puts the key product benefit front and centre, while the vertical “CLASSIC” badge keeps the flavour immediately identifiable.",
  },


    {
    leftEyebrow: "A Richer Shade Of Indulgence ",

    leftTitle: "Lactose-Free Hazelnut",

    leftSubTitle:
      "Deep Flavour. Deeper Purple. ",

    rightTitle:
      "Premium, With Personality ",

    rightDescription:
      "The deep purple palette gives Hazelnut the most distinctive colour territory in the range, creating a richer, more premium feel. The vertical “HAZELNUT” badge makes the flavour easy to spot, while the warm accents add a subtle sense of indulgence.",
  },

  {
    leftEyebrow: "Bold By Design",

    leftTitle: "CLASSIC COLD",

    leftSubTitle:
      "Made For 1 AM",

    rightTitle:
      "Vibrant Coffee Branding ",

    rightDescription:
      "The blue-and-orange palette lends a bright, energetic presence, while the oversized “CLASSIC COLD” makes the core product instantly recognisable. The handwritten “Coffee” feels playful and human, while the orange coffee-bean graphic introduces a subtle category cue.",
  },

   {
    leftEyebrow: "Richness, Reimagined",

    leftTitle: "Lactose-Free Mocha",

    leftSubTitle:
      "Made For Indulgence",

    rightTitle:
      "A Richer Identity ",

    rightDescription:
      "The warm mocha-brown palette visually cues the richer flavour profile, giving it a more indulgent personality. The vertical “MOCHA” badge clearly indicates the flavour, while the dominant Lactose-Free messaging keeps the product’s key distinction impossible to miss.",
  },

];


/* =========================================================
   MATERIAL HIGHLIGHT CONTROL
   ========================================================= */

function tuneMaterial(material) {

  if (!material) {
    return;
  }


  /*
   * Crossfade support.
   */

  material.transparent =
    true;

  material.depthWrite =
    false;

  material.depthTest =
    true;


  /*
   * -----------------------------------------
   * ROUGHNESS
   * -----------------------------------------
   *
   * Only slightly increase roughness.
   *
   * This keeps the can glossy.
   */

  if (
    "roughness" in material
  ) {

    material.roughness =
      MODEL_ROUGHNESS;

  }


  /*
   * -----------------------------------------
   * SPECULAR INTENSITY
   * -----------------------------------------
   *
   * Supported by MeshPhysicalMaterial.
   */

  if (
    "specularIntensity" in material
  ) {

    material.specularIntensity =
      MODEL_SPECULAR_INTENSITY;

  }


  /*
   * -----------------------------------------
   * CLEARCOAT
   * -----------------------------------------
   *
   * If the GLB has clearcoat, remove the
   * extra sharp reflection.
   */

  if (
    "clearcoat" in material
  ) {

    material.clearcoat =
      0;

  }


  if (
    "clearcoatRoughness" in material
  ) {

    material.clearcoatRoughness =
      1;

  }

}


/* =========================================================
   UNIVERSAL GLB NORMALIZER
   ========================================================= */

function buildNormalizedModel(scene) {

  const normalizedRoot =
    new THREE.Group();


  /*
   * Clone original GLB.
   */

  const clonedScene =
    scene.clone(true);


  /*
   * Calculate all world transforms.
   */

  clonedScene.updateMatrixWorld(
    true
  );


  /*
   * Collect meshes.
   */

  const meshes = [];


  clonedScene.traverse((child) => {

    if (!child.isMesh) {
      return;
    }

    meshes.push(child);

  });


  /*
   * No mesh.
   */

  if (meshes.length === 0) {

    return normalizedRoot;

  }


  /*
   * =======================================================
   * BAKE GLB TRANSFORMS
   * =======================================================
   */

  meshes.forEach((originalMesh) => {

    /*
     * Clone geometry.
     */

    const geometry =
      originalMesh.geometry.clone();


    /*
     * Bake complete world transform.
     */

    geometry.applyMatrix4(
      originalMesh.matrixWorld
    );


    /*
     * Clone mesh without children.
     */

    const mesh =
      originalMesh.clone(false);


    /*
     * Use baked geometry.
     */

    mesh.geometry =
      geometry;


    /*
     * =====================================================
     * MATERIALS
     * ===================================================== */

    if (
      Array.isArray(
        originalMesh.material
      )
    ) {

      mesh.material =
        originalMesh.material.map(
          (material) => {

            const clonedMaterial =
              material.clone();


            tuneMaterial(
              clonedMaterial
            );


            return clonedMaterial;

          }
        );

    }

    else if (
      originalMesh.material
    ) {

      mesh.material =
        originalMesh.material.clone();


      tuneMaterial(
        mesh.material
      );

    }


    /*
     * =====================================================
     * RESET TRANSFORM
     * ===================================================== */

    mesh.position.set(
      0,
      0,
      0
    );

    mesh.rotation.set(
      0,
      0,
      0
    );

    mesh.scale.set(
      1,
      1,
      1
    );


    /*
     * Shadows.
     */

    mesh.castShadow =
      true;

    mesh.receiveShadow =
      true;


    /*
     * Add to normalized root.
     */

    normalizedRoot.add(
      mesh
    );

  });


  /*
   * =======================================================
   * INITIAL BOUNDS
   * ======================================================= */

  normalizedRoot.updateMatrixWorld(
    true
  );


  const initialBox =
    new THREE.Box3().setFromObject(
      normalizedRoot
    );


  const initialSize =
    new THREE.Vector3();


  initialBox.getSize(
    initialSize
  );


  /*
   * =======================================================
   * AUTOMATIC UP AXIS
   * ======================================================= */

  const x =
    initialSize.x;

  const y =
    initialSize.y;

  const z =
    initialSize.z;


  /*
   * Already Y-up.
   */

  if (
    y >= x &&
    y >= z
  ) {

    normalizedRoot.rotation.set(
      0,
      0,
      0
    );

  }


  /*
   * X is longest.
   */

  else if (
    x >= y &&
    x >= z
  ) {

    normalizedRoot.rotation.set(
      0,
      0,
      Math.PI / 2
    );

  }


  /*
   * Z is longest.
   */

  else {

    normalizedRoot.rotation.set(
      -Math.PI / 2,
      0,
      0
    );

  }


  /*
   * Update.
   */

  normalizedRoot.updateMatrixWorld(
    true
  );


  /*
   * =======================================================
   * ORIENTED BOUNDS
   * ======================================================= */

  const orientedBox =
    new THREE.Box3().setFromObject(
      normalizedRoot
    );


  const orientedSize =
    new THREE.Vector3();


  const orientedCenter =
    new THREE.Vector3();


  orientedBox.getSize(
    orientedSize
  );


  orientedBox.getCenter(
    orientedCenter
  );


  /*
   * =======================================================
   * HEIGHT
   * ======================================================= */

  const actualHeight =
    orientedSize.y;


  if (
    !Number.isFinite(
      actualHeight
    ) ||
    actualHeight <= 0
  ) {

    return normalizedRoot;

  }


  const normalizedScale =
    (
      TARGET_HEIGHT /
      actualHeight
    ) *
    MODEL_SCALE_MULTIPLIER;


  /*
   * Scale.
   */

  normalizedRoot.scale.setScalar(
    normalizedScale
  );


  /*
   * =======================================================
   * TRUE CENTER
   * ======================================================= */

  normalizedRoot.position.set(

    -orientedCenter.x *
      normalizedScale,

    -orientedCenter.y *
      normalizedScale,

    -orientedCenter.z *
      normalizedScale

  );


  /*
   * Final update.
   */

  normalizedRoot.updateMatrixWorld(
    true
  );


  return normalizedRoot;
}


/* =========================================================
   CAN MODEL
   ========================================================= */

function CanModel({
  url,
  state,
}) {

  const { scene } =
    useGLTF(url);


  const { size } =
    useThree();


  /*
   * Animation pivot.
   */

  const pivotRef =
    useRef(null);


  /*
   * Normalize once.
   */

  const normalizedScene =
    useMemo(() => {

      return buildNormalizedModel(
        scene
      );

    }, [scene]);


  /*
   * =======================================================
   * FRAME
   * ======================================================= */

  useFrame(() => {

    if (!pivotRef.current) {
      return;
    }


    /*
     * -----------------------------------------
     * ROTATION
     * -----------------------------------------
     */

    pivotRef.current.rotation.x =
      state.rotationX;

    pivotRef.current.rotation.y =
      state.rotationY;

    pivotRef.current.rotation.z =
      0;


    /*
     * -----------------------------------------
     * POSITION
     * -----------------------------------------
     */

    pivotRef.current.position.x =
      state.positionX;

    pivotRef.current.position.y =
      state.positionY;

    pivotRef.current.position.z =
      state.positionZ;


    /*
     * -----------------------------------------
     * RESPONSIVE SCALE
     * -----------------------------------------
     */

    let responsiveScale = 1;


    if (
      size.width >= 1200
    ) {

      responsiveScale = 1;

    }

    else if (
      size.width >= 769
    ) {

      responsiveScale = 0.86;

    }

    else {

      responsiveScale = 0.68;

    }


    pivotRef.current.scale.setScalar(
      responsiveScale
    );


    /*
     * -----------------------------------------
     * OPACITY
     * -----------------------------------------
     */

    const opacity =
      state.opacity;


    normalizedScene.traverse(
      (child) => {

        if (!child.isMesh) {
          return;
        }


        if (!child.material) {
          return;
        }


        /*
         * Multiple materials.
         */

        if (
          Array.isArray(
            child.material
          )
        ) {

          child.material.forEach(
            (material) => {

              material.opacity =
                opacity;


              material.transparent =
                true;


              material.depthWrite =
                opacity > 0.99;


              material.depthTest =
                true;


              /*
               * Keep highlight tuning
               * active.
               */

              if (
                "roughness" in material
              ) {

                material.roughness =
                  MODEL_ROUGHNESS;

              }


              if (
                "specularIntensity" in
                material
              ) {

                material.specularIntensity =
                  MODEL_SPECULAR_INTENSITY;

              }


              if (
                "clearcoat" in material
              ) {

                material.clearcoat =
                  0;

              }


              if (
                "clearcoatRoughness" in
                material
              ) {

                material.clearcoatRoughness =
                  1;

              }

            }
          );

        }


        /*
         * Single material.
         */

        else {

          child.material.opacity =
            opacity;


          child.material.transparent =
            true;


          child.material.depthWrite =
            opacity > 0.99;


          child.material.depthTest =
            true;


          /*
           * Highlight tuning.
           */

          if (
            "roughness" in
            child.material
          ) {

            child.material.roughness =
              MODEL_ROUGHNESS;

          }


          if (
            "specularIntensity" in
            child.material
          ) {

            child.material.specularIntensity =
              MODEL_SPECULAR_INTENSITY;

          }


          if (
            "clearcoat" in
            child.material
          ) {

            child.material.clearcoat =
              0;

          }


          if (
            "clearcoatRoughness" in
            child.material
          ) {

            child.material.clearcoatRoughness =
              1;

          }

        }

      }
    );

  });


  return (

    <group
      ref={pivotRef}
    >

      <primitive
        object={normalizedScene}
      />

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


  const textRefs =
    useRef([]);


  /*
   * =======================================================
   * CAN STATES
   * ======================================================= */

  const canStates =
    useRef([

      {
        rotationX: 0,
        rotationY: 0,

        positionX: 0,
        positionY: 0,
        positionZ: 0,

        opacity: 1,
      },


      {
        rotationX: 0,
        rotationY: 0,

        positionX: 0,
        positionY: 0,
        positionZ: 0,

        opacity: 0,
      },


      {
        rotationX: 0,
        rotationY: 0,

        positionX: 0,
        positionY: 0,
        positionZ: 0,

        opacity: 0,
      },


      {
        rotationX: 0,
        rotationY: 0,

        positionX: 0,
        positionY: 0,
        positionZ: 0,

        opacity: 0,
      },


      {
        rotationX: 0,
        rotationY: 0,

        positionX: 0,
        positionY: 0,
        positionZ: 0,

        opacity: 0,
      },

    ]);


  /*
   * =======================================================
   * GSAP
   * ======================================================= */

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


          /*
           * -----------------------------------------------
           * RESET CAN STATES
           * -----------------------------------------------
           */

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


          /*
           * -----------------------------------------------
           * RESET TEXT
           * -----------------------------------------------
           */

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


          /*
           * -----------------------------------------------
           * MASTER TIMELINE
           * -----------------------------------------------
           */

          const timeline =
            gsap.timeline({

              paused: true,

              defaults: {
                ease: "none",
              },

            });


          /*
           * -----------------------------------------------
           * CAN SEQUENCE
           * -----------------------------------------------
           */

          canStates.current.forEach(
            (
              currentCan,
              index
            ) => {


              /*
               * FULL ROTATION
               */

              timeline.to(
                currentCan,
                {

                  rotationX:
                    Math.PI * 2,

                  rotationY:
                    Math.PI * 2,

                  duration:
                    1.25,

                  ease:
                    "power1.inOut",

                }
              );


              /*
               * NEXT CAN
               */

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


                /*
                 * Reset next can.
                 */

                nextCan.rotationX =
                  0;

                nextCan.rotationY =
                  0;

                nextCan.opacity =
                  0;


                /*
                 * Next can rotates simultaneously.
                 */

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


                /*
                 * -----------------------------------------
                 * CAN CROSSFADE
                 * -----------------------------------------
                 */

                timeline.to(
                  currentCan,
                  {

                    opacity:
                      0,

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

                    opacity:
                      1,

                    duration:
                      0,

                    ease:
                      "power2.inOut",

                  },
                  "<"
                );


                /*
                 * -----------------------------------------
                 * LEFT TEXT OUT
                 * -----------------------------------------
                 */

                if (
                  currentText?.left
                ) {

                  timeline.to(
                    currentText.left,
                    {

                      opacity:
                        0,

                      y: 0,

                      duration:
                        0.18,

                      ease:
                        "power2.inOut",

                    },
                    "<"
                  );

                }


                /*
                 * -----------------------------------------
                 * RIGHT TEXT OUT
                 * -----------------------------------------
                 */

                if (
                  currentText?.right
                ) {

                  timeline.to(
                    currentText.right,
                    {

                      opacity:
                        0,

                      y: 0,

                      duration:
                        0.18,

                      ease:
                        "power2.inOut",

                    },
                    "<"
                  );

                }


                /*
                 * -----------------------------------------
                 * LEFT TEXT IN
                 * -----------------------------------------
                 */

                if (
                  nextText?.left
                ) {

                  timeline.to(
                    nextText.left,
                    {

                      opacity:
                        1,

                      y: 0,

                      duration:
                        0.18,

                      ease:
                        "power2.inOut",

                    },
                    "<"
                  );

                }


                /*
                 * -----------------------------------------
                 * RIGHT TEXT IN
                 * -----------------------------------------
                 */

                if (
                  nextText?.right
                ) {

                  timeline.to(
                    nextText.right,
                    {

                      opacity:
                        1,

                      y: 0,

                      duration:
                        0.18,

                      ease:
                        "power2.inOut",

                    },
                    "<"
                  );

                }


                /*
                 * Reset rotation.
                 */

                timeline.set(
                  nextCan,
                  {

                    rotationX:
                      0,

                    rotationY:
                      0,

                  }
                );

              }

            }
          );


          /*
           * -----------------------------------------------
           * SCROLLTRIGGER
           * -----------------------------------------------
           */

          // ScrollTrigger.create({

          //   trigger:
          //     section,

          //   start:
          //     "top top",

          //   end:
          //     "+=500%",

          //   pin:
          //     pin,

          //   pinSpacing:
          //     true,

          //   scrub:
          //     0.9,

          //   animation:
          //     timeline,

          //   anticipatePin:
          //     1,

          //   invalidateOnRefresh:
          //     true,

          // });


          ScrollTrigger.create({
  trigger: section,

  start: "top top",

  end: "+=700%",

  pin: pin,

  pinSpacing: true,

  scrub: 2.5,

  animation: timeline,

  anticipatePin: 1,

  invalidateOnRefresh: true,
});


          /*
           * Initial refresh.
           */

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


    /*
     * Resize.
     */

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


    /*
     * Cleanup.
     */

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );


      ctx.revert();

    };

  }, []);


  /*
   * =======================================================
   * RENDER
   * ======================================================= */

  return (
<>

{/* <AtOneAmSmoothScroll/> */}
    <section
      ref={sectionRef}
      className="can-section"
    >

      <div
        ref={pinRef}
        className="can-pin"
      >


        {/* =================================================
            LEFT TEXT
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
            RIGHT TEXT
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
            THREE CANVAS
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


            {/* Soft global light */}

            <ambientLight
              intensity={0.8}
            />


            {/* Main key light */}

            <directionalLight

              position={[
                5,
                8,
                6,
              ]}

              intensity={2.0}

            />


            {/* Fill light */}

            <directionalLight

              position={[
                -5,
                2,
                -4,
              ]}

              intensity={1}

            />


            {/* Studio environment */}

            <Environment

              preset="studio"

              environmentIntensity={0.2}

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

    </>

  );

}