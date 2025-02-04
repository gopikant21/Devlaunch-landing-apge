import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import ClientProjects from "@/components/ClientProjects";

export default function Home() {
  return (
    <main>
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
  );
}
