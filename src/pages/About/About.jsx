import { Link } from 'react-router-dom'
import { ArrowRight, Check, ExternalLink } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'

const PRINCIPLES = [
  {
    n: '01',
    title: 'Applied',
    desc: 'Capability must change decisions and behaviour in live work — not just assessment scores.',
  },
  {
    n: '02',
    title: 'Accountable',
    desc: 'Decision rights, risk ownership, adoption, benefits and consequences remain visible, the standard the Leadership Capability Alignment Diagnostic is built to measure.',
  },
  {
    n: '03',
    title: 'Role-agnostic',
    desc: 'Capability follows the work, not the job title — the depth required varies by seat and consequence.',
  },
  {
    n: '04',
    title: 'Refreshable',
    desc: 'A capability system that can be assessed, developed, applied, evidenced and refreshed over time.',
  },
  {
    n: '05',
    title: 'Testable',
    desc: 'The framework is offered for expert review, role-demand research, organizational testing and refinement — examined transparently in the research agenda.',
  },
]

const DOMAINS = [
  'Business analysis', 'Strategy', 'Portfolio and program leadership',
  'Delivery sponsorship', 'Risk', 'Stakeholder alignment',
  'Execution-office governance', 'AI', 'Change and adoption', 'Benefits sustainment',
]

export default function About() {
  return (
    <>
      <SEO
        title="About RAPL™"
        description="A leadership framework for the work leaders are already expected to govern. Created by Samia Waqar and delivered through SnS Coaching and Consulting Services."
      />

      <PageHero
        variant="default"
        eyebrow="About RAPL™"
        title={
          <>
            A leadership framework for the work leaders are already expected to govern.
          </>
        }
        subtitle={
          <>
            <p className="mb-5">
              RAPL™ was developed to address a recurring organizational question: are
              leaders being prepared for the AI-enabled, project-shaped strategic work
              they are already accountable for?
            </p>
            <p>
              The <Link to="/framework" className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700">RAPL™ Leadership Framework</Link> brings together leadership acts drawn from
              business analysis, strategy, portfolio and program leadership, delivery
              sponsorship, risk, stakeholder alignment, execution-office governance, AI,
              change, adoption and benefits sustainment.
            </p>
          </>
        }
        primaryCta={{ label: 'Explore the framework', to: '/framework' }}
        secondaryCta={{ label: 'Read the research', to: '/research' }}
      />

      {/* WHY RAPL EXISTS */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Why RAPL™ exists</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                Strategic work has changed. Leadership development hasn't kept up.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-ink-600 text-lg leading-relaxed">
              <p>
                Organizations increasingly create value through temporary, cross-functional
                and change-intensive work. Senior leaders are expected to choose the right
                work, govern competing investment, sponsor delivery, lead through
                uncertainty, scale AI, build adoption and sustain benefits — often without
                a shared system for developing that judgment.
              </p>
              <p>
                RAPL™ makes those responsibilities visible as one value cycle rather than a
                collection of disconnected specialisms —{' '}
                <Link to="/" className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700">
                  the same gap explored in more depth on the RAPL™ home page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="section-tight bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <div className="eyebrow mb-5 text-center">What RAPL™ integrates</div>
          <h2 className="font-display text-3xl font-medium text-navy-700 leading-[1.1] text-center max-w-3xl mx-auto mb-10">
            Ten established practice domains — translated into one executive value cycle.
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {DOMAINS.map((d) => (
              <span key={d} className="pill pill-navy">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="RAPL™ principles"
            title="Five principles the framework holds itself to."
            description="These are not aspirations. They are the test we apply when a new engagement, resource or capability claim enters the framework."
          />
          <div className="space-y-4">
            {PRINCIPLES.map((p) => (
              <div
                key={p.n}
                className="bg-white border border-ink-100 p-6 md:p-7 flex flex-col md:flex-row gap-5 md:items-start hover:border-gold-300 transition-colors"
              >
                <div className="flex-shrink-0 md:w-20">
                  <div className="font-display text-3xl text-gold-500 font-medium leading-none">
                    {p.n}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy-700 font-medium mb-2">
                    {p.title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed text-lg">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERED THROUGH */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow mb-4">Delivered through</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                SnS Coaching and Consulting Services.
              </h2>
              <p className="mt-5 text-ink-500 text-lg leading-relaxed">
                The <Link to="/certificate" className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700">Executive Certificate</Link> and organizational RAPL™ engagements are delivered through{' '}
                <a
                  href="https://snsccs.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700"
                >
                  SnS Coaching and Consulting Services
                </a>
                .{' '}
                <Link to="/organizations" className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700">
                  Organizational RAPL™ engagements
                </Link>{' '}
                are scoped against the strategic work, the seats involved, and the system we
                need to influence.
              </p>
            </div>
            <div className="bg-white p-7 border border-ink-100">
              <div className="eyebrow mb-3">Three things to know</div>
              <ul className="space-y-3 text-ink-600">
                <li className="flex gap-2 items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-700 text-gold-300 flex items-center justify-center mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>RAPL™ is created by Samia Waqar.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-700 text-gold-300 flex items-center justify-center mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>Delivered through SnS Coaching and Consulting Services.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-700 text-gold-300 flex items-center justify-center mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>Examined transparently in a published research agenda.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Evidence and validation</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                Theory-grounded, practice-informed and examined transparently.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-ink-600 text-lg leading-relaxed">
              <p>
                RAPL™ is theory-grounded and practice-informed. The literature supports the
                need for the capabilities it integrates, but it does not yet establish
                RAPL™ as a fully validated intervention. The framework is therefore offered
                for application, expert review, role-demand research, organizational testing
                and refinement.
              </p>
              <p>
                That boundary is the starting point of the research agenda — not a
                disclaimer.
              </p>
              <div className="mt-6">
                <Link to="/research" className="btn btn-primary group">
                  Read the research position
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SAMIA */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">About the creator</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                Samia Waqar.
              </h2>
              <p className="mt-5 text-ink-600 text-lg leading-relaxed">
                Samia Waqar is the creator of RAPL™ and the founder of SnS Coaching and
                Consulting Services. Her work sits at the intersection of leadership
                development, AI-enabled transformation and the discipline required to land
                strategic value in operations.
              </p>
              <p className="mt-4 text-ink-500 leading-relaxed">
                She is also the author of{' '}
                <a
                  href="https://samiawaqar.com/book"
                  target="_blank"
                  rel="noreferrer"
                  className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700"
                >
                  The Leadership Economy
                </a>{' '}
                — the broader thinking behind RAPL™'s approach to leadership and value.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://samiawaqar.com/about"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline group"
                >
                  About Samia Waqar
                  <ExternalLink size={14} />
                </a>
                <Link to="/contact" className="btn btn-ghost">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-navy-700 text-white p-8">
                <div className="font-display text-7xl text-gold-300 leading-none mb-2">"</div>
                <p className="text-bone-100 text-lg leading-relaxed -mt-4">
                  Strategic work has changed faster than the leadership systems that
                  prepare executives for it. RAPL™ exists to make that gap visible, and
                  to give senior leaders a structured way to close it.
                </p>
                <div className="mt-6 pt-6 border-t border-navy-600">
                  <div className="font-display text-lg text-white">Samia Waqar</div>
                  <div className="text-bone-300 text-sm">Creator, RAPL™</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Begin"
        title="Explore the framework, discuss the Executive Certificate or begin an organizational diagnostic."
        primary={{ label: 'Explore the framework', to: '/framework' }}
        secondary={{ label: 'Start the Diagnostic', to: '/assessment' }}
      />
    </>
  )
}
