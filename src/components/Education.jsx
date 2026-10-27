import React from 'react';
import { educationData } from '../data/portfolioData';

function Education() {
  if (!educationData || educationData.length === 0) return null;

  return (
    <section
      id="education"
      className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative border-t border-zinc-200 dark:border-zinc-800/80"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              04 // Credentials
            </span>
            <div className="h-px w-12 bg-violet-600/30 dark:bg-violet-400/30"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Academic education & background.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Formal engineering degree studies and mathematical foundations.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6 sm:space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {item.degree}
                  </h3>
                </div>
                <p className="text-base font-semibold text-zinc-700 dark:text-zinc-300">
                  {item.institution}
                </p>
                {item.details && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
                    {item.details}
                  </p>
                )}
              </div>

              <div className="shrink-0 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-3.5 py-2 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 w-fit self-start md:self-center">
                <i className="far fa-clock mr-1.5 text-violet-500"></i>
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
