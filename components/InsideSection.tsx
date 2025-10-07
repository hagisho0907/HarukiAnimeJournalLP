'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import BenefitPopup from './BenefitPopup'

export default function InsideSection() {
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null)
  
  const features = [
    {
      number: 1,
      title: "100+ Trusted spots",
      subtitle: "from real Japanese otaku",
      description: "Get access to over 100 carefully curated anime locations that only real Japanese otaku know about. These aren't your typical tourist spots - they're the hidden gems where locals actually go to experience authentic anime culture. From rare figure shops in back alleys to themed cafes off the beaten path, discover the real Tokyo anime scene that guidebooks never mention.",
      icon: "📍"
    },
    {
      number: 2,
      title: "Never get lost!",
      subtitle: "A Google Maps Link List",
      description: "Every single location comes with a direct Google Maps link, so you'll never waste time trying to find places or getting lost in Tokyo's maze-like streets. Simply click the link and let your phone guide you directly to each spot. No more fumbling with addresses or trying to translate location names - just seamless navigation to every anime destination.",
      icon: "🗺️"
    },
    {
      number: 3,
      title: "No tour guide needed!",
      subtitle: "Ready to use Tour Courses",
      description: "Follow our pre-planned anime tour routes that group nearby locations for maximum efficiency. Each course is designed to save you time and transportation costs while ensuring you don't miss any must-see spots in each area. Whether you have 4 hours or a full day, we've created the perfect itineraries for every schedule.",
      icon: "🚶"
    }
  ]

  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold text-center mb-16 text-gray-800"
        >
          Let&apos;s See<br />
          What&apos;s Inside...
        </motion.h2>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <motion.div 
                className="flex items-center justify-start gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.3 + 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-brand-red text-white rounded-full w-20 h-20 flex flex-col items-center justify-center font-bold flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.3 + 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs">BENEFIT</span>
                  <span className="text-2xl">{feature.number}</span>
                </motion.div>
                <motion.div 
                  className="text-left"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.3 + 0.4,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {feature.number === 1 ? (
                      <span className="text-brand-red">{feature.title}</span>
                    ) : feature.number === 2 ? (
                      <>
                        <span className="text-gray-800">Never get lost!</span>
                      </>
                    ) : feature.number === 3 ? (
                      <>
                        <span className="text-gray-800">No tour guide needed!</span>
                      </>
                    ) : (
                      feature.title
                    )}
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold">
                    {feature.number === 2 ? (
                      <>
                        <span className="text-gray-800">A Google Maps</span> <span className="text-brand-red">Link List</span>
                      </>
                    ) : feature.number === 3 ? (
                      <>
                        <span className="text-gray-800">Ready to use</span> <span className="text-brand-red">Tour Courses</span>
                      </>
                    ) : (
                      <span className="text-gray-800">{feature.subtitle}</span>
                    )}
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Image Placeholder Grid */}
              <motion.div 
                className="flex justify-center mb-8 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.3 + 0.6,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setSelectedBenefit(feature.number)}
                onTouchStart={() => setSelectedBenefit(feature.number)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  {/* Background cards */}
                  <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                    <div className="bg-gray-200 rounded-lg h-32 w-32 flex items-center justify-center border-2 border-gray-300 hover:bg-gray-300 transition-colors">
                      <span className="text-gray-500 text-sm">画像</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-32 w-32 flex items-center justify-center border-2 border-gray-300 hover:bg-gray-300 transition-colors">
                      <span className="text-gray-500 text-sm">画像</span>
                    </div>
                  </div>
                  
                  {/* Center overlapping cards */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 rounded-lg h-32 w-32 flex items-center justify-center border-2 border-gray-300 shadow-lg hover:bg-gray-300 transition-colors">
                      <span className="text-gray-500 text-sm">画像</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-32 w-32 flex items-center justify-center border-2 border-gray-300 shadow-lg hover:bg-gray-300 transition-colors">
                      <span className="text-gray-500 text-sm">画像</span>
                    </div>
                  </div>
                  
                  {/* Center front card */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-200 rounded-lg h-32 w-32 flex items-center justify-center border-2 border-gray-300 shadow-xl hover:bg-gray-300 transition-colors">
                      <span className="text-gray-500 text-sm">画像</span>
                    </div>
                  </div>
                  
                  {/* ホバーヒント */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-70">
                    Click to see details
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* ポップアップ */}
      {selectedBenefit && (
        <BenefitPopup
          isOpen={selectedBenefit !== null}
          onClose={() => setSelectedBenefit(null)}
          benefit={features.find(f => f.number === selectedBenefit)!}
        />
      )}
    </section>
  )
}