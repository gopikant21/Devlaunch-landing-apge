"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const currentScroll = window.scrollY;

        if (
          currentScroll >= sectionTop &&
          currentScroll < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["services", "projects", "pricing", "contact"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-gray-900/95 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            DevLaunch
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-gray-300 hover:text-white transition-colors relative`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-indigo-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full"
            >
              Get Started
            </motion.button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md pt-24"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors text-lg py-2"
                    whileHover={{ x: 10 }}
                    onClick={toggleMobileMenu}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg mt-4"
                  onClick={toggleMobileMenu}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
