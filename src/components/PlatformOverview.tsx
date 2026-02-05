'use client'

import Image from 'next/image'

export default function PlatformOverview() {
  return (
    <section id="platform-overview" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-black/50 backdrop-blur-sm rounded-2xl p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-black/30 rounded-2xl"></div>
          <div className="relative">
            <Image
              src="/platform-overview.png"
              alt="Mother Vegetable Project Overview"
              width={1200}
              height={800}
              className="w-full h-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}