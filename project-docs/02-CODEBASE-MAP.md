# 02 - CODEBASE MAP & TECHNICAL AUDIT

---

## 1. High-Level Architecture & Technology Stack

The project is a client-side Single Page Application (SPA) built using modern React, styled with Tailwind CSS, and bundled using Vite.

| Area | Technology / Tool | Version | Notes |
|---|---|---|---|
| **Core Framework** | React | `^19.2.0` | Latest React 19 major release |
| **DOM Renderer** | React DOM | `^19.2.0` | Uses `react-dom/client` `createRoot` |
| **Bundler & Dev Server**| Vite | `^7.2.4` (resolves to v7.3.1) | Configured with `@vitejs/plugin-react` |
| **Styling Engine** | Tailwind CSS | `^4.2.1` | Using `@tailwindcss/vite` plugin (Tailwind v4) |
| **Scroll Animation** | AOS (Animate On Scroll) | `^2.3.4` | Initialized in `src/App.jsx` |
| **Typing Effect** | typed.js | `^3.0.0` | Initialized via `useRef` in `src/components/Hero.jsx` |
| **Contact Emailing** | @emailjs/browser | `^4.4.1` | Initialized in `src/components/contact.jsx` |
| **Linter** | ESLint | `^9.39.1` | Configured with flat config `eslint.config.js` |
| **External Icons** | FontAwesome & Devicons | CDN linked | Linked in `index.html` `<head>` |

---

## 2. Directory & File Structure

```text
Gagan-Portfolio-Hackathon/
├── .git/                      # Git repository metadata
├── .gitignore                 # Standard node, dist, and environment ignores
├── eslint.config.js           # Flat ESLint configuration
├── index.html                 # HTML root template with FontAwesome/Devicon CDNs
├── package.json               # Project manifest, dependencies, and scripts
├── package-lock.json          # Dependency lockfile
├── README.md                  # Default Vite template readme
├── tailwind.config.js         # Tailwind configuration (colors, keyframes, fonts)
├── vite.config.js             # Vite config with React and Tailwind plugins (port 3000)
│
├── public/                    # Static assets served at root
│   ├── aiCareer.png           # Screenshot of InterviewAI project (47.7 kB)
│   ├── ems.png                # Screenshot of Employee Management System (147.7 kB)
│   ├── nextUp.png             # Screenshot of NextUp Task Manager (38.7 kB)
│   └── portfolioProject.png   # Screenshot of Portfolio Project (358.7 kB)
│
├── src/                       # Application source code
│   ├── App.css                # Empty file (0 bytes, unused)
│   ├── App.jsx                # Main application component & layout wrapper
│   ├── index.css              # Duplicate Tailwind import (1 line, unused by main.jsx)
│   ├── main.jsx               # Application entry point, mounts to #root
│   │
│   ├── assets/                # Bundled binary assets
│   │   ├── Gagan_Resume.pdf   # Gagan's downloadable/viewable PDF resume (54.4 kB)
│   │   └── profileImg.png     # Headshot photo of Gagan Nagar (45.9 kB)
│   │
│   ├── components/            # UI components
│   │   ├── About.jsx          # Professional summary and bio
│   │   ├── Certifications.jsx # Certifications cards grid
│   │   ├── contact.jsx        # Contact form with EmailJS (note lowercase 'c')
│   │   ├── Education.jsx      # Vertical timeline for B.Tech, 12th, and 10th
│   │   ├── Experience.jsx     # Career history cards (Oasis, XCoders)
│   │   ├── Footer.jsx         # Footer with copyright & social links
│   │   ├── Hero.jsx           # Hero banner with typed.js & avatar
│   │   ├── Navbar.jsx         # Header navbar with theme toggle
│   │   ├── Projects.jsx       # Featured projects cards grid
│   │   ├── Resume.jsx         # Resume view/download card
│   │   └── Skills.jsx         # Tabbed technical & soft skills grid
│   │
│   ├── context/               # React Context providers
│   │   └── PortfolioContext.jsx # Manages isDarkMode state & projectsData array
│   │
│   └── styles/                # Global CSS
│       └── global.css         # Tailwind v4 import, custom buttons, timeline CSS
│
└── project-docs/              # Persistent project documentation & AI handoff system
```

---

## 3. Application Entry Points & Component Hierarchy

### Mount Flow
1. **`index.html`**: Contains the root HTML shell, CDN links for icons, viewport meta, and `<div id="root"></div>`. Loads `/src/main.jsx`.
2. **`src/main.jsx`**: Bootstraps the React root using `ReactDOM.createRoot`. Imports `./styles/global.css` and renders `<App />` within `<React.StrictMode>`.
3. **`src/App.jsx`**: Initializes AOS animation library inside a `useEffect` hook. Wraps everything with `<PortfolioProvider>`. Renders top-to-bottom:
   - `<Navbar />` (Fixed top navigation)
   - `<main>`:
     - `<Hero />` (`#hero`)
     - `<About />` (`#about`)
     - `<Skills />` (`#skills`)
     - `<Projects />` (`#projects`)
     - `<Experience />` (`#experience`)
     - `<Education />` (`#education`)
     - `<Certifications />` (`#courses`)
     - `<Resume />` (`#resume`)
     - `<Contact />` (`#contact`)
   - `<Footer />`

---

## 4. Component Analysis & Responsibilities

