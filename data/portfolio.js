// ─────────────────────────────────────────────────────
// EDIT THIS FILE to update your portfolio content
// ─────────────────────────────────────────────────────

export const hero = {
  firstName: 'Alex',
  lastName: 'Perera',
  title: 'AI/ML Engineer & Full-Stack Developer',
  location: 'Colombo, Sri Lanka',
  tagline: 'Building intelligent systems — from model training to production deployment.',
  socials: [
    { label: 'GitHub',   url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Twitter',  url: 'https://twitter.com' },
  ],
  stats: [
    { value: '2+',  label: 'Years Experience' },
    { value: '12+', label: 'Projects Shipped' },
    { value: '5+',  label: 'ML Models in Prod' },
  ],
};

export const about = {
  bio: [
    "I'm an <strong>Associate AI/ML Engineer</strong> with a passion for building end-to-end intelligent systems — from designing and training models to shipping production-ready applications.",
    "My background spans <strong>machine learning, NLP, and full-stack development</strong>, letting me own the entire lifecycle of a product: the data pipelines, the model, the API, and the UI.",
    "When I'm not training models, I'm building fast, clean web experiences using React, Next.js, and modern backend frameworks.",
  ],
  interests: ['Machine Learning', 'NLP', 'Computer Vision', 'React', 'Python', 'System Design'],
  highlights: [
    { icon: '🎓', title: 'BSc in Computer Science',        subtitle: 'University of Colombo, 2022' },
    { icon: '💼', title: 'Associate AI/ML Engineer',        subtitle: 'TechCorp Lanka · Present' },
    { icon: '📍', title: 'Based in Colombo, Sri Lanka',     subtitle: 'Open to remote & relocation' },
    { icon: '🚀', title: 'Full-Stack + AI/ML',              subtitle: 'Model to production, end-to-end' },
  ],
};

export const skills = {
  groups: [
    {
      label: 'AI / ML',
      skills: [
        { name: 'PyTorch',      level: 85 },
        { name: 'TensorFlow',   level: 78 },
        { name: 'Scikit-Learn', level: 90 },
        { name: 'Hugging Face', level: 80 },
      ],
    },
    {
      label: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 88 },
        { name: 'TypeScript',      level: 82 },
        { name: 'Tailwind CSS',    level: 85 },
        { name: 'Framer Motion',   level: 70 },
      ],
    },
    {
      label: 'Backend & Data',
      skills: [
        { name: 'Python / FastAPI', level: 90 },
        { name: 'Node.js',          level: 78 },
        { name: 'PostgreSQL',       level: 82 },
        { name: 'MongoDB',          level: 75 },
      ],
    },
    {
      label: 'ML Ops & Cloud',
      chips: ['Docker', 'AWS', 'GCP', 'MLflow', 'Weights & Biases', 'Kubernetes'],
    },
    {
      label: 'Tools & Workflow',
      chips: ['Git', 'GitHub Actions', 'Jupyter', 'VS Code', 'Postman', 'Figma'],
    },
    {
      label: 'Currently Learning',
      chips: ['LLM Fine-tuning', 'LangChain', 'Rust', 'ONNX', 'Ray', 'Triton'],
    },
  ],
};

export const experience = [
  {
    period: 'Jan 2024 — Present',
    current: true,
    role: 'Associate AI/ML Engineer',
    company: 'TechCorp Lanka',
    description: 'Building and deploying NLP models for customer intent classification and document processing. Developed a full-stack internal dashboard for model monitoring and A/B testing, reducing analyst effort by 60%.',
    tags: ['PyTorch', 'FastAPI', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    period: 'Jun 2023 — Dec 2023',
    current: false,
    role: 'Frontend Developer Intern',
    company: 'StartupXYZ',
    description: 'Built responsive UI components and integrated REST APIs for a SaaS analytics product. Improved page load performance by 35% through code splitting and caching strategies.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    period: 'Jan 2023 — May 2023',
    current: false,
    role: 'Research Assistant',
    company: 'University of Colombo',
    description: 'Assisted in research on Sinhala NLP — built a text classification dataset and fine-tuned multilingual BERT models for sentiment analysis in low-resource settings.',
    tags: ['Python', 'Transformers', 'NLP', 'Research'],
  },
];

export const projects = [
  {
    icon: '🧠',
    featured: true,
    title: 'SinhaNLP Toolkit',
    description: 'An open-source NLP library for the Sinhala language — tokenization, POS tagging, and sentiment analysis. Fine-tuned multilingual BERT on a custom-built dataset of 50K annotated sentences.',
    tags: ['Python', 'Transformers', 'PyTorch', 'HuggingFace', 'NLP'],
    github: 'https://github.com',
    demo: null,
  },
  {
    icon: '⚡',
    featured: false,
    title: 'ML Pipeline Dashboard',
    description: 'Internal tool for monitoring model training runs, comparing experiments, and visualising drift detection in real-time.',
    tags: ['React', 'FastAPI', 'MLflow', 'PostgreSQL'],
    github: 'https://github.com',
    demo: null,
  },
  {
    icon: '🛒',
    featured: false,
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with AI-powered product recommendations, real-time inventory management, and Stripe payments.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    icon: '📊',
    featured: false,
    title: 'Document Intelligence API',
    description: 'REST API for automated document parsing — extracts structured data from PDFs and images using OCR + LLM post-processing.',
    tags: ['Python', 'FastAPI', 'GPT-4', 'Tesseract', 'Docker'],
    github: 'https://github.com',
    demo: null,
  },
];

export const blog = [
  {
    date: 'Mar 2024',
    title: 'Fine-tuning BERT for Low-Resource Languages: Lessons Learned',
    excerpt: 'What I learned building an NLP pipeline for Sinhala — from dataset curation to dealing with class imbalance in a 50K sentence corpus.',
    url: '#',
  },
  {
    date: 'Feb 2024',
    title: 'Building an ML Model Monitoring Dashboard from Scratch',
    excerpt: 'A walkthrough of how I built an internal tool for tracking model drift, comparing experiments, and alerting on performance degradation.',
    url: '#',
  },
  {
    date: 'Jan 2024',
    title: 'Why Every ML Engineer Should Learn React',
    excerpt: 'The case for full-stack fluency — how building your own frontend makes you a better ML engineer and speeds up the deployment cycle dramatically.',
    url: '#',
  },
];

export const contact = {
  links: [
    { icon: '✉️', label: 'alex.perera@gmail.com',      url: 'mailto:alex.perera@gmail.com' },
    { icon: '💼', label: 'linkedin.com/in/alexperera',  url: 'https://linkedin.com' },
    { icon: '🐙', label: 'github.com/alexperera',       url: 'https://github.com' },
    { icon: '🐦', label: '@alexperera_dev',              url: 'https://twitter.com' },
  ],
};