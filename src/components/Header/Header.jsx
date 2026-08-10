import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_ITEMS = [
  {
    label: 'Framework',
    to: '/framework',
  },
  {
    label: 'Engage',
    children: [
      { label: 'Executive Certificate', to: '/certificate', desc: 'A 50-hour executive development program across twelve RAPL™ modules.' },
      { label: 'For Organizations', to: '/organizations', desc: 'Seat profiles, baselines, gap heatmaps and governance integration.' },
      { label: 'Alignment Diagnostic', to: '/assessment', desc: 'Compare what senior roles require with what leadership systems develop.' },
    ],
  },
  {
    label: 'Evidence',
    children: [
      { label: 'Research and Validation', to: '/research', desc: 'A transparent research agenda testing content, role demand and intervention.' },
      { label: 'Resources and Insights', to: '/resources', desc: 'Briefs, decision aids and applied thinking for executive leaders.' },
    ],
  },
  { label: 'About', to: '/about' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setActiveMenu(null)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-ink-100 shadow-soft'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="container-rapl">
        <div className="flex items-center justify-between h-18 md:h-20 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="RAPL — Home">
            <span className="flex items-center justify-center w-10 h-10 rounded-sm bg-navy-700 text-gold-400 font-display text-2xl font-semibold leading-none">
              R
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-lg font-semibold text-navy-700 tracking-tight">
                RAPL<sup className="text-[0.55em] align-super -ml-0.5 text-gold-500">™</sup>
              </span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400 mt-0.5">
                Role-Agnostic Leadership
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-[0.95rem] text-ink-600 hover:text-navy-700 font-medium transition-colors"
                    aria-expanded={activeMenu === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`mt-0.5 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeMenu === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-[420px]">
                      <div className="bg-white border border-ink-100 shadow-elev p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block p-3 hover:bg-bone-200 transition-colors"
                          >
                            <div className="text-navy-700 font-semibold text-[0.95rem]">
                              {c.label}
                            </div>
                            <div className="text-ink-400 text-[0.82rem] mt-0.5 leading-snug">
                              {c.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                      isActive
                        ? 'text-navy-700'
                        : 'text-ink-600 hover:text-navy-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex btn btn-primary !py-2.5 !px-5 text-sm">
              Contact
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 text-navy-700"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-ink-100 py-3 pb-5">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.label} className="py-1">
                    <div className="px-3 py-2 text-[0.75rem] tracking-wider uppercase text-ink-400 font-semibold">
                      {item.label}
                    </div>
                    <div className="flex flex-col">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="px-3 py-2.5 text-ink-600 hover:bg-bone-200"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="px-3 py-2.5 text-ink-600 hover:bg-bone-200"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link to="/contact" className="btn btn-primary mt-3 mx-3 justify-center">
                Contact RAPL™ Leadership
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
