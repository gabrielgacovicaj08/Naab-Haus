import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext'
import translations from '../translations'

export function useTranslation() {
  const { lang, toggleLang } = useContext(LanguageContext)
  function t(keyPath) {
    const keys = keyPath.split('.')
    let value = translations[lang]
    for (const key of keys) {
      if (value == null) return keyPath
      value = value[key]
    }
    return value ?? keyPath
  }
  return { t, lang, toggleLang }
}
