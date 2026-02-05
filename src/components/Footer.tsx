'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()

  const downloadWhitepaper = () => {
    const pdfUrl = language === 'JP' ? '/wh_ja.pdf' : '/wh_en.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = language === 'JP' ? 'Whitepaper_JP.pdf' : 'Whitepaper_EN.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <footer className="bg-black">
      {/* Main Footer Content 
      <div className="container mx-auto px-4 py-12">
        <div className="w-full md:w-full h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-0 opacity-80 mb-14"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-green-400 font-semibold text-base md:text-lg mb-3 md:mb-4">Japan Office</h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              {t({
                JP: '東京都中央区日本橋室町1-2-6-7F',
                EN: 'Nihonbashi Daiei Bldg 7F, 1-2-6 Nihonbashi-Muromachi, Chuo-ku, Tokyo, Japan'
              })}
            </p>
          </div>

          
          <div className="text-center md:text-left">
            <h3 className="text-green-400 font-semibold text-base md:text-lg mb-3 md:mb-4">Malaysia Office</h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              IB Tower, Level 33, 8, Lrg Binjai, Kuala Lumpur, 50450 Kuala Lumpur, Malaysia
            </p>
          </div>

          
          <div className="text-center md:text-left">
            <h3 className="text-green-400 font-semibold text-base md:text-lg mb-3 md:mb-4">Singapore Office</h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Level 39, Marina Bay Financial Centre, 10 Marina Blvd, Tower 2, Singapore
            </p>
          </div>

         
          <div className="text-center md:text-left">
            <h3 className="text-green-400 font-semibold text-base md:text-lg mb-3 md:mb-4">Hong Kong Office</h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Tower I, Grand Century Place, 193 Prince Edward Road West, Hong Kong SAR
            </p>
          </div>
        </div>
        <div className="w-full md:w-full h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-14 opacity-80 mb-6"></div>
      </div>*/}

      {/* Countries Section - Small Version */}
      <div className="container mx-auto px-4 pt-4 pb-2 mb-0 border-t border-green-400">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <Image
            src="/mazavege_logo_midori.png"
            alt="Mother Vegetable Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>

        {/* Title */}
        <h3 className="text-[clamp(8px,2vw,10px)] md:text-sm font-bold text-[#25C760] text-center mb-3">Mother Vegetable Group</h3>

        {/* Official Page Link */}
        <a
          href="https://www.mothervegetable.org/"
          onClick={(e) => {
            e.preventDefault()
            const homeSection = document.getElementById('home')
            const targetPosition = homeSection ? homeSection.offsetTop : 0
            const startPosition = window.pageYOffset
            const distance = targetPosition - startPosition
            const duration = 1000
            let start: number | null = null

            const animation = (currentTime: number) => {
              if (start === null) start = currentTime
              const timeElapsed = currentTime - start
              const progress = Math.min(timeElapsed / duration, 1)
              const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2
              window.scrollTo(0, startPosition + distance * ease)
              if (timeElapsed < duration) {
                requestAnimationFrame(animation)
              }
            }
            requestAnimationFrame(animation)
          }}
          className="block text-[clamp(8px,2vw,10px)] md:text-sm font-bold text-[#25C760] text-center mb-3 cursor-pointer"
        >
          Official Page
        </a>

        {/* Countries Grid - 3 rows on mobile, one line on desktop */}
        <div className="grid grid-cols-6 md:hidden gap-x-1 gap-y-1 mx-auto text-center max-w-5xl font-bold">
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Japan</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">South Korea</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Hong Kong</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Malaysia</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Singapore</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Indonesia</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Thailand</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Mongolia</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Australia</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Germany</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Italy</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">France</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Switzerland</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">United Kingdom</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Canada</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">USA</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Brazil</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Peru</div>
        </div>
        {/* Desktop: One line */}
        <div className="hidden md:flex md:flex-wrap md:justify-center gap-x-3 gap-y-1 mx-auto text-center max-w-5xl font-bold">
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Japan</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">South Korea</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Hong Kong</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Malaysia</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Singapore</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Indonesia</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Thailand</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Mongolia</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Australia</div>
          <div className="basis-full w-0 h-0"></div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Germany</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Italy</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">France</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Switzerland</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">United Kingdom</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Canada</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">USA</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Brazil</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Peru</div>
        </div>
      </div>

      {/* Legal Links & Copyright */}
      <div className="">
        <div className="container mx-auto px-4 pt-2 pb-6">
          <div className="text-center space-y-4">
           
            <div className="text-[#25C760] text-xs md:text-sm whitespace-pre-line">
              {t({
                JP: '© 2025 MOTHER VEGETABLE PROJECT.\nAll rights reserved.',
                EN: '© 2025 MOTHER VEGETABLE PROJECT.\nAll rights reserved.'
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}