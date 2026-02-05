import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function ScientificDetails() {
  const features = [
    {
      title: "シアノバクテリアの特性",
      description: "35億年前から存在する地球最初の光合成生物",
      details: [
        "酸素を生成した最初の生物体",
        "極限環境でも生存可能な強靭な生命力",
        "CO₂を効率的に固定する特殊な代謝機構",
        "バイオマスとして利用可能な高タンパク質含有"
      ]
    },
    {
      title: "CO₂吸収メカニズム",
      description: "天然芝の700倍の吸収効率を実現",
      details: [
        "カルビン回路による効率的なCO₂固定",
        "炭素濃縮機構（CCM）による高濃度CO₂環境の創出",
        "24時間連続稼働による持続的な吸収",
        "1ヘクタールあたり年間約2,000トンのCO₂削減"
      ]
    },
    {
      title: "光合成効率の最大化",
      description: "特許取得済みの培養技術で効率を最適化",
      details: [
        "フィコシアニン色素による広範囲な光波長の利用",
        "低光量環境でも高効率を維持",
        "温度変化に対する高い適応性",
        "pH変動への耐性と安定性"
      ]
    },
    {
      title: "環境影響評価",
      description: "科学的検証に基づく環境改善効果",
      details: [
        "大気中CO₂濃度の実測可能な削減",
        "酸素生成による空気質の改善",
        "水質浄化作用による環境負荷軽減",
        "生態系への好影響と生物多様性の向上"
      ]
    }
  ]

  const specifications = [
    { label: "CO₂吸収効率", value: "700倍", unit: "vs 天然芝" },
    { label: "稼働時間", value: "24/7", unit: "365日連続" },
    { label: "生存可能pH", value: "6-11", unit: "pH範囲" },
    { label: "温度適応範囲", value: "5-45", unit: "°C" },
    { label: "光利用効率", value: "8-12", unit: "%" },
    { label: "バイオマス生産", value: "150", unit: "トン/ha/年" }
  ]

  return (
    <section id="scientific-details" className="py-32 bg-black/50">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-4">
            科学的メカニズム
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            35億年の進化が生み出した、地球最古にして最先端の環境技術。
            シアノバクテリアの驚異的な能力を最新の科学で解明し、実用化に成功しました。
          </p>
        </ScrollAnimationWrapper>

        {/* Technical Specifications Grid */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-emerald-400 mb-1">{spec.value}</div>
                <div className="text-xs text-gray-400 mb-1">{spec.unit}</div>
                <div className="text-xs text-gray-500">{spec.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Detailed Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimationWrapper key={index} animation="fadeInUp" delay={index * 0.1}>
              <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-400 text-sm">
                      <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Research Papers Link */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={0.4}>
          <div className="mt-12 text-center">
            <a href="#research" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              📊 研究論文・データを見る
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}