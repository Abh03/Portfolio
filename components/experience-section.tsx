"use client";

import { useEffect, useRef, useState } from "react";

import { experiences } from "@/lib/portfolio-content";

export function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => {
              const newVisibleItems = [...new Set([...prev, index])];
              const maxVisibleIndex = Math.max(...newVisibleItems);
              const progress = (maxVisibleIndex + 1) / experiences.length;
              setTimelineProgress(progress);
              return newVisibleItems;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative z-30 overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('/window-bg.jpg')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}    >
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

      {/* This wrapper div lifts the content above the background layers */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Thiket'", color: "#00FFFF" }}
            >
              Experience
            </h2>
            <p className="text-xl" style={{ color: "#E5E7EB" }}>
              Building the future through leadership and innovation.
            </p>
          </div>

          <div ref={timelineRef} className="relative">
            <div
              className="absolute left-2 w-1 top-0 bottom-0"
              style={{ backgroundColor: "rgba(159, 43, 104, 0.3)" }}
            />
            <div
              className="absolute left-2 w-1 top-0"
              style={{
                backgroundColor: "#00FFFF",
                boxShadow: "0 0 10px rgba(0, 255, 255, 1)",
                height: `${timelineProgress * 100}%`,
                transition: "height 0.5s ease-out",
              }}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  data-index={index}
                  className="timeline-item relative pl-10"
                  style={{
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                    opacity: visibleItems.includes(index) ? 1 : 0,
                    transform: visibleItems.includes(index)
                      ? "translateY(0)"
                      : "translateY(2rem)",
                  }}
                >
                  <div
                    className="absolute -left-1 top-1 w-6 h-6 rounded-full border-4 z-10"
                    style={{
                      borderColor: "#000000",
                      backgroundColor: visibleItems.includes(index)
                        ? "#00FFFF"
                        : "#9F2B68",
                      transition: "background-color 0.5s ease",
                    }}
                  />
                  <div
                    className="p-6 rounded-lg"
                    style={{
                      backgroundColor: "#111829",
                      border: "1px solid rgba(182,182,182,0.5)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 rounded-full object-contain"
                            style={{ backgroundColor: "#FFFFFF" }}
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: "#00FFFF", color: "#111829" }} aria-hidden="true">
                            {exp.company.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <h3
                            className="text-xl font-semibold"
                            style={{ color: "#E5E7EB" }}
                          >
                            {exp.title}
                          </h3>
                          <p className="font-medium" style={{ color: "#00FFFF" }}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-xs px-2 py-1 rounded flex-shrink-0"
                        style={{ border: "1px solid #9F2B68", color: "#9F2B68" }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-4" style={{ color: "#9CA3AF" }}>
                      {exp.description}
                    </p>
                    <div className="mb-4">
                      <h4
                        className="font-semibold mb-2"
                        style={{ color: "#E5E7EB" }}
                      >
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "#9CA3AF" }}
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: "#00FFFF" }}
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "rgba(159, 43, 104, 0.2)",
                            color: "#E5E7EB",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
