import React from 'react';

const experiences = [
  {
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    duration: "July 2025 – August 2025",
    location: "Remote",
    description: [
      "Developed responsive web pages using HTML5, CSS3, and JavaScript while ensuring cross-browser compatibility.",
      "Built reusable frontend UI components following responsive design principles and maintainable code practices.",
      "Optimized UI rendering for better performance across different devices."
    ]
  },
  {
    role: "Frontend Developer Trainee",
    company: "XCoders IT Training & Placement",
    duration: "January 2025 – August 2025",
    location: "Indore, India",
    description: [
      "Built end-to-end MERN stack features across 3 internal projects, developing MongoDB schemas, Express.js REST APIs, and React.js interfaces.",
      "Implemented JWT authentication and MongoDB CRUD operations, connecting React forms with Express APIs and persistent database workflows.",
      "Collaborated through Git branching, code reviews, and sprint-based development, incorporating senior developer feedback into application delivery."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-violet-600 dark:border-neon-400 transform hover:scale-[1.02] transition-transform duration-300"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-violet-600 dark:text-neon-400">{exp.role}</h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{exp.company}</p>
                </div>
                <div className="text-md text-gray-500 dark:text-gray-400 md:text-right">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
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