import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLeadForm } from './LeadFormContext.jsx'

function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { openLeadForm } = useLeadForm()

  function handleOpenLeadForm() {
    setOpen(false)
    openLeadForm()
  }

  const navItems = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/how-it-works', label: 'How It Works' },
      { to: '/hall-of-fame', label: 'Hall of Fame' },
      { to: '/reviews', label: 'Reviews' },
    ],
    [],
  )

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base-950">
      <div className="containerX flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Logo/Logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-wide text-ink-100">
              Elite Trading
            </div>
            <div className="text-[11px] font-semibold text-ink-200/70">
              Signals | Education | Community
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cx(
                  'nav-link',
                  isActive ? 'text-action-red' : 'text-white/85',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button type="button" className="btn-primary" onClick={handleOpenLeadForm}>
            Join Our VIP Signal Room
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-base-900 text-ink-100 md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-base-950">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <img
                  src="/Logo/Logo.png"
                  alt="Logo"
                  className="h-8 w-auto"
                />
                <div className="text-sm font-extrabold tracking-wide text-white">
                  Elite Trading
                </div>
              </div>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-base-900"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-4 pb-6 pt-2">
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cx(
                        'rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-base-850',
                        isActive
                          ? 'text-action-red shadow-glowCrimson'
                          : 'text-white/85',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  className="btn-primary w-full"
                  onClick={handleOpenLeadForm}
                >
                  Join Our VIP Signal Room
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
