import { useState } from 'react'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { LEAD_FORM_COPY, LEAD_NOTIFY_EMAILS, TELEGRAM_VIP_LINK } from '../data/cta.js'

async function postLeadToEndpoint(endpoint, body) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`Lead email failed (${res.status})`)
  }

  return res.json().catch(() => ({}))
}

async function sendLeadEmail(payload) {
  const webhook = import.meta.env.VITE_LEAD_WEBHOOK
  if (webhook) {
    return postLeadToEndpoint(webhook, payload)
  }

  const body = {
    _subject: `Elite Trading VIP lead — ${payload.firstName} ${payload.lastName}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: payload.email,
    name: `${payload.firstName} ${payload.lastName}`,
    email: payload.email,
    whatsapp: payload.whatsapp,
    investmentAmount: payload.investmentAmount,
    source: payload.source,
    createdAt: payload.createdAt,
  }

  const results = await Promise.allSettled(
    LEAD_NOTIFY_EMAILS.map((address) =>
      postLeadToEndpoint(
        `https://formsubmit.co/ajax/${encodeURIComponent(address)}`,
        body,
      ),
    ),
  )

  if (!results.some((r) => r.status === 'fulfilled')) {
    throw new Error('Lead email failed for all recipients')
  }

  return results
}

const empty = {
  firstName: '',
  lastName: '',
  email: '',
  whatsapp: '',
  investmentAmount: '',
}

export default function LeadForm({
  variant = 'light',
  submitLabel = LEAD_FORM_COPY.submitLabel,
  onSuccess,
  idPrefix = 'lead',
}) {
  const [values, setValues] = useState(empty)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const isDark = variant === 'dark'
  const fieldClass = isDark
    ? 'w-full rounded-xl border border-white/15 bg-base-900 px-3.5 py-2.5 text-sm text-ink-100 outline-none transition placeholder:text-white/40 focus:border-action-red/60'
    : 'w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm text-primary-navy outline-none transition placeholder:text-black/40 focus:border-action-red/50'
  const labelClass = isDark
    ? 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/70'
    : 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-black/55'

  function update(key, value) {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (error) setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const firstName = values.firstName.trim()
    const lastName = values.lastName.trim()
    const email = values.email.trim()
    const whatsapp = values.whatsapp.trim()
    const investmentAmount = values.investmentAmount.trim()

    if (!firstName || !lastName || !email || !whatsapp || !investmentAmount) {
      setError('Please fill in all fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }

    setSubmitting(true)
    setError('')

    const payload = {
      firstName,
      lastName,
      email,
      whatsapp,
      investmentAmount,
      source: typeof window !== 'undefined' ? window.location.href : 'elite-trading',
      createdAt: new Date().toISOString(),
    }

    try {
      await sendLeadEmail(payload)

      try {
        const existing = JSON.parse(localStorage.getItem('elite_leads') || '[]')
        existing.push(payload)
        localStorage.setItem('elite_leads', JSON.stringify(existing.slice(-50)))
      } catch {
        // ignore storage errors
      }

      setDone(true)
      onSuccess?.(payload)
      window.open(TELEGRAM_VIP_LINK, '_blank', 'noopener,noreferrer')
    } catch {
      setError('Something went wrong. Try again or join via Telegram.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className={isDark ? 'rounded-2xl border border-white/10 bg-base-900 p-5' : 'rounded-2xl border border-black/10 bg-white p-5'}>
        <div className={`text-lg font-extrabold ${isDark ? 'text-ink-100' : 'text-primary-navy'}`}>
          {LEAD_FORM_COPY.successTitle}
        </div>
        <p className={`mt-2 text-sm ${isDark ? 'text-ink-200/75' : 'text-black/70'}`}>
          {LEAD_FORM_COPY.successBody}
        </p>
        <a
          className="btn-primary mt-4"
          href={TELEGRAM_VIP_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Open VIP Signal Room
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-first-name`}>
            First name
          </label>
          <input
            id={`${idPrefix}-first-name`}
            name="firstName"
            autoComplete="given-name"
            className={fieldClass}
            placeholder="First name"
            value={values.firstName}
            onChange={(e) => update('firstName', e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-last-name`}>
            Last name
          </label>
          <input
            id={`${idPrefix}-last-name`}
            name="lastName"
            autoComplete="family-name"
            className={fieldClass}
            placeholder="Last name"
            value={values.lastName}
            onChange={(e) => update('lastName', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor={`${idPrefix}-email`}>
          Email address
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          placeholder="you@email.com"
          value={values.email}
          onChange={(e) => update('email', e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor={`${idPrefix}-whatsapp`}>
          WhatsApp number
        </label>
        <input
          id={`${idPrefix}-whatsapp`}
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
          placeholder="+1 555 000 0000"
          value={values.whatsapp}
          onChange={(e) => update('whatsapp', e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor={`${idPrefix}-investment`}>
          Investment amount
        </label>
        <input
          id={`${idPrefix}-investment`}
          name="investmentAmount"
          inputMode="decimal"
          className={fieldClass}
          placeholder="e.g. $5,000"
          value={values.investmentAmount}
          onChange={(e) => update('investmentAmount', e.target.value)}
        />
      </div>

      {error ? (
        <div className="rounded-xl border border-action-red/30 bg-action-red/10 px-3 py-2 text-xs font-semibold text-action-red">
          {error}
        </div>
      ) : null}

      <button type="submit" className="btn-primary w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className={`text-center text-[11px] ${isDark ? 'text-white/45' : 'text-black/45'}`}>
        Trading involves risk. No results are guaranteed.
      </p>
    </form>
  )
}
