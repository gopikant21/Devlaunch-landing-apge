"use client";
import { Canvas, useFrame, RootState } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  useGLTF,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
  Preload,
  Stars,
  Cloud,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

useGLTF.preload("/3d/town4new.glb");

function Model() {
  const { scene } = useGLTF("/3d/town4new.glb");

  const modelRef = useRef<THREE.Group>(null);

  useFrame((state: RootState) => {
    if (!modelRef.current) return;
    modelRef.current.rotation.y += 0.002;
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={2} position={[0, 0, 0]} />
    </group>
  );
}

function FuturisticBackground() {
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Cloud opacity={0.5} speed={0.4} segments={20} position={[0, 5, -10]} />
      <mesh position={[0, 0, -10]} rotation={[0, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#000000"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </>
  );
}

export default function HeroModel() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="h-full w-full"
      >
        {/* Environment and Lighting */}
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 30]} />
        <Environment preset="night" />

        {/* Futuristic Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[0, 5, 5]}
          intensity={0.5}
          color="#4F46E5"
        />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#4F46E5" />
        <pointLight position={[10, 10, 5]} intensity={1} color="#06B6D4" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          color="#06B6D4"
        />

        <Suspense fallback={null}>
          <FuturisticBackground />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Model />
          </Float>
          <Preload all />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
