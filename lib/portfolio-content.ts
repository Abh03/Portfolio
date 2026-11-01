export const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        description:
          "Primary language for ML development, data analysis, and backend services.",
      },
      {
        name: "SQL",
        description:
          "Proficient in database design, querying, and data manipulation.",
      },
      {
        name: "TypeScript",
        description:
          "Typed JavaScript for web applications and user interfaces.",
      },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      {
        name: "PyTorch",
        description:
          "Core deep learning framework for building and training neural networks.",
      },
      {
        name: "TensorFlow",
        description:
          "Experience in building and deploying machine learning models.",
      },
      {
        name: "OpenCV",
        description:
          "Library for computer vision tasks like image processing and object detection.",
      },
      {
        name: "MediaPipe",
        description:
          "Landmark and pose estimation for computer vision applications.",
      },
      {
        name: "YOLO",
        description: "Object detection for computer vision applications.",
      },
      {
        name: "Hugging Face",
        description: "Model hosting and inference workflows.",
      },
      {
        name: "RAG",
        description: "Retrieval-augmented generation with hybrid retrieval and evidence-backed prompts.",
      },
      { name: "pgvector", description: "Vector search in PostgreSQL." },
      {
        name: "Gemini/OpenAI APIs",
        description: "Integrating large language models into applications.",
      },
      {
        name: "Scikit-learn",
        description: "Classical machine learning and data processing.",
      },
      { name: "NumPy", description: "Numerical computing with arrays." },
      { name: "pandas", description: "Data manipulation and analysis." },
    ],
  },
  {
    title: "Backend & Infra",
    skills: [
      {
        name: "FastAPI",
        description:
          "Modern, high-performance web framework for building APIs with Python.",
      },
      {
        name: "PostgreSQL",
        description: "Relational database used in application backends.",
      },
      {
        name: "Redis",
        description: "Caching and background-work infrastructure.",
      },
      {
        name: "Docker",
        description:
          "Containerization tool for consistent deployment across different environments.",
      },
      { name: "Next.js", description: "React framework for web applications." },
      {
        name: "GitHub Actions CI",
        description: "Continuous integration workflows.",
      },
      { name: "pytest", description: "Python test automation." },
    ],
  },
];

// Flat list for easy searching of descriptions
export const allSkills = skillCategories.flatMap((category) => category.skills);

export const educationData = [
  {
    degree:
      "Advanced Engineering Program in AI Agent Workflows & Agentic Systems",
    institution: "IIT Madras Pravartak",
    period: "Apr 2026 – Nov 2026 (expected)",
    logo: "/iit.jpg",
    description:
      "Coursework: multi-agent collaboration topologies; RAG and context engineering (pgvector, hybrid retrieval); multi-agent orchestration and observability (LangChain, LangGraph, LangSmith).",
  },
  {
    degree: "Bachelor of Engineering: Computer Engineering (CGPA: 3.60/4.0)",
    institution: "Kathmandu University",
    period: "Feb 2022 – Jul 2026",
    logo: "/kathmandu_university.jpg",
    description:
      "Bachelor of Engineering in Computer Engineering, completed July 2026 with a CGPA of 3.60/4.0.",
  },
];

export const publication = {
  title:
    "Real-Time Assistive Navigation for Visually Impaired Using YOLOv12 and MediaPipe Pose Estimation",
  status: "IEEE Xplore · 8th International Conference on DSIT 2025",
  logo: "/ieee.png",
  description:
    "Co-authored research on a real-time assistive navigation system that helps visually impaired users locate indoor objects through voice commands and spatial audio feedback.",
  doi: "10.1109/DSIT67006.2025.11389902",
  paperUrl: "https://ieeexplore.ieee.org/document/11389902",
  codeUrl: "https://github.com/santoshyadav-29/Deerhack_2025",
  achievements: [
    "Integrated YOLOv12 object detection and MediaPipe pose estimation with voice commands and spatial audio feedback.",
    "Achieved 94.7% detection accuracy with 1.2-second response latency.",
  ],
  skills: [
    "YOLOv12",
    "MediaPipe",
    "Computer Vision",
    "Spatial Audio",
    "Voice Commands",
  ],
};

