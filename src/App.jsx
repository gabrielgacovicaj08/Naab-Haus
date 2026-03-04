import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import { useTranslation } from './hooks/useTranslation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'

function AppContent() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <section id="experience" style={{ padding: 'var(--section-padding)' }}>
          <h2>{t('experience.heading')}</h2>
        </section>
        <section id="location" style={{ padding: 'var(--section-padding)' }}>
          <h2>{t('location.heading')}</h2>
        </section>
      </main>
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
