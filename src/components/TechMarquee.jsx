import React from 'react';
import { marqueeTech } from '../data/portfolioData';

function TechMarquee() {
  // Duplicate array to ensure infinite seamless scrolling
  const tickerItems = [...marqueeTech, ...marqueeTech];

  return (
    <section className="relative py-6 overflow-hidden border-y border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/60 dark:bg-zinc-900/40">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee flex items-center space-x-6">
        {tickerItems.map((tech, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-800 dark:text-zinc-200 font-mono text-xs sm:text-sm font-medium whitespace-nowrap shadow-xs hover:border-violet-500/50 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechMarquee;