export const experiences = [
  {
    title: "Co-founder & AI Lead",
    company: "CreoTech",
    period: "May 2026 – Present · Part-time",
    logo: "",
    description:
      "Led AI and engineering for the MVP of a B2B employee-wellbeing platform.",
    achievements: [
      "Built a webcam-based posture estimation tool using MediaPipe landmarks and a regression model, with eye-strain reminders and guided exercises.",
    ],
    skills: ["Python", "FastAPI", "Next.js", "OpenCV", "MediaPipe"],
  },
  {
    title: "Software Engineer (Traineeship)",
    company: "Infinite Computer Solutions",
    period: "Aug 2026 – Oct 2026 · Full-time",
    logo: "/infinite-computer-solutions-logo.jpg",
    description:
      "Full-time software engineering traineeship focused on an AI CV screening platform.",
    achievements: [
      "Built a platform to match a pool of 1,000+ CVs against multiple job descriptions at once, surface candidates who fit several roles, and shortlist top candidates for each role. More details under Projects section.",
    ],
    skills: ["FastAPI", "Angular", "PostgreSQL", "Redis", "Celery"],
  },
  {
    title: "Software Engineer",
    company: "NAVIO",
    period: "Oct 2025 – Feb 2026 · Full-time",
    logo: "/navio.png",
    description:
      "Built production LLM workflows and vision-based document extraction for a shipping-industry AI platform.",
    achievements: [
      "Cut LLM costs ~90% by migrating shipment email parsing from OpenAI to Gemini, using dynamic model routing, input sanitization, Redis caching of suggested questions, and atomic DB locking to prevent duplicate inference and race conditions.",
      "Built Gemini vision-based B/L extraction for the live Pontus shipping chatbot, with per-field bounding boxes on complex maritime documents.",
      "Implemented role-adaptive prompts for freight forwarders, cargo owners, and charterers, plus a fault-tolerant regeneration workflow with soft deletes and rollback to prevent data corruption.",
    ],
    skills: ["Gemini", "Redis", "Computer Vision", "Prompt Engineering", "Database Reliability"],
  },
  {
    title: "Co-founder & ML Engineer",
    company: "Dr. Fish",
    period: "Feb 2024 – Nov 2025 · Part-time",
    logo: "/dr-fish-logo.png",
    description:
      "Co-founded an award-recognized aquaculture startup and led its fish-disease classification work.",
    achievements: [
      "Trained a TensorFlow ResNet50 fish-disease classifier to 95% accuracy, deployed it on Hugging Face, and reduced inference latency from 200 ms to 120 ms.",
      "Built the FastAPI backend that served the model to the user-facing app. Dr. Fish was an ICT Award 2024 finalist and a Top 7 DIAL accelerator participant (Swiss Agency for Development and Cooperation).",
    ],
    skills: ["TensorFlow", "ResNet50", "Hugging Face", "FastAPI", "Computer Vision"],
  },
  {
    title: "Co-founder",
    company: "Yagya InfoTech",
    period: "06/2024 - Present",
    logo: "/yagya-infotech-logo.png",
    description:
      "Directed data analysis and product feature strategy for an AI-integrated School Management System.",
    achievements: [
      "Analyzed market data for developing a feature strategy for an AI-integrated School Management System",
      "Mentored junior developers and designed professional growth frameworks for the engineering team, improving team delivery by ~20%.",
    ],
    skills: [
      "Data Analysis",
      "Leadership",
      "Product Strategy",
      "AI Integration",
    ],
  },
  {
    title: "Coordinator, Entrepreneurship and Monetization Community",
    company: "Kathmandu University Computer Club",
    period: "01/2024 - 01/2025",
    logo: "/kucc-logo.png",
    description:
      "Coordinated a tech idea pitching event partnering with industry leaders to provide mentorship for 10+ early-stage startups.",
    achievements: [
      "Forged partnerships with industry leaders to provide mentorship for 10+ early-stage startups.",
      "Managed event sponsorships and stakeholder relations for a large-scale university tech competition.",
    ],
    skills: ["Entrepreneurship", "Community Building", "Startup Mentoring"],
  },
  {
    title: "Sponsorship and Partnership Lead",
    company: "IT Meet, Kathmandu University",
    period: "06/2024 - 12/2024",
    logo: "/it-meet-logo.jpg",
    description:
      "Led partnership efforts for one of Nepal's largest tech events, securing support from over 40 tech and non-tech companies.",
    achievements: [
      "Secured monetary and in-kind support from 40+ companies.",
      "Managed corporate relations for a large-scale tech event.",
    ],
    skills: ["Partnership Development", "Event Management", "Fundraising"],
  },
];

export const recognitions = [
  {
    title: "Top 7, DIAL Accelerator Program (Dr. Fish)",
    organization: "Swiss Agency for Development and Cooperation",
    image: "/aadhyanta.jpg",
  },
  {
    title: "Finalist, ICT Award 2024 (Dr. Fish)",
    organization: "ICT Foundation",
    image: "/ict-award-finalist.png",
  },
  {
    title: "The Duke of Edinburgh's International Award",
    organization: "The Duke of Edinburgh's International Award Foundation",
    image: "/duke-of-edinburgh-award.jpg",
  },
  {
    title: "Graduate, Universal Concept of Mental Arithmetic System (UCMAS)",
    organization: "UCMAS Nepal",
    image: "/ucmas.png",
  },
];

