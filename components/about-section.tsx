// Add useEffect and useRef to your imports
import { useState, useEffect, useRef } from "react";

// Define the skills with their descriptions
const skills = [
  { name: "Python", description: "Primary language for ML development and data analysis." },
  { name: "PyTorch", description: "Core deep learning framework for building and training neural networks." },
  { name: "Deep Learning", description: "Specialized in CNNs for computer vision and sequence models." },
  { name: "Computer Vision", description: "Experience in image classification, object detection, and medical imaging." },
  { name: "Django", description: "Used for deploying ML models and building robust backends." },
  { name: "React.js", description: "Building interactive and responsive user interfaces for web applications." },
  { name: "SQL", description: "Proficient in database querying and data manipulation." },
  { name: "Git & GitHub", description: "Essential tools for version control and collaborative development." },
];

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
      url('/window-bg.png')
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
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Me Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Thiket'", color: "#00FFFF" }}>
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#E5E7EB" }}>
              <p>
                I'm a passionate{" "}
                <span style={{ color: "#00FFFF", fontWeight: "600" }}>
                  Computer Engineering student
                </span>{" "}
                specializing in Machine Learning with hands-on experience in
                developing innovative deep learning solutions.
              </p>
              <p>
                My expertise spans{" "}
                <span style={{ color: "#9F2B68", fontWeight: "600" }}>
                  computer vision, neural networks, and data science
                </span>
                , with a proven track record of building real-world applications
                that deliver measurable impact.
              </p>
              <p>
                From achieving{" "}
                <span style={{ color: "#00FFFF", fontWeight: "600" }}>
                  94% F1-scores
                </span>{" "}
                in medical imaging classification to leading cross-functional
                teams, I combine technical excellence with strategic thinking to
                solve complex challenges.
              </p>
            </div>
          </div>

          {/* Interactive Skills Grid */}
          <div>
            <h3 className="text-4xl font-bold mb-8" style={{fontFamily: "'Thiket'", color: "#E5E7EB" }}>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 1)",
                  }}
                  onClick={() =>
                    setSelectedSkill(
                      selectedSkill === skill.name ? null : skill.name
                    )
                  }
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(182, 182, 182, 0.5)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  }}
                >
                  <span
                    className="w-full block text-center py-1 px-2 rounded-md"
                    style={{
                      backgroundColor: "rgba(182, 182, 182, 1)",
                      color: "#000000ff",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Skill Description Box */}
            {selectedSkill && (
              <div
                className="mt-6 p-6 rounded-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #00FFFF",
                }}
              >
                <h4 className="text-xl font-semibold mb-2" style={{ color: "#00FFFF" }}>
                  {selectedSkill}
                </h4>
                <p style={{ color: "#E5E7EB" }}>
                  {skills.find((s) => s.name === selectedSkill)?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}