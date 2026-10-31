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
        name: "C++",
        description:
          "Efficient language for performance-critical applications and systems programming.",
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
        name: "RAG Pipelines",
        description:
          "Building Retrieval-Augmented Generation systems for LLMs.",
      },
      {
        name: "LLM APIs (Gemini, OpenAI)",
        description:
          "Integrating state-of-the-art large language models into applications.",
      },
      {
        name: "CNNs",
        description:
          "Deep learning architecture specialized for image and spatial data processing.",
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
        name: "Scikit-learn",
        description: "Classical machine learning and data processing.",
      },
      { name: "NumPy", description: "Numerical computing with arrays." },
      { name: "pandas", description: "Data manipulation and analysis." },
      {
        name: "LangChain",
        description: "Framework for building LLM workflows.",
      },
      {
        name: "LangGraph",
        description: "Framework for stateful agent workflows.",
      },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      {
        name: "FastAPI",
        description:
          "Modern, high-performance web framework for building APIs with Python.",
      },
      {
        name: "Docker",
        description:
          "Containerization tool for consistent deployment across different environments.",
      },
      {
        name: "Git",
        description:
          "Essential tool for version control and collaborative development.",
      },
      {
        name: "Supabase",
        description:
          "Backend-as-a-service for database, auth, and real-time features.",
      },
      {
        name: "Vector Databases",
        description:
          "Storing and searching high-dimensional embeddings for AI applications.",
      },
      {
        name: "AWS",
        description:
          "Cloud platform for deploying and scaling machine learning workloads.",
      },
      {
        name: "PostgreSQL",
        description: "Relational database used in application backends.",
      },
      { name: "pgvector", description: "Vector search in PostgreSQL." },
      {
        name: "Redis",
        description: "Caching and background-work infrastructure.",
      },
      { name: "Next.js", description: "React framework for web applications." },
      {
        name: "Vercel KV",
        description: "Key-value caching for web applications.",
      },
      {
        name: "GitHub Actions",
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
      "Intensive program focused on designing enterprise-ready, multi-agent AI systems. The hands-on curriculum centers on integrating APIs with tools like LangChain, implementing Human-in-the-Loop governance, and architecting autonomous workflows for fully deployable projects.",
  },
  {
    degree: "Bachelor of Engineering: Computer Engineering (CGPA: 3.60/4.0)",
    institution: "Kathmandu University",
    period: "Feb 2022 – Jul 2026",
    logo: "/kathmandu_university.jpg",
    description:
      "Rigorous syllabus with strong software and mathematical foundation, mastering Data Structures, Algorithms, Database Management, and complex calculus. Specialized in the intersection of hardware and machine learning through advanced electives in Deep Learning, Artificial Intelligence, and IoT.",
  },
];

export const publication = {
  title:
    "Real-Time Assistive Navigation for Visually Impaired Using YOLOv12 and MediaPipe Pose Estimation",
  status: "IEEE Xplore · 8th International Conference on DSIT 2025",
  logo: "/ieee.png",
  description:
    "A co-authored indoor navigation framework that combines computer vision, natural language processing, voice commands, and spatial audio feedback.",
  doi: "10.1109/DSIT67006.2025.11389902",
  paperUrl: "https://ieeexplore.ieee.org/document/11389902",
  codeUrl: "https://github.com/santoshyadav-29/Deerhack_2025",
  achievements: [
    "Integrated YOLOv12 for precise real-time object detection and MediaPipe for human pose estimation.",
    "Developed a natural voice command interface and spatial audio feedback system for intuitive object localization.",
    "Achieved 94.7% detection accuracy across diverse indoor environments.",
    "Optimized the pipeline to maintain a low 1.2-second response latency for real-time usability.",
  ],
  skills: [
    "YOLOv12",
    "MediaPipe",
    "Computer Vision",
    "Spatial Audio",
    "Natural Language Processing",
  ],
};

