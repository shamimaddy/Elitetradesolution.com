import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Play,
  Handshake,
  BookOpen,
  Trophy,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PlaceholderBox from '../components/PlaceholderBox.jsx'
import ReviewCarousel from '../components/ReviewCarousel.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { useLeadForm } from '../components/LeadFormContext.jsx'
import { REVIEWS } from '../data/reviews.js'
import { HOME_BOTTOM_CTA } from '../data/cta.js'
import { averageRating, ratingPercent } from '../utils/ratings.js'
import useMediaQuery from '../hooks/useMediaQuery.js'
import { scrollToTop } from '../utils/scrollToTop.js'
import { hallOfFameImages } from '../data/hallOfFameImages.js'

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const avg = averageRating(REVIEWS)
  const pct = ratingPercent(REVIEWS)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const { openLeadForm } = useLeadForm()

  return (
    <div>
      <section className="bg-base-950 py-14 sm:py-18">
        <div className="containerX">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                src="/Logo/wall-logo.png"
                alt="Elite Trading"
                className="-mt-10 mb-6 w-auto max-w-[200px]"
              />
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
                <Zap className="h-4 w-4 text-action-red" />
                High-precision trading information
              </div>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-ink-100 sm:text-5xl">
                Trade with an <span className="text-action-red">Elite</span> edge.
                <br />
                Build confidence. Execute clean.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-200/80">
                Elite Trading delivers a premium, trader-first experience: clear
                processes, pro-level execution frameworks, and a community designed
                for serious growth.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="button" className="btn-primary" onClick={openLeadForm}>
                  Join Our VIP Signal Room
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <a className="btn-secondary" href="#how-it-works" onClick={scrollToTop}>
                  How it works
                </a>
              </div>
            </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-1">
              <div className="card tilt-card p-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-action-red" />
                  <div className="text-sm font-bold text-primary-navy">Trust-first</div>
                </div>
                <div className="mt-1 text-xs text-black/70">
                  Clean structure and consistent delivery.
                </div>
              </div>
              <div className="card tilt-card p-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-action-red" />
                  <div className="text-sm font-bold text-primary-navy">Execution</div>
                </div>
                <div className="mt-1 text-xs text-black/70">
                  Process-driven trades over noise.
                </div>
              </div>
              <div className="card tilt-card p-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-action-red" />
                  <div className="text-sm font-bold text-primary-navy">Speed</div>
                </div>
                <div className="mt-1 text-xs text-black/70">
                  Quick clarity, decisive action.
                </div>
              </div>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-base-950 pb-14 sm:pb-18">
        <div className="containerX">
          {isMobile ? (
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link to="/how-it-works" className="card tilt-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-action-red/20 shadow-glowCrimson">
                      <BookOpen className="h-5 w-5 text-action-red" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-primary-navy">
                        How It Works
                      </div>
                      <div className="mt-1 text-xs text-black/70">
                        Open the full 4-step process page.
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Reveal>
          ) : (
            <>
              <Reveal>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
                      Process
                    </div>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-ink-100 sm:text-3xl">
                      How it works
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-ink-200/75">
                      A clean, repeatable workflow that helps you spot opportunity,
                      manage risk, and execute like a pro.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {['Setup', 'Confirmation', 'Execution', 'Review'].map((title, idx) => (
                  <Reveal key={title} delay={0.05 * idx}>
                    <div className="grid gap-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
                          Step {idx + 1}
                        </div>
                        <div className="mt-2 text-lg font-extrabold text-ink-100">{title}</div>
                      </div>

                      <motion.div
                        className="card shimmer-border overflow-hidden shadow-cardPop"
                        whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
                        transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                      >
                        <div className="relative w-full">
                          <img
                            src={`/how-it-work/hot-${idx + 1}.PNG`}
                            alt={`Step ${idx + 1}`}
                            loading="lazy"
                            className="w-full h-auto max-h-[1000px] object-contain"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section id="trade-live" className="containerX pb-14 sm:pb-18">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
                Live sessions
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-ink-100 sm:text-3xl">
                Trade Live With Us
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-200/75">
                Follow real-time breakdowns, execution notes, and structured
                market commentary in a clean, trader-first format. We focus on
                discipline, high-quality setups, and risk-aware decision making.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="button" className="btn-primary" onClick={openLeadForm}>
                  See More
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <div className="text-xs font-semibold text-ink-200/60">
                  Live updates, clean entries, structured risk.
                </div>
              </div>
            </div>

            <motion.div
              className="card shimmer-border overflow-hidden p-3"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 240, damping: 20 }}
            >
              <div className="relative aspect-video w-full rounded-2xl border border-white/10 bg-base-900/60">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-extrabold text-ink-100 backdrop-blur">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-action-red/20">
                      <Play className="h-5 w-5 text-white" />
                    </span>
                    Video Placeholder
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </section>

      <section id="hall-of-fame" className="bg-base-950 pb-14 sm:pb-18">
        <div className="containerX">
          {isMobile ? (
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link to="/hall-of-fame" className="card tilt-card p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-action-red/15 shadow-glowCrimson">
                    <Trophy className="h-5 w-5 text-action-red" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-primary-navy">
                      Hall of Fame
                    </div>
                    <div className="mt-1 text-xs text-black/70">
                      Open the full certificate gallery.
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Reveal>
          ) : (
          <>
            <Reveal>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
                  Elite funded trader
                </div>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-ink-100 sm:text-3xl">
                  Hall of Fame
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-ink-200/75">
                  Certificates and milestones that reflect a consistent process.
                  Replace these with your real certificates.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {hallOfFameImages.map((cert) => (
                <Reveal key={cert.id} delay={0.03 * (cert.id % 6)}>
                  <motion.div
                    className="card shimmer-border overflow-hidden shadow-cardPop"
                    whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                  >
                    <div className="relative w-full">
                      {cert.src ? (
                        <img
                          src={cert.src}
                          alt={cert.alt}
                          className="w-full h-auto max-h-[500px] object-contain"
                        />
                      ) : (
                        <PlaceholderBox kind="certificate" />
                      )}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </>
          )}
        </div>
      </section>

      <section id="affiliate" className="bg-base-950 pb-14 sm:pb-18">
        <div className="containerX">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
                Affiliate Program
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-ink-100 sm:text-3xl">
                Earn with Elite Trading
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-200/75">
                Recommend Elite Trading to serious traders and earn commissions.
                We keep it transparent and performance-focused: clear tracking,
                clean messaging, and a premium product that converts.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="card tilt-card p-4">
                  <div className="flex items-center gap-2">
                    <Handshake className="h-4 w-4 text-action-red" />
                    <div className="text-sm font-extrabold text-primary-navy">Simple referral</div>
                  </div>
                  <div className="mt-1 text-xs text-black/70">
                    Share your link and get credited automatically.
                  </div>
                </div>
                <div className="card tilt-card p-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-action-red" />
                    <div className="text-sm font-extrabold text-primary-navy">Trusted offer</div>
                  </div>
                  <div className="mt-1 text-xs text-black/70">
                    Premium product + real community trust.
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="button" className="btn-primary" onClick={openLeadForm}>
                  Get Affiliate Details
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <div className="text-xs font-semibold text-ink-200/60">
                  Contact us on Telegram to activate your referral.
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <Reveal delay={0.08}>
                <div className="card shimmer-border p-6">
                  <div className="text-sm font-extrabold text-primary-navy">
                    Social proof
                  </div>
                  <div className="mt-2 text-sm text-black/70">
                    Average rating: <span className="font-extrabold text-primary-navy">{pct.toFixed(0)}%</span> ({avg.toFixed(1)} / 5)
                  </div>
                  <div className="mt-4">
                    <ReviewCarousel reviews={REVIEWS} />
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link to="/reviews" className="btn-secondary">
                      See More Reviews
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <div className="text-xs font-semibold text-black/60">
                      Opens full reviews in the same tab.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="join-vip" className="relative overflow-hidden border-t border-white/10 bg-base-950 py-14 sm:py-18">
        <div className="pointer-events-none absolute inset-0 bg-heroRadial opacity-60" />
        <div className="containerX relative">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
                  <Zap className="h-3.5 w-3.5 text-action-red" />
                  {HOME_BOTTOM_CTA.eyebrow}
                </div>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-ink-100 sm:text-4xl">
                  {HOME_BOTTOM_CTA.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-200/75">
                  {HOME_BOTTOM_CTA.subtitle}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: ShieldCheck, label: 'Risk-aware setups' },
                    { icon: TrendingUp, label: 'Process over hype' },
                    { icon: Zap, label: 'Fast VIP access' },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-base-900/70 px-3 py-3 text-xs font-semibold text-ink-100"
                    >
                      <Icon className="mb-2 h-4 w-4 text-action-red" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-base-900/80 p-5 sm:p-6 shadow-cardPop">
                <div className="text-sm font-extrabold text-ink-100">
                  Get VIP access now
                </div>
                <p className="mt-1 text-xs text-ink-200/70">
                  Submit the form and jump straight into the Signal Room.
                </p>
                <div className="mt-4">
                  <LeadForm variant="dark" idPrefix="home-bottom-lead" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
