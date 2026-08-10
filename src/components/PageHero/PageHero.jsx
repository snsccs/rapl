import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = 'default',
}) {
  const isNavy = variant === 'navy'
  return (
    <section
      className={`relative overflow-hidden ${
        isNavy
          ? 'bg-navy-grad text-white'
          : 'bg-bone-100 text-ink-600 border-b border-ink-100'
      }`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 ${
          isNavy ? 'bg-grid opacity-[0.08]' : 'bg-grid opacity-30'
        }`}
      />
      <div className="container-rapl relative">
        <div className="py-20 md:py-28 max-w-4xl">
          {eyebrow && (
            <div
              className={`eyebrow mb-5 ${
                isNavy ? '!text-gold-300' : ''
              }`}
            >
              {eyebrow}
            </div>
          )}
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.08] tracking-tight ${
              isNavy ? 'text-white' : 'text-navy-700'
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-6 text-lg md:text-xl leading-relaxed max-w-3xl ${
                isNavy ? 'text-bone-100' : 'text-ink-500'
              }`}
            >
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className={`btn ${
                    isNavy ? 'btn-gold' : 'btn-primary'
                  } group`}
                >
                  {primaryCta.label}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className={`btn ${
                    isNavy ? 'btn-outline-light' : 'btn-outline'
                  }`}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
