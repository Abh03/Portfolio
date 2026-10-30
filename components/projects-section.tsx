"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

type Project = {
  title: string;
  tech: string;
  description: string;
  image: string;
  architecture: string[];
  implemented: string[];
  results: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "AI CV Screening",
    tech: "Python, FastAPI, Angular/TypeScript, PostgreSQL/pgvector, Redis, Celery, Docker, Gemini",
    description:
      "A four-stage recruiter platform for approved job descriptions and PDF CVs, with OCR, eligibility rules, hybrid retrieval, citation-verified LLM assessments, versioned scoring, and human-review routing.",
    image: "/ai-cv-screening.svg",
    link: "https://github.com/Abh03/AI-CV-Screening/",
    architecture: ["Approved JD + PDF CVs", "OCR and text extraction", "Eligibility + hybrid retrieval", "Cited LLM assessment", "Recruiter review"],
    implemented: [
      "Versioned job requirements, single-CV and campaign intake, and OCR fallback with Tesseract and Poppler for scanned PDFs.",
      "SentenceTransformer embeddings in pgvector plus full-text search, reciprocal-rank fusion, and CrossEncoder reranking.",
      "Citation checks, versioned scoring, saved recruiter decisions, exports, and Redis/Celery background work.",
    ],
    results: ["Limits model assessment to at most 15 candidates per job; unsupported or incomplete assessments go to human review.", "No screening-accuracy benchmark is reported."],
  },
  {
    title: "Brain Tissue Classification",
    tech: "Python, TensorFlow/Keras, HybridSN",
    description:
      "Ongoing research classifying healthy and tumorous brain tissue with spectral-attention HybridSN, HSI calibration, normalization, patch extraction, and a reported 94% F1-score.",
    image: "/brain-hyperspectral-neural-network.jpg",
    architecture: ["HISTOLOGY HSI-GB images", "Calibrate and normalize", "Extract spectral-spatial patches", "HybridSN + spectral attention", "Tissue class"],
    implemented: ["A TensorFlow/Keras HybridSN model that learns spatial and spectral features.", "Patch-based preprocessing and data loading for memory-constrained training."],
    results: ["The report records 93.54% accuracy and a 94% test F1-score on healthy versus tumorous tissue.", "Further validation on larger, more diverse data remains future work."],
  },
  {
    title: "Pneumonia Detection AI",
    tech: "Python, TensorFlow/Keras, U-Net, React/Vite, Django REST, OpenCV",
    description:
      "Built a CNN-based chest X-ray infection classifier with 96% accuracy, a React interface, and Django integration.",
    image: "/pneumonia-detection-ai.png",
    link: "https://github.com/aavashlamichhane/Lung-Disease-Detection",
    architecture: ["Chest X-ray upload", "React + Django API", "U-Net segmentation", "Mask and bounding boxes", "Prediction + confidence"],
    implemented: ["TensorFlow/Keras model for binary normal-versus-infection analysis.", "Django upload endpoint and React interface showing the input, annotated output, confidence, and highlighted regions."],
    results: ["96% project-reported accuracy for binary detection.", "The report notes that the model does not distinguish specific infection types or establish clinical validity."],
  },
  {
    title: "Image Colorization",
    tech: "Python, PyTorch, U-Net",
    description:
      "Trained a U-Net to predict color channels from grayscale images using CIFAR-10 and Places365, and compared MSE and MAE losses.",
    image: "/grayscale-to-color-transformation.png",
    architecture: ["Grayscale image", "L channel in Lab space", "PyTorch U-Net", "Predict a/b channels", "Color image"],
    implemented: ["A supervised colorization pipeline trained with CIFAR-10 and Places365.", "Compared MSE and MAE losses using PSNR, SSIM, and visual inspection."],
    results: ["The Places365 MAE run reports 24.89 dB PSNR and 0.893 SSIM.", "MSE scored higher on CIFAR-10 metrics; MAE produced more vibrant images in visual comparison."],
  },
  {
    title: "KUdos Sports Platform",
    tech: "React, Tailwind CSS, Firebase Auth, Firestore",
    description:
      "A Kathmandu University sports platform with match updates, scheduling, venue booking, and equipment management.",
    image: "/kudos-sports-management-dashboard.jpg",
    architecture: ["React + Tailwind UI", "Firebase authentication", "Firestore data", "Matches, venues, equipment"],
    implemented: ["Live match updates and scheduling, equipment booking, and venue management.", "Role-based access for students and administrators, with a responsive interface."],
    results: ["The report describes a working centralized sports-management platform for Kathmandu University; it gives no measured usage or performance figures."],
  },
  {
    title: "Tranzac Finance App",
    tech: "Flutter, Firebase, eSewa, Khalti",
    description:
      "A finance app for payments, category budgets, and lending and borrowing records, integrating eSewa and Khalti with Firebase-backed data.",
    image: "/tranzac-finance-app-ui.jpg",
    architecture: ["Flutter mobile UI", "eSewa + Khalti payments", "Firebase data", "Budgets and debt records"],
    implemented: ["Category budgets with expense logging and limit alerts.", "Borrowing and lending records, repayment tracking, and payment-gateway access."],
    results: ["The report describes these finance-management features, but gives no measured outcome.", "The planned machine-learning budget analysis was not trained, and incoming-money tracking was not implemented."],
  },
  {
    title: "RightMeal Fitness Planner",
    tech: "C++, Qt, MySQL",
    description:
      "A desktop app that calculates BMI, body fat, and maintenance calories to create diet plans with foods available in Nepal, alongside exercise guides.",
    image: "/rightmeal-fitness-app-nepal.jpg",
    architecture: ["Qt desktop UI", "C++ calculators and diet logic", "MySQL profile data", "Diet plan + exercise pages"],
    implemented: ["Account and profile screens; BMI, body-fat, and maintenance-calorie calculators.", "Diet plans with meal calories and macronutrients using foods available in Nepal, plus exercise instructions."],
    results: ["The report describes a functioning desktop application.", "Personalized workout plans were not completed; users instead choose from exercise pages."],
  },
  {
    title: "R.S. Craftmandu E-commerce",
    tech: "React, Vite, Tailwind CSS, Redux, Firebase",
    description:
      "An online store with product browsing, a shopping cart, order placement, and admin screens for managing products and orders.",
    image: "/modern-ecommerce-showcase.png",
    architecture: ["React + Vite storefront", "Redux cart", "Firebase authentication + Firestore", "Orders + admin dashboard"],
    implemented: ["Product browsing, search and categories, product detail pages, and a cart that persists in local storage.", "Order submission to Firestore, customer order history, and admin product/order screens."],
    results: ["The source contains storefront and order-management flows; no sales or performance results were supplied.", "A payment-gateway integration is not evidenced in the provided code."],
  },
  {
    title: "Voice Gender Classification",
    tech: "Python, librosa, DSP, scikit-learn, Random Forest",
    description:
      "Extracted voice features with digital signal processing and trained a Random Forest classifier for microphone-based predictions.",
    image: "/voice-classification-dsp.jpg",
    architecture: ["Microphone audio", "DSP feature extraction", "Random Forest", "Prediction"],
    implemented: ["Extracted pitch and spectral features from voice samples and trained a Random Forest model.", "Built a standalone Python application for live microphone input and prediction."],
    results: ["The report records 100% accuracy on its 200-sample test set (100 female and 100 male samples).", "The report also shows live microphone predictions; broader real-world accuracy is not established."],
  },
  {
    title: "Movie4AllMoods",
    tech: "Django, PostgreSQL, Bootstrap, pandas, scikit-learn",
    description:
      "A movie recommendation site using user ratings and viewing history, with filters for mood, genre, release date, and runtime.",
    image: "/movie-recommendation-mood-filter.png",
    link: "https://github.com/aavashlamichhane/Movie4AllMoods",
    architecture: ["Django web UI", "PostgreSQL movie data", "TF-IDF + cosine similarity", "Ranked recommendations"],
    implemented: ["Built movie lists, ratings, and filters for mood, genre, release date, and runtime.", "Used pandas and scikit-learn to vectorize genre, cast, and crew and rank similar movies for users."],
    results: ["The report describes a functional recommendation site; it gives no ranking-quality metric.", "Recommendations are limited to movies stored in its database."],
  },
];

