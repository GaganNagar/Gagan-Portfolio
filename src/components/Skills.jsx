import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'toolsAndAI', label: 'Tools & AI' },
    { id: 'softSkills', label: 'Practices' },
  ];

  // Helper to determine which skills to display
  const getVisibleSkills = () => {
    if (activeCategory === 'frontend') return { list: skillsData.frontend, isSoft: false };
    if (activeCategory === 'backend') return { list: skillsData.backend, isSoft: false };
    if (activeCategory === 'toolsAndAI') return { list: skillsData.toolsAndAI, isSoft: false };
    if (activeCategory === 'softSkills') return { list: skillsData.softSkills, isSoft: true };

    // 'all' category: combine all technical skills
    return {
      list: [
        ...skillsData.frontend,
        ...skillsData.backend,
        ...skillsData.toolsAndAI
      ],
      isSoft: false
    };
  };

  const { list, isSoft } = getVisibleSkills();

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative border-t border-zinc-200 dark:border-zinc-800/80"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 md:mb-16" data-aos="fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              03 // Skills
            </span>
            <div className="h-px w-12 bg-violet-600/30 dark:bg-violet-400/30"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            The keys I press every day.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Technologies, libraries, backend runtimes, and developer tooling utilized across production environments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 border border-zinc-200/80 dark:border-zinc-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid gap-4 sm:gap-5 ${
            isSoft
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
          }`}
          data-aos="fade-up"
        >
          {list.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <i className={`${skill.icon} text-3xl group-hover:scale-110 transition-transform`}></i>
                {skill.level && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200/80 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {skill.level}
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {skill.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
