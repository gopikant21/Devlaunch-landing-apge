"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";

const AnimatedShape = () => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color="#4F46E5"
          emissive="#4F46E5"
          emissiveIntensity={0.5}
          roughness={0.5}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 px-4 sm:pt-32">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Suspense fallback={null}>
            <AnimatedShape />
            <Environment preset="city" />
          </Suspense>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Digital Ideas
              </span>{" "}
              Into Reality
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              We craft innovative software solutions that drive business growth
              and user engagement. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold"
              >
                Start Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 hover:border-white text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold"
              >
                Learn More
              </motion.button>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto lg:mx-0">
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">500+</h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  Projects Completed
                </p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">98%</h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  Client Satisfaction
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-2xl sm:text-3xl font-bold">24/7</h4>
                <p className="text-gray-400 text-sm sm:text-base">Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative h-[600px]">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <Suspense fallback={null}>
                  <AnimatedShape />
                  <Environment preset="city" />
                </Suspense>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={1}
                />
              </Canvas>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-gray-400"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
