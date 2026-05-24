# Agent Context — China Suite Switcher Hub (danieltibbing.github.io)

This repository serves as the central switcher portal and main landing page for the **China Suite** ecosystem. It acts as the gateway linking the Career Board, Study Hub, and Podcast Hub together under a unified design language.

---

## 🗺️ Suite Ecosystem Architecture

The China Suite is distributed across four distinct repositories, all hosted under the `danieltibbing.github.io` domain:

1. **Switcher Portal (This Repo)**: `https://danieltibbing.github.io/`
2. **Career Board (`china-jobs`)**: `https://danieltibbing.github.io/china-jobs/`
3. **Study Hub (`chinese-practice`)**: `https://danieltibbing.github.io/chinese-practice/`
4. **Podcast Hub (`china-pods`)**: `https://danieltibbing.github.io/china-pods/`

---

## 🛠️ Technical Stack & Configurations

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4.0.0
- **Build Configurations**:
  - `vite.config.ts`: Base is `/` (root domain).
  - `tsconfig.json` & `tsconfig.app.json`: Strict TypeScript checking, ensuring full compilation hygiene.
- **Routing**: Client-side routing is handled through `HashRouter` or subpages in React to prevent standard 404s when reload occurs on GitHub Pages.

---

## 🎨 Design Rules & Aesthetics

- ** harmony & premium UI**: Glassmorphic layout panels, harmonic crimson accents (`#dc2626` / `text-red-600`), and smooth transitions.
- **Dark Mode Switcher**:
  - Shared via the key `theme` in `localStorage`.
  - Implements a FOUC (Flash of Unstyled Content) preventive script in `<head>` of `index.html` to instantly apply dark/light classes before React renders.
  - Syncs in real-time across open browser tabs using the window `storage` event listener.
- **Typography**: Imports `Inter` and `Noto Serif SC` from Google Fonts to serve clean modern text interfaces.

---

## 📂 Codebase Organization

- `index.html`: Optimized SEO tags and early theme injection scripts.
- `src/main.tsx`: Entry point.
- `src/App.tsx`: The main visual hub, displaying Career, Study, and Podcast cards with description lists, switchers, and dark mode toggles.
- `src/index.css`: Imports Tailwind and defines CSS variables/animations.
- `.github/workflows/deploy.yml`: Deploys the build output cleanly to the root of GitHub Pages when pushes occur on `main`.

---

## ⚡ Switcher Integration Notes

When modifying theSwitcher layout:
- Any added navigations or hubs must be replicated across the headers of the sibling repositories:
  - Career Board: [china-jobs Header](file:///Users/danieltibbing/Projects/china/china-jobs/src/components/layout/Header.tsx)
  - Study Hub: [chinese-practice Header](file:///Users/danieltibbing/Projects/china/chinese-practice/src/components/layout/Header.tsx)
  - Podcast Hub: [china-pods Header](file:///Users/danieltibbing/Projects/china/china-pods/src/components/layout/Header.tsx)
- Ensure base URLs match `/china-jobs/`, `/chinese-practice/`, and `/china-pods/` accurately to prevent routing loops.

---

## 💻 Useful Operations

- Run development server: `npm run dev`
- Build project: `npm run build` (runs `tsc -b && vite build`)
- Deployment: Push to the `main` branch to trigger the automated GitHub Pages action.
