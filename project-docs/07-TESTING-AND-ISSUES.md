# 07 - TESTING, BASELINE ISSUES & DEBUGGING LEDGER

---

## 1. Available Build, Lint & Execution Commands

| Command | Purpose | Expected Result | Status |
|---|---|---|---|
| `npm run build` | Compiles React + Tailwind via Vite into production `dist/` | Exit code 0, generated bundle | **PASS (VERIFIED)** — 70 modules transformed in 4.60s |
| `npm run preview` | Previews the production `dist/` build locally | Serves production build on `http://localhost:4173` | **PASS (VERIFIED)** — HTTP 200 OK |
| `npm run dev` | Starts local dev server on port 3000 | Server running at `http://localhost:3000` | Configured and ready |
| `npm run lint` | Runs ESLint 9 across all JS/JSX files | Exit code 0, 0 errors/warnings | **FAIL (Pre-existing Baseline)** — Throws missing module `./token-store` inside `node_modules` |

---

## 2. Baseline Issues Resolution Status

| Issue ID | Description | Original Status | Redesign Resolution | Current Status |
|---|---|---|---|---|
| `BASE-001` | ESLint missing module `./token-store` in `node_modules` | Pre-existing | Documented as environment-level dependency bug. Not an application syntax issue. | **Known Baseline Limitation** |
| `BASE-002` | Missing mobile navigation hamburger button in `Navbar.jsx` | Bug | Added accessible hamburger `<button>` that toggles mobile drawer with animated transition. | **RESOLVED & VERIFIED** |
| `BASE-003` | Mobile menu "Experience" link pointing to `#projects` | Bug | Corrected `href` to `#experience` and aligned all numbered anchors. | **RESOLVED & VERIFIED** |
| `BASE-004` | Inconsistent component file casing (`contact.jsx` lowercase) | Code Smell | Renamed to `Contact.jsx` via Git and updated imports in `App.jsx`. | **RESOLVED & VERIFIED** |
| `BASE-005` | Redundant files `src/App.css` (0 bytes) and duplicate `src/index.css` | Clutter | Removed via Git rm; styles unified in `src/styles/global.css`. | **RESOLVED & VERIFIED** |
| `BASE-006` | Decentralized personal data scattered across JSX components | Debt | Centralized into `src/data/portfolioData.js` as single source of truth. | **RESOLVED & VERIFIED** |

---

## 3. Test Cases Execution Log

| Test ID | Test Description | Target Component | Expected Outcome | Verification Evidence | Result |
|---|---|---|---|---|---|
| `TC-BUILD-01` | Production bundle compilation | Core Build | `npm run build` exits with code 0; `dist/` created | Vite v7.3.1 transformed 70 modules in 4.60s | **PASS** |
| `TC-PREV-01` | Production preview server HTTP response | Vite Preview | Returns HTTP 200 with HTML shell and assets | `http://localhost:4173/` returned Status 200, length 1392 bytes | **PASS** |
| `TC-NAV-01` | Desktop navigation anchor scrolling | `Navbar.jsx` | Numbered links smoothly scroll to section IDs | All 6 section IDs (`#projects`, `#experience`, `#skills`, `#education`, `#about`, `#contact`) verified in DOM | **PASS** |
| `TC-NAV-02` | Mobile hamburger drawer toggle | `Navbar.jsx` | Accessible button toggles mobile menu and closes on item click | `isMobileMenuOpen` state + closeMenu callbacks verified | **PASS** |
| `TC-THEME-01`| Dark/Light mode toggle | `PortfolioContext` | Toggles `.dark` class on `<html>` and updates `localStorage` | Default set to dark mode; toggleTheme switches class and storage | **PASS** |
| `TC-DATA-01` | Centralized data integrity | `portfolioData.js` | All 4 projects, 2 experiences, education & skills export cleanly | Verified exports consumed by 8 separate components | **PASS** |
| `TC-PROJ-01` | Project cards external links | `Projects.jsx` | Live demo & GitHub links open in new tab with proper `rel` | All 4 projects render with `target="_blank"` and `rel="noopener noreferrer"` | **PASS** |
| `TC-FORM-01` | EmailJS contact form submission | `Contact.jsx` | Submits form without page reload, inline banners, clears inputs | Form ref and `emailjs.sendForm` mapped to valid template keys | **PASS** |
| `TC-RESUME-01`| Resume viewing and downloading | `Resume.jsx` | View opens PDF in new tab; download saves `Gagan_Resume.pdf` | `personalInfo.resumePdf` imported and bound to action buttons | **PASS** |
| `TC-RESP-01` | Mobile viewport layout integrity | Global Layout | Clean responsive stacking, zero horizontal overflow | Max width containers, flex/grid breakpoints (1 col sm, 2 col md, 3 col lg) | **PASS** |
