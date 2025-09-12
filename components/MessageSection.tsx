'use client'
import { motion } from 'framer-motion'

export default function MessageSection() {
  return (
    <>
      {/* Message from Haruki - Red Background */}
      <section className="bg-brand-red py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
              Message from Haruki
            </h2>
            
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              I genuinely hope that your time in Japan becomes a special and unforgettable experience. It&apos;s my wish that this guidebook helps make that happen for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Let's Dive Into Section - Cream Background */}
      <section className="bg-brand-cream py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Left - Phone Mockups */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center items-center relative order-2 lg:order-1"
            >
              <div className="relative w-full max-w-[500px] h-[300px] lg:w-[600px] lg:h-[400px]">
                {/* Mobile: Single phone */}
                <div className="lg:hidden flex justify-center">
                  <div className="bg-gray-300 rounded-lg w-48 h-96 shadow-xl flex items-center justify-center">
                    <p className="text-gray-600 text-center p-4">Ultimate Tokyo Anime Guide</p>
                  </div>
                </div>
                
                {/* Desktop: 3 phones */}
                <div className="hidden lg:block">
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
                      <p className="text-gray-600 text-center p-4">Shibuya & Harajuku</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gold mb-6 leading-tight">
                Let&apos;s Dive Into Japan&apos;s Hidden Gems
              </h2>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  The Ultimate Tokyo<br />
                  Anime Guide
                </h3>
                
                <p className="text-gray-700 text-base md:text-lg">
                  Get <span className="font-bold">The Ultimate Tokyo Anime Guide</span><br />
                  and kickstart an unforgettable adventure<br />
                  across Japan&apos;s most vibrant cities today!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}