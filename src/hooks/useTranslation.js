import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext'
import translations from '../translations'

function traverse(obj, keyPath) {
  let value = obj
  for (const key of keyPath.split('.')) {
    if (value == null) return keyPath
    value = value[key]
  }
  return value ?? keyPath
}

export function useTranslation() {
  const { lang, toggleLang } = useContext(LanguageContext)
  const t = (keyPath) => traverse(translations[lang], keyPath)
  const te = (keyPath) => traverse(translations.en, keyPath)
  return { t, te, lang, toggleLang }
}
