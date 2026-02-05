'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function IndustryApproach() {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)

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

  // プロンプトテンプレート（日本語/英語）- 表形式で見やすく
  const promptTemplate = language === 'JP'
    ? `以下の成分リストについて、一般的に知られている情報を中立的に整理してください。
**出力は見やすさ重視で、表（Markdown）で作成**してください。

【表の列】
| 成分名 | 期待される作用（要約） | エビデンス（A=強い/B=中程度/C=限定的） | 注意点 | 参考URL |

【注意】これは医療アドバイスではありません。詳細は専門家にご相談ください。

【成分リスト】
${nutrientsList.split('・').map(n => `- ${n}`).join('\n')}`
    : `Please organize neutral, general information about the following ingredient list.
**Output in a clear Markdown table format** for easy reading.

【Table Columns】
| Ingredient | Expected Effects (Summary) | Evidence (A=Strong/B=Moderate/C=Limited) | Cautions | Reference URL |

【Note】This is NOT medical advice. Please consult a professional for details.

【Ingredient List】
${nutrientsList.split('・').map(n => `- ${n}`).join('\n')}`

  // コピー機能
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptTemplate)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // AIサービスリンク（ロゴ付き - ローカル配置）
  const aiServices = [
    { name: 'ChatGPT', url: 'https://chat.openai.com/', logo: '/ai/chatgpt.svg' },
    { name: 'Gemini', url: 'https://gemini.google.com/', logo: '/ai/gemini.svg' },
    { name: 'Claude', url: 'https://claude.ai/', logo: '/ai/claude.svg' },
    { name: 'Grok', url: 'https://grok.com/', logo: '/ai/grok.svg' },
  ]

  // テキスト（日本語/英語）
  const texts = {
    effectsTitle: language === 'JP' ? '効果効能について' : 'About Effects & Benefits',
    effectsDescription1: language === 'JP'
      ? '我々Mother Vegetableグループは世界各地で活動を行っているため、効果効能に関する表現についても各国の法律・ガイドラインを遵守します。'
      : 'The Mother Vegetable Group operates worldwide, and we comply with the laws and guidelines of each country regarding the expression of effects and benefits.',
    effectsDescription2: language === 'JP'
      ? '私たちは地球と生命の未来基準を創る存在として、表現においても世界基準の責任を担うパイオニアであり続けます。'
      : 'As pioneers creating future standards for Earth and life, we continue to bear the responsibility of global standards in our expressions.',
    effectsDescription3: language === 'JP'
      ? 'そこで、Mother Vegetable Achieveについて成分を全てオープンにします。以下の「クリップボードにコピー」のボタンを押して内容をコピーし、ChatGPTやGeminiなどのAIに、この成分を飲むとどのようになるかについて各自お調べください。'
      : 'Therefore, we are fully disclosing all ingredients of Mother Vegetable Achieve. Please click the "Copy to Clipboard" button below, and use AI services like ChatGPT or Gemini to research what happens when you consume these ingredients.',
    featuresTitle: language === 'JP' ? '我々の特性について' : 'Our Characteristics',
    features: language === 'JP' ? [
      '植物や藻の始祖にあたるMother Vegetable由来の天然素材のみを使用',
      'Mother Vegetableは固い外核や細胞壁を持たない',
      '完全室内培養（Closed Bioreactor System）',
      '重金属・マイクロプラスチック汚染リスクを極限まで排除',
      '虫・鳥類・外来微生物などの混入が起こらない培養環境',
      '農薬・化学肥料 不使用',
      '食品添加物 不使用',
      '保存料・人工着色料・香料 不使用',
    ] : [
      'Uses only natural materials derived from Mother Vegetable, the ancestor of plants and algae',
      'Mother Vegetable has no hard outer shell or cell walls',
      'Complete indoor cultivation (Closed Bioreactor System)',
      'Minimizes heavy metal and microplastic contamination risks',
      'Cultivation environment free from insects, birds, and foreign microorganisms',
      'No pesticides or chemical fertilizers',
      'No food additives',
      'No preservatives, artificial colors, or fragrances',
    ],
    featuresNote: language === 'JP'
      ? '（腸内機能/睡眠/便/運動機能/二日酔い/疲労等についての効果は各自AIにてお調べください）'
      : '(Please use AI to research the effects on intestinal function, sleep, bowel movements, exercise performance, hangovers, fatigue, etc.)',
    copyButton: language === 'JP' ? '📋 クリップボードにコピー' : '📋 Copy to Clipboard',
    copiedMessage: language === 'JP' 
      ? '✅ コピーしました！次にAIを開いて貼り付けてください。' 
      : '✅ Copied! Open an AI service and paste.',
  }

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

          {/* Nutrients Grid - 成分表 */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
            {nutrientsList.split('・').map((nutrient, index) => (
              <div
                key={index}
                className="border border-green-500/40 rounded-lg px-1.5 py-2 md:px-3 md:py-2.5 text-center bg-green-900/20 hover:bg-green-900/40 transition-colors min-h-[40px] md:min-h-[50px] flex items-center justify-center"
              >
                <span className="text-gray-200 text-[8px] md:text-xs leading-tight break-words">
                  {nutrient.trim()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Effects & Benefits Section */}
        <div className="max-w-4xl mx-auto px-4 md:px-4 mt-12 md:mt-16">
          {/* Effects Title with Separator */}
          <div className="text-center mb-6 md:mb-8">
            <p className="text-gray-500 text-xs md:text-sm mb-2">━━━━━━━━━━</p>
            <h3
              className="text-lg md:text-3xl font-bold mb-2"
              style={{ color: '#25c760' }}
            >
              {texts.effectsTitle}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm">━━━━━━━━━━</p>
          </div>

          {/* Description Paragraphs */}
          <div className="text-gray-300 text-sm md:text-base text-center leading-relaxed mb-8 md:mb-10 space-y-4">
            <p>{texts.effectsDescription1}</p>
            <p>{texts.effectsDescription2}</p>
            <p>{texts.effectsDescription3}</p>
          </div>

          {/* Copy Button */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <button
              onClick={handleCopy}
              className="px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#25c760',
                color: 'white',
                boxShadow: '0 4px 15px rgba(37, 199, 96, 0.3)',
              }}
            >
              {texts.copyButton}
            </button>

            {/* Copied Message */}
            {copied && (
              <p className="text-green-400 text-sm md:text-base animate-pulse">
                {texts.copiedMessage}
              </p>
            )}
          </div>

          {/* AI Links Section with Logos */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {aiServices.map((service, index) => (
              <a
                key={index}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 bg-gray-800 hover:bg-gray-700 border border-gray-600"
              >
                <img 
                  src={service.logo} 
                  alt={service.name} 
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                <span className="text-white">{service.name}</span>
              </a>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-8 md:mt-12">
            <div className="text-center mb-6">
              <p className="text-gray-500 text-xs md:text-sm mb-2">━━━━━━━━━━</p>
              <h4
                className="text-base md:text-2xl font-bold mb-2"
                style={{ color: '#25c760' }}
              >
                {texts.featuresTitle}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm">━━━━━━━━━━</p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6">
              {texts.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">・</span>
                  <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Features Note */}
            <p className="text-gray-400 text-xs md:text-sm text-center italic">
              {texts.featuresNote}
            </p>
            <p className="text-gray-500 text-xs md:text-sm text-center mt-4">━━━━━━━━━━</p>
          </div>
        </div>
      </div>
    </section>
  )
}
