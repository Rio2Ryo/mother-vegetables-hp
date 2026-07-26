'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function TeamMembers() {
  const { t } = useLanguage()
  const teamMembers = [
    {
      name: t({ JP: "エロール・ペレラ（Errol Perera）", EN: "Errol Perera" }),
      title: t({
        JP: "Revoganix株式会社 代表取締役 / ASEAN持続可能農業アドバイザー",
        EN: "CEO, Revoganix Inc. / ASEAN Sustainable Agriculture Advisor"
      }),
      description: t({
        JP: "持続可能農業、水産養殖、微生物学分野における35年以上の専門知識を有するペレラ氏は、ASEAN事務局のチーフコンサルタントおよびスリランカ水産大臣の公式アドバイザーを歴任しています。アジア全域における有機農業の発展と革新的水産養殖システムに及ぶ広範囲な経験により、貴重な地域専門知識と政府関係を提供しています。",
        EN: "With over 35 years of expertise in sustainable agriculture, aquaculture, and microbiology, Mr. Perera has served as Chief Consultant to the ASEAN Secretariat and Official Advisor to Sri Lanka's Minister of Fisheries. His extensive experience in organic farming development and innovative aquaculture systems across Asia provides valuable regional expertise and government relationships."
      }),
      image: "/errol-perera-new-DFc7csDu.jpeg",
      companyColor: "text-green-400"
    }
  ]

  return (
    <section id="team" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
        
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t({ JP: 'コアメンバー', EN: 'Core Member' })}
          </h2>
        </div>

        {/* Team Card */}
        <div className="grid grid-cols-1 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500/30 bg-gray-700 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="max-w-2xl text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className={`font-semibold mb-4 ${member.companyColor}`}>
                    {member.title}
                  </p>
                  <p className="text-gray-300 text-sm leading-[1.9]">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
