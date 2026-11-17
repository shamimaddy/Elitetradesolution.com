import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BackToHomeButton from './BackToHomeButton.jsx'
import { LEGAL } from '../data/legal.js'

export function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-ink-100 sm:text-2xl">
        {title}
      </h2>
      <div className="legal-prose mt-4 space-y-3 text-sm leading-relaxed text-ink-200/80 sm:text-[15px] sm:leading-[1.65]">
        {children}
      </div>
    </section>
  )
}

export function LegalH3({ children }) {
  return <h3 className="mt-6 text-base font-extrabold text-ink-100">{children}</h3>
}

export function LegalCallout({ children }) {
  return (
    <div className="mt-6 rounded-2xl border border-amber-400/40 border-l-4 border-l-amber-400 bg-amber-400/10 px-4 py-4 text-sm leading-relaxed text-ink-100 sm:px-5">
      {children}
    </div>
  )
}

export function LegalTable({ children }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-xs sm:text-sm">
        {children}
      </table>
    </div>
  )
}

export default function LegalDoc({
  title,
  description,
  canonicalPath,
  jsonLdName,
  effectiveLabel,
  children,
}) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = `${title} | Elite Trading`

    const ensureMeta = (attr, key, content) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
      return el
    }

    ensureMeta('name', 'description', description)
    ensureMeta('name', 'robots', 'index, follow')
    ensureMeta('property', 'og:title', `${title} | Elite Trading`)
    ensureMeta('property', 'og:url', `https://elitetradingsolution.com${canonicalPath}`)
    ensureMeta('property', 'og:type', 'website')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://elitetradingsolution.com${canonicalPath}`)

    const scriptId = 'legal-jsonld'
    let script = document.getElementById(scriptId)
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: jsonLdName,
      url: `https://elitetradingsolution.com${canonicalPath}`,
      publisher: {
        '@type': 'FinancialService',
        name: LEGAL.companyName,
        url: 'https://elitetradingsolution.com',
        telephone: LEGAL.phoneE164,
        address: {
          '@type': 'PostalAddress',
          streetAddress: LEGAL.addressLines.street,
          addressLocality: LEGAL.addressLines.city,
          addressRegion: LEGAL.addressLines.state,
          postalCode: LEGAL.addressLines.postcode,
          addressCountry: LEGAL.addressLines.country,
        },
      },
    })

    return () => {
      document.title = prevTitle
      script?.remove()
    }
  }, [title, description, canonicalPath, jsonLdName])

  return (
    <section className="bg-base-950">
      <div className="containerX py-10 sm:py-14">
        <div className="mx-auto max-w-[860px]">
          <BackToHomeButton className="w-fit" />
          <h1 className="mt-6 text-3xl font-black tracking-tight text-ink-100 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-ink-200/70">{effectiveLabel}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  )
}

export function LegalCrossLink({ to, label }) {
  return (
    <p className="mt-12 border-t border-white/10 pt-6 text-sm text-ink-200/75">
      See also our{' '}
      <Link to={to} className="font-semibold text-action-red hover:underline">
        {label}
      </Link>
      .
    </p>
  )
}
