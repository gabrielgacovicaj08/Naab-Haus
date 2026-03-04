import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import { useTranslation } from './hooks/useTranslation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function AppContent() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="features" style={{ padding: 'var(--section-padding)' }}>
          <h2>{t('features.heading')}</h2>
        </section>
        <section id="gallery" style={{ padding: 'var(--section-padding)' }}>
          <h2>{t('gallery.heading')}</h2>
        </section>
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
