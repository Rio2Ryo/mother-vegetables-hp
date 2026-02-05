'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('November 11, 2025 11:00:00 UTC')
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0').split('')
  }

  return (
    <div className="mb-8">
      <div className="text-center mb-4">
        <h2 className="text-white text-sm md:text-base font-medium">
          2025年11月11日20時までまで
        </h2>
      </div>
      <div className="flex justify-center gap-2 md:gap-3">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            {formatNumber(timeLeft.days).map((digit, index) => (
              <div
                key={`day-${index}`}
                className="bg-gradient-to-b from-[#7ec97c] to-[#5cb85c] rounded-lg w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  {digit}
                </span>
              </div>
            ))}
          </div>
          <span className="text-white text-xs md:text-sm mt-2">日</span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            {formatNumber(timeLeft.hours).map((digit, index) => (
              <div
                key={`hour-${index}`}
                className="bg-gradient-to-b from-[#7ec97c] to-[#5cb85c] rounded-lg w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  {digit}
                </span>
              </div>
            ))}
          </div>
          <span className="text-white text-xs md:text-sm mt-2">時間</span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            {formatNumber(timeLeft.minutes).map((digit, index) => (
              <div
                key={`minute-${index}`}
                className="bg-gradient-to-b from-[#7ec97c] to-[#5cb85c] rounded-lg w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  {digit}
                </span>
              </div>
            ))}
          </div>
          <span className="text-white text-xs md:text-sm mt-2">分</span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            {formatNumber(timeLeft.seconds).map((digit, index) => (
              <div
                key={`second-${index}`}
                className="bg-gradient-to-b from-[#7ec97c] to-[#5cb85c] rounded-lg w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  {digit}
                </span>
              </div>
            ))}
          </div>
          <span className="text-white text-xs md:text-sm mt-2">秒</span>
        </div>
      </div>
    </div>
  )
}
