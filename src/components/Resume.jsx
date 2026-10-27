import React from 'react';
import { personalInfo } from '../data/portfolioData';

function Resume() {
  return (
    <section
      id="resume"
      className="py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative border-t border-zinc-200 dark:border-zinc-800/80"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center" data-aos="fade-up">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-violet-600/10 dark:bg-violet-600/15 blur-3xl pointer-events-none rounded-full"></div>

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
              <i className="fas fa-file-pdf"></i> Curriculum Vitae
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Explore my full engineering background.
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Dive deeper into my technical proficiencies, enterprise project contributions, academic milestones, and training certifications.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* View Button */}
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto px-6 py-3"
              >
                <i className="fas fa-eye text-xs"></i>
                <span>View Full Resume</span>
              </a>

              {/* Download Button */}
              <a
                href={personalInfo.resumePdf}
                download={personalInfo.resumeFileName}
                className="btn-secondary w-full sm:w-auto px-6 py-3"
              >
                <i className="fas fa-download text-xs text-violet-500"></i>
                <span>Download PDF Copy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
