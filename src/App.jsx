import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import { useTranslation } from './hooks/useTranslation'
import Navbar from './components/Navbar'

function AppContent() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <main>
        <section id="home" style={{ padding: 'var(--section-padding)', paddingTop: '8rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)' }}>{t('hero.headline')}</h1>
          <p style={{ marginTop: '1rem' }}>{t('hero.subheadline')}</p>
        </section>
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
