'use client'

import { useState } from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'general',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        category: 'general',
        message: ''
      })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black to-emerald-900/20">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-4">
            お問い合わせ
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            プロジェクトに関するご質問、導入のご相談、投資のお問い合わせなど、
            お気軽にお問い合わせください。専門スタッフが迅速に対応いたします。
          </p>
        </ScrollAnimationWrapper>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimationWrapper animation="fadeInLeft" delay={0.2}>
              <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-8">
                <h3 className="text-xl font-bold text-emerald-400 mb-6">お問い合わせフォーム</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">お名前 *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">会社名</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50"
                        placeholder="株式会社〇〇"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">メールアドレス *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">電話番号</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50"
                        placeholder="090-1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm mb-2">お問い合わせ種別 *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-500/50"
                    >
                      <option value="general">一般的なお問い合わせ</option>
                      <option value="business">導入・ビジネスに関して</option>
                      <option value="investment">投資・出資に関して</option>
                      <option value="partnership">パートナーシップに関して</option>
                      <option value="media">メディア取材に関して</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm mb-2">お問い合わせ内容 *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 bg-black/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">* 必須項目</p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                      }`}
                    >
                      {isSubmitting ? '送信中...' : '送信する'}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-400 text-sm">
                      お問い合わせありがとうございます。内容を確認次第、ご連絡させていただきます。
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                      送信に失敗しました。もう一度お試しください。
                    </div>
                  )}
                </form>
              </div>
            </ScrollAnimationWrapper>

            {/* Contact Information */}
            <ScrollAnimationWrapper animation="fadeInRight" delay={0.3}>
              <div className="space-y-8">
                {/* Company Info */}
                <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">会社情報</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-gray-500 text-sm">会社名</dt>
                      <dd className="text-white">MOTHER VEGETABLE PROJECT株式会社</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500 text-sm">所在地</dt>
                      <dd className="text-white">〒105-6920<br />東京都港区虎ノ門1-23-45 虎ノ門ヒルズビル 20F</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500 text-sm">設立</dt>
                      <dd className="text-white">2023年4月</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500 text-sm">資本金</dt>
                      <dd className="text-white">5億円（資本準備金含む）</dd>
                    </div>
                  </dl>
                </div>

                {/* Contact Methods */}
                <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">連絡先</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="text-gray-500 text-sm">メール</div>
                        <a href="mailto:info@mothervegetables.com" className="text-white hover:text-emerald-400 transition-colors">
                          info@mothervegetables.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="text-gray-500 text-sm">電話</div>
                        <a href="tel:+81312345678" className="text-white hover:text-emerald-400 transition-colors">
                          03-1234-5678
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="text-gray-500 text-sm">営業時間</div>
                        <div className="text-white">平日 9:00 - 18:00</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-emerald-400 mb-3">資料ダウンロード</h3>
                  <div className="space-y-2">
                    <a href="/0912_whitepaper_ja.pdf" className="flex items-center justify-between text-white hover:text-emerald-400 transition-colors p-2 rounded hover:bg-white/5">
                      <span>📄 ホワイトペーパー</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                    <a href="#" className="flex items-center justify-between text-white hover:text-emerald-400 transition-colors p-2 rounded hover:bg-white/5">
                      <span>📊 会社案内</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}