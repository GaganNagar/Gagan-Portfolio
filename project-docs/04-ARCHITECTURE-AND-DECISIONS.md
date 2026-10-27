# 04 - ARCHITECTURE & TECHNICAL DECISION LOG

---

## 1. Existing Architecture & Technology Stack

The portfolio is structured as a client-side Single Page Application (SPA) powered by:
- **React 19.2.0:** Utilizing functional components, standard React hooks (`useState`, `useEffect`, `useRef`, `useContext`), and React Context for global state.
- **Vite 7.2.4 (v7.3.1 runtime):** Ultra-fast compilation, HMR, and production roll-up bundling.
- **Tailwind CSS 4.2.1:** Configured via the official `@tailwindcss/vite` plugin with custom CSS custom variants and variables in `src/styles/global.css`.
- **Third-Party Libraries:**
  - `typed.js`: Animated text typing in the Hero section.
  - `aos`: Scroll-triggered reveal animations.
  - `@emailjs/browser`: Direct client-side email dispatching without needing a dedicated backend server.

---

## 2. Proposed Architecture & Component Organization

To make the codebase maintainable, scalable, and easy to navigate for future AI tools, the architecture will follow a clear separation of **Data**, **Shared UI Elements**, **Sections**, and **Application State**.

### Proposed Directory Layout

```text
src/
├── assets/                  # Static media (profile photo, resume PDF)
├── data/                    # Single source of truth for portfolio data
│   └── portfolioData.js     # Projects, experiences, skills, education, certs, social links
├── components/              # Modular UI components
│   ├── common/              # Reusable low-level UI elements
│   │   ├── Badge.jsx        # Pill / tech tag badge
│   │   ├── Button.jsx       # Standardized primary/secondary/outline button
│   │   └── SectionHeader.jsx# Numbered section title + subtitle component
│   ├── sections/            # Major page sections
│   │   ├── Navbar.jsx       # Header navigation, status indicator, mobile menu
│   │   ├── Hero.jsx         # Hero banner, developer pitch, CTA buttons
│   │   ├── TechMarquee.jsx  # Moving ticker of core skills/technologies
│   │   ├── Projects.jsx     # Featured projects deck ("01 Work")
│   │   ├── Experience.jsx   # Career history timeline ("02 Experience")
│   │   ├── Skills.jsx       # Technical & soft skills matrix ("03 Skills")
│   │   ├── Education.jsx    # Academic background & certs ("04 Education")
│   │   ├── About.jsx        # Bio, engineering philosophy ("05 About")
│   │   ├── ResumeSection.jsx# PDF preview & download block
│   │   ├── Contact.jsx      # EmailJS form & direct links ("06 Contact")
│   │   └── Footer.jsx       # Copyright, quick links, social media
├── context/
│   └── ThemeContext.jsx     # Cleaned up theme manager (Dark / Light mode)
├── styles/
│   └── global.css           # Tailwind v4 imports, theme variables, custom utilities
├── App.jsx                  # Root composition & animation initialization
└── main.jsx                 # Entry point
```

> **Note:** The proposed directory layout represents the target organization for upcoming tasks. Files will be created or refactored step-by-step as outlined in [05-IMPLEMENTATION-PLAN.md](./05-IMPLEMENTATION-PLAN.md).

---

## 3. Data Organization Strategy

### The Problem in Baseline Codebase
Currently, data is fragmented across multiple locations:
- Project items are defined in `src/context/PortfolioContext.jsx`.
- Work experiences are defined as an inline constant in `src/components/Experience.jsx`.
- Technical skills and soft skills are in `src/components/Skills.jsx`.
- Certifications are in `src/components/Certifications.jsx`.
- Personal contact details are hardcoded in `src/components/contact.jsx` and `src/components/Footer.jsx`.

### The Solution: Centralized `src/data/portfolioData.js`
All personal, career, project, and contact information will be centralized into a clean JavaScript module (`src/data/portfolioData.js`).
- **Benefits:**
  - Zero JSX clutter inside display components.
  - Future updates to projects or work experience only require editing one data file.
  - Presentation components become purely functional and easily testable.

---

## 4. Styling & Theming Conventions

