"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
      whileHover={{ y: -5 }}
      className="group relative min-w-[300px] sm:min-w-[340px] bg-gray-900 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 overflow-hidden border border-gray-700/30"
    >
      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-xl rounded-2xl" />

      {/* Content Container */}
      <motion.div className="relative">
        {/* Title */}
        <motion.h3
          className={`text-xl font-clash font-semibold mb-4 text-gray-100 group-hover:text-${project.accentColor} tracking-tighter`}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p className="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {project.description}
        </motion.p>

        {/* Technologies */}
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
              className={`px-3 py-1 rounded-full text-sm bg-${project.accentColor}/10 text-${project.accentColor} border border-${project.accentColor}/20`}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-xl bg-gradient-to-r ${project.gradient} relative group/button overflow-hidden border border-${project.accentColor}/20`}
        >
          <motion.span
            initial={{ x: "100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-${project.accentColor}/10`}
          />
          <motion.span className="relative text-sm font-cal tracking-wider-plus uppercase">
            View Project
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
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
    <section className="py-20 px-4 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
