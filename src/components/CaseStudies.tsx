import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "マレーシア・パハン州農業プロジェクト",
      category: "農業",
      location: "マレーシア",
      scale: "500ヘクタール",
      co2Reduction: "年間1,000,000トン",
      roi: "投資回収3.5年",
      description: "大規模農業施設への導入により、農作物の生産性が40%向上。同時にカーボンニュートラルを達成。",
      image: "/Negeri-dJn5D2--.jpeg",
      results: [
        "CO₂削減量：1,000,000トン/年",
        "農作物収穫量：40%増加",
        "水使用量：60%削減",
        "雇用創出：200名以上"
      ]
    },
    {
      title: "九州電工エネルギープラント",
      category: "エネルギー",
      location: "日本",
      scale: "10MW施設",
      co2Reduction: "年間50,000トン",
      roi: "投資回収4年",
      description: "発電所の排出CO₂を直接吸収し、バイオマスエネルギーとして再利用する循環システムを構築。",
      image: "/Kyushudenko.jpeg",
      results: [
        "CO₂削減量：50,000トン/年",
        "エネルギー効率：25%向上",
        "運用コスト：30%削減",
        "特許取得：3件"
      ]
    },
    {
      title: "シンガポール都市緑化プロジェクト",
      category: "都市開発",
      location: "シンガポール",
      scale: "都市全域",
      co2Reduction: "年間200,000トン",
      roi: "投資回収5年",
      description: "都市部のビル屋上と壁面に培養システムを設置。都市のヒートアイランド現象を緩和。",
      image: "/Temasek-2lNqkuvm.jpeg",
      results: [
        "CO₂削減量：200,000トン/年",
        "気温低下：平均2.5°C",
        "空気質改善：PM2.5 40%減",
        "緑化面積：100,000㎡"
      ]
    }
  ]

  const achievements = [
    { label: "導入実績", value: "150+", unit: "プロジェクト" },
    { label: "累計CO₂削減", value: "500万", unit: "トン" },
    { label: "導入国", value: "12", unit: "カ国" },
    { label: "顧客満足度", value: "98", unit: "%" }
  ]

  return (
    <section id="case-studies" className="py-32 bg-black/50">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-4">
            導入事例・実績
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            世界各地で実証された確かな効果。
            様々な産業分野での成功事例が、技術の確実性と収益性を証明しています。
          </p>
        </ScrollAnimationWrapper>

        {/* Achievement Stats */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {achievements.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.unit}</div>
                <div className="text-xs text-gray-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <ScrollAnimationWrapper key={index} animation="fadeInUp" delay={index * 0.2}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative h-[300px] rounded-xl overflow-hidden border border-emerald-500/20">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-emerald-500 text-white text-xs px-3 py-1 rounded-full mb-2">
                        {study.category}
                      </span>
                      <div className="flex items-center text-white text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {study.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500">規模</div>
                      <div className="text-white font-semibold">{study.scale}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">CO₂削減</div>
                      <div className="text-emerald-400 font-semibold">{study.co2Reduction}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">ROI</div>
                      <div className="text-white font-semibold">{study.roi}</div>
                    </div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">成果</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-gray-400 text-sm">
                          <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={0.4}>
          <div className="mt-16 text-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              📑 全ての導入事例を見る
            </button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}