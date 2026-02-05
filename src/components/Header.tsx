'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    if (language === 'JP') {
      link.href = '/wh_en.pdf'
      link.download = 'MOTHER_VEGETABLES_Whitepaper_EN.pdf'
    } else {
      link.href = '/wh_en.pdf'
      link.download = 'MOTHER_VEGETABLES_Whitepaper_EN.pdf'
    }
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleMenuClick = (sectionId: string) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 300)
  }

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

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => scrollToSection('food-function')}
              className="px-3 md:px-4 py-2 text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300"
            >
              Food
            </button>
            <button
              onClick={() => scrollToSection('cosmetic-function')}
              className="px-3 md:px-4 py-2 text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300"
            >
              Cosmetic
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="px-3 md:px-4 py-2 text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300"
            >
              Products
            </button>

            <button
              onClick={() => setLanguage(language === 'EN' ? 'JP' : 'EN')}
              className="px-4 py-2 text-sm text-white border border-white rounded-md"
            >
              {language === 'JP' ? '日' : 'EN'}
            </button>
          </nav>

          {/* Mobile: Language Button + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'EN' ? 'JP' : 'EN')}
              className="px-3 py-1.5 text-sm text-white border border-white rounded-md"
            >
              {language === 'JP' ? '日' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#4ade80] hover:text-green-600 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Background overlay - click to close */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Slide-in menu from right */}
        <div
          className={`absolute top-0 right-0 w-[80%] border-l-2 border-[#4ade80] transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ height: '100vh' }}
        >
          {/* Black background layer */}
          <div className="absolute inset-0 bg-black" style={{ backgroundColor: '#000', height: '100vh' }} />
          {/* Content */}
          <div className="relative z-10" style={{ height: '100vh' }}>
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#4ade80] hover:text-green-600 transition-all duration-300"
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Menu items */}
            <nav className="px-4 pt-8">
              <button
                onClick={() => handleMenuClick('food-function')}
                className="block w-full text-left px-4 py-4 text-white hover:text-gray-300 transition-all duration-300 border-b border-gray-700"
              >
                Food
              </button>
              <button
                onClick={() => handleMenuClick('cosmetic-function')}
                className="block w-full text-left px-4 py-4 text-white hover:text-gray-300 transition-all duration-300 border-b border-gray-700"
              >
                Cosmetic
              </button>
              <button
                onClick={() => handleMenuClick('products')}
                className="block w-full text-left px-4 py-4 text-white hover:text-gray-300 transition-all duration-300 border-b border-gray-700"
              >
                Products
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

