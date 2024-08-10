"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  console.log("model", scene);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime(); // Rotate model around its own Y-axis
    }
  });

  return (
    <group ref={meshRef} position={[-15, 0, -7.5]}>
      <primitive object={scene} />
    </group>
  );
}

export default function ThreeDComponent({ modelUrl }) {
  return (
    <div style={{ width: "800px", height: "200px" }}>
      <Canvas camera={{ position: [30, 10,15], fov: 50 }}>
        <ambientLight intensity={1} />
        <spotLight position={[70, 10, 30]} angle={1} penumbra={1} intensity={1}/>
        {/* <pointLight position={[0, 0, 0]} /> */}
        <Suspense fallback={"Loading..."}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