export type Project = {
  title: string;
  tech: string;
  description: string;
  image: string;
  architecture: string[];
  implemented: string[];
  results: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "AI CV Screening System",
    tech: "Python, FastAPI, Angular/TypeScript, PostgreSQL/pgvector, Redis, Celery, Docker, SentenceTransformers, Gemini, pytest",
    description:
      "A four-stage CV screening platform that matches 1,000+ CVs against multiple job descriptions, surfaces cross-matches, and shortlists top candidates per job using evidence-backed assessments.",
    image: "/ai-cv-screening.svg",
    link: "https://github.com/Abh03/AI-CV-Screening/",
    architecture: [
      "Multiple JDs + 1,000+ PDF CVs",
      "PDF OCR + eligibility rules",
      "Hybrid pgvector/full-text retrieval",
      "Fused and reranked evidence",
      "Cited LLM assessment + human review",
    ],
    implemented: [
      "Built PDF OCR, eligibility rules, and hybrid pgvector/full-text retrieval, then fused and reranked evidence to shortlist up to 15 candidates per job.",
      "Added citation-verified LLM assessments, versioned scoring, human-review routing, and recoverable Celery workflows with quota controls.",
      "Built GitHub Actions CI covering tests, migrations, and Docker image builds.",
    ],
    results: [
      "Shortlists up to 15 candidates per job and surfaces cross-matches across roles.",
      "Cut estimated LLM input tokens by 61.8% across 12 offline cases through evidence-preserving prompt compaction.",
    ],
  },
  {
    title: "Brain Tissue Classification using Hyperspectral Imaging",
    tech: "HybridSN, Spectral Attention, Hyperspectral Imaging",
    description:
      "Ongoing research using HybridSN with spectral attention for brain tissue classification, achieving a 94% F1-score with an HSI calibration, normalization, and patch-extraction pipeline.",
    image: "/brain-hyperspectral-neural-network.jpg",
    architecture: [
      "Hyperspectral brain tissue images",
      "Calibrate and normalize",
      "Extract spectral-spatial patches",
      "HybridSN + spectral attention",
      "Tissue class",
    ],
    implemented: [
      "Implemented HybridSN with spectral attention for brain tissue classification.",
      "Designed a data pipeline for efficient HSI calibration, normalization, and patch extraction across complex datasets.",
    ],
    results: ["Ongoing research with a reported 94% F1-score."],
  },
  {
    title: "Pneumonia Detection AI",
    tech: "Python, TensorFlow/Keras, U-Net, React/Vite, Django REST, OpenCV",
    description:
      "Built a CNN-based chest X-ray infection classifier with 96% accuracy, a React interface, and Django integration.",
    image: "/pneumonia-detection-ai.png",
    link: "https://github.com/aavashlamichhane/Lung-Disease-Detection",
    architecture: [
      "Chest X-ray upload",
      "React + Django API",
      "U-Net segmentation",
      "Mask and bounding boxes",
      "Prediction + confidence",
    ],
    implemented: [
      "TensorFlow/Keras model for binary normal-versus-infection analysis.",
      "Django upload endpoint and React interface showing the input, annotated output, confidence, and highlighted regions.",
    ],
    results: [
      "96% project-reported accuracy for binary detection.",
      "The report notes that the model does not distinguish specific infection types or establish clinical validity.",
    ],
  },
  {
    title: "Image Colorization",
    tech: "Python, PyTorch, U-Net",
    description:
      "Trained a U-Net to predict color channels from grayscale images using CIFAR-10 and Places365, and compared MSE and MAE losses.",
    image: "/grayscale-to-color-transformation.png",
    architecture: [
      "Grayscale image",
      "L channel in Lab space",
      "PyTorch U-Net",
      "Predict a/b channels",
      "Color image",
    ],
    implemented: [
      "A supervised colorization pipeline trained with CIFAR-10 and Places365.",
      "Compared MSE and MAE losses using PSNR, SSIM, and visual inspection.",
    ],
    results: [
      "The Places365 MAE run reports 24.89 dB PSNR and 0.893 SSIM.",
      "MSE scored higher on CIFAR-10 metrics; MAE produced more vibrant images in visual comparison.",
    ],
  },
  {
    title: "KUdos Sports Platform",
    tech: "React, Tailwind CSS, Firebase Auth, Firestore",
    description:
      "A Kathmandu University sports platform with match updates, scheduling, venue booking, and equipment management.",
    image: "/kudos-sports-management-dashboard.jpg",
    architecture: [
      "React + Tailwind UI",
      "Firebase authentication",
      "Firestore data",
      "Matches, venues, equipment",
    ],
    implemented: [
      "Live match updates and scheduling, equipment booking, and venue management.",
      "Role-based access for students and administrators, with a responsive interface.",
    ],
    results: [
      "The report describes a working centralized sports-management platform for Kathmandu University; it gives no measured usage or performance figures.",
    ],
  },
  {
    title: "Tranzac Finance App",
    tech: "Flutter, Firebase, eSewa, Khalti",
    description:
      "A finance app for payments, category budgets, and lending and borrowing records, integrating eSewa and Khalti with Firebase-backed data.",
    image: "/tranzac-finance-app-ui.jpg",
    architecture: [
      "Flutter mobile UI",
      "eSewa + Khalti payments",
      "Firebase data",
      "Budgets and debt records",
    ],
    implemented: [
      "Category budgets with expense logging and limit alerts.",
      "Borrowing and lending records, repayment tracking, and payment-gateway access.",
    ],
    results: [
      "The report describes these finance-management features, but gives no measured outcome.",
      "The planned machine-learning budget analysis was not trained, and incoming-money tracking was not implemented.",
    ],
  },
  {
    title: "RightMeal Fitness Planner",
    tech: "C++, Qt, MySQL",
    description:
      "A desktop app that calculates BMI, body fat, and maintenance calories to create diet plans with foods available in Nepal, alongside exercise guides.",
    image: "/rightmeal-fitness-app-nepal.jpg",
    architecture: [
      "Qt desktop UI",
      "C++ calculators and diet logic",
      "MySQL profile data",
      "Diet plan + exercise pages",
    ],
    implemented: [
      "Account and profile screens; BMI, body-fat, and maintenance-calorie calculators.",
      "Diet plans with meal calories and macronutrients using foods available in Nepal, plus exercise instructions.",
    ],
    results: [
      "The report describes a functioning desktop application.",
      "Personalized workout plans were not completed; users instead choose from exercise pages.",
    ],
  },
  {
    title: "R.S. Craftmandu E-commerce",
    tech: "React, Vite, Tailwind CSS, Redux, Firebase",
    description:
      "An online store with product browsing, a shopping cart, order placement, and admin screens for managing products and orders.",
    image: "/modern-ecommerce-showcase.png",
    architecture: [
      "React + Vite storefront",
      "Redux cart",
      "Firebase authentication + Firestore",
      "Orders + admin dashboard",
    ],
    implemented: [
      "Product browsing, search and categories, product detail pages, and a cart that persists in local storage.",
      "Order submission to Firestore, customer order history, and admin product/order screens.",
    ],
    results: [
      "The source contains storefront and order-management flows; no sales or performance results were supplied.",
      "A payment-gateway integration is not evidenced in the provided code.",
    ],
  },
  {
    title: "Voice Gender Classification",
    tech: "Python, librosa, DSP, scikit-learn, Random Forest",
    description:
      "Extracted voice features with digital signal processing and trained a Random Forest classifier for microphone-based predictions.",
    image: "/voice-classification-dsp.jpg",
    architecture: [
      "Microphone audio",
      "DSP feature extraction",
      "Random Forest",
      "Prediction",
    ],
    implemented: [
      "Extracted pitch and spectral features from voice samples and trained a Random Forest model.",
      "Built a standalone Python application for live microphone input and prediction.",
    ],
    results: [
      "The report records 100% accuracy on its 200-sample test set (100 female and 100 male samples).",
      "The report also shows live microphone predictions; broader real-world accuracy is not established.",
    ],
  },
  {
    title: "Movie4AllMoods",
    tech: "Django, PostgreSQL, Bootstrap, pandas, scikit-learn",
    description:
      "A movie recommendation site using user ratings and viewing history, with filters for mood, genre, release date, and runtime.",
    image: "/movie-recommendation-mood-filter.png",
    link: "https://github.com/aavashlamichhane/Movie4AllMoods",
    architecture: [
      "Django web UI",
      "PostgreSQL movie data",
      "TF-IDF + cosine similarity",
      "Ranked recommendations",
    ],
    implemented: [
      "Built movie lists, ratings, and filters for mood, genre, release date, and runtime.",
      "Used pandas and scikit-learn to vectorize genre, cast, and crew and rank similar movies for users.",
    ],
    results: [
      "The report describes a functional recommendation site; it gives no ranking-quality metric.",
      "Recommendations are limited to movies stored in its database.",
    ],
  },
];

const aiMlProjectTitles = new Set([
  "AI CV Screening System",
  "Brain Tissue Classification using Hyperspectral Imaging",
  "Pneumonia Detection AI",
  "Voice Gender Classification",
  "Image Colorization",
  "Movie4AllMoods",
]);

export const orderedProjects = [
  ...projects.filter((project) => aiMlProjectTitles.has(project.title)),
  ...projects.filter((project) => !aiMlProjectTitles.has(project.title)),
];
