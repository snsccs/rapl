import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock, Users, Award, BookOpen } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'

const MODULES = [
  { phase: 'Define', name: 'Diagnose the Work', hours: 4 },
  { phase: 'Define', name: 'Choose the Work', hours: 4 },
  { phase: 'Define', name: 'Translate the Work', hours: 4 },
  { phase: 'Govern', name: 'Select the Shape', hours: 4 },
  { phase: 'Govern', name: 'Integrate the System', hours: 4 },
  { phase: 'Govern', name: 'Sponsor Delivery', hours: 4 },
  { phase: 'Protect', name: 'Protect Value and Risk', hours: 4 },
  { phase: 'Protect', name: 'Align Stakeholders', hours: 4 },
  { phase: 'Protect', name: 'Govern Investment', hours: 4 },
  { phase: 'Land', name: 'Optimize in Flight', hours: 4 },
  { phase: 'Land', name: 'Drive Adoption', hours: 4 },
  { phase: 'Land', name: 'Sustain Benefits', hours: 4 },
]

const WHO = [
  'CEOs, COOs and business-unit leaders accountable for strategic outcomes.',
  'CIOs, CHROs, CFOs and chief transformation officers who sponsor, govern or enable strategic work.',
  'PMO, delivery and execution-office leaders bridging strategy and operations.',
  'Senior leaders in functions that shape, enable or depend on AI and transformation initiatives.',
]

const WHAT_YOU_GAIN = [
  'A personal baseline across all twelve RAPL™ capabilities, measured against the demands of your seat.',
  'A structured development path through the four phases — Define, Govern, Protect, Land.',
  'Decision frameworks, briefs and tools you can apply in your live work during the program.',
  'An integrated capstone that turns learning into a personal leadership intervention for a real strategic challenge.',
  'A peer cohort of senior leaders confronting the same kind of work — and a network that continues afterward.',
]

const FORMAT = [
  { label: 'Hours', value: '50', note: 'Total executive development hours' },
  { label: 'Modules', value: '12', note: 'Mapped to the twelve RAPL™ capabilities' },
  { label: 'Cohort', value: '12–18', note: 'Senior leaders per cohort' },
  { label: 'Capstone', value: 'Live', note: 'Real strategic work, not a simulation' },
]

