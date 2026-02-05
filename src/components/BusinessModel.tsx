import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function BusinessModel() {
  const revenueStreams = [
    {
      title: "カーボンクレジット販売",
      percentage: "35%",
      description: "CO₂削減量に応じたクレジットの販売",
      details: "年間2,000トン/haのCO₂削減実績をクレジット化"
    },
    {
      title: "システム導入・運用",
      percentage: "30%",
      description: "培養システムの設計・施工・メンテナンス",
      details: "初期投資回収期間：平均3-5年"
    },
    {
      title: "バイオマス製品販売",
      percentage: "20%",
      description: "高タンパク飼料・肥料・健康食品原料",
      details: "年間150トン/haの高付加価値バイオマス生産"
    },
    {
      title: "ライセンス・特許料",
      percentage: "15%",
      description: "技術ライセンス供与による収益",
      details: "グローバル展開による継続的なロイヤリティ"
    }
  ]

  const roi = [
    { period: "1年目", value: "-20%", description: "初期投資期間" },
    { period: "2年目", value: "15%", description: "運用最適化" },
    { period: "3年目", value: "45%", description: "黒字転換" },
    { period: "4年目", value: "85%", description: "投資回収" },
    { period: "5年目", value: "140%", description: "利益拡大期" }
  ]

  const marketSize = [
    { market: "カーボンクレジット市場", size: "2,500億ドル", growth: "+23%/年" },
    { market: "バイオマス市場", size: "1,200億ドル", growth: "+8%/年" },
    { market: "環境技術市場", size: "3,800億ドル", growth: "+15%/年" },
    { market: "サステナブル農業", size: "800億ドル", growth: "+12%/年" }
  ]

  return (
    <section id="business-model" className="py-20 bg-gradient-to-b from-black to-emerald-900/10">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-4">
            ビジネスモデル
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            環境価値と経済価値を両立する革新的なビジネスモデル。
            複数の収益源により、安定的かつ持続可能な成長を実現します。
          </p>
        </ScrollAnimationWrapper>

        {/* Revenue Streams */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">収益構造</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {revenueStreams.map((stream, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stream.percentage}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{stream.title}</h4>
                  <p className="text-sm text-gray-400 mb-3">{stream.description}</p>
                  <p className="text-xs text-gray-500">{stream.details}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* ROI Timeline */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={0.3}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">投資収益率（ROI）推移</h3>
            <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-8">
              <div className="flex flex-wrap justify-between items-end mb-4" style={{ minHeight: '200px' }}>
                {roi.map((item, index) => (
                  <div key={index} className="flex-1 min-w-[100px] text-center px-2">
                    <div
                      className={`mb-2 flex items-end justify-center ${
                        parseFloat(item.value) < 0 ? 'text-red-400' : 'text-emerald-400'
                      }`}
                      style={{ height: '150px' }}
                    >
                      <div
                        className={`w-full max-w-[60px] ${
                          parseFloat(item.value) < 0 ? 'bg-red-500/30' : 'bg-emerald-500/30'
                        } rounded-t`}
                        style={{
                          height: `${Math.abs(parseFloat(item.value)) * 1}px`,
                          marginBottom: parseFloat(item.value) < 0 ? '0' : 'auto',
                          marginTop: parseFloat(item.value) < 0 ? 'auto' : '0'
                        }}
                      ></div>
                    </div>
                    <div className="text-lg font-bold text-white">{item.value}</div>
                    <div className="text-sm text-gray-400">{item.period}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Market Size */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={0.4}>
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">対象市場規模</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketSize.map((market, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-lg p-4 text-center">
                  <h4 className="text-sm text-gray-400 mb-2">{market.market}</h4>
                  <div className="text-2xl font-bold text-emerald-400 mb-1">{market.size}</div>
                  <div className="text-sm text-emerald-300">成長率: {market.growth}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={0.5}>
          <div className="mt-12 text-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mr-4">
              💼 投資家向け資料
            </button>
            <button className="border border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              📊 詳細な財務モデル
            </button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}