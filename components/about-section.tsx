// Add useEffect and useRef to your imports
import { useState, useEffect, useRef } from "react";

import { skillCategories, allSkills } from "@/lib/portfolio-content";

export function AboutSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // --- START OF CHANGES ---

  const [mousePosition, setMousePosition] =  useState({ x: -1000, y: -1000 });
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
  
  // --- END OF CHANGES ---

  return (
<section
  ref={sectionRef}
  className="min-h-screen flex items-center justify-center px-6 py-20 relative z-30 overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('/window-bg.jpg')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
      {/* --- START OF CHANGES --- */}
      {/* 3. New background structure with a base grid and a glowing grid revealed by a mask */}
      
      {/* Base Layer: The dim grid pattern */}
      <div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
      />
      
      {/* Glow Layer: A brighter version of the grid, revealed by the mask below */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
          // The mask that reveals this bright grid layer
          maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 125px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />
      {/* --- END OF CHANGES --- */}
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-16">
          {/* About Me Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Thiket'", color: "#00FFFF" }}>
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#E5E7EB" }}>
              <p>
                Hi, I'm Abhyudit, an{" "}
                <span style={{ color: "#00FFFF", fontWeight: "600" }}>
                  AI/ML Engineer
                </span>{" "}
                who ships LLM systems to production. At NAVIO, I migrated shipment
                email parsing from OpenAI to Gemini, using model routing, Redis
                caching, and database locking to{" "}
                <span style={{ color: "#9F2B68", fontWeight: "600" }}>
                  cut LLM costs by about 90%
                </span>. I also built vision-based extraction for complex bills of lading.
              </p>
              <p>
                My computer vision work spans research and deployment. At the
                award-recognized Dr. Fish startup,
                I trained a TensorFlow ResNet50 disease classifier to 95% accuracy,
                deployed it on Hugging Face, and reduced inference latency from
                200 ms to 120 ms. I also co-authored IEEE-published research on
                assistive indoor navigation using YOLOv12, MediaPipe, voice commands,
                and spatial audio.
              </p>
              <p>
                Most recently, I built an evidence-backed CV screening system during
                my time at Infinite Computer Solutions. It matches more than
                1,000 CVs against multiple roles and flags candidates who fit several
                positions. I also lead AI work on a posture-estimation tool at CreoTech.
                Across computer vision, RAG, and LLM integration,
                I focus on the full path from model to reliable workflow: data,
                evaluation, APIs, deployment, and human review. I am especially
                interested in{" "}
                <span style={{ color: "#00FFFF", fontWeight: "600" }}>
                  agent workflows and practical AI systems
                </span>{" "}
                built with tools such as FastAPI and Docker.
              </p>
              <p>
                I earned a Bachelor of Engineering in Computer Engineering from
                Kathmandu University (Feb 2022–Jul 2026; CGPA 3.60/4.0). I am also
                completing IIT Madras Pravartak&apos;s Advanced Engineering Program in
                AI Agent Workflows &amp; Agentic Systems (Apr–Nov 2026, expected).
                Coursework covers multi-agent collaboration, RAG and context
                engineering with pgvector and hybrid retrieval, and orchestration
                and observability with LangChain, LangGraph, and LangSmith.
              </p>
            </div>
          </div>

          {/* Interactive Skills Grid */}
          <div>
            <h3 className="text-4xl font-bold mb-8" style={{fontFamily: "'Thiket'", color: "#E5E7EB" }}>
              Skills
            </h3>
            
            <div className="space-y-6">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: "#00FFFF", opacity: 0.9 }}>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <button
                        key={skill.name}
                        type="button"
                        aria-pressed={selectedSkill === skill.name}
                        className="rounded-sm px-4 py-2 text-sm font-medium transition-transform duration-300 hover:scale-105"
                        style={{
                          backgroundColor: "rgba(182, 182, 182, 1)",
                          color: "#000000ff",
                        }}
                        onClick={() =>
                          setSelectedSkill(
                            selectedSkill === skill.name ? null : skill.name
                          )
                        }
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Description Box */}
            {selectedSkill && (
              <div
                className="mt-6 p-5 rounded-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #00FFFF",
                }}
              >
                <h4 className="text-lg font-semibold mb-2" style={{ color: "#00FFFF" }}>
                  {selectedSkill}
                </h4>
                <p className="text-sm" style={{ color: "#E5E7EB" }}>
                  {allSkills.find((s) => s.name === selectedSkill)?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
