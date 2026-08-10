import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description }) {
  const fullTitle = title ? `${title} | RAPL™` : 'RAPL™ — Role-Agnostic Project Leadership'
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