export const experiences = [
  {
    title: "Software Engineer (Traineeship)",
    company: "Infinite Computer Solutions",
    period: "08/2026 - Present",
    logo: "/infinite-computer-solutions-logo.jpg",
    description:
      "Full-time enterprise training in full-stack development, data engineering, QA, and applied AI.",
    achievements: [
      "Built an AI CV Screening system that screens PDF CVs against approved job descriptions and presents evidence for recruiter review.",
    ],
    skills: ["Applied AI", "Full-stack Development", "Data Engineering", "QA"],
  },
  {
    title: "Co-founder & AI Lead",
    company: "CreoTech",
    period: "05/2026 - Present",
    logo: "",
    description:
      "Led AI and engineering for an employee-wellbeing platform MVP.",
    achievements: [
      "Built a webcam-based posture estimation tool using MediaPipe landmarks and a regression model, with eye-strain reminders and guided exercises.",
    ],
    skills: ["Python", "FastAPI", "Next.js", "OpenCV", "MediaPipe"],
  },
  {
    title: "Software Engineer",
    company: "NAVIO",
    period: "10/2025 - 02/2026",
    logo: "/navio.png",
    description:
      "Architected and implemented critical AI infrastructure and vision pipelines for maritime logistics automation.",
    achievements: [
      "Migrated shipment email parsing from OpenAI to Gemini, cutting LLM costs by ~90% with dynamic model routing, input sanitization, Redis/Vercel KV caching, and atomic DB locking.",
      "Vision & Extraction: Built Gemini vision-based B/L extraction for Pontus, with per-field bounding boxes for complex maritime documents and extraction in under 30 seconds.",
      "System Reliability: Designed a fault-tolerant regeneration workflow with soft deletes and rollback logic to prevent data corruption.",
      "Implemented role-adaptive prompts for freight forwarders, cargo owners, and charterers to align responses with business KPIs.",
    ],
    skills: [
      "Gemini",
      "AI Infrastructure",
      "Computer Vision",
      "System Reliability",
      "Adaptive AI",
    ],
  },
  {
    title: "Co-founder & ML Engineer",
    company: "Dr. Fish",
    period: "02/2024 - 11/2025",
    logo: "/dr-fish-logo.png",
    description:
      "Architected the core AI strategy for an award-winning IoT aquaculture system, focusing on automated disease detection and yield optimization.",
    achievements: [
      "Engineered a ResNet50 computer vision model for fish disease classification, driving the core AI strategy for an award-winning IoT aquaculture system designed to boost yield by 35%.",
      "Developed an end-to-end AI pipeline for real-time fish health monitoring using deep learning.",
      "Trained the TensorFlow classifier to 95% accuracy, deployed it on Hugging Face, and reduced inference latency from 200 ms to 120 ms.",
      "Built a FastAPI backend to serve the model to the user-facing app.",
    ],
    skills: [
      "Machine Learning",
      "ResNet50",
      "Computer Vision",
      "IoT",
      "AgriTech",
    ],
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
    title:
      "Top 7, Digital Innovation in Agriculture and Logistics (DIAL) Accelerator Program",
    organization:
      "Aadhyanta Fund Management & Swiss Agency for Development and Cooperation(SDC)",
    image: "/aadhyanta.jpg",
  },
  {
    title: "Finalist, ICT Award Rising Star 2024 (Dr. Fish)",
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
    title: "AI CV Screening",
    tech: "Python, FastAPI, Angular/TypeScript, PostgreSQL/pgvector, Redis, Celery, Docker, Gemini",
    description:
      "A four-stage recruiter platform for approved job descriptions and PDF CVs, with OCR, eligibility rules, hybrid retrieval, citation-verified LLM assessments, versioned scoring, and human-review routing.",
    image: "/ai-cv-screening.svg",
    link: "https://github.com/Abh03/AI-CV-Screening/",
    architecture: [
      "Approved JD + PDF CVs",
      "OCR and text extraction",
      "Eligibility + hybrid retrieval",
      "Cited LLM assessment",
      "Recruiter review",
    ],
    implemented: [
      "Versioned job requirements, single-CV and campaign intake, and OCR fallback with Tesseract and Poppler for scanned PDFs.",
      "SentenceTransformer embeddings in pgvector plus full-text search, reciprocal-rank fusion, and CrossEncoder reranking.",
      "Citation checks, versioned scoring, saved recruiter decisions, exports, and Redis/Celery background work.",
    ],
    results: [
      "Limits model assessment to at most 15 candidates per job; unsupported or incomplete assessments go to human review.",
      "No screening-accuracy benchmark is reported.",
    ],
  },
  {
    title: "Brain Tissue Classification",
    tech: "Python, TensorFlow/Keras, HybridSN",
    description:
      "Ongoing research classifying healthy and tumorous brain tissue with spectral-attention HybridSN, HSI calibration, normalization, patch extraction, and a reported 94% F1-score.",
    image: "/brain-hyperspectral-neural-network.jpg",
    architecture: [
      "HISTOLOGY HSI-GB images",
      "Calibrate and normalize",
      "Extract spectral-spatial patches",
      "HybridSN + spectral attention",
      "Tissue class",
    ],
    implemented: [
      "A TensorFlow/Keras HybridSN model that learns spatial and spectral features.",
      "Patch-based preprocessing and data loading for memory-constrained training.",
    ],
    results: [
      "The report records 93.54% accuracy and a 94% test F1-score on healthy versus tumorous tissue.",
      "Further validation on larger, more diverse data remains future work.",
    ],
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
  "AI CV Screening",
  "Brain Tissue Classification",
  "Pneumonia Detection AI",
  "Voice Gender Classification",
  "Image Colorization",
  "Movie4AllMoods",
]);

export const orderedProjects = [
  ...projects.filter((project) => aiMlProjectTitles.has(project.title)),
  ...projects.filter((project) => !aiMlProjectTitles.has(project.title)),
];
