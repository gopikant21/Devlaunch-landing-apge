"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Award,
  Heart,
} from "lucide-react";

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
      { name: "Twitter", href: "#"},
      { name: "LinkedIn", href: "https://www.linkedin.com/company/dvlaunch/posts/?feedView=all" },
      { name: "GitHub", href: "https://github.com/LostNSeeker" },
    ],
  },
];

// Add social icons with animations
const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center group backdrop-blur-sm"
  >
    <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
  </motion.a>
);

// Add contact info with animations
const ContactInfo = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <motion.div
    whileHover={{ x: 5 }}
    className="flex items-center gap-3 text-gray-400 group"
  >
    <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center backdrop-blur-sm">
      <Icon className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
    </div>
    <span className="text-sm group-hover:text-blue-400 transition-colors duration-300">
      {text}
    </span>
  </motion.div>
);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#080808] border-t border-gray-800/30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E508_1px,transparent_1px),linear-gradient(to_bottom,#4F46E508_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] rounded-full bg-blue-500/10 -translate-y-1/2 -translate-x-1/2 blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] rounded-full bg-purple-500/10 translate-y-1/2 translate-x-1/2 blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-6 order-1 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-xl rounded-2xl bg-gray-900/20 p-6 border border-gray-800/30"
            >
              <Link
                href="/"
                className="text-2xl font-clash font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                DevLaunch
              </Link>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Transforming ideas into digital reality with cutting-edge
                solutions.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mt-6">
                <SocialIcon icon={Twitter} href="#" />
                <SocialIcon icon={Linkedin} href="https://www.linkedin.com/company/dvlaunch/posts/?feedView=all" />
                <SocialIcon icon={Github} href="https://github.com/LostNSeeker" />
              </div>
            </motion.div>
          </div>

          {/* Links Section with new layout */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 order-2 md:order-2">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-sm font-semibold text-white tracking-wider uppercase bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                  {section.title}
                </motion.h3>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center gap-2"
                      >
                        <motion.span className="h-px w-0 bg-blue-400 group-hover:w-4 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section with additional links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-8 border-t border-gray-800/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} DevLaunch. All rights reserved.
              </p>
              <span className="hidden md:block text-gray-600">•</span>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Made with ❤️ by DevLaunch
              </motion.a>
            </div>

            <div className="flex items-center gap-6">
              {["Terms", "Privacy", "Cookies", "Security", "Status"].map(
                (item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -2 }}
                    className="relative group"
                  >
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </Link>
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
