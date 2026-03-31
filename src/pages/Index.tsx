import { useEffect, useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import BackgroundGlow from "@/components/BackgroundGlow";
import SectionDivider from "@/components/SectionDivider";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const onPreloaderComplete = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    const sections = document.querySelectorAll(".scroll-fade-section");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [loaded]);

  return (
    <>
      {!loaded && <Preloader onComplete={onPreloaderComplete} />}
      <CustomCursor />
      <div className={`min-h-screen bg-background text-foreground relative transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <BackgroundGlow />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <SectionDivider />
          <About />
          <Impact />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Index;
