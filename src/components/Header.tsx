'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-green-500/20" style={{ zIndex: 1100 }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-uCgt3dQ.png"
              alt="MOTHER VEGETABLE"
              width={100}
              height={100}
            />
          </div>

          <nav className="flex items-center">
            <button
              onClick={() => setLanguage(language === 'EN' ? 'JP' : 'EN')}
              className="px-4 py-2 text-sm text-white border border-white rounded-md"
            >
              {language === 'JP' ? '日' : 'EN'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
