"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Camera, Globe2, ShoppingCart, Briefcase, Plane, Tv, Zap, Wine, Coffee } from "lucide-react";
import { ChevronRight, ChevronLeft, Search, Filter } from "lucide-react";
import { useAnimationControls } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Float } from "@react-three/drei";


const clientProjects = [
  {
    title: "Dyota AI",
    subtitle: "3D Blog Platform",
    description: "Immersive 3D blog platform powered by artificial intelligence",
    icon: Globe2,
    tech: ["Three.js", "Next.js", "WebGL"],
    category: "Web3",
    gradient: "from-fuchsia-600 via-purple-600 to-indigo-600",
    shadowColor: "shadow-fuchsia-500/30",
    demo: "https://dyota.ai"
  },
  {
    title: "Prajnan",
    subtitle: "Modern CRM Solution",
    description: "Intelligent customer relationship management system",
    icon: Briefcase,
    tech: ["React", "Node.js", "MongoDB"],
    category: "Enterprise",
    gradient: "from-cyan-600 via-teal-600 to-green-600",
    shadowColor: "shadow-teal-500/30",
    demo: "#"
  },
  {
    title: "Innovative Ideas",
    subtitle: "Travel Booking Platform",
    description: "All-in-one flight and hotel booking solution",
    icon: Plane,
    tech: ["Vue.js", "Django", "PostgreSQL"],
    category: "Travel",
    gradient: "from-blue-600 via-sky-600 to-cyan-600",
    shadowColor: "shadow-blue-500/30",
    demo: "#"
  },
  {
    title: "Chiltel",
    subtitle: "Electronics Commerce",
    description: "E-commerce platform for electronics with service integration",
    icon: ShoppingCart,
    tech: ["React Native", "Firebase", "Node.js"],
    category: "E-commerce",
    gradient: "from-orange-600 via-amber-600 to-yellow-600",
    shadowColor: "shadow-orange-500/30",
    demo: "#"
  },
  {
    title: "Service App",
    subtitle: "On-Demand Services",
    description: "Multi-vendor service booking and management platform",
    icon: Zap,
    tech: ["Flutter", "GraphQL", "AWS"],
    category: "Services",
    gradient: "from-rose-600 via-pink-600 to-fuchsia-600",
    shadowColor: "shadow-rose-500/30",
    demo: "#"
  },
  {
    title: "Quick Commerce",
    subtitle: "Rapid Delivery Platform",
    description: "Lightning-fast e-commerce delivery solution",
    icon: ShoppingCart,
    tech: ["Next.js", "Express", "MongoDB"],
    category: "E-commerce",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    shadowColor: "shadow-violet-500/30",
    demo: "#"
  },
  {
    title: "Fashion Store",
    subtitle: "Fashion E-commerce",
    description: "Premium fashion retail experience platform",
    icon: ShoppingCart,
    tech: ["React", "Node.js", "Stripe"],
    category: "E-commerce",
    gradient: "from-pink-600 via-rose-600 to-red-600",
    shadowColor: "shadow-pink-500/30",
    demo: "#"
  },
  {
    title: "EnerzyFlow",
    subtitle: "Bottle Commerce",
    description: "Specialized e-commerce for bottle products",
    icon: Wine,
    tech: ["React Native", "Firebase", "Node.js"],
    category: "E-commerce",
    gradient: "from-emerald-600 via-green-600 to-lime-600",
    shadowColor: "shadow-emerald-500/30",
    demo: "#"
  },
  {
    title: "Celebrate",
    subtitle: "Lifestyle Platform",
    description: "Unified dining and entertainment experience",
    icon: Coffee,
    tech: ["Flutter", "Firebase", "Node.js"],
    category: "Lifestyle",
    gradient: "from-amber-600 via-orange-600 to-red-600",
    shadowColor: "shadow-amber-500/30",
    demo: "#"
  }
];

