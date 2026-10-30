import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import FloatingTelegramWidget from './FloatingTelegramWidget.jsx'
import LeadFormPopup from './LeadFormPopup.jsx'
import { LeadFormProvider } from './LeadFormContext.jsx'

const paymentIcons = [
  'visa.png',
  'card.png',
  'apple-pay.png',
  'google-pay.png',
  'skrill.png',
  'bitcoin.png',
  'ethereum.png',
  'litecoin.png',
  'usd-coin.png',
  'usdt.png',
]

export default function SiteLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <LeadFormProvider>
      <div className="min-h-screen bg-base-950">
        <div className="pointer-events-none fixed inset-0 bg-heroRadial opacity-40" />
        <div className="relative">
          <NavBar />
          <main>
            <Outlet />
          </main>

          <section className="border-t border-white/10">
            <div className="containerX py-10">
              <div className="text-center text-xs font-bold uppercase tracking-widest text-white/60">
                Secure Payments & Instant Withdrawals Supported
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                {paymentIcons.map((file) => (
                  <div
                    key={file}
                    className="flex h-16 w-24 items-center justify-center rounded-xl bg-[#2D2D2D] p-4 transition-transform hover:scale-110"
                  >
                    <img
                      src={`/payments/${file}`}
                      alt={file.replace(/\.(png|jpg|jpeg|svg)$/i, '')}
                      className="max-h-10 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
          <FloatingTelegramWidget />
          <LeadFormPopup />
        </div>
      </div>
    </LeadFormProvider>
  )
}
