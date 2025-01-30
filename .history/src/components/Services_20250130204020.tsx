"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Web Development",
    description: "Modern web applications with cutting-edge technologies",
    features: ["React/Next.js", "Progressive Web Apps", "E-commerce Solutions"],
    icon: "🌐",
    gradient: "from-blue-600/20 to-cyan-600/20",
    accentColor: "blue-500",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions",
    features: ["iOS & Android", "React Native", "Flutter Development"],
    icon: "📱",
    gradient: "from-purple-600/20 to-pink-600/20",
    accentColor: "purple-500",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure",
    features: ["AWS/Azure", "DevOps", "Microservices"],
    icon: "☁️",
    gradient: "from-cyan-600/20 to-teal-600/20",
    accentColor: "cyan-500",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions for your business",
    features: ["Data Analysis", "Predictive Models", "AI Integration"],
    icon: "🤖",
    gradient: "from-emerald-600/20 to-teal-600/20",
    accentColor: "emerald-500",
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
      className="group relative min-w-[300px] sm:min-w-[340px] bg-[#0A0A0C] backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 overflow-hidden border border-white/5"
    >
      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-[1px] bg-[#0A0A0C]/90 backdrop-blur-xl rounded-2xl" />

      {/* Content Container */}
      <motion.div className="relative">
        {/* Icon Container */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-[1px] mb-6 transform group-hover:scale-110 transition-transform duration-300`}
        >
          <motion.div className="w-full h-full bg-[#0A0A0C] rounded-2xl flex items-center justify-center">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="text-3xl filter drop-shadow-lg"
            >
              {service.icon}
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h3 className={`text-xl font-bold mb-4 text-white group-hover:text-${service.accentColor}`}>
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p className="text-white/70 mb-6 line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
          {service.description}
        </motion.p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ x: 5 }}
              className="flex items-center text-white/60 group-hover:text-white/80"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className={`w-5 h-5 rounded-full bg-${service.accentColor}/20 mr-3 flex-shrink-0 flex items-center justify-center border border-${service.accentColor}/30`}
              >
                <motion.svg
                  className={`w-3 h-3 text-${service.accentColor}`}
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

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-xl bg-gradient-to-r ${service.gradient} relative group/button overflow-hidden border border-${service.accentColor}/20`}
        >
          <motion.span
            initial={{ x: "100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-${service.accentColor}/10`}
          />
          <motion.span className="relative text-sm font-medium text-white">
            Learn More
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

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
    <section className="py-20 px-4 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-white/90">
            Our Services
          </motion.h2>
          <motion.p className="text-xl text-white/60 max-w-2xl mx-auto">
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
                duration: 20,
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
