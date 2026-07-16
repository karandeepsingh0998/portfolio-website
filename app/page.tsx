import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { HowIWork } from "@/components/HowIWork";
import { Experience } from "@/components/Experience";
import { Tools } from "@/components/Tools";
import { Projects } from "@/components/Projects";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <HowIWork />
        <Experience />
        <Tools />
        <Projects />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
