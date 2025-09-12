'use client'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section className="bg-brand-cream py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Email Address
              </h3>
              <p className="text-gray-600 text-lg">
                info@animejournal.jp
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Phone Number
              </h3>
              <p className="text-gray-600 text-lg">
                080-6617-6604
              </p>
            </div>
          </motion.div>

          {/* Right - Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Follow me:
            </h3>
            
            <div className="flex gap-4">
              <a href="#" className="text-3xl text-red-500 hover:scale-110 transition-transform">
                📷
              </a>
              <a href="#" className="text-3xl text-black hover:scale-110 transition-transform">
                🎵
              </a>
              <a href="#" className="text-3xl text-red-600 hover:scale-110 transition-transform">
                📺
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-300"
        >
          <p className="text-gray-600">
            特定商取引法に基づく表記
          </p>
        </motion.div>
      </div>
    </section>
  )
}