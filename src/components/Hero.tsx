'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const sdgGoals = [
  { number: '2', title: 'Zero Hunger', color: '#DDA63A', icon: '〰' },
  { number: '3', title: 'Good Health and\nWell-being', color: '#4C9F38', icon: '⌁' },
  { number: '9', title: 'Industry,\nInnovation, and\nInfrastructure', color: '#FD6925', icon: '◇' },
  { number: '11', title: 'Sustainable Cities\nand Communities', color: '#FD9D24', icon: '▥' },
  { number: '13', title: 'Climate Action', color: '#3F7E44', icon: '◉' },
  { number: '14', title: 'Life Below Water', color: '#0A97D9', icon: '≈' },
]

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Regeneration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 transition-all duration-1500 pt-32 md:pt-40 lg:pt-48 pb-12">
        {/* Title Section - Single Component */}
        <div className="mb-12">

          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/mazavege_logo_midori.png"
              alt="Mother Vegetable Logo"
              width={140}
              height={140}
              className="mx-auto w-12 h-12 sm:w-32 sm:h-32 md:w-32 md:h-32"
              priority
            />
          </div>

          <div
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(34, 197, 94, 0.2))',
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              <div>MOTHER VEGETABLE PROJECT</div>
            </h1>
          </div>

          <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80"></div>

        </div>


        {/* Description - Not in Box */}
        <div className="max-w-4xl mx-auto mb-2 mt-8 md:mt-16 px-4">
          <div className="space-y-3">
            <p className="text-xs md:text-xl text-[#4ade80] leading-relaxed">
              {t({
                JP: '35億年前の地球のはじまりの植物',
                EN: 'The vegetable from 3.5 billion years ago'
              })}
            </p>
            <p className="text-xs md:text-xl text-[#4ade80] leading-relaxed">
              {t({
                JP: '「マザーベジタブル」',
                EN: '"Mother Vegetable"'
              })}
            </p>
            <p className="text-xs md:text-xl text-[#4ade80] leading-relaxed">
              {t({
                JP: '地球が生み出した生命力を、あなたに。',
                EN: 'Earth’s life force, for you.'
              })}
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <div className="mb-5 flex items-center justify-center gap-3 text-[#4ade80]">
            <span className="text-sm">❧</span>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.38em]">
              Growing a Sustainable Future
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
            {sdgGoals.map((goal) => (
              <div
                key={goal.number}
                className="flex min-h-[132px] flex-col items-center justify-between rounded-lg border border-white/20 bg-black/20 px-3 py-4 backdrop-blur-sm"
              >
                <div
                  className="flex h-10 w-10 flex-col items-center justify-center rounded-sm text-white shadow-lg"
                  style={{ backgroundColor: goal.color }}
                >
                  <span className="text-[9px] font-bold leading-none">{goal.number}</span>
                  <span className="text-base leading-none">{goal.icon}</span>
                </div>
                <p className="whitespace-pre-line text-center text-xs font-medium leading-tight text-white">
                  {goal.title}
                </p>
                <p className="text-[9px] uppercase tracking-[0.28em] text-white/45">SDG {goal.number}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
