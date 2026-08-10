import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home/Home.jsx'
import Framework from './pages/Framework/Framework.jsx'
import Certificate from './pages/Certificate/Certificate.jsx'
import Organizations from './pages/Organizations/Organizations.jsx'
import Assessment from './pages/Assessment/Assessment.jsx'
import Research from './pages/Research/Research.jsx'
import Resources from './pages/Resources/Resources.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Terms from './pages/Terms/Terms.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bone-100">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
