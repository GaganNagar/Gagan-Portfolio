import React from 'react';
// PDF file ko import karein 
import resumePdf from '../assets/Gagan_Resume.pdf'; 

function Resume() {
  // Yahan se 'const resumePdf = "#";' wali line hata di gayi hai

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">My Resume</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg" data-aos="zoom-in">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Want to dive deeper into my skills, experience, and educational background? Check out my full resume below.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* View Button */}
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <i className="fas fa-eye mr-2"></i> View Resume
            </a>
            
            {/* Download Button */}
            <a 
              href={resumePdf} 
              download="Gagan_Resume.pdf"
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <i className="fas fa-download mr-2"></i> Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;