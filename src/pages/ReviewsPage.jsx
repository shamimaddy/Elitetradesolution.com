import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import PlaceholderBox from '../components/PlaceholderBox.jsx'
import Stars from '../components/Stars.jsx'
import BackToHomeButton from '../components/BackToHomeButton.jsx'
import { REVIEWS } from '../data/reviews.js'
import { averageRating, ratingPercent } from '../utils/ratings.js'
import { profitImages } from '../data/profitData.js'

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

export default function ReviewsPage() {
  const avg = averageRating(REVIEWS)
  const pct = ratingPercent(REVIEWS)

  return (
    <section className="bg-base-950">
      <div className="containerX py-10 sm:py-14">
        <Reveal>
          <div className="flex flex-col gap-4">
            <BackToHomeButton className="w-fit" />
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
                Elite Trading
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-ink-100 sm:text-4xl">
                Reviews
              </h1>
              <div className="mt-2 text-sm text-ink-200/75">
                Average rating: <span className="font-extrabold text-ink-100">{pct.toFixed(0)}%</span> ({avg.toFixed(1)} / 5)
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4">
          {REVIEWS.map((r, idx) => (
            <Reveal key={r.id} delay={0.03 * (idx % 6)}>
              <div className="card tilt-card relative p-5 sm:p-6">
                <div className="absolute right-4 top-4">
                  <Stars rating={r.rating} size={16} />
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-black/5">
                    <User className="h-5 w-5 text-primary-navy" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="truncate text-sm font-extrabold text-primary-navy">
                        {r.name}
                      </div>
                    </div>
                    <div className="mt-3 text-sm leading-relaxed text-black/70">
                      {r.text}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14">
            <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
              Screenshots
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-ink-100">
              User Profit Gallery
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-200/75">
              Replace these placeholders with real proof screenshots when ready.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {(profitImages || []).map((img) => (
                <motion.div
                  key={img.id}
                  className="card shimmer-border overflow-hidden shadow-cardPop"
                  whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                >
                  <div className="relative w-full">
                    {img.src ? (
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-auto max-h-[1000px] object-contain"
                      />
                    ) : (
                      <PlaceholderBox kind="phone" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
