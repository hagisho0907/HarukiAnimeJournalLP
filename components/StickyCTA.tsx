'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface StickyCTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonUrl: string
  price?: string
  hideAtSectionId?: string
  trackingId?: string
  onButtonClick?: () => void
}

export default function StickyCTA({
  title = "Ready to Get Started?",
  description = "Join thousands of satisfied customers today!",
  buttonText = "Get Started",
  buttonUrl,
  price = "$29.99",
  hideAtSectionId = "about-section",
  trackingId,
  onButtonClick
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(true)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const targetSectionRef = useRef<Element | null>(null)

  useEffect(() => {
    const findTargetSection = () => {
      const targetSection = document.getElementById(hideAtSectionId)
      if (targetSection) {
        targetSectionRef.current = targetSection
        setupObserver()
      } else {
        // Retry after a delay if section not found
        setTimeout(findTargetSection, 500)
      }
    }

    const setupObserver = () => {
      if (!targetSectionRef.current) return

      // Clean up existing observer
      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      // Create new observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Hide CTA when target section becomes visible
              setIsVisible(false)
            } else {
              // Show CTA when target section is not visible
              const rect = entry.boundingClientRect
              if (rect.top > 0) {
                // Target section is below viewport, show CTA
                setIsVisible(true)
              } else {
                // Target section is above viewport, hide CTA
                setIsVisible(false)
              }
            }
          })
        },
        {
          // Trigger when target section is almost completely visible
          rootMargin: '0px 0px -90% 0px',
          threshold: 0
        }
      )

      // Start observing
      observerRef.current.observe(targetSectionRef.current)
    }

    // Start the process
    findTargetSection()

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [hideAtSectionId])

  const handleClick = () => {
    // Facebook Pixel tracking (if tracking ID provided)
    if (trackingId && typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: parseFloat(price.replace('$', '')),
        currency: 'USD',
        content_type: 'product',
        content_ids: [trackingId]
      })
    }

    // Custom click handler
    if (onButtonClick) {
      onButtonClick()
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="sticky-cta"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-2 md:p-4 bg-gradient-to-t from-white via-white to-transparent"
        >
          <div className="container mx-auto max-w-2xl md:max-w-2xl">
            <div className="bg-white rounded-lg shadow-2xl p-2 md:p-6 border border-gray-100">
              <div className="flex flex-row items-center justify-between gap-2 md:gap-4">
                <div className="text-left flex-1">
                  <p className="text-sm md:text-xl font-bold text-gray-800 mb-0 md:mb-1 leading-tight">
                    {title}
                  </p>
                  <p className="text-xs md:text-base text-gray-600 leading-tight">
                    {description} {price && `for just ${price}!`}
                  </p>
                </div>
                <Link
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 md:py-3 md:px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex-shrink-0"
                  onClick={handleClick}
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

