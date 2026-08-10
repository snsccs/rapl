import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, FileText, Download, BookOpen, Mail } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'

const DOWNLOADS = [
  {
    title: 'The Leadership Capability Gap — Executive Brief',
    desc: 'A concise explanation of the gap, the RAPL™ response and how the framework\'s phases and capabilities address it.',
    meta: 'PDF · 8 pages',
    cta: 'Download brief',
  },
  {
    title: 'RAPL™ in One Page',
    desc: 'A single-page value-cycle map summarizing the model, built for executive discussion and leadership development.',
    meta: 'PDF · 1 page',
    cta: 'Download map',
  },
  {
    title: 'Executive Sponsorship Health Check',
    desc: 'A milestone-based check of sponsor presence, value articulation, decision rights, adoption readiness, risk escalation, benefits ownership and sustainment — the sponsorship capability developed through the Executive Certificate.',
    meta: 'Self-assessment · 12 questions',
    cta: 'Open the health check',
    link: '/certificate',
  },
  {
    title: 'AI Go-or-No-Go Gate',
    desc: 'A value-protection gate covering business need, AI justification, data readiness, human oversight, sponsor accountability, workflow redesign, adoption risk, benefits ownership and post-deployment monitoring — the governance discipline organizations embed through structured application.',
    meta: 'Decision gate · 9 criteria',
    cta: 'Open the gate',
    link: '/organizations',
  },
  {
    title: 'Research Participation Brief',
    desc: 'An overview of the Leadership Capability Alignment Study, research questions, participation options and data-use principles — part of the RAPL™ research and validation agenda.',
    meta: 'PDF · 6 pages',
    cta: 'Download brief',
    link: '/research',
  },
]

const INSIGHTS = [
  'Work has changed faster than leadership systems.',
  'The Leadership Capability Gap is structural, not personal.',
  'Sponsorship is a capability, not a title.',
  'Risk being normalized is a signal, not a status update.',
  'Adoption is a leadership discipline, not a delivery artifact.',
  'AI does not replace leadership judgment; it raises the cost of weak judgment.',
  'Sustained value is governed, not delivered.',
  'Capability must change decisions and behavior in live work.',
]

const READING = [
  { title: 'The Leadership Economy by Samia Waqar', url: 'https://samiawaqar.com/book' },
  { title: 'The Leadership Economy concept', url: 'https://samiawaqar.com/leadership-economy', desc: 'The broader thinking behind RAPL™\'s approach to leadership and value.' },
  { title: 'SnS Coaching and Consulting Services', url: 'https://snsccs.com/' },
]

export default function Resources() {
  return (
    <>
      <SEO
        title="Resources and Insights"
        description="Approved RAPL™ briefs and decision aids, grounded in the RAPL™ Leadership Framework, to diagnose leadership demand, sharpen strategic choices, strengthen sponsorship, govern AI and keep value visible after delivery."
      />

      <PageHero
        variant="default"
        eyebrow="Resources and Insights"
        title="RAPL™ briefs, decision aids and applied thinking for senior leaders."
        subtitle={
          <>
            Use approved RAPL™ briefs and decision aids, grounded in the{' '}
            <Link to="/framework" className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700">
              RAPL™ Leadership Framework
            </Link>
            , to diagnose leadership demand, sharpen strategic choices, strengthen
            sponsorship, govern AI and keep value visible after delivery.
          </>
        }
        primaryCta={{ label: 'Subscribe to the briefing', to: 'https://samiawaqar.com/book#join' }}
        secondaryCta={{ label: 'See the framework', to: '/framework' }}
      />

      {/* FEATURED DOWNLOADS */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="Featured downloads"
            title="Decision aids, briefs and tools."
            description="Each resource is grounded in the RAPL™ Leadership Framework and tied to the entry point that makes most sense for what you are trying to do."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOWNLOADS.map((d) => (
              <div key={d.title} className="bg-white p-6 border border-ink-100 flex flex-col h-full hover:border-gold-300 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-9 h-9 rounded-sm bg-navy-700 text-gold-300 flex items-center justify-center">
                    <FileText size={16} strokeWidth={1.5} />
                  </span>
                  <span className="text-[0.7rem] tracking-[0.15em] uppercase text-ink-400 font-semibold">
                    {d.meta}
                  </span>
                </div>
                <h3 className="font-display text-xl text-navy-700 font-medium mb-2 leading-snug">
                  {d.title}
                </h3>
                <p className="text-ink-500 leading-relaxed text-sm flex-1">
                  {d.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-ink-100">
                  {d.link ? (
                    <Link to={d.link} className="link-arrow text-sm">
                      {d.cta}
                      <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <a href="#download" className="link-arrow text-sm">
                      <Download size={14} /> {d.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-ink-400 text-xs mt-6 italic">
            All RAPL™ decision aids are provided for use in live strategic, AI and
            transformation work. Where a download requires contact information, your
            details are used only to share the requested resource and relevant research
            updates.
          </p>
        </div>
      </section>

      {/* INSIGHTS / THINKING */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Applied thinking</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                Eight working propositions for executive leaders.
              </h2>
              <p className="mt-5 text-ink-500 text-lg leading-relaxed">
                These are the working propositions that shape RAPL™'s approach. They are
                not slogans — they are tested against live strategic, AI and transformation
                work.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ol className="space-y-3">
                {INSIGHTS.map((i, idx) => (
                  <li
                    key={i}
                    className="bg-white p-5 border border-ink-100 flex items-start gap-4"
                  >
                    <span className="text-gold-500 font-display font-medium text-lg flex-shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink-600 text-lg leading-snug">{i}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED READING */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="Connected reading"
            title="Adjacent thinking and broader context."
            description="RAPL™ sits inside a wider set of ideas about leadership and value. The resources below are the most direct extensions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {READING.map((r) => (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="card group"
              >
                <BookOpen size={20} className="text-gold-500 mb-3" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-navy-700 font-medium mb-2">
                  {r.title}
                </h3>
                {r.desc && (
                  <p className="text-ink-500 text-sm leading-relaxed mb-3">{r.desc}</p>
                )}
                <span className="link-arrow text-sm">
                  Visit <ArrowUpRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BRIEFING */}
      <section className="section bg-navy-700 text-white relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.05]" />
        <div className="container-rapl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow !text-gold-300 mb-4">Briefing and updates</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-white leading-[1.1]">
                Join the Leadership Economy Briefing.
              </h2>
              <p className="mt-5 text-bone-100 text-lg leading-relaxed">
                Selected book, research, RAPL™ and event updates — including new resources,
                research findings and Executive Certificate cohort dates. One email,
                occasional, useful.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-white p-6 text-ink-600"
              >
                <div className="eyebrow !text-gold-600 mb-2">Subscribe</div>
                <label className="text-sm text-ink-500 mb-2 block">Your work email</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="leader@organization.com"
                    className="flex-1 px-3 py-2.5 border border-ink-200 text-sm focus:border-navy-700 focus:outline-none"
                  />
                  <button type="submit" className="btn btn-primary !py-2.5 !px-4 text-sm">
                    <Mail size={14} /> Join
                  </button>
                </div>
                <p className="text-[0.7rem] text-ink-400 mt-3">
                  We use your email only to send the briefing. Unsubscribe in one click.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Take the next step"
        title="Move from insight to action."
        description="The briefs and decision aids are the lightest on-ramp. The diagnostic, the certificate and the organizational engagement are where they translate into capability."
        primary={{ label: 'Run the diagnostic', to: '/assessment' }}
        secondary={{ label: 'See the framework', to: '/framework' }}
      />
    </>
  )
}
