import { Link } from 'react-router-dom'
import { ArrowRight, Compass, ShieldCheck, Layers, TrendingUp, AlertTriangle, Check, X } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'

const PHASES = [
  {
    label: 'Define the Work',
    acts: ['Diagnose', 'Choose', 'Translate'],
    icon: Compass,
    color: 'navy',
  },
  {
    label: 'Govern the Work',
    acts: ['Select', 'Integrate', 'Deliver'],
    icon: ShieldCheck,
    color: 'navy',
  },
  {
    label: 'Protect the Work',
    acts: ['Protect', 'Align', 'Govern'],
    icon: Layers,
    color: 'navy',
  },
  {
    label: 'Land the Value',
    acts: ['Optimize', 'Adopt', 'Sustain'],
    icon: TrendingUp,
    color: 'navy',
  },
]

const ENGAGE = [
  {
    title: 'Executive Certificate',
    desc: 'A personalized, fifty-hour executive development program built around twelve RAPL™ modules and an integrated capstone.',
    to: '/certificate',
    cta: 'Explore the Executive Certificate',
  },
  {
    title: 'For Organizations',
    desc: 'Seat profiles, capability baselines, gap heatmaps, targeted development and governance integration.',
    to: '/organizations',
    cta: 'Explore Organizational Application',
  },
  {
    title: 'Alignment Diagnostic',
    desc: 'A structured way to compare what senior roles require with what leadership and talent systems develop, assess and reward.',
    to: '/assessment',
    cta: 'Explore the Diagnostic',
  },
  {
    title: 'Research and Validation',
    desc: 'A transparent research agenda testing content validity, role demand, talent-system alignment and intervention effectiveness.',
    to: '/research',
    cta: 'Explore the Research',
  },
]

const IS_ITEMS = [
  'A single value-cycle map for strategic work — from diagnosis to sustained value.',
  'A role-demand model, recognizing different leadership seats require different depth.',
  'A capability system that can be assessed, developed, applied and refreshed over time.',
  'A translation of specialist disciplines into executive questions, judgments and actions.',
]

const IS_NOT_ITEMS = [
  'Project management training for executives.',
  'A replacement for project, program, portfolio, risk, PMO, change, business analysis, benefits or AI specialists — RAPL™ complements, not replaces, these disciplines.',
  'A claim that every role needs identical proficiency across all twelve capabilities.',
  'A claim that leadership is the only variable in transformation success.',
]

