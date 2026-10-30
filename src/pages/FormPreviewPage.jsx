import { Zap, X } from 'lucide-react'
import LeadForm from '../components/LeadForm.jsx'
import { LEAD_FORM_COPY } from '../data/cta.js'

export default function FormPreviewPage() {
  return (
    <div className="min-h-screen bg-base-950">
      <div className="pointer-events-none fixed inset-0 bg-heroRadial opacity-50" />

      <div className="relative containerX py-10 sm:py-14">
        <div className="mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
            Form preview · site design
          </div>
          <h1 className="mt-2 text-2xl font-black tracking-tight text-ink-100">
            Ad CTA lead form
          </h1>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Popup style */}
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-200/70">
              1 · Form popup
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-base-950 shadow-cardPop">
              <div className="pointer-events-none absolute inset-0 bg-heroRadial opacity-50" />
              <div className="relative p-5 sm:p-6">
                <button
                  type="button"
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-base-900 text-ink-100"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
                  <Zap className="h-3.5 w-3.5 text-action-red" />
                  {LEAD_FORM_COPY.eyebrow}
                </div>

                <h2 className="mt-3 pr-10 text-2xl font-black tracking-tight text-ink-100">
                  {LEAD_FORM_COPY.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-200/75">
                  {LEAD_FORM_COPY.subtitle}
                </p>

                <div className="mt-5">
                  <LeadForm variant="dark" idPrefix="preview-popup" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA card style */}
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-200/70">
              2 · Home page bottom CTA
            </div>
            <div className="rounded-3xl border border-white/10 bg-base-900/80 p-5 sm:p-6 shadow-cardPop">
              <div className="text-sm font-extrabold text-ink-100">
                Get VIP access now
              </div>
              <p className="mt-1 text-xs text-ink-200/70">
                Submit the form and jump straight into the Signal Room.
              </p>
              <div className="mt-4">
                <LeadForm variant="dark" idPrefix="preview-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
