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
      features: language === 'JP' ? [
        '48種類の栄養を一度に摂取',
        '毎日の健康を大切な人と',
      ] : [
        '48 different nutrients in one serving',
        'Share daily wellness with your loved ones',
      ],
      howToUse: language === 'JP' ? "1スティックを飲み物や食事に'TORIKOMU'" : "Simply 'TORIKOMU' one capsule into your drink or meal.",
      howToUseLabel: language === 'JP' ? 'Achiveの料理/ドリンク一覧' : 'Achieve Recipes & Drinks',
      howToUseUrl: 'https://mothervegetable.com/achieve-howto',
    },
    {
      id: 2,
      video: '/confidence_v2.mp4',
      title: 'Confidence',
      subtitle: 'for All Skin',
      label: "'SURIKOMU' , 'MAZEKOMU'",
      features: language === 'JP' ? [
        '肌の気になるところに直接塗布',
        'お気に入りコスメに混ぜて使用',
      ] : [
        'Apply directly to areas of skin concern',
        'Mix into your favorite cosmetics',
      ],
      howToUse: language === 'JP' ? "直接 'SURIKOMU' または コスメに 'MAZEKOMU'" : "'SURIKOMU' directly or 'MAZEKOMU' into your current cosmetics.",
      howToUseLabel: language === 'JP' ? 'Confidenceの混ぜ方/使い方一覧' : 'Confidence Mixing & Usage Guide',
      howToUseUrl: 'https://mothervegetable.com/confidence-howto',
    },
    {
      id: 3,
      video: '/forever_video.mp4',
      title: 'Forever',
      subtitle: 'for Pet',
      label: "'MAZEKOMU'",
      features: language === 'JP' ? [
        'フードに混ぜて栄養48種を摂取',
        '大切なペットと永く健康に',
      ] : [
        'Mix into food for 48 essential nutrients',
        'Live a long, healthy life with your beloved pet',
      ],
      howToUse: language === 'JP' ? "ペットフードに1スティックを'MAZEKOMU'" : "Simply 'MAZEKOMU' one capsule into your pet's food.",
      howToUseLabel: language === 'JP' ? 'Foreverのペット種類別与え方一覧' : 'Forever Feeding Guide by Pet Type',
      howToUseUrl: 'https://mothervegetable.com/forever-howto',
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
                  <div className="mb-2 md:mt-6 md:mb-2">
                    <a
                      href={product.howToUseUrl || '#'}
                      className="text-green-400 font-semibold text-xs md:text-xl mb-1 hover:underline block text-center"
                    >
                      {product.howToUseLabel}
                    </a>
                  </div>

                </div>
              </div>

              {/* Purchase Button */}
              <div className="mt-4 md:mt-6 px-2 md:px-4 pb-1 md:pb-2">
                <a
                  href="#"
                  className="block w-full text-center py-2.5 md:py-3 bg-white text-black font-semibold text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors"
                >
                  {language === 'JP' ? '購入ページ' : 'Purchase'}
                </a>
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
