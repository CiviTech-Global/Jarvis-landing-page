# Jarvis — AI-Powered Wellness & Productivity Assistant

**Jarvis** is an AI-powered personal wellness and productivity assistant built by **CiviTech Official**. This repository contains the landing page for the Jarvis app — a modern, responsive single-page website that showcases the app's 17 features, company information, career opportunities, global presence, and investment opportunity.

**Live Site:** [https://civitechofficial.org](https://civitechofficial.org)

---

## About Jarvis

Jarvis is an all-in-one companion designed to help you take control of your daily wellness and productivity. From managing tasks and tracking habits to monitoring health metrics and guiding meditation — 17 carefully crafted tools in one seamless experience.

Built with Flutter and the signature **Ember Dark** theme (dark backgrounds with warm orange accents), Jarvis brings together:

- **Productivity Tools** — Tasks, Focus Timer (Pomodoro), Habit Tracker, Gmail Integration
- **Wellness & Health** — Water Intake, Calorie Tracker, Sleep Monitor, Step Counter, Workout Timer, Heart Rate Monitor, Mood Tracker, Meditation Guide
- **Smart Living** — Weather Forecasts, Screen Time Manager, Central Dashboard

---

## Website Pages

### Home (`index.html`)
The main landing page featuring a hero section with the Jarvis splash screen, an overview of the AI assistant, feature categories, a detailed showcase of all 15 features with screenshots, a horizontal screenshot gallery, and information about the AI capabilities powering the app.

### Careers (`careers.html`)
Open positions at CiviTech Official — all fully remote with competitive salaries and benefits:
- **Full-Stack Software Developer** — Flutter, Dart, AI/ML systems
- **UI/UX Designer** — Interface design, Ember Dark design system
- **Marketing & Sales Specialist** — Growth, partnerships, global brand

### Locations (`locations.html`)
CiviTech Official's global presence across three continents:
- **Canada** — Product development and customer success hub
- **Dubai, UAE** — Business development and Middle East partnerships
- **Iran** — Founding headquarters, core R&D and engineering

### Investors (`investors.html`)
Professional investment pitch with financial targets, competitive advantages, growth roadmap, and FAQ:
- **Series A Target:** $5,000,000 (12–18 months)
- **Growth Round:** $50,000,000 (36–48 months)

---

## Tech Stack

- **Pure HTML5 + CSS3 + Vanilla JavaScript** — no frameworks, no build tools
- **Google Fonts** — Inter (body) + Plus Jakarta Sans (headings)
- **CSS Custom Properties** — design tokens from the Ember Dark theme
- **CSS Animations** — `@keyframes` + `IntersectionObserver` scroll-triggered reveals
- **Responsive** — mobile-first design with breakpoints at 768px and 1200px

---

## Design System

The website follows the **Ember Dark** design language from the Jarvis app:

| Token | Value |
|-------|-------|
| Background | `#141416` |
| Surface | `#1C1C20` |
| Card | `#26262C` |
| Primary (Orange) | `#FF7A2F` |
| Secondary (Burnt Orange) | `#FF5500` |
| Accent (Amber) | `#FFB347` |
| Text Primary | `#F2F0ED` |
| Text Secondary | `#A8A4A0` |

---

## Project Structure

```
Jarvis-landing-page/
├── index.html              # Main landing page
├── careers.html            # Careers page
├── locations.html          # Global locations page
├── investors.html          # Investment opportunity page
├── css/
│   ├── styles.css          # Design tokens, layout, components, responsive
│   └── animations.css      # @keyframes, scroll reveal classes
├── js/
│   └── main.js             # Nav, mobile menu, scroll reveals, carousel, accordion
├── assets/
│   ├── images/
│   │   └── jarvis-logo.svg # Sparkle logo
│   └── screenshots/        # 17 app screenshots
└── README.md
```

---

## Local Development

No build tools required. Simply open any HTML file in a browser:

```bash
# Clone the repository
git clone https://github.com/CiviTech-Global/Jarvis-landing-page.git

# Open in browser
open index.html
```

Or use a local server:

```bash
npx serve .
```

---

## Contact

- **Email:** mohammadkhalilzadeh@civitechofficial.org
- **Phone:** +98-921-173-5466

---

Built with care by **CiviTech Official** | &copy; 2026 All rights reserved.