| Component | File Path | Responsibilities & Observed Implementation Details |
|---|---|---|
| **Navbar** | `src/components/Navbar.jsx` | Fixed header with backdrop blur. Displays name logo, desktop nav links, theme toggle button, and resume button. Contains state for mobile menu, but **lacks a hamburger toggle button in the JSX**. Mobile menu has a link bug (`href="#projects"` labeled "Experience"). |
| **Hero** | `src/components/Hero.jsx` | Full-screen hero section. Renders profile avatar (`profileImg.png`), title, animated typed strings using `typed.js`, and down-arrow scroll indicator. Clean destroy lifecycle on unmount. |
| **About** | `src/components/About.jsx` | Centered text paragraph highlighting full stack MERN skills, AI application focus, and software engineering philosophy. AOS fade-up animation. |
| **Skills** | `src/components/Skills.jsx` | Tabbed component (`technical` vs `soft`). Renders 13 technical skills with Devicons and 5 soft skills with FontAwesome icons. Hover translation effects. |
| **Projects** | `src/components/Projects.jsx` | Consumes `projectsData` from `PortfolioContext`. Renders responsive grid (1 col mobile, 2 col md, 3 col lg). Cards include image, tech tags, description, live demo button, and github link. |
| **Experience** | `src/components/Experience.jsx` | Array of 2 experiences (Oasis Infobyte, XCoders IT Training). Card layout with left border accent, role, company, duration, location, and bulleted achievements. |
| **Education** | `src/components/Education.jsx` | Vertical timeline with central line on desktop (`md:`), alternating left/right layout with circular timeline markers styled in `global.css`. Lists B.Tech (Sage University), 12th, and 10th. |
| **Certifications** | `src/components/Certifications.jsx` | Grid of 4 cards (MERN Stack, Responsive Web Design, Prompt Engineering with Copilot, CSS Basic). Section ID is `#courses`. |
| **Resume** | `src/components/Resume.jsx` | Imports `Gagan_Resume.pdf`. Provides two action buttons: "View Resume" (`target="_blank"`) and "Download PDF" (`download="Gagan_Resume.pdf"`). |
| **Contact** | `src/components/contact.jsx` | EmailJS form with `useRef`. Submits Name, Email, and Message to EmailJS service. Also lists direct contact icons (phone, email, linkedin, github). Filename has lowercase `c`. |
| **Footer** | `src/components/Footer.jsx` | Dark footer with quick jump links, social icons (LinkedIn, GitHub, Instagram), and copyright year calculated dynamically. |
| **Context** | `src/context/PortfolioContext.jsx` | Manages `isDarkMode` state with localStorage persistence and system preference fallback. Toggles `.dark` class on `document.documentElement`. Also holds `projectsData` array. |

---

## 5. Styling Approach & Configuration

- **Tailwind Version 4:**
  - Configured in `vite.config.js` via `@tailwindcss/vite`.
  - Imported in `src/styles/global.css` via `@import "tailwindcss";` and `@custom-variant dark (&:where(.dark, .dark *));`.
  - `tailwind.config.js` specifies extended colors (`blue-700`, `violet-900`, `neon-400`, `neon-500`, `neon-600`), fonts (`poppins`, `inter`), and custom keyframe animations (`fade-in-up`, `fade-in-down`, `float`).
- **Custom Global CSS Classes:**
  - Defined in `src/styles/global.css`: `.btn-primary`, `.btn-secondary`, `.text-shadow-lg`, and timeline alignment rules (`.md\:left-timeline`, `.md\:right-timeline`).
- **Icons:**
  - FontAwesome 6.0.0-beta3 via CDN.
  - Devicon latest via CDN.

---

## 6. Build, Development, and Execution Commands

| Command | Action | Verified Result |
|---|---|---|
| `npm run dev` | Starts Vite local development server on port 3000 | Configured in `vite.config.js` (`port: 3000`) |
| `npm run build` | Compiles production assets into `dist/` | **Verified working** (68 modules transformed, built in ~5.9s) |
| `npm run preview` | Serves the production build locally | Supported by Vite |
| `npm run lint` | Runs ESLint 9 across `.js` and `.jsx` files | **Verified failing** due to missing `node_modules` module |

---

## 7. Verified Baseline Issues & Code Smells

These issues exist in the baseline repository before any redesign work was started:

1. **`BASE-001` (ESLint Crash):** Running `npm run lint` throws `Error: Cannot find module './token-store'` inside `node_modules/eslint`. This is an environment/node_modules issue, not a syntax error in application code.
2. **`BASE-002` (Missing Mobile Menu Toggle):** In `src/components/Navbar.jsx`, `isMobileMenuOpen` state and `toggleMobileMenu` function exist, and the mobile dropdown container exists, but there is no hamburger `<button>` rendered in the header to allow mobile users to open it.
3. **`BASE-003` (Broken Mobile Menu Link):** In `src/components/Navbar.jsx`, line 51 renders `<a href="#projects">Experience</a>` instead of `href="#experience"`.
4. **`BASE-004` (File Naming Inconsistency):** `src/components/contact.jsx` uses a lowercase `c`, while all other components use PascalCase (`Navbar.jsx`, `Hero.jsx`, etc.). On case-sensitive filesystems (Linux/Vercel CI), this can cause import mismatches.
5. **`BASE-005` (Redundant CSS Files):** `src/App.css` is an empty 0-byte file, and `src/index.css` contains `@import "tailwindcss";` but is never imported by `src/main.jsx` (which imports `src/styles/global.css`).
6. **`BASE-006` (Decentralized Data):** Projects are in `PortfolioContext.jsx`, but Experiences, Skills, Certifications, and Bio are hardcoded in their respective JSX components.

