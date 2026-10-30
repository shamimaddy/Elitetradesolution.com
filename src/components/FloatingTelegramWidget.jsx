import { Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLeadForm } from './LeadFormContext.jsx'

export default function FloatingTelegramWidget() {
  const { openLeadForm } = useLeadForm()

  return (
    <motion.button
      type="button"
      onClick={openLeadForm}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-base-900 px-4 py-3 text-sm font-extrabold text-ink-100 shadow-glowCrimson"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Open VIP form"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-action-red/20">
        <Send className="h-5 w-5 text-white" />
      </span>
      <span className="hidden sm:inline">Telegram VIP</span>
      <span className="sm:hidden">VIP</span>
    </motion.button>
  )
}
