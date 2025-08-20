"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- 1. IMPORT THE CUSTOM HOOK (or define it here) ---
export function useIsMobile(breakpoint = 768) {
 const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on initial render
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreenSize();

    // Add listener for resize events
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  return isMobile;}


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
// For mobile, these become top and bottom rows
const topRowProjects = projects.slice(0, half);
const bottomRowProjects = projects.slice(half);

// ProjectCard component remains the same...
const ProjectCard = ({ project, onClick }: { project: (typeof projects)[0]; onClick: () => void; }) => {
    // ... no changes needed here
    return (
        <div className="group cursor-pointer" onClick={onClick}>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-[rgba(182,182,182,0.5)] hover:border-[#00FFFF] group-hover:shadow-[0_0_45px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#E5E7EB] transition-colors duration-300 group-hover:text-[#00FFFF]">{project.title}</h3>
                    <p className="text-sm mb-3" style={{ color: "#9F2B68" }}>{project.tech}</p>
                    <p className="text-sm line-clamp-3" style={{ color: "#9CA3AF" }}>{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // --- 2. USE THE HOOK TO GET DEVICE TYPE ---
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- 3. DEFINE BOTH VERTICAL AND HORIZONTAL TRANSFORMS ---
  // Desktop (Vertical)
  const yTop = useTransform(scrollYProgress, [0, 1], [0, -topRowProjects.length * 200]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [-bottomRowProjects.length * 200, 0]);

  // Mobile (Horizontal)
  // Calculate the total scroll distance needed in percentage
  const xTopDistance = (topRowProjects.length - 1) * 90; // 90% per card (80% width + 10% gap)
  const xBottomDistance = (bottomRowProjects.length - 1) * 90;
  
  const xTop = useTransform(scrollYProgress, [0, 1], ['5%', `-${xTopDistance}%`]); // L-to-R feel by starting from right
  const xBottom = useTransform(scrollYProgress, [0, 1], [`-${xBottomDistance}%`, '5%']); // R-to-L feel

  return (
    <section ref={containerRef} className="relative z-30" style={{ height: isMobile ? `${projects.length * 50}vh` : `${Math.max(topRowProjects.length, bottomRowProjects.length) * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ backgroundImage: "url('/window-bg-pot.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-6xl mx-auto text-center py-12 px-4">
          <h2 className="text-5xl font-bold" style={{ fontFamily: "'Thiket'",color: "#00FFFF" }}>Featured Projects</h2>
        </div>

        {/* --- 4. CONDITIONALLY RENDER LAYOUT BASED ON isMobile --- */}
        {isMobile ? (
          // Mobile Horizontal Layout
          <div className="h-full flex flex-col justify-center gap-8 py-8">
            <motion.div className="flex items-center gap-[10vw]" style={{ x: xTop }}>
              {topRowProjects.map((project, index) => (
                <div key={`t-${index}`} className="w-[80vw] flex-shrink-0">
                  <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                </div>
              ))}
            </motion.div>
            <motion.div className="flex items-center gap-[10vw]" style={{ x: xBottom }}>
              {bottomRowProjects.map((project, index) => (
                <div key={`b-${index}`} className="w-[80vw] flex-shrink-0">
                  <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          // Desktop Vertical Layout
          <div className="max-w-6xl mx-auto h-full grid grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-12" style={{ y: yTop }}>
              {topRowProjects.map((project, index) => (
                <ProjectCard key={`l-${index}`} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </motion.div>
            <motion.div className="space-y-12" style={{ y: yBottom }}>
              {bottomRowProjects.map((project, index) => (
                <ProjectCard key={`r-${index}`} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}