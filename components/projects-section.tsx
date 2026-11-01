"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

import { orderedProjects, type Project } from "@/lib/portfolio-content";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="group block h-full w-full text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#84DFD4]" aria-label={`View details for ${project.title}`}>
          <div className="h-full overflow-hidden rounded-lg border border-[rgba(153,192,202,0.24)] bg-[#111D2B] shadow-[0_16px_45px_rgba(0,0,0,0.22)] transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[#84DFD4] group-hover:shadow-[0_18px_50px_rgba(41,132,140,0.18)]">
            <div className="aspect-video overflow-hidden">
              <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#EDF4F5] transition-colors duration-300 group-hover:text-[#84DFD4]">{project.title}</h3>
              <p className="text-sm sm:text-base mb-4" style={{ color: "#E8B978" }}>{project.tech}</p>
              <p className="text-sm sm:text-base line-clamp-3" style={{ color: "#ACBAC8" }}>{project.description}</p>
              <span className="inline-block mt-3 text-sm font-medium text-[#84DFD4]">View details →</span>
            </div>
          </div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-[#080F1B]/85 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-[min(92vw,48rem)] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-[#426477] bg-[#111D2B] p-6 text-[#EDF4F5] shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-8 focus:outline-none">
          <Dialog.Close className="absolute right-4 top-3 rounded-md px-2 py-1 text-2xl text-[#EDF4F5] hover:text-[#84DFD4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#84DFD4]" aria-label="Close project details">×</Dialog.Close>
          <Dialog.Title className="pr-10 text-2xl font-bold text-[#84DFD4] sm:text-3xl">{project.title}</Dialog.Title>
          <p className="mt-2 text-sm text-[#E8B978]">{project.tech}</p>
          <Dialog.Description className="mt-5 leading-relaxed text-[#EDF4F5]">{project.description}</Dialog.Description>

          <div className="mt-7">
            <h4 className="mb-3 text-lg font-semibold">Architecture</h4>
            <ol className="flex flex-wrap items-center gap-2" aria-label={`${project.title} architecture flow`}>
              {project.architecture.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true" className="text-[#84DFD4]">→</span>}
                  <span className="rounded-md border border-[#84DFD4]/30 bg-[#84DFD4]/10 px-3 py-2 text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 text-lg font-semibold">What I built</h4>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#ACBAC8]">
                {project.implemented.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold">Results and scope</h4>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#ACBAC8]">
                {project.results.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-md border border-[#84DFD4] px-4 py-2 text-sm font-semibold text-[#84DFD4] hover:bg-[#84DFD4]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84DFD4]">
              View source on GitHub ↗
            </a>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export function ProjectsSection() {
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const reducedMotion = useReducedMotion();


  useEffect(() => {
    const measureTrack = () => {
      setScrollDistance(Math.max(0, (trackRef.current?.scrollWidth ?? 0) - window.innerWidth));
      setViewportHeight(window.innerHeight);
    };

    measureTrack();
    const resizeObserver = new ResizeObserver(measureTrack);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    window.addEventListener('resize', measureTrack);

    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    };
    
    const handleMouseLeave = () => {
        setMousePosition({ x: -1000, y: -1000 });
    }

    const currentSectionRef = sectionRef.current;
    currentSectionRef?.addEventListener('mousemove', handleMouseMove);
    currentSectionRef?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measureTrack);
      currentSectionRef?.removeEventListener('mousemove', handleMouseMove);
      currentSectionRef?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  const { scrollYProgress } = useScroll({
    target: stickyContainerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  

  return (
    <section
      ref={sectionRef}
      className="relative z-30 py-20"
  style={{
    backgroundImage: `
      radial-gradient(circle at 75% 8%, rgba(78, 171, 172, 0.16), transparent 46%), linear-gradient(rgba(8, 15, 27, 0.86), rgba(8, 15, 27, 0.86)),
      url('/window-bg-pot.jpg')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}    >
      <div 
        className="absolute inset-0 -z-20"
        style={{
            backgroundImage: "linear-gradient(rgba(132, 223, 212, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 223, 212, 0.055) 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
            backgroundImage: "linear-gradient(rgba(132, 223, 212, 0.34) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 223, 212, 0.34) 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
            maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 125px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />
      
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-5xl font-bold" style={{ fontFamily: "'Thiket'",color: "#84DFD4" }}>
          Projects
        </h2>
        <p className="mt-4 text-sm tracking-widest text-[#EDF4F5]">{reducedMotion ? "Swipe to explore →" : "Scroll to explore →"}</p>
      </div>

      <div
        ref={stickyContainerRef}
        className="relative"
        style={{ height: reducedMotion ? "auto" : scrollDistance + viewportHeight || "200vh" }}
      >
        <div
          className={reducedMotion ? "overflow-x-auto pb-6" : "sticky top-0 flex h-screen items-center overflow-hidden"}
        >
          <motion.div ref={trackRef} className="flex w-max items-stretch gap-6 px-6 md:gap-8 md:px-12" style={{ x: reducedMotion ? 0 : x }}>
            {orderedProjects.map((project) => (
              <div key={project.title} className="w-[min(88vw,30rem)] shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}
