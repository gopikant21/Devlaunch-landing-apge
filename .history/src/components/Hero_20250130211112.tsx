"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Video */}
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
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 0 10px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-flex items-center gap-1.5"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-blue-400"
              />
              Now Available for Projects
            </motion.span>
          </motion.div>

          {/* Main Heading with Gradient Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-5xl md:text-7xl font-clash font-bold text-white tracking-tighter"
          >
            Transform Your Ideas Into
            <motion.span
              animate={{
                backgroundPosition: ["200% 0%", "0% 0%", "-200% 0%"],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 text-transparent bg-clip-text bg-[size:400%_100%] ml-4"
            >
              Digital Reality
            </motion.span>
          </motion.h1>

          {/* Description with Staggered Characters */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {/* Split text into characters for animation */}
            {"We craft cutting-edge software solutions that bring your vision to life."
              .split("")
              .map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.02,
                  }}
                >
                  {char}
                </motion.span>
              ))}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            {/* Primary Button */}
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

            {/* Secondary Button */}
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
