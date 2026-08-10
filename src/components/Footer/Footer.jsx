import { Link } from 'react-router-dom'
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-bone-100">
      <div className="container-rapl py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-10 h-10 rounded-sm bg-navy-700 text-gold-400 font-display text-2xl font-semibold leading-none border border-navy-600">
                R
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-white tracking-tight">
                  RAPL<sup className="text-[0.55em] align-super -ml-0.5 text-gold-400">™</sup>
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase text-bone-300 mt-0.5">
                  Role-Agnostic Leadership
                </span>
              </span>
            </Link>
            <p className="mt-5 text-bone-200 text-[0.95rem] leading-relaxed max-w-sm">
              An executive leadership framework for senior leaders who must diagnose the
              right work, govern investment, lead adoption and sustain value across
              AI-enabled, project-shaped change.
            </p>
            <p className="mt-6 text-bone-300 text-sm">
              Created by{' '}
              <a
                href="https://samiawaqar.com/about"
                target="_blank"
                rel="noreferrer"
                className="text-gold-300 hover:text-gold-200 underline-offset-4 hover:underline"
              >
                Samia Waqar
              </a>
              , delivered through{' '}
              <a
                href="https://snsccs.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gold-300 hover:text-gold-200 underline-offset-4 hover:underline"
              >
                SnS Coaching and Consulting Services
              </a>
              .
            </p>
          </div>

          {/* Framework */}
          <div className="md:col-span-2">
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-bone-300 font-semibold mb-4">
              Framework
            </div>
            <ul className="flex flex-col gap-2.5 text-[0.95rem]">
              <li><Link to="/framework" className="text-bone-100 hover:text-gold-300">RAPL™ Framework</Link></li>
              <li><Link to="/certificate" className="text-bone-100 hover:text-gold-300">Executive Certificate</Link></li>
              <li><Link to="/research" className="text-bone-100 hover:text-gold-300">Research and Validation</Link></li>
            </ul>
          </div>

          {/* Engage */}
          <div className="md:col-span-2">
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-bone-300 font-semibold mb-4">
              Engage
            </div>
            <ul className="flex flex-col gap-2.5 text-[0.95rem]">
              <li><Link to="/organizations" className="text-bone-100 hover:text-gold-300">For Organizations</Link></li>
              <li><Link to="/assessment" className="text-bone-100 hover:text-gold-300">Alignment Diagnostic</Link></li>
              <li><Link to="/resources" className="text-bone-100 hover:text-gold-300">Resources</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-bone-300 font-semibold mb-4">
              Company
            </div>
            <ul className="flex flex-col gap-2.5 text-[0.95rem]">
              <li><Link to="/about" className="text-bone-100 hover:text-gold-300">About RAPL™</Link></li>
              <li><Link to="/contact" className="text-bone-100 hover:text-gold-300">Contact</Link></li>
              <li>
                <a
                  href="https://samiawaqar.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-bone-100 hover:text-gold-300 inline-flex items-center gap-1"
                >
                  Samia Waqar <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Briefing */}
          <div className="md:col-span-2">
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-bone-300 font-semibold mb-4">
              Briefing
            </div>
            <p className="text-bone-200 text-sm leading-relaxed mb-3">
              Selected book, research, RAPL™ and event updates.
            </p>
            <a
              href="https://samiawaqar.com/book#join"
              target="_blank"
              rel="noreferrer"
              className="link-arrow link-arrow-light text-sm"
            >
              Join the Briefing
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <hr className="border-navy-600 mt-12 mb-6" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-bone-300 text-sm">
            © {new Date().getFullYear()} SnS Coaching and Consulting Services. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-sm text-bone-300">
            <Link to="/terms" className="hover:text-gold-300">Terms of Use</Link>
            <a href="mailto:leadership@rapl.example" className="inline-flex items-center gap-1.5 hover:text-gold-300">
              <Mail size={14} /> leadership@rapl.example
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
