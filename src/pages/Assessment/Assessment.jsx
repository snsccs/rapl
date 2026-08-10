import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardList, Layers, BarChart3, ArrowDown, MapPin } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'

const STEPS = [
  {
    n: '01',
    title: 'Define the strategic work',
    desc: 'Identify the initiatives, portfolios and AI-enabled change the senior leadership team is accountable for in the next 12–24 months.',
  },
  {
    n: '02',
    title: 'Map the seats against the work',
    desc: 'Identify which RAPL™ capabilities each senior role is expected to exercise, and at what depth, in this work.',
  },
  {
    n: '03',
    title: 'Baseline current capability',
    desc: 'Assess current leadership capability against the twelve RAPL™ capabilities, using evidence beyond self-report where possible.',
  },
  {
    n: '04',
    title: 'Surface the gap as a heatmap',
    desc: 'Compare role demand and current capability in a visible, role-by-role, capability-by-capability heatmap.',
  },
  {
    n: '05',
    title: 'Prioritize the development',
    desc: 'Use the heatmap to target the highest-consequence gaps first — through cohort programs, targeted modules, coaching and governance work.',
  },
]

const OUTPUTS = [
  'A seat-by-seat view of capability demand for the work ahead.',
  'A role-by-role, capability-by-capability baseline.',
  'A visible heatmap of the Leadership Capability Gap.',
  'Prioritized development recommendations tied to strategic work.',
  'A re-measurement plan to track whether the gap is closing.',
]

export default function Assessment() {
  return (
    <>
      <SEO
        title="Leadership Capability Alignment Diagnostic"
        description="A structured way to compare what senior roles require with what leadership and talent systems develop, assess and reward."
      />

      <PageHero
        variant="default"
        eyebrow="Leadership Capability Alignment Diagnostic"
        title="Make the leadership capability gap visible — by seat, by capability, by consequence."
        subtitle="A structured way to compare what senior roles require with what leadership and talent systems develop, assess and reward. The diagnostic is the entry point to every RAPL™ engagement."
        primaryCta={{ label: 'Request the diagnostic', to: '/contact?interest=diagnostic' }}
        secondaryCta={{ label: 'See the framework', to: '/framework' }}
      />

      {/* WHAT IT IS */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">What the diagnostic does</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                It compares what the work demands with what the leadership system actually develops.
              </h2>
            </div>
            <div className="text-ink-600 text-lg leading-relaxed space-y-5">
              <p>
                The Leadership Capability Alignment Diagnostic makes the gap between
                strategic work and leadership systems visible — not as an abstract idea,
                but as a concrete comparison you can act on.
              </p>
              <p>
                It looks at each senior seat, the work it is expected to govern, the
                capability the work requires, and the capability the talent system
                actually develops, assesses and rewards. Where the two don't match, the
                gap is named — and prioritized.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="pill pill-gold">Seat profiles</span>
                <span className="pill pill-gold">Role demand</span>
                <span className="pill pill-gold">Capability baseline</span>
                <span className="pill pill-gold">Gap heatmap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE STEPS */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="The diagnostic process"
            title="Five steps from work to action."
            description="The diagnostic moves from defining the work, through mapping seats and baseline, to a visible heatmap and prioritized development plan."
          />

          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gold-300 hidden md:block" aria-hidden />
            <div className="space-y-5">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="bg-white border border-ink-100 p-6 md:p-7 md:pl-24 relative"
                >
                  <div className="absolute left-6 top-7 w-12 h-12 rounded-full bg-navy-700 text-gold-300 flex items-center justify-center font-display text-lg font-medium md:flex hidden items-center justify-center">
                    {s.n}
                  </div>
                  <div className="md:hidden text-gold-500 font-display font-medium mb-2">
                    Step {s.n}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-navy-700 font-medium mb-2">
                    {s.title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">What you get</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                A diagnostic you can act on, not a report that sits on a shelf.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {OUTPUTS.map((o) => (
                  <li key={o} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-sm bg-gold-500 text-navy-800 flex items-center justify-center mt-0.5">
                      <ArrowDown size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-ink-600 text-lg leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL HEATMAP MOCKUP */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-4 text-center">What a heatmap looks like</div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1] text-center mb-12">
              The gap, made visible.
            </h2>
            <div className="bg-white p-6 md:p-8 border border-ink-100">
              <div className="grid grid-cols-[140px_1fr] gap-2 text-sm">
                <div></div>
                <div className="grid grid-cols-4 gap-1.5 text-center text-[0.7rem] tracking-wider uppercase text-ink-400 font-semibold">
                  <div>Define</div>
                  <div>Govern</div>
                  <div>Protect</div>
                  <div>Land</div>
                </div>
                {[
                  { seat: 'CEO', cells: ['low', 'med', 'low', 'med'] },
                  { seat: 'CIO', cells: ['med', 'high', 'high', 'low'] },
                  { seat: 'CHRO', cells: ['low', 'med', 'low', 'low'] },
                  { seat: 'CFO', cells: ['med', 'low', 'med', 'low'] },
                  { seat: 'COO', cells: ['med', 'med', 'med', 'med'] },
                  { seat: 'CxO Trans.', cells: ['high', 'high', 'low', 'low'] },
                ].map((row) => (
                  <div key={row.seat} className="contents">
                    <div className="text-ink-600 text-[0.85rem] font-medium py-2">
                      {row.seat}
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {row.cells.map((c, i) => {
                        const colorMap = {
                          low: 'bg-gold-200 text-gold-800',
                          med: 'bg-gold-400 text-navy-800',
                          high: 'bg-navy-700 text-gold-200',
                        }
                        return (
                          <div
                            key={i}
                            className={`h-9 rounded-sm flex items-center justify-center text-[0.7rem] tracking-wider uppercase font-semibold ${colorMap[c]}`}
                          >
                            {c}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-end gap-4 text-xs text-ink-500">
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-gold-200"></span> Low</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-gold-400"></span> Medium</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-navy-700"></span> High demand</span>
              </div>
              <p className="text-ink-400 text-xs mt-6 italic">
                Illustrative example only — actual heatmaps are generated for each organization from the diagnostic engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO USES IT */}
      <section className="section-tight bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-6 border border-ink-100">
              <ClipboardList size={20} className="text-gold-500 mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-navy-700 font-medium mb-2">Boards and CEOs</h3>
              <p className="text-ink-500 text-sm leading-relaxed">
                Sanity-check whether the senior team has the leadership capability the
                strategic agenda actually requires.
              </p>
            </div>
            <div className="bg-white p-6 border border-ink-100">
              <Layers size={20} className="text-gold-500 mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-navy-700 font-medium mb-2">CHROs and PMOs</h3>
              <p className="text-ink-500 text-sm leading-relaxed">
                Target development and succession investment where the gap is highest and
                the consequences are greatest.
              </p>
            </div>
            <div className="bg-white p-6 border border-ink-100">
              <BarChart3 size={20} className="text-gold-500 mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-navy-700 font-medium mb-2">Transformation leaders</h3>
              <p className="text-ink-500 text-sm leading-relaxed">
                Identify which leadership seats need strengthening before the next wave of
                AI and transformation work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Begin the diagnostic"
        title="Make the gap visible. Then close it."
        description="The diagnostic is the structured entry point to every RAPL™ engagement."
        primary={{ label: 'Request the diagnostic', to: '/contact?interest=diagnostic' }}
        secondary={{ label: 'Read the research', to: '/research' }}
      />
    </>
  )
}
