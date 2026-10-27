import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PortfolioProvider } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <PortfolioProvider>
      <div className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-inter antialiased transition-colors duration-300 min-h-screen selection:bg-violet-500/20 selection:text-violet-500">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Certifications />
          <About />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
