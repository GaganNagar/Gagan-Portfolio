import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactDetails } from '../data/portfolioData';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    emailjs
      .sendForm(
        contactDetails.emailjs.serviceId,
        contactDetails.emailjs.templateId,
        form.current,
        contactDetails.emailjs.publicKey
      )
      .then(
        () => {
          setIsSending(false);
          setStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully. I will get back to you shortly.',
          });
          e.target.reset();
        },
        (error) => {
          setIsSending(false);
          setStatus({
            type: 'error',
            message: `Failed to send message (${error?.text || 'Network error'}). Please email me directly at ${contactDetails.email}.`,
          });
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative border-t border-zinc-200 dark:border-zinc-800/80"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              06 // Contact
            </span>
            <div className="h-px w-12 bg-violet-600/30 dark:bg-violet-400/30"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let's build something exceptional together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I am currently open to full-time engineering roles, high-impact freelance projects, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start" data-aos="fade-up">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 space-y-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Direct Channels
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Feel free to email directly, call, or connect across professional networks.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={contactDetails.emailHref}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-violet-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500">Email</div>
                    <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                      {contactDetails.email}
                    </div>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href={contactDetails.phoneHref}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-violet-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500">Phone</div>
                    <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                      {contactDetails.phoneFormatted}
                    </div>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500">Location</div>
                    <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {contactDetails.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                  Online Profiles
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={contactDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-blue-500/50 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all hover:scale-[1.02]"
                  >
                    <i className="fab fa-linkedin text-blue-500"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={contactDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-zinc-400 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all hover:scale-[1.02]"
                  >
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Fill out the form below and I'll receive an instant notification.
              </p>

              {status.message && (
                <div
                  className={`p-4 mb-6 rounded-xl text-sm font-medium border ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                      : 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <i
                      className={`fas ${
                        status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'
                      }`}
                    ></i>
                    <span>{status.message}</span>
                  </div>
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-300/80 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-300/80 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your product, project, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-300/80 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 text-sm transition-all resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full btn-primary py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSending ? (
                    <>
                      <i className="fas fa-spinner fa-spin text-xs"></i>
                      <span>Dispatching Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <i className="fas fa-paper-plane text-xs"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
