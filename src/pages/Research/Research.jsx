import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, BookOpen, Check } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'

const QUESTIONS = [
  {
    title: 'Content validity',
    desc: 'Are the twelve capabilities of the RAPL™ Framework relevant, clear, sufficiently distinct and complete enough for senior leadership work?',
  },
  {
    title: 'Role demand',
    desc: 'What capabilities do different senior seats actually require, and how does that demand vary by context, sector and consequence?',
  },
  {
    title: 'Talent-system alignment',
    desc: 'Do leadership and talent systems develop, assess, reward, reinforce and observe the capabilities the roles require — the same comparison the Leadership Capability Alignment Diagnostic is built to surface?',
  },
  {
    title: 'Intervention effectiveness',
    desc: 'Does deliberate development of the RAPL™ capabilities change executive decisions, sponsorship behavior and value realization in live strategic work?',
  },
]

const PROPOSITIONS = [
  { n: 'P1', title: 'Role–Capability Fit', desc: 'Leadership seats that align capability development with strategic role demand show stronger decision quality than seats that do not.' },
  { n: 'P2', title: 'Sponsorship Discipline', desc: 'Strong sponsorship discipline is associated with better risk visibility, less normalized escalation and stronger benefits realization.' },
  { n: 'P3', title: 'Governance Integration', desc: 'Capability embedded into governance forums predicts more disciplined investment review than capability developed through training alone.' },
  { n: 'P4', title: 'Value Conversion', desc: 'Organizations that deliberately build and assess relevant leadership capability are hypothesized to show stronger sustained benefits realization from AI and transformation investment than organizations that do not.' },
  { n: 'P5', title: 'System Reinforcement', desc: 'Capability embedded into role design, succession, development, performance and governance — the approach outlined in RAPL™\'s organizational application — is hypothesized to be more durable than capability developed through standalone training alone.' },
]

const PARTICIPATION = [
  'Expert-panel review of capability relevance and clarity.',
  'Role-demand survey participation.',
  'Talent-system document review and interviews.',
  'Organizational alignment pilot, aligned with the engagement options available through organizational application.',
  'RAPL™ development intervention study, delivered through the Executive Certificate or a targeted organizational cohort.',
  'Academic methods, ethics or publication collaboration.',
]

export default function Research() {
  return (
    <>
      <SEO
        title="Research and Validation"
        description="RAPL™ is offered as a testable response to the Leadership Capability Gap. A transparent research agenda testing content validity, role demand, talent-system alignment and intervention effectiveness."
      />

      <PageHero
        variant="default"
        eyebrow="Research and Validation"
        title="A testable response to the Leadership Capability Gap."
        subtitle={
          <>
            RAPL™ is offered as a testable response to the{' '}
            <Link to="/" className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700">
              Leadership Capability Gap
            </Link>{' '}
            identified across strategic, AI-enabled work. The research agenda separates what
            existing evidence supports from what still requires direct measurement.
          </>
        }
        primaryCta={{ label: 'Discuss research collaboration', to: '/contact?interest=research' }}
        secondaryCta={{ label: 'See the framework', to: '/framework' }}
      />

      {/* EVIDENCE POSITION */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">The evidence position</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                The literature supports the problem. It does not yet establish RAPL™ as a fully validated intervention.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-ink-600 text-lg leading-relaxed">
              <p>
                Existing research and professional practice support the changing nature of
                work, the difficulty of strategy execution, leadership-development transfer
                problems, benefits-realization gaps, AI scaling barriers, dynamic capability
                and the increasing relevance of project and transformation capability to
                senior leadership.
              </p>
              <p>
                They do not yet directly prove the complete RAPL™ intervention as validated
                across roles and organizations. That boundary should remain visible — and it
                is precisely what this research agenda is designed to close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR VALIDATION QUESTIONS */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="The research questions"
            title="Four validation questions."
            description="The research agenda is organized around four questions. Each connects to a method, a sample, and an expected outcome."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {QUESTIONS.map((q, i) => (
              <div key={q.title} className="bg-white p-7 border border-ink-100">
                <div className="text-gold-500 font-display text-2xl font-medium mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-2xl text-navy-700 font-medium mb-2">
                  {q.title}
                </h3>
                <p className="text-ink-500 leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE PROPOSITIONS */}
      <section className="section bg-bone-100">
        <div className="container-rapl">
          <SectionHeader
            eyebrow="Testable propositions"
            title="Five propositions the framework proposes."
            description="The framework is built on a set of explicit, testable claims about how leadership capability shows up in strategic work — and what changes when it is deliberately developed."
          />
          <div className="space-y-4">
            {PROPOSITIONS.map((p) => (
              <div
                key={p.n}
                className="bg-white border border-ink-100 p-6 md:p-7 flex flex-col md:flex-row gap-5 md:items-start"
              >
                <div className="flex-shrink-0 md:w-28">
                  <div className="font-display text-3xl text-gold-500 font-medium leading-none">
                    {p.n}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl text-navy-700 font-medium mb-2">
                    {p.title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICIPATION */}
      <section className="section bg-bone-200 border-y border-ink-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Research participation</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-700 leading-[1.1]">
                Six ways to participate.
              </h2>
              <p className="mt-5 text-ink-500 text-lg leading-relaxed">
                If your work touches leadership development, senior-team capability, or the
                evidence base behind AI-enabled transformation, there is likely a structured
                way to participate.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                {PARTICIPATION.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-700 text-gold-300 flex items-center justify-center mt-0.5">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-ink-600 text-lg leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGICAL HONESTY */}
      <section className="section bg-navy-700 text-white relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.05]" />
        <div className="container-rapl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="eyebrow !text-gold-300 mb-4">Methodological honesty</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-white leading-[1.1]">
                The objective is not to defend a framework.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-bone-100 text-lg leading-relaxed">
              <p>
                The objective is not to defend the RAPL™ Leadership Framework at all costs.
                It is to examine the problem, test the model's twelve capabilities and
                improve both the framework and the intervention when evidence requires it.
              </p>
              <p>
                That is the standard the research agenda holds itself to — and the standard
                we ask collaborators, reviewers and pilot organizations to hold it to as
                well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Help shape the next stage"
        title="Discuss expert review, organizational participation or academic collaboration and help shape the next stage of the RAPL™ Leadership Framework."
        primary={{ label: 'Start the conversation', to: '/contact?interest=research' }}
        secondary={{ label: 'See the framework', to: '/framework' }}
      />
    </>
  )
}
