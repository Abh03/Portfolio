"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Advanced Engineering Program in AI Agent Workflows & Agentic Systems",
    institution: "IIT Madras Pravartak",
    period: "Mar 2026 – Oct 2026 (expected)",
    logo: "/iit.jpg",
    description: "Intensive program focused on designing enterprise-ready, multi-agent AI systems. The hands-on curriculum centers on integrating APIs with tools like LangChain, implementing Human-in-the-Loop governance, and architecting autonomous workflows for fully deployable projects.",
  },
  {
    degree: "Bachelor of Engineering: Computer Engineering",
    institution: "Kathmandu University",
    period: "Feb 2022 – June 2026 (expected)",
    logo: "/kathmandu_university.jpg",
    description: "Rigorous syllabus with strong software and mathematical foundation, mastering Data Structures, Algorithms, Database Management, and complex calculus.Specialized in the intersection of hardware and machine learning through advanced electives in Deep Learning, Artificial Intelligence, and IoT.",
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
          url('/window-bg.jpg')
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Thiket'", color: themeColor }}
          >
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: index === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 1, 
                delay: index * 0.1 
              }}
              className="p-8 rounded-lg transition-all duration-300 hover:scale-[1.02] group"
              style={{
                backgroundColor: "#111829",
                border: `1px solid ${themeColor}44`,
                boxShadow: `0 0 20px ${themeColor}11`,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 border border-gray-200 mt-1">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold group-hover:text-white transition-colors mb-2" style={{ color: "#E5E7EB" }}>
                    {edu.degree}
                  </h3>
                  <div className="flex justify-between items-center gap-4">
                    <p className="font-medium text-lg" style={{ color: themeColor }}>
                      {edu.institution}
                    </p>
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded flex-shrink-0"
                      style={{ backgroundColor: `${dateColor}22`, color: dateColor, border: `1px solid ${dateColor}44` }}
                    >
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: "#9CA3AF" }}>
                {edu.description}
              </p>
              <div 
                className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ backgroundColor: themeColor }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
