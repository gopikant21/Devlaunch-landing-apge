"use client";
import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Custom web applications built with modern technologies and best practices",
    type: "ecommerce",
    tech: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Healthcare Management System",
    description:
      "Digital solution for managing patient records and appointments",
    type: "healthcare",
    tech: ["React", "Express", "PostgreSQL"],
  },
  {
    title: "Real Estate Application",
    description: "Property listing and management platform",
    type: "realestate",
    tech: ["Vue.js", "Django", "AWS"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <ProjectImage
                  type={
                    project.type as "ecommerce" | "healthcare" | "realestate"
                  }
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
