import { useTheme } from "./hooks/useTheme";
import { 
  Briefcase, 
  BookOpen, 
  CheckCircle2, 
  ArrowUpRight, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Compass, 
  Zap,
  Headphones
} from "lucide-react";
import "./App.css";

export default function App() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Background Decorator Ambient Glows */}
      <div className="ambient-glow glow-blue"></div>
      <div className="ambient-glow glow-cyan"></div>

      {/* Global Suite Header */}
      <header className="suite-header">
        <div className="suite-switcher-bar">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 suite-switcher-content">
            <a 
              href="https://danieltibbing.github.io/" 
              className="suite-logo"
            >
              <span>China Suite</span>
            </a>
            <div className="suite-links">
              <a 
                href="https://danieltibbing.github.io/china-jobs" 
                className="suite-link-inactive"
              >
                Jobs Board
              </a>
              <a 
                href="https://danieltibbing.github.io/china-pods" 
                className="suite-link-inactive"
              >
                Podcast Hub
              </a>
              <a 
                href="https://danieltibbing.github.io/chinese-practice/" 
                className="suite-link-inactive"
              >
                Language Study
              </a>
            </div>
          </div>
        </div>

        {/* Brand Bar */}
        <div className="header-main">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 header-main-content">
            <div className="header-title-wrap">
              <div className="header-app-logo">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h1>China Suite</h1>
              </div>
            </div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="theme-toggle-btn"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="hero-tag">Core Ecosystem Hub</span>
        <h2>
          Welcome to the <span className="text-gradient">China Suite</span>
        </h2>
        <p className="subtitle">
          An ultra-premium, privacy-first portal bridging China-Nordic professional opportunities and advanced Mandarin learning.
        </p>
      </section>

      {/* Main Twin Application Cards Grid */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 cards-grid">
        {/* Jobs Board Card */}
        <article className="hub-card">
          <div className="card-badge-row">
            <div className="card-icon-container">
              <Briefcase className="h-7 w-7" />
            </div>
            <span className="card-badge">Career & Talent</span>
          </div>

          <h3>China-Nordic Jobs Board</h3>
          <p className="card-desc">
            Explore and track high-impact career opportunities spanning Nordic countries and China. Search by roles, locations, or companies, star positions, and log application steps.
          </p>

          <ul className="card-checklist">
            <li className="checklist-item">
              <CheckCircle2 className="h-4.5 w-4.5 checklist-icon" />
              <span>Full-stack search and dynamic filtering</span>
            </li>
            <li className="checklist-item">
              <CheckCircle2 className="h-4.5 w-4.5 checklist-icon" />
              <span>Track interview status and active application logs</span>
            </li>
            <li className="checklist-item">
              <CheckCircle2 className="h-4.5 w-4.5 checklist-icon" />
              <span>Curated company index with local data sync</span>
            </li>
          </ul>

          <a 
            href="https://danieltibbing.github.io/china-jobs" 
            className="launch-btn"
          >
            <span>Launch Jobs Board</span>
            <ArrowUpRight className="h-5 w-5 launch-btn-arrow" />
          </a>
        </article>

        {/* Chinese Learning Studio Card */}
        <article className="hub-card">
          <div className="card-badge-row">
            <div className="card-icon-container">
              <BookOpen className="h-7 w-7" />
            </div>
            <span className="card-badge">Language Studio</span>
          </div>

          <h3>Chinese Learning Studio</h3>
          <p className="card-desc">
            Master Mandarin from daily basics through the complete HSK 1–6 curriculum. Features smart study flashcards, active reading comprehension blocks, and an advanced lookup dictionary.
          </p>

          <ul className="card-checklist">
            <li className="checklist-item">
              <CheckCircle2 className="h-4.5 w-4.5 checklist-icon" />
              <span>Interactive flashcard study with HSK levels 1–6</span>
            </li>
            <li className="checklist-item">
              <CheckCircle2 className="h-4.5 w-4.5 checklist-icon" />
              <span>Sentence builders, pinyin guides, and readings</span>
            </li>
            <li className="checklist-item">
              <CheckCircle2 className="h-4.5 w-4.5 checklist-icon" />
              <span>Dynamic lookup dictionary with instant results</span>
            </li>
          </ul>

          <a 
            href="https://danieltibbing.github.io/chinese-practice/" 
            className="launch-btn"
          >
            <span>Launch Language Studio</span>
            <ArrowUpRight className="h-5 w-5 launch-btn-arrow" />
          </a>
        </article>

        {/* Podcast Hub Card */}
        <article className="hub-card">
          <div className="card-badge-row">
            <div className="card-icon-container">
              <Headphones className="h-7 w-7" />
            </div>
            <span className="card-badge">Audio & Culture</span>
          </div>

          <h3>China Podcast Hub</h3>
          <p className="card-desc">
            Stream, search, and catalog high-impact podcasts covering China's politics, technology, history, and society. Features inline audio playback, playback speeds, and a listening queue.
          </p>

          <ul className="card-checklist">
            <li className="checklist-item">
              <CheckCircle2 className="h-4.5 w-4.5 checklist-icon" />
              <span>Premium glassmorphic continuous audio player</span>
            </li>
            <li className="checklist-item">
              <CheckCircle2 className="h-4.5 w-4.5 checklist-icon" />
              <span>Topic-based categorization and quick filters</span>
            </li>
            <li className="checklist-item">
              <CheckCircle2 className="h-4.5 w-4.5 checklist-icon" />
              <span>Personal playback queue and listening history</span>
            </li>
          </ul>

          <a 
            href="https://danieltibbing.github.io/china-pods" 
            className="launch-btn"
          >
            <span>Launch Podcast Hub</span>
            <ArrowUpRight className="h-5 w-5 launch-btn-arrow" />
          </a>
        </article>
      </main>

      {/* Integration Showcase / Specs Grid */}
      <section className="specs-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="specs-title-row">
            <h3>Designed for Synergy</h3>
            <p>A look at the underlying principles unifying the China Suite ecosystem.</p>
          </div>

          <div className="specs-grid">
            <div className="spec-item">
              <div className="spec-icon-box">
                <Zap className="h-6 w-6" />
              </div>
              <h4>Cohesive Aesthetic</h4>
              <p>Built with matching Slate/Blue color palettes, Inter/Noto Serif typography, and fluid transitions to feel like a singular app experience.</p>
            </div>

            <div className="spec-item">
              <div className="spec-icon-box">
                <Compass className="h-6 w-6" />
              </div>
              <h4>Seamless Navigation</h4>
              <p>The integrated global suite switcher header is present on every workspace, making jumps between tools instant and frictionless.</p>
            </div>

            <div className="spec-item">
              <div className="spec-icon-box">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4>Privacy First</h4>
              <p>Your study progress, dictionary logs, and job applications are preserved entirely on your local device. 100% private, tracker-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="suite-footer">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 footer-content">
          <div>
            &copy; {new Date().getFullYear()} Daniel Tibbing. All rights reserved.
          </div>
          <div className="footer-stats">
            <div className="footer-stat-item">
              <span className="footer-stat-icon"></span>
              <span>Jobs Board: Active</span>
            </div>
            <div className="footer-stat-item">
              <span className="footer-stat-icon"></span>
              <span>Podcast Hub: Active</span>
            </div>
            <div className="footer-stat-item">
              <span className="footer-stat-icon"></span>
              <span>Language Studio: Active</span>
            </div>
          </div>
          <div>
            <a 
              href="https://github.com/danieltibbing" 
              target="_blank" 
              rel="noreferrer"
              className="footer-stat-item hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="16" 
                height="16" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span>danieltibbing</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
