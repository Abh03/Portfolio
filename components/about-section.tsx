// Add useEffect and useRef to your imports
import { useState, useEffect, useRef } from "react";

// Define the skills categorized for rendering
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", description: "Primary language for ML development, data analysis, and backend services." },
      { name: "SQL", description: "Proficient in database design, querying, and data manipulation." },
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", description: "Core deep learning framework for building and training neural networks." },
      { name: "TensorFlow", description: "Experience in building and deploying machine learning models." },
      { name: "OpenCV", description: "Library for computer vision tasks like image processing and object detection." },
      { name: "RAG Pipelines", description: "Building Retrieval-Augmented Generation systems for LLMs." },
      { name: "LLM APIs (Gemini, OpenAI)", description: "Integrating state-of-the-art large language models into applications." },
      { name: "CNNs", description: "Deep learning architecture specialized for image and spatial data processing." },
    ]
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "FastAPI", description: "Modern, high-performance web framework for building APIs with Python." },
      { name: "Docker", description: "Containerization tool for consistent deployment across different environments." },
      { name: "Git", description: "Essential tool for version control and collaborative development." },
      { name: "Supabase", description: "Backend-as-a-service for database, auth, and real-time features." },
      { name: "Vector Database", description: "Storing and searching high-dimensional embeddings for AI applications." },
      { name: "AWS", description: "Cloud platform for deploying and scaling machine learning workloads." },
    ]
  }
];

// Flat list for easy searching of descriptions
const allSkills = skillCategories.flatMap(category => category.skills);

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
        <div className="flex flex-col gap-16">
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
            
            <div className="space-y-8">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-xl font-semibold mb-4" style={{ color: "#00FFFF", opacity: 0.9 }}>
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {category.skills.map((skill) => (
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