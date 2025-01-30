"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices",
    icon: (
      <group>
        {/* Laptop Base */}
        <mesh position={[0, -0.1, 0]} scale={[1.5, 0.08, 1]}>
          <boxGeometry />
          <MeshDistortMaterial color="#4F46E5" speed={2} distort={0.2} />
        </mesh>
        {/* Laptop Screen */}
        <mesh
          position={[0, 0.5, -0.3]}
          rotation={[0.5, 0, 0]}
          scale={[1.5, 1, 0.08]}
        >
          <boxGeometry />
          <MeshDistortMaterial color="#4F46E5" speed={2} distort={0.2} />
        </mesh>
        {/* Floating Code Elements */}
        {[-0.5, 0, 0.5].map((x, i) => (
          <mesh key={i} position={[x, 1.2, 0]} scale={[0.2, 0.2, 0.2]}>
            <torusKnotGeometry args={[0.3, 0.1, 64, 8]} />
            <MeshDistortMaterial color="#60A5FA" speed={4} distort={0.5} />
          </mesh>
        ))}
      </group>
    ),
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    icon: (
      <group>
        {/* Phone Body */}
        <mesh scale={[0.8, 1.5, 0.1]}>
          <boxGeometry />
          <MeshDistortMaterial color="#4F46E5" speed={2} distort={0.2} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, 0.06]} scale={[0.7, 1.3, 0.01]}>
          <boxGeometry />
          <meshStandardMaterial color="#2D3748" />
        </mesh>
        {/* Floating App Icons */}
        {[
          [-0.6, 0.6],
          [0.6, 0.6],
          [-0.6, -0.6],
          [0.6, -0.6],
        ].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0.3]} scale={[0.2, 0.2, 0.2]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <MeshDistortMaterial color="#60A5FA" speed={3} distort={0.4} />
          </mesh>
        ))}
      </group>
    ),
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and DevOps solutions for your applications",
    icon: (
      <group>
        {/* Main Cloud Structure */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial color="#4F46E5" speed={2} distort={0.3} />
        </mesh>
        {/* Connected Nodes */}
        {[
          [-0.8, -0.3],
          [0.8, -0.3],
          [0, -0.8],
        ].map(([x, y], i) => (
          <group key={i}>
            <mesh position={[x, y, 0]}>
              <sphereGeometry args={[0.25, 32, 32]} />
              <MeshDistortMaterial color="#60A5FA" speed={3} distort={0.4} />
            </mesh>
            {/* Connection Lines */}
            <mesh
              position={[x / 2, y / 2, 0]}
              scale={[0.05, 0.4, 0.05]}
              rotation={[0, 0, Math.atan2(y, x)]}
            >
              <boxGeometry />
              <meshStandardMaterial color="#60A5FA" />
            </mesh>
          </group>
        ))}
      </group>
    ),
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-4 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-gray-900 p-8 rounded-lg hover:shadow-xl transition-all"
            >
              <div className="h-48 mb-6">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <pointLight position={[-10, -10, -5]} intensity={0.5} />
                  <Float
                    speed={4}
                    rotationIntensity={2}
                    floatIntensity={3}
                    floatingRange={[-0.2, 0.2]}
                  >
                    <motion.group
                      animate={{
                        rotateY: 360,
                        rotateX: [0, 10, 0],
                      }}
                      transition={{
                        rotateY: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        rotateX: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      {service.icon}
                    </motion.group>
                  </Float>
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2}
                  />
                </Canvas>
              </div>
              <motion.h3
                className="text-2xl font-bold mb-4 text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
