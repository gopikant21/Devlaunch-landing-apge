"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import ClientProjects from "@/components/ClientProjects";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Hide content initially
    document.body.style.overflow = 'hidden';
    
    // Function to check if all images and resources are loaded
    const checkLoadStatus = () => {
      if (document.readyState === 'complete') {
        // Add a slight delay for smoother transition
        setTimeout(() => {
          setIsLoading(false);
          // Show content with a slight delay after loader disappears
          setTimeout(() => {
            setIsContentVisible(true);
            document.body.style.overflow = 'auto';
          }, 100);
        }, 150);
      }
    };

    checkLoadStatus();
    document.addEventListener('readystatechange', checkLoadStatus);

    return () => {
      document.removeEventListener('readystatechange', checkLoadStatus);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <main
        className={`transition-opacity duration-1000 ${
          isContentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="clientProjects">
          <ClientProjects />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}