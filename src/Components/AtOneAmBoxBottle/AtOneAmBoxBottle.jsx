"use client";

import React, { Suspense, useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AtOneAmBoxBottle.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   3D ASSET URLS
========================================================= */
const BOX_URL = "https://cdn.shopify.com/3d/models/4dc2e972f7a47c32/old_chest.glb";
const BOTTLE_URL = "https://cdn.shopify.com/3d/models/95022ae7c4b1c0a8/Green.glb";

/* =========================================================
   BOX MODEL COMPONENT
========================================================= */
function BoxModel({ boxRef, mixerRef, actionRef, onLoaded }) {
  const { scene, animations } = useGLTF(BOX_URL);

  useEffect(() => {
    if (!scene) return;

    boxRef.current = scene;
    scene.scale.set(0.65, 0.65, 0.65);
    scene.position.set(0, -0.85, 0);

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    if (animations && animations.length > 0) {
      const mixer = new THREE.AnimationMixer(scene);
      mixerRef.current = mixer;

      const clip = animations[0];
      const action = mixer.clipAction(clip);
      action.reset();
      action.play();
      action.paused = true;
      action.time = 0;
      actionRef.current = action;
    }

    onLoaded("box");

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
      mixerRef.current = null;
      actionRef.current = null;
    };
  }, [scene, animations, boxRef, mixerRef, actionRef, onLoaded]);

  return <primitive object={scene} />;
}

/* =========================================================
   BOTTLE MODEL COMPONENT
========================================================= */
function BottleModel({ bottleRef, onLoaded }) {
  const { scene } = useGLTF(BOTTLE_URL);

  useEffect(() => {
    if (!scene) return;

    bottleRef.current = scene;

    /* -----------------------------------------------------
       INITIAL POSITION & ROTATION (Lying Flat Inside Box)
       - rotation.x = -Math.PI / 2 (Bottle leti hui hai)
       - y = -0.72 (Box ke base par deeply fitted)
    ----------------------------------------------------- */
    scene.position.set(0, -0.72, -0.05);
    scene.rotation.set(-Math.PI / 2, 0, 0);
    scene.scale.set(0.6, 0.6, 0.6);

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    onLoaded("bottle");
  }, [scene, bottleRef, onLoaded]);

  return <primitive object={scene} />;
}

