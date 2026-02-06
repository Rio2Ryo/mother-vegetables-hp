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

  // 栄養成分表示（100g当たり）
  // 表の順番は「左上から下に順番（列を下→次の列へ）」で固定
  const nutrientsWithAmount = [
    // col 1
    { name: 'エネルギー（kcal）', amount: '398kcal', nameEN: 'Energy (kcal)' },
    { name: 'たんぱく質', amount: '65g', nameEN: 'Protein' },
    { name: 'C-フィコシアニン', amount: '約16-20g', nameEN: 'C-Phycocyanin' },
    { name: 'アミノ酸組成（加水分解後の推定値）', amount: '/', nameEN: 'Amino Acid Profile (estimated after hydrolysis)' },
    { name: 'トリプトファン', amount: '0.93g', nameEN: 'Tryptophan' },
    { name: 'スレオニン', amount: '2.97g', nameEN: 'Threonine' },
    { name: 'イソロイシン', amount: '3.21g', nameEN: 'Isoleucine' },
    { name: 'ロイシン', amount: '4.95g', nameEN: 'Leucine' },
    { name: 'リシン', amount: '3.03g', nameEN: 'Lysine' },

    // col 2
    { name: 'メチオニン', amount: '1.15g', nameEN: 'Methionine' },
    { name: 'フェニルアラニン', amount: '2.78g', nameEN: 'Phenylalanine' },
    { name: 'バリン', amount: '3.51g', nameEN: 'Valine' },
    { name: 'ヒスチジン', amount: '1.09g', nameEN: 'Histidine' },
    { name: 'アルギニン', amount: '4.15g', nameEN: 'Arginine' },
    { name: 'システイン', amount: '0.66g', nameEN: 'Cysteine' },
    { name: 'チロシン', amount: '2.58g', nameEN: 'Tyrosine' },
    { name: 'アラニン', amount: '4.52g', nameEN: 'Alanine' },
    { name: 'アスパラギン酸', amount: '5.79g', nameEN: 'Aspartic Acid' },

    // col 3
    { name: 'グルタミン酸', amount: '8.39g', nameEN: 'Glutamic Acid' },
    { name: 'グリシン', amount: '3.10g', nameEN: 'Glycine' },
    { name: 'プロリン', amount: '2.38g', nameEN: 'Proline' },
    { name: 'セリン', amount: '3.00g', nameEN: 'Serine' },
    { name: '脂質', amount: '6.5g', nameEN: 'Fat' },
    { name: '飽和脂肪酸', amount: '約2g', nameEN: 'Saturated Fatty Acids' },
    { name: 'オメガ3脂肪酸（α-リノレン酸含む）', amount: '約100mg', nameEN: 'Omega-3 Fatty Acids (incl. ALA)' },
    { name: 'オメガ6脂肪酸（γ-リノレン酸含む）', amount: '約1.5g', nameEN: 'Omega-6 Fatty Acids (incl. GLA)' },
    { name: '炭水化物', amount: '20g', nameEN: 'Carbohydrates' },

    // col 4
    { name: '糖質', amount: '8g', nameEN: 'Sugar' },
    { name: '食物繊維', amount: '12g', nameEN: 'Dietary Fiber' },
    { name: 'ミネラル', amount: '8g', nameEN: 'Minerals' },
    { name: '食塩相当量（推定値）', amount: '1,050mg', nameEN: 'Salt Equivalent (estimated)' },
    { name: 'カリウム', amount: '1,360mg', nameEN: 'Potassium' },
    { name: 'マグネシウム', amount: '195mg', nameEN: 'Magnesium' },
    { name: 'カルシウム', amount: '120mg', nameEN: 'Calcium' },
    { name: 'リン', amount: '118mg', nameEN: 'Phosphorus' },
    { name: '鉄', amount: '28.5mg', nameEN: 'Iron' },

    // col 5
    { name: '亜鉛', amount: '2.0mg', nameEN: 'Zinc' },
    { name: '銅', amount: '0.3~0.4mg', nameEN: 'Copper' },
    { name: 'マンガン', amount: '1.9mg', nameEN: 'Manganese' },
    { name: 'ビタミン類', amount: '/', nameEN: 'Vitamins' },
    { name: 'ビタミンA（β-カロテン由来）', amount: '約100mg', nameEN: 'Vitamin A (from β-carotene)' },
    { name: 'ビタミンE', amount: '5mg', nameEN: 'Vitamin E' },
    { name: 'ビタミンK', amount: '25.5μg', nameEN: 'Vitamin K' },
    { name: 'ビタミンB1', amount: '2.38mg', nameEN: 'Vitamin B1' },
    { name: 'ビタミンB2', amount: '3.67mg', nameEN: 'Vitamin B2' },

    // col 6
    { name: 'ビタミンB3', amount: '12.8mg', nameEN: 'Vitamin B3' },
    { name: 'ビタミンB5', amount: '3.48mg', nameEN: 'Vitamin B5' },
    { name: 'ビタミンB6', amount: '0.36mg', nameEN: 'Vitamin B6' },
    { name: 'ビタミンB9', amount: '94μg', nameEN: 'Vitamin B9' },
    { name: 'ビタミンC', amount: '10mg', nameEN: 'Vitamin C' },
    { name: 'クロロフィルa（葉緑素）', amount: '0.3~1.1%', nameEN: 'Chlorophyll a' },
    { name: 'カロテノイド', amount: '0.03~0.5%', nameEN: 'Carotenoids' },
    { name: '核酸', amount: '4~6%', nameEN: 'Nucleic Acids' },
    { name: '水分', amount: '3~7%', nameEN: 'Moisture' },
  ]

  // プロンプト用の成分リスト（グラム数付き）
  const nutrientsListForPrompt = nutrientsWithAmount
    .map(n => {
      if (language === 'JP') return `${n.name}: ${n.amount}`
      // 英語側の表記ゆれを最低限整形
      const amountEN = n.amount
        .replace(/約/g, 'approx. ')
        .replace(/μg/g, 'mcg')
      return `${n.nameEN}: ${amountEN}`
    })
    .join('\n- ')

  // プロンプトテンプレート（日本語/英語）- 効果トップ5 + 裏付け成分
  const promptTemplate = language === 'JP'
    ? `以下の成分を含む食品について、期待できる効果を教えてください。
**断定は避け**、あくまで一般的に知られている情報に基づいてください。

【出力形式（必ずこの順）】

1) **期待できる効果トップ5**
以下の成分群から期待できる主な効果を、重要度順に5つ挙げてください。
※最も多く含まれる成分はフィコシアニン（C-フィコシアニン：約16-20g/100g）です。
各効果について：
- どのような効果が期待できるか
- その効果の裏付けとなる成分（この成分リストの中から該当するもの）
- なぜその成分が効くとされているか（簡潔に）

2) **特定領域への期待される効果**
以下の領域について、この成分群から期待できる効果を説明してください：
- 腸内機能
- 睡眠
- 便通
- 運動機能
- 二日酔い
- 疲労

3) **この食品の特性について**
以下の特性を持つ食品として、どのようなメリットが考えられるか説明してください：
・植物や藻の始祖にあたる天然素材のみを使用
・固い外核や細胞壁を持たない（消化吸収への影響）
・完全室内培養（Closed Bioreactor System）
・重金属・マイクロプラスチック汚染リスクを極限まで排除
・虫・鳥類・外来微生物などの混入が起こらない培養環境
・農薬・化学肥料 不使用
・食品添加物 不使用
・保存料・人工着色料・香料 不使用

4) **免責**：これは医療アドバイスではありません。詳細は専門家にご相談ください。

【成分リスト（100g当たり）】
- ${nutrientsListForPrompt}`
    : `Please tell me about the expected benefits of a food containing the following ingredients.
**Avoid definitive claims**.

【Output Format (in this order)】

1) **Top 5 Expected Benefits**
List the top 5 expected benefits from this ingredient group, in order of importance.
*Note: The most abundant ingredient is Phycocyanin (C-Phycocyanin: approx. 16-20g/100g).*
For each benefit:
- What effect can be expected
- Supporting ingredients from this list
- Why these ingredients are believed to be effective (briefly)

2) **Expected Effects in Specific Areas**
Explain the expected effects from this ingredient group in the following areas:
- Gut function
- Sleep
- Bowel movements
- Exercise performance
- Hangover recovery
- Fatigue

3) **About This Food's Characteristics**
Explain the potential benefits of a food with these characteristics:
・Uses only natural ingredients derived from the ancestor of plants and algae
・Has no hard outer shell or cell wall (impact on digestion/absorption)
・Completely indoor cultivation (Closed Bioreactor System)
・Minimized risk of heavy metal and microplastic contamination
・Cultivation environment free from insects, birds, and foreign microorganisms
・No pesticides or chemical fertilizers
・No food additives
・No preservatives, artificial colors, or fragrances

4) **Disclaimer**: This is NOT medical advice. Please consult a professional for details.

【Ingredient List (per 100g)】
- ${nutrientsListForPrompt}`

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
    copyButton: language === 'JP' ? 'クリップボードにコピー' : 'Copy to clipboard',
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

          {/* Nutrients Title */}
          <h3
            className="text-lg md:text-3xl font-bold text-center mb-2"
            style={{ color: '#25c760' }}
          >
            {language === 'JP' ? '栄養成分表示' : 'Nutrition Facts'}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm text-center mb-4 md:mb-6">
            {language === 'JP' ? '（100g当たり）' : '(per 100g)'}
          </p>

          {/* Nutrition Facts Grid */}
          {/* PCでは「左上→下へ（列方向）」で並ぶように column flow にする */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-flow-col md:grid-rows-9 md:auto-cols-fr gap-2 md:gap-3">
            {nutrientsWithAmount.map((nutrient, index) => (
              <div
                key={index}
                className="border border-green-500/40 rounded-lg px-2 py-2 md:px-3 md:py-3 bg-green-900/20 hover:bg-green-900/40 transition-colors"
              >
                <div className="text-gray-200 text-[9px] md:text-xs font-medium">
                  {language === 'JP' ? nutrient.name : nutrient.nameEN}
                </div>
                <div className="text-green-400 text-[10px] md:text-sm font-bold">
                  {language === 'JP' ? nutrient.amount : nutrient.amount.replace(/約/g, 'approx. ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Effects & Benefits Section */}
        <div className="max-w-4xl mx-auto px-4 md:px-4 mt-12 md:mt-16">
          {/* Effects Title */}
          <h3
            className="text-lg md:text-3xl font-bold text-center mb-6 md:mb-8"
            style={{ color: '#25c760' }}
          >
            {texts.effectsTitle}
          </h3>

          {/* Description Paragraphs - センター揃えの左寄せ */}
          <div className="text-gray-300 text-sm md:text-base text-left leading-relaxed mb-8 md:mb-10 space-y-4 max-w-3xl mx-auto">
            <p>{texts.effectsDescription1}</p>
            <p>{texts.effectsDescription2}</p>
            <p>{texts.effectsDescription3}</p>
          </div>

          {/* Copy Button - Modern Design with Icon */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <button
              onClick={handleCopy}
              className="group flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 border-2 border-[#25c760] bg-transparent hover:bg-[#25c760]/10 whitespace-nowrap"
              style={{ color: '#25c760' }}
            >
              {/* Clipboard Icon */}
              <svg 
                className="w-5 h-5 md:w-6 md:h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>{texts.copyButton}</span>
            </button>

            {/* Copied Message */}
            {copied && (
              <p className="text-green-400 text-sm md:text-base animate-pulse">
                {texts.copiedMessage}
              </p>
            )}
          </div>

          {/* AI Links Section with Logos */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
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

          {/* AI Research Note - Below AI Links */}
          <p className="text-gray-400 text-xs md:text-sm text-center italic mb-12">
            {texts.featuresNote}
          </p>

          {/* Features Section */}
          <div className="mt-8 md:mt-12">
            <h4
              className="text-base md:text-2xl font-bold text-center mb-6"
              style={{ color: '#25c760' }}
            >
              {texts.featuresTitle}
            </h4>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {texts.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">・</span>
                  <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
