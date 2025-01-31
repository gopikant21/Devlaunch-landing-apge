"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online shopping platform with payment integration",
    type: "ecommerce",
    tech: ["Next.js", "Node.js", "MongoDB"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    accentColor: "blue-400",
  },
  {
    title: "Healthcare Management",
    description:
      "Digital solution for managing patient records and appointments",
    type: "healthcare",
    tech: ["React", "Express", "PostgreSQL"],
    gradient: "from-purple-500/10 to-pink-500/10",
    accentColor: "purple-400",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management platform",
    type: "realestate",
    tech: ["Vue.js", "Django", "AWS"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    accentColor: "emerald-400",
  },
  {
    title: "AI Analytics Dashboard",
    description: "Real-time data visualization and analytics platform",
    type: "analytics",
    tech: ["Python", "TensorFlow", "React"],
    gradient: "from-orange-500/10 to-amber-500/10",
    accentColor: "orange-400",
  },
  {
    title: "Social Media App",
    description: "Modern social networking platform with real-time features",
    type: "social",
    tech: ["React Native", "Firebase", "GraphQL"],
    gradient: "from-rose-500/10 to-pink-500/10",
    accentColor: "rose-400",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative min-w-[300px] sm:min-w-[400px] bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 overflow-hidden border border-gray-700/30"
    >
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
      />

      {/* Animated Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"
      />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full"
      />

      {/* Glass Overlay */}
      <div className="absolute inset-[1px] bg-gray-900/80 backdrop-blur-xl rounded-2xl" />

      {/* Content Container */}
      <motion.div className="relative">
        {/* Project Type Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`inline-block px-3 py-1 rounded-full text-xs bg-${project.accentColor}/10 text-${project.accentColor} border border-${project.accentColor}/20 mb-4`}
        >
          {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
        </motion.div>

        {/* Title with Gradient Animation */}
        <motion.h3
          className={`text-2xl font-clash font-semibold mb-4 text-gray-100 group-hover:text-${project.accentColor} tracking-tighter`}
        >
          <span className="bg-gradient-to-r from-gray-100 to-gray-100 bg-[length:0%_2px] group-hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-all duration-500">
            {project.title}
          </span>
        </motion.h3>

        {/* Description with Fade Animation */}
        <motion.p className="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {project.description}
        </motion.p>

        {/* Technologies with Stagger Animation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1 + i * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ y: -2, scale: 1.05 }}
              className={`px-3 py-1 rounded-full text-sm bg-${project.accentColor}/10 text-${project.accentColor} border border-${project.accentColor}/20 cursor-pointer transition-all duration-300`}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Button with Advanced Hover Effect */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-xl relative group/button overflow-hidden`}
        >
          <span
            className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}
          />
          <span className="absolute inset-0 bg-gray-900 opacity-80 group-hover/button:opacity-0 transition-opacity duration-500" />
          <span
            className={`absolute inset-[1px] rounded-xl bg-gray-900 group-hover/button:bg-${project.accentColor}/10 transition-colors duration-500`}
          />
          <motion.span className="relative text-sm font-cal tracking-wider-plus uppercase flex items-center justify-center gap-2">
            View Project
            <svg
              className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-300"
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
            </svg>
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const width = typeof window !== "undefined" ? window.innerWidth : 0;

  return (
    <section className="relative py-20 overflow-hidden bg-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Glowing Orbs */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 -translate-x-1/2 -translate-y-1/2 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 translate-x-1/2 translate-y-1/2 blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-clash font-bold mb-4 text-white/90 tracking-tighter">
            Our Projects
          </motion.h2>
          <motion.p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Explore our latest work and success stories
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
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
            {/* Duplicate projects for seamless loop */}
            {projects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-duplicate`}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
