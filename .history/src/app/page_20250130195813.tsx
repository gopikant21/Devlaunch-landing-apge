import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
    </main>
  );
}
