"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800"
          >
            <motion.h2 className="text-4xl font-clash font-bold mb-4 text-white/90 tracking-tighter">
              Let's Connect
            </motion.h2>
            <motion.p className="text-lg text-gray-400 mb-8">
              Have a project in mind? We'd love to hear about it.
            </motion.p>

            <form className="space-y-6">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-xl font-medium relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/contact-illustration.svg"
              alt="Contact Illustration"
              width={600}
              height={600}
              className="w-full"
            />

            {/* Contact Info Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">hello@devlaunch.com</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
