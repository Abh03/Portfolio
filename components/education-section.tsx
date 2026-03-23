"use client";

import { useEffect, useRef, useState } from "react";

const educationData = [
  {
    degree: "Advanced Engineering Program in AI Agent Workflows & Agentic Systems",
    institution: "IIT Madras Pravartak",
    period: "Mar 2026 – Oct 2026 (expected)",
    description: "Intensive program focused on designing and implementing autonomous AI agents and complex agentic workflows using state-of-the-art frameworks.",
  },
  {
    degree: "Bachelor of Engineering: Computer Engineering",
    institution: "Kathmandu University",
    period: "Feb 2022 – June 2026 (expected)",
    description: "Specializing in software engineering, machine learning, and system design. Actively involved in technical clubs and research projects.",
  }
];

export function EducationSection() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef<HTMLElement>(null);

  const themeColor = "#00FFFF"; // Cyan for institutions and accents
  const dateColor = "#9F2B68";  // Reddish for dates

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    };
    
    const handleMouseLeave = () => {
        setMousePosition({ x: -1000, y: -1000 });
    }

    const currentRef = sectionRef.current;
    currentRef?.addEventListener('mousemove', handleMouseMove);
    currentRef?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      currentRef?.removeEventListener('mousemove', handleMouseMove);
      currentRef?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 relative z-30 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url('/window-bg.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
          maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 125px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Thiket'", color: themeColor }}
          >
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-lg transition-all duration-300 hover:scale-[1.02] group"
              style={{
                backgroundColor: "#111829",
                border: `1px solid ${themeColor}44`,
                boxShadow: `0 0 20px ${themeColor}11`,
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <span 
                  className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
                  style={{ backgroundColor: `${dateColor}22`, color: dateColor, border: `1px solid ${dateColor}44` }}
                >
                  {edu.period}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors" style={{ color: "#E5E7EB" }}>
                {edu.degree}
              </h3>
              <p className="text-xl font-medium mb-4" style={{ color: themeColor }}>
                {edu.institution}
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#9CA3AF" }}>
                {edu.description}
              </p>
              <div 
                className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ backgroundColor: themeColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