/* =========================================================
   PRODUCT SCENE & GSAP TIMELINE
========================================================= */
function ProductScene() {
  const boxRef = useRef(null);
  const bottleRef = useRef(null);
  const mixerRef = useRef(null);
  const actionRef = useRef(null);

  const [boxLoaded, setBoxLoaded] = useState(false);
  const [bottleLoaded, setBottleLoaded] = useState(false);

  const { camera } = useThree();
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));

  const handleLoaded = useCallback((type) => {
    if (type === "box") setBoxLoaded(true);
    if (type === "bottle") setBottleLoaded(true);
  }, []);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    camera.lookAt(cameraTarget.current);
  });

  useEffect(() => {
    if (!boxLoaded || !bottleLoaded || !actionRef.current || !bottleRef.current || !boxRef.current) {
      return;
    }

    const box = boxRef.current;
    const bottle = bottleRef.current;
    const action = actionRef.current;

    /* -----------------------------------------------------
       INITIAL STATE BEFORE SCROLL
    ----------------------------------------------------- */
    // Top-front closed box view
    camera.position.set(0, 2.0, 5.2);
    cameraTarget.current.set(0, -0.3, 0);
    camera.lookAt(cameraTarget.current);

    // Box initial reset
    gsap.set(box.position, { x: 0, y: -0.85, z: 0 });
    action.reset();
    action.play();
    action.paused = true;
    action.time = 0;

    // Bottle initial reset: Lying completely flat inside box
    gsap.set(bottle.position, { x: 0, y: -0.72, z: 0.8 });
    gsap.set(bottle.rotation, { x: -Math.PI / 2, y: 0, z: 0 });
    gsap.set(bottle.scale, { x: 0.4, y: 0.4, z: 0.4 });

    /* -----------------------------------------------------
       MASTER TIMELINE
    ----------------------------------------------------- */
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".at-one-am-box-bottle",
          start: "top top",
          end: "+=5000",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const boxProgress = { value: 0 };
      const duration = action.getClip().duration;

      /* ===================================================
         PHASE 1: BOX OPENS (0.0s - 2.0s)
         - Box opens while camera moves up to see inside
         - Bottle strictly remains inside & flat
      =================================================== */
      tl.to(
        boxProgress,
        {
          value: 1,
          duration: 2.0,
          ease: "power1.inOut",
          onUpdate: () => {
            if (action) {
              action.time = boxProgress.value * duration;
            }
          },
        },
        0
      );

      // Camera rises to top/inside view
      tl.to(
        camera.position,
        {
          x: 0.8,
          y: 3.8,
          z: 4.2,
          duration: 2.0,
          ease: "power2.inOut",
        },
        0
      );

      tl.to(
        cameraTarget.current,
        {
          x: 0,
          y: -0.4,
          z: 0.1,
          duration: 2.0,
          ease: "power2.inOut",
        },
        0
      );

      /* ===================================================
         PHASE 2: BOTTLE STANDS UP & RISES (1.8s - 3.4s)
         - Lid opens -> Bottle tilts upwards from flat to standing
      =================================================== */
      tl.to(
        bottle.rotation,
        {
          x: 0, // Flat se standing position
          y: 0.2, // Subtle dynamic entry angle
          z: -0.1,
          duration: 1.6,
          ease: "power2.out",
        },
        1.8
      );

      tl.to(
        bottle.position,
        {
          x: 0,
          y: 0.6,
          z: 0.3,
          duration: 1.6,
          ease: "power2.out",
        },
        1.8
      );

      /* ===================================================
         PHASE 3: CAMERA PULL-BACK & HERO POSE (3.4s - 5.2s)
         - Camera moves back to eye level
         - Box moves down/sinks
         - Bottle scales to full hero size
      =================================================== */
      tl.to(
        camera.position,
        {
          x: 0,
          y: 1.3,
          z: 6.2,
          duration: 1.8,
          ease: "power2.inOut",
        },
        3.4
      );

      tl.to(
        cameraTarget.current,
        {
          x: 0,
          y: 0.8,
          z: 0,
          duration: 1.8,
          ease: "power2.inOut",
        },
        3.4
      );

      // Bottle floats up to center
      tl.to(
        bottle.position,
        {
          x: 0,
          y: 1.0,
          z: 0.6,
          duration: 1.8,
          ease: "power2.out",
        },
        3.4
      );

      // Straighten up
      tl.to(
        bottle.rotation,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        3.6
      );

      tl.to(
        bottle.scale,
        {
          x: 0.95,
          y: 0.95,
          z: 0.95,
          duration: 1.8,
          ease: "power2.out",
        },
        7
      );

      // Box sinks down smoothly
      tl.to(
        box.position,
        {
          y: -2.8,
          duration: 1.8,
          ease: "power2.inOut",
        },
        3.4
      );

      /* ===================================================
         PHASE 4: 360° SHOWCASE ROTATION (5.2s - 7.5s)
      =================================================== */
      tl.to(
        bottle.rotation,
        {
          y: "+=" + Math.PI * 2,
          duration: 2.3,
          ease: "none",
        },
        5.2
      );

      /* ===================================================
         PHASE 5: FINAL LOCK POSITION (7.5s - 8.2s)
      =================================================== */
      tl.to(
        bottle.position,
        {
          y: 0.85,
          duration: 0.7,
          ease: "power2.inOut",
        },
        7.5
      );
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [boxLoaded, bottleLoaded, camera]);

  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={2.6}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight position={[-5, 4, -4]} intensity={1.2} />
      <pointLight position={[0, 4, 3]} intensity={1.4} />

      <Environment preset="city" />

      <Suspense fallback={null}>
        <BoxModel
          boxRef={boxRef}
          mixerRef={mixerRef}
          actionRef={actionRef}
          onLoaded={handleLoaded}
        />
        <BottleModel bottleRef={bottleRef} onLoaded={handleLoaded} />
      </Suspense>
    </>
  );
}

/* =========================================================
   MAIN EXPORT COMPONENT
========================================================= */
export default function AtOneAmBoxBottle() {
  return (
    <section className="at-one-am-box-bottle">
      <div className="at-one-am-box-bottle__canvas">
        <Canvas
          camera={{
            position: [0, 2.0, 5.2],
            fov: 36,
          }}
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ProductScene />
        </Canvas>
      </div>
    </section>
  );
}

useGLTF.preload(BOX_URL);
useGLTF.preload(BOTTLE_URL);