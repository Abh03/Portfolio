"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
    // ... your projects array remains the same
  {
    title: "Brain Tissue Classification",
    tech: "Python, PyTorch, Deep Learning",
    description:
      "Created HybridSN with spectral attention for brain tissue classification, achieving 94% F1-score.",
    image: "/brain-hyperspectral-neural-network.png",
  },
  {
    title: "Pneumonia Detection AI",
    tech: "Python, CNN, Django",
    description:
      "Developed a CNN solution detecting pneumonia in lung X-rays with 96% accuracy and deployed it via a Django interface.",
    image: "/pneumonia-detection-ai.png",
  },
  {
    title: "Image Colorization",
    tech: "Python, UNet, OpenCV",
    description:
      "Implemented a UNet to colorize grayscale images, trained on the Places365 dataset for strong generalization.",
    image: "/grayscale-to-color-transformation.png",
  },
  {
    title: "KUdos Sports Platform",
    tech: "React.js, Tailwind CSS, Firebase",
    description:
      "A responsive platform for KU to track matches, book venues, and manage sports equipment.",
    image: "/kudos-sports-management-dashboard.jpg",
  },
  {
    title: "Tranzac Finance App",
    tech: "Flutter, Dart, Data Visualization",
    description:
      "A cross-platform mobile app for personal finance tracking with data visualization of spending habits.",
    image: "/tranzac-finance-app-ui.jpg",
  },
  {
    title: "RightMeal Fitness Planner",
    tech: "C, Algorithm Design",
    description:
      "A fitness app to generate personalized diet plans for Nepalese cuisine and targeted workouts.",
    image: "/rightmeal-fitness-app-nepal.jpg",
  },
  {
    title: "R.S. Craftmandu E-commerce",
    tech: "React.js, Tailwind CSS, Firebase",
    description:
      "A responsive e-commerce site with product listings, cart, checkout, and an admin panel.",
    image: "/modern-ecommerce-showcase.png",
  },
  {
    title: "Voice Gender Classification",
    tech: "Python, DSP, Scikit-learn",
    description:
      "Designed a system using DSP to extract vocal features and trained a Random Forest model for real-time prediction.",
    image: "/voice-classification-dsp.png",
  },
  {
    title: "Movie4AllMoods",
    tech: "Django, Recommender Systems",
    description:
      "A movie recommendation system using content-based and mood-based filtering for customized suggestions.",
    image: "/movie-recommendation-mood-filter.png",
  },
];

const half = Math.ceil(projects.length / 2);
const leftColumnProjects = projects.slice(0, half);
const rightColumnProjects = projects.slice(half);

const loopedLeft = [...leftColumnProjects, ...leftColumnProjects];
const loopedRight = [...rightColumnProjects, ...rightColumnProjects];

const ProjectCard = ({
  project,
  onClick,
}: {
  project: (typeof projects)[0];
  onClick: () => void;
}) => {
  return (
    <div className="group cursor-pointer mb-8" onClick={onClick}>
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-[rgba(182,182,182,0.5)] hover:border-[#00FFFF] group-hover:shadow-[0_0_45px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105"
      
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#E5E7EB] transition-colors duration-300 group-hover:text-[#00FFFF]">
            {project.title}
          </h3>
          <p className="text-sm mb-3" style={{ color: "#9F2B68" }}>
            {project.tech}
          </p>
          <p className="text-sm line-clamp-3" style={{ color: "#9CA3AF" }}>
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef<HTMLElement>(null);
  
  // --- START OF FIX ---
  // New state to hold the calculated height of the scrollable content
  const [containerHeight, setContainerHeight] = useState('200vh');
  // --- END OF FIX ---


  useEffect(() => {
    // This effect now also calculates the dynamic height of the container
    const handleResize = () => {
      if (stickyContainerRef.current) {
        // Calculate the height of the taller of the two columns
        const columnHeight = Math.max(
          leftColumnProjects.length * 420, // Approximate card height
          rightColumnProjects.length * 420
        );
        // The total scroll track height should be the column height + the window height
        setContainerHeight(`${columnHeight + window.innerHeight}px`);
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize); // Re-run on window resize

    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current) {
        setMousePosition({ x: event.pageX, y: event.pageY });
      }
    };
    
    const handleMouseLeave = () => {
        setMousePosition({ x: -1000, y: -1000 });
    }

    window.addEventListener('mousemove', handleMouseMove);
    const currentSectionRef = sectionRef.current;
    currentSectionRef?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      currentSectionRef?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  const { scrollYProgress } = useScroll({
    target: stickyContainerRef,
    offset: ["start start", "end end"],
  });

  const leftColumnHeight = leftColumnProjects.length * 420;
  const rightColumnHeight = rightColumnProjects.length * 420;

  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -leftColumnHeight]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-rightColumnHeight, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 py-20"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('/window-bg-pot.png')
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
      
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold" style={{ fontFamily: "'Thiket'",color: "#00FFFF" }}>
          Featured Projects
        </h2>
      </div>

      <div
        ref={stickyContainerRef}
        className="relative"
        // --- THIS IS THE FIX ---
        style={{ height: containerHeight }}
      >
        <div
          className="sticky top-0 h-screen flex justify-center overflow-hidden gap-4 md:gap-15"
        >
          <motion.div className="w-full md:w-1/3" style={{ y: yLeft }}>
            {loopedLeft.map((project, index) => (
              <ProjectCard
                key={`l-${index}`}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
          <motion.div className="w-full md:w-1/3" style={{ y: yRight }}>
            {loopedRight.map((project, index) => (
              <ProjectCard
                key={`r-${index}`}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}