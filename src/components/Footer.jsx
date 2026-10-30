import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import { scrollToTop } from '../utils/scrollToTop.js'

const DEFAULT_INSTAGRAM_LINK = 'https://www.instagram.com/elitetradingco1?igsh=YTY1amtnM2lwa3Ez'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base-950">
      <div className="containerX py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/Logo/Logo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
              <div>
                <div className="text-sm font-extrabold tracking-wide text-ink-100">
                  Elite Trading
                </div>
                <div className="text-[11px] font-semibold text-ink-200/70">
                  Signals | Education | Community
                </div>
              </div>
            </div>
            <div className="mt-3 text-sm text-ink-200/75">
              A sleek, trader-first experience built for clarity, confidence, and
              consistency.
            </div>
          </div>

          <nav className="flex flex-col gap-3 text-sm font-semibold">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-white/80 transition hover:text-white hover:text-action-red"
            >
              Home
            </Link>
            <Link
              to="/reviews"
              onClick={scrollToTop}
              className="text-white/80 transition hover:text-white hover:text-action-red"
            >
              Reviews
            </Link>
            <Link
              to="/how-it-works"
              onClick={scrollToTop}
              className="text-white/80 transition hover:text-white hover:text-action-red"
            >
              How It Works
            </Link>
            <Link
              to="/hall-of-fame"
              onClick={scrollToTop}
              className="text-white/80 transition hover:text-white hover:text-action-red"
            >
              Hall of Fame
            </Link>
          </nav>

          <div className="md:justify-self-end">
            <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
              Social
            </div>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={DEFAULT_INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-base-900 text-white/85 transition hover:bg-base-850 hover:text-action-red hover:shadow-glowCrimson"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-ink-200/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Elite Trading. All rights reserved.</div>
          <div>Trading involves risk. Past performance is not indicative of results.</div>
        </div>
      </div>
    </footer>
  )
}
