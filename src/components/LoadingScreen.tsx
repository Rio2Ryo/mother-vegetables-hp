'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
            <div
              className="absolute inset-0 border-4 border-emerald-500 rounded-full animate-spin"
              style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-emerald-400 font-bold text-2xl">MV</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-emerald-400 text-2xl font-bold mb-2 animate-pulse">
          MOTHER VEGETABLE
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Earth Regeneration Project Initializing...
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-emerald-400 text-sm mt-2">{progress}%</p>
        </div>

        {/* Loading Text Animation */}
        <div className="mt-6 text-gray-500 text-xs">
          <span className="inline-block animate-bounce" style={{ animationDelay: '0ms' }}>I</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '100ms' }}>n</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '200ms' }}>i</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '300ms' }}>t</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '400ms' }}>i</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '500ms' }}>a</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '600ms' }}>l</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '700ms' }}>i</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '800ms' }}>z</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '900ms' }}>i</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '1000ms' }}>n</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '1100ms' }}>g</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '1200ms' }}>.</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '1300ms' }}>.</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '1400ms' }}>.</span>
        </div>
      </div>
    </div>
  )
}