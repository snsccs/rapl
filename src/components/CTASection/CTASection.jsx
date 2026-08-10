import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  variant = 'navy',
}) {
  if (variant === 'bone') {
    return (
      <section className="section bg-bone-200 border-t border-ink-100">
        <div className="container-rapl">
          <div className="max-w-4xl">
            {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-navy-700 leading-[1.1]">
              {title}
            </h2>
            {description && (
              <p className="mt-5 text-lg text-ink-500 max-w-3xl leading-relaxed">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {primary && (
                <Link to={primary.to} className="btn btn-primary group">
                  {primary.label}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondary && (
                <Link to={secondary.to} className="btn btn-outline">
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative bg-navy-grad text-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="container-rapl py-20 md:py-24 relative">
        <div className="max-w-4xl">
          {eyebrow && <div className="eyebrow mb-4 !text-gold-300">{eyebrow}</div>}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1]">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg text-bone-100 max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            {primary && (
              <Link to={primary.to} className="btn btn-gold group">
                {primary.label}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {secondary && (
              <Link to={secondary.to} className="btn btn-outline-light">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
