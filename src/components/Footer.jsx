import React from 'react';
import { personalInfo, contactDetails, navLinks } from '../data/portfolioData';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800/60">
          <div>
            <a
              href="#hero"
              className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {personalInfo.name}
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Full Stack Developer &bull; React.js & MERN Stack
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.num}
                href={link.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mr-1">{link.num}</span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 text-xl">
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all hover:scale-105"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-105"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={contactDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all hover:scale-105"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={contactDetails.emailHref}
              aria-label="Send Email"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:scale-105"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 dark:text-zinc-500 pt-6 gap-2">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono">Engineered with React 19, Tailwind CSS & Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
