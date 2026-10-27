import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profileImg from '../assets/profileImg.png';
import { personalInfo, metricsData } from '../data/portfolioData';

function Hero() {
  const typedTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTarget.current, {
      strings: personalInfo.typedStrings,
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1600,
      loop: true,
      showCursor: true,
      cursorChar: '▋',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 bg-grid-pattern"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/10 dark:bg-violet-600/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Top Tag & Availability */}
          <div className="flex flex-wrap items-center gap-3 mb-6" data-aos="fade-down">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
              Full Stack Engineer &bull; React.js & MERN
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {personalInfo.status}
            </span>
          </div>

          {/* Main Grid: Headline + Avatar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-8 space-y-6" data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
                Frontend developer shipping interfaces that{' '}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  feel instant.
                </span>
              </h1>

              {/* Dynamic typed.js tagline */}
              <div className="flex items-center text-lg sm:text-xl font-mono text-zinc-600 dark:text-zinc-300 h-8">
                <span ref={typedTarget} className="text-violet-600 dark:text-violet-400"></span>
              </div>

              {/* Pitch */}
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                {personalInfo.subhead}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="btn-primary group"
                >
                  <span>Explore Work</span>
                  <i className="fas fa-arrow-down text-xs group-hover:translate-y-0.5 transition-transform"></i>
                </a>

                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <i className="fas fa-file-pdf text-xs text-violet-500"></i>
                  <span>View Resume</span>
                </a>

                <a
                  href="#contact"
                  className="px-4 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1.5"
                >
                  <span>Get in touch</span>
                  <i className="fas fa-chevron-right text-xs"></i>
                </a>
              </div>
            </div>

            {/* Right Column: Headshot Photo with Framer-style border */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600/40 to-indigo-600/40 blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-40"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Section: "Numbers, not adjectives" */}
          <div className="mt-14 pt-10 border-t border-zinc-200 dark:border-zinc-800/80" data-aos="fade-up">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Key Metrics &bull; Numbers, not adjectives.
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {metricsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-900 dark:text-zinc-100">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
