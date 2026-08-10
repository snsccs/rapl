import { Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'

const SECTIONS = [
  {
    title: '1. Acceptance of these Terms',
    body: 'By accessing or using the RAPL™ website (the "Site") or any related materials, you agree to be bound by these Terms of Use. If you do not agree, you must not access or use the Site.',
  },
  {
    title: '2. The RAPL™ framework and materials',
    body: 'RAPL™ — Role-Agnostic Project Leadership — and all related content, briefs, decision aids, frameworks, diagrams and downloadable materials are the intellectual property of SnS Coaching and Consulting Services. They are provided for personal, non-commercial use, and for internal organizational reference, unless you have a separate written agreement with us.',
  },
  {
    title: '3. No professional advice',
    body: 'The content on this Site is for general information only. It does not constitute professional, legal, financial or organizational advice, and is not a substitute for independent judgment in your specific circumstances. RAPL™ materials are designed to support, not replace, the judgment of qualified executives and advisors.',
  },
  {
    title: '4. No warranty; limitation of liability',
    body: 'The Site and its contents are provided on an "as is" and "as available" basis. To the maximum extent permitted by law, SnS Coaching and Consulting Services disclaims all warranties, express or implied, and shall not be liable for any indirect, incidental, special, consequential or punitive damages arising out of or relating to your use of the Site.',
  },
  {
    title: '5. External links',
    body: 'The Site may contain links to third-party websites, including samiawaqar.com and snsccs.com. These links are provided for convenience. We do not endorse and are not responsible for the content, policies or practices of any third-party sites.',
  },
  {
    title: '6. Research and evidence',
    body: 'RAPL™ is offered as a testable response to the Leadership Capability Gap. It is theory-grounded and practice-informed, but it is not presented as a fully validated intervention. Statements about outcomes and impact describe hypotheses and intended effects, not guarantees.',
  },
  {
    title: '7. User conduct',
    body: 'You agree not to (a) use the Site for any unlawful purpose; (b) attempt to gain unauthorized access to any portion of the Site; (c) interfere with the Site\'s security or operation; or (d) reproduce, distribute or create derivative works of RAPL™ content for commercial purposes without prior written permission.',
  },
  {
    title: '8. Privacy',
    body: 'Any personal information you submit through the Site (for example via the contact form) is used only to respond to your enquiry. We do not sell or share your information with third parties. Detailed practices are described in our Privacy Policy.',
  },
  {
    title: '9. Changes to these Terms',
    body: 'We may update these Terms from time to time. Continued use of the Site after changes constitutes acceptance of the revised Terms. The "Last updated" date at the top of this page reflects the most recent revision.',
  },
  {
    title: '10. Governing law',
    body: 'These Terms are governed by the laws applicable to SnS Coaching and Consulting Services. Any disputes arising from or relating to these Terms shall be resolved in accordance with those laws.',
  },
  {
    title: '11. Contact',
    body: 'If you have questions about these Terms, please contact us through the details provided on our Contact page.',
  },
]

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use"
        description="Terms of Use for the RAPL™ website."
      />

      <PageHero
        variant="default"
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="Last updated: 2026. These Terms govern your use of the RAPL™ website. Please read them carefully."
      />

      <section className="section bg-bone-100">
        <div className="container-rapl">
          <div className="max-w-3xl">
            <div className="space-y-8">
              {SECTIONS.map((s) => (
                <div key={s.title}>
                  <h2 className="font-display text-2xl text-navy-700 font-medium mb-3">
                    {s.title}
                  </h2>
                  <p className="text-ink-600 leading-relaxed text-[0.97rem]">{s.body}</p>
                </div>
              ))}
            </div>
            <hr className="hr-thin my-10" />
            <p className="text-ink-500">
              Questions about these Terms?{' '}
              <Link to="/contact" className="text-navy-700 underline decoration-gold-500 underline-offset-4 hover:decoration-navy-700">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
