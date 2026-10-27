/**
 * Gagan Nagar - Developer Portfolio Data
 * Single Source of Truth for Personal, Career, and Project Information.
 */

import resumePdf from '../assets/GaganNagar_resume.pdf';

export const personalInfo = {
  name: "Gagan Nagar",
  role: "Software Engineer | Full Stack Developer",
  status: "Available for opportunities",
  location: "Indore, India",
  headline: "Full Stack Developer shipping interfaces that feel instant.",
  subhead: "Specializing in React.js and the MERN stack. Building modern, AI-powered web applications with clean architecture and intuitive user experiences.",
  typedStrings: [
    "I craft engaging digital experiences.",
    "Transforming ideas into robust web solutions.",
    "Specializing in React.js & MERN Stack.",
    "Passionate about clean code and AI tools.",
    "Let's build something amazing together."
  ],
  bio: `I am a Full Stack Developer specializing in React.js and the MERN stack. I build modern, AI-powered web applications using JavaScript, Node.js, Express.js, and MongoDB, with a relentless focus on clean architecture, seamless functionality, and intuitive user experiences. I enjoy turning complex ideas into high-performance web solutions and exploring AI-driven technologies to build smarter applications.`,
  resumePdf: resumePdf,
  resumeFileName: "GaganNagar_Resume.pdf",
};

export const contactDetails = {
  phone: "+918839676156",
  phoneFormatted: "+91 88396 76156",
  phoneHref: "tel:+918839676156",
  email: "gaganngr319@gmail.com",
  emailHref: "mailto:gaganngr319@gmail.com",
  location: "Indore, MP, India",
  github: "https://github.com/GaganNagar",
  linkedin: "https://www.linkedin.com/in/gagannagar",
  instagram: "https://instagram.com/gagan.nagarr",
  emailjs: {
    serviceId: 'service_43tfyvp',
    templateId: 'template_a1awgws',
    publicKey: 'uzgDE3a2W5AceO4Hc',
  }
};

export const metricsData = [
  { value: "04+", label: "Products Built", detail: "Full Stack & AI Web Apps" },
  { value: "MERN", label: "Core Specialization", detail: "React, Node, Express, Mongo" },
  { value: "08mo", label: "Production Experience", detail: "Frontend & Full Stack Roles" },
  { value: "100%", label: "Clean Code & Speed", detail: "Responsive & Performance Focused" },
];

export const marqueeTech = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "Next.js",
  "REST APIs",
  "GenAI",
  "Git & GitHub",
  "Postman",
  "HTML5 & CSS3"
];

