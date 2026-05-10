import React, { createContext, useState, useEffect } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  // --- Dark Mode Logic ---
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
    } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        setIsDarkMode(false);
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        setIsDarkMode(true);
    }
  };

  // --- Portfolio Data ---
  const projectsData = [
  {
    id: 1,
    title: "Employee Management System",
    desc: "A full-stack role-based management dashboard with secure authentication for Admin and Employee roles, featuring task assignment and real-time tracking.",
    image: "/ems.png",
    tech: ["React.js", "Context API", "Tailwind CSS", "LocalStorage"],
    githubLink: "https://github.com/GaganNagar/employee-management-system",
    liveLink: "#"
  },
  {
    id: 2,
    title: "NextUp - Smart Task Manager",
    desc: "A productivity-focused task manager with drag-and-drop reordering, smart filtering, and local storage persistence for seamless task tracking.",
    image: "/nextUp.png",
    tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    githubLink: "https://github.com/GaganNagar/NextUp-Task",
    liveLink: "https://nextup-task.vercel.app/"
  },
  {
    id: 3,
    title: "InterviewAI",
    desc: "An AI-powered assistant providing personalized career guidance through REST API integration and dynamic state handling in React.",
    image: "/aiCareer.png",
    tech: ["GenAi","React.js", "REST API", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/GaganNagar/InterviewAi", // Update with specific link if available
    liveLink: "https://careerway-ai.vercel.app/"
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    desc: "A modern, responsive portfolio built to showcase technical skills and projects with dark mode support and smooth animations.",
    image: "/portfolioProject.png",
    tech: ["React.js", "Tailwind CSS", "AOS", "Typed.js"],
    githubLink: "https://github.com/GaganNagar/Gagan-Portfolio-Hackathon",
    liveLink: "https://gagannagar.vercel.app"
  }
];

  return (
    <PortfolioContext.Provider value={{ isDarkMode, toggleTheme, projectsData }}>
      {children}
    </PortfolioContext.Provider>
  );
};