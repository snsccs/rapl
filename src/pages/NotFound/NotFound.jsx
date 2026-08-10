import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../../components/SEO/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <section className="min-h-[60vh] flex items-center bg-bone-100">
        <div className="container-rapl py-20">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">404</div>
            <h1 className="font-display text-5xl md:text-6xl font-medium text-navy-700 leading-[1.05] mb-5">
              That page doesn't exist.
            </h1>
            <p className="text-ink-500 text-lg leading-relaxed mb-8">
              The page you were looking for has moved or never existed. The RAPL™ home
              page is usually the fastest way back.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/" className="btn btn-primary group">
                Back to RAPL™ home
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/framework" className="btn btn-outline">
                See the framework
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
