'use client'
import { motion } from 'framer-motion'
import CardCarousel from './CardCarousel'

export default function LimitedSection() {
  return (
    <>
      {/* Limited Sale Part */}
      <section className="bg-brand-red py-8 lg:py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl italic text-white mb-4" style={{ fontFamily: 'Kalam, cursive' }}>
              Limited
            </h2>
            <h2 className="text-6xl lg:text-8xl font-bold text-white mb-6 tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>
              SALE
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              SAVE UP TO $30!
            </h3>
            <p className="text-lg text-white/90">
              *This offer may end without prior notice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Summary Part */}
      <section className="bg-brand-red py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
            {/* Left - Card Carousel */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center items-center relative lg:pr-12 w-full lg:w-auto"
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
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
              
              <motion.a
                href="https://harukianimejournal.myshopify.com/products/the-ultimate-tokyo-anime-guide-1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-yellow text-black font-bold py-4 px-12 rounded-lg text-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg inline-block"
              >
                Get It Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}