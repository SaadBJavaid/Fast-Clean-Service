"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();
  const cameraRef = useRef();

  const light1Ref = useRef();
  const light2Ref = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime(); // Rotate model around its own Y-axis
    }
  });

  useFrame(({ camera }) => {
    if (cameraRef.current) {
      // Update light positions to follow the camera
      if (light1Ref.current) {
        light1Ref.current.position.set(camera.position.x + 50, camera.position.y - 35, camera.position.z - 20);
      }
      if (light2Ref.current) {
        light2Ref.current.position.set(camera.position.x - 50, camera.position.y - 35, camera.position.z + 20);
      }
    }
  });

  useEffect(() => {
    // Initialize lights
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    const light2 = new THREE.DirectionalLight(0xffffff, 0.8);

    light1Ref.current = light1;
    light2Ref.current = light2;

    scene.add(light1);
    scene.add(light2);

    // Clean up lights on component unmount
    return () => {
      scene.remove(light1);
      scene.remove(light2);
    };
  }, [scene]);

  return (
    <group ref={meshRef}>
      <primitive object={scene} position={[-16, -5, -7]} />
    </group>
  );
}

export default function ThreeDComponent({ modelUrl }) {
  return (
    <div style={{ maxWidth: "1400px", width: "1400px", height: "600px" }}>
      <Canvas camera={{ position: [15, 0, 15], fov: 50 }}>
        <ambientLight intensity={1} />
        <spotLight position={[100, 20, 10]} color={"0x80ff80"} angle={1} penumbra={1} intensity={1} />
        <pointLight position={[100, 20, 50]} />
        <Suspense fallback={"Loading..."}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
