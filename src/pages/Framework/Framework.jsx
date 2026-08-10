import { Link } from 'react-router-dom'
import { ArrowRight, Compass, ShieldCheck, Layers, TrendingUp, ExternalLink } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'

const PHASES = [
  {
    label: 'Define the Work',
    desc: 'Diagnose what is really required before anything is committed.',
    icon: Compass,
    capabilities: [
      { name: 'Diagnose', desc: 'Frame the business need, the operating context, and the work required before committing investment.' },
      { name: 'Choose', desc: 'Make strategic, evidence-informed choices between competing options, with explicit reasoning.' },
      { name: 'Translate', desc: 'Convert strategic intent into briefs, mandates, and language that delivery and the business can act on.' },
    ],
  },
  {
    label: 'Govern the Work',
    desc: 'Hold the work, the people and the system together through delivery.',
    icon: ShieldCheck,
    capabilities: [
      { name: 'Select', desc: 'Determine the right delivery shape — portfolio, program, project, product or hybrid — for the work at hand.' },
      { name: 'Integrate', desc: 'Coordinate across functions, vendors, governance bodies and operating models so the whole system works.' },
      { name: 'Deliver', desc: 'Sponsor major milestones, unblock dependencies and protect the conditions delivery needs.' },
    ],
  },
  {
    label: 'Protect the Work',
    desc: 'Keep value, risk and accountability visible from intent to operation.',
    icon: Layers,
    capabilities: [
      { name: 'Protect', desc: 'Hold risk, security, ethics and AI exposure as visible executive concerns, not delivery-team tasks.' },
      { name: 'Align', desc: 'Keep stakeholders, governance and operating model aligned as the work evolves.' },
      { name: 'Govern', desc: 'Maintain clear decision rights, investment discipline and accountability through change.' },
    ],
  },
  {
    label: 'Land the Value',
    desc: 'Make the result stick — in adoption, in operations, in sustained value.',
    icon: TrendingUp,
    capabilities: [
      { name: 'Optimize', desc: 'Adjust the work in flight, with the business case and value thesis always visible.' },
      { name: 'Adopt', desc: 'Drive adoption through change, capability, communication and sponsorship — not just deployment.' },
      { name: 'Sustain', desc: 'Transition outcomes into the operating model and protect benefits realization over time.' },
    ],
  },
]

const VIEWS = [
  {
    title: 'Value cycle',
    desc: 'Define the Work, Govern the Work, Protect the Work and Land the Value.',
  },
  {
    title: 'Capability set',
    desc: 'Twelve leadership acts and the established practice domains they draw upon.',
  },
  {
    title: 'Role-demand model',
    desc: 'The depth required varies by seat, context and consequence.',
  },
  {
    title: 'Capability-management system',
    desc: 'Capability is assessed, developed, applied, evidenced and refreshed.',
  },
]

const SEATS = [
  'CEO', 'CIO', 'CHRO', 'CFO', 'COO',
  'Chief Transformation Officer', 'PMO Leader', 'Business-Unit Leader',
]

