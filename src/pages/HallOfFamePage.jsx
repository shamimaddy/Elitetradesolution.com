import { motion } from 'framer-motion'
import PlaceholderBox from '../components/PlaceholderBox.jsx'
import BackToHomeButton from '../components/BackToHomeButton.jsx'
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

export default function HallOfFamePage() {
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
                Hall of Fame
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-ink-200/75">
                Certificates and milestones that reflect consistency and discipline.
              </p>
            </div>
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
      </div>
    </section>
  )
}