### Tailwind CSS v4 Approach
1. **Utility-First Styling:** Use standard Tailwind utility classes directly in JSX for consistent layout, typography, flexbox/grid, and transitions.
2. **Semantic Dark/Light Classes:**
   - Body & Backgrounds: `bg-zinc-950 dark:bg-zinc-950` / light fallback `bg-zinc-50`.
   - Card Surfaces: `bg-zinc-900/60 dark:bg-zinc-900/60 border border-zinc-800/80`.
   - Headings: `text-zinc-100 dark:text-zinc-100` / light fallback `text-zinc-900`.
   - Muted Text: `text-zinc-400 dark:text-zinc-400`.
   - Accent / Highlights: Violet/Emerald tones (`text-violet-400`, `text-emerald-400`).
3. **Reduced Reliance on Arbitrary CSS:**
   - Retire unnecessary custom CSS classes in `src/styles/global.css` that can be handled natively with standard Tailwind utilities.
   - Clean up unused `src/App.css` and duplicate `src/index.css`.

---

## 5. Third-Party Dependencies & Decisions

| Dependency | Current Status | Decision & Rationale |
|---|---|---|
| `react` & `react-dom` (v19) | Installed (`^19.2.0`) | **Keep as is.** Foundation of application. |
| `@tailwindcss/vite` & `tailwindcss` | Installed (`^4.2.1`) | **Keep as is.** Fast, modern CSS engine. |
| `@emailjs/browser` | Installed (`^4.4.1`) | **Keep as is.** Working client-side contact dispatch without a custom server. |
| `typed.js` | Installed (`^3.0.0`) | **Keep as is.** Provides dynamic typewriter hero text with minimal footprint. |
| `aos` | Installed (`^2.3.4`) | **Evaluate / Maintain.** Provides lightweight scroll-triggered reveals. If React 19 compatibility issues arise, can be replaced with native CSS or IntersectionObserver. |
| `lucide-react` | Not Installed (Proposed) | **Consider adding.** Currently icons rely on external CDNs (FontAwesome & Devicon) in `index.html`. Using an SVG icon package like `lucide-react` gives offline independence, tree-shaking, and crisp vector rendering. |
| `framer-motion` | Not Installed | **Do NOT install unless strictly necessary.** High risk of peer dependency conflicts with React 19. Tailwind CSS transitions + native CSS animations are sufficient and significantly lighter. |

---

## 6. Compatibility & Quality Guardrails

1. **EmailJS Integration Stability:**
   - Service ID: `service_43tfyvp`
   - Template ID: `template_a1awgws`
   - Public Key: `uzgDE3a2W5AceO4Hc`
   - Form fields must map exactly to: `from_name`, `from_email`, `message`.
2. **Asset Paths:**
   - Resume PDF path: `src/assets/Gagan_Resume.pdf` (must be imported or linked accurately).
   - Profile image path: `src/assets/profileImg.png`.
   - Project screenshots: `public/aiCareer.png`, `public/ems.png`, `public/nextUp.png`, `public/portfolioProject.png`.
3. **No Over-Engineering:**
   - No Redux, Zustand, or complex state managers.
   - No SSR or full-stack migration.
   - Keep the code lightweight, readable, and lightning fast.

---

## 7. Decisions Made & Rationale

| Decision ID | Decision | Rationale | Status |
|---|---|---|---|
| `DEC-001` | Preserve React 19 + Vite SPA Architecture | Changing framework is out of scope and would break existing build pipeline and deployment targets (Vercel). | **Confirmed** |
| `DEC-002` | Dark-First Design with Light Toggle | Matches the visual reference `gagannagar.framer.ai` while preserving accessibility for users who prefer light mode. | **Confirmed** |
| `DEC-003` | Centralize Portfolio Data in `src/data/` | Decouples personal data from presentation code, preventing duplication and simplifying maintenance. | **Planned (PREP-001)** |
| `DEC-004` | Fix Mobile Hamburger Menu | The baseline `Navbar.jsx` has mobile state but lacks a clickable hamburger button. Adding it resolves a key mobile UX failure. | **Planned (NAV-001)** |
| `DEC-005` | Rename `contact.jsx` to `Contact.jsx` | Fixes PascalCase consistency across the `components/` directory to prevent case-sensitive Linux deployment bugs. | **Planned (PREP-001)** |

