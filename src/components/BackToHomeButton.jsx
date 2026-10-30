import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { scrollToTop } from '../utils/scrollToTop.js'

export default function BackToHomeButton({ className = '' }) {
  return (
    <Link
      to="/"
      onClick={scrollToTop}
      className={
        'inline-flex items-center gap-2 rounded-xl border border-white/10 bg-base-900 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-base-850 hover:text-action-red hover:shadow-glowCrimson ' +
        className
      }
      aria-label="Back to Home"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Home
    </Link>
  )
}
