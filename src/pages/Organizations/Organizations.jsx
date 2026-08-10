import { Link } from 'react-router-dom'
import { ArrowRight, Check, Users, BarChart3, GitBranch, Building2 } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'

const SEQUENCE = [
  {
    n: '01',
    title: 'Seat profiles and role demand',
    desc: 'Define what the work actually requires from each senior seat — CEO, CIO, CHRO, CFO, COO, chief transformation officer, PMO leader and business-unit leaders — and what the consequences of weak capability look like.',
  },
  {
    n: '02',
    title: 'Capability baseline',
    desc: 'Assess current leadership capability against the twelve RAPL™ capabilities, using structured interviews, decision journals and evidence-based evaluation rather than self-report alone.',
  },
  {
    n: '03',
    title: 'Gap heatmap and prioritization',
    desc: 'Surface the gap between role demand and current capability as a visible heatmap — by seat, by phase, by capability — so that development investment is targeted where it matters most.',
  },
  {
    n: '04',
    title: 'Targeted development',
    desc: 'Build a development path for each seat and cohort, drawing on the Executive Certificate, targeted modules, executive coaching and applied work in live strategic initiatives.',
  },
  {
    n: '05',
    title: 'Governance and talent-system integration',
    desc: 'Embed RAPL™ into role design, performance standards, succession criteria, executive governance forums and investment review — so the capability is reinforced by the system, not just training.',
  },
]

const DELIVERY = [
  { icon: Users, title: 'Executive cohort programs', desc: 'Group development for senior leadership cohorts, built around the twelve RAPL™ capabilities.' },
  { icon: BarChart3, title: 'Capability baseline and heatmap', desc: 'A diagnostic engagement surfacing the gap between role demand and current leadership capability.' },
  { icon: GitBranch, title: 'Governance integration', desc: 'Embedding RAPL™ into investment review, sponsorship, performance and succession systems.' },
  { icon: Building2, title: 'Organization-wide rollout', desc: 'Multi-year capability development for entire leadership populations, with measurement against role demand.' },
]

export default function Organizations() {
  return (
    <>
      <SEO
        title="For Organizations"
        description="RAPL™ for organizations: seat profiles, capability baselines, gap heatmaps, targeted development and governance integration at scale."
      />

      <PageHero
        variant="default"
        eyebrow="For Organizations"
        title="RAPL™ at organizational scale: from individual capability to leadership system."
        subtitle="RAPL™ is most effective when it shapes role design, governance forums, performance standards and succession criteria across the leadership system — not just individual development."
        primaryCta={{ label: 'Run the Alignment Diagnostic', to: '/assessment' }}
        secondaryCta={{ label: 'See the framework', to: '/framework' }}
      />

      {/* IMPLEMENTATION SEQUENCE */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="Implementation sequence"
            title="A structured path from baseline to system integration."
            description="RAPL™ organizational engagements move through five stages — from defining what the work demands, to embedding the capability into the system that develops and rewards leaders."
          />

          <div className="space-y-4">
            {SEQUENCE.map((s) => (
              <div
                key={s.n}
                className="bg-white border border-ink-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 hover:border-gold-300 transition-colors"
              >
                <div className="md:col-span-2">
                  <div className="font-display text-5xl text-gold-500 font-medium leading-none">
                    {s.n}
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl text-navy-700 font-medium mb-2">
                    {s.title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed text-lg">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY OPTIONS */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="How we engage"
            title="Four organizational entry points."
            description="RAPL™ engagements can be commissioned as discrete diagnostic work, targeted cohort development, governance integration, or full multi-year rollouts."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DELIVERY.map((d) => {
              const Icon = d.icon
              return (
                <div key={d.title} className="bg-white p-6 border border-ink-100">
                  <div className="w-10 h-10 rounded-sm bg-navy-700 text-gold-300 flex items-center justify-center mb-4">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg text-navy-700 font-medium mb-2">
                    {d.title}
                  </h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{d.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* GOVERNANCE INTEGRATION */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">System reinforcement</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                Capability embedded into role design, succession, performance and governance is more durable than standalone training.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-ink-600 text-lg leading-relaxed">
                The proposition is straightforward: leadership capability is more likely to
                change decisions and behavior when the system that defines, develops,
                assesses, rewards and refreshes it points in the same direction.
              </p>
              <p className="text-ink-600 text-lg leading-relaxed mt-5">
                RAPL™ organizational engagements are designed to move beyond training
                alone — to influence the role profiles, governance forums, performance
                standards and succession criteria that shape what leaders actually do.
              </p>
              <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Role profiles tied to capability demand',
                  'Performance standards referencing RAPL™ capabilities',
                  'Succession criteria grounded in the framework',
                  'Investment review with capability lens',
                  'Governance forums with sponsorship discipline',
                  'Cohort development aligned with strategy',
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2 text-ink-600">
                    <Check size={16} className="text-gold-500 mt-1 flex-shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE LINK */}
      <section className="section-tight bg-bone-200 border-t border-ink-100">
        <div className="container-rapl">
          <div className="bg-white p-8 border border-ink-100 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="eyebrow mb-2">Research and validation</div>
              <p className="text-ink-600 text-lg leading-relaxed max-w-2xl">
                The RAPL™ research agenda explicitly tests whether capability embedded
                into role design and governance is more durable than standalone
                training. Read proposition P5 in the research page.
              </p>
            </div>
            <Link to="/research" className="btn btn-outline group">
              Read the evidence position
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Begin an engagement"
        title="Run the diagnostic, scope a cohort, or start a multi-year rollout."
        description="Engagements are scoped against the strategic work, the seats involved, and the system we need to influence."
        primary={{ label: 'Start the Alignment Diagnostic', to: '/assessment' }}
        secondary={{ label: 'Contact RAPL™ Leadership', to: '/contact?interest=organizations' }}
      />
    </>
  )
}
