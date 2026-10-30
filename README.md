# Elite Trading

A modern, responsive trading website built with **React**, **Vite**, and **Tailwind CSS**. Features a sober “Red Wine” theme, mobile‑first UI, and smooth animations via Framer Motion.

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone <your-repo-url>
   cd elite-trading
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or: yarn install
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   # or: yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build

```bash
npm run build
# or: yarn build
```

Outputs to `dist/`.

## 🛠️ Tech Stack

- **React 18** – UI framework
- **Vite** – Build tool & dev server
- **Tailwind CSS** – Utility‑first styling
- **Framer Motion** – Animations
- **React Router DOM** – SPA routing
- **Lucide React** – Icon set

## 📂 Project Structure

```
src/
├─ components/          # Reusable UI components
│  ├─ BackToHomeButton.jsx
│  ├─ Footer.jsx
│  ├─ FloatingTelegramWidget.jsx
│  ├─ NavBar.jsx
│  ├─ PlaceholderBox.jsx
│  ├─ ReviewCarousel.jsx
│  └─ SiteLayout.jsx
├─ data/               # Static data
│  └─ reviews.js
├─ hooks/              # Custom React hooks
│  └─ useMediaQuery.js
├─ pages/              # Route pages
│  ├─ HallOfFamePage.jsx
│  ├─ HomePage.jsx
│  ├─ HowItWorksPage.jsx
│  └─ ReviewsPage.jsx
├─ utils/              # Helper functions
│  └─ ratings.js
├─ App.jsx             # App + routes
├─ main.jsx            # Entry point
└─ index.css           # Global styles + Tailwind
```

## 🎨 Theme

The site uses a **Red Wine** palette:
- Deep burgundy/maroon backgrounds (`#1a0505`, `base-950`)
- Wine/crimson accents (`#b21f2d`, `#8f1520`)
- Gold highlights (`#d6a84a`)

All UI surfaces are **solid (no blur/transparency)** for readability on mobile.

## 📱 Mobile‑First

- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Mobile navigation drawer
- In‑app routing for mobile (no new tabs)
- Compact iPhone‑sized placeholders for screenshots

## 📄 License

MIT – feel free to fork and adapt.
