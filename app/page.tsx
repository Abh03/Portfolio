"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { PublicationsSection } from "@/components/publications-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";

export default function Portfolio() {
  const [showContent, setShowContent] = useState(false);

  // This function will be passed to HeroSection to know when its animation is done
  const handleAnimationComplete = (isComplete: boolean) => {
    setShowContent(isComplete);
  };

  useEffect(() => {
    // Force scroll to top on refresh
    window.scrollTo(0, 0);
    
    // Some browsers might need a slight delay or to handle the history restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    return () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  // The old useEffect is no longer needed here, as HeroSection handles its own scroll logic
  
  return (
    <main className="relative">
      {/* 3. Pass the function as a prop to HeroSection */}
      <HeroSection onAnimationComplete={handleAnimationComplete} />
      
      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <AboutSection />
        <EducationSection />
        <PublicationsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}