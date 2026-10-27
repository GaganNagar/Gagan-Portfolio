# 01 - PROJECT REQUIREMENTS & SCOPE SPECIFICATION

---

## 1. Project Objective

The objective of this project is to redesign Gagan Nagar's personal developer portfolio into a modern, high-impact, engineering-focused website inspired by the visual design, typography, spacing, and presentation style of the reference Framer website:
- **Reference URL:** [https://gagannagar.framer.ai/](https://gagannagar.framer.ai/)

The existing codebase (`Gagan-Portfolio-Hackathon`) provides the functional baseline and contains all real personal data, links, work history, projects, and assets. The new design must elevate Gagan's developer brand to modern frontend/full-stack industry standards while maintaining 100% factual accuracy regarding his personal career information.

---

## 2. Visual Design & Aesthetic Expectations

Based on analysis of `https://gagannagar.framer.ai/`:
- **Core Aesthetic:** Sleek, high-contrast, dark-first developer portfolio ("Dark Portfolio for a Software Engineer").
- **Visual Hierarchy:**
  - Distinct status pill at the header (e.g., "Available for work" / "Software Engineer").
  - Large, punchy hero headline with clear value proposition and subtle technical accent elements.
  - Numbered section indicators (e.g., `01 Work`, `02 Skills / Stack`, `03 Experience`, `04 About`, `05 Education & Certifications`, `06 Contact`).
  - "Numbers, not adjectives" philosophy: Metrics/highlights callouts (e.g., project counts, key tech strengths, performance benchmarks).
  - Modern card decks for projects with tags, github buttons, and live previews.
  - Monospace / geometric sans typography pairing for an engineering-first feel.
  - Subtle interactive micro-animations (e.g., hover reveals, subtle borders, smooth scrolling).

---

## 3. Required Pages and Sections

The portfolio remains a fast, single-page application (SPA) with smooth scroll navigation and distinct semantic sections:

1. **Header / Navigation Bar:**
   - Brand name / Logo (`Gagan Nagar`).
   - Status indicator badge (e.g., green dot + "Open to opportunities" / "Full Stack Developer").
   - Navigation links with section numbers: `01 Work`, `02 Experience`, `03 Skills`, `04 Education`, `05 About`, `06 Contact`.
   - Resume CTA button (direct link/modal/download).
   - Theme toggle button (Dark/Light mode switch).
   - Fully functional mobile drawer / hamburger menu.

2. **Hero Section:**
   - Clear headline and professional title: "Full Stack Developer | React.js & MERN Stack".
   - Typing effect or dynamic sub-headline highlighting digital solutions, clean code, and AI integration.
   - Quick action CTAs: "Explore Work", "View Resume", "Get in Touch".
   - Professional headshot / avatar presentation (using `src/assets/profileImg.png` or modernized frame).

3. **Key Highlights / Metrics Bar ("Numbers, not adjectives"):**
   - Quick measurable highlights (e.g., "4+ Featured Projects", "MERN Stack Specialist", "AI & Web Apps Built", "2 Professional Roles").

4. **Featured Projects Section:**
   - Display Gagan's real projects:
     1. **InterviewAI** (GenAI, React.js, REST API, Node.js, Express.js, MongoDB, Tailwind CSS; Live Demo & GitHub).
     2. **Employee Management System** (React.js, Context API, Tailwind CSS, LocalStorage, Role-based Auth; GitHub).
     3. **Personal Portfolio Website** (React.js, Tailwind CSS, Vite; Live Demo & GitHub).
     4. **NextUp - Smart Task Manager** (JavaScript, HTML5, CSS3, LocalStorage; Live Demo & GitHub).
   - Each project card must include: Title, Description, Tech Badges, Live Demo link (if available), and GitHub link.

5. **Work Experience Section:**
   - Display verified career history:
     1. **Web Development Intern** — Oasis Infobyte (July 2025 – August 2025, Remote).
     2. **Frontend Developer Trainee** — XCoders IT Training & Placement (January 2025 – August 2025, Indore, India).
   - Clear timeline layout with bulleted achievements and technology tags.

6. **Technical Skills & Tools Section:**
   - Categories:
     - Frontend: React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS.
     - Backend: Node.js, Express.js, MongoDB, REST APIs.
     - Tools & Ecosystem: Git, GitHub, Postman, AI Tools (GitHub Copilot, Prompt Engineering).
     - Soft Skills: Problem Solving, Effective Communication, Teamwork, Adaptability.
   - Clean grid/deck layout with icons and category filtering or tabbed switching.

7. **Education & Certifications Section:**
   - **Education:**
     - B.Tech in Computer Science Engineering — Sage University, Indore (2022 – 2026 Expected).
     - Higher Secondary (12th) — MP Board (2022).
     - Secondary Education (10th) — MP Board (2020).
   - **Certifications:**
     - MERN Stack — XCoders IT Training and Placements.
     - Responsive Web Design — freeCodeCamp.
     - Introduction to Prompt Engineering with GitHub Copilot — Simplilearn.
     - CSS Basic — HackerRank.

8. **About Me Section:**
   - Detailed professional biography highlighting Full Stack MERN development, interest in AI-powered applications, clean architecture, and passion for engineering intuitive digital experiences.

9. **Resume Section:**
   - Dedicated card/cta for viewing and downloading `src/assets/Gagan_Resume.pdf`.

10. **Contact & Connect Section:**
    - Working contact form with Name, Email, and Message fields connected to EmailJS (`service_43tfyvp`, `template_a1awgws`, `uzgDE3a2W5AceO4Hc`).
    - Direct contact links:
      - Phone: `+918839676156` (`tel:+918839676156`)
      - Email: `gaganngr319@gmail.com` (`mailto:gaganngr319@gmail.com`)
      - LinkedIn: `https://www.linkedin.com/in/gagannagar`
      - GitHub: `https://github.com/Gagannagar`

11. **Footer:**
    - Clean copyright, quick jump links, social icons (LinkedIn, GitHub, Instagram: `https://instagram.com/gagan.nagarr`).

---

## 4. Existing Content That MUST Be Preserved

| Category | Preserved Data |
|---|---|
| **Personal Info** | Name: Gagan Nagar, Title: Software Engineer / Full Stack Developer |
| **Contact Info** | Email: `gaganngr319@gmail.com`, Phone: `+918839676156` |
| **Social Links** | GitHub: `https://github.com/Gagannagar`, LinkedIn: `https://www.linkedin.com/in/gagannagar`, Instagram: `https://instagram.com/gagan.nagarr` |
| **Projects** | InterviewAI, Employee Management System, Personal Portfolio Website, NextUp |
| **Experience** | Oasis Infobyte (Intern), XCoders IT Training (Trainee) |
| **Education** | Sage University (B.Tech CSE), MP Board 12th, MP Board 10th |
| **Certifications** | XCoders MERN Stack, freeCodeCamp, Simplilearn Prompt Engineering, HackerRank |
| **Assets** | `src/assets/profileImg.png`, `src/assets/Gagan_Resume.pdf`, `public/aiCareer.png`, `public/ems.png`, `public/nextUp.png`, `public/portfolioProject.png` |
| **EmailJS Config** | Service: `service_43tfyvp`, Template: `template_a1awgws`, Public Key: `uzgDE3a2W5AceO4Hc` |

---

## 5. Functional Requirements

1. **Theme Toggle:** Dark and light mode switching supported via class manipulation (`dark` class on root) and persistent storage in `localStorage`. Default should honor user preference or default to dark.
2. **Form Submission:** Contact form must submit via EmailJS without page reload, display user feedback (success/error alerts or inline banners), and clear inputs on success.
3. **Smooth Navigation:** Internal anchor links (`#hero`, `#work`, `#experience`, etc.) must scroll smoothly to target sections.
4. **Mobile Navigation:** The mobile hamburger button must toggle a mobile drawer/menu smoothly, and closing upon clicking any link or backdrop.
5. **Resume Access:** Direct button to view the PDF in a new tab (`target="_blank"`) and download button with `download="Gagan_Resume.pdf"`.
6. **External Links:** All external links must open in a new tab with `rel="noopener noreferrer"`.

---

## 6. Responsive & Accessibility Requirements

- **Responsive Breakpoints:**
  - Mobile: < 640px (single column, full-width touch-friendly cards, drawer menu).
  - Tablet: 640px – 1024px (2-column grids, optimized spacing).
  - Desktop: > 1024px (multi-column grids, fixed header, full layout).
- **Accessibility:**
  - Color contrast ratios must meet WCAG AA standards in both light and dark modes.
  - Interactive elements must be keyboard focusable with visible focus rings.
  - Image tags must include descriptive `alt` attributes.
  - Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`) must be used.
- **Performance:**
  - Vite production bundle should remain lightweight (< 350 kB gzip total).
  - Zero layout shift (CLS < 0.1).
  - Fast render times without bloated third-party dependencies.

---

## 7. Explicit Exclusions & Non-Goals

- **Do NOT convert the project to Next.js or another meta-framework:** The project must remain a Vite + React application.
- **Do NOT delete the existing Git repository or history.**
- **Do NOT replace real project information with fake lorem ipsum or placeholder text.**
- **Do NOT install heavy UI component libraries (such as MUI, Chakra UI, Ant Design)** that would bloat bundle size or fight with Tailwind CSS.
- **Do NOT hardcode personal data inside multiple nested presentation components:** Data should be organized cleanly in structured data files (e.g., `src/data/portfolioData.js`).

---

## 8. Confirmed Requirements vs Assumptions Needing Verification

### Confirmed Requirements (Verified by Codebase & Request)
- Framer reference URL is `https://gagannagar.framer.ai/`.
- Existing React 19 + Tailwind v4 + Vite stack is the foundation.
- All 4 projects, 2 experiences, education, and certs must remain visible.
- EmailJS integration is active and must be kept working.
- PDF resume and project images must be preserved.

### Assumptions to Verify During Implementation
- *Icon Library:* FontAwesome and Devicons are currently linked via CDN `<link>` tags in `index.html`. Replacing them or supplementing with an SVG icon package (like `lucide-react`) could improve bundle independence and offline reliability.
- *Framer Animation Emulation:* Framer uses spring physics. We should determine whether CSS transitions + lightweight Tailwind utilities are sufficient, or if `framer-motion` should be introduced (must verify React 19 peer dependency compatibility first).
- *Dark Mode Default:* Since the Framer reference is dark-first, defaulting to dark mode while retaining the light mode toggle is the recommended user experience.

---

## 9. Definition of Done (Acceptance Criteria)

The portfolio redesign is complete only when:
1. All sections from Section 3 are fully implemented, styled in line with the Framer design reference, and populated with Gagan's real data.
2. The site builds cleanly with `npm run build` without any errors or missing imports.
3. Dark and Light modes both render cleanly with high contrast and smooth transitions.
4. The mobile hamburger menu opens, closes, and navigates correctly on small screens.
5. The contact form connects to EmailJS and handles submission gracefully.
6. Resume viewing and downloading work without broken links.
7. All documentation files in `project-docs/` are updated with verified completion evidence.

