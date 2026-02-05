'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'JP' | 'EN'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (translations: { JP: string; EN: string }) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN')

  const t = (translations: { JP: string; EN: string }) => {
    return translations[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}