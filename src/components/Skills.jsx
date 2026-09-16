import React, { useState } from 'react';

function Skills() {
  const [activeTab, setActiveTab] = useState('technical');

  const techSkills = [
    { name: "React.js", icon: "devicon-react-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },

    // / Backend Skills (Added from your request)
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original text-gray-800 dark:text-gray-100" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "REST API", icon: "fas fa-network-wired text-blue-500" },
    
    // Tools
    { name: "Postman", icon: "devicon-postman-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-plain text-gray-800 dark:text-gray-100" },
   
    // { name: "", icon: "devicon-bootstrap-plain colored" },
    // { name: "Firebase", icon: "devicon-firebase-plain colored" },
    { name: "AI Tools", icon: "fas fa-robot text-violet-600 dark:text-neon-500" },
    // { name: "C", icon: "devicon-c-plain colored" }
  ];

  const softSkills = [
    { name: "Effective Communication", icon: "fas fa-comments text-violet-600 dark:text-neon-500" },
    { name: "Problem Solving", icon: "fas fa-lightbulb text-violet-600 dark:text-neon-500" },
    { name: "Teamwork & Collaboration", icon: "fas fa-users text-violet-600 dark:text-neon-500" },
    { name: "Adaptability", icon: "fas fa-sync-alt text-violet-600 dark:text-neon-500" },
    { name: "Attention to Detail", icon: "fas fa-cogs text-violet-600 dark:text-neon-500" }
  ];

  return (
    <section id="skills" className="pb-20 pt-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Tab Buttons */}
        <div className="flex justify-center mb-8" data-aos="fade-up">
          <button 
            onClick={() => setActiveTab('technical')}
            className={`px-6 py-3 mx-2 text-lg font-semibold rounded-lg focus:outline-none transition-all duration-300 shadow-md ${
              activeTab === 'technical' 
                ? 'bg-violet-600 text-white dark:bg-neon-500 dark:hover:bg-neon-600' 
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Technical Skills
          </button>
          <button 
            onClick={() => setActiveTab('soft')}
            className={`px-6 py-3 mx-2 text-lg font-semibold rounded-lg focus:outline-none transition-all duration-300 shadow-md ${
              activeTab === 'soft' 
                ? 'bg-violet-600 text-white dark:bg-neon-500 dark:hover:bg-neon-600' 
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* Technical Skills Content */}
        {activeTab === 'technical' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg" data-aos="zoom-in-up">
            {techSkills.map((skill, index) => (
              <div key={index} className="skill-card flex flex-col items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <i className={`${skill.icon} text-5xl mb-2`}></i>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills Content */}
        {activeTab === 'soft' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg" data-aos="zoom-in-up">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-card flex items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <i className={`${skill.icon} text-3xl mr-4`}></i>
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;