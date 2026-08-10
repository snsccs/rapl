export default function SectionHeader({ eyebrow, title, description, align = 'left', invert = false, max = '3xl' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const maxClass = {
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
  }[max] || 'max-w-3xl'
  return (
    <div className={`${alignClass} ${maxClass} mb-12 md:mb-14`}>
      {eyebrow && (
        <div className={`eyebrow mb-4 ${invert ? '!text-gold-300' : ''}`}>
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight ${
          invert ? 'text-white' : 'text-navy-700'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            invert ? 'text-bone-100' : 'text-ink-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
