import React, { useState, useContext, useEffect } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { navLinks, personalInfo, contactDetails } from '../data/portfolioData';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(PortfolioContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md shadow-md shadow-black/5 dark:shadow-black/20 border-b border-zinc-200/80 dark:border-zinc-800/80 py-3'
          : 'bg-white/70 dark:bg-zinc-950/70 backdrop-blur-sm border-b border-zinc-200/40 dark:border-zinc-800/40 py-4'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Brand & Status Pill */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="#hero"
            className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            {personalInfo.name}
          </a>

          {/* Availability Status Indicator Pill */}
          <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.num}
              href={link.href}
              className="group flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-200"
            >
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 group-hover:text-violet-500 dark:group-hover:text-violet-400 mr-1.5 transition-colors">
                {link.num}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right Controls: Resume, Theme Toggle, Mobile Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Quick Resume Link */}
          <a
            href={personalInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 text-zinc-800 dark:text-zinc-200 transition-colors shadow-xs"
          >
            <i className="fas fa-file-pdf text-violet-500 text-xs"></i>
            <span>Resume</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
            title={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/70 hover:border-zinc-300 dark:hover:border-zinc-600 hover:scale-105 active:scale-95 transition-all focus:outline-none"
          >
            <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'} text-sm`}></i>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/70 transition-colors focus:outline-none"
          >
            <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'} text-base`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-4 pb-6 shadow-xl transition-all animate-fade-in-down">
          {/* Mobile Status Pill */}
          <div className="flex sm:hidden items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition-colors"
              >
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mr-2.5 w-6">
                  {link.num}
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Resume & Contact Actions */}
          <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            >
              <i className="fas fa-file-pdf text-violet-500 text-xs"></i>
              <span>View Resume</span>
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-violet-600 hover:bg-violet-700 text-white"
            >
              <i className="fas fa-paper-plane text-xs"></i>
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
