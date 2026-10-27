# 00 - START HERE: AI Agent Entry Point & Project Guide

> **MANDATORY INSTRUCTION FOR ALL AI CODING AGENTS (Antigravity, Claude Code, Codex, GitHub Copilot, Cursor, etc.):**  
> Read this document first before inspecting the codebase or executing tasks. Do NOT re-analyze previously verified files or reinvent the implementation plan. Follow the recorded stopping point and continue sequentially.

---

## 1. Project Overview & Objective

- **Project Name:** Gagan Nagar — Developer Portfolio Redesign
- **Repository Root:** `c:\Users\gagan\Desktop\Gagan-Portfolio-Hackathon`
- **Primary Objective:** Redesigned personal developer portfolio website using the visual and structural design reference from the Framer site: [https://gagannagar.framer.ai/](https://gagannagar.framer.ai/).
- **Source of Truth for Personal Content:** `src/data/portfolioData.js` is the single source of truth for Gagan Nagar's real experience, projects, skills, education, certifications, contact details, resume, and external links.
- **Current Project Status:** **All 14 Tasks Completed & Verified (Production Ready)**
- **Current Active Task:** None (`BUILD-001` verified)
- **Exact Next Action:** The portfolio redesign is complete, verified, and ready for deployment to Vercel or production hosting. Any future enhancements should follow the update protocol in [09-HANDOFF.md](./09-HANDOFF.md).

---

## 2. Quick Documentation Map

All project documentation resides in the `project-docs/` folder:

| File | Purpose | When to Consult |
|---|---|---|
| [00-START-HERE.md](./00-START-HERE.md) | Central entry point & operating instructions | First read of every session |
| [01-REQUIREMENTS.md](./01-REQUIREMENTS.md) | Complete specifications, scope, boundaries, acceptance criteria | Before planning or changing architecture |
| [02-CODEBASE-MAP.md](./02-CODEBASE-MAP.md) | Verified map of existing codebase, dependencies, & structure | To locate existing components and data |
| [03-DESIGN-REFERENCE.md](./03-DESIGN-REFERENCE.md) | Analysis of Framer reference (`gagannagar.framer.ai`) | When building UI components & styling |
| [04-ARCHITECTURE-AND-DECISIONS.md](./04-ARCHITECTURE-AND-DECISIONS.md) | Technical architecture, styling conventions & decisions | When deciding component boundaries & patterns |
| [05-IMPLEMENTATION-PLAN.md](./05-IMPLEMENTATION-PLAN.md) | Phased, sequential tasks with acceptance criteria | To know what task comes next |
| [06-TASK-TRACKER.md](./06-TASK-TRACKER.md) | Single source of truth for task statuses & verification | Before & after executing any task |
| [07-TESTING-AND-ISSUES.md](./07-TESTING-AND-ISSUES.md) | Baseline issues, verification tests, known bugs & fixes | When validating work or running builds |
| [08-SESSION-LOG.md](./08-SESSION-LOG.md) | Chronological log of sessions, actions, and decisions | At end of session to record progress |
| [09-HANDOFF.md](./09-HANDOFF.md) | Protocol and status snapshot for switching AI tools | When resuming or ending an AI session |

---

## 3. Latest Verification Status

- **Build (`npm run build`):** **PASSING (VERIFIED)** — Vite v7.3.1 compiled client bundle cleanly: `dist/index.html` 1.39 kB, `dist/assets/index-*.js` 275.28 kB, `dist/assets/index-*.css` 86.72 kB. 70 modules transformed in 4.60s.
- **Preview Server (`npm run preview`):** **PASSING (VERIFIED)** — Tested on `http://localhost:4173/`, returned HTTP 200 with full JavaScript bundle and styling.
- **Git Working Tree:** Clean build, no unverified changes.
