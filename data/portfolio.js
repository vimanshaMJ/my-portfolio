// ============================================================
//  PORTFOLIO DATA  —  Edit this file to update your portfolio
// ============================================================

export const siteConfig = {
  name: "Alex Perera",
  title: "AI/ML Engineer & Full-Stack Developer",
  tagline: "Building intelligent systems — from model to production.",
  email: "alex@example.com",
  location: "Colombo, Sri Lanka",
  available: true, // set to false to hide the "Open to work" badge
  social: {
    github: "https://github.com/alexperera",
    linkedin: "https://linkedin.com/in/alexperera",
    twitter: "https://twitter.com/alexperera",   // optional, remove if not needed
  },
};

export const about = {
  bio: [
    "I'm an Associate AI/ML Engineer with a passion for building end-to-end intelligent systems — from designing and training models to shipping production-ready applications.",
    "My background spans machine learning, NLP, and full-stack development, letting me own the entire lifecycle of a product: the data pipelines, the model, the API, and the UI.",
    "When I'm not training models, I'm building fast, clean web experiences using React, Next.js, and modern backend frameworks.",
  ],
  resumeUrl: "/resume.pdf", // put your resume PDF in /public/resume.pdf
};

export const skills = [
  {
    category: "AI / ML",
    items: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "OpenCV", "Pandas", "NumPy"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Pinecone (Vector DB)"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "GitHub Actions", "AWS", "GCP", "Vercel", "Linux"],
  },
];

export const experience = [
  {
    role: "Associate AI/ML Engineer",
    company: "Tech Company Ltd",
    location: "Colombo, Sri Lanka",
    period: "Jan 2024 – Present",
    type: "Full-time",
    bullets: [
      "Designed and deployed NLP pipelines for document classification, achieving 94% accuracy on internal benchmarks.",
      "Built a full-stack ML monitoring dashboard using Next.js and FastAPI to track model drift in production.",
      "Collaborated with cross-functional teams to integrate ML models into existing product workflows.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Startup XYZ",
    location: "Remote",
    period: "Jun 2023 – Dec 2023",
    type: "Internship",
    bullets: [
      "Developed RESTful APIs with Node.js and PostgreSQL serving 10,000+ daily users.",
      "Built responsive UI components with React and Tailwind CSS.",
      "Reduced page load time by 40% through code splitting and caching strategies.",
    ],
  },
];

export const projects = [
  {
    title: "SentimentLens",
    description: "Real-time sentiment analysis web app for social media monitoring. Fine-tuned a BERT model on domain-specific data and served it via a FastAPI backend with a Next.js dashboard.",
    tags: ["NLP", "PyTorch", "FastAPI", "Next.js", "PostgreSQL"],
    liveUrl: "https://sentimentlens.vercel.app",
    githubUrl: "https://github.com/alexperera/sentimentlens",
    featured: true,
  },
  {
    title: "DocuChat",
    description: "RAG-powered chatbot that lets users upload PDFs and chat with their documents. Built with LangChain, OpenAI API, Pinecone, and a clean React interface.",
    tags: ["LLM", "LangChain", "Pinecone", "React", "FastAPI"],
    liveUrl: "",
    githubUrl: "https://github.com/alexperera/docuchat",
    featured: true,
  },
  {
    title: "VisionTrack",
    description: "Object detection & tracking system for retail foot-traffic analytics using YOLOv8 and OpenCV. Exports reports to a PostgreSQL database.",
    tags: ["Computer Vision", "YOLOv8", "OpenCV", "Python", "PostgreSQL"],
    liveUrl: "",
    githubUrl: "https://github.com/alexperera/visiontrack",
    featured: true,
  },
  {
    title: "DevBoard",
    description: "A full-stack project management app with real-time updates using WebSockets, built with Next.js, Express, and MongoDB.",
    tags: ["Next.js", "Node.js", "MongoDB", "WebSockets"],
    liveUrl: "https://devboard.vercel.app",
    githubUrl: "https://github.com/alexperera/devboard",
    featured: false,
  },
];

export const blog = [
  {
    title: "Fine-Tuning BERT for Custom NLP Tasks: A Practical Guide",
    excerpt: "A step-by-step walkthrough of fine-tuning BERT on domain-specific data, covering data prep, training loops, and evaluation.",
    date: "2024-05-10",
    slug: "fine-tuning-bert",
    readTime: "8 min read",
  },
  {
    title: "Building a RAG Pipeline from Scratch with LangChain",
    excerpt: "How I built a production-grade Retrieval-Augmented Generation pipeline — from document ingestion to vector search to LLM response.",
    date: "2024-03-22",
    slug: "rag-pipeline-langchain",
    readTime: "12 min read",
  },
  {
    title: "My Next.js + FastAPI Stack for ML-Powered Apps",
    excerpt: "The architecture I've settled on for shipping machine learning features in web apps — fast iteration, clean separation, easy deployment.",
    date: "2024-01-15",
    slug: "nextjs-fastapi-ml-stack",
    readTime: "6 min read",
  },
];