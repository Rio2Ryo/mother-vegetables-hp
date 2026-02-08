'use client'

import { useState, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

// Before/After比較スライダーコンポーネント
function CompareSlider({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg cursor-ew-resize select-none border-2 border-[#25c760]"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current?.offsetWidth || '100%' }}
          draggable={false}
        />
      </div>
      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#25c760]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      />
      {/* Slider Handle */}
      <div
        className="absolute top-1/2 w-10 h-10 bg-[#25c760] rounded-full flex items-center justify-center cursor-ew-resize border-2 border-black"
        style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <span className="text-black text-sm font-bold">⟷</span>
      </div>
    </div>
  )
}

export default function IndustryApproach() {
  const { language } = useLanguage()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Before/Afterデータ
  const beforeAfterData = [
    {
      title: language === 'JP' ? '50代女性・3週間後' : 'Female, 50s · After 3 weeks of use',
      description: language === 'JP'
        ? '年を重ねるにつれて頬のシミが気になっていたのですが、3週間ほど塗い続けると、シミが目立たなくなり、肌もトーンアップして自信を持てるようになりました。'
        : 'As I got older, dark spots and under-eye shadows became more visible. After using this for a few weeks, my skin looked softer, brighter, and I felt confident again.',
      beforeImage: '/before6.png',
      afterImage: '/after6.png',
      beforeText: language === 'JP'
        ? '頬のシミが目立ち、メイク崩れも気になっていた。'
        : 'Noticeable dark spots and under-eye circles, with makeup easily coming off by afternoon.',
      afterText: language === 'JP'
        ? 'シミが目立たなくなり、自然なトーンアップを実現。メイクの持ちも良くなった。'
        : 'Spots appeared lighter and more diffused, giving a brighter, even-toned look. Foundation stayed on better and looked smoother.',
    },
    {
      title: language === 'JP' ? '80代女性・1ヶ月後' : 'Woman in her 80s · 1 month of use',
      description: language === 'JP'
        ? 'ずっと治らなかったシミが、1ヶ月間塗り込んで使用すると徐々に薄くなり、大きなシミは気にならなくなりました。年を重ねても、Confidenceで適切にケアすれば改善するのを実感しました。'
        : 'The dark spots that had been prominent gradually faded, and my overall complexion became more even. I realized that even as we age, when we care for our skin properly, it truly responds.',
      beforeImage: '/before_7.png',
      afterImage: '/after_7.png',
      beforeText: language === 'JP'
        ? '腕にある複数のシミがずっと治らなかった。'
        : 'Multiple dark spots on the arms and cheeks with an overall dull tone.',
      afterText: language === 'JP'
        ? '大きなシミは完全に消えて、全体的にシミの色が薄くなった。'
        : 'Spots have lightened, skin tone looks more even, and firmness has returned for renewed confidence in bare skin.',
    },
    {
      title: language === 'JP' ? '40代女性・3日後' : 'Female, 40s · After 3 days of use',
      description: language === 'JP'
        ? '処方クリームに混ぜて使い始めると、3日後にはひび割れがなくなって、赤みが目立たなくなってきました。かゆみも少なくなって、今はすごく快適です。これからも使い続けます。'
        : "I started using it together with my prescribed cream, and within three days the flakiness and redness noticeably improved. My skin felt smoother, less itchy, and much more comfortable. I'll definitely keep using it.",
      beforeImage: '/before_1.png',
      afterImage: '/after_1.png',
      beforeText: language === 'JP'
        ? '乾燥による痒みやカサつきに悩んでいた。'
        : 'Visible dry patches and rough texture caused by dryness.',
      afterText: language === 'JP'
        ? '痒みがおさまり、カサつきもなくなったので快適そうです。'
        : 'Redness visibly reduced, and small red spots became lighter and less noticeable.',
    },
    {
      title: language === 'JP' ? '10歳男の子・10日後' : 'Male, age 10 · After 10 days of use',
      description: language === 'JP'
        ? 'カサつきと痒みに悩んでいましたが、ステロイドを使うのは避けたかったので、Confidenceでケアをしていました。すると、わずか10日で痒みやカサつきが治まり、今はすごく快適そうです。'
        : 'We wanted to avoid using steroids, so we continued gentle daily care. In just 10 days, the flakiness and redness calmed down, and his skin looked much cleaner and smoother.',
      beforeImage: '/before_2.png',
      afterImage: '/after_2.png',
      beforeText: language === 'JP'
        ? '乾燥による痒みやカサつきに悩んでいた。'
        : 'Visible dry patches and rough texture caused by dryness.',
      afterText: language === 'JP'
        ? '痒みがおさまり、カサつきもなくなったので快適そうです。'
        : 'Redness visibly reduced, and small red spots became lighter and less noticeable.',
    },
    {
      title: language === 'JP' ? '5歳男の子・2日後' : 'Male, age 5 · After 2 days of use',
      description: language === 'JP'
        ? '硬水の刺激や乾燥で赤みが出ていましたが、ハンドクリームと一緒に使い始めると、たった2日で目に見えて症状が治まりました。'
        : 'Because his hands were easily irritated by hard water, we used this together with hand cream. Within just two days, the roughness faded and his skin became noticeably smoother.',
      beforeImage: '/before_5.png',
      afterImage: '/after_5.png',
      beforeText: language === 'JP'
        ? '手首から手の甲にかけて目に見える赤みと乾燥。'
        : 'Visible redness and dryness from the wrist to the back of the hand.',
      afterText: language === 'JP'
        ? '赤みがなくなり、乾燥も抑えられました。'
        : 'Skin appeared smoother, more even, and visibly healthier—with a clean, natural glow even in photos.',
    },
    {
      title: language === 'JP' ? '50代女性・10時間後' : 'Female, 50s · After 10 hours of use',
      description: language === 'JP'
        ? '寝る前にConfidenceを塗り、翌朝確認すると、たった10時間なのに炎症がかなり抑えられて、赤みも少なくなっていて驚きました。'
        : "I had been struggling with redness and swelling that wouldn't go away. After applying it before bed, the dryness eased, and by morning the redness had noticeably calmed.",
      beforeImage: '/before_3.png',
      afterImage: '/after_3.png',
      beforeText: language === 'JP'
        ? '怪我による炎症とかさぶた。'
        : 'Circular red area near the wrist with scabbing and visible inflammation.',
      afterText: language === 'JP'
        ? 'Confidenceを塗布後わずか10時間で炎症がかなり抑えられました。'
        : 'Skin appeared more hydrated and even-toned, with reduced redness and swelling.',
    },
    {
      title: language === 'JP' ? '50代女性・2日後' : 'Female, 50s · After 2 days of use',
      description: language === 'JP'
        ? '1ヶ月以上治らなかったやけどの痕が、2日も経たない間に傷跡が薄くなって、赤みも少なくなりました。'
        : "My burn hadn't healed for over a month, but after applying it at night, the dryness eased. Within 48 hours, the redness visibly calmed down and my skin felt more comfortable.",
      beforeImage: '/before_4.png',
      afterImage: '/after_4.png',
      beforeText: language === 'JP'
        ? '1ヶ月間改善しなかった腕のやけどや赤み、乾燥に悩まされていた。'
        : "Persistent redness and dryness from an arm burn that hadn't improved for a month.",
      afterText: language === 'JP'
        ? 'わずか2日で傷跡が目に見えて改善した。'
        : 'Skin looked clearer and healthier, with noticeably less irritation during daily activities.',
    },
  ]

  const nutrients = language === 'JP' ? [
    { name: 'しみ', count: 'そばかす' },
    { name: 'ニキビ', count: 'ニキビ跡' },
    { name: 'キズ', count: 'キズ跡、やけど跡' },
    { name: 'ニオイ', count: '顔・首・脇・Vゾーン・足' },
    { name: 'ツヤ・清潔感', nameMobile: ['ツヤ・清潔感', '自然な'], count: '自然なトーンアップ' },
  ] : [
    { name: 'Dark Spots', count: 'Freckles' },
    { name: 'Acne', count: 'Acne scars' },
    { name: 'Wounds', count: 'Scars, Burn Marks' },
    { name: 'Odor', nameMobile: ['Odor', 'Face, Neck,'], count: 'Face, Neck, Underarms, V-Zone, Feet' },
    { name: 'Shine', nameMobile: ['Shine', 'Maintains A Clean'], count: 'Maintains A Clean Look, Natural/ Earth Tones' },
  ]

  const nutrientsList = 'カリウム・ナトリウム・マグネシウム・カルシウム・リン・鉄・マンガン・亜鉛・銅・ビタミンA・B1・B2・B3・B5・B6・B9・C・E・K・トリプトファン・スレオニン・ロイシン・イソロイシン・リシン・メチオニン・フェニルアラニン・バリン・ヒスチジン・アルギニン・システイン・チロシン・アラニン・アスパラギン酸・グルタミン酸・セリン・グリシン・プロリン・飽和脂肪酸・オメガ3脂肪酸・オメガ6脂肪酸・C-フィコシアニン・クロロフィルa・総カロテノイド・核酸・スピルラン・グリコーゲン様多糖・β-グルカン様多糖・セルロース'

  // 成分表示（化粧品用）
  const cosmeticNutrients = [
    { name: '水分', amount: '0.1g', nameEN: 'Moisture' },
    { name: 'たんぱく質', amount: '2.4~2.6g', nameEN: 'Protein' },
    { name: '脂質', amount: '0.1g未満', nameEN: 'Fat' },
    { name: '炭水化物（食物繊維）', amount: '0.3~0.5g', nameEN: 'Carbohydrates (Dietary Fiber)' },
    { name: '無水ケイ酸', amount: '97.1g', nameEN: 'Anhydrous Silica' },
  ]

  // コピー状態
  const [copied, setCopied] = useState(false)

  // プロンプト用の成分リスト
  const cosmeticNutrientsListForPrompt = cosmeticNutrients
    .map(n => {
      if (language === 'JP') return `${n.name}: ${n.amount}`
      const amountEN = n.amount.replace(/未満/g, 'or less')
      return `${n.nameEN}: ${amountEN}`
    })
    .join('\n- ')

  // Cosmetic用プロンプトテンプレート（肌向け）
  const cosmeticPromptTemplate = language === 'JP'
    ? `以下の成分を含むスキンケア製品について、肌に使用した場合の期待できる効果を教えてください。
**断定は避け**、あくまで一般的に知られている情報に基づいてください。

【出力形式（必ずこの順）】

1) **期待できる効果トップ5（肌に使う場合）**
以下の成分群から期待できる主な効果を、重要度順に5つ挙げてください。
各効果について：
- どのような効果が期待できるか
- その効果の裏付けとなる成分（この成分リストの中から該当するもの）
- なぜその成分が肌に効くとされているか（簡潔に）

2) **特定領域への期待される効果（肌向け）**
以下の領域について、この成分群から期待できる効果を説明してください：
- 保湿
- バリア機能
- 皮脂・テカり
- 肌荒れ
- くすみ・トーンアップ
- 毛穴

3) **この製品の特性について**
以下の特性を持つスキンケア製品として、どのようなメリットが考えられるか説明してください：
・植物や藻の始祖にあたる天然素材のみを使用
・固い外核や細胞壁を持たない（肌への浸透への影響）
・完全室内培養（Closed Bioreactor System）
・重金属・マイクロプラスチック汚染リスクを極限まで排除
・虫・鳥類・外来微生物などの混入が起こらない培養環境
・農薬・化学肥料 不使用
・食品添加物 不使用
・保存料・人工着色料・香料 不使用

4) **免責**：これは医療アドバイスではありません。詳細は専門家にご相談ください。

【主要成分（100g当たり）】
- ${cosmeticNutrientsListForPrompt}`
    : `Please tell me about the expected benefits when applying the following ingredients to the skin.
**Avoid definitive claims**.

【Output Format (in this order)】

1) **Top 5 Expected Benefits (for skin use)**
List the top 5 expected benefits from this ingredient group for skin, in order of importance.
For each benefit:
- What effect can be expected
- Supporting ingredients from this list
- Why these ingredients are believed to be effective for skin (briefly)

2) **Expected Effects in Specific Areas (for skin)**
Explain the expected effects from this ingredient group in the following areas:
- Moisturizing
- Barrier function
- Sebum / Oiliness
- Skin irritation
- Dullness / Tone-up
- Pores

3) **About This Product's Characteristics**
Explain the potential benefits of a skincare product with these characteristics:
・Uses only natural ingredients derived from the ancestor of plants and algae
・Has no hard outer shell or cell wall (impact on skin absorption)
・Completely indoor cultivation (Closed Bioreactor System)
・Minimized risk of heavy metal and microplastic contamination
・Cultivation environment free from insects, birds, and foreign microorganisms
・No pesticides or chemical fertilizers
・No food additives
・No preservatives, artificial colors, or fragrances

4) **Disclaimer**: This is NOT medical advice. Please consult a professional for details.

【Main Ingredients (per 100g)】
- ${cosmeticNutrientsListForPrompt}`

  // コピー機能
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cosmeticPromptTemplate)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // AIサービスリンク（ロゴ付き）
  const aiServices = [
    { name: 'ChatGPT', url: 'https://chat.openai.com/', logo: '/ai/chatgpt.svg' },
    { name: 'Gemini', url: 'https://gemini.google.com/', logo: '/ai/gemini.svg' },
  ]

  // テキスト（日本語/英語）
  const cosmeticTexts = {
    effectsTitle: language === 'JP' ? '効果効能について' : 'About Effects & Benefits',
    effectsDescription1: language === 'JP'
      ? '我々Mother Vegetableグループは世界各地で活動を行っているため、効果効能に関する表現についても各国の法律・ガイドラインを遵守します。'
      : 'The Mother Vegetable Group operates worldwide, and we comply with the laws and guidelines of each country regarding the expression of effects and benefits.',
    effectsDescription2: language === 'JP'
      ? '私たちは地球と生命の未来基準を創る存在として、表現においても世界基準の責任を担うパイオニアであり続けます。'
      : 'As pioneers creating future standards for Earth and life, we continue to bear the responsibility of global standards in our expressions.',
    effectsDescription3: language === 'JP'
      ? 'そこで、Mother Vegetable Confidenceについて成分を全てオープンにします。以下の「クリップボードにコピー」のボタンを押して内容をコピーし、ChatGPTやGeminiなどのAIに、この成分を肌に使うとどのようになるかについて各自お調べください。'
      : 'Therefore, we are fully disclosing all ingredients of Mother Vegetable Confidence. Please click the "Copy to Clipboard" button below, and use AI services like ChatGPT or Gemini to research what happens when you apply these ingredients to your skin.',
    copyButton: language === 'JP' ? 'クリップボードにコピー' : 'Copy to clipboard',
    copiedMessage: language === 'JP' 
      ? '✅ コピーしました！次にAIを開いて貼り付けてください。' 
      : '✅ Copied! Open an AI service and paste.',
    featuresNote: language === 'JP'
      ? '（保湿/バリア機能/皮脂・テカり/肌荒れ/くすみ等についての効果は各自AIにてお調べください）'
      : '(Please use AI to research the effects on moisturizing, barrier function, sebum, skin irritation, dullness, etc.)',
  }

  // categories/benefits配列は削除済み（効能断定を避けるため）

  return (
    <section id="cosmetic-function" className="py-5 md:py-5 bg-black">
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
         Cosmetic Function
        </h2>

        {/* Subtitle */}
        <p className="text-center text-white text-base md:text-xl mb-4">
          Confidence
        </p>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-8 opacity-80"></div>

        {/* TORIKOMU / MAZEKOMU */}
        <p className="text-center text-red-600 text-xs md:text-sm mb-2 font-semibold">
          SURIKOMU / MAZEKOMU
        </p>

        {/* Food Video */}
        <div className="flex justify-center">
          <video
            src="/cosmetic_video.mov"
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

          {/* 成分表示 */}
          <h3
            className="text-lg md:text-3xl font-bold text-center mb-2"
            style={{ color: '#25c760' }}
          >
            {language === 'JP' ? '成分表示' : 'Ingredients'}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm text-center mb-4 md:mb-6">
            {language === 'JP' ? '（100g当たり）' : '(per 100g)'}
          </p>

          {/* 成分グリッド */}
          <div className="grid grid-cols-5 gap-2 md:gap-3 mb-8">
            {cosmeticNutrients.map((nutrient, index) => (
              <div
                key={index}
                className="border-2 border-green-300 rounded-lg px-2 py-2 md:px-3 md:py-3 bg-green-800/50 hover:bg-green-700/50 transition-colors text-center"
              >
                <div className="text-white text-[8px] md:text-xs font-semibold">
                  {language === 'JP' ? nutrient.name : nutrient.nameEN}
                </div>
                <div className="text-green-200 text-[9px] md:text-sm font-bold">
                  {language === 'JP' ? nutrient.amount : nutrient.amount.replace(/未満/g, 'or less')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Effects & Benefits Section (Cosmetic) */}
        <div className="max-w-4xl mx-auto px-4 md:px-4 mt-12 md:mt-16">
          {/* Effects Title */}
          <h3
            className="text-lg md:text-3xl font-bold text-center mb-6 md:mb-8"
            style={{ color: '#25c760' }}
          >
            {cosmeticTexts.effectsTitle}
          </h3>

          {/* Description Paragraphs */}
          <div className="text-gray-300 text-sm md:text-base text-left leading-relaxed mb-8 md:mb-10 space-y-4 max-w-3xl mx-auto">
            <p>{cosmeticTexts.effectsDescription1}</p>
            <p>{cosmeticTexts.effectsDescription2}</p>
            <p>{cosmeticTexts.effectsDescription3}</p>
          </div>

          {/* Copy Button */}
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
              <span>{cosmeticTexts.copyButton}</span>
            </button>

            {/* Copied Message */}
            {copied && (
              <p className="text-green-400 text-sm md:text-base animate-pulse">
                {cosmeticTexts.copiedMessage}
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

          {/* AI Research Note */}
          <p className="text-gray-400 text-xs md:text-sm text-center italic mb-12">
            {cosmeticTexts.featuresNote}
          </p>
        </div>

        {/* Skin Section */}
        <div className="mt-12 md:mt-16">
          {/* Description Text */}
          <div className="text-center mb-6 md:mb-8 px-4">
            {language === 'JP' ? (
              <>
                <p className="text-white text-[10px] md:text-base leading-relaxed">
                  マザーベジタブルは48種類の天然由来成分を配合した
                </p>
                <p className="text-white text-[10px] md:text-base leading-relaxed">
                  スキンケア製品です。毎日のお手入れにご活用ください。
                </p>
              </>
            ) : (
              <>
                <p className="text-white text-[10px] md:text-base leading-relaxed">
                  Mother Vegetable contains 48 natural-derived ingredients
                </p>
                <p className="text-white text-[10px] md:text-base leading-relaxed">
                  for your daily skincare routine.
                </p>
              </>
            )}
          </div>

          {/* Skin Video */}
          <div className="flex justify-center mb-6 md:mb-8">
            <video
              src="/skin.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-3xl object-contain rounded-lg"
            />
          </div>

          {/* Before & After Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-8 py-3 border-2 border-[#25c760] text-[#25c760] rounded-full hover:bg-[#25c760] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <span>✓</span>
              <span>Before & After</span>
            </button>
          </div>
        </div>

        {/* Popup Modal */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-2 md:p-4"
            style={{ zIndex: 9999 }}
            onClick={() => setIsPopupOpen(false)}
          >
            <style>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 12px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #000;
                border-left: 1px solid #25c760;
                border-right: 1px solid #25c760;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #25c760;
                border-radius: 6px;
                border: 2px solid #000;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #1ea550;
              }
            `}</style>
            <div
              className="custom-scrollbar bg-black border-2 border-[#25c760] rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-2 bg-black z-10">
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="text-[#25c760] hover:text-green-400 text-2xl px-2"
                >
                  ✕
                </button>
              </div>

              {/* Header */}
              <div className="text-center pb-6 px-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">Confidence</h2>
                <p className="text-[#25c760] text-sm md:text-lg">Before & After</p>
                <p className="text-gray-400 text-xs md:text-sm mt-2">
                  {language === 'JP' 
                    ? '※個人の感想です。結果には個人差があります。' 
                    : '* Individual results may vary. These are personal experiences.'}
                </p>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 pb-6">
                {beforeAfterData.map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#25c760] rounded-lg p-4 bg-[#131217]"
                  >
                    {/* Card Title */}
                    <h3 className="text-[#25c760] text-base md:text-lg font-bold mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-xs md:text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Compare Slider */}
                    <div className="mb-4">
                      <CompareSlider
                        beforeImage={item.beforeImage}
                        afterImage={item.afterImage}
                      />
                    </div>

                    {/* Before/After Labels */}
                    <div className="flex justify-center gap-2 mb-4">
                      <span className="px-5 py-1.5 bg-[#1a1a1a] text-white text-xs md:text-sm rounded-full border border-green-400">
                        Before
                      </span>
                      <span className="px-5 py-1.5 bg-[#1a1a1a] text-white text-xs md:text-sm rounded-full border border-green-400">
                        After
                      </span>
                    </div>

                    {/* Before Text */}
                    <div className="bg-[#000]  p-4 mb-3 rounded-r">
                      <h4 className="text-[#25c760] text-sm font-bold mb-2">Before</h4>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{item.beforeText}</p>
                    </div>

                    {/* After Text */}
                    <div className="bg-[#0d1f1a] p-4 rounded-r">
                      <h4 className="text-[#25c760] text-sm font-bold mb-2">After</h4>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{item.afterText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
