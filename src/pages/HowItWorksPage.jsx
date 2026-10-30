import { motion } from 'framer-motion'
import BackToHomeButton from '../components/BackToHomeButton.jsx'

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

export default function HowItWorksPage() {
  return (
    <section className="bg-base-950">
      <div className="containerX py-10 sm:py-14">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-ink-200/70">
                Elite Trading
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-ink-100 sm:text-4xl">
                How It Works
              </h1>
            </div>
            <div className="mt-2 sm:mt-0">
              <BackToHomeButton />
            </div>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-ink-200/75">
            A premium, repeatable workflow built for clean execution.
          </p>
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
      </div>
    </section>
  )
}
