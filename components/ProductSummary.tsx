'use client'
import { motion } from 'framer-motion'
import CardCarousel from './CardCarousel'

export default function ProductSummary() {
  return (
    <section className="bg-brand-red py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          {/* Left - Card Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center relative pr-8 lg:pr-12"
          >
            <CardCarousel variant="red-background" />
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