export default function Certificate() {
  return (
    <>
      <SEO
        title="Executive Certificate"
        description="A personalized, fifty-hour executive development program built around twelve RAPL™ modules and an integrated capstone."
      />

      <PageHero
        variant="navy"
        eyebrow="Executive Certificate"
        title="Develop the executive judgment leaders need above, across and beyond delivery."
        subtitle="A personalized, fifty-hour executive development program built around twelve RAPL™ modules and an integrated capstone."
        primaryCta={{ label: 'Apply for the next cohort', to: '/contact?interest=certificate' }}
        secondaryCta={{ label: 'Explore the framework', to: '/framework' }}
      />

      {/* WHO IT'S FOR */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Who it's for</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                Senior leaders accountable for strategic work they don't personally deliver.
              </h2>
              <p className="mt-5 text-ink-500 text-lg leading-relaxed">
                RAPL™ is not project management training for executives. It develops the
                executive judgment, governance capability, integration skill, sponsorship
                discipline and value leadership senior leaders need.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="flex flex-col gap-4">
                {WHO.map((w) => (
                  <li key={w} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-700 text-gold-300 flex items-center justify-center mt-0.5">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-ink-600 text-lg leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM STATS */}
      <section className="section-tight bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FORMAT.map((f) => (
              <div key={f.label}>
                <div className="font-display text-5xl text-navy-700 font-medium leading-none">
                  {f.value}
                </div>
                <div className="text-gold-600 text-xs tracking-[0.18em] uppercase font-semibold mt-3">
                  {f.label}
                </div>
                <div className="text-ink-500 text-sm mt-2 leading-snug">{f.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWELVE MODULES */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="Curriculum"
            title="Twelve modules. Four phases. One integrated program."
            description="The certificate moves through the same value cycle RAPL™ describes — from diagnosing the right work, through governing and protecting it, to landing the value in operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((m, i) => (
              <div
                key={m.name}
                className="bg-white border border-ink-100 p-5 hover:border-gold-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gold-500 font-display text-sm font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="pill !text-[0.65rem] !py-1 !px-2">
                    {m.phase}
                  </span>
                </div>
                <h3 className="font-display text-lg text-navy-700 font-medium leading-snug">
                  {m.name}
                </h3>
                <div className="text-ink-400 text-xs mt-3 flex items-center gap-1">
                  <Clock size={12} /> {m.hours} hours
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GAIN */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="Outcomes"
            title="What you leave with."
            description="Not a certificate of attendance — a structured personal development intervention."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHAT_YOU_GAIN.map((w, i) => (
              <div key={w} className="flex gap-4 bg-white p-5 border border-ink-100">
                <div className="font-display text-2xl text-gold-500 font-medium">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-ink-600 leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-7 border border-ink-100">
              <div className="w-11 h-11 rounded-sm bg-navy-700 text-gold-300 flex items-center justify-center mb-4">
                <BookOpen size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-navy-700 font-medium mb-2">
                1 · Baseline
              </h3>
              <p className="text-ink-500 leading-relaxed text-sm">
                A capability baseline and seat-demand assessment at the start, mapped to
                the twelve RAPL™ capabilities and the consequences of weak performance in
                your role.
              </p>
            </div>
            <div className="bg-white p-7 border border-ink-100">
              <div className="w-11 h-11 rounded-sm bg-navy-700 text-gold-300 flex items-center justify-center mb-4">
                <Users size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-navy-700 font-medium mb-2">
                2 · Cohort work
              </h3>
              <p className="text-ink-500 leading-relaxed text-sm">
                A 12–18 person cohort of senior leaders working through the four phases,
                with case material drawn from real strategic, AI and transformation work.
              </p>
            </div>
            <div className="bg-white p-7 border border-ink-100">
              <div className="w-11 h-11 rounded-sm bg-navy-700 text-gold-300 flex items-center justify-center mb-4">
                <Award size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-navy-700 font-medium mb-2">
                3 · Capstone
              </h3>
              <p className="text-ink-500 leading-relaxed text-sm">
                A personal leadership intervention on a live strategic challenge — assessed
                against the RAPL™ capabilities, peer-reviewed, and applied in your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="section-tight bg-bone-200 border-t border-ink-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow mb-3">Delivered by</div>
              <h2 className="font-display text-3xl font-medium text-navy-700 leading-[1.1]">
                A program from SnS Coaching and Consulting Services.
              </h2>
              <p className="mt-4 text-ink-500 text-lg leading-relaxed">
                The Executive Certificate is delivered through{' '}
                <a
                  href="https://snsccs.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-navy-700 font-medium underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700"
                >
                  SnS Coaching and Consulting Services
                </a>
                , and built around the same RAPL™ Leadership Framework published on this
                site.
              </p>
            </div>
            <div className="bg-white p-7 border border-ink-100">
              <div className="eyebrow mb-3">What this program is not</div>
              <ul className="space-y-3 text-ink-500">
                <li className="flex gap-2">
                  <span className="text-ink-300">×</span>
                  Project management training for executives.
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-300">×</span>
                  A replacement for PMO, change or delivery specialists.
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-300">×</span>
                  A generalist leadership program that ignores the work.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next cohort"
        title="Apply for the next Executive Certificate cohort."
        description="Spaces are limited to preserve cohort depth. The next cohort opens enrollment quarterly."
        primary={{ label: 'Apply or request a brief', to: '/contact?interest=certificate' }}
        secondary={{ label: 'See the framework first', to: '/framework' }}
      />
    </>
  )
}
