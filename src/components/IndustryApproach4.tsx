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

  // 成分表示（化粧品用）
  const cosmeticNutrients = [
    { name: '無水ケイ酸（非晶質）', amount: '97.1g', nameEN: 'Anhydrous Silica (Amorphous)' },
    { name: 'たんぱく質', amount: '2.4~2.6g', nameEN: 'Protein' },
    { name: '炭水化物（食物繊維）', amount: '0.3~0.5g', nameEN: 'Carbohydrates (Dietary Fiber)' },
    { name: '脂質', amount: '0.1g未満', nameEN: 'Fat' },
    { name: '水分', amount: '0.1g', nameEN: 'Moisture' },
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
    ? `以下の成分を含む医薬部外品原料規格を満たした原材料（かつ、FDAの規格のPremium Food powder gradeを満たした原材料）について、肌に塗った場合に期待できる効果を一般公開情報をもとに教えてください。
**断定は避け**、あくまで一般的に知られている情報に基づいてください。

前提条件として、原材料の特性は次の通りです。
以下の特性や環境下で育ち作られた品種から作られた原材料がどのようなメリットが考えられるかを説明してください：
・植物の始祖にあたる天然素材のみを使用
・非晶質の無水ケイ酸が97.1%のパウダー形状
・生命の証として、高純度無水ケイ酸97.1%でありながら、脂質や食物繊維がパウダーに残っている。高温処理や化学精製をしないため、天然の食物繊維等が残ったオーガニックの高純度無水ケイ酸。
・PM2.5などの外気や虫・鳥類などの混入が起こらない完全室内培養（Closed Bioreactor System）
・重金属・マイクロプラスチック汚染リスクを極限まで排除
・農薬・化学肥料 不使用
・保存料・人工着色料・香料 不使用
・動物や植物にも使用可能


【出力形式（必ずこの順）】
1) **肌に塗ることで期待できる効果トップ5**
以下の成分群から期待できる主な効果を、重要度順に5つ挙げてください。
主成分：植物の始祖にあたる天然素材の1種類の品種からのみで作られた高純度無水ケイ酸97.1%（脂質や食物繊維がパウダーに残っている。高温処理や化学精製をしないため、天然の食物繊維等が残ったオーガニックの高純度無水ケイ酸。）
各効果について：
- どのような効果が期待できるか
- その効果の裏付けとなる成分（この成分リストの中から該当するもの）
- なぜその成分が肌に効くとされているか（簡潔に）

2) **特定領域への期待される効果**
以下の領域について、この成分群から期待できる効果を説明してください：
- 切創（傷口に関与するため医療関係の論文の引用必須）
- アレルギー肌（傷口に関与するため、医療関係の論文の引用必須）
- 怪我により表皮が剥がれ真皮層に直接塗布し、コラーゲンに当該無水ケイ酸が届いた際の合成・架橋・分解
- バリア機能
- 保湿
- 皮脂汚れ
- 頭皮
- 化粧下地の使用/テカり
- 体臭
- 肌のトーン

3) **犬や猫に塗布した際に期待される効果**
以下の領域について、この成分群から期待できる効果を説明してください：
- 毛に付着したダニ（論文要開示。昆虫脱水作用等）
- 被毛
- アレルギー肌
- 口臭

4) **免責**：これは医療アドバイスではないこと、一般公開情報であることを掲載してください。詳細は専門家や医師に相談することを推奨してください。

【成分リスト（100g当たり）】
- ${cosmeticNutrientsListForPrompt}`
    : `Please tell me about the expected benefits of applying to the skin raw materials that meet Japanese Quasi-Drug Raw Material Standards (and also meet FDA's Premium Food Powder Grade standards) containing the following ingredients, based on publicly available information.
**Avoid definitive claims** and base your response on generally known information.

As a prerequisite, the characteristics of the raw materials are as follows.
Please explain what benefits can be expected from raw materials made from a variety grown and produced under the following characteristics and conditions:
・Uses only natural ingredients derived from the ancestor of plants
・Amorphous anhydrous silica at 97.1% in powder form
・As evidence of life, despite being 97.1% high-purity anhydrous silica, lipids and dietary fiber remain in the powder. Because no high-temperature processing or chemical refining is used, natural dietary fiber remains — an organic high-purity anhydrous silica.
・Complete indoor cultivation (Closed Bioreactor System) free from outdoor air pollutants such as PM2.5, insects, birds, etc.
・Minimized risk of heavy metal and microplastic contamination
・No pesticides or chemical fertilizers
・No preservatives, artificial colors, or fragrances
・Can also be used on animals and plants


【Output Format (in this order)】
1) **Top 5 Expected Benefits When Applied to Skin**
List the top 5 expected benefits from this ingredient group, in order of importance.
Main component: 97.1% high-purity anhydrous silica made from only one variety of natural material — the ancestor of plants (lipids and dietary fiber remain in the powder. Because no high-temperature processing or chemical refining is used, natural dietary fiber remains — an organic high-purity anhydrous silica.)
For each benefit:
- What effect can be expected
- Supporting ingredients from this list
- Why these ingredients are believed to be effective for skin (briefly)

2) **Expected Effects in Specific Areas**
Explain the expected effects from this ingredient group in the following areas:
- Cuts/lacerations (citation of medical literature required as it involves wound care)
- Allergy-prone skin (citation of medical literature required as it involves wound care)
- When the epidermis is removed due to injury and the anhydrous silica is applied directly to the dermis layer, reaching collagen — synthesis, crosslinking, and degradation
- Barrier function
- Moisturizing
- Sebum/dirt removal
- Scalp
- Use as makeup base / Oiliness
- Body odor
- Skin tone

3) **Expected Effects When Applied to Dogs and Cats**
Explain the expected effects from this ingredient group in the following areas:
- Mites attached to fur (disclosure of research papers required; insect dehydration effect, etc.)
- Coat condition
- Allergy-prone skin
- Bad breath

4) **Disclaimer**: This is NOT medical advice and is based on publicly available information. We recommend consulting a specialist or physician for details.

【Ingredient List (per 100g)】
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
    effectsTitle: language === 'JP' ? '効果効能の表現規制について' : 'About Regulatory Restrictions on Expressing Effects & Benefits',
    effectsDescription1: language === 'JP'
      ? '私たちMother Vegetableグループは、世界各地で活動を行っているため、効果効能に関する表現についても各国の法律・ガイドラインを遵守します。'
      : 'The Mother Vegetable Group operates worldwide, and we comply with the laws and guidelines of each country regarding the expression of effects and benefits.',
    effectsDescription3: language === 'JP'
      ? 'そこで、Mother Vegetable Confidenceについて成分を全てオープンにします。以下の「クリップボードにコピー」のボタンを押すと全成分がコピーされますので、ChatGPTやGeminiなどのAIに入力し、これらの成分の特性については一般公開情報をご確認ください。'
      : 'Therefore, we are fully disclosing all ingredients of Mother Vegetable Confidence. Clicking the "Copy to Clipboard" button below will copy all ingredients. Please paste them into an AI service such as ChatGPT or Gemini, and refer to publicly available information regarding the characteristics of these ingredients.',
    copyButton: language === 'JP' ? '上記成分をクリップボードにコピー' : 'Copy Ingredients to Clipboard',
    copiedMessage: language === 'JP' 
      ? '✅ コピーしました！次にAIを開いて貼り付けてください。' 
      : '✅ Copied! Open an AI service and paste.',
    featuresNote: language === 'JP'
      ? '（多くお問い合わせいただく、保湿、皮脂汚れ、傷口、アレルギー肌、デリケートゾーン等のニオイ、化粧下地への応用などについては各国で表現規制が異なりますので、各自AIにてお調べください。）'
      : '(Regarding frequently asked topics such as moisturizing, sebum/dirt removal, wounds, allergy-prone skin, odor in delicate areas, use as a makeup base, etc., expression regulations vary by country, so please research using AI.)',
    featuresTitle: language === 'JP' ? '我々の特性について' : 'Our Characteristics',
    featuresTable: language === 'JP' ? [
      ['植物や藻の始祖に当たるMother Vegetableのみを使用した完全天然素材/天然栄養素', '塗るタイプのMother Vegetableは、主成分が非晶質の無水ケイ酸'],
      ['PM2.5などの外気や虫・鳥類などの混入が起こらない完全室内培養', '重金属・マイクロプラスチック汚染リスクを極限まで排除'],
      ['保存料・人工着色料・香料 不使用', '無水ケイ酸を「抽出」する作業がなく、Mother Vegetableを乾燥させたのみの天然'],
      ['農薬・化学肥料 不使用', '医薬部外品原料規格をクリア'],
      ['動物や植物への使用が可能', '長期保存が可能'],
    ] : [
      ['Made entirely from natural materials/nutrients derived solely from Mother Vegetable, the ancestor of plants and algae', 'The main component of topical Mother Vegetable is amorphous anhydrous silica'],
      ['Complete indoor cultivation free from PM2.5, insects, birds, and other contaminants', 'Minimizes heavy metal and microplastic contamination risks'],
      ['No preservatives, artificial colors, or fragrances', 'No extraction process for anhydrous silica — simply dried Mother Vegetable in its natural form'],
      ['No pesticides or chemical fertilizers', 'Meets quasi-drug raw material standards'],
      ['Can be used on animals and plants', 'Suitable for long-term storage'],
    ],
  }

  // categories/benefits配列は削除済み（効能断定を避けるため）

  return (
    <section id="cosmetic-function" className="py-5 md:py-5 bg-black">
      <div
        className="mx-auto px-4 md:px-8 py-8 md:py-12 w-[97%] md:w-[90%]"
        style={{
          maxWidth: '1500px',
          border: '2px solid #ffffff',
          borderRadius: '8px',
        }}
      >
        {/* Title */}
        <h2
          className="text-xl md:text-5xl font-bold text-center mb-1 md:mb-2"
          style={{ color: '#ffffff' }}
        >
         Cosmetic Function
        </h2>
        <p
          className="text-sm md:text-2xl text-center mb-2 md:mb-4"
          style={{ color: '#ffffff' }}
        >
          {language === 'JP' ? '肌に塗るタイプのMother Vegetable' : 'Mother Vegetable for Skin Application'}
        </p>

        {/* Subtitle */}
        <p className="text-center text-white text-base md:text-xl mb-4">
          Confidence
        </p>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-8 opacity-80"></div>

        {/* TORIKOMU / MAZEKOMU */}
        <p className="text-center text-red-600 text-xs md:text-sm mb-2 font-semibold">
          SURIKOMU / MAZEKOMU
        </p>

        {/* Cosmetic Video */}
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
          {/* 成分表示 */}
          <h3
            className="text-lg md:text-3xl font-bold text-center mb-2"
            style={{ color: '#25c760' }}
          >
            {language === 'JP' ? '成分表示' : 'Ingredient Information'}
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
            <p>{cosmeticTexts.effectsDescription3}</p>
          </div>

          {/* Copy Button */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <button
              onClick={handleCopy}
              className="group flex items-center gap-2 md:gap-3 px-5 py-3 md:px-10 md:py-5 rounded-2xl font-bold text-sm md:text-lg transition-all duration-300 hover:scale-105 border-2 border-[#25c760] bg-transparent hover:bg-[#25c760]/10 md:whitespace-nowrap"
              style={{ color: '#25c760' }}
            >
              {/* Clipboard Icon */}
              <svg
                className="w-8 h-8 md:w-6 md:h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span className="text-left">{language === 'JP' ? (<>上記成分を<br className="md:hidden" />クリップボードにコピー</>) : cosmeticTexts.copyButton}</span>
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

          {/* Features Section */}
          <div className="mt-8 md:mt-12">
            <h4
              className="text-base md:text-2xl font-bold text-center mb-6"
              style={{ color: '#25c760' }}
            >
              {cosmeticTexts.featuresTitle}
            </h4>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-6">
              {cosmeticTexts.featuresTable.flat().map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 min-w-[6px] rounded-full bg-[#25c760]"></span>
                  <span className="text-gray-200 text-xs md:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popup Modal - Hidden */}
        {/* Skin Video and Before & After Button removed */}
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
