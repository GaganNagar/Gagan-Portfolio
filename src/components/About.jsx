import React from "react";

function About() {
  return (
    <section
      id="about"
      className="pt-20 pb-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center leading-relaxed">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am a <strong>Full Stack Developer</strong> specializing in
            <strong> React.js and the MERN stack</strong>. I build modern,
            <strong> AI-powered web applications</strong> using JavaScript,
            Node.js, Express.js, and MongoDB, with a focus on
            <strong>
              {" "}
              clean architecture, seamless functionality, and intuitive user
              experiences
            </strong>
            . I enjoy turning ideas into practical web solutions and exploring
            <strong> AI-driven technologies</strong> to build smarter
            applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
