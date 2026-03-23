"use client";

import { useEffect, useRef, useState } from "react";

const publication = {
  title: "Real-time Assistive Navigation System for the Visually Impaired",
  status: "Co-authored Research",
  description: "A comprehensive framework designed to assist visually impaired individuals in indoor navigation using cutting-edge computer vision and natural language processing.",
  achievements: [
    "Integrated YOLOv12 for precise real-time object detection and MediaPipe for human pose estimation.",
    "Developed a natural voice command interface and spatial audio feedback system for intuitive object localization.",
    "Achieved 94.7% detection accuracy across diverse indoor environments.",
    "Optimized the pipeline to maintain a low 1.2-second response latency for real-time usability.",
  ],
  skills: ["YOLOv12", "MediaPipe", "Computer Vision", "Spatial Audio", "Natural Language Processing"],
};

export function PublicationsSection() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      currentRef?.removeEventListener('mousemove', handleMouseMove);
      currentRef?.removeEventListener('mouseleave', handleMouseLeave);
      if (currentRef) observer.unobserve(currentRef);
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

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Thiket'", color: "#00FFFF" }}
          >
            Research & Publications
          </h2>
          <p className="text-xl" style={{ color: "#E5E7EB" }}>
            Advancing accessibility through Computer Vision and Deep Learning.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div
            className="p-8 rounded-lg shadow-2xl"
            style={{
              backgroundColor: "#111829",
              border: "1px solid rgba(182,182,182,0.5)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#E5E7EB" }}>
                  {publication.title}
                </h3>
                <p className="font-medium text-lg" style={{ color: "#00FFFF" }}>
                  {publication.status}
                </p>
              </div>
              <div
                className="px-3 py-1 rounded text-sm font-semibold self-start"
                style={{ border: "1px solid #9F2B68", color: "#9F2B68" }}
              >
                Published Research
              </div>
            </div>

            <p className="text-lg mb-6 leading-relaxed" style={{ color: "#9CA3AF" }}>
              {publication.description}
            </p>

            <div className="mb-8">
              <h4 className="font-semibold text-xl mb-4" style={{ color: "#E5E7EB" }}>
                Key Research Highlights
              </h4>
              <ul className="space-y-3">
                {publication.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg" style={{ color: "#9CA3AF" }}>
                    <div
                      className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                      style={{ backgroundColor: "#00FFFF", boxShadow: "0 0 8px #00FFFF" }}
                    />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {publication.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-4 py-1.5 rounded-full font-medium"
                  style={{
                    backgroundColor: "rgba(159, 43, 104, 0.2)",
                    border: "1px solid rgba(159, 43, 104, 0.4)",
                    color: "#E5E7EB",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
