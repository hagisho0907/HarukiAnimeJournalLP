'use client'
import { motion } from 'framer-motion'

export default function ProductSummary() {
  return (
    <section className="bg-brand-red py-16 lg:py-24">
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
            <div className="relative w-[600px] h-[400px]">
              {/* Left Phone */}
              <div className="absolute left-0 top-10 transform -rotate-6 z-10">
                <div className="bg-gray-300 rounded-lg w-[180px] h-[360px] shadow-2xl flex items-center justify-center">
                  <p className="text-gray-600 text-center p-4">Tokyo Train Map</p>
                </div>
              </div>
              
              {/* Center Phone */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gray-300 rounded-lg w-[200px] h-[400px] shadow-2xl flex items-center justify-center">
                  <p className="text-gray-600 text-center p-4">Ultimate Tokyo Anime Guide</p>
                </div>
              </div>
              
              {/* Right Phone */}
              <div className="absolute right-0 top-10 transform rotate-6 z-10">
                <div className="bg-gray-300 rounded-lg w-[180px] h-[360px] shadow-2xl flex items-center justify-center">
                  <p className="text-gray-600 text-center p-4">Shibuya & Harajuku Guide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Ultimate Tokyo<br />
              Anime guide
            </h2>
            
            <p className="text-lg mb-8 max-w-md">
              Get The Complete Tokyo Handbook and kickstart an unforgettable adventure in the vibrant city today!
            </p>
            
            <div className="mb-8">
              <span className="text-4xl line-through opacity-80">$59</span>
              <span className="text-4xl mx-4">→</span>
              <span className="text-5xl font-bold">$29</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-yellow text-black font-bold py-4 px-12 rounded-lg text-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg"
            >
              Get It Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}