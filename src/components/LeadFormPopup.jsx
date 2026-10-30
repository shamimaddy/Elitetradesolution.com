import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Zap } from 'lucide-react'
import LeadForm from './LeadForm.jsx'
import { useLeadForm } from './LeadFormContext.jsx'
import { LEAD_FORM_COPY } from '../data/cta.js'

export default function LeadFormPopup() {
  const { open, closeLeadForm } = useLeadForm()

  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(e) {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function dismiss() {
    closeLeadForm()
  }

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center p-3 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Close overlay"
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-base-950 shadow-cardPop"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-heroRadial opacity-50" />

            <div className="relative p-5 sm:p-6">
              <button
                type="button"
                onClick={dismiss}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-base-900 text-ink-100"
                aria-label="Close form"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
                <Zap className="h-3.5 w-3.5 text-action-red" />
                {LEAD_FORM_COPY.eyebrow}
              </div>

              <h2
                id="lead-popup-title"
                className="mt-3 pr-10 text-2xl font-black tracking-tight text-ink-100"
              >
                {LEAD_FORM_COPY.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-200/75">
                {LEAD_FORM_COPY.subtitle}
              </p>

              <div className="mt-5">
                <LeadForm
                  variant="dark"
                  idPrefix="popup-lead"
                  onSuccess={dismiss}
                />
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
