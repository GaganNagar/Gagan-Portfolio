import React from "react";
import { projectsData } from "../data/portfolioData";

function Projects() {
  if (!projectsData || projectsData.length === 0) return null;

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              01 // Work
            </span>
            <div className="h-px w-12 bg-violet-600/30 dark:bg-violet-400/30"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured projects, each one measured.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Full-stack web applications and AI-driven platforms built with modern tools, clean code, and measured outcomes.
          </p>
        </div>

        {/* Projects Grid: 2-column cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group shadow-xs hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-200 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category & Metric Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-zinc-900/85 text-zinc-100 backdrop-blur-md border border-white/10 shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-violet-950/80 px-2 py-0.5 rounded border border-violet-500/30">
                    {project.metric}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 shrink-0 mt-1">
                    0{project.id}
                  </span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/60 dark:border-zinc-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Action Links */}
                <div className="mt-auto pt-5 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-xs"
                      >
                        <span>Live Demo</span>
                        <i className="fas fa-external-link-alt text-[10px]"></i>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800">
                        Internal Build
                      </span>
                    )}

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <i className="fab fa-github text-sm"></i>
                      <span>Source</span>
                    </a>
                  </div>

                  <span className="text-xs font-mono text-violet-600 dark:text-violet-400 hidden sm:inline">
                    {project.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
