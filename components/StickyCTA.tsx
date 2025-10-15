'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { trackEvent } from '@/utils/trackEvent'

interface StickyCTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonUrl: string
  price?: string
  hideAtSectionId?: string
  trackingId?: string
  onButtonClick?: () => void
  alternateContent?: {
    title: string
    description: string
    buttonText: string
  }
  alternateStartSection?: string
}

export default function StickyCTA({
  title = "Get the Real Tokyo Anime Experience",
  description = "",
  buttonText = "Get the Real Tokyo Anime Experience",
  buttonUrl,
  price = "$29",
  hideAtSectionId = "contact",
  trackingId,
  onButtonClick,
  alternateContent,
  alternateStartSection = "faq"
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [showAlternate, setShowAlternate] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const alternateObserverRef = useRef<IntersectionObserver | null>(null)
  const targetSectionRef = useRef<Element | null>(null)
  const alternateSectionRef = useRef<Element | null>(null)

  useEffect(() => {
    const findTargetSection = () => {
      const targetSection = document.getElementById(hideAtSectionId)
      const alternateSection = document.getElementById(alternateStartSection)
      
      if (targetSection) {
        targetSectionRef.current = targetSection
        setupObserver()
      }
      
      if (alternateSection && alternateContent) {
        alternateSectionRef.current = alternateSection
        setupAlternateObserver()
      }
      
      if (!targetSection || (!alternateSection && alternateContent)) {
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
          // Trigger when target section starts entering viewport
          rootMargin: '0px 0px -50% 0px',
          threshold: 0
        }
      )

      // Start observing
      observerRef.current.observe(targetSectionRef.current)
    }

    const setupAlternateObserver = () => {
      if (!alternateSectionRef.current || !alternateContent) return

      // Clean up existing observer
      if (alternateObserverRef.current) {
        alternateObserverRef.current.disconnect()
      }

      // Create new observer for alternate section
      alternateObserverRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShowAlternate(true)
            } else {
              const rect = entry.boundingClientRect
              if (rect.top > 0) {
                // Section is below viewport
                setShowAlternate(false)
              }
            }
          })
        },
        {
          rootMargin: '0px',
          threshold: 0
        }
      )

      // Start observing
      alternateObserverRef.current.observe(alternateSectionRef.current)
    }

    // Start the process
    findTargetSection()

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      if (alternateObserverRef.current) {
        alternateObserverRef.current.disconnect()
      }
    }
  }, [hideAtSectionId, alternateStartSection, alternateContent])

  const handleClick = () => {
    // Facebook Pixel tracking (if tracking ID provided)
    if (trackingId) {
      trackEvent('InitiateCheckout', {
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

  const currentContent = showAlternate && alternateContent ? alternateContent : { title, description, buttonText }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="sticky-cta"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl">
            {showAlternate && alternateContent ? (
              // Alternate design for FAQ and below
              <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 border-4 border-red-600">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                    {currentContent.title}
                  </h3>
                  <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                    {currentContent.description}
                  </p>
                  <Link
                    href={buttonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={handleClick}
                  >
                    {currentContent.buttonText}
                  </Link>
                </div>
              </div>
            ) : (
              // Simple design for initial sections
              <div className="flex justify-center">
                <Link
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  onClick={handleClick}
                >
                  {currentContent.buttonText}
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}