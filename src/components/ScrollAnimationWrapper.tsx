'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'slideUp'
  delay?: number
  duration?: number
  threshold?: number
}

export default function ScrollAnimationWrapper({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.1
}: ScrollAnimationWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set initial styles based on animation type
    const setInitialStyles = () => {
      element.style.transition = `all ${duration}s ease-out ${delay}s`
      element.style.opacity = '0'

      switch (animation) {
        case 'fadeInUp':
          element.style.transform = 'translateY(30px)'
          break
        case 'fadeInDown':
          element.style.transform = 'translateY(-30px)'
          break
        case 'fadeInLeft':
          element.style.transform = 'translateX(30px)'
          break
        case 'fadeInRight':
          element.style.transform = 'translateX(-30px)'
          break
        case 'zoomIn':
          element.style.transform = 'scale(0.9)'
          break
        case 'slideUp':
          element.style.transform = 'translateY(50px)'
          break
        default:
          break
      }
    }

    // Apply animation when element is in viewport
    const applyAnimation = () => {
      element.style.opacity = '1'
      element.style.transform = 'translate(0) scale(1)'
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            applyAnimation()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '50px' }
    )

    // Initialize
    setInitialStyles()
    observer.observe(element)

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [animation, delay, duration, threshold])

  return (
    <div ref={elementRef}>
      {children}
    </div>
  )
}