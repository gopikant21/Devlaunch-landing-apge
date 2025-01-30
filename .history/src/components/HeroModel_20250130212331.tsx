"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion-3d";

function Model() {
  return (
    <mesh>
      <motion.mesh
        animate={{
          rotateY: [0, Math.PI * 2],
          rotateX: [0, Math.PI],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
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
      </motion.mesh>
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
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
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
