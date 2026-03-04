import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import { useTranslation } from './hooks/useTranslation'

function AppContent() {
  const { t, lang, toggleLang } = useTranslation()

  return (
    <main>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: 'var(--color-deep-sea)', color: '#fff' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>NaabHaus</span>
        <button
          onClick={toggleLang}
          style={{ background: 'none', border: '1px solid #fff', color: '#fff', padding: '0.25rem 0.75rem', cursor: 'pointer', borderRadius: '4px', fontFamily: 'var(--font-body)' }}
          aria-label="Toggle language"
        >
          {lang === 'en' ? 'IT' : 'EN'}
        </button>
      </nav>
      <section style={{ padding: 'var(--section-padding)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)' }}>{t('hero.headline')}</h1>
        <p>{t('hero.subheadline')}</p>
      </section>
    </main>
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
