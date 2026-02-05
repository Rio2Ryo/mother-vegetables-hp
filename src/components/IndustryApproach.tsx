'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function IndustryApproach() {
  const { language } = useLanguage()

  const products = [
    {
      id: 1,
      video: '/achieve_video.mp4',
      title: 'Achieve',
      subtitle: 'for Body',
      label: "'TORIKOMU'",
      description: language === 'JP' ? '一度に48種類の栄養摂取' : '48 different nutrients at once.',
      features: language === 'JP' ? [
        '48種類の栄養素を一度に摂取',
        '毎日の健康維持をサポート',
      ] : [
        '48 different nutrients in one serving',
        'Supports your daily wellness routine',
      ],
      howToUse: language === 'JP' ? "1スティックを飲み物や食事に'TORIKOMU'" : "Simply 'TORIKOMU' one capsule into your drink or meal.",
    },
    {
      id: 2,
      video: '/confidence_v2.mp4',
      title: 'Confidence',
      subtitle: 'for All Skin',
      label: "'SURIKOMU' , 'MAZEKOMU'",
      description: language === 'JP' ? '天然由来成分でスキンケア' : 'Natural-derived skincare',
      features: language === 'JP' ? [
        '天然由来の成分を配合',
        'スキンケアにプラスワン',
      ] : [
        'Contains natural-derived ingredients',
        'Add to your skincare routine',
      ],
      howToUse: language === 'JP' ? "直接 'SURIKOMU' または コスメに 'MAZEKOMU'" : "'SURIKOMU' directly or 'MAZEKOMU' into your current cosmetics.",
    },
    {
      id: 3,
      video: '/forever_video.mp4',
      title: 'Forever',
      subtitle: 'for Pet',
      label: "'MAZEKOMU'",
      description: language === 'JP' ? 'ペットの健康寿命を延ばす' : "to extend your pet's healthy life.",
      features: language === 'JP' ? [
        'ペットの毎日の健康をサポート',
        '天然由来の栄養成分を配合',
      ] : [
        'Supports your pet\'s daily wellness',
        'Contains natural-derived nutrients',
      ],
      howToUse: language === 'JP' ? "ペットフードに1スティックを'MAZEKOMU'" : "Simply 'MAZEKOMU' one capsule into your pet's food.",
    },
  ]

  const trustItems = [
    { label: "'TORIKOMU'", text: 'means of having in Japanese as 「取り込む」' },
    { label: "'MAZEKOMU'", text: 'means of mixing in Japanese as 「混ぜ込む」' },
    { label: "'SURIKOMU'", text: 'means of rubbing in Japanese as 「擦り込む」' },
  ]

  return (
    <section id="products" className="pb-5 pt-10 md:pb-5 md:pt-12 bg-black">
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
          Products
        </h2>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-12 opacity-80"></div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg p-3 md:p-6"
              style={{ border: '1px solid #25c760' }}
            >
              {/* Mobile: Horizontal Layout / Desktop: Vertical Layout */}
              <div className="flex flex-row md:flex-col gap-3 md:gap-0">
                {/* Video */}
                <div className="flex-shrink-0 self-stretch md:self-auto md:mb-4 md:flex md:justify-center">
                  <video
                    src={product.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-24 h-full md:w-28 md:h-52 object-cover rounded-lg"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col">
                  {/* Title & Subtitle */}
                  <div className="mb-1 md:text-center">
                    <h3 className="text-lg md:text-3xl font-bold" style={{ color: '#25c760' }}>
                      {product.title}
                    </h3>
                    <p className="text-green-400 text-xs md:text-sm">{product.subtitle}</p>
                  </div>

                  {/* Label & Description */}
                  <p className="text-red-600 font-semibold text-xs md:text-sm md:text-center">{product.label}</p>
                  <p className="text-white text-[10px] md:text-sm mb-2 md:text-center">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-1 mb-2 mt-5">
                    {product.features.map((feature, idx) => (
                      <p key={idx} className="text-white text-[10px] md:text-lg flex items-start">
                        <span className="text-green-400 mr-1 md:mr-2">✓</span>
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* How to use */}
                  <div className="mb-2 md:mt-10 md:mb-4">
                    <p className="text-green-400 font-semibold text-xs md:text-xl mb-1">How to use</p>
                    <p className="text-white text-[10px] md:text-sm flex items-start">
                      <span className="text-green-400 mr-1 md:mr-2">✓</span>
                      {product.howToUse}
                    </p>
                  </div>

                                  </div>
              </div>

                          </div>
          ))}
        </div>

        {/* Trust Text */}
        <div className="space-y-0 md:space-y-1 text-center mt-8 md:mt-12">
          {trustItems.map((item, index) => (
            <div key={index} className="text-[10px] md:text-base">
              <span className="text-red-600 font-semibold mr-4">{item.label}</span>
              <span className="text-gray-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

