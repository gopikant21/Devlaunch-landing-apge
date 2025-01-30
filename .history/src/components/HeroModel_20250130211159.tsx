"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  // Replace with your 3D model path
  const { scene } = useGLTF("/3d/robot.glb");
  return <primitive object={scene} scale={2} />;
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
          <Float
            speed={1.5}
            rotationIntensity={1}
            floatIntensity={2}
          >
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