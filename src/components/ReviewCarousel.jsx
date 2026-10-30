import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, User } from 'lucide-react'
import Stars from './Stars.jsx'

function wrapIndex(i, len) {
  if (len <= 0) return 0
  return ((i % len) + len) % len
}

export default function ReviewCarousel({ reviews }) {
  const items = reviews || []
  const [index, setIndex] = useState(0)

  const active = useMemo(() => items[wrapIndex(index, items.length)], [items, index])

  function prev() {
    setIndex((i) => i - 1)
  }

  function next() {
    setIndex((i) => i + 1)
  }

  return (
    <div className="card p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-black/60">
            Reviews
          </div>
          <div className="mt-2 text-xl font-extrabold text-primary-navy">
            Trusted by traders
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-card-white text-primary-navy shadow transition hover:border-action-red/40 hover:text-action-red"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-card-white text-primary-navy shadow transition hover:border-action-red/40 hover:text-action-red"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-5 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active?.id || index}
            initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/5">
                <User className="h-5 w-5 text-primary-navy" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-extrabold text-primary-navy">
                  {active?.name}
                </div>
                <div className="mt-1">
                  <Stars rating={active?.rating || 0} size={16} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm leading-relaxed text-black/70">
              {active?.text}
            </div>

            <div className="text-xs font-semibold text-black/50">
              {wrapIndex(index, items.length) + 1} / {items.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