export default function Framework() {
  return (
    <>
      <SEO
        title="RAPL™ Framework"
        description="Role-Agnostic Project Leadership is a leadership capability framework designed to help organizations examine and address the gap between what strategic work requires and what leadership systems deliberately build."
      />

      <PageHero
        variant="default"
        eyebrow="RAPL™ Leadership Framework"
        title="A leadership capability framework for the work leaders are already expected to govern."
        subtitle={
          <>
            Role-Agnostic Project Leadership<sup>™</sup> is a leadership capability framework designed to help
            organizations examine and address the gap between what strategic work requires
            and what leadership systems deliberately build. The model follows the full
            value path from business need and strategic choice through governance,
            delivery, risk, adoption and sustained operational value —{' '}
            <Link to="/" className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700">
              the same Leadership Capability Gap introduced on the RAPL™ home page
            </Link>
            .
          </>
        }
        primaryCta={{ label: 'Explore the Executive Certificate', to: '/certificate' }}
        secondaryCta={{ label: 'Start the Diagnostic', to: '/assessment' }}
      />

      {/* WHAT ROLE-AGNOSTIC MEANS */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">What role-agnostic means</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                The capability follows the work, not the job title.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-ink-600 text-lg leading-relaxed">
              <p>
                Role-agnostic means the capability follows the work, not the job title. Any
                leader who sponsors, governs, prioritizes, shapes, enables or depends on
                strategic initiatives may require RAPL™ capability.
              </p>
              <p>
                It does not mean every role requires the same depth. A CEO, CIO, CHRO, CFO,
                COO, chief transformation officer, PMO leader and business-unit leader
                should each be assessed against the demands of the seat and the
                consequences of weak performance — a comparison made explicit through the{' '}
                <Link to="/assessment" className="text-navy-700 font-medium underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700">
                  Leadership Capability Alignment Diagnostic
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {SEATS.map((s) => (
                  <span key={s} className="pill pill-navy">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE PROJECT LEADERSHIP, NOT PRACTITIONER SUBSTITUTION */}
      <section className="section-tight bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <div className="max-w-4xl">
            <div className="eyebrow mb-4">A clear distinction</div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1] mb-6">
              Executive project leadership, not practitioner substitution.
            </h2>
            <p className="text-ink-600 text-lg leading-relaxed">
              RAPL™ does not ask senior leaders to build schedules, maintain backlogs,
              manage RAID logs or perform the specialist work of delivery teams. It asks
              them to know what questions the evidence should answer, when information is
              insufficient, when risk is being normalized, when a dependency needs
              executive action, when a business case has weakened and when work should
              stop.
            </p>
            <p className="text-ink-600 text-lg leading-relaxed mt-5">
              This distinction — between leading the work and performing it — is what the
              twelve capabilities below are built to develop.
            </p>
          </div>
        </div>
      </section>

      {/* THE TWELVE CAPABILITIES */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="The full model"
            title="Four phases. Twelve capabilities. One value cycle."
            description="Each phase groups three leadership acts. The same capability can be exercised in different phases and at different depths depending on the seat and the work."
            max="4xl"
          />

          <div className="space-y-8">
            {PHASES.map((p, idx) => {
              const Icon = p.icon
              return (
                <div
                  key={p.label}
                  className="bg-white border border-ink-100 overflow-hidden"
                >
                  <div className="bg-navy-700 text-white px-6 md:px-8 py-6 flex items-center gap-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-navy-600 text-gold-300">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[0.7rem] tracking-[0.18em] uppercase text-gold-300 font-semibold">
                        Phase {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl text-white font-medium mt-1">
                        {p.label}
                      </h3>
                    </div>
                    <p className="hidden md:block text-bone-200 text-sm max-w-md text-right">
                      {p.desc}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink-100">
                    {p.capabilities.map((c, i) => (
                      <div key={c.name} className="p-6 md:p-7">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-gold-500 font-display font-medium text-sm">
                            {String(idx * 3 + i + 1).padStart(2, '0')}
                          </span>
                          <h4 className="font-display text-xl text-navy-700 font-medium">
                            {c.name}
                          </h4>
                        </div>
                        <p className="text-ink-500 leading-relaxed text-[0.95rem]">
                          {c.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOUR VIEWS */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="How to read the model"
            title="Four views of one model."
            description="RAPL™ can be read as four different things at once — depending on what the work needs from you."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VIEWS.map((v, i) => (
              <div key={v.title} className="bg-white p-6 border border-ink-100">
                <div className="text-gold-500 font-display text-2xl font-medium mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-xl text-navy-700 font-medium mb-2">
                  {v.title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL CONTEXT */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">At organizational scale</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                Embedding RAPL™ into roles, governance and talent systems.
              </h2>
              <p className="mt-5 text-ink-500 text-lg leading-relaxed">
                The framework is most effective when it moves beyond individual
                development and shapes role design, governance forums, performance
                standards and succession criteria across the leadership system.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/organizations" className="btn btn-primary group">
                  See organizational application
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/assessment" className="btn btn-outline">
                  Run the Alignment Diagnostic
                </Link>
              </div>
            </div>

            <div className="bg-white border border-ink-100 p-7">
              <div className="eyebrow mb-3">The capability gap</div>
              <p className="text-ink-600 text-lg leading-relaxed">
                A <span className="text-navy-700 font-medium">capability gap</span> exists
                when the capability a strategic role requires is not what the leadership
                system deliberately develops, assesses or rewards.
              </p>
              <p className="text-ink-500 leading-relaxed mt-4">
                RAPL™ is built to make that gap visible, then close it — through seat
                profiles, capability baselines, gap heatmaps and governance integration.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="pill">Seat profiles</span>
                <span className="pill">Baselines</span>
                <span className="pill">Heatmaps</span>
                <span className="pill">Targeted development</span>
                <span className="pill">Governance integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTERNAL CONNECTIONS */}
      <section className="section-tight bg-bone-200 border-t border-ink-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="https://samiawaqar.com/leadership-economy"
              target="_blank"
              rel="noreferrer"
              className="card group"
            >
              <div className="eyebrow mb-2 !text-ink-400">External concept</div>
              <h3 className="font-display text-xl text-navy-700 font-medium mb-2">
                The Leadership Economy
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed mb-4">
                The broader thinking behind RAPL™'s approach to leadership and value.
              </p>
              <span className="link-arrow text-sm">
                Explore <ExternalLink size={12} />
              </span>
            </a>

            <Link to="/research" className="card group">
              <div className="eyebrow mb-2 !text-ink-400">Internal</div>
              <h3 className="font-display text-xl text-navy-700 font-medium mb-2">
                Research and Validation
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed mb-4">
                A transparent agenda testing content validity, role demand and
                intervention effectiveness.
              </p>
              <span className="link-arrow text-sm">
                Read the evidence position <ArrowRight size={14} />
              </span>
            </Link>

            <Link to="/certificate" className="card group">
              <div className="eyebrow mb-2 !text-ink-400">Internal</div>
              <h3 className="font-display text-xl text-navy-700 font-medium mb-2">
                Executive Certificate
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed mb-4">
                A fifty-hour development program across the twelve RAPL™ modules with an
                integrated capstone.
              </p>
              <span className="link-arrow text-sm">
                See the program <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Begin the framework"
        title="Explore the model. Build the capability. Govern the work."
        description="Whether you're an individual senior leader, an organization, or a researcher — there is a structured on-ramp."
        primary={{ label: 'Start the Diagnostic', to: '/assessment' }}
        secondary={{ label: 'Contact RAPL™ Leadership', to: '/contact' }}
      />
    </>
  )
}
