'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function GroupCompanies() {
  const { t } = useLanguage()

  const countries = [
    {
      name: t({ JP: '日本', EN: 'Japan' }),
      companies: [
        'MV Holdings Co., Ltd.',
        'Mother Vegetable Co., Ltd.',
        'Mother Vegetable Lab Co., Ltd.',
        'National Sister Fisheries Promotion Council Co., Ltd.',
      ],
    },
    {
      name: t({ JP: 'マレーシア', EN: 'Malaysia' }),
      companies: [
        'Mother Vegetable Partners Sdn. Bhd.',
        'Revoganix Sdn. Bhd.',
      ],
    },
    {
      name: t({ JP: 'シンガポール', EN: 'Singapore' }),
      companies: ['Mother Vegetable Pte. Ltd.'],
    },
    {
      name: t({ JP: 'アメリカ', EN: 'USA' }),
      companies: ['FSA Inc.'],
    },
  ]

  return (
    <section id="partners" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t({ JP: 'マザーベジタブルグループ企業', EN: 'Mother Vegetable Group Companies' })}
          </h2>
        </div>

        <div className="mb-16">
          <h3 className="text-sm md:text-xl font-bold text-white text-center mb-8">
            {t({
              JP: '日本・マレーシア・シンガポール・米国を拠点に事業を展開するグローバル企業グループ。',
              EN: 'A global corporate group operating across Japan, Malaysia, Singapore, and the United States.',
            })}
          </h3>

          <div className="max-w-4xl mx-auto bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col gap-10">
              {countries.map((country) => (
                <div key={country.name}>
                  <h5 className="text-lg md:text-xl font-bold text-white mb-4">{country.name}</h5>
                  <ul className="space-y-2 ml-6">
                    {country.companies.map((company) => (
                      <li key={company} className="text-gray-300 text-sm md:text-base">
                        {company}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
