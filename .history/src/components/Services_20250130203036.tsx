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
      className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Animated Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full"
      />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {/* Animated Icon Container */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-0.5 mb-6 transform group-hover:scale-110 transition-transform duration-300`}
        >
          <motion.div
            whileHover={{ scale: 0.95 }}
            className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center"
          >
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

        {/* Animated Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
        >
          {service.title}
        </motion.h3>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300"
        >
          {service.description}
        </motion.p>

        {/* Animated Features List */}
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
              className="flex items-center text-gray-300 group-hover:text-gray-200"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} p-0.5 mr-3 flex-shrink-0`}
              >
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </div>
              </motion.div>
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-xl bg-gradient-to-r ${service.gradient} relative group/button overflow-hidden`}
        >
          <motion.span
            initial={{ x: "100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-xl bg-gray-900 opacity-0 group-hover/button:opacity-90"
          />
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="relative text-sm font-medium"
          >
            Learn More
          </motion.span>
        </motion.button>
      </motion.div>
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
