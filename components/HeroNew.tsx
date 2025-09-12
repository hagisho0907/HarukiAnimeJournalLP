'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroNew() {
  return (
    <section className="bg-brand-cream min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-7xl">
        {/* Header Text */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-red text-3xl sm:text-4xl md:text-hero-title font-normal mb-4 px-2 font-league-spartan"
          >
            Haruki Anime Journal
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-gold text-3xl sm:text-4xl md:text-6xl lg:text-hero-subtitle font-extrabold uppercase leading-tight px-2 font-bebas-neue"
          >
            THE ULTIMATE TOKYO ANIME GUIDE
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 text-lg md:text-xl mt-4 px-2"
          >
            Chosen by 300+ Local Otaku
          </motion.p>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Phone Mockups */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center relative w-full lg:w-auto"
          >
            {/* Mobile: Single centered phone, Desktop: 3 phones */}
            <div className="relative w-full max-w-[300px] h-[300px] sm:w-[400px] sm:h-[350px] lg:w-[600px] lg:h-[400px]">
              {/* Mobile: Show only center phone */}
              <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-0">
                <div className="bg-gray-300 rounded-lg w-[200px] h-[300px] shadow-2xl flex items-center justify-center">
                  <p className="text-gray-600 text-center p-4 text-sm">Ultimate Tokyo Anime Guide Cover</p>
                </div>
              </div>
              
              {/* Desktop: Show all 3 phones */}
              <div className="hidden lg:block">
                {/* Left Phone */}
                <div className="absolute left-0 top-10 transform -rotate-6 z-10">
                  <div className="bg-gray-300 rounded-lg w-[180px] h-[360px] shadow-2xl flex items-center justify-center">
                    <p className="text-gray-600 text-center p-4">Tokyo Train Map Mockup</p>
                  </div>
                </div>
                
                {/* Center Phone */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gray-300 rounded-lg w-[200px] h-[400px] shadow-2xl flex items-center justify-center">
                    <p className="text-gray-600 text-center p-4">Ultimate Tokyo Anime Guide Cover</p>
                  </div>
                </div>
                
                {/* Right Phone */}
                <div className="absolute right-0 top-10 transform rotate-6 z-10">
                  <div className="bg-gray-300 rounded-lg w-[180px] h-[360px] shadow-2xl flex items-center justify-center">
                    <p className="text-gray-600 text-center p-4">Shibuya & Harajuku Guide</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Buy Now Box - Positioned below phones on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center max-w-md mx-auto w-full lg:w-auto lg:mx-0"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              BUY NOW,<br />SAVE <span className="text-brand-red">$30</span>
            </h3>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              Limited-Time Campaign to Celebrate the<br className="hidden sm:block" />
              Launch of the ULTIMATE TOKYO ANIME<br className="hidden sm:block" />
              GUIDES!
            </p>
            
            <div className="mb-6">
              <span className="text-3xl md:text-4xl text-gray-500 line-through">$59</span>
              <span className="text-3xl md:text-4xl mx-2">→</span>
              <span className="text-4xl md:text-5xl font-bold text-brand-red">$29</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-yellow text-black font-bold py-4 px-8 md:px-12 rounded-lg text-lg md:text-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg w-full"
            >
              Get It Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}