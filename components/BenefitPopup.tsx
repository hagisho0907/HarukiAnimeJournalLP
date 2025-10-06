'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

interface BenefitPopupProps {
  isOpen: boolean
  onClose: () => void
  benefit: {
    number: number
    title: string
    subtitle: string
    description: string
  }
}

export default function BenefitPopup({ isOpen, onClose, benefit }: BenefitPopupProps) {
  // 3秒後に自動で閉じる
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  // ESCキーで閉じる
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  // ダミー画像データ
  const carouselImages = [
    { src: '/images/top/1.PNG', alt: 'Guide Page 1' },
    { src: '/images/top/2.PNG', alt: 'Guide Page 2' },
    { src: '/images/top/3.PNG', alt: 'Guide Page 3' },
    { src: '/images/top/4.PNG', alt: 'Guide Page 4' },
    { src: '/images/top/5.PNG', alt: 'Guide Page 5' },
    { src: '/images/top/6.PNG', alt: 'Guide Page 6' },
    { src: '/images/top/7.PNG', alt: 'Guide Page 7' }
  ]

  const allImages = [...carouselImages, ...carouselImages]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-2xl p-3 md:p-6 max-w-sm md:max-w-2xl mx-4 relative border pointer-events-auto"
          >
            {/* ヘッダー */}
            <div className="text-center mb-3 md:mb-6">
              <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-4">
                What this <span className="text-gray-500">guidebook</span><br />
                <span className="text-brand-red">Gives</span> you
              </h2>
              
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="bg-brand-red text-white rounded-full w-10 h-10 md:w-14 md:h-14 flex flex-col items-center justify-center font-bold">
                  <span className="text-xs">BENEFIT</span>
                  <span className="text-sm md:text-lg">{benefit.number}</span>
                </div>
                <div className="text-left">
                  <h3 className="text-sm md:text-xl font-bold">
                    <span className="text-brand-red">{benefit.title.split(' ')[0]}</span>{' '}
                    {benefit.title.split(' ').slice(1).join(' ')}
                  </h3>
                  <p className="text-xs md:text-base text-gray-700">{benefit.subtitle}</p>
                </div>
              </div>
            </div>

            {/* メインコンテンツエリア */}
            <div className="bg-gray-100 rounded-lg p-2 md:p-4 mb-2 md:mb-4">
              <div className="bg-white rounded p-2 md:p-3 mb-2 md:mb-3">
                <h4 className="text-sm md:text-base font-bold mb-1 md:mb-2">{benefit.title}</h4>
                <div className="text-gray-600 text-xs md:text-sm mb-1 md:mb-2">{benefit.subtitle}</div>
              </div>

              {/* カルーセルエリア */}
              <div className="relative w-full overflow-hidden bg-white rounded mb-2 md:mb-3">
                <div className="carousel-wrapper-popup">
                  <div className="carousel-belt-popup">
                    {allImages.map((image, index) => (
                      <div key={index} className="carousel-item-popup">
                        <div className="relative h-20 md:h-32 rounded overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80px, 150px"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded p-2 md:p-3">
                <p className="text-xs md:text-sm text-gray-700">
                  {benefit.description}
                </p>
              </div>
            </div>

            {/* 自動閉じるインジケーター */}
            <div className="absolute top-2 right-2">
              <div className="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-brand-red"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>

          <style jsx>{`
            .carousel-wrapper-popup {
              display: flex;
              align-items: center;
              position: relative;
              width: 100%;
              height: 90px;
            }

            @media (min-width: 768px) {
              .carousel-wrapper-popup {
                height: 140px;
              }
            }

            .carousel-belt-popup {
              display: flex;
              gap: 0.5rem;
              animation: scroll-popup 12s linear infinite;
              width: fit-content;
              padding: 0.25rem;
            }

            @media (min-width: 768px) {
              .carousel-belt-popup {
                gap: 0.75rem;
                padding: 0.5rem;
              }
            }

            .carousel-item-popup {
              flex-shrink: 0;
              width: 80px;
            }

            @media (min-width: 768px) {
              .carousel-item-popup {
                width: 120px;
              }
            }

            @keyframes scroll-popup {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .carousel-belt-popup:hover {
              animation-play-state: paused;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}