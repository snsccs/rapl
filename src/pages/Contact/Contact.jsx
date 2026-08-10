import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight, Mail, MessageSquare, Building2, Award, ClipboardList, FlaskConical, Check } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'

const INTERESTS = [
  { value: 'certificate', label: 'Executive Certificate', icon: Award, hint: 'Apply or request a program brief.' },
  { value: 'organizations', label: 'For Organizations', icon: Building2, hint: 'Scope an engagement, cohort or rollout.' },
  { value: 'diagnostic', label: 'Alignment Diagnostic', icon: ClipboardList, hint: 'Run the diagnostic in your organization.' },
  { value: 'research', label: 'Research Collaboration', icon: FlaskConical, hint: 'Discuss expert review, pilots or academic work.' },
  { value: 'other', label: 'Something Else', icon: MessageSquare, hint: 'A general enquiry or a conversation.' },
]

export default function Contact() {
  const [params] = useSearchParams()
  const initialInterest = params.get('interest') || ''
  const [interest, setInterest] = useState(initialInterest)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  })

  useEffect(() => {
    if (initialInterest) setInterest(initialInterest)
  }, [initialInterest])

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact RAPL™ Leadership. Discuss the Executive Certificate, an organizational engagement, the Alignment Diagnostic, or research collaboration."
      />

      <PageHero
        variant="default"
        eyebrow="Contact"
        title="Talk to RAPL™ Leadership."
        subtitle="Choose the conversation that fits what you are trying to do. We respond to every enquiry within two business days."
      />

      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="eyebrow mb-4">Pick a thread</div>
              <h2 className="font-display text-3xl font-medium text-navy-700 leading-[1.1] mb-6">
                What would you like to discuss?
              </h2>
              <p className="text-ink-500 leading-relaxed mb-8">
                Choose the conversation that matches the work you are trying to do. We
                use this to route the enquiry to the right person and to send you the most
                relevant follow-up.
              </p>
              <div className="space-y-3">
                {INTERESTS.map((i) => {
                  const Icon = i.icon
                  return (
                    <button
                      key={i.value}
                      type="button"
                      onClick={() => setInterest(i.value)}
                      className={`w-full text-left p-4 border transition-all flex items-start gap-3 ${
                        interest === i.value
                          ? 'border-navy-700 bg-white shadow-soft'
                          : 'border-ink-100 bg-white hover:border-gold-300'
                      }`}
                    >
                      <span className={`w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 ${
                        interest === i.value ? 'bg-navy-700 text-gold-300' : 'bg-bone-200 text-navy-700'
                      }`}>
                        <Icon size={16} strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className={`font-medium ${interest === i.value ? 'text-navy-700' : 'text-ink-600'}`}>
                          {i.label}
                        </div>
                        <div className="text-ink-500 text-sm mt-0.5">{i.hint}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-8">
              {submitted ? (
                <div className="bg-white p-10 border border-ink-100 text-center">
                  <div className="w-14 h-14 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center mx-auto mb-5">
                    <Check size={28} strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-3xl text-navy-700 font-medium mb-3">
                    Thank you. We have your message.
                  </h3>
                  <p className="text-ink-500 text-lg leading-relaxed max-w-md mx-auto">
                    We respond to every enquiry within two business days. If your enquiry
                    is time-sensitive, write to us directly at the address below.
                  </p>
                  <a
                    href="mailto:leadership@rapl.example"
                    className="link-arrow mt-6 inline-flex"
                  >
                    <Mail size={14} /> leadership@rapl.example
                  </a>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white p-8 md:p-10 border border-ink-100">
                  <div className="eyebrow mb-3">Send a message</div>
                  <h3 className="font-display text-2xl text-navy-700 font-medium mb-7">
                    Tell us a little about you and the work.
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-ink-500 mb-1.5 block">Full name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={onChange('name')}
                        className="w-full px-3.5 py-2.5 border border-ink-200 text-sm focus:border-navy-700 focus:outline-none bg-bone-50"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-ink-500 mb-1.5 block">Work email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={onChange('email')}
                        className="w-full px-3.5 py-2.5 border border-ink-200 text-sm focus:border-navy-700 focus:outline-none bg-bone-50"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-ink-500 mb-1.5 block">Organization *</label>
                      <input
                        type="text"
                        required
                        value={form.organization}
                        onChange={onChange('organization')}
                        className="w-full px-3.5 py-2.5 border border-ink-200 text-sm focus:border-navy-700 focus:outline-none bg-bone-50"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-ink-500 mb-1.5 block">Your role</label>
                      <input
                        type="text"
                        value={form.role}
                        onChange={onChange('role')}
                        className="w-full px-3.5 py-2.5 border border-ink-200 text-sm focus:border-navy-700 focus:outline-none bg-bone-50"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="text-sm text-ink-500 mb-1.5 block">
                      Conversation thread
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-ink-200 text-sm focus:border-navy-700 focus:outline-none bg-bone-50"
                    >
                      <option value="">Select a thread…</option>
                      {INTERESTS.map((i) => (
                        <option key={i.value} value={i.value}>
                          {i.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5">
                    <label className="text-sm text-ink-500 mb-1.5 block">
                      Tell us what you are trying to do
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={onChange('message')}
                      className="w-full px-3.5 py-2.5 border border-ink-200 text-sm focus:border-navy-700 focus:outline-none bg-bone-50 resize-none"
                      placeholder="A few sentences about the strategic work, the seats involved, and the timing."
                    />
                  </div>

                  <div className="mt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p className="text-ink-400 text-xs">
                      We use your details only to respond to your enquiry. No marketing
                      list. No sharing.
                    </p>
                    <button type="submit" className="btn btn-primary group">
                      Send message
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white p-6 border border-ink-100">
                  <Mail size={18} className="text-gold-500 mb-3" strokeWidth={1.5} />
                  <div className="eyebrow !text-ink-400 mb-2">Direct email</div>
                  <a
                    href="mailto:leadership@rapl.example"
                    className="text-navy-700 font-medium underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700"
                  >
                    leadership@rapl.example
                  </a>
                </div>
                <div className="bg-white p-6 border border-ink-100">
                  <Building2 size={18} className="text-gold-500 mb-3" strokeWidth={1.5} />
                  <div className="eyebrow !text-ink-400 mb-2">Delivered by</div>
                  <a
                    href="https://snsccs.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-navy-700 font-medium underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700"
                  >
                    SnS Coaching and Consulting Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Before you write"
        title="Some questions are answered in the framework."
        description="If you are new to RAPL™, the framework page is the fastest way to understand the model. The diagnostic is the fastest way to see whether the work is relevant to you."
        primary={{ label: 'Read the framework', to: '/framework' }}
        secondary={{ label: 'About RAPL™', to: '/about' }}
      />
    </>
  )
}
