export default function TechnicalDetails() {
  return (
    <section id="technical-details" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 px-4 py-2 rounded-full text-sm mb-12">
            4. 技術詳細
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            革新的なMother Vegetable培養技術
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            35億年前の地球最初の生命体「マザーベジタブル」を現代技術で再現し、
            地球規模の環境問題解決に取り組みます。
          </p>
        </div>

        {/* Technical Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* CO2 Absorption */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-400 text-center mb-8">CO₂吸収技術</h3>
            <p className="text-gray-300 mb-4">天然芝の700倍の効率でCO₂を吸収し、酸素を生成します。</p>
            <div className="text-3xl font-bold text-green-400">700×</div>
            <div className="text-sm text-gray-400">vs 天然芝</div>
          </div>

          {/* 24/7 Operation */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-8">連続稼働システム</h3>
            <p className="text-gray-300 mb-4">太陽光発電と蓄電システムにより24時間365日稼働します。</p>
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-gray-400">365日間</div>
          </div>

          {/* Multi-Industry */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-400 text-center mb-8">多産業展開</h3>
            <p className="text-gray-300 mb-4">8つの産業分野でグローバルに展開可能です。</p>
            <div className="text-3xl font-bold text-purple-400">8</div>
            <div className="text-sm text-gray-400">産業分野</div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">技術仕様</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">培養システム</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  気候制御透明建物での多層培養
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  藻類と野菜の統合生産システム
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  均一化生産による品質保証
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  特許技術【WO2008105649A1】
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">エネルギーシステム</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  太陽光発電システム完備
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  蓄電システムによる安定供給
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  自社エネルギーでの完全自立
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  カーボンニュートラル実現
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <h4 className="text-lg font-bold text-cyan-400 mb-3">実証済みの効果</h4>
            <p className="text-gray-300">
              Mother Vegetable培養技術を用いた均一化生産システムは、CO₂の安定的かつ効率的な吸収を実証済みであり、
              技術の商業化に向けた確固たるエビデンスを有しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

