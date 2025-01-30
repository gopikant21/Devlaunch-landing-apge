"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "GitHub", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-clash font-bold text-white">
                DevLaunch
              </Link>
              <p className="mt-4 text-gray-400 text-sm">
                Transforming ideas into digital reality with cutting-edge solutions.
              </p>
            </motion.div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-sm font-semibold text-white tracking-wider uppercase"
              >
                {section.title}
              </motion.h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} DevLaunch. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 