import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profileImg from '../assets/profileImg.png';

function Hero() {
  // Reference for Typed.js target element
  const typedTarget = useRef(null);

  useEffect(() => {
    // Typed.js initialization
    const typed = new Typed(typedTarget.current, {
      strings: [
        "I craft engaging digital experiences.",
        "Transforming ideas into robust web solutions.",
        "Passionate about clean code and intuitive design.",
        "Let's build something amazing together."
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    // Cleanup function to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-700 to-violet-900 dark:from-gray-900 dark:to-blue-900 transition-colors duration-500">
      <div id="particles-js" className="absolute inset-0"></div>

      <div className="z-10 p-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-neon-500 animate-fade-in-up md:animate-float">
          {/* Profile image mapping - ensure image is in public/images/ */}
          <img src={profileImg} alt="Gagan Nagar Profile" className="w-full h-full object-cover" />
        </div>
        <div className="text-white text-shadow-lg text-left md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">Gagan Nagar</h1>
          <p className="text-2xl md:text-2xl font-bold mb-6">Software Engineer | Full Stack Developer</p>
          <p className="text-lg md:text-xl font-light h-8">
            <span ref={typedTarget}></span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-white text-3xl opacity-75 hover:opacity-100 transition-opacity">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;