import Image from 'next/image'

export default function ProjectDetails() {
  return (
    <section id="project-details" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-500/20 border border-purple-500/50 text-purple-400 px-4 py-2 rounded-full text-sm mb-12">
            4. プロジェクト詳細
          </span>
        </div>

        {/* Introduction */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Introduction
          </h2>

          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              MOTHER VEGETABLE PROJECTの主幹事であるAlgae International Berhad（AIB）社は２００７年から地球規初の植物である藻類の研究を日本でスタートし、現在世界中に８カ国、７０拠点に展開しています。AIB社における藻類の研究はゲノム解析まで完了し培養のメカニズムを確立させ、培養元となる藻類を「マザーベジタブル」と名付けました。
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              豊かに生きられる持続可能な社会を築くためには、限りある化石資源への過度な依存から脱却することが必要です。その鍵として注目されているのが、光合成という営みを通じて太陽エネルギーを効率的に蓄えて多様な有機物を生み出す藻類です。藻類は、そのまま食品や飼料となるだけでなく、抽出した原料から医薬品、燃料、プラスチック、繊維など様々な分野への応用が可能です。さらに、砂漠や荒地のような農業利用が難しい土地でも、太陽光と少量の水で培養でき、陸上植物と比較して物質生産効率が圧倒的に高い特性を持っています。
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              2025年夏日本にて開催されている「2025年日本国際博覧会」通称「大阪・関西万博」の「日本館」では藻類の可能性について展示されており、今後世界中で注目される分野です。
            </p>

            {/* Expo 2025 Images */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/expo2025.png"
                    alt="OSAKA, KANSAI, JAPAN EXPO 2025"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/algae-kitty.jpg"
                    alt="Hello Kitty × Algae"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}