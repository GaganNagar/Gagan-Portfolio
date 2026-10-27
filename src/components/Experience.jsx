import React from 'react';
import { experiencesData } from '../data/portfolioData';

function Experience() {
  if (!experiencesData || experiencesData.length === 0) return null;

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative border-t border-zinc-200 dark:border-zinc-800/80"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              02 // Experience
            </span>
            <div className="h-px w-12 bg-violet-600/30 dark:bg-violet-400/30"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Roles and engineering contributions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Hands-on software development experience across web applications, MERN stack workflows, and responsive interface delivery.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-6 sm:space-y-8">
          {experiencesData.map((exp, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-xs hover:shadow-lg relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Left subtle indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-indigo-500 opacity-80 group-hover:w-1.5 transition-all"></div>

              {/* Header: Role, Company & Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                      {exp.badge}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-zinc-400 dark:text-zinc-600">&bull;</span>
                    <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">{exp.location}</span>
                  </div>
                </div>

                <div className="shrink-0 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60 w-fit">
                  <i className="far fa-calendar-alt mr-1.5 text-violet-500"></i>
                  {exp.duration}
                </div>
              </div>

              {/* Achievements Bullet Points */}
              <ul className="space-y-2.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed pl-1">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-violet-500 font-mono text-sm mt-0.5 select-none">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
