"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Continuous rotation
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x += 0.002;

    // Subtle size pulsing
    const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <MeshDistortMaterial
        color="#4F46E5"
        envMapIntensity={0.4}
        clearcoat={0.8}
        clearcoatRoughness={0}
        metalness={0.2}
        distort={0.4}
        speed={0.5}
      />
    </mesh>
  );
}

export default function HeroModel() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="h-full w-full"
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Model />
          </Float>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
