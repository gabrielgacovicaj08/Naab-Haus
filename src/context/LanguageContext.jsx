import { useState } from 'react'
import { LanguageContext } from './languageContext'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('naabhaus-lang') || 'en'
  })

  function toggleLang() {
    const next = lang === 'en' ? 'it' : 'en'
    setLang(next)
    localStorage.setItem('naabhaus-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
