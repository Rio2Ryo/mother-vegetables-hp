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

  // AIサービスリンク
  const aiServices = [
    { name: 'ChatGPT', url: 'https://chat.openai.com/', color: '#10a37f' },
    { name: 'Gemini', url: 'https://gemini.google.com/', color: '#4285f4' },
    { name: 'Claude', url: 'https://claude.ai/', color: '#d97706' },
    { name: 'Grok', url: 'https://grok.com/', color: '#1da1f2' },
  ]

  // テキスト（日本語/英語）
  const texts = {
    effectsTitle: language === 'JP' ? '効果効能について' : 'About Effects & Benefits',
    effectsDescription: language === 'JP'
      ? '私たちはグローバルに事業を展開しており、国や地域によって法律や規制が異なります。そのため、各国の法規制に準拠した運用を行っており、効果効能を直接記載することができません。\n\n成分情報をもとにご自身でお調べいただくため、下記のコピー機能をご活用ください。AIサービスに貼り付けるだけで、各成分の一般的な情報を確認することができます。'
      : 'We operate globally, and laws and regulations vary by country and region. To comply with local regulations, we cannot directly describe specific effects and benefits.\n\nPlease use the copy function below to research the ingredients on your own. Simply paste into an AI service to learn about general information for each ingredient.',
    copyButton: language === 'JP' ? '📋 AIに質問する文章をコピー' : '📋 Copy prompt to ask AI',
    copiedMessage: language === 'JP' 
      ? '✅ コピーしました！次にAIを開いて貼り付けてください。' 
      : '✅ Copied! Open an AI service and paste.',
    aiLinksLabel: language === 'JP' ? '🤖 AIで開く（ログインして貼り付け）' : '🤖 Open AI (login and paste)',
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

          {/* Nutrients Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
            {nutrientsList.split('・').map((nutrient, index) => (
              <div
                key={index}
                className="border border-green-500/40 rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-center bg-green-900/20 hover:bg-green-900/40 transition-colors"
              >
                <span className="text-gray-200 text-[9px] md:text-sm whitespace-nowrap">
                  {nutrient.trim()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Effects & Benefits Section (New) */}
        <div className="max-w-3xl mx-auto px-4 md:px-4 mt-12 md:mt-16">
          {/* Effects Title */}
          <h3
            className="text-lg md:text-3xl font-bold text-center mb-4 md:mb-6"
            style={{ color: '#25c760' }}
          >
            {texts.effectsTitle}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base text-center leading-relaxed mb-6 md:mb-8">
            {texts.effectsDescription}
          </p>

          {/* Copy Button */}
          <div className="flex flex-col items-center gap-4 mb-6">
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

          {/* AI Links Section */}
          <div className="text-center">
            <p className="text-gray-400 text-sm md:text-base mb-4">
              {texts.aiLinksLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {aiServices.map((service, index) => (
                <a
                  key={index}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:opacity-90"
                  style={{
                    backgroundColor: service.color,
                    color: 'white',
                  }}
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
