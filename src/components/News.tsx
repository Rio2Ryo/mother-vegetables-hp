'use client'

import { useLanguage } from '@/contexts/LanguageContext'
export default function News() {
  const { t } = useLanguage()
  const today = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  return (
    <div className="w-full bg-black pt-6 pb-14 lg:pb-20">
      <div className="text-center mb-12">
        <span className="inline-block bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-2 rounded-full text-sm">
          {t({ JP: '4. ニュース', EN: '4. News' })}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t({ JP: '最新ニュース一覧', EN: 'Latest News List' })}
          </h2>
      <div className="w-[95%] lg:max-w-[800px] mx-auto px-4">
        <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6 lg:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex-1">
              <p className="text-green-300 text-xs md:text-sm mb-2">{today}</p>
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                {t({ JP: 'MVTがLBankに上場決定', EN: 'MVT Scheduled to List on LBank' })}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {t({
                  JP: 'MOTHER VEGETABLE Token (MVT) が 2025年11月11日 11:00 UTC に暗号資産取引所 LBank へ上場します。',
                  EN: 'MOTHER VEGETABLE Token (MVT) will list on the cryptocurrency exchange LBank at 11:00 UTC on November 11, 2025.'
                })}
              </p>
            </div>
            <div className="md:w-auto">
              <a
                href="https://x.com/LBankUpdates/status/1987472859019841710"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-sm md:text-base bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md hover:from-green-600 hover:to-emerald-600 transition-transform duration-200 hover:-translate-y-0.5"
              >
                {t({ JP: '詳細を見る', EN: 'Learn More' })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
