import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

function Projects() {
  const { projectsData } = useContext(PortfolioContext);

  if (!projectsData) return null;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100" data-aos="fade-up">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
           
            <div 
              key={project.id} 
              // 👇 Card ko 'flex flex-col' banaya gaya hai
              className="flex flex-col bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group min-h-[450px]"
              data-aos="zoom-in"
            >
              {/* Image Section */}
              <div className="h-48 overflow-hidden bg-gray-200 shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              {/* Content Section -  Ise 'flex-grow' banaya taaki ye bachi hui space le le */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((skill, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 bg-violet-100 text-violet-600 dark:bg-gray-600 dark:text-white rounded uppercase">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Description 👇 */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                  {project.desc}
                </p>

                {/* Links 👇 mt-auto se ye hamesha bottom mein rahega */}
                {project.liveLink && (
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-600">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                      Live Demo
                    </a>
                  </div>
                )}

                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors">
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;