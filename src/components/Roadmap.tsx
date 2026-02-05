import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Roadmap() {
  const roadmapData = [
    {
      year: "2024",
      quarter: "Q1-Q2",
      status: "completed",
      milestones: [
        "技術特許取得完了",
        "マレーシア実証プラント稼働",
        "初期パートナーシップ締結",
        "シードファンディング完了"
      ]
    },
    {
      year: "2024",
      quarter: "Q3-Q4",
      status: "in-progress",
      milestones: [
        "日本市場本格参入",
        "量産体制確立",
        "カーボンクレジット認証取得",
        "Series A資金調達"
      ]
    },
    {
      year: "2025",
      quarter: "Q1-Q2",
      status: "upcoming",
      milestones: [
        "東南アジア5カ国展開",
        "年間生産能力10倍拡大",
        "IoTモニタリングシステム導入",
        "産業別ソリューション展開"
      ]
    },
    {
      year: "2025",
      quarter: "Q3-Q4",
      status: "upcoming",
      milestones: [
        "欧州市場進出",
        "グローバルサプライチェーン構築",
        "次世代技術開発",
        "IPO準備開始"
      ]
    },
    {
      year: "2026",
      quarter: "全期",
      status: "future",
      milestones: [
        "グローバル100拠点達成",
        "年間CO₂削減1,000万トン",
        "バイオマス事業本格化",
        "株式上場（目標）"
      ]
    },
    {
      year: "2030",
      quarter: "目標",
      status: "future",
      milestones: [
        "世界1,000拠点展開",
        "年間CO₂削減1億トン",
        "カーボンニュートラル社会実現への貢献",
        "時価総額1兆円企業"
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500 border-emerald-500'
      case 'in-progress':
        return 'bg-orange-500 border-orange-500 animate-pulse'
      case 'upcoming':
        return 'bg-blue-500 border-blue-500'
      default:
        return 'bg-gray-600 border-gray-600'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return '完了'
      case 'in-progress':
        return '進行中'
      case 'upcoming':
        return '予定'
      default:
        return '将来'
    }
  }

  return (
    <section id="roadmap" className="py-32 bg-gradient-to-b from-emerald-900/10 to-black">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-4">
            ロードマップ
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            2030年までに世界1,000拠点展開、年間CO₂削減1億トンを目指す。
            確実な実行と成長により、地球環境改善のリーディングカンパニーへ。
          </p>
        </ScrollAnimationWrapper>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-blue-500 to-gray-600"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <ScrollAnimationWrapper
                key={index}
                animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={index * 0.1}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`inline-block ${index % 2 === 0 ? 'mr-0' : 'ml-0'}`}>
                      <div className="bg-black/60 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="text-2xl font-bold text-emerald-400">{item.year}</span>
                            <span className="text-gray-400 ml-2">{item.quarter}</span>
                          </div>
                          <span className={`text-xs px-3 py-1 rounded-full text-white ${
                            item.status === 'completed' ? 'bg-emerald-500' :
                            item.status === 'in-progress' ? 'bg-orange-500' :
                            item.status === 'upcoming' ? 'bg-blue-500' :
                            'bg-gray-600'
                          }`}>
                            {getStatusLabel(item.status)}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {item.milestones.map((milestone, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {milestone}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className={`w-6 h-6 ${getStatusColor(item.status)} rounded-full border-4`}></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={0.4}>
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-emerald-400 mb-2">2030年</div>
              <div className="text-gray-300">目標達成年</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1,000拠点</div>
              <div className="text-gray-300">グローバル展開目標</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1億トン</div>
              <div className="text-gray-300">年間CO₂削減目標</div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}