export const projectsData = [
  {
    id: 1,
    title: "InterviewAI",
    category: "AI & Full Stack",
    metric: "ATS Insights & Roadmaps",
    desc: "An AI-powered interview platform delivering personalized interview preparation, ATS resume insights, skill-gap analysis, and targeted preparation roadmaps.",
    image: "/aiCareer.png",
    tech: ["GenAI", "React.js", "REST API", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/GaganNagar/InterviewAi",
    liveLink: "https://careerway-ai.vercel.app/"
  },
  {
    id: 2,
    title: "Employee Management System",
    category: "Enterprise Dashboard",
    metric: "Role-Based Auth (Admin/Emp)",
    desc: "A full-stack role-based management dashboard with secure authentication for Admin and Employee roles, featuring task assignment and real-time tracking.",
    image: "/ems.png",
    tech: ["React.js", "Context API", "Tailwind CSS", "LocalStorage", "State Management"],
    githubLink: "https://github.com/GaganNagar/employee-management-system",
    liveLink: null
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    category: "Frontend & UX",
    metric: "Framer-Inspired Engineering UI",
    desc: "A modern, high-performance portfolio built to showcase technical skills and projects with dark mode support, smooth interactions, and metrics-driven design.",
    image: "/portfolioProject.png",
    tech: ["React.js", "Tailwind CSS 4", "Vite", "AOS", "Typed.js"],
    githubLink: "https://github.com/GaganNagar/Gagan-Portfolio-Hackathon",
    liveLink: "https://gagannagar.vercel.app"
  }
];

export const experiencesData = [
  {
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    duration: "July 2025 – August 2025",
    location: "Remote",
    badge: "Internship",
    description: [
      "Developed responsive web pages using HTML5, CSS3, and JavaScript while ensuring cross-browser compatibility.",
      "Built reusable frontend UI components following responsive design principles and maintainable code practices.",
      "Optimized UI rendering for better performance across mobile, tablet, and desktop devices."
    ]
  },
  {
    role: "Frontend Developer Trainee",
    company: "XCoders IT Training & Placement",
    duration: "January 2025 – August 2025",
    location: "Indore, India",
    badge: "Full Stack Training",
    description: [
      "Built end-to-end MERN stack features across 3 internal projects, developing MongoDB schemas, Express.js REST APIs, and React.js interfaces.",
      "Implemented JWT authentication and MongoDB CRUD operations, connecting React forms with Express APIs and persistent database workflows.",
      "Collaborated through Git branching, code reviews, and sprint-based development, incorporating senior developer feedback into application delivery."
    ]
  }
];

export const skillsData = {
  frontend: [
    { name: "React.js", icon: "devicon-react-plain colored", level: "Advanced" },
    { name: "JavaScript (ES6+)", icon: "devicon-javascript-plain colored", level: "Advanced" },
    { name: "Next.js", icon: "devicon-nextjs-plain colored", level: "Intermediate" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", level: "Advanced" },
    { name: "HTML5", icon: "devicon-html5-plain colored", level: "Expert" },
    { name: "CSS3", icon: "devicon-css3-plain colored", level: "Advanced" }
  ],
  backend: [
    { name: "Node.js", icon: "devicon-nodejs-plain colored", level: "Intermediate" },
    { name: "Express.js", icon: "devicon-express-original text-zinc-100", level: "Intermediate" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: "Intermediate" },
    { name: "REST APIs", icon: "fas fa-network-wired text-blue-400", level: "Advanced" }
  ],
  toolsAndAI: [
    { name: "Git", icon: "devicon-git-plain colored", level: "Advanced" },
    { name: "GitHub", icon: "devicon-github-plain text-zinc-100", level: "Advanced" },
    { name: "Postman", icon: "devicon-postman-plain colored", level: "Intermediate" },
    { name: "AI Tools & Copilot", icon: "fas fa-robot text-violet-400", level: "Advanced" }
  ],
  softSkills: [
    { name: "Problem Solving", icon: "fas fa-lightbulb text-violet-400" },
    { name: "Effective Communication", icon: "fas fa-comments text-violet-400" },
    { name: "Teamwork & Collaboration", icon: "fas fa-users text-violet-400" },
    { name: "Adaptability & Growth", icon: "fas fa-sync-alt text-violet-400" },
    { name: "Attention to Detail", icon: "fas fa-cogs text-violet-400" }
  ]
};

export const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Sage University, Indore",
    period: "2022 – 2026 (Expected)",
    details: "Focusing on data structures, algorithms, full-stack software development, database systems, and cloud fundamentals."
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "MP Board",
    period: "2022",
    details: "Science & Mathematics concentration with foundational programming exposure."
  },
  {
    degree: "Secondary Education (10th)",
    institution: "MP Board",
    period: "2020",
    details: "High school general curriculum with excellence in mathematics and science."
  }
];

export const certificationsData = [
  {
    title: "MERN Stack Development",
    org: "XCoders IT Training and Placements",
    icon: "fas fa-certificate",
    accent: "violet"
  },
  {
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    icon: "fas fa-desktop",
    accent: "blue"
  },
  {
    title: "Prompt Engineering with GitHub Copilot",
    org: "Simplilearn",
    icon: "fas fa-brain",
    accent: "emerald"
  },
  {
    title: "CSS Basic",
    org: "HackerRank",
    icon: "fas fa-file-code",
    accent: "amber"
  }
];

export const navLinks = [
  { num: "01", name: "Work", href: "#projects" },
  { num: "02", name: "Experience", href: "#experience" },
  { num: "03", name: "Skills", href: "#skills" },
  { num: "04", name: "Credentials", href: "#education" },
  { num: "05", name: "About", href: "#about" },
  { num: "06", name: "Contact", href: "#contact" }
];

