import React from "react";
import { personalInfo } from "../data/portfolioData";

function About() {
  const principles = [
    {
      title: "Speed is a Feature",
      desc: "Optimized component rendering, fast load times, and lightweight bundles ensure applications feel immediate.",
      icon: "fas fa-bolt",
    },
    {
      title: "Clean Architecture",
      desc: "Clear state boundaries, modular UI design, and readable code make software easy to maintain and scale.",
      icon: "fas fa-layer-group",
    },
    {
      title: "AI-Augmented Development",
      desc: "Leveraging generative AI APIs, prompt engineering, and intelligent tooling to build smarter web products.",
      icon: "fas fa-brain",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative border-t border-zinc-200 dark:border-zinc-800/80"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="mb-14 md:mb-16" data-aos="fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              05 // About
            </span>
            <div className="h-px w-12 bg-violet-600/30 dark:bg-violet-400/30"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            I build product interfaces that feel instant and stay that way.
          </h2>
        </div>

        {/* Story / Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-16" data-aos="fade-up">
          <div className="md:col-span-8 space-y-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I am a <span className="font-semibold text-zinc-900 dark:text-zinc-100">Full Stack Developer</span> specializing in <span className="font-semibold text-zinc-900 dark:text-zinc-100">React.js and the MERN stack</span>. I build modern, AI-powered web applications using JavaScript, Node.js, Express.js, and MongoDB, with a relentless focus on clean architecture, seamless functionality, and intuitive user experiences.
            </p>
            <p>
              My development philosophy is centered around craft: speed is a feature, accessibility is not optional, and the best code is the code the next engineer can read and build upon. Whether architecting database schemas or polishing micro-interactions, I treat every project as a product that must deliver tangible value.
            </p>
          </div>

          <div className="md:col-span-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
              Location & Focus
            </h4>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-violet-500 w-4"></i>
                <span>Indore, MP, India</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-code text-violet-500 w-4"></i>
                <span>React.js, MERN, Next.js, GenAI</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-briefcase text-violet-500 w-4"></i>
                <span>Open for full-time & contract roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {principles.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 flex items-center justify-center text-lg mb-4">
                <i className={p.icon}></i>
              </div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {p.title}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
