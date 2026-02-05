'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function IndustryApproach() {
  const { language } = useLanguage()

  const nutrients = language === 'JP' ? [
    { name: 'ミネラル', count: '9種類' },
    { name: 'ビタミン', count: '10種類' },
    { name: 'アミノ酸', count: '18種類' },
    { name: '脂肪酸', count: '3種類' },
    { name: 'その他機能性成分', nameMobile: ['その他機能性', '成分'], count: '9種類' },
  ] : [
    { name: 'Essential Fatty Acids', nameMobile: ['Essential Fatty', 'Acids'], count: '9 types' },
    { name: 'Amino Acids', count: '10 types' },
    { name: 'Vital Vitamins', count: '18 types' },
    { name: 'Key Minerals For Balance', nameMobile: ['Key Minerals For', 'Balance'], count: '3 types' },
    { name: 'Other Functional Ingredients', nameMobile: ['Other Functional', 'Ingredients'], count: '9 types' },
  ]

  const nutrientsList = language === 'JP'
    ? 'カリウム・ナトリウム・マグネシウム・カルシウム・リン・鉄・マンガン・亜鉛・銅・ビタミンA・B1・B2・B3・B5・B6・B9・C・E・K・トリプトファン・スレオニン・ロイシン・イソロイシン・リシン・メチオニン・フェニルアラニン・バリン・ヒスチジン・アルギニン・システイン・チロシン・アラニン・アスパラギン酸・グルタミン酸・セリン・グリシン・プロリン・飽和脂肪酸・オメガ3脂肪酸・オメガ6脂肪酸・C-フィコシアニン・クロロフィルa・総カロテノイド・核酸・スピルラン・グリコーゲン様多糖・β-グルカン様多糖・セルロース'
    : 'Potassium, sodium, magnesium, calcium, phosphorus, iron, manganese, zinc, copper, Vitamin A, B1, B2, B3, B5, B6, B9, C, E, K, tryptophan, threonine, leucine, isoleucine, lysine, methionine, phenylalanine, valine, histidine, arginine, cystine, tyrosine, alanine, aspartic acid, glutamic acid, serine, glycine, proline, saturated fatty acids, omega-3 fatty acids, omega-6 fatty acids, C-phycocyanin, chlorophyll a, total carotenoids, nucleic acids, spirulan, glycogen-like polysaccharides, β-glucan-like polysaccharides, cellulose.'

  const categories = language === 'JP' ? [
    {
      title: 'チルドレン',
      image: '/children.png',
      benefits: ['集中力向上', '学習能力向上', '骨の成長サポート', '免疫力向上', '食欲向上'],
    },
    {
      title: 'アダルト',
      image: '/alduts.png',
      benefits: ['便秘・消化不良改善', '睡眠の質向上', '疲れの軽減', '細胞老化・炎症の抑制', 'ダイエット'],
    },
    {
      title: 'シニア',
      image: '/seniors.png',
      benefits: ['睡眠の質向上', '血液循環の改善', '食欲向上・栄養補給', '内臓機能のサポート'],
    },
    {
      title: 'アスリート',
      image: '/athletes.png',
      benefits: ['添加物のデトックス', '筋肉疲労回復・持続力向上', '効率的な栄養補給', '炎症回復・抑制', 'トレーニング効果の向上'],
    },
    {
      title: 'ドッグ',
      image: '/dog.png',
      benefits: ['涙やけの改善', '糞尿のにおい改善', '食欲増強', '腸内環境の改善', '深い睡眠', '体臭改善'],
    },
    {
      title: 'キャット',
      image: '/cat.png',
      benefits: ['涙やけの改善', '糞尿のにおい改善', '食欲増強', '腸内環境の改善', '深い睡眠', '体臭改善'],
    },
  ] : [
    {
      title: 'Children',
      image: '/children.png',
      benefits: ['Improves concentration', 'Enhances learning ability', 'Supports bone growth', 'Boosts immunity', 'Increases appetite'],
    },
    {
      title: 'Adults',
      image: '/alduts.png',
      benefits: ['Improves constipation and digestion', 'Enhances sleep quality', 'Reduces fatigue', 'Suppresses cellular aging and inflammation', 'Supports dieting'],
    },
    {
      title: 'Seniors',
      image: '/seniors.png',
      benefits: ['Improves sleep quality and blood circulation', 'Boosts appetite and nutrient intake', 'Supports internal organ function', 'Promotes bone density'],
    },
    {
      title: 'Athletes',
      image: '/athletes.png',
      benefits: ['Detoxifies additives', 'Aids muscle recovery and improves endurance', 'Provides efficient nutrient absorption', 'Reduces inflammation and supports recovery', 'Enhances training effectiveness'],
    },
    {
      title: 'Dog',
      image: '/dog.png',
      benefits: ['Reduces tear stains', 'Improves waste odor', 'Increases appetite', 'Supports digestive health', 'Promotes deep sleep', 'Reduces body odor'],
    },
    {
      title: 'Cat',
      image: '/cat.png',
      benefits: ['Reduces tear stains', 'Improves waste odor', 'Increases appetite', 'Supports digestive health', 'Promotes deep sleep', 'Reduces body odor'],
    },
  ]

  return (
    <section id="food-function" className="py-5 md:py-5 bg-black">
      <div
        className="mx-auto px-4 md:px-8 py-8 md:py-12 w-[97%] md:w-[90%]"
        style={{
          maxWidth: '1500px',
          border: '2px solid #25c760',
          borderRadius: '8px',
        }}
      >
        {/* Title */}
        <h2
          className="text-xl md:text-5xl font-bold text-center mb-2 md:mb-4"
          style={{ color: '#25c760' }}
        >
          Food Function
        </h2>

        {/* Subtitle */}
        <p className="text-center text-white text-base md:text-xl mb-4">
          Achieve / Forever
        </p>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-8 opacity-80"></div>

        {/* TORIKOMU / MAZEKOMU */}
        <p className="text-center text-red-600 text-xs md:text-sm mb-2 font-semibold">
          TORIKOMU / MAZEKOMU
        </p>

        {/* Food Video */}
        <div className="flex justify-center">
          <video
            src="/food_video.mov"
            autoPlay
            loop
            muted
            playsInline
            className="h-24 md:h-24 w-auto object-contain rounded-lg"
          />
        </div>

        {/* Bracket Image */}
        <div className="flex justify-center mb-4 md:mb-6">
          <img
            src="/bracket_v2.png"
            alt="Bracket"
            className="w-full max-w-2xl object-contain"
          />
        </div>

        {/* Nutrient Section Container */}
        <div className="max-w-3xl mx-auto px-0 md:px-4">
          {/* Nutrient Circles */}
          <div className="flex justify-between items-center gap-1 md:gap-0 mb-8 md:mb-12">
            {nutrients.map((nutrient, index) => (
              <div
                key={index}
                className="w-[18%] aspect-square md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: '#4a9d7c' }}
              >
                {nutrient.nameMobile ? (
                  <>
                    {/* Mobile: 3 lines */}
                    <span className="text-white text-[5px] font-medium leading-tight md:hidden">
                      {nutrient.nameMobile[0]}
                    </span>
                    <span className="text-white text-[5px] font-medium leading-tight md:hidden">
                      {nutrient.nameMobile[1]}
                    </span>
                    <span className="text-white text-[5px] md:hidden">
                      {nutrient.count}
                    </span>
                    {/* Desktop: 2 lines */}
                    <span className="text-white text-base font-medium leading-tight hidden md:block">
                      {nutrient.name}
                    </span>
                    <span className="text-white text-base hidden md:block">
                      {nutrient.count}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-white text-[5px] md:text-base font-medium leading-tight">
                      {nutrient.name}
                    </span>
                    <span className="text-white text-[5px] md:text-base">
                      {nutrient.count}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* 48 Nutrients Title */}
          <h3
            className="text-lg md:text-3xl font-bold text-center mb-4 md:mb-6"
            style={{ color: '#25c760' }}
          >
            48 Nutrients
          </h3>

          {/* Nutrients List */}
          <p className="text-gray-300 text-[10px] md:text-base text-center leading-relaxed">
            {nutrientsList}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-16 px-0 md:px-12">
          {categories.map((category, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-6">
              {/* Silhouette Image */}
              <div className="flex-shrink-0 w-20 h-28 md:w-32 md:h-44">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(52%) saturate(405%) hue-rotate(93deg) brightness(95%) contrast(87%)' }}
                />
              </div>
              {/* Text Content */}
              <div className="flex-1">
                <h4
                  className="text-base md:text-2xl font-bold mb-1"
                  style={{ color: '#25c760' }}
                >
                  {category.title}
                </h4>
                <div className="w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent mb-3 md:mb-4"></div>
                <ul className="space-y-0.5 md:space-y-1">
                  {category.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="text-white text-xs md:text-base flex items-start"
                    >
                      <span className="mr-2 md:mr-3 text-white">●</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