const half = Math.ceil(projects.length / 2);
const leftColumnProjects = projects.slice(0, half);
const rightColumnProjects = projects.slice(half);

const loopedLeft = [...leftColumnProjects, ...leftColumnProjects];
const loopedRight = [...rightColumnProjects, ...rightColumnProjects];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="group mb-8 block w-full text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" aria-label={`View details for ${project.title}`}>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-[rgba(182,182,182,0.5)] hover:border-[#00FFFF] group-hover:shadow-[0_0_45px_rgba(0,255,255,0.5)] transition-all duration-300 group-hover:scale-105">
            <div className="aspect-video overflow-hidden">
              <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#E5E7EB] transition-colors duration-300 group-hover:text-[#00FFFF]">{project.title}</h3>
              <p className="text-sm mb-3" style={{ color: "#9F2B68" }}>{project.tech}</p>
              <p className="text-sm line-clamp-3" style={{ color: "#9CA3AF" }}>{project.description}</p>
              <span className="inline-block mt-3 text-sm font-medium text-[#00FFFF]">View details →</span>
            </div>
          </div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-[min(92vw,48rem)] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-cyan-400/50 bg-[#111829] p-6 text-[#E5E7EB] shadow-[0_0_50px_rgba(0,255,255,0.2)] sm:p-8 focus:outline-none">
          <Dialog.Close className="absolute right-4 top-3 rounded-md px-2 py-1 text-2xl text-[#E5E7EB] hover:text-[#00FFFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300" aria-label="Close project details">×</Dialog.Close>
          <Dialog.Title className="pr-10 text-2xl font-bold text-[#00FFFF] sm:text-3xl">{project.title}</Dialog.Title>
          <p className="mt-2 text-sm text-[#d888b2]">{project.tech}</p>
          <Dialog.Description className="mt-5 leading-relaxed text-[#E5E7EB]">{project.description}</Dialog.Description>

          <div className="mt-7">
            <h4 className="mb-3 text-lg font-semibold">Architecture</h4>
            <ol className="flex flex-wrap items-center gap-2" aria-label={`${project.title} architecture flow`}>
              {project.architecture.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true" className="text-[#00FFFF]">→</span>}
                  <span className="rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 text-lg font-semibold">What I built</h4>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#cbd5e1]">
                {project.implemented.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold">Results and scope</h4>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#cbd5e1]">
                {project.results.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-md border border-[#00FFFF] px-4 py-2 text-sm font-semibold text-[#00FFFF] hover:bg-cyan-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
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
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef<HTMLElement>(null);
  const [columnHeights, setColumnHeights] = useState({ left: 0, right: 0 });
  const [viewportHeight, setViewportHeight] = useState(0);


  useEffect(() => {
    const measureColumns = () => {
      setColumnHeights({
        left: (leftColumnRef.current?.scrollHeight ?? 0) / 2,
        right: (rightColumnRef.current?.scrollHeight ?? 0) / 2,
      });
      setViewportHeight(window.innerHeight);
    };

    measureColumns();
    const resizeObserver = new ResizeObserver(measureColumns);
    if (leftColumnRef.current) resizeObserver.observe(leftColumnRef.current);
    if (rightColumnRef.current) resizeObserver.observe(rightColumnRef.current);
    window.addEventListener('resize', measureColumns);

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
      window.removeEventListener('resize', measureColumns);
      currentSectionRef?.removeEventListener('mousemove', handleMouseMove);
      currentSectionRef?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  const { scrollYProgress } = useScroll({
    target: stickyContainerRef,
    offset: ["start start", "end end"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -columnHeights.left]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-columnHeights.right, 0]);
  

  return (
    <section
      ref={sectionRef}
      className="relative z-30 py-20"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('/window-bg-pot.jpg')
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
        style={{ height: columnHeights.left && columnHeights.right ? Math.max(columnHeights.left, columnHeights.right) + viewportHeight : "200vh" }}
      >
        <div
          className="sticky top-0 h-screen flex justify-center overflow-hidden gap-4 md:gap-15"
        >
          <motion.div ref={leftColumnRef} className="w-full md:w-1/3" style={{ y: yLeft }}>
            {loopedLeft.map((project, index) => (
              <ProjectCard
                key={`l-${index}`}
                project={project}
              />
            ))}
          </motion.div>
          <motion.div ref={rightColumnRef} className="w-full md:w-1/3" style={{ y: yRight }}>
            {loopedRight.map((project, index) => (
              <ProjectCard
                key={`r-${index}`}
                project={project}
              />
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}
