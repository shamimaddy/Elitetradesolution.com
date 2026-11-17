import { Link } from 'react-router-dom'
import { Instagram, Send } from 'lucide-react'
import { scrollToTop } from '../utils/scrollToTop.js'
import { LEGAL } from '../data/legal.js'

const DEFAULT_INSTAGRAM_LINK = 'https://www.instagram.com/elitetradingco1?igsh=YTY1amtnM2lwa3Ez'

const linkClass =
  'text-white/80 transition hover:text-white hover:text-action-red'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base-950">
      <div className="containerX py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/Logo/Logo.png" alt="Logo" className="h-10 w-auto" />
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
              A sleek, trader-first experience built for clarity, confidence, and consistency.
            </div>
          </div>

          <nav className="flex flex-col gap-3 text-sm font-semibold">
            <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
              Explore
            </div>
            <Link to="/" onClick={scrollToTop} className={linkClass}>
              Home
            </Link>
            <Link to="/reviews" onClick={scrollToTop} className={linkClass}>
              Reviews
            </Link>
            <Link to="/how-it-works" onClick={scrollToTop} className={linkClass}>
              How It Works
            </Link>
            <Link to="/hall-of-fame" onClick={scrollToTop} className={linkClass}>
              Hall of Fame
            </Link>
          </nav>

          <nav className="flex flex-col gap-3 text-sm font-semibold">
            <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
              Legal
            </div>
            <Link to="/privacy-policy" onClick={scrollToTop} className={linkClass}>
              Privacy Policy
            </Link>
            <Link to="/disclosures" onClick={scrollToTop} className={linkClass}>
              Risk Disclosure
            </Link>
          </nav>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
              Support
            </div>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={LEGAL.supportTelegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-base-900 text-white/85 transition hover:bg-base-850 hover:text-action-red hover:shadow-glowCrimson"
                aria-label="Telegram Support"
              >
                <Send className="h-5 w-5" />
              </a>
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
            <a
              href={LEGAL.supportTelegram}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-action-red hover:underline"
            >
              Telegram Support
            </a>
          </div>
        </div>

        <div className="mt-10 space-y-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-ink-200/60">
          <p>
            Trading involves substantial risk, including possible loss of principal. Past performance
            does not guarantee future results. Not an offer or solicitation where prohibited. See our{' '}
            <Link to="/disclosures" onClick={scrollToTop} className="text-action-red hover:underline">
              Risk Disclosure
            </Link>
            .
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              © {new Date().getFullYear()} {LEGAL.companyName} · {LEGAL.address} ·{' '}
              {LEGAL.regulatoryStatusShort}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
