import React from 'react';
import { certificationsData } from '../data/portfolioData';

function Certifications() {
  if (!certificationsData || certificationsData.length === 0) return null;

  return (
    <section
      id="courses"
      className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative border-t border-zinc-200/80 dark:border-zinc-800/60"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="mb-10 sm:mb-12" data-aos="fade-up">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Professional Certifications & Training
          </h3>
          <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
            Verified technical specializations in full-stack MERN, prompt engineering, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xs hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition-transform">
                  <i className={cert.icon}></i>
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {cert.title}
                </h4>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                {cert.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
