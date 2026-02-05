'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function CarbonCreditDownloadPage() {
  const { t } = useLanguage()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'mvt123') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError(t({
        JP: 'パスワードが正しくありません',
        EN: 'Incorrect password'
      }))
    }
  }

  const handleDownload = () => {
    // ダウンロード処理をここに実装
    // 実際のファイルパスを指定してください
    const link = document.createElement('a')
    link.href = '/files/carbon-credit-calculation.pdf' // 実際のファイルパスに変更
    link.download = 'carbon-credit-calculation.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full">
        <div className="bg-gray-900/50 backdrop-blur-md border border-green-500/20 rounded-xl p-8">
          <Link
            href="/#project-overview"
            className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t({ JP: '戻る', EN: 'Back' })}
          </Link>

          {!isAuthenticated ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  {t({ JP: 'パスワード', EN: 'Password' })}
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={t({ JP: 'パスワードを入力', EN: 'Enter password' })}
                  required
                />
                {error && (
                  <p className="mt-2 text-sm text-red-400">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t({ JP: 'ダウンロード', EN: 'Download' })}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <button
                  onClick={handleDownload}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {t({ JP: 'ダウンロード', EN: 'Download' })}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
