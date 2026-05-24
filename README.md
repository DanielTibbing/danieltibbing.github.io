# 🌐 China Suite Switcher Hub (danieltibbing.github.io)

The central portal and entry switcher dashboard for the **China Suite** ecosystem—an interconnected, ultra-premium client-side suite of productivity, study, and audio tools tailored for China-focused professionals and learners.

---

## 🗺️ Switcher Suite Directory

The China Suite links together four distinct client-side repositories, all deployed seamlessly under your custom GitHub Pages domain:

1. **Switcher Portal (This Repo)**: `https://danieltibbing.github.io/` — The main gateway containing visual cards and central configurations.
2. **Career Board (`china-jobs`)**: `https://danieltibbing.github.io/china-jobs/` — Job listings directory, detail inspect panels, and applicant tracking systems.
3. **Study Hub (`chinese-practice`)**: `https://danieltibbing.github.io/chinese-practice/` — Interactive Spaced Repetition Flashcards (HSK 1-6), sentence breakdown sheets, and dictionary aggregates.
4. **Podcast Hub (`china-pods`)**: `https://danieltibbing.github.io/china-pods/` — Premium audio player, verified direct CORS streams, and customized reorderable playlists.

---

## ✨ Features

- **Ecosystem Switcher Gateway:** An entry dashboard displaying Carrer, Study, and Podcast switcher cards featuring clear descriptions, bulleted logs, and direct access switchers.
- **Harmonious Visual Language:** Built on a responsive, dark-light glassmorphic UI system utilizing crimson accents (`text-red-600`) and modern typefaces (`Inter`, `Noto Serif SC`).
- **Tab Theme Synchronization:** Theme toggles bind to a shared `localStorage` state listener. Mutating light or dark mode in any sub-app immediately triggers real-time updates across all active browser windows.
- **FOUC Prevention:** Preloads theme parameters in your HTML `<head>` prior to React assembly, completely eliminating FOUC (Flash of Unstyled Content).

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4.0.0 (using standard vanilla modules)
- **Deployment:** GitHub Pages Root Domain (`/`)

---

## 📂 Project Directory Structure

```text
src/
├── components/          # Reusable UI elements
├── hooks/
│   └── useTheme.ts      # Shared dark/light state listener
├── index.css            # Base Tailwind imports and custom animations
├── App.tsx              # Portal dashboard grid andSwitcher cards
└── main.tsx             # DOM assembly entry point
```

---

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run locally in development mode:**
   ```bash
   npm run dev
   ```
3. **Build the production package:**
   ```bash
   npm run build
   ```
   *This compiles TypeScript strict checking (`tsc -b`) and bundles standard minified files inside `dist/` using Vite.*
