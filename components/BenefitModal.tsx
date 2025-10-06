'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface BenefitModalProps {
  isOpen: boolean
  onClose: () => void
  benefit: {
    number: number
    title: string
    subtitle: string
    description: string
  }
}

export default function BenefitModal({ isOpen, onClose, benefit }: BenefitModalProps) {
  // モーダル外クリックで閉じる
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // ESCキーで閉じる
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-lg p-8 max-w-4xl max-h-[90vh] overflow-y-auto mx-4 relative"
          >
            {/* 閉じるボタン */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
            >
              ×
            </button>

            {/* ヘッダー */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What this <span className="text-gray-500">guidebook</span><br />
                <span className="text-brand-red">Gives</span> you
              </h2>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-brand-red text-white rounded-full w-16 h-16 flex flex-col items-center justify-center font-bold">
                  <span className="text-xs">BENEFIT</span>
                  <span className="text-xl">{benefit.number}</span>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">
                    <span className="text-brand-red">{benefit.title.split(' ')[0]}</span>{' '}
                    {benefit.title.split(' ').slice(1).join(' ')}
                  </h3>
                  <p className="text-lg text-gray-700">{benefit.subtitle}</p>
                </div>
              </div>
            </div>

            {/* メインコンテンツエリア */}
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <div className="bg-white rounded p-4 mb-4">
                <h4 className="text-xl font-bold mb-2">100+ spots with the latest and most accurate info</h4>
                <div className="text-gray-400 text-sm mb-4">100+ spots with the latest and</div>
              </div>

              {/* カルーセルエリア */}
              <div className="relative w-full overflow-hidden bg-white rounded mb-4">
                <div className="carousel-wrapper-modal">
                  <div className="carousel-belt-modal">
                    {allImages.map((image, index) => (
                      <div key={index} className="carousel-item-modal">
                        <div className="relative h-48 rounded overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="200px"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  説明説明説明説明説明説明説明説明<br />
                  説明説明説明説明説明説明説明説明<br />
                  説明説明説明説明説明説明説明説明<br />
                  説明説明
                </p>
              </div>
            </div>

            {/* CTAボタン */}
            <div className="text-center">
              <p className="text-2xl font-bold mb-4">
                BUY NOW SAVE <span className="text-brand-red">$30</span>
              </p>
              <motion.a
                href="https://harukianimejournal.myshopify.com/products/the-ultimate-tokyo-anime-guide-1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-yellow text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-all duration-200 shadow-lg inline-block"
              >
                Get It Now
              </motion.a>
            </div>
          </motion.div>

          <style jsx>{`
            .carousel-wrapper-modal {
              display: flex;
              align-items: center;
              position: relative;
              width: 100%;
              height: 200px;
            }

            .carousel-belt-modal {
              display: flex;
              gap: 1rem;
              animation: scroll-modal 15s linear infinite;
              width: fit-content;
              padding: 1rem;
            }

            .carousel-item-modal {
              flex-shrink: 0;
              width: 180px;
            }

            @keyframes scroll-modal {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .carousel-belt-modal:hover {
              animation-play-state: paused;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}