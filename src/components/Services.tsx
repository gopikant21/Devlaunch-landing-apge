"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Float } from "@react-three/drei";

const services = [
  {
    title: "Web Development",
    description: "Modern web applications with cutting-edge technologies",
    features: ["React/Next.js", "Progressive Web Apps", "E-commerce Solutions"],
    icon: "🌐",
    gradient: "from-blue-500/10 to-cyan-500/10",
    accentColor: "blue-400",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions",
    features: ["iOS & Android", "React Native", "Flutter Development"],
    icon: "📱",
    gradient: "from-purple-500/10 to-pink-500/10",
    accentColor: "purple-400",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure",
    features: ["AWS/Azure", "DevOps", "Microservices"],
    icon: "☁️",
    gradient: "from-cyan-500/10 to-teal-500/10",
    accentColor: "cyan-400",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions for your business",
    features: ["Data Analysis", "Predictive Models", "AI Integration"],
    icon: "🤖",
    gradient: "from-emerald-500/10 to-teal-500/10",
    accentColor: "emerald-400",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user experiences",
    features: ["User Research", "Wireframing", "Prototyping"],
    icon: "🎨",
    gradient: "from-zinc-500 to-zinc-400",
  },
  {
    title: "Blockchain",
    description: "Decentralized application development",
    features: ["Smart Contracts", "NFT Platforms", "DeFi Solutions"],
    icon: "⛓️",
    gradient: "from-slate-500 to-slate-400",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative min-w-[300px] sm:min-w-[340px] bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden border border-gray-700/30"
    >
      {/* Enhanced Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Futuristic Border Effect */}
      <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Animated Corner Accents */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-blue-500/30 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-purple-500/30 rounded-br-2xl" />

      {/* Content Container */}
      <motion.div className="relative z-10">
        {/* Enhanced Icon Container */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-[1px] mb-6 relative group-hover:shadow-lg group-hover:shadow-blue-500/20`}
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-xl group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div className="relative w-full h-full bg-gray-900/90 rounded-2xl flex items-center justify-center backdrop-blur-xl">
            <motion.span className="text-3xl filter drop-shadow-lg">
              {service.icon}
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Rest of the content with enhanced styling */}
        <motion.h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {service.title}
        </motion.h3>

        <motion.p className="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-300">
          {service.description}
        </motion.p>

        {/* Enhanced Features List */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex items-center text-gray-400 group-hover:text-gray-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-5 h-5 rounded-full bg-blue-500/10 mr-3 flex-shrink-0 flex items-center justify-center border border-blue-500/20"
              >
                <motion.svg
                  className="w-3 h-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Enhanced Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl relative overflow-hidden group/btn"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
          <div className="relative flex items-center justify-center gap-2">
            <span className="text-sm font-medium">Learn More</span>
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
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// Add 3D Model Component
function BackgroundModel() {
  const { scene } = useGLTF(
    "/3d/2022_bmw_g82_m4_adro_carbon_fiber_widebody_kit.glb"
  );
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <primitive
        object={scene}
        scale={2}
        position={[0, -2, -3]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </Float>
  );
}

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen py-20 overflow-hidden bg-gray-950"
    >
      {/* 3D Background with enhanced lighting */}
      <div className="absolute inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <color attach="background" args={["#000000"]} />
          <fog attach="fog" args={["#000000", 5, 15]} />

          {/* Enhanced Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[0, 5, 5]}
            intensity={1}
            color="#4F46E5"
            castShadow
          />
          <pointLight
            position={[-10, -10, -5]}
            intensity={1}
            color="#4F46E5"
            distance={20}
          />
          <pointLight
            position={[10, 10, 5]}
            intensity={1}
            color="#06B6D4"
            distance={20}
          />
          <spotLight
            position={[0, 10, 0]}
            angle={0.5}
            penumbra={1}
            intensity={2}
            color="#06B6D4"
            castShadow
          />

          <BackgroundModel />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Cyberpunk Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E510_1px,transparent_1px),linear-gradient(to_bottom,#4F46E510_1px,transparent_1px)] bg-[size:64px_64px]"
        />

        {/* Smaller Grid for Detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E508_1px,transparent_1px),linear-gradient(to_bottom,#4F46E508_1px,transparent_1px)] bg-[size:16px_16px]"
        />

        {/* Enhanced Glowing Orbs */}
        <div className="absolute -top-1/2 -left-1/2 w-[1200px] h-[1200px]">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-[150px]"
          />
        </div>
        <div className="absolute -bottom-1/2 -right-1/2 w-[1200px] h-[1200px]">
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.4, 0.15],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-emerald-500/30 blur-[150px]"
          />
        </div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M0 200 Q 200 100, 400 200 T 800 200"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
              <stop offset="50%" stopColor="#4F46E5" stopOpacity="1" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-clash font-bold mb-4 text-white/90 tracking-tighter">
            Our Services
          </motion.h2>
          <motion.p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Comprehensive software solutions to transform your business
          </motion.p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            animate={
              !isDragging
                ? {
                    x: [-width, 0],
                  }
                : undefined
            }
            transition={{
              x: {
                duration: 50,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            className="flex gap-8 py-4"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
            {/* Duplicate services for seamless loop */}
            {services.map((service, index) => (
              <ServiceCard
                key={`${service.title}-duplicate`}
                service={service}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