const ProjectCard = ({ project, index }: { project: typeof clientProjects[0], index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimationControls();
  
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }
      },
      hover: {
        y: -5,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }
      }
    };
  
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-[360px] group"
      >
        {/* Futuristic Border Glow */}
        <motion.div
          className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-sm"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
  
        {/* Main Card Container */}
        <div className="relative h-full p-8 rounded-lg bg-gray-900/90 backdrop-blur-xl 
                      border border-gray-800/50 hover:border-white/20 
                      transition-all duration-300 flex flex-col">
          
          {/* Cyberpunk Grid Background */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(to right, ${project.gradient.split(' ')[1]} 1px, transparent 1px),
                                 linear-gradient(to bottom, ${project.gradient.split(' ')[1]} 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}
              animate={{
                opacity: isHovered ? 0.05 : 0.02,
                backgroundSize: isHovered ? '25px 25px' : '20px 20px'
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
  
          {/* Animated Particles */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: Math.random() * 100 - 50,
                      y: Math.random() * -100,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${project.gradient})`,
                      left: `${20 + (i * 15)}%`,
                      bottom: '10%'
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
  
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <motion.span
              className="text-sm px-3 py-1 rounded-full bg-gray-800/50 text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.span>
          </motion.div>
  
          {/* Title and Subtitle */}
          <motion.div className="mb-4">
            <motion.h3
              className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2"
              animate={{ opacity: isHovered ? 1 : 0.9 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-lg text-gray-400"
              animate={{ opacity: isHovered ? 0.9 : 0.7 }}
            >
              {project.subtitle}
            </motion.p>
          </motion.div>
  
          {/* Description */}
          <motion.p
            className="text-gray-400 mb-6 line-clamp-2 flex-grow"
            animate={{ opacity: isHovered ? 0.8 : 0.6 }}
          >
            {project.description}
          </motion.p>
  
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -2, x: 0 }}
                transition={{
                  delay: 0.1 + (i * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
                className="px-3 py-1 text-sm rounded-full bg-gray-800/50 text-gray-300
                         border border-gray-700/50 hover:border-gray-600/50"
              >
                {tech}
              </motion.span>
            ))}
          </div>
  
          {/* View Project Button */}
          <motion.button
            className="mt-auto w-full py-3 rounded-lg relative group/btn overflow-hidden"
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0"
              variants={{
                hover: {
                  opacity: 1,
                  transition: { duration: 0.3 }
                }
              }}
            />
            <motion.div
              className="relative flex items-center justify-center gap-2 text-white"
              variants={{
                hover: {
                  x: [0, 5, 0],
                  transition: {
                    duration: 1,
                    repeat: Infinity
                  }
                }
              }}
            >
              View Project
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    );
  };
  
  const PageTransition = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
  
  const ClientProjects = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 6;
  
    const categories = ["All", ...Array.from(new Set(clientProjects.map(p => p.category)))];
    const filteredProjects = clientProjects.filter(project => 
      selectedCategory === "All" || project.category === selectedCategory
    );
  
    const pageCount = Math.ceil(filteredProjects.length / itemsPerPage);
    const currentProjects = filteredProjects.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );
  
    return (
      <section className="min-h-screen bg-gray-950 py-16 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Cyberpunk Grid */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E510_1px,transparent_1px),linear-gradient(to_bottom,#4F46E510_1px,transparent_1px)] bg-[size:64px_64px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
        />
        {/* Glowing Orbs */}
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-[120px]" />
        </motion.div>
        </div>
  
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Animated Header */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl font-medium text-white mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Client Projects
            </motion.h1>
            <p className="text-gray-400">
              Showcasing our innovative solutions and digital transformations
            </p>
          </motion.div>
  
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(0);
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-all
                  ${selectedCategory === category 
                    ? 'bg-white text-gray-900' 
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
  
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <PageTransition key={currentPage}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.title} 
                    project={project} 
                    index={index}
                  />
                ))}
              </div>
            </PageTransition>
          </AnimatePresence>
  
          {/* Animated Pagination */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white
                       disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
  
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center
                    ${currentPage === i 
                      ? 'bg-white text-gray-900' 
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>
  
            <motion.button
              onClick={() => setCurrentPage(prev => Math.min(pageCount - 1, prev + 1))}
              disabled={currentPage === pageCount - 1}
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white
                       disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>
    );
  };
  
  export default ClientProjects;