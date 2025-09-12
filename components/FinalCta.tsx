'use client'
import { motion } from 'framer-motion'

export default function FinalCta() {
  return (
    <section className="bg-brand-cream py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left - Phone Mockups */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center relative"
          >
            <div className="relative w-[500px] h-[300px]">
              {/* Left Phone */}
              <div className="absolute left-0 top-10 transform -rotate-12 z-10">
                <div className="bg-gray-300 rounded-lg w-[140px] h-[280px] shadow-2xl flex items-center justify-center">
                  <p className="text-gray-600 text-center p-2 text-xs">Tokyo Map Contents</p>
                </div>
              </div>
              
              {/* Center Phone */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gray-300 rounded-lg w-[160px] h-[320px] shadow-2xl flex items-center justify-center">
                  <p className="text-gray-600 text-center p-2 text-xs">Ultimate Tokyo Anime Guide</p>
                </div>
              </div>
              
              {/* Right Phone */}
              <div className="absolute right-0 top-10 transform rotate-12 z-10">
                <div className="bg-gray-300 rounded-lg w-[140px] h-[280px] shadow-2xl flex items-center justify-center">
                  <p className="text-gray-600 text-center p-2 text-xs">Harajuku Shibuya Guide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Pricing and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="mb-8">
              <span className="text-4xl text-gray-500 line-through">$59</span>
              <span className="text-4xl mx-4 text-gray-700">→</span>
              <span className="text-5xl font-bold text-brand-red">$29</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-yellow text-black font-bold py-6 px-16 rounded-lg text-2xl hover:bg-yellow-400 transition-all duration-200 shadow-lg"
            >
              Get It Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}