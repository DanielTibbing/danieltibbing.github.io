# 🌐 China Suite Switcher Hub (danieltibbing.github.io) - `AGENTS.md`

This directory houses the central gateway and entrance portal switcher for the **China Suite** ecosystem—an interconnected, ultra-premium hub of React-based productivity, audio, and language tools.

---

## 🎯 Purpose & Role
This repository acts as the primary landing page (`danieltibbing.github.io`) representing the ecosystem switcher portal. It links out to other sub-apps deployed on GitHub Pages and manages the initial visual entry for all visitors.

---

## 🛠️ Technology Stack
- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4.0.0
- **Build / Lint Engine:** strict `tsc` checks and ESLint configurations.
- **Deployment target:** Deployed at `/` (the root domain).

---

## 📂 Key Directory Structures
```text
danieltibbing.github.io/
├── src/
│   ├── components/      # Reusable portal switcher elements and cards
│   ├── hooks/
│   │   └── useTheme.ts  # Shared dark/light state listener
│   ├── App.tsx          # Main entry visual grid, assembly point
│   ├── main.tsx         # DOM entry point
│   └── index.css        # Base Tailwind imports & custom canvas animations
```

---

## 🔑 Shared Design & Implementation Patterns

### 1. The Gateway Grid Component
- **Portal Switcher Grid**: Renders individual app access cards (Career, Study, Podcast, News, Reader).
- **Accents**: Uses dynamic glassmorphic borders with standard theme classes (`bg-white/70 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800`).
- **Typography**: Uses modern typography mixes (e.g. `Inter` and classical Chinese characters rendered via `Noto Serif SC`).

### 2. Theme synchronization (`useTheme.ts`)
- Implements the suite-wide storage synchronization engine:
  ```ts
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  ```
- Ensures theme changes in this gateway automatically propagates into other open tabs, and vice-versa.

---

## 💻 Operations Reference
- **Local Dev Server:**
  ```bash
  npm install
  npm run dev
  ```
- **Compiling Production Build:**
  ```bash
  npm run build
  ```
  *(Generates standard static production-ready files inside `dist/` directory)*
