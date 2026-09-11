import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { ArchitectureExplorer } from "@/components/viz/ArchitectureExplorer";
import { DataFlow } from "@/components/viz/DataFlow";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <ArchitectureExplorer />
        <DataFlow />
        <Capabilities />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
