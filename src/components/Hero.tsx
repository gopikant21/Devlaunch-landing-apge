"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import the 3D model component to prevent SSR issues
const HeroModel = dynamic(() => import("./HeroModel"), { ssr: false });

const Hero = () => {
  const glowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Add new mouse interaction effect
  const mouseInteractionVariants = {
    default: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5 },
  };

  const techStack = [
    { name: "react", color: "#61DAFB" },
    { name: "next", color: "#000000" },
    { name: "typescript", color: "#3178C6" },
    { name: "tailwind", color: "#38B2AC" },
    { name: "node", color: "#339933" },
    { name: "mongodb", color: "#47A248" },
    { name: "firebase", color: "#FFCA28" },
    { name: "aws", color: "#FF9900" },
    { name: "docker", color: "#2496ED" },
  ];

  // Add these variants near the top with other variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const glitchVariants = {
    animate: {
      textShadow: [
        "0 0 0 #4F46E5",
        "2px 2px 0 #4F46E5",
        "-2px -2px 0 #4F46E5",
        "0 0 0 #4F46E5",
      ],
      x: [0, 2, -2, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: 5,
      },
    },
  };

  // Add state for particles
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>(
    []
  );

  // Initialize particles after component mounts
  useEffect(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1000;
    const height = typeof window !== "undefined" ? window.innerHeight : 1000;

    setParticles(
      [...Array(20)].map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900" />
      </div>

      {/* 3D Model */}
      <HeroModel />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] z-0" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
            rotate: [0, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [360, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/30 to-emerald-500/30 blur-3xl"
        />
      </div>

      {/* Animated Grid Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E5_1px,transparent_1px),linear-gradient(to_bottom,#4F46E5_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* Glowing Orbs */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
      />

      {/* Interactive Particles */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{ x: particle.x, y: particle.y }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Interactive Decorative Elements */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <motion.div
          variants={mouseInteractionVariants}
          initial="default"
          whileHover="hover"
          className="w-32 h-32 relative cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg backdrop-blur-xl border border-white/10" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              className="w-12 h-12 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Tech Stack Icons */}
      <div className="absolute bottom-20 left-20 hidden lg:block">
        <div className="grid grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gray-800/50 rounded-xl backdrop-blur-sm flex items-center justify-center cursor-pointer border border-gray-700/50 group"
            >
              <motion.img
                src={`/icons/${tech.name}.svg`}
                alt={tech.name}
                className="w-6 h-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -top-8 px-2 py-1 bg-gray-800 rounded text-xs text-white whitespace-nowrap"
                style={{ color: tech.color }}
              >
                {tech.name.charAt(0).toUpperCase() + tech.name.slice(1)}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Update CTA section with interactive elements */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-400 cursor-pointer"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.span>
        <motion.svg
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-5"
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
        </motion.svg>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <motion.span
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-flex items-center gap-1.5"
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-blue-400"
              />
              Now Available for Projects
            </motion.span>
          </motion.div>

          {/* Main Heading with Enhanced Effects */}
          <motion.h1 className="mt-8 text-5xl md:text-7xl font-clash font-bold text-white tracking-tighter relative">
            {["Transform", "Your", "Ideas", "Into"].map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="inline-block mr-4"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 7px #4F46E5",
                      "0 0 10px #4F46E5",
                      "0 0 21px #4F46E5",
                      "0 0 42px #4F46E5",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 text-transparent bg-clip-text bg-[size:400%_100%] block mt-2"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["200% 0%", "0% 0%", "-200% 0%"],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="inline-block"
              >
                Digital Reality
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Description with Enhanced Effects */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {["We", "craft", "cutting-edge", "software", "solutions"].map(
              (word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="inline-block mx-1"
                >
                  <motion.span
                    variants={glitchVariants}
                    animate="animate"
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </motion.span>
              )
            )}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="inline-block ml-1"
            >
              that bring your vision to life.
            </motion.span>
          </motion.p>

          {/* CTA Buttons with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-xl font-medium relative group overflow-hidden"
            >
              <motion.span
                initial={{ y: "100%" }}
                whileHover={{ y: "0%" }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600"
              />
              <span className="relative">Get Started</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-xl font-medium border border-gray-800 relative group overflow-hidden"
            >
              <motion.span
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"
              />
              <span className="relative flex items-center gap-2">
                Learn More
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
