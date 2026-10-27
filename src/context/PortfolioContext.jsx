import React, { createContext, useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  // Dark mode logic: Default to dark mode unless user explicitly selected light
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;
    if (localStorage.theme === 'light') return false;
    return true; // Default to dark aesthetic matching Framer reference
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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

  return (
    <PortfolioContext.Provider value={{ isDarkMode, toggleTheme, projectsData }}>
      {children}
    </PortfolioContext.Provider>
  );
};
