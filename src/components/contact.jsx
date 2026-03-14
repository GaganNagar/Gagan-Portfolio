import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init('uzgDE3a2W5AceO4Hc');
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS Setup
    emailjs.sendForm(
      'service_43tfyvp',  // EmailJS Dashboard se copy karein
      'template_a1awgws', // EmailJS Dashboard se copy karein
      form.current,
      'uzgDE3a2W5AceO4Hc'   // EmailJS Dashboard se copy karein
    )
    .then((result) => {
        alert("Success!.");
        e.target.reset();
    }, (error) => {
        // 3. Agar abhi bhi error aaye, toh error.text ko alert karein
        alert("Error: " + error.text); 
        console.log("FAILED...", error);
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Let's Connect!</h2>
        <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          {/* form ref aur onSubmit ka dhyan rakhein 👇 */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="from_name" // 👈 Template variable se match karein
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-neon-500 transition-colors duration-200" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="from_email" // 👈 Template variable se match karein
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-neon-500 transition-colors duration-200" 
                placeholder="your.email@example.com" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" // 👈 Template variable se match karein
                rows="5" 
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-neon-500 transition-colors duration-200" 
                placeholder="Your message..." 
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-violet-600 text-white font-bold rounded-md hover:bg-violet-700 dark:bg-neon-500 dark:hover:bg-neon-600 transition-colors duration-200 focus:outline-none">
              Send Message <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">You can also find me here:</p>
            <div className="flex justify-center space-x-6">
              {/* Details sourced from Resume  */}
              <a href="tel:+918839676156" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-500 transition-colors duration-200 text-3xl"><i className="fas fa-phone"></i></a>
              <a href="mailto:gaganngr319@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-500 transition-colors duration-200 text-3xl"><i className="fas fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/gagannagar" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-500 transition-colors duration-200 text-3xl"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/Gagannagar" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-500 transition-colors duration-200 text-3xl"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;