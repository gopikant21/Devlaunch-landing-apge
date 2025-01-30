"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Modern web applications with cutting-edge technologies",
    features: ["React/Next.js", "Progressive Web Apps", "E-commerce Solutions"],
    icon: "🌐",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions",
    features: ["iOS & Android", "React Native", "Flutter Development"],
    icon: "📱",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure",
    features: ["AWS/Azure", "DevOps", "Microservices"],
    icon: "☁️",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions for your business",
    features: ["Data Analysis", "Predictive Models", "AI Integration"],
    icon: "🤖",
    gradient: "from-green-600 to-teal-600",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user experiences",
    features: ["User Research", "Wireframing", "Prototyping"],
    icon: "🎨",
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    title: "Blockchain",
    description: "Decentralized application development",
    features: ["Smart Contracts", "NFT Platforms", "DeFi Solutions"],
    icon: "⛓️",
    gradient: "from-red-600 to-pink-600",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
    >
      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-3xl mb-6`}>
        {service.icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: (index * 0.1) + (i * 0.1) }}
            viewport={{ once: true }}
            className="flex items-center text-gray-300"
          >
            <svg
              className="w-4 h-4 mr-2 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4"
              />
            </svg>
            {feature}
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive software solutions to transform your business
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-8">
            Need a custom solution? Let's discuss your project.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