export default function Home() {
  return (
    <>
      <SEO
        title="Role-Agnostic Project Leadership"
        description="RAPL™ is an executive leadership framework built for senior leaders who must diagnose the right work, govern investment, lead adoption and sustain value across AI-enabled, project-shaped change."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-grad text-white">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.08]" />
        <div className="container-rapl relative">
          <div className="pt-16 md:pt-24 pb-20 md:pb-28 max-w-5xl">
            <div className="eyebrow !text-gold-300 mb-6">Executive Leadership Framework</div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.04] tracking-tight text-white">
              Work changed faster than{' '}
              <span className="italic text-gold-300">leadership systems.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-bone-100 leading-relaxed max-w-3xl">
              Organizations now deliver strategy through portfolios, programs, projects,
              products, transformations and AI initiatives. The work crosses functions,
              technologies, operating models and accountability boundaries.
            </p>
            <p className="mt-5 text-lg md:text-xl text-bone-100 leading-relaxed max-w-3xl">
              Leadership development, role design and succession systems often remain built
              for stable functions and operational continuity. The result is a measurable{' '}
              <span className="text-gold-300 font-medium">Leadership Capability Gap</span>{' '}
              between what strategic work requires and what leadership systems deliberately
              define, develop, assess, reward, deploy and refresh.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/framework" className="btn btn-gold group">
                Explore the RAPL™ Framework
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/assessment" className="btn btn-outline-light">
                Start the Diagnostic
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-bone-200">
              <span className="inline-flex items-center gap-1.5">
                <Check size={14} className="text-gold-400" /> Theory-grounded
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check size={14} className="text-gold-400" /> Practice-informed
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check size={14} className="text-gold-400" /> Designed to be tested
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RAPL IN ONE PAGE */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="The model at a glance"
            title="RAPL™ in one page"
            description="RAPL™ follows a strategic investment from need and intent through to responsible, sustained value in operations."
            max="3xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {PHASES.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.label}
                  className="bg-white border border-ink-100 p-6 transition-all hover:border-gold-300 hover:shadow-lift"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-sm bg-navy-700 text-gold-300 flex items-center justify-center">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[0.7rem] tracking-[0.18em] uppercase text-gold-600 font-semibold">
                      Phase
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-navy-700 font-medium mb-4">
                    {p.label}
                  </h3>
                  <ol className="flex flex-col gap-1.5">
                    {p.acts.map((a, i) => (
                      <li
                        key={a}
                        className="flex items-center gap-2 text-ink-500 text-sm"
                      >
                        <span className="text-gold-500 font-display font-medium text-xs">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )
            })}
          </div>

          <div className="mt-10">
            <Link to="/framework" className="link-arrow">
              Explore the complete RAPL™ Framework
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IT IS / IS NOT */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="eyebrow mb-4">What RAPL™ is</div>
              <ul className="flex flex-col gap-4">
                {IS_ITEMS.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-700 text-gold-300 flex items-center justify-center mt-0.5">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-ink-600 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="eyebrow mb-4 !text-ink-400">What RAPL™ is not</div>
              <ul className="flex flex-col gap-4">
                {IS_NOT_ITEMS.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bone-300 text-ink-500 flex items-center justify-center mt-0.5">
                      <X size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-ink-600 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR WAYS TO ENGAGE */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="How to engage"
            title="Four ways to engage with RAPL™"
            description="Whether you are an individual senior leader, an organization, or a researcher — there is a structured on-ramp to the framework."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ENGAGE.map((e) => (
              <Link
                key={e.title}
                to={e.to}
                className="card group block"
              >
                <h3 className="font-display text-2xl text-navy-700 font-medium mb-3">
                  {e.title}
                </h3>
                <p className="text-ink-500 leading-relaxed mb-5">{e.desc}</p>
                <span className="link-arrow text-sm">
                  {e.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCE-AWARE FRAMEWORK */}
      <section className="section bg-navy-700 text-white relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.05]" />
        <div className="container-rapl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow !text-gold-300 mb-4">Evidence position</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1]">
                An evidence-aware framework.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-bone-100 leading-relaxed">
                RAPL™ is theory-grounded, practice-informed and designed to be tested. The
                literature supports the need for the capabilities it integrates, but the
                complete RAPL™ intervention is not presented as already validated.
              </p>
              <p className="mt-5 text-lg text-bone-100 leading-relaxed">
                The framework is intended to improve through expert review, role-demand
                research, organizational pilots and workplace evidence — examined
                transparently in the Research and Validation agenda.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <Link to="/research" className="link-arrow link-arrow-light">
                  Read the evidence position
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="pill !bg-navy-600 !border-navy-500 !text-bone-100">
                  <AlertTriangle size={12} /> Not presented as already validated
                </span>
                <span className="pill !bg-navy-600 !border-navy-500 !text-bone-100">
                  Open to expert review
                </span>
                <span className="pill !bg-navy-600 !border-navy-500 !text-bone-100">
                  Designed to improve with evidence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERED THROUGH */}
      <section className="section-tight bg-bone-100 border-t border-ink-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="eyebrow mb-3">Created and delivered</div>
              <p className="text-ink-600 text-lg leading-relaxed">
                RAPL™ was created by{' '}
                <Link to="/about" className="text-navy-700 font-medium underline-offset-4 hover:underline decoration-gold-500">
                  Samia Waqar
                </Link>{' '}
                and is delivered through{' '}
                <a
                  href="https://snsccs.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-navy-700 font-medium underline-offset-4 hover:underline decoration-gold-500"
                >
                  SnS Coaching and Consulting Services
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap md:justify-end gap-3">
              <Link to="/about" className="btn btn-outline !py-2.5 !px-4 text-sm">
                About RAPL™
              </Link>
              <Link to="/certificate" className="btn btn-primary !py-2.5 !px-4 text-sm">
                Executive Certificate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        eyebrow="Next step"
        title="Explore the framework, discuss the Executive Certificate or begin an organizational diagnostic."
        description="Choose the on-ramp that matches your role, organization or research interest."
        primary={{ label: 'Explore the RAPL™ Framework', to: '/framework' }}
        secondary={{ label: 'Contact RAPL™ Leadership', to: '/contact' }}
      />
    </>
  )
